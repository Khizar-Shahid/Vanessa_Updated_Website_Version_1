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
  { number: '02', title: "Understand What I'm Experiencing", href: '/meet-vanessa', Icon: Compass, tone: 'salmon' },
  { number: '03', title: 'Explore Ways We Work', href: '/services', Icon: Route, tone: 'sage' },
  { number: '04', title: 'Explore Free Resources', href: '/resources', Icon: BookOpen, tone: 'salmon' },
  { number: '05', title: 'Book a Consultation', href: '/consultation', Icon: CalendarHeart, tone: 'sage' },
];

export default function HeroCards() {
  return (
    <nav aria-label="Where would you like to begin?">
      <RevealGroup as="ul" className="list-none flex flex-wrap justify-center gap-4 max-w-[1160px] mx-auto text-left" immediate delay={0.35}>
        {HERO_CARDS.map(({ number, title, href, Icon, tone }) => {
          const isSalmon = tone === 'salmon';
          return (
            <RevealItem as="li" key={number} className="flex flex-1 min-w-[190px] max-w-[228px] max-sm:max-w-none max-sm:min-w-full">
              <Link
                href={href}
                className="group relative flex flex-col sm:flex-col justify-between max-sm:flex-row max-sm:items-center gap-4 max-sm:gap-3 w-full min-h-[188px] max-sm:min-h-0 p-5 max-sm:py-3.5 max-sm:px-4 bg-white/75 backdrop-blur-md border border-border rounded-xl shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] text-foreground no-underline overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-primary/40"
              >
                {/* Tone accent line on hover */}
                <span
                  className={`absolute left-5 right-5 bottom-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isSalmon ? 'bg-accent-light' : 'bg-primary'
                  }`}
                  aria-hidden="true"
                />

                <span className="flex justify-between items-center w-full max-sm:w-auto">
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      isSalmon ? 'bg-accent-soft text-accent' : 'bg-primary-soft text-primary'
                    }`}
                    aria-hidden="true"
                  >
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="font-serif italic text-[15px] text-muted max-sm:hidden" aria-hidden="true">
                    {number}
                  </span>
                </span>

                <span className="font-serif text-[18px] sm:text-[19px] font-medium leading-[1.25] flex-1">
                  {title}
                </span>

                <span
                  className="self-end max-sm:self-center shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:border-foreground group-hover:text-white group-hover:rotate-45"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={16} strokeWidth={1.8} />
                </span>
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </nav>
  );
}
