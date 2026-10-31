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
  const isCenter = align === 'center';
  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-hairline">
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb ambient-orb-sage opacity-25" />
        <div className="ambient-orb ambient-orb-salmon opacity-25" />
        <div className="grain" />
      </div>
      <div className="container">
        <RevealGroup className={`relative z-10 max-w-[860px] ${isCenter ? 'mx-auto text-center' : ''}`} immediate stagger={0.1}>
          <RevealItem as="span" className="label-eyebrow">
            {eyebrow}
          </RevealItem>
          <RevealItem as="h1" className="mb-5">{title}</RevealItem>
          {lead && (
            <RevealItem as="p" className={`lead-paragraph ${isCenter ? 'mx-auto' : ''}`}>
              {lead}
            </RevealItem>
          )}
          {children && <RevealItem>{children}</RevealItem>}
          <div className={`w-[200px] mt-8 ${isCenter ? 'mx-auto' : ''}`} aria-hidden="true">
            <OrganicLine variant="connecting" />
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
