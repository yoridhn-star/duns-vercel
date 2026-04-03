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
    title: "Numéro DUNS : C'est Quoi ? Définition et Explication Simple | DUNS Verify",
    description: "Qu'est-ce que le numéro DUNS ? Définition claire, analogie simple, comparaison avec le SIRET et exemples concrets d'utilisation pour les entreprises.",
    alternates: { canonical: `${SITE_URL}/${lang}/blog/numero-duns-definition` },
    openGraph: {
      title: "Numéro DUNS : C'est Quoi ? Définition Simple",
      description: "Définition simple et complète du numéro DUNS, le passeport international de votre entreprise.",
      url: `${SITE_URL}/${lang}/blog/numero-duns-definition`,
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
    headline: "Numéro DUNS : C'est Quoi Exactement ?",
    description: "Définition simple et complète du numéro DUNS, le passeport international de votre entreprise.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/${lang}/blog/numero-duns-definition`,
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
          </div>
        </main>

        <BlogFooter lang={lang} />
      </div>
    </>
  );
}
