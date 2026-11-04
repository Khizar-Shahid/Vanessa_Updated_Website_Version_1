
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
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/clinic.html',
        destination: '/locations',
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

      // Service pages → Location-first URL structure (301 redirects)
      {
        source: '/services',
        destination: '/locations',
        statusCode: 301,
      },
      {
        source: '/services/therapist-miami-fl',
        destination: '/locations/miami',
        statusCode: 301,
      },

      // Coral Gables service redirects
      {
        source: '/services/individual-therapy-coral-gables',
        destination: '/locations/coral-gables/individual-therapy',
        statusCode: 301,
      },
      {
        source: '/services/couples-therapy-coral-gables',
        destination: '/locations/coral-gables/couples-therapy',
        statusCode: 301,
      },
      {
        source: '/services/parenting-family-therapy-coral-gables',
        destination: '/locations/coral-gables/parenting-family-therapy',
        statusCode: 301,
      },
      {
        source: '/services/trauma-therapy-coral-gables',
        destination: '/locations/coral-gables/trauma-therapy',
        statusCode: 301,
      },

      // Miami service redirects
      {
        source: '/services/individual-therapy-miami',
        destination: '/locations/miami/individual-therapy',
        statusCode: 301,
      },
      {
        source: '/services/couples-therapy-miami',
        destination: '/locations/miami/couples-therapy',
        statusCode: 301,
      },
      {
        source: '/services/parenting-family-therapy-miami',
        destination: '/locations/miami/parenting-family-therapy',
        statusCode: 301,
      },
      {
        source: '/services/trauma-therapy-miami',
        destination: '/locations/miami/trauma-therapy',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
