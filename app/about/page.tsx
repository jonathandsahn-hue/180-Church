import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — 180 Church NYC",
  description: "Learn about who we are, what we believe, and why we exist.",
};

const values = [
  {
    num: "01",
    title: "Grace",
    body: "We believe in a love that isn't earned. It's the foundation of everything we do — welcoming you exactly as you are, before you have it all together.",
    col: "md:col-span-5 md:mt-0",
  },
  {
    num: "02",
    title: "Truth",
    body: "We anchor our community in the timeless story of the Gospel. It's a truth that challenges us, heals us, and ultimately sets us free to live authentically.",
    col: "md:col-span-6 md:col-start-7 md:mt-32",
  },
  {
    num: "03",
    title: "Radical Welcome",
    body: "In a city that can feel anonymous, we practice the art of being known. Whoever you are, wherever you've been — the table is always set and there's always a seat for you.",
    col: "md:col-span-7 md:col-start-2 md:mt-16",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24 overflow-x-hidden bg-[#fbf9f6]">

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative px-8 pt-16 pb-32 max-w-7xl mx-auto overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Photo */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#bde9ff] opacity-30 rounded-full blur-3xl group-hover:opacity-50 transition-opacity" />
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <Image
                  src="/photos/community-6.jpg"
                  alt="180 Church community gathering"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="lg:col-span-5 order-1 lg:order-2 pb-12 lg:pl-12">
            <h1 className="font-serif italic text-[5rem] lg:text-[7rem] leading-[0.85] tracking-tighter mb-8 text-[#1a1a2e]">
              Our<br />Story
            </h1>
            <p className="text-lg text-[#47464c] leading-relaxed max-w-md">
              We started with a simple conviction: New York City needed a place where restless hearts could find a home. Not a building, but a family defined by grace.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MISSION ───────────────────────────────────────────────────── */}
      <section className="bg-[#efeeeb] py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#006683] font-bold mb-12 block">The Mission</span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-[#1a1a2e] max-w-5xl">
              To help people <em className="font-light">turn to Christ</em> and live for Christ.
            </h2>
          </div>
        </div>
      </section>

      {/* ─── OUR STORY BODY ────────────────────────────────────────────── */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#29B9E8] font-bold mb-6 block">Since 2008</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a2e] leading-tight">
              180 means<br /><em className="font-normal">a full turn.</em>
            </h2>
          </div>
          <div className="space-y-5 text-[#47464c] text-lg leading-relaxed">
            <p>
              Turn 180 degrees and you&apos;re facing the opposite direction. That&apos;s the idea. Since 2008, 180 Church has been an evangelical, interdenominational community gathered in Union Square — one of New York City&apos;s most diverse and vibrant neighborhoods.
            </p>
            <p>
              We welcome you to come just as you are. We believe you will experience a real change where Christ doesn&apos;t change only some things about you. He changes everything.
            </p>
            <p>
              Our vision is joining God to restore the beauty in all things. The gospel doesn&apos;t just change individuals — it changes neighborhoods, cities, and cultures. That&apos;s why we&apos;re here, and that&apos;s what we&apos;re building.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VALUES ────────────────────────────────────────────────────── */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#29B9E8] font-bold mb-4 block">Our Values</span>
          <h2 className="font-serif text-4xl text-[#1a1a2e]">What we&apos;re built on.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 items-start">
          {values.map((v) => (
            <div key={v.title} className={v.col}>
              <span className="font-serif italic text-5xl text-[#65d3ff] block mb-4">{v.num}</span>
              <h3 className="font-serif text-5xl mb-6 text-[#1a1a2e]">{v.title}</h3>
              <p className="text-[#47464c] text-lg leading-relaxed border-l-2 border-[#eae8e5] pl-8">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── AMC SECTION ───────────────────────────────────────────────── */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="bg-[#1a1a2e] rounded-[48px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <h2 className="font-serif italic text-4xl md:text-5xl text-white mb-8 leading-tight">
              Sunday Mornings at AMC 25 Union Square
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              There&apos;s something beautiful about transforming a movie theater into a sanctuary. Located in the heart of Union Square, we meet every Sunday to worship, learn, and reconnect in the middle of the city&apos;s buzz.
            </p>
            <div className="flex items-center gap-3 text-[#65d3ff] text-sm uppercase tracking-wide font-medium">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              890 Broadway, Union Square, New York
            </div>
            <div className="mt-8">
              <Link
                href="/im-new"
                className="inline-block bg-[#29B9E8] text-white px-8 py-4 font-medium hover:bg-[#1a9fd4] transition-all duration-200"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px]">
            <Image
              src="/photos/community-5.jpg"
              alt="180 Church at AMC Union Square"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY / SMALL GROUPS ──────────────────────────────────── */}
      <section id="community" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
            <Image
              src="/photos/community-10.jpg"
              alt="180 Church small groups"
              fill
              className="object-cover object-center"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#29B9E8] font-bold mb-6 block">Community</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a2e] leading-tight mb-6">
              Faith grows in<br /><em className="font-normal">relationship.</em>
            </h2>
            <p className="text-[#47464c] text-lg leading-relaxed mb-8">
              Sunday is just the beginning. Our small groups meet throughout the week — some in person, some on Zoom — for real conversation, shared meals, and deeper faith. It&apos;s where community actually happens.
            </p>
            <a
              href="mailto:info@180church.tv?subject=Small Groups"
              className="inline-block bg-[#1a1a2e] text-white px-8 py-4 font-medium hover:bg-[#29B9E8] transition-all duration-200"
            >
              Ask About Small Groups
            </a>
          </div>
        </div>
      </section>

      {/* ─── MEET THE TEAM CTA ─────────────────────────────────────────── */}
      <section className="py-40 px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#bde9ff]/10 rounded-full blur-[120px] -z-10" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a2e] mb-12">Who we are.</h2>
        <div className="flex flex-col items-center gap-8">
          <p className="text-lg text-[#47464c] max-w-lg mx-auto leading-relaxed">
            Our leadership isn&apos;t just a staff — it&apos;s a team of people who love this city and want to serve you.
          </p>
          <Link
            href="/staff"
            className="group inline-flex items-center gap-4 bg-[#1a1a2e] text-white px-10 py-5 font-medium overflow-hidden relative hover:bg-[#29B9E8] transition-all duration-300"
          >
            <span className="font-medium tracking-wide uppercase text-sm relative z-10">Meet the Team</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
