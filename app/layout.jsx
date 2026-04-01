import "./globals.css";

export const metadata = {
  title: "DUNS Lookup",
  description: "Recherchez le numéro D-U-N-S d'une entreprise",
  openGraph: {
    title: "DUNS Lookup",
    description: "Recherchez le numéro D-U-N-S d'une entreprise",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
