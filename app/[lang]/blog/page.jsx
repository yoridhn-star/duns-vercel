import { ArrowRight } from "lucide-react";
import BlogHeader from "../../_components/BlogHeader";
import BlogFooter from "../../_components/BlogFooter";
import { LOCALES } from "../../i18n";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Blog DUNS Verify — Guides et Conseils sur le Numéro DUNS",
    description: "Découvrez nos guides complets sur le numéro DUNS : définition, obtention, utilité pour Apple Developer, Google Play, marchés publics et plus encore.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog`,
    },
    openGraph: {
      title: "Blog DUNS Verify — Guides et Conseils sur le Numéro DUNS",
      description: "Guides complets sur le numéro DUNS en France et en Europe.",
      url: `${SITE_URL}/${lang}/blog`,
      siteName: "DUNS Verify",
      type: "website",
    },
  };
}

const ARTICLES = [
  {
    slug: "numero-duns",
    title: "Numéro DUNS : Le Guide Complet 2026",
    excerpt: "Tout ce que vous devez savoir sur le numéro DUNS : définition, histoire, utilité et comment l'obtenir rapidement en France.",
  },
  {
    slug: "numero-duns-definition",
    title: "Numéro DUNS : C'est Quoi ? Définition Simple",
    excerpt: "Une explication claire et accessible du numéro DUNS, le passeport international de votre entreprise, et comment il se compare au SIRET.",
  },
  {
    slug: "obtenir-numero-duns-france",
    title: "Comment Obtenir un Numéro DUNS en France",
    excerpt: "Guide étape par étape pour obtenir votre numéro DUNS en France : méthodes, délais, coûts comparés entre les différentes options.",
  },
  {
    slug: "numero-duns-gratuit",
    title: "Numéro DUNS Gratuit : Comment l'Obtenir Sans Payer",
    excerpt: "Toutes les méthodes pour obtenir un numéro DUNS gratuitement, les délais à prévoir et quand il vaut mieux opter pour un service payant.",
  },
  {
    slug: "numero-duns-apple-developer",
    title: "Numéro DUNS pour Apple Developer : Guide Complet",
    excerpt: "Pourquoi Apple exige un numéro DUNS, comment l'obtenir rapidement pour publier sur l'App Store et les pièges à éviter.",
  },
  {
    slug: "difference-duns-siret",
    title: "Différence entre DUNS et SIRET : Tout Comprendre",
    excerpt: "Tableau comparatif complet entre DUNS et SIRET : portée, attribution, usage. Découvrez lequel vous faut-il selon votre situation.",
  },
  {
    slug: "numero-duns-google-play",
    title: "Numéro DUNS pour Google Play Store : Guide Développeur",
    excerpt: "La nouvelle exigence Google pour les développeurs Android : pourquoi le DUNS est obligatoire et comment le récupérer rapidement.",
  },
  {
    slug: "numero-duns-marches-publics",
    title: "Numéro DUNS et Marchés Publics Internationaux",
    excerpt: "Le numéro DUNS est indispensable pour répondre aux marchés publics européens et internationaux. Voici tout ce que vous devez savoir.",
  },
  {
    slug: "verifier-numero-duns",
    title: "Comment Vérifier le Numéro DUNS d'une Entreprise",
    excerpt: "Les méthodes pour rechercher et vérifier le numéro DUNS d'une entreprise en ligne, et ce que cette vérification révèle.",
  },
  {
    slug: "duns-number-dun-bradstreet",
    title: "Dun & Bradstreet et le DUNS Number : Tout Comprendre",
    excerpt: "L'histoire fascinante de Dun & Bradstreet, fondée en 1841, et la création du DUNS Number en 1962 qui relie aujourd'hui 455 millions d'entreprises.",
  },
];

export default async function BlogIndex({ params }) {
  const { lang } = await params;

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader lang={lang} />

      <main className="flex-1 py-16 px-4 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <nav className="text-sm text-slate-500 mb-4">
              <a href={`/${lang}`} className="hover:text-emerald-600 transition-colors">Accueil</a>
              <span className="mx-2">›</span>
              <span className="text-slate-700">Blog</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-[#1E3A5F] mb-4">Blog DUNS Verify</h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Guides pratiques et explications complètes sur le numéro DUNS : à quoi il sert, comment l'obtenir et pourquoi il est indispensable pour votre activité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {ARTICLES.map((article) => (
              <a
                key={article.slug}
                href={`/${lang}/blog/${article.slug}`}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col gap-3 group"
              >
                <h2 className="text-lg font-bold text-[#1E3A5F] group-hover:text-emerald-700 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-600 flex-1 leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 group-hover:gap-2.5 transition-all">
                  Lire l'article <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <BlogFooter lang={lang} />
    </div>
  );
}
