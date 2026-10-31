'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DesktopNav from './header/DesktopNav';
import MobileNav from './header/MobileNav';
import LogoLockup from './header/LogoLockup';
import { NAV_LINKS } from './header/navData';

export { default as LogoLockup } from './header/LogoLockup';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change; open mobile accordion if on resources/podcasts
  useEffect(() => {
    setMobileMenuOpen(false);
    setResourcesDropdownOpen(false);
    if (pathname.startsWith('/resources') || pathname.startsWith('/podcasts')) {
      setMobileResourcesOpen(true);
    }
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setResourcesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setResourcesDropdownOpen(false);
    }, 150);
  };

  // Keyboard navigation & escape listener for desktop dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && resourcesDropdownOpen) {
        setResourcesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resourcesDropdownOpen]);

  // While mobile menu open: close on Escape, trap focus inside the panel, lock page scroll
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
    <header className="bg-background border-b border-border relative z-40">
      <div className="w-full max-w-[1160px] mx-auto px-6 flex items-center justify-between gap-8 py-3.5">
        <Link
          href="/"
          className="relative z-50 rounded-lg no-underline text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Thrive with Therapy — Home"
        >
          <LogoLockup priority />
        </Link>

        <DesktopNav
          navLinks={NAV_LINKS}
          pathname={pathname}
          resourcesDropdownOpen={resourcesDropdownOpen}
          setResourcesDropdownOpen={setResourcesDropdownOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="min-[1120px]:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 rounded-full cursor-pointer relative z-50 bg-transparent border-0"
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-foreground transition-transform duration-300 ${
              mobileMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-foreground transition-opacity duration-200 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-foreground transition-transform duration-300 ${
              mobileMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <MobileNav
        navLinks={NAV_LINKS}
        pathname={pathname}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        mobileResourcesOpen={mobileResourcesOpen}
        setMobileResourcesOpen={setMobileResourcesOpen}
        menuRef={menuRef}
      />
    </header>
  );
}
