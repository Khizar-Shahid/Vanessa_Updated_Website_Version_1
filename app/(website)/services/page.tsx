import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { SERVICE_LIST } from '@/content/services';

export const metadata = {
  title: 'Therapy Services in Coral Gables, FL',
  description:
    'Explore therapy services in Coral Gables, FL, including individual therapy, trauma therapy, couples therapy, and parenting support.',
  keywords: ['Therapy Services in Coral Gables'],
};

export default function WaysWeWorkPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="THERAPY SERVICES"
        title={<>Therapy Services in Coral Gables, FL</>}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {SERVICE_LIST.map((svc) => (
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
                  <Link href={`/services/${svc.slug}`} className="btn btn-primary" style={{ fontSize: '14px' }}>
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
