import "./globals.css";

export const metadata = {
  title: "DUNS Verify — Obtenez votre numéro D-U-N-S en 2 minutes",
  description: "Plus besoin d'attendre 30 jours. Obtenez votre numéro D-U-N-S instantanément pour seulement 4,99 €. Résultat par email en moins de 2 minutes.",
  openGraph: {
    title: "DUNS Verify — Obtenez votre numéro D-U-N-S en 2 minutes",
    description: "Plus besoin d'attendre 30 jours. Obtenez votre numéro D-U-N-S instantanément pour seulement 4,99 €. Résultat par email en moins de 2 minutes.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
