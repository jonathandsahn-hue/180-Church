import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Meet the Staff — 180 Church NYC",
  description: "Get to know the people behind 180 Church NYC.",
};

export default function StaffPage() {
  return (
    <main className="pt-32 pb-24 bg-[#fcfaf7]">

      {/* ─── HERO HEADER ───────────────────────────────────────────────── */}
      <header className="max-w-7xl mx-auto px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="w-12 h-1 bg-[#29B9E8] mb-6" />
            <h1 className="font-serif italic text-6xl md:text-8xl text-[#1a1a2e] leading-tight">
              Meet the Team
            </h1>
          </div>
          <p className="text-xl text-[#4a4a6a] font-serif italic max-w-sm">
            We&apos;re more than a staff — we&apos;re neighbors, friends, and fellow travelers on this journey of faith in the heart of NYC.
          </p>
        </div>
      </header>

      {/* ─── EDITORIAL TEAM GRID ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 space-y-32">

        {/* Lead Pastor — asymmetric featured */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 relative group">
              <Image
                src="/photos/staff/sam-kim.webp"
                alt="Rev. Dr. Sam D. Kim"
                fill
                className="object-cover object-[center_15%] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center">
            <span className="text-[#29B9E8] font-semibold tracking-widest uppercase text-sm mb-4">Leadership</span>
            <h2 className="font-serif text-4xl font-semibold mb-2 text-[#1a1a2e]">Rev. Dr. Sam D. Kim</h2>
            <p className="font-serif italic text-xl text-[#4a4a6a] mb-6">Pastor of Preaching & Vision · Co-Founder</p>
            <div className="space-y-4 text-[#4a4a6a] leading-relaxed">
              <p>Sam holds a doctorate in ethical leadership from Gordon-Conwell Theological Seminary and serves as a Research Fellow at Harvard Medical School&apos;s Center for Bioethics.</p>
              <p>He has conducted research at Yale School of Medicine and serves as a Yale-Hastings Scholar. His heart for the overlooked and the searching is what gave 180 Church its DNA.</p>
            </div>
            <div className="mt-8">
              <a
                href="https://www.samdkim.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#29B9E8] font-semibold text-sm hover:underline"
              >
                samdkim.com →
              </a>
            </div>
          </div>
        </div>

        {/* Secondary row — 2 col staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col">
            <div className="aspect-square overflow-hidden rounded-lg mb-8 bg-gray-100 relative">
              <Image
                src="/photos/staff/lydia-kim.png"
                alt="Pastor Lydia Kim"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-[#1a1a2e]">Pastor Lydia Kim</h3>
            <p className="font-serif italic text-lg text-[#4a4a6a] mb-4">Pastor of Transformation & Discipleship · Co-Founder</p>
            <p className="text-[#4a4a6a] leading-relaxed">
              Lydia leads 180 Church&apos;s discipleship and transformation efforts, overseeing small group leaders, worship teams, and intercessory ministries. Her work behind the scenes is what keeps this community woven together week after week.
            </p>
          </div>

          <div className="flex flex-col md:mt-24">
            <div className="aspect-square overflow-hidden rounded-lg mb-8 bg-gray-100 relative">
              <Image
                src="/photos/staff/sarah-bennett.jpg"
                alt="Sarah Bennett"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-[#1a1a2e]">Sarah Bennett</h3>
            <p className="font-serif italic text-lg text-[#4a4a6a] mb-4">Spiritual Life Advisor · 180 Fellowship at NYU</p>
            <p className="text-[#4a4a6a] leading-relaxed">
              Senior project coordinator at NYU Grossman School of Medicine. Holds a Master&apos;s in neuroscience and education from Columbia University. Sarah brings her whole self to everything she does at 180 — from leading worship to walking with people through the hard stuff.
            </p>
          </div>
        </div>

        {/* Tertiary row — 3 col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-[#1a1a2e]/5">
          {[
            {
              name: "Stewart Still",
              role: "Preaching Team · Technical Operations",
              photo: "/photos/staff/stu-still.jpg",
              position: "object-cover",
            },
            {
              name: "Paul Lee",
              role: "Preaching Team · Technical Operations Lead",
              photo: "/photos/staff/paul-lee.jpg",
              position: "object-cover",
            },
            {
              name: "Grace Lee",
              role: "Sunday School Leader · Curriculum Developer",
              photo: "/photos/staff/grace-lee.jpg",
              position: "object-cover",
            },
          ].map((person) => (
            <div key={person.name} className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 relative">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className={`${person.position} grayscale hover:grayscale-0 transition-all duration-700`}
                />
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-[#1a1a2e]">{person.name}</h4>
                <p className="font-serif italic text-sm text-[#29B9E8]">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-8 mt-48">
        <div className="bg-[#1a1a2e] text-white p-12 md:p-24 rounded-3xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#29B9E8]/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 md:w-2/3">
            <h2 className="font-serif italic text-4xl md:text-6xl mb-6">
              We&apos;d love to meet you in person.
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Whether you have questions about faith or just want to say hi — our doors are always open. Join us this Sunday at 12:00 PM.
            </p>
            <Link
              href="/im-new"
              className="inline-block bg-[#29B9E8] text-white font-bold px-8 py-4 hover:bg-[#1a9fd4] transition-all duration-200"
            >
              Plan Your Visit
            </Link>
          </div>
          <div className="relative z-10 md:w-1/3 flex justify-center">
            <div className="w-32 h-32 border-2 border-[#29B9E8]/30 rounded-full flex items-center justify-center animate-pulse motion-reduce:animate-none">
              <svg className="w-12 h-12 text-[#29B9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
