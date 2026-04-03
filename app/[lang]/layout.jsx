import { Inter } from "next/font/google";
import { getDictionary, LOCALES } from '../i18n';
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, `${SITE_URL}/${l}`])
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.meta.title,
      template: `%s | DUNS Verify`,
    },
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages,
    },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      url: `${SITE_URL}/${lang}`,
      siteName: "DUNS Verify",
      locale: lang === "fr" ? "fr_FR" : lang === "de" ? "de_DE" : lang === "es" ? "es_ES" : "en_GB",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t.meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: t.meta.twitterTitle,
      description: t.meta.twitterDescription,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const resolvedLang = LOCALES.includes(lang) ? lang : "fr";

  return (
    <html lang={resolvedLang} className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
