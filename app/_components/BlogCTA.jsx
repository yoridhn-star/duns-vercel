export default function BlogCTA({ lang }) {
  return (
    <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2563EB] rounded-2xl p-8 my-12 text-center not-prose">
      <p className="text-emerald-300 text-sm font-semibold uppercase tracking-wider mb-2">Service rapide</p>
      <h3 className="text-xl font-bold text-white mb-3">
        Obtenez votre numéro DUNS en 2 minutes
      </h3>
      <p className="text-slate-200 mb-6 text-sm max-w-md mx-auto">
        Fini les 30 jours d'attente. Recevez votre numéro D-U-N-S directement par email, certifié Dun &amp; Bradstreet.
      </p>
      <a
        href={`/${lang}`}
        className="inline-block bg-white text-[#1E3A5F] font-semibold px-8 py-3.5 rounded-xl shadow hover:shadow-md hover:bg-slate-100 transition-all"
      >
        Obtenir mon numéro DUNS — 4,99 €
      </a>
    </div>
  );
}
