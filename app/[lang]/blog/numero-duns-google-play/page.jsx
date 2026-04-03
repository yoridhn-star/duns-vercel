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
    title: "Numéro DUNS Google Play : Obligatoire pour les Développeurs Android | DUNS Verify",
    description: "Google exige désormais un numéro DUNS pour certains développeurs Android. Découvrez pourquoi, comment l'obtenir et comment publier vos apps sur le Play Store.",
    alternates: { canonical: `${SITE_URL}/${lang}/blog/numero-duns-google-play` },
    openGraph: {
      title: "Numéro DUNS Google Play : Guide Développeur Android",
      description: "Pourquoi Google exige le DUNS et comment l'obtenir rapidement pour publier sur le Play Store.",
      url: `${SITE_URL}/${lang}/blog/numero-duns-google-play`,
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
    headline: "Numéro DUNS et Google Play Store : Comment Publier Vos Apps",
    description: "Guide complet sur le numéro DUNS pour les développeurs Android sur le Google Play Store.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/${lang}/blog/numero-duns-google-play`,
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
              <span className="text-slate-700">DUNS pour Google Play Store</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
              Numéro DUNS et Google Play Store : Comment Publier Vos Apps
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Si vous développez des applications Android et souhaitez les distribuer via le Google Play Store en tant qu'organisation, le numéro DUNS est entré dans l'équation. Voici tout ce que vous devez savoir sur cette exigence relativement récente de Google et comment s'y conformer rapidement.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">La nouvelle exigence Google : pourquoi le DUNS ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Depuis 2023, Google a renforcé son processus de vérification des développeurs sur le Play Store. Dans le cadre de cette initiative, Google exige désormais un numéro DUNS pour certaines catégories de comptes développeurs — principalement les comptes Organisation et les développeurs qui publient des applications destinées aux entreprises ou aux enfants.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              L'objectif de Google est de lutter contre la fraude et les applications malveillantes en s'assurant que les organisations qui publient sur son store sont des entités légalement existantes et vérifiables. En utilisant la base de données D&amp;B — la référence mondiale avec 455 millions d'entreprises — Google peut vérifier votre existence légale de façon fiable dans plus de 200 pays.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
              <p className="text-sm text-blue-800 font-medium mb-1">Important</p>
              <p className="text-sm text-blue-700">Cette exigence s'applique principalement aux comptes développeurs Organisation sur le Google Play Console. Les comptes individuels peuvent ne pas être concernés dans tous les cas. Vérifiez les exigences actuelles de Google Play Console pour votre situation spécifique.</p>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Êtes-vous concerné ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Vous êtes potentiellement concerné par l'exigence DUNS de Google Play si :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li>Vous créez un compte <strong>développeur Organisation</strong> (plutôt qu'individuel)</li>
              <li>Vous publiez des <strong>applications professionnelles</strong> ou B2B</li>
              <li>Vous publiez des <strong>applications pour enfants</strong> (exigences de conformité renforcées)</li>
              <li>Vous souhaitez être vérifié comme <strong>éditeur fiable</strong> sur le Play Store</li>
              <li>Votre application accède à des <strong>données sensibles</strong> (santé, finance, etc.)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Comment vérifier si vous avez déjà un numéro DUNS</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Avant de faire une démarche pour obtenir un nouveau numéro DUNS, vérifiez si votre entreprise en possède déjà un. Cette vérification est gratuite avec DUNS Verify : entrez simplement le nom de votre entreprise et nous effectuons la recherche dans la base D&amp;B.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              C'est d'autant plus important que D&amp;B attribue parfois des DUNS automatiquement à partir de données publiques. Votre entreprise a peut-être un DUNS sans que vous le sachiez.
            </p>

            <BlogCTA lang={lang} />

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Le processus d'inscription Google Play avec DUNS</h2>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Créer un compte Google Play Console", desc: "Rendez-vous sur play.google.com/console et créez votre compte. Choisissez le type 'Organisation' si c'est applicable à votre situation." },
                { step: "2", title: "Renseigner les informations de l'organisation", desc: "Saisissez les informations légales de votre entreprise : raison sociale, adresse, pays, etc. Ces informations doivent correspondre exactement à celles de votre profil D&B." },
                { step: "3", title: "Fournir votre numéro DUNS", desc: "Google vous demande votre numéro DUNS pour vérification. Saisissez-le exactement tel qu'il vous a été communiqué (9 chiffres)." },
                { step: "4", title: "Payer les frais d'inscription", desc: "Google facture des frais d'inscription uniques de 25 $ pour créer un compte développeur. Ces frais sont distincts du coût d'obtention du DUNS." },
                { step: "5", title: "Vérification et activation", desc: "Google vérifie votre DUNS auprès de D&B. En général, la vérification est effectuée sous 24 à 48 heures." },
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

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Google Play vs Apple Developer : les différences</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Si vous développez pour les deux plateformes, vous remarquerez des similitudes mais aussi des différences dans le processus de vérification DUNS :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Aspect</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Google Play</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Apple Developer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Frais d'inscription", "25 $ (une fois)", "99 $/an"],
                    ["DUNS obligatoire pour Organisation", "Oui (certains cas)", "Oui (systématique)"],
                    ["Délai de vérification", "24-48 heures", "1-2 jours"],
                    ["Même DUNS utilisable", "Oui", "Oui"],
                  ].map(([aspect, google, apple], i) => (
                    <tr key={i} className={i % 2 === 0 ? "" : "bg-[#F8FAFC]"}>
                      <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">{aspect}</td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-600">{google}</td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-600">{apple}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Bonne nouvelle : le même numéro DUNS fonctionne pour les deux plateformes. Si vous développez pour iOS et Android, vous n'avez besoin que d'un seul numéro DUNS.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">FAQ Google Play et DUNS</h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "Mon application individuelle nécessite-t-elle un DUNS ?", a: "En règle générale, non. Les comptes développeurs individuels (personnes physiques) ne nécessitent pas de numéro DUNS. C'est principalement requis pour les comptes Organisation." },
                { q: "Puis-je publier mes apps sans DUNS d'abord, et l'ajouter plus tard ?", a: "Cela dépend du type d'application et du pays. Dans certains cas, vous pouvez commencer à publier sans DUNS et l'ajouter lors d'une vérification ultérieure. Mais il vaut mieux l'avoir dès le départ." },
                { q: "Que se passe-t-il si les informations de mon DUNS sont incorrectes ?", a: "Si les informations de votre profil D&B ne correspondent pas à celles que vous avez soumises à Google, votre vérification peut être rejetée. Assurez-vous que votre profil D&B est à jour." },
              ].map(({ q, a }) => (
                <div key={q} className="border border-slate-200 rounded-xl p-5">
                  <p className="font-semibold text-slate-800 mb-2">{q}</p>
                  <p className="text-sm text-slate-600">{a}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articles connexes</h3>
              <ul className="space-y-2">
                {[
                  { slug: "numero-duns", title: "Numéro DUNS : Le Guide Complet 2026" },
                  { slug: "numero-duns-apple-developer", title: "Numéro DUNS pour Apple Developer" },
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
