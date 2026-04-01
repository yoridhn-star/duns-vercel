import "./globals.css";

export const metadata = {
  title: "DUNS Lookup",
  description: "Recherche de numéros D-U-N-S via DNB UPIK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
