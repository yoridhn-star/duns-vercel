const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/success", "/fr/success", "/en/success", "/de/success", "/es/success"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
