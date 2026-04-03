"use client";

import { useState } from "react";
import { Building2, MapPin, Globe, Mail, ArrowRight, Lock, Clock } from "lucide-react";

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

export default function HomeForm() {
  const [companyName, setCompanyName] = useState("");
  const [city, setCity]               = useState("");
  const [email, setEmail]             = useState("");
  const [country, setCountry]         = useState("Frankreich");
  const [status, setStatus]           = useState("idle");
  const [errorMsg, setErrorMsg]       = useState("");

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
