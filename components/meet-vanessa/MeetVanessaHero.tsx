import React from 'react';
import Image from 'next/image';
import { RevealGroup, RevealItem, Reveal } from '@/components/motion/Reveal';
import Atmosphere from '@/components/ui/Atmosphere';
import Eyebrow from '@/components/ui/Eyebrow';

export default function MeetVanessaHero() {
  return (
    <section className="relative py-16 md:py-24 text-center md:text-left overflow-hidden border-b border-border">
      <Atmosphere />

      <div className="w-full max-w-[1160px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <RevealGroup className="md:col-span-7 flex flex-col items-center md:items-start" immediate stagger={0.12}>
          <RevealItem>
            <Eyebrow className="mb-3">MEET VANESSA</Eyebrow>
          </RevealItem>
          <RevealItem as="h1" className="font-serif text-5xl font-normal text-foreground leading-tight mb-4 text-balance [&>em]:italic [&>em]:text-primary">
            Meet Vanessa Sierra, <em>LMFT</em>
          </RevealItem>
          <RevealItem as="p" className="text-[18px] leading-[1.7] text-muted text-[17px] md:text-[19px] max-w-[52ch]">
            A therapist, a listener, and a believer that the patterns we carry do not have to
            define the life we create.
          </RevealItem>
        </RevealGroup>

        <Reveal className="md:col-span-5 relative justify-self-center w-[min(100%,460px)] max-[860px]:w-[min(92%,400px)] before:content-[''] before:absolute before:inset-[-14px_14px_14px_-14px] before:border before:border-primary before:rounded-md before:pointer-events-none" delay={0.2}>
          <div className="relative aspect-[800/748] rounded-md overflow-hidden shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] border border-border bg-surface">
            <Image
              src="/poster.png"
              alt="Vanessa M. Sierra, LMFT - Influential Women Recognition"
              fill
              priority
              sizes="(max-width: 860px) 88vw, 460px"
              className="object-cover object-center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
