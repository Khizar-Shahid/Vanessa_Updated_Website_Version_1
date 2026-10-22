import blogData from '@/content/blog.json';

/**
 * Blog posts shown on the site. Set "hidden": true on an entry in
 * content/blog.json to take it offline (its page, cards, and sitemap
 * entry all disappear); delete the flag to bring it back.
 */
export const publishedPosts = blogData.filter(
  (item) => !(item as { hidden?: boolean }).hidden,
);
