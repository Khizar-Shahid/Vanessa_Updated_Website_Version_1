import React from 'react';
import Link from 'next/link';
import { publishedPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';

interface BlogFeedProps {
  limit?: number;
  showHeading?: boolean;
}

export default function BlogFeed({ limit = 3, showHeading = true }: BlogFeedProps) {
  // blog.json is kept newest-first, so the homepage always shows the latest pieces
  const latestPosts = publishedPosts.slice(0, limit);

  return (
    <div>
      {showHeading && (
        <Reveal className="section-head section-head--split">
          <div>
            <span className="label-eyebrow">BLOG</span>
            <h2>A Little More to Think About.</h2>
          </div>
          <div>
            <p className="lead-paragraph">
              Thoughtful ideas about relationships, emotions, patterns, parenting, and everyday
              challenges.
            </p>
            <Link href="/blog" className="btn btn-secondary">
              Explore All Posts
            </Link>
          </div>
        </Reveal>
      )}

      <RevealGroup as="ul" className="card-grid card-grid--3">
        {latestPosts.map((item) => (
          <RevealItem as="li" key={item.id}>
            <BlogCard item={item} />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
