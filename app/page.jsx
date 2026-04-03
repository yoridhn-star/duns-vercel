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
];

const WHY_DUNS = [
  {
    Icon: Globe,
    title: "Appels d'offres internationaux",
    desc: "Obligatoire pour répondre aux marchés publics européens et aux contrats avec le gouvernement américain (SAM.gov).",
  },
  {
    Icon: Handshake,
    title: "Partenariats B2B",
    desc: "De nombreuses multinationales exigent un numéro DUNS pour référencer leurs fournisseurs.",
  },
  {
    Icon: Building,
    title: "Crédibilité financière",
    desc: "Le DUNS renforce la confiance de vos partenaires et institutions bancaires.",
  },
  {
    Icon: Smartphone,
    title: "Apple & Google",
    desc: "Requis pour publier des apps sur l'App Store et le Google Play Store en tant qu'organisation.",
  },
];

const STEPS = [
  { n: 1, Icon: Search,       title: "Entrez vos informations",  desc: "Saisissez le nom de votre entreprise, le pays et votre email." },
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
              <ShieldCheck className="w-6 h-6 text-[#1E3A5F]" />
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
                Plus besoin d&apos;attendre 30 jours. Recevez votre identifiant D-U-N-S immédiatement par email
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
                {WHY_DUNS.map(({ Icon, title, desc }) => (
                  <div
                    key={title}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex gap-4"
                  >
                    <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0 self-start">
                      <Icon className="w-6 h-6 text-blue-600" />
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
