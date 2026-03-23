import Image from "next/image";
import GivingPortal from "./GivingPortal";

export const metadata = {
  title: "Give — 180 Church NYC",
  description: "Support the ministry of 180 Church. Every gift helps us love our community well.",
};

const methods = [
  {
    name: "Venmo",
    handle: "@church180",
    description: "Send directly to @church180. Lower transaction fees mean more of your gift goes to ministry.",
    action: { label: "Open Venmo", href: "https://venmo.com/church180" },
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    name: "Zelle",
    handle: "offering@180church.tv",
    description: "Transfer through your bank app. Works with Chase, Bank of America, Wells Fargo, Citi, TD, and more.",
    action: null,
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
  },
  {
    name: "PayPal",
    handle: "offering@180church.tv",
    description: "Give using a checking account, debit card, or credit card through PayPal.",
    action: { label: "Give via PayPal", href: "https://www.paypal.com/paypalme/180church" },
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    name: "Check",
    handle: "Payable to \"180 Church\"",
    description: "Drop at the info booth during Sunday service. Make it payable to 180 Church.",
    action: null,
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

export default function GivePage() {
  return (
    <main className="pt-24 pb-20 bg-[#fbf9f6]">

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="px-8 max-w-7xl mx-auto mt-16 md:mt-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-[#1a1a2e]">
              Support <br />
              <em className="font-normal text-[#006683]">the Vision.</em>
            </h1>
            <p className="mt-8 font-serif italic text-2xl text-[#47464c] max-w-xl leading-relaxed">
              &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
            </p>
            <p className="mt-3 text-[#29B9E8] text-sm font-semibold tracking-widest uppercase">2 Corinthians 9:7</p>
          </div>

          <div className="md:col-span-4 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 relative" style={{ boxShadow: "0 12px 40px rgba(27,28,26,0.04)" }}>
              <Image
                src="/photos/community-11.jpg"
                alt="180 Church community"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT BENTO ─────────────────────────────────────────────── */}
      <section className="mt-32 px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#1a1a2e]">Your impact in the city</h2>
          <div className="w-24 h-1 bg-[#29B9E8] mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Mission card — col-span-2 */}
          <div className="md:col-span-2 bg-[#efeeeb] p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#006683] font-bold">Local Focus</span>
              <h3 className="font-serif text-4xl mt-4 leading-tight text-[#1a1a2e]">
                Loving our city through the gospel.
              </h3>
            </div>
            <p className="mt-12 text-[#47464c] max-w-md leading-relaxed">
              Your giving funds our Sunday gatherings, community programs, and our ability to reach people in Union Square and beyond. Every gift — whatever the size — goes toward something real.
            </p>
          </div>

          {/* Stat card */}
          <div className="bg-[#1a1a2e] text-white p-10 rounded-3xl flex flex-col justify-center items-center text-center">
            <span className="font-serif text-7xl font-bold">100%</span>
            <p className="font-serif italic text-xl mt-4 text-[#65d3ff]">
              of your gifts go directly to mission and ministry
            </p>
          </div>

          {/* Visual card */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden relative group aspect-square md:aspect-auto">
            <Image
              src="/photos/community-14.jpg"
              alt="180 Church community"
              fill
              className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#1a1a2e]/60 to-transparent">
              <h4 className="font-serif text-2xl font-bold text-white">Light for the City</h4>
            </div>
          </div>

          {/* Detail card — col-span-2 */}
          <div className="md:col-span-2 bg-[#bde9ff]/30 p-10 rounded-3xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-white/60 backdrop-blur-md p-5 rounded-2xl shrink-0">
                <svg className="w-8 h-8 text-[#1a1a2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-[#1a1a2e]">A Home for the Searching</h3>
                <p className="mt-4 text-[#47464c] leading-relaxed">
                  180 Church exists to help people turn to Christ and live for Christ. Your generosity keeps the lights on, the doors open, and the welcome mat out — week after week, Sunday after Sunday.
                </p>
                <p className="mt-3 text-sm text-[#4a4a6a]">All donations to 180 Church are tax-deductible. 180 Church is a registered 501(c)(3) organization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GIVING PORTAL ────────────────────────────────────────────── */}
      <GivingPortal />

      {/* ─── WAYS TO GIVE ─────────────────────────────────────────────── */}
      <section className="mt-32 bg-[#f5f3f0] py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-5xl font-bold text-[#1a1a2e] tracking-tighter leading-tight">
              More ways<br />to support.
            </h2>
            <p className="mt-6 text-[#47464c] max-w-sm leading-relaxed">
              Choose whatever works best for you. Every method gets the money where it needs to go.
            </p>
          </div>

          <div className="space-y-4">
            {methods.map((method) => (
              <div key={method.name} className="bg-white p-6 rounded-xl flex items-center justify-between group" style={{ boxShadow: "0 12px 40px rgba(27,28,26,0.04)" }}>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-[#29B9E8]/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#29B9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={method.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1a2e] text-lg">{method.name}</h4>
                    <p className="text-sm text-[#47464c]">{method.handle}</p>
                  </div>
                </div>
                {method.action ? (
                  <a
                    href={method.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-[#29B9E8] font-semibold text-sm hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    {method.action.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ) : (
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="mt-32 px-8 max-w-7xl mx-auto pb-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl font-bold text-[#1a1a2e] tracking-tight leading-tight">
              Questions?<br />
              <em className="font-normal">We&apos;re here.</em>
            </h2>
            <a
              href="mailto:offering@180church.tv"
              className="inline-block mt-8 bg-[#1a1a2e] text-white px-8 py-4 font-medium hover:bg-[#29B9E8] transition-all duration-200"
            >
              Email Us
            </a>
          </div>

          <div className="md:col-span-8 space-y-10">
            {[
              {
                q: "Is my donation tax-deductible?",
                a: "Yes. 180 Church NYC is a registered 501(c)(3) non-profit organization. All donations are tax-deductible as allowed by law.",
              },
              {
                q: "Where does my money go?",
                a: "Your gift supports our Sunday gatherings, community programs, and outreach in Union Square and the surrounding neighborhoods. 100% goes to mission and ministry.",
              },
              {
                q: "Can I give to a specific project?",
                a: "Most gifts go to our General Fund to support overall operations, but we occasionally have special funds for local outreach or specific projects. Email us to ask.",
              },
              {
                q: "When will I receive my year-end statement?",
                a: "Statements are typically sent by end of January each year for the preceding calendar year. Reach out at offering@180church.tv if you need yours.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-10">
                <h4 className="font-bold text-lg text-[#1a1a2e] mb-3">{q}</h4>
                <p className="text-[#47464c] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
