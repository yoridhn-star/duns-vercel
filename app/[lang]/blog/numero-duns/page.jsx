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
    title: "Numéro DUNS : Guide Complet 2026 — Définition, Obtention, Utilité | DUNS Verify",
    description: "Tout savoir sur le numéro DUNS en 2026 : définition, histoire, à quoi ça sert, comment l'obtenir en France. Guide complet et pratique.",
    alternates: { canonical: `${SITE_URL}/${lang}/blog/numero-duns` },
    openGraph: {
      title: "Numéro DUNS : Guide Complet 2026",
      description: "Tout savoir sur le numéro DUNS : définition, histoire, utilité et comment l'obtenir rapidement.",
      url: `${SITE_URL}/${lang}/blog/numero-duns`,
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
    headline: "Numéro DUNS : Tout Ce Que Vous Devez Savoir en 2026",
    description: "Guide complet sur le numéro DUNS : définition, histoire, utilité et comment l'obtenir en France.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/${lang}/blog/numero-duns`,
    mainEntityOfPage: `${SITE_URL}/${lang}/blog/numero-duns`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen flex flex-col">
        <BlogHeader lang={lang} />

        <main className="flex-1 py-12 px-4">
          <div className="max-w-3xl mx-auto">

            {/* Breadcrumb */}
            <nav className="text-sm text-slate-500 mb-6">
              <a href={`/${lang}`} className="hover:text-emerald-600 transition-colors">Accueil</a>
              <span className="mx-2">›</span>
              <a href={`/${lang}/blog`} className="hover:text-emerald-600 transition-colors">Blog</a>
              <span className="mx-2">›</span>
              <span className="text-slate-700">Numéro DUNS : Guide Complet</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
              Numéro DUNS : Tout Ce Que Vous Devez Savoir en 2026
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Le numéro DUNS est devenu incontournable pour les entreprises qui veulent se développer à l'international, travailler avec de grandes organisations ou publier des applications mobiles. Pourtant, beaucoup d'entrepreneurs en France ne savent pas encore ce que c'est ni comment l'obtenir. Ce guide complet vous explique tout — de la définition à l'obtention — pour que vous ayez toutes les cartes en main.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Qu'est-ce que le numéro DUNS ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le numéro DUNS (Data Universal Numbering System) est un identifiant unique à 9 chiffres attribué à chaque entité commerciale dans le monde. Il a été créé en 1962 par Dun &amp; Bradstreet, une entreprise américaine spécialisée dans l'information commerciale fondée en 1841. À ce jour, plus de 455 millions d'entreprises dans 224 pays possèdent un numéro DUNS.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Contrairement au SIRET ou au SIREN, qui sont des identifiants nationaux français, le DUNS est un identifiant mondial. Il fonctionne comme un passeport : peu importe où votre entreprise opère dans le monde, ce numéro vous identifie de façon unique et vérifiable.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Une origine en 1962 chez Dun &amp; Bradstreet</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dun &amp; Bradstreet a lancé le système DUNS en 1962 dans un contexte bien particulier : les entreprises américaines avaient besoin d'un moyen fiable pour identifier leurs partenaires commerciaux et évaluer leur solvabilité. Avant le DUNS, il n'existait aucun standard universel pour identifier une entreprise à l'international.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              La puissance de ce système réside dans sa base de données : D&amp;B maintient l'une des plus grandes bases de données commerciales au monde, alimentée par des sources gouvernementales, des registres du commerce, des données financières et des informations fournies directement par les entreprises elles-mêmes.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Structure du numéro : 9 chiffres, des millions d'entreprises</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le numéro DUNS est composé de 9 chiffres, généralement écrits sous la forme XX-XXX-XXXX (avec des tirets pour la lisibilité, d'où le nom D-U-N-S). Ces chiffres ne sont pas aléatoires : ils sont attribués séquentiellement par Dun &amp; Bradstreet lors de la création du numéro. Chaque numéro est unique et ne peut pas être réattribué.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Une particularité importante : si votre entreprise possède plusieurs établissements ou filiales, chaque entité peut avoir son propre numéro DUNS. Cela permet de distinguer la maison mère de ses succursales, ce qui est particulièrement utile pour les grandes organisations.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">À quoi sert le numéro DUNS ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le numéro DUNS a de multiples usages, et son importance ne cesse de croître à mesure que l'économie mondiale se numérise. Voici les principales situations où vous en aurez besoin.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Les marchés publics internationaux</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Si vous souhaitez répondre à des appels d'offres émanant d'organisations internationales — l'Union Européenne, l'ONU, l'OTAN, ou encore le gouvernement américain (via SAM.gov) — le numéro DUNS est obligatoire. Ces organisations l'utilisent pour vérifier l'existence légale de votre entreprise, sa santé financière et son historique commercial. Sans DUNS, votre dossier sera simplement écarté.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pour en savoir plus sur ce sujet, consultez notre article dédié sur le <a href={`/${lang}/blog/numero-duns-marches-publics`} className="text-emerald-600 hover:underline">numéro DUNS et les marchés publics internationaux</a>.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Apple Developer Program</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pour publier des applications sur l'App Store en tant qu'organisation (et non en tant que développeur individuel), Apple exige un numéro DUNS depuis plusieurs années. Cette exigence permet à Apple de vérifier que l'entité qui publie l'application est bien une organisation légalement enregistrée. Le processus de vérification peut prendre jusqu'à 5 jours ouvrés chez D&amp;B, plus 2 jours supplémentaires chez Apple.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Google Play Store</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Depuis 2023, Google a également commencé à exiger le numéro DUNS pour certaines catégories de développeurs sur le Play Store. Cette tendance devrait s'amplifier dans les années à venir, faisant du DUNS un prérequis standard pour publier des applications mobiles en tant qu'organisation.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Partenariats B2B et crédibilité commerciale</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Au-delà des obligations réglementaires, le numéro DUNS joue un rôle important dans la crédibilité commerciale. Lorsque vous cherchez à établir des partenariats avec de grandes entreprises — notamment des multinationales américaines ou asiatiques — elles vérifieront souvent votre DUNS pour évaluer votre fiabilité et votre solvabilité. Avoir un numéro DUNS à jour, avec de bonnes informations, est un avantage concurrentiel non négligeable.
            </p>

            <BlogCTA lang={lang} />

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Comment obtenir votre numéro DUNS en France ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Il existe plusieurs façons d'obtenir un numéro DUNS en France, avec des différences importantes en termes de délais et de coût.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">La méthode officielle via D&amp;B (gratuite, mais longue)</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dun &amp; Bradstreet propose un processus d'enregistrement gratuit via son site officiel. Vous remplissez un formulaire en ligne avec les informations de votre entreprise (raison sociale, adresse, SIRET, etc.), et D&amp;B crée votre profil dans sa base de données mondiale. Le problème ? Ce processus prend entre 15 et 30 jours ouvrés. Si vous avez un délai à respecter pour un appel d'offres ou une inscription Apple Developer, cette attente peut vous coûter très cher.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Les services accélérés (2 minutes)</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Des services comme DUNS Verify permettent d'obtenir votre numéro DUNS en quelques minutes, pour un coût modique de 4,99 €. Le principe est simple : notre service interroge directement les bases de données de Dun &amp; Bradstreet et vous fournit votre numéro DUNS certifié par email en moins de 2 minutes. C'est la solution idéale si vous avez besoin de votre numéro rapidement.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pour une comparaison détaillée de toutes les méthodes disponibles, lisez notre guide sur <a href={`/${lang}/blog/obtenir-numero-duns-france`} className="text-emerald-600 hover:underline">comment obtenir un numéro DUNS en France</a>.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Coût et délais : ce qu'il faut savoir</h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Méthode</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Coût</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Délai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">D&amp;B officiel</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuit</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">15 à 30 jours</td>
                  </tr>
                  <tr className="bg-[#F8FAFC]">
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">DUNS Verify</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">4,99 €</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">2 minutes</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Altares / autres</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">30 € à 100 €+</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">24 à 48 heures</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              La question à se poser n'est pas tant « combien coûte le DUNS ? » mais « combien coûte l'attente ? ». Si un marché public de 50 000 € vous échappe parce que vous n'avez pas votre DUNS à temps, la question du coût prend une toute autre dimension.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs SIRET : quelle différence ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              En France, les entrepreneurs sont habitués au SIRET (14 chiffres) et au SIREN (9 chiffres) pour identifier leur entreprise. Le DUNS a une portée différente : là où le SIRET est un identifiant national français, le DUNS est un identifiant mondial reconnu dans 224 pays.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Pour une analyse complète des différences entre ces deux identifiants, consultez notre article <a href={`/${lang}/blog/difference-duns-siret`} className="text-emerald-600 hover:underline">DUNS vs SIRET : quelle différence et lequel vous faut-il ?</a>
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cas d'usage : qui a besoin d'un numéro DUNS ?</h2>

            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li><strong>Les développeurs iOS</strong> souhaitant publier sur l'App Store en tant qu'organisation</li>
              <li><strong>Les développeurs Android</strong> sur le Google Play Store (exigence croissante)</li>
              <li><strong>Les PME et ETI</strong> qui répondent à des appels d'offres internationaux</li>
              <li><strong>Les startups</strong> cherchant à établir des partenariats avec des multinationales</li>
              <li><strong>Les exportateurs</strong> qui travaillent avec des acheteurs américains ou asiatiques</li>
              <li><strong>Les ONG et associations</strong> qui reçoivent des financements internationaux</li>
            </ul>

            <p className="text-slate-700 leading-relaxed mb-4">
              En résumé, si votre activité dépasse les frontières françaises — ou si vous aspirez à le faire — le numéro DUNS est un prérequis incontournable. Et avec DUNS Verify, l'obtenir ne prend plus que 2 minutes.
            </p>

            {/* Internal links */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articles connexes</h3>
              <ul className="space-y-2">
                {[
                  { slug: "numero-duns-definition", title: "Numéro DUNS : C'est Quoi ? Définition Simple" },
                  { slug: "obtenir-numero-duns-france", title: "Comment Obtenir un Numéro DUNS en France" },
                  { slug: "numero-duns-apple-developer", title: "Numéro DUNS pour Apple Developer" },
                  { slug: "numero-duns-google-play", title: "Numéro DUNS pour Google Play Store" },
                  { slug: "numero-duns-marches-publics", title: "Numéro DUNS et Marchés Publics" },
                  { slug: "difference-duns-siret", title: "Différence entre DUNS et SIRET" },
                  { slug: "verifier-numero-duns", title: "Comment Vérifier le Numéro DUNS d'une Entreprise" },
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
