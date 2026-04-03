import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "numero-duns-marches-publics";
const AVAILABLE_LANGS = ['fr','en','de','es','it','nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];
const EN_FALLBACK = ['nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];

const META = {
  fr: { title: "Numéro DUNS et Marchés Publics : Pourquoi Il Est Indispensable | DUNS Verify", description: "Le numéro DUNS est obligatoire pour répondre aux marchés publics internationaux (UE, ONU, SAM.gov). Guide complet pour les entreprises françaises." },
  en: { title: "DUNS Number and Public Procurement: Why It's Essential | DUNS Verify", description: "The DUNS number is mandatory for international public tenders (EU, UN, SAM.gov). Complete guide for businesses looking to win international contracts." },
  de: { title: "DUNS-Nummer und Öffentliche Ausschreibungen: Warum Sie Unverzichtbar Ist | DUNS Verify", description: "Die DUNS-Nummer ist für internationale öffentliche Ausschreibungen (EU, UN, SAM.gov) Pflicht. Vollständiger Leitfaden für Unternehmen." },
  es: { title: "Número DUNS y Licitaciones Públicas: Por Qué Es Indispensable | DUNS Verify", description: "El número DUNS es obligatorio para licitaciones públicas internacionales (UE, ONU, SAM.gov). Guía completa para empresas que quieren ganar contratos internacionales." },
  it: { title: "Numero DUNS e Appalti Pubblici: Perché È Indispensabile | DUNS Verify", description: "Il numero DUNS è obbligatorio per gli appalti pubblici internazionali (UE, ONU, SAM.gov). Guida completa per le aziende che vogliono vincere contratti internazionali." },
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
        <span className="text-slate-700">DUNS et marchés publics</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numéro DUNS et Marchés Publics : Votre Sésame pour l&apos;International
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Vous cherchez à décrocher des contrats avec des institutions européennes, des organisations internationales ou le gouvernement américain ? Le numéro DUNS est votre passeport obligatoire pour accéder à ces marchés. Voici tout ce que vous devez savoir pour ne pas laisser passer des opportunités à cause d&apos;un identifiant manquant.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Pourquoi les marchés publics internationaux exigent le DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Les grandes organisations publiques internationales — Commission Européenne, Nations Unies, Banque Mondiale, OTAN, ou encore le gouvernement fédéral américain — reçoivent des candidatures d&apos;entreprises du monde entier. Elles ont besoin d&apos;un moyen fiable et standardisé pour identifier chaque candidat, vérifier son existence légale et accéder à des informations sur sa santé financière.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Le numéro DUNS est le standard international qui répond à ce besoin. En utilisant D&amp;B comme base de référence, ces organisations peuvent instantanément vérifier qu&apos;une entreprise existe, où elle est localisée, qui la dirige, et dans certains cas, quel est son historique de paiements. C&apos;est une garantie de sécurité pour les acheteurs publics.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Les principaux marchés qui exigent le DUNS</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Commission Européenne — Programmes Horizon et LIFE</p>
          <p className="text-sm text-slate-600">La CE exige un numéro DUNS pour tous les participants aux programmes de financement de la recherche et de l&apos;innovation (Horizon Europe, LIFE, etc.). Les entreprises doivent s&apos;enregistrer dans le Participant Register de la Commission, qui utilise le DUNS comme identifiant de référence pour les entités non-européennes, et le PIC (Participant Identification Code) pour les entités européennes — lui-même lié au DUNS.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">SAM.gov — Marchés du gouvernement américain</p>
          <p className="text-sm text-slate-600">Pour vendre au gouvernement fédéral américain, toute entreprise — y compris les entreprises étrangères — doit s&apos;enregistrer sur SAM.gov (System for Award Management). Cette plateforme utilise le numéro DUNS comme identifiant primaire. Sans DUNS, il est impossible de s&apos;inscrire sur SAM.gov et donc d&apos;accéder aux contrats fédéraux américains.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Nations Unies — UNGM</p>
          <p className="text-sm text-slate-600">Le Global Marketplace de l&apos;ONU (UNGM) permet aux entreprises de se référencer comme fournisseurs potentiels des agences onusiennes. L&apos;enregistrement sur UNGM nécessite un numéro DUNS pour les organisations.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">OTAN — Marchés de défense</p>
          <p className="text-sm text-slate-600">Les marchés liés à la défense et à la sécurité de l&apos;OTAN exigent systématiquement un numéro DUNS, en plus de diverses accréditations de sécurité.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Banque Mondiale et institutions de développement</p>
          <p className="text-sm text-slate-600">La Banque Mondiale, la Banque Africaine de Développement, la Banque Asiatique de Développement et d&apos;autres institutions financières internationales utilisent le DUNS pour identifier les fournisseurs dans leurs processus d&apos;appel d&apos;offres.</p>
        </div>
      </div>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Comment répondre à un appel d&apos;offres international avec votre DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Voici les étapes générales pour utiliser votre numéro DUNS dans le cadre d&apos;une candidature à un marché public international :
      </p>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Obtenez votre numéro DUNS en avance", desc: "Ne découvrez pas au dernier moment que vous avez besoin d'un DUNS. Obtenez-le dès maintenant, avant même d'identifier un appel d'offres spécifique. Avec DUNS Verify, c'est l'affaire de 2 minutes." },
          { step: "2", title: "Vérifiez et mettez à jour votre profil D&B", desc: "Assurez-vous que les informations associées à votre DUNS dans la base D&B sont exactes et à jour : raison sociale, adresse, dirigeant, secteur d'activité. Des informations incorrectes peuvent entraîner le rejet de votre candidature." },
          { step: "3", title: "Lisez attentivement les conditions de l'appel d'offres", desc: "Chaque appel d'offres peut avoir ses propres exigences concernant le DUNS : certains demandent uniquement le numéro, d'autres peuvent exiger un rapport D&B complet ou un score de crédit minimum." },
          { step: "4", title: "Enregistrez-vous sur la plateforme concernée", desc: "Pour SAM.gov, UNGM, ou le Participant Register de la Commission Européenne, vous devrez vous inscrire en utilisant votre DUNS comme identifiant de base." },
          { step: "5", title: "Soumettez votre dossier dans les délais", desc: "Avec votre DUNS en main et votre profil à jour, vous pouvez soumettre votre candidature en toute confiance. Respectez scrupuleusement les dates limites." },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[#1E3A5F] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{step}</div>
            <div>
              <p className="font-semibold text-slate-800">{title}</p>
              <p className="text-sm text-slate-600 mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Le rôle du DUNS dans la vérification fournisseur</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Au-delà du simple rôle d&apos;identifiant, le numéro DUNS est la clé d&apos;accès au profil D&amp;B de votre entreprise. Ce profil contient des informations précieuses que les acheteurs publics utilisent pour évaluer les candidats :
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Informations légales :</strong> existence, forme juridique, date de création</li>
        <li><strong>Informations financières :</strong> chiffre d&apos;affaires, nombre d&apos;employés (si disponibles)</li>
        <li><strong>Historique de paiements :</strong> délais de paiement moyens (Paydex score)</li>
        <li><strong>Liens capitalistiques :</strong> actionnaires, filiales, groupes</li>
        <li><strong>Actualités :</strong> changements de direction, procédures collectives, etc.</li>
      </ul>

      <p className="text-slate-700 leading-relaxed mb-4">
        Plus votre profil D&amp;B est complet et positif, plus vous avez de chances d&apos;être sélectionné. C&apos;est une raison supplémentaire d&apos;obtenir votre DUNS et de maintenir votre profil à jour.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Exemple concret : candidature à un programme Horizon Europe</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Imaginez une PME française spécialisée dans les technologies propres qui souhaite participer à un projet de recherche Horizon Europe en consortium avec des partenaires allemands et espagnols. Voici ce qui se passe concrètement :
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Le coordinateur du consortium demande à tous les partenaires de s&apos;enregistrer dans le Funding &amp; Tender Opportunities Portal de la Commission Européenne. Pour s&apos;inscrire, chaque entreprise doit fournir son numéro DUNS. La Commission utilise ce numéro pour rechercher automatiquement les informations légales dans la base D&amp;B et pré-remplir le profil du participant.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Si la PME française n&apos;a pas de DUNS, elle ne peut pas s&apos;inscrire, et le consortium perd un partenaire potentiel. Si elle découvre l&apos;exigence tardivement et opte pour la méthode gratuite (30 jours), elle risque de manquer la date limite de soumission du projet.
      </p>

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
        <span className="text-slate-700">DUNS and Public Procurement</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS Number and Public Procurement: Your Key to International Contracts
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Looking to win contracts with European institutions, international organizations, or the US government? The DUNS number is your mandatory passport to access these markets. Here is everything you need to know so you never miss an opportunity because of a missing identifier.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Why International Public Procurement Requires DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Major international public organizations — the European Commission, the United Nations, the World Bank, NATO, and the US federal government — receive applications from companies worldwide. They need a reliable and standardized way to identify each applicant, verify its legal existence, and access information about its financial health.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        The DUNS number is the international standard that meets this need. By using D&amp;B as the reference database, these organizations can instantly verify that a company exists, where it is located, who leads it, and in some cases, what its payment history looks like. It is a security guarantee for public buyers.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Key Procurement Platforms That Require DUNS</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">European Commission — Horizon Europe and LIFE Programs</p>
          <p className="text-sm text-slate-600">The EC requires a DUNS number for all participants in its research and innovation funding programs (Horizon Europe, LIFE, etc.). Companies must register in the Commission&apos;s Participant Register, which uses DUNS as the reference identifier for non-European entities and the PIC (Participant Identification Code) for European entities — itself linked to DUNS.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">SAM.gov — US Federal Government Contracts</p>
          <p className="text-sm text-slate-600">To sell to the US federal government, any company — including foreign companies — must register on SAM.gov (System for Award Management). This platform uses the DUNS number as its primary identifier. Without a DUNS, it is impossible to register on SAM.gov and therefore impossible to access US federal contracts.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">United Nations — UNGM</p>
          <p className="text-sm text-slate-600">The UN Global Marketplace (UNGM) allows companies to register as potential suppliers for UN agencies. Registration on UNGM requires a DUNS number for organizations.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">NATO — Defense Procurement</p>
          <p className="text-sm text-slate-600">NATO defense and security contracts systematically require a DUNS number, in addition to various security accreditations.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">World Bank and Development Institutions</p>
          <p className="text-sm text-slate-600">The World Bank, African Development Bank, Asian Development Bank, and other international financial institutions use DUNS to identify suppliers in their tendering processes.</p>
        </div>
      </div>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">How to Respond to an International Tender with Your DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Here are the general steps for using your DUNS number when applying for an international public contract:
      </p>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Get your DUNS number in advance", desc: "Do not discover at the last minute that you need a DUNS. Get it now, before even identifying a specific tender. With DUNS Verify, it takes 2 minutes." },
          { step: "2", title: "Verify and update your D&B profile", desc: "Make sure the information linked to your DUNS in the D&B database is accurate and up to date: company name, address, director, industry. Incorrect information can lead to your application being rejected." },
          { step: "3", title: "Read the tender requirements carefully", desc: "Each tender may have its own DUNS requirements: some only ask for the number, others may require a complete D&B report or a minimum credit score." },
          { step: "4", title: "Register on the relevant platform", desc: "For SAM.gov, UNGM, or the European Commission Participant Register, you will need to enroll using your DUNS as the base identifier." },
          { step: "5", title: "Submit your application on time", desc: "With your DUNS in hand and your profile up to date, you can submit your application with confidence. Always respect deadlines strictly." },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[#1E3A5F] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{step}</div>
            <div>
              <p className="font-semibold text-slate-800">{title}</p>
              <p className="text-sm text-slate-600 mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">The Role of DUNS in Supplier Verification</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Beyond its simple role as an identifier, the DUNS number is the key to your company&apos;s D&amp;B profile. This profile contains valuable information that public buyers use to evaluate applicants:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Legal information:</strong> existence, legal form, date of incorporation</li>
        <li><strong>Financial information:</strong> revenue, number of employees (when available)</li>
        <li><strong>Payment history:</strong> average payment terms (Paydex score)</li>
        <li><strong>Ownership structure:</strong> shareholders, subsidiaries, corporate groups</li>
        <li><strong>News:</strong> management changes, insolvency proceedings, etc.</li>
      </ul>

      <p className="text-slate-700 leading-relaxed mb-4">
        The more complete and positive your D&amp;B profile, the better your chances of being selected. This is an additional reason to get your DUNS and keep your profile up to date.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Concrete Example: Applying to a Horizon Europe Program</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Imagine a small technology company specializing in clean energy that wants to participate in a Horizon Europe research project in a consortium with German and Spanish partners. Here is what happens in practice:
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        The consortium coordinator asks all partners to register in the European Commission&apos;s Funding &amp; Tender Opportunities Portal. To register, each company must provide its DUNS number. The Commission uses this number to automatically look up legal information in the D&amp;B database and pre-fill the participant profile.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        If the company does not have a DUNS, it cannot register, and the consortium loses a potential partner. If it discovers the requirement late and opts for the free method (30 days), it risks missing the project submission deadline.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Related articles</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS Number: The Complete Guide 2026" },
            { slug: "verifier-numero-duns", title: "How to Verify a Company's DUNS Number" },
            { slug: "numero-duns-gratuit", title: "Free DUNS Number: How to Get One Without Paying" },
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
        <span className="text-slate-700">DUNS und öffentliche Ausschreibungen</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS-Nummer und Öffentliche Ausschreibungen: Ihr Schlüssel zu Internationalen Aufträgen
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Möchten Sie Aufträge von europäischen Institutionen, internationalen Organisationen oder der US-Bundesregierung gewinnen? Die DUNS-Nummer ist Ihr obligatorischer Pass für den Zugang zu diesen Märkten. Hier erfahren Sie alles, damit Sie keine Chancen wegen eines fehlenden Identifikators verpassen.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Warum Internationale Öffentliche Ausschreibungen DUNS Verlangen</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Große internationale öffentliche Organisationen — die Europäische Kommission, die Vereinten Nationen, die Weltbank, die NATO und die US-Bundesregierung — erhalten Bewerbungen von Unternehmen aus aller Welt. Sie benötigen einen zuverlässigen und standardisierten Weg, um jeden Bewerber zu identifizieren, seine rechtliche Existenz zu überprüfen und auf Informationen über seine finanzielle Gesundheit zuzugreifen.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die DUNS-Nummer ist der internationale Standard, der diesem Bedürfnis entspricht. Durch die Nutzung von D&amp;B als Referenzdatenbank können diese Organisationen sofort überprüfen, ob ein Unternehmen existiert, wo es ansässig ist, wer es leitet, und in einigen Fällen, wie seine Zahlungshistorie aussieht. Es ist eine Sicherheitsgarantie für öffentliche Auftraggeber.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Die Wichtigsten Ausschreibungsplattformen, die DUNS Verlangen</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Europäische Kommission — Horizon Europe und LIFE-Programme</p>
          <p className="text-sm text-slate-600">Die EK verlangt eine DUNS-Nummer für alle Teilnehmer an ihren Forschungs- und Innovationsförderungsprogrammen (Horizon Europe, LIFE usw.). Unternehmen müssen sich im Participant Register der Kommission registrieren, das die DUNS als Referenzkennung für nicht-europäische Unternehmen und den PIC (Participant Identification Code) für europäische Unternehmen verwendet — letzterer selbst mit dem DUNS verknüpft.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">SAM.gov — US-Bundesaufträge</p>
          <p className="text-sm text-slate-600">Um an die US-Bundesregierung zu verkaufen, muss sich jedes Unternehmen — einschließlich ausländischer Unternehmen — auf SAM.gov (System for Award Management) registrieren. Diese Plattform verwendet die DUNS-Nummer als primäre Kennung. Ohne DUNS ist eine Registrierung auf SAM.gov und damit der Zugang zu US-Bundesaufträgen unmöglich.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Vereinte Nationen — UNGM</p>
          <p className="text-sm text-slate-600">Der UN Global Marketplace (UNGM) ermöglicht es Unternehmen, sich als potenzielle Lieferanten für UN-Agenturen zu registrieren. Die Registrierung auf dem UNGM erfordert eine DUNS-Nummer für Organisationen.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">NATO — Verteidigungsaufträge</p>
          <p className="text-sm text-slate-600">NATO-Verteidigungs- und Sicherheitsaufträge erfordern systematisch eine DUNS-Nummer, zusätzlich zu verschiedenen Sicherheitszulassungen.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Weltbank und Entwicklungsinstitutionen</p>
          <p className="text-sm text-slate-600">Die Weltbank, die Afrikanische Entwicklungsbank, die Asiatische Entwicklungsbank und andere internationale Finanzinstitutionen verwenden DUNS, um Lieferanten in ihren Ausschreibungsverfahren zu identifizieren.</p>
        </div>
      </div>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">So Bewerben Sie Sich auf eine Internationale Ausschreibung mit Ihrer DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Hier sind die allgemeinen Schritte für die Verwendung Ihrer DUNS-Nummer bei der Bewerbung auf einen internationalen öffentlichen Auftrag:
      </p>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "DUNS-Nummer im Voraus beschaffen", desc: "Entdecken Sie nicht im letzten Moment, dass Sie eine DUNS benötigen. Holen Sie sie sich jetzt, noch bevor Sie eine bestimmte Ausschreibung identifiziert haben. Mit DUNS Verify dauert es 2 Minuten." },
          { step: "2", title: "D&B-Profil prüfen und aktualisieren", desc: "Stellen Sie sicher, dass die mit Ihrer DUNS in der D&B-Datenbank verknüpften Informationen korrekt und aktuell sind: Firmenname, Adresse, Geschäftsführer, Branche. Falsche Informationen können zur Ablehnung Ihrer Bewerbung führen." },
          { step: "3", title: "Ausschreibungsbedingungen sorgfältig lesen", desc: "Jede Ausschreibung kann eigene DUNS-Anforderungen haben: Einige verlangen nur die Nummer, andere können einen vollständigen D&B-Bericht oder eine Mindestbonität verlangen." },
          { step: "4", title: "Auf der relevanten Plattform registrieren", desc: "Für SAM.gov, UNGM oder das Participant Register der Europäischen Kommission müssen Sie sich mit Ihrer DUNS als Basiskennung anmelden." },
          { step: "5", title: "Bewerbung fristgerecht einreichen", desc: "Mit Ihrer DUNS in der Hand und einem aktuellen Profil können Sie Ihre Bewerbung vertrauensvoll einreichen. Halten Sie Fristen stets strikt ein." },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[#1E3A5F] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{step}</div>
            <div>
              <p className="font-semibold text-slate-800">{title}</p>
              <p className="text-sm text-slate-600 mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Die Rolle der DUNS bei der Lieferantenprüfung</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Über die einfache Rolle als Identifikator hinaus ist die DUNS-Nummer der Schlüssel zum D&amp;B-Profil Ihres Unternehmens. Dieses Profil enthält wertvolle Informationen, die öffentliche Auftraggeber zur Bewertung von Bewerbern verwenden:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Rechtliche Informationen:</strong> Existenz, Rechtsform, Gründungsdatum</li>
        <li><strong>Finanzielle Informationen:</strong> Umsatz, Mitarbeiterzahl (wenn verfügbar)</li>
        <li><strong>Zahlungshistorie:</strong> durchschnittliche Zahlungsfristen (Paydex-Score)</li>
        <li><strong>Eigentümerstruktur:</strong> Aktionäre, Tochtergesellschaften, Konzerne</li>
        <li><strong>Aktuelles:</strong> Führungswechsel, Insolvenzverfahren usw.</li>
      </ul>

      <p className="text-slate-700 leading-relaxed mb-4">
        Je vollständiger und positiver Ihr D&amp;B-Profil ist, desto besser sind Ihre Chancen, ausgewählt zu werden. Dies ist ein weiterer Grund, Ihre DUNS zu beschaffen und Ihr Profil aktuell zu halten.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Konkretes Beispiel: Bewerbung für ein Horizon Europe-Programm</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Stellen Sie sich ein kleines Unternehmen vor, das auf saubere Technologien spezialisiert ist und an einem Horizon Europe-Forschungsprojekt in einem Konsortium mit deutschen und spanischen Partnern teilnehmen möchte. So sieht das in der Praxis aus:
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Der Konsortialkoordinator fordert alle Partner auf, sich im Funding &amp; Tender Opportunities Portal der Europäischen Kommission zu registrieren. Zur Registrierung muss jedes Unternehmen seine DUNS-Nummer angeben. Die Kommission nutzt diese Nummer, um automatisch rechtliche Informationen in der D&amp;B-Datenbank abzurufen und das Teilnehmerprofil vorauszufüllen.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Hat das Unternehmen keine DUNS, kann es sich nicht registrieren und das Konsortium verliert einen potenziellen Partner. Entdeckt es die Anforderung spät und wählt die kostenlose Methode (30 Tage), riskiert es, die Einreichungsfrist für das Projekt zu verpassen.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Verwandte Artikel</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS-Nummer: Der vollständige Leitfaden 2026" },
            { slug: "verifier-numero-duns", title: "So überprüfen Sie die DUNS-Nummer eines Unternehmens" },
            { slug: "numero-duns-gratuit", title: "Kostenlose DUNS-Nummer: So erhalten Sie eine ohne zu zahlen" },
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
        <span className="text-slate-700">DUNS y licitaciones públicas</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Número DUNS y Licitaciones Públicas: Tu Pasaporte para los Contratos Internacionales
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        ¿Quieres ganar contratos con instituciones europeas, organizaciones internacionales o el gobierno de EE.UU.? El número DUNS es tu pasaporte obligatorio para acceder a estos mercados. Aquí encontrarás todo lo que necesitas saber para no perder ninguna oportunidad por falta de un identificador.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Por Qué las Licitaciones Públicas Internacionales Exigen el DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Las grandes organizaciones públicas internacionales — la Comisión Europea, las Naciones Unidas, el Banco Mundial, la OTAN y el gobierno federal de EE.UU. — reciben candidaturas de empresas de todo el mundo. Necesitan un método fiable y estandarizado para identificar a cada candidato, verificar su existencia legal y acceder a información sobre su salud financiera.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        El número DUNS es el estándar internacional que satisface esta necesidad. Al utilizar D&amp;B como base de referencia, estas organizaciones pueden verificar de inmediato que una empresa existe, dónde está ubicada, quién la dirige y, en algunos casos, cuál es su historial de pagos. Es una garantía de seguridad para los compradores públicos.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Las Principales Plataformas de Licitación que Exigen el DUNS</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Comisión Europea — Horizon Europe y Programas LIFE</p>
          <p className="text-sm text-slate-600">La CE exige un número DUNS para todos los participantes en sus programas de financiación de investigación e innovación (Horizon Europe, LIFE, etc.). Las empresas deben registrarse en el Participant Register de la Comisión, que utiliza el DUNS como identificador de referencia para entidades no europeas, y el PIC (Participant Identification Code) para entidades europeas, que a su vez está vinculado al DUNS.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">SAM.gov — Contratos del Gobierno Federal de EE.UU.</p>
          <p className="text-sm text-slate-600">Para vender al gobierno federal de EE.UU., cualquier empresa — incluyendo empresas extranjeras — debe registrarse en SAM.gov (System for Award Management). Esta plataforma utiliza el número DUNS como identificador principal. Sin DUNS, es imposible registrarse en SAM.gov y, por tanto, acceder a contratos federales estadounidenses.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Naciones Unidas — UNGM</p>
          <p className="text-sm text-slate-600">El Global Marketplace de la ONU (UNGM) permite a las empresas registrarse como proveedores potenciales de las agencias de la ONU. El registro en el UNGM requiere un número DUNS para las organizaciones.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">OTAN — Contratos de Defensa</p>
          <p className="text-sm text-slate-600">Los contratos de defensa y seguridad de la OTAN exigen sistemáticamente un número DUNS, además de diversas acreditaciones de seguridad.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Banco Mundial e Instituciones de Desarrollo</p>
          <p className="text-sm text-slate-600">El Banco Mundial, el Banco Africano de Desarrollo, el Banco Asiático de Desarrollo y otras instituciones financieras internacionales utilizan el DUNS para identificar a los proveedores en sus procesos de licitación.</p>
        </div>
      </div>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cómo Responder a una Licitación Internacional con tu DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Aquí están los pasos generales para usar tu número DUNS al presentarte a una licitación pública internacional:
      </p>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Obtener tu número DUNS con antelación", desc: "No descubras en el último momento que necesitas un DUNS. Consíguelo ahora, antes incluso de identificar una licitación específica. Con DUNS Verify, tarda 2 minutos." },
          { step: "2", title: "Verificar y actualizar tu perfil D&B", desc: "Asegúrate de que la información vinculada a tu DUNS en la base de datos D&B sea precisa y esté actualizada: razón social, dirección, directivo, sector. La información incorrecta puede llevar al rechazo de tu candidatura." },
          { step: "3", title: "Leer detenidamente los requisitos de la licitación", desc: "Cada licitación puede tener sus propios requisitos DUNS: algunos solo piden el número, otros pueden exigir un informe D&B completo o una puntuación crediticia mínima." },
          { step: "4", title: "Registrarse en la plataforma correspondiente", desc: "Para SAM.gov, UNGM o el Participant Register de la Comisión Europea, deberás registrarte usando tu DUNS como identificador base." },
          { step: "5", title: "Presentar tu candidatura dentro del plazo", desc: "Con tu DUNS en mano y tu perfil actualizado, puedes presentar tu candidatura con confianza. Respeta siempre estrictamente los plazos." },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[#1E3A5F] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{step}</div>
            <div>
              <p className="font-semibold text-slate-800">{title}</p>
              <p className="text-sm text-slate-600 mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">El Papel del DUNS en la Verificación de Proveedores</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Más allá de su simple papel como identificador, el número DUNS es la clave de acceso al perfil D&amp;B de tu empresa. Este perfil contiene información valiosa que los compradores públicos utilizan para evaluar a los candidatos:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Información legal:</strong> existencia, forma jurídica, fecha de constitución</li>
        <li><strong>Información financiera:</strong> facturación, número de empleados (cuando esté disponible)</li>
        <li><strong>Historial de pagos:</strong> plazos medios de pago (puntuación Paydex)</li>
        <li><strong>Estructura de propiedad:</strong> accionistas, filiales, grupos</li>
        <li><strong>Noticias:</strong> cambios de dirección, procedimientos concursales, etc.</li>
      </ul>

      <p className="text-slate-700 leading-relaxed mb-4">
        Cuanto más completo y positivo sea tu perfil D&amp;B, mejores serán tus posibilidades de ser seleccionado. Esta es otra razón más para obtener tu DUNS y mantener tu perfil actualizado.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Ejemplo Concreto: Candidatura a un Programa Horizon Europe</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Imagina una pequeña empresa especializada en tecnologías limpias que quiere participar en un proyecto de investigación Horizon Europe en consorcio con socios alemanes y españoles. Esto es lo que ocurre en la práctica:
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        El coordinador del consorcio pide a todos los socios que se registren en el Funding &amp; Tender Opportunities Portal de la Comisión Europea. Para registrarse, cada empresa debe proporcionar su número DUNS. La Comisión utiliza este número para buscar automáticamente la información legal en la base de datos D&amp;B y rellenar previamente el perfil del participante.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Si la empresa no tiene DUNS, no puede registrarse, y el consorcio pierde un socio potencial. Si descubre el requisito tarde y opta por el método gratuito (30 días), corre el riesgo de perder la fecha límite de presentación del proyecto.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Artículos relacionados</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Número DUNS: La Guía Completa 2026" },
            { slug: "verifier-numero-duns", title: "Cómo Verificar el Número DUNS de una Empresa" },
            { slug: "numero-duns-gratuit", title: "Número DUNS Gratuito: Cómo Obtenerlo sin Pagar" },
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
        <span className="text-slate-700">DUNS e appalti pubblici</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Numero DUNS e Appalti Pubblici: Il Tuo Passaporto per i Contratti Internazionali
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Vuoi aggiudicarti contratti con istituzioni europee, organizzazioni internazionali o il governo federale degli Stati Uniti? Il numero DUNS è il tuo passaporto obbligatorio per accedere a questi mercati. Ecco tutto ciò che devi sapere per non perdere opportunità a causa di un identificativo mancante.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Perché gli Appalti Pubblici Internazionali Richiedono il DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Le grandi organizzazioni pubbliche internazionali — la Commissione Europea, le Nazioni Unite, la Banca Mondiale, la NATO e il governo federale degli Stati Uniti — ricevono candidature da aziende di tutto il mondo. Hanno bisogno di un metodo affidabile e standardizzato per identificare ogni candidato, verificarne l&apos;esistenza legale e accedere a informazioni sulla sua salute finanziaria.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il numero DUNS è lo standard internazionale che risponde a questa esigenza. Utilizzando D&amp;B come database di riferimento, queste organizzazioni possono istantaneamente verificare che un&apos;azienda esiste, dove si trova, chi la dirige e, in alcuni casi, qual è la sua storia di pagamenti. È una garanzia di sicurezza per gli acquirenti pubblici.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Le Principali Piattaforme di Appalto che Richiedono il DUNS</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Commissione Europea — Programmi Horizon Europe e LIFE</p>
          <p className="text-sm text-slate-600">La CE richiede un numero DUNS per tutti i partecipanti ai suoi programmi di finanziamento della ricerca e dell&apos;innovazione (Horizon Europe, LIFE, ecc.). Le aziende devono registrarsi nel Participant Register della Commissione, che utilizza il DUNS come identificatore di riferimento per le entità non europee e il PIC (Participant Identification Code) per le entità europee, a sua volta collegato al DUNS.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">SAM.gov — Contratti del Governo Federale degli Stati Uniti</p>
          <p className="text-sm text-slate-600">Per vendere al governo federale degli Stati Uniti, qualsiasi azienda — comprese quelle straniere — deve registrarsi su SAM.gov (System for Award Management). Questa piattaforma utilizza il numero DUNS come identificatore principale. Senza DUNS è impossibile registrarsi su SAM.gov e quindi accedere ai contratti federali statunitensi.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Nazioni Unite — UNGM</p>
          <p className="text-sm text-slate-600">Il Global Marketplace dell&apos;ONU (UNGM) consente alle aziende di registrarsi come potenziali fornitori delle agenzie ONU. La registrazione all&apos;UNGM richiede un numero DUNS per le organizzazioni.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">NATO — Appalti di Difesa</p>
          <p className="text-sm text-slate-600">I contratti di difesa e sicurezza della NATO richiedono sistematicamente un numero DUNS, oltre a varie abilitazioni di sicurezza.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
          <p className="font-bold text-[#1E3A5F] mb-2">Banca Mondiale e Istituzioni di Sviluppo</p>
          <p className="text-sm text-slate-600">La Banca Mondiale, la Banca Africana di Sviluppo, la Banca Asiatica di Sviluppo e altre istituzioni finanziarie internazionali utilizzano il DUNS per identificare i fornitori nei loro processi di gara d&apos;appalto.</p>
        </div>
      </div>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Come Rispondere a un Bando Internazionale con il Tuo DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Ecco i passaggi generali per utilizzare il tuo numero DUNS quando ti candidi a un appalto pubblico internazionale:
      </p>

      <div className="space-y-4 mb-6">
        {[
          { step: "1", title: "Ottenere il numero DUNS in anticipo", desc: "Non scoprire all'ultimo momento di aver bisogno di un DUNS. Ottienilo adesso, prima ancora di identificare un bando specifico. Con DUNS Verify, ci vogliono 2 minuti." },
          { step: "2", title: "Verificare e aggiornare il profilo D&B", desc: "Assicurati che le informazioni associate al tuo DUNS nel database D&B siano accurate e aggiornate: ragione sociale, indirizzo, dirigente, settore. Le informazioni errate possono portare al rigetto della tua candidatura." },
          { step: "3", title: "Leggere attentamente i requisiti del bando", desc: "Ogni bando può avere requisiti DUNS propri: alcuni richiedono solo il numero, altri possono richiedere un rapporto D&B completo o un punteggio creditizio minimo." },
          { step: "4", title: "Registrarsi sulla piattaforma pertinente", desc: "Per SAM.gov, UNGM o il Participant Register della Commissione Europea, dovrai registrarti usando il tuo DUNS come identificatore base." },
          { step: "5", title: "Presentare la candidatura entro i termini", desc: "Con il tuo DUNS in mano e il profilo aggiornato, puoi presentare la tua candidatura con fiducia. Rispetta sempre rigorosamente le scadenze." },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-[#1E3A5F] text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{step}</div>
            <div>
              <p className="font-semibold text-slate-800">{title}</p>
              <p className="text-sm text-slate-600 mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Il Ruolo del DUNS nella Verifica dei Fornitori</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Oltre al semplice ruolo di identificatore, il numero DUNS è la chiave di accesso al profilo D&amp;B della tua azienda. Questo profilo contiene informazioni preziose che gli acquirenti pubblici utilizzano per valutare i candidati:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li><strong>Informazioni legali:</strong> esistenza, forma giuridica, data di costituzione</li>
        <li><strong>Informazioni finanziarie:</strong> fatturato, numero di dipendenti (quando disponibile)</li>
        <li><strong>Storico dei pagamenti:</strong> termini medi di pagamento (punteggio Paydex)</li>
        <li><strong>Struttura proprietaria:</strong> azionisti, filiali, gruppi aziendali</li>
        <li><strong>Notizie:</strong> cambiamenti di gestione, procedure concorsuali, ecc.</li>
      </ul>

      <p className="text-slate-700 leading-relaxed mb-4">
        Più il tuo profilo D&amp;B è completo e positivo, maggiori sono le tue possibilità di essere selezionato. Questo è un ulteriore motivo per ottenere il tuo DUNS e mantenere il profilo aggiornato.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Esempio Concreto: Candidatura a un Programma Horizon Europe</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Immagina una piccola azienda specializzata in tecnologie pulite che vuole partecipare a un progetto di ricerca Horizon Europe in un consorzio con partner tedeschi e spagnoli. Ecco cosa succede in pratica:
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il coordinatore del consorzio chiede a tutti i partner di registrarsi nel Funding &amp; Tender Opportunities Portal della Commissione Europea. Per registrarsi, ogni azienda deve fornire il proprio numero DUNS. La Commissione usa questo numero per cercare automaticamente le informazioni legali nel database D&amp;B e pre-compilare il profilo del partecipante.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Se l&apos;azienda non ha un DUNS, non può registrarsi e il consorzio perde un potenziale partner. Se scopre il requisito tardi e opta per il metodo gratuito (30 giorni), rischia di perdere la scadenza per la presentazione del progetto.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articoli correlati</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Numero DUNS: La Guida Completa 2026" },
            { slug: "verifier-numero-duns", title: "Come Verificare il Numero DUNS di un'Azienda" },
            { slug: "numero-duns-gratuit", title: "Numero DUNS Gratuito: Come Ottenerlo senza Pagare" },
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
