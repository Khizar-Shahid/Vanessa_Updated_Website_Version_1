'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavItem, NavChild, isActivePath, EASE } from './navData';

interface MobileNavProps {
  navLinks: NavItem[];
  pathname: string;
  isOpen: boolean;
  onClose: () => void;
  mobileResourcesOpen: boolean;
  setMobileResourcesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef: React.RefObject<HTMLDivElement | null>;
}

export default function MobileNav({
  navLinks,
  pathname,
  isOpen,
  onClose,
  mobileResourcesOpen,
  setMobileResourcesOpen,
  menuRef,
}: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="mobile-nav-menu"
          className="mobile-nav fixed inset-0 z-50 bg-parchment pt-[8.5rem] px-6 pb-8 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <nav aria-label="Primary">
            <ul className="list-none flex flex-col max-w-[560px] mx-auto">
              {navLinks.map((item, idx) => {
                if (item.children) {
                  const isAnyChildActive = item.children.some((child: NavChild) => isActivePath(pathname, child.href));
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.04 * idx }}
                      className="mobile-nav__accordion-item border-b border-hairline"
                    >
                      <button
                        type="button"
                        onClick={() => setMobileResourcesOpen((o) => !o)}
                        aria-expanded={mobileResourcesOpen}
                        className={`mobile-nav__link mobile-nav__accordion-trigger w-full flex items-baseline justify-between py-3.5 font-serif text-[26px] leading-[1.25] text-ink text-left ${
                          isAnyChildActive ? 'is-active text-salmon-text' : ''
                        }`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="mobile-nav__num font-sans text-[12px] tracking-[0.1em] text-sage-deep" aria-hidden="true">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="mobile-nav__accordion-label">{item.label}</span>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`mobile-nav__accordion-chevron transition-transform duration-200 ${
                            mobileResourcesOpen ? 'is-rotated rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileResourcesOpen && (
                          <motion.ul
                            className="mobile-nav__sublist flex flex-col gap-2 pl-8 pb-3 list-none overflow-hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: EASE }}
                          >
                            {item.children.map((child: NavChild, subIdx) => {
                              const isChildActive = isActivePath(pathname, child.href);
                              const subLetter = String.fromCharCode(97 + subIdx);
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className={`mobile-nav__sublink flex items-baseline gap-3 py-2 text-ink no-underline ${
                                      isChildActive ? 'is-active text-salmon-text font-medium' : ''
                                    }`}
                                    aria-current={isChildActive ? 'page' : undefined}
                                  >
                                    <span className="mobile-nav__subnum font-sans text-[11px] text-sage-deep" aria-hidden="true">
                                      {String(idx + 1).padStart(2, '0')}{subLetter}
                                    </span>
                                    <div className="mobile-nav__subtext">
                                      <span className="mobile-nav__subtitle block text-[17px] font-serif">
                                        {child.label}
                                      </span>
                                      <span className="mobile-nav__subdesc block text-[12px] text-ink-muted">
                                        {child.description}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }

                const isActive = isActivePath(pathname, item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: EASE, delay: 0.04 * idx }}
                    className="border-b border-hairline"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`mobile-nav__link flex items-baseline gap-4 py-3.5 font-serif text-[26px] leading-[1.25] text-ink no-underline ${
                        isActive ? 'is-active text-salmon-text font-semibold' : ''
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="mobile-nav__num font-sans text-[12px] tracking-[0.1em] text-sage-deep" aria-hidden="true">
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
  );
}
