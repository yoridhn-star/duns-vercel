"use client";

import { useState } from "react";

// ── Country list — native label, German value for UPIK ───────────────────────

const COUNTRIES = [
  { label: "France",              value: "Frankreich" },
  { label: "Deutschland",         value: "Deutschland" },
  { label: "Belgique / België",   value: "Belgien" },
  { label: "Nederland",           value: "Niederlande" },
  { label: "Luxembourg",          value: "Luxemburg" },
  { label: "Schweiz / Suisse",    value: "Schweiz" },
  { label: "Österreich",          value: "Österreich" },
  { label: "España",              value: "Spanien" },
  { label: "Portugal",            value: "Portugal" },
  { label: "Italia",              value: "Italien" },
  { label: "Polska",              value: "Polen" },
  { label: "Česko",               value: "Tschechien" },
  { label: "Magyarország",        value: "Ungarn" },
  { label: "România",             value: "Rumänien" },
  { label: "Ελλάδα",             value: "Griechenland" },
  { label: "Sverige",             value: "Schweden" },
  { label: "Norge",               value: "Norwegen" },
  { label: "Danmark",             value: "Dänemark" },
  { label: "Suomi",               value: "Finnland" },
  { label: "Ireland",             value: "Irland" },
  { label: "United Kingdom",      value: "Großbritannien" },
  { label: "United States",       value: "Vereinigte Staaten von Amerika" },
];

const FAQ_ITEMS = [
  {
    q: "Qu'est-ce qu'un numéro D-U-N-S ?",
    a: "Le numéro D-U-N-S (Data Universal Numbering System) est un identifiant unique à 9 chiffres attribué par Dun & Bradstreet à chaque entité commerciale dans le monde.",
  },
  {
    q: "Pourquoi payer 4,99 € alors que le DUNS est gratuit ?",
    a: "Le processus officiel via Dun & Bradstreet prend jusqu'à 30 jours ouvrés. DUNS Verify vous donne le résultat en moins de 2 minutes. Vous payez pour la rapidité et la simplicité du service, pas pour le numéro lui-même.",
  },
  {
    q: "Combien de temps prend la recherche ?",
    a: "La recherche prend généralement entre 30 secondes et 2 minutes selon la charge du serveur.",
  },
  {
    q: "Combien coûte le service ?",
    a: "La recherche de numéro D-U-N-S est disponible pour 4,99 €. Le paiement est sécurisé par Stripe et vous obtenez votre résultat instantanément après confirmation.",
  },
  {
    q: "Que se passe-t-il si mon entreprise n'a pas de numéro DUNS ?",
    a: "Si votre entreprise n'est pas trouvée, vous pouvez en demander un gratuitement sur le site officiel de Dun & Bradstreet.",
  },
];

// ── Main component ────────────────────────────────────────────────────────────

export default function Home() {
  // Form state
  const [companyName, setCompanyName] = useState("");
  const [city, setCity]               = useState("");
  const [email, setEmail]             = useState("");
  const [country, setCountry]         = useState("Frankreich");

  // Request state
  const [status, setStatus]       = useState("idle"); // idle | loading | error
  const [errorMsg, setErrorMsg]   = useState("");

  // FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!companyName.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName, city, country, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Erreur ${res.status}`);
      window.location.href = data.url;
    } catch (err) {
      setErrorMsg(err.message || "Une erreur est survenue.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#formulaire" className="text-xl font-bold tracking-tight">
            <span className="text-indigo-600">DUNS</span>
            <span className="text-gray-500 font-medium"> Verify</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#comment-ca-marche" className="hover:text-indigo-600 transition-colors">Comment ça marche</a>
            <a href="#pourquoi-le-duns"  className="hover:text-indigo-600 transition-colors">Pourquoi le DUNS</a>
            <a href="#faq"               className="hover:text-indigo-600 transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">

        {/* ── Hero + Form ─────────────────────────────────────────────────── */}
        <section id="formulaire" className="bg-gray-50 py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span>⚡</span>
              <span>Résultat en 2 min — au lieu de 30 jours</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Obtenez votre numéro{" "}
              <span className="text-indigo-600">D-U-N-S</span>{" "}
              en 2 minutes
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 mb-10">
              Plus besoin d&apos;attendre 30 jours. Recevez votre identifiant D-U-N-S immédiatement par email
              pour seulement <strong className="text-gray-700">4,99 €</strong>.
            </p>

            {/* Form card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-left">
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Company name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Nom de votre entreprise <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Ex : Airbus SAS"
                      required
                      disabled={status === "loading"}
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none
                                 focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                                 disabled:bg-gray-50 disabled:cursor-not-allowed
                                 transition text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Ville <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex : Paris"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none
                               focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                               disabled:bg-gray-50 disabled:cursor-not-allowed
                               transition text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Pays
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none
                               focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                               disabled:bg-gray-50 disabled:cursor-not-allowed
                               transition text-gray-900 bg-white"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Votre adresse email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@exemple.com"
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none
                               focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                               disabled:bg-gray-50 disabled:cursor-not-allowed
                               transition text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading" || !companyName.trim() || !city.trim() || !email.trim()}
                  className="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300
                             text-white font-semibold rounded-xl shadow
                             transition-all duration-200 disabled:cursor-not-allowed
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                             flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Spinner />
                      Redirection vers le paiement…
                    </>
                  ) : (
                    "Obtenir mon DUNS maintenant — 4,99 €"
                  )}
                </button>
              </form>

              {/* Trust line */}
              <p className="text-center text-xs text-gray-400 mt-4">
                Paiement sécurisé par Stripe · Résultat en moins de 2 min · Envoyé par email
              </p>

              {/* Error */}
              {status === "error" && (
                <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl flex gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-red-700">Erreur</p>
                    <p className="text-sm text-red-600 mt-0.5">{errorMsg}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Comment ça marche ──────────────────────────────────────────── */}
        <section id="comment-ca-marche" className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Comment ça marche</h2>
              <p className="mt-3 text-gray-500">Trois étapes simples pour obtenir votre numéro DUNS.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  n: 1,
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                  title: "Entrez vos informations",
                  desc: "Saisissez le nom de votre entreprise, le pays et votre email.",
                },
                {
                  n: 2,
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Recherche automatique",
                  desc: "Notre système interroge les bases de données internationales. Résultat en moins de 2 minutes.",
                },
                {
                  n: 3,
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                  title: "Recevez votre DUNS",
                  desc: "Votre numéro D-U-N-S s'affiche à l'écran et vous est envoyé par email.",
                },
              ].map(({ n, icon, title, desc }) => (
                <div key={n} className="bg-gray-50 rounded-2xl p-6 flex flex-col items-start gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {n}
                    </span>
                    <span className="text-indigo-600">{icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pourquoi le DUNS ──────────────────────────────────────────── */}
        <section id="pourquoi-le-duns" className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Pourquoi avez-vous besoin d&rsquo;un numéro DUNS&nbsp;?
              </h2>
              <p className="mt-3 text-gray-500">
                Le numéro D-U-N-S est votre passeport commercial international.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "🌍",
                  title: "Appels d'offres internationaux",
                  desc: "Obligatoire pour répondre aux marchés publics européens et aux contrats avec le gouvernement américain (SAM.gov).",
                },
                {
                  icon: "🤝",
                  title: "Partenariats B2B",
                  desc: "De nombreuses multinationales exigent un numéro DUNS pour référencer leurs fournisseurs.",
                },
                {
                  icon: "🏦",
                  title: "Crédibilité financière",
                  desc: "Le DUNS renforce la confiance de vos partenaires et institutions bancaires.",
                },
                {
                  icon: "📱",
                  title: "Apple & Google",
                  desc: "Requis pour publier des apps sur l'App Store et le Google Play Store en tant qu'organisation.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4">
                  <span className="text-3xl flex-shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section id="faq" className="py-20 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Questions fréquentes</h2>
            </div>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left
                               font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <span>{item.q}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-gray-500 border-t border-gray-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-indigo-700">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à obtenir votre numéro DUNS&nbsp;?
            </h2>
            <p className="text-indigo-200 mb-8">
              Fini l&apos;attente de 30 jours. Obtenez votre identifiant international en 2 minutes
              pour seulement 4,99 €.
            </p>
            <a
              href="#formulaire"
              className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3.5 rounded-xl
                         shadow hover:shadow-md hover:bg-gray-50 transition-all"
            >
              Obtenir mon DUNS maintenant →
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <span className="font-bold text-base">
            <span className="text-indigo-600">DUNS</span>
            <span className="text-gray-400 font-medium"> Verify</span>
          </span>
          <span>© 2026 DUNS Verify. Service indépendant, non affilié à Dun &amp; Bradstreet.</span>
        </div>
      </footer>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}
