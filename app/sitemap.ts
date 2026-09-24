import { MetadataRoute } from 'next';
import insightsData from '@/content/insights.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thrivewiththerapy.org';

  const routes = [
    '',
    '/meet-vanessa',
    '/ways-we-work',
    '/ways-we-work/individual-therapy',
    '/ways-we-work/couples-therapy',
    '/ways-we-work/parenting-family-therapy',
    '/ways-we-work/trauma-focused-therapy',
    '/insights',
    '/resources',
    '/consultation',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const insightRoutes = insightsData.map((item) => ({
    url: `${baseUrl}/insights/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...insightRoutes];
}
