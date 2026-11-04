
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  outputFileTracingIncludes: {
    '/api/resources/request': ['./public/docs/**/*'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },

  async redirects() {
    return [
      // Existing redirects
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/clinic.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/booking.html',
        destination: '/consultation',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blog.html',
        destination: '/blog',
        permanent: true,
      },

      // Old location overview URLs → new SEO URLs
      {
        source: '/locations',
        destination: '/services',
        statusCode: 301,
      },
      {
        source: '/locations/coral-gables',
        destination: '/services',
        statusCode: 301,
      },
      {
        source: '/locations/miami',
        destination: '/therapist-miami-fl',
        statusCode: 301,
      },

      // Old location-first service URLs → new service URLs
      {
        source: '/locations/:location/:service',
        destination: '/services/:service-:location',
        statusCode: 301,
      },

      // Previous Miami landing URL → new Miami landing page
      {
        source: '/services/therapist-miami-fl',
        destination: '/therapist-miami-fl',
        statusCode: 301,
      },

      // Legacy Ways We Work URLs → new SEO URLs
      {
        source: '/ways-we-work',
        destination: '/services',
        statusCode: 301,
      },
      {
        source: '/ways-we-work/individual-therapy',
        destination: '/services/individual-therapy-coral-gables',
        statusCode: 301,
      },
      {
        source: '/ways-we-work/couples-therapy',
        destination: '/services/couples-therapy-coral-gables',
        statusCode: 301,
      },
      {
        source: '/ways-we-work/trauma-focused-therapy',
        destination: '/services/trauma-therapy-coral-gables',
        statusCode: 301,
      },
      {
        source: '/ways-we-work/:path*',
        destination: '/services',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
