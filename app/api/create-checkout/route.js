import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { companyName, city, country, email, lang } = body;

  if (!companyName?.trim()) {
    return NextResponse.json({ error: "companyName is required" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

  // Stripe uses 'nb' for Norwegian (Bokmål); all other locales match directly
  const stripeLocaleMap = { no: 'nb' };
  const stripeLocale = stripeLocaleMap[lang] || lang || "fr";

  const productDescriptions = {
    fr: `Recherche du numéro D-U-N-S pour ${companyName}`,
    en: `D-U-N-S number lookup for ${companyName}`,
    de: `D-U-N-S-Nummer-Suche für ${companyName}`,
    es: `Búsqueda del número D-U-N-S para ${companyName}`,
    it: `Ricerca del numero D-U-N-S per ${companyName}`,
    nl: `D-U-N-S-nummer opzoeken voor ${companyName}`,
    pt: `Pesquisa do número D-U-N-S para ${companyName}`,
    pl: `Wyszukiwanie numeru D-U-N-S dla ${companyName}`,
    sv: `D-U-N-S-nummer sökning för ${companyName}`,
    da: `D-U-N-S-nummer søgning for ${companyName}`,
    no: `D-U-N-S-nummer søk for ${companyName}`,
    fi: `D-U-N-S-numeron haku yritykselle ${companyName}`,
    cs: `Vyhledávání čísla D-U-N-S pro ${companyName}`,
    hu: `D-U-N-S szám keresése: ${companyName}`,
    ro: `Căutare număr D-U-N-S pentru ${companyName}`,
    el: `Αναζήτηση αριθμού D-U-N-S για ${companyName}`,
  };
  const productDescription = productDescriptions[lang] || productDescriptions.fr;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: stripeLocale,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "DUNS Verify",
              description: productDescription,
            },
            unit_amount: 499,
          },
          quantity: 1,
        },
      ],
      customer_email: email || undefined,
      success_url: `${baseUrl}/${lang || 'fr'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/${lang || 'fr'}`,
      metadata: {
        companyName: companyName.trim(),
        city: city?.trim() || "",
        country: country || "",
        email: email?.trim() || "",
        lang: lang || "fr",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[create-checkout] Stripe error:", err.message);
    return NextResponse.json(
      { error: "Impossible de créer la session de paiement.", details: err.message },
      { status: 500 }
    );
  }
}
