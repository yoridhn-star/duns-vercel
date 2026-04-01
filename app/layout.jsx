import "./globals.css";

export const metadata = {
  title: "DUNS Lookup — Trouvez votre numéro D-U-N-S gratuitement",
  description: "Recherchez le numéro D-U-N-S de votre entreprise gratuitement en quelques secondes.",
  openGraph: {
    title: "DUNS Lookup — Trouvez votre numéro D-U-N-S gratuitement",
    description: "Recherchez le numéro D-U-N-S de votre entreprise gratuitement en quelques secondes.",
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
