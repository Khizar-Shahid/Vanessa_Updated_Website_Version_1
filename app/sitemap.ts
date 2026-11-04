import { MetadataRoute } from 'next';
import { LOCATION_SLUGS } from '@/content/locations';
import { getAllLocationServiceParams } from '@/content/services';
import { client } from '@/sanity/lib/client';
import { postSlugsQuery } from '@/sanity/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.thrivewiththerapy.org';

  /* ── Core pages ── */
  const staticPaths = [
    '',
    '/meet-vanessa',
    '/locations',
    ...LOCATION_SLUGS.map((loc) => `/locations/${loc}`),
    '/blog',
    '/resources',
    '/podcasts',
    '/consultation',
    '/faqs',
    '/contact',
  ];

  /* ── Dynamic multi-location service pages ── */
  const servicePaths = getAllLocationServiceParams().map(
    ({ location, service }) => `/locations/${location}/${service}`
  );

  const routes = [...staticPaths, ...servicePaths].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/locations') ? 0.9 : 0.8,
  }));

  /* ── Dynamic blog posts from Sanity ── */
  try {
    const slugs = await client.fetch(postSlugsQuery);
    const blogRoutes = (slugs || []).map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
    return [...routes, ...blogRoutes];
  } catch {
    return routes;
  }
}
