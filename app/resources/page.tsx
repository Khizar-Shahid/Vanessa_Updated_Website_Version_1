import React from 'react';
import Link from 'next/link';
import resourcesData from '@/content/resources.json';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';

export const metadata = {
  title: 'Resource Library | Thrive Mental Health Solutions',
  description:
    'Free reflection tools, nervous system regulation workbooks, and guided courses on attachment and relational healing by Vanessa M. Sierra, LMFT.',
};

export default function ResourceLibraryPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="RESOURCE LIBRARY"
        title="Explore at Your Own Pace."
        lead="Start with a free resource, or go deeper with guided learning through our courses. Designed around topics that matter in real life."
      />

      {/* Free Resources Section */}
      <section id="free" className="section-rhythm" style={{ borderBottom: '1px solid var(--hairline)' }}>
        <div className="container">
          <PlaceholderNote>
            These resources and courses are examples to show the layout. Downloads are not connected yet;
            the real library will come from Vanessa.
          </PlaceholderNote>
          <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-nunito-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.18em',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--sage-deep)',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              FREE CLINICAL TOOLS
            </span>
            <h2 style={{ marginBottom: '0.75rem' }}>Guides &amp; Reflection Tools</h2>
            <p style={{ color: 'var(--ink-muted)', margin: 0 }}>
              Practical exercises, worksheets, and nervous system regulation tools to explore
              independently.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {resourcesData.freeResources.map((item) => (
              <div
                key={item.id}
                className="editorial-card"
                style={{
                  padding: '2.5rem 2rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'var(--sage-soft)',
                      color: 'var(--sage-deep)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-pill)',
                      marginBottom: '1rem',
                    }}
                  >
                    {item.badge}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair), serif',
                      fontSize: '21px',
                      lineHeight: 1.3,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'var(--ink-muted)', marginBottom: '1.25rem' }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {item.topics.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '11.5px',
                          color: 'var(--ink)',
                          backgroundColor: '#FAF5EE',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--hairline)' }}>
                  <span style={{ fontSize: '12.5px', color: 'var(--ink-muted)', display: 'block', marginBottom: '0.75rem' }}>
                    {item.format}
                  </span>
                  <a href={item.downloadUrl} className="btn btn-secondary" style={{ width: '100%', fontSize: '13.5px' }}>
                    Download Free Resource
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="section-rhythm" style={{ backgroundColor: '#FAF5EE' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-nunito-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.18em',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--salmon-text)',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              STRUCTURED LEARNING
            </span>
            <h2 style={{ marginBottom: '0.75rem' }}>Guided Courses</h2>
            <p style={{ color: 'var(--ink-muted)', margin: 0 }}>
              Go deeper with structured, self-paced learning designed around attachment,
              relationship patterns, and embodied healing.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {resourcesData.courses.map((course) => (
              <div
                key={course.id}
                className="editorial-card"
                style={{
                  padding: '2.5rem 2rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'var(--salmon-soft)',
                      color: 'var(--salmon-text)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-pill)',
                      marginBottom: '1rem',
                    }}
                  >
                    {course.status}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair), serif',
                      fontSize: '21px',
                      lineHeight: 1.3,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {course.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'var(--ink-muted)', marginBottom: '1.25rem' }}>
                    {course.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {course.topics.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '11.5px',
                          color: 'var(--ink)',
                          backgroundColor: '#FAF5EE',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--hairline)' }}>
                  <span style={{ fontSize: '12.5px', color: 'var(--ink-muted)', display: 'block', marginBottom: '0.75rem' }}>
                    {course.format}
                  </span>
                  <Link href="/contact" className="btn btn-primary" style={{ width: '100%', fontSize: '13.5px' }}>
                    Inquire About Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
