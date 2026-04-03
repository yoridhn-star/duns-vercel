import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "numero-duns-google-play";
const AVAILABLE_LANGS = ['fr','en','de','es','it','nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];
const EN_FALLBACK = ['nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];

const META = {
  fr: { title: "Numéro DUNS Google Play : Obligatoire pour les Développeurs Android | DUNS Verify", description: "Google exige désormais un numéro DUNS pour certains développeurs Android. Découvrez pourquoi, comment l'obtenir et comment publier vos apps sur le Play Store." },
  en: { title: "DUNS Number for Google Play: Required for Android Developers | DUNS Verify", description: "Google now requires a DUNS number for certain Android developers. Learn why, how to get it, and how to publish your apps on the Play Store." },
  de: { title: "DUNS-Nummer für Google Play: Erforderlich für Android-Entwickler | DUNS Verify", description: "Google verlangt nun eine DUNS-Nummer für bestimmte Android-Entwickler. Erfahren Sie warum, wie man sie erhält und wie Sie Ihre Apps im Play Store veröffentlichen." },
  es: { title: "Número DUNS para Google Play: Obligatorio para Desarrolladores Android | DUNS Verify", description: "Google ahora requiere un número DUNS para ciertos desarrolladores Android. Descubre por qué, cómo obtenerlo y cómo publicar tus apps en la Play Store." },
  it: { title: "Numero DUNS per Google Play: Obbligatorio per Sviluppatori Android | DUNS Verify", description: "Google ora richiede un numero DUNS per alcuni sviluppatori Android. Scopri perché, come ottenerlo e come pubblicare le tue app nel Play Store." },
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
        <span className="text-slate-700">DUNS pour Google Play Store</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numéro DUNS et Google Play Store : Comment Publier Vos Apps
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Si vous développez des applications Android et souhaitez les distribuer via le Google Play Store en tant qu&apos;organisation, le numéro DUNS est entré dans l&apos;équation. Voici tout ce que vous devez savoir sur cette exigence relativement récente de Google et comment s&apos;y conformer rapidement.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">La nouvelle exigence Google : pourquoi le DUNS ?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Depuis 2023, Google a renforcé son processus de vérification des développeurs sur le Play Store. Dans le cadre de cette initiative, Google exige désormais un numéro DUNS pour certaines catégories de comptes développeurs — principalement les comptes Organisation et les développeurs qui publient des applications destinées aux entreprises ou aux enfants.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        L&apos;objectif de Google est de lutter contre la fraude et les applications malveillantes en s&apos;assurant que les organisations qui publient sur son store sont des entités légalement existantes et vérifiables. En utilisant la base de données D&amp;B — la référence mondiale avec 455 millions d&apos;entreprises — Google peut vérifier votre existence légale de façon fiable dans plus de 200 pays.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-1">Important</p>
        <p className="text-sm text-blue-700">Cette exigence s&apos;applique principalement aux comptes développeurs Organisation sur le Google Play Console. Les comptes individuels peuvent ne pas être concernés dans tous les cas. Vérifiez les exigences actuelles de Google Play Console pour votre situation spécifique.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Êtes-vous concerné ?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Vous êtes potentiellement concerné par l&apos;exigence DUNS de Google Play si :
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Vous créez un compte <strong>développeur Organisation</strong> (plutôt qu&apos;individuel)</li>
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
        C&apos;est d&apos;autant plus important que D&amp;B attribue parfois des DUNS automatiquement à partir de données publiques. Votre entreprise a peut-être un DUNS sans que vous le sachiez.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Le processus d&apos;inscription Google Play avec DUNS</h2>

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
        Bonne nouvelle : le même numéro DUNS fonctionne pour les deux plateformes. Si vous développez pour iOS et Android, vous n&apos;avez besoin que d&apos;un seul numéro DUNS.
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
        <span className="text-slate-700">DUNS for Google Play Store</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS Number and Google Play Store: How to Publish Your Apps
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        If you develop Android apps and want to distribute them through the Google Play Store as an organization, the DUNS number is now part of the equation. Here is everything you need to know about this relatively recent Google requirement and how to comply quickly.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Google&apos;s New Requirement: Why DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Since 2023, Google has strengthened its developer verification process on the Play Store. As part of this initiative, Google now requires a DUNS number for certain categories of developer accounts — primarily Organization accounts and developers who publish apps aimed at businesses or children.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Google&apos;s goal is to fight fraud and malicious apps by ensuring that organizations publishing on its store are legally existing and verifiable entities. By using the D&amp;B database — the world reference with 455 million companies — Google can reliably verify your legal existence in more than 200 countries.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-1">Important</p>
        <p className="text-sm text-blue-700">This requirement applies primarily to Organization developer accounts on Google Play Console. Individual accounts may not be affected in all cases. Check the current Google Play Console requirements for your specific situation.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Are You Affected?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        You are potentially affected by Google Play&apos;s DUNS requirement if:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>You are creating an <strong>Organization developer account</strong> (rather than individual)</li>
        <li>You are publishing <strong>professional or B2B apps</strong></li>
        <li>You are publishing <strong>children&apos;s apps</strong> (enhanced compliance requirements)</li>
        <li>You want to be verified as a <strong>trusted publisher</strong> on the Play Store</li>
        <li>Your app accesses <strong>sensitive data</strong> (health, finance, etc.)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">How to Check If You Already Have a DUNS Number</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Before taking steps to obtain a new DUNS number, check whether your company already has one. This check is free with DUNS Verify: simply enter your company name and we search the D&amp;B database for you.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        This is especially important because D&amp;B sometimes assigns DUNS numbers automatically based on public data. Your company may already have a DUNS without you knowing it.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Google Play Enrollment Process with DUNS</h2>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Create a Google Play Console account", desc: "Go to play.google.com/console and create your account. Choose the 'Organization' type if it applies to your situation." },
          { step: "2", title: "Enter your organization information", desc: "Provide your company's legal details: company name, address, country, etc. This information must match exactly what is in your D&B profile." },
          { step: "3", title: "Submit your DUNS number", desc: "Google asks for your DUNS number for verification. Enter it exactly as it was provided to you (9 digits)." },
          { step: "4", title: "Pay the registration fee", desc: "Google charges a one-time registration fee of $25 to create a developer account. This fee is separate from the cost of obtaining a DUNS." },
          { step: "5", title: "Verification and activation", desc: "Google verifies your DUNS with D&B. Generally, verification is completed within 24 to 48 hours." },
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Google Play vs Apple Developer: The Differences</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        If you develop for both platforms, you will notice similarities but also differences in the DUNS verification process:
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
              ["Registration fee", "$25 (one-time)", "$99/year"],
              ["DUNS required for Organization", "Yes (some cases)", "Yes (systematic)"],
              ["Verification time", "24–48 hours", "1–2 days"],
              ["Same DUNS usable", "Yes", "Yes"],
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
        Good news: the same DUNS number works for both platforms. If you develop for iOS and Android, you only need one DUNS number.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">FAQ: Google Play and DUNS</h2>
      <div className="space-y-4 mb-8">
        {[
          { q: "Does my individual app require a DUNS?", a: "In general, no. Individual developer accounts (natural persons) do not require a DUNS number. It is mainly required for Organization accounts." },
          { q: "Can I publish my apps without a DUNS first, and add it later?", a: "It depends on the type of app and the country. In some cases, you can start publishing without a DUNS and add it during a later verification. But it is better to have it from the start." },
          { q: "What happens if my DUNS information is incorrect?", a: "If the information in your D&B profile does not match what you submitted to Google, your verification may be rejected. Make sure your D&B profile is up to date." },
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
            { slug: "numero-duns-apple-developer", title: "DUNS Number for Apple Developer: Complete Guide" },
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
        <span className="text-slate-700">DUNS für Google Play Store</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS-Nummer und Google Play Store: So Veröffentlichen Sie Ihre Apps
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Wenn Sie Android-Apps entwickeln und diese als Organisation über den Google Play Store vertreiben möchten, spielt die DUNS-Nummer nun eine wichtige Rolle. Hier erfahren Sie alles über diese relativ neue Anforderung von Google und wie Sie ihr schnell entsprechen können.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Googles neue Anforderung: Warum DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Seit 2023 hat Google seinen Entwickler-Verifizierungsprozess im Play Store verschärft. Im Rahmen dieser Initiative verlangt Google nun eine DUNS-Nummer für bestimmte Kategorien von Entwicklerkonten — hauptsächlich Organisationskonten und Entwickler, die Apps für Unternehmen oder Kinder veröffentlichen.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Googles Ziel ist es, Betrug und schädliche Apps zu bekämpfen, indem sichergestellt wird, dass Organisationen, die auf seinem Store veröffentlichen, rechtlich existierende und überprüfbare Einheiten sind. Durch die Nutzung der D&amp;B-Datenbank — die Weltdatenbank mit 455 Millionen Unternehmen — kann Google Ihre rechtliche Existenz zuverlässig in mehr als 200 Ländern überprüfen.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-1">Wichtig</p>
        <p className="text-sm text-blue-700">Diese Anforderung gilt hauptsächlich für Organisations-Entwicklerkonten in der Google Play Console. Einzelkonten sind möglicherweise nicht in allen Fällen betroffen. Prüfen Sie die aktuellen Google Play Console-Anforderungen für Ihre spezifische Situation.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Sind Sie betroffen?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Sie sind potenziell von der DUNS-Anforderung von Google Play betroffen, wenn:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Sie ein <strong>Organisations-Entwicklerkonto</strong> erstellen (statt ein individuelles)</li>
        <li>Sie <strong>professionelle oder B2B-Apps</strong> veröffentlichen</li>
        <li>Sie <strong>Kinder-Apps</strong> veröffentlichen (verschärfte Compliance-Anforderungen)</li>
        <li>Sie als <strong>vertrauenswürdiger Herausgeber</strong> im Play Store verifiziert werden möchten</li>
        <li>Ihre App auf <strong>sensible Daten</strong> zugreift (Gesundheit, Finanzen usw.)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Wie Sie prüfen, ob Sie bereits eine DUNS-Nummer haben</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Bevor Sie Schritte unternehmen, um eine neue DUNS-Nummer zu erhalten, prüfen Sie, ob Ihr Unternehmen bereits eine hat. Diese Prüfung ist mit DUNS Verify kostenlos: Geben Sie einfach den Namen Ihres Unternehmens ein und wir durchsuchen die D&amp;B-Datenbank für Sie.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Das ist besonders wichtig, weil D&amp;B manchmal automatisch DUNS-Nummern auf Basis öffentlicher Daten vergibt. Ihr Unternehmen hat möglicherweise bereits eine DUNS-Nummer, ohne dass Sie es wissen.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Google Play Anmeldeprozess mit DUNS</h2>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Google Play Console-Konto erstellen", desc: "Gehen Sie auf play.google.com/console und erstellen Sie Ihr Konto. Wählen Sie den Typ 'Organisation', wenn das auf Ihre Situation zutrifft." },
          { step: "2", title: "Organisationsinformationen eingeben", desc: "Geben Sie die rechtlichen Daten Ihres Unternehmens ein: Firmenname, Adresse, Land usw. Diese Informationen müssen genau mit denen in Ihrem D&B-Profil übereinstimmen." },
          { step: "3", title: "DUNS-Nummer eingeben", desc: "Google fragt Ihre DUNS-Nummer zur Überprüfung ab. Geben Sie sie genau so ein, wie sie Ihnen mitgeteilt wurde (9 Ziffern)." },
          { step: "4", title: "Anmeldegebühr bezahlen", desc: "Google erhebt eine einmalige Anmeldegebühr von 25 $ für die Erstellung eines Entwicklerkontos. Diese Gebühr ist unabhängig von den Kosten für die DUNS-Beschaffung." },
          { step: "5", title: "Überprüfung und Aktivierung", desc: "Google überprüft Ihre DUNS bei D&B. In der Regel ist die Überprüfung innerhalb von 24 bis 48 Stunden abgeschlossen." },
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Google Play vs Apple Developer: Die Unterschiede</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Wenn Sie für beide Plattformen entwickeln, werden Sie Ähnlichkeiten, aber auch Unterschiede im DUNS-Verifizierungsprozess feststellen:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Aspekt</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Google Play</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Apple Developer</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Anmeldegebühr", "25 $ (einmalig)", "99 $/Jahr"],
              ["DUNS für Organisation erforderlich", "Ja (bestimmte Fälle)", "Ja (systematisch)"],
              ["Verifizierungsdauer", "24–48 Stunden", "1–2 Tage"],
              ["Gleiche DUNS verwendbar", "Ja", "Ja"],
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
        Gute Neuigkeit: Dieselbe DUNS-Nummer funktioniert für beide Plattformen. Wenn Sie für iOS und Android entwickeln, benötigen Sie nur eine einzige DUNS-Nummer.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">FAQ: Google Play und DUNS</h2>
      <div className="space-y-4 mb-8">
        {[
          { q: "Benötigt meine individuelle App eine DUNS?", a: "Im Allgemeinen nein. Einzelne Entwicklerkonten (natürliche Personen) benötigen keine DUNS-Nummer. Sie ist hauptsächlich für Organisationskonten erforderlich." },
          { q: "Kann ich meine Apps zuerst ohne DUNS veröffentlichen und sie später hinzufügen?", a: "Das hängt von der Art der App und dem Land ab. In einigen Fällen können Sie ohne DUNS mit der Veröffentlichung beginnen und die DUNS bei einer späteren Überprüfung hinzufügen. Aber es ist besser, sie von Anfang an zu haben." },
          { q: "Was passiert, wenn meine DUNS-Informationen falsch sind?", a: "Wenn die Informationen in Ihrem D&B-Profil nicht mit dem übereinstimmen, was Sie bei Google eingereicht haben, kann Ihre Überprüfung abgelehnt werden. Stellen Sie sicher, dass Ihr D&B-Profil aktuell ist." },
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
            { slug: "numero-duns-apple-developer", title: "DUNS-Nummer für Apple Developer: Vollständiger Leitfaden" },
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
        <span className="text-slate-700">DUNS para Google Play Store</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Número DUNS y Google Play Store: Cómo Publicar Tus Apps
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Si desarrollas apps para Android y quieres distribuirlas a través de Google Play Store como organización, el número DUNS ya forma parte del proceso. Aquí encontrarás todo lo que necesitas saber sobre este requisito relativamente reciente de Google y cómo cumplirlo rápidamente.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">El Nuevo Requisito de Google: ¿Por Qué el DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Desde 2023, Google ha reforzado su proceso de verificación de desarrolladores en la Play Store. Como parte de esta iniciativa, Google ahora exige un número DUNS para ciertas categorías de cuentas de desarrolladores — principalmente cuentas de Organización y desarrolladores que publican apps destinadas a empresas o niños.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        El objetivo de Google es combatir el fraude y las apps maliciosas asegurándose de que las organizaciones que publican en su tienda son entidades legalmente existentes y verificables. Al utilizar la base de datos D&amp;B — la referencia mundial con 455 millones de empresas — Google puede verificar tu existencia legal de forma fiable en más de 200 países.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-1">Importante</p>
        <p className="text-sm text-blue-700">Este requisito se aplica principalmente a las cuentas de desarrolladores de Organización en Google Play Console. Las cuentas individuales pueden no estar afectadas en todos los casos. Consulta los requisitos actuales de Google Play Console para tu situación específica.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">¿Estás Afectado?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Potencialmente estás afectado por el requisito DUNS de Google Play si:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Estás creando una <strong>cuenta de desarrollador Organización</strong> (en lugar de individual)</li>
        <li>Publicas <strong>apps profesionales o B2B</strong></li>
        <li>Publicas <strong>apps para niños</strong> (requisitos de cumplimiento reforzados)</li>
        <li>Quieres estar verificado como <strong>editor de confianza</strong> en Play Store</li>
        <li>Tu app accede a <strong>datos sensibles</strong> (salud, finanzas, etc.)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cómo Verificar si Ya Tienes un Número DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Antes de solicitar un nuevo número DUNS, verifica si tu empresa ya tiene uno. Esta verificación es gratuita con DUNS Verify: simplemente introduce el nombre de tu empresa y realizamos la búsqueda en la base de datos D&amp;B.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Esto es especialmente importante porque D&amp;B a veces asigna números DUNS automáticamente a partir de datos públicos. Tu empresa puede ya tener un DUNS sin que lo sepas.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Proceso de Registro en Google Play con DUNS</h2>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Crear una cuenta en Google Play Console", desc: "Ve a play.google.com/console y crea tu cuenta. Elige el tipo 'Organización' si corresponde a tu situación." },
          { step: "2", title: "Introducir la información de la organización", desc: "Proporciona los datos legales de tu empresa: razón social, dirección, país, etc. Esta información debe coincidir exactamente con la de tu perfil D&B." },
          { step: "3", title: "Proporcionar tu número DUNS", desc: "Google te pide tu número DUNS para la verificación. Introdúcelo exactamente como te fue comunicado (9 dígitos)." },
          { step: "4", title: "Pagar la tarifa de registro", desc: "Google cobra una tarifa única de registro de 25 $ para crear una cuenta de desarrollador. Esta tarifa es independiente del coste de obtención del DUNS." },
          { step: "5", title: "Verificación y activación", desc: "Google verifica tu DUNS con D&B. Generalmente, la verificación se completa en 24 a 48 horas." },
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Google Play vs Apple Developer: Las Diferencias</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Si desarrollas para ambas plataformas, notarás similitudes pero también diferencias en el proceso de verificación DUNS:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Aspecto</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Google Play</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Apple Developer</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Tarifa de registro", "25 $ (única vez)", "99 $/año"],
              ["DUNS obligatorio para Organización", "Sí (algunos casos)", "Sí (sistemático)"],
              ["Tiempo de verificación", "24–48 horas", "1–2 días"],
              ["Mismo DUNS utilizable", "Sí", "Sí"],
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
        Buenas noticias: el mismo número DUNS funciona para ambas plataformas. Si desarrollas para iOS y Android, solo necesitas un único número DUNS.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">FAQ: Google Play y DUNS</h2>
      <div className="space-y-4 mb-8">
        {[
          { q: "¿Mi app individual requiere un DUNS?", a: "En general, no. Las cuentas de desarrolladores individuales (personas físicas) no requieren número DUNS. Es principalmente obligatorio para las cuentas de Organización." },
          { q: "¿Puedo publicar mis apps sin DUNS primero y añadirlo después?", a: "Depende del tipo de app y del país. En algunos casos puedes empezar a publicar sin DUNS y añadirlo en una verificación posterior. Pero es mejor tenerlo desde el principio." },
          { q: "¿Qué ocurre si la información de mi DUNS es incorrecta?", a: "Si la información de tu perfil D&B no coincide con lo que enviaste a Google, tu verificación puede ser rechazada. Asegúrate de que tu perfil D&B esté actualizado." },
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
            { slug: "numero-duns-apple-developer", title: "Número DUNS para Apple Developer: Guía Completa" },
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
        <span className="text-slate-700">DUNS per Google Play Store</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numero DUNS e Google Play Store: Come Pubblicare le Tue App
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Se sviluppi app Android e vuoi distribuirle tramite il Google Play Store come organizzazione, il numero DUNS è ora entrato nell&apos;equazione. Ecco tutto ciò che devi sapere su questo requisito relativamente recente di Google e come adeguarti rapidamente.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Il Nuovo Requisito di Google: Perché il DUNS?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dal 2023, Google ha rafforzato il processo di verifica degli sviluppatori nel Play Store. Nell&apos;ambito di questa iniziativa, Google ora richiede un numero DUNS per determinate categorie di account sviluppatore — principalmente account Organizzazione e sviluppatori che pubblicano app destinate ad aziende o bambini.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        L&apos;obiettivo di Google è combattere le frodi e le app dannose assicurandosi che le organizzazioni che pubblicano sul suo store siano entità legalmente esistenti e verificabili. Utilizzando il database D&amp;B — il riferimento mondiale con 455 milioni di aziende — Google può verificare la tua esistenza legale in modo affidabile in oltre 200 paesi.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-blue-800 font-medium mb-1">Importante</p>
        <p className="text-sm text-blue-700">Questo requisito si applica principalmente agli account sviluppatore Organizzazione su Google Play Console. Gli account individuali potrebbero non essere interessati in tutti i casi. Controlla i requisiti attuali di Google Play Console per la tua situazione specifica.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Sei Coinvolto?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Sei potenzialmente coinvolto dal requisito DUNS di Google Play se:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Stai creando un <strong>account sviluppatore Organizzazione</strong> (anziché individuale)</li>
        <li>Pubblichi <strong>app professionali o B2B</strong></li>
        <li>Pubblichi <strong>app per bambini</strong> (requisiti di conformità rafforzati)</li>
        <li>Vuoi essere verificato come <strong>editore affidabile</strong> nel Play Store</li>
        <li>La tua app accede a <strong>dati sensibili</strong> (salute, finanza, ecc.)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Come Verificare se Hai Già un Numero DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Prima di richiedere un nuovo numero DUNS, verifica se la tua azienda ne ha già uno. Questa verifica è gratuita con DUNS Verify: inserisci semplicemente il nome della tua azienda e noi effettuiamo la ricerca nel database D&amp;B.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Questo è particolarmente importante perché D&amp;B a volte assegna automaticamente numeri DUNS sulla base di dati pubblici. La tua azienda potrebbe già avere un DUNS senza che tu lo sappia.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Processo di Registrazione su Google Play con DUNS</h2>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Creare un account Google Play Console", desc: "Vai su play.google.com/console e crea il tuo account. Scegli il tipo 'Organizzazione' se applicabile alla tua situazione." },
          { step: "2", title: "Inserire le informazioni dell'organizzazione", desc: "Fornisci i dati legali della tua azienda: ragione sociale, indirizzo, paese, ecc. Queste informazioni devono corrispondere esattamente a quelle del tuo profilo D&B." },
          { step: "3", title: "Fornire il numero DUNS", desc: "Google ti chiede il tuo numero DUNS per la verifica. Inseriscilo esattamente come ti è stato comunicato (9 cifre)." },
          { step: "4", title: "Pagare la quota di registrazione", desc: "Google addebita una quota di registrazione una tantum di 25 $ per creare un account sviluppatore. Questa quota è separata dal costo per ottenere il DUNS." },
          { step: "5", title: "Verifica e attivazione", desc: "Google verifica il tuo DUNS con D&B. In genere, la verifica viene completata entro 24-48 ore." },
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Google Play vs Apple Developer: Le Differenze</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Se sviluppi per entrambe le piattaforme, noterai somiglianze ma anche differenze nel processo di verifica DUNS:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Aspetto</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Google Play</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Apple Developer</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Quota di registrazione", "25 $ (una tantum)", "99 $/anno"],
              ["DUNS obbligatorio per Organizzazione", "Sì (alcuni casi)", "Sì (sistematico)"],
              ["Tempo di verifica", "24–48 ore", "1–2 giorni"],
              ["Stesso DUNS utilizzabile", "Sì", "Sì"],
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
        Buona notizia: lo stesso numero DUNS funziona per entrambe le piattaforme. Se sviluppi per iOS e Android, hai bisogno di un solo numero DUNS.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">FAQ: Google Play e DUNS</h2>
      <div className="space-y-4 mb-8">
        {[
          { q: "La mia app individuale richiede un DUNS?", a: "In generale, no. Gli account sviluppatore individuali (persone fisiche) non richiedono un numero DUNS. È principalmente richiesto per gli account Organizzazione." },
          { q: "Posso pubblicare le mie app senza DUNS prima e aggiungerlo in seguito?", a: "Dipende dal tipo di app e dal paese. In alcuni casi puoi iniziare a pubblicare senza DUNS e aggiungerlo durante una verifica successiva. Ma è meglio averlo fin dall'inizio." },
          { q: "Cosa succede se le informazioni del mio DUNS sono errate?", a: "Se le informazioni nel tuo profilo D&B non corrispondono a quelle che hai inviato a Google, la tua verifica potrebbe essere rifiutata. Assicurati che il tuo profilo D&B sia aggiornato." },
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
            { slug: "numero-duns-apple-developer", title: "Numero DUNS per Apple Developer: Guida Completa" },
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
