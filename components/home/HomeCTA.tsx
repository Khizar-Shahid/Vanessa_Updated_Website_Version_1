import React from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import OrganicLine from '@/components/OrganicLine';
import Eyebrow from '@/components/Eyebrow';

export default function HomeCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <Reveal className="relative overflow-hidden text-center p-8 sm:p-14 md:p-20 rounded-2xl border border-border bg-[rgba(221,235,219,0.5)]">
          <div className="absolute w-[220px] md:w-[360px] pointer-events-none -left-16 -bottom-16" aria-hidden="true">
            <OrganicLine variant="curve-left" />
          </div>
          <div className="absolute w-[220px] md:w-[360px] pointer-events-none -right-20 -top-20" aria-hidden="true">
            <OrganicLine variant="curve-right" stroke="var(--color-accent-light)" />
          </div>
          <Eyebrow>READY WHEN YOU ARE</Eyebrow>
          <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary max-w-[760px] mx-auto mb-5">
            You Don&apos;t Have to Have Everything Figured Out Before Reaching Out.
          </h2>
          <p className="text-[18px] leading-[1.7] text-muted max-w-[62ch] mx-auto mb-9">
            Start with a conversation about what you&apos;re experiencing, what you&apos;re
            looking for, and whether therapy feels like the right next step.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-primary text-white border-[1.5px] border-primary hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-foreground hover:text-accent inline-flex items-center gap-1.5 underline underline-offset-4 decoration-accent-light hover:decoration-accent transition-colors duration-200"
            >
              Have a Question?
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
