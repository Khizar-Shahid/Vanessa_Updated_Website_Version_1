import React from 'react';
import Link from 'next/link';
import resourcesData from '@/content/resources.json';
import { Reveal } from '@/components/motion/Reveal';

/* Line-art notebook for the free resources panel — the
   §5 §7 "book/notebook visual cue". Decorative only. */
function NotebookArt() {
  return (
    <svg viewBox="0 0 220 150" fill="none" aria-hidden="true" focusable="false" className="w-[220px] max-w-[80%] transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:-rotate-1">
      <path d="M110 30 C 88 22, 52 20, 24 26 V 128 C 52 122, 88 124, 110 132 Z" fill="#FFFFFF" stroke="var(--sage-deep)" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M110 30 C 132 22, 168 20, 196 26 V 128 C 168 122, 132 124, 110 132 Z" fill="#FFFFFF" stroke="var(--sage-deep)" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M110 30 V 132" stroke="var(--sage-deep)" strokeWidth="1.4" />
      {[48, 62, 76, 90, 104].map((y) => (
        <path key={`l${y}`} d={`M38 ${y} C 60 ${y - 3}, 80 ${y - 2}, 98 ${y + 1}`} stroke="var(--sage)" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      ))}
      <path d="M124 52 C 140 40, 160 64, 178 50" stroke="var(--salmon)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M124 72 C 146 68, 164 76, 182 70" stroke="var(--sage)" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <path d="M124 88 C 146 84, 160 92, 170 88" stroke="var(--sage)" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <path d="M160 24 V 58 L 168 50 L 176 58 V 22" fill="var(--sage)" stroke="var(--sage-deep)" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export default function ResourcePanels() {
  return (
    <section className="section-rhythm section--bordered">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="label-eyebrow">RESOURCE LIBRARY</span>
          <h2>Explore at Your Own Pace.</h2>
          <p className="lead-paragraph">
            Start with a free resource — practical tools you can use on your own.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-14 items-center max-w-[1060px] mx-auto p-7 md:p-12 rounded-xl border border-hairline bg-[rgba(221,235,219,0.5)]">
          <div className="grid place-items-center min-h-[180px] md:min-h-[240px] rounded-lg bg-white/65 group">
            <NotebookArt />
          </div>
          <div>
            <span className="label-eyebrow">FREE RESOURCES</span>
            <h3 className="font-serif text-2xl md:text-3xl font-normal mb-2 text-ink">Guides &amp; reflection tools</h3>
            <p className="text-ink text-base mb-5">Guides, worksheets, reflection tools, and practical resources to explore on your own.</p>
            {/* Reads content/resources.json, so new resources appear here automatically */}
            <ul className="list-none mb-7 border-t border-hairline">
              {resourcesData.freeResources.map((r) => (
                <li key={r.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 py-2.5 border-b border-hairline">
                  <span className="font-serif text-[17px] text-ink font-medium">{r.title}</span>
                  <span className="shrink-0 text-[12.5px] text-ink-muted">{r.format}</span>
                </li>
              ))}
            </ul>
            <Link href="/resources#free" className="btn btn-primary">
              Explore Free Resources
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
