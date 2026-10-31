import React from 'react';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';

export default function PodcastCrossBanner() {
  return (
    <section className="pb-16 md:pb-24 pt-0">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="podcast-cross-banner bg-cream/70 rounded-2xl border border-hairline p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="podcast-cross-banner__content max-w-[600px]">
            <Eyebrow className="block mb-2 font-bold">
              LOOKING FOR PRINTABLE EXERCISES?
            </Eyebrow>
            <h3 className="font-serif text-2xl md:text-3xl text-ink mb-3">
              Explore Our Free Resource Library
            </h3>
            <p className="text-ink-muted text-[15px] leading-relaxed">
              Download clinical reflection worksheets, communication pause exercises, and somatic tools
              designed to accompany these conversations.
            </p>
          </div>
          <div className="podcast-cross-banner__actions flex flex-wrap gap-4 items-center">
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-sage-deep text-white border-[1.5px] border-sage-deep hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
            >
              Browse Resource Library
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-transparent text-graphite border-[1.5px] border-graphite hover:bg-graphite hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
