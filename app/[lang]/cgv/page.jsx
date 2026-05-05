import { ShieldCheck } from "lucide-react";
import LangSelector from "../../_components/LangSelector";
import { getDictionary, LOCALES } from "../../i18n";

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: isFr
      ? "Conditions Générales de Vente | DUNS Verify"
      : "Terms and Conditions | DUNS Verify",
    robots: { index: false },
  };
}

export default async function CgvPage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const isFr = lang === "fr";

  const c = isFr
    ? {
        title: "Conditions Générales de Vente",
        s1: "Description du service",
        s1t: "DUNS Verify est un service de recherche de numéro D-U-N-S (Data Universal Numbering System). Le service consiste à rechercher et fournir le numéro D-U-N-S d'une entreprise via une recherche dans les bases de données internationales. DUNS Verify est un service indépendant, non affilié à Dun & Bradstreet®.",
        s2: "Tarif",
        s2t: "Le prix du service est de 4,99 € TTC par recherche. Le paiement est sécurisé par Stripe. Aucun abonnement n'est souscrit : chaque recherche est facturée individuellement.",
        s3: "Politique de remboursement",
        s3t: "Si aucun numéro D-U-N-S n'est trouvé pour l'entreprise recherchée, le paiement de 4,99 € est remboursé automatiquement sur votre moyen de paiement, sans démarche de votre part. En cas de résultat fourni, aucun remboursement automatique n'est accordé. Toutefois, pour toute demande de remboursement exceptionnelle, vous pouvez contacter notre support à contact@dunsverify.com ; chaque demande est examinée individuellement.",
        s4: "Responsabilité",
        s4t: "DUNS Verify met en œuvre tous les moyens raisonnables pour fournir un résultat exact. Cependant, les informations proviennent de bases de données tierces et DUNS Verify ne peut garantir leur exhaustivité ou exactitude. En cas d'absence de résultat, le remboursement automatique s'applique conformément à notre politique de remboursement.",
        s5: "Données personnelles",
        s5t: "Les données collectées lors du paiement sont traitées par Stripe conformément à sa politique de confidentialité. DUNS Verify ne stocke pas vos données de paiement. Les données de recherche (nom d'entreprise, ville, pays, email) sont utilisées uniquement pour effectuer la recherche et envoyer le résultat.",
        s6: "Droit applicable",
        s6t: "Les présentes conditions sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire.",
      }
    : {
        title: "Terms and Conditions",
        s1: "Service Description",
        s1t: "DUNS Verify is a D-U-N-S number (Data Universal Numbering System) lookup service. The service consists of searching and providing a company's D-U-N-S number through a search of international databases. DUNS Verify is an independent service, not affiliated with Dun & Bradstreet®.",
        s2: "Pricing",
        s2t: "The price of the service is €4.99 per search. Payment is secured by Stripe. No subscription is created: each search is billed individually.",
        s3: "Refund Policy",
        s3t: "If no D-U-N-S number is found for the searched company, the €4.99 payment is automatically refunded to your payment method, with no action required on your part. If a result is provided, no automatic refund is issued. However, for any exceptional refund request, you may contact our support at contact@dunsverify.com; each request is reviewed individually.",
        s4: "Liability",
        s4t: "DUNS Verify uses all reasonable means to provide accurate results. However, information comes from third-party databases and DUNS Verify cannot guarantee their completeness or accuracy. In case of no result, an automatic refund is applied in accordance with our refund policy.",
        s5: "Personal Data",
        s5t: "Payment data collected during checkout is processed by Stripe in accordance with its privacy policy. DUNS Verify does not store your payment information. Search data (company name, city, country, email) is used solely to perform the search and deliver the result.",
        s6: "Applicable Law",
        s6t: "These terms are governed by applicable law. In the event of a dispute, the parties agree to seek an amicable resolution before any legal proceedings.",
      };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href={`/${lang}`} className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#1E3A5F]" aria-label="DUNS Verify" />
            <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">DUNS</span>
            <span className="text-xl font-normal text-slate-500">Verify</span>
          </a>
          <LangSelector currentLang={lang} />
        </div>
      </header>

      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-[#1E3A5F] mb-10">{c.title}</h1>

          {[
            [c.s1, c.s1t],
            [c.s2, c.s2t],
            [c.s3, c.s3t],
            [c.s4, c.s4t],
            [c.s5, c.s5t],
            [c.s6, c.s6t],
          ].map(([heading, body]) => (
            <section key={heading} className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-3">{heading}</h2>
              <p className="text-slate-600 leading-relaxed">{body}</p>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-[#1E3A5F] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span className="font-bold text-base text-white">DUNS</span>
            <span className="font-normal text-slate-300">Verify</span>
          </div>
          <span className="text-center sm:text-right">{t.footer.copyright}</span>
          <nav className="flex items-center gap-4 text-slate-400">
            {t.footer.links.map((link, i) => (
              <span key={i} className="flex items-center gap-4">
                {i > 0 && <span>·</span>}
                <a href={`/${lang}${t.footer.hrefs[i]}`} className="hover:text-white transition-colors">{link}</a>
              </span>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
