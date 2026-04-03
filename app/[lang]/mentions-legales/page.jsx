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
    title: isFr ? "Mentions légales | DUNS Verify" : "Legal Notice | DUNS Verify",
    robots: { index: false },
  };
}

export default async function MentionsLegalesPage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const isFr = lang === "fr";

  const c = isFr
    ? {
        title: "Mentions légales",
        s1: "Éditeur du site",
        s1t: "DUNS Verify est un service indépendant, non affilié à Dun & Bradstreet®. Pour toute question, contactez-nous à : contact@dunsverify.com",
        s2: "Hébergement",
        s2t: "Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, États-Unis.",
        s3: "Propriété intellectuelle",
        s3t: "L'ensemble du contenu de ce site (textes, images, logotypes) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans accord préalable.",
        s4: "Données personnelles",
        s4t: "Les données collectées (nom d'entreprise, ville, email) sont utilisées exclusivement pour effectuer la recherche D-U-N-S commandée. Elles ne sont ni revendues ni transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression en écrivant à contact@dunsverify.com.",
        s5: "Cookies",
        s5t: "Ce site utilise uniquement les cookies strictement nécessaires au fonctionnement du paiement sécurisé (Stripe). Aucun cookie publicitaire ou de tracking tiers n'est déposé.",
      }
    : {
        title: "Legal Notice",
        s1: "Site Publisher",
        s1t: "DUNS Verify is an independent service, not affiliated with Dun & Bradstreet®. For any questions: contact@dunsverify.com",
        s2: "Hosting",
        s2t: "This website is hosted by Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, United States.",
        s3: "Intellectual Property",
        s3t: "All content on this site (texts, images, logos) is protected by copyright. Any reproduction, even partial, is prohibited without prior agreement.",
        s4: "Personal Data",
        s4t: "Data collected (company name, city, email) is used exclusively to perform the requested D-U-N-S lookup. It is not sold or shared with third parties. Under GDPR, you have the right to access, rectify, and delete your data by writing to contact@dunsverify.com.",
        s5: "Cookies",
        s5t: "This site only uses cookies strictly necessary for secure payment processing (Stripe). No advertising or third-party tracking cookies are placed.",
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
