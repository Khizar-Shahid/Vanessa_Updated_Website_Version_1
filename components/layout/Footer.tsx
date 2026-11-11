import React from 'react';
import Link from 'next/link';
import { LogoLockup } from '@/components/layout/Header';
import OrganicLine from '@/components/ui/OrganicLine';
import { GOOGLE_MAPS_PROFILE } from '@/components/layout/MapSection';

const EXPLORE_LINKS = [
  { label: 'Meet Vanessa', href: '/meet-vanessa' },
  { label: 'Locations', href: '/locations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resource Library', href: '/resources' },
  { label: 'Podcasts', href: '/podcasts' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'FAQ', href: '/faqs' },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    ariaLabel: 'Vanessa M. Sierra on LinkedIn',
    href: 'https://www.linkedin.com/in/vanessa-m-sierra-lmft-5a5070405',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: 'Instagram',
    ariaLabel: 'Thrive with Therapy on Instagram',
    href: 'https://www.instagram.com/thrivewiththerapy/',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: 'TikTok',
    ariaLabel: 'Thrive with Therapy on TikTok',
    href: 'https://www.tiktok.com/@thrivewiththerapy',
    customSvg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    label: 'Google',
    ariaLabel: 'Thrive with Therapy on Google Maps',
    href: GOOGLE_MAPS_PROFILE,
    customSvg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#F3EFE9] border-t border-border pt-24 pb-9 mt-auto">
      <div className="absolute top-3 left-0 right-0 h-14 overflow-hidden opacity-60 pointer-events-none" aria-hidden="true">
        <OrganicLine variant="thread" />
      </div>

      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.25fr] gap-12 pb-12 border-b border-border">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Thrive with Therapy — Home" className="inline-block rounded-lg no-underline text-foreground">
              <LogoLockup size={52} />
            </Link>
            <p className="mt-5 text-[14.5px] leading-[1.7] text-muted max-w-[40ch]">
              Vanessa M. Sierra, LMFT provides thoughtful individual, couples, and family therapy. A
              calm and collaborative space to understand the patterns beneath your experiences and
              find a healthier way forward.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[11.5px] font-bold tracking-[0.18em] uppercase text-accent mb-5">
              Explore
            </h2>
            <ul className="list-none flex flex-col gap-2.5 text-[14.5px]">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-semibold text-foreground hover:text-accent underline underline-offset-4 decoration-accent-light/60 hover:decoration-accent transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[11.5px] font-bold tracking-[0.18em] uppercase text-accent mb-5">
              Get in Touch
            </h2>
            <ul className="list-none flex flex-col gap-2.5 text-[14.5px]">
              <li className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
                  Phone
                </span>
                <a href="tel:954-635-0234" className="font-semibold text-foreground hover:text-accent underline underline-offset-4 decoration-accent-light/60 hover:decoration-accent transition-colors duration-200">
                  954-635-0234
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
                  Email
                </span>
                <a href="mailto:vanessa@thrivementalhealthsolutions.com" className="font-semibold text-foreground break-all hover:text-accent underline underline-offset-4 decoration-accent-light/60 hover:decoration-accent transition-colors duration-200">
                  vanessa@thrivementalhealthsolutions.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
                  Location
                </span>
                <span className="text-foreground">Coral Gables, FL (South Florida)</span>
              </li>
            </ul>

            <ul className="list-none flex gap-2.5 mt-7">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.ariaLabel} (opens in a new tab)`}
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-foreground border border-border hover:-translate-y-1 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                  >
                    {'customSvg' in s && s.customSvg ? (
                      s.customSvg
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                        {'icon' in s && s.icon}
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-7 text-[13px]">
          <p className="text-muted max-w-none">
            © {currentYear} Thrive with Therapy. Vanessa M. Sierra, LMFT. All rights reserved.
          </p>
          <ul className="list-none flex gap-6">
            <li>
              <Link href="/contact" className="font-semibold text-foreground hover:text-accent underline underline-offset-4 decoration-accent-light/60 hover:decoration-accent transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-semibold text-foreground hover:text-accent underline underline-offset-4 decoration-accent-light/60 hover:decoration-accent transition-colors duration-200">
                Accessibility Statement
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
