import { IS_STAGING } from '@/lib/site';

// Served at /robots.txt. Written out in full (rather than via robots.ts)
// so the rules keep their comments and order exactly as specified.

const PRODUCTION_ROBOTS = `User-agent: *

Allow: /

# Private and restricted areas
Disallow: /admin/
Disallow: /dashboard/
Disallow: /login/
Disallow: /logout/
Disallow: /signup/
Disallow: /register/
Disallow: /account/
Disallow: /profile/
Disallow: /private/

# API and backend endpoints
Disallow: /api/
Disallow: /backend/
Disallow: /server/
Disallow: /graphql

# Development and temporary areas
Disallow: /test/
Disallow: /tests/
Disallow: /testing/
Disallow: /staging/
Disallow: /dev/
Disallow: /development/
Disallow: /debug/
Disallow: /tmp/
Disallow: /temp/
Disallow: /backup/
Disallow: /backups/

# Sensitive files
Disallow: /.env
Disallow: /.git/
Disallow: /package.json
Disallow: /package-lock.json
Disallow: /yarn.lock
Disallow: /pnpm-lock.yaml

# Duplicate search and filter URLs
Disallow: /*?search=
Disallow: /*?query=
Disallow: /*?q=
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /*?orderby=
Disallow: /*?order=

# Allow important public resources
Allow: /assets/
Allow: /images/
Allow: /img/
Allow: /css/
Allow: /js/
Allow: /fonts/
Allow: /favicon.ico

# Sitemap
Allow: /robots.txt
Allow: /sitemap.xml

Sitemap: https://www.thrivewiththerapy.org/sitemap.xml
`;

// Review deployments (NEXT_PUBLIC_SITE_ENV=staging) block all crawling
const STAGING_ROBOTS = `User-agent: *
Disallow: /
`;

export function GET() {
  return new Response(IS_STAGING ? STAGING_ROBOTS : PRODUCTION_ROBOTS, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
