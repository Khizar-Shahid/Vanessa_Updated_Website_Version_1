import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import insightsData from '@/content/insights.json';
import PlaceholderNote from '@/components/PlaceholderNote';

export async function generateStaticParams() {
  return insightsData.map((item) => ({
    slug: item.slug,
  }));
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const item = insightsData.find((p) => p.slug === params.slug);
  if (!item) notFound();

  return (
    <article style={{ width: '100%', paddingBottom: '5rem' }}>
      {/* Header */}
      <section
        style={{
          paddingTop: 'clamp(4rem, 7vw, 6rem)',
          paddingBottom: 'clamp(2.5rem, 4vw, 4rem)',
          borderBottom: '1px solid var(--hairline)',
          backgroundColor: '#FAF6F1',
        }}
      >
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <Link href="/insights" className="text-link" style={{ fontSize: '13.5px' }}>
              &larr; Back to Insights
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: item.type === 'video' ? 'var(--salmon-text)' : 'var(--sage-deep)',
              }}
            >
              {item.category}
            </span>
            <span style={{ fontSize: '12.5px', color: 'var(--ink-muted)' }}>•</span>
            <span style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>{item.date}</span>
            <span style={{ fontSize: '12.5px', color: 'var(--ink-muted)' }}>•</span>
            <span style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>{item.readTime}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            {item.title}
          </h1>

          <p className="lead-paragraph" style={{ fontSize: '18px', color: 'var(--ink-muted)' }}>
            {item.summary}
          </p>
        </div>
      </section>

      {/* Main Body */}
      <section style={{ paddingTop: '3.5rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <PlaceholderNote>
            The written text on this page is a draft and will be replaced with Vanessa’s own writing.
          </PlaceholderNote>
          {/* Video Player if applicable */}
          {item.type === 'video' && item.videoUrl && (
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                marginBottom: '3rem',
                backgroundColor: '#000000',
                boxShadow: 'var(--shadow-editorial)',
              }}
            >
              <video
                controls
                preload="metadata"
                poster={item.posterUrl || undefined}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              >
                <source src={item.videoUrl} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          )}

          {/* Render article HTML content */}
          <div
            className="article-content"
            style={{ fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)' }}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />

          {/* Author Bio Card */}
          <div
            style={{
              marginTop: '4.5rem',
              padding: '2rem',
              backgroundColor: '#FAF5EE',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--hairline)',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="label-eyebrow" style={{ marginBottom: '0.25rem' }}>ABOUT THE AUTHOR</span>
              <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '0.5rem' }}>
                Vanessa M. Sierra, LMFT
              </h4>
              <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--ink-muted)', margin: 0 }}>
                Licensed Marriage and Family Therapist based in Coral Gables, Florida, with over 20
                years of experience guiding individuals, couples, and families through healing and
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
