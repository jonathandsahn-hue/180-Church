// Checks if 180 Church is currently live or has an upcoming stream on YouTube.
// Requires YOUTUBE_API_KEY in .env.local

const CHANNEL_ID = "UCq3hKlDTzAe4V0CqA9maXCQ";

async function searchByEventType(eventType: string, apiKey: string): Promise<string | null> {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "id");
  url.searchParams.set("channelId", CHANNEL_ID);
  url.searchParams.set("eventType", eventType);
  url.searchParams.set("type", "video");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString(), {
    headers: { Referer: "https://180church.tv" },
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.items?.[0]?.id?.videoId ?? null;
}

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return Response.json({ isLive: false, isUpcoming: false, videoId: null });
  }

  try {
    // Check for active live stream first
    const liveVideoId = await searchByEventType("live", apiKey);
    if (liveVideoId) {
      return Response.json({ isLive: true, isUpcoming: false, videoId: liveVideoId });
    }

    // Check for upcoming scheduled stream
    const upcomingVideoId = await searchByEventType("upcoming", apiKey);
    if (upcomingVideoId) {
      return Response.json({ isLive: false, isUpcoming: true, videoId: upcomingVideoId });
    }

    return Response.json({ isLive: false, isUpcoming: false, videoId: null });
  } catch (err) {
    console.error("Failed to check live status:", err);
    return Response.json({ isLive: false, isUpcoming: false, videoId: null });
  }
}
