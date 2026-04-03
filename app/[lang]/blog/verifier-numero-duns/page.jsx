import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";
import { LOCALES } from "../../../i18n";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Vérifier un Numéro DUNS : Comment Rechercher le D-U-N-S d'une Entreprise | DUNS Verify",
    description: "Comment vérifier le numéro DUNS d'une entreprise en ligne ? Méthodes de recherche, due diligence B2B et ce que le DUNS révèle sur une société.",
    alternates: { canonical: `${SITE_URL}/${lang}/blog/verifier-numero-duns` },
    openGraph: {
      title: "Comment Vérifier le Numéro DUNS d'une Entreprise",
      description: "Méthodes pour rechercher et vérifier le DUNS d'une entreprise. Due diligence et partenariats B2B.",
      url: `${SITE_URL}/${lang}/blog/verifier-numero-duns`,
      siteName: "DUNS Verify",
      type: "article",
    },
  };
}

export default async function Article({ params }) {
  const { lang } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Comment Vérifier le Numéro DUNS d'une Entreprise en Ligne",
    description: "Guide complet sur les méthodes de vérification du numéro DUNS d'une entreprise.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/${lang}/blog/verifier-numero-duns`,
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
              <span className="text-slate-700">Vérifier un numéro DUNS</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
              Comment Vérifier le Numéro DUNS d'une Entreprise en Ligne
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Que vous souhaitiez connaître votre propre numéro DUNS ou vérifier celui d'un partenaire commercial potentiel, les méthodes disponibles sont variées. Ce guide vous explique comment effectuer cette vérification efficacement et ce que vous pouvez en apprendre.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Pourquoi vérifier le numéro DUNS d'une entreprise ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              La vérification du numéro DUNS d'une entreprise répond à plusieurs besoins distincts selon la situation :
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Due diligence avant partenariat", desc: "Avant de signer un contrat ou d'engager une relation commerciale significative, vérifier le DUNS d'un partenaire permet de confirmer son existence légale et d'accéder à des informations financières de base." },
                { title: "Vérification fournisseur", desc: "Dans le cadre d'une politique d'homologation des fournisseurs, de nombreuses grandes entreprises exigent de leurs fournisseurs qu'ils aient un DUNS valide et à jour." },
                { title: "Connaître son propre DUNS", desc: "Si vous ignorez si votre entreprise possède déjà un numéro DUNS (attribué automatiquement par D&B), la première étape est de le vérifier avant d'en demander un nouveau." },
                { title: "Validation dans un formulaire", desc: "Certains appels d'offres ou formulaires d'inscription demandent la vérification du DUNS pour s'assurer que le numéro fourni est bien associé à l'entité candidate." },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-[#F8FAFC] rounded-xl p-5">
                  <p className="font-semibold text-slate-800 mb-2 text-sm">{title}</p>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 1 : DUNS Verify (rapide et simple)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              La façon la plus simple de vérifier un numéro DUNS est d'utiliser le service DUNS Verify. En saisissant le nom de l'entreprise et sa ville, notre système recherche automatiquement dans la base de données D&amp;B et vous retourne le numéro DUNS associé par email en moins de 2 minutes.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ce service est particulièrement utile si vous voulez :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li>Connaître votre propre numéro DUNS avant de commencer une démarche</li>
              <li>Vérifier rapidement qu'une entreprise possède bien un DUNS</li>
              <li>Obtenir un numéro DUNS si l'entreprise n'en a pas encore</li>
            </ul>

            <BlogCTA lang={lang} />

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 2 : Le portail officiel D&amp;B</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dun &amp; Bradstreet propose plusieurs outils en ligne pour rechercher des informations sur les entreprises. Le portail principal permet d'effectuer une recherche par nom d'entreprise, ville et pays pour trouver les entités enregistrées dans la base D&amp;B.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pour accéder aux informations détaillées d'une entreprise (informations financières, score de crédit, historique), il faut généralement souscrire à l'un des abonnements payants D&amp;B. La simple vérification de l'existence d'un DUNS est souvent disponible gratuitement.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 3 : Altares (pour les entreprises françaises)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Altares est le partenaire officiel de D&amp;B en France. Leur portail permet de rechercher des informations sur les entreprises françaises, y compris leur numéro DUNS. Altares propose des services allant de la simple recherche d'identifiant à des rapports d'analyse approfondis.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pour les entreprises françaises, Altares est souvent une bonne source d'information car elle dispose de données très complètes sur le tissu économique français, en plus des données D&amp;B internationales.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Ce que le numéro DUNS révèle sur une entreprise</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le numéro DUNS en lui-même est un identifiant — c'est ce à quoi il donne accès qui est vraiment précieux. Voici les informations que vous pouvez obtenir via le profil D&amp;B d'une entreprise :
            </p>

            <div className="space-y-3 mb-6">
              {[
                { label: "Informations de base", items: ["Raison sociale officielle", "Adresse du siège social", "Forme juridique", "Date de création", "Code NAF/secteur d'activité"] },
                { label: "Informations structurelles", items: ["Effectifs (approximatifs)", "Structure du groupe (maison mère, filiales)", "Chiffre d'affaires déclaré (si public)", "Dirigeants principaux"] },
                { label: "Informations financières (abonnement)", items: ["Score Paydex (délais de paiement)", "Score de crédit D&B", "Limite de crédit recommandée", "Historique des incidents de paiement"] },
              ].map(({ label, items }) => (
                <div key={label} className="border border-slate-200 rounded-xl p-5">
                  <p className="font-semibold text-[#1E3A5F] mb-2">{label}</p>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-2">
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Comment interpréter un numéro DUNS</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le numéro DUNS en lui-même (9 chiffres) ne contient pas d'information encodée sur l'entreprise — contrairement au SIRET qui inclut le SIREN (et donc la date de création approximative pour les anciens numéros). Le DUNS est purement séquentiel.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ce qui est important, c'est de vérifier que le numéro DUNS qu'on vous fournit correspond bien à la bonne entreprise. Des cas de fraude existent où des entreprises utilisent le DUNS d'une autre entité. La vérification consiste donc à s'assurer que le numéro DUNS est bien associé à la raison sociale, l'adresse et les informations de l'entreprise en question.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cas d'usage concrets</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-[#F8FAFC] rounded-xl p-5">
                <p className="font-semibold text-slate-800 mb-1">Vérification avant signature de contrat</p>
                <p className="text-sm text-slate-600">Une entreprise de distribution reçoit une offre d'un nouveau fournisseur étranger. Avant de signer, elle vérifie le DUNS du fournisseur pour confirmer son existence légale et consulter son score de crédit. Le résultat : le fournisseur a un Paydex de 80/100, ce qui indique des paiements généralement dans les délais.</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-5">
                <p className="font-semibold text-slate-800 mb-1">Appel d'offres international</p>
                <p className="text-sm text-slate-600">Un acheteur public vérifie le DUNS de plusieurs candidats à un appel d'offres pour s'assurer que les numéros fournis correspondent bien aux entreprises candidates. Deux candidats fournissent des DUNS invalides et sont éliminés d'office.</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Pour plus d'informations sur l'histoire et le fonctionnement du système DUNS, consultez notre article sur <a href={`/${lang}/blog/duns-number-dun-bradstreet`} className="text-emerald-600 hover:underline">Dun & Bradstreet et le DUNS Number</a>.
            </p>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articles connexes</h3>
              <ul className="space-y-2">
                {[
                  { slug: "numero-duns", title: "Numéro DUNS : Le Guide Complet 2026" },
                  { slug: "numero-duns-definition", title: "Numéro DUNS : C'est Quoi ? Définition Simple" },
                  { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet et le DUNS Number" },
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
