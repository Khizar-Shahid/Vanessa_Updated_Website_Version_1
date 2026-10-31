import React from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';

export default function PauseSection() {
  return (
    <section className="section-rhythm section--bordered">
      <div className="container split">
        <Reveal className="split__text">
          <span className="label-eyebrow">A SPACE TO PAUSE</span>
          <h2>Sometimes, What&apos;s Happening on the Surface Isn&apos;t the Whole Story.</h2>
          <p className="body-large">
            Therapy can be a space to slow down, notice what&apos;s happening beneath the
            surface, and begin making sense of the patterns that shape how we feel, think, and
            respond.
          </p>
        </Reveal>

        <Reveal className="split__media" delay={0.1}>
          <div className="media-frame media-frame--right">
            <Image
              src="/images/space-to-pause.jpg"
              alt="A woman sitting on a rug beside a tall window, holding a mug and looking out at the garden"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="split__line split__line--right" aria-hidden="true">
            <OrganicLine variant="curve-right" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
