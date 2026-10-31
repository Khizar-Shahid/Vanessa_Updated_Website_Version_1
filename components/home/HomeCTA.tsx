import React from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';

export default function HomeCTA() {
  return (
    <section className="section-rhythm">
      <div className="container">
        <Reveal className="relative overflow-hidden text-center p-8 sm:p-14 md:p-20 rounded-2xl border border-hairline bg-[rgba(221,235,219,0.5)]">
          <div className="absolute w-[220px] md:w-[360px] pointer-events-none -left-16 -bottom-16" aria-hidden="true">
            <OrganicLine variant="curve-left" />
          </div>
          <div className="absolute w-[220px] md:w-[360px] pointer-events-none -right-20 -top-20" aria-hidden="true">
            <OrganicLine variant="curve-right" stroke="var(--salmon)" />
          </div>
          <span className="label-eyebrow">READY WHEN YOU ARE</span>
          <h2 className="max-w-[760px] mx-auto mb-5">
            You Don&apos;t Have to Have Everything Figured Out Before Reaching Out.
          </h2>
          <p className="lead-paragraph mx-auto mb-9">
            Start with a conversation about what you&apos;re experiencing, what you&apos;re
            looking for, and whether therapy feels like the right next step.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
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
