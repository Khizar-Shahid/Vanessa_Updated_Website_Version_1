import React from 'react';
import resourcesData from '@/content/resources.json';
import PageHero from '@/components/PageHero';
import ResourceRequestButton from '@/components/ResourceRequestButton';

export const metadata = {
  title: 'Resource Library | Thrive with Therapy',
  description:
    'Free printable reflection tools from Vanessa M. Sierra, LMFT — for pausing before you react, working through a problem one step at a time, and reflecting after a fight.',
};

export default function ResourceLibraryPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="RESOURCE LIBRARY"
        title="Explore at Your Own Pace."
        lead="Free, printable tools you can use on your own — designed around moments that matter in real life."
      />

      {/* Free Resources Section */}
      <section id="free" className="section-rhythm">
        <div className="container">
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
                  <ResourceRequestButton resourceId={item.id} resourceTitle={item.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
