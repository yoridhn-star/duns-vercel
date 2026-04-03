import { NextResponse } from "next/server";
import { Resend } from "resend";

const RENDER_API_URL = process.env.RENDER_API_URL;
const resend = new Resend(process.env.RESEND_API_KEY);

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

  const { companyName, country, email } = body;

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
      // Don't forward email — Render only scrapes, email is handled here
      body: JSON.stringify({ companyName, country }),
      // Render cold start (~60-90s) + scraping (~40-70s) = up to ~160s
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

  // ── Send email via Resend (Vercel side) ──────────────────────────────────
  if (data.success && data.data && email?.trim()) {
    try {
      const htmlEmail = buildEmailHtml(data.data, companyName);
      await resend.emails.send({
        from: "DUNS Verify <noreply@dunsverify.com>",
        to: email.trim(),
        subject: `Votre numéro D-U-N-S — ${escapeHtml(data.data.companyName || companyName)}`,
        html: htmlEmail,
      });
      console.log(`[email] sent to ${email.trim()}`);
    } catch (mailErr) {
      console.error("[email] send failed:", mailErr.message);
    }
  }

  return NextResponse.json(data, { status: upstreamStatus });
}

// ── Email HTML builder ────────────────────────────────────────────────────────

function buildEmailHtml(result, companyName) {
  const name = escapeHtml(result.companyName || companyName);
  const duns = escapeHtml(result.dunsNumber || "—");
  const address = escapeHtml(result.address || "");
  const date = new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Votre numéro D-U-N-S</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(99,102,241,0.10);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#4f46e5 0%,#6366f1 100%);padding:36px 40px;text-align:center;">
              <div style="font-size:26px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">DUNS Verify</div>
              <div style="font-size:13px;color:#c7d2fe;margin-top:6px;">Résultat de votre recherche</div>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 24px;font-size:15px;color:#374151;">Bonjour,</p>
              <p style="margin:0 0 28px;font-size:15px;color:#374151;line-height:1.6;">
                Votre recherche pour <strong>${name}</strong> a abouti. Voici votre numéro D-U-N-S&reg; :
              </p>

              <!-- Result card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f7ff;border:1px solid #e0e7ff;border-radius:10px;margin-bottom:28px;">
                <tr>
                  <td style="padding:28px 32px;">
                    <div style="font-size:12px;font-weight:600;color:#6366f1;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Entreprise</div>
                    <div style="font-size:17px;font-weight:600;color:#111827;margin-bottom:20px;">${name}</div>

                    <div style="font-size:12px;font-weight:600;color:#6366f1;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Numéro D-U-N-S&reg;</div>
                    <div style="font-size:36px;font-weight:800;color:#4f46e5;letter-spacing:4px;margin-bottom:20px;">${duns}</div>

                    ${address ? `<div style="font-size:12px;font-weight:600;color:#6366f1;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Adresse</div>
                    <div style="font-size:14px;color:#374151;">${address}</div>` : ""}
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.6;">
                Merci d'avoir utilisé DUNS Verify. Ce résultat a été obtenu le ${date}.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f8f7ff;border-top:1px solid #e0e7ff;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#9ca3af;line-height:1.6;">
                © ${new Date().getFullYear()} DUNS Verify — contact@dunsverify.com
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

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
