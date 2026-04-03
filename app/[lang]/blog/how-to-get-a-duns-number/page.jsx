import { notFound } from "next/navigation";
import BlogHeader from "../../../_components/BlogHeader";
import BlogFooter from "../../../_components/BlogFooter";
import BlogCTA from "../../../_components/BlogCTA";

const SITE_URL = process.env.SITE_URL || "https://dunsverify.com";
const SLUG = "how-to-get-a-duns-number";

const META = {
  en: {
    title: "How to Get a DUNS Number in 2026: Fast & Easy Guide | DUNS Verify",
    description: "Learn how to get a DUNS number for your business. Step-by-step guide covering free methods, expedited options, and how to get your D-U-N-S in just 2 minutes.",
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
        <span className="text-slate-700">How to Get a DUNS Number</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
        How to Get a DUNS Number in 2026: Fast &amp; Easy Guide
      </h1>

      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        A DUNS number is one of the most important identifiers your business can have. Whether you&apos;re applying to the Apple Developer Program, setting up a Google Play developer account, bidding on government contracts, or building your business credit profile — you&apos;ll need a D-U-N-S number. This guide walks you through every method available in 2026, from the free 30-day process to getting your number in just 2 minutes.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">What Is a DUNS Number and Why Do You Need One?</h2>

      <p className="text-slate-700 leading-relaxed mb-4">
        A DUNS number (Data Universal Numbering System) is a unique 9-digit identifier assigned to your business by Dun &amp; Bradstreet (D&amp;B). It acts as a universal business identity — recognized by governments, enterprises, and platforms worldwide as the standard way to verify that your company exists and is legitimate.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        First introduced in 1962, the DUNS system now covers over 455 million businesses across 224 countries. It is the backbone of global B2B commerce, public procurement, and developer ecosystems.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Who Requires a DUNS Number?</h3>
      <div className="space-y-3 mb-6">
        {[
          { name: "Apple Developer Program", detail: "Required to publish apps as an organization on the App Store. Apple uses DUNS to verify your company exists before granting an organization account." },
          { name: "Google Play Console", detail: "Required for developer accounts registered as businesses. Google verifies your entity via DUNS." },
          { name: "US Federal Government Contracts", detail: "All businesses seeking federal contracts, grants, or awards must have a DUNS number (now transitioning to UEI for SAM.gov, but DUNS is still widely referenced)." },
          { name: "EU and International Procurement", detail: "Many European governments and international organizations use DUNS to vet suppliers." },
          { name: "Business Credit Building", detail: "D&B uses your DUNS number as the anchor for your business credit file (Paydex score). Without it, you can't build a business credit profile." },
          { name: "Enterprise B2B Partnerships", detail: "Large corporations often require DUNS verification before entering supplier or partner agreements." },
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

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">3 Methods to Get a DUNS Number</h2>
      <p className="text-slate-700 leading-relaxed mb-6">
        There are three main ways to obtain a DUNS number, each with different timelines, costs, and levels of effort. Here&apos;s a quick comparison before we dive into the details:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1E3A5F] text-white">
              <th className="text-left p-3 rounded-tl-lg">Method</th>
              <th className="text-left p-3">Cost</th>
              <th className="text-left p-3">Time</th>
              <th className="text-left p-3 rounded-tr-lg">Effort</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-slate-100">
              <td className="p-3 font-medium text-slate-800">D&amp;B Official Website</td>
              <td className="p-3 text-slate-700">Free</td>
              <td className="p-3 text-slate-700">Up to 30 days</td>
              <td className="p-3 text-slate-700">High (manual forms)</td>
            </tr>
            <tr className="bg-[#F8FAFC] border-b border-slate-100">
              <td className="p-3 font-medium text-slate-800">Apple DUNS Lookup Tool</td>
              <td className="p-3 text-slate-700">Free</td>
              <td className="p-3 text-slate-700">3–5 business days</td>
              <td className="p-3 text-slate-700">Medium (requires Apple account)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 font-medium text-slate-800">DUNS Verify</td>
              <td className="p-3 text-slate-700">€4.99</td>
              <td className="p-3 text-slate-700 font-semibold text-emerald-700">2 minutes</td>
              <td className="p-3 text-slate-700">Minimal (instant lookup)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Method 1: Official D&amp;B Website (Free, 30 Days)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        The official method is to request your DUNS number directly from Dun &amp; Bradstreet. This is free of charge but can take up to 30 business days. D&amp;B will manually verify your business information before assigning a number.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        <strong>When to use it:</strong> If you&apos;re not in a rush and want to establish your D&amp;B profile from scratch with full control over your company information.
      </p>
      <div className="bg-[#F8FAFC] rounded-xl p-5 mb-6">
        <p className="font-semibold text-slate-800 mb-3">Step-by-step process:</p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm">
          <li>Go to the D&amp;B DUNS Number request page (dnb.com)</li>
          <li>Select your country and click &quot;Get a D-U-N-S Number&quot;</li>
          <li>Fill in your company name, address, phone number, and legal structure</li>
          <li>Provide the name of the business owner or senior executive</li>
          <li>Enter the number of employees and your primary business activity (SIC code)</li>
          <li>Submit your request — you&apos;ll receive a case number by email</li>
          <li>Wait for D&amp;B to verify and process your application (up to 30 days)</li>
          <li>Receive your 9-digit DUNS number by email once approved</li>
        </ol>
      </div>
      <p className="text-slate-700 leading-relaxed mb-4">
        <strong>Important note:</strong> D&amp;B also offers an expedited paid service (&quot;D-U-N-S Number Plus&quot;) that delivers your number faster, but this can cost $229 or more. For most businesses, this premium service is not necessary.
      </p>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Method 2: Apple DUNS Lookup Tool (Free, 3–5 Days)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        If you need a DUNS number specifically for the Apple Developer Program, Apple offers a built-in DUNS lookup and request tool within their developer enrollment process. This is faster than the official D&amp;B process — typically 3 to 5 business days.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        <strong>When to use it:</strong> When you need a DUNS number specifically to create an organization account on Apple Developer. Apple coordinates directly with D&amp;B on your behalf.
      </p>
      <div className="bg-[#F8FAFC] rounded-xl p-5 mb-6">
        <p className="font-semibold text-slate-800 mb-3">Step-by-step process:</p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm">
          <li>Start the Apple Developer enrollment at developer.apple.com/enroll</li>
          <li>Select &quot;Organization&quot; as your entity type</li>
          <li>When prompted for your DUNS number, click &quot;Look up your D-U-N-S number&quot;</li>
          <li>Enter your legal company name, address, and contact details</li>
          <li>If your company is found, Apple will display your existing DUNS number</li>
          <li>If not found, Apple submits a DUNS number request to D&amp;B on your behalf</li>
          <li>Wait 3–5 business days for D&amp;B to process and assign your number</li>
          <li>Return to Apple Developer enrollment to continue with your new DUNS number</li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Method 3: DUNS Verify (2 Minutes, €4.99)</h3>
      <p className="text-slate-700 leading-relaxed mb-4">
        DUNS Verify is the fastest way to find your existing DUNS number or verify that your business already has one. Rather than waiting weeks for D&amp;B&apos;s process, DUNS Verify searches the D&amp;B database instantly and delivers your DUNS number in under 2 minutes.
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        <strong>When to use it:</strong> When your business may already have a DUNS number (most registered businesses do) and you need it urgently — for an Apple Developer application, a government contract deadline, or any business verification requirement.
      </p>
      <div className="bg-[#F8FAFC] rounded-xl p-5 mb-6">
        <p className="font-semibold text-slate-800 mb-3">Step-by-step process:</p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm">
          <li>Go to DUNS Verify (dunsverify.com)</li>
          <li>Enter your company name and country</li>
          <li>Select your company from the suggested results</li>
          <li>Complete the secure payment (€4.99)</li>
          <li>Receive your verified DUNS number instantly</li>
        </ol>
      </div>
      <p className="text-slate-700 leading-relaxed mb-4">
        This method works because the majority of registered businesses already exist in the D&amp;B database — often assigned a DUNS number without the business owner&apos;s knowledge. DUNS Verify simply surfaces that number quickly and verifies it is accurate and active.
      </p>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Common Issues and How to Solve Them</h2>

      <div className="space-y-5 mb-8">
        <div>
          <p className="font-semibold text-slate-800 mb-1">&quot;My company name isn&apos;t found in the D&amp;B database&quot;</p>
          <p className="text-slate-700 text-sm leading-relaxed">This can happen if your business is very new, registered under a different legal name, or located in a country with limited D&amp;B coverage. Try searching with your full legal name exactly as it appears on your business registration. If still not found, proceed with a new DUNS request through D&amp;B&apos;s official site.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">&quot;Apple says my DUNS number is invalid&quot;</p>
          <p className="text-slate-700 text-sm leading-relaxed">Apple performs its own validation of DUNS numbers against the D&amp;B database. If your number is rejected, it may mean the company information in D&amp;B&apos;s records doesn&apos;t match what you entered in Apple&apos;s form. Ensure your legal business name, address, and phone number are exactly as registered with D&amp;B.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">&quot;I got a DUNS number but my D&amp;B profile shows wrong information&quot;</p>
          <p className="text-slate-700 text-sm leading-relaxed">You can update your business information in the D&amp;B database by contacting D&amp;B directly. Log in to your D&amp;B account or call their business support line. Note that changes can take 1–5 business days to propagate.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">&quot;I already have a DUNS number but don&apos;t know what it is&quot;</p>
          <p className="text-slate-700 text-sm leading-relaxed">This is the most common situation. Most registered businesses already have a DUNS number assigned automatically by D&amp;B. Use DUNS Verify to quickly retrieve your existing number without going through the full D&amp;B request process.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">&quot;My DUNS request has been pending for over 30 days&quot;</p>
          <p className="text-slate-700 text-sm leading-relaxed">Contact D&amp;B customer support directly with your case number. Long delays are sometimes due to incomplete information or an address that couldn&apos;t be verified. D&amp;B may need additional documentation like a business license or utility bill to confirm your address.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">Frequently Asked Questions</h2>

      <div className="space-y-6 mb-8">
        <div>
          <p className="font-semibold text-slate-800 mb-1">Is a DUNS number free?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Getting a DUNS number through D&amp;B&apos;s official website is free. D&amp;B does offer paid expedited options and premium services, but the basic DUNS number itself costs nothing. DUNS Verify charges €4.99 to quickly retrieve your existing number from the D&amp;B database.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">How long does it take to get a DUNS number?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Via D&amp;B directly: up to 30 business days. Via the Apple DUNS lookup tool: 3–5 business days. Via DUNS Verify (if your business already exists in D&amp;B): under 2 minutes.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Can I have more than one DUNS number?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Each physical location of a business can have its own DUNS number. If you operate multiple branches, each branch can be registered separately. However, a single legal entity at a single address should only have one DUNS number.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Do sole proprietors / freelancers need a DUNS number?</p>
          <p className="text-slate-700 text-sm leading-relaxed">Sole proprietors can get a DUNS number if they operate under a business name. However, for Apple Developer individual accounts or personal Google Play accounts, a DUNS number is not required — only organization accounts need one.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Does a DUNS number expire?</p>
          <p className="text-slate-700 text-sm leading-relaxed">No, DUNS numbers do not expire. They are permanent identifiers assigned to your business. However, if your business closes or changes its legal structure significantly, D&amp;B may mark the number as inactive.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">Is a DUNS number the same as a UEI?</p>
          <p className="text-slate-700 text-sm leading-relaxed">No. As of April 2022, the US federal government replaced DUNS with the Unique Entity Identifier (UEI) for SAM.gov registrations. However, DUNS is still required for Apple, Google Play, international procurement, and business credit. See our <a href={`/${lang}/blog/duns-number-vs-uei-sam`} className="text-emerald-600 hover:underline">DUNS vs UEI guide</a> for a full breakdown.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800 mb-1">What&apos;s the difference between a DUNS number and an EIN?</p>
          <p className="text-slate-700 text-sm leading-relaxed">An EIN (Employer Identification Number) is issued by the IRS for US tax purposes. A DUNS number is issued by D&amp;B for business identity and credit purposes. They serve completely different functions and you will typically need both. See our <a href={`/${lang}/blog/duns-number-vs-ein`} className="text-emerald-600 hover:underline">DUNS vs EIN comparison</a>.</p>
        </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-6 mt-10 mb-8">
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-4">Related articles</h3>
        <ul className="space-y-2">
          {[
            { slug: "numero-duns", title: "DUNS Number: The Complete Guide 2026" },
            { slug: "duns-number-vs-ein", title: "DUNS Number vs EIN: Key Differences Explained" },
            { slug: "duns-number-vs-uei-sam", title: "DUNS Number vs UEI: SAM.gov Transition Guide 2026" },
            { slug: "numero-duns-apple-developer", title: "DUNS Number for Apple Developer Program" },
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
