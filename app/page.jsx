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
    q: "Combien de temps prend la recherche ?",
    a: "La recherche prend généralement entre 30 secondes et 2 minutes selon la charge du serveur.",
  },
  {
    q: "Le service est-il vraiment gratuit ?",
    a: "Oui, notre service est entièrement gratuit. Nous utilisons les données publiques disponibles.",
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
  const [email, setEmail]             = useState("");
  const [country, setCountry]         = useState("Frankreich");

  // Request state
  const [status, setStatus]       = useState("idle"); // idle | loading | success | error
  const [result, setResult]       = useState(null);
  const [errorMsg, setErrorMsg]   = useState("");
  const [elapsedSec, setElapsedSec] = useState(0);

  // FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!companyName.trim()) return;

    setStatus("loading");
    setResult(null);
    setErrorMsg("");
    setElapsedSec(0);

    const startTime = Date.now();
    const ticker = setInterval(() => {
      setElapsedSec(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    try {
      const res = await fetch("/api/lookup-duns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName, country, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Erreur ${res.status}`);
      setResult(data.data || null);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message || "Une erreur est survenue.");
      setStatus("error");
    } finally {
      clearInterval(ticker);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#formulaire" className="text-xl font-bold tracking-tight">
            <span className="text-indigo-600">DUNS</span>
            <span className="text-gray-500 font-medium"> Lookup</span>
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
              <span>✨</span>
              <span>Résultat instantané et gratuit</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Trouvez votre numéro{" "}
              <span className="text-indigo-600">D-U-N-S</span>{" "}
              en quelques clics
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 mb-10">
              Entrez le <strong className="text-gray-700">nom de votre entreprise</strong> et recevez votre identifiant
              international Dun &amp; Bradstreet <strong className="text-gray-700">gratuitement</strong>.
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
                    Votre adresse email{" "}
                    <span className="text-gray-400 font-normal">(optionnel)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@exemple.com"
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
                  disabled={status === "loading" || !companyName.trim()}
                  className="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300
                             text-white font-semibold rounded-xl shadow
                             transition-all duration-200 disabled:cursor-not-allowed
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                             flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Spinner />
                      Recherche en cours… ({elapsedSec}s)
                    </>
                  ) : (
                    "Rechercher mon DUNS →"
                  )}
                </button>
              </form>

              {/* Trust line */}
              <p className="text-center text-xs text-gray-400 mt-4">
                Service gratuit · Résultat affiché instantanément
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

              {/* No result */}
              {status === "success" && !result && (
                <div className="mt-5 p-4 bg-gray-50 border border-gray-200 rounded-xl text-center">
                  <p className="text-gray-500 text-sm">
                    Aucun résultat trouvé pour <strong>{companyName}</strong>.
                  </p>
                </div>
              )}

              {/* Result */}
              {status === "success" && result && (
                <div className="mt-6">
                  <ResultCard result={result} />
                  {email.trim() && (
                    <p className="text-xs text-gray-400 mt-3">
                      Le résultat a également été envoyé à{" "}
                      <span className="font-medium text-gray-500">{email}</span>.
                    </p>
                  )}
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
                  title: "Patientez quelques secondes",
                  desc: "Notre système recherche automatiquement votre numéro D-U-N-S.",
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
                  desc: "Votre numéro DUNS est affiché instantanément sur la page.",
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
              Prêt à trouver votre numéro DUNS&nbsp;?
            </h2>
            <p className="text-indigo-200 mb-8">
              Saisissez le nom de votre entreprise et recevez votre identifiant
              international en quelques secondes.
            </p>
            <a
              href="#formulaire"
              className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3.5 rounded-xl
                         shadow hover:shadow-md hover:bg-gray-50 transition-all"
            >
              Rechercher mon DUNS →
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <span className="font-bold text-base">
            <span className="text-indigo-600">DUNS</span>
            <span className="text-gray-400 font-medium"> Lookup</span>
          </span>
          <span>© 2026 DUNS Lookup. Service indépendant, non affilié à Dun &amp; Bradstreet.</span>
        </div>
      </footer>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ResultCard({ result }) {
  // API returns { companyName, dunsNumber, address }
  const name    = result.companyName || result.name    || "";
  const duns    = result.dunsNumber  || result.duns    || "";
  const address = result.address     || "";
  return (
    <div className="p-5 border border-indigo-100 rounded-xl bg-indigo-50/40">
      {name ? (
        <p className="font-bold text-gray-900 text-base mb-3">{name}</p>
      ) : (
        <p className="font-bold text-gray-400 text-base mb-3 italic">Nom non disponible</p>
      )}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-20 flex-shrink-0">
          D-U-N-S
        </span>
        {duns ? (
          <span className="font-mono font-semibold text-indigo-700 bg-white border border-indigo-100 px-2.5 py-0.5 rounded-lg text-sm shadow-sm">
            {formatDuns(duns)}
          </span>
        ) : (
          <span className="text-gray-400 text-sm italic">—</span>
        )}
      </div>
      <div className="flex items-start gap-2">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-20 flex-shrink-0 mt-0.5">
          Adresse
        </span>
        {address ? (
          <span className="text-sm text-gray-700">{address}</span>
        ) : (
          <span className="text-gray-400 text-sm italic">—</span>
        )}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}

function formatDuns(raw) {
  const digits = String(raw).replace(/\D/g, "");
  if (digits.length === 9) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  return raw;
}
