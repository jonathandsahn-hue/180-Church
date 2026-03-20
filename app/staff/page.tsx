import Image from "next/image";

export const metadata = {
  title: "Meet the Staff — 180 Church NYC",
  description: "Get to know the people behind 180 Church NYC.",
};

// ─── PHOTOS ───────────────────────────────────────────────────────────────────
// Download from https://www.180church.tv/images/ and save to /public/photos/staff/
// Files needed: sam-kim.jpg, lydia-kim.jpg, sarah-bennett.jpg, stu-still.jpg, paul-lee.jpg, grace-lee.jpg

function StaffPhoto({ src, name, fill: useFill = false, size = 160, position = "object-center" }: { src: string; name: string; fill?: boolean; size?: number; position?: string }) {
  if (!src) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#29B9E8]/20 to-[#1a1a2e]/30 flex items-center justify-center">
        <span className="text-[#29B9E8]/40 text-xs font-medium text-center px-2">{name}</span>
      </div>
    );
  }
  if (useFill) {
    return (
      <Image
        src={src}
        alt={name}
        fill
        className={position}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      className={`object-cover w-full h-full ${position}`}
    />
  );
}

const leads = [
  {
    name: "Rev. Dr. Sam D. Kim",
    title: "Pastor of Preaching & Vision",
    subtitle: "Co-Founder",
    photo: "/photos/staff/sam-kim.webp",
    bio: "Sam holds a doctorate in ethical leadership from Gordon-Conwell Theological Seminary and serves as a Research Fellow at Harvard Medical School's Center for Bioethics. He has conducted research at Yale School of Medicine and serves as a Yale-Hastings Scholar. A passionate advocate for immigrants and vulnerable populations, he was invited to the White House during the Obama Administration to discuss immigration policy. His heart for the overlooked and the searching is what gave 180 Church its DNA.",
    links: [{ label: "samdkim.com", href: "https://www.samdkim.com" }],
  },
  {
    name: "Pastor Lydia Kim",
    title: "Pastor of Transformation & Discipleship",
    subtitle: "Co-Founder",
    photo: "/photos/staff/lydia-kim.png",
    bio: "Lydia leads 180 Church's discipleship and transformation efforts, overseeing small group leaders, worship teams, and intercessory ministries. She was selected to attend the 2010 Lausanne Congress for World Evangelization in Cape Town with global leaders from 200 nations. She holds a B.S. in Youth Ministry from Nyack College and completed Arrow Leadership Graduate School. Her work behind the scenes is what keeps this community woven together week after week.",
    links: [],
  },
];

const team = [
  {
    name: "Sarah Bennett",
    title: "Spiritual Life Advisor",
    subtitle: "180 Fellowship at NYU · Worship Team · Small Groups",
    photo: "/photos/staff/sarah-bennett.jpg",
    bio: "Senior project coordinator at NYU Grossman School of Medicine. Holds a Master's in neuroscience and education from Columbia University. Facilitates a small group for young professionals. Sarah brings her whole self to everything she does at 180 — from leading worship to walking with people through the hard stuff.",
  },
  {
    name: "Stewart Still",
    title: "Preaching Team · Technical Operations",
    subtitle: "Scripture Teacher · Small Groups",
    photo: "",
    bio: "Major in New York City's court system. Regular teacher of scripture at 180 Church and manager of technical operations for weekend services. Holds an M.A. in Practical Theology from Regent University. If something runs smoothly on a Sunday morning, Stewart probably made it happen.",
  },
  {
    name: "Paul Lee",
    title: "Preaching Team · Technical Operations Lead",
    subtitle: "Former InterVarsity Minister, Columbia Business School",
    photo: "/photos/staff/paul-lee.jpg",
    bio: "Organizational psychologist and consultant for a London-based firm in Manhattan. Holds an M.A. from Columbia University and an M.Div. from Candler School of Theology at Emory. Paul's teaching is grounded and honest — he asks the questions most people are already thinking.",
  },
  {
    name: "Grace Lee",
    title: "Sunday School Leader",
    subtitle: "Curriculum Developer",
    photo: "/photos/staff/grace-lee.jpg",
    bio: "Speech pathologist at NYU Langone. Leads the Sunday School program and develops Christ-centered curriculum for children. Holds a Master's from Columbia University Teachers College. Grace believes every child deserves to encounter the love of Jesus, and she builds everything around that conviction.",
  },
];

export default function StaffPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#f8f6f2] text-center">
        <p className="text-[#29B9E8] font-semibold text-sm uppercase tracking-widest mb-4">Our Team</p>
        <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6">Meet the staff.</h1>
        <p className="text-[#4a4a6a] text-xl max-w-xl mx-auto leading-relaxed">
          The people who show up every week to make 180 Church what it is.
        </p>
      </section>

      {/* Lead Pastors — featured */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-20">
          {leads.map((person, i) => (
            <div
              key={person.name}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              {/* Photo */}
              <div className={`${i % 2 === 1 ? "[direction:ltr]" : ""}`}>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl max-w-sm mx-auto md:mx-0 relative">
                  <StaffPhoto src={person.photo} name={person.name} fill position={i === 0 ? "object-cover object-[center_15%]" : "object-cover object-top"} />
                </div>
              </div>

              {/* Bio */}
              <div className={`${i % 2 === 1 ? "[direction:ltr]" : ""}`}>
                <p className="text-[#29B9E8] font-semibold text-xs uppercase tracking-widest mb-3">{person.subtitle}</p>
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-1">{person.name}</h2>
                <p className="text-[#4a4a6a] font-medium mb-6">{person.title}</p>
                <p className="text-[#4a4a6a] leading-relaxed mb-6">{person.bio}</p>
                {person.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#29B9E8] font-semibold text-sm hover:underline"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Rest of team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-14">Our team.</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {team.map((person) => (
              <div key={person.name} className="flex gap-6 items-start">
                {/* Circular photo */}
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 shadow-md">
                  <StaffPhoto src={person.photo} name={person.name} size={80} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-0.5">{person.name}</h3>
                  <p className="text-[#29B9E8] text-sm font-semibold mb-0.5">{person.title}</p>
                  <p className="text-[#4a4a6a] text-xs mb-3">{person.subtitle}</p>
                  <p className="text-[#4a4a6a] text-sm leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#f8f6f2] text-center">
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Want to get connected?</h2>
        <p className="text-[#4a4a6a] text-lg mb-8 max-w-md mx-auto">
          Reach out to us — we&apos;d love to meet you.
        </p>
        <a
          href="mailto:info@180church.tv"
          className="inline-block bg-[#29B9E8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a9fd4] transition-all"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
