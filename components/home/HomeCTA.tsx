import React from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';

export default function HomeCTA() {
  return (
    <section className="py-16 md:py-24">
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
          <p className="text-[18px] leading-[1.7] text-ink-muted max-w-[62ch] mx-auto mb-9">
            Start with a conversation about what you&apos;re experiencing, what you&apos;re
            looking for, and whether therapy feels like the right next step.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-sage-deep text-white border-[1.5px] border-sage-deep hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-ink hover:text-salmon-text inline-flex items-center gap-1.5 underline underline-offset-4 decoration-salmon hover:decoration-salmon-text transition-colors duration-200"
            >
              Have a Question?
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
