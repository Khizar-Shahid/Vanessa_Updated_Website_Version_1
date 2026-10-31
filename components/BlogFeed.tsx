import React from 'react';
import Link from 'next/link';
import { publishedPosts } from '@/lib/blog';
import BlogCard from './blog/BlogCard';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';

interface BlogFeedProps {
  limit?: number;
  showHeading?: boolean;
}

export default function BlogFeed({ limit = 3, showHeading = true }: BlogFeedProps) {
  const latestPosts = publishedPosts.slice(0, limit);

  return (
    <div>
      {showHeading && (
        <Reveal className="section-head section-head--split flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="label-eyebrow block mb-2">BLOG</span>
            <h2>A Little More to Think About.</h2>
          </div>
          <div className="max-w-[480px]">
            <p className="lead-paragraph text-ink-muted mb-4 text-[15px] leading-relaxed">
              Thoughtful ideas about relationships, emotions, patterns, parenting, and everyday
              challenges.
            </p>
            <Link href="/blog" className="btn btn-secondary">
              Explore All Posts
            </Link>
          </div>
        </Reveal>
      )}

      <RevealGroup as="ul" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
        {latestPosts.map((item) => (
          <RevealItem as="li" key={item.id}>
            <BlogCard item={item} />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
