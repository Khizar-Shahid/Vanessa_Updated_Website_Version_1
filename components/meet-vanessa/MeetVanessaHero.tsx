import React from 'react';
import Image from 'next/image';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/Reveal';

export default function MeetVanessaHero() {
  return (
    <section className="relative py-16 md:py-24 text-center md:text-left overflow-hidden border-b border-hairline">
      <div className="ambient-background absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="ambient-orb ambient-orb-sage" />
        <div className="ambient-orb ambient-orb-salmon" />
        <div className="grain" />
      </div>

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <RevealGroup className="md:col-span-7 flex flex-col items-center md:items-start" immediate stagger={0.12}>
          <RevealItem as="span" className="label-eyebrow block mb-3">
            MEET VANESSA
          </RevealItem>
          <RevealItem as="h1" className="font-serif text-3xl md:text-5xl text-ink leading-tight mb-4">
            Meet Vanessa Sierra, <em>LMFT</em>
          </RevealItem>
          <RevealItem as="p" className="lead-paragraph text-ink-muted text-[17px] md:text-[19px] leading-relaxed max-w-[52ch]">
            A therapist, a listener, and a believer that the patterns we carry do not have to
            define the life we create.
          </RevealItem>
        </RevealGroup>

        <Reveal className="md:col-span-5 flex justify-center" delay={0.2}>
          <div className="relative w-[280px] sm:w-[320px] md:w-[380px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-hairline bg-cream">
            <Image
              src="/poster.png"
              alt="Vanessa M. Sierra, LMFT - Influential Women Recognition"
              fill
              priority
              sizes="(max-width: 860px) 88vw, 460px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
