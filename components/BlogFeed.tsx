import React from 'react';
import Link from 'next/link';
import { publishedPosts } from '@/lib/blog';
import BlogCard from './blog/BlogCard';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import Eyebrow from '@/components/Eyebrow';

interface BlogFeedProps {
  limit?: number;
  showHeading?: boolean;
}

export default function BlogFeed({ limit = 3, showHeading = true }: BlogFeedProps) {
  const latestPosts = publishedPosts.slice(0, limit);

  return (
    <div>
      {showHeading && (
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Eyebrow className="block mb-2">BLOG</Eyebrow>
            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] font-normal leading-[1.2] text-ink text-balance tracking-[-0.01em] [&>em]:italic [&>em]:text-sage-deep">A Little More to Think About.</h2>
          </div>
          <div className="max-w-[480px]">
            <p className="text-ink-muted mb-4 text-[15px] leading-relaxed max-w-[62ch]">
              Thoughtful ideas about relationships, emotions, patterns, parenting, and everyday
              challenges.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-transparent text-graphite border-[1.5px] border-graphite hover:bg-graphite hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
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
