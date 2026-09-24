import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, CalendarHeart, Compass, Route, UserRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { RevealGroup, RevealItem } from '@/components/motion/Reveal';

interface HeroCardItem {
  number: string;
  title: string;
  href: string;
  Icon: LucideIcon;
  tone: 'sage' | 'salmon';
}

// Kept as a discrete, self-contained component (§11) so the future
// animated-guide layer can sit on top of it without a rebuild.
const HERO_CARDS: HeroCardItem[] = [
  { number: '01', title: 'Meet Vanessa', href: '/meet-vanessa', Icon: UserRound, tone: 'sage' },
  // Decision pending from the client (§5 §1): card 2 has no dedicated page yet.
  { number: '02', title: "Understand What I'm Experiencing", href: '/ways-we-work', Icon: Compass, tone: 'salmon' },
  { number: '03', title: 'Explore Ways We Work', href: '/ways-we-work', Icon: Route, tone: 'sage' },
  { number: '04', title: 'Explore Resources & Courses', href: '/resources', Icon: BookOpen, tone: 'salmon' },
  { number: '05', title: 'Book a Consultation', href: '/consultation', Icon: CalendarHeart, tone: 'sage' },
];

export default function HeroCards() {
  return (
    <nav aria-label="Where would you like to begin?">
      <RevealGroup as="ul" className="hero-cards" immediate delay={0.35}>
        {HERO_CARDS.map(({ number, title, href, Icon, tone }) => (
          <RevealItem as="li" key={number}>
            <Link href={href} className={`hero-card hero-card--${tone}`}>
              <span className="hero-card__top">
                <span className="hero-card__icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <span className="hero-card__num" aria-hidden="true">
                  {number}
                </span>
              </span>
              <span className="hero-card__title">{title}</span>
              <span className="hero-card__arrow" aria-hidden="true">
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </span>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </nav>
  );
}
