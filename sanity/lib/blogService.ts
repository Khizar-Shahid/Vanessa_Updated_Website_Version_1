import { client } from './client';
import { postsQuery, postBySlugQuery, postSlugsQuery } from './queries';
import { urlForImage } from './image';
import { BlogItem } from '@/components/blog/types';

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  author?: string;
  authorBio?: string;
  mainImage?: any;
  body?: any;
}

/**
 * Fetch all posts formatted for UI consumption
 */
export async function getAllBlogPosts(): Promise<BlogItem[]> {
  const posts: SanityPost[] = await client.fetch(postsQuery);
  return posts.map((post) => ({
    id: post._id,
    slug: post.slug,
    type: 'article',
    title: post.title,
    category: 'Article',
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    readTime: '3 min read',
    summary: post.excerpt || '',
    posterUrl: post.mainImage ? urlForImage(post.mainImage).url() : null,
  }));
}

/**
 * Fetch a single blog post by its slug
 */
export async function getBlogPostBySlug(slug: string): Promise<SanityPost | null> {
  return client.fetch(postBySlugQuery, { slug });
}

/**
 * Fetch all published post slugs for static generation
 */
export async function getAllBlogPostSlugs(): Promise<{ slug: string }[]> {
  const slugs: { slug: string }[] = await client.fetch(postSlugsQuery);
  return slugs.map((item) => ({ slug: item.slug }));
}
