import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales de DUNS Verify — service de recherche de numéro D-U-N-S.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
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
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold text-[#1E3A5F] mb-8">Mentions légales</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Éditeur du site</h2>
            <p className="text-slate-600 leading-relaxed">
              DUNS Verify est un service indépendant, non affilié à Dun &amp; Bradstreet®.<br />
              Pour toute question, contactez-nous à :{" "}
              <a href="mailto:contact@dunsverify.fr" className="text-indigo-600 hover:underline">
                contact@dunsverify.fr
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Hébergement</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, États-Unis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Propriété intellectuelle</h2>
            <p className="text-slate-600 leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, logotypes) est protégé par le droit d&apos;auteur.
              Toute reproduction, même partielle, est interdite sans accord préalable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Données personnelles</h2>
            <p className="text-slate-600 leading-relaxed">
              Les données collectées (nom d&apos;entreprise, ville, email) sont utilisées exclusivement pour
              effectuer la recherche D-U-N-S commandée. Elles ne sont ni revendues ni transmises à des tiers.
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
              en écrivant à{" "}
              <a href="mailto:contact@dunsverify.fr" className="text-indigo-600 hover:underline">
                contact@dunsverify.fr
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Ce site utilise uniquement les cookies strictement nécessaires au fonctionnement du
              paiement sécurisé (Stripe). Aucun cookie publicitaire ou de tracking tiers n&apos;est déposé.
            </p>
          </section>
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
