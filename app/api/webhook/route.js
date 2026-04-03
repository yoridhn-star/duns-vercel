import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);
const RENDER_API_URL = process.env.RENDER_API_URL;
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

// Needed for Stripe signature verification — must read raw body
export const dynamic = "force-dynamic";

// ── Email translations (same as lookup-duns) ─────────────────────────────────

const emailTranslations = {
  fr: {
    subject: (company) => `Votre numéro D-U-N-S — ${company}`,
    title: "Votre numéro D-U-N-S",
    greeting: "Bonjour,",
    intro: "Voici le résultat de votre recherche D-U-N-S\u00ae\u00a0:",
    companyLabel: "Entreprise",
    dunsLabel: "Numéro D-U-N-S\u00ae",
    addressLabel: "Adresse",
    footer: "Merci d\u2019avoir utilisé DUNS Verify.",
    cta: "Faire une nouvelle recherche",
  },
  en: {
    subject: (company) => `Your D-U-N-S Number — ${company}`,
    title: "Your D-U-N-S Number",
    greeting: "Hello,",
    intro: "Here are the results of your D-U-N-S\u00ae lookup:",
    companyLabel: "Company",
    dunsLabel: "D-U-N-S\u00ae Number",
    addressLabel: "Address",
    footer: "Thank you for using DUNS Verify.",
    cta: "Start a new search",
  },
  de: {
    subject: (company) => `Ihre D-U-N-S-Nummer — ${company}`,
    title: "Ihre D-U-N-S-Nummer",
    greeting: "Hallo,",
    intro: "Hier ist das Ergebnis Ihrer D-U-N-S\u00ae-Suche:",
    companyLabel: "Unternehmen",
    dunsLabel: "D-U-N-S\u00ae-Nummer",
    addressLabel: "Adresse",
    footer: "Vielen Dank für die Nutzung von DUNS Verify.",
    cta: "Neue Suche starten",
  },
  es: {
    subject: (company) => `Su número D-U-N-S — ${company}`,
    title: "Su número D-U-N-S",
    greeting: "Hola,",
    intro: "Aquí está el resultado de su búsqueda D-U-N-S\u00ae:",
    companyLabel: "Empresa",
    dunsLabel: "Número D-U-N-S\u00ae",
    addressLabel: "Dirección",
    footer: "Gracias por utilizar DUNS Verify.",
    cta: "Iniciar una nueva búsqueda",
  },
  it: {
    subject: (company) => `Il tuo numero D-U-N-S — ${company}`,
    title: "Il tuo numero D-U-N-S",
    greeting: "Salve,",
    intro: "Ecco il risultato della tua ricerca D-U-N-S\u00ae:",
    companyLabel: "Azienda",
    dunsLabel: "Numero D-U-N-S\u00ae",
    addressLabel: "Indirizzo",
    footer: "Grazie per aver utilizzato DUNS Verify.",
    cta: "Avvia una nuova ricerca",
  },
};

export async function POST(request) {
  if (!WEBHOOK_SECRET) {
    console.error("[webhook] STRIPE_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  const sig = request.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  // Read raw body for signature verification
  const rawBody = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, WEBHOOK_SECRET);
  } catch (err) {
    console.error("[webhook] Signature verification failed:", err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Only handle checkout.session.completed
  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object;

  if (session.payment_status !== "paid") {
    return NextResponse.json({ received: true });
  }

  const { companyName, city, country, email, lang } = session.metadata || {};

  if (!companyName) {
    console.error("[webhook] Missing companyName in session metadata", session.id);
    return NextResponse.json({ received: true });
  }

  console.log(`[webhook] Processing session ${session.id} — company: ${companyName}, lang: ${lang}`);

  // ── Call DUNS lookup ──────────────────────────────────────────────────────
  let dunsData = null;

  if (RENDER_API_URL) {
    try {
      const target = `${RENDER_API_URL.replace(/\/$/, "")}/api/lookup-duns`;
      const upstream = await fetch(target, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName, country }),
        signal: AbortSignal.timeout(180_000),
      });
      dunsData = await upstream.json();
      console.log(`[webhook] DUNS lookup result: success=${dunsData?.success}`);
    } catch (err) {
      console.error("[webhook] DUNS lookup failed:", err.message);
    }
  }

  // ── Send email ────────────────────────────────────────────────────────────
  const customerEmail = email?.trim() || session.customer_email?.trim();

  if (dunsData?.success && dunsData?.data && customerEmail) {
    const resolvedLang = emailTranslations[lang] ? lang : "fr";
    const tr = emailTranslations[resolvedLang];
    try {
      const htmlEmail = buildEmailHtml(dunsData.data, companyName, tr, resolvedLang);
      await resend.emails.send({
        from: "DUNS Verify <noreply@dunsverify.com>",
        to: customerEmail,
        subject: tr.subject(escapeHtml(dunsData.data.companyName || companyName)),
        html: htmlEmail,
      });
      console.log(`[webhook] Email sent to ${customerEmail}`);
    } catch (mailErr) {
      console.error("[webhook] Email send failed:", mailErr.message);
    }
  }

  return NextResponse.json({ received: true });
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDuns(raw) {
  const digits = String(raw).replace(/\D/g, "");
  if (digits.length === 9) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  return raw;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(result, companyName, tr, lang) {
  const name    = escapeHtml(result.companyName || companyName);
  const duns    = result.dunsNumber ? formatDuns(result.dunsNumber) : "—";
  const address = escapeHtml(result.address || "");
  const year    = new Date().getFullYear();
  const ctaUrl  = `https://dunsverify.com/${lang}`;

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(tr.title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#F8FAFC;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F8FAFC;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background-color:#1E3A5F;border-radius:16px 16px 0 0;padding:28px 20px;text-align:center;">
              <table cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
                <tr>
                  <td style="padding-right:10px;vertical-align:middle;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:36px;height:36px;background-color:#10B981;border-radius:50%;text-align:center;vertical-align:middle;line-height:36px;">
                          <span style="color:#ffffff;font-size:20px;font-weight:700;line-height:36px;">&#10003;</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="vertical-align:middle;">
                    <span style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">DUNS</span>
                    <span style="font-size:22px;font-weight:300;color:#93C5FD;letter-spacing:-0.5px;"> Verify</span>
                  </td>
                </tr>
              </table>
              <div style="margin-top:14px;font-size:13px;color:#93C5FD;letter-spacing:0.5px;">${escapeHtml(tr.title)}</div>
            </td>
          </tr>
          <tr>
            <td style="background-color:#F8FAFC;padding:24px 20px 20px;">
              <p style="margin:0 0 8px;font-size:16px;color:#1E3A5F;font-weight:600;">${escapeHtml(tr.greeting)}</p>
              <p style="margin:0 0 32px;font-size:15px;color:#475569;line-height:1.7;">${escapeHtml(tr.intro)}</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#ffffff;border-radius:12px;border-left:4px solid #10B981;box-shadow:0 2px 12px rgba(0,0,0,0.07);margin-bottom:32px;">
                <tr>
                  <td style="padding:16px;">
                    <div style="font-size:11px;font-weight:700;color:#10B981;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:4px;">${escapeHtml(tr.companyLabel)}</div>
                    <div style="font-size:18px;font-weight:700;color:#1E3A5F;margin-bottom:24px;">${name}</div>
                    <div style="font-size:11px;font-weight:700;color:#10B981;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:10px;">${escapeHtml(tr.dunsLabel)}</div>
                    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                      <tr>
                        <td style="background-color:#ECFDF5;border:1px solid #A7F3D0;border-radius:10px;padding:12px 16px;">
                          <span style="font-family:'Courier New',Courier,monospace;font-size:20px;font-weight:800;color:#065F46;letter-spacing:2px;white-space:nowrap;">${escapeHtml(duns)}</span>
                        </td>
                      </tr>
                    </table>
                    ${address ? `<div style="font-size:11px;font-weight:700;color:#10B981;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:6px;">${escapeHtml(tr.addressLabel)}</div>
                    <div style="font-size:14px;color:#475569;line-height:1.6;">${address}</div>` : ""}
                  </td>
                </tr>
              </table>
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 8px;">
                <tr>
                  <td style="background-color:#10B981;border-radius:10px;text-align:center;">
                    <a href="${ctaUrl}" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.2px;">
                      ${escapeHtml(tr.cta)} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#F1F5F9;border-radius:0 0 16px 16px;border-top:1px solid #E2E8F0;padding:20px 16px;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#64748B;">${escapeHtml(tr.footer)}</p>
              <p style="margin:0 0 4px;font-size:12px;color:#94A3B8;">&copy; ${year} DUNS Verify</p>
              <p style="margin:0;font-size:12px;color:#94A3B8;">
                <a href="mailto:contact@dunsverify.com" style="color:#94A3B8;text-decoration:none;">contact@dunsverify.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
