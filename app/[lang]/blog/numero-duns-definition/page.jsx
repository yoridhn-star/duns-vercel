import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "numero-duns-definition";
const AVAILABLE_LANGS = ['fr','en','de','es','it','nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];
const EN_FALLBACK = ['nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];

const META = {
  fr: { title: "Numéro DUNS : C'est Quoi ? Définition et Explication Simple | DUNS Verify", description: "Qu'est-ce que le numéro DUNS ? Définition claire, analogie simple, comparaison avec le SIRET et exemples concrets d'utilisation pour les entreprises." },
  en: { title: "DUNS Number: What Is It? Simple Definition and Explanation | DUNS Verify", description: "What is the DUNS number? Clear definition, simple analogy, comparison with national identifiers, and concrete usage examples for businesses." },
  de: { title: "DUNS-Nummer: Was Ist Das? Einfache Definition und Erklärung | DUNS Verify", description: "Was ist die DUNS-Nummer? Klare Definition, einfache Analogie, Vergleich mit nationalen Kennzahlen und konkrete Nutzungsbeispiele für Unternehmen." },
  es: { title: "Número DUNS: ¿Qué es? Definición Simple y Explicación | DUNS Verify", description: "¿Qué es el número DUNS? Definición clara, analogía simple, comparación con identificadores nacionales y ejemplos concretos de uso." },
  it: { title: "Numero DUNS: Cos'è? Definizione Semplice e Spiegazione | DUNS Verify", description: "Cos'è il numero DUNS? Definizione chiara, analogia semplice, confronto con gli identificatori nazionali ed esempi concreti di utilizzo." },
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
        <span className="text-slate-700">Définition du numéro DUNS</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numéro DUNS : C'est Quoi Exactement ?
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Vous avez entendu parler du numéro DUNS sans vraiment comprendre ce que c'est ? Vous n'êtes pas seul. Pourtant, ce petit numéro à 9 chiffres est devenu l'un des identifiants les plus importants dans le monde des affaires. Voici une explication claire, sans jargon, pour tout comprendre en quelques minutes.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">La définition officielle du numéro DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        DUNS est l'acronyme de <strong>Data Universal Numbering System</strong>. C'est un système d'identification numérique unique créé par Dun &amp; Bradstreet (D&amp;B) en 1962. Il attribue à chaque entreprise un numéro à 9 chiffres qui lui sert d'identifiant universel dans les échanges commerciaux internationaux.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Contrairement à ce que son nom pourrait laisser croire, le numéro DUNS n'est pas un numéro de série aléatoire. Il est attribué de façon séquentielle par D&amp;B après vérification de l'existence légale de l'entreprise. Une fois attribué, ce numéro ne change jamais — même si l'entreprise change de nom, d'adresse ou de dirigeant.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Aujourd'hui, plus de <strong>455 millions d'entreprises</strong> dans le monde possèdent un numéro DUNS. Il est reconnu dans 224 pays et utilisé comme standard d'identification par des organisations aussi importantes que l'Union Européenne, les Nations Unies, Apple, Google, et des dizaines de gouvernements nationaux.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Une analogie simple : le passeport international de l'entreprise</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        La meilleure façon de comprendre le numéro DUNS, c'est de le comparer à un passeport. Votre passeport personnel vous identifie de façon unique partout dans le monde, indépendamment de votre nationalité ou de votre lieu de résidence. Le numéro DUNS fait exactement la même chose pour votre entreprise.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Imaginez que vous cherchez un partenaire commercial au Japon. Votre interlocuteur japonais veut s'assurer qu'il fait bien affaire avec une entreprise légalement existante et fiable. Il vous demande votre numéro DUNS. En quelques secondes, il peut vérifier votre existence légale, votre adresse, votre secteur d'activité et — si vous avez souscrit aux services premium D&amp;B — votre score de crédit et votre historique de paiements.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Sans ce passeport, votre entreprise est invisible aux yeux de beaucoup d'organisations internationales. Avec lui, vous existez de façon vérifiable dans un réseau de 455 millions d'entreprises mondiales.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs SIRET : comprendre les différences</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        En France, deux identifiants coexistent pour les entreprises : le SIRET (et son dérivé le SIREN) et le numéro DUNS. Il est important de comprendre qu'ils ne sont pas en concurrence — ils répondent à des besoins différents.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Critère</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">SIRET</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">DUNS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Portée géographique</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">France uniquement</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">224 pays</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Attribué par</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">INSEE (gouvernement)</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Dun &amp; Bradstreet (privé)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Longueur</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">14 chiffres</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">9 chiffres</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Coût</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuit (automatique)</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuit (long) ou payant (rapide)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Usage principal</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Administration française</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Commerce international</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Le SIRET est automatiquement attribué lors de l'immatriculation de votre entreprise en France. Il est géré par l'INSEE (Institut National de la Statistique et des Études Économiques) et sert principalement aux démarches administratives françaises : déclarations fiscales, cotisations sociales, contrats de travail, etc.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Le DUNS, lui, doit être obtenu séparément et volontairement (sauf dans certains secteurs où il est obligatoire). Il sert aux relations commerciales internationales. Pour approfondir ce sujet, lisez notre comparatif détaillé : <a href={`/${lang}/blog/difference-duns-siret`} className="text-emerald-600 hover:underline">DUNS vs SIRET : quelle différence et lequel vous faut-il ?</a>
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Qui attribue le numéro DUNS ?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Le numéro DUNS est attribué exclusivement par Dun &amp; Bradstreet, une entreprise américaine fondée en 1841 qui est aujourd'hui l'une des plus importantes bases de données commerciales au monde. D&amp;B maintient une base de données de plus de 455 millions d'entreprises, mise à jour en permanence grâce à de nombreuses sources : registres officiels des pays, données gouvernementales, informations déclarées par les entreprises elles-mêmes, et partenariats avec des acteurs locaux.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        En France, D&amp;B travaille notamment avec <strong>Altares</strong>, son partenaire officiel, qui peut accélérer le processus d'attribution du numéro DUNS pour les entreprises françaises.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Pourquoi le numéro DUNS existe-t-il ?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Le problème que le DUNS cherche à résoudre est fondamental : comment identifier de façon fiable une entreprise parmi des centaines de millions, dans tous les pays du monde, avec des systèmes légaux et administratifs différents ?
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Avant l'existence du DUNS, les entreprises devaient utiliser des identifiants locaux (comme le SIRET en France, le Companies House number au Royaume-Uni, etc.) qui n'étaient pas comparables d'un pays à l'autre. Une entreprise américaine ne pouvait pas facilement vérifier l'existence légale d'un fournisseur français à partir de son seul identifiant national.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Le DUNS résout ce problème en créant un identifiant universel : peu importe le pays d'origine de l'entreprise, son numéro DUNS permet de l'identifier et de la rechercher dans la base de données mondiale de D&amp;B.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Exemples concrets d'utilisation du DUNS</h2>

      <div className="space-y-4 mb-6">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">Développeur iOS indépendant</p>
          <p className="text-sm text-slate-600">Théo monte sa startup et veut publier son application sur l'App Store en tant qu'organisation. Apple lui demande son numéro DUNS pour vérifier l'existence légale de sa SAS. Sans DUNS, impossible de créer un compte développeur organisation.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">PME exportatrice</p>
          <p className="text-sm text-slate-600">Une PME lyonnaise répond à un appel d'offres de la Commission Européenne pour un projet de recherche. Le formulaire de candidature exige un numéro DUNS. Sans lui, le dossier est automatiquement rejeté.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">Startup en levée de fonds</p>
          <p className="text-sm text-slate-600">Une startup parisienne négocie avec un fonds américain. Le fonds demande le numéro DUNS pour effectuer sa due diligence et vérifier les informations commerciales et financières de l'entreprise.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Comment obtenir son numéro DUNS ?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        La bonne nouvelle : obtenir votre numéro DUNS n'est pas compliqué. La mauvaise : cela peut prendre du temps si vous passez par la méthode officielle gratuite (jusqu'à 30 jours). Avec DUNS Verify, vous obtenez votre numéro certifié en moins de 2 minutes pour 4,99 €.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Pour en savoir plus sur toutes les méthodes disponibles, consultez notre guide complet : <a href={`/${lang}/blog/obtenir-numero-duns-france`} className="text-emerald-600 hover:underline">comment obtenir un numéro DUNS en France</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articles connexes</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Numéro DUNS : Le Guide Complet 2026" },
            { slug: "obtenir-numero-duns-france", title: "Comment Obtenir un Numéro DUNS en France" },
            { slug: "difference-duns-siret", title: "Différence entre DUNS et SIRET" },
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
        <span className="text-slate-700">DUNS Number Definition</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS Number: What Exactly Is It?
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        You've heard about the DUNS number but aren't quite sure what it is? You're not alone. Yet this small 9-digit number has become one of the most important identifiers in the business world. Here's a clear, jargon-free explanation to help you understand everything in just a few minutes.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">The Official Definition of the DUNS Number</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        DUNS stands for <strong>Data Universal Numbering System</strong>. It is a unique numerical identification system created by Dun &amp; Bradstreet (D&amp;B) in 1962. It assigns every business a 9-digit number that serves as its universal identifier in international commercial dealings.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Despite what the name might suggest, the DUNS number is not a random serial number. It is assigned sequentially by D&amp;B after verifying the legal existence of the business. Once assigned, this number never changes — even if the company changes its name, address, or management.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Today, more than <strong>455 million businesses</strong> worldwide have a DUNS number. It is recognized in 224 countries and used as an identification standard by organizations as significant as the European Union, the United Nations, Apple, Google, and dozens of national governments.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">A Simple Analogy: Your Company's International Passport</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The best way to understand the DUNS number is to compare it to a passport. Your personal passport identifies you uniquely anywhere in the world, regardless of your nationality or place of residence. The DUNS number does exactly the same thing for your company.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Imagine you're looking for a business partner in Japan. Your Japanese counterpart wants to make sure they're dealing with a legally existing and reliable company. They ask for your DUNS number. Within seconds, they can verify your legal existence, address, industry sector — and if you've subscribed to D&amp;B's premium services — your credit score and payment history.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Without this passport, your company is invisible to many international organizations. With it, you exist verifiably within a network of 455 million companies worldwide.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs National Identifiers: Understanding the Differences</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Every country has its own business identification system. In the UK it's the Companies House number, in Germany the Handelsregisternummer, in the US the EIN. The DUNS number is different: where national identifiers serve domestic administrative purposes, the DUNS is a global identifier recognized worldwide.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Criterion</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">National ID (e.g. Companies House)</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">DUNS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Geographic scope</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">National only</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">224 countries</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Assigned by</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Government agency</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Dun &amp; Bradstreet (private)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Length</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Varies by country</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">9 digits</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Cost</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Free (automatic on registration)</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Free (slow) or paid (fast)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Primary use</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Domestic administration</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">International commerce</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        National identifiers are automatically assigned when a company registers in its home country. They serve domestic administrative purposes: tax filings, employment contracts, local compliance. The DUNS must be obtained separately and is designed specifically for international business relationships.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Who Assigns the DUNS Number?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The DUNS number is assigned exclusively by Dun &amp; Bradstreet, an American company founded in 1841 that is now one of the world's most important commercial databases. D&amp;B maintains a database of more than 455 million companies, continuously updated through numerous sources: official registries, government data, financial information, and data provided directly by companies themselves.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        D&amp;B works with local partners in various countries to ensure data accuracy. These partners help collect and verify local business information, making the global database more reliable and comprehensive.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Why Does the DUNS Number Exist?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The problem the DUNS addresses is fundamental: how to reliably identify a business among hundreds of millions, across all the countries of the world, with different legal and administrative systems?
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Before the DUNS, companies had to use local identifiers (like the company registration number in the UK, the SIRET in France, etc.) that were not comparable across countries. An American company couldn't easily verify the legal existence of a British supplier using its domestic registration number alone.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        The DUNS solves this problem by creating a universal identifier: regardless of the company's country of origin, its DUNS number allows it to be identified and found in D&amp;B's global database.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Concrete Examples of DUNS Usage</h2>

      <div className="space-y-4 mb-6">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">iOS Developer</p>
          <p className="text-sm text-slate-600">Alex has just formed a limited company and wants to publish his app on the App Store as an organization. Apple requires a DUNS number to verify the legal existence of the company. Without DUNS, it's impossible to create an organization developer account — only individual accounts are available.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">Exporting SME</p>
          <p className="text-sm text-slate-600">A small manufacturing company responds to a European Commission tender for a research project. The application form requires a DUNS number. Without it, the application is automatically rejected regardless of the quality of the proposal.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">Startup Raising Investment</p>
          <p className="text-sm text-slate-600">A tech startup is negotiating with an American venture capital fund. The fund requests the DUNS number to conduct due diligence and verify the company's commercial and financial information before committing to investment.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">How to Get Your DUNS Number</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The good news: getting your DUNS number is straightforward. The caveat: it can take time if you go through the official free method (up to 30 days). With DUNS Verify, you get your certified number in under 2 minutes for €4.99.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        To learn about all available methods, check out our complete guide: <a href={`/${lang}/blog/numero-duns`} className="text-emerald-600 hover:underline">the complete DUNS number guide</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Related Articles</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS Number: The Complete Guide 2026" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet and the DUNS Number" },
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
        <span className="text-slate-700">DUNS-Nummer Definition</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS-Nummer: Was Genau Ist Das?
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Sie haben von der DUNS-Nummer gehört, wissen aber nicht genau, was das ist? Das geht vielen so. Dabei ist diese 9-stellige Nummer zu einem der wichtigsten Unternehmenskennzeichen in der Geschäftswelt geworden. Hier ist eine klare, verständliche Erklärung, damit Sie alles in wenigen Minuten verstehen.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Die offizielle Definition der DUNS-Nummer</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        DUNS steht für <strong>Data Universal Numbering System</strong>. Es handelt sich um ein eindeutiges numerisches Identifikationssystem, das 1962 von Dun &amp; Bradstreet (D&amp;B) entwickelt wurde. Es weist jedem Unternehmen eine 9-stellige Nummer zu, die als universeller Bezeichner im internationalen Handelsverkehr dient.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Entgegen dem, was der Name vermuten lässt, ist die DUNS-Nummer keine zufällige Seriennummer. Sie wird von D&amp;B nach Überprüfung der rechtlichen Existenz des Unternehmens sequenziell vergeben. Einmal vergeben, ändert sich diese Nummer nie — selbst wenn das Unternehmen seinen Namen, seine Adresse oder seine Geschäftsführung ändert.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Heute besitzen mehr als <strong>455 Millionen Unternehmen</strong> weltweit eine DUNS-Nummer. Sie wird in 224 Ländern anerkannt und als Identifikationsstandard von bedeutenden Organisationen wie der Europäischen Union, den Vereinten Nationen, Apple, Google und Dutzenden nationaler Regierungen verwendet.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Eine einfache Analogie: Der internationale Reisepass Ihres Unternehmens</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die beste Möglichkeit, die DUNS-Nummer zu verstehen, ist der Vergleich mit einem Reisepass. Ihr persönlicher Pass identifiziert Sie überall auf der Welt eindeutig, unabhängig von Ihrer Staatsangehörigkeit oder Ihrem Wohnort. Die DUNS-Nummer macht genau das Gleiche für Ihr Unternehmen.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Stellen Sie sich vor, Sie suchen einen Geschäftspartner in Japan. Ihr japanischer Gesprächspartner möchte sicherstellen, dass er mit einem rechtlich existierenden und zuverlässigen Unternehmen Geschäfte macht. Er fragt nach Ihrer DUNS-Nummer. In Sekunden kann er Ihre rechtliche Existenz, Ihre Adresse, Ihren Geschäftsbereich und — wenn Sie die Premium-Dienste von D&amp;B abonniert haben — Ihren Kredit-Score und Ihre Zahlungshistorie prüfen.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Ohne diesen Reisepass ist Ihr Unternehmen für viele internationale Organisationen unsichtbar. Mit ihm existieren Sie nachprüfbar in einem Netzwerk von 455 Millionen Unternehmen weltweit.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs. Nationale Unternehmenskennzeichen</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        In Deutschland kennen Unternehmer die Handelsregisternummer und die Steuernummer zur Identifizierung ihres Unternehmens. Die DUNS-Nummer hat eine andere Reichweite: Während nationale Kennzeichen nur im jeweiligen Land gelten, ist die DUNS ein weltweiter Bezeichner, der in 224 Ländern anerkannt wird.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Kriterium</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Handelsregisternummer</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">DUNS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Geografische Reichweite</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Nur Deutschland</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">224 Länder</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Vergeben von</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Amtsgericht (staatlich)</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Dun &amp; Bradstreet (privat)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Länge</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Variiert (z.B. HRB 12345)</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">9 Ziffern</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Kosten</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Kostenpflichtig bei Eintragung</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Kostenlos (langsam) oder kostenpflichtig (schnell)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Hauptnutzung</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Deutsche Verwaltung</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Internationaler Handel</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Die Handelsregisternummer wird bei der Gründung des Unternehmens automatisch zugewiesen. Sie dient hauptsächlich den deutschen Behördenprozessen. Die DUNS-Nummer muss separat beantragt werden und dient den internationalen Geschäftsbeziehungen. Beide Kennzeichen ergänzen sich — sie stehen nicht in Konkurrenz zueinander.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Wer vergibt die DUNS-Nummer?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die DUNS-Nummer wird ausschließlich von Dun &amp; Bradstreet vergeben, einem 1841 gegründeten amerikanischen Unternehmen, das heute eine der bedeutendsten kommerziellen Datenbanken der Welt unterhält. D&amp;B pflegt eine Datenbank mit mehr als 455 Millionen Unternehmen, die kontinuierlich durch zahlreiche Quellen aktualisiert wird: offizielle Landesregister, Regierungsdaten, von Unternehmen selbst gemeldete Informationen und Partnerschaften mit lokalen Akteuren.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        In Deutschland arbeitet D&amp;B mit lokalen Partnern zusammen, um die Datenqualität sicherzustellen und den Antragsprozess für deutsche Unternehmen zu erleichtern.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Warum gibt es die DUNS-Nummer?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Das Problem, das die DUNS löst, ist grundlegend: Wie identifiziert man ein Unternehmen zuverlässig unter Hunderten von Millionen, in allen Ländern der Welt, mit unterschiedlichen Rechts- und Verwaltungssystemen?
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Vor der DUNS mussten Unternehmen lokale Bezeichner verwenden (wie die Handelsregisternummer in Deutschland, die Unternehmensnummer in Österreich usw.), die von Land zu Land nicht vergleichbar waren. Ein amerikanisches Unternehmen konnte die rechtliche Existenz eines deutschen Lieferanten anhand seiner nationalen Registrierungsnummer allein nicht einfach überprüfen.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die DUNS löst dieses Problem, indem sie einen universellen Bezeichner schafft: Unabhängig vom Herkunftsland des Unternehmens ermöglicht seine DUNS-Nummer, es in der weltweiten Datenbank von D&amp;B zu identifizieren und zu finden.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Konkrete Anwendungsbeispiele</h2>

      <div className="space-y-4 mb-6">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">iOS-Entwickler</p>
          <p className="text-sm text-slate-600">Thomas gründet ein Startup und möchte seine App als Organisation im App Store veröffentlichen. Apple verlangt die DUNS-Nummer, um die rechtliche Existenz der GmbH zu überprüfen. Ohne DUNS ist es unmöglich, ein Organisations-Entwicklerkonto zu erstellen.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">Exportierendes Mittelstandsunternehmen</p>
          <p className="text-sm text-slate-600">Ein mittelständisches Unternehmen aus München bewirbt sich auf eine EU-Kommissionsausschreibung für ein Forschungsprojekt. Das Bewerbungsformular verlangt eine DUNS-Nummer. Ohne sie wird der Antrag automatisch abgelehnt.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">Startup bei der Investorensuche</p>
          <p className="text-sm text-slate-600">Ein Berliner Startup verhandelt mit einem amerikanischen Investmentfonds. Der Fonds fordert die DUNS-Nummer für seine Due Diligence und zur Überprüfung der geschäftlichen und finanziellen Informationen des Unternehmens.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Wie erhält man die DUNS-Nummer?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die gute Nachricht: Die Beantragung einer DUNS-Nummer ist unkompliziert. Der Nachteil: Es kann Zeit kosten, wenn Sie den offiziellen kostenlosen Weg wählen (bis zu 30 Tage). Mit DUNS Verify erhalten Sie Ihre zertifizierte Nummer in weniger als 2 Minuten für 4,99 €.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Für weitere Informationen über alle verfügbaren Methoden: Lesen Sie unseren vollständigen Leitfaden zur <a href={`/${lang}/blog/numero-duns`} className="text-emerald-600 hover:underline">DUNS-Nummer: Der vollständige Leitfaden</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Verwandte Artikel</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS-Nummer: Der vollständige Leitfaden 2026" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet und die DUNS-Nummer" },
            { slug: "verifier-numero-duns", title: "Wie man die DUNS-Nummer eines Unternehmens überprüft" },
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
        <span className="text-slate-700">Definición del Número DUNS</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Número DUNS: ¿Qué es Exactamente?
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        ¿Has oído hablar del número DUNS pero no sabes bien qué es? No estás solo. Sin embargo, este pequeño número de 9 dígitos se ha convertido en uno de los identificadores más importantes en el mundo empresarial. Aquí tienes una explicación clara y sin tecnicismos para entenderlo todo en pocos minutos.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">La Definición Oficial del Número DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        DUNS son las siglas de <strong>Data Universal Numbering System</strong>. Es un sistema de identificación numérica único creado por Dun &amp; Bradstreet (D&amp;B) en 1962. Asigna a cada empresa un número de 9 dígitos que sirve como identificador universal en las transacciones comerciales internacionales.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Contrariamente a lo que el nombre podría sugerir, el número DUNS no es un número de serie aleatorio. Se asigna secuencialmente por D&amp;B después de verificar la existencia legal de la empresa. Una vez asignado, este número nunca cambia — ni siquiera si la empresa cambia de nombre, dirección o dirección ejecutiva.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Hoy en día, más de <strong>455 millones de empresas</strong> en todo el mundo tienen un número DUNS. Está reconocido en 224 países y es utilizado como estándar de identificación por organizaciones tan importantes como la Unión Europea, las Naciones Unidas, Apple, Google y decenas de gobiernos nacionales.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Una Analogía Simple: El Pasaporte Internacional de tu Empresa</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        La mejor forma de entender el número DUNS es compararlo con un pasaporte. Tu pasaporte personal te identifica de forma única en cualquier parte del mundo, independientemente de tu nacionalidad o lugar de residencia. El número DUNS hace exactamente lo mismo para tu empresa.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Imagina que buscas un socio comercial en Japón. Tu interlocutor japonés quiere asegurarse de que está haciendo negocios con una empresa legalmente existente y fiable. Te pide tu número DUNS. En segundos, puede verificar tu existencia legal, tu dirección, tu sector de actividad y — si has contratado los servicios premium de D&amp;B — tu puntuación de crédito e historial de pagos.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Sin este pasaporte, tu empresa es invisible para muchas organizaciones internacionales. Con él, existes de forma verificable en una red de 455 millones de empresas mundiales.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs Identificadores Nacionales: Entendiendo las Diferencias</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        En España, los empresarios están familiarizados con el CIF, el NIF y el número de identificación fiscal para identificar su empresa. El DUNS tiene un alcance diferente: mientras que estos son identificadores nacionales, el DUNS es un identificador mundial reconocido en 224 países.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Criterio</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">CIF/NIF</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">DUNS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Alcance geográfico</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Solo España</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">224 países</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Asignado por</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">AEAT (gobierno)</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Dun &amp; Bradstreet (privado)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Longitud</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">9 caracteres</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">9 dígitos</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Coste</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuito (automático)</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuito (lento) o de pago (rápido)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Uso principal</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Administración española</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Comercio internacional</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        El CIF/NIF se asigna automáticamente al registrar la empresa en España. Sirve principalmente para los trámites administrativos nacionales: declaraciones fiscales, contratos laborales, etc. El DUNS debe obtenerse por separado y de forma voluntaria (salvo en sectores donde es obligatorio). Sirve para las relaciones comerciales internacionales. Ambos identificadores se complementan.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">¿Quién Asigna el Número DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        El número DUNS lo asigna exclusivamente Dun &amp; Bradstreet, una empresa americana fundada en 1841 que es hoy una de las bases de datos comerciales más importantes del mundo. D&amp;B mantiene una base de datos de más de 455 millones de empresas, actualizada permanentemente gracias a numerosas fuentes: registros oficiales de países, datos gubernamentales, información declarada por las propias empresas y asociaciones con actores locales.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        En España, D&amp;B trabaja con socios locales para garantizar la precisión de los datos y facilitar el proceso de solicitud para las empresas españolas.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">¿Por Qué Existe el Número DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        El problema que el DUNS busca resolver es fundamental: ¿cómo identificar de forma fiable una empresa entre cientos de millones, en todos los países del mundo, con sistemas legales y administrativos diferentes?
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Antes de la existencia del DUNS, las empresas debían utilizar identificadores locales (como el CIF en España, el Companies House number en el Reino Unido, etc.) que no eran comparables entre países. Una empresa americana no podía verificar fácilmente la existencia legal de un proveedor español a partir de su número de identificación nacional.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        El DUNS resuelve este problema creando un identificador universal: independientemente del país de origen de la empresa, su número DUNS permite identificarla y encontrarla en la base de datos mundial de D&amp;B.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Ejemplos Concretos de Uso del DUNS</h2>

      <div className="space-y-4 mb-6">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">Desarrollador iOS</p>
          <p className="text-sm text-slate-600">Carlos funda una startup y quiere publicar su aplicación en el App Store como organización. Apple le pide el número DUNS para verificar la existencia legal de su SL. Sin DUNS, es imposible crear una cuenta de desarrollador organizacional.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">PYME Exportadora</p>
          <p className="text-sm text-slate-600">Una pyme de Barcelona responde a una licitación de la Comisión Europea para un proyecto de investigación. El formulario de candidatura exige un número DUNS. Sin él, el expediente es rechazado automáticamente.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">Startup en Búsqueda de Inversión</p>
          <p className="text-sm text-slate-600">Una startup madrileña negocia con un fondo americano. El fondo solicita el número DUNS para realizar su due diligence y verificar la información comercial y financiera de la empresa antes de comprometerse a invertir.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">¿Cómo Obtener el Número DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        La buena noticia: obtener el número DUNS no es complicado. El inconveniente: puede llevar tiempo si optas por el método gratuito oficial (hasta 30 días). Con DUNS Verify, obtienes tu número certificado en menos de 2 minutos por 4,99 €.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Para conocer todos los métodos disponibles, consulta nuestra guía completa: <a href={`/${lang}/blog/numero-duns`} className="text-emerald-600 hover:underline">la guía completa del número DUNS</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Artículos Relacionados</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Número DUNS: La Guía Completa 2026" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet y el Número DUNS" },
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
        <span className="text-slate-700">Definizione del Numero DUNS</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numero DUNS: Cos'è Esattamente?
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Hai sentito parlare del numero DUNS ma non hai capito bene di cosa si tratta? Non sei solo. Eppure questo piccolo numero a 9 cifre è diventato uno degli identificatori più importanti nel mondo degli affari. Ecco una spiegazione chiara, senza tecnicismi, per capire tutto in pochi minuti.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">La Definizione Ufficiale del Numero DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        DUNS è l'acronimo di <strong>Data Universal Numbering System</strong>. È un sistema di identificazione numerica univoca creato da Dun &amp; Bradstreet (D&amp;B) nel 1962. Assegna a ogni azienda un numero a 9 cifre che funge da identificatore universale nelle transazioni commerciali internazionali.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Contrariamente a quanto il nome potrebbe suggerire, il numero DUNS non è un numero di serie casuale. Viene assegnato sequenzialmente da D&amp;B dopo aver verificato l'esistenza legale dell'azienda. Una volta assegnato, questo numero non cambia mai — nemmeno se l'azienda cambia nome, indirizzo o direzione.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Oggi, più di <strong>455 milioni di aziende</strong> nel mondo hanno un numero DUNS. È riconosciuto in 224 paesi e utilizzato come standard di identificazione da organizzazioni di rilievo come l'Unione Europea, le Nazioni Unite, Apple, Google e decine di governi nazionali.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Un'Analogia Semplice: Il Passaporto Internazionale della tua Azienda</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il modo migliore per capire il numero DUNS è paragonarlo a un passaporto. Il tuo passaporto personale ti identifica in modo univoco in qualsiasi parte del mondo, indipendentemente dalla tua nazionalità o luogo di residenza. Il numero DUNS fa esattamente la stessa cosa per la tua azienda.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Immagina di cercare un partner commerciale in Giappone. Il tuo interlocutore giapponese vuole assicurarsi di fare affari con un'azienda legalmente esistente e affidabile. Ti chiede il numero DUNS. In pochi secondi può verificare la tua esistenza legale, il tuo indirizzo, il tuo settore di attività e — se hai sottoscritto i servizi premium di D&amp;B — il tuo score di credito e la tua storia dei pagamenti.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Senza questo passaporto, la tua azienda è invisibile agli occhi di molte organizzazioni internazionali. Con esso, esisti in modo verificabile in una rete di 455 milioni di aziende mondiali.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs Identificatori Nazionali: Capire le Differenze</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        In Italia, gli imprenditori conoscono la Partita IVA e il codice fiscale per identificare la propria azienda. Il DUNS ha una portata diversa: mentre questi sono identificatori nazionali, il DUNS è un identificatore mondiale riconosciuto in 224 paesi.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Criterio</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Partita IVA</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">DUNS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Portata geografica</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Solo Italia</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">224 paesi</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Assegnato da</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Agenzia delle Entrate (governo)</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Dun &amp; Bradstreet (privato)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Lunghezza</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">11 cifre</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">9 cifre</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Costo</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuito (automatico)</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuito (lento) o a pagamento (rapido)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Uso principale</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Amministrazione italiana</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Commercio internazionale</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        La Partita IVA viene assegnata automaticamente all'atto di costituzione dell'azienda in Italia. Serve principalmente per gli adempimenti amministrativi nazionali: dichiarazioni fiscali, contributi previdenziali, contratti di lavoro, ecc. Il DUNS deve essere ottenuto separatamente e serve per i rapporti commerciali internazionali. I due identificatori si complementano.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Chi Assegna il Numero DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il numero DUNS viene assegnato esclusivamente da Dun &amp; Bradstreet, un'azienda americana fondata nel 1841 che è oggi uno dei più importanti database commerciali al mondo. D&amp;B mantiene un database di oltre 455 milioni di aziende, aggiornato costantemente grazie a numerose fonti: registri ufficiali dei paesi, dati governativi, informazioni dichiarate dalle stesse aziende e partnership con operatori locali.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        In Italia, D&amp;B collabora con partner locali per garantire l'accuratezza dei dati e facilitare il processo di richiesta per le aziende italiane.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Perché Esiste il Numero DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il problema che il DUNS mira a risolvere è fondamentale: come identificare in modo affidabile un'azienda tra centinaia di milioni, in tutti i paesi del mondo, con sistemi legali e amministrativi diversi?
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Prima dell'esistenza del DUNS, le aziende dovevano utilizzare identificatori locali (come la Partita IVA in Italia, il Companies House number nel Regno Unito, ecc.) che non erano comparabili tra paese e paese. Un'azienda americana non poteva facilmente verificare l'esistenza legale di un fornitore italiano a partire dal solo suo numero di identificazione nazionale.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il DUNS risolve questo problema creando un identificatore universale: indipendentemente dal paese di origine dell'azienda, il suo numero DUNS permette di identificarla e trovarla nel database mondiale di D&amp;B.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Esempi Concreti di Utilizzo del DUNS</h2>

      <div className="space-y-4 mb-6">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">Sviluppatore iOS</p>
          <p className="text-sm text-slate-600">Marco fonda una startup e vuole pubblicare la sua app sull'App Store come organizzazione. Apple richiede il numero DUNS per verificare l'esistenza legale della sua SRL. Senza DUNS, è impossibile creare un account sviluppatore organizzativo.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">PMI Esportatrice</p>
          <p className="text-sm text-slate-600">Una PMI di Milano risponde a un bando della Commissione Europea per un progetto di ricerca. Il modulo di candidatura richiede un numero DUNS. Senza di esso, la candidatura viene automaticamente respinta.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-emerald-500">
          <p className="font-semibold text-slate-800 mb-1">Startup in Cerca di Investimenti</p>
          <p className="text-sm text-slate-600">Una startup romana negozia con un fondo americano. Il fondo richiede il numero DUNS per effettuare la sua due diligence e verificare le informazioni commerciali e finanziarie dell'azienda prima di impegnarsi a investire.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Come Ottenere il Numero DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        La buona notizia: ottenere il numero DUNS non è complicato. Lo svantaggio: può richiedere tempo se si sceglie il metodo gratuito ufficiale (fino a 30 giorni). Con DUNS Verify, ottieni il tuo numero certificato in meno di 2 minuti per 4,99 €.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Per conoscere tutti i metodi disponibili, consulta la nostra guida completa: <a href={`/${lang}/blog/numero-duns`} className="text-emerald-600 hover:underline">la guida completa al numero DUNS</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articoli Correlati</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Numero DUNS: La Guida Completa 2026" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet e il Numero DUNS" },
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
