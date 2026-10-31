'use client';

import React from 'react';
import { Clock, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { YoutubeIcon } from '@/components/YoutubeIcon';
import YouTubePlayerFacade from './YouTubePlayerFacade';
import { PodcastEpisode } from './types';

interface PodcastFeaturedProps {
  featured: PodcastEpisode;
}

export default function PodcastFeatured({ featured }: PodcastFeaturedProps) {
  return (
    <section className="section-featured-podcast py-12 md:py-16" aria-labelledby="featured-podcast-heading">
      <div className="container">
        <div className="podcast-featured-card bg-white/70 backdrop-blur-md rounded-2xl border border-hairline p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)]">
          <div className="podcast-featured-card__media lg:col-span-7">
            <YouTubePlayerFacade
              youtubeId={featured.youtubeId}
              title={featured.title}
              priority={true}
              aspectRatio="16 / 9"
            />
          </div>

          <div className="podcast-featured-card__content lg:col-span-5 flex flex-col items-start gap-4">
            <div className="podcast-badge-row flex flex-wrap items-center gap-3 text-[12px] text-ink-muted">
              <span className="podcast-badge-featured inline-flex items-center gap-1.5 bg-salmon-soft text-salmon-text font-bold px-3 py-1 rounded-full tracking-wider text-[11px] uppercase">
                <Sparkles size={13} aria-hidden="true" />
                LATEST EPISODE
              </span>
              <span className="podcast-meta-item inline-flex items-center gap-1">
                <Clock size={13} aria-hidden="true" />
                {featured.duration}
              </span>
              <span className="podcast-meta-item inline-flex items-center gap-1">
                <Calendar size={13} aria-hidden="true" />
                {featured.publishedAt}
              </span>
            </div>

            <h2 id="featured-podcast-heading" className="podcast-featured-title font-serif text-2xl md:text-3xl text-ink leading-tight">
              {featured.title}
            </h2>

            <p className="podcast-featured-desc text-ink-muted text-[15px] leading-relaxed">
              {featured.description}
            </p>

            <div className="podcast-topics-list flex flex-wrap gap-2">
              {featured.topics.map((topic) => (
                <span
                  key={topic}
                  className="podcast-topic-tag bg-parchment text-ink-muted text-[12px] px-3 py-1 rounded-full border border-hairline"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="podcast-featured-actions mt-2">
              <a
                href={`https://www.youtube.com/watch?v=${featured.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-6 bg-transparent text-graphite border-[1.5px] border-graphite hover:bg-graphite hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label={`Watch "${featured.title}" on YouTube (opens in new tab)`}
              >
                <YoutubeIcon size={17} className="text-[#FF0000]" aria-hidden="true" />
                Watch on YouTube
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
