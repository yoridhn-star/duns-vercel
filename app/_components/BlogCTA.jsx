const T = {
  fr: { badge: "Service rapide", title: "Obtenez votre numéro DUNS en 2 minutes", subtitle: "Fini les 30 jours d'attente. Recevez votre numéro D-U-N-S directement par email, certifié Dun & Bradstreet.", button: "Obtenir mon numéro DUNS — 4,99 €" },
  en: { badge: "Fast service", title: "Get your DUNS number in 2 minutes", subtitle: "No more 30-day wait. Receive your D-U-N-S number directly by email, certified by Dun & Bradstreet.", button: "Get my DUNS number — €4.99" },
  de: { badge: "Schneller Service", title: "Erhalten Sie Ihre DUNS-Nummer in 2 Minuten", subtitle: "Keine 30 Tage Wartezeit mehr. Erhalten Sie Ihre D-U-N-S-Nummer direkt per E-Mail, zertifiziert von Dun & Bradstreet.", button: "Meine DUNS-Nummer erhalten — 4,99 €" },
  es: { badge: "Servicio rápido", title: "Obtenga su número DUNS en 2 minutos", subtitle: "Sin más esperas de 30 días. Reciba su número D-U-N-S directamente por email, certificado por Dun & Bradstreet.", button: "Obtener mi número DUNS — 4,99 €" },
  it: { badge: "Servizio rapido", title: "Ottieni il tuo numero DUNS in 2 minuti", subtitle: "Basta aspettare 30 giorni. Ricevi il tuo numero D-U-N-S direttamente via email, certificato da Dun & Bradstreet.", button: "Ottieni il mio numero DUNS — 4,99 €" },
  nl: { badge: "Snelle service", title: "Ontvang uw DUNS-nummer in 2 minuten", subtitle: "Geen 30 dagen wachten meer. Ontvang uw D-U-N-S-nummer direct per e-mail, gecertificeerd door Dun & Bradstreet.", button: "Mijn DUNS-nummer verkrijgen — € 4,99" },
  pt: { badge: "Serviço rápido", title: "Obtenha o seu número DUNS em 2 minutos", subtitle: "Sem mais 30 dias de espera. Receba o seu número D-U-N-S diretamente por email, certificado pela Dun & Bradstreet.", button: "Obter meu número DUNS — 4,99 €" },
  pl: { badge: "Szybka usługa", title: "Uzyskaj swój numer DUNS w 2 minuty", subtitle: "Koniec z 30-dniowym oczekiwaniem. Otrzymaj swój numer D-U-N-S bezpośrednio na e-mail, certyfikowany przez Dun & Bradstreet.", button: "Uzyskaj mój numer DUNS — 4,99 €" },
  sv: { badge: "Snabb service", title: "Få ditt DUNS-nummer på 2 minuter", subtitle: "Slut med 30 dagars väntan. Få ditt D-U-N-S-nummer direkt via e-post, certifierat av Dun & Bradstreet.", button: "Hämta mitt DUNS-nummer — 4,99 €" },
  da: { badge: "Hurtig service", title: "Få dit DUNS-nummer på 2 minutter", subtitle: "Ingen 30 dages ventetid mere. Modtag dit D-U-N-S-nummer direkte via e-mail, certificeret af Dun & Bradstreet.", button: "Hent mit DUNS-nummer — 4,99 €" },
  no: { badge: "Rask service", title: "Få ditt DUNS-nummer på 2 minutter", subtitle: "Ingen 30 dagers ventetid. Motta ditt D-U-N-S-nummer direkte på e-post, sertifisert av Dun & Bradstreet.", button: "Hent mitt DUNS-nummer — 4,99 €" },
  fi: { badge: "Nopea palvelu", title: "Hanki DUNS-numerosi 2 minuutissa", subtitle: "Ei enää 30 päivän odotusta. Vastaanota D-U-N-S-numerosi suoraan sähköpostitse, Dun & Bradstreetin sertifioima.", button: "Hanki DUNS-numeroni — 4,99 €" },
  cs: { badge: "Rychlá služba", title: "Získejte své číslo DUNS za 2 minuty", subtitle: "Žádné čekání 30 dní. Obdržte své číslo D-U-N-S přímo e-mailem, certifikované Dun & Bradstreet.", button: "Získat mé číslo DUNS — 4,99 €" },
  hu: { badge: "Gyors szolgáltatás", title: "Szerezze meg DUNS számát 2 perc alatt", subtitle: "Nincs több 30 napos várakozás. Kapja meg D-U-N-S számát közvetlenül e-mailben, Dun & Bradstreet tanúsítással.", button: "DUNS számom megszerzése — 4,99 €" },
  ro: { badge: "Serviciu rapid", title: "Obțineți numărul DUNS în 2 minute", subtitle: "Fără să mai așteptați 30 de zile. Primiți numărul dvs. D-U-N-S direct pe email, certificat de Dun & Bradstreet.", button: "Obține numărul meu DUNS — 4,99 €" },
  el: { badge: "Γρήγορη υπηρεσία", title: "Αποκτήστε τον αριθμό DUNS σας σε 2 λεπτά", subtitle: "Χωρίς αναμονή 30 ημερών. Λάβετε τον αριθμό D-U-N-S σας απευθείας μέσω email, πιστοποιημένο από τη Dun & Bradstreet.", button: "Απόκτηση αριθμού DUNS — 4,99 €" },
};

export default function BlogCTA({ lang }) {
  const t = T[lang] || T.en;
  return (
    <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2563EB] rounded-2xl p-8 my-12 text-center not-prose">
      <p className="text-emerald-300 text-sm font-semibold uppercase tracking-wider mb-2">{t.badge}</p>
      <h3 className="text-xl font-bold text-white mb-3">
        {t.title}
      </h3>
      <p className="text-slate-200 mb-6 text-sm max-w-md mx-auto">
        {t.subtitle}
      </p>
      <a
        href={`/${lang}`}
        className="inline-block bg-white text-[#1E3A5F] font-semibold px-8 py-3.5 rounded-xl shadow hover:shadow-md hover:bg-slate-100 transition-all"
      >
        {t.button}
      </a>
    </div>
  );
}
