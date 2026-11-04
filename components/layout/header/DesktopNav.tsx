'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavItem, NavChild, isActivePath, EASE } from './navData';
import Squiggle from './Squiggle';

interface DesktopNavProps {
  navLinks: NavItem[];
  pathname: string;
}

export default function DesktopNav({ navLinks, pathname }: DesktopNavProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openNow = (label: string) => {
    cancelClose();
    setOpenMenu(label);
  };

  const closeSoon = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  // Close any open menu when the route changes
  useEffect(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenMenu(null);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!openMenu) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openMenu]);

  // Clear the timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <nav aria-label="Primary" className="hidden min-[1120px]:block">
      <ul className="list-none flex items-center gap-[0.15rem]">
        {navLinks.map((item) => {
          if (item.children) {
            const isOpen = openMenu === item.label;
            const isAnyChildActive = item.children.some((child: NavChild) =>
              isActivePath(pathname, child.href),
            );
            const isActive =
              isAnyChildActive || (item.href ? isActivePath(pathname, item.href) : false);

            const triggerClass = `relative inline-flex items-center min-h-[44px] px-2.5 text-[14.5px] rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap ${isActive ? 'text-foreground font-semibold' : 'text-muted hover:text-foreground'
              }`;

            const triggerInner = (
              <>
                <span>{item.label}</span>
                <ChevronDown
                  size={14}
                  className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180 text-accent' : 'text-muted'
                    }`}
                  aria-hidden="true"
                />
                {isActive && <Squiggle key={pathname} />}
              </>
            );

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => openNow(item.label)}
                onMouseLeave={closeSoon}
                onFocus={(e) => {
                  // Open on keyboard focus only (not on mouse click)
                  if ((e.target as HTMLElement).matches(':focus-visible')) openNow(item.label);
                }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    setOpenMenu(null);
                  }
                }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={triggerClass}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    onClick={() => setOpenMenu(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        openNow(item.label);
                      }
                    }}
                  >
                    {triggerInner}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={triggerClass}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu((prev) => (prev === item.label ? null : item.label))}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openNow(item.label);
                      }
                    }}
                  >
                    {triggerInner}
                  </button>
                )}

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-72"
                      role="menu"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: EASE }}
                    >
                      <div className="bg-white rounded-xl shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] border border-border p-2 flex flex-col gap-1">
                        {item.children.map((child: NavChild) => {
                          const isChildActive = isActivePath(pathname, child.href);
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className={`p-3 rounded-lg transition-colors duration-150 block text-left ${isChildActive ? 'bg-surface/70' : 'hover:bg-surface/50'
                                }`}
                              onClick={() => setOpenMenu(null)}
                            >
                              <div>
                                <span className="block text-[14.5px] font-medium text-foreground">
                                  {child.label}
                                </span>
                                <span className="block text-[12.5px] text-muted leading-tight mt-0.5">
                                  {child.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          }

          const isActive = isActivePath(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative inline-flex items-center min-h-[44px] px-2.5 text-[14.5px] rounded-full transition-colors duration-200 whitespace-nowrap ${isActive ? 'text-foreground font-semibold' : 'text-muted hover:text-foreground'
                  }`}
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
  );
}