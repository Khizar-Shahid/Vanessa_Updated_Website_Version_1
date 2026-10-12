import React from 'react';
import type { Metadata } from 'next';
import podcastsData from '@/content/podcasts.json';
import PageHero from '@/components/PageHero';
import PodcastsFeed from '@/components/PodcastsFeed';
import { Youtube, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Podcasts & Video Insights | Thrive with Therapy',
  description:
    'Watch clinical insights, conversations, and mental health video episodes with Vanessa M. Sierra, LMFT. Practical guidance on trauma recovery, couples communication, and nervous system regulation.',
  alternates: {
    canonical: '/podcasts',
  },
};

export default function PodcastsPage() {
  return (
    <div className="page page-podcasts">
      <PageHero
        eyebrow="PODCASTS &amp; VIDEO INSIGHTS"
        title="Conversations on Healing, Growth &amp; Connection."
        lead="Thoughtful clinical dialogues, somatic regulation practices, and relational perspectives on understanding the patterns beneath your emotions."
      >
        <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center' }}>
          <a
            href={podcastsData.channel.subscribeUrl || podcastsData.channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ gap: '0.65rem' }}
            aria-label="Subscribe to Thrive with Therapy on YouTube (opens in new tab)"
          >
            <Youtube size={19} aria-hidden="true" />
            <span>Subscribe on YouTube</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </PageHero>

      <PodcastsFeed
        channel={podcastsData.channel}
        featured={podcastsData.featured}
        episodes={podcastsData.episodes}
      />
    </div>
  );
}
