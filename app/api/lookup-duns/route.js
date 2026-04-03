import { NextResponse } from "next/server";
import { Resend } from "resend";

const RENDER_API_URL = process.env.RENDER_API_URL;
const resend = new Resend(process.env.RESEND_API_KEY);

// ── Translations ──────────────────────────────────────────────────────────────

const emailTranslations = {
  fr: {
    subject: (company) => `Votre numéro D-U-N-S — ${company}`,
    title: 'Votre numéro D-U-N-S',
    greeting: 'Bonjour,',
    intro: 'Voici le résultat de votre recherche D-U-N-S\u00ae\u00a0:',
    companyLabel: 'Entreprise',
    dunsLabel: 'Numéro D-U-N-S\u00ae',
    addressLabel: 'Adresse',
    footer: "Merci d\u2019avoir utilisé DUNS Verify.",
    cta: 'Faire une nouvelle recherche',
  },
  en: {
    subject: (company) => `Your D-U-N-S Number — ${company}`,
    title: 'Your D-U-N-S Number',
    greeting: 'Hello,',
    intro: 'Here are the results of your D-U-N-S\u00ae lookup:',
    companyLabel: 'Company',
    dunsLabel: 'D-U-N-S\u00ae Number',
    addressLabel: 'Address',
    footer: 'Thank you for using DUNS Verify.',
    cta: 'Start a new search',
  },
  de: {
    subject: (company) => `Ihre D-U-N-S-Nummer — ${company}`,
    title: 'Ihre D-U-N-S-Nummer',
    greeting: 'Hallo,',
    intro: 'Hier ist das Ergebnis Ihrer D-U-N-S\u00ae-Suche:',
    companyLabel: 'Unternehmen',
    dunsLabel: 'D-U-N-S\u00ae-Nummer',
    addressLabel: 'Adresse',
    footer: 'Vielen Dank für die Nutzung von DUNS Verify.',
    cta: 'Neue Suche starten',
  },
  es: {
    subject: (company) => `Su número D-U-N-S — ${company}`,
    title: 'Su número D-U-N-S',
    greeting: 'Hola,',
    intro: 'Aquí está el resultado de su búsqueda D-U-N-S\u00ae:',
    companyLabel: 'Empresa',
    dunsLabel: 'Número D-U-N-S\u00ae',
    addressLabel: 'Dirección',
    footer: 'Gracias por utilizar DUNS Verify.',
    cta: 'Iniciar una nueva búsqueda',
  },
  it: {
    subject: (company) => `Il tuo numero D-U-N-S — ${company}`,
    title: 'Il tuo numero D-U-N-S',
    greeting: 'Salve,',
    intro: 'Ecco il risultato della tua ricerca D-U-N-S\u00ae:',
    companyLabel: 'Azienda',
    dunsLabel: 'Numero D-U-N-S\u00ae',
    addressLabel: 'Indirizzo',
    footer: 'Grazie per aver utilizzato DUNS Verify.',
    cta: 'Avvia una nuova ricerca',
  },
  nl: {
    subject: (company) => `Uw D-U-N-S-nummer — ${company}`,
    title: 'Uw D-U-N-S-nummer',
    greeting: 'Geachte,',
    intro: 'Hier zijn de resultaten van uw D-U-N-S\u00ae-zoekopdracht:',
    companyLabel: 'Bedrijf',
    dunsLabel: 'D-U-N-S\u00ae-nummer',
    addressLabel: 'Adres',
    footer: 'Bedankt voor het gebruik van DUNS Verify.',
    cta: 'Nieuwe zoekopdracht starten',
  },
  pt: {
    subject: (company) => `O seu número D-U-N-S — ${company}`,
    title: 'O seu número D-U-N-S',
    greeting: 'Olá,',
    intro: 'Aqui está o resultado da sua pesquisa D-U-N-S\u00ae:',
    companyLabel: 'Empresa',
    dunsLabel: 'Número D-U-N-S\u00ae',
    addressLabel: 'Morada',
    footer: 'Obrigado por utilizar o DUNS Verify.',
    cta: 'Iniciar uma nova pesquisa',
  },
  pl: {
    subject: (company) => `Twój numer D-U-N-S — ${company}`,
    title: 'Twój numer D-U-N-S',
    greeting: 'Witaj,',
    intro: 'Oto wynik wyszukiwania D-U-N-S\u00ae:',
    companyLabel: 'Firma',
    dunsLabel: 'Numer D-U-N-S\u00ae',
    addressLabel: 'Adres',
    footer: 'Dziękujemy za skorzystanie z DUNS Verify.',
    cta: 'Rozpocznij nowe wyszukiwanie',
  },
  sv: {
    subject: (company) => `Ditt D-U-N-S-nummer — ${company}`,
    title: 'Ditt D-U-N-S-nummer',
    greeting: 'Hej,',
    intro: 'Här är resultatet av din D-U-N-S\u00ae-sökning:',
    companyLabel: 'Företag',
    dunsLabel: 'D-U-N-S\u00ae-nummer',
    addressLabel: 'Adress',
    footer: 'Tack för att du använder DUNS Verify.',
    cta: 'Starta en ny sökning',
  },
  da: {
    subject: (company) => `Dit D-U-N-S-nummer — ${company}`,
    title: 'Dit D-U-N-S-nummer',
    greeting: 'Hej,',
    intro: 'Her er resultatet af din D-U-N-S\u00ae-søgning:',
    companyLabel: 'Virksomhed',
    dunsLabel: 'D-U-N-S\u00ae-nummer',
    addressLabel: 'Adresse',
    footer: 'Tak fordi du bruger DUNS Verify.',
    cta: 'Start en ny søgning',
  },
  no: {
    subject: (company) => `Ditt D-U-N-S-nummer — ${company}`,
    title: 'Ditt D-U-N-S-nummer',
    greeting: 'Hei,',
    intro: 'Her er resultatet av ditt D-U-N-S\u00ae-søk:',
    companyLabel: 'Bedrift',
    dunsLabel: 'D-U-N-S\u00ae-nummer',
    addressLabel: 'Adresse',
    footer: 'Takk for at du bruker DUNS Verify.',
    cta: 'Start et nytt søk',
  },
  fi: {
    subject: (company) => `D-U-N-S-numerosi — ${company}`,
    title: 'D-U-N-S-numerosi',
    greeting: 'Hei,',
    intro: 'Tässä D-U-N-S\u00ae-hakusi tulos:',
    companyLabel: 'Yritys',
    dunsLabel: 'D-U-N-S\u00ae-numero',
    addressLabel: 'Osoite',
    footer: 'Kiitos, että käytät DUNS Verify -palvelua.',
    cta: 'Aloita uusi haku',
  },
  cs: {
    subject: (company) => `Vaše číslo D-U-N-S — ${company}`,
    title: 'Vaše číslo D-U-N-S',
    greeting: 'Dobrý den,',
    intro: 'Zde je výsledek vašeho vyhledávání D-U-N-S\u00ae:',
    companyLabel: 'Firma',
    dunsLabel: 'Číslo D-U-N-S\u00ae',
    addressLabel: 'Adresa',
    footer: 'Děkujeme za využití DUNS Verify.',
    cta: 'Spustit nové vyhledávání',
  },
  hu: {
    subject: (company) => `Az Ön D-U-N-S száma — ${company}`,
    title: 'Az Ön D-U-N-S száma',
    greeting: 'Tisztelt Ügyfelünk,',
    intro: 'Íme a D-U-N-S\u00ae keresés eredménye:',
    companyLabel: 'Vállalat',
    dunsLabel: 'D-U-N-S\u00ae szám',
    addressLabel: 'Cím',
    footer: 'Köszönjük, hogy a DUNS Verify szolgáltatást használja.',
    cta: 'Új keresés indítása',
  },
  ro: {
    subject: (company) => `Numărul dvs. D-U-N-S — ${company}`,
    title: 'Numărul dvs. D-U-N-S',
    greeting: 'Bună ziua,',
    intro: 'Iată rezultatul căutării dvs. D-U-N-S\u00ae:',
    companyLabel: 'Companie',
    dunsLabel: 'Număr D-U-N-S\u00ae',
    addressLabel: 'Adresă',
    footer: 'Vă mulțumim că folosiți DUNS Verify.',
    cta: 'Începeți o nouă căutare',
  },
  el: {
    subject: (company) => `Ο αριθμός D-U-N-S σας — ${company}`,
    title: 'Ο αριθμός D-U-N-S σας',
    greeting: 'Γεια σας,',
    intro: 'Ακολουθεί το αποτέλεσμα της αναζήτησης D-U-N-S\u00ae:',
    companyLabel: 'Εταιρεία',
    dunsLabel: 'Αριθμός D-U-N-S\u00ae',
    addressLabel: 'Διεύθυνση',
    footer: 'Ευχαριστούμε που χρησιμοποιείτε το DUNS Verify.',
    cta: 'Νέα αναζήτηση',
  },
};

export async function POST(request) {
  if (!RENDER_API_URL) {
    return NextResponse.json(
      { error: "RENDER_API_URL environment variable is not set" },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { companyName, country, email, lang } = body;

  if (!companyName?.trim()) {
    return NextResponse.json({ error: "companyName is required" }, { status: 400 });
  }

  const target = `${RENDER_API_URL.replace(/\/$/, "")}/api/lookup-duns`;

  let data;
  let upstreamStatus;

  try {
    const upstream = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ companyName, country }),
      signal: AbortSignal.timeout(180_000),
    });

    data = await upstream.json();
    upstreamStatus = upstream.status;
  } catch (err) {
    if (err.name === "TimeoutError" || err.name === "AbortError") {
      return NextResponse.json(
        { error: "La recherche a pris trop de temps. Veuillez réessayer." },
        { status: 504 }
      );
    }
    console.error("[proxy] upstream error:", err.message);
    return NextResponse.json(
      { error: "Impossible de joindre le service de recherche.", details: err.message },
      { status: 502 }
    );
  }

  // ── Send email via Resend ─────────────────────────────────────────────────
  if (data.success && data.data && email?.trim()) {
    const resolvedLang = emailTranslations[lang] ? lang : "fr";
    const tr = emailTranslations[resolvedLang];
    try {
      const htmlEmail = buildEmailHtml(data.data, companyName, tr, resolvedLang);
      await resend.emails.send({
        from: "DUNS Verify <noreply@dunsverify.com>",
        to: email.trim(),
        subject: tr.subject(escapeHtml(data.data.companyName || companyName)),
        html: htmlEmail,
      });
      console.log(`[email] sent to ${email.trim()} (lang=${resolvedLang})`);
    } catch (mailErr) {
      console.error("[email] send failed:", mailErr.message);
    }
  }

  return NextResponse.json(data, { status: upstreamStatus });
}

// ── Email HTML builder ────────────────────────────────────────────────────────

function formatDuns(raw) {
  const digits = String(raw).replace(/\D/g, "");
  if (digits.length === 9) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  return raw;
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

        <!-- Wrapper 600px -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- ── HEADER ── -->
          <tr>
            <td style="background-color:#1E3A5F;border-radius:16px 16px 0 0;padding:28px 20px;text-align:center;">
              <table cellpadding="0" cellspacing="0" border="0" style="display:inline-table;">
                <tr>
                  <td style="padding-right:10px;vertical-align:middle;">
                    <!-- Checkmark icon -->
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

          <!-- ── BODY ── -->
          <tr>
            <td style="background-color:#F8FAFC;padding:24px 20px 20px;">

              <p style="margin:0 0 8px;font-size:16px;color:#1E3A5F;font-weight:600;">${escapeHtml(tr.greeting)}</p>
              <p style="margin:0 0 32px;font-size:15px;color:#475569;line-height:1.7;">${escapeHtml(tr.intro)}</p>

              <!-- ── Result card ── -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#ffffff;border-radius:12px;border-left:4px solid #10B981;box-shadow:0 2px 12px rgba(0,0,0,0.07);margin-bottom:32px;">
                <tr>
                  <td style="padding:16px;">

                    <!-- Company -->
                    <div style="font-size:11px;font-weight:700;color:#10B981;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:4px;">${escapeHtml(tr.companyLabel)}</div>
                    <div style="font-size:18px;font-weight:700;color:#1E3A5F;margin-bottom:24px;">${name}</div>

                    <!-- DUNS number -->
                    <div style="font-size:11px;font-weight:700;color:#10B981;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:10px;">${escapeHtml(tr.dunsLabel)}</div>
                    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                      <tr>
                        <td style="background-color:#ECFDF5;border:1px solid #A7F3D0;border-radius:10px;padding:12px 16px;">
                          <span style="font-family:'Courier New',Courier,monospace;font-size:20px;font-weight:800;color:#065F46;letter-spacing:2px;white-space:nowrap;">${escapeHtml(duns)}</span>
                        </td>
                      </tr>
                    </table>

                    ${address ? `<!-- Address -->
                    <div style="font-size:11px;font-weight:700;color:#10B981;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:6px;">${escapeHtml(tr.addressLabel)}</div>
                    <div style="font-size:14px;color:#475569;line-height:1.6;">${address}</div>` : ""}

                  </td>
                </tr>
              </table>

              <!-- ── CTA button ── -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 8px;">
                <tr>
                  <td style="background-color:#10B981;border-radius:10px;text-align:center;">
                    <a href="${ctaUrl}"
                      style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.2px;">
                      ${escapeHtml(tr.cta)} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── FOOTER ── -->
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
        <!-- /Wrapper -->

      </td>
    </tr>
  </table>

</body>
</html>`;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
