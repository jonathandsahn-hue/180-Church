"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type LiveStatus = { isLive: boolean; videoId: string | null };

export default function LiveStream() {
  const [status, setStatus] = useState<LiveStatus>({ isLive: false, videoId: null });
  const [checked, setChecked] = useState(false);

  async function checkLive() {
    try {
      const res = await fetch("/api/is-live");
      const data: LiveStatus = await res.json();
      setStatus(data);
    } catch {
      setStatus({ isLive: false, videoId: null });
    } finally {
      setChecked(true);
    }
  }

  useEffect(() => {
    checkLive();
    const interval = setInterval(() => {
      // Only poll when the tab is visible
      if (!document.hidden) checkLive();
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  // Build embed URL — use specific video ID if available, otherwise live_stream fallback
  const embedSrc = status.videoId
    ? `https://www.youtube.com/embed/${status.videoId}`
    : `https://www.youtube.com/embed/live_stream?channel=UCU8EkEg-JXJaCiX81VddoeA`;

  return (
    <div className="relative w-full bg-black aspect-video">

      {/* Live embed — shown when live */}
      {status.isLive && (
        <iframe
          key={embedSrc}
          src={embedSrc}
          title="180 Church Live Stream"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}

      {/* Offline screen — shown when not live */}
      {checked && !status.isLive && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080c14]">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0d1a2e_0%,#080c14_70%)]" />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
            <Image
              src="/logo-transparent.png"
              alt="180 Church"
              width={64}
              height={64}
              className="opacity-40"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <div>
              <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-3">180 Church NYC</p>
              <p className="text-white text-xl font-semibold mb-2">No broadcasting at this time</p>
              <p className="text-white/40 text-sm">Join us live &middot; Sundays at 12:00 PM ET</p>
            </div>
          </div>
        </div>
      )}

      {/* Loading state */}
      {!checked && (
        <div className="absolute inset-0 bg-[#080c14] flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-white/10 border-t-white/40 animate-spin" />
        </div>
      )}

    </div>
  );
}
