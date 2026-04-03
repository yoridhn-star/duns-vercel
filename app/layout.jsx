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
    default: "Numéro DUNS : Obtenez votre D-U-N-S en 2 minutes | DUNS Verify",
    template: "%s | DUNS Verify",
  },
  description:
    "Obtenez votre numéro DUNS instantanément. Trouvez et vérifiez le numéro D-U-N-S de votre entreprise en France et en Europe. Résultat par email en 2 min pour 4,99 €. Plus besoin d'attendre 30 jours.",
  keywords:
    "numéro DUNS, numéro D-U-N-S, obtenir DUNS, trouver DUNS, DUNS France, DUNS number, vérifier DUNS, DUNS Apple Developer, DUNS marchés publics, DUNS entreprise",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Numéro DUNS : Obtenez votre D-U-N-S en 2 minutes | DUNS Verify",
    description:
      "Trouvez le numéro D-U-N-S de votre entreprise instantanément. Service rapide, résultat par email. Indispensable pour Apple Developer, marchés publics, partenariats B2B.",
    url: "https://dunsverify.com",
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
    card: "summary",
    title: "Numéro DUNS en 2 minutes | DUNS Verify",
    description:
      "Obtenez votre numéro D-U-N-S instantanément. Fini les 30 jours d'attente.",
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
        { "@type": "Question", "name": "Quelle est la différence entre le DUNS et le SIRET ?", "acceptedAnswer": { "@type": "Answer", "text": "Le SIRET est un identifiant national français attribué par l'INSEE. Le numéro D-U-N-S est un identifiant international attribué par Dun & Bradstreet, reconnu dans plus de 200 pays. Les deux sont complémentaires : le SIRET pour la France, le DUNS pour l'international." } },
        { "@type": "Question", "name": "Le numéro DUNS est-il obligatoire pour Apple Developer ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, Apple exige un numéro D-U-N-S valide pour toute inscription au Apple Developer Program ou au Apple Developer Enterprise Program en tant qu'organisation. Sans numéro DUNS, vous ne pouvez pas publier d'applications sur l'App Store au nom de votre entreprise." } },
        { "@type": "Question", "name": "Comment obtenir un numéro DUNS en France ?", "acceptedAnswer": { "@type": "Answer", "text": "La plupart des entreprises françaises enregistrées au registre du commerce possèdent déjà un numéro D-U-N-S. Utilisez notre service pour le retrouver instantanément en 2 minutes au lieu d'attendre 30 jours via le processus officiel." } },
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
