import { ShieldCheck, Mail } from "lucide-react";
import LangSelector from "../../_components/LangSelector";
import { getDictionary, LOCALES } from "../../i18n";

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata() {
  return {
    title: "Contact | DUNS Verify",
    robots: { index: false },
  };
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const isFr = lang === "fr";

  const c = isFr
    ? {
        title: "Contact",
        intro: "Pour toute question concernant notre service, contactez-nous par email :",
      }
    : {
        title: "Contact",
        intro: "For any questions about our service, contact us by email:",
      };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href={`/${lang}`} className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#1E3A5F]" aria-label="DUNS Verify" />
            <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">DUNS</span>
            <span className="text-xl font-normal text-slate-500">Verify</span>
          </a>
          <LangSelector currentLang={lang} />
        </div>
      </header>

      <main className="flex-1 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-[#1E3A5F] mb-6">{c.title}</h1>
          <p className="text-slate-600 mb-3">{c.intro}</p>
          <a
            href="mailto:contact@dunsverify.com"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:underline text-lg"
          >
            <Mail className="w-5 h-5" />
            contact@dunsverify.com
          </a>
        </div>
      </main>

      <footer className="bg-[#1E3A5F] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span className="font-bold text-base text-white">DUNS</span>
            <span className="font-normal text-slate-300">Verify</span>
          </div>
          <span className="text-center sm:text-right">{t.footer.copyright}</span>
          <nav className="flex items-center gap-4 text-slate-400">
            {t.footer.links.map((link, i) => (
              <span key={i} className="flex items-center gap-4">
                {i > 0 && <span>·</span>}
                <a href={`/${lang}${t.footer.hrefs[i]}`} className="hover:text-white transition-colors">{link}</a>
              </span>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
