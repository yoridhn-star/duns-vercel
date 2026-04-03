"use client";

import { useState } from "react";
import {
  ShieldCheck, Zap, Building2, MapPin, Globe, Mail, ArrowRight,
  Lock, Clock, Search, Loader, CheckCircle, Handshake, Building,
  Smartphone, ChevronDown,
} from "lucide-react";

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
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#formulaire" className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#1E3A5F]" />
            <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">DUNS</span>
            <span className="text-xl font-normal text-slate-500">Verify</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#comment-ca-marche" className="hover:text-slate-900 transition-colors">Comment ça marche</a>
            <a href="#pourquoi-le-duns"  className="hover:text-slate-900 transition-colors">Pourquoi le DUNS</a>
            <a href="#faq"               className="hover:text-slate-900 transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">

        {/* ── Hero + Form ─────────────────────────────────────────────────── */}
        <section id="formulaire" className="bg-white py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">

            {/* Badge ambre */}
            <div className="inline-flex items-center gap-1.5 bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span>Résultat en 2 min — au lieu de 30 jours</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E3A5F] leading-tight mb-5">
              Obtenez votre numéro{" "}
              <span className="text-emerald-500">D-U-N-S</span>{" "}
              en 2 minutes
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-500 mb-10">
              Plus besoin d&apos;attendre 30 jours. Recevez votre identifiant D-U-N-S immédiatement par email
              pour seulement <strong className="text-slate-700">4,99 €</strong>.
            </p>

            {/* Form card */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-left">
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Company name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Nom de votre entreprise <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Building2 className="w-4 h-4 text-slate-400" />
                    </span>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Ex : Airbus SAS"
                      required
                      disabled={status === "loading"}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none
                                 focus:ring-2 focus:ring-emerald-500 focus:border-transparent
                                 disabled:bg-slate-50 disabled:cursor-not-allowed
                                 transition text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Ville <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <MapPin className="w-4 h-4 text-slate-400" />
                    </span>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex : Paris"
                      required
                      disabled={status === "loading"}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none
                                 focus:ring-2 focus:ring-emerald-500 focus:border-transparent
                                 disabled:bg-slate-50 disabled:cursor-not-allowed
                                 transition text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Pays
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Globe className="w-4 h-4 text-slate-400" />
                    </span>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      disabled={status === "loading"}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none
                                 focus:ring-2 focus:ring-emerald-500 focus:border-transparent
                                 disabled:bg-slate-50 disabled:cursor-not-allowed
                                 transition text-slate-900 bg-white"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Votre adresse email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 text-slate-400" />
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vous@exemple.com"
                      required
                      disabled={status === "loading"}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none
                                 focus:ring-2 focus:ring-emerald-500 focus:border-transparent
                                 disabled:bg-slate-50 disabled:cursor-not-allowed
                                 transition text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading" || !companyName.trim() || !city.trim() || !email.trim()}
                  className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300
                             text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl
                             transition-all duration-200 disabled:cursor-not-allowed hover:scale-[1.02]
                             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                             flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Spinner />
                      Redirection vers le paiement…
                    </>
                  ) : (
                    <>
                      Obtenir mon DUNS maintenant — 4,99 €
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Trust line */}
              <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-3">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Paiement sécurisé par Stripe</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Résultat en moins de 2 min</span>
                <span>·</span>
                <span>Envoyé par email</span>
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
        <section id="comment-ca-marche" className="py-20 px-4 bg-[#F8FAFC]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#1E3A5F]">Comment ça marche</h2>
              <p className="mt-3 text-slate-500">Trois étapes simples pour obtenir votre numéro DUNS.</p>
            </div>

            {/* Stepper */}
            <div className="relative grid sm:grid-cols-3 gap-6">
              {/* Connecting line (desktop) */}
              <div className="hidden sm:block absolute top-[2.75rem] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-slate-200 z-0" />

              {[
                { n: 1, Icon: Search,      title: "Entrez vos informations",  desc: "Saisissez le nom de votre entreprise, le pays et votre email." },
                { n: 2, Icon: Loader,      title: "Recherche automatique",    desc: "Notre système interroge les bases de données internationales. Résultat en moins de 2 minutes." },
                { n: 3, Icon: CheckCircle, title: "Recevez votre DUNS",       desc: "Votre numéro D-U-N-S s'affiche à l'écran et vous est envoyé par email." },
              ].map(({ n, Icon, title, desc }) => (
                <div key={n} className="relative z-10 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center gap-4">
                  {/* Icon */}
                  <Icon className="w-7 h-7 text-emerald-500" />
                  {/* Numbered circle */}
                  <span className="w-10 h-10 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pourquoi le DUNS ──────────────────────────────────────────── */}
        <section id="pourquoi-le-duns" className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E3A5F]">
                Pourquoi avez-vous besoin d&rsquo;un numéro DUNS&nbsp;?
              </h2>
              <p className="mt-3 text-slate-500">
                Le numéro D-U-N-S est votre passeport commercial international.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  Icon: Globe,
                  title: "Appels d'offres internationaux",
                  desc: "Obligatoire pour répondre aux marchés publics européens et aux contrats avec le gouvernement américain (SAM.gov).",
                },
                {
                  Icon: Handshake,
                  title: "Partenariats B2B",
                  desc: "De nombreuses multinationales exigent un numéro DUNS pour référencer leurs fournisseurs.",
                },
                {
                  Icon: Building,
                  title: "Crédibilité financière",
                  desc: "Le DUNS renforce la confiance de vos partenaires et institutions bancaires.",
                },
                {
                  Icon: Smartphone,
                  title: "Apple & Google",
                  desc: "Requis pour publier des apps sur l'App Store et le Google Play Store en tant qu'organisation.",
                },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex gap-4"
                >
                  <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0 self-start">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section id="faq" className="py-20 px-4 bg-[#F8FAFC]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E3A5F]">Questions fréquentes</h2>
            </div>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-all ${
                    openFaq === i ? "border-l-4 border-l-emerald-500 border-slate-200" : "border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left
                               font-semibold text-slate-800 hover:bg-white transition-colors"
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
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#1E3A5F] to-[#2563EB]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à obtenir votre numéro DUNS&nbsp;?
            </h2>
            <p className="text-slate-200 mb-8">
              Fini l&apos;attente de 30 jours. Obtenez votre identifiant international en 2 minutes
              pour seulement 4,99 €.
            </p>
            <a
              href="#formulaire"
              className="inline-block bg-white text-blue-900 font-semibold px-8 py-3.5 rounded-xl
                         shadow hover:shadow-md hover:bg-slate-100 transition-all"
            >
              Obtenir mon DUNS maintenant →
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="bg-[#1E3A5F] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span className="font-bold text-base text-white">DUNS</span>
            <span className="font-normal text-slate-300">Verify</span>
          </div>
          <span className="text-center sm:text-right">
            © 2026 DUNS Verify. Service indépendant, non affilié à Dun &amp; Bradstreet.
          </span>
          <nav className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </nav>
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
