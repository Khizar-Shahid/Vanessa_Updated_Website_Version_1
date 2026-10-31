import React from 'react';
import resourcesData from '@/content/resources.json';
import PageHero from '@/components/ui/PageHero';
import ResourceCard from '@/components/resources/ResourceCard';
import Eyebrow from '@/components/ui/Eyebrow';

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
    <div className="relative w-full overflow-x-clip">
      <PageHero
        eyebrow="RESOURCE LIBRARY"
        title="Explore at Your Own Pace."
        lead="Free, printable tools you can use on your own — designed around moments that matter in real life."
      />

      {/* Free Resources Section */}
      <section id="free" className="py-16 md:py-24">
        <div className="w-full max-w-[1160px] mx-auto px-6">
          <div className="max-w-[780px] mb-12">
            <Eyebrow className="block mb-2">FREE CLINICAL TOOLS</Eyebrow>
            <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary mb-3">Guides &amp; Reflection Tools</h2>
            <p className="text-muted m-0 text-[15px] leading-relaxed">
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
