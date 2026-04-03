import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DUNS Verify — Obtenez votre numéro D-U-N-S en 2 minutes",
    template: "%s | DUNS Verify",
  },
  description:
    "Plus besoin d'attendre 30 jours. Obtenez votre numéro D-U-N-S instantanément pour seulement 4,99 €. Résultat par email en moins de 2 minutes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DUNS Verify — Obtenez votre numéro D-U-N-S en 2 minutes",
    description:
      "Plus besoin d'attendre 30 jours. Obtenez votre numéro D-U-N-S instantanément pour seulement 4,99 €.",
    url: "/",
    siteName: "DUNS Verify",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DUNS Verify — Obtenez votre numéro D-U-N-S en 2 minutes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DUNS Verify — Obtenez votre numéro D-U-N-S en 2 minutes",
    description:
      "Résultat D-U-N-S en 2 minutes pour seulement 4,99 €. Paiement sécurisé par Stripe.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "DUNS Verify",
      "url": "https://dunsverify.com",
      "description": "Obtenez votre numéro D-U-N-S en 2 minutes",
    },
    {
      "@type": "Service",
      "name": "Recherche de numéro D-U-N-S",
      "provider": { "@type": "Organization", "name": "DUNS Verify", "url": "https://dunsverify.com" },
      "description": "Service de recherche instantanée de numéro D-U-N-S pour les entreprises",
      "offers": { "@type": "Offer", "price": "4.99", "priceCurrency": "EUR" },
      "areaServed": "Europe",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Qu'est-ce qu'un numéro D-U-N-S ?", "acceptedAnswer": { "@type": "Answer", "text": "Le numéro D-U-N-S (Data Universal Numbering System) est un identifiant unique à 9 chiffres attribué par Dun & Bradstreet à chaque entité commerciale dans le monde." } },
        { "@type": "Question", "name": "Combien de temps prend la recherche ?", "acceptedAnswer": { "@type": "Answer", "text": "La recherche prend généralement entre 30 secondes et 2 minutes selon la charge du serveur." } },
        { "@type": "Question", "name": "Combien coûte le service ?", "acceptedAnswer": { "@type": "Answer", "text": "La recherche de numéro D-U-N-S est disponible pour 4,99 €. Le paiement est sécurisé par Stripe et vous obtenez votre résultat instantanément après confirmation." } },
        { "@type": "Question", "name": "Que se passe-t-il si mon entreprise n'a pas de numéro DUNS ?", "acceptedAnswer": { "@type": "Answer", "text": "Si votre entreprise n'est pas trouvée, vous pouvez en demander un gratuitement sur le site officiel de Dun & Bradstreet." } },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
