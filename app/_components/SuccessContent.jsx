"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ShieldCheck,
  Loader,
  Search,
  CheckCircle,
  AlertCircle,
  XCircle,
  MapPin,
  ArrowLeft,
} from "lucide-react";

export default function SuccessContent({ t, lang }) {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState("loading"); // loading | searching | success | error | no-result
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [refunded, setRefunded] = useState(false);
  const [elapsedSec, setElapsedSec] = useState(0);

  useEffect(() => {
    if (!sessionId) {
      setErrorMsg(t.sessionError);
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
          setErrorMsg(data.error || t.paymentError);
          setStatus("error");
          return;
        }
        metadata = data.metadata;
      } catch {
        setErrorMsg(t.paymentVerifyError);
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
            lang: metadata.lang || lang,
            sessionId,
          }),
          signal: AbortSignal.timeout(180_000),
        });
        const data = await res.json();
        clearInterval(ticker);

        if (!res.ok) {
          setErrorMsg(data.error || `Error ${res.status}`);
          setStatus("error");
          return;
        }

        if (data.data) {
          setResult(data.data);
          setStatus("success");
        } else {
          if (data.refunded) setRefunded(true);
          setStatus("no-result");
        }
      } catch (err) {
        clearInterval(ticker);
        setErrorMsg(err.message || t.error);
        setStatus("error");
      }
    }

    run();
  }, [sessionId]);

  const homeHref = `/${lang}`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center h-16">
          <a href={homeHref} className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#1E3A5F]" aria-label="DUNS Verify" />
            <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">DUNS</span>
            <span className="text-xl font-normal text-slate-500">Verify</span>
          </a>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-xl w-full">

          {/* ── Loading ── */}
          {status === "loading" && (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <div className="flex justify-center mb-6">
                <Loader className="w-12 h-12 text-emerald-500 animate-spin" />
              </div>
              <h1 className="text-2xl font-bold text-[#1E3A5F] mb-2">{t.verifying}</h1>
              <p className="text-slate-500 text-sm">{t.verifyingDesc}</p>
            </div>
          )}

          {/* ── Searching ── */}
          {status === "searching" && (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <div className="flex justify-center mb-6">
                <Search className="w-12 h-12 text-emerald-500 animate-pulse" />
              </div>
              <h1 className="text-2xl font-bold text-[#1E3A5F] mb-2">{t.searching}</h1>
              <p className="text-slate-500 text-sm mb-4">{t.searchingDesc}</p>
              <div className="flex justify-center mb-5">
                <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-sm font-medium px-3 py-1 rounded-full border border-amber-200">
                  {elapsedSec}s
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full animate-progress" />
              </div>
            </div>
          )}

          {/* ── Success ── */}
          {status === "success" && result && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-16 h-16 text-emerald-500" />
              </div>
              <h1 className="text-2xl font-bold text-[#1E3A5F] text-center mb-2">{t.found}</h1>
              <p className="text-slate-500 text-sm text-center mb-6">{t.foundDesc}</p>
              <ResultCard result={result} t={t} />
              <div className="mt-6 text-center">
                <a
                  href={homeHref}
                  className="inline-flex items-center gap-2 border border-[#1E3A5F] text-[#1E3A5F] hover:bg-slate-50 transition-colors text-sm font-medium px-5 py-2.5 rounded-lg"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t.newSearch}
                </a>
              </div>
            </div>
          )}

          {/* ── No result ── */}
          {status === "no-result" && (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                {refunded
                  ? <CheckCircle className="w-16 h-16 text-emerald-500" />
                  : <AlertCircle className="w-16 h-16 text-amber-500" />
                }
              </div>
              <h1 className="text-2xl font-bold text-[#1E3A5F] mb-4">
                {refunded ? t.refunded : t.notFound}
              </h1>
              <div className={`border-l-4 ${refunded ? "border-emerald-400 bg-emerald-50" : "border-amber-400 bg-amber-50"} rounded-r-xl p-4 mb-6 text-left`}>
                <p className="text-slate-600 text-sm">
                  {refunded ? t.refundedDesc : t.notFoundDesc}
                </p>
              </div>
              <a
                href={homeHref}
                className="inline-flex items-center gap-2 border border-[#1E3A5F] text-[#1E3A5F] hover:bg-slate-50 transition-colors text-sm font-medium px-5 py-2.5 rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                {t.back}
              </a>
            </div>
          )}

          {/* ── Error ── */}
          {status === "error" && (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <XCircle className="w-16 h-16 text-red-500" />
              </div>
              <h1 className="text-2xl font-bold text-[#1E3A5F] mb-2">{t.error}</h1>
              <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-4 mb-6 text-left">
                <p className="text-slate-600 text-sm">{errorMsg}</p>
              </div>
              <a
                href={homeHref}
                className="inline-flex items-center gap-2 border border-[#1E3A5F] text-[#1E3A5F] hover:bg-slate-50 transition-colors text-sm font-medium px-5 py-2.5 rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                {t.back}
              </a>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1E3A5F] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span className="font-bold text-base text-white">DUNS</span>
            <span className="font-normal text-slate-300">Verify</span>
          </div>
          <span className="text-center text-slate-400 text-xs">
            © {new Date().getFullYear()} DUNS Verify. All rights reserved.
          </span>
        </div>
      </footer>

    </div>
  );
}

function ResultCard({ result, t }) {
  const name    = result.companyName || result.name || "";
  const duns    = result.dunsNumber  || result.duns || "";
  const address = result.address     || "";

  return (
    <div className="border-l-4 border-emerald-500 bg-white shadow-md rounded-r-xl p-5">
      {name ? (
        <p className="font-bold text-[#1E3A5F] text-xl mb-3">{name}</p>
      ) : (
        <p className="font-bold text-slate-400 text-xl mb-3 italic">{t.nameUnavailable}</p>
      )}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide w-20 flex-shrink-0">
          {t.duns}
        </span>
        {duns ? (
          <span className="font-mono font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-lg text-lg">
            {formatDuns(duns)}
          </span>
        ) : (
          <span className="text-slate-400 text-sm italic">—</span>
        )}
      </div>
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
        {address ? (
          <span className="text-sm text-slate-600">{address}</span>
        ) : (
          <span className="text-slate-400 text-sm italic">—</span>
        )}
      </div>
    </div>
  );
}

function formatDuns(raw) {
  const digits = String(raw).replace(/\D/g, "");
  if (digits.length === 9) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  return raw;
}
