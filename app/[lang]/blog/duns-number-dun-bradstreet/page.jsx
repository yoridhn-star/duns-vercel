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
    title: "Dun & Bradstreet DUNS Number : Histoire, Rôle et Comment Ça Marche | DUNS Verify",
    description: "L'histoire complète de Dun & Bradstreet (fondée en 1841) et du DUNS Number (créé en 1962) : base de données, rôle mondial, produits D&B et alternatives.",
    alternates: { canonical: `${SITE_URL}/${lang}/blog/duns-number-dun-bradstreet` },
    openGraph: {
      title: "Dun & Bradstreet et le DUNS Number : Histoire et Fonctionnement",
      description: "L'histoire de D&B et du DUNS Number : 455 millions d'entreprises, 224 pays, depuis 1841.",
      url: `${SITE_URL}/${lang}/blog/duns-number-dun-bradstreet`,
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
    headline: "Dun & Bradstreet et le DUNS Number : L'Histoire Derrière l'Identifiant Mondial",
    description: "L'histoire de Dun & Bradstreet depuis 1841 et la création du DUNS Number en 1962.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/${lang}/blog/duns-number-dun-bradstreet`,
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
              <span className="text-slate-700">Dun & Bradstreet et le DUNS Number</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
              Dun &amp; Bradstreet et le DUNS Number : L'Histoire Derrière l'Identifiant Mondial
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Pour comprendre le numéro DUNS, il faut comprendre l'entreprise qui l'a créé : Dun &amp; Bradstreet. Avec plus de 180 ans d'histoire et une base de données de 455 millions d'entreprises, D&amp;B est devenu le standard mondial de l'identification et de l'information commerciale. Voici l'histoire fascinante de cette institution.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Dun &amp; Bradstreet : une histoire vieille de 180 ans</h2>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Les origines : 1841 à New York</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Tout commence en 1841 à New York, en pleine période d'expansion commerciale américaine. Un commerçant nommé Lewis Tappan fonde la <em>Mercantile Agency</em>, le premier service d'information commerciale aux États-Unis. L'idée est révolutionnaire pour l'époque : réunir des informations sur la solvabilité et la réputation des commerçants américains, pour permettre à d'autres commerçants de prendre des décisions éclairées.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              À cette époque, avant le crédit bancaire moderne, la décision de vendre "à crédit" (c'est-à-dire avec paiement différé) à un client était entièrement basée sur la réputation personnelle. L'idée de Tappan était de systématiser cette information, en créant un réseau de correspondants locaux dans tout le pays qui rapporteraient des informations sur les commerçants.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Parmi les correspondants locaux de la Mercantile Agency, on trouve un certain Abraham Lincoln, alors jeune avocat en Illinois.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">La naissance de Dun &amp; Bradstreet</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              En 1849, Robert Graham Dun reprend la Mercantile Agency et lui donne son nom : R.G. Dun &amp; Company. De son côté, John Bradstreet fonde en 1849 une agence concurrente, la Bradstreet Company. Les deux entreprises coexistent et se concurrencent pendant des décennies, développant chacune leur propre réseau d'information et leur propre système de notation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              C'est en 1933, en pleine Grande Dépression, que les deux rivaux historiques fusionnent pour former <strong>Dun &amp; Bradstreet</strong>. Cette fusion crée la plus grande base de données commerciales au monde et établit D&amp;B comme la référence incontestable en matière d'information sur les entreprises.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">1962 : La création du DUNS Number</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              En 1962, Dun &amp; Bradstreet franchit une étape décisive : la création du Data Universal Numbering System (DUNS). L'idée est d'attribuer à chaque entreprise dans la base de données D&amp;B un numéro unique et permanent. Cette numérotation permettrait de retrouver facilement n'importe quelle entreprise, même si elle change de nom ou d'adresse.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Au départ, le système DUNS était principalement utilisé par les entreprises américaines pour identifier leurs partenaires commerciaux et évaluer les risques de crédit. Mais très rapidement, la logique de standardisation a convaincu d'autres acteurs d'adopter ce système.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dans les années 1970 et 1980, l'Organisation des Nations Unies et divers gouvernements ont commencé à adopter le DUNS comme standard d'identification dans leurs processus d'appels d'offres. L'internationalisation du commerce post-guerre froide a accéléré l'adoption mondiale.
            </p>

            <BlogCTA lang={lang} />

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">La base de données mondiale : 455 millions d'entreprises</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Aujourd'hui, la base de données D&amp;B est une des plus grandes jamais constituées dans l'histoire du commerce :
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { number: "455M+", label: "Entreprises enregistrées" },
                { number: "224", label: "Pays couverts" },
                { number: "180+", label: "Années d'histoire" },
              ].map(({ number, label }) => (
                <div key={label} className="bg-[#F8FAFC] rounded-xl p-5 text-center">
                  <p className="text-3xl font-extrabold text-[#1E3A5F]">{number}</p>
                  <p className="text-sm text-slate-600 mt-1">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Cette base de données est alimentée en permanence par des milliers de sources : registres du commerce nationaux, données gouvernementales, informations déclarées par les entreprises elles-mêmes, médias et publications légales, partenaires locaux (comme Altares en France), et données transactionnelles.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              D&amp;B affirme mettre à jour plus de 5 millions de dossiers par jour. C'est cette fraîcheur des données qui fait la valeur du système pour les entreprises qui l'utilisent pour évaluer leurs partenaires.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Le rôle de D&amp;B dans l'économie mondiale</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dun &amp; Bradstreet joue un rôle structurant dans l'économie mondiale à plusieurs niveaux :
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
                <div>
                  <p className="font-semibold text-slate-800">Infrastructure d'identification</p>
                  <p className="text-sm text-slate-600 mt-1">Le DUNS est devenu le standard mondial par défaut pour identifier les entreprises dans les échanges commerciaux B2B et les marchés publics internationaux. C'est une infrastructure mondiale, au même titre qu'un IBAN pour les transactions bancaires.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
                <div>
                  <p className="font-semibold text-slate-800">Évaluation du risque crédit</p>
                  <p className="text-sm text-slate-600 mt-1">Le score Paydex de D&amp;B — une note de 0 à 100 basée sur les habitudes de paiement d'une entreprise — est utilisé par des milliers de créanciers, fournisseurs et banques pour évaluer le risque avant d'accorder du crédit ou des conditions de paiement favorables.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
                <div>
                  <p className="font-semibold text-slate-800">Intelligence commerciale</p>
                  <p className="text-sm text-slate-600 mt-1">Les produits D&amp;B permettent aux entreprises d'identifier de nouveaux marchés, des prospects qualifiés, et d'analyser la structure de leurs marchés cibles. C'est un outil de marketing B2B utilisé par des millions d'entreprises.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Les principaux produits et services D&amp;B</h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Produit</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["DUNS Number", "Identifiant unique à 9 chiffres pour chaque entité commerciale"],
                    ["D&B Hoovers", "Base de données de prospects et d'intelligence commerciale"],
                    ["D&B Finance Analytics", "Outils d'évaluation du risque de crédit et de conformité"],
                    ["D&B Data Cloud", "Accès programmatique aux données D&B via API"],
                    ["Paydex Score", "Score de comportement de paiement de 0 à 100"],
                    ["D&B Business Credit Report", "Rapport complet sur la santé financière d'une entreprise"],
                  ].map(([product, desc], i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-[#F8FAFC]"}>
                      <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">{product}</td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-600">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Les alternatives au DUNS</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Si le DUNS est le standard le plus répandu, il existe quelques alternatives pour certains usages spécifiques :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li><strong>LEI (Legal Entity Identifier) :</strong> Standard international utilisé principalement dans le secteur financier pour identifier les parties prenantes aux transactions financières. Géré par la GLEIF.</li>
              <li><strong>GLN (Global Location Number) :</strong> Standard GS1 utilisé pour identifier les emplacements physiques dans la chaîne logistique. Pas un concurrent direct du DUNS.</li>
              <li><strong>UPIK :</strong> Répertoire d'entreprises basé sur le DUNS, maintenu par la CCI de Francfort. Permet une recherche gratuite.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Aucune de ces alternatives n'a atteint le niveau d'adoption mondiale du DUNS pour les marchés publics et les partenariats B2B. Le DUNS reste le standard de facto dans ces domaines.
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">
              Pour en savoir plus sur comment utiliser votre numéro DUNS, consultez notre guide : <a href={`/${lang}/blog/numero-duns`} className="text-emerald-600 hover:underline">Numéro DUNS : Le Guide Complet 2026</a>.
            </p>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articles connexes</h3>
              <ul className="space-y-2">
                {[
                  { slug: "numero-duns", title: "Numéro DUNS : Le Guide Complet 2026" },
                  { slug: "numero-duns-definition", title: "Numéro DUNS : C'est Quoi ? Définition Simple" },
                  { slug: "verifier-numero-duns", title: "Comment Vérifier le Numéro DUNS d'une Entreprise" },
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
