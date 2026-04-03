import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "duns-number-dun-bradstreet";
const AVAILABLE_LANGS = ['fr','en','de','es','it','nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];
const EN_FALLBACK = ['nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];

const META = {
  fr: { title: "Dun & Bradstreet DUNS Number : Histoire, Rôle et Comment Ça Marche | DUNS Verify", description: "L'histoire complète de Dun & Bradstreet (fondée en 1841) et du DUNS Number (créé en 1962) : base de données, rôle mondial, produits D&B et alternatives." },
  en: { title: "Dun & Bradstreet DUNS Number: History, Role and How It Works | DUNS Verify", description: "The complete history of Dun & Bradstreet (founded in 1841) and the DUNS Number (created in 1962): database, global role, D&B products and alternatives." },
  de: { title: "Dun & Bradstreet DUNS-Nummer: Geschichte, Rolle und Funktionsweise | DUNS Verify", description: "Die vollständige Geschichte von Dun & Bradstreet (gegründet 1841) und der DUNS-Nummer (erstellt 1962): Datenbank, globale Rolle, D&B-Produkte und Alternativen." },
  es: { title: "Dun & Bradstreet Número DUNS: Historia, Rol y Cómo Funciona | DUNS Verify", description: "La historia completa de Dun & Bradstreet (fundada en 1841) y el Número DUNS (creado en 1962): base de datos, rol mundial, productos D&B y alternativas." },
  it: { title: "Dun & Bradstreet Numero DUNS: Storia, Ruolo e Come Funziona | DUNS Verify", description: "La storia completa di Dun & Bradstreet (fondata nel 1841) e del Numero DUNS (creato nel 1962): database, ruolo globale, prodotti D&B e alternative." },
};

export async function generateStaticParams() {
  return AVAILABLE_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!AVAILABLE_LANGS.includes(lang)) return {};
  const m = META[lang] || META.en;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `${SITE_URL}/${lang}/blog/${SLUG}` },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${lang}/blog/${SLUG}`,
      siteName: "DUNS Verify",
      type: "article",
    },
  };
}

function ContentFR({ lang }) {
  return (
    <>
      <nav className="text-sm text-slate-500 mb-6">
        <a href={`/${lang}`} className="hover:text-emerald-600 transition-colors">Accueil</a>
        <span className="mx-2">›</span>
        <a href={`/${lang}/blog`} className="hover:text-emerald-600 transition-colors">Blog</a>
        <span className="mx-2">›</span>
        <span className="text-slate-700">Dun &amp; Bradstreet et le DUNS Number</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Dun &amp; Bradstreet et le DUNS Number : L&apos;Histoire Derrière l&apos;Identifiant Mondial
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Pour comprendre le numéro DUNS, il faut comprendre l&apos;entreprise qui l&apos;a créé : Dun &amp; Bradstreet. Avec plus de 180 ans d&apos;histoire et une base de données de 455 millions d&apos;entreprises, D&amp;B est devenu le standard mondial de l&apos;identification et de l&apos;information commerciale. Voici l&apos;histoire fascinante de cette institution.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Dun &amp; Bradstreet : une histoire vieille de 180 ans</h2>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Les origines : 1841 à New York</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Tout commence en 1841 à New York, en pleine période d&apos;expansion commerciale américaine. Un commerçant nommé Lewis Tappan fonde la <em>Mercantile Agency</em>, le premier service d&apos;information commerciale aux États-Unis. L&apos;idée est révolutionnaire pour l&apos;époque : réunir des informations sur la solvabilité et la réputation des commerçants américains, pour permettre à d&apos;autres commerçants de prendre des décisions éclairées.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        À cette époque, avant le crédit bancaire moderne, la décision de vendre &quot;à crédit&quot; (c&apos;est-à-dire avec paiement différé) à un client était entièrement basée sur la réputation personnelle. L&apos;idée de Tappan était de systématiser cette information, en créant un réseau de correspondants locaux dans tout le pays qui rapporteraient des informations sur les commerçants.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Parmi les correspondants locaux de la Mercantile Agency, on trouve un certain Abraham Lincoln, alors jeune avocat en Illinois.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">La naissance de Dun &amp; Bradstreet</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        En 1849, Robert Graham Dun reprend la Mercantile Agency et lui donne son nom : R.G. Dun &amp; Company. De son côté, John Bradstreet fonde en 1849 une agence concurrente, la Bradstreet Company. Les deux entreprises coexistent et se concurrencent pendant des décennies, développant chacune leur propre réseau d&apos;information et leur propre système de notation.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        C&apos;est en 1933, en pleine Grande Dépression, que les deux rivaux historiques fusionnent pour former <strong>Dun &amp; Bradstreet</strong>. Cette fusion crée la plus grande base de données commerciales au monde et établit D&amp;B comme la référence incontestable en matière d&apos;information sur les entreprises.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">1962 : La création du DUNS Number</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        En 1962, Dun &amp; Bradstreet franchit une étape décisive : la création du Data Universal Numbering System (DUNS). L&apos;idée est d&apos;attribuer à chaque entreprise dans la base de données D&amp;B un numéro unique et permanent. Cette numérotation permettrait de retrouver facilement n&apos;importe quelle entreprise, même si elle change de nom ou d&apos;adresse.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Au départ, le système DUNS était principalement utilisé par les entreprises américaines pour identifier leurs partenaires commerciaux et évaluer les risques de crédit. Mais très rapidement, la logique de standardisation a convaincu d&apos;autres acteurs d&apos;adopter ce système.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dans les années 1970 et 1980, l&apos;Organisation des Nations Unies et divers gouvernements ont commencé à adopter le DUNS comme standard d&apos;identification dans leurs processus d&apos;appels d&apos;offres. L&apos;internationalisation du commerce post-guerre froide a accéléré l&apos;adoption mondiale.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">La base de données mondiale : 455 millions d&apos;entreprises</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Aujourd&apos;hui, la base de données D&amp;B est une des plus grandes jamais constituées dans l&apos;histoire du commerce :
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
        D&amp;B affirme mettre à jour plus de 5 millions de dossiers par jour. C&apos;est cette fraîcheur des données qui fait la valeur du système pour les entreprises qui l&apos;utilisent pour évaluer leurs partenaires.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Le rôle de D&amp;B dans l&apos;économie mondiale</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet joue un rôle structurant dans l&apos;économie mondiale à plusieurs niveaux :
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Infrastructure d&apos;identification</p>
            <p className="text-sm text-slate-600 mt-1">Le DUNS est devenu le standard mondial par défaut pour identifier les entreprises dans les échanges commerciaux B2B et les marchés publics internationaux. C&apos;est une infrastructure mondiale, au même titre qu&apos;un IBAN pour les transactions bancaires.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Évaluation du risque crédit</p>
            <p className="text-sm text-slate-600 mt-1">Le score Paydex de D&amp;B — une note de 0 à 100 basée sur les habitudes de paiement d&apos;une entreprise — est utilisé par des milliers de créanciers, fournisseurs et banques pour évaluer le risque avant d&apos;accorder du crédit ou des conditions de paiement favorables.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Intelligence commerciale</p>
            <p className="text-sm text-slate-600 mt-1">Les produits D&amp;B permettent aux entreprises d&apos;identifier de nouveaux marchés, des prospects qualifiés, et d&apos;analyser la structure de leurs marchés cibles. C&apos;est un outil de marketing B2B utilisé par des millions d&apos;entreprises.</p>
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
        <li><strong>UPIK :</strong> Répertoire d&apos;entreprises basé sur le DUNS, maintenu par la CCI de Francfort. Permet une recherche gratuite.</li>
      </ul>
      <p className="text-slate-700 leading-relaxed mb-4">
        Aucune de ces alternatives n&apos;a atteint le niveau d&apos;adoption mondiale du DUNS pour les marchés publics et les partenariats B2B. Le DUNS reste le standard de facto dans ces domaines.
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
    </>
  );
}

function ContentEN({ lang }) {
  return (
    <>
      <nav className="text-sm text-slate-500 mb-6">
        <a href={`/${lang}`} className="hover:text-emerald-600 transition-colors">Home</a>
        <span className="mx-2">›</span>
        <a href={`/${lang}/blog`} className="hover:text-emerald-600 transition-colors">Blog</a>
        <span className="mx-2">›</span>
        <span className="text-slate-700">Dun &amp; Bradstreet and the DUNS Number</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Dun &amp; Bradstreet and the DUNS Number: The Story Behind the Global Business Identifier
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        To understand the DUNS number, you need to understand the company that created it: Dun &amp; Bradstreet. With over 180 years of history and a database of 455 million companies, D&amp;B has become the global standard for business identification and commercial information. Here is the fascinating story of this institution.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Dun &amp; Bradstreet: Over 180 Years of History</h2>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">The Origins: 1841 in New York</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        It all began in 1841 in New York, during a period of rapid American commercial expansion. A merchant named Lewis Tappan founded the <em>Mercantile Agency</em>, the first commercial information service in the United States. The idea was revolutionary for the time: gathering information about the creditworthiness and reputation of American merchants so that other merchants could make informed decisions.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        In those days, before modern bank credit, the decision to sell &quot;on credit&quot; (that is, with deferred payment) to a customer was entirely based on personal reputation. Tappan&apos;s idea was to systematize this information by creating a nationwide network of local correspondents who would report on merchants.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Among the Mercantile Agency&apos;s local correspondents was a young lawyer from Illinois named Abraham Lincoln.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">The Birth of Dun &amp; Bradstreet</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        In 1849, Robert Graham Dun took over the Mercantile Agency and renamed it R.G. Dun &amp; Company. Around the same time, John Bradstreet founded a competing agency, the Bradstreet Company. The two firms coexisted and competed for decades, each building their own information networks and rating systems.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        In 1933, in the depths of the Great Depression, the two historic rivals merged to form <strong>Dun &amp; Bradstreet</strong>. This merger created the world&apos;s largest commercial database and established D&amp;B as the undisputed reference for business information.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">1962: The Creation of the DUNS Number</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        In 1962, Dun &amp; Bradstreet took a decisive step: the creation of the Data Universal Numbering System (DUNS). The idea was to assign each company in the D&amp;B database a unique and permanent number. This numbering system would make it easy to locate any company, even if it changed its name or address.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Initially, the DUNS system was primarily used by American companies to identify their business partners and assess credit risk. But very quickly, the logic of standardization convinced other players to adopt this system.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        In the 1970s and 1980s, the United Nations and various governments began adopting DUNS as the identification standard in their procurement processes. The internationalization of post-Cold War trade accelerated global adoption.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">The Global Database: 455 Million Companies</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Today, the D&amp;B database is one of the largest ever assembled in the history of commerce:
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { number: "455M+", label: "Registered companies" },
          { number: "224", label: "Countries covered" },
          { number: "180+", label: "Years of history" },
        ].map(({ number, label }) => (
          <div key={label} className="bg-[#F8FAFC] rounded-xl p-5 text-center">
            <p className="text-3xl font-extrabold text-[#1E3A5F]">{number}</p>
            <p className="text-sm text-slate-600 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        This database is continuously fed by thousands of sources: national trade registers, government data, information declared by companies themselves, media and legal publications, local partners (such as Altares in France), and transactional data.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        D&amp;B claims to update more than 5 million records per day. This freshness of data is what makes the system valuable for companies that use it to evaluate their partners.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">D&amp;B&apos;s Role in the Global Economy</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet plays a structuring role in the global economy at several levels:
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Identification infrastructure</p>
            <p className="text-sm text-slate-600 mt-1">DUNS has become the world&apos;s default standard for identifying companies in B2B commercial exchanges and international public procurement. It is a global infrastructure, in the same way that IBAN is for banking transactions.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Credit risk assessment</p>
            <p className="text-sm text-slate-600 mt-1">D&amp;B&apos;s Paydex score — a rating from 0 to 100 based on a company&apos;s payment habits — is used by thousands of creditors, suppliers, and banks to assess risk before granting credit or favorable payment terms.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Business intelligence</p>
            <p className="text-sm text-slate-600 mt-1">D&amp;B products allow companies to identify new markets, qualified prospects, and analyze the structure of their target markets. It is a B2B marketing tool used by millions of businesses.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Key D&amp;B Products and Services</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Product</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["DUNS Number", "Unique 9-digit identifier for each business entity"],
              ["D&B Hoovers", "Prospect database and commercial intelligence platform"],
              ["D&B Finance Analytics", "Credit risk and compliance assessment tools"],
              ["D&B Data Cloud", "Programmatic access to D&B data via API"],
              ["Paydex Score", "Payment behavior score from 0 to 100"],
              ["D&B Business Credit Report", "Comprehensive report on a company's financial health"],
            ].map(([product, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? "" : "bg-[#F8FAFC]"}>
                <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">{product}</td>
                <td className="border border-slate-200 px-4 py-3 text-slate-600">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Alternatives to DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        While DUNS is the most widespread standard, there are a few alternatives for specific uses:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>LEI (Legal Entity Identifier):</strong> International standard used primarily in the financial sector to identify parties to financial transactions. Managed by the GLEIF.</li>
        <li><strong>GLN (Global Location Number):</strong> GS1 standard used to identify physical locations in the supply chain. Not a direct competitor to DUNS.</li>
        <li><strong>UPIK:</strong> Business directory based on DUNS, maintained by the Frankfurt Chamber of Commerce. Allows free lookup.</li>
      </ul>
      <p className="text-slate-700 leading-relaxed mb-4">
        None of these alternatives has achieved the worldwide adoption level of DUNS for public procurement and B2B partnerships. DUNS remains the de facto standard in these areas.
      </p>

      <p className="text-slate-700 leading-relaxed mb-4">
        To learn more about how to use your DUNS number, see our guide: <a href={`/${lang}/blog/numero-duns`} className="text-emerald-600 hover:underline">DUNS Number: The Complete Guide 2026</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Related articles</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS Number: The Complete Guide 2026" },
            { slug: "numero-duns-definition", title: "DUNS Number: What Is It? Simple Definition" },
            { slug: "verifier-numero-duns", title: "How to Verify a Company's DUNS Number" },
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
    </>
  );
}

function ContentDE({ lang }) {
  return (
    <>
      <nav className="text-sm text-slate-500 mb-6">
        <a href={`/${lang}`} className="hover:text-emerald-600 transition-colors">Startseite</a>
        <span className="mx-2">›</span>
        <a href={`/${lang}/blog`} className="hover:text-emerald-600 transition-colors">Blog</a>
        <span className="mx-2">›</span>
        <span className="text-slate-700">Dun &amp; Bradstreet und die DUNS-Nummer</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Dun &amp; Bradstreet und die DUNS-Nummer: Die Geschichte hinter dem Weltweiten Unternehmensidentifikator
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Um die DUNS-Nummer zu verstehen, müssen Sie das Unternehmen verstehen, das sie geschaffen hat: Dun &amp; Bradstreet. Mit über 180 Jahren Geschichte und einer Datenbank von 455 Millionen Unternehmen ist D&amp;B zum weltweiten Standard für Unternehmensidentifikation und Geschäftsinformationen geworden. Hier ist die faszinierende Geschichte dieser Institution.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Dun &amp; Bradstreet: Über 180 Jahre Geschichte</h2>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Die Ursprünge: 1841 in New York</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Alles begann 1841 in New York, in einer Zeit der rasanten amerikanischen Handelsexpansion. Ein Kaufmann namens Lewis Tappan gründete die <em>Mercantile Agency</em>, den ersten kommerziellen Informationsdienst in den Vereinigten Staaten. Die Idee war für die damalige Zeit revolutionär: Informationen über die Kreditwürdigkeit und den Ruf amerikanischer Kaufleute zu sammeln, damit andere Kaufleute fundierte Entscheidungen treffen konnten.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Zu jener Zeit, noch vor dem modernen Bankkredit, basierte die Entscheidung, einem Kunden &quot;auf Kredit&quot; (d.h. mit aufgeschobener Zahlung) zu verkaufen, vollständig auf dem persönlichen Ruf. Tappans Idee war es, diese Informationen zu systematisieren, indem er ein landesweites Netzwerk lokaler Korrespondenten aufbaute, die über Kaufleute berichten würden.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Unter den lokalen Korrespondenten der Mercantile Agency befand sich ein junger Rechtsanwalt aus Illinois namens Abraham Lincoln.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Die Geburt von Dun &amp; Bradstreet</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        1849 übernahm Robert Graham Dun die Mercantile Agency und benannte sie in R.G. Dun &amp; Company um. Zur gleichen Zeit gründete John Bradstreet eine konkurrierende Agentur, die Bradstreet Company. Die beiden Unternehmen koexistierten und konkurrierten jahrzehntelang, jedes baute sein eigenes Informationsnetzwerk und sein eigenes Bewertungssystem auf.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        1933, inmitten der Großen Depression, fusionierten die beiden historischen Rivalen zu <strong>Dun &amp; Bradstreet</strong>. Diese Fusion schuf die größte kommerzielle Datenbank der Welt und etablierte D&amp;B als die unbestrittene Referenz für Unternehmensinformationen.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">1962: Die Schaffung der DUNS-Nummer</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        1962 unternahm Dun &amp; Bradstreet einen entscheidenden Schritt: die Schaffung des Data Universal Numbering System (DUNS). Die Idee war es, jedem Unternehmen in der D&amp;B-Datenbank eine eindeutige und dauerhafte Nummer zuzuweisen. Dieses Nummerierungssystem würde es ermöglichen, jedes Unternehmen leicht zu finden, selbst wenn es seinen Namen oder seine Adresse ändert.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Zunächst wurde das DUNS-System hauptsächlich von amerikanischen Unternehmen verwendet, um ihre Geschäftspartner zu identifizieren und Kreditrisiken zu bewerten. Aber sehr schnell überzeugte die Logik der Standardisierung andere Akteure, dieses System zu übernehmen.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        In den 1970er und 1980er Jahren begannen die Vereinten Nationen und verschiedene Regierungen, DUNS als Identifikationsstandard in ihren Beschaffungsverfahren zu übernehmen. Die Internationalisierung des Handels nach dem Kalten Krieg beschleunigte die weltweite Einführung.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Die Weltweite Datenbank: 455 Millionen Unternehmen</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Heute ist die D&amp;B-Datenbank eine der größten, die je in der Geschichte des Handels aufgebaut wurde:
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { number: "455M+", label: "Registrierte Unternehmen" },
          { number: "224", label: "Abgedeckte Länder" },
          { number: "180+", label: "Jahre Geschichte" },
        ].map(({ number, label }) => (
          <div key={label} className="bg-[#F8FAFC] rounded-xl p-5 text-center">
            <p className="text-3xl font-extrabold text-[#1E3A5F]">{number}</p>
            <p className="text-sm text-slate-600 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Diese Datenbank wird kontinuierlich aus Tausenden von Quellen gespeist: nationale Handelsregister, Regierungsdaten, von Unternehmen selbst gemeldete Informationen, Medien und Rechtspublikationen, lokale Partner und Transaktionsdaten.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        D&amp;B gibt an, täglich mehr als 5 Millionen Datensätze zu aktualisieren. Diese Aktualität der Daten ist es, die den Wert des Systems für Unternehmen ausmacht, die es zur Bewertung ihrer Partner nutzen.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Die Rolle von D&amp;B in der Weltwirtschaft</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet spielt auf mehreren Ebenen eine strukturierende Rolle in der Weltwirtschaft:
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Identifikationsinfrastruktur</p>
            <p className="text-sm text-slate-600 mt-1">DUNS ist zum weltweiten Standardidentifikator für Unternehmen im B2B-Geschäftsverkehr und bei internationalen öffentlichen Ausschreibungen geworden. Es ist eine globale Infrastruktur, ähnlich wie IBAN für Bankentransaktionen.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Kreditrisikobewertung</p>
            <p className="text-sm text-slate-600 mt-1">D&amp;Bs Paydex-Score — eine Bewertung von 0 bis 100 basierend auf den Zahlungsgewohnheiten eines Unternehmens — wird von Tausenden von Gläubigern, Lieferanten und Banken verwendet, um Risiken zu bewerten, bevor Kredite oder günstige Zahlungskonditionen gewährt werden.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Geschäftsintelligenz</p>
            <p className="text-sm text-slate-600 mt-1">D&amp;B-Produkte ermöglichen es Unternehmen, neue Märkte zu identifizieren, qualifizierte Interessenten zu finden und die Struktur ihrer Zielmärkte zu analysieren. Es ist ein B2B-Marketingtool, das von Millionen von Unternehmen genutzt wird.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Die Wichtigsten D&amp;B-Produkte und -Dienste</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Produkt</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["DUNS-Nummer", "Eindeutige 9-stellige Kennung für jede Geschäftseinheit"],
              ["D&B Hoovers", "Interessentendatenbank und Geschäftsintelligenzplattform"],
              ["D&B Finance Analytics", "Werkzeuge zur Kreditrisiko- und Compliance-Bewertung"],
              ["D&B Data Cloud", "Programmgesteuerter Zugriff auf D&B-Daten über API"],
              ["Paydex-Score", "Zahlungsverhaltensbewertung von 0 bis 100"],
              ["D&B Business Credit Report", "Umfassender Bericht zur finanziellen Gesundheit eines Unternehmens"],
            ].map(([product, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? "" : "bg-[#F8FAFC]"}>
                <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">{product}</td>
                <td className="border border-slate-200 px-4 py-3 text-slate-600">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Alternativen zur DUNS-Nummer</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Obwohl DUNS der am weitesten verbreitete Standard ist, gibt es für bestimmte Anwendungsfälle einige Alternativen:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>LEI (Legal Entity Identifier):</strong> Internationaler Standard, der hauptsächlich im Finanzsektor verwendet wird, um Parteien an Finanztransaktionen zu identifizieren. Verwaltet von der GLEIF.</li>
        <li><strong>GLN (Global Location Number):</strong> GS1-Standard zur Identifizierung physischer Standorte in der Lieferkette. Kein direkter Konkurrent zur DUNS.</li>
        <li><strong>UPIK:</strong> Unternehmensverzeichnis auf DUNS-Basis, gepflegt von der IHK Frankfurt. Ermöglicht eine kostenlose Suche.</li>
      </ul>
      <p className="text-slate-700 leading-relaxed mb-4">
        Keine dieser Alternativen hat das weltweite Akzeptanzniveau der DUNS bei öffentlichen Ausschreibungen und B2B-Partnerschaften erreicht. DUNS bleibt der De-facto-Standard in diesen Bereichen.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Verwandte Artikel</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS-Nummer: Der vollständige Leitfaden 2026" },
            { slug: "numero-duns-definition", title: "DUNS-Nummer: Was ist das? Einfache Definition" },
            { slug: "verifier-numero-duns", title: "So überprüfen Sie die DUNS-Nummer eines Unternehmens" },
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
    </>
  );
}

function ContentES({ lang }) {
  return (
    <>
      <nav className="text-sm text-slate-500 mb-6">
        <a href={`/${lang}`} className="hover:text-emerald-600 transition-colors">Inicio</a>
        <span className="mx-2">›</span>
        <a href={`/${lang}/blog`} className="hover:text-emerald-600 transition-colors">Blog</a>
        <span className="mx-2">›</span>
        <span className="text-slate-700">Dun &amp; Bradstreet y el Número DUNS</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Dun &amp; Bradstreet y el Número DUNS: La Historia detrás del Identificador Empresarial Mundial
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Para entender el número DUNS, hay que entender la empresa que lo creó: Dun &amp; Bradstreet. Con más de 180 años de historia y una base de datos de 455 millones de empresas, D&amp;B se ha convertido en el estándar mundial de identificación empresarial e información comercial. Aquí está la fascinante historia de esta institución.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Dun &amp; Bradstreet: Más de 180 Años de Historia</h2>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Los Orígenes: 1841 en Nueva York</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Todo comenzó en 1841 en Nueva York, en un período de rápida expansión comercial estadounidense. Un comerciante llamado Lewis Tappan fundó la <em>Mercantile Agency</em>, el primer servicio de información comercial en los Estados Unidos. La idea era revolucionaria para la época: reunir información sobre la solvencia y reputación de los comerciantes americanos para que otros comerciantes pudieran tomar decisiones informadas.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        En aquella época, antes del crédito bancario moderno, la decisión de vender &quot;a crédito&quot; (es decir, con pago diferido) a un cliente se basaba completamente en la reputación personal. La idea de Tappan era sistematizar esta información creando una red de corresponsales locales en todo el país que informarían sobre los comerciantes.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Entre los corresponsales locales de la Mercantile Agency se encontraba un joven abogado de Illinois llamado Abraham Lincoln.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">El Nacimiento de Dun &amp; Bradstreet</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        En 1849, Robert Graham Dun se hizo cargo de la Mercantile Agency y la rebautizó como R.G. Dun &amp; Company. Por su parte, John Bradstreet fundó una agencia competidora, la Bradstreet Company. Las dos empresas coexistieron y compitieron durante décadas, cada una desarrollando su propia red de información y su propio sistema de calificación.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        En 1933, en plena Gran Depresión, los dos rivales históricos se fusionaron para formar <strong>Dun &amp; Bradstreet</strong>. Esta fusión creó la mayor base de datos comerciales del mundo y estableció a D&amp;B como la referencia indiscutible en información empresarial.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">1962: La Creación del Número DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        En 1962, Dun &amp; Bradstreet dio un paso decisivo: la creación del Data Universal Numbering System (DUNS). La idea era asignar a cada empresa en la base de datos D&amp;B un número único y permanente. Este sistema de numeración permitiría localizar fácilmente cualquier empresa, incluso si cambiaba de nombre o dirección.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Inicialmente, el sistema DUNS era utilizado principalmente por empresas estadounidenses para identificar a sus socios comerciales y evaluar riesgos crediticios. Pero muy rápidamente, la lógica de estandarización convenció a otros actores para adoptar este sistema.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        En las décadas de 1970 y 1980, las Naciones Unidas y varios gobiernos comenzaron a adoptar el DUNS como estándar de identificación en sus procesos de licitación. La internacionalización del comercio posterior a la Guerra Fría aceleró la adopción mundial.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">La Base de Datos Mundial: 455 Millones de Empresas</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Hoy en día, la base de datos D&amp;B es una de las más grandes jamás construidas en la historia del comercio:
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { number: "455M+", label: "Empresas registradas" },
          { number: "224", label: "Países cubiertos" },
          { number: "180+", label: "Años de historia" },
        ].map(({ number, label }) => (
          <div key={label} className="bg-[#F8FAFC] rounded-xl p-5 text-center">
            <p className="text-3xl font-extrabold text-[#1E3A5F]">{number}</p>
            <p className="text-sm text-slate-600 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Esta base de datos se alimenta continuamente de miles de fuentes: registros mercantiles nacionales, datos gubernamentales, información declarada por las propias empresas, medios de comunicación y publicaciones legales, socios locales y datos transaccionales.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        D&amp;B afirma actualizar más de 5 millones de registros al día. Esta frescura de los datos es lo que hace que el sistema sea valioso para las empresas que lo utilizan para evaluar a sus socios.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">El Papel de D&amp;B en la Economía Mundial</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet desempeña un papel estructurante en la economía mundial a varios niveles:
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Infraestructura de identificación</p>
            <p className="text-sm text-slate-600 mt-1">El DUNS se ha convertido en el estándar mundial predeterminado para identificar empresas en los intercambios comerciales B2B y las licitaciones públicas internacionales. Es una infraestructura global, al igual que el IBAN para las transacciones bancarias.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Evaluación del riesgo crediticio</p>
            <p className="text-sm text-slate-600 mt-1">La puntuación Paydex de D&amp;B — una calificación de 0 a 100 basada en los hábitos de pago de una empresa — es utilizada por miles de acreedores, proveedores y bancos para evaluar el riesgo antes de conceder crédito o condiciones de pago favorables.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Inteligencia comercial</p>
            <p className="text-sm text-slate-600 mt-1">Los productos D&amp;B permiten a las empresas identificar nuevos mercados, prospectos cualificados y analizar la estructura de sus mercados objetivo. Es una herramienta de marketing B2B utilizada por millones de empresas.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Principales Productos y Servicios de D&amp;B</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Producto</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Número DUNS", "Identificador único de 9 dígitos para cada entidad empresarial"],
              ["D&B Hoovers", "Base de datos de prospectos e inteligencia comercial"],
              ["D&B Finance Analytics", "Herramientas de evaluación de riesgo crediticio y cumplimiento"],
              ["D&B Data Cloud", "Acceso programático a datos D&B mediante API"],
              ["Puntuación Paydex", "Puntuación de comportamiento de pago de 0 a 100"],
              ["D&B Business Credit Report", "Informe completo sobre la salud financiera de una empresa"],
            ].map(([product, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? "" : "bg-[#F8FAFC]"}>
                <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">{product}</td>
                <td className="border border-slate-200 px-4 py-3 text-slate-600">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Alternativas al DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Aunque el DUNS es el estándar más extendido, existen algunas alternativas para usos específicos:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>LEI (Legal Entity Identifier):</strong> Estándar internacional utilizado principalmente en el sector financiero para identificar a las partes en transacciones financieras. Gestionado por la GLEIF.</li>
        <li><strong>GLN (Global Location Number):</strong> Estándar GS1 utilizado para identificar ubicaciones físicas en la cadena de suministro. No es un competidor directo del DUNS.</li>
        <li><strong>UPIK:</strong> Directorio de empresas basado en el DUNS, mantenido por la Cámara de Comercio de Fráncfort. Permite búsquedas gratuitas.</li>
      </ul>
      <p className="text-slate-700 leading-relaxed mb-4">
        Ninguna de estas alternativas ha alcanzado el nivel de adopción mundial del DUNS para licitaciones públicas y asociaciones B2B. El DUNS sigue siendo el estándar de facto en estos ámbitos.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Artículos relacionados</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Número DUNS: La Guía Completa 2026" },
            { slug: "numero-duns-definition", title: "Número DUNS: ¿Qué es? Definición Simple" },
            { slug: "verifier-numero-duns", title: "Cómo Verificar el Número DUNS de una Empresa" },
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
    </>
  );
}

function ContentIT({ lang }) {
  return (
    <>
      <nav className="text-sm text-slate-500 mb-6">
        <a href={`/${lang}`} className="hover:text-emerald-600 transition-colors">Home</a>
        <span className="mx-2">›</span>
        <a href={`/${lang}/blog`} className="hover:text-emerald-600 transition-colors">Blog</a>
        <span className="mx-2">›</span>
        <span className="text-slate-700">Dun &amp; Bradstreet e il Numero DUNS</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Dun &amp; Bradstreet e il Numero DUNS: La Storia dietro l&apos;Identificatore Aziendale Mondiale
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Per capire il numero DUNS, bisogna capire l&apos;azienda che lo ha creato: Dun &amp; Bradstreet. Con oltre 180 anni di storia e un database di 455 milioni di aziende, D&amp;B è diventato lo standard mondiale per l&apos;identificazione aziendale e le informazioni commerciali. Ecco la storia affascinante di questa istituzione.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Dun &amp; Bradstreet: Oltre 180 Anni di Storia</h2>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Le Origini: 1841 a New York</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Tutto iniziò nel 1841 a New York, in un periodo di rapida espansione commerciale americana. Un commerciante di nome Lewis Tappan fondò la <em>Mercantile Agency</em>, il primo servizio di informazioni commerciali negli Stati Uniti. L&apos;idea era rivoluzionaria per l&apos;epoca: raccogliere informazioni sulla solvibilità e la reputazione dei commercianti americani, per permettere ad altri commercianti di prendere decisioni informate.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        All&apos;epoca, prima del credito bancario moderno, la decisione di vendere &quot;a credito&quot; (cioè con pagamento differito) a un cliente era interamente basata sulla reputazione personale. L&apos;idea di Tappan era di sistematizzare queste informazioni, creando una rete di corrispondenti locali in tutto il paese che avrebbero riferito sui commercianti.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Tra i corrispondenti locali della Mercantile Agency c&apos;era un giovane avvocato dell&apos;Illinois di nome Abraham Lincoln.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">La Nascita di Dun &amp; Bradstreet</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Nel 1849, Robert Graham Dun rilevò la Mercantile Agency e la ribattezzò R.G. Dun &amp; Company. Nel frattempo, John Bradstreet fondò un&apos;agenzia concorrente, la Bradstreet Company. Le due aziende coesistettero e si fecero concorrenza per decenni, ognuna sviluppando la propria rete di informazioni e il proprio sistema di valutazione.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Nel 1933, in piena Grande Depressione, i due rivali storici si fusero per formare <strong>Dun &amp; Bradstreet</strong>. Questa fusione creò il più grande database commerciale del mondo e stabilì D&amp;B come il riferimento indiscusso per le informazioni sulle imprese.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">1962: La Creazione del Numero DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Nel 1962, Dun &amp; Bradstreet compì un passo decisivo: la creazione del Data Universal Numbering System (DUNS). L&apos;idea era di assegnare a ogni azienda nel database D&amp;B un numero unico e permanente. Questo sistema di numerazione avrebbe permesso di trovare facilmente qualsiasi azienda, anche se cambiava nome o indirizzo.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Inizialmente, il sistema DUNS era utilizzato principalmente da aziende americane per identificare i loro partner commerciali e valutare i rischi di credito. Ma molto rapidamente, la logica della standardizzazione convinse altri attori ad adottare questo sistema.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Negli anni &apos;70 e &apos;80, le Nazioni Unite e vari governi iniziarono ad adottare il DUNS come standard di identificazione nei loro processi di appalto. L&apos;internazionalizzazione del commercio nel periodo post-Guerra Fredda accelerò l&apos;adozione mondiale.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Il Database Mondiale: 455 Milioni di Aziende</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Oggi, il database D&amp;B è uno dei più grandi mai costruiti nella storia del commercio:
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { number: "455M+", label: "Aziende registrate" },
          { number: "224", label: "Paesi coperti" },
          { number: "180+", label: "Anni di storia" },
        ].map(({ number, label }) => (
          <div key={label} className="bg-[#F8FAFC] rounded-xl p-5 text-center">
            <p className="text-3xl font-extrabold text-[#1E3A5F]">{number}</p>
            <p className="text-sm text-slate-600 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Questo database è alimentato continuamente da migliaia di fonti: registri commerciali nazionali, dati governativi, informazioni dichiarate dalle stesse aziende, media e pubblicazioni legali, partner locali e dati transazionali.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        D&amp;B afferma di aggiornare più di 5 milioni di record al giorno. È questa freschezza dei dati che rende il sistema prezioso per le aziende che lo utilizzano per valutare i propri partner.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Il Ruolo di D&amp;B nell&apos;Economia Mondiale</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet svolge un ruolo strutturante nell&apos;economia mondiale a più livelli:
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Infrastruttura di identificazione</p>
            <p className="text-sm text-slate-600 mt-1">Il DUNS è diventato lo standard mondiale predefinito per identificare le aziende negli scambi commerciali B2B e negli appalti pubblici internazionali. È un&apos;infrastruttura globale, allo stesso modo in cui l&apos;IBAN lo è per le transazioni bancarie.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Valutazione del rischio creditizio</p>
            <p className="text-sm text-slate-600 mt-1">Il punteggio Paydex di D&amp;B — una valutazione da 0 a 100 basata sulle abitudini di pagamento di un&apos;azienda — è utilizzato da migliaia di creditori, fornitori e banche per valutare il rischio prima di concedere credito o condizioni di pagamento favorevoli.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Intelligenza commerciale</p>
            <p className="text-sm text-slate-600 mt-1">I prodotti D&amp;B consentono alle aziende di identificare nuovi mercati, potenziali clienti qualificati e analizzare la struttura dei loro mercati target. È uno strumento di marketing B2B utilizzato da milioni di aziende.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">I Principali Prodotti e Servizi D&amp;B</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Prodotto</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Descrizione</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Numero DUNS", "Identificatore unico a 9 cifre per ogni entità aziendale"],
              ["D&B Hoovers", "Database di prospect e piattaforma di intelligenza commerciale"],
              ["D&B Finance Analytics", "Strumenti di valutazione del rischio creditizio e conformità"],
              ["D&B Data Cloud", "Accesso programmatico ai dati D&B tramite API"],
              ["Punteggio Paydex", "Punteggio di comportamento di pagamento da 0 a 100"],
              ["D&B Business Credit Report", "Rapporto completo sulla salute finanziaria di un'azienda"],
            ].map(([product, desc], i) => (
              <tr key={i} className={i % 2 === 0 ? "" : "bg-[#F8FAFC]"}>
                <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">{product}</td>
                <td className="border border-slate-200 px-4 py-3 text-slate-600">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Alternative al DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Sebbene il DUNS sia lo standard più diffuso, esistono alcune alternative per usi specifici:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>LEI (Legal Entity Identifier):</strong> Standard internazionale utilizzato principalmente nel settore finanziario per identificare le parti nelle transazioni finanziarie. Gestito dalla GLEIF.</li>
        <li><strong>GLN (Global Location Number):</strong> Standard GS1 utilizzato per identificare le sedi fisiche nella catena di approvvigionamento. Non è un concorrente diretto del DUNS.</li>
        <li><strong>UPIK:</strong> Directory aziendale basata sul DUNS, gestita dalla Camera di Commercio di Francoforte. Consente ricerche gratuite.</li>
      </ul>
      <p className="text-slate-700 leading-relaxed mb-4">
        Nessuna di queste alternative ha raggiunto il livello di adozione mondiale del DUNS per gli appalti pubblici e le partnership B2B. Il DUNS rimane lo standard de facto in questi settori.
      </p>

      <p className="text-slate-700 leading-relaxed mb-4">
        Per saperne di più su come utilizzare il tuo numero DUNS, consulta la nostra guida: <a href={`/${lang}/blog/numero-duns`} className="text-emerald-600 hover:underline">Numero DUNS: La Guida Completa 2026</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articoli correlati</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Numero DUNS: La Guida Completa 2026" },
            { slug: "numero-duns-definition", title: "Numero DUNS: Cos'è? Definizione Semplice" },
            { slug: "verifier-numero-duns", title: "Come Verificare il Numero DUNS di un'Azienda" },
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
    </>
  );
}

export default async function Article({ params }) {
  const { lang } = await params;
  if (!AVAILABLE_LANGS.includes(lang)) notFound();

  const effectiveLang = EN_FALLBACK.includes(lang) ? 'en' : lang;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: (META[lang] || META.en).title,
    description: (META[lang] || META.en).description,
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/${lang}/blog/${SLUG}`,
    mainEntityOfPage: `${SITE_URL}/${lang}/blog/${SLUG}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen flex flex-col">
        <BlogHeader lang={lang} />
        <main className="flex-1 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            {effectiveLang === 'fr' && <ContentFR lang={lang} />}
            {effectiveLang === 'en' && <ContentEN lang={lang} />}
            {effectiveLang === 'de' && <ContentDE lang={lang} />}
            {effectiveLang === 'es' && <ContentES lang={lang} />}
            {effectiveLang === 'it' && <ContentIT lang={lang} />}
          </div>
        </main>
        <BlogFooter lang={lang} />
      </div>
    </>
  );
}
