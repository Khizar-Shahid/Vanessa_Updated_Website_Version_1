import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Feather, HeartHandshake, Sprout, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import HeroCards from '@/components/HeroCards';
import OrganicLine from '@/components/OrganicLine';
import InsightsFeed from '@/components/InsightsFeed';
import ResourcePanels from '@/components/ResourcePanels';
import TestimonialSlider from '@/components/TestimonialSlider';
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

// §5 Section 4 — copy verbatim, in the required order
const SERVICES: ServiceSummary[] = [
  {
    num: '01',
    title: 'Individual Therapy',
    forWhen: 'For when something feels stuck, overwhelming, or difficult to understand on your own.',
    focus: 'Self-worth, emotional patterns, trauma-related experiences, and healthier responses.',
    cta: 'Explore Individual Therapy',
    href: '/ways-we-work/individual-therapy',
    Icon: Sprout,
    tone: 'sage',
  },
  {
    num: '02',
    title: 'Couples Therapy',
    forWhen: 'For when you care about each other, but keep getting caught in the same patterns.',
    focus: 'Communication, emotional needs, attachment patterns, and relationship connection.',
    cta: 'Explore Couples Therapy',
    href: '/ways-we-work/couples-therapy',
    Icon: HeartHandshake,
    tone: 'salmon',
  },
  {
    num: '03',
    title: 'Parenting & Family Therapy',
    forWhen: 'For families navigating conflict, changing roles, and the challenges of raising children.',
    focus: 'Parenting dynamics, developmental stages, family conflict, and healthy authority.',
    cta: 'Explore Parenting & Family Therapy',
    href: '/ways-we-work/parenting-family-therapy',
    Icon: Users,
    tone: 'sage',
  },
  {
    num: '04',
    title: 'Trauma-Focused Therapy',
    forWhen: 'For when past experiences still affect how you feel, respond, or connect with others today.',
    focus: 'Trauma, childhood experiences, emotional regulation, and patterns shaped by the past.',
    cta: 'Explore Trauma-Focused Therapy',
    href: '/ways-we-work/trauma-focused-therapy',
    Icon: Feather,
    tone: 'salmon',
  },
];

export default function HomePage() {
  return (
    <div className="page">
      {/* SECTION 1 — HERO: no buttons; the 5 cards carry navigation */}
      <section className="hero">
        <div className="ambient-background" aria-hidden="true">
          <div className="ambient-orb ambient-orb-sage" />
          <div className="ambient-orb ambient-orb-salmon" />
          <div className="grain" />
        </div>

        <div className="container hero__inner">
          <RevealGroup className="hero__copy" immediate stagger={0.12}>
            <RevealItem as="h1" className="hero__title">
              You Don&apos;t Have to Figure It All Out <em>Alone.</em>
            </RevealItem>
            <RevealItem as="p" className="hero__lead">
              A safe, collaborative space to understand what&apos;s happening, make sense of the
              patterns beneath it, and find a way forward.
            </RevealItem>
          </RevealGroup>

          <div className="hero__line" aria-hidden="true">
            <OrganicLine variant="loop" />
          </div>

          <HeroCards />
        </div>
      </section>

      {/* SECTION 2 — A SPACE TO PAUSE: text left, image right, no button */}
      <section className="section-rhythm section--bordered">
        <div className="container split">
          <Reveal className="split__text">
            <span className="label-eyebrow">A SPACE TO PAUSE</span>
            <h2>Sometimes, What&apos;s Happening on the Surface Isn&apos;t the Whole Story.</h2>
            <p className="body-large">
              Therapy can be a space to slow down, notice what&apos;s happening beneath the
              surface, and begin making sense of the patterns that shape how we feel, think, and
              respond.
            </p>
          </Reveal>

          <Reveal className="split__media" delay={0.1}>
            <div className="media-frame media-frame--right">
              <Image
                src="/images/space-to-pause.jpg"
                alt="A woman sitting on a rug beside a tall window, holding a mug and looking out at the garden"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="split__line split__line--right" aria-hidden="true">
              <OrganicLine variant="curve-right" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — UNDERSTANDING YOUR EXPERIENCE: image left, text right */}
      <section className="section-rhythm section--wash section--bordered">
        <div className="container split split--reverse">
          <Reveal className="split__media">
            <div className="media-frame media-frame--left">
              <Image
                src="/images/understanding-experience.jpg"
                alt="A woman in a cardigan sitting in an armchair by a sunlit window, smiling softly"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="split__line split__line--left" aria-hidden="true">
              <OrganicLine variant="curve-left" />
            </div>
          </Reveal>

          <Reveal className="split__text" delay={0.1}>
            <span className="label-eyebrow">UNDERSTANDING YOUR EXPERIENCE</span>
            <h2>You Don&apos;t Have to Carry It All By Yourself.</h2>
            <p>
              Life can leave us carrying more than we realize—difficult experiences, relationship
              struggles, emotional patterns, or the feeling that something in our lives is no
              longer working the way it used to. In therapy, Vanessa creates a collaborative and
              supportive space to slow down, understand what may be underneath these experiences,
              and explore how past and present patterns may be affecting the way you think, feel,
              communicate, and respond. Together, the focus is not simply on identifying what is
              difficult, but on developing greater awareness and finding healthier ways to move
              forward.
            </p>
            <Link href="/ways-we-work" className="btn btn-primary">
              Explore How We Work
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — WAYS WE WORK: four service cards, introduction only */}
      <section className="section-rhythm section--bordered">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="label-eyebrow">WAYS WE WORK</span>
            <h2>There&apos;s More Than One Way to Begin.</h2>
            <p className="lead-paragraph">
              Whether you&apos;re navigating something within yourself, struggling in a
              relationship, or trying to create a healthier family dynamic, therapy can offer a
              space to understand what&apos;s happening and work toward meaningful change.
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

      {/* SECTION 5 — MEET VANESSA: text left, real portrait right */}
      <section className="section-rhythm section--sage section--bordered">
        <div className="container split">
          <Reveal className="split__text">
            <span className="label-eyebrow">MEET VANESSA</span>
            <h2>The Person Behind the Work.</h2>
            <p className="body-large">
              Vanessa M. Sierra is a Licensed Marriage and Family Therapist with more than 20 years
              of experience working with adults, couples, families, and children. Her work is
              grounded in listening closely, understanding the patterns behind what clients are
              experiencing, and creating a supportive space where people can feel understood, safe,
              and ready to move toward change.
            </p>
            <Link href="/meet-vanessa" className="btn btn-primary">
              Meet Vanessa
            </Link>
          </Reveal>

          <Reveal className="portrait" delay={0.1}>
            <div className="portrait__frame">
              <Image
                src="/vanessa.jpg"
                alt="Portrait of Vanessa M. Sierra, LMFT"
                fill
                sizes="(max-width: 900px) 80vw, 400px"
              />
            </div>
            <div className="portrait__flourish" aria-hidden="true">
              <OrganicLine variant="loop" stroke="var(--salmon)" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — INSIGHTS: latest 3, read from content/insights.json */}
      <section className="section-rhythm section--bordered">
        <div className="container">
          <InsightsFeed limit={3} showHeading />
        </div>
      </section>

      {/* SECTION 7 — RESOURCE LIBRARY */}
      <ResourcePanels />

      {/* SECTION 8 — WHAT CLIENTS HAVE SHARED (verbatim testimonials) */}
      <TestimonialSlider />

      {/* SECTION 9 — CONSULTATION: calm, not a hard sell */}
      <section className="section-rhythm">
        <div className="container">
          <Reveal className="closing-panel">
            <div className="closing-panel__line closing-panel__line--a" aria-hidden="true">
              <OrganicLine variant="curve-left" />
            </div>
            <div className="closing-panel__line closing-panel__line--b" aria-hidden="true">
              <OrganicLine variant="curve-right" stroke="var(--salmon)" />
            </div>
            <span className="label-eyebrow">READY WHEN YOU ARE</span>
            <h2>You Don&apos;t Have to Have Everything Figured Out Before Reaching Out.</h2>
            <p className="lead-paragraph">
              Start with a conversation about what you&apos;re experiencing, what you&apos;re
              looking for, and whether therapy feels like the right next step.
            </p>
            <div className="closing-panel__actions">
              <Link href="/consultation" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/contact" className="text-link">
                Have a Question?
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
