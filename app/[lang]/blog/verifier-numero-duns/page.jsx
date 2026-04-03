import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "verifier-numero-duns";
const AVAILABLE_LANGS = ['fr','en','de','es','it','nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];
const EN_FALLBACK = ['nl','pt','pl','sv','da','no','fi','cs','hu','ro','el'];

const META = {
  fr: { title: "Vérifier un Numéro DUNS : Comment Rechercher le D-U-N-S d'une Entreprise | DUNS Verify", description: "Comment vérifier le numéro DUNS d'une entreprise en ligne ? Méthodes de recherche, due diligence B2B et ce que le DUNS révèle sur une société." },
  en: { title: "How to Verify a Company's DUNS Number | DUNS Verify", description: "How to verify a company's DUNS number online: search methods, B2B due diligence, and what the DUNS reveals about a business." },
  de: { title: "Wie Man Die DUNS-Nummer Eines Unternehmens Überprüft | DUNS Verify", description: "Wie überprüft man die DUNS-Nummer eines Unternehmens online? Suchmethoden, B2B Due Diligence und was die DUNS-Nummer über ein Unternehmen verrät." },
  es: { title: "Cómo Verificar el Número DUNS de una Empresa | DUNS Verify", description: "Cómo verificar el número DUNS de una empresa en línea: métodos de búsqueda, due diligence B2B y lo que el DUNS revela sobre un negocio." },
  it: { title: "Come Verificare il Numero DUNS di un'Azienda | DUNS Verify", description: "Come verificare il numero DUNS di un'azienda online: metodi di ricerca, due diligence B2B e cosa rivela il DUNS su un'impresa." },
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
        <span className="text-slate-700">Vérifier un numéro DUNS</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Comment Vérifier le Numéro DUNS d'une Entreprise en Ligne
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Que vous souhaitiez connaître votre propre numéro DUNS ou vérifier celui d'un partenaire commercial potentiel, les méthodes disponibles sont variées. Ce guide vous explique comment effectuer cette vérification efficacement et ce que vous pouvez en apprendre.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Pourquoi vérifier le numéro DUNS d'une entreprise ?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        La vérification du numéro DUNS d'une entreprise répond à plusieurs besoins distincts selon la situation :
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { title: "Due diligence avant partenariat", desc: "Avant de signer un contrat ou d'engager une relation commerciale significative, vérifier le DUNS d'un partenaire permet de confirmer son existence légale et d'accéder à des informations financières de base." },
          { title: "Vérification fournisseur", desc: "Dans le cadre d'une politique d'homologation des fournisseurs, de nombreuses grandes entreprises exigent de leurs fournisseurs qu'ils aient un DUNS valide et à jour." },
          { title: "Connaître son propre DUNS", desc: "Si vous ignorez si votre entreprise possède déjà un numéro DUNS (attribué automatiquement par D&B), la première étape est de le vérifier avant d'en demander un nouveau." },
          { title: "Validation dans un formulaire", desc: "Certains appels d'offres ou formulaires d'inscription demandent la vérification du DUNS pour s'assurer que le numéro fourni est bien associé à l'entité candidate." },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-[#F8FAFC] rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2 text-sm">{title}</p>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 1 : DUNS Verify (rapide et simple)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        La façon la plus simple de vérifier un numéro DUNS est d'utiliser le service DUNS Verify. En saisissant le nom de l'entreprise et sa ville, notre système recherche automatiquement dans la base de données D&amp;B et vous retourne le numéro DUNS associé par email en moins de 2 minutes.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Ce service est particulièrement utile si vous voulez :
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Connaître votre propre numéro DUNS avant de commencer une démarche</li>
        <li>Vérifier rapidement qu'une entreprise possède bien un DUNS</li>
        <li>Obtenir un numéro DUNS si l'entreprise n'en a pas encore</li>
      </ul>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 2 : Le portail officiel D&amp;B</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet propose plusieurs outils en ligne pour rechercher des informations sur les entreprises. Le portail principal permet d'effectuer une recherche par nom d'entreprise, ville et pays pour trouver les entités enregistrées dans la base D&amp;B.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Pour accéder aux informations détaillées d'une entreprise (informations financières, score de crédit, historique), il faut généralement souscrire à l'un des abonnements payants D&amp;B. La simple vérification de l'existence d'un DUNS est souvent disponible gratuitement.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Méthode 3 : Altares (pour les entreprises françaises)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Altares est le partenaire officiel de D&amp;B en France. Leur portail permet de rechercher des informations sur les entreprises françaises, y compris leur numéro DUNS. Altares propose des services allant de la simple recherche d'identifiant à des rapports d'analyse approfondis.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Pour les entreprises françaises, Altares est souvent une bonne source d'information car elle dispose de données très complètes sur le tissu économique français, en plus des données D&amp;B internationales.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Ce que le numéro DUNS révèle sur une entreprise</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Le numéro DUNS en lui-même est un identifiant — c'est ce à quoi il donne accès qui est vraiment précieux. Voici les informations que vous pouvez obtenir via le profil D&amp;B d'une entreprise :
      </p>

      <div className="space-y-3 mb-6">
        {[
          { label: "Informations de base", items: ["Raison sociale officielle", "Adresse du siège social", "Forme juridique", "Date de création", "Code NAF/secteur d'activité"] },
          { label: "Informations structurelles", items: ["Effectifs (approximatifs)", "Structure du groupe (maison mère, filiales)", "Chiffre d'affaires déclaré (si public)", "Dirigeants principaux"] },
          { label: "Informations financières (abonnement)", items: ["Score Paydex (délais de paiement)", "Score de crédit D&B", "Limite de crédit recommandée", "Historique des incidents de paiement"] },
        ].map(({ label, items }) => (
          <div key={label} className="border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-[#1E3A5F] mb-2">{label}</p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-2">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Comment interpréter un numéro DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Le numéro DUNS en lui-même (9 chiffres) ne contient pas d'information encodée sur l'entreprise — contrairement au SIRET qui inclut le SIREN (et donc la date de création approximative pour les anciens numéros). Le DUNS est purement séquentiel.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Ce qui est important, c'est de vérifier que le numéro DUNS qu'on vous fournit correspond bien à la bonne entreprise. Des cas de fraude existent où des entreprises utilisent le DUNS d'une autre entité. La vérification consiste donc à s'assurer que le numéro DUNS est bien associé à la raison sociale, l'adresse et les informations de l'entreprise en question.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cas d'usage concrets</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-xl p-5">
          <p className="font-semibold text-slate-800 mb-1">Vérification avant signature de contrat</p>
          <p className="text-sm text-slate-600">Une entreprise de distribution reçoit une offre d'un nouveau fournisseur étranger. Avant de signer, elle vérifie le DUNS du fournisseur pour confirmer son existence légale et consulter son score de crédit. Le résultat : le fournisseur a un Paydex de 80/100, ce qui indique des paiements généralement dans les délais.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5">
          <p className="font-semibold text-slate-800 mb-1">Appel d'offres international</p>
          <p className="text-sm text-slate-600">Un acheteur public vérifie le DUNS de plusieurs candidats à un appel d'offres pour s'assurer que les numéros fournis correspondent bien aux entreprises candidates. Deux candidats fournissent des DUNS invalides et sont éliminés d'office.</p>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Pour plus d'informations sur l'histoire et le fonctionnement du système DUNS, consultez notre article sur <a href={`/${lang}/blog/duns-number-dun-bradstreet`} className="text-emerald-600 hover:underline">Dun &amp; Bradstreet et le DUNS Number</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articles connexes</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Numéro DUNS : Le Guide Complet 2026" },
            { slug: "numero-duns-definition", title: "Numéro DUNS : C'est Quoi ? Définition Simple" },
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
        <span className="text-slate-700">Verify a DUNS Number</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        How to Verify a Company's DUNS Number Online
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Whether you want to find your own DUNS number or verify that of a potential business partner, several methods are available. This guide explains how to perform this verification effectively and what you can learn from it.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Why Verify a Company's DUNS Number?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Verifying a company's DUNS number serves several distinct purposes depending on the situation:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { title: "Due diligence before partnership", desc: "Before signing a contract or entering a significant business relationship, verifying a partner's DUNS confirms their legal existence and provides access to basic financial information." },
          { title: "Supplier verification", desc: "As part of a supplier approval policy, many large companies require their suppliers to have a valid, up-to-date DUNS number." },
          { title: "Know your own DUNS", desc: "If you're unsure whether your company already has a DUNS number (automatically assigned by D&B), the first step is to verify this before requesting a new one." },
          { title: "Form validation", desc: "Some tenders or registration forms require DUNS verification to ensure the number provided is indeed associated with the applicant entity." },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-[#F8FAFC] rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2 text-sm">{title}</p>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Method 1: DUNS Verify (Fast and Simple)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The simplest way to verify a DUNS number is to use the DUNS Verify service. By entering the company name and city, our system automatically searches the D&amp;B database and returns the associated DUNS number by email in under 2 minutes.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        This service is particularly useful if you want to:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Find out your own DUNS number before starting a process</li>
        <li>Quickly verify that a company has a DUNS number</li>
        <li>Obtain a DUNS number if the company doesn't have one yet</li>
      </ul>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Method 2: The Official D&amp;B Portal</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet offers several online tools for researching company information. The main portal allows you to search by company name, city, and country to find entities registered in the D&amp;B database.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Accessing detailed information about a company (financial data, credit scores, history) generally requires subscribing to one of D&amp;B's paid plans. Simply verifying the existence of a DUNS number is often available for free.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Method 3: Local D&amp;B Partners</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        In many countries, D&amp;B works with official local partners who can help search for and verify DUNS numbers. These partners often have comprehensive knowledge of local business data, making them particularly valuable for verifying companies in specific markets.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        These local portals are often a good source of information for domestic companies, as they combine local registry data with D&amp;B's international database.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">What the DUNS Number Reveals About a Company</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The DUNS number itself is an identifier — it's what it gives access to that's truly valuable. Here's what you can obtain through a company's D&amp;B profile:
      </p>

      <div className="space-y-3 mb-6">
        {[
          { label: "Basic information", items: ["Official company name", "Registered address", "Legal structure", "Date of incorporation", "Industry / activity code"] },
          { label: "Structural information", items: ["Approximate headcount", "Group structure (parent company, subsidiaries)", "Declared turnover (if public)", "Key executives"] },
          { label: "Financial information (subscription required)", items: ["Paydex score (payment behavior)", "D&B credit score", "Recommended credit limit", "Payment incident history"] },
        ].map(({ label, items }) => (
          <div key={label} className="border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-[#1E3A5F] mb-2">{label}</p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-2">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">How to Interpret a DUNS Number</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The DUNS number itself (9 digits) contains no encoded information about the company — unlike some national identifiers. The DUNS is purely sequential: numbers are assigned in order of registration, with no information embedded in the digits themselves.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        What matters is verifying that the DUNS number you're given actually corresponds to the right company. Fraud cases do exist where companies use another entity's DUNS number. Verification therefore means ensuring the DUNS number is correctly associated with the company name, address, and information in question.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Concrete Use Cases</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-xl p-5">
          <p className="font-semibold text-slate-800 mb-1">Verification Before Signing a Contract</p>
          <p className="text-sm text-slate-600">A distribution company receives an offer from a new foreign supplier. Before signing, they verify the supplier's DUNS to confirm legal existence and consult their credit score. The result: the supplier has a Paydex score of 80/100, indicating generally on-time payments.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5">
          <p className="font-semibold text-slate-800 mb-1">International Tender</p>
          <p className="text-sm text-slate-600">A public procurement officer verifies the DUNS of several tender applicants to ensure the numbers provided correspond to the actual candidate companies. Two applicants submit invalid DUNS numbers and are immediately disqualified.</p>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        For more information on the history and operation of the DUNS system, read our article on <a href={`/${lang}/blog/duns-number-dun-bradstreet`} className="text-emerald-600 hover:underline">Dun &amp; Bradstreet and the DUNS Number</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Related Articles</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS Number: The Complete Guide 2026" },
            { slug: "numero-duns-definition", title: "DUNS Number: What Is It? Simple Definition" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet and the DUNS Number" },
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
        <span className="text-slate-700">DUNS-Nummer überprüfen</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Wie Man Die DUNS-Nummer Eines Unternehmens Online Überprüft
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Ob Sie Ihre eigene DUNS-Nummer herausfinden oder die eines potenziellen Geschäftspartners überprüfen möchten — es gibt verschiedene Methoden. Dieser Leitfaden erklärt, wie Sie diese Überprüfung effektiv durchführen und was Sie daraus lernen können.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Warum die DUNS-Nummer eines Unternehmens überprüfen?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die Überprüfung der DUNS-Nummer eines Unternehmens dient je nach Situation verschiedenen Zwecken:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { title: "Due Diligence vor einer Partnerschaft", desc: "Vor der Unterzeichnung eines Vertrags oder dem Eingehen einer bedeutenden Geschäftsbeziehung bestätigt die Überprüfung der DUNS eines Partners seine rechtliche Existenz und ermöglicht den Zugang zu grundlegenden Finanzinformationen." },
          { title: "Lieferantenüberprüfung", desc: "Im Rahmen einer Lieferantenzertifizierungspolitik verlangen viele große Unternehmen von ihren Lieferanten eine gültige und aktuelle DUNS-Nummer." },
          { title: "Eigene DUNS kennen", desc: "Wenn Sie nicht wissen, ob Ihr Unternehmen bereits eine DUNS-Nummer hat (automatisch von D&B vergeben), ist der erste Schritt, dies zu überprüfen, bevor Sie eine neue beantragen." },
          { title: "Formularvalidierung", desc: "Einige Ausschreibungen oder Anmeldeformulare erfordern eine DUNS-Verifizierung, um sicherzustellen, dass die angegebene Nummer tatsächlich mit dem Bewerberunternehmen verbunden ist." },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-[#F8FAFC] rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2 text-sm">{title}</p>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Methode 1: DUNS Verify (schnell und einfach)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die einfachste Methode zur Überprüfung einer DUNS-Nummer ist die Nutzung des DUNS Verify-Services. Durch Eingabe des Unternehmensnamens und der Stadt durchsucht unser System automatisch die D&amp;B-Datenbank und liefert die zugehörige DUNS-Nummer per E-Mail in weniger als 2 Minuten.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dieser Service ist besonders nützlich, wenn Sie:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Ihre eigene DUNS-Nummer herausfinden möchten, bevor Sie einen Prozess starten</li>
        <li>Schnell überprüfen möchten, ob ein Unternehmen eine DUNS-Nummer hat</li>
        <li>Eine DUNS-Nummer erhalten möchten, falls das Unternehmen noch keine hat</li>
      </ul>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Methode 2: Das offizielle D&amp;B-Portal</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet bietet mehrere Online-Tools zur Unternehmensrecherche an. Das Hauptportal ermöglicht die Suche nach Unternehmensname, Stadt und Land, um in der D&amp;B-Datenbank registrierte Unternehmen zu finden.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Der Zugriff auf detaillierte Unternehmensinformationen (Finanzdaten, Kredit-Score, Historie) erfordert in der Regel ein kostenpflichtiges D&amp;B-Abonnement. Die reine Überprüfung der Existenz einer DUNS-Nummer ist oft kostenlos verfügbar.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Methode 3: Lokale D&amp;B-Partner</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        In vielen Ländern arbeitet D&amp;B mit offiziellen lokalen Partnern zusammen, die bei der Suche und Überprüfung von DUNS-Nummern helfen können. Diese Partner verfügen oft über umfassende Kenntnisse lokaler Wirtschaftsdaten und sind besonders wertvoll für die Überprüfung von Unternehmen auf bestimmten Märkten.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Diese lokalen Portale sind oft eine gute Informationsquelle für inländische Unternehmen, da sie lokale Registerdaten mit der internationalen D&amp;B-Datenbank kombinieren.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Was die DUNS-Nummer über ein Unternehmen verrät</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die DUNS-Nummer selbst ist ein Bezeichner — es ist das, worauf sie Zugang gewährt, das wirklich wertvoll ist. Folgende Informationen können Sie über das D&amp;B-Profil eines Unternehmens erhalten:
      </p>

      <div className="space-y-3 mb-6">
        {[
          { label: "Basisinformationen", items: ["Offizieller Unternehmensname", "Geschäftsadresse", "Rechtsform", "Gründungsdatum", "Branche / Tätigkeitsbereich"] },
          { label: "Strukturinformationen", items: ["Ungefähre Mitarbeiterzahl", "Konzernstruktur (Muttergesellschaft, Tochterunternehmen)", "Gemeldeter Umsatz (soweit öffentlich)", "Hauptverantwortliche"] },
          { label: "Finanzinformationen (Abonnement erforderlich)", items: ["Paydex-Score (Zahlungsverhalten)", "D&B Kredit-Score", "Empfohlenes Kreditlimit", "Zahlungsvorfälle-Historie"] },
        ].map(({ label, items }) => (
          <div key={label} className="border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-[#1E3A5F] mb-2">{label}</p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-2">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Wie man eine DUNS-Nummer interpretiert</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Die DUNS-Nummer selbst (9 Ziffern) enthält keine codierten Informationen über das Unternehmen. Die DUNS ist rein sequenziell: Nummern werden in der Reihenfolge der Registrierung vergeben, wobei keine Informationen in den Ziffern selbst eingebettet sind.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Wichtig ist zu überprüfen, dass die angegebene DUNS-Nummer tatsächlich dem richtigen Unternehmen entspricht. Es gibt Betrugsfälle, bei denen Unternehmen die DUNS einer anderen Einheit verwenden. Die Überprüfung besteht daher darin sicherzustellen, dass die DUNS-Nummer korrekt mit dem Unternehmensnamen, der Adresse und den Informationen des betreffenden Unternehmens verbunden ist.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Konkrete Anwendungsfälle</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-xl p-5">
          <p className="font-semibold text-slate-800 mb-1">Überprüfung vor Vertragsunterzeichnung</p>
          <p className="text-sm text-slate-600">Ein Vertriebsunternehmen erhält ein Angebot von einem neuen ausländischen Lieferanten. Vor der Unterzeichnung überprüft es die DUNS des Lieferanten, um seine rechtliche Existenz zu bestätigen und seinen Kredit-Score einzusehen. Das Ergebnis: Der Lieferant hat einen Paydex-Score von 80/100, was auf generell pünktliche Zahlungen hindeutet.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5">
          <p className="font-semibold text-slate-800 mb-1">Internationale Ausschreibung</p>
          <p className="text-sm text-slate-600">Ein öffentlicher Auftraggeber überprüft die DUNS mehrerer Ausschreibungsbewerber, um sicherzustellen, dass die angegebenen Nummern tatsächlich den Bewerberunternehmen entsprechen. Zwei Bewerber reichen ungültige DUNS-Nummern ein und werden sofort disqualifiziert.</p>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Für weitere Informationen zur Geschichte und Funktionsweise des DUNS-Systems lesen Sie unseren Artikel über <a href={`/${lang}/blog/duns-number-dun-bradstreet`} className="text-emerald-600 hover:underline">Dun &amp; Bradstreet und die DUNS-Nummer</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Verwandte Artikel</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS-Nummer: Der vollständige Leitfaden 2026" },
            { slug: "numero-duns-definition", title: "DUNS-Nummer: Was Ist Das? Einfache Definition" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet und die DUNS-Nummer" },
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
        <span className="text-slate-700">Verificar número DUNS</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Cómo Verificar el Número DUNS de una Empresa en Línea
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Ya sea que quieras encontrar tu propio número DUNS o verificar el de un posible socio comercial, existen varios métodos disponibles. Esta guía explica cómo realizar esta verificación de forma eficaz y qué puedes aprender con ella.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">¿Por Qué Verificar el Número DUNS de una Empresa?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        La verificación del número DUNS de una empresa responde a varias necesidades distintas según la situación:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { title: "Due diligence antes de una asociación", desc: "Antes de firmar un contrato o iniciar una relación comercial importante, verificar el DUNS de un socio confirma su existencia legal y proporciona acceso a información financiera básica." },
          { title: "Verificación de proveedores", desc: "Como parte de una política de homologación de proveedores, muchas grandes empresas exigen a sus proveedores que tengan un número DUNS válido y actualizado." },
          { title: "Conocer tu propio DUNS", desc: "Si no sabes si tu empresa ya tiene un número DUNS (asignado automáticamente por D&B), el primer paso es verificarlo antes de solicitar uno nuevo." },
          { title: "Validación en un formulario", desc: "Algunas licitaciones o formularios de inscripción requieren la verificación del DUNS para garantizar que el número proporcionado está efectivamente asociado a la entidad candidata." },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-[#F8FAFC] rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2 text-sm">{title}</p>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Método 1: DUNS Verify (Rápido y Sencillo)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        La forma más sencilla de verificar un número DUNS es utilizar el servicio DUNS Verify. Introduciendo el nombre de la empresa y su ciudad, nuestro sistema busca automáticamente en la base de datos de D&amp;B y te devuelve el número DUNS asociado por correo electrónico en menos de 2 minutos.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Este servicio es especialmente útil si quieres:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Conocer tu propio número DUNS antes de iniciar un trámite</li>
        <li>Verificar rápidamente que una empresa tiene un número DUNS</li>
        <li>Obtener un número DUNS si la empresa aún no tiene uno</li>
      </ul>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Método 2: El Portal Oficial de D&amp;B</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet ofrece varias herramientas en línea para buscar información sobre empresas. El portal principal permite realizar búsquedas por nombre de empresa, ciudad y país para encontrar entidades registradas en la base de datos de D&amp;B.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Para acceder a información detallada de una empresa (datos financieros, puntuación de crédito, historial) generalmente es necesario suscribirse a uno de los planes de pago de D&amp;B. La simple verificación de la existencia de un DUNS suele estar disponible de forma gratuita.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Método 3: Socios Locales de D&amp;B</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        En muchos países, D&amp;B trabaja con socios locales oficiales que pueden ayudar a buscar y verificar números DUNS. Estos socios suelen tener un conocimiento exhaustivo de los datos empresariales locales, lo que los hace especialmente valiosos para verificar empresas en mercados específicos.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Estos portales locales suelen ser una buena fuente de información para empresas nacionales, ya que combinan datos del registro local con la base de datos internacional de D&amp;B.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Lo que el Número DUNS Revela sobre una Empresa</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        El número DUNS en sí es un identificador — lo que verdaderamente es valioso es a qué da acceso. Aquí está la información que puedes obtener a través del perfil D&amp;B de una empresa:
      </p>

      <div className="space-y-3 mb-6">
        {[
          { label: "Información básica", items: ["Nombre oficial de la empresa", "Domicilio social", "Forma jurídica", "Fecha de constitución", "Código de actividad / sector"] },
          { label: "Información estructural", items: ["Número aproximado de empleados", "Estructura del grupo (empresa matriz, filiales)", "Facturación declarada (si es pública)", "Principales directivos"] },
          { label: "Información financiera (requiere suscripción)", items: ["Puntuación Paydex (comportamiento de pago)", "Score de crédito D&B", "Límite de crédito recomendado", "Historial de incidencias de pago"] },
        ].map(({ label, items }) => (
          <div key={label} className="border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-[#1E3A5F] mb-2">{label}</p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-2">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cómo Interpretar un Número DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        El número DUNS en sí mismo (9 dígitos) no contiene información codificada sobre la empresa. El DUNS es puramente secuencial: los números se asignan en orden de registro, sin ninguna información incorporada en los propios dígitos.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Lo importante es verificar que el número DUNS que te proporcionan corresponde efectivamente a la empresa correcta. Existen casos de fraude en los que empresas utilizan el DUNS de otra entidad. La verificación consiste por tanto en asegurarse de que el número DUNS está correctamente asociado a la denominación social, la dirección y los datos de la empresa en cuestión.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Casos de Uso Concretos</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-xl p-5">
          <p className="font-semibold text-slate-800 mb-1">Verificación antes de firmar un contrato</p>
          <p className="text-sm text-slate-600">Una empresa distribuidora recibe una oferta de un nuevo proveedor extranjero. Antes de firmar, verifica el DUNS del proveedor para confirmar su existencia legal y consultar su puntuación de crédito. El resultado: el proveedor tiene un Paydex de 80/100, lo que indica pagos generalmente dentro de plazo.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5">
          <p className="font-semibold text-slate-800 mb-1">Licitación internacional</p>
          <p className="text-sm text-slate-600">Un comprador público verifica el DUNS de varios candidatos a una licitación para asegurarse de que los números proporcionados corresponden a las empresas candidatas. Dos candidatos presentan números DUNS no válidos y son eliminados de inmediato.</p>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Para más información sobre la historia y el funcionamiento del sistema DUNS, consulta nuestro artículo sobre <a href={`/${lang}/blog/duns-number-dun-bradstreet`} className="text-emerald-600 hover:underline">Dun &amp; Bradstreet y el Número DUNS</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Artículos Relacionados</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Número DUNS: La Guía Completa 2026" },
            { slug: "numero-duns-definition", title: "Número DUNS: ¿Qué es? Definición Simple" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet y el Número DUNS" },
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
        <span className="text-slate-700">Verificare un numero DUNS</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        Come Verificare il Numero DUNS di un'Azienda Online
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Che tu voglia trovare il tuo numero DUNS o verificare quello di un potenziale partner commerciale, esistono diversi metodi disponibili. Questa guida spiega come effettuare questa verifica in modo efficace e cosa puoi imparare da essa.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Perché Verificare il Numero DUNS di un'Azienda?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        La verifica del numero DUNS di un'azienda risponde a diverse esigenze distinte a seconda della situazione:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { title: "Due diligence prima di una partnership", desc: "Prima di firmare un contratto o avviare una relazione commerciale importante, verificare il DUNS di un partner conferma la sua esistenza legale e fornisce accesso a informazioni finanziarie di base." },
          { title: "Verifica fornitori", desc: "Nell'ambito di una politica di omologazione dei fornitori, molte grandi aziende richiedono ai propri fornitori di avere un numero DUNS valido e aggiornato." },
          { title: "Conoscere il proprio DUNS", desc: "Se non sai se la tua azienda ha già un numero DUNS (assegnato automaticamente da D&B), il primo passo è verificarlo prima di richiederne uno nuovo." },
          { title: "Validazione in un modulo", desc: "Alcuni bandi o moduli di iscrizione richiedono la verifica del DUNS per assicurarsi che il numero fornito sia effettivamente associato all'ente candidato." },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-[#F8FAFC] rounded-xl p-5">
            <p className="font-semibold text-slate-800 mb-2 text-sm">{title}</p>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Metodo 1: DUNS Verify (Veloce e Semplice)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il modo più semplice per verificare un numero DUNS è utilizzare il servizio DUNS Verify. Inserendo il nome dell'azienda e la città, il nostro sistema ricerca automaticamente nel database di D&amp;B e ti restituisce il numero DUNS associato via email in meno di 2 minuti.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Questo servizio è particolarmente utile se vuoi:
      </p>
      <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
        <li>Conoscere il tuo numero DUNS prima di avviare una pratica</li>
        <li>Verificare rapidamente che un'azienda abbia un numero DUNS</li>
        <li>Ottenere un numero DUNS se l'azienda non ne ha ancora uno</li>
      </ul>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Metodo 2: Il Portale Ufficiale D&amp;B</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Dun &amp; Bradstreet offre diversi strumenti online per ricercare informazioni sulle aziende. Il portale principale consente di effettuare ricerche per nome di azienda, città e paese per trovare le entità registrate nel database D&amp;B.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        L'accesso a informazioni dettagliate su un'azienda (dati finanziari, credit score, storico) richiede generalmente la sottoscrizione di uno dei piani a pagamento di D&amp;B. La semplice verifica dell'esistenza di un DUNS è spesso disponibile gratuitamente.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Metodo 3: Partner Locali D&amp;B</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        In molti paesi, D&amp;B collabora con partner locali ufficiali che possono aiutare nella ricerca e verifica dei numeri DUNS. Questi partner hanno spesso una conoscenza approfondita dei dati aziendali locali, rendendoli particolarmente preziosi per verificare aziende in mercati specifici.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Questi portali locali sono spesso una buona fonte di informazioni per le aziende nazionali, poiché combinano i dati del registro locale con il database internazionale di D&amp;B.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Cosa Rivela il Numero DUNS su un'Azienda</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il numero DUNS in sé è un identificatore — è ciò a cui dà accesso che è davvero prezioso. Ecco le informazioni che puoi ottenere tramite il profilo D&amp;B di un'azienda:
      </p>

      <div className="space-y-3 mb-6">
        {[
          { label: "Informazioni di base", items: ["Denominazione sociale ufficiale", "Indirizzo della sede legale", "Forma giuridica", "Data di costituzione", "Codice attività / settore"] },
          { label: "Informazioni strutturali", items: ["Numero approssimativo di dipendenti", "Struttura del gruppo (capogruppo, filiali)", "Fatturato dichiarato (se pubblico)", "Principali dirigenti"] },
          { label: "Informazioni finanziarie (abbonamento richiesto)", items: ["Punteggio Paydex (comportamento nei pagamenti)", "Credit score D&B", "Limite di credito raccomandato", "Storico degli incidenti di pagamento"] },
        ].map(({ label, items }) => (
          <div key={label} className="border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-[#1E3A5F] mb-2">{label}</p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-2">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Come Interpretare un Numero DUNS</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Il numero DUNS in sé (9 cifre) non contiene informazioni codificate sull'azienda. Il DUNS è puramente sequenziale: i numeri vengono assegnati in ordine di registrazione, senza alcuna informazione incorporata nelle cifre stesse.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Ciò che è importante è verificare che il numero DUNS fornito corrisponda effettivamente all'azienda giusta. Esistono casi di frode in cui aziende utilizzano il DUNS di un'altra entità. La verifica consiste quindi nel garantire che il numero DUNS sia correttamente associato alla ragione sociale, all'indirizzo e alle informazioni dell'azienda in questione.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Casi d'Uso Concreti</h2>

      <div className="space-y-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-xl p-5">
          <p className="font-semibold text-slate-800 mb-1">Verifica prima della firma di un contratto</p>
          <p className="text-sm text-slate-600">Un'azienda di distribuzione riceve un'offerta da un nuovo fornitore straniero. Prima di firmare, verifica il DUNS del fornitore per confermare la sua esistenza legale e consultare il suo credit score. Il risultato: il fornitore ha un Paydex di 80/100, il che indica pagamenti generalmente nei tempi previsti.</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-xl p-5">
          <p className="font-semibold text-slate-800 mb-1">Gara d'appalto internazionale</p>
          <p className="text-sm text-slate-600">Un ente pubblico verifica il DUNS di diversi candidati a una gara d'appalto per assicurarsi che i numeri forniti corrispondano alle aziende candidate. Due candidati presentano numeri DUNS non validi e vengono immediatamente eliminati.</p>
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Per ulteriori informazioni sulla storia e il funzionamento del sistema DUNS, leggi il nostro articolo su <a href={`/${lang}/blog/duns-number-dun-bradstreet`} className="text-emerald-600 hover:underline">Dun &amp; Bradstreet e il Numero DUNS</a>.
      </p>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Articoli Correlati</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "Numero DUNS: La Guida Completa 2026" },
            { slug: "numero-duns-definition", title: "Numero DUNS: Cos'è? Definizione Semplice" },
            { slug: "duns-number-dun-bradstreet", title: "Dun & Bradstreet e il Numero DUNS" },
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
