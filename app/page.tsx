import Link from "next/link";
import Image from "next/image";
import LatestSermon from "@/components/LatestSermon";

export default function Home() {
  return (
    <>
      {/* ─── HERO: Split layout ──────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#1a1a2e] flex flex-col md:flex-row items-center pt-20 md:pt-0 overflow-hidden">
        {/* Left — text */}
        <div className="w-full md:w-1/2 px-8 md:pl-16 lg:pl-24 z-10 flex flex-col justify-center py-20 md:py-0 md:h-screen">
          <h1 className="font-serif italic text-6xl md:text-8xl text-white leading-tight mb-8 tracking-tighter">
            You&apos;re Home.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-md mb-10 leading-relaxed">
            A gospel-centered family in the heart of New York City.
            Come as you are. There&apos;s always room for one more.
          </p>
          <div>
            <Link
              href="/im-new"
              className="inline-block bg-[#29B9E8]/20 border border-[#29B9E8]/50 text-[#29B9E8] px-8 py-4 font-semibold hover:bg-[#29B9E8] hover:text-white transition-all duration-200"
            >
              Join us Sunday
            </Link>
          </div>
          <div className="mt-14 text-white/30 text-sm space-y-1">
            <p>Sundays at 12:00 PM · 890 Broadway, Union Square</p>
            <p className="text-white/20 text-xs">We meet inside AMC 25 Union Square — yes, a movie theater.</p>
          </div>
        </div>

        {/* Right — photo */}
        <div className="w-full md:w-1/2 h-72 md:h-screen relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#1a1a2e]/30 to-transparent z-10 hidden md:block" style={{ width: "6rem" }} />
          <Image
            src="/photos/community-1.jpg"
            alt="180 Church community"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ─── WELCOME: Editorial grid ─────────────────────────────────── */}
      <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-baseline">
        <div className="md:col-span-5">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a2e] leading-tight">
            Finding your people<br />in a city of <em>millions</em>.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6">
          <p className="text-[#4a4a6a] text-lg leading-relaxed">
            New York can feel vast and anonymous. 180 Church exists to be something different — not an institution, but a family. A place where you are known, seen, and genuinely home.
          </p>
          <p className="text-[#4a4a6a] text-lg leading-relaxed">
            Every Sunday we gather in Union Square — inside a movie theater, because we&apos;re a little unconventional — to worship together, grow together, and make space for whoever walks through the door.
          </p>
          <Link href="/about" className="inline-flex items-center text-[#29B9E8] font-semibold group">
            Our story
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── SERVICE INFO: Typographic columns ───────────────────────── */}
      <section className="bg-[#f8f6f2] py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="py-12 md:pr-16">
              <span className="uppercase tracking-widest text-xs font-bold text-[#29B9E8] mb-4 block">In Person</span>
              <h3 className="font-serif text-3xl mb-6 text-[#1a1a2e]">Union Square</h3>
              <div className="space-y-2 text-[#4a4a6a]">
                <p className="font-medium text-lg">Every Sunday at 12:00 PM</p>
                <p>890 Broadway, New York, NY 10003</p>
                <p className="pt-4 text-sm opacity-70 leading-relaxed">
                  Inside AMC 25 Union Square. Arrive a few minutes early — someone will be there to welcome you at the door.
                </p>
                <a
                  href="https://maps.google.com/?q=890+Broadway+New+York+NY+10003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block pt-3 text-[#29B9E8] text-sm font-semibold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
            <div className="py-12 md:pl-16">
              <span className="uppercase tracking-widest text-xs font-bold text-[#29B9E8] mb-4 block">Online</span>
              <h3 className="font-serif text-3xl mb-6 text-[#1a1a2e]">Watch Live</h3>
              <div className="space-y-2 text-[#4a4a6a]">
                <p className="font-medium text-lg">Sundays at 12:00 PM ET</p>
                <p>Streaming live on YouTube</p>
                <p className="pt-4 text-sm opacity-70 leading-relaxed">
                  Can&apos;t make it in person? Join us online. Past sermons are available anytime.
                </p>
                <Link href="/watch" className="inline-block pt-3 text-[#29B9E8] text-sm font-semibold hover:underline">
                  Watch Online →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MESSAGE FROM OUR LEADER ─────────────────────────────────── */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo or video */}
          <div className="relative">
            {process.env.PASTOR_VIDEO_ID ? (
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${process.env.PASTOR_VIDEO_ID}`}
                  title="A word from Pastor Sam"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image
                  src="/photos/staff/sam-kim.jpg"
                  alt="Pastor Sam D. Kim"
                  fill
                  className="object-cover object-top"
                />
              </div>
            )}
          </div>

          {/* Message */}
          <div>
            <span className="uppercase tracking-widest text-xs font-bold text-[#29B9E8] mb-4 block">A Word From Our Pastor</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a2e] leading-tight mb-8">
              <em>We&apos;d love<br />to meet you.</em>
            </h2>
            <blockquote className="font-serif italic text-xl text-[#4a4a6a] leading-relaxed mb-8 border-l-2 border-[#29B9E8] pl-6">
              &ldquo;180 Church exists to help people turn to Christ and live for Christ. If you&apos;ve never been to church, or if you&apos;ve been away for a long time — this is a place where you will be welcomed, no questions asked. The door is always open.&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-[#1a1a2e]">Rev. Dr. Sam D. Kim</p>
              <p className="text-[#4a4a6a] text-sm">Pastor of Preaching & Vision · Co-Founder</p>
            </div>
            <div className="mt-8">
              <Link
                href="/im-new"
                className="inline-block bg-[#1a1a2e] text-white px-8 py-4 font-medium hover:bg-[#29B9E8] transition-all duration-200"
              >
                Plan Your First Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL: Photo background ───────────────────────────── */}
      <section className="py-32 px-8 overflow-hidden relative">
        <Image
          src="/photos/community-2.jpg"
          alt=""
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#1a1a2e]/70" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <blockquote className="font-serif italic text-3xl md:text-5xl text-white leading-snug">
            &ldquo;I came to 180 Church looking for a community where I could grow my faith. What I didn&apos;t expect was finding a family that made me feel like I was coming home.&rdquo;
          </blockquote>
          <cite className="not-italic block mt-12">
            <span className="text-[#29B9E8] font-bold tracking-widest uppercase text-sm block mb-2">Jon</span>
            <span className="font-serif italic text-white/40 text-lg">Member since 2022</span>
          </cite>
        </div>
      </section>

      {/* ─── COMMUNITY GRID: Staggered, grayscale hover ──────────────── */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a2e] leading-tight mb-4">
              Life together outside of <em>Sundays</em>.
            </h2>
            <p className="text-[#4a4a6a] text-lg">
              Small groups, dinners, and community spread across the five boroughs.
            </p>
          </div>
          <Link href="/about#community" className="text-[#29B9E8] font-bold uppercase tracking-widest text-sm hover:underline shrink-0">
            Learn More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-5">
            <div className="aspect-[4/5] overflow-hidden relative bg-gray-100">
              <Image
                src="/photos/community-3.jpg"
                alt="180 Church small groups"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 object-center"
              />
            </div>
            <div>
              <h4 className="font-serif text-2xl mb-2 text-[#1a1a2e]">Small Groups</h4>
              <p className="text-[#4a4a6a] text-sm leading-relaxed">
                Some meet in person around the city, some meet on Zoom. All share life, scripture, and a meal together throughout the week.
              </p>
            </div>
          </div>

          <div className="space-y-5 md:mt-12">
            <div className="aspect-[4/5] overflow-hidden relative bg-gray-100">
              <Image
                src="/photos/community-15.png"
                alt="180 Church retreats"
                fill
                className="object-cover object-[center_60%] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div>
              <h4 className="font-serif text-2xl mb-2 text-[#1a1a2e]">Retreats & Events</h4>
              <p className="text-[#4a4a6a] text-sm leading-relaxed">
                From men&apos;s retreats to women&apos;s fellowships — moments away from the city to go deeper together.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="aspect-[4/5] overflow-hidden relative bg-gray-100">
              <Image
                src="/photos/community-16.png"
                alt="180 Church worship"
                fill
                className="object-cover object-[center_30%] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div>
              <h4 className="font-serif text-2xl mb-2 text-[#1a1a2e]">Worship & Prayer</h4>
              <p className="text-[#4a4a6a] text-sm leading-relaxed">
                Sunday mornings are just the beginning. We pursue God together all week long.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LATEST SERMON ───────────────────────────────────────────── */}
      <section className="bg-[#f8f6f2] py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="uppercase tracking-widest text-xs font-bold text-[#29B9E8] mb-3 block">Latest Message</span>
            <h2 className="font-serif text-4xl text-[#1a1a2e]">
              Miss a Sunday?<br /><em>We&apos;ve got you.</em>
            </h2>
          </div>
          <LatestSermon />
          <a
            href="https://www.youtube.com/180churchnyc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-[#29B9E8] font-semibold hover:underline text-sm"
          >
            Browse all sermons on YouTube →
          </a>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#f8f6f2] border-t border-gray-200 py-24 text-center px-8">
        <h3 className="font-serif text-4xl md:text-6xl text-[#1a1a2e] mb-10 leading-tight">
          The table is<br /><em>set for you.</em>
        </h3>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/im-new"
            className="bg-[#1a1a2e] text-white px-10 py-4 font-medium hover:bg-[#29B9E8] transition-all duration-200"
          >
            Plan Your Visit
          </Link>
          <a
            href="mailto:info@180church.tv"
            className="border border-[#1a1a2e] text-[#1a1a2e] px-10 py-4 font-medium hover:bg-[#1a1a2e] hover:text-white transition-all duration-200"
          >
            Ask a Question
          </a>
        </div>
      </section>
    </>
  );
}
