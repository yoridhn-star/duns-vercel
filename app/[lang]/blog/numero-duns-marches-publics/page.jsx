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
    title: "Numéro DUNS et Marchés Publics : Pourquoi Il Est Indispensable | DUNS Verify",
    description: "Le numéro DUNS est obligatoire pour répondre aux marchés publics internationaux (UE, ONU, SAM.gov). Guide complet pour les entreprises françaises.",
    alternates: { canonical: `${SITE_URL}/${lang}/blog/numero-duns-marches-publics` },
    openGraph: {
      title: "Numéro DUNS et Marchés Publics Internationaux",
      description: "Pourquoi le DUNS est indispensable pour les marchés publics européens et internationaux.",
      url: `${SITE_URL}/${lang}/blog/numero-duns-marches-publics`,
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
    headline: "Numéro DUNS et Marchés Publics : Votre Sésame pour l'International",
    description: "Guide complet sur le rôle du numéro DUNS dans les marchés publics internationaux.",
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-01-01",
    dateModified: "2026-04-01",
    url: `${SITE_URL}/${lang}/blog/numero-duns-marches-publics`,
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
              <span className="text-slate-700">DUNS et marchés publics</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
              Numéro DUNS et Marchés Publics : Votre Sésame pour l'International
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Vous cherchez à décrocher des contrats avec des institutions européennes, des organisations internationales ou le gouvernement américain ? Le numéro DUNS est votre passeport obligatoire pour accéder à ces marchés. Voici tout ce que vous devez savoir pour ne pas laisser passer des opportunités à cause d'un identifiant manquant.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Pourquoi les marchés publics internationaux exigent le DUNS</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Les grandes organisations publiques internationales — Commission Européenne, Nations Unies, Banque Mondiale, OTAN, ou encore le gouvernement fédéral américain — reçoivent des candidatures d'entreprises du monde entier. Elles ont besoin d'un moyen fiable et standardisé pour identifier chaque candidat, vérifier son existence légale et accéder à des informations sur sa santé financière.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le numéro DUNS est le standard international qui répond à ce besoin. En utilisant D&amp;B comme base de référence, ces organisations peuvent instantanément vérifier qu'une entreprise existe, où elle est localisée, qui la dirige, et dans certains cas, quel est son historique de paiements. C'est une garantie de sécurité pour les acheteurs publics.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Les principaux marchés qui exigent le DUNS</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
                <p className="font-bold text-[#1E3A5F] mb-2">Commission Européenne — Programmes Horizon et LIFE</p>
                <p className="text-sm text-slate-600">La CE exige un numéro DUNS pour tous les participants aux programmes de financement de la recherche et de l'innovation (Horizon Europe, LIFE, etc.). Les entreprises doivent s'enregistrer dans le Participant Register de la Commission, qui utilise le DUNS comme identifiant de référence pour les entités non-européennes, et le PIC (Participant Identification Code) pour les entités européennes — lui-même lié au DUNS.</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
                <p className="font-bold text-[#1E3A5F] mb-2">SAM.gov — Marchés du gouvernement américain</p>
                <p className="text-sm text-slate-600">Pour vendre au gouvernement fédéral américain, toute entreprise — y compris les entreprises étrangères — doit s'enregistrer sur SAM.gov (System for Award Management). Cette plateforme utilise le numéro DUNS comme identifiant primaire. Sans DUNS, il est impossible de s'inscrire sur SAM.gov et donc d'accéder aux contrats fédéraux américains.</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
                <p className="font-bold text-[#1E3A5F] mb-2">Nations Unies — UNGM</p>
                <p className="text-sm text-slate-600">Le Global Marketplace de l'ONU (UNGM) permet aux entreprises de se référencer comme fournisseurs potentiels des agences onusiennes. L'enregistrement sur UNGM nécessite un numéro DUNS pour les organisations.</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
                <p className="font-bold text-[#1E3A5F] mb-2">OTAN — Marchés de défense</p>
                <p className="text-sm text-slate-600">Les marchés liés à la défense et à la sécurité de l'OTAN exigent systématiquement un numéro DUNS, en plus de diverses accréditations de sécurité.</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-5 border-l-4 border-[#1E3A5F]">
                <p className="font-bold text-[#1E3A5F] mb-2">Banque Mondiale et institutions de développement</p>
                <p className="text-sm text-slate-600">La Banque Mondiale, la Banque Africaine de Développement, la Banque Asiatique de Développement et d'autres institutions financières internationales utilisent le DUNS pour identifier les fournisseurs dans leurs processus d'appel d'offres.</p>
              </div>
            </div>

            <BlogCTA lang={lang} />

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Comment répondre à un appel d'offres international avec votre DUNS</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Voici les étapes générales pour utiliser votre numéro DUNS dans le cadre d'une candidature à un marché public international :
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
              Au-delà du simple rôle d'identifiant, le numéro DUNS est la clé d'accès au profil D&amp;B de votre entreprise. Ce profil contient des informations précieuses que les acheteurs publics utilisent pour évaluer les candidats :
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6 ml-2">
              <li><strong>Informations légales :</strong> existence, forme juridique, date de création</li>
              <li><strong>Informations financières :</strong> chiffre d'affaires, nombre d'employés (si disponibles)</li>
              <li><strong>Historique de paiements :</strong> délais de paiement moyens (Paydex score)</li>
              <li><strong>Liens capitalistiques :</strong> actionnaires, filiales, groupes</li>
              <li><strong>Actualités :</strong> changements de direction, procédures collectives, etc.</li>
            </ul>

            <p className="text-slate-700 leading-relaxed mb-4">
              Plus votre profil D&amp;B est complet et positif, plus vous avez de chances d'être sélectionné. C'est une raison supplémentaire d'obtenir votre DUNS et de maintenir votre profil à jour.
            </p>

            <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Exemple concret : candidature à un programme Horizon Europe</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Imaginez une PME française spécialisée dans les technologies propres qui souhaite participer à un projet de recherche Horizon Europe en consortium avec des partenaires allemands et espagnols. Voici ce qui se passe concrètement :
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Le coordinateur du consortium demande à tous les partenaires de s'enregistrer dans le Funding &amp; Tender Opportunities Portal de la Commission Européenne. Pour s'inscrire, chaque entreprise doit fournir son numéro DUNS. La Commission utilise ce numéro pour rechercher automatiquement les informations légales dans la base D&amp;B et pré-remplir le profil du participant.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Si la PME française n'a pas de DUNS, elle ne peut pas s'inscrire, et le consortium perd un partenaire potentiel. Si elle découvre l'exigence tardivement et opte pour la méthode gratuite (30 jours), elle risque de manquer la date limite de soumission du projet.
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
          </div>
        </main>

        <BlogFooter lang={lang} />
      </div>
    </>
  );
}
