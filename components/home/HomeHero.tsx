import React from 'react';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';
import OrganicLine from '@/components/ui/OrganicLine';
import Atmosphere from '@/components/ui/Atmosphere';
import HeroCards from '@/components/home/HeroCards';

export default function HomeHero() {
  return (
    <section className="relative py-12 md:py-16 text-center">
      <Atmosphere />

      <div className="w-full max-w-[1160px] mx-auto px-6 relative z-10">
        <RevealGroup className="max-w-[900px] mx-auto" immediate stagger={0.12}>
          <RevealItem as="h1" className="font-serif text-5xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary">
            Find a Trusted Therapist in Florida
          </RevealItem>
          <RevealItem as="p" className="mt-6 mx-auto text-[17px] md:text-[20px] leading-[1.65] text-muted max-w-[56ch]">
            A safe, collaborative space to understand what&apos;s happening, make sense of the
            patterns beneath it, and find a way forward.
          </RevealItem>
        </RevealGroup>

        <div className="w-[min(200px,50%)] mx-auto my-5 md:mb-10" aria-hidden="true">
          <OrganicLine variant="loop" />
        </div>

        <HeroCards />
      </div>
    </section>
  );
}
