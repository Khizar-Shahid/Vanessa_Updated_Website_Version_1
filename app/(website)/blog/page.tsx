import React from 'react';
import PageHero from '@/components/PageHero';
import BlogBrowser from '@/components/blog/BlogBrowser';
import { getAllBlogPosts } from '@/sanity/lib/blogService';

export const metadata = {
  alternates: {
    canonical: '/blog',
  },
  title: 'Blog | Thrive with Therapy',
  description:
    'Videos and reflections from Vanessa M. Sierra, LMFT on relationships, emotions, patterns, parenting, and everyday challenges.',
};

export default async function BlogIndexPage() {
  const formattedPosts = await getAllBlogPosts();

  return (
    <div className="page">
      <PageHero
        eyebrow="BLOG"
        title="A Little More to Think About."
        lead="Thoughtful ideas about relationships, emotions, patterns, parenting, and everyday challenges."
      />

      <section className="pt-12 pb-16 md:pb-24">
        <div className="container">
          <BlogBrowser initialItems={formattedPosts} />
        </div>
      </section>
    </div>
  );
}
