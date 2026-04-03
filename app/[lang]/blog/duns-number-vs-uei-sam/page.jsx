import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "duns-number-vs-uei-sam";

const META = {
  en: {
    title: "DUNS Number vs UEI: SAM.gov Transition Guide 2026 | DUNS Verify",
    description: "DUNS number replaced by UEI on SAM.gov in 2022. Learn the differences, what changed for government contractors, and whether you still need a DUNS number.",
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (lang !== "en") return {};
  return {
    title: META.en.title,
    description: META.en.description,
    alternates: { canonical: `${SITE_URL}/en/blog/${SLUG}` },
    openGraph: {
      title: META.en.title,
      description: META.en.description,
      url: `${SITE_URL}/en/blog/${SLUG}`,
      siteName: "DUNS Verify",
      type: "article",
    },
  };
}

function ContentEN({ lang }) {
  return (
    <>
      <nav className="text-sm text-slate-500 mb-6">
        <a href={`/${lang}`} className="hover:text-emerald-600 transition-colors">Home</a>
        <span className="mx-2">›</span>
        <a href={`/${lang}/blog`} className="hover:text-emerald-600 transition-colors">Blog</a>
        <span className="mx-2">›</span>
        <span className="text-slate-700">DUNS Number vs UEI: SAM.gov Transition</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS Number vs UEI: SAM.gov Transition Guide 2026
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        In April 2022, the US federal government made a major change: the DUNS number was replaced by the Unique Entity Identifier (UEI) for all SAM.gov registrations and federal procurement. If you&apos;re a government contractor — or thinking about becoming one — you need to understand exactly what changed, what stayed the same, and whether you still need a DUNS number (spoiler: yes, you still do, just not for federal contracts).
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">The Big Change: DUNS Replaced by UEI on SAM.gov (April 2022)</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        For over five decades, the DUNS number was the required identifier for US government contracting. Every business that wanted to bid on federal contracts, receive federal grants, or register on the System for Award Management (SAM.gov) needed a DUNS number issued by Dun &amp; Bradstreet.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        On <strong>April 4, 2022</strong>, the General Services Administration (GSA) officially transitioned SAM.gov from the DUNS number to the Unique Entity Identifier (UEI). The UEI is now assigned directly by SAM.gov — eliminating the dependency on a private company (D&amp;B) for federal procurement purposes.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        This change was driven by several factors: the government wanted greater control over the entity identification process, reduced costs for contractors (since D&amp;B had been known to upsell additional services), and a more streamlined registration experience.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Transition date", value: "April 4, 2022" },
          { label: "New identifier", value: "UEI (12 chars)" },
          { label: "Old identifier", value: "DUNS (9 digits)" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-[#F8FAFC] rounded-xl p-5 text-center">
            <p className="text-2xl font-extrabold text-[#1E3A5F]">{value}</p>
            <p className="text-sm text-slate-600 mt-1">{label}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">What Is the UEI (Unique Entity Identifier)?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The Unique Entity Identifier (UEI) is a 12-character alphanumeric code assigned to each entity registered in SAM.gov. Unlike the DUNS number, which was assigned by a private company, the UEI is assigned directly by the US federal government through the SAM.gov system.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        UEI codes look like this: <strong>ABC123DEF456</strong> — a mix of letters and numbers totaling 12 characters. This format was specifically chosen to make UEIs impossible to predict or reverse-engineer, unlike the sequential DUNS numbers.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Key Features of the UEI</h3>
      <div className="space-y-3 mb-6">
        {[
          { name: "Issued by SAM.gov (US government)", detail: "No need to register with a third-party company. Your UEI is assigned automatically when you create or update your SAM.gov registration." },
          { name: "12 alphanumeric characters", detail: "Format is more complex than DUNS (9 digits), making it harder to guess or spoof." },
          { name: "Free to obtain", detail: "No fees for getting a UEI — unlike the DUNS system which had optional paid services." },
          { name: "US federal use only", detail: "The UEI is exclusively for US federal government purposes (contracts, grants, loans). It has no standing outside the federal ecosystem." },
          { name: "Assigned automatically for existing registrants", detail: "Businesses already registered in SAM.gov had their UEI assigned automatically during the transition — you didn't need to re-register." },
        ].map(({ name, detail }) => (
          <div key={name} className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2"></div>
            <div>
              <p className="font-semibold text-slate-800">{name}</p>
              <p className="text-sm text-slate-600 mt-0.5">{detail}</p>
            </div>
          </div>
        ))}
      </div>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS Number vs UEI: Key Differences</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="text-left p-3 rounded-tl-lg">Feature</th>
              <th className="text-left p-3">DUNS Number</th>
              <th className="text-left p-3 rounded-tr-lg">UEI</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Who assigns it", "Dun & Bradstreet (private company)", "SAM.gov (US federal government)"],
              ["Format", "9 digits (XXX-XXX-XXX)", "12 alphanumeric characters"],
              ["Cost", "Free (D&B) / €4.99 via DUNS Verify", "Free"],
              ["Geographic scope", "Worldwide (224 countries)", "US federal government only"],
              ["Used for", "Apple, Google Play, EU procurement, business credit, international B2B", "US federal contracts, grants, and awards only"],
              ["Required for SAM.gov", "No (replaced April 2022)", "Yes"],
              ["Required for Apple Developer", "Yes", "No"],
              ["Required for Google Play", "Yes", "No"],
              ["Required for EU/international procurement", "Yes", "No"],
              ["Business credit (D&B Paydex)", "Yes", "No"],
            ].map(([feature, duns, uei], i) => (
              <tr key={feature} className={i % 2 === 0 ? "bg-white border-b border-slate-100" : "bg-[#F8FAFC] border-b border-slate-100"}>
                <td className="p-3 font-medium text-slate-800">{feature}</td>
                <td className="p-3 text-slate-700">{duns}</td>
                <td className="p-3 text-slate-700">{uei}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Do You Still Need a DUNS Number in 2026?</h2>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
        <p className="font-bold text-emerald-800 text-lg mb-2">Short answer: Yes — for everything outside of US federal government contracting.</p>
        <p className="text-emerald-700 text-sm leading-relaxed">
          The UEI replaced DUNS <em>only</em> for SAM.gov and US federal procurement. The DUNS number is still actively required for Apple Developer, Google Play, European government procurement, international B2B, and business credit building.
        </p>
      </div>

      <p className="text-slate-700 leading-relaxed mb-4">
        Many contractors made the mistake of thinking the UEI transition meant they no longer needed a DUNS number at all. This is incorrect. The DUNS system serves an entirely different global ecosystem from the US federal procurement system. Here&apos;s where DUNS is still required in 2026:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Apple Developer Program</p>
            <p className="text-sm text-slate-600 mt-1">Apple continues to require a DUNS number to verify organization accounts. This has not changed since the UEI transition. Apple uses D&amp;B&apos;s database, not SAM.gov, to verify businesses.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Google Play Console</p>
            <p className="text-sm text-slate-600 mt-1">Google Play business developer accounts still require DUNS verification. UEI is not accepted as a substitute.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">European Union and NATO Procurement</p>
            <p className="text-sm text-slate-600 mt-1">The EU, NATO, and most European government procurement systems still use DUNS numbers as their primary business identifier. The UEI has no meaning outside the US federal system.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">International B2B Partnerships</p>
            <p className="text-sm text-slate-600 mt-1">Large multinationals and international enterprises use DUNS numbers to vet suppliers worldwide. Your DUNS number is your global business identity outside of the US tax and federal procurement systems.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 rounded-full bg-[#1E3A5F] flex-shrink-0 mt-2"></div>
          <div>
            <p className="font-semibold text-slate-800">Business Credit (D&amp;B Paydex Score)</p>
            <p className="text-sm text-slate-600 mt-1">Your D&amp;B credit file and Paydex score are anchored to your DUNS number. If you want to build business credit — separate from your personal credit — you need a DUNS number. UEI does not create a credit profile.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Impact on Government Contractors</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        If you are a government contractor who registered in SAM.gov before April 2022, your UEI was automatically assigned — you didn&apos;t need to do anything. If you registered after April 2022, you received your UEI as part of the standard SAM.gov registration process.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        For new government contractors in 2026, the process is:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6 ml-2">
        <li>Register on SAM.gov (sam.gov/register) — your UEI will be assigned automatically</li>
        <li>Complete your SAM.gov entity profile with business information</li>
        <li>Wait for SAM.gov to approve your registration (can take 7–10 business days)</li>
        <li>Begin using your UEI for all federal contracting and grant applications</li>
      </ol>
      <p className="text-slate-700 leading-relaxed mb-4">
        Note that while the UEI replaced DUNS for federal contracting, many solicitation documents and legacy systems still reference DUNS numbers in their paperwork. Don&apos;t be confused — these are legacy references, and your UEI is what&apos;s actually required for current registrations.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Additionally, some federal subcontracting relationships and prime contractor databases still use DUNS numbers for internal tracking. Maintaining your DUNS number even as a government contractor remains a good practice.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">How to Get Your UEI</h2>
      <div className="bg-[#F8FAFC] rounded-xl p-5 mb-6">
        <p className="font-semibold text-slate-800 mb-3">Step-by-step UEI registration on SAM.gov:</p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm">
          <li>Go to sam.gov and click &quot;Register Your Entity&quot;</li>
          <li>Create a login.gov account (if you don&apos;t have one)</li>
          <li>Select your entity type (business, government, individual, etc.)</li>
          <li>Enter your legal business name and address</li>
          <li>Your UEI is assigned automatically during the registration flow</li>
          <li>Complete all required fields in your entity profile</li>
          <li>Submit for review — approval typically takes 7–10 business days</li>
        </ol>
        <p className="text-sm text-slate-500 mt-4">Cost: Free. Note: SAM.gov registration must be renewed annually.</p>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">How to Get Your DUNS Number</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Your DUNS number is separate from your UEI and still needed for all non-federal purposes. Most registered businesses already have a DUNS number in D&amp;B&apos;s database — often without knowing it.
      </p>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-6">
        <p className="font-semibold text-emerald-800 mb-3">Fastest method: DUNS Verify (2 minutes)</p>
        <ol className="list-decimal list-inside space-y-1.5 text-sm text-emerald-900">
          <li>Go to DUNS Verify (dunsverify.com)</li>
          <li>Enter your company name and country</li>
          <li>Select your company from the results</li>
          <li>Pay €4.99 — receive your DUNS number instantly</li>
        </ol>
      </div>
      <p className="text-slate-700 leading-relaxed mb-4">
        Alternatively, you can request a DUNS number directly from D&amp;B&apos;s website for free, but this process can take up to 30 business days. For most businesses that already exist in D&amp;B&apos;s database of 455 million companies, DUNS Verify retrieves the existing number instantly.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Frequently Asked Questions</h2>

      <div className="space-y-6 mb-8">
        <div>
          <p className="font-semibold text-slate-800 mb-1">Is DUNS completely obsolete now?</p>
          <p className="text-slate-700 text-sm leading-relaxed">No. DUNS is only obsolete for SAM.gov and US federal procurement. For everything else — Apple Developer, Google Play, EU procurement, international business, and business credit — DUNS remains the global standard.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">I already have a UEI — do I also need a DUNS number?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Likely yes, if you need to publish apps on the App Store, work with international partners, participate in EU procurement, or build your D&amp;B credit profile. Your UEI and DUNS number serve different ecosystems and are both necessary for a complete business identity.</p>
        </div>
        <div>
          <p className="font-semibold text="slate-800 mb-1">What happened to my old DUNS number after the SAM.gov transition?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Your old DUNS number still exists in the D&amp;B database and can still be used for all non-federal purposes. SAM.gov simply stopped using it as the primary identifier — but the DUNS number itself was not deleted or deactivated.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Can I use my UEI for Apple Developer enrollment?</p>
          <p className="text-slate-700 text-sm leading-relaxed">No. Apple uses D&amp;B&apos;s database for verification and requires a DUNS number. UEI is not accepted for Apple Developer organization accounts.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Do I need to pay for a UEI?</p>
          <p className="text-slate-700 text-sm leading-relaxed">No. UEI registration on SAM.gov is completely free. This was one of the explicit goals of the transition — removing the commercial intermediary (D&amp;B) from the federal procurement identification process.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">What&apos;s the difference between SAM.gov registration and getting a UEI?</p>
          <p className="text-slate-700 text-sm leading-relaxed">When you register your entity on SAM.gov, a UEI is automatically assigned as part of that process. You cannot get a UEI without a SAM.gov registration. Unlike the DUNS number, which could be assigned without the business&apos;s knowledge, a UEI is only created when you actively register on SAM.gov.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Does a non-US company need a UEI?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Only if the non-US company wants to bid on US federal contracts or receive US federal grants. For all other purposes, non-US companies use their DUNS number. The UEI has no relevance outside the US federal procurement context.</p>
        </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Related articles</h3>
        <ul className="space-y-2">
          {[
            { slug: "how-to-get-a-duns-number", title: "How to Get a DUNS Number in 2026: Fast & Easy Guide" },
            { slug: "duns-number-vs-ein", title: "DUNS Number vs EIN: Key Differences Explained" },
            { slug: "numero-duns-marches-publics", title: "DUNS Number for Government Contracts" },
            { slug: "numero-duns", title: "DUNS Number: The Complete Guide 2026" },
          ].map((a) => (
            <li key={a.slug}>
              <a href={`/${lang}/blog/${a.slug}`} className="text-emerald-600 hover:underline text-sm">
                → {a.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <BlogCTA lang={lang} />
    </>
  );
}

export default async function Article({ params }) {
  const { lang } = await params;
  if (lang !== "en") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: META.en.title,
    description: META.en.description,
    author: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DUNS Verify", url: SITE_URL },
    datePublished: "2026-04-03",
    dateModified: "2026-04-03",
    url: `${SITE_URL}/en/blog/${SLUG}`,
    mainEntityOfPage: `${SITE_URL}/en/blog/${SLUG}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen flex flex-col">
        <BlogHeader lang={lang} />
        <main className="flex-1 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <ContentEN lang={lang} />
          </div>
        </main>
        <BlogFooter lang={lang} />
      </div>
    </>
  );
}
