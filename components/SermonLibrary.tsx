// Server Component — fetches past sermons from 180 Church uploads playlist.
// Skips the first item (shown separately as the Latest Sermon).

// Uploads playlist ID = channel ID with "UC" replaced by "UU"
const UPLOADS_PLAYLIST_ID = "UUq3hKlDTzAe4V0CqA9maXCQ";

type SermonVideo = {
  videoId: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
};

async function getSermonLibrary(): Promise<SermonVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return [];

  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("playlistId", UPLOADS_PLAYLIST_ID);
    url.searchParams.set("maxResults", "13");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), {
      headers: { Referer: "https://180church.tv" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const data = await res.json();
    const items: any[] = data.items ?? [];

    // Skip index 0 — that's the latest, already shown above
    return items.slice(1).map((item) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      publishedAt: item.snippet.publishedAt,
      thumbnail:
        item.snippet.thumbnails?.high?.url ??
        item.snippet.thumbnails?.medium?.url ??
        item.snippet.thumbnails?.default?.url ??
        "",
    }));
  } catch {
    return [];
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function SermonLibrary() {
  const sermons = await getSermonLibrary();

  if (sermons.length === 0) {
    return (
      <p className="text-white/40 text-sm">
        No sermons found.{" "}
        <a
          href="https://www.youtube.com/@180Churchnyc/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#29B9E8] hover:underline"
        >
          Browse on YouTube →
        </a>
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {sermons.map((sermon) => (
        <a
          key={sermon.videoId}
          href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3"
        >
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden bg-white/5">
            {sermon.thumbnail && (
              <img
                src={sermon.thumbnail}
                alt={sermon.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1a1a2e] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Meta */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">
              {formatDate(sermon.publishedAt)}
            </p>
            <h4 className="font-serif text-lg text-white leading-snug group-hover:text-[#29B9E8] transition-colors line-clamp-2">
              {sermon.title}
            </h4>
          </div>
        </a>
      ))}
    </div>
  );
}
