// Checks if 180 Church is currently live on YouTube using the official YouTube Data API v3.
// Requires YOUTUBE_API_KEY in .env.local

const CHANNEL_ID = "UCU8EkEg-JXJaCiX81VddoeA";

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    console.error("YOUTUBE_API_KEY is not set in .env.local");
    return Response.json({ isLive: false, videoId: null });
  }

  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.searchParams.set("part", "id");
    url.searchParams.set("channelId", CHANNEL_ID);
    url.searchParams.set("eventType", "live");
    url.searchParams.set("type", "video");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error("YouTube API error:", res.status, await res.text());
      return Response.json({ isLive: false, videoId: null });
    }

    const data = await res.json();
    const isLive = data.items && data.items.length > 0;
    const videoId = isLive ? data.items[0].id.videoId : null;

    return Response.json({ isLive, videoId });
  } catch (err) {
    console.error("Failed to check live status:", err);
    return Response.json({ isLive: false, videoId: null });
  }
}
