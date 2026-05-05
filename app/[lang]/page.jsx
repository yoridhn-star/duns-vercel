import { ShieldCheck, Zap, Globe, Handshake, Building, Smartphone, Search, Loader, CheckCircle } from "lucide-react";
import HomeForm from "../_components/HomeForm";
import FaqAccordion from "../_components/FaqAccordion";
import LangSelector from "../_components/LangSelector";
import { getDictionary, LOCALES } from "../i18n";

const WHY_ICONS = [Globe, Handshake, Building, Smartphone];
const STEP_ICONS = [Search, Loader, CheckCircle];

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const languages = Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}/${l}`]));
  return {
    alternates: { canonical: `${SITE_URL}/${lang}`, languages },
  };
}

export default async function Home({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "DUNS Verify",
        url: SITE_URL,
        description: t.jsonLd.websiteDescription,
      },
      {
        "@type": "Service",
        name: t.faq.items[0]?.q ? "DUNS Verify" : "DUNS Number Lookup",
        provider: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
        description: t.jsonLd.serviceDescription,
        offers: { "@type": "Offer", price: "4.99", priceCurrency: "EUR" },
        areaServed: "Europe",
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen flex flex-col">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
            <a href={`/${lang}#formulaire`} className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#1E3A5F]" aria-label="DUNS Verify" />
              <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">DUNS</span>
              <span className="text-xl font-normal text-slate-500">Verify</span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
              {t.header.nav.map((label, i) => (
                <a key={i} href={t.header.navHrefs[i]} className="hover:text-slate-900 transition-colors">
                  {label}
                </a>
              ))}
              <a href={`/${lang}/blog`} className="hover:text-slate-900 transition-colors">
                Blog
              </a>
              <LangSelector currentLang={lang} />
            </nav>
            <div className="sm:hidden">
              <LangSelector currentLang={lang} />
            </div>
          </div>
        </header>

        <main className="flex-1">

          {/* ── Hero + Form ─────────────────────────────────────────────────── */}
          <section id="formulaire" className="bg-white pt-6 pb-20 px-4">
            <div className="max-w-2xl mx-auto text-center">

              <div className="inline-flex items-center gap-1.5 bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-5">
                {t.hero.title}{" "}
                <span className="text-emerald-500 whitespace-nowrap">{t.hero.titleHighlight}</span>{" "}
                {t.hero.titleEnd}
              </h1>

              <p className="text-lg text-slate-500 mb-10">
                {t.hero.subtitle}
              </p>

              {/* ── Legal disclaimer (OVH/D&B compliance) ────────────────────── */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-8 text-xs text-amber-800 text-left leading-relaxed">
                <span className="font-semibold">ℹ️ </span>{t.disclaimer}
              </div>

              <HomeForm t={t.form} lang={lang} />
            </div>
          </section>

          {/* ── How it works ──────────────────────────────────────────────── */}
          <section id={t.header.navHrefs[0].slice(1)} className="py-20 px-4 bg-[#F8FAFC]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-bold text-[#1E3A5F]">{t.howItWorks.title}</h2>
                <p className="mt-3 text-slate-500">{t.howItWorks.subtitle}</p>
              </div>

              <div className="relative grid sm:grid-cols-3 gap-6">
                <div className="hidden sm:block absolute top-[2.75rem] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-slate-200 z-0" />

                {t.howItWorks.steps.map((step, i) => {
                  const Icon = STEP_ICONS[i];
                  return (
                    <div key={i} className="relative z-10 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center gap-4">
                      <Icon className="w-7 h-7 text-emerald-500" />
                      <span className="w-10 h-10 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                        <p className="text-sm text-slate-500">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Why DUNS ──────────────────────────────────────────────────── */}
          <section id={t.header.navHrefs[1].slice(1)} className="py-20 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1E3A5F]">{t.whyDuns.title}</h2>
                <p className="mt-3 text-slate-500">{t.whyDuns.subtitle}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {t.whyDuns.cards.map((card, i) => {
                  const Icon = WHY_ICONS[i];
                  return (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex gap-4">
                      <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0 self-start">
                        <Icon className="w-6 h-6 text-blue-600" aria-label={card.ariaLabel} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{card.title}</h3>
                        <p className="text-sm text-slate-500">{card.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section id="faq" className="py-20 px-4 bg-[#F8FAFC]">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1E3A5F]">{t.faq.title}</h2>
              </div>
              <FaqAccordion items={t.faq.items} />
            </div>
          </section>

          {/* ── SEO Content ──────────────────────────────────────────────── */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">{t.seo.title}</h2>
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                {t.seo.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <section className="py-20 px-4 bg-gradient-to-br from-[#1E3A5F] to-[#2563EB]">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">{t.cta.title}</h2>
              <p className="text-slate-200 mb-8">{t.cta.subtitle}</p>
              <a
                href={`/${lang}#formulaire`}
                className="inline-block bg-white text-blue-900 font-semibold px-8 py-3.5 rounded-xl shadow hover:shadow-md hover:bg-slate-100 transition-all"
              >
                {t.cta.button}
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
            <span className="text-center sm:text-right">{t.footer.copyright}</span>
            <nav className="flex items-center gap-4 text-slate-400">
              {t.footer.links.map((link, i) => (
                <span key={i} className="flex items-center gap-4">
                  {i > 0 && <span>·</span>}
                  <a href={`/${lang}${t.footer.hrefs[i]}`} className="hover:text-white transition-colors">{link}</a>
                </span>
              ))}
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
