import Link from "next/link";
import LiveStream from "@/components/LiveStream";
import LatestSermon from "@/components/LatestSermon";
import SermonLibrary from "@/components/SermonLibrary";

export const revalidate = 60;

export const metadata = {
  title: "Watch — 180 Church NYC",
  description: "Watch Sunday sermons from 180 Church. Live every Sunday at 12:00 PM and on demand anytime.",
};

const CHANNEL_ID = "UCq3hKlDTzAe4V0CqA9maXCQ";

type SermonInfo = { title: string; description: string } | null;

async function getCurrentSermonInfo(): Promise<SermonInfo> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return null;

  async function fetchFullSnippet(eventType: string): Promise<SermonInfo> {
    const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search");
    searchUrl.searchParams.set("part", "id");
    searchUrl.searchParams.set("channelId", CHANNEL_ID);
    searchUrl.searchParams.set("eventType", eventType);
    searchUrl.searchParams.set("type", "video");
    searchUrl.searchParams.set("maxResults", "1");
    searchUrl.searchParams.set("key", apiKey!);

    const searchRes = await fetch(searchUrl.toString(), {
      headers: { Referer: "https://180church.tv" },
      next: { revalidate: 60 },
    });
    if (!searchRes.ok) return null;
    const searchData = await searchRes.json();
    const videoId = searchData.items?.[0]?.id?.videoId;
    if (!videoId) return null;

    const videoUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
    videoUrl.searchParams.set("part", "snippet");
    videoUrl.searchParams.set("id", videoId);
    videoUrl.searchParams.set("key", apiKey!);

    const videoRes = await fetch(videoUrl.toString(), {
      headers: { Referer: "https://180church.tv" },
      next: { revalidate: 60 },
    });
    if (!videoRes.ok) return null;
    const videoData = await videoRes.json();
    const snippet = videoData.items?.[0]?.snippet;
    if (!snippet) return null;

    return { title: snippet.title, description: snippet.description };
  }

  return (await fetchFullSnippet("live")) ?? (await fetchFullSnippet("upcoming"));
}

export default async function WatchPage() {
  const sermon = await getCurrentSermonInfo();

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white">

      {/* ─── HERO: Live stream ───────────────────────────────────────── */}
      <div className="w-full pt-16">
        <LiveStream />
      </div>

      {/* ─── PROGRAM INFO BAR ────────────────────────────────────────── */}
      <div className="border-b border-white/10 px-6 py-5 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse motion-reduce:animate-none" />
              <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Live Sundays 12:00 PM ET</span>
            </div>
            <h1 className="text-xl font-semibold text-white">
              {sermon?.title ?? "180 Church NYC — Sunday Service"}
            </h1>
            <p className="text-white/40 text-sm mt-0.5">890 Broadway, Union Square · AMC 25</p>
          </div>
          <a
            href="https://www.youtube.com/@180Churchnyc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-red-700 transition-colors shrink-0"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>

      {/* ─── ABOUT / SCHEDULE ────────────────────────────────────────── */}
      <div className="px-6 py-14 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <span className="text-[#29B9E8] text-xs font-bold tracking-widest uppercase block">About</span>
            {sermon?.description ? (
              <p className="text-white/60 leading-relaxed whitespace-pre-line">{sermon.description}</p>
            ) : (
              <p className="text-white/60 leading-relaxed text-lg">
                Every Sunday at 12:00 PM, 180 Church gathers inside AMC 25 Union Square to worship,
                hear a message from the Bible, and build community. Join us in person or stream live
                from anywhere in the world.
              </p>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Schedule</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <span className="text-white/50">Sunday Service</span>
                  <span className="text-white font-medium">12:00 PM ET</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <span className="text-white/50">Venue</span>
                  <span className="text-white font-medium">890 Broadway</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Format</span>
                  <span className="text-white font-medium">In Person & Online</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Quick Links</p>
              <div className="space-y-2 text-sm">
                <a
                  href="https://www.youtube.com/@180Churchnyc/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#29B9E8] hover:underline"
                >
                  Sermon archive on YouTube →
                </a>
                <Link href="/im-new" className="block text-[#29B9E8] hover:underline">
                  Plan your first visit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── LATEST MESSAGE ──────────────────────────────────────────── */}
      <div className="px-6 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#29B9E8] text-xs font-bold tracking-widest uppercase mb-2 block">Latest</span>
              <h2 className="font-serif text-3xl text-white">Most Recent Message</h2>
            </div>
            <a
              href="https://www.youtube.com/@180Churchnyc/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-[#29B9E8] transition-colors flex items-center gap-1"
            >
              All sermons
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="max-w-4xl">
            <LatestSermon />
          </div>
        </div>
      </div>

      {/* ─── BROWSE ARCHIVE ──────────────────────────────────────────── */}
      <div className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#29B9E8] text-xs font-bold tracking-widest uppercase mb-2 block">Archive</span>
              <h2 className="font-serif text-3xl text-white">Browse All Sermons</h2>
            </div>
          </div>

          <SermonLibrary />

          <div className="mt-12">
            <a
              href="https://www.youtube.com/@180Churchnyc/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#29B9E8] text-sm font-semibold hover:underline"
            >
              View all sermons on YouTube →
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
