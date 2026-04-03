import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "numero-duns-gratuit";
const AVAILABLE_LANGS = ['fr','en','de','es','it','nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];
const EN_FALLBACK = ['nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];

const META = {
  fr: { title: "Numéro DUNS Gratuit : Comment l'Obtenir Rapidement Sans Frais | DUNS Verify", description: "Toutes les méthodes pour obtenir un numéro DUNS gratuitement en France : méthode D&B officielle, UPIK Suisse, délais réels et alternatives rapides." },
  en: { title: "Free DUNS Number: How to Get One Without Paying | DUNS Verify", description: "All the methods to get a DUNS number for free: official D&B method, UPIK directory, expected delays, and when to use a fast paid service." },
  de: { title: "Kostenlose DUNS-Nummer: Wie Man Sie Kostenlos Erhält | DUNS Verify", description: "Alle Methoden, um eine DUNS-Nummer kostenlos zu erhalten: offizielles D&B-Verfahren, UPIK-Verzeichnis, Wartezeiten und schnelle Alternativen." },
  es: { title: "Número DUNS Gratuito: Cómo Obtenerlo Sin Pagar | DUNS Verify", description: "Todos los métodos para obtener un número DUNS gratis: método oficial D&B, directorio UPIK, plazos reales y alternativas rápidas." },
  it: { title: "Numero DUNS Gratuito: Come Ottenerlo Senza Pagare | DUNS Verify", description: "Tutti i metodi per ottenere un numero DUNS gratuitamente: metodo ufficiale D&B, directory UPIK, tempi reali e alternative veloci." },
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
        <span className="text-slate-700">Free DUNS Number</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Free DUNS Number: All the Methods to Get One Without Paying
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        The question comes up often: is it really possible to get a DUNS number for free? The short answer is yes — but with important nuances about timing and constraints. This article presents all options honestly, so you can make the best decision for your situation.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Yes, the DUNS Number Can Be Obtained for Free</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet does offer a free registration service. It's the official method and no fee is charged for the attribution of a basic DUNS number. However, "free" doesn't mean "without cost" — waiting has a price, and we'll explain that shortly.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Method 1: The Official D&amp;B Route (Free, 15–30 Days)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The official method involves registering directly on the Dun &amp; Bradstreet portal. The process requires entering your company information, which is then manually verified by D&amp;B teams. Here's what you need to know:
      </p>

      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Actual timeframe:</strong> between 15 and 30 business days, sometimes longer</li>
        <li><strong>Interface:</strong> the D&amp;B website can be difficult to navigate and isn't always user-friendly</li>
        <li><strong>Follow-up required:</strong> you may need to contact D&amp;B again if you don't hear back after 2 weeks</li>
        <li><strong>Duplicate risk:</strong> first verify that your company doesn't already have a DUNS number</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-amber-800 font-medium mb-1">The true cost of "free"</p>
        <p className="text-sm text-amber-700">If you wait 30 days for your DUNS and miss a tender deadline or an Apple Developer enrollment window, the real cost of this "free option" can far exceed a few euros. Always calculate the opportunity cost before choosing the free method.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Method 2: UPIK — The International Directory (Free Lookup)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        UPIK (Universal Product/Service Identification Key) is an international business directory, originally developed by the Frankfurt Chamber of Commerce and Industry. This service allows you to <strong>search</strong> for an existing DUNS number for free, but it does not allow you to create a new one.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        UPIK is useful for checking whether your company already has a DUNS number without going through D&amp;B directly. If your company appears there, you can retrieve your DUNS at no cost. If it doesn't appear, you'll need to use one of the other methods to obtain one.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Method 3: Your Company May Already Have a DUNS Without Knowing It</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        This often surprises business owners: Dun &amp; Bradstreet regularly assigns DUNS numbers automatically, using public sources (business registries, government data, legal publications). If your company has been established for more than a few years, there's a good chance it already appears in the D&amp;B database.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        In this case, retrieving your DUNS is effectively free — you just need to look it up. This is actually what DUNS Verify does first: we check whether your company already has a DUNS number. If it does, we communicate it to you immediately.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">When Free Isn't Enough: The Value of Time</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Let's consider two realistic scenarios:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-amber-400">
          <p className="font-semibold text-slate-800 mb-1">Scenario A: Urgent Tender</p>
          <p className="text-sm text-slate-600">You discover an interesting European tender. Submission deadline: in 10 days. You don't have a DUNS number. If you opt for the free method (15–30 days), you simply can't apply. Contract value: €80,000. Cost of DUNS Verify: €4.99.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-amber-400">
          <p className="font-semibold text-slate-800 mb-1">Scenario B: Mobile App Launch</p>
          <p className="text-sm text-slate-600">You've just finished developing your iOS app. You need to enroll in Apple Developer with an organization account. Apple requires your DUNS. Planned launch: in 5 days. With the free method: 30-day wait. Cost of delay: your development expenses plus lost revenue.</p>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        In these situations, paying €4.99 to get your DUNS in 2 minutes is the economically rational decision. The choice isn't between "free" and "paid" — it's between "fast" and "slow."
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Summary: Which Method Should You Choose?</h2>

      <div className="space-y-3 mb-8">
        <div className="border border-slate-200 rounded-xl p-4">
          <p className="font-semibold text-slate-800 text-sm mb-1">✓ Choose the free D&amp;B method if...</p>
          <p className="text-sm text-slate-600">You have no urgency, you can afford to wait up to 30 days, and you want to minimize any cost even at the expense of time.</p>
        </div>
        <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50">
          <p className="font-semibold text-emerald-800 text-sm mb-1">✓ Choose DUNS Verify if...</p>
          <p className="text-sm text-emerald-700">You have a deadline to meet, you want to avoid complications, or you simply need your DUNS now to move your project forward.</p>
        </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Related Articles</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS Number: The Complete Guide 2026" },
            { slug: "verifier-numero-duns", title: "How to Verify a Company's DUNS Number" },
            { slug: "numero-duns-definition", title: "DUNS Number: What Is It? Simple Definition" },
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
        <span className="text-slate-700">Kostenlose DUNS-Nummer</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Kostenlose DUNS-Nummer: Alle Methoden, Um Sie Ohne Kosten zu Erhalten
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Die Frage stellt sich häufig: Ist es wirklich möglich, eine DUNS-Nummer kostenlos zu erhalten? Die kurze Antwort lautet ja — aber mit wichtigen Einschränkungen bezüglich Wartezeiten und Bedingungen. Dieser Artikel stellt alle Optionen ehrlich vor, damit Sie die beste Entscheidung für Ihre Situation treffen können.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Ja, die DUNS-Nummer kann kostenlos erhalten werden</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet bietet tatsächlich einen kostenlosen Registrierungsservice an. Es ist die offizielle Methode und für die Vergabe einer einfachen DUNS-Nummer werden keine Gebühren erhoben. Allerdings bedeutet "kostenlos" nicht "ohne Kosten" — das Warten hat seinen Preis, und das werden wir erklären.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Methode 1: Der offizielle D&amp;B-Weg (kostenlos, 15–30 Tage)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die offizielle Methode besteht darin, sich direkt auf dem Portal von Dun &amp; Bradstreet zu registrieren. Der Prozess erfordert die Eingabe Ihrer Unternehmensdaten, die anschließend manuell von den D&amp;B-Teams überprüft werden. Folgendes sollten Sie wissen:
      </p>

      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Tatsächliche Wartezeit:</strong> zwischen 15 und 30 Werktagen, manchmal länger</li>
        <li><strong>Benutzeroberfläche:</strong> Die D&amp;B-Website ist nicht immer benutzerfreundlich</li>
        <li><strong>Nachfassung erforderlich:</strong> Es kann notwendig sein, D&amp;B erneut zu kontaktieren, wenn nach 2 Wochen keine Antwort kommt</li>
        <li><strong>Duplikatrisiko:</strong> Überprüfen Sie zuerst, ob Ihr Unternehmen nicht bereits eine DUNS-Nummer hat</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-amber-800 font-medium mb-1">Die wahren Kosten des "Kostenlosen"</p>
        <p className="text-sm text-amber-700">Wenn Sie 30 Tage auf Ihre DUNS warten und eine Ausschreibungsfrist oder eine Apple-Developer-Anmeldung verpassen, können die tatsächlichen Kosten dieser "kostenlosen Option" weit über ein paar Euro hinausgehen. Berechnen Sie immer die Opportunitätskosten, bevor Sie die kostenlose Methode wählen.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Methode 2: UPIK — Das internationale Verzeichnis (kostenlose Suche)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        UPIK (Universal Product/Service Identification Key) ist ein internationales Unternehmensverzeichnis, das ursprünglich von der Industrie- und Handelskammer Frankfurt entwickelt wurde. Dieser Service ermöglicht die <strong>kostenlose Suche</strong> nach einer bestehenden DUNS-Nummer, erlaubt aber nicht die Erstellung einer neuen.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        UPIK ist nützlich, um zu überprüfen, ob Ihr Unternehmen bereits eine DUNS-Nummer hat, ohne direkt über D&amp;B gehen zu müssen. Wenn Ihr Unternehmen dort erscheint, können Sie Ihre DUNS kostenlos abrufen. Wenn nicht, müssen Sie eine der anderen Methoden verwenden, um eine zu erhalten.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Methode 3: Ihr Unternehmen hat vielleicht schon eine DUNS, ohne es zu wissen</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Das überrascht Unternehmer oft: Dun &amp; Bradstreet vergibt regelmäßig automatisch DUNS-Nummern auf Basis öffentlicher Quellen (Handelsregister, Regierungsdaten, amtliche Bekanntmachungen). Wenn Ihr Unternehmen schon einige Jahre besteht, stehen die Chancen gut, dass es bereits in der D&amp;B-Datenbank eingetragen ist.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        In diesem Fall ist das Abrufen Ihrer DUNS tatsächlich kostenlos — Sie müssen sie nur suchen. Das ist übrigens das, was DUNS Verify zuerst tut: Wir prüfen, ob Ihr Unternehmen bereits eine DUNS-Nummer hat. Wenn ja, teilen wir sie Ihnen sofort mit.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Wenn kostenlos nicht ausreicht: Der Wert der Zeit</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Betrachten wir zwei realistische Szenarien:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-amber-400">
          <p className="font-semibold text-slate-800 mb-1">Szenario A: Dringende Ausschreibung</p>
          <p className="text-sm text-slate-600">Sie entdecken eine interessante europäische Ausschreibung. Einreichungsfrist: in 10 Tagen. Sie haben keine DUNS-Nummer. Wenn Sie die kostenlose Methode wählen (15–30 Tage), können Sie schlicht nicht teilnehmen. Auftragswert: 80.000 €. Kosten für DUNS Verify: 4,99 €.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-amber-400">
          <p className="font-semibold text-slate-800 mb-1">Szenario B: Veröffentlichung einer App</p>
          <p className="text-sm text-slate-600">Sie haben die Entwicklung Ihrer iOS-App abgeschlossen. Sie müssen sich mit einem Organisations-Account bei Apple Developer anmelden. Apple verlangt Ihre DUNS. Geplanter Launch: in 5 Tagen. Mit der kostenlosen Methode: 30 Tage Wartezeit. Kosten der Verzögerung: Ihre Entwicklungskosten plus entgangene Einnahmen.</p>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        In diesen Situationen ist es wirtschaftlich rational, 4,99 € zu zahlen, um die DUNS in 2 Minuten zu erhalten. Die Wahl liegt nicht zwischen "kostenlos" und "kostenpflichtig", sondern zwischen "schnell" und "langsam".
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Zusammenfassung: Welche Methode sollten Sie wählen?</h2>

      <div className="space-y-3 mb-8">
        <div className="border border-slate-200 rounded-xl p-4">
          <p className="font-semibold text-slate-800 text-sm mb-1">✓ Wählen Sie die kostenlose D&amp;B-Methode, wenn...</p>
          <p className="text-sm text-slate-600">Sie keine Eile haben, bis zu 30 Tage warten können und jeden Kostenpunkt minimieren möchten, auch auf Kosten der Zeit.</p>
        </div>
        <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50">
          <p className="font-semibold text-emerald-800 text-sm mb-1">✓ Wählen Sie DUNS Verify, wenn...</p>
          <p className="text-sm text-emerald-700">Sie eine Frist einhalten müssen, Komplikationen vermeiden möchten, oder Ihre DUNS jetzt benötigen, um Ihr Projekt voranzutreiben.</p>
        </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Verwandte Artikel</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS-Nummer: Der vollständige Leitfaden 2026" },
            { slug: "verifier-numero-duns", title: "Wie man die DUNS-Nummer eines Unternehmens überprüft" },
            { slug: "numero-duns-definition", title: "DUNS-Nummer: Was Ist Das? Einfache Definition" },
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
        <span className="text-slate-700">Número DUNS Gratuito</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Número DUNS Gratuito: Todos los Métodos para Obtenerlo Sin Pagar
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        La pregunta surge con frecuencia: ¿es realmente posible obtener un número DUNS de forma gratuita? La respuesta corta es sí — pero con importantes matices sobre los plazos y las limitaciones. Este artículo presenta todas las opciones de manera honesta, para que puedas tomar la mejor decisión según tu situación.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Sí, el Número DUNS se Puede Obtener Gratuitamente</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet ofrece efectivamente un servicio de registro gratuito. Es el método oficial y no se cobran honorarios por la asignación de un número DUNS básico. Sin embargo, "gratuito" no significa "sin coste" — la espera tiene un precio, y lo explicaremos a continuación.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Método 1: La Vía Oficial D&amp;B (Gratuito, 15–30 Días)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        El método oficial consiste en registrarse directamente en el portal de Dun &amp; Bradstreet. El proceso implica introducir los datos de tu empresa, que luego son verificados manualmente por los equipos de D&amp;B. Esto es lo que debes saber:
      </p>

      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Plazo real:</strong> entre 15 y 30 días hábiles, a veces más</li>
        <li><strong>Interfaz:</strong> el sitio web de D&amp;B no siempre es intuitivo</li>
        <li><strong>Seguimiento necesario:</strong> puede ser necesario contactar a D&amp;B de nuevo si no recibes respuesta en 2 semanas</li>
        <li><strong>Riesgo de duplicados:</strong> verifica primero que tu empresa no tenga ya un DUNS asignado</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-amber-800 font-medium mb-1">El verdadero coste de lo "gratuito"</p>
        <p className="text-sm text-amber-700">Si esperas 30 días tu DUNS y pierdes una licitación o una fecha límite de Apple Developer, el coste real de esta "opción gratuita" puede ser muy superior a unos pocos euros. Calcula siempre el coste de oportunidad antes de elegir el método gratuito.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Método 2: UPIK — El Directorio Internacional (Consulta Gratuita)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        UPIK (Universal Product/Service Identification Key) es un directorio internacional de empresas, desarrollado originalmente por la Cámara de Comercio e Industria de Fráncfort. Este servicio permite <strong>buscar</strong> un número DUNS existente gratuitamente, pero no permite crear uno nuevo.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        UPIK es útil para comprobar si tu empresa ya tiene un número DUNS sin tener que pasar por D&amp;B directamente. Si tu empresa aparece allí, puedes recuperar tu DUNS sin ningún coste. Si no aparece, tendrás que utilizar alguno de los otros métodos para obtener uno.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Método 3: Tu Empresa Puede que ya Tenga un DUNS sin Saberlo</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Esto suele sorprender a los empresarios: Dun &amp; Bradstreet asigna regularmente números DUNS de forma automática, a partir de fuentes públicas (registros mercantiles, datos gubernamentales, publicaciones legales). Si tu empresa lleva funcionando algunos años, es muy probable que ya figure en la base de datos de D&amp;B.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        En ese caso, recuperar tu DUNS es efectivamente gratuito — solo tienes que buscarlo. De hecho, esto es lo primero que hace DUNS Verify: comprobamos si tu empresa ya tiene un número DUNS. Si es así, te lo comunicamos de inmediato.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cuando lo Gratuito no es Suficiente: El Valor del Tiempo</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Consideremos dos escenarios realistas:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-amber-400">
          <p className="font-semibold text-slate-800 mb-1">Escenario A: Licitación Urgente</p>
          <p className="text-sm text-slate-600">Descubres una interesante licitación europea. Plazo de presentación: en 10 días. No tienes número DUNS. Si optas por el método gratuito (15–30 días), simplemente no puedes participar. Valor del contrato: 80.000 €. Coste de DUNS Verify: 4,99 €.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-amber-400">
          <p className="font-semibold text-slate-800 mb-1">Escenario B: Lanzamiento de Aplicación Móvil</p>
          <p className="text-sm text-slate-600">Has terminado de desarrollar tu app iOS. Necesitas inscribirte en Apple Developer con una cuenta de organización. Apple exige tu DUNS. Lanzamiento previsto: en 5 días. Con el método gratuito: espera de 30 días. Coste del retraso: tus gastos de desarrollo más ingresos perdidos.</p>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        En estas situaciones, pagar 4,99 € para obtener tu DUNS en 2 minutos es la decisión económicamente racional. No se trata de elegir entre "gratuito" y "de pago", sino entre "rápido" y "lento".
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Resumen: ¿Qué Método Elegir?</h2>

      <div className="space-y-3 mb-8">
        <div className="border border-slate-200 rounded-xl p-4">
          <p className="font-semibold text-slate-800 text-sm mb-1">✓ Elige el método gratuito de D&amp;B si...</p>
          <p className="text-sm text-slate-600">No tienes urgencia, puedes permitirte esperar hasta 30 días, y quieres minimizar cualquier coste aunque sea a expensas del tiempo.</p>
        </div>
        <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50">
          <p className="font-semibold text-emerald-800 text-sm mb-1">✓ Elige DUNS Verify si...</p>
          <p className="text-sm text-emerald-700">Tienes un plazo que cumplir, quieres evitar complicaciones, o simplemente necesitas tu DUNS ahora mismo para avanzar con tu proyecto.</p>
        </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Artículos Relacionados</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Número DUNS: La Guía Completa 2026" },
            { slug: "verifier-numero-duns", title: "Cómo Verificar el Número DUNS de una Empresa" },
            { slug: "numero-duns-definition", title: "Número DUNS: ¿Qué es? Definición Simple" },
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
        <span className="text-slate-700">Numero DUNS Gratuito</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numero DUNS Gratuito: Tutti i Metodi per Ottenerlo Senza Pagare
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        La domanda ricorre spesso: è davvero possibile ottenere un numero DUNS gratuitamente? La risposta breve è sì — ma con importanti precisazioni sui tempi e i vincoli. Questo articolo presenta tutte le opzioni in modo onesto, per aiutarti a prendere la decisione migliore in base alla tua situazione.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Sì, il Numero DUNS Può Essere Ottenuto Gratuitamente</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet offre effettivamente un servizio di registrazione gratuito. È il metodo ufficiale e non vengono addebitati costi per l'assegnazione di un numero DUNS base. Tuttavia, "gratuito" non significa "senza costi" — l'attesa ha un prezzo, e lo spiegheremo a breve.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Metodo 1: La Via Ufficiale D&amp;B (Gratuito, 15–30 Giorni)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il metodo ufficiale consiste nel registrarsi direttamente sul portale di Dun &amp; Bradstreet. Il processo richiede di inserire le informazioni della tua azienda, che vengono poi verificate manualmente dai team di D&amp;B. Ecco cosa devi sapere:
      </p>

      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Tempo reale:</strong> tra 15 e 30 giorni lavorativi, a volte di più</li>
        <li><strong>Interfaccia:</strong> il sito D&amp;B non è sempre intuitivo</li>
        <li><strong>Solleciti necessari:</strong> potrebbe essere necessario ricontattare D&amp;B se non si hanno notizie dopo 2 settimane</li>
        <li><strong>Rischio di duplicati:</strong> verifica prima che la tua azienda non abbia già un DUNS assegnato</li>
      </ul>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <p className="text-sm text-amber-800 font-medium mb-1">Il vero costo del "gratuito"</p>
        <p className="text-sm text-amber-700">Se aspetti 30 giorni il tuo DUNS e perdi una gara d'appalto o una scadenza Apple Developer, il costo reale di questa "opzione gratuita" può essere ben superiore a pochi euro. Calcola sempre il costo opportunità prima di scegliere il metodo gratuito.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Metodo 2: UPIK — La Directory Internazionale (Ricerca Gratuita)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        UPIK (Universal Product/Service Identification Key) è una directory internazionale di imprese, sviluppata originariamente dalla Camera di Commercio e Industria di Francoforte. Questo servizio permette di <strong>cercare</strong> gratuitamente un numero DUNS esistente, ma non consente di crearne uno nuovo.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        UPIK è utile per verificare se la tua azienda ha già un numero DUNS senza dover passare direttamente per D&amp;B. Se la tua azienda vi compare, puoi recuperare il tuo DUNS senza alcun costo. Se non vi compare, dovrai utilizzare uno degli altri metodi per ottenerne uno.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Metodo 3: La tua Azienda Potrebbe già Avere un DUNS senza Saperlo</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Questo spesso sorprende gli imprenditori: Dun &amp; Bradstreet assegna regolarmente numeri DUNS automaticamente, a partire da fonti pubbliche (registri delle imprese, dati governativi, pubblicazioni legali). Se la tua azienda esiste da qualche anno, è molto probabile che sia già presente nel database di D&amp;B.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        In questo caso, recuperare il tuo DUNS è effettivamente gratuito — basta cercarlo. È peraltro quello che fa DUNS Verify per prima cosa: verifichiamo se la tua azienda ha già un numero DUNS. In caso affermativo, te lo comunichiamo immediatamente.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Quando il Gratuito non Basta: Il Valore del Tempo</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Consideriamo due scenari realistici:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-amber-400">
          <p className="font-semibold text-slate-800 mb-1">Scenario A: Gara d'Appalto Urgente</p>
          <p className="text-sm text-slate-600">Scopri un interessante bando europeo. Scadenza per la presentazione: tra 10 giorni. Non hai un numero DUNS. Se scegli il metodo gratuito (15–30 giorni), semplicemente non puoi partecipare. Valore del contratto: 80.000 €. Costo di DUNS Verify: 4,99 €.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-amber-400">
          <p className="font-semibold text-slate-800 mb-1">Scenario B: Pubblicazione di un'App Mobile</p>
          <p className="text-sm text-slate-600">Hai finito di sviluppare la tua app iOS. Devi iscriverti ad Apple Developer con un account organizzativo. Apple richiede il tuo DUNS. Lancio previsto: tra 5 giorni. Con il metodo gratuito: 30 giorni di attesa. Costo del ritardo: le tue spese di sviluppo più i ricavi persi.</p>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        In queste situazioni, pagare 4,99 € per ottenere il DUNS in 2 minuti è la decisione economicamente razionale. Non si tratta di scegliere tra "gratuito" e "a pagamento", ma tra "veloce" e "lento".
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Riepilogo: Quale Metodo Scegliere?</h2>

      <div className="space-y-3 mb-8">
        <div className="border border-slate-200 rounded-xl p-4">
          <p className="font-semibold text-slate-800 text-sm mb-1">✓ Scegli il metodo gratuito D&amp;B se...</p>
          <p className="text-sm text-slate-600">Non hai urgenza, puoi permetterti di aspettare fino a 30 giorni, e vuoi minimizzare ogni costo anche a discapito del tempo.</p>
        </div>
        <div className="border border-emerald-200 rounded-xl p-4 bg-emerald-50">
          <p className="font-semibold text-emerald-800 text-sm mb-1">✓ Scegli DUNS Verify se...</p>
          <p className="text-sm text-emerald-700">Hai una scadenza da rispettare, vuoi evitare complicazioni, o semplicemente hai bisogno del tuo DUNS adesso per far avanzare il tuo progetto.</p>
        </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articoli Correlati</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Numero DUNS: La Guida Completa 2026" },
            { slug: "verifier-numero-duns", title: "Come Verificare il Numero DUNS di un'Azienda" },
            { slug: "numero-duns-definition", title: "Numero DUNS: Cos'è? Definizione Semplice" },
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
