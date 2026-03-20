import Link from "next/link";

export const metadata = {
  title: "About — 180 Church NYC",
  description: "Learn about who we are, what we believe, and why we exist.",
};

const values = [
  {
    title: "Gospel Driven",
    body: "Everything we do is rooted in the transforming power of Jesus Christ. The gospel isn't just what we believe — it's how we live.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Spirit Filled",
    body: "We believe the Holy Spirit is active and present. We make room for His work in our gatherings and in our lives.",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
  },
  {
    title: "Community Based",
    body: "Faith isn't meant to be lived alone. We walk this journey together — as brothers and sisters, not just churchgoers.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Risk Taking",
    body: "Advancing God's kingdom takes courage. We're committed to saying yes — even when it costs us something.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Transcending Culture",
    body: "The gospel speaks to every culture. We celebrate the diversity of NYC and the unity we find in Christ across all of it.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Radical Welcome",
    body: "Whoever you are, wherever you've been — there is room for you here. Come as you are.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#f8f6f2] text-center">
        <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
        <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6">Who we are.</h1>
        <p className="text-[#4a4a6a] text-xl max-w-xl mx-auto leading-relaxed">
          We exist to help people turn to Christ and live for Christ,
          right here in the heart of New York City.
        </p>
      </section>

      {/* Mission Statement — large pull quote */}
      <section className="py-20 px-6 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-8">Our Mission</p>
          <blockquote className="text-3xl md:text-5xl font-bold text-white leading-tight">
            &ldquo;Help people turn to Christ<br className="hidden md:block" /> and live for Christ.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4 leading-tight">180 means<br />a full turn.</h2>
            <p className="text-[#4a4a6a] leading-relaxed mb-4">Turn 180 degrees and you're facing the opposite direction. That's the idea.</p>
          </div>
          <div className="space-y-5 text-[#4a4a6a] text-lg leading-relaxed">
            <p>
              Since 2008, 180 Church has been an evangelical, interdenominational community
              gathered in Union Square — one of New York City&apos;s most diverse and vibrant neighborhoods.
            </p>
            <p>
              Our vision is simple: joining God to restore the beauty in all things. We believe
              the gospel doesn&apos;t just change individuals. It changes neighborhoods, cities, and cultures.
              That&apos;s why we&apos;re here, and that&apos;s what we&apos;re building.
            </p>
            <p>
              We&apos;re committed to raising up people who are willing to give up everything to follow Jesus
              and represent their communities for Christ. If that sounds like something you want to be
              part of, you&apos;re home.
            </p>
          </div>
        </div>
      </section>

      {/* Values — editorial list */}
      <section className="py-24 px-6 bg-[#f8f6f2]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-4xl font-bold text-[#1a1a2e]">What we&apos;re built on.</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {values.map((v) => (
              <div key={v.title} className="py-8 grid md:grid-cols-3 gap-4 md:gap-12 items-baseline">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#29B9E8]/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#29B9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={v.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a2e]">{v.title}</h3>
                </div>
                <p className="md:col-span-2 text-[#4a4a6a] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Small Groups */}
      <section id="community" className="py-24 px-6 bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-4">Community</p>
          <h2 className="text-4xl font-bold mb-6">Faith grows in relationship.</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Sunday is just the beginning. Our small groups are where real community happens —
            smaller gatherings throughout the week where you can be known, ask questions,
            and go deeper with others who are on the same journey.
          </p>
          <a
            href="mailto:info@180church.tv?subject=Small Groups"
            className="inline-block bg-[#29B9E8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a9fd4] transition-all"
          >
            Ask About Small Groups
          </a>
        </div>
      </section>

      {/* Meet the Staff teaser */}
      <section className="py-20 px-6 bg-white text-center">
        <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-3">The People</p>
        <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">Meet the staff.</h2>
        <p className="text-[#4a4a6a] text-lg mb-8 max-w-md mx-auto">
          Get to know the people who show up every week to make 180 Church what it is.
        </p>
        <Link href="/staff" className="inline-block bg-[#29B9E8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a9fd4] transition-all">
          Meet the Team
        </Link>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#f8f6f2] text-center">
        <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">Ready to come home?</h2>
        <p className="text-[#4a4a6a] text-lg mb-8">Join us this Sunday — in person or online.</p>
        <Link href="/im-new" className="inline-block bg-[#29B9E8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a9fd4] transition-all">
          Plan Your Visit
        </Link>
      </section>
    </>
  );
}
