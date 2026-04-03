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
    title: "Comment Obtenir un Numéro DUNS en France en 2026 — Guide Étape par Étape | DUNS Verify",
    description: "Guide complet pour obtenir votre numéro DUNS en France : 3 méthodes comparées, étapes détaillées, délais et coûts. Obtenez votre DUNS en 2 minutes.",
    alternates: { canonical: `${SITE_URL}/fr/blog/obtenir-numero-duns-france` },
    openGraph: {
      title: "Comment Obtenir un Numéro DUNS en France — Guide 2026",
      description: "3 méthodes comparées pour obtenir votre numéro DUNS en France. Délais, coûts et étapes détaillées.",
      url: `${SITE_URL}/fr/blog/obtenir-numero-duns-france`,
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
    headline: "Comment Obtenir un Numéro DUNS en France : Guide Complet 2026",
    description: "Guide étape par étape pour obtenir votre numéro DUNS en France, avec comparatif des méthodes disponibles.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/fr/blog/obtenir-numero-duns-france`,
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
              <span className="text-slate-700">Obtenir un numéro DUNS en France</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
              Comment Obtenir un Numéro DUNS en France : Guide Complet 2026
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Vous avez besoin d'un numéro DUNS pour une candidature, une inscription Apple Developer ou un appel d'offres ? Ce guide vous présente toutes les méthodes disponibles en France, avec une comparaison honnête des délais et des coûts pour que vous puissiez choisir la solution adaptée à votre situation.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Ce qu'est le numéro DUNS et pourquoi vous en avez besoin</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le numéro DUNS (Data Universal Numbering System) est un identifiant unique à 9 chiffres attribué par Dun &amp; Bradstreet (D&amp;B) à chaque entreprise dans le monde. Il est utilisé comme standard d'identification internationale par Apple, Google, la Commission Européenne, les Nations Unies et des dizaines d'autres organisations.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Si vous lisez ce guide, vous avez probablement une raison urgente d'obtenir ce numéro. Commençons par les méthodes disponibles.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 1 : DUNS Verify (2 minutes, 4,99 €)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              C'est la méthode la plus rapide. DUNS Verify interroge directement les bases de données de Dun &amp; Bradstreet et vous fournit votre numéro DUNS certifié par email en moins de 2 minutes. Le processus est entièrement automatisé et disponible 24h/24, 7j/7.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Saisissez le nom de votre entreprise", desc: "Entrez la raison sociale exacte de votre entreprise et votre adresse. Ces informations doivent correspondre à votre enregistrement légal." },
                { step: "2", title: "Vérifiez les résultats", desc: "Notre système recherche automatiquement dans la base D&B et identifie votre entreprise parmi les millions d'entrées existantes." },
                { step: "3", title: "Recevez votre DUNS", desc: "Votre numéro DUNS certifié vous est envoyé par email en moins de 2 minutes. Vous pouvez l'utiliser immédiatement." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{step}</div>
                  <div>
                    <p className="font-semibold text-slate-800">{title}</p>
                    <p className="text-sm text-slate-600 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <BlogCTA lang={lang} />

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 2 : La voie officielle D&amp;B (gratuit, 15-30 jours)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dun &amp; Bradstreet propose un processus d'enregistrement gratuit sur son site officiel. Voici ce que vous devez faire :
            </p>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Accédez au portail D&B", desc: "Rendez-vous sur le site officiel de Dun & Bradstreet et sélectionnez l'option d'enregistrement pour un nouveau numéro DUNS." },
                { step: "2", title: "Renseignez les informations de votre entreprise", desc: "Saisissez toutes les informations requises : raison sociale, adresse, SIRET, secteur d'activité, nombre d'employés, chiffre d'affaires approximatif." },
                { step: "3", title: "Soumettez votre demande", desc: "Une fois le formulaire complété, soumettez votre demande. D&B va vérifier manuellement les informations fournies." },
                { step: "4", title: "Attendez la validation", desc: "Le processus de vérification manuelle prend généralement entre 15 et 30 jours ouvrés. Vous recevrez votre DUNS par email une fois validé." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{step}</div>
                  <div>
                    <p className="font-semibold text-slate-800">{title}</p>
                    <p className="text-sm text-slate-600 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="text-sm text-amber-800 font-medium mb-1">Attention au délai</p>
              <p className="text-sm text-amber-700">La méthode D&B gratuite prend 15 à 30 jours. Si vous avez une date limite (appel d'offres, inscription Apple Developer, lancement d'application), calculez bien si vous avez le temps d'attendre.</p>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 3 : Altares (partenaire D&B en France)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Altares est le partenaire officiel de Dun &amp; Bradstreet en France. Ils proposent des services d'enregistrement DUNS avec un délai généralement inférieur à la méthode D&amp;B directe, mais avec des tarifs qui peuvent être significativement plus élevés (30 € à 100 €+) selon les options choisies.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Cette option peut être pertinente si vous avez besoin d'un rapport D&amp;B complet en plus du numéro DUNS, ou si vous souhaitez une relation directe avec un interlocuteur francophone.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Comparatif des 3 méthodes</h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Méthode</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Coût</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Délai</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Idéal pour</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">DUNS Verify</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">4,99 €</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">2 minutes</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">Urgence, simplicité</td>
                  </tr>
                  <tr className="bg-[#F8FAFC]">
                    <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">D&amp;B officiel</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuit</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">15-30 jours</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">Pas d'urgence, budget limité</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">Altares</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">30 €–100 €+</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">24–72 heures</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">Rapport complet + DUNS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Votre entreprise a peut-être déjà un DUNS</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Avant de faire une demande, vérifiez si votre entreprise possède déjà un numéro DUNS. Dun &amp; Bradstreet attribue régulièrement des numéros automatiquement à partir de sources publiques (registres du commerce, publications légales, etc.). Si votre entreprise a plusieurs années d'existence, il y a de bonnes chances qu'elle figure déjà dans la base D&amp;B.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Avec DUNS Verify, la première étape est précisément cette vérification : nous cherchons si votre entreprise a déjà un DUNS avant de procéder à toute démarche.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Les informations nécessaires pour obtenir votre DUNS</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li>La raison sociale exacte de votre entreprise (telle qu'enregistrée au RCS)</li>
              <li>L'adresse du siège social</li>
              <li>Le numéro SIRET</li>
              <li>Le secteur d'activité (code NAF)</li>
              <li>Le nom du dirigeant principal</li>
              <li>Le nombre approximatif d'employés</li>
              <li>Le chiffre d'affaires approximatif (optionnel selon la méthode)</li>
            </ul>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articles connexes</h3>
              <ul className="space-y-2">
                {[
                  { slug: "numero-duns", title: "Numéro DUNS : Le Guide Complet 2026" },
                  { slug: "numero-duns-gratuit", title: "Numéro DUNS Gratuit : Toutes les Méthodes" },
                  { slug: "numero-duns-apple-developer", title: "Numéro DUNS pour Apple Developer" },
                  { slug: "numero-duns-marches-publics", title: "Numéro DUNS et Marchés Publics" },
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
