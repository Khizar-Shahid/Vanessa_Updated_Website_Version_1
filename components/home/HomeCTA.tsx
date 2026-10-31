import React from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';

export default function HomeCTA() {
  return (
    <section className="section-rhythm">
      <div className="container">
        <Reveal className="closing-panel">
          <div className="closing-panel__line closing-panel__line--a" aria-hidden="true">
            <OrganicLine variant="curve-left" />
          </div>
          <div className="closing-panel__line closing-panel__line--b" aria-hidden="true">
            <OrganicLine variant="curve-right" stroke="var(--salmon)" />
          </div>
          <span className="label-eyebrow">READY WHEN YOU ARE</span>
          <h2>You Don&apos;t Have to Have Everything Figured Out Before Reaching Out.</h2>
          <p className="lead-paragraph">
            Start with a conversation about what you&apos;re experiencing, what you&apos;re
            looking for, and whether therapy feels like the right next step.
          </p>
          <div className="closing-panel__actions">
            <Link href="/consultation" className="btn btn-primary">
              Book a Consultation
            </Link>
            <Link href="/contact" className="text-link">
              Have a Question?
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
