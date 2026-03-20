// Server Component — fetches the most recent completed livestream from 180 Church NYC.
// Uses the YouTube Data API with eventType=completed to skip upcoming scheduled streams.

const CHANNEL_ID = "UCq3hKlDTzAe4V0CqA9maXCQ";

async function getLatestSermonId(): Promise<string | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return null;

  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.searchParams.set("part", "id");
    url.searchParams.set("channelId", CHANNEL_ID);
    url.searchParams.set("type", "video");
    url.searchParams.set("eventType", "completed");
    url.searchParams.set("order", "date");
    url.searchParams.set("maxResults", "1");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), {
      headers: { Referer: "https://180church.tv" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const data = await res.json();
    return data.items?.[0]?.id?.videoId ?? null;
  } catch {
    return null;
  }
}

export default async function LatestSermon() {
  const videoId = await getLatestSermonId();

  const src = videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : `https://www.youtube.com/embed?listType=user_uploads&list=180Churchnyc`;

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a2e]">
      <iframe
        src={src}
        title="Latest sermon from 180 Church"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
