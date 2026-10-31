'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface YouTubePlayerFacadeProps {
  youtubeId: string;
  title: string;
  priority?: boolean;
  aspectRatio?: string;
  className?: string;
}

export default function YouTubePlayerFacade({
  youtubeId,
  title,
  priority = false,
  aspectRatio = '16 / 9',
  className = '',
}: YouTubePlayerFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  // YouTube high-quality thumbnail fallback sequence
  const posterUrl = imgError
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  if (isPlaying) {
    return (
      <div className={`podcast-player-wrapper relative w-full overflow-hidden rounded-xl bg-black ${className}`} style={{ aspectRatio }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="podcast-iframe absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div
      className={`podcast-player-wrapper podcast-player-facade relative w-full overflow-hidden rounded-xl bg-foreground cursor-pointer group ${className}`}
      style={{ aspectRatio }}
      onClick={() => setIsPlaying(true)}
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
    >
      <Image
        src={posterUrl}
        alt={`Thumbnail for ${title}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        unoptimized
        onError={() => setImgError(true)}
        className="podcast-thumbnail-img object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="podcast-player-overlay absolute inset-0 bg-black/25 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/40">
        <button
          type="button"
          className="podcast-play-btn w-16 h-16 rounded-full bg-white text-accent flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
          aria-label={`Play ${title}`}
          tabIndex={-1}
        >
          <Play size={24} fill="currentColor" className="podcast-play-icon ml-1" />
        </button>
      </div>
      <span className="podcast-play-pill absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[12px] px-3 py-1 rounded-full font-medium">
        Click to Watch
      </span>
    </div>
  );
}
