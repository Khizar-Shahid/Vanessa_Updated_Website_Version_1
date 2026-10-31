import React from 'react';
import Link from 'next/link';
import { LogoLockup } from '@/components/Header';
import OrganicLine from '@/components/OrganicLine';

const EXPLORE_LINKS = [
  { label: 'Meet Vanessa', href: '/meet-vanessa' },
  { label: 'Services', href: '/services' },
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
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#F3EFE9] border-t border-hairline pt-24 pb-9 mt-auto">
      <div className="absolute top-3 left-0 right-0 h-14 overflow-hidden opacity-60 pointer-events-none" aria-hidden="true">
        <OrganicLine variant="thread" />
      </div>

      <div className="container">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.25fr] gap-12 pb-12 border-b border-hairline">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Thrive with Therapy — Home" className="inline-block rounded-lg no-underline text-ink">
              <LogoLockup size={52} />
            </Link>
            <p className="mt-5 text-[14.5px] leading-[1.7] text-ink-muted max-w-[40ch]">
              Vanessa M. Sierra, LMFT provides thoughtful individual, couples, and family therapy. A
              calm and collaborative space to understand the patterns beneath your experiences and
              find a healthier way forward.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[11.5px] font-bold tracking-[0.18em] uppercase text-salmon-text mb-5">
              Explore
            </h2>
            <ul className="list-none flex flex-col gap-2.5 text-[14.5px]">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-semibold text-ink hover:text-salmon-text underline underline-offset-4 decoration-salmon/60 hover:decoration-salmon-text transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[11.5px] font-bold tracking-[0.18em] uppercase text-salmon-text mb-5">
              Get in Touch
            </h2>
            <ul className="list-none flex flex-col gap-2.5 text-[14.5px]">
              <li className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-muted">
                  Phone
                </span>
                <a href="tel:954-635-0234" className="font-semibold text-ink hover:text-salmon-text underline underline-offset-4 decoration-salmon/60 hover:decoration-salmon-text transition-colors duration-200">
                  954-635-0234
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-muted">
                  Email
                </span>
                <a href="mailto:vanessa@thrivementalhealthsolutions.com" className="font-semibold text-ink break-all hover:text-salmon-text underline underline-offset-4 decoration-salmon/60 hover:decoration-salmon-text transition-colors duration-200">
                  vanessa@thrivementalhealthsolutions.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-muted">
                  Location
                </span>
                <span className="text-ink">Coral Gables, FL (South Florida)</span>
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
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-ink border border-hairline hover:-translate-y-1 hover:text-white hover:bg-sage-deep hover:border-sage-deep transition-all duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-7 text-[13px]">
          <p className="text-ink-muted max-w-none">
            © {currentYear} Thrive with Therapy. Vanessa M. Sierra, LMFT. All rights reserved.
          </p>
          <ul className="list-none flex gap-6">
            <li>
              <Link href="/contact" className="font-semibold text-ink hover:text-salmon-text underline underline-offset-4 decoration-salmon/60 hover:decoration-salmon-text transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-semibold text-ink hover:text-salmon-text underline underline-offset-4 decoration-salmon/60 hover:decoration-salmon-text transition-colors duration-200">
                Accessibility Statement
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
