import React from 'react';
import Image from 'next/image';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/Reveal';
import Atmosphere from '@/components/Atmosphere';
import Eyebrow from '@/components/Eyebrow';

export default function MeetVanessaHero() {
  return (
    <section className="relative py-16 md:py-24 text-center md:text-left overflow-hidden border-b border-hairline">
      <Atmosphere />

      <div className="w-full max-w-[1160px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <RevealGroup className="md:col-span-7 flex flex-col items-center md:items-start" immediate stagger={0.12}>
          <RevealItem>
            <Eyebrow className="mb-3">MEET VANESSA</Eyebrow>
          </RevealItem>
          <RevealItem as="h1" className="font-serif text-5xl font-normal text-foreground leading-tight mb-4 text-balance [&>em]:italic [&>em]:text-primary">
            Meet Vanessa Sierra, <em>LMFT</em>
          </RevealItem>
          <RevealItem as="p" className="text-[18px] leading-[1.7] text-ink-muted text-[17px] md:text-[19px] max-w-[52ch]">
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
