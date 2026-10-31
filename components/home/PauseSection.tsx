import React from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';
import Eyebrow from '@/components/Eyebrow';

export default function PauseSection() {
  return (
    <section className="py-16 md:py-24 border-t border-hairline">
      <div className="w-full max-w-[1160px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-12 md:gap-16 items-center">
        <Reveal className="[&>h2]:mb-6 [&>p]:mb-8 [&>p:last-child]:mb-0">
          <Eyebrow>A SPACE TO PAUSE</Eyebrow>
          <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary">Sometimes, What&apos;s Happening on the Surface Isn&apos;t the Whole Story.</h2>
          <p className="text-[18px] leading-[1.8]">
            Therapy can be a space to slow down, notice what&apos;s happening beneath the
            surface, and begin making sense of the patterns that shape how we feel, think, and
            respond.
          </p>
        </Reveal>

        <Reveal className="relative before:content-[''] before:absolute before:inset-[1rem_-0.75rem_-1rem_1rem] md:before:inset-[1.75rem_-1.75rem_-1.75rem_1.75rem] before:bg-sage-soft before:rounded-md before:z-0" delay={0.1}>
          <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] z-10">
            <Image
              src="/images/space-to-pause.jpg"
              alt="A woman sitting on a rug beside a tall window, holding a mug and looking out at the garden"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute w-full md:w-[125%] -top-[18%] -right-[6%] md:-right-[22%] z-10 pointer-events-none" aria-hidden="true">
            <OrganicLine variant="curve-right" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
