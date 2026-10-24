"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const applyHalfSpeed = (video: HTMLVideoElement) => {
    video.defaultPlaybackRate = 0.75;
    video.playbackRate = 0.75;
  };

  useEffect(() => {
    if (videoRef.current) applyHalfSpeed(videoRef.current);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster="/hero.jpeg"
      aria-hidden="true"
      onLoadedMetadata={(event) => applyHalfSpeed(event.currentTarget)}
      onPlay={(event) => applyHalfSpeed(event.currentTarget)}
      className="home-hero-video absolute inset-0 -z-10 h-full w-full object-cover"
    >
      <source
        src="/videoplayback.mp4"
        type="video/mp4"
        media="(min-width: 768px)"
      />
    </video>
  );
}
