import type { Metadata } from 'next';
import { Playfair_Display, Nunito_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import TopStrip from '@/components/TopStrip';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { IS_STAGING } from '@/lib/site';

// Google Analytics 4 measurement ID
const GA_MEASUREMENT_ID = 'G-DTYE3P8B89';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-playfair',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thrive with Therapy | Vanessa M. Sierra, LMFT',
  description:
    'Licensed Marriage and Family Therapy in Coral Gables, South Florida. Collaborative individual, couples, parenting, and trauma-focused therapy to understand underlying patterns and find a way forward.',
  metadataBase: new URL('https://www.thrivewiththerapy.org'),
  // Keep the client-review deployment out of search results
  ...(IS_STAGING && { robots: { index: false, follow: false } }),
  keywords: [
    'Vanessa Sierra LMFT',
    'Coral Gables therapist',
    'couples therapy Miami',
    'individual therapy Coral Gables',
    'family therapy South Florida',
    'EMDR trauma therapy',
    'marriage counseling Coral Gables',
  ],
  authors: [{ name: 'Vanessa M. Sierra, LMFT' }],
  openGraph: {
    title: 'Thrive with Therapy | Vanessa M. Sierra, LMFT',
    description:
      'A safe, collaborative space to understand what is happening, make sense of the patterns beneath it, and find a way forward.',
    url: 'https://www.thrivewiththerapy.org',
    siteName: 'Thrive with Therapy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Thrive with Therapy',
    founder: {
      '@type': 'Person',
      name: 'Vanessa M. Sierra, LMFT',
      jobTitle: 'Licensed Marriage and Family Therapist',
    },
    telephone: '954-635-0234',
    email: 'vanessa@thrivementalhealthsolutions.com',
    url: 'https://www.thrivewiththerapy.org',
    sameAs: [
      'https://www.instagram.com/thrivewiththerapy/',
      'https://www.linkedin.com/in/vanessa-m-sierra-lmft-5a5070405',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coral Gables',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    medicalSpecialty: ['Psychiatric', 'CommunityHealth'],
    openingHours: 'Mo-Th 09:00-18:00, Fr 09:00-14:00',
  };

  return (
    <html lang="en" className={`${playfair.variable} ${nunitoSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <TopStrip />
        <Header />
        <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
