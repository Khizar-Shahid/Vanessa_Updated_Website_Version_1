import React from 'react';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import credentialsData from '@/content/credentials.json';

export default function ClinicalCredentialsGrid() {
  return (
    <section className="section-rhythm section--cream section--bordered">
      <div className="container max-w-[1000px]">
        <Reveal className="section-head mb-12">
          <span className="label-eyebrow block mb-2">EXPERIENCE &amp; TRAINING</span>
          <h2>More Than 20 Years of Experience.</h2>
        </Reveal>

        <RevealGroup className="credentials grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentialsData.credentials.map((category) => (
            <RevealItem key={category.category} className="credential-group bg-white p-8 rounded-2xl border border-hairline shadow-sm">
              <h3 className="font-serif text-xl text-sage-deep mb-4 pb-2 border-b border-hairline font-medium">
                {category.category}
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {category.items.map((item) => (
                  <li key={item} className="text-[14.5px] leading-relaxed text-ink flex items-start gap-2.5">
                    <span className="text-sage font-bold leading-none mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
