'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export interface VideoItem {
  id: string;
  src: string;
  category: string;
  watchTime: string;
  title: string;
  summary: string;
}

/**
 * Video card in the same style as the Insight cards, for portrait (9:16)
 * reels. The video plays in place: the first frame stands in as the poster
 * and the browser's own controls appear once playback starts.
 */
export default function VideoCard({ item, position }: { item: VideoItem; position: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const label = item.title || `Video ${position}`;

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    // Only one video should be audible at a time
    document.querySelectorAll('video').forEach((other) => {
      if (other !== video) other.pause();
    });
    setStarted(true);
    void video.play();
  };

  return (
    <article className="insight-card video-card">
      <div className="insight-card__media video-card__media">
        <video
          ref={videoRef}
          // #t=0.1 makes the browser show the first frame before playback
          src={`${item.src}#t=0.1`}
          preload="metadata"
          playsInline
          controls={started}
          aria-label={label}
        />
        {!started && (
          <button type="button" className="video-card__start" onClick={play} aria-label={`Play ${label}`}>
            <span className="insight-card__play" aria-hidden="true">
              <Play size={18} strokeWidth={0} fill="currentColor" />
            </span>
          </button>
        )}
      </div>

      <div className="insight-card__body">
        <p className="insight-card__meta">
          <span className="insight-card__cat insight-card__cat--video">{item.category}</span>
          <span>{item.watchTime}</span>
        </p>
        {item.title && <h3 className="insight-card__title">{item.title}</h3>}
        {item.summary && <p className="insight-card__summary">{item.summary}</p>}
        <button type="button" className="insight-card__cta video-card__cta" onClick={play}>
          Watch <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />
          <span className="visually-hidden"> {label}</span>
        </button>
      </div>
    </article>
  );
}
