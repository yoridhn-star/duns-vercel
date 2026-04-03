import { ShieldCheck, Zap, Globe, Handshake, Building, Smartphone, Search, Loader, CheckCircle } from "lucide-react";
import HomeForm from "./_components/HomeForm";
import FaqAccordion from "./_components/FaqAccordion";

const FAQ_ITEMS = [
  {
    q: "Qu'est-ce qu'un numéro D-U-N-S ?",
    a: "Le numéro D-U-N-S (Data Universal Numbering System) est un identifiant unique à 9 chiffres attribué par Dun & Bradstreet à chaque entité commerciale dans le monde.",
  },
  {
    q: "Combien de temps prend la recherche ?",
    a: "La recherche prend généralement entre 30 secondes et 2 minutes selon la charge du serveur.",
  },
  {
    q: "Combien coûte le service ?",
    a: "La recherche de numéro D-U-N-S est disponible pour 4,99 €. Le paiement est sécurisé par Stripe et vous obtenez votre résultat instantanément après confirmation.",
  },
  {
    q: "Que se passe-t-il si mon entreprise n'a pas de numéro DUNS ?",
    a: "Si votre entreprise n'est pas trouvée, vous pouvez en demander un gratuitement sur le site officiel de Dun & Bradstreet.",
  },
  {
    q: "Quelle est la différence entre le DUNS et le SIRET ?",
    a: "Le SIRET est un identifiant national français attribué par l'INSEE. Le numéro D-U-N-S est un identifiant international attribué par Dun & Bradstreet, reconnu dans plus de 200 pays. Les deux sont complémentaires : le SIRET pour la France, le DUNS pour l'international.",
  },
  {
    q: "Le numéro DUNS est-il obligatoire pour Apple Developer ?",
    a: "Oui, Apple exige un numéro D-U-N-S valide pour toute inscription au Apple Developer Program ou au Apple Developer Enterprise Program en tant qu'organisation. Sans numéro DUNS, vous ne pouvez pas publier d'applications sur l'App Store au nom de votre entreprise.",
  },
  {
    q: "Comment obtenir un numéro DUNS en France ?",
    a: "La plupart des entreprises françaises enregistrées au registre du commerce possèdent déjà un numéro D-U-N-S. Utilisez notre service pour le retrouver instantanément en 2 minutes au lieu d'attendre 30 jours via le processus officiel.",
  },
];

const WHY_DUNS = [
  {
    Icon: Globe,
    title: "Appels d'offres internationaux",
    desc: "Le numéro DUNS est obligatoire pour répondre aux marchés publics européens, aux appels d'offres internationaux et aux contrats avec le gouvernement américain via SAM.gov.",
    ariaLabel: "Icône marchés publics et appels d'offres internationaux",
  },
  {
    Icon: Handshake,
    title: "Partenariats B2B",
    desc: "De nombreuses multinationales exigent un numéro D-U-N-S pour référencer et vérifier leurs fournisseurs internationaux.",
    ariaLabel: "Icône partenariats B2B et fournisseurs internationaux",
  },
  {
    Icon: Building,
    title: "Crédibilité financière",
    desc: "Le numéro DUNS renforce la crédibilité financière de votre entreprise auprès de vos partenaires, banques et investisseurs.",
    ariaLabel: "Icône crédibilité financière entreprise",
  },
  {
    Icon: Smartphone,
    title: "Apple & Google",
    desc: "Le numéro D-U-N-S est requis pour publier des applications sur l'App Store (Apple Developer Program) et le Google Play Store en tant qu'organisation.",
    ariaLabel: "Icône Apple Developer Program et Google Play Store",
  },
];

const STEPS = [
  { n: 1, Icon: Search,       title: "Entrez vos informations",  desc: "Saisissez le nom de votre entreprise, la ville, le pays et votre email pour rechercher votre numéro DUNS." },
  { n: 2, Icon: Loader,       title: "Recherche automatique",    desc: "Notre système interroge les bases de données internationales. Résultat en moins de 2 minutes." },
  { n: 3, Icon: CheckCircle,  title: "Recevez votre DUNS",       desc: "Votre numéro D-U-N-S s'affiche à l'écran et vous est envoyé par email." },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>

      <div className="min-h-screen flex flex-col">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
            <a href="#formulaire" className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#1E3A5F]" aria-label="DUNS Verify - Vérification numéro DUNS" />
              <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">DUNS</span>
              <span className="text-xl font-normal text-slate-500">Verify</span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#comment-ca-marche" className="hover:text-slate-900 transition-colors">Comment ça marche</a>
              <a href="#pourquoi-le-duns"  className="hover:text-slate-900 transition-colors">Pourquoi le DUNS</a>
              <a href="#faq"               className="hover:text-slate-900 transition-colors">FAQ</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">

          {/* ── Hero + Form ─────────────────────────────────────────────────── */}
          <section id="formulaire" className="bg-white py-20 px-4">
            <div className="max-w-2xl mx-auto text-center">

              <div className="inline-flex items-center gap-1.5 bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span>Résultat en 2 min — au lieu de 30 jours</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E3A5F] leading-tight mb-5">
                Obtenez votre numéro{" "}
                <span className="text-emerald-500">D-U-N-S</span>{" "}
                en 2 minutes
              </h1>

              <p className="text-lg text-slate-500 mb-10">
                Plus besoin d&apos;attendre 30 jours. Trouvez et vérifiez le numéro D-U-N-S de votre entreprise immédiatement par email
                pour seulement <strong className="text-slate-700">4,99 €</strong>.
              </p>

              <HomeForm />
            </div>
          </section>

          {/* ── Comment ça marche ──────────────────────────────────────────── */}
          <section id="comment-ca-marche" className="py-20 px-4 bg-[#F8FAFC]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-bold text-[#1E3A5F]">Comment ça marche</h2>
                <p className="mt-3 text-slate-500">Trois étapes simples pour obtenir votre numéro DUNS.</p>
              </div>

              <div className="relative grid sm:grid-cols-3 gap-6">
                <div className="hidden sm:block absolute top-[2.75rem] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-slate-200 z-0" />

                {STEPS.map(({ n, Icon, title, desc }) => (
                  <div key={n} className="relative z-10 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center gap-4">
                    <Icon className="w-7 h-7 text-emerald-500" />
                    <span className="w-10 h-10 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {n}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                      <p className="text-sm text-slate-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Pourquoi le DUNS ──────────────────────────────────────────── */}
          <section id="pourquoi-le-duns" className="py-20 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1E3A5F]">
                  Pourquoi avez-vous besoin d&rsquo;un numéro DUNS&nbsp;?
                </h2>
                <p className="mt-3 text-slate-500">
                  Le numéro D-U-N-S est votre passeport commercial international.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {WHY_DUNS.map(({ Icon, title, desc, ariaLabel }) => (
                  <div
                    key={title}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex gap-4"
                  >
                    <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0 self-start">
                      <Icon className="w-6 h-6 text-blue-600" aria-label={ariaLabel} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                      <p className="text-sm text-slate-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section id="faq" className="py-20 px-4 bg-[#F8FAFC]">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1E3A5F]">Questions fréquentes</h2>
              </div>
              <FaqAccordion items={FAQ_ITEMS} />
            </div>
          </section>

          {/* ── SEO Content ──────────────────────────────────────────────── */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Qu&rsquo;est-ce que le numéro D-U-N-S et pourquoi en avez-vous besoin&nbsp;?</h2>
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>Le <strong>numéro D-U-N-S</strong> (Data Universal Numbering System) est un identifiant unique à 9 chiffres attribué par <strong>Dun &amp; Bradstreet</strong> à chaque entité commerciale dans le monde. Contrairement au <strong>numéro SIRET</strong> qui est limité à la France, le numéro DUNS est reconnu internationalement dans plus de 200 pays.</p>
                <p>Que vous souhaitiez répondre à des <strong>appels d&rsquo;offres internationaux</strong>, rejoindre le <strong>Apple Developer Program</strong>, publier sur le <strong>Google Play Store</strong>, ou simplement renforcer la <strong>crédibilité de votre entreprise</strong> auprès de partenaires B2B, le numéro D-U-N-S est indispensable.</p>
                <p>Avec <strong>DUNS Verify</strong>, obtenez votre numéro DUNS en <strong>2 minutes</strong> au lieu de 30 jours via le processus officiel. Notre service recherche instantanément votre identifiant dans la base de données internationale et vous l&rsquo;envoie par email.</p>
              </div>
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <section className="py-20 px-4 bg-gradient-to-br from-[#1E3A5F] to-[#2563EB]">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Prêt à obtenir votre numéro DUNS&nbsp;?
              </h2>
              <p className="text-slate-200 mb-8">
                Fini l&apos;attente de 30 jours. Obtenez votre identifiant international en 2 minutes
                pour seulement 4,99 €.
              </p>
              <a
                href="#formulaire"
                className="inline-block bg-white text-blue-900 font-semibold px-8 py-3.5 rounded-xl
                           shadow hover:shadow-md hover:bg-slate-100 transition-all"
              >
                Obtenir mon DUNS maintenant →
              </a>
            </div>
          </section>
        </main>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer className="bg-[#1E3A5F] py-8 px-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-white" />
              <span className="font-bold text-base text-white">DUNS</span>
              <span className="font-normal text-slate-300">Verify</span>
            </div>
            <span className="text-center sm:text-right">
              © 2026 DUNS Verify. Service indépendant, non affilié à Dun &amp; Bradstreet.
            </span>
            <nav className="flex items-center gap-4 text-slate-400">
              <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
              <span>·</span>
              <a href="/cgv" className="hover:text-white transition-colors">CGV</a>
              <span>·</span>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
