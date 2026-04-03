const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const LOCALES = ['fr', 'en', 'de', 'es', 'it', 'nl', 'pt', 'pl', 'sv', 'da', 'no', 'fi', 'cs', 'hu', 'ro', 'el'];

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

  return [...langPages, ...staticPages];
}
