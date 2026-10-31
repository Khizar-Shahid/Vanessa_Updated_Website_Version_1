import React from 'react';
import { Reveal } from '@/components/motion/Reveal';

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
    <section className="section-rhythm section--bordered">
      <Reveal className="container max-w-[900px]">
        <span className="label-eyebrow block mb-2">MY APPROACH</span>
        <h2 className="mb-6">Different People Need Different Paths.</h2>
        <p className="body-large text-ink-muted text-[16px] md:text-[18px] leading-relaxed mb-8">
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
