import React from 'react';
import Link from 'next/link';
import insightsData from '@/content/insights.json';
import InsightCard from '@/components/InsightCard';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';

interface InsightsFeedProps {
  limit?: number;
  showHeading?: boolean;
}

export default function InsightsFeed({ limit = 3, showHeading = true }: InsightsFeedProps) {
  // insights.json is kept newest-first, so the homepage always shows the latest pieces
  const latestInsights = insightsData.slice(0, limit);

  return (
    <div>
      {showHeading && (
        <Reveal className="section-head section-head--split">
          <div>
            <span className="label-eyebrow">INSIGHTS</span>
            <h2>A Little More to Think About.</h2>
          </div>
          <div>
            <p className="lead-paragraph">
              Thoughtful ideas about relationships, emotions, patterns, parenting, and everyday
              challenges.
            </p>
            <Link href="/insights" className="btn btn-secondary">
              Explore All Insights
            </Link>
          </div>
        </Reveal>
      )}

      <RevealGroup as="ul" className="card-grid card-grid--3">
        {latestInsights.map((item) => (
          <RevealItem as="li" key={item.id}>
            <InsightCard item={item} />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
