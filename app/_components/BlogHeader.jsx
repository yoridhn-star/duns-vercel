import { ShieldCheck } from "lucide-react";
import LangSelector from "./LangSelector";
import { getDictionary } from "../i18n";

export default async function BlogHeader({ lang }) {
  const t = getDictionary(lang);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href={`/${lang}`} className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#1E3A5F]" aria-label="DUNS Verify" />
          <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">DUNS</span>
          <span className="text-xl font-normal text-slate-500">Verify</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
          {t.header.nav.map((label, i) => (
            <a key={i} href={`/${lang}${t.header.navHrefs[i]}`} className="hover:text-slate-900 transition-colors">
              {label}
            </a>
          ))}
          <a href={`/${lang}/blog`} className="hover:text-slate-900 transition-colors">
            Blog
          </a>
          <LangSelector currentLang={lang} />
        </nav>
        <div className="sm:hidden">
          <LangSelector currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
