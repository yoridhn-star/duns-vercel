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
    title: "Numéro DUNS Gratuit : Comment l'Obtenir Rapidement Sans Frais | DUNS Verify",
    description: "Toutes les méthodes pour obtenir un numéro DUNS gratuitement en France : méthode D&B officielle, UPIK Suisse, délais réels et alternatives rapides.",
    alternates: { canonical: `${SITE_URL}/${lang}/blog/numero-duns-gratuit` },
    openGraph: {
      title: "Numéro DUNS Gratuit : Toutes les Méthodes",
      description: "Comment obtenir un numéro DUNS gratuitement ? Méthodes, délais et alternatives.",
      url: `${SITE_URL}/${lang}/blog/numero-duns-gratuit`,
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
    headline: "Numéro DUNS Gratuit : Toutes les Méthodes pour l'Obtenir",
    description: "Comment obtenir un numéro DUNS gratuitement en France, avec une analyse honnête des délais et des alternatives.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/${lang}/blog/numero-duns-gratuit`,
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
              <span className="text-slate-700">Numéro DUNS gratuit</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
              Numéro DUNS Gratuit : Toutes les Méthodes pour l'Obtenir
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              La question revient souvent : est-il vraiment possible d'obtenir un numéro DUNS gratuitement ? La réponse courte est oui — mais avec des nuances importantes sur les délais et les contraintes. Cet article vous présente toutes les options honnêtement, pour que vous puissiez prendre la meilleure décision selon votre situation.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Oui, le numéro DUNS peut être obtenu gratuitement</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dun &amp; Bradstreet propose effectivement un service d'enregistrement gratuit. C'est la méthode officielle et aucun frais n'est facturé pour l'attribution d'un numéro DUNS de base. Cependant, "gratuit" ne signifie pas "sans coût" — l'attente a un prix, et nous allons l'expliquer.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 1 : La voie officielle D&amp;B (gratuit, 15-30 jours)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              La méthode officielle consiste à s'enregistrer directement sur le portail de Dun &amp; Bradstreet. Le processus implique de renseigner les informations de votre entreprise, qui sont ensuite vérifiées manuellement par les équipes D&amp;B. Voici ce que vous devez savoir :
            </p>

            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li><strong>Délai réel :</strong> entre 15 et 30 jours ouvrés, parfois plus</li>
              <li><strong>Interface :</strong> le site D&amp;B n'est pas toujours intuitif pour les utilisateurs francophones</li>
              <li><strong>Relances nécessaires :</strong> il peut être nécessaire de relancer D&amp;B si vous n'avez pas de nouvelles après 2 semaines</li>
              <li><strong>Risque de doublons :</strong> vérifiez d'abord que votre entreprise n'a pas déjà un DUNS</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="text-sm text-amber-800 font-medium mb-1">Le vrai coût du "gratuit"</p>
              <p className="text-sm text-amber-700">Si vous attendez 30 jours votre DUNS et que vous manquez un appel d'offres ou une date limite Apple Developer, le coût réel de cette "option gratuite" peut être bien supérieur à quelques euros. Calculez toujours le coût d'opportunité avant de choisir la méthode gratuite.</p>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 2 : UPIK — la base de données suisse (gratuit, consultation)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              UPIK (Universal Product/Service Identification Key) est un répertoire d'entreprises international, initialement développé par la Chambre de Commerce et d'Industrie de Francfort. Ce service permet de <strong>rechercher</strong> un numéro DUNS existant gratuitement, mais il ne permet pas d'en créer un nouveau.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              UPIK est utile pour vérifier si votre entreprise possède déjà un numéro DUNS sans avoir à passer par D&amp;B directement. Si votre entreprise y apparaît, vous pouvez récupérer votre DUNS sans aucun frais. Si elle n'y est pas, vous devrez utiliser l'une des autres méthodes pour en obtenir un.
            </p>

            <BlogCTA lang={lang} />

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 3 : Votre entreprise a peut-être déjà un DUNS sans le savoir</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              C'est souvent une surprise pour les entrepreneurs : Dun &amp; Bradstreet attribue régulièrement des numéros DUNS automatiquement, à partir de sources publiques (registres du commerce, données gouvernementales, publications légales). Si votre entreprise a plus de quelques années d'existence, il y a de bonnes chances qu'elle figure déjà dans la base D&amp;B.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dans ce cas, récupérer votre DUNS est effectivement gratuit — il suffit de le rechercher. C'est d'ailleurs ce que fait DUNS Verify en premier : nous vérifions si votre entreprise a déjà un numéro DUNS. Si oui, nous vous le communiquons immédiatement.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Quand le gratuit ne suffit pas : la valeur du temps</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Imaginons deux scénarios réalistes :
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-amber-400">
                <p className="font-semibold text-slate-800 mb-1">Scénario A : Appel d'offres urgent</p>
                <p className="text-sm text-slate-600">Vous découvrez un appel d'offres européen intéressant. Date limite de dépôt : dans 10 jours. Vous n'avez pas de numéro DUNS. Si vous optez pour la méthode gratuite (15-30 jours), vous ne pouvez pas répondre. La valeur du marché : 80 000 €. Le coût de DUNS Verify : 4,99 €.</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-amber-400">
                <p className="font-semibold text-slate-800 mb-1">Scénario B : Publication d'application mobile</p>
                <p className="text-sm text-slate-600">Vous avez terminé de développer votre application iOS. Vous devez vous inscrire sur Apple Developer avec un compte organisation. Apple exige votre DUNS. Le lancement prévu dans 5 jours. Avec la méthode gratuite : délai de 30 jours. Coût du retard : vos frais de développement + perte de revenus.</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Dans ces situations, payer 4,99 € pour obtenir son DUNS en 2 minutes est une décision économiquement rationnelle. Il ne s'agit pas de choisir entre "gratuit" et "payant", mais entre "rapide" et "lent".
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Récapitulatif : quelle méthode choisir ?</h2>

            <div className="space-y-3 mb-8">
              <div className="border border-slate-200 rounded-xl p-4">
                <p className="font-semibold text-slate-800 text-sm mb-1">✓ Choisissez la méthode D&amp;B gratuite si...</p>
                <p className="text-sm text-slate-600">Vous n'avez pas d'urgence, vous avez le temps d'attendre 30 jours, et vous cherchez à minimiser tout coût, même au prix du temps.</p>
              </div>
              <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50">
                <p className="font-semibold text-emerald-800 text-sm mb-1">✓ Choisissez DUNS Verify si...</p>
                <p className="text-sm text-emerald-700">Vous avez un délai à respecter, vous voulez éviter les complications, ou vous avez simplement besoin de votre DUNS maintenant pour avancer dans votre projet.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articles connexes</h3>
              <ul className="space-y-2">
                {[
                  { slug: "numero-duns", title: "Numéro DUNS : Le Guide Complet 2026" },
                  { slug: "obtenir-numero-duns-france", title: "Comment Obtenir un Numéro DUNS en France" },
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
