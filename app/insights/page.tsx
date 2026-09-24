import React from 'react';
import PageHero from '@/components/PageHero';
import InsightsBrowser from '@/components/InsightsBrowser';
import PlaceholderNote from '@/components/PlaceholderNote';

export const metadata = {
  title: 'Insights | Thrive with Therapy',
  description:
    'Videos and reflections from Vanessa M. Sierra, LMFT on relationships, emotions, patterns, parenting, and everyday challenges.',
};

export default function InsightsIndexPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="INSIGHTS"
        title="A Little More to Think About."
        lead="Thoughtful ideas about relationships, emotions, patterns, parenting, and everyday challenges."
      />

      <section className="section-rhythm" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <PlaceholderNote>
            The three videos are Vanessa’s own. The titles, summaries, and the three written articles are
            drafts to be replaced with her own writing.
          </PlaceholderNote>
          <InsightsBrowser />
        </div>
      </section>
    </div>
  );
}
