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

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "DUNS Verify",
              description: `Recherche du numéro D-U-N-S pour ${companyName}`,
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
