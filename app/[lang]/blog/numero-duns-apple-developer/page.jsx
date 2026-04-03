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
    title: "Numéro DUNS Apple Developer : Comment l'Obtenir pour Publier sur l'App Store | DUNS Verify",
    description: "Tout savoir sur le numéro DUNS exigé par Apple Developer Program : pourquoi il est nécessaire, comment l'obtenir rapidement et éviter les pièges.",
    alternates: { canonical: `${SITE_URL}/${lang}/blog/numero-duns-apple-developer` },
    openGraph: {
      title: "Numéro DUNS et Apple Developer : Guide Complet",
      description: "Comment obtenir votre DUNS pour publier sur l'App Store en tant qu'organisation.",
      url: `${SITE_URL}/${lang}/blog/numero-duns-apple-developer`,
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
    headline: "Numéro DUNS et Apple Developer : Tout Savoir pour Publier sur l'App Store",
    description: "Guide complet sur le numéro DUNS pour Apple Developer Program : pourquoi, comment, délais et pièges à éviter.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/${lang}/blog/numero-duns-apple-developer`,
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
              <span className="text-slate-700">DUNS pour Apple Developer</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
              Numéro DUNS et Apple Developer : Tout Savoir pour Publier sur l'App Store
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Vous avez développé une application iOS et vous souhaitez la publier sur l'App Store en tant qu'organisation ? Apple exige un numéro DUNS. Beaucoup de développeurs découvrent cette exigence au dernier moment et se retrouvent bloqués pendant des semaines. Ce guide vous explique tout pour anticiper et éviter ce blocage.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Pourquoi Apple exige-t-il un numéro DUNS ?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Lorsque vous vous inscrivez à l'Apple Developer Program en tant qu'organisation (par opposition à un compte individuel), Apple doit vérifier que votre entreprise existe légalement. Plutôt que de créer son propre système de vérification mondiale, Apple s'appuie sur la base de données de Dun &amp; Bradstreet — la référence mondiale en matière d'identification des entreprises.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Cette exigence s'applique dans plusieurs situations :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li>Création d'un compte <strong>Apple Developer Program Organisation</strong></li>
              <li>Publication d'applications sous le nom d'une entreprise (et non un nom individuel)</li>
              <li>Accès à certaines APIs sensibles (notamment HealthKit, HomeKit, etc.)</li>
              <li>Distribution d'applications en interne via <strong>Apple Developer Enterprise Program</strong></li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
              <p className="text-sm text-blue-800 font-medium mb-1">À noter</p>
              <p className="text-sm text-blue-700">Si vous êtes un développeur individuel (compte "Individual"), vous n'avez pas besoin de numéro DUNS. Cette exigence s'applique uniquement aux comptes Organisation. Cependant, les comptes Organisation présentent de nombreux avantages : nom d'entreprise affiché, plusieurs membres d'équipe, etc.</p>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Le processus d'inscription Apple Developer : les étapes clés</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Voici comment se déroule l'inscription complète à l'Apple Developer Program Organisation :
            </p>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Obtenir votre numéro DUNS", desc: "Avant même de commencer sur le site Apple, procurez-vous votre numéro DUNS. C'est la première étape, et la plus souvent oubliée. Avec DUNS Verify, cela prend 2 minutes." },
                { step: "2", title: "Créer ou se connecter à un Apple ID", desc: "Vous devez avoir un Apple ID associé à votre adresse email professionnelle. Cet Apple ID deviendra le 'Account Holder' de votre organisation." },
                { step: "3", title: "Démarrer l'inscription Organisation", desc: "Sur developer.apple.com, sélectionnez 'Enroll' puis choisissez 'Organisation'. Renseignez les informations de votre entreprise." },
                { step: "4", title: "Saisir votre numéro DUNS", desc: "Apple utilise votre DUNS pour vérifier l'existence de votre entreprise. Assurez-vous que les informations de votre profil D&B correspondent à votre inscription légale actuelle." },
                { step: "5", title: "Vérification par Apple", desc: "Apple contacte D&B pour vérifier votre numéro DUNS. Ce processus prend généralement 1 à 2 jours ouvrés supplémentaires." },
                { step: "6", title: "Paiement et activation", desc: "Une fois la vérification effectuée, vous payez les 99 $/an de frais Apple Developer. Votre compte est alors activé." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{step}</div>
                  <div>
                    <p className="font-semibold text-slate-800">{title}</p>
                    <p className="text-sm text-slate-600 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Les délais réels : ce que personne ne vous dit</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le délai total pour obtenir votre compte Apple Developer Organisation dépend directement de la rapidité avec laquelle vous obtenez votre numéro DUNS. Voici un comparatif réaliste :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Étape</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Via D&amp;B officiel</th>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700 bg-emerald-50">Via DUNS Verify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Obtention du DUNS</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">15-30 jours</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">2 minutes</td>
                  </tr>
                  <tr className="bg-[#F8FAFC]">
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">Vérification Apple</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">1-2 jours</td>
                    <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">1-2 jours</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">Délai total</td>
                    <td className="border border-slate-200 px-4 py-3 font-semibold text-red-600">16-32 jours</td>
                    <td className="border border-slate-200 px-4 py-3 font-semibold text-emerald-600 bg-emerald-50">1-2 jours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <BlogCTA lang={lang} />

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Les pièges à éviter absolument</h2>

            <div className="space-y-4 mb-8">
              <div className="border border-red-200 rounded-xl p-5 bg-red-50">
                <p className="font-semibold text-red-800 mb-1">Piège 1 : Utiliser un DUNS appartenant à une autre entité</p>
                <p className="text-sm text-red-700">Si votre entreprise a plusieurs établissements, assurez-vous d'utiliser le DUNS qui correspond exactement à l'entité légale que vous enregistrez chez Apple. Un DUNS d'un autre établissement sera refusé.</p>
              </div>
              <div className="border border-red-200 rounded-xl p-5 bg-red-50">
                <p className="font-semibold text-red-800 mb-1">Piège 2 : Informations D&amp;B non à jour</p>
                <p className="text-sm text-red-700">Si les informations dans la base D&amp;B (nom d'entreprise, adresse, dirigeant) ne correspondent pas exactement à ce que vous saisissez chez Apple, votre dossier peut être rejeté. Vérifiez que votre profil D&amp;B est à jour.</p>
              </div>
              <div className="border border-red-200 rounded-xl p-5 bg-red-50">
                <p className="font-semibold text-red-800 mb-1">Piège 3 : Confondre DUNS individuel et Organisation</p>
                <p className="text-sm text-red-700">Le numéro DUNS est lié à l'entité légale, pas à la personne physique. Assurez-vous que le DUNS est bien au nom de votre société (SARL, SAS, etc.) et non à votre nom personnel.</p>
              </div>
              <div className="border border-red-200 rounded-xl p-5 bg-red-50">
                <p className="font-semibold text-red-800 mb-1">Piège 4 : Attendre la réponse D&amp;B pour commencer</p>
                <p className="text-sm text-red-700">Commencez dès maintenant, n'attendez pas d'avoir besoin du DUNS pour vous en occuper. Obtenez-le en avance pour ne pas bloquer votre processus au dernier moment.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">FAQ : DUNS et Apple Developer</h2>

            <div className="space-y-4 mb-8">
              {[
                { q: "Mon DUNS Apple est-il le même que mon DUNS normal ?", a: "Oui, c'est exactement le même numéro DUNS. Il n'y a pas de numéro DUNS spécifique à Apple. Apple utilise simplement la base de données D&B standard pour vérifier votre entreprise." },
                { q: "Apple peut-il me refuser même avec un DUNS valide ?", a: "Oui, si les informations ne correspondent pas exactement (nom, adresse, dirigeant), Apple peut demander des clarifications supplémentaires. C'est rare mais ça arrive." },
                { q: "Combien de temps après avoir obtenu mon DUNS Apple valide mon compte ?", a: "En général, 24 à 48 heures après avoir soumis votre DUNS valide, Apple valide votre compte Organisation." },
                { q: "Puis-je utiliser le même DUNS pour Google Play et Apple Developer ?", a: "Oui, le même numéro DUNS peut être utilisé pour les deux plateformes. C'est d'ailleurs l'un des avantages du système DUNS : un seul identifiant, utilisable partout." },
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
                  { slug: "obtenir-numero-duns-france", title: "Comment Obtenir un Numéro DUNS en France" },
                  { slug: "numero-duns-google-play", title: "Numéro DUNS pour Google Play Store" },
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
