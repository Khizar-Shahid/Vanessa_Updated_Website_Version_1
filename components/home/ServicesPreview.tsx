import React from 'react';
import Link from 'next/link';
import { ArrowRight, Feather, HeartHandshake, Sprout, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';

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
    <section className="section-rhythm section--bordered">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="label-eyebrow">WAYS WE WORK</span>
          <h2>There&apos;s More Than One Way to Begin.</h2>
          <p className="lead-paragraph">
            Whether you&apos;re working through personal challenges, experiencing relationship difficulties, or looking to build healthier family relationships, therapy can provide a supportive space to better understand your experiences, develop healthier patterns, and work toward meaningful change.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="card-grid card-grid--4">
          {SERVICES.map(({ num, title, forWhen, focus, cta, href, Icon, tone }) => (
            <RevealItem as="li" key={num}>
              <article className={`service-card service-card--${tone}`}>
                <div className="service-card__head">
                  <span className="service-card__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <span className="service-card__num" aria-hidden="true">
                    {num}
                  </span>
                </div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__for">{forWhen}</p>
                <div className="service-card__focus">
                  <span className="service-card__focus-label">Focus</span>
                  <p>{focus}</p>
                </div>
                <Link href={href} className="service-card__link">
                  <span>{cta}</span>
                  <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
