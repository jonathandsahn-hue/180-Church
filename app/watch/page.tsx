import Link from "next/link";
import LiveStream from "@/components/LiveStream";

export const metadata = {
  title: "Watch — 180 Church NYC",
  description: "Watch Sunday sermons from 180 Church. Live every Sunday at 12:00 PM and on demand anytime.",
};

export default function WatchPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white">

      {/* Full-viewport video player */}
      <div className="w-full pt-16">
        <LiveStream />
      </div>

      {/* Program info bar — directly below player */}
      <div className="border-b border-white/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Live Sundays 12:00 PM ET</span>
            </div>
            <h1 className="text-xl font-bold text-white">180 Church NYC — Sunday Service</h1>
            <p className="text-white/40 text-sm mt-0.5">890 Broadway, Union Square, New York</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.youtube.com/@180churchnyc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe
            </a>
          </div>
        </div>
      </div>

      {/* Details row */}
      <div className="px-6 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {/* About this stream */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-lg font-bold text-white">About</h2>
            <p className="text-white/60 leading-relaxed">
              Every Sunday at 12:00 PM, 180 Church gathers in Union Square to worship together,
              hear a message from the Bible, and build community. Join us in person or watch live
              from anywhere in the world.
            </p>
            <p className="text-white/60 leading-relaxed">
              Not live right now? You&apos;re watching our most recent service — new ones go up every Sunday.
            </p>
          </div>

          {/* Schedule + links */}
          <div className="space-y-6">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Schedule</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Sunday Service</span>
                  <span className="text-white font-medium">12:00 PM ET</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">In Person</span>
                  <span className="text-white font-medium">890 Broadway</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Archive</p>
              <a
                href="https://www.youtube.com/@180churchnyc/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#29B9E8] text-sm font-medium hover:underline"
              >
                Browse all sermons on YouTube →
              </a>
            </div>

            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">First Time?</p>
              <Link href="/im-new" className="text-[#29B9E8] text-sm font-medium hover:underline">
                Plan your visit →
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
