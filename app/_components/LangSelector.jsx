"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import { LOCALES } from "../i18n";

const LANG_NAMES = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
  nl: "Nederlands",
  pt: "Português",
  pl: "Polski",
  sv: "Svenska",
  da: "Dansk",
  no: "Norsk",
  fi: "Suomi",
  cs: "Čeština",
  hu: "Magyar",
  ro: "Română",
  el: "Ελληνικά",
};

export default function LangSelector({ currentLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-2 py-1 rounded-md hover:bg-slate-100"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{currentLang.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-44 bg-white border border-slate-200 shadow-lg rounded-lg z-50 py-1 max-h-72 overflow-y-auto">
          {LOCALES.map((lang) => (
            <a
              key={lang}
              href={`/${lang}`}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between px-3 py-2 text-sm transition-colors ${
                lang === currentLang
                  ? "bg-emerald-50 text-emerald-700 font-medium"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>
                <span className="font-semibold">{lang.toUpperCase()}</span>
                {" — "}
                {LANG_NAMES[lang]}
              </span>
              {lang === currentLang && <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
