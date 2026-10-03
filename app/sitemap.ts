import { MetadataRoute } from 'next';
import { publishedInsights } from '@/lib/insights';
import { SERVICE_SLUGS } from '@/content/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thrivewiththerapy.org';

  /* ── Static pages ── */
  const staticPaths = [
    '',
    '/meet-vanessa',
    '/services',
    '/insights',
    '/resources',
    '/consultation',
    '/faqs',
    '/contact',
  ];

  /* ── Dynamic service pages (auto-generated from content/services.ts) ── */
  const servicePaths = SERVICE_SLUGS.map((slug) => `/services/${slug}`);

  const routes = [...staticPaths, ...servicePaths].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  /* ── Dynamic insight articles ── */
  const insightRoutes = publishedInsights.map((item) => ({
    url: `${baseUrl}/insights/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...insightRoutes];
}
