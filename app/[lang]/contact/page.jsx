import { ShieldCheck, Mail } from "lucide-react";
import LangSelector from "../../_components/LangSelector";
import ContactForm from "../../_components/ContactForm";
import { getDictionary, LOCALES } from "../../i18n";

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Contact | DUNS Verify",
    robots: { index: false },
  };
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const isFr = lang === "fr";

  const c = isFr
    ? {
        title: "Contact",
        intro: "Une question sur votre recherche D-U-N-S ? Notre équipe est disponible pour vous aider.",
        emailLabel: "Email",
        responseTime: "Nous répondons sous 24 h ouvrées.",
        formTitle: "Envoyer un message",
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "vous@exemple.com",
        message: "Message",
        messagePlaceholder: "Décrivez votre demande…",
        submit: "Envoyer le message",
        note: "Ce formulaire n'est pas encore connecté à un backend. En attendant, contactez-nous directement par email.",
      }
    : {
        title: "Contact",
        intro: "Have a question about your D-U-N-S lookup? Our team is available to help.",
        emailLabel: "Email",
        responseTime: "We respond within 24 business hours.",
        formTitle: "Send a message",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        message: "Message",
        messagePlaceholder: "Describe your request…",
        submit: "Send message",
        note: "This form is not yet connected to a backend. In the meantime, contact us directly by email.",
      };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href={`/${lang}`} className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#1E3A5F]" aria-label="DUNS Verify" />
            <span className="text-xl font-bold text-[#1E3A5F] tracking-tight">DUNS</span>
            <span className="text-xl font-normal text-slate-500">Verify</span>
          </a>
          <LangSelector currentLang={lang} />
        </div>
      </header>

      <main className="flex-1 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-[#1E3A5F] mb-4">{c.title}</h1>
          <p className="text-slate-500 mb-10">{c.intro}</p>

          {/* Email card */}
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
            <div className="bg-blue-50 p-3 rounded-xl flex-shrink-0">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">{c.emailLabel}</p>
              <a
                href="mailto:contact@dunsverify.com"
                className="text-[#1E3A5F] font-semibold hover:underline"
              >
                contact@dunsverify.com
              </a>
              <p className="text-xs text-slate-500 mt-1">{c.responseTime}</p>
            </div>
          </div>

          {/* Contact form (front-end only) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">{c.formTitle}</h2>
            <ContactForm c={c} />
          </div>
        </div>
      </main>

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
  );
}
