import { ShieldCheck } from "lucide-react";
import { getDictionary } from "../i18n";

export default async function BlogFooter({ lang }) {
  const t = getDictionary(lang);
  return (
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
  );
}
