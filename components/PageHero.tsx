import React from 'react';
import OrganicLine from '@/components/OrganicLine';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'center' | 'left';
  children?: React.ReactNode;
}

/** Shared hero for inner pages: soft atmosphere, staggered entry, drawn line. */
export default function PageHero({ eyebrow, title, lead, align = 'center', children }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${align}`}>
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb ambient-orb-sage" />
        <div className="ambient-orb ambient-orb-salmon" />
        <div className="grain" />
      </div>
      <div className="container">
        <RevealGroup className="page-hero__inner" immediate stagger={0.1}>
          <RevealItem as="span" className="label-eyebrow">
            {eyebrow}
          </RevealItem>
          <RevealItem as="h1">{title}</RevealItem>
          {lead && (
            <RevealItem as="p" className="lead-paragraph">
              {lead}
            </RevealItem>
          )}
          {children && <RevealItem>{children}</RevealItem>}
          <div className="page-hero__line" aria-hidden="true">
            <OrganicLine variant="connecting" />
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
