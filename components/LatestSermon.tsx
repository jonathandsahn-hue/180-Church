// Server Component — embeds the latest sermon from 180 Church.
// Uses YouTube's user_uploads playlist embed — always shows the most recent
// video at the top, auto-updates as new videos are uploaded. No API key needed.

export default function LatestSermon() {
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a2e]">
      <iframe
        src="https://www.youtube.com/embed?listType=user_uploads&list=180churchnyc"
        title="Latest sermon from 180 Church"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
