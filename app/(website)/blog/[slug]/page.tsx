import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/sanity/lib/blogService';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlForImage(value).width(800).url()}
          className="w-full rounded-lg my-8"
        />
      );
    },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | Thrive with Therapy`,
    description: post.excerpt || 'Read the latest blog post from Vanessa M. Sierra, LMFT.',
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllBlogPostSlugs();
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) notFound();

  // Format the date
  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="w-full pb-20">
      {/* Header */}
      <section className="pt-16 md:pt-24 pb-10 md:pb-16 border-b border-border bg-[#FAF6F1]">
        <div className="w-full max-w-[780px] mx-auto px-6">
          <div className="mb-5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-semibold text-foreground text-[13.5px] hover:text-accent underline underline-offset-4 decoration-accent-light/60 hover:decoration-accent transition-colors duration-200"
            >
              &larr; Back to Blog
            </Link>
          </div>
          <span className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-accent block mb-3">
            Article
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-foreground font-normal leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-muted text-[13.5px]">
            <span>By {post.author || 'Vanessa M. Sierra, LMFT'}</span>
            <span>&bull;</span>
            <time dateTime={post.publishedAt}>{date}</time>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pt-12">
        <div className="w-full max-w-[780px] mx-auto px-6">
          {post.mainImage && (
            <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden border border-border">
              <img
                src={urlForImage(post.mainImage).width(1200).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-foreground leading-relaxed font-sans text-[16.5px]">
            {post.body ? (
              <PortableText value={post.body} components={components} />
            ) : (
              <p className="italic text-muted">{post.excerpt}</p>
            )}
          </div>

          {/* Author Box */}
          <div className="mt-16 p-8 bg-[#FAF6F1] border border-border rounded-2xl flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-surface shrink-0 border border-border">
              <img
                src="/images/vanessa.jpg"
                alt="Vanessa M. Sierra, LMFT"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-serif text-xl text-foreground mb-1">
                Written by {post.author || 'Vanessa M. Sierra, LMFT'}
              </h4>
              <p className="text-muted text-[14px] leading-relaxed m-0">
                {post.authorBio ||
                  'Vanessa is a Licensed Marriage and Family Therapist based in Coral Gables, FL, helping individuals, couples, and families thrive.'}
              </p>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-transparent text-foreground border-[1.5px] border-foreground hover:bg-foreground hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              &larr; Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
