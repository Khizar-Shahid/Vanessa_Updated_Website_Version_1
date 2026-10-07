import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { postBySlugQuery, postSlugsQuery } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';

export const revalidate = 3600; // revalidate every hour (or instantly with webhooks)

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug });
  if (!post) return {};
  
  return {
    title: `${post.title} | Thrive with Therapy`,
    description: post.excerpt || 'Read the latest insights from Vanessa M. Sierra, LMFT.',
  };
}

export async function generateStaticParams() {
  const slugs = await client.fetch(postSlugsQuery);
  return slugs.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function InsightDetailPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug });
  
  if (!post) notFound();

  // Format the date
  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

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
                color: 'var(--sage-deep)',
              }}
            >
              ARTICLE
            </span>
            <span style={{ fontSize: '12.5px', color: 'var(--ink-muted)' }}>•</span>
            <span style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>{date}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            {post.title}
          </h1>

          <p className="lead-paragraph" style={{ fontSize: '18px', color: 'var(--ink-muted)' }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Main Body */}
      <section style={{ paddingTop: '3.5rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          
          {/* Render article HTML content via PortableText */}
          <div
            className="article-content"
            style={{ fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)' }}
          >
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <p>No content available.</p>
            )}
          </div>

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
                {post.author || 'Vanessa M. Sierra, LMFT'}
              </h4>
              <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--ink-muted)', margin: 0 }}>
                {post.authorBio || 'Licensed Marriage and Family Therapist based in Coral Gables, Florida, with over 20 years of experience guiding individuals, couples, and families through healing and growth.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
