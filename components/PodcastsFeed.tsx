'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, Calendar, ExternalLink, Sparkles, Check } from 'lucide-react';
import { YoutubeIcon } from './YoutubeIcon';

export interface PodcastEpisode {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: string;
  topics: string[];
}

export interface PodcastChannel {
  title: string;
  handle: string;
  url: string;
  subscribeUrl: string;
  description: string;
}

interface PodcastsFeedProps {
  channel: PodcastChannel;
  featured: PodcastEpisode;
  episodes: PodcastEpisode[];
}

const EASE = [0.2, 0.8, 0.3, 1] as const;

function YouTubePlayerFacade({
  youtubeId,
  title,
  priority = false,
  aspectRatio = '16 / 9',
  className = '',
}: {
  youtubeId: string;
  title: string;
  priority?: boolean;
  aspectRatio?: string;
  className?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  // YouTube high-quality thumbnail fallback sequence
  const posterUrl = imgError
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  if (isPlaying) {
    return (
      <div className={`podcast-player-wrapper ${className}`} style={{ aspectRatio }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="podcast-iframe"
        />
      </div>
    );
  }

  return (
    <div
      className={`podcast-player-wrapper podcast-player-facade ${className}`}
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
        className="podcast-thumbnail-img"
      />
      <div className="podcast-player-overlay">
        <button
          type="button"
          className="podcast-play-btn"
          aria-label={`Play ${title}`}
          tabIndex={-1}
        >
          <Play size={24} fill="currentColor" className="podcast-play-icon" />
        </button>
      </div>
      <span className="podcast-play-pill">Click to Watch</span>
    </div>
  );
}

export default function PodcastsFeed({ channel, featured, episodes }: PodcastsFeedProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  const allEpisodes = useMemo(() => [featured, ...episodes], [featured, episodes]);

  // Extract all distinct topics
  const allTopics = useMemo(() => {
    const topicSet = new Set<string>();
    allEpisodes.forEach((ep) => ep.topics.forEach((t) => topicSet.add(t)));
    return ['All', ...Array.from(topicSet)];
  }, [allEpisodes]);

  // Filter episodes for the grid
  const filteredGridEpisodes = useMemo(() => {
    if (selectedTopic === 'All') return episodes;
    return episodes.filter((ep) => ep.topics.includes(selectedTopic));
  }, [episodes, selectedTopic]);

  const isFeaturedMatch = selectedTopic === 'All' || featured.topics.includes(selectedTopic);

  return (
    <div className="podcasts-feed">
      {/* Featured Spotlight Section */}
      {isFeaturedMatch && (
        <section className="section-featured-podcast" aria-labelledby="featured-podcast-heading">
          <div className="container">
            <div className="podcast-featured-card">
              <div className="podcast-featured-card__media">
                <YouTubePlayerFacade
                  youtubeId={featured.youtubeId}
                  title={featured.title}
                  priority={true}
                  aspectRatio="16 / 9"
                />
              </div>

              <div className="podcast-featured-card__content">
                <div className="podcast-badge-row">
                  <span className="podcast-badge-featured">
                    <Sparkles size={13} aria-hidden="true" />
                    LATEST EPISODE
                  </span>
                  <span className="podcast-meta-item">
                    <Clock size={13} aria-hidden="true" />
                    {featured.duration}
                  </span>
                  <span className="podcast-meta-item">
                    <Calendar size={13} aria-hidden="true" />
                    {featured.publishedAt}
                  </span>
                </div>

                <h2 id="featured-podcast-heading" className="podcast-featured-title">
                  {featured.title}
                </h2>

                <p className="podcast-featured-desc">{featured.description}</p>

                <div className="podcast-topics-list">
                  {featured.topics.map((topic) => (
                    <span key={topic} className="podcast-topic-tag">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="podcast-featured-actions">
                  <a
                    href={`https://www.youtube.com/watch?v=${featured.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary podcast-btn-yt"
                    aria-label={`Watch "${featured.title}" on YouTube (opens in new tab)`}
                  >
                    <YoutubeIcon size={17} className="yt-icon-red" aria-hidden="true" />
                    Watch on YouTube
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Episodes Grid Section — hidden for now; re-enable when channel has multiple videos */}
      {false && <section className="section-rhythm podcasts-grid-section" aria-labelledby="all-episodes-heading">
        <div className="container">
          <div className="podcasts-section-header">
            <div>
              <span className="label-eyebrow">ALL EPISODES</span>
              <h2 id="all-episodes-heading">Explore Conversations &amp; Clinical Insights</h2>
            </div>

            {/* Topic Filter Pills */}
            <div className="podcast-topic-filters" role="tablist" aria-label="Filter episodes by topic">
              {allTopics.map((topic) => {
                const isActive = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedTopic(topic)}
                    className={`podcast-filter-pill ${isActive ? 'is-active' : ''}`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          {filteredGridEpisodes.length === 0 ? (
            <div className="podcast-empty-state">
              <p>No episodes found matching &ldquo;{selectedTopic}&rdquo;.</p>
              <button
                type="button"
                onClick={() => setSelectedTopic('All')}
                className="btn btn-secondary"
                style={{ marginTop: '1rem' }}
              >
                Reset Topic Filter
              </button>
            </div>
          ) : (
            <div className="podcast-grid">
              <AnimatePresence mode="popLayout">
                {filteredGridEpisodes.map((ep, idx) => (
                  <motion.article
                    key={ep.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: EASE, delay: idx * 0.05 }}
                    className="editorial-card podcast-card"
                  >
                    <div className="podcast-card__media">
                      <YouTubePlayerFacade
                        youtubeId={ep.youtubeId}
                        title={ep.title}
                        aspectRatio="16 / 9"
                      />
                    </div>

                    <div className="podcast-card__body">
                      <div className="podcast-card__meta">
                        <span className="podcast-meta-item">
                          <Clock size={12} aria-hidden="true" />
                          {ep.duration}
                        </span>
                        <span className="podcast-meta-item">
                          <Calendar size={12} aria-hidden="true" />
                          {ep.publishedAt}
                        </span>
                      </div>

                      <h3 className="podcast-card__title">{ep.title}</h3>

                      <p className="podcast-card__desc">{ep.description}</p>

                      <div className="podcast-topics-list" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                        {ep.topics.map((t) => (
                          <span key={t} className="podcast-topic-tag">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="podcast-card__footer">
                        <a
                          href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link podcast-yt-text-link"
                          aria-label={`Watch ${ep.title} directly on YouTube (opens in new tab)`}
                        >
                          <YoutubeIcon size={15} className="yt-icon-red" aria-hidden="true" />
                          Watch on YouTube
                          <ExternalLink size={12} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Cross-resource Banner — inside hidden section */}
        </div>
      </section>}

      {/* Cross-resource Banner */}
      <section className="section-rhythm" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="podcast-cross-banner">
            <div className="podcast-cross-banner__content">
              <span className="label-eyebrow" style={{ color: 'var(--salmon-text)' }}>
                LOOKING FOR PRINTABLE EXERCISES?
              </span>
              <h3>Explore Our Free Resource Library</h3>
              <p>
                Download clinical reflection worksheets, communication pause exercises, and somatic tools
                designed to accompany these conversations.
              </p>
            </div>
            <div className="podcast-cross-banner__actions">
              <Link href="/resources" className="btn btn-primary">
                Browse Resource Library
              </Link>
              <Link href="/consultation" className="btn btn-secondary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
