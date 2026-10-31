'use client';

import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import PodcastFeatured from './podcasts/PodcastFeatured';
import PodcastCard from './podcasts/PodcastCard';
import PodcastCrossBanner from './podcasts/PodcastCrossBanner';
import { PodcastChannel, PodcastEpisode } from './podcasts/types';
import Eyebrow from '@/components/Eyebrow';

export type { PodcastChannel, PodcastEpisode };

interface PodcastsFeedProps {
  channel: PodcastChannel;
  featured: PodcastEpisode;
  episodes: PodcastEpisode[];
}

export default function PodcastsFeed({ featured, episodes }: PodcastsFeedProps) {
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
      {/* 1. Featured Episode Spotlight */}
      {isFeaturedMatch && <PodcastFeatured featured={featured} />}

      {/* 2. Grid Section (ready for multiple episodes) */}
      {false && (
        <section className="py-16 md:py-24" aria-labelledby="all-episodes-heading">
          <div className="w-full max-w-[1160px] mx-auto px-6">
            <div className="podcasts-section-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <Eyebrow>ALL EPISODES</Eyebrow>
                <h2 id="all-episodes-heading" className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary">Explore Conversations &amp; Clinical Insights</h2>
              </div>

              {/* Topic Filter Pills */}
              <div className="podcast-topic-filters flex flex-wrap gap-2" role="tablist" aria-label="Filter episodes by topic">
                {allTopics.map((topic) => {
                  const isActive = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedTopic(topic)}
                      className={`podcast-filter-pill px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'is-active bg-sage-deep text-white'
                          : 'bg-white/60 text-ink-muted hover:text-ink'
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            {filteredGridEpisodes.length === 0 ? (
              <div className="podcast-empty-state text-center py-12 bg-white/40 rounded-xl">
                <p className="text-ink-muted">No episodes found matching &ldquo;{selectedTopic}&rdquo;.</p>
                <button
                  type="button"
                  onClick={() => setSelectedTopic('All')}
                  className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[44px] px-6 bg-transparent text-graphite border-[1.5px] border-graphite hover:bg-graphite hover:text-white transition-all duration-300 mt-4"
                >
                  Reset Topic Filter
                </button>
              </div>
            ) : (
              <div className="podcast-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredGridEpisodes.map((ep, idx) => (
                    <PodcastCard key={ep.id} episode={ep} index={idx} />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. Cross-resource Library Banner */}
      <PodcastCrossBanner />
    </div>
  );
}
