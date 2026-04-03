"use client";

import { useRouter } from "next/navigation";
import { LOCALES } from "../i18n";

const FLAG_LABELS = { fr: "FR", en: "EN", de: "DE", es: "ES" };

export default function LangSelector({ currentLang }) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {LOCALES.map((lang, i) => (
        <span key={lang} className="flex items-center gap-1">
          {i > 0 && <span className="text-slate-300">|</span>}
          <a
            href={`/${lang}`}
            className={
              lang === currentLang
                ? "text-emerald-600 font-bold"
                : "text-slate-500 hover:text-slate-800 transition-colors"
            }
            aria-current={lang === currentLang ? "page" : undefined}
          >
            {FLAG_LABELS[lang]}
          </a>
        </span>
      ))}
    </div>
  );
}
