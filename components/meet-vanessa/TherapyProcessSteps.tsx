import React from 'react';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';

const STEPS = [
  { num: '01', title: 'Listen', body: 'Understand the story, the present experience, and the patterns within it.' },
  { num: '02', title: 'Notice', body: 'Explore emotions, beliefs, triggers, relationships, and responses.' },
  {
    num: '03',
    title: 'Understand',
    body: 'Connect what is happening today with the experiences and patterns that may be influencing it.',
  },
  {
    num: '04',
    title: 'Move Forward',
    body: 'Build awareness and practice healthier ways of responding, communicating, and relating.',
  },
];

export default function TherapyProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-sage-soft/50 border-t border-hairline">
      <div className="container">
        <Reveal className="max-w-[820px] mb-12">
          <span className="label-eyebrow block mb-2">HOW I WORK</span>
          <h2 className="mb-4">I Start by Listening.</h2>
          <p className="text-ink-muted text-[16px] md:text-[18px] leading-[1.8]">
            I listen carefully to what clients say—and to what may be communicated through body
            language, emotional expression, communication style, beliefs, relationships, and
            patterns of response. I also pay attention to a person&apos;s history, support
            systems, self-awareness, readiness for change, and the connection between what they say
            they want from therapy and what may be keeping them stuck.
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 -top-2 z-0 hidden lg:block" aria-hidden="true">
            <OrganicLine variant="thread" />
          </div>
          <RevealGroup as="ol" className="list-none p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10" stagger={0.18}>
            {STEPS.map((step) => (
              <RevealItem as="li" key={step.num} className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-hairline flex flex-col gap-2 relative z-10">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-parchment border border-sage text-sage-deep font-bold text-xs mb-2" aria-hidden="true">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl text-ink font-medium">{step.title}</h3>
                <p className="text-ink-muted text-[14px] leading-relaxed">{step.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
