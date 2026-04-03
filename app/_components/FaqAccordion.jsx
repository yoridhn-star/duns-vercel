"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ items }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`border rounded-xl overflow-hidden transition-all ${
            openFaq === i
              ? "border-l-4 border-l-emerald-500 border-slate-200"
              : "border-slate-200"
          }`}
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left
                       font-semibold text-slate-800 hover:bg-white transition-colors"
            aria-expanded={openFaq === i}
          >
            <span>{item.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-slate-400 flex-shrink-0 ml-4 transition-transform duration-200 ${
                openFaq === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openFaq === i && (
            <div className="px-5 pb-5 text-sm text-slate-600 bg-white border-t border-slate-100 pt-3">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
