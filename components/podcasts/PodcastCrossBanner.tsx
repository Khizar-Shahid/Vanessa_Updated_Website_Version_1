import React from 'react';
import Link from 'next/link';

export default function PodcastCrossBanner() {
  return (
    <section className="section-rhythm pt-0">
      <div className="container">
        <div className="podcast-cross-banner bg-cream/70 rounded-2xl border border-hairline p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="podcast-cross-banner__content max-w-[600px]">
            <span className="label-eyebrow text-salmon-text font-bold block mb-2">
              LOOKING FOR PRINTABLE EXERCISES?
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-ink mb-3">
              Explore Our Free Resource Library
            </h3>
            <p className="text-ink-muted text-[15px] leading-relaxed">
              Download clinical reflection worksheets, communication pause exercises, and somatic tools
              designed to accompany these conversations.
            </p>
          </div>
          <div className="podcast-cross-banner__actions flex flex-wrap gap-4 items-center">
            <Link href="/resources" className="btn btn-primary">
              Browse Resource Library
            </Link>
            <Link href="/consultation" className="btn btn-secondary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
