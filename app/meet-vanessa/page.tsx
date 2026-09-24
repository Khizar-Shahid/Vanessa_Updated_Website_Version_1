import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import credentialsData from '@/content/credentials.json';
import OrganicLine from '@/components/OrganicLine';
import ConvergingLines from '@/components/ConvergingLines';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import PlaceholderNote from '@/components/PlaceholderNote';

export const metadata = {
  title: 'Meet Vanessa M. Sierra, LMFT | Thrive Mental Health Solutions',
  description:
    'Learn about Vanessa M. Sierra, Licensed Marriage and Family Therapist with over 20 years of clinical experience in individual, couples, family, and trauma-focused therapy.',
};

const STEPS = [
  { num: '01', title: 'Listen', body: 'Understand the story, the present experience, and the patterns within it.' },
  { num: '02', title: 'Notice', body: 'Explore emotions, beliefs, triggers, relationships, and responses.' },
  {
    num: '03',
    title: 'Understand',
    body: 'Connect what is happening today with the experiences and patterns that may be influencing it.',
  },
  {
    num: '04',
    title: 'Move Forward',
    body: 'Build awareness and practice healthier ways of responding, communicating, and relating.',
  },
];

// Drawn directly from the §6 §6 paragraph — no added descriptions
const APPROACHES = [
  'EMDR',
  'Interpersonal therapy',
  'Narrative therapy',
  'Strength-based therapy',
  'ACT',
  'Somatic & trauma-focused approaches',
  'Art therapy',
  'The Gottman Method for couples',
];

export default function MeetVanessaPage() {
  return (
    <div className="page">
      {/* SECTION 1 — HERO: text left, portrait right, gentle fade only */}
      <section className="mv-hero">
        <div className="ambient-background" aria-hidden="true">
          <div className="ambient-orb ambient-orb-sage" />
          <div className="ambient-orb ambient-orb-salmon" />
          <div className="grain" />
        </div>
        <div className="container mv-hero__grid">
          <RevealGroup className="mv-hero__text" immediate stagger={0.12}>
            <RevealItem as="span" className="label-eyebrow">
              MEET VANESSA
            </RevealItem>
            <RevealItem as="h1">
              The Person Behind the <em>Work.</em>
            </RevealItem>
            <RevealItem as="p" className="lead-paragraph">
              A therapist, a listener, and a believer that the patterns we carry do not have to
              define the life we create.
            </RevealItem>
          </RevealGroup>

          {/* TODO(client): swap for the background-removed portrait PNG (§10.1) */}
          <Reveal className="mv-hero__portrait" delay={0.2}>
            <div className="mv-hero__photo">
              <Image
                src="/vanessa.jpg"
                alt="Portrait of Vanessa M. Sierra, LMFT"
                fill
                priority
                sizes="(max-width: 860px) 88vw, 420px"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — SHORT INTRO */}
      <section className="section-rhythm mv-intro">
        <Reveal className="container mv-intro__inner">
          <span className="label-eyebrow">A LITTLE ABOUT ME</span>
          <h2>Creating a Space Where People Feel Seen, Safe, and Understood.</h2>
          <p>
            For over 20 years, I have worked with adults, couples, families, and children across
            nonprofit, educational, and private-practice settings. My work is grounded in listening
            closely to what people are saying, noticing the patterns underneath what they are
            experiencing, and creating a therapeutic space where they can feel understood without
            judgment. I believe meaningful change begins when we can make sense of what we have been
            carrying and begin seeing new possibilities for how we relate to ourselves and others.
          </p>
          <div className="mv-intro__line" aria-hidden="true">
            <OrganicLine variant="connecting" />
          </div>
        </Reveal>
      </section>

      {/* SECTION 3 — MY STORY: major section, large text + one editorial image */}
      <section className="section-rhythm section--cream section--bordered">
        <div className="container split">
          <Reveal className="split__text mv-story__text">
            <span className="label-eyebrow">MY STORY</span>
            <h2>I Learned Early That Feeling Safe Can Change Everything.</h2>
            <p>
              As a shy and reserved child, I often found comfort in my imagination and was deeply
              sensitive to the feelings of others. As I grew, I became more observant of people and
              the spaces around me, paying close attention before deciding where I felt safe enough
              to connect.
            </p>
            <p>
              That sensitivity became especially meaningful in my first therapeutic work with foster
              children. I cared deeply about their stories, but over time I learned an important
              lesson: my role was not to rescue them. It was to help restore a sense of dignity,
              safety, and possibility - to create a space where they could discover that what they
              had experienced did not have to define who they were.
            </p>
            <p>
              That experience shaped the way I continue to see therapy today. I do not believe
              people need to be rescued. I believe they need a safe and guided space to understand
              what they have lived through, recognize their strengths, discover new ways of thinking
              and responding, and reconnect with the parts of themselves that deserve to be heard.
            </p>
          </Reveal>

          <Reveal className="split__media mv-story__media" delay={0.15}>
            <div className="media-frame">
              <Image
                src="/images/my-story-symbolic.jpg"
                alt="A quiet sunlit windowsill looking out over a garden"
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

      {/* SECTION 4 — A SHIFT IN PERSPECTIVE: signature converging lines */}
      <section className="section-rhythm section--bordered">
        <div className="container" style={{ maxWidth: '900px' }}>
          <Reveal>
            <span className="label-eyebrow">A SHIFT IN PERSPECTIVE</span>
            <h2 style={{ marginBottom: '1.75rem' }}>
              Sometimes What Looks Like Distance Still Has Connection Underneath.
            </h2>
            <p className="body-large" style={{ marginBottom: '1.25rem' }}>
              Early in my career, I expected my work to focus mainly on children and families.
              Working with my first couple changed that. I began to see how much can become
              fragmented in a relationship without people realizing it, and how meaningful it can be
              to help two people slow down, understand what is happening between them, and discover
              what may still be underneath the hurt.
            </p>
            <p className="body-large">
              Over the years, I have worked with couples who arrived feeling as though separation was
              the only option. With time, professional guidance, and clinical support, some began to
              see their relationship differently - to understand the patterns between them, create a
              new narrative, and reconnect with what still mattered to them.
            </p>
          </Reveal>
        </div>
        <div className="container">
          <ConvergingLines />
        </div>
      </section>

      {/* SECTION 5 — HOW I WORK: four steps threaded by a sage line */}
      <section className="section-rhythm section--sage section--bordered">
        <div className="container">
          <Reveal className="section-head" style={{ maxWidth: '820px' }}>
            <span className="label-eyebrow">HOW I WORK</span>
            <h2>I Start by Listening.</h2>
            <p className="body-large">
              I listen carefully to what clients say- and to what may be communicated through body
              language, emotional expression, communication style, beliefs, relationships, and
              patterns of response. I also pay attention to a person&apos;s history, support
              systems, self-awareness, readiness for change, and the connection between what they say
              they want from therapy and what may be keeping them stuck.
            </p>
          </Reveal>

          <div style={{ position: 'relative' }}>
            <div className="steps__thread" aria-hidden="true">
              <OrganicLine variant="thread" />
            </div>
            <RevealGroup as="ol" className="steps" stagger={0.18}>
              {STEPS.map((step) => (
                <RevealItem as="li" key={step.num} className="step">
                  <span className="step__dot" aria-hidden="true">
                    {step.num}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* SECTION 6 — MY APPROACH: a clean visual list, not a certification wall */}
      <section className="section-rhythm section--bordered">
        <Reveal className="container" style={{ maxWidth: '900px' }}>
          <span className="label-eyebrow">MY APPROACH</span>
          <h2 style={{ marginBottom: '1.5rem' }}>Different People Need Different Paths.</h2>
          <p className="body-large">
            My work is collaborative and individualized. Depending on the person, the concern, and
            the goals of therapy, I may draw from approaches including EMDR, interpersonal therapy,
            narrative therapy, strength-based therapy, ACT, somatic and trauma-focused approaches,
            art therapy, and the Gottman Method for couples. Exercises such as grounding, breath
            work, movement, art, music, and narrative writing may also be used when they fit the work
            and the client&apos;s needs.
          </p>
          <ul className="approach-list" aria-label="Approaches Vanessa may draw from">
            {APPROACHES.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* SECTION 7 — EXPERIENCE & TRAINING (content/credentials.json) */}
      <section className="section-rhythm section--cream section--bordered">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <Reveal className="section-head">
            <span className="label-eyebrow">EXPERIENCE &amp; TRAINING</span>
            <h2>More Than 20 Years of Experience.</h2>
          </Reveal>

          <PlaceholderNote>
            Some wording in this list was expanded beyond the approved brief — please confirm or correct
            each item.
          </PlaceholderNote>

          <RevealGroup className="credentials">
            {credentialsData.credentials.map((category) => (
              <RevealItem key={category.category} className="credential-group">
                <h3>{category.category}</h3>
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* SECTION 8 — CORE BELIEF: the page's strongest branded moment */}
      <section className="belief">
        <div className="belief__line belief__line--a" aria-hidden="true">
          <OrganicLine variant="curve-right" />
        </div>
        <div className="belief__line belief__line--b" aria-hidden="true">
          <OrganicLine variant="curve-left" stroke="var(--salmon)" />
        </div>
        <RevealGroup className="container belief__inner" stagger={0.15}>
          <RevealItem as="span" className="label-eyebrow">
            WHAT I BELIEVE
          </RevealItem>
          <RevealItem as="h2">
            Your Past May Shape You. It Does Not Have to <em>Define</em> You.
          </RevealItem>
          <RevealItem as="p">
            No one owns our identities. We do not have to remain chained to the voices of the past. I
            believe there is always room to understand what we have inherited, question what no
            longer serves us, and move toward a life that feels more aligned with who we are
            becoming.
          </RevealItem>
          <RevealItem as="p" className="belief__closing">
            There is an open door we have the right to walk through. Let&apos;s walk there together.
          </RevealItem>
        </RevealGroup>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="section-rhythm">
        <div className="container">
          <Reveal className="closing-panel">
            <div className="closing-panel__line closing-panel__line--a" aria-hidden="true">
              <OrganicLine variant="curve-left" />
            </div>
            <div className="closing-panel__line closing-panel__line--b" aria-hidden="true">
              <OrganicLine variant="curve-right" stroke="var(--salmon)" />
            </div>
            <span className="label-eyebrow">READY TO BEGIN?</span>
            <h2>You Don&apos;t Have to Have the Right Words Yet.</h2>
            <p className="lead-paragraph">
              Start with a conversation about what you&apos;re experiencing and what you hope to
              understand or change.
            </p>
            <div className="closing-panel__actions">
              <Link href="/consultation" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/ways-we-work" className="text-link">
                Explore Ways We Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
