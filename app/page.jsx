"use client";

import { useState } from "react";

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

// Render free tier cold-start warning threshold (ms)
const COLD_START_THRESHOLD_MS = 15_000;

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Frankreich"); // value sent to API

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [showColdStartWarning, setShowColdStartWarning] = useState(false);
  const [elapsedSec, setElapsedSec] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!companyName.trim()) return;

    setStatus("loading");
    setResults([]);
    setErrorMsg("");
    setShowColdStartWarning(false);
    setElapsedSec(0);

    // Show cold-start warning after 15 s
    const startTime = Date.now();
    const coldStartTimer = setTimeout(() => setShowColdStartWarning(true), COLD_START_THRESHOLD_MS);

    // Elapsed counter
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

      if (!res.ok) {
        throw new Error(data.error || `Erreur ${res.status}`);
      }

      setResults(data.results || []);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message || "Une erreur est survenue.");
      setStatus("error");
    } finally {
      clearTimeout(coldStartTimer);
      clearInterval(ticker);
      setShowColdStartWarning(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">DUNS Lookup</h1>
          <p className="mt-2 text-gray-500">
            Recherchez le numéro D-U-N-S d&rsquo;une entreprise
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Company name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nom de l&rsquo;entreprise <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Ex : Airbus SAS"
                required
                disabled={status === "loading"}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           disabled:bg-gray-100 disabled:cursor-not-allowed
                           transition text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Pays
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           disabled:bg-gray-100 disabled:cursor-not-allowed
                           transition text-gray-900 bg-white"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Email (optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email{" "}
                <span className="text-gray-400 font-normal">(optionnel — pour recevoir les résultats)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.com"
                disabled={status === "loading"}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           disabled:bg-gray-100 disabled:cursor-not-allowed
                           transition text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading" || !companyName.trim()}
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300
                         text-white font-semibold rounded-lg shadow-md
                         transition-all duration-200 disabled:cursor-not-allowed
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <Spinner />
                  Recherche en cours… ({elapsedSec}s)
                </span>
              ) : (
                "Rechercher le numéro DUNS"
              )}
            </button>
          </form>

          {/* Cold start warning */}
          {showColdStartWarning && (
            <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-lg flex gap-3">
              <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-amber-700">Démarrage du serveur…</p>
                <p className="text-sm text-amber-600 mt-0.5">
                  Le serveur est en cours de démarrage (cold&nbsp;start). La première requête peut
                  prendre jusqu&rsquo;à 30&nbsp;secondes. Merci de patienter.
                </p>
              </div>
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
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

          {/* Success — no results */}
          {status === "success" && results.length === 0 && (
            <div className="mt-5 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
              <p className="text-gray-500 text-sm">
                Aucun résultat trouvé pour <strong>{companyName}</strong> en <strong>{country}</strong>.
              </p>
            </div>
          )}

          {/* Results */}
          {status === "success" && results.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                {results.length} résultat{results.length > 1 ? "s" : ""} trouvé{results.length > 1 ? "s" : ""}
              </h2>
              <div className="space-y-3">
                {results.map((r, i) => (
                  <ResultCard key={i} result={r} />
                ))}
              </div>
              {email.trim() && (
                <p className="text-xs text-gray-400 mt-4">
                  Les résultats ont également été envoyés à&nbsp;
                  <span className="font-medium text-gray-500">{email}</span>.
                </p>
              )}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ResultCard({ result }) {
  return (
    <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm">
      {/* Company name */}
      {result.name ? (
        <p className="font-bold text-gray-900 text-base mb-3">{result.name}</p>
      ) : (
        <p className="font-bold text-gray-400 text-base mb-3 italic">Nom non disponible</p>
      )}

      {/* DUNS number */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-24 flex-shrink-0">
          D-U-N-S
        </span>
        {result.duns ? (
          <span className="font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md text-sm">
            {formatDuns(result.duns)}
          </span>
        ) : (
          <span className="text-gray-400 text-sm italic">—</span>
        )}
      </div>

      {/* Address */}
      <div className="flex items-start gap-2">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-24 flex-shrink-0 mt-0.5">
          Adresse
        </span>
        {result.address ? (
          <span className="text-sm text-gray-700">{result.address}</span>
        ) : (
          <span className="text-gray-400 text-sm italic">—</span>
        )}
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 text-white"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

// Format 9-digit DUNS as XXX-XXX-XXX
function formatDuns(raw) {
  const digits = String(raw).replace(/\D/g, "");
  if (digits.length === 9) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return raw;
}
