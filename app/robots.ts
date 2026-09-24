import { MetadataRoute } from 'next';
import { IS_STAGING } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  if (IS_STAGING) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.thrivewiththerapy.org/sitemap.xml',
  };
}
