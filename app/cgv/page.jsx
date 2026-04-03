import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente du service DUNS Verify.",
  alternates: { canonical: "/cgv" },
};

export default function CGV() {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-[#1E3A5F] mb-8">Conditions Générales de Vente</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Objet</h2>
            <p className="text-slate-600 leading-relaxed">
              DUNS Verify propose un service de recherche du numéro D-U-N-S d&apos;une entreprise via
              les bases de données publiques de Dun &amp; Bradstreet (UPIK®). Ce service est indépendant
              et non affilié à Dun &amp; Bradstreet®.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Prix et paiement</h2>
            <p className="text-slate-600 leading-relaxed">
              Le tarif est de <strong>4,99 € TTC</strong> par recherche. Le paiement est traité de manière
              sécurisée par Stripe. Aucune donnée bancaire n&apos;est stockée sur nos serveurs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Prestation et délais</h2>
            <p className="text-slate-600 leading-relaxed">
              La recherche est effectuée automatiquement après confirmation du paiement. Le résultat
              est affiché à l&apos;écran et envoyé par email dans un délai de 2 minutes en conditions normales.
              Ce délai peut exceptionnellement être porté à 5 minutes en cas de charge serveur élevée.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Résultats et remboursement</h2>
            <p className="text-slate-600 leading-relaxed">
              DUNS Verify interroge des bases de données publiques. Si aucun numéro D-U-N-S n&apos;est trouvé
              pour l&apos;entreprise renseignée, cela signifie qu&apos;elle n&apos;en possède pas encore. Dans ce cas,
              nous informons le client et lui indiquons comment en obtenir un gratuitement auprès de
              Dun &amp; Bradstreet. Aucun remboursement n&apos;est accordé si la recherche a bien été effectuée,
              quel que soit le résultat.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Droit de rétractation</h2>
            <p className="text-slate-600 leading-relaxed">
              Conformément à l&apos;article L.221-28 du Code de la consommation, le droit de rétractation
              ne s&apos;applique pas aux prestations de services pleinement exécutées avant la fin du délai
              de rétractation. En confirmant le paiement, le client accepte expressément que la
              prestation soit exécutée immédiatement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">6. Responsabilité</h2>
            <p className="text-slate-600 leading-relaxed">
              DUNS Verify ne peut être tenu responsable de l&apos;exactitude des données fournies par
              les bases de données Dun &amp; Bradstreet, ni d&apos;une éventuelle indisponibilité temporaire
              du service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">7. Droit applicable</h2>
            <p className="text-slate-600 leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux
              français seront seuls compétents.
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
