import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "I'm New — 180 Church NYC",
  description: "First time visiting 180 Church? Here's everything you need to know before Sunday.",
};

const experience = [
  {
    num: "01",
    title: "The Atmosphere",
    body: "Come as you are. We're a casual community that values authenticity over performance. Walk in, find a seat, and breathe easy — no dress code, no awkward check-in.",
  },
  {
    num: "02",
    title: "The Service",
    body: "Services run about 90 minutes. We worship together, hear a practical message from the Bible, and make space for real conversation.",
  },
  {
    num: "03",
    title: "The Venue",
    body: "We meet inside AMC 25 Union Square — yes, a movie theater. There's something fitting about a church that doesn't look like one.",
  },
  {
    num: "04",
    title: "The Welcome Desk",
    body: "First time? Stop by our Welcome Desk on the way in. We'd love to meet you, answer your questions, and show you around.",
  },
];

export default function ImNewPage() {
  return (
    <main className="pt-24 bg-[#fcfaf7]">

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <h1 className="font-serif italic text-6xl md:text-8xl text-[#1a1a2e] leading-[1.05] mb-8">
              Welcome<br />Home
            </h1>
            <p className="text-xl md:text-2xl text-[#4a4a4a] max-w-xl leading-relaxed">
              We believe church isn&apos;t a building you visit, but a family you belong to. Whether it&apos;s your first time or you&apos;re looking for a fresh start — there&apos;s a place for you here.
            </p>
          </div>

          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl relative">
              <Image
                src="/photos/community-4.jpg"
                alt="180 Church community"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#29B9E8] text-white p-8 rounded-xl hidden lg:block">
              <span className="block font-serif italic text-2xl mb-1">Sundays @ 12 PM</span>
              <span className="block text-sm tracking-widest uppercase opacity-80">Union Square, NYC</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUNDAY EXPERIENCE ─────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] text-white py-24 md:py-32 mt-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <span className="text-[#29B9E8] font-bold tracking-[0.2em] uppercase text-sm block mb-4">The Experience</span>
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight max-w-2xl">
              What to expect when you walk through our doors.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
            {experience.map((item) => (
              <div key={item.num} className="space-y-6">
                <div className="h-px bg-white/20 w-full" />
                <h3 className="text-2xl font-serif">{item.num}. {item.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NARRATIVE ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 py-24 md:py-40">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src="/photos/community-9.jpg"
                alt="180 Church community"
                fill
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-serif italic text-4xl md:text-5xl text-[#1a1a2e] leading-tight">
              Find your people in the heart of the city.
            </h2>
            <p className="text-xl text-[#4a4a4a] leading-relaxed">
              180 Church is more than a Sunday morning gathering. Our small groups meet throughout the week — some in person, some on Zoom — in living rooms and coffee shops across the five boroughs. Real connection happens when we slow down and share our lives.
            </p>
            <div className="pt-4">
              <a
                href="mailto:info@180church.tv?subject=Small Groups"
                className="inline-flex items-center gap-3 text-lg font-medium text-[#1a1a2e] group"
              >
                <span className="border-b-2 border-[#29B9E8] pb-1 group-hover:border-[#1a1a2e] transition-all">
                  Ask about small groups
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATION BENTO ────────────────────────────────────────────── */}
      <section className="px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Location — large */}
          <div className="md:col-span-2 md:row-span-2 bg-white p-12 flex flex-col justify-between border border-[#29B9E8]/10 shadow-sm">
            <div>
              <svg className="w-10 h-10 text-[#29B9E8] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-serif text-3xl mb-4 text-[#1a1a2e]">Location</h3>
              <p className="text-[#4a4a4a] text-lg leading-relaxed">
                We gather at AMC 25 Union Square.<br />
                890 Broadway, New York, NY 10003
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://maps.google.com/?q=890+Broadway+New+York+NY+10003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#29B9E8] text-white px-8 py-3 font-medium hover:bg-[#1a9fd4] transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Transit */}
          <div className="md:col-span-2 bg-[#f4f1ee] p-10 flex flex-col justify-center">
            <h4 className="font-bold tracking-widest uppercase text-xs text-[#29B9E8] mb-3">Transit</h4>
            <p className="font-serif text-xl text-[#1a1a2e]">
              Steps from Union Square Station — N, Q, R, W, 4, 5, 6, and L trains.
            </p>
          </div>

          {/* Parking */}
          <div className="md:col-span-2 bg-white p-10 flex flex-col justify-center border border-[#29B9E8]/10">
            <h4 className="font-bold tracking-widest uppercase text-xs text-[#29B9E8] mb-3">Parking</h4>
            <p className="font-serif text-xl text-[#1a1a2e]">
              Street parking is limited in Union Square. We recommend taking the subway — it&apos;s the New York way.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f3f0] py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a2e] mb-3">
            Good questions.
          </h2>
          <p className="text-[#4a4a4a] text-lg mb-12">Here are the ones we get most — with honest answers.</p>
          <FAQ />
        </div>
      </section>

      {/* ─── FINAL INVITATION ──────────────────────────────────────────── */}
      <section className="py-32 bg-[#faf7f3] text-center px-8 border-t border-[#29B9E8]/10">
        <div className="max-w-2xl mx-auto space-y-10">
          <h2 className="font-serif italic text-5xl md:text-7xl text-[#1a1a2e] leading-tight">
            Ready to visit?
          </h2>
          <p className="text-xl text-[#4a4a4a] leading-relaxed">
            Let us know you&apos;re coming and we&apos;ll have someone ready to welcome you at the door.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Link
              href="/plan-a-visit"
              className="bg-[#1a1a2e] text-white px-10 py-4 text-lg font-medium hover:bg-[#29B9E8] transition-all duration-200"
            >
              Plan a Visit
            </Link>
            <a
              href="mailto:info@180church.tv"
              className="border border-[#1a1a2e] text-[#1a1a2e] px-10 py-4 text-lg font-medium hover:bg-[#1a1a2e] hover:text-white transition-all duration-200"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
