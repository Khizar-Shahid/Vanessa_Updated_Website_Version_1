'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavItem, NavChild, isActivePath, EASE } from './navData';
import Squiggle from './Squiggle';

interface DesktopNavProps {
  navLinks: NavItem[];
  pathname: string;
  resourcesDropdownOpen: boolean;
  setResourcesDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function DesktopNav({
  navLinks,
  pathname,
  resourcesDropdownOpen,
  setResourcesDropdownOpen,
  onMouseEnter,
  onMouseLeave,
}: DesktopNavProps) {
  return (
    <nav aria-label="Primary" className="hidden min-[1120px]:block">
      <ul className="list-none flex items-center gap-[0.15rem]">
        {navLinks.map((item) => {
          if (item.children) {
            const isAnyChildActive = item.children.some((child: NavChild) => isActivePath(pathname, child.href));
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <button
                  type="button"
                  className={`relative inline-flex items-center min-h-[44px] px-2.5 text-[14.5px] rounded-full transition-colors duration-200 cursor-pointer ${
                    isAnyChildActive ? 'text-ink font-semibold' : 'text-ink-muted hover:text-ink'
                  }`}
                  aria-expanded={resourcesDropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setResourcesDropdownOpen((prev) => !prev)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setResourcesDropdownOpen(true);
                    }
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={14}
                    className={`ml-1 transition-transform duration-200 ${
                      resourcesDropdownOpen ? 'rotate-180 text-salmon-text' : 'text-ink-muted'
                    }`}
                    aria-hidden="true"
                  />
                  {isAnyChildActive && <Squiggle key={pathname} />}
                </button>

                <AnimatePresence>
                  {resourcesDropdownOpen && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-72"
                      role="menu"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: EASE }}
                    >
                      <div className="bg-white rounded-xl shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] border border-hairline p-2 flex flex-col gap-1">
                        {item.children.map((child: NavChild) => {
                          const isChildActive = isActivePath(pathname, child.href);
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className={`p-3 rounded-lg transition-colors duration-150 block text-left ${
                                isChildActive ? 'bg-cream/70' : 'hover:bg-cream/50'
                              }`}
                              onClick={() => setResourcesDropdownOpen(false)}
                            >
                              <div>
                                <span className="block text-[14.5px] font-medium text-ink">
                                  {child.label}
                                </span>
                                <span className="block text-[12.5px] text-ink-muted leading-tight mt-0.5">
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
                className={`relative inline-flex items-center min-h-[44px] px-2.5 text-[14.5px] rounded-full transition-colors duration-200 whitespace-nowrap ${
                  isActive ? 'text-ink font-semibold' : 'text-ink-muted hover:text-ink'
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
