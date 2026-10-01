/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // The resource PDFs are read at runtime (not public), so ship them with the email route
    outputFileTracingIncludes: {
      '/api/resources/request': ['./private/resources/**/*'],
    },
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
        destination: '/ways-we-work',
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
        destination: '/insights',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
