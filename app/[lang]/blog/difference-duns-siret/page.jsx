import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";

export async function generateStaticParams() {
  return [{ lang: "fr" }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (lang !== "fr") return {};
  return {
    title: "Différence DUNS et SIRET : Comparaison Complète des Identifiants Entreprise | DUNS Verify",
    description: "Quelle différence entre le numéro DUNS et le SIRET ? Comparatif complet : portée, attribution, usage, structure. Lequel vous faut-il vraiment ?",
    alternates: { canonical: `${SITE_URL}/fr/blog/difference-duns-siret` },
    openGraph: {
      title: "Différence DUNS vs SIRET : Comparaison Complète",
      description: "DUNS vs SIRET : portée, attribution, usage. Quel identifiant vous faut-il selon votre situation ?",
      url: `${SITE_URL}/fr/blog/difference-duns-siret`,
      siteName: "DUNS Verify",
      type: "article",
    },
  };
}

export default async function Article({ params }) {
  const { lang } = await params;
  if (lang !== "fr") return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DUNS vs SIRET : Quelle Différence et Lequel Vous Faut-il ?",
    description: "Comparatif complet entre le numéro DUNS et le SIRET pour les entreprises françaises.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/fr/blog/difference-duns-siret`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen flex flex-col">
        <BlogHeader lang={lang} />

        <main className="flex-1 py-12 px-4">
          <div className="max-w-3xl mx-auto">

            <nav className="text-sm text-slate-500 mb-6">
              <a href={`/${lang}`} className="hover:text-emerald-600 transition-colors">Accueil</a>
              <span className="mx-2">›</span>
              <a href={`/${lang}/blog`} className="hover:text-emerald-600 transition-colors">Blog</a>
              <span className="mx-2">›</span>
              <span className="text-slate-700">Différence DUNS et SIRET</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
              DUNS vs SIRET : Quelle Différence et Lequel Vous Faut-il ?
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              En tant qu'entreprise française, vous êtes familier avec le SIRET. Mais quelle est la différence avec le numéro DUNS, et dans quels cas en avez-vous besoin ? Ce comparatif vous aidera à y voir clair sur ces deux identifiants complémentaires.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Comprendre les deux identifiants</h2>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Le SIRET : l'identifiant national français</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le SIRET (Système d'Identification du Répertoire des Établissements) est un numéro à 14 chiffres attribué par l'INSEE à chaque établissement d'une entreprise en France. Il est composé du SIREN (9 chiffres, qui identifie l'entreprise elle-même) suivi d'un code NIC (5 chiffres, qui identifie l'établissement spécifique).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le SIRET est attribué automatiquement lors de l'immatriculation de l'entreprise en France. Il est gratuit, obligatoire pour toute entreprise française, et sert à toutes les démarches administratives nationales : déclarations fiscales, contrats de travail, factures, etc.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Le numéro DUNS : l'identifiant mondial</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le DUNS (Data Universal Numbering System) est un numéro à 9 chiffres attribué par Dun &amp; Bradstreet (D&amp;B), une entreprise privée américaine. Contrairement au SIRET, le DUNS n'est pas automatiquement attribué : il doit être demandé. Son objectif est d'identifier les entreprises dans les échanges commerciaux internationaux.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Tableau comparatif complet</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1E3A5F] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Critère</th>
                    <th className="px-4 py-3 text-left font-semibold">SIRET</th>
                    <th className="px-4 py-3 text-left font-semibold">Numéro DUNS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Portée géographique", "France uniquement", "224 pays"],
                    ["Attribué par", "INSEE (gouvernement français)", "Dun & Bradstreet (entreprise privée américaine)"],
                    ["Structure", "14 chiffres (SIREN 9 + NIC 5)", "9 chiffres"],
                    ["Attribution", "Automatique à l'immatriculation", "Sur demande (volontaire)"],
                    ["Coût", "Gratuit et obligatoire", "Gratuit (long) ou payant (rapide)"],
                    ["Usage principal", "Administration et fiscalité françaises", "Commerce international"],
                    ["Reconnaissance", "France (+ UE partiellement)", "Mondiale (224 pays)"],
                    ["Lien avec crédit", "Non", "Oui (score de crédit D&B)"],
                    ["Délai d'obtention", "Immédiat", "15-30 jours (ou 2 min avec service)"],
                  ].map(([criterion, siret, duns], i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-[#F8FAFC]"}>
                      <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">{criterion}</td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-600">{siret}</td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-600">{duns}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <BlogCTA lang={lang} />

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Quand avez-vous besoin du SIRET uniquement ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le SIRET est suffisant pour la grande majorité des activités purement françaises :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li>Déclarations TVA et impôts en France</li>
              <li>Contrats de travail et bulletins de salaire</li>
              <li>Facturation à des clients français</li>
              <li>Marchés publics français</li>
              <li>Comptes bancaires professionnels en France</li>
              <li>Inscription à des registres professionnels français</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Quand avez-vous besoin du numéro DUNS ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le numéro DUNS devient indispensable dès que vous sortez du cadre purement français :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li>Publication d'applications sur <strong>l'App Store</strong> (compte Organisation Apple Developer)</li>
              <li>Inscription sur <strong>Google Play Store</strong> en tant qu'organisation</li>
              <li>Réponse à des <strong>appels d'offres internationaux</strong> (ONU, UE, gouvernement américain)</li>
              <li>Partenariats avec des <strong>multinationales américaines ou asiatiques</strong></li>
              <li>Inscription sur la plateforme <strong>SAM.gov</strong> (marchés américains)</li>
              <li>Financement par des <strong>investisseurs étrangers</strong> qui effectuent une due diligence</li>
              <li>Exportation vers des marchés qui exigent une vérification D&amp;B</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cas où les deux sont nécessaires</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dans de nombreux cas, vous aurez besoin des deux identifiants simultanément. Par exemple :
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#F8FAFC] rounded-xl p-5">
                <p className="font-semibold text-slate-800 mb-1">Appel d'offres européen</p>
                <p className="text-sm text-slate-600">La Commission Européenne exige souvent les deux : votre SIRET pour les entreprises françaises (identification nationale) et votre DUNS pour l'identification internationale. Les deux sont demandés dans le formulaire d'inscription.</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-5">
                <p className="font-semibold text-slate-800 mb-1">Programme de financement international</p>
                <p className="text-sm text-slate-600">Un programme comme Horizon Europe demande le SIRET (ou équivalent national) pour les entreprises françaises, puis un identifiant international comme le DUNS pour la base de données des bénéficiaires.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Le lien entre SIRET et DUNS en France</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              En France, D&amp;B utilise le SIRET comme l'un des identifiants de référence pour valider l'existence d'une entreprise et lui attribuer un numéro DUNS. Quand vous demandez un numéro DUNS, vous devez fournir votre SIRET — c'est l'une des preuves principales de votre existence légale.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              D&amp;B croise ensuite votre SIRET avec les données de l'INSEE pour vérifier que toutes les informations correspondent. C'est pourquoi les informations que vous soumettez pour obtenir votre DUNS doivent correspondre exactement à votre fiche INSEE.
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">
              Pour approfondir le sujet, lisez notre article complet sur <a href={`/${lang}/blog/numero-duns-definition`} className="text-emerald-600 hover:underline">la définition du numéro DUNS</a> ou notre guide sur <a href={`/${lang}/blog/obtenir-numero-duns-france`} className="text-emerald-600 hover:underline">comment obtenir un numéro DUNS en France</a>.
            </p>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articles connexes</h3>
              <ul className="space-y-2">
                {[
                  { slug: "numero-duns", title: "Numéro DUNS : Le Guide Complet 2026" },
                  { slug: "numero-duns-definition", title: "Numéro DUNS : C'est Quoi ? Définition Simple" },
                  { slug: "obtenir-numero-duns-france", title: "Comment Obtenir un Numéro DUNS en France" },
                ].map((a) => (
                  <li key={a.slug}>
                    <a href={`/${lang}/blog/${a.slug}`} className="text-emerald-600 hover:underline text-sm">
                      → {a.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <BlogCTA lang={lang} />
          </div>
        </main>

        <BlogFooter lang={lang} />
      </div>
    </>
  );
}
