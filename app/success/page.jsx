"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState("loading"); // loading | searching | success | error | no-result
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [elapsedSec, setElapsedSec] = useState(0);

  useEffect(() => {
    if (!sessionId) {
      setErrorMsg("Session introuvable. Veuillez recommencer.");
      setStatus("error");
      return;
    }

    async function run() {
      // 1. Verify payment & get metadata
      let metadata;
      try {
        const res = await fetch(`/api/checkout-session?session_id=${sessionId}`);
        const data = await res.json();
        if (!res.ok) {
          setErrorMsg(data.error || "Paiement non confirmé.");
          setStatus("error");
          return;
        }
        metadata = data.metadata;
      } catch {
        setErrorMsg("Impossible de vérifier le paiement.");
        setStatus("error");
        return;
      }

      // 2. Launch DUNS scraping
      setStatus("searching");
      const startTime = Date.now();
      const ticker = setInterval(() => {
        setElapsedSec(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);

      try {
        const res = await fetch("/api/lookup-duns", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            companyName: metadata.companyName,
            city: metadata.city,
            country: metadata.country,
            email: metadata.email,
          }),
          signal: AbortSignal.timeout(180_000),
        });
        const data = await res.json();
        clearInterval(ticker);

        if (!res.ok) {
          setErrorMsg(data.error || `Erreur ${res.status}`);
          setStatus("error");
          return;
        }

        if (data.data) {
          setResult(data.data);
          setStatus("success");
        } else {
          setStatus("no-result");
        }
      } catch (err) {
        clearInterval(ticker);
        setErrorMsg(err.message || "Une erreur est survenue lors de la recherche.");
        setStatus("error");
      }
    }

    run();
  }, [sessionId]);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold tracking-tight">
            <span className="text-indigo-600">DUNS</span>
            <span className="text-gray-500 font-medium"> Verify</span>
          </a>
        </div>
      </header>

      <main className="flex-1 pt-16 bg-gray-50 flex items-center justify-center py-20 px-4">
        <div className="max-w-xl w-full">

          {/* Loading / Searching */}
          {(status === "loading" || status === "searching") && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center">
                  <Spinner />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {status === "loading" ? "Vérification du paiement…" : "Recherche de votre numéro D-U-N-S en cours…"}
              </h1>
              {status === "searching" && (
                <>
                  <p className="text-gray-500 text-sm mb-1">
                    Cela peut prendre jusqu&apos;à 2 minutes, merci de patienter.
                  </p>
                  <p className="text-gray-400 text-sm">{elapsedSec}s</p>
                </>
              )}
              {status === "loading" && (
                <p className="text-gray-500 text-sm">Confirmation du paiement Stripe en cours.</p>
              )}
            </div>
          )}

          {/* Success */}
          {status === "success" && result && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              {/* Success badge */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Numéro D-U-N-S trouvé !
              </h1>
              <p className="text-gray-500 text-sm text-center mb-6">
                Voici les informations trouvées pour votre entreprise.
              </p>
              <ResultCard result={result} />
              <div className="mt-6 text-center">
                <a
                  href="/"
                  className="inline-block text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  ← Nouvelle recherche
                </a>
              </div>
            </div>
          )}

          {/* No result */}
          {status === "no-result" && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Aucun résultat trouvé</h1>
              <p className="text-gray-500 text-sm mb-6">
                Nous n&apos;avons pas trouvé de numéro D-U-N-S pour cette entreprise dans notre base de données.
                Vous pouvez en demander un gratuitement sur le site officiel de Dun &amp; Bradstreet.
              </p>
              <a
                href="/"
                className="inline-block text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                ← Nouvelle recherche
              </a>
            </div>
          )}

          {/* Error */}
          {status === "error" && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Une erreur est survenue</h1>
              <p className="text-red-600 text-sm mb-6">{errorMsg}</p>
              <a
                href="/"
                className="inline-block text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                ← Retour à l&apos;accueil
              </a>
            </div>
          )}

        </div>
      </main>

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

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Spinner /></div>}>
      <SuccessContent />
    </Suspense>
  );
}

function ResultCard({ result }) {
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
    <svg className="animate-spin h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24">
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
