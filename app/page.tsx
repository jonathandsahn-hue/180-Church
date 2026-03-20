import Link from "next/link";
import Image from "next/image";
import LatestSermon from "@/components/LatestSermon";
import Logo from "@/components/Logo";


export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Swap div below with a real hero photo when ready:
            <Image src="/photos/hero.jpg" alt="180 Church community" fill className="object-cover" priority />
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0d2a3d] to-[#1a3a5c]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,#29B9E8,transparent)]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,#c8a97a,transparent)]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Logo size={72} bg="dark" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            You&apos;re <span className="text-[#29B9E8]">Home.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            A gospel-centered family in the heart of New York City.
            Come as you are. There&apos;s always room for one more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/im-new"
              className="bg-[#29B9E8] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#1a9fd4] transition-all hover:scale-105 shadow-lg"
            >
              Plan Your Visit
            </Link>
            <a
              href="https://www.youtube.com/@180churchnyc"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-full text-base font-semibold hover:border-white hover:bg-white/10 transition-all"
            >
              Watch Online
            </a>
          </div>
          <div className="mt-14 flex flex-col items-center gap-2 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#29B9E8] animate-pulse motion-reduce:animate-none" />
              <span>Sundays at 12:00 PM · 890 Broadway, Union Square</span>
            </div>
            <span className="text-white/30 text-xs">We meet inside AMC 25 Union Square — yes, a movie theater.</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce motion-reduce:animate-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── WELCOME STRIP ────────────────────────────────────── */}
      <section className="bg-[#29B9E8] py-10 px-6 text-center">
        <p className="text-white text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          Come in. We&apos;ve been saving you a seat.
        </p>
      </section>


      {/* ─── WHO WE ARE ───────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6 leading-tight">
              A family rooted<br />in New York City.
            </h2>
            <p className="text-[#4a4a6a] text-lg leading-relaxed mb-6">
              180 Church is a family that believes faith is best lived with real people —
              honest conversations, open doors, and room for everyone.
            </p>
            <p className="text-[#4a4a6a] text-lg leading-relaxed mb-8">
              Every Sunday we gather in Union Square. We worship together, grow together,
              and make space for whoever walks through the door.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#29B9E8] font-semibold hover:gap-3 transition-all">
              Learn more about us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] relative">
              <Image src="/photos/community-2.jpg" alt="180 Church community" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#29B9E8]/10 rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ──────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-10 h-10 text-[#29B9E8]/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-semibold text-[#1a1a2e] leading-relaxed mb-8">
            I came to 180 Church looking for a community where I could grow my faith. What I didn&apos;t expect was finding a family that made me feel like I was coming home. I found people to do life with.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-px h-6 bg-gray-300" />
            <p className="text-[#4a4a6a] text-sm font-medium">Jon &nbsp;·&nbsp; Member of 180 Church since 2022</p>
            <div className="w-px h-6 bg-gray-300" />
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* ─── COMMUNITY PHOTOS GRID ────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-3">Our Community</p>
            <h2 className="text-4xl font-bold text-[#1a1a2e]">This is what home looks like.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden col-span-2 md:col-span-1 row-span-2 relative h-72 md:h-full min-h-[280px]">
              <Image src="/photos/community-1.jpg" alt="180 Church community gathering" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="rounded-2xl overflow-hidden relative h-44">
              <Image src="/photos/community-3.jpg" alt="180 Church kids in Central Park" fill className="object-cover scale-150 -translate-y-10 -translate-x-8" />
            </div>
            <div className="rounded-2xl overflow-hidden relative h-44">
              <Image src="/photos/community-4.jpg" alt="180 Church kids at AMC Union Square" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden relative h-44">
              <Image src="/photos/community-6.jpg" alt="180 Church men's retreat" fill className="object-cover scale-125 translate-y-4" />
            </div>
            <div className="rounded-2xl overflow-hidden relative h-44">
              <Image src="/photos/community-7.jpg" alt="180 Church women's fellowship" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden relative h-44">
              <Image src="/photos/community-5.png" alt="180 Church prayer" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE TIMES ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1a1a2e] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-3">Join Us</p>
            <h2 className="text-4xl font-bold mb-6">Pull up a chair.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              No dress code. No prior experience. Just show up.
            </p>
            <Link href="/im-new" className="inline-block bg-[#29B9E8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a9fd4] transition-all">
              Plan Your First Visit
            </Link>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
                title: "Sunday Service",
                body: "12:00 PM — In Person & Online",
                link: null,
              },
              {
                icon: (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </>
                ),
                title: "Location",
                body: "890 Broadway, Union Square\nNew York, NY 10003",
                link: { label: "Get Directions →", href: "https://maps.google.com/?q=890+Broadway+New+York+NY+10003" },
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.362a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                ),
                title: "Watch Online",
                body: "Join us live or catch up anytime",
                link: { label: "Watch on YouTube →", href: "https://www.youtube.com/@180churchnyc" },
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#29B9E8]/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#29B9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">{item.title}</p>
                  <p className="text-gray-400 mt-1 whitespace-pre-line">{item.body}</p>
                  {item.link && (
                    <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="text-[#29B9E8] text-sm mt-2 inline-block hover:underline">
                      {item.link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LATEST SERMON ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f8f6f2]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-3">Latest Message</p>
          <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">Miss a Sunday? We&apos;ve got you.</h2>
          <p className="text-[#4a4a6a] text-lg mb-10">Catch up on our latest sermon or browse the full archive.</p>
          <LatestSermon />
          <a href="https://www.youtube.com/180churchnyc" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 text-[#29B9E8] font-semibold hover:underline">
            View all sermons on YouTube →
          </a>
        </div>
      </section>

      {/* ─── I'M NEW CTA ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#29B9E8] to-[#1a9fd4] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,white,transparent)]" />
            <div className="relative z-10">
              <p className="font-semibold text-white/70 text-sm uppercase tracking-widest mb-4">First Time?</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We&apos;ve been waiting for you.
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Not sure what to expect? We put together everything you need to know
                before your first Sunday with us.
              </p>
              <Link href="/im-new" className="inline-block bg-white text-[#29B9E8] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg">
                I&apos;m New — What Should I Know?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#f8f6f2] border-t border-gray-200">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">Stay connected.</h3>
          <p className="text-[#4a4a6a] mb-8">Get updates, sermon notes, and community news straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#29B9E8] text-sm"
            />
            <button type="submit" className="bg-[#29B9E8] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#1a9fd4] transition-colors whitespace-nowrap">
              Stay Connected
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
