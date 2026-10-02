import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // Private and restricted areas
          '/admin/',
          '/dashboard/',
          '/login/',
          '/private/',

          // API and backend endpoints
          '/api/',

          // Development and temporary areas
          '/test/',
          '/staging/',
          '/dev/',
          '/tmp/',

          // Sensitive files
          '/.env',
          '/.git/',
          '/package.json',
          '/package-lock.json',
        ],
      },
    ],
    sitemap: 'https://www.thrivewiththerapy.org/sitemap.xml',
  };
}
