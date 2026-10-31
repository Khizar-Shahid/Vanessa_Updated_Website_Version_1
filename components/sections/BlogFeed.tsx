import React from 'react';
import Link from 'next/link';
import { getAllBlogPosts } from '@/sanity/lib/blogService';
import BlogCard from '@/components/blog/BlogCard';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';

interface BlogFeedProps {
  limit?: number;
  showHeading?: boolean;
}

export default async function BlogFeed({ limit = 3, showHeading = true }: BlogFeedProps) {
  let latestPosts: Awaited<ReturnType<typeof getAllBlogPosts>> = [];

  try {
    const allPosts = await getAllBlogPosts();
    latestPosts = allPosts.slice(0, limit);
  } catch (error) {
    console.error('Failed to load blog posts from Sanity for BlogFeed:', error);
  }

  return (
    <div>
      {showHeading && (
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Eyebrow className="block mb-2">BLOG</Eyebrow>
            <h2 className="font-serif text-4xl font-normal text-foreground text-balance [&>em]:italic [&>em]:text-primary">A Little More to Think About.</h2>
          </div>
          <div className="max-w-[480px]">
            <p className="text-muted mb-4 text-[15px] leading-relaxed max-w-[62ch]">
              Thoughtful ideas about relationships, emotions, patterns, parenting, and everyday
              challenges.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-transparent text-foreground border-[1.5px] border-foreground hover:bg-foreground hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore All Posts
            </Link>
          </div>
        </Reveal>
      )}

      {latestPosts.length > 0 ? (
        <RevealGroup as="ul" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
          {latestPosts.map((item) => (
            <RevealItem as="li" key={item.id}>
              <BlogCard item={item} />
            </RevealItem>
          ))}
        </RevealGroup>
      ) : (
        <div className="p-10 text-center rounded-2xl bg-surface border border-border">
          <p className="font-serif italic text-lg text-muted m-0">
            Articles currently updating. Check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
