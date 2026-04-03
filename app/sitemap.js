const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'nl', 'pt', 'pl', 'sv', 'da', 'no', 'fi', 'cs', 'hu', 'ro', 'el'];

const BLOG_SLUGS = [
  'numero-duns',
  'numero-duns-definition',
  'obtenir-numero-duns-france',
  'numero-duns-gratuit',
  'numero-duns-apple-developer',
  'difference-duns-siret',
  'numero-duns-google-play',
  'numero-duns-marches-publics',
  'verifier-numero-duns',
  'duns-number-dun-bradstreet',
];

export default function sitemap() {
  const languages = Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}/${l}`]));

  const langPages = LOCALES.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: { languages },
  }));

  const staticPages = [
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cgv`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Blog index pages (all locales, but content is French)
  const blogIndexPages = LOCALES.map((lang) => ({
    url: `${SITE_URL}/${lang}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Blog article pages (French locale only for now — other locales will serve the same French content)
  const blogArticlePages = LOCALES.flatMap((lang) =>
    BLOG_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${lang}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: lang === 'fr' ? 0.7 : 0.5,
    }))
  );

  return [...langPages, ...staticPages, ...blogIndexPages, ...blogArticlePages];
}
