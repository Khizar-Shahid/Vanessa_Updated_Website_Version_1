import React from 'react';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';
import HeroCards from '@/components/HeroCards';

export default function HomeHero() {
  return (
    <section className="hero relative py-12 md:py-16 text-center">
      <div className="ambient-background absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="ambient-orb ambient-orb-sage" />
        <div className="ambient-orb ambient-orb-salmon" />
        <div className="grain" />
      </div>

      <div className="container hero__inner relative z-10">
        <RevealGroup className="hero__copy max-w-[900px] mx-auto" immediate stagger={0.12}>
          <RevealItem as="h1" className="hero__title">
            Find a Trusted Therapist in Florida
          </RevealItem>
          <RevealItem as="p" className="hero__lead mt-6 mx-auto text-[17px] md:text-[20px] leading-[1.65] text-ink-muted max-w-[56ch]">
            A safe, collaborative space to understand what&apos;s happening, make sense of the
            patterns beneath it, and find a way forward.
          </RevealItem>
        </RevealGroup>

        <div className="hero__line w-[min(200px,50%)] mx-auto my-5 md:mb-10" aria-hidden="true">
          <OrganicLine variant="loop" />
        </div>

        <HeroCards />
      </div>
    </section>
  );
}
