import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "numero-duns";
const AVAILABLE_LANGS = ['fr','en','de','es','it','nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];
const EN_FALLBACK = ['nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];

const META = {
  fr: { title: "Numéro DUNS : Guide Complet 2026 — Définition, Obtention, Utilité | DUNS Verify", description: "Tout savoir sur le numéro DUNS en 2026 : définition, histoire, à quoi ça sert, comment l'obtenir en France. Guide complet et pratique." },
  en: { title: "DUNS Number: Complete Guide 2026 — Definition, How to Get It, Uses | DUNS Verify", description: "Everything about the DUNS number in 2026: definition, history, what it's for, how to get it. Complete and practical guide." },
  de: { title: "DUNS-Nummer: Vollständiger Leitfaden 2026 — Definition, Beantragung, Nutzung | DUNS Verify", description: "Alles über die DUNS-Nummer 2026: Definition, Geschichte, Verwendung, wie man sie erhält. Vollständiger praktischer Leitfaden." },
  es: { title: "Número DUNS: Guía Completa 2026 — Definición, Obtención, Utilidad | DUNS Verify", description: "Todo sobre el número DUNS en 2026: definición, historia, para qué sirve, cómo obtenerlo. Guía completa y práctica." },
  it: { title: "Numero DUNS: Guida Completa 2026 — Definizione, Come Ottenerlo, Utilizzi | DUNS Verify", description: "Tutto sul numero DUNS nel 2026: definizione, storia, a cosa serve, come ottenerlo. Guida completa e pratica." },
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
        <span className="text-slate-700">Numéro DUNS : Guide Complet</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numéro DUNS : Tout Ce Que Vous Devez Savoir en 2026
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Le numéro DUNS est devenu incontournable pour les entreprises qui veulent se développer à l'international, travailler avec de grandes organisations ou publier des applications mobiles. Pourtant, beaucoup d'entrepreneurs en France ne savent pas encore ce que c'est ni comment l'obtenir. Ce guide complet vous explique tout — de la définition à l'obtention — pour que vous ayez toutes les cartes en main.
      </p>

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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs SIRET : quelle différence ?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        En France, les entrepreneurs sont habitués au SIRET (14 chiffres) et au SIREN (9 chiffres) pour identifier leur entreprise. Le DUNS a une portée différente : là où le SIRET est un identifiant national français, le DUNS est un identifiant mondial reconnu dans 224 pays.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Pour une analyse complète des différences entre ces deux identifiants, consultez notre article <a href={`/${lang}/blog/difference-duns-siret`} className="text-emerald-600 hover:underline">DUNS vs SIRET : quelle différence et lequel vous faut-il ?</a>
      </p>

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
        <span className="text-slate-700">DUNS Number: Complete Guide</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS Number: Everything You Need to Know in 2026
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        The DUNS number has become essential for businesses looking to expand internationally, work with major organizations, or publish mobile applications. Yet many entrepreneurs are still unclear on what it is and how to obtain one. This complete guide covers everything — from definition to how to get yours — so you have all the information you need.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">What is the DUNS Number?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The DUNS number (Data Universal Numbering System) is a unique 9-digit identifier assigned to every business entity worldwide. It was created in 1962 by Dun &amp; Bradstreet (D&amp;B), an American company specializing in commercial data that was founded in 1841. To date, more than 455 million companies across 224 countries have a DUNS number.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Unlike national identifiers such as the SIRET in France or the Companies House number in the UK, the DUNS is a global identifier. It works like a passport: no matter where your business operates in the world, this number uniquely and verifiably identifies it.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Origins: Created in 1962 by Dun &amp; Bradstreet</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet launched the DUNS system in 1962 to address a pressing need: American businesses required a reliable way to identify their commercial partners and assess creditworthiness. Before the DUNS, no universal standard existed for identifying a company at the international level.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        The strength of the system lies in its database: D&amp;B maintains one of the world's largest commercial databases, fed by government sources, trade registries, financial data, and information provided directly by companies themselves.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Structure: 9 Digits, Hundreds of Millions of Companies</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        The DUNS number consists of 9 digits, typically written in the format XX-XXX-XXXX (with hyphens for readability — hence the name D-U-N-S). These digits are not random: they are assigned sequentially by Dun &amp; Bradstreet when the number is created. Each number is unique and can never be reassigned.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        An important detail: if your company has multiple sites or subsidiaries, each entity can have its own DUNS number. This makes it possible to distinguish a parent company from its branches, which is particularly useful for large organizations.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">What is the DUNS Number Used For?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The DUNS number serves multiple purposes, and its importance keeps growing as the global economy becomes increasingly digital. Here are the main situations where you will need one.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">International Public Procurement</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        If you want to bid on tenders from international organizations — the European Union, the United Nations, NATO, or the US government (via SAM.gov) — a DUNS number is mandatory. These organizations use it to verify the legal existence of your company, its financial health, and commercial history. Without a DUNS, your application will simply be rejected.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Learn more in our dedicated article on the <a href={`/${lang}/blog/numero-duns-marches-publics`} className="text-emerald-600 hover:underline">DUNS number and international public procurement</a>.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Apple Developer Program</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        To publish apps on the App Store as an organization (rather than as an individual developer), Apple has required a DUNS number for several years. This requirement allows Apple to verify that the entity publishing the application is a legally registered organization. The verification process can take up to 5 business days at D&amp;B, plus an additional 2 days at Apple.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Google Play Store</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Since 2023, Google has also begun requiring the DUNS number for certain categories of developers on the Play Store. This trend is expected to grow in the coming years, making the DUNS a standard prerequisite for publishing mobile applications as an organization.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">B2B Partnerships and Commercial Credibility</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Beyond regulatory requirements, the DUNS number plays an important role in commercial credibility. When you seek to establish partnerships with large companies — particularly American or Asian multinationals — they will often check your DUNS to assess your reliability and creditworthiness. Having an up-to-date DUNS number with accurate information is a significant competitive advantage.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">How to Get Your DUNS Number</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        There are several ways to obtain a DUNS number, with significant differences in terms of timing and cost.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">The Official D&amp;B Method (Free, but Slow)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet offers a free registration process through its official website. You fill in an online form with your company's information (legal name, address, local registration number, etc.), and D&amp;B creates your profile in its global database. The catch? This process takes between 15 and 30 business days. If you have a deadline for a tender or an Apple Developer enrollment, this wait can be very costly.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Expedited Services (2 Minutes)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Services like DUNS Verify allow you to get your DUNS number in minutes for a small fee of €4.99. The process is straightforward: our service queries the Dun &amp; Bradstreet databases directly and delivers your certified DUNS number by email in under 2 minutes. This is the ideal solution if you need your number quickly.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cost and Timing: Key Comparison</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Method</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Cost</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Timeframe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Official D&amp;B</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Free</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">15 to 30 days</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">DUNS Verify</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">€4.99</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">2 minutes</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Other services</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">€30 to €100+</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">24 to 48 hours</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        The real question isn't "how much does the DUNS cost?" but "how much does waiting cost?" If a €50,000 contract slips away because you didn't have your DUNS in time, the cost calculation takes on an entirely different dimension.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs National Identifiers</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Every country has its own business identification system: the SIRET in France, the Companies House number in the UK, the Handelsregisternummer in Germany, the CIF in Spain. These are national identifiers — they work within their respective countries but are not recognized internationally.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        The DUNS number fills this gap: it is a universal identifier recognized in 224 countries. It does not replace national identifiers — it complements them for international purposes. A French company needs both its SIRET (for domestic administrative purposes) and a DUNS (for international business).
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Who Needs a DUNS Number?</h2>

      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>iOS developers</strong> who want to publish on the App Store as an organization</li>
        <li><strong>Android developers</strong> on the Google Play Store (increasingly required)</li>
        <li><strong>SMEs and mid-sized companies</strong> responding to international tenders</li>
        <li><strong>Startups</strong> seeking partnerships with multinationals</li>
        <li><strong>Exporters</strong> working with American or Asian buyers</li>
        <li><strong>NGOs and associations</strong> receiving international funding</li>
      </ul>

      <p className="text-slate-700 leading-relaxed mb-4">
        In short, if your business crosses — or aspires to cross — national borders, the DUNS number is an essential prerequisite. And with DUNS Verify, getting yours takes just 2 minutes.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Related Articles</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns-definition", title: "DUNS Number: What Is It? Simple Definition" },
            { slug: "numero-duns-apple-developer", title: "DUNS Number for Apple Developer: Complete Guide" },
            { slug: "numero-duns-google-play", title: "DUNS Number for Google Play Store: Developer Guide" },
            { slug: "numero-duns-marches-publics", title: "DUNS Number and International Public Procurement" },
            { slug: "verifier-numero-duns", title: "How to Verify a Company's DUNS Number" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet and the DUNS Number: All You Need to Know" },
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
        <span className="text-slate-700">DUNS-Nummer: Vollständiger Leitfaden</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS-Nummer: Alles, Was Sie 2026 Wissen Müssen
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Die DUNS-Nummer ist für Unternehmen unverzichtbar geworden, die international expandieren, mit großen Organisationen zusammenarbeiten oder mobile Anwendungen veröffentlichen möchten. Dennoch wissen viele Unternehmer noch immer nicht genau, was eine DUNS-Nummer ist und wie man sie erhält. Dieser vollständige Leitfaden erklärt alles — von der Definition bis zur Beantragung.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Was ist die DUNS-Nummer?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die DUNS-Nummer (Data Universal Numbering System) ist ein eindeutiger 9-stelliger Bezeichner, der jedem Unternehmen weltweit zugewiesen wird. Sie wurde 1962 von Dun &amp; Bradstreet (D&amp;B) entwickelt, einem amerikanischen Unternehmen, das sich auf Wirtschaftsinformationen spezialisiert hat und 1841 gegründet wurde. Heute besitzen mehr als 455 Millionen Unternehmen in 224 Ländern eine DUNS-Nummer.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Im Gegensatz zu nationalen Kennzeichnungen wie der Handelsregisternummer oder der Steuernummer ist die DUNS-Nummer ein globaler Bezeichner. Sie funktioniert wie ein Reisepass: Egal wo Ihr Unternehmen auf der Welt tätig ist, diese Nummer identifiziert es eindeutig und nachprüfbar.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Geschichte: Eingeführt 1962 von Dun &amp; Bradstreet</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet führte das DUNS-System 1962 ein, um einem dringenden Bedarf gerecht zu werden: Amerikanische Unternehmen brauchten eine zuverlässige Methode, um ihre Geschäftspartner zu identifizieren und deren Kreditwürdigkeit zu bewerten. Vor der DUNS gab es keinen universellen Standard zur internationalen Unternehmensidentifizierung.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die Stärke des Systems liegt in seiner Datenbank: D&amp;B unterhält eine der größten kommerziellen Datenbanken der Welt, die durch Regierungsquellen, Handelsregister, Finanzdaten und direkt von Unternehmen bereitgestellte Informationen gespeist wird.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Aufbau: 9 Stellen, Hunderte Millionen Unternehmen</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die DUNS-Nummer besteht aus 9 Ziffern, die üblicherweise im Format XX-XXX-XXXX geschrieben werden (mit Bindestrichen zur besseren Lesbarkeit — daher der Name D-U-N-S). Diese Ziffern sind nicht zufällig: Sie werden von Dun &amp; Bradstreet bei der Erstellung sequenziell vergeben. Jede Nummer ist einmalig und kann nicht neu vergeben werden.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Ein wichtiger Aspekt: Wenn Ihr Unternehmen mehrere Standorte oder Tochtergesellschaften hat, kann jede Einheit ihre eigene DUNS-Nummer erhalten. So lassen sich Muttergesellschaften von ihren Niederlassungen unterscheiden, was für große Organisationen besonders nützlich ist.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Wofür wird die DUNS-Nummer verwendet?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die DUNS-Nummer hat vielfältige Verwendungszwecke, und ihre Bedeutung wächst ständig mit der Digitalisierung der Weltwirtschaft. Hier sind die wichtigsten Situationen, in denen Sie eine benötigen werden.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Internationale Ausschreibungen und öffentliche Aufträge</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Wenn Sie an Ausschreibungen internationaler Organisationen teilnehmen möchten — der Europäischen Union, den Vereinten Nationen, der NATO oder der US-Regierung (über SAM.gov) — ist die DUNS-Nummer Pflicht. Diese Organisationen nutzen sie, um die rechtliche Existenz Ihres Unternehmens, seine finanzielle Gesundheit und seine Handelsgeschichte zu überprüfen. Ohne DUNS wird Ihre Bewerbung schlicht abgelehnt.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Apple Developer Program</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Um Apps als Organisation (nicht als Einzelentwickler) im App Store zu veröffentlichen, verlangt Apple seit Jahren eine DUNS-Nummer. Diese Anforderung ermöglicht es Apple zu überprüfen, dass die veröffentlichende Einheit eine rechtlich eingetragene Organisation ist. Der Verifizierungsprozess kann bis zu 5 Werktage bei D&amp;B dauern, plus weitere 2 Tage bei Apple.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Google Play Store</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Seit 2023 verlangt auch Google für bestimmte Entwicklerkategorien im Play Store eine DUNS-Nummer. Dieser Trend wird sich in den kommenden Jahren voraussichtlich verstärken und die DUNS zur Standardvoraussetzung für die Veröffentlichung von Apps als Organisation machen.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">B2B-Partnerschaften und Geschäftsglaubwürdigkeit</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Über regulatorische Anforderungen hinaus spielt die DUNS-Nummer eine wichtige Rolle für die Geschäftsglaubwürdigkeit. Wenn Sie Partnerschaften mit großen Unternehmen — insbesondere amerikanischen oder asiatischen Konzernen — anstreben, werden diese oft Ihre DUNS prüfen, um Ihre Zuverlässigkeit und Kreditwürdigkeit zu beurteilen. Eine aktuelle DUNS-Nummer mit genauen Informationen ist ein nicht zu unterschätzender Wettbewerbsvorteil.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Wie erhalten Sie Ihre DUNS-Nummer?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Es gibt mehrere Möglichkeiten, eine DUNS-Nummer zu beantragen, mit wesentlichen Unterschieden bei Bearbeitungszeit und Kosten.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Offizielle D&amp;B-Methode (kostenlos, aber langsam)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet bietet über seine offizielle Website einen kostenlosen Registrierungsprozess an. Sie füllen ein Online-Formular mit den Unternehmensdaten aus, und D&amp;B erstellt Ihr Profil in der globalen Datenbank. Der Haken? Dieser Prozess dauert zwischen 15 und 30 Werktagen. Wenn Sie eine Frist für eine Ausschreibung oder eine Apple-Developer-Anmeldung einhalten müssen, kann diese Wartezeit sehr kostspielig werden.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Express-Services (2 Minuten)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Services wie DUNS Verify ermöglichen es Ihnen, Ihre DUNS-Nummer in wenigen Minuten für einen geringen Betrag von 4,99 € zu erhalten. Das Prinzip ist einfach: Unser Service fragt direkt die Datenbanken von Dun &amp; Bradstreet ab und liefert Ihnen Ihre zertifizierte DUNS-Nummer per E-Mail in weniger als 2 Minuten. Die ideale Lösung, wenn Sie Ihre Nummer schnell benötigen.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Kosten und Bearbeitungszeiten im Vergleich</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Methode</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Kosten</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Bearbeitungszeit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Offizielles D&amp;B</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Kostenlos</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">15 bis 30 Tage</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">DUNS Verify</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">4,99 €</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">2 Minuten</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Andere Anbieter</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">30 € bis 100 €+</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">24 bis 48 Stunden</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Die entscheidende Frage ist nicht „was kostet die DUNS-Nummer?" sondern „was kostet das Warten?". Wenn ein Auftrag im Wert von 50.000 € entgeht, weil die DUNS-Nummer nicht rechtzeitig vorlag, bekommt die Kostenfrage eine ganz andere Dimension.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs. Nationale Unternehmenskennzeichen</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Jedes Land hat sein eigenes Unternehmensidentifikationssystem: die Handelsregisternummer in Deutschland, das SIRET in Frankreich, die Companies House Number in Großbritannien, das CIF in Spanien. Diese nationalen Kennzeichen funktionieren innerhalb des jeweiligen Landes, sind aber international nicht anerkannt.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die DUNS-Nummer schließt diese Lücke: Sie ist ein universeller Bezeichner, der in 224 Ländern anerkannt wird. Sie ersetzt keine nationalen Kennzeichen — sie ergänzt sie für internationale Zwecke. Ein deutsches Unternehmen benötigt sowohl seine Handelsregisternummer (für inländische Behördenwege) als auch eine DUNS-Nummer (für internationale Geschäfte).
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Wer braucht eine DUNS-Nummer?</h2>

      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>iOS-Entwickler</strong>, die Apps als Organisation im App Store veröffentlichen möchten</li>
        <li><strong>Android-Entwickler</strong> im Google Play Store (zunehmend erforderlich)</li>
        <li><strong>KMU und mittelständische Unternehmen</strong>, die auf internationale Ausschreibungen antworten</li>
        <li><strong>Startups</strong>, die Partnerschaften mit multinationalen Konzernen anstreben</li>
        <li><strong>Exporteure</strong>, die mit amerikanischen oder asiatischen Käufern zusammenarbeiten</li>
        <li><strong>NGOs und Verbände</strong>, die internationale Fördermittel erhalten</li>
      </ul>

      <p className="text-slate-700 leading-relaxed mb-4">
        Kurz gesagt: Wenn Ihr Unternehmen nationale Grenzen überschreitet — oder dies anstrebt — ist die DUNS-Nummer eine unverzichtbare Voraussetzung. Und mit DUNS Verify dauert die Beantragung nur 2 Minuten.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Verwandte Artikel</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns-definition", title: "DUNS-Nummer: Was Ist Das? Einfache Definition" },
            { slug: "numero-duns-apple-developer", title: "DUNS-Nummer für Apple Developer: Vollständiger Leitfaden" },
            { slug: "numero-duns-google-play", title: "DUNS-Nummer für Google Play Store: Entwicklerleitfaden" },
            { slug: "numero-duns-marches-publics", title: "DUNS-Nummer und internationale öffentliche Aufträge" },
            { slug: "verifier-numero-duns", title: "Wie man die DUNS-Nummer eines Unternehmens überprüft" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet und die DUNS-Nummer: Alles Wissenswerte" },
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
        <span className="text-slate-700">Número DUNS: Guía Completa</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Número DUNS: Todo Lo Que Necesitas Saber en 2026
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        El número DUNS se ha vuelto imprescindible para las empresas que desean expandirse internacionalmente, trabajar con grandes organizaciones o publicar aplicaciones móviles. Sin embargo, muchos empresarios aún no saben exactamente qué es ni cómo obtenerlo. Esta guía completa lo explica todo — desde la definición hasta cómo obtenerlo — para que tengas toda la información necesaria.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">¿Qué es el Número DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        El número DUNS (Data Universal Numbering System) es un identificador único de 9 dígitos asignado a cada entidad empresarial en todo el mundo. Fue creado en 1962 por Dun &amp; Bradstreet (D&amp;B), una empresa americana especializada en información comercial fundada en 1841. Hasta la fecha, más de 455 millones de empresas en 224 países tienen un número DUNS.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        A diferencia de identificadores nacionales como el CIF en España o el NIF en otros países, el DUNS es un identificador mundial. Funciona como un pasaporte: independientemente de dónde opere tu empresa en el mundo, este número la identifica de forma única y verificable.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Origen: Creado en 1962 por Dun &amp; Bradstreet</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet lanzó el sistema DUNS en 1962 para responder a una necesidad urgente: las empresas estadounidenses necesitaban un método fiable para identificar a sus socios comerciales y evaluar su solvencia. Antes del DUNS, no existía ningún estándar universal para identificar una empresa a nivel internacional.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        La fortaleza del sistema reside en su base de datos: D&amp;B mantiene una de las bases de datos comerciales más grandes del mundo, alimentada por fuentes gubernamentales, registros mercantiles, datos financieros e información proporcionada directamente por las empresas.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Estructura: 9 Dígitos, Cientos de Millones de Empresas</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        El número DUNS consta de 9 dígitos, generalmente escritos en el formato XX-XXX-XXXX (con guiones para facilitar la lectura — de ahí el nombre D-U-N-S). Estos dígitos no son aleatorios: se asignan secuencialmente por Dun &amp; Bradstreet al crear el número. Cada número es único y no puede ser reasignado.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Un aspecto importante: si tu empresa tiene varias sedes o filiales, cada entidad puede tener su propio número DUNS. Esto permite distinguir la empresa matriz de sus sucursales, lo que resulta especialmente útil para grandes organizaciones.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">¿Para Qué Sirve el Número DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        El número DUNS tiene múltiples usos, y su importancia sigue creciendo a medida que la economía global se digitaliza. Estas son las principales situaciones en las que lo necesitarás.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Licitaciones Públicas Internacionales</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Si deseas presentarte a licitaciones de organizaciones internacionales — la Unión Europea, las Naciones Unidas, la OTAN o el gobierno estadounidense (a través de SAM.gov) — el número DUNS es obligatorio. Estas organizaciones lo utilizan para verificar la existencia legal de tu empresa, su salud financiera y su historial comercial. Sin DUNS, tu solicitud será automáticamente rechazada.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Obtén más información en nuestro artículo dedicado al <a href={`/${lang}/blog/numero-duns-marches-publics`} className="text-emerald-600 hover:underline">número DUNS y la contratación pública internacional</a>.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Apple Developer Program</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Para publicar aplicaciones en el App Store como organización (no como desarrollador individual), Apple exige un número DUNS desde hace varios años. Este requisito permite a Apple verificar que la entidad que publica la aplicación es una organización legalmente registrada. El proceso de verificación puede tardar hasta 5 días hábiles en D&amp;B, más 2 días adicionales en Apple.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Google Play Store</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Desde 2023, Google también ha comenzado a exigir el número DUNS para ciertas categorías de desarrolladores en Play Store. Esta tendencia se espera que aumente en los próximos años, convirtiendo el DUNS en un requisito estándar para publicar aplicaciones móviles como organización.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Asociaciones B2B y Credibilidad Comercial</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Más allá de las obligaciones regulatorias, el número DUNS juega un papel importante en la credibilidad comercial. Cuando buscas establecer asociaciones con grandes empresas — especialmente multinacionales americanas o asiáticas — frecuentemente verificarán tu DUNS para evaluar tu fiabilidad y solvencia. Tener un número DUNS actualizado con información precisa es una ventaja competitiva considerable.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">¿Cómo Obtener tu Número DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Existen varias formas de obtener un número DUNS, con diferencias importantes en términos de plazos y costes.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Método Oficial de D&amp;B (Gratuito, pero Lento)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet ofrece un proceso de registro gratuito a través de su sitio web oficial. Completas un formulario en línea con los datos de tu empresa, y D&amp;B crea tu perfil en su base de datos global. ¿El problema? Este proceso tarda entre 15 y 30 días hábiles. Si tienes un plazo para una licitación o un registro en Apple Developer, esta espera puede resultar muy costosa.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Servicios Acelerados (2 Minutos)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Servicios como DUNS Verify te permiten obtener tu número DUNS en minutos por una pequeña tarifa de 4,99 €. El proceso es sencillo: nuestro servicio consulta directamente las bases de datos de Dun &amp; Bradstreet y te entrega tu número DUNS certificado por correo electrónico en menos de 2 minutos. La solución ideal cuando necesitas tu número rápidamente.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Coste y Plazos: Comparativa</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Método</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Coste</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Plazo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">D&amp;B Oficial</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuito</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">15 a 30 días</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">DUNS Verify</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">4,99 €</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">2 minutos</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Otros servicios</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">30 € a 100 €+</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">24 a 48 horas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        La pregunta real no es "¿cuánto cuesta el DUNS?" sino "¿cuánto cuesta la espera?". Si un contrato de 50.000 € se escapa porque no tenías tu DUNS a tiempo, el cálculo de costes adquiere una dimensión completamente diferente.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs Identificadores Nacionales</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Cada país tiene su propio sistema de identificación empresarial: el CIF o NIF en España, el SIRET en Francia, el Companies House Number en el Reino Unido, la Handelsregisternummer en Alemania. Estos son identificadores nacionales — funcionan dentro de sus respectivos países pero no son reconocidos internacionalmente.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        El número DUNS llena este vacío: es un identificador universal reconocido en 224 países. No reemplaza los identificadores nacionales — los complementa para fines internacionales. Una empresa española necesita tanto su CIF (para trámites administrativos nacionales) como un DUNS (para negocios internacionales).
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">¿Quién Necesita un Número DUNS?</h2>

      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Desarrolladores iOS</strong> que quieran publicar en App Store como organización</li>
        <li><strong>Desarrolladores Android</strong> en Google Play Store (requisito creciente)</li>
        <li><strong>PYMEs y medianas empresas</strong> que responden a licitaciones internacionales</li>
        <li><strong>Startups</strong> que buscan asociaciones con multinacionales</li>
        <li><strong>Exportadores</strong> que trabajan con compradores americanos o asiáticos</li>
        <li><strong>ONG y asociaciones</strong> que reciben financiación internacional</li>
      </ul>

      <p className="text-slate-700 leading-relaxed mb-4">
        En resumen, si tu empresa cruza — o aspira a cruzar — fronteras nacionales, el número DUNS es un requisito imprescindible. Y con DUNS Verify, obtenerlo solo lleva 2 minutos.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Artículos Relacionados</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns-definition", title: "Número DUNS: ¿Qué es? Definición Simple" },
            { slug: "numero-duns-apple-developer", title: "Número DUNS para Apple Developer: Guía Completa" },
            { slug: "numero-duns-google-play", title: "Número DUNS para Google Play Store: Guía para Desarrolladores" },
            { slug: "numero-duns-marches-publics", title: "Número DUNS y Contratación Pública Internacional" },
            { slug: "verifier-numero-duns", title: "Cómo Verificar el Número DUNS de una Empresa" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet y el Número DUNS: Todo lo que Necesitas Saber" },
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
        <span className="text-slate-700">Numero DUNS: Guida Completa</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numero DUNS: Tutto Quello che Devi Sapere nel 2026
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Il numero DUNS è diventato indispensabile per le aziende che vogliono espandersi a livello internazionale, collaborare con grandi organizzazioni o pubblicare applicazioni mobili. Eppure molti imprenditori non sanno ancora esattamente cos'è e come ottenerlo. Questa guida completa spiega tutto — dalla definizione all'ottenimento — per avere tutte le informazioni necessarie.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cos'è il Numero DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il numero DUNS (Data Universal Numbering System) è un identificatore univoco a 9 cifre assegnato a ogni entità commerciale nel mondo. È stato creato nel 1962 da Dun &amp; Bradstreet (D&amp;B), un'azienda americana specializzata in informazioni commerciali fondata nel 1841. Ad oggi, oltre 455 milioni di aziende in 224 paesi possiedono un numero DUNS.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        A differenza degli identificatori nazionali come il codice fiscale o la Partita IVA in Italia, il DUNS è un identificatore globale. Funziona come un passaporto: indipendentemente da dove opera la tua azienda nel mondo, questo numero la identifica in modo univoco e verificabile.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Origini: Creato nel 1962 da Dun &amp; Bradstreet</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet ha lanciato il sistema DUNS nel 1962 per rispondere a una necessità urgente: le aziende americane avevano bisogno di un metodo affidabile per identificare i loro partner commerciali e valutarne la solvibilità. Prima del DUNS, non esisteva alcuno standard universale per identificare un'azienda a livello internazionale.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        La forza del sistema risiede nel suo database: D&amp;B mantiene uno dei più grandi database commerciali al mondo, alimentato da fonti governative, registri delle imprese, dati finanziari e informazioni fornite direttamente dalle aziende stesse.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Struttura: 9 Cifre, Centinaia di Milioni di Aziende</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il numero DUNS è composto da 9 cifre, solitamente scritte nel formato XX-XXX-XXXX (con trattini per la leggibilità — da cui il nome D-U-N-S). Queste cifre non sono casuali: vengono assegnate sequenzialmente da Dun &amp; Bradstreet al momento della creazione del numero. Ogni numero è unico e non può essere riassegnato.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Un aspetto importante: se la tua azienda ha più sedi o filiali, ciascuna entità può avere il proprio numero DUNS. Questo permette di distinguere la casa madre dalle sue succursali, il che è particolarmente utile per le grandi organizzazioni.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">A Cosa Serve il Numero DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il numero DUNS ha molteplici utilizzi, e la sua importanza continua a crescere con la digitalizzazione dell'economia globale. Ecco le principali situazioni in cui ne avrai bisogno.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Appalti Pubblici Internazionali</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Se vuoi partecipare a gare d'appalto di organizzazioni internazionali — Unione Europea, Nazioni Unite, NATO o governo americano (tramite SAM.gov) — il numero DUNS è obbligatorio. Queste organizzazioni lo usano per verificare l'esistenza legale della tua azienda, la sua salute finanziaria e la storia commerciale. Senza DUNS, la tua candidatura verrà semplicemente scartata.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Scopri di più nel nostro articolo dedicato al <a href={`/${lang}/blog/numero-duns-marches-publics`} className="text-emerald-600 hover:underline">numero DUNS e gli appalti pubblici internazionali</a>.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Apple Developer Program</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Per pubblicare app sull'App Store come organizzazione (e non come sviluppatore individuale), Apple richiede un numero DUNS da diversi anni. Questo requisito consente ad Apple di verificare che l'entità che pubblica l'applicazione sia un'organizzazione legalmente registrata. Il processo di verifica può richiedere fino a 5 giorni lavorativi presso D&amp;B, più altri 2 giorni presso Apple.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Google Play Store</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dal 2023, anche Google ha iniziato a richiedere il numero DUNS per alcune categorie di sviluppatori nel Play Store. Si prevede che questa tendenza si amplifichi negli anni a venire, rendendo il DUNS un prerequisito standard per pubblicare applicazioni mobili come organizzazione.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Partnership B2B e Credibilità Commerciale</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Oltre agli obblighi normativi, il numero DUNS svolge un ruolo importante nella credibilità commerciale. Quando cerchi di stabilire partnership con grandi aziende — in particolare multinazionali americane o asiatiche — spesso verificheranno il tuo DUNS per valutare la tua affidabilità e solvibilità. Avere un numero DUNS aggiornato con informazioni accurate è un vantaggio competitivo non trascurabile.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Come Ottenere il Tuo Numero DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Esistono diversi modi per ottenere un numero DUNS, con differenze significative in termini di tempi e costi.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Metodo Ufficiale D&amp;B (Gratuito, ma Lento)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet offre un processo di registrazione gratuito tramite il suo sito ufficiale. Compili un modulo online con le informazioni della tua azienda, e D&amp;B crea il tuo profilo nel database globale. Il problema? Questo processo richiede tra 15 e 30 giorni lavorativi. Se hai una scadenza per un appalto o un'iscrizione ad Apple Developer, questa attesa può costarti molto.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Servizi Accelerati (2 Minuti)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Servizi come DUNS Verify ti permettono di ottenere il tuo numero DUNS in pochi minuti per una piccola tariffa di 4,99 €. Il processo è semplice: il nostro servizio interroga direttamente i database di Dun &amp; Bradstreet e ti consegna il tuo numero DUNS certificato via email in meno di 2 minuti. La soluzione ideale quando hai bisogno del numero rapidamente.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Costi e Tempi: Confronto</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Metodo</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Costo</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Tempi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">D&amp;B Ufficiale</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuito</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">15-30 giorni</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">DUNS Verify</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">4,99 €</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium">2 minuti</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Altri servizi</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">30 € - 100 €+</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">24-48 ore</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        La domanda reale non è "quanto costa il DUNS?" ma "quanto costa l'attesa?". Se un contratto da 50.000 € sfuma perché non avevi il tuo DUNS in tempo, il calcolo dei costi assume una dimensione completamente diversa.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS vs Identificatori Nazionali</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Ogni paese ha il proprio sistema di identificazione aziendale: la Partita IVA in Italia, il SIRET in Francia, il Companies House Number nel Regno Unito, la Handelsregisternummer in Germania. Questi sono identificatori nazionali — funzionano all'interno dei rispettivi paesi ma non sono riconosciuti internazionalmente.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il numero DUNS colma questa lacuna: è un identificatore universale riconosciuto in 224 paesi. Non sostituisce gli identificatori nazionali — li integra per scopi internazionali. Un'azienda italiana ha bisogno sia della sua Partita IVA (per le pratiche amministrative nazionali) che di un DUNS (per i business internazionali).
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Chi Ha Bisogno di un Numero DUNS?</h2>

      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Sviluppatori iOS</strong> che vogliono pubblicare sull'App Store come organizzazione</li>
        <li><strong>Sviluppatori Android</strong> nel Google Play Store (requisito in crescita)</li>
        <li><strong>PMI e medie imprese</strong> che rispondono ad appalti internazionali</li>
        <li><strong>Startup</strong> che cercano partnership con multinazionali</li>
        <li><strong>Esportatori</strong> che lavorano con acquirenti americani o asiatici</li>
        <li><strong>ONG e associazioni</strong> che ricevono finanziamenti internazionali</li>
      </ul>

      <p className="text-slate-700 leading-relaxed mb-4">
        In sintesi, se la tua attività supera — o aspira a superare — i confini nazionali, il numero DUNS è un prerequisito indispensabile. E con DUNS Verify, ottenerlo richiede solo 2 minuti.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articoli Correlati</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns-definition", title: "Numero DUNS: Cos'è? Definizione Semplice" },
            { slug: "numero-duns-apple-developer", title: "Numero DUNS per Apple Developer: Guida Completa" },
            { slug: "numero-duns-google-play", title: "Numero DUNS per Google Play Store: Guida per Sviluppatori" },
            { slug: "numero-duns-marches-publics", title: "Numero DUNS e Appalti Pubblici Internazionali" },
            { slug: "verifier-numero-duns", title: "Come Verificare il Numero DUNS di un'Azienda" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet e il Numero DUNS: Tutto quello che Devi Sapere" },
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
