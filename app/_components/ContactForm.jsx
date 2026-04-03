"use client";

export default function ContactForm({ c }) {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{c.name}</label>
        <input
          type="text"
          placeholder={c.namePlaceholder}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{c.email}</label>
        <input
          type="email"
          placeholder={c.emailPlaceholder}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">{c.message}</label>
        <textarea
          rows={5}
          placeholder={c.messagePlaceholder}
          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#1E3A5F] text-white font-semibold py-3 rounded-xl hover:bg-[#2a4f7c] transition-colors"
      >
        {c.submit}
      </button>
      <p className="text-xs text-slate-400 text-center">{c.note}</p>
    </form>
  );
}
