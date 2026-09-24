import React from 'react';
import Link from 'next/link';
import { LogoLockup } from '@/components/Header';
import OrganicLine from '@/components/OrganicLine';

const EXPLORE_LINKS = [
  { label: 'Meet Vanessa', href: '/meet-vanessa' },
  { label: 'Ways We Work', href: '/ways-we-work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Resource Library', href: '/resources' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'FAQ', href: '/faq' },
];

// TODO(client): replace with the practice's real profile URLs before launch.
const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
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
    href: 'https://instagram.com',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__line" aria-hidden="true">
        <OrganicLine variant="thread" />
      </div>

      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link href="/" aria-label="Thrive with Therapy — Home" className="site-footer__logo">
              <LogoLockup size={52} />
            </Link>
            <p>
              Vanessa M. Sierra, LMFT provides thoughtful individual, couples, and family therapy. A
              calm and collaborative space to understand the patterns beneath your experiences and
              find a healthier way forward.
            </p>
          </div>

          <div>
            <h2 className="site-footer__heading">Explore</h2>
            <ul className="site-footer__list">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="site-footer__heading">Get in Touch</h2>
            <ul className="site-footer__list site-footer__contact">
              <li>
                <span className="site-footer__k">Phone</span>
                <a href="tel:954-635-0234" className="text-link">
                  954-635-0234
                </a>
              </li>
              <li>
                <span className="site-footer__k">Email</span>
                <a href="mailto:vanessa@thrivementalhealthsolutions.com" className="text-link site-footer__email">
                  vanessa@thrivementalhealthsolutions.com
                </a>
              </li>
              <li>
                <span className="site-footer__k">Location</span>
                <span>Coral Gables, FL (South Florida)</span>
              </li>
            </ul>

            <ul className="site-footer__social">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Thrive with Therapy on ${s.label} (opens in a new tab)`}
                    className="social-icon"
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

        <div className="site-footer__legal">
          <p>© {currentYear} Thrive with Therapy. Vanessa M. Sierra, LMFT. All rights reserved.</p>
          <ul>
            {/* TODO(client): these pages don't exist yet */}
            <li>
              <Link href="/contact" className="text-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-link">
                Accessibility Statement
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
