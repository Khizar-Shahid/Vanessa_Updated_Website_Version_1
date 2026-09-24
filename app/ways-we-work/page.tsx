import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';

export const metadata = {
  title: 'Ways We Work | Thrive Mental Health Solutions',
  description:
    'Explore therapeutic services offered by Vanessa M. Sierra, LMFT: Individual Therapy, Couples Therapy, Parenting & Family Therapy, and Trauma-Focused EMDR Care.',
};

const SERVICES = [
  {
    slug: 'individual-therapy',
    num: '01',
    title: 'Individual Therapy',
    eyebrow: 'One-on-One Support',
    intro: 'For when something feels stuck, overwhelming, or difficult to understand on your own.',
    description:
      'Individual sessions create a collaborative, confidential space to unpack recurring life patterns, overcome anxiety and depression, heal from burnout, and strengthen your relationship with yourself.',
    focus: [
      'Self-worth and identity',
      'Emotional regulation and nervous system calm',
      'Life transitions and personal boundaries',
      'Healing internalized criticism',
    ],
  },
  {
    slug: 'couples-therapy',
    num: '02',
    title: 'Couples Therapy',
    eyebrow: 'Relational Healing',
    intro: 'For when you care about each other, but keep getting caught in the same patterns.',
    description:
      'Using evidence-based approaches including the Gottman Method and attachment theory, we help partners identify repetitive conflict cycles, communicate unmet needs safely, and restore emotional intimacy.',
    focus: [
      'De-escalating circular arguments',
      'Rebuilding trust and emotional safety',
      'Attachment patterns and vulnerability',
      'Navigating major relationship transitions',
    ],
  },
  {
    slug: 'parenting-family-therapy',
    num: '03',
    title: 'Parenting & Family Therapy',
    eyebrow: 'Generational Growth',
    intro: 'For families navigating conflict, changing roles, and the challenges of raising children.',
    description:
      'Family systems work focuses on the emotional dynamics connecting parents and children. We help parents lead with calm authority while establishing warm, secure bonds that stop generational trauma.',
    focus: [
      'Parent-child connection & communication',
      'Developmental stages and emotional outbursts',
      'Healthy boundaries and cooperative authority',
      'Co-parenting and blended family dynamics',
    ],
  },
  {
    slug: 'trauma-focused-therapy',
    num: '04',
    title: 'Trauma-Focused Therapy',
    eyebrow: 'Somatic & EMDR',
    intro: 'For when past experiences still affect how you feel, respond, or connect with others today.',
    description:
      'Specialized, trauma-informed care integrating EMDR (Eye Movement Desensitization and Reprocessing) and Somatic techniques to resolve painful memories stored in the nervous system without requiring re-traumatization.',
    focus: [
      'Single-incident and complex developmental trauma',
      'Nervous system hyperarousal and freeze responses',
      'Somatic release of stored physical tension',
      'Cultivating deep, lasting internal safety',
    ],
  },
];

export default function WaysWeWorkPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="WAYS WE WORK"
        title={<>There&apos;s More Than One Way to Begin.</>}
        lead={
          <>
            Whether you&apos;re navigating something within yourself, struggling in a
            relationship, or trying to create a healthier family dynamic, therapy can offer a space
            to understand what&apos;s happening and work toward meaningful change.
          </>
        }
      />

      {/* Services List */}
      <section className="section-rhythm">
        <div className="container" style={{ maxWidth: '980px' }}>
          <PlaceholderNote>
            The service descriptions and focus lists below are drafts. The one-line introductions come
            from the approved brief; the rest will be replaced with Vanessa’s own wording.
          </PlaceholderNote>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {SERVICES.map((svc) => (
              <div
                key={svc.slug}
                className="editorial-card"
                style={{
                  padding: '3rem 2.5rem',
                  backgroundColor: '#FFFFFF',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-nunito-sans), sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--salmon-text)',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {svc.num} • {svc.eyebrow}
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', marginBottom: '1rem' }}>
                    {svc.title}
                  </h2>
                  <p style={{ fontStyle: 'italic', color: 'var(--ink)', fontSize: '16px', marginBottom: '1rem' }}>
                    &ldquo;{svc.intro}&rdquo;
                  </p>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
                    {svc.description}
                  </p>
                  <Link href={`/ways-we-work/${svc.slug}`} className="btn btn-primary" style={{ fontSize: '14px' }}>
                    Explore {svc.title}
                  </Link>
                </div>

                <div
                  style={{
                    backgroundColor: '#FAF6F1',
                    borderRadius: '8px',
                    padding: '2rem',
                    border: '1px solid var(--hairline)',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-playfair), serif',
                      fontSize: '17px',
                      marginBottom: '1rem',
                      color: 'var(--sage-deep)',
                    }}
                  >
                    Areas of Clinical Focus
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {svc.focus.map((item, idx) => (
                      <li key={idx} style={{ fontSize: '14px', color: 'var(--ink)', display: 'flex', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--sage)', fontWeight: 700 }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section
        style={{
          paddingTop: '4.5rem',
          paddingBottom: '5rem',
          backgroundColor: '#FAF5EE',
          borderTop: '1px solid var(--hairline)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="label-eyebrow">BEGIN YOUR JOURNEY</span>
          <h2 style={{ marginBottom: '1rem' }}>Ready to Take the Next Step?</h2>
          <p style={{ color: 'var(--ink-muted)', marginBottom: '2rem' }}>
            Reach out to schedule a consultation or ask questions about how these services can meet
            your needs.
          </p>
          <Link href="/consultation" className="btn btn-primary">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
