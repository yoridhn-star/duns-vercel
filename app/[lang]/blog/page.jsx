import { ArrowRight } from "lucide-react";
import BlogHeader from "../../_components/BlogHeader";
import BlogFooter from "../../_components/BlogFooter";
import { LOCALES } from "../../i18n";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";

// Which articles are available in which languages
const BLOG_CONFIG = {
  "numero-duns": { available: ["fr", "en", "de", "es", "it", "nl", "pt", "pl", "sv", "da", "no", "fi", "cs", "hu", "ro", "el"] },
  "numero-duns-definition": { available: ["fr", "en", "de", "es", "it", "nl", "pt", "pl", "sv", "da", "no", "fi", "cs", "hu", "ro", "el"] },
  "obtenir-numero-duns-france": { available: ["fr"] },
  "numero-duns-gratuit": { available: ["fr", "en", "de", "es", "it", "nl", "pt", "pl", "sv", "da", "no", "fi", "cs", "hu", "ro", "el"] },
  "numero-duns-apple-developer": { available: ["fr", "en", "de", "es", "it", "nl", "pt", "pl", "sv", "da", "no", "fi", "cs", "hu", "ro", "el"] },
  "difference-duns-siret": { available: ["fr"] },
  "numero-duns-google-play": { available: ["fr", "en", "de", "es", "it", "nl", "pt", "pl", "sv", "da", "no", "fi", "cs", "hu", "ro", "el"] },
  "numero-duns-marches-publics": { available: ["fr", "en", "de", "es", "it", "nl", "pt", "pl", "sv", "da", "no", "fi", "cs", "hu", "ro", "el"] },
  "verifier-numero-duns": { available: ["fr", "en", "de", "es", "it", "nl", "pt", "pl", "sv", "da", "no", "fi", "cs", "hu", "ro", "el"] },
  "duns-number-dun-bradstreet": { available: ["fr", "en", "de", "es", "it", "nl", "pt", "pl", "sv", "da", "no", "fi", "cs", "hu", "ro", "el"] },
};

const UI = {
  fr: { home: "Accueil", blog: "Blog", title: "Blog DUNS Verify", intro: "Guides pratiques et explications complètes sur le numéro DUNS : à quoi il sert, comment l'obtenir et pourquoi il est indispensable pour votre activité.", readMore: "Lire l'article", metaTitle: "Blog DUNS Verify — Guides et Conseils sur le Numéro DUNS", metaDesc: "Découvrez nos guides complets sur le numéro DUNS : définition, obtention, utilité pour Apple Developer, Google Play, marchés publics et plus encore." },
  en: { home: "Home", blog: "Blog", title: "DUNS Verify Blog", intro: "Practical guides and complete explanations about the DUNS number: what it's used for, how to get it, and why it's essential for your business.", readMore: "Read article", metaTitle: "DUNS Verify Blog — Guides and Advice on the DUNS Number", metaDesc: "Explore our complete guides on the DUNS number: definition, how to get one, Apple Developer, Google Play, public procurement and more." },
  de: { home: "Startseite", blog: "Blog", title: "DUNS Verify Blog", intro: "Praktische Anleitungen und vollständige Erklärungen zur DUNS-Nummer: wofür sie verwendet wird, wie man sie erhält und warum sie für Ihr Unternehmen unverzichtbar ist.", readMore: "Artikel lesen", metaTitle: "DUNS Verify Blog — Leitfäden und Ratschläge zur DUNS-Nummer", metaDesc: "Entdecken Sie unsere vollständigen Leitfäden zur DUNS-Nummer: Definition, Beantragung, Nutzung für Apple Developer, Google Play, öffentliche Aufträge und mehr." },
  es: { home: "Inicio", blog: "Blog", title: "Blog DUNS Verify", intro: "Guías prácticas y explicaciones completas sobre el número DUNS: para qué sirve, cómo obtenerlo y por qué es imprescindible para tu empresa.", readMore: "Leer el artículo", metaTitle: "Blog DUNS Verify — Guías y Consejos sobre el Número DUNS", metaDesc: "Explore nuestras guías completas sobre el número DUNS: definición, cómo obtenerlo, Apple Developer, Google Play, licitaciones públicas y más." },
  it: { home: "Home", blog: "Blog", title: "Blog DUNS Verify", intro: "Guide pratiche e spiegazioni complete sul numero DUNS: a cosa serve, come ottenerlo e perché è indispensabile per la tua attività.", readMore: "Leggi l'articolo", metaTitle: "Blog DUNS Verify — Guide e Consigli sul Numero DUNS", metaDesc: "Scopri le nostre guide complete sul numero DUNS: definizione, come ottenerlo, Apple Developer, Google Play, appalti pubblici e altro." },
  nl: { home: "Home", blog: "Blog", title: "DUNS Verify Blog", intro: "Praktische gidsen en volledige uitleg over het DUNS-nummer: waarvoor het wordt gebruikt, hoe u het kunt krijgen en waarom het onmisbaar is voor uw bedrijf.", readMore: "Artikel lezen", metaTitle: "DUNS Verify Blog — Gidsen en Adviezen over het DUNS-nummer", metaDesc: "Ontdek onze complete gidsen over het DUNS-nummer: definitie, hoe te verkrijgen, Apple Developer, Google Play, overheidsopdrachten en meer." },
  pt: { home: "Início", blog: "Blog", title: "Blog DUNS Verify", intro: "Guias práticos e explicações completas sobre o número DUNS: para que serve, como obtê-lo e por que é indispensável para o seu negócio.", readMore: "Ler o artigo", metaTitle: "Blog DUNS Verify — Guias e Conselhos sobre o Número DUNS", metaDesc: "Explore os nossos guias completos sobre o número DUNS: definição, como obter, Apple Developer, Google Play, contratos públicos e muito mais." },
  pl: { home: "Strona główna", blog: "Blog", title: "Blog DUNS Verify", intro: "Praktyczne przewodniki i pełne wyjaśnienia dotyczące numeru DUNS: do czego służy, jak go uzyskać i dlaczego jest niezbędny dla Twojej firmy.", readMore: "Czytaj artykuł", metaTitle: "Blog DUNS Verify — Przewodniki i Porady o Numerze DUNS", metaDesc: "Odkryj nasze kompletne przewodniki dotyczące numeru DUNS: definicja, jak uzyskać, Apple Developer, Google Play, zamówienia publiczne i więcej." },
  sv: { home: "Hem", blog: "Blogg", title: "DUNS Verify Blogg", intro: "Praktiska guider och fullständiga förklaringar om DUNS-numret: vad det används till, hur man får det och varför det är viktigt för ditt företag.", readMore: "Läs artikel", metaTitle: "DUNS Verify Blogg — Guider och Råd om DUNS-nummer", metaDesc: "Utforska våra kompletta guider om DUNS-numret: definition, hur man får det, Apple Developer, Google Play, offentlig upphandling och mer." },
  da: { home: "Hjem", blog: "Blog", title: "DUNS Verify Blog", intro: "Praktiske guides og fuldstændige forklaringer om DUNS-nummeret: hvad det bruges til, hvordan man får det, og hvorfor det er uundværligt for din virksomhed.", readMore: "Læs artikel", metaTitle: "DUNS Verify Blog — Guides og Råd om DUNS-nummer", metaDesc: "Udforsk vores komplette guides om DUNS-nummeret: definition, hvordan man får det, Apple Developer, Google Play, offentlige udbud og mere." },
  no: { home: "Hjem", blog: "Blogg", title: "DUNS Verify Blogg", intro: "Praktiske guider og fullstendige forklaringer om DUNS-nummeret: hva det brukes til, hvordan man får det og hvorfor det er uunnværlig for din bedrift.", readMore: "Les artikkel", metaTitle: "DUNS Verify Blogg — Guider og Råd om DUNS-nummer", metaDesc: "Utforsk våre komplette guider om DUNS-nummeret: definisjon, hvordan få det, Apple Developer, Google Play, offentlige anskaffelser og mer." },
  fi: { home: "Etusivu", blog: "Blogi", title: "DUNS Verify Blogi", intro: "Käytännölliset oppaat ja täydelliset selitykset DUNS-numerosta: mihin sitä käytetään, miten se hankitaan ja miksi se on välttämätön yrityksellesi.", readMore: "Lue artikkeli", metaTitle: "DUNS Verify Blogi — Oppaat ja Neuvot DUNS-numerosta", metaDesc: "Tutustu kattaviin oppaisiimme DUNS-numerosta: määritelmä, miten hankkia, Apple Developer, Google Play, julkiset hankinnat ja lisää." },
  cs: { home: "Domů", blog: "Blog", title: "Blog DUNS Verify", intro: "Praktické průvodce a úplná vysvětlení čísla DUNS: k čemu slouží, jak ho získat a proč je nezbytné pro vaše podnikání.", readMore: "Číst článek", metaTitle: "Blog DUNS Verify — Průvodci a Rady o Čísle DUNS", metaDesc: "Prozkoumejte naše kompletní průvodce číslem DUNS: definice, jak získat, Apple Developer, Google Play, veřejné zakázky a více." },
  hu: { home: "Főoldal", blog: "Blog", title: "DUNS Verify Blog", intro: "Gyakorlati útmutatók és teljes magyarázatok a DUNS-számról: mire való, hogyan szerezhető meg és miért nélkülözhetetlen a vállalkozása számára.", readMore: "Cikk olvasása", metaTitle: "DUNS Verify Blog — Útmutatók és Tanácsok a DUNS-számról", metaDesc: "Fedezze fel átfogó útmutatóinkat a DUNS-számról: definíció, hogyan szerezhető meg, Apple Developer, Google Play, közbeszerzés és egyéb témák." },
  ro: { home: "Acasă", blog: "Blog", title: "Blog DUNS Verify", intro: "Ghiduri practice și explicații complete despre numărul DUNS: la ce servește, cum să îl obțineți și de ce este indispensabil pentru afacerea dvs.", readMore: "Citește articolul", metaTitle: "Blog DUNS Verify — Ghiduri și Sfaturi despre Numărul DUNS", metaDesc: "Descoperiți ghidurile noastre complete despre numărul DUNS: definiție, cum să obțineți, Apple Developer, Google Play, achiziții publice și altele." },
  el: { home: "Αρχική", blog: "Blog", title: "Blog DUNS Verify", intro: "Πρακτικοί οδηγοί και πλήρεις επεξηγήσεις για τον αριθμό DUNS: σε τι χρησιμεύει, πώς να τον αποκτήσετε και γιατί είναι απαραίτητος για την επιχείρησή σας.", readMore: "Διαβάστε το άρθρο", metaTitle: "Blog DUNS Verify — Οδηγοί και Συμβουλές για τον Αριθμό DUNS", metaDesc: "Εξερευνήστε τους πλήρεις οδηγούς μας για τον αριθμό DUNS: ορισμός, πώς να αποκτήσετε, Apple Developer, Google Play, δημόσιες συμβάσεις και άλλα." },
};

const ARTICLES_T = {
  "numero-duns": {
    fr: { title: "Numéro DUNS : Le Guide Complet 2026", excerpt: "Tout ce que vous devez savoir sur le numéro DUNS : définition, histoire, utilité et comment l'obtenir rapidement en France." },
    en: { title: "DUNS Number: The Complete Guide 2026", excerpt: "Everything you need to know about the DUNS number: definition, history, uses, and how to get it quickly." },
    de: { title: "DUNS-Nummer: Der vollständige Leitfaden 2026", excerpt: "Alles, was Sie über die DUNS-Nummer wissen müssen: Definition, Geschichte, Verwendung und wie Sie sie schnell erhalten." },
    es: { title: "Número DUNS: La Guía Completa 2026", excerpt: "Todo lo que necesitas saber sobre el número DUNS: definición, historia, utilidad y cómo obtenerlo rápidamente." },
    it: { title: "Numero DUNS: La Guida Completa 2026", excerpt: "Tutto quello che devi sapere sul numero DUNS: definizione, storia, utilizzo e come ottenerlo rapidamente." },
    nl: { title: "DUNS-nummer: De complete gids 2026", excerpt: "Alles wat u moet weten over het DUNS-nummer: definitie, geschiedenis, gebruik en hoe u het snel kunt verkrijgen." },
    pt: { title: "Número DUNS: O Guia Completo 2026", excerpt: "Tudo o que você precisa saber sobre o número DUNS: definição, história, utilidade e como obtê-lo rapidamente." },
    pl: { title: "Numer DUNS: Kompletny przewodnik 2026", excerpt: "Wszystko, co musisz wiedzieć o numerze DUNS: definicja, historia, zastosowania i jak go szybko uzyskać." },
    sv: { title: "DUNS-nummer: Den kompletta guiden 2026", excerpt: "Allt du behöver veta om DUNS-numret: definition, historia, användning och hur du snabbt får det." },
    da: { title: "DUNS-nummer: Den komplette guide 2026", excerpt: "Alt hvad du skal vide om DUNS-nummeret: definition, historie, brug og hvordan du hurtigt får det." },
    no: { title: "DUNS-nummer: Den komplette guiden 2026", excerpt: "Alt du trenger å vite om DUNS-nummeret: definisjon, historie, bruk og hvordan du raskt får det." },
    fi: { title: "DUNS-numero: Täydellinen opas 2026", excerpt: "Kaikki mitä sinun täytyy tietää DUNS-numerosta: määritelmä, historia, käyttö ja miten sen saa nopeasti." },
    cs: { title: "Číslo DUNS: Kompletní průvodce 2026", excerpt: "Vše, co potřebujete vědět o čísle DUNS: definice, historie, použití a jak ho rychle získat." },
    hu: { title: "DUNS-szám: A teljes útmutató 2026", excerpt: "Minden, amit tudnia kell a DUNS-számról: definíció, történet, felhasználás és hogyan szerezheti meg gyorsan." },
    ro: { title: "Numărul DUNS: Ghidul Complet 2026", excerpt: "Tot ce trebuie să știți despre numărul DUNS: definiție, istorie, utilitate și cum să îl obțineți rapid." },
    el: { title: "Αριθμός DUNS: Ο Πλήρης Οδηγός 2026", excerpt: "Όλα όσα πρέπει να γνωρίζετε για τον αριθμό DUNS: ορισμός, ιστορία, χρησιμότητα και πώς να τον αποκτήσετε γρήγορα." },
  },
  "numero-duns-definition": {
    fr: { title: "Numéro DUNS : C'est Quoi ? Définition Simple", excerpt: "Une explication claire et accessible du numéro DUNS, le passeport international de votre entreprise, et comment il se compare au SIRET." },
    en: { title: "DUNS Number: What Is It? Simple Definition", excerpt: "A clear, accessible explanation of the DUNS number, your company's international passport, and how it compares to national identifiers." },
    de: { title: "DUNS-Nummer: Was ist das? Einfache Definition", excerpt: "Eine klare, verständliche Erklärung der DUNS-Nummer, dem internationalen Pass Ihres Unternehmens, und wie sie sich von nationalen Kennzahlen unterscheidet." },
    es: { title: "Número DUNS: ¿Qué es? Definición Simple", excerpt: "Una explicación clara y accesible del número DUNS, el pasaporte internacional de tu empresa, y cómo se compara con los identificadores nacionales." },
    it: { title: "Numero DUNS: Cos'è? Definizione Semplice", excerpt: "Una spiegazione chiara e accessibile del numero DUNS, il passaporto internazionale della tua azienda, e come si confronta con gli identificatori nazionali." },
    nl: { title: "DUNS-nummer: Wat is het? Eenvoudige definitie", excerpt: "Een duidelijke, toegankelijke uitleg van het DUNS-nummer, het internationale paspoort van uw bedrijf, en hoe het zich verhoudt tot nationale identificators." },
    pt: { title: "Número DUNS: O que é? Definição Simples", excerpt: "Uma explicação clara e acessível do número DUNS, o passaporte internacional da sua empresa, e como ele se compara aos identificadores nacionais." },
    pl: { title: "Numer DUNS: Co to jest? Prosta definicja", excerpt: "Jasne i przystępne wyjaśnienie numeru DUNS, międzynarodowego paszportu Twojej firmy, oraz jak porównuje się z krajowymi identyfikatorami." },
    sv: { title: "DUNS-nummer: Vad är det? Enkel definition", excerpt: "En tydlig och tillgänglig förklaring av DUNS-numret, ditt företags internationella pass, och hur det jämförs med nationella identifierare." },
    da: { title: "DUNS-nummer: Hvad er det? Simpel definition", excerpt: "En klar og tilgængelig forklaring af DUNS-nummeret, dit virksomheds internationale pas, og hvordan det sammenlignes med nationale identifikatorer." },
    no: { title: "DUNS-nummer: Hva er det? Enkel definisjon", excerpt: "En tydelig og tilgjengelig forklaring av DUNS-nummeret, din bedrifts internasjonale pass, og hvordan det sammenligner med nasjonale identifikatorer." },
    fi: { title: "DUNS-numero: Mitä se on? Yksinkertainen määritelmä", excerpt: "Selkeä ja helppotajuinen selitys DUNS-numerosta, yrityksesi kansainvälisestä passista, ja miten se vertautuu kansallisiin tunnistenumeroihin." },
    cs: { title: "Číslo DUNS: Co to je? Jednoduchá definice", excerpt: "Jasné a srozumitelné vysvětlení čísla DUNS, mezinárodního pasu vaší společnosti, a jak se porovnává s národními identifikátory." },
    hu: { title: "DUNS-szám: Mi ez? Egyszerű meghatározás", excerpt: "A DUNS-szám egyértelmű és érthető magyarázata, vállalkozása nemzetközi útlevele, és hogyan viszonyul a nemzeti azonosítókhoz." },
    ro: { title: "Numărul DUNS: Ce este? Definiție Simplă", excerpt: "O explicație clară și accesibilă a numărului DUNS, pașaportul internațional al companiei dvs., și cum se compară cu identificatorii naționali." },
    el: { title: "Αριθμός DUNS: Τι είναι; Απλός Ορισμός", excerpt: "Μια σαφής και προσιτή εξήγηση του αριθμού DUNS, του διεθνούς διαβατηρίου της εταιρείας σας, και πώς συγκρίνεται με εθνικούς αναγνωριστικούς κωδικούς." },
  },
  "obtenir-numero-duns-france": {
    fr: { title: "Comment Obtenir un Numéro DUNS en France", excerpt: "Guide étape par étape pour obtenir votre numéro DUNS en France : méthodes, délais, coûts comparés entre les différentes options." },
  },
  "numero-duns-gratuit": {
    fr: { title: "Numéro DUNS Gratuit : Comment l'Obtenir Sans Payer", excerpt: "Toutes les méthodes pour obtenir un numéro DUNS gratuitement, les délais à prévoir et quand il vaut mieux opter pour un service payant." },
    en: { title: "Free DUNS Number: How to Get One Without Paying", excerpt: "All the methods to get a DUNS number for free, the expected delays, and when it's better to opt for a paid service." },
    de: { title: "Kostenlose DUNS-Nummer: So erhalten Sie diese ohne Bezahlung", excerpt: "Alle Methoden, um eine DUNS-Nummer kostenlos zu erhalten, die zu erwartenden Fristen und wann ein bezahlter Dienst sinnvoller ist." },
    es: { title: "Número DUNS Gratis: Cómo Obtenerlo Sin Pagar", excerpt: "Todos los métodos para obtener un número DUNS gratis, los plazos esperados y cuándo es mejor optar por un servicio de pago." },
    it: { title: "Numero DUNS Gratuito: Come Ottenerlo Senza Pagare", excerpt: "Tutti i metodi per ottenere un numero DUNS gratuitamente, i tempi previsti e quando è meglio optare per un servizio a pagamento." },
    nl: { title: "Gratis DUNS-nummer: Hoe u het gratis kunt krijgen", excerpt: "Alle methoden om een DUNS-nummer gratis te krijgen, de verwachte doorlooptijden en wanneer een betaalde dienst beter is." },
    pt: { title: "Número DUNS Gratuito: Como Obtê-lo Sem Pagar", excerpt: "Todos os métodos para obter um número DUNS gratuitamente, os prazos esperados e quando é melhor optar por um serviço pago." },
    pl: { title: "Darmowy numer DUNS: Jak go uzyskać bez płacenia", excerpt: "Wszystkie metody uzyskania numeru DUNS za darmo, oczekiwane terminy i kiedy lepiej skorzystać z płatnej usługi." },
    sv: { title: "Gratis DUNS-nummer: Hur du får det utan att betala", excerpt: "Alla metoder för att få ett DUNS-nummer gratis, förväntade väntetider och när det är bättre att välja en betaltjänst." },
    da: { title: "Gratis DUNS-nummer: Sådan får du det uden at betale", excerpt: "Alle metoder til at få et DUNS-nummer gratis, forventede ventetider og hvornår det er bedre at vælge en betalt tjeneste." },
    no: { title: "Gratis DUNS-nummer: Slik får du det uten å betale", excerpt: "Alle metoder for å få et DUNS-nummer gratis, forventede ventetider og når det er bedre å velge en betalt tjeneste." },
    fi: { title: "Ilmainen DUNS-numero: Kuinka saada se ilman maksua", excerpt: "Kaikki menetelmät DUNS-numeron saamiseksi ilmaiseksi, odotettavissa olevat odotusajat ja milloin on parempi valita maksullinen palvelu." },
    cs: { title: "Bezplatné číslo DUNS: Jak ho získat bez placení", excerpt: "Všechny metody pro bezplatné získání čísla DUNS, očekávané lhůty a kdy je lepší zvolit placenou službu." },
    hu: { title: "Ingyenes DUNS-szám: Hogyan szerezze meg fizetés nélkül", excerpt: "Minden módszer a DUNS-szám ingyenes megszerzéséhez, a várható határidők és mikor jobb fizetős szolgáltatást választani." },
    ro: { title: "Număr DUNS Gratuit: Cum Să Îl Obțineți Fără Plată", excerpt: "Toate metodele de a obține un număr DUNS gratuit, termenele așteptate și când este mai bine să optați pentru un serviciu plătit." },
    el: { title: "Δωρεάν Αριθμός DUNS: Πώς να τον Αποκτήσετε Χωρίς Πληρωμή", excerpt: "Όλες οι μέθοδοι για να αποκτήσετε έναν αριθμό DUNS δωρεάν, οι αναμενόμενες καθυστερήσεις και πότε είναι καλύτερο να επιλέξετε μια επί πληρωμή υπηρεσία." },
  },
  "numero-duns-apple-developer": {
    fr: { title: "Numéro DUNS pour Apple Developer : Guide Complet", excerpt: "Pourquoi Apple exige un numéro DUNS, comment l'obtenir rapidement pour publier sur l'App Store et les pièges à éviter." },
    en: { title: "DUNS Number for Apple Developer: Complete Guide", excerpt: "Why Apple requires a DUNS number, how to get it quickly to publish on the App Store and the pitfalls to avoid." },
    de: { title: "DUNS-Nummer für Apple Developer: Vollständiger Leitfaden", excerpt: "Warum Apple eine DUNS-Nummer verlangt, wie man sie schnell erhält, um im App Store zu veröffentlichen, und welche Fallstricke man vermeiden sollte." },
    es: { title: "Número DUNS para Apple Developer: Guía Completa", excerpt: "Por qué Apple exige un número DUNS, cómo obtenerlo rápidamente para publicar en la App Store y los errores que debes evitar." },
    it: { title: "Numero DUNS per Apple Developer: Guida Completa", excerpt: "Perché Apple richiede un numero DUNS, come ottenerlo rapidamente per pubblicare sull'App Store e le insidie da evitare." },
    nl: { title: "DUNS-nummer voor Apple Developer: Complete gids", excerpt: "Waarom Apple een DUNS-nummer vereist, hoe u het snel kunt verkrijgen om in de App Store te publiceren en de valkuilen die u moet vermijden." },
    pt: { title: "Número DUNS para Apple Developer: Guia Completo", excerpt: "Por que a Apple exige um número DUNS, como obtê-lo rapidamente para publicar na App Store e as armadilhas a evitar." },
    pl: { title: "Numer DUNS dla Apple Developer: Kompletny przewodnik", excerpt: "Dlaczego Apple wymaga numeru DUNS, jak go szybko uzyskać, aby publikować w App Store i jakich pułapek unikać." },
    sv: { title: "DUNS-nummer för Apple Developer: Komplett guide", excerpt: "Varför Apple kräver ett DUNS-nummer, hur du snabbt får det för att publicera i App Store och fallgroparna att undvika." },
    da: { title: "DUNS-nummer til Apple Developer: Komplet guide", excerpt: "Hvorfor Apple kræver et DUNS-nummer, hvordan du hurtigt får det for at udgive i App Store og de faldgruber du skal undgå." },
    no: { title: "DUNS-nummer for Apple Developer: Komplett guide", excerpt: "Hvorfor Apple krever et DUNS-nummer, hvordan du raskt får det for å publisere i App Store og fallgruvene du bør unngå." },
    fi: { title: "DUNS-numero Apple Developerille: Täydellinen opas", excerpt: "Miksi Apple vaatii DUNS-numeron, miten sen saa nopeasti App Storessa julkaisemiseksi ja mitä sudenkuoppia välttää." },
    cs: { title: "Číslo DUNS pro Apple Developer: Kompletní průvodce", excerpt: "Proč Apple vyžaduje číslo DUNS, jak ho rychle získat pro publikování v App Store a jaká úskalí se vyhnout." },
    hu: { title: "DUNS-szám az Apple Developer számára: Teljes útmutató", excerpt: "Miért igényel az Apple DUNS-számot, hogyan szerezze meg gyorsan az App Store-ban való közzétételhez és milyen buktatókat kell elkerülni." },
    ro: { title: "Numărul DUNS pentru Apple Developer: Ghid Complet", excerpt: "De ce Apple necesită un număr DUNS, cum să îl obțineți rapid pentru a publica în App Store și capcanele de evitat." },
    el: { title: "Αριθμός DUNS για Apple Developer: Πλήρης Οδηγός", excerpt: "Γιατί η Apple απαιτεί αριθμό DUNS, πώς να τον αποκτήσετε γρήγορα για να δημοσιεύσετε στο App Store και τις παγίδες που πρέπει να αποφύγετε." },
  },
  "difference-duns-siret": {
    fr: { title: "Différence entre DUNS et SIRET : Tout Comprendre", excerpt: "Tableau comparatif complet entre DUNS et SIRET : portée, attribution, usage. Découvrez lequel vous faut-il selon votre situation." },
  },
  "numero-duns-google-play": {
    fr: { title: "Numéro DUNS pour Google Play Store : Guide Développeur", excerpt: "La nouvelle exigence Google pour les développeurs Android : pourquoi le DUNS est obligatoire et comment le récupérer rapidement." },
    en: { title: "DUNS Number for Google Play Store: Developer Guide", excerpt: "Google's new requirement for Android developers: why DUNS is mandatory and how to get it quickly." },
    de: { title: "DUNS-Nummer für Google Play Store: Entwickler-Leitfaden", excerpt: "Googles neue Anforderung für Android-Entwickler: Warum DUNS obligatorisch ist und wie man es schnell erhält." },
    es: { title: "Número DUNS para Google Play Store: Guía para Desarrolladores", excerpt: "El nuevo requisito de Google para desarrolladores Android: por qué el DUNS es obligatorio y cómo obtenerlo rápidamente." },
    it: { title: "Numero DUNS per Google Play Store: Guida per Sviluppatori", excerpt: "Il nuovo requisito di Google per gli sviluppatori Android: perché il DUNS è obbligatorio e come ottenerlo rapidamente." },
    nl: { title: "DUNS-nummer voor Google Play Store: Gids voor ontwikkelaars", excerpt: "De nieuwe vereiste van Google voor Android-ontwikkelaars: waarom DUNS verplicht is en hoe u het snel kunt verkrijgen." },
    pt: { title: "Número DUNS para Google Play Store: Guia do Desenvolvedor", excerpt: "O novo requisito do Google para desenvolvedores Android: por que o DUNS é obrigatório e como obtê-lo rapidamente." },
    pl: { title: "Numer DUNS dla Google Play Store: Przewodnik dla programistów", excerpt: "Nowe wymaganie Google dla programistów Android: dlaczego DUNS jest obowiązkowy i jak go szybko uzyskać." },
    sv: { title: "DUNS-nummer för Google Play Store: Utvecklarguide", excerpt: "Googles nya krav för Android-utvecklare: varför DUNS är obligatoriskt och hur du snabbt får det." },
    da: { title: "DUNS-nummer til Google Play Store: Udviklervejledning", excerpt: "Googles nye krav til Android-udviklere: hvorfor DUNS er obligatorisk og hvordan du hurtigt får det." },
    no: { title: "DUNS-nummer for Google Play Store: Utviklerguide", excerpt: "Googles nye krav til Android-utviklere: hvorfor DUNS er obligatorisk og hvordan du raskt får det." },
    fi: { title: "DUNS-numero Google Play Storelle: Kehittäjäopas", excerpt: "Googlen uusi vaatimus Android-kehittäjille: miksi DUNS on pakollinen ja miten sen saa nopeasti." },
    cs: { title: "Číslo DUNS pro Google Play Store: Průvodce pro vývojáře", excerpt: "Nový požadavek Google pro vývojáře pro Android: proč je DUNS povinné a jak ho rychle získat." },
    hu: { title: "DUNS-szám a Google Play Store-hoz: Fejlesztői útmutató", excerpt: "A Google új követelménye az Android-fejlesztőkre: miért kötelező a DUNS és hogyan szerezhető meg gyorsan." },
    ro: { title: "Numărul DUNS pentru Google Play Store: Ghid pentru Dezvoltatori", excerpt: "Noua cerință Google pentru dezvoltatorii Android: de ce DUNS este obligatoriu și cum să îl obțineți rapid." },
    el: { title: "Αριθμός DUNS για Google Play Store: Οδηγός Προγραμματιστή", excerpt: "Η νέα απαίτηση της Google για προγραμματιστές Android: γιατί το DUNS είναι υποχρεωτικό και πώς να το αποκτήσετε γρήγορα." },
  },
  "numero-duns-marches-publics": {
    fr: { title: "Numéro DUNS et Marchés Publics Internationaux", excerpt: "Le numéro DUNS est indispensable pour répondre aux marchés publics européens et internationaux. Voici tout ce que vous devez savoir." },
    en: { title: "DUNS Number and International Public Procurement", excerpt: "The DUNS number is essential for responding to European and international public tenders. Here is everything you need to know." },
    de: { title: "DUNS-Nummer und Internationale Öffentliche Ausschreibungen", excerpt: "Die DUNS-Nummer ist unverzichtbar für die Teilnahme an europäischen und internationalen Ausschreibungen. Alles, was Sie wissen müssen." },
    es: { title: "Número DUNS y Licitaciones Públicas Internacionales", excerpt: "El número DUNS es imprescindible para responder a licitaciones públicas europeas e internacionales. Todo lo que necesitas saber." },
    it: { title: "Numero DUNS e Appalti Pubblici Internazionali", excerpt: "Il numero DUNS è indispensabile per rispondere agli appalti pubblici europei e internazionali. Tutto quello che devi sapere." },
    nl: { title: "DUNS-nummer en Internationale Overheidsopdrachten", excerpt: "Het DUNS-nummer is essentieel voor het reageren op Europese en internationale overheidsopdrachten. Alles wat u moet weten." },
    pt: { title: "Número DUNS e Contratos Públicos Internacionais", excerpt: "O número DUNS é indispensável para responder a contratos públicos europeus e internacionais. Tudo o que você precisa saber." },
    pl: { title: "Numer DUNS i Międzynarodowe Zamówienia Publiczne", excerpt: "Numer DUNS jest niezbędny do odpowiadania na europejskie i międzynarodowe przetargi publiczne. Wszystko, co musisz wiedzieć." },
    sv: { title: "DUNS-nummer och Internationell Offentlig Upphandling", excerpt: "DUNS-numret är viktigt för att delta i europeiska och internationella offentliga upphandlingar. Allt du behöver veta." },
    da: { title: "DUNS-nummer og Internationale Offentlige Udbud", excerpt: "DUNS-nummeret er afgørende for at deltage i europæiske og internationale offentlige udbud. Alt hvad du behøver at vide." },
    no: { title: "DUNS-nummer og Internasjonale Offentlige Anskaffelser", excerpt: "DUNS-nummeret er viktig for å svare på europeiske og internasjonale offentlige anbud. Alt du trenger å vite." },
    fi: { title: "DUNS-numero ja Kansainväliset Julkiset Hankinnat", excerpt: "DUNS-numero on välttämätön eurooppalaisiin ja kansainvälisiin julkisiin hankintoihin vastaamiseksi. Kaikki mitä sinun täytyy tietää." },
    cs: { title: "Číslo DUNS a Mezinárodní Veřejné Zakázky", excerpt: "Číslo DUNS je nezbytné pro účast v evropských a mezinárodních veřejných zakázkách. Vše, co potřebujete vědět." },
    hu: { title: "DUNS-szám és Nemzetközi Közbeszerzések", excerpt: "A DUNS-szám nélkülözhetetlen az európai és nemzetközi közbeszerzéseken való részvételhez. Minden, amit tudnia kell." },
    ro: { title: "Numărul DUNS și Achizițiile Publice Internaționale", excerpt: "Numărul DUNS este indispensabil pentru a răspunde la licitații publice europene și internaționale. Tot ce trebuie să știți." },
    el: { title: "Αριθμός DUNS και Διεθνείς Δημόσιες Συμβάσεις", excerpt: "Ο αριθμός DUNS είναι απαραίτητος για να απαντήσετε σε ευρωπαϊκές και διεθνείς δημόσιες συμβάσεις. Όλα όσα πρέπει να γνωρίζετε." },
  },
  "verifier-numero-duns": {
    fr: { title: "Comment Vérifier le Numéro DUNS d'une Entreprise", excerpt: "Les méthodes pour rechercher et vérifier le numéro DUNS d'une entreprise en ligne, et ce que cette vérification révèle." },
    en: { title: "How to Verify a Company's DUNS Number", excerpt: "Methods to search and verify a company's DUNS number online, and what this verification reveals." },
    de: { title: "So überprüfen Sie die DUNS-Nummer eines Unternehmens", excerpt: "Methoden zur Online-Suche und Überprüfung der DUNS-Nummer eines Unternehmens und was diese Überprüfung ergibt." },
    es: { title: "Cómo Verificar el Número DUNS de una Empresa", excerpt: "Métodos para buscar y verificar el número DUNS de una empresa en línea, y lo que esta verificación revela." },
    it: { title: "Come Verificare il Numero DUNS di un'Azienda", excerpt: "Metodi per cercare e verificare il numero DUNS di un'azienda online e cosa rivela questa verifica." },
    nl: { title: "Hoe u het DUNS-nummer van een bedrijf kunt verifiëren", excerpt: "Methoden om het DUNS-nummer van een bedrijf online te zoeken en te verifiëren, en wat deze verificatie onthult." },
    pt: { title: "Como Verificar o Número DUNS de uma Empresa", excerpt: "Métodos para pesquisar e verificar o número DUNS de uma empresa online e o que essa verificação revela." },
    pl: { title: "Jak Zweryfikować Numer DUNS Firmy", excerpt: "Metody wyszukiwania i weryfikacji numeru DUNS firmy online oraz co ta weryfikacja ujawnia." },
    sv: { title: "Hur du verifierar ett företags DUNS-nummer", excerpt: "Metoder för att söka och verifiera ett företags DUNS-nummer online och vad denna verifiering avslöjar." },
    da: { title: "Sådan verificerer du et virksomheds DUNS-nummer", excerpt: "Metoder til at søge og verificere et virksomheds DUNS-nummer online og hvad denne verificering afslører." },
    no: { title: "Slik verifiserer du et selskaps DUNS-nummer", excerpt: "Metoder for å søke etter og verifisere et selskaps DUNS-nummer på nett og hva denne verifiseringen avslører." },
    fi: { title: "Kuinka tarkistaa yrityksen DUNS-numero", excerpt: "Menetelmät yrityksen DUNS-numeron hakemiseksi ja tarkistamiseksi verkossa sekä mitä tämä tarkistus paljastaa." },
    cs: { title: "Jak ověřit číslo DUNS společnosti", excerpt: "Metody pro vyhledávání a ověřování čísla DUNS společnosti online a co toto ověření odhaluje." },
    hu: { title: "Hogyan ellenőrizze egy vállalat DUNS-számát", excerpt: "Módszerek egy vállalat DUNS-számának online keresésére és ellenőrzésére, és mit fed fel ez az ellenőrzés." },
    ro: { title: "Cum să Verificați Numărul DUNS al unei Companii", excerpt: "Metode pentru a căuta și verifica numărul DUNS al unei companii online și ce dezvăluie această verificare." },
    el: { title: "Πώς να Επαληθεύσετε τον Αριθμό DUNS μιας Εταιρείας", excerpt: "Μέθοδοι αναζήτησης και επαλήθευσης του αριθμού DUNS μιας εταιρείας online και τι αποκαλύπτει αυτή η επαλήθευση." },
  },
  "duns-number-dun-bradstreet": {
    fr: { title: "Dun & Bradstreet et le DUNS Number : Tout Comprendre", excerpt: "L'histoire fascinante de Dun & Bradstreet, fondée en 1841, et la création du DUNS Number en 1962 qui relie aujourd'hui 455 millions d'entreprises." },
    en: { title: "Dun & Bradstreet and the DUNS Number: All You Need to Know", excerpt: "The fascinating history of Dun & Bradstreet, founded in 1841, and the creation of the DUNS Number in 1962 that now links 455 million companies." },
    de: { title: "Dun & Bradstreet und die DUNS-Nummer: Alles verstehen", excerpt: "Die faszinierende Geschichte von Dun & Bradstreet, gegründet 1841, und die Schaffung der DUNS-Nummer 1962, die heute 455 Millionen Unternehmen verbindet." },
    es: { title: "Dun & Bradstreet y el Número DUNS: Todo lo que Necesitas Saber", excerpt: "La fascinante historia de Dun & Bradstreet, fundada en 1841, y la creación del Número DUNS en 1962 que hoy conecta 455 millones de empresas." },
    it: { title: "Dun & Bradstreet e il Numero DUNS: Tutto da Sapere", excerpt: "La storia affascinante di Dun & Bradstreet, fondata nel 1841, e la creazione del Numero DUNS nel 1962 che oggi collega 455 milioni di aziende." },
    nl: { title: "Dun & Bradstreet en het DUNS-nummer: Alles begrijpen", excerpt: "De fascinerende geschiedenis van Dun & Bradstreet, opgericht in 1841, en de creatie van het DUNS-nummer in 1962 dat nu 455 miljoen bedrijven verbindt." },
    pt: { title: "Dun & Bradstreet e o Número DUNS: Tudo que Você Precisa Saber", excerpt: "A fascinante história da Dun & Bradstreet, fundada em 1841, e a criação do Número DUNS em 1962 que hoje conecta 455 milhões de empresas." },
    pl: { title: "Dun & Bradstreet i Numer DUNS: Wszystko, co musisz wiedzieć", excerpt: "Fascynująca historia Dun & Bradstreet, założonej w 1841 roku, i stworzenie numeru DUNS w 1962 roku, który dziś łączy 455 milionów firm." },
    sv: { title: "Dun & Bradstreet och DUNS-nummer: Allt du behöver veta", excerpt: "Den fascinerande historien om Dun & Bradstreet, grundat 1841, och skapandet av DUNS-numret 1962 som nu kopplar samman 455 miljoner företag." },
    da: { title: "Dun & Bradstreet og DUNS-nummeret: Alt du skal vide", excerpt: "Den fascinerende historie om Dun & Bradstreet, grundlagt i 1841, og oprettelsen af DUNS-nummeret i 1962, der nu forbinder 455 millioner virksomheder." },
    no: { title: "Dun & Bradstreet og DUNS-nummeret: Alt du trenger å vite", excerpt: "Den fascinerende historien om Dun & Bradstreet, grunnlagt i 1841, og opprettelsen av DUNS-nummeret i 1962 som nå kobler 455 millioner selskaper." },
    fi: { title: "Dun & Bradstreet ja DUNS-numero: Kaikki mitä sinun täytyy tietää", excerpt: "Dun & Bradstreetin kiehtova historia, perustettu 1841, ja DUNS-numeron luominen 1962, joka nyt yhdistää 455 miljoonaa yritystä." },
    cs: { title: "Dun & Bradstreet a číslo DUNS: Vše, co potřebujete vědět", excerpt: "Fascinující příběh Dun & Bradstreet, založené v roce 1841, a vytvoření čísla DUNS v roce 1962, které nyní propojuje 455 milionů firem." },
    hu: { title: "Dun & Bradstreet és a DUNS-szám: Minden, amit tudnia kell", excerpt: "A Dun & Bradstreet lenyűgöző története, amelyet 1841-ben alapítottak, és a DUNS-szám 1962-es létrehozása, amely ma 455 millió vállalatot köt össze." },
    ro: { title: "Dun & Bradstreet și Numărul DUNS: Tot ce Trebuie să Știți", excerpt: "Istoria fascinantă a Dun & Bradstreet, fondată în 1841, și crearea Numărului DUNS în 1962 care conectează astăzi 455 de milioane de companii." },
    el: { title: "Dun & Bradstreet και ο Αριθμός DUNS: Όλα όσα Πρέπει να Γνωρίζετε", excerpt: "Η συναρπαστική ιστορία της Dun & Bradstreet, που ιδρύθηκε το 1841, και η δημιουργία του Αριθμού DUNS το 1962 που σήμερα συνδέει 455 εκατομμύρια εταιρείες." },
  },
};

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const ui = UI[lang] || UI.fr;
  return {
    title: ui.metaTitle,
    description: ui.metaDesc,
    alternates: { canonical: `${SITE_URL}/${lang}/blog` },
    openGraph: {
      title: ui.metaTitle,
      description: ui.metaDesc,
      url: `${SITE_URL}/${lang}/blog`,
      siteName: "DUNS Verify",
      type: "website",
    },
  };
}

export default async function BlogIndex({ params }) {
  const { lang } = await params;
  const ui = UI[lang] || UI.fr;

  // Build article list filtered by language availability
  const articleSlugs = [
    "numero-duns",
    "numero-duns-definition",
    "obtenir-numero-duns-france",
    "numero-duns-gratuit",
    "numero-duns-apple-developer",
    "difference-duns-siret",
    "numero-duns-google-play",
    "numero-duns-marches-publics",
    "verifier-numero-duns",
    "duns-number-dun-bradstreet",
  ];

  const articles = articleSlugs
    .filter((slug) => BLOG_CONFIG[slug]?.available.includes(lang))
    .map((slug) => {
      const t = ARTICLES_T[slug]?.[lang] || ARTICLES_T[slug]?.fr;
      return { slug, title: t?.title || "", excerpt: t?.excerpt || "" };
    });

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader lang={lang} />

      <main className="flex-1 py-16 px-4 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <nav className="text-sm text-slate-500 mb-4">
              <a href={`/${lang}`} className="hover:text-emerald-600 transition-colors">{ui.home}</a>
              <span className="mx-2">›</span>
              <span className="text-slate-700">{ui.blog}</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-[#1E3A5F] mb-4">{ui.title}</h1>
            <p className="text-lg text-slate-600 max-w-2xl">{ui.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {articles.map((article) => (
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
                  {ui.readMore} <ArrowRight className="w-4 h-4" />
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
