import { MetadataRoute } from 'next';
import { publishedInsights } from '@/lib/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thrivewiththerapy.org';

  const routes = [
    '',
    '/meet-vanessa',
    '/services',
    '/services/individual-therapy-coral-gables',
    '/services/couples-therapy-coral-gables',
    '/services/parenting-family-therapy-coral-gables',
    '/services/trauma-therapy-coral-gables',
    '/insights',
    '/resources',
    '/consultation',
    '/faqs',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const insightRoutes = publishedInsights.map((item) => ({
    url: `${baseUrl}/insights/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...insightRoutes];
}
