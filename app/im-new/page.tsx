import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "I'm New — 180 Church NYC",
  description: "First time visiting 180 Church? Here's everything you need to know before Sunday.",
};

export default function ImNewPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#29B9E8] text-white text-center">
        <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-4">First Time?</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">You belong here.</h1>
        <p className="text-white/80 text-xl max-w-xl mx-auto leading-relaxed">
          We're so glad you found us. Here's everything you need to know
          before your first Sunday at 180 Church.
        </p>
      </section>

      {/* Timeline — What to Expect */}
      <section className="py-24 px-6 bg-[#f8f6f2]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-14">Your first Sunday, step by step.</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-2 bottom-2 w-px bg-[#29B9E8]/20" />

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Walk In",
                  body: "You'll be greeted by someone at the door. No sign-up, no awkward check-in. Just walk in and find a seat.",
                },
                {
                  step: "02",
                  title: "Worship Together",
                  body: "We sing together, pray together, and hear a message from the Bible that's meant for the life you're actually living.",
                },
                {
                  step: "03",
                  title: "Stay & Connect",
                  body: "After service, stick around. Meet people. Grab a coffee. This is when community actually happens.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-8 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#29B9E8] flex items-center justify-center shrink-0 shadow-md z-10">
                    <span className="text-white font-bold text-xs">{item.step}</span>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                    <p className="text-[#4a4a6a] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Info */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-[#1a1a2e] text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Service Details</h3>
            <div className="space-y-5 text-gray-300">
              <div>
                <p className="font-semibold text-white">When</p>
                <p>Sundays at 12:00 PM</p>
                <p className="text-sm text-gray-400 mt-1">Also available online at the same time</p>
              </div>
              <div>
                <p className="font-semibold text-white">Where</p>
                <p>890 Broadway</p>
                <p>Union Square, New York, NY 10003</p>
                <a
                  href="https://maps.google.com/?q=890+Broadway+New+York+NY+10003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#29B9E8] text-sm mt-2 inline-block hover:underline"
                >
                  Get Directions →
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Subway</p>
                <p>N/Q/R/W/4/5/6 to 14 St–Union Sq</p>
                <p>L to 14 St–Union Sq</p>
              </div>
            </div>
          </div>

          <div className="bg-[#29B9E8] text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Let us know you&apos;re coming.</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Drop us a note and we&apos;ll make sure someone is ready to welcome you personally.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="visitor-name" className="sr-only">Your name</label>
                <input
                  id="visitor-name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                />
              </div>
              <div>
                <label htmlFor="visitor-email" className="sr-only">Your email</label>
                <input
                  id="visitor-email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                />
              </div>
              <div>
                <label htmlFor="visitor-note" className="sr-only">Anything you&apos;d like us to know (optional)</label>
                <textarea
                  id="visitor-note"
                  placeholder="Anything you'd like us to know? (optional)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#29B9E8] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                I&apos;ll Be There
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#f8f6f2]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3">Good questions.</h2>
          <p className="text-[#4a4a6a] text-lg mb-10">Here are the ones we get most — with honest answers.</p>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1a1a2e] text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to check it out?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Can&apos;t make it in person? Watch online this Sunday at 12:00 PM.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://maps.google.com/?q=890+Broadway+New+York+NY+10003"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#29B9E8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a9fd4] transition-all"
          >
            Get Directions
          </a>
          <a
            href="https://www.youtube.com/@180churchnyc"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:border-white hover:bg-white/10 transition-all"
          >
            Watch Online
          </a>
        </div>
      </section>
    </>
  );
}
