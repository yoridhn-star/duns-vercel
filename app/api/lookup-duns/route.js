import { NextResponse } from "next/server";

const RENDER_API_URL = process.env.RENDER_API_URL;

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

  try {
    const upstream = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ companyName, country, email }),
      // Render cold start + scraping can take up to ~60 s
      signal: AbortSignal.timeout(90_000),
    });

    const data = await upstream.json();

    return NextResponse.json(data, { status: upstream.status });
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
}
