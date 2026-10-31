import React from 'react';
import resourcesData from '@/content/resources.json';
import PageHero from '@/components/PageHero';
import ResourceCard from '@/components/resources/ResourceCard';

export const metadata = {
  alternates: {
    canonical: '/resources',
  },
  title: 'Resource Library | Thrive with Therapy',
  description:
    'Free printable reflection tools from Vanessa M. Sierra, LMFT — for pausing before you react, working through a problem one step at a time, and reflecting after a fight.',
};

export default function ResourceLibraryPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="RESOURCE LIBRARY"
        title="Explore at Your Own Pace."
        lead="Free, printable tools you can use on your own — designed around moments that matter in real life."
      />

      {/* Free Resources Section */}
      <section id="free" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-[780px] mb-12">
            <span className="font-sans text-[11px] tracking-[0.18em] font-bold uppercase text-sage-deep block mb-2">
              FREE CLINICAL TOOLS
            </span>
            <h2 className="mb-3">Guides &amp; Reflection Tools</h2>
            <p className="text-ink-muted m-0 text-[15px] leading-relaxed">
              Practical exercises, worksheets, and nervous system regulation tools to explore
              independently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcesData.freeResources.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
