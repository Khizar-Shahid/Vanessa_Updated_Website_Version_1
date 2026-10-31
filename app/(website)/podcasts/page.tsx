import React from 'react';
import type { Metadata } from 'next';
import podcastsData from '@/content/podcasts.json';
import PageHero from '@/components/ui/PageHero';
import PodcastsFeed from '@/components/sections/PodcastsFeed';
import { ExternalLink } from 'lucide-react';
import { YoutubeIcon } from '@/components/ui/YoutubeIcon';

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
    <div className="relative w-full overflow-x-clip">
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
            className="inline-flex items-center justify-center gap-2.5 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-primary text-white border-[1.5px] border-primary hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
            aria-label="Subscribe to Thrive with Therapy on YouTube (opens in new tab)"
          >
            <YoutubeIcon size={19} aria-hidden="true" />
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
