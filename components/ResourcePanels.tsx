import React from 'react';
import Link from 'next/link';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';

/* Line-art notebook (free resources) and book stack (courses) — the
   §5 §7 "book/notebook visual cue". Decorative only. */
function NotebookArt() {
  return (
    <svg viewBox="0 0 220 150" fill="none" aria-hidden="true" focusable="false" className="resource-panel__art">
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

function BookStackArt() {
  return (
    <svg viewBox="0 0 220 150" fill="none" aria-hidden="true" focusable="false" className="resource-panel__art">
      <rect x="40" y="104" width="140" height="22" rx="3" fill="#FFFFFF" stroke="var(--salmon-text)" strokeWidth="1.4" />
      <path d="M54 104 V 126" stroke="var(--salmon)" strokeWidth="1.4" />
      <rect x="52" y="80" width="120" height="24" rx="3" fill="var(--salmon-soft)" stroke="var(--salmon-text)" strokeWidth="1.4" />
      <path d="M72 92 H 140" stroke="var(--salmon-text)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <rect x="46" y="58" width="130" height="22" rx="3" fill="#FFFFFF" stroke="var(--salmon-text)" strokeWidth="1.4" />
      <path d="M160 58 V 80" stroke="var(--salmon)" strokeWidth="1.4" />
      <path d="M96 58 C 96 40, 112 26, 128 22 C 124 34, 126 46, 134 56" fill="var(--sage-soft)" stroke="var(--sage-deep)" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M100 56 C 108 44, 116 36, 126 28" stroke="var(--sage-deep)" strokeWidth="1" strokeLinecap="round" />
      <path d="M20 132 C 70 126, 150 138, 200 130" stroke="var(--salmon)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
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
            Start with a free resource, or go deeper with guided learning through our courses.
          </p>
        </Reveal>

        <RevealGroup className="resource-panels">
          <RevealItem className="resource-panel resource-panel--sage">
            <div className="resource-panel__visual">
              <NotebookArt />
            </div>
            <h3 className="resource-panel__title">Free Resources</h3>
            <p>Guides, worksheets, reflection tools, and practical resources to explore on your own.</p>
            <Link href="/resources#free" className="btn btn-primary">
              Explore Free Resources
            </Link>
          </RevealItem>

          <RevealItem className="resource-panel resource-panel--salmon">
            <div className="resource-panel__visual">
              <BookStackArt />
            </div>
            <h3 className="resource-panel__title">Courses</h3>
            <p>Go deeper with structured learning designed around topics that matter in real life.</p>
            <Link href="/resources#courses" className="btn btn-secondary">
              Explore Courses
            </Link>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
