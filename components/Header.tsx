'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Meet Vanessa', href: '/meet-vanessa' },
  { label: 'Ways We Work', href: '/ways-we-work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Resource Library', href: '/resources' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const EASE = [0.2, 0.8, 0.3, 1] as const;

function isActivePath(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

/* §4.2 active state: hand-drawn salmon squiggle that draws itself in. */
function Squiggle() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 54 8" fill="none" className="nav-squiggle">
      <motion.path
        data-draw=""
        d="M2 5.5C11 1.5 19 6.5 28 4C36 1.8 45 6.2 52 3.5"
        stroke="var(--salmon)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      />
    </svg>
  );
}

export function LogoLockup({ size = 46, priority = false }: { size?: number; priority?: boolean }) {
  return (
    <span className="logo-lockup">
      <Image src="/logo.svg" alt="" width={size} height={size} priority={priority} />
      <span className="logo-lockup__name">Thrive with Therapy</span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // While open: close on Escape, trap focus inside the panel, lock page scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const panel = menuRef.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>('a[href], button') ?? []).concat(
        menuButtonRef.current ? [menuButtonRef.current] : [],
      );
    focusables()[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="Thrive with Therapy — Home">
          <LogoLockup priority />
        </Link>

        <nav aria-label="Primary" className="desktop-nav">
          <ul>
            {NAV_LINKS.map((item) => {
              const isActive = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={isActive ? 'nav-link is-active' : 'nav-link'}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && <Squiggle key={pathname} />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className={mobileMenuOpen ? 'mobile-toggle-btn is-open' : 'mobile-toggle-btn'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-nav-menu"
            className="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <nav aria-label="Primary">
              <ul>
                {NAV_LINKS.map((item, idx) => {
                  const isActive = isActivePath(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.04 * idx }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={isActive ? 'mobile-nav__link is-active' : 'mobile-nav__link'}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className="mobile-nav__num" aria-hidden="true">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
