import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "session_id is required" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Paiement non confirmé." }, { status: 402 });
    }

    return NextResponse.json({
      paymentStatus: session.payment_status,
      metadata: session.metadata,
    });
  } catch (err) {
    console.error("[checkout-session] Stripe error:", err.message);
    return NextResponse.json(
      { error: "Impossible de récupérer la session.", details: err.message },
      { status: 500 }
    );
  }
}
