import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "duns-number-vs-ein";

const META = {
  en: {
    title: "DUNS Number vs EIN: Key Differences Explained | DUNS Verify",
    description: "DUNS number vs EIN — what's the difference? Learn when you need each business identifier, how they work together, and why both matter for your company.",
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
        <span className="text-slate-700">DUNS Number vs EIN</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        DUNS Number vs EIN: Key Differences Explained
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        When you start a business, you&apos;ll quickly encounter two important identification numbers: the EIN and the DUNS number. Both are 9-digit identifiers, both are essential for running a legitimate US business — and both are completely different from each other. This guide explains exactly what each one is, who issues it, what it&apos;s used for, and when you need both.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Quick Comparison: DUNS Number vs EIN</h2>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="text-left p-3 rounded-tl-lg">Feature</th>
              <th className="text-left p-3">EIN</th>
              <th className="text-left p-3 rounded-tr-lg">DUNS Number</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Issued by", "IRS (Internal Revenue Service)", "Dun & Bradstreet (D&B)"],
              ["Format", "9 digits (XX-XXXXXXX)", "9 digits (XXX-XXX-XXX)"],
              ["Primary purpose", "Tax identification", "Business identity & credit"],
              ["Geographic scope", "United States only", "Worldwide (224 countries)"],
              ["Cost", "Free", "Free (or €4.99 via DUNS Verify)"],
              ["Required for", "Filing taxes, opening bank accounts, hiring employees", "Apple Developer, government contracts, business credit, B2B verification"],
              ["Who assigns it", "US federal government", "Private company (D&B)"],
              ["Also known as", "Federal Tax ID, FEIN, TIN", "D-U-N-S, Data Universal Numbering System"],
            ].map(([feature, ein, duns], i) => (
              <tr key={feature} className={i % 2 === 0 ? "bg-white border-b border-slate-100" : "bg-[#F8FAFC] border-b border-slate-100"}>
                <td className="p-3 font-medium text-slate-800">{feature}</td>
                <td className="p-3 text-slate-700">{ein}</td>
                <td className="p-3 text-slate-700">{duns}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">What Is an EIN?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        An EIN (Employer Identification Number) is a 9-digit number issued by the Internal Revenue Service (IRS). It is the US federal government&apos;s way of identifying your business for tax purposes — functioning much like a Social Security Number (SSN) does for individuals.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        EINs are formatted as two digits, a hyphen, and then seven digits: <strong>XX-XXXXXXX</strong>. For example: 12-3456789.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is an EIN Used For?</h3>
      <div className="space-y-3 mb-6">
        {[
          { name: "Filing federal and state taxes", detail: "Your EIN identifies your business on all federal tax returns, payroll taxes, and state tax filings." },
          { name: "Opening a business bank account", detail: "Almost every US bank requires an EIN to open a business checking or savings account." },
          { name: "Hiring employees", detail: "You need an EIN to report employment taxes to the IRS and issue W-2 forms to employees." },
          { name: "Applying for business licenses and permits", detail: "Many local and state licenses require your EIN as part of the application." },
          { name: "Establishing business credit", detail: "Lenders and credit bureaus use your EIN to keep your business credit separate from your personal credit." },
          { name: "Working with vendors and contractors", detail: "Vendors may request your EIN (on a W-9 form) before making payments to your business." },
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

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Who Needs an EIN?</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Any US business that has employees, operates as a corporation or partnership, files certain tax returns, or withholds taxes on income paid to non-resident aliens is required to have an EIN. Even sole proprietors without employees often choose to get one to avoid using their Social Security Number for business purposes.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Getting an EIN is free and can be done instantly online through the IRS website. The IRS issues your EIN immediately upon completing their online application — no waiting period required.
      </p>

      <BlogCTA lang={lang} />

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">What Is a DUNS Number?</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        A DUNS number (Data Universal Numbering System) is a 9-digit identifier issued by Dun &amp; Bradstreet (D&amp;B), a private commercial data company. Unlike the EIN, the DUNS number is not issued by a government agency — it is a commercial standard that has become the global default for business identification.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        DUNS numbers are formatted as three groups of three digits separated by hyphens: <strong>XXX-XXX-XXX</strong>. For example: 123-456-789. The number is permanent and stays with your business even if you move locations or change your name.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Introduced in 1962, the DUNS system now covers over 455 million businesses in 224 countries — making it the world&apos;s most widely adopted business identifier outside of government tax systems.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">What Is a DUNS Number Used For?</h3>
      <div className="space-y-3 mb-6">
        {[
          { name: "Apple Developer Program", detail: "Required for organization accounts. Apple verifies your business exists via your DUNS number before granting developer access." },
          { name: "Google Play Console", detail: "Required for business developer accounts on Google Play." },
          { name: "US Government contracts and grants", detail: "Historically required for all federal contractors (now transitioning to UEI for SAM.gov, but DUNS still referenced widely)." },
          { name: "Business credit building", detail: "D&B uses your DUNS number as the anchor for your business credit file, including your Paydex score." },
          { name: "International procurement", detail: "Required by many European governments, NATO, the UN, and multinational corporations for supplier verification." },
          { name: "B2B partnerships", detail: "Large enterprises often require DUNS verification before entering into supplier or partner agreements." },
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Key Differences Between DUNS and EIN</h2>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">1. Who Issues Them</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        The EIN is issued by the US government (IRS). It is a legal requirement for most US businesses and is tied to your tax obligations as defined by federal law.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        The DUNS number is issued by Dun &amp; Bradstreet, a private company. There is no legal mandate to have a DUNS number — but it has become a de facto requirement for many business activities, both public (government contracts) and private (Apple, Google, enterprise B2B).
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">2. What They Are Used For</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        <strong>EIN</strong> = tax identity. Your EIN is used by the IRS to track your business&apos;s tax obligations. It tells the government who you are for the purposes of federal taxation.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        <strong>DUNS</strong> = commercial identity. Your DUNS number is used by businesses, governments, and platforms to verify that your company exists, is legitimate, and can be looked up in a global database of 455 million businesses.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">3. Geographic Scope</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        An EIN is a US-only identifier. It is issued by the IRS and is only relevant within the United States tax system. Foreign companies doing business in the US may need an EIN for tax purposes, but it has no relevance outside the US context.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        A DUNS number is global. Businesses in 224 countries use DUNS numbers, and the system is recognized by international organizations including the United Nations, NATO, and the European Commission.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">4. Privacy and Public Access</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        Your EIN is relatively private — it should only be shared with the IRS, financial institutions, and trusted vendors on W-9 forms. Sharing your EIN publicly can expose you to identity theft risks.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Your DUNS number, by contrast, is a public identifier. It can be looked up by anyone in the D&amp;B database. This transparency is by design — it allows counterparts to verify your business exists before entering into transactions.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">When You Need Both</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        Most serious US businesses need both an EIN and a DUNS number. Here are the key scenarios where both are required simultaneously:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { title: "Government Contracts", body: "Federal contracting requires your EIN for tax compliance and your DUNS (or UEI) for SAM.gov registration and vendor identification." },
          { title: "Business Credit Building", body: "Your EIN anchors your credit with US lenders, while your DUNS number anchors your D&B Paydex score. Both are needed for a complete business credit profile." },
          { title: "Apple Developer (Organization)", body: "You need an EIN to incorporate your business, and a DUNS number to verify your organization with Apple." },
          { title: "Bank Loans and Lines of Credit", body: "Lenders will check both your EIN (tax records) and your DUNS/Paydex score (D&B credit profile) when evaluating your creditworthiness." },
        ].map(({ title, body }) => (
          <div key={title} className="bg-[#F8FAFC] rounded-xl p-5">
            <p className="font-semibold text-[#1E3A5F] mb-2">{title}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">DUNS Number for Business Credit Building</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        One of the most important — and most overlooked — uses of a DUNS number is establishing your business credit profile. When you have a DUNS number and start making purchases on net-30 payment terms with vendors who report to D&amp;B, you build a Paydex score.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        The <strong>Paydex score</strong> is D&amp;B&apos;s business credit score, ranging from 0 to 100. A score of 80 or above indicates that you consistently pay on time. This score is separate from your personal credit score and can be used to qualify for business credit cards, lines of credit, and loans without putting your personal credit at risk.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Without a DUNS number, you have no D&amp;B credit file. This means lenders and suppliers have no independent way to verify your payment history, which can make it harder and more expensive to access business credit.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">EIN for Tax and Banking</h2>
      <p className="text-slate-700 leading-relaxed mb-4">
        The EIN is the foundational identifier for your US business from a legal and banking perspective. You cannot open a business bank account, process payroll, or file business taxes without one. For LLCs, corporations, and partnerships, an EIN is mandatory from day one.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        For sole proprietors with no employees, an EIN is optional — you could use your SSN instead — but most financial advisors recommend getting one to keep business and personal finances cleanly separated and to reduce identity theft risk.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">How to Get Each One</h2>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-[#1E3A5F] text-lg mb-3">Getting an EIN</p>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-700">
            <li>Go to irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online</li>
            <li>Answer questions about your business structure</li>
            <li>Verify your identity as the responsible party</li>
            <li>Submit — your EIN is issued instantly online</li>
          </ol>
          <p className="text-sm text-slate-500 mt-3">Cost: Free. Time: Immediate.</p>
        </div>
        <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
          <p className="font-bold text-[#1E3A5F] text-lg mb-3">Getting a DUNS Number</p>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-700">
            <li>Go to DUNS Verify (dunsverify.com)</li>
            <li>Enter your company name and country</li>
            <li>Select your company from results</li>
            <li>Pay €4.99 and receive your number instantly</li>
          </ol>
          <p className="text-sm text-slate-500 mt-3">Cost: €4.99. Time: 2 minutes.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Frequently Asked Questions</h2>

      <div className="space-y-6 mb-8">
        <div>
          <p className="font-semibold text-slate-800 mb-1">Can I use my EIN instead of a DUNS number?</p>
          <p className="text-slate-700 text-sm leading-relaxed">No. These serve entirely different purposes. Apple, Google Play, and government contracting systems require a DUNS number specifically — your EIN cannot substitute for it.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Do non-US businesses need an EIN?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Foreign companies that have US-sourced income, US employees, or US-based partnerships may need to obtain an EIN. However, non-US businesses don&apos;t automatically need one unless they have US tax obligations.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Do non-US businesses need a DUNS number?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Yes — DUNS numbers are used worldwide. Businesses in Europe, Asia, and beyond use DUNS for Apple Developer enrollment, international government contracts, and B2B verification. The DUNS system covers 224 countries.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Is my DUNS number linked to my EIN?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Not automatically. D&amp;B may include your EIN in their records, but the two systems are independent. You manage your D&amp;B profile separately from your IRS records.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Can I have a DUNS number without an EIN?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Yes. Non-US businesses get DUNS numbers without EINs all the time. Even US businesses can get a DUNS number before they have an EIN (though in practice, you usually register both around the same time).</p>
        </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Related articles</h3>
        <ul className="space-y-2">
          {[
            { slug: "how-to-get-a-duns-number", title: "How to Get a DUNS Number in 2026: Fast & Easy Guide" },
            { slug: "duns-number-vs-uei-sam", title: "DUNS Number vs UEI: SAM.gov Transition Guide 2026" },
            { slug: "numero-duns", title: "DUNS Number: The Complete Guide 2026" },
            { slug: "verifier-numero-duns", title: "How to Verify a Company's DUNS Number" },
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
