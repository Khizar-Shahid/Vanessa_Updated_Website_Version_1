import React from 'react';
import PageHero from '@/components/PageHero';
import InsightsBrowser from '@/components/InsightsBrowser';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';

export const metadata = {
  alternates: {
    canonical: "/insights",
  },
  title: 'Insights | Thrive with Therapy',
  description:
    'Videos and reflections from Vanessa M. Sierra, LMFT on relationships, emotions, patterns, parenting, and everyday challenges.',
};



export default async function InsightsIndexPage() {
  const posts = await client.fetch(postsQuery);

  // Map Sanity posts to the existing InsightItem format
  const formattedPosts = posts.map((post: any) => ({
    id: post._id,
    slug: post.slug,
    type: 'article', // We can expand this later if you add video fields
    title: post.title,
    category: 'Article',
    date: new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '3 min read', // You can compute this dynamically later based on block text length
    summary: post.excerpt || '',
    posterUrl: post.mainImage ? urlForImage(post.mainImage).url() : null,
  }));

  return (
    <div className="page">
      <PageHero
        eyebrow="INSIGHTS"
        title="A Little More to Think About."
        lead="Thoughtful ideas about relationships, emotions, patterns, parenting, and everyday challenges."
      />

      <section className="section-rhythm" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <InsightsBrowser initialItems={formattedPosts} />
        </div>
      </section>
    </div>
  );
}
