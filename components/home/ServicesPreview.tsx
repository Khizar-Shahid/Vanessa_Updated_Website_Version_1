import React from 'react';
import Link from 'next/link';
import { ArrowRight, Feather, HeartHandshake, Sprout, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';

interface ServiceSummary {
  num: string;
  title: string;
  forWhen: string;
  focus: string;
  cta: string;
  href: string;
  Icon: LucideIcon;
  tone: 'sage' | 'salmon';
}

const SERVICES: ServiceSummary[] = [
  {
    num: '01',
    title: 'Individual Therapy',
    forWhen: 'For when something feels stuck, overwhelming, or difficult to understand on your own.',
    focus: 'Self-worth, emotional patterns, trauma-related experiences, and healthier responses.',
    cta: 'Explore Individual Therapy',
    href: '/services/individual-therapy-miami',
    Icon: Sprout,
    tone: 'sage',
  },
  {
    num: '02',
    title: 'Couples Therapy',
    forWhen: 'For when you care about each other, but keep getting caught in the same patterns.',
    focus: 'Communication, emotional needs, attachment patterns, and relationship connection.',
    cta: 'Explore Couples Therapy',
    href: '/services/couples-therapy-miami',
    Icon: HeartHandshake,
    tone: 'salmon',
  },
  {
    num: '03',
    title: 'Parenting & Family Therapy',
    forWhen: 'For families navigating conflict, changing roles, and the challenges of raising children.',
    focus: 'Parenting dynamics, developmental stages, family conflict, and healthy authority.',
    cta: 'Explore Parenting & Family Therapy',
    href: '/services/parenting-family-therapy-miami',
    Icon: Users,
    tone: 'sage',
  },
  {
    num: '04',
    title: 'Trauma-Focused Therapy',
    forWhen: 'For when past experiences still affect how you feel, respond, or connect with others today.',
    focus: 'Trauma, childhood experiences, emotional regulation, and patterns shaped by the past.',
    cta: 'Explore Trauma-Focused Therapy',
    href: '/services/trauma-therapy-miami',
    Icon: Feather,
    tone: 'salmon',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <Reveal className="text-center max-w-[780px] mx-auto mb-14 [&>h2]:mb-4">
          <Eyebrow>WAYS WE WORK</Eyebrow>
          <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary">There&apos;s More Than One Way to Begin.</h2>
          <p className="text-[18px] leading-[1.7] text-muted mx-auto max-w-[62ch]">
            Whether you&apos;re working through personal challenges, experiencing relationship difficulties, or looking to build healthier family relationships, therapy can provide a supportive space to better understand your experiences, develop healthier patterns, and work toward meaningful change.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ num, title, forWhen, focus, cta, href, Icon, tone }) => {
            const isSalmon = tone === 'salmon';
            return (
              <RevealItem as="li" key={num} className="flex">
                <article className="group relative flex flex-col w-full p-7 bg-white rounded-2xl border border-border shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                  {/* Top line accent */}
                  <span
                    className={`absolute top-0 left-0 right-0 h-[3px] ${
                      isSalmon ? 'bg-accent-light' : 'bg-primary'
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex justify-between items-start">
                    <span
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isSalmon ? 'bg-accent-soft text-accent' : 'bg-primary-soft text-primary'
                      }`}
                      aria-hidden="true"
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    <span
                      className={`font-serif italic text-3xl leading-none opacity-60 ${
                        isSalmon ? 'text-accent-light' : 'text-primary'
                      }`}
                      aria-hidden="true"
                    >
                      {num}
                    </span>
                  </div>

                  <h3 className="font-serif text-[22px] font-medium text-foreground my-4">
                    {title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-foreground mb-5 flex-1">
                    {forWhen}
                  </p>

                  <div className="pt-4 border-t border-dashed border-border mb-6">
                    <span
                      className={`block text-[11px] font-bold tracking-wider uppercase mb-1 ${
                        isSalmon ? 'text-accent' : 'text-primary'
                      }`}
                    >
                      Focus
                    </span>
                    <p className="text-[13.5px] leading-relaxed text-muted">
                      {focus}
                    </p>
                  </div>

                  <Link
                    href={href}
                    className="flex justify-between items-center gap-3 min-h-[44px] px-4 py-2.5 rounded-full border-[1.5px] border-foreground text-[13.5px] font-semibold text-foreground no-underline hover:bg-foreground hover:text-white transition-colors duration-200 group/btn"
                  >
                    <span>{cta}</span>
                    <ArrowRight
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
