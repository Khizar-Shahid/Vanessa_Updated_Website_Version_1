'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from '@/components/YoutubeIcon';
import YouTubePlayerFacade from './YouTubePlayerFacade';
import { PodcastEpisode, EASE } from './types';

interface PodcastCardProps {
  episode: PodcastEpisode;
  index: number;
}

export default function PodcastCard({ episode, index }: PodcastCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: EASE, delay: index * 0.05 }}
      className="editorial-card podcast-card flex flex-col bg-white/70 backdrop-blur-sm rounded-xl border border-hairline overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="podcast-card__media">
        <YouTubePlayerFacade
          youtubeId={episode.youtubeId}
          title={episode.title}
          aspectRatio="16 / 9"
        />
      </div>

      <div className="podcast-card__body p-5 flex flex-col flex-1 gap-3">
        <div className="podcast-card__meta flex items-center gap-3 text-[12px] text-ink-muted">
          <span className="podcast-meta-item inline-flex items-center gap-1">
            <Clock size={12} aria-hidden="true" />
            {episode.duration}
          </span>
          <span className="podcast-meta-item inline-flex items-center gap-1">
            <Calendar size={12} aria-hidden="true" />
            {episode.publishedAt}
          </span>
        </div>

        <h3 className="podcast-card__title font-serif text-lg text-ink font-medium leading-snug">
          {episode.title}
        </h3>

        <p className="podcast-card__desc text-ink-muted text-[14px] line-clamp-3 leading-relaxed">
          {episode.description}
        </p>

        <div className="podcast-topics-list mt-auto pt-3 flex flex-wrap gap-1.5">
          {episode.topics.map((t) => (
            <span key={t} className="podcast-topic-tag bg-parchment text-ink-muted text-[11px] px-2.5 py-0.5 rounded-full border border-hairline">
              {t}
            </span>
          ))}
        </div>

        <div className="podcast-card__footer pt-3 border-t border-hairline mt-2">
          <a
            href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link podcast-yt-text-link inline-flex items-center gap-1.5 text-[13px] text-ink-muted hover:text-ink transition-colors"
            aria-label={`Watch ${episode.title} directly on YouTube (opens in new tab)`}
          >
            <YoutubeIcon size={15} className="text-[#FF0000]" aria-hidden="true" />
            Watch on YouTube
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
