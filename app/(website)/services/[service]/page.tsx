import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { SERVICE_MAP, SERVICE_SLUGS } from '@/content/services';

export async function generateMetadata({ params }: { params: { service: string } }) {
  const data = SERVICE_MAP[params.service];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: [data.seoKeyword],
    alternates: {
      canonical: `/services/${params.service}`,
    },
  };
}

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ service: slug }));
}

export default function ServiceDetailPage({ params }: { params: { service: string } }) {
  const data = SERVICE_MAP[params.service];
  if (!data) notFound();

  return (
    <div className="page">
      <PageHero
        eyebrow={data.subtitle}
        title={data.seoH1}
        lead={<em>&ldquo;{data.forWhen}&rdquo;</em>}
      />

      {/* Main Service Content */}
      <section className="section-rhythm">
        <div className="container" style={{ maxWidth: '920px' }}>
          {/* Who It's For & What Sessions Look Like Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginBottom: '4rem',
            }}
          >
            {/* Who It's For */}
            <div
              className="editorial-card"
              style={{ padding: '2.5rem', backgroundColor: '#FFFFFF' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: '22px',
                  marginBottom: '1.25rem',
                  color: 'var(--sage-deep)',
                }}
              >
                Who This Is For
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.whoItsFor.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink)', display: 'flex', gap: '0.65rem' }}>
                    <span style={{ color: 'var(--sage)', fontWeight: 700 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Sessions Look Like */}
            <div
              className="editorial-card"
              style={{ padding: '2.5rem', backgroundColor: '#FFFFFF' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: '22px',
                  marginBottom: '1.25rem',
                  color: 'var(--salmon-text)',
                }}
              >
                What Sessions Look Like
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.whatSessionsLookLike.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink)', display: 'flex', gap: '0.65rem' }}>
                    <span style={{ color: 'var(--salmon-text)', fontWeight: 700 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Focus Areas List */}
          <div
            style={{
              backgroundColor: '#FAF5EE',
              borderRadius: 'var(--radius-card)',
              padding: '2.5rem',
              border: '1px solid var(--hairline)',
              marginBottom: '4rem',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '22px', marginBottom: '1.25rem' }}>
              Key Clinical Focus Areas
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {data.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '1rem 1.25rem',
                    borderRadius: '8px',
                    border: '1px solid var(--hairline)',
                    fontSize: '14.5px',
                    fontWeight: 500,
                  }}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Service FAQ */}
          <div style={{ marginBottom: '4rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: '24px',
                textAlign: 'center',
                marginBottom: '2rem',
              }}
            >
              Common Questions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {data.faq.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--hairline)',
                    borderRadius: 'var(--radius-card)',
                    padding: '1.75rem',
                  }}
                >
                  <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '18px', marginBottom: '0.5rem' }}>
                    {item.q}
                  </h4>
                  <p style={{ color: 'var(--ink-muted)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--hairline)',
              boxShadow: 'var(--shadow-editorial)',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '24px', marginBottom: '0.75rem' }}>
              Take the Next Step in Care
            </h3>
            <p style={{ color: 'var(--ink-muted)', marginBottom: '1.75rem' }}>
              Schedule a consultation with Vanessa to discuss how {data.title.toLowerCase()} can support your goals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/consultation" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Back to All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
