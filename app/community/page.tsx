import Image from "next/image";
import Link from "next/link";
import { announcements } from "@/data/announcements";

export const metadata = {
  title: "News — 180 Church NYC",
  description: "Announcements, events, and updates from 180 Church NYC.",
};

const tagColors: Record<string, string> = {
  General: "bg-gray-100 text-gray-600",
  Events: "bg-[#bde9ff] text-[#004d64]",
  "Small Groups": "bg-green-50 text-green-700",
  Prayer: "bg-purple-50 text-purple-700",
  Giving: "bg-amber-50 text-amber-700",
};

export default function CommunityPage() {
  const events = announcements.slice(0, 3);
  const featured = announcements[0];
  const secondary = announcements.slice(1, 3);

  return (
    <main className="pt-24 bg-[#fbf9f6]">

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] flex items-center px-8 max-w-7xl mx-auto overflow-hidden py-16">
        <div className="grid grid-cols-12 w-full gap-8 items-center">
          <div className="col-span-12 md:col-span-7 z-10">
            <h1 className="font-serif text-6xl md:text-8xl text-[#1a1a2e] leading-tight tracking-tight mb-6">
              Life <em className="font-normal">Together</em>
            </h1>
            <p className="font-serif italic text-2xl text-[#47464c] max-w-lg mb-8 leading-relaxed">
              &ldquo;A metropolitan hearth where the coffee is warm, the conversations are deep, and the door is always open.&rdquo;
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 relative">
            <div className="aspect-[4/5] bg-[#efeeeb] rounded-2xl overflow-hidden relative" style={{ boxShadow: "0 12px 40px -12px rgba(27,28,26,0.04)" }}>
              <Image
                src="/photos/community-8.jpg"
                alt="180 Church community"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#bde9ff] rounded-full mix-blend-multiply opacity-30 blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ─── ANNOUNCEMENTS / EVENTS ────────────────────────────────────── */}
      <section className="bg-[#efeeeb] py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
            <h2 className="font-serif text-4xl text-[#1a1a2e]">Announcements</h2>
            <div className="h-px flex-grow mx-8 bg-[#c8c5cd] opacity-40 hidden md:block" />
            <p className="text-sm uppercase tracking-widest text-[#006683] font-bold">Latest Updates</p>
          </div>

          {events.length === 0 ? (
            <p className="text-[#47464c] text-lg">No announcements yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {events.map((item, i) => (
                <div key={item.id} className={`group cursor-pointer ${i === 1 ? "md:mt-12" : ""}`}>
                  <div className="border-t border-[#c8c5cd] pt-6 transition-all group-hover:border-[#29B9E8]">
                    <div className="flex items-center gap-3 mb-4">
                      {item.tag && (
                        <span className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 ${tagColors[item.tag] ?? "bg-gray-100 text-gray-600"}`}>
                          {item.tag}
                        </span>
                      )}
                      <span className="text-[#006683] font-bold text-xs uppercase tracking-widest">{item.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 mb-3 text-[#1a1a2e] group-hover:italic transition-all leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[#47464c] mb-6 leading-relaxed text-sm">{item.body}</p>
                    {item.link && (
                      <a
                        href={item.link.href}
                        className="inline-flex items-center gap-2 text-[#1a1a2e] font-semibold hover:text-[#29B9E8] transition-colors text-sm"
                      >
                        {item.link.label}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── NEWS & STORIES BENTO ──────────────────────────────────────── */}
      {announcements.length > 0 && (
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <h2 className="font-serif italic text-5xl text-[#1a1a2e] mb-20 text-center">News &amp; Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:min-h-[600px]">
            {/* Featured card */}
            <div className="md:col-span-8 bg-white rounded-2xl p-10 flex flex-col justify-end relative overflow-hidden group" style={{ boxShadow: "0 12px 40px -12px rgba(27,28,26,0.04)" }}>
              <Image
                src="/photos/community-5.png"
                alt=""
                fill
                className="object-cover opacity-10 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="relative z-10">
                {featured?.tag && (
                  <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block ${tagColors[featured.tag] ?? "bg-gray-100 text-gray-600"}`}>
                    {featured.tag}
                  </span>
                )}
                <h3 className="font-serif text-4xl md:text-5xl text-[#1a1a2e] mb-6 max-w-xl leading-tight">
                  {featured?.title}
                </h3>
                <p className="text-lg text-[#47464c] max-w-lg mb-8 leading-relaxed">
                  {featured?.body}
                </p>
                {featured?.link && (
                  <a
                    href={featured.link.href}
                    className="font-semibold border-b-2 border-[#1a1a2e] pb-1 hover:text-[#29B9E8] hover:border-[#29B9E8] transition-all inline-block"
                  >
                    {featured.link.label}
                  </a>
                )}
              </div>
            </div>

            {/* Secondary column */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {secondary.length > 0 && (
                <div className="flex-1 bg-[#1a1a2e] text-white p-8 rounded-2xl flex flex-col justify-center">
                  <h4 className="font-serif text-2xl mb-4 italic">{secondary[0]?.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{secondary[0]?.body}</p>
                  {secondary[0]?.tag && (
                    <span className="text-[#65d3ff] text-xs font-bold uppercase tracking-widest">{secondary[0].tag}</span>
                  )}
                </div>
              )}
              {secondary.length > 1 && (
                <div className="flex-1 bg-[#eae8e5] p-8 rounded-2xl flex flex-col justify-center border border-[#c8c5cd]/10">
                  <h4 className="font-serif text-2xl mb-4 text-[#1a1a2e]">{secondary[1]?.title}</h4>
                  <p className="text-[#47464c] text-sm leading-relaxed mb-6">{secondary[1]?.body}</p>
                  {secondary[1]?.link && (
                    <a href={secondary[1].link.href} className="text-[#006683] font-bold text-sm tracking-wide flex items-center gap-2 hover:underline">
                      {secondary[1].link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 rounded-full bg-[#bde9ff] mb-10">
            <svg className="w-6 h-6 text-[#006683]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-[#1a1a2e] mb-8">The Table is Set.</h2>
          <p className="font-serif italic text-xl text-[#47464c] mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re looking for a quiet place to sit or a loud table to share a meal, there&apos;s a chair waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:info@180church.tv?subject=Small Groups"
              className="bg-[#1a1a2e] text-white px-10 py-4 text-lg font-medium hover:bg-[#29B9E8] transition-all duration-200"
            >
              Join a Small Group
            </a>
            <a
              href="mailto:info@180church.tv"
              className="bg-[#e4e2df] text-[#1a1a2e] px-10 py-4 text-lg font-medium hover:bg-[#d5d3d0] transition-all"
            >
              Say Hello
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
