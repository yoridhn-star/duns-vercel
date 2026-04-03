import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "numero-duns-apple-developer";
const AVAILABLE_LANGS = ['fr','en','de','es','it','nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];
const EN_FALLBACK = ['nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];

const META = {
  fr: { title: "Numéro DUNS Apple Developer : Comment l'Obtenir pour Publier sur l'App Store | DUNS Verify", description: "Tout savoir sur le numéro DUNS exigé par Apple Developer Program : pourquoi il est nécessaire, comment l'obtenir rapidement et éviter les pièges." },
  en: { title: "DUNS Number for Apple Developer: How to Get It to Publish on the App Store | DUNS Verify", description: "Everything about the DUNS number required by the Apple Developer Program: why it's needed, how to get it quickly, and pitfalls to avoid." },
  de: { title: "DUNS-Nummer für Apple Developer: Wie Man Sie für den App Store Erhält | DUNS Verify", description: "Alles über die DUNS-Nummer, die das Apple Developer Program erfordert: warum sie benötigt wird, wie man sie schnell erhält und Fallstricke vermeidet." },
  es: { title: "Número DUNS para Apple Developer: Cómo Obtenerlo para Publicar en App Store | DUNS Verify", description: "Todo sobre el número DUNS requerido por Apple Developer Program: por qué es necesario, cómo obtenerlo rápidamente y evitar errores." },
  it: { title: "Numero DUNS per Apple Developer: Come Ottenerlo per Pubblicare sull'App Store | DUNS Verify", description: "Tutto sul numero DUNS richiesto dall'Apple Developer Program: perché è necessario, come ottenerlo rapidamente e le insidie da evitare." },
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
        <span className="text-slate-700">DUNS pour Apple Developer</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numéro DUNS et Apple Developer : Tout Savoir pour Publier sur l&apos;App Store
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Vous avez développé une application iOS et vous souhaitez la publier sur l&apos;App Store en tant qu&apos;organisation ? Apple exige un numéro DUNS. Beaucoup de développeurs découvrent cette exigence au dernier moment et se retrouvent bloqués pendant des semaines. Ce guide vous explique tout pour anticiper et éviter ce blocage.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Pourquoi Apple exige-t-il un numéro DUNS ?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Lorsque vous vous inscrivez à l&apos;Apple Developer Program en tant qu&apos;organisation (par opposition à un compte individuel), Apple doit vérifier que votre entreprise existe légalement. Plutôt que de créer son propre système de vérification mondiale, Apple s&apos;appuie sur la base de données de Dun &amp; Bradstreet — la référence mondiale en matière d&apos;identification des entreprises.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Cette exigence s&apos;applique dans plusieurs situations :
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Création d&apos;un compte <strong>Apple Developer Program Organisation</strong></li>
        <li>Publication d&apos;applications sous le nom d&apos;une entreprise (et non un nom individuel)</li>
        <li>Accès à certaines APIs sensibles (notamment HealthKit, HomeKit, etc.)</li>
        <li>Distribution d&apos;applications en interne via <strong>Apple Developer Enterprise Program</strong></li>
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-1">À noter</p>
        <p className="text-sm text-blue-700">Si vous êtes un développeur individuel (compte &quot;Individual&quot;), vous n&apos;avez pas besoin de numéro DUNS. Cette exigence s&apos;applique uniquement aux comptes Organisation. Cependant, les comptes Organisation présentent de nombreux avantages : nom d&apos;entreprise affiché, plusieurs membres d&apos;équipe, etc.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Le processus d&apos;inscription Apple Developer : les étapes clés</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Voici comment se déroule l&apos;inscription complète à l&apos;Apple Developer Program Organisation :
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
          <p className="text-sm text-red-700">Si votre entreprise a plusieurs établissements, assurez-vous d&apos;utiliser le DUNS qui correspond exactement à l&apos;entité légale que vous enregistrez chez Apple. Un DUNS d&apos;un autre établissement sera refusé.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Piège 2 : Informations D&amp;B non à jour</p>
          <p className="text-sm text-red-700">Si les informations dans la base D&amp;B (nom d&apos;entreprise, adresse, dirigeant) ne correspondent pas exactement à ce que vous saisissez chez Apple, votre dossier peut être rejeté. Vérifiez que votre profil D&amp;B est à jour.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Piège 3 : Confondre DUNS individuel et Organisation</p>
          <p className="text-sm text-red-700">Le numéro DUNS est lié à l&apos;entité légale, pas à la personne physique. Assurez-vous que le DUNS est bien au nom de votre société (SARL, SAS, etc.) et non à votre nom personnel.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Piège 4 : Attendre la réponse D&amp;B pour commencer</p>
          <p className="text-sm text-red-700">Commencez dès maintenant, n&apos;attendez pas d&apos;avoir besoin du DUNS pour vous en occuper. Obtenez-le en avance pour ne pas bloquer votre processus au dernier moment.</p>
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
        <span className="text-slate-700">DUNS for Apple Developer</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS Number and Apple Developer: Everything to Know to Publish on the App Store
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        You&apos;ve built an iOS app and want to publish it on the App Store as an organization? Apple requires a DUNS number. Many developers discover this requirement at the last minute and end up stuck for weeks. This guide explains everything you need to anticipate and avoid that roadblock.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Why Does Apple Require a DUNS Number?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        When you enroll in the Apple Developer Program as an organization (as opposed to an individual account), Apple needs to verify that your company legally exists. Rather than building its own global verification system, Apple relies on the Dun &amp; Bradstreet database — the world&apos;s reference for business identification.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        This requirement applies in several situations:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Creating an <strong>Apple Developer Program Organization</strong> account</li>
        <li>Publishing apps under a company name (rather than an individual name)</li>
        <li>Accessing certain sensitive APIs (such as HealthKit, HomeKit, etc.)</li>
        <li>Distributing apps internally via the <strong>Apple Developer Enterprise Program</strong></li>
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-1">Note</p>
        <p className="text-sm text-blue-700">If you are an individual developer (an &quot;Individual&quot; account), you do not need a DUNS number. This requirement applies only to Organization accounts. However, Organization accounts offer many advantages: your company name is displayed, multiple team members can be added, and more.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Apple Developer Enrollment Process: Step by Step</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Here is how the complete Apple Developer Program Organization enrollment process works:
      </p>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Get your DUNS number", desc: "Before you even start on the Apple website, get your DUNS number. This is the first step and the most commonly overlooked. With DUNS Verify, it takes 2 minutes." },
          { step: "2", title: "Create or sign in to an Apple ID", desc: "You need an Apple ID associated with your professional email address. This Apple ID will become the Account Holder for your organization." },
          { step: "3", title: "Start the Organization enrollment", desc: "On developer.apple.com, select 'Enroll' and then choose 'Organization'. Fill in your company information." },
          { step: "4", title: "Enter your DUNS number", desc: "Apple uses your DUNS to verify your company's existence. Make sure the information in your D&B profile matches your current legal registration." },
          { step: "5", title: "Apple verification", desc: "Apple contacts D&B to verify your DUNS number. This process typically takes an additional 1 to 2 business days." },
          { step: "6", title: "Payment and activation", desc: "Once verification is complete, you pay the $99/year Apple Developer fee. Your account is then activated." },
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Real Timelines: What Nobody Tells You</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The total time to get your Apple Developer Organization account depends directly on how quickly you obtain your DUNS number. Here is a realistic comparison:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Step</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Via official D&amp;B</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700 bg-emerald-50">Via DUNS Verify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Obtaining DUNS</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">15–30 days</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">2 minutes</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Apple verification</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">1–2 days</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">1–2 days</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">Total time</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-red-600">16–32 days</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-emerald-600 bg-emerald-50">1–2 days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Common Pitfalls to Avoid</h2>

      <div className="space-y-4 mb-8">
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Pitfall 1: Using a DUNS belonging to another entity</p>
          <p className="text-sm text-red-700">If your company has multiple establishments, make sure you use the DUNS that corresponds exactly to the legal entity you are registering with Apple. A DUNS from another branch will be rejected.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Pitfall 2: D&amp;B information not up to date</p>
          <p className="text-sm text-red-700">If the information in the D&amp;B database (company name, address, director) does not exactly match what you enter with Apple, your application may be rejected. Make sure your D&amp;B profile is current.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Pitfall 3: Confusing individual and Organization DUNS</p>
          <p className="text-sm text-red-700">The DUNS number is tied to the legal entity, not the physical person. Make sure the DUNS is in your company&apos;s name (LLC, Corp, etc.) and not your personal name.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Pitfall 4: Waiting for D&amp;B before you start</p>
          <p className="text-sm text-red-700">Start now — don&apos;t wait until you need a DUNS to take care of it. Get it in advance so you don&apos;t block your process at the last minute.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">FAQ: DUNS and Apple Developer</h2>

      <div className="space-y-4 mb-8">
        {[
          { q: "Is my Apple DUNS the same as my regular DUNS?", a: "Yes, it is exactly the same DUNS number. There is no Apple-specific DUNS number. Apple simply uses the standard D&B database to verify your company." },
          { q: "Can Apple reject me even with a valid DUNS?", a: "Yes, if the information does not match exactly (name, address, director), Apple may request additional clarifications. It is rare but it does happen." },
          { q: "How long after getting my DUNS does Apple validate my account?", a: "Generally, 24 to 48 hours after submitting a valid DUNS, Apple validates your Organization account." },
          { q: "Can I use the same DUNS for both Google Play and Apple Developer?", a: "Yes, the same DUNS number can be used for both platforms. This is one of the key advantages of the DUNS system: a single identifier, usable everywhere." },
        ].map(({ q, a }) => (
          <div key={q} className="border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2">{q}</p>
            <p className="text-sm text-slate-600">{a}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Related articles</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS Number: The Complete Guide 2026" },
            { slug: "numero-duns-google-play", title: "DUNS Number for Google Play Store: Developer Guide" },
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
        <span className="text-slate-700">DUNS für Apple Developer</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS-Nummer und Apple Developer: Alles Wissenswerte zur Veröffentlichung im App Store
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Sie haben eine iOS-App entwickelt und möchten sie als Organisation im App Store veröffentlichen? Apple verlangt eine DUNS-Nummer. Viele Entwickler entdecken diese Anforderung im letzten Moment und sind dann wochenlang blockiert. Dieser Leitfaden erklärt alles, damit Sie vorbereitet sind und diese Blockade vermeiden können.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Warum verlangt Apple eine DUNS-Nummer?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Wenn Sie sich als Organisation beim Apple Developer Program anmelden (im Gegensatz zu einem Einzelkonto), muss Apple überprüfen, ob Ihr Unternehmen rechtlich existiert. Anstatt ein eigenes globales Verifizierungssystem aufzubauen, stützt sich Apple auf die Datenbank von Dun &amp; Bradstreet — die weltweite Referenz für die Unternehmensidentifikation.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Diese Anforderung gilt in mehreren Situationen:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Erstellung eines <strong>Apple Developer Program Organisations</strong>-Kontos</li>
        <li>Veröffentlichung von Apps unter einem Firmennamen (statt einem Einzelnamen)</li>
        <li>Zugriff auf bestimmte sensible APIs (wie HealthKit, HomeKit usw.)</li>
        <li>Interne App-Verteilung über das <strong>Apple Developer Enterprise Program</strong></li>
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-1">Hinweis</p>
        <p className="text-sm text-blue-700">Wenn Sie ein Einzelentwickler sind (ein &quot;Individual&quot;-Konto), benötigen Sie keine DUNS-Nummer. Diese Anforderung gilt nur für Organisationskonten. Organisationskonten bieten jedoch viele Vorteile: Der Firmenname wird angezeigt, mehrere Teammitglieder können hinzugefügt werden und vieles mehr.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Apple Developer Anmeldeprozess: Schritt für Schritt</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        So läuft die vollständige Anmeldung beim Apple Developer Program Organisation ab:
      </p>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "DUNS-Nummer besorgen", desc: "Bevor Sie überhaupt auf der Apple-Website beginnen, besorgen Sie sich Ihre DUNS-Nummer. Dies ist der erste und am häufigsten vergessene Schritt. Mit DUNS Verify dauert es 2 Minuten." },
          { step: "2", title: "Apple ID erstellen oder anmelden", desc: "Sie benötigen eine Apple ID, die mit Ihrer beruflichen E-Mail-Adresse verknüpft ist. Diese Apple ID wird zum 'Account Holder' Ihrer Organisation." },
          { step: "3", title: "Organisations-Anmeldung starten", desc: "Wählen Sie auf developer.apple.com 'Enroll' und dann 'Organisation'. Geben Sie die Informationen Ihres Unternehmens ein." },
          { step: "4", title: "DUNS-Nummer eingeben", desc: "Apple verwendet Ihre DUNS, um die Existenz Ihres Unternehmens zu überprüfen. Stellen Sie sicher, dass die Informationen in Ihrem D&B-Profil Ihrer aktuellen Handelsregistereintragung entsprechen." },
          { step: "5", title: "Überprüfung durch Apple", desc: "Apple kontaktiert D&B, um Ihre DUNS-Nummer zu verifizieren. Dieser Vorgang dauert in der Regel 1 bis 2 zusätzliche Werktage." },
          { step: "6", title: "Zahlung und Aktivierung", desc: "Nach der Überprüfung zahlen Sie die 99 $/Jahr Apple Developer Gebühr. Ihr Konto wird dann aktiviert." },
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Realistische Zeitrahmen: Was Ihnen Niemand Sagt</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die Gesamtdauer bis zur Aktivierung Ihres Apple Developer Organisationskontos hängt direkt davon ab, wie schnell Sie Ihre DUNS-Nummer erhalten. Hier ein realistischer Vergleich:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Schritt</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Über offizielles D&amp;B</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700 bg-emerald-50">Über DUNS Verify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">DUNS erhalten</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">15–30 Tage</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">2 Minuten</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Apple-Verifizierung</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">1–2 Tage</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">1–2 Tage</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">Gesamtdauer</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-red-600">16–32 Tage</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-emerald-600 bg-emerald-50">1–2 Tage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Häufige Fehler, die Sie Unbedingt Vermeiden Sollten</h2>

      <div className="space-y-4 mb-8">
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Fehler 1: Eine DUNS einer anderen Einheit verwenden</p>
          <p className="text-sm text-red-700">Wenn Ihr Unternehmen mehrere Niederlassungen hat, stellen Sie sicher, dass Sie die DUNS verwenden, die genau der juristischen Person entspricht, die Sie bei Apple registrieren. Eine DUNS einer anderen Niederlassung wird abgelehnt.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Fehler 2: Veraltete D&amp;B-Informationen</p>
          <p className="text-sm text-red-700">Wenn die Informationen in der D&amp;B-Datenbank (Firmenname, Adresse, Geschäftsführer) nicht genau mit dem übereinstimmen, was Sie bei Apple eingeben, kann Ihr Antrag abgelehnt werden. Stellen Sie sicher, dass Ihr D&amp;B-Profil aktuell ist.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Fehler 3: Verwechslung von Einzel- und Organisations-DUNS</p>
          <p className="text-sm text-red-700">Die DUNS-Nummer ist an die juristische Person gebunden, nicht an die natürliche Person. Stellen Sie sicher, dass die DUNS auf den Namen Ihres Unternehmens (GmbH, AG usw.) und nicht auf Ihren persönlichen Namen lautet.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Fehler 4: Auf die D&amp;B-Antwort warten, bevor Sie beginnen</p>
          <p className="text-sm text-red-700">Beginnen Sie jetzt — warten Sie nicht, bis Sie eine DUNS brauchen. Besorgen Sie sie sich im Voraus, damit Sie Ihren Prozess nicht im letzten Moment blockieren.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">FAQ: DUNS und Apple Developer</h2>

      <div className="space-y-4 mb-8">
        {[
          { q: "Ist meine Apple-DUNS dieselbe wie meine normale DUNS?", a: "Ja, es handelt sich um genau dieselbe DUNS-Nummer. Es gibt keine Apple-spezifische DUNS-Nummer. Apple verwendet einfach die Standard-D&B-Datenbank, um Ihr Unternehmen zu überprüfen." },
          { q: "Kann Apple mich auch mit einer gültigen DUNS ablehnen?", a: "Ja, wenn die Informationen nicht genau übereinstimmen (Name, Adresse, Geschäftsführer), kann Apple weitere Klärungen anfordern. Das ist selten, kommt aber vor." },
          { q: "Wie lange nach Erhalt meiner DUNS validiert Apple mein Konto?", a: "Im Allgemeinen validiert Apple Ihr Organisationskonto innerhalb von 24 bis 48 Stunden nach der Einreichung einer gültigen DUNS." },
          { q: "Kann ich dieselbe DUNS für Google Play und Apple Developer verwenden?", a: "Ja, dieselbe DUNS-Nummer kann für beide Plattformen verwendet werden. Dies ist einer der Hauptvorteile des DUNS-Systems: ein einziger Identifikator, überall verwendbar." },
        ].map(({ q, a }) => (
          <div key={q} className="border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2">{q}</p>
            <p className="text-sm text-slate-600">{a}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Verwandte Artikel</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS-Nummer: Der vollständige Leitfaden 2026" },
            { slug: "numero-duns-google-play", title: "DUNS-Nummer für Google Play Store: Entwickler-Leitfaden" },
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
        <span className="text-slate-700">DUNS para Apple Developer</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Número DUNS y Apple Developer: Todo lo que Necesitas Saber para Publicar en App Store
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        ¿Has desarrollado una aplicación iOS y quieres publicarla en App Store como organización? Apple exige un número DUNS. Muchos desarrolladores descubren este requisito en el último momento y se quedan bloqueados durante semanas. Esta guía te explica todo lo que necesitas para anticiparte y evitar ese bloqueo.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">¿Por Qué Apple Requiere un Número DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Cuando te inscribes en el Apple Developer Program como organización (en lugar de una cuenta individual), Apple necesita verificar que tu empresa existe legalmente. En lugar de crear su propio sistema de verificación global, Apple se apoya en la base de datos de Dun &amp; Bradstreet — la referencia mundial en identificación empresarial.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Este requisito se aplica en varias situaciones:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Creación de una cuenta <strong>Apple Developer Program Organización</strong></li>
        <li>Publicación de apps bajo el nombre de una empresa (en lugar de un nombre individual)</li>
        <li>Acceso a ciertas APIs sensibles (como HealthKit, HomeKit, etc.)</li>
        <li>Distribución interna de apps a través del <strong>Apple Developer Enterprise Program</strong></li>
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-1">Nota importante</p>
        <p className="text-sm text-blue-700">Si eres un desarrollador individual (cuenta &quot;Individual&quot;), no necesitas número DUNS. Este requisito solo se aplica a las cuentas de Organización. Sin embargo, las cuentas de Organización ofrecen muchas ventajas: nombre de empresa visible, varios miembros del equipo, etc.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Proceso de Inscripción en Apple Developer: Paso a Paso</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Así es como funciona el proceso completo de inscripción en Apple Developer Program Organización:
      </p>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Obtener tu número DUNS", desc: "Antes de comenzar en el sitio web de Apple, consigue tu número DUNS. Este es el primer paso, y el más frecuentemente olvidado. Con DUNS Verify, tarda 2 minutos." },
          { step: "2", title: "Crear o iniciar sesión en un Apple ID", desc: "Necesitas un Apple ID asociado a tu dirección de email profesional. Este Apple ID se convertirá en el 'Account Holder' de tu organización." },
          { step: "3", title: "Iniciar la inscripción como Organización", desc: "En developer.apple.com, selecciona 'Enroll' y luego elige 'Organization'. Completa la información de tu empresa." },
          { step: "4", title: "Introducir tu número DUNS", desc: "Apple usa tu DUNS para verificar la existencia de tu empresa. Asegúrate de que la información de tu perfil D&B coincide con tu registro legal actual." },
          { step: "5", title: "Verificación por parte de Apple", desc: "Apple contacta con D&B para verificar tu número DUNS. Este proceso suele tardar 1 o 2 días laborables adicionales." },
          { step: "6", title: "Pago y activación", desc: "Una vez completada la verificación, pagas los 99 $/año de la tarifa de Apple Developer. Tu cuenta queda entonces activada." },
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Plazos Reales: Lo que Nadie te Cuenta</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        El tiempo total para obtener tu cuenta Apple Developer Organización depende directamente de la rapidez con que obtengas tu número DUNS. Aquí tienes una comparativa realista:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Paso</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">A través de D&amp;B oficial</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700 bg-emerald-50">A través de DUNS Verify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Obtención del DUNS</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">15–30 días</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">2 minutos</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Verificación de Apple</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">1–2 días</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">1–2 días</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">Tiempo total</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-red-600">16–32 días</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-emerald-600 bg-emerald-50">1–2 días</td>
            </tr>
          </tbody>
        </table>
      </div>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Errores Comunes que Debes Evitar</h2>

      <div className="space-y-4 mb-8">
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Error 1: Usar un DUNS perteneciente a otra entidad</p>
          <p className="text-sm text-red-700">Si tu empresa tiene varios establecimientos, asegúrate de usar el DUNS que corresponde exactamente a la entidad jurídica que estás registrando en Apple. Un DUNS de otra sucursal será rechazado.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Error 2: Información de D&amp;B desactualizada</p>
          <p className="text-sm text-red-700">Si la información en la base de datos D&amp;B (nombre de empresa, dirección, directivo) no coincide exactamente con lo que introduces en Apple, tu solicitud puede ser rechazada. Verifica que tu perfil D&amp;B esté actualizado.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Error 3: Confundir DUNS individual con DUNS de Organización</p>
          <p className="text-sm text-red-700">El número DUNS está vinculado a la entidad jurídica, no a la persona física. Asegúrate de que el DUNS esté a nombre de tu empresa (S.L., S.A., etc.) y no a tu nombre personal.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Error 4: Esperar la respuesta de D&amp;B para comenzar</p>
          <p className="text-sm text-red-700">Empieza ahora — no esperes hasta que necesites el DUNS para ocuparte de ello. Consíguelo con antelación para no bloquear tu proceso en el último momento.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">FAQ: DUNS y Apple Developer</h2>

      <div className="space-y-4 mb-8">
        {[
          { q: "¿Mi DUNS de Apple es el mismo que mi DUNS normal?", a: "Sí, es exactamente el mismo número DUNS. No existe un número DUNS específico para Apple. Apple simplemente usa la base de datos estándar de D&B para verificar tu empresa." },
          { q: "¿Puede Apple rechazarme incluso con un DUNS válido?", a: "Sí, si la información no coincide exactamente (nombre, dirección, directivo), Apple puede solicitar aclaraciones adicionales. Es poco frecuente, pero ocurre." },
          { q: "¿Cuánto tiempo después de obtener mi DUNS valida Apple mi cuenta?", a: "Por lo general, Apple valida tu cuenta de Organización en 24 a 48 horas después de enviar un DUNS válido." },
          { q: "¿Puedo usar el mismo DUNS para Google Play y Apple Developer?", a: "Sí, el mismo número DUNS puede usarse para ambas plataformas. Esta es una de las principales ventajas del sistema DUNS: un único identificador, válido en todas partes." },
        ].map(({ q, a }) => (
          <div key={q} className="border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2">{q}</p>
            <p className="text-sm text-slate-600">{a}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Artículos relacionados</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Número DUNS: La Guía Completa 2026" },
            { slug: "numero-duns-google-play", title: "Número DUNS para Google Play Store: Guía para Desarrolladores" },
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
        <span className="text-slate-700">DUNS per Apple Developer</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numero DUNS e Apple Developer: Tutto quello che Devi Sapere per Pubblicare sull&apos;App Store
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Hai sviluppato un&apos;app iOS e vuoi pubblicarla sull&apos;App Store come organizzazione? Apple richiede un numero DUNS. Molti sviluppatori scoprono questo requisito all&apos;ultimo momento e si trovano bloccati per settimane. Questa guida ti spiega tutto per anticipare ed evitare questo blocco.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Perché Apple Richiede un Numero DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Quando ti iscrivi all&apos;Apple Developer Program come organizzazione (al contrario di un account individuale), Apple deve verificare che la tua azienda esista legalmente. Invece di creare un proprio sistema di verifica globale, Apple si affida al database di Dun &amp; Bradstreet — il riferimento mondiale per l&apos;identificazione delle imprese.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Questo requisito si applica in diverse situazioni:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Creazione di un account <strong>Apple Developer Program Organizzazione</strong></li>
        <li>Pubblicazione di app sotto il nome di un&apos;azienda (anziché un nome individuale)</li>
        <li>Accesso a determinate API sensibili (come HealthKit, HomeKit, ecc.)</li>
        <li>Distribuzione interna di app tramite l&apos;<strong>Apple Developer Enterprise Program</strong></li>
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-1">Nota</p>
        <p className="text-sm text-blue-700">Se sei uno sviluppatore individuale (account &quot;Individual&quot;), non hai bisogno di un numero DUNS. Questo requisito si applica solo agli account Organizzazione. Tuttavia, gli account Organizzazione offrono molti vantaggi: nome aziendale visibile, più membri del team e molto altro.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Processo di Iscrizione ad Apple Developer: Passo dopo Passo</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Ecco come si svolge il processo completo di iscrizione all&apos;Apple Developer Program Organizzazione:
      </p>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Ottenere il numero DUNS", desc: "Prima ancora di iniziare sul sito Apple, procurati il tuo numero DUNS. Questo è il primo passo, spesso dimenticato. Con DUNS Verify, ci vogliono 2 minuti." },
          { step: "2", title: "Creare o accedere a un Apple ID", desc: "Hai bisogno di un Apple ID associato al tuo indirizzo email professionale. Questo Apple ID diventerà l'Account Holder della tua organizzazione." },
          { step: "3", title: "Avviare l'iscrizione come Organizzazione", desc: "Su developer.apple.com, seleziona 'Enroll' e poi scegli 'Organization'. Inserisci le informazioni della tua azienda." },
          { step: "4", title: "Inserire il numero DUNS", desc: "Apple usa il tuo DUNS per verificare l'esistenza della tua azienda. Assicurati che le informazioni nel tuo profilo D&B corrispondano alla tua attuale registrazione legale." },
          { step: "5", title: "Verifica da parte di Apple", desc: "Apple contatta D&B per verificare il tuo numero DUNS. Questo processo richiede in genere 1-2 giorni lavorativi aggiuntivi." },
          { step: "6", title: "Pagamento e attivazione", desc: "Una volta completata la verifica, paghi i 99 $/anno di quota Apple Developer. Il tuo account viene quindi attivato." },
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Tempi Reali: Quello che Nessuno Ti Dice</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il tempo totale per ottenere il tuo account Apple Developer Organizzazione dipende direttamente dalla velocità con cui ottieni il tuo numero DUNS. Ecco un confronto realistico:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Fase</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Tramite D&amp;B ufficiale</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700 bg-emerald-50">Tramite DUNS Verify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Ottenimento del DUNS</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">15–30 giorni</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">2 minuti</td>
            </tr>
            <tr className="bg-[#F8FAFC]">
              <td className="border border-slate-200 px-4 py-3 text-slate-700">Verifica Apple</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-700">1–2 giorni</td>
              <td className="border border-slate-200 px-4 py-3 text-emerald-600 font-medium bg-emerald-50">1–2 giorni</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">Tempo totale</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-red-600">16–32 giorni</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold text-emerald-600 bg-emerald-50">1–2 giorni</td>
            </tr>
          </tbody>
        </table>
      </div>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Insidie Comuni da Evitare</h2>

      <div className="space-y-4 mb-8">
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Insidia 1: Usare un DUNS appartenente a un&apos;altra entità</p>
          <p className="text-sm text-red-700">Se la tua azienda ha più sedi, assicurati di usare il DUNS che corrisponde esattamente all&apos;entità giuridica che stai registrando su Apple. Un DUNS di un&apos;altra filiale verrà rifiutato.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Insidia 2: Informazioni D&amp;B non aggiornate</p>
          <p className="text-sm text-red-700">Se le informazioni nel database D&amp;B (nome aziendale, indirizzo, dirigente) non corrispondono esattamente a ciò che inserisci su Apple, la tua domanda potrebbe essere rifiutata. Verifica che il tuo profilo D&amp;B sia aggiornato.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Insidia 3: Confondere DUNS individuale e Organizzazione</p>
          <p className="text-sm text-red-700">Il numero DUNS è legato all&apos;entità giuridica, non alla persona fisica. Assicurati che il DUNS sia intestato alla tua società (S.r.l., S.p.A., ecc.) e non al tuo nome personale.</p>
        </div>
        <div className="border border-red-200 rounded-xl p-5 bg-red-50">
          <p className="font-semibold text-red-800 mb-1">Insidia 4: Aspettare la risposta di D&amp;B prima di iniziare</p>
          <p className="text-sm text-red-700">Inizia ora — non aspettare di aver bisogno del DUNS per occupartene. Ottienilo in anticipo per non bloccare il tuo processo all&apos;ultimo momento.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">FAQ: DUNS e Apple Developer</h2>

      <div className="space-y-4 mb-8">
        {[
          { q: "Il mio DUNS per Apple è lo stesso del mio DUNS normale?", a: "Sì, è esattamente lo stesso numero DUNS. Non esiste un numero DUNS specifico per Apple. Apple utilizza semplicemente il database D&B standard per verificare la tua azienda." },
          { q: "Apple può rifiutarmi anche con un DUNS valido?", a: "Sì, se le informazioni non corrispondono esattamente (nome, indirizzo, dirigente), Apple potrebbe richiedere ulteriori chiarimenti. È raro, ma può accadere." },
          { q: "Quanto tempo dopo aver ottenuto il mio DUNS Apple convalida il mio account?", a: "In genere, Apple convalida il tuo account Organizzazione entro 24-48 ore dall'invio di un DUNS valido." },
          { q: "Posso usare lo stesso DUNS per Google Play e Apple Developer?", a: "Sì, lo stesso numero DUNS può essere usato per entrambe le piattaforme. Questo è uno dei principali vantaggi del sistema DUNS: un unico identificatore, utilizzabile ovunque." },
        ].map(({ q, a }) => (
          <div key={q} className="border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2">{q}</p>
            <p className="text-sm text-slate-600">{a}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articoli correlati</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Numero DUNS: La Guida Completa 2026" },
            { slug: "numero-duns-google-play", title: "Numero DUNS per Google Play Store: Guida per Sviluppatori" },
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
