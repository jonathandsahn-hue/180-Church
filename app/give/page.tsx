export const metadata = {
  title: "Give — 180 Church NYC",
  description: "Support the ministry of 180 Church. Every gift helps us love our community well.",
};

const methods = [
  {
    name: "Venmo",
    handle: "@church180",
    description: "Send directly to @church180. Venmo helps us reduce transaction fees, so more of your gift goes to the ministry.",
    action: { label: "Open Venmo", href: "https://venmo.com/church180" },
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    name: "Zelle",
    handle: "offering@180church.tv",
    description: "Transfer through your bank app using the email above. Works with Chase, Bank of America, Wells Fargo, Citi, TD, and more.",
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
    description: "Drop your check at the info booth during Sunday service. Make it payable to 180 Church.",
    action: null,
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

export default function GivePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#1a1a2e] via-[#0d2a3d] to-[#1a3a5c] text-white text-center">
        <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-4">Give</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Generosity changes things.</h1>
        <p className="text-gray-300 text-xl max-w-xl mx-auto leading-relaxed">
          Your giving helps us love our neighbors, grow our community, and keep our doors
          open for the next person who needs a place to belong.
        </p>
      </section>

      {/* Why We Give */}
      <section className="py-20 px-6 bg-[#f8f6f2]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-3">Why We Give</p>
          <blockquote className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight mb-4">
            &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
          </blockquote>
          <p className="text-[#4a4a6a] text-base italic mb-10">2 Corinthians 9:7</p>
          <div className="space-y-4 text-[#4a4a6a] text-lg leading-relaxed text-left">
            <p>
              Giving is not an obligation. It&apos;s a practice of trust. When we give, we&apos;re
              saying that God is our highest priority, and that we believe He will take care of the rest.
            </p>
            <p>
              Your gift goes directly toward Sunday gatherings, community programs, and our ability
              to reach people in Union Square and beyond with the love of Jesus. Every gift — whatever the size — goes toward something real.
            </p>
            <p>All donations to 180 Church are tax-deductible.</p>
          </div>
        </div>
      </section>

      {/* Giving Methods — stacked single column */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3">How to give.</h2>
          <p className="text-[#4a4a6a] text-lg mb-12">Choose whatever works best for you.</p>

          <div className="divide-y divide-gray-100">
            {methods.map((method) => (
              <div key={method.name} className="py-8 flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 rounded-xl bg-[#29B9E8]/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#29B9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={method.icon} />
                      </svg>
                    </div>
                    <p className="text-xl font-bold text-[#1a1a2e]">{method.name}</p>
                  </div>
                  <p className="text-[#29B9E8] font-medium text-sm mb-3">{method.handle}</p>
                  <p className="text-[#4a4a6a] text-sm leading-relaxed">{method.description}</p>
                </div>
                {method.action && (
                  <a
                    href={method.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 mt-1 border-2 border-[#29B9E8] text-[#29B9E8] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#29B9E8] hover:text-white transition-colors whitespace-nowrap"
                  >
                    {method.action.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-8 pt-8 border-t border-gray-100">
            An offering is also received during Sunday service at the info booth. Give freely and joyfully.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1a1a2e] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Questions about giving?</h2>
        <p className="text-gray-400 mb-8">We&apos;re happy to help. Reach out anytime.</p>
        <a
          href="mailto:offering@180church.tv"
          className="inline-block bg-[#29B9E8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a9fd4] transition-all"
        >
          Email Us
        </a>
      </section>
    </>
  );
}
