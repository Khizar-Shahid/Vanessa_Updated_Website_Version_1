'use client';

import React from 'react';
import { Clock, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { YoutubeIcon } from '@/components/ui/YoutubeIcon';
import YouTubePlayerFacade from './YouTubePlayerFacade';
import { PodcastEpisode } from './types';
import podcastsData from '@/content/podcasts.json';

interface PodcastFeaturedProps {
  featured: PodcastEpisode;
  secondEpisode?: PodcastEpisode;
}

export default function PodcastFeatured({ featured, secondEpisode }: PodcastFeaturedProps) {
  // Use passed secondEpisode prop or fallback to data from podcasts.json
  const episode2: PodcastEpisode | undefined =
    secondEpisode || (podcastsData as { secondEpisode?: PodcastEpisode }).secondEpisode;

  return (
    <section className="section-featured-podcast py-12 md:py-16" aria-labelledby="featured-podcast-heading">
      <div className="w-full max-w-[1160px] mx-auto px-6 flex flex-col gap-8 md:gap-12">
        {/* Card 1: Existing Video Card */}
        <div className="podcast-featured-card bg-white/70 backdrop-blur-md rounded-2xl border border-border p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)]">
          <div className="podcast-featured-card__media lg:col-span-7">
            <YouTubePlayerFacade
              youtubeId={featured.youtubeId}
              title={featured.title}
              thumbnailUrl={featured.thumbnailUrl}
              priority={true}
              aspectRatio="16 / 9"
            />
          </div>

          <div className="podcast-featured-card__content lg:col-span-5 flex flex-col items-start gap-4">
            <div className="podcast-badge-row flex flex-wrap items-center gap-3 text-[12px] text-muted">
              <span className="podcast-badge-featured inline-flex items-center gap-1.5 bg-accent-soft text-accent font-bold px-3 py-1 rounded-full tracking-wider text-[11px] uppercase">
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

            <h2 id="featured-podcast-heading" className="podcast-featured-title font-serif text-2xl md:text-3xl text-foreground leading-tight">
              {featured.title}
            </h2>

            <p className="podcast-featured-desc text-muted text-[15px] leading-relaxed">
              {featured.description}
            </p>

            <div className="podcast-topics-list flex flex-wrap gap-2">
              {featured.topics.map((topic) => (
                <span
                  key={topic}
                  className="podcast-topic-tag bg-background text-muted text-[12px] px-3 py-1 rounded-full border border-border"
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
                className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-6 bg-transparent text-foreground border-[1.5px] border-foreground hover:bg-foreground hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label={`Watch "${featured.title}" on YouTube (opens in new tab)`}
              >
                <YoutubeIcon size={17} className="text-[#FF0000]" aria-hidden="true" />
                Watch on YouTube
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Second Video Card (Structure duplicated exactly from existing card) */}
        {/* TODO: Title, description, duration, and topics below were derived from the YouTube video URL (https://youtu.be/qIwSZi3QSjg?is=8Wd6IisgmL-N5oA1) as they were not supplied in the prompt */}
        {episode2 && (
          <div className="podcast-featured-card bg-white/70 backdrop-blur-md rounded-2xl border border-border p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)]">
            <div className="podcast-featured-card__media lg:col-span-7">
              <YouTubePlayerFacade
                youtubeId={episode2.youtubeId}
                title={episode2.title}
                thumbnailUrl={episode2.thumbnailUrl}
                priority={false}
                aspectRatio="16 / 9"
              />
            </div>

            <div className="podcast-featured-card__content lg:col-span-5 flex flex-col items-start gap-4">
              <div className="podcast-badge-row flex flex-wrap items-center gap-3 text-[12px] text-muted">
                <span className="podcast-badge-featured inline-flex items-center gap-1.5 bg-accent-soft text-accent font-bold px-3 py-1 rounded-full tracking-wider text-[11px] uppercase">
                  <Sparkles size={13} aria-hidden="true" />
                  FEATURED CONVERSATION
                </span>
                <span className="podcast-meta-item inline-flex items-center gap-1">
                  <Clock size={13} aria-hidden="true" />
                  {episode2.duration}
                </span>
                <span className="podcast-meta-item inline-flex items-center gap-1">
                  <Calendar size={13} aria-hidden="true" />
                  {episode2.publishedAt}
                </span>
              </div>

              <h3 className="podcast-featured-title font-serif text-2xl md:text-3xl text-foreground leading-tight">
                {episode2.title}
              </h3>

              <p className="podcast-featured-desc text-muted text-[15px] leading-relaxed">
                {episode2.description}
              </p>

              <div className="podcast-topics-list flex flex-wrap gap-2">
                {episode2.topics.map((topic) => (
                  <span
                    key={topic}
                    className="podcast-topic-tag bg-background text-muted text-[12px] px-3 py-1 rounded-full border border-border"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="podcast-featured-actions mt-2">
                <a
                  href={`https://www.youtube.com/watch?v=${episode2.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-6 bg-transparent text-foreground border-[1.5px] border-foreground hover:bg-foreground hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                  aria-label={`Watch "${episode2.title}" on YouTube (opens in new tab)`}
                >
                  <YoutubeIcon size={17} className="text-[#FF0000]" aria-hidden="true" />
                  Watch on YouTube
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
