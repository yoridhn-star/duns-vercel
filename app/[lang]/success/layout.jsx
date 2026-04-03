import { getDictionary, LOCALES } from '../../i18n';

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.success.found,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function SuccessLayout({ children }) {
  return children;
}
