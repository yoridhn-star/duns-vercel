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
    title: "Comment Obtenir un Numéro DUNS en France en 2026 — Guide Étape par Étape | DUNS Verify",
    description: "Guide complet pour obtenir votre numéro DUNS en France : 3 méthodes comparées, étapes détaillées, délais et coûts. Obtenez votre DUNS en 2 minutes.",
    alternates: { canonical: `${SITE_URL}/${lang}/blog/obtenir-numero-duns-france` },
    openGraph: {
      title: "Comment Obtenir un Numéro DUNS en France — Guide 2026",
      description: "3 méthodes comparées pour obtenir votre numéro DUNS en France. Délais, coûts et étapes détaillées.",
      url: `${SITE_URL}/${lang}/blog/obtenir-numero-duns-france`,
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
    headline: "Comment Obtenir un Numéro DUNS en France : Guide Étape par Étape",
    description: "Guide complet sur les 3 méthodes pour obtenir un numéro DUNS en France en 2026.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/${lang}/blog/obtenir-numero-duns-france`,
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
              Comment Obtenir un Numéro DUNS en France : Guide Étape par Étape
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Vous avez besoin d'un numéro DUNS pour un appel d'offres, pour Apple Developer ou pour un partenariat international ? Ce guide vous présente les 3 méthodes disponibles en France, avec leurs avantages, inconvénients, délais et coûts réels — pour que vous puissiez choisir la solution adaptée à votre situation.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Prérequis : ce qu'il vous faut avant de commencer</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Avant de vous lancer dans la démarche d'obtention de votre numéro DUNS, assurez-vous d'avoir les informations suivantes à portée de main :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li>Votre <strong>numéro SIRET</strong> (14 chiffres) — c'est l'identifiant de base requis</li>
              <li>La <strong>raison sociale exacte</strong> de votre entreprise telle qu'elle apparaît au RCS</li>
              <li>L'<strong>adresse complète</strong> de votre siège social</li>
              <li>Le <strong>nom du dirigeant</strong> ou du responsable légal</li>
              <li>Votre <strong>adresse email professionnelle</strong> pour recevoir les confirmations</li>
              <li>Le <strong>secteur d'activité</strong> (code NAF/APE)</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              Si votre entreprise n'est pas encore immatriculée en France, vous ne pouvez pas encore obtenir de numéro DUNS. L'immatriculation au RCS (Registre du Commerce et des Sociétés) ou à l'URSSAF est un prérequis indispensable.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 1 : Le site officiel Dun &amp; Bradstreet (gratuit, 30 jours)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              La première méthode, et la seule totalement gratuite, est de passer directement par le site officiel de Dun &amp; Bradstreet. Le processus se déroule en plusieurs étapes.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <div>
                  <p className="font-semibold text-slate-800">Recherche initiale</p>
                  <p className="text-sm text-slate-600 mt-1">Rendez-vous sur le portail D&amp;B et effectuez une recherche avec le nom de votre entreprise. Il est possible que votre entreprise possède déjà un numéro DUNS (notamment si elle a été créée il y a plusieurs années).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <div>
                  <p className="font-semibold text-slate-800">Remplissage du formulaire</p>
                  <p className="text-sm text-slate-600 mt-1">Si votre entreprise n'est pas encore dans la base, vous remplissez un formulaire avec toutes les informations mentionnées dans les prérequis.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <div>
                  <p className="font-semibold text-slate-800">Vérification par D&amp;B</p>
                  <p className="text-sm text-slate-600 mt-1">D&amp;B vérifie les informations fournies en les recoupant avec des sources officielles (INSEE, RCS, etc.). Cette étape peut prendre plusieurs semaines.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                <div>
                  <p className="font-semibold text-slate-800">Réception du numéro</p>
                  <p className="text-sm text-slate-600 mt-1">Une fois la vérification effectuée, vous recevez votre numéro DUNS par email. Le délai moyen est de 15 à 30 jours ouvrés.</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-amber-800"><strong>Attention :</strong> Cette méthode est gratuite mais peut être très longue. Si vous avez un délai à respecter (candidature à un appel d'offres, inscription Apple Developer, etc.), prévoyez une marge confortable ou optez pour une méthode plus rapide.</p>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 2 : Les services d'intermédiaires (Altares, Verif.com)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Plusieurs services d'information commerciale proposent d'accélérer l'obtention du numéro DUNS, notamment Altares (le partenaire officiel D&amp;B en France) et Verif.com. Ces services peuvent réduire le délai à 24-48 heures, mais leur coût est significativement plus élevé : entre 30 € et plusieurs centaines d'euros selon les prestations choisies.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ces services s'adressent principalement aux entreprises qui ont besoin d'un accompagnement plus complet : non seulement l'obtention du DUNS, mais aussi la mise à jour et l'enrichissement du profil D&amp;B, l'abonnement à des rapports de crédit, etc.
            </p>

            <BlogCTA lang={lang} />

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 3 : DUNS Verify (2 minutes, 4,99 €)</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              DUNS Verify est un service spécialisé qui permet d'obtenir votre numéro DUNS certifié en moins de 2 minutes. Le principe est simple et efficace.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1E3A5F] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <div>
                  <p className="font-semibold text-slate-800">Saisie des informations</p>
                  <p className="text-sm text-slate-600 mt-1">Entrez le nom de votre entreprise, votre ville, votre pays et votre adresse email sur notre formulaire sécurisé.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1E3A5F] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <div>
                  <p className="font-semibold text-slate-800">Paiement sécurisé</p>
                  <p className="text-sm text-slate-600 mt-1">Réglez 4,99 € via Stripe (carte bancaire sécurisée). Aucune récurrence, paiement unique.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1E3A5F] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <div>
                  <p className="font-semibold text-slate-800">Réception immédiate</p>
                  <p className="text-sm text-slate-600 mt-1">Notre système interroge directement la base de données D&amp;B et vous envoie votre numéro DUNS certifié par email en moins de 2 minutes.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Comparatif des 3 méthodes</h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Critère</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">D&amp;B Officiel</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Altares</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700 bg-emerald-50">DUNS Verify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Coût</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Gratuit</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">30 € à 100 €+</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">4,99 €</td>
                  </tr>
                  <tr className="bg-[#F8FAFC]">
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Délai</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">15-30 jours</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">24-48 heures</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">2 minutes</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Simplicité</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Formulaire complexe</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Processus long</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">Formulaire simple</td>
                  </tr>
                  <tr className="bg-[#F8FAFC]">
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Certifié D&amp;B</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Oui</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Oui</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">Oui</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Que faire si votre entreprise a déjà un DUNS ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Avant de demander un nouveau numéro DUNS, il est important de vérifier si votre entreprise en possède déjà un. Dun &amp; Bradstreet attribue parfois des numéros DUNS automatiquement à des entreprises à partir de données publiques. Si vous demandez un second numéro DUNS pour une entreprise qui en possède déjà un, vous risquez de créer des doublons dans la base de données.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              DUNS Verify vérifie automatiquement l'existence d'un numéro DUNS existant avant d'en créer un nouveau. Pour en savoir plus sur la vérification, consultez notre article : <a href={`/${lang}/blog/verifier-numero-duns`} className="text-emerald-600 hover:underline">comment vérifier le numéro DUNS d'une entreprise</a>.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Questions fréquentes sur l'obtention du DUNS</h2>

            <div className="space-y-4 mb-8">
              <div className="border border-slate-200 rounded-xl p-5">
                <p className="font-semibold text-slate-800 mb-2">Mon numéro DUNS est-il valable définitivement ?</p>
                <p className="text-sm text-slate-600">Oui, une fois attribué, votre numéro DUNS ne change pas. Même si votre entreprise change de nom, d'adresse ou de dirigeant, le numéro reste le même. Les informations associées sont mises à jour dans la base D&amp;B.</p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5">
                <p className="font-semibold text-slate-800 mb-2">Puis-je obtenir un DUNS pour une auto-entreprise ?</p>
                <p className="text-sm text-slate-600">Oui, toute structure immatriculée en France peut obtenir un numéro DUNS, y compris les auto-entrepreneurs (micro-entrepreneurs). Vous aurez besoin de votre numéro SIRET.</p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5">
                <p className="font-semibold text-slate-800 mb-2">Que se passe-t-il si mon entreprise change d'adresse ?</p>
                <p className="text-sm text-slate-600">Votre numéro DUNS reste le même, mais il est recommandé de mettre à jour les informations dans la base D&amp;B. Cela garantit que vos partenaires trouvent les bonnes informations lorsqu'ils effectuent une recherche.</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articles connexes</h3>
              <ul className="space-y-2">
                {[
                  { slug: "numero-duns", title: "Numéro DUNS : Le Guide Complet 2026" },
                  { slug: "numero-duns-gratuit", title: "Numéro DUNS Gratuit : Comment l'Obtenir" },
                  { slug: "numero-duns-apple-developer", title: "Numéro DUNS pour Apple Developer" },
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
