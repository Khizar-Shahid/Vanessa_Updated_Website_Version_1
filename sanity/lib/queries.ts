import { groq } from 'next-sanity'

// Query to get all posts for the main Insights listing page
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  author,
  mainImage
}`

// Query to get a single post by its slug for the individual article page
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  author,
  mainImage,
  body
}`

// Query to get just the slugs (useful for the sitemap and Next.js static generation)
export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)] {
  "slug": slug.current
}`
