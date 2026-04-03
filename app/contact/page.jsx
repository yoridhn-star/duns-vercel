import { ShieldCheck, Mail, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contactez l'équipe DUNS Verify pour toute question sur votre recherche D-U-N-S.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#1E3A5F]" />
            <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">DUNS</span>
            <span className="text-xl font-normal text-slate-500">Verify</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1E3A5F] mb-4">Nous contacter</h1>
          <p className="text-slate-500 mb-10">
            Une question sur votre résultat ou votre paiement ? Notre équipe répond sous 24h.
          </p>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-6 text-left">

            <div className="flex items-start gap-4">
              <div className="bg-indigo-50 p-3 rounded-xl flex-shrink-0">
                <Mail className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">Email</p>
                <a
                  href="mailto:contact@dunsverify.fr"
                  className="text-indigo-600 hover:text-indigo-700 transition-colors text-sm"
                >
                  contact@dunsverify.fr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-3 rounded-xl flex-shrink-0">
                <Clock className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">Délai de réponse</p>
                <p className="text-slate-500 text-sm">Sous 24h ouvrées, du lundi au vendredi.</p>
              </div>
            </div>

          </div>

          <p className="mt-8 text-sm text-slate-400">
            Pour un remboursement ou un problème de paiement, merci de préciser votre email de
            commande et la date de la transaction.
          </p>
        </div>
      </main>

      <footer className="bg-[#1E3A5F] py-6 px-4 text-center text-sm text-slate-400">
        <Link href="/" className="text-slate-300 hover:text-white transition-colors">
          ← Retour à l&apos;accueil
        </Link>
      </footer>
    </div>
  );
}
