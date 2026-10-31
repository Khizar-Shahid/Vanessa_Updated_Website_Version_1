import React from 'react';
import { Reveal } from '@/components/motion/Reveal';
import Eyebrow from '@/components/Eyebrow';

const APPROACHES = [
  'EMDR',
  'Interpersonal therapy',
  'Narrative therapy',
  'Strength-based therapy',
  'ACT',
  'Somatic & trauma-focused approaches',
  'Art therapy',
  'The Gottman Method for couples',
];

export default function SpecializedModalities() {
  return (
    <section className="py-16 md:py-24 border-t border-hairline">
      <Reveal className="w-full max-w-[900px] mx-auto px-6">
        <Eyebrow className="block mb-2">MY APPROACH</Eyebrow>
        <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-normal leading-[1.2] text-ink text-balance tracking-[-0.01em] [&>em]:italic [&>em]:text-sage-deep mb-6">Different People Need Different Paths.</h2>
        <p className="text-ink-muted text-[16px] md:text-[18px] leading-[1.8] mb-8">
          My work is collaborative and individualized. Depending on the person, the concern, and
          the goals of therapy, I may draw from approaches including EMDR, interpersonal therapy,
          narrative therapy, strength-based therapy, ACT, somatic and trauma-focused approaches,
          art therapy, and the Gottman Method for couples. Exercises such as grounding, breath
          work, movement, art, music, and narrative writing may also be used when they fit the work
          and the client&apos;s needs.
        </p>
        <ul className="flex flex-wrap gap-2.5 list-none p-0 mt-8" aria-label="Approaches Vanessa may draw from">
          {APPROACHES.map((a) => (
            <li
              key={a}
              className="bg-white px-4 py-2 rounded-full border border-hairline text-[14px] text-ink font-medium shadow-sm hover:border-sage transition-colors"
            >
              {a}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
