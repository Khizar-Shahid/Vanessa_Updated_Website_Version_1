'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { NavItem, NavChild, isActivePath, EASE } from './navData';

interface MobileNavProps {
  navLinks: NavItem[];
  pathname: string;
  isOpen: boolean;
  onClose: () => void;
  menuRef: React.RefObject<HTMLDivElement> | any;
}

export default function MobileNav({
  navLinks,
  pathname,
  isOpen,
  onClose,
  menuRef,
}: MobileNavProps) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  // Open the group that contains the current page
  useEffect(() => {
    const activeGroup = navLinks.find((item) =>
      item.children?.some((child: NavChild) => isActivePath(pathname, child.href)),
    );
    if (activeGroup) setOpenGroup(activeGroup.label);
  }, [pathname, navLinks]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="mobile-nav-menu"
          className="fixed inset-0 z-50 bg-background pt-[8.5rem] px-6 pb-8 overflow-y-auto"
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
                  const groupOpen = openGroup === item.label;
                  const isAnyChildActive = item.children.some((child: NavChild) =>
                    isActivePath(pathname, child.href),
                  );
                  const isGroupActive =
                    isAnyChildActive || (item.href ? isActivePath(pathname, item.href) : false);

                  // For items that also have their own page, add an overview link first
                  const subItems: NavChild[] = item.href
                    ? [
                      { label: `All ${item.label}`, description: '', href: item.href },
                      ...item.children,
                    ]
                    : item.children;

                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: EASE, delay: 0.04 * idx }}
                      className="border-b border-border"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                        aria-expanded={groupOpen}
                        className={`w-full flex items-baseline justify-between py-3.5 font-serif text-[26px] leading-[1.25] text-foreground text-left cursor-pointer ${isGroupActive ? 'text-accent font-medium' : ''
                          }`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-sans text-[12px] tracking-[0.1em] text-primary" aria-hidden="true">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${groupOpen ? 'rotate-180 text-accent' : 'text-muted'
                            }`}
                          aria-hidden="true"
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {groupOpen && (
                          <motion.ul
                            className="flex flex-col gap-2 pl-8 pb-3 list-none overflow-hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: EASE }}
                          >
                            {subItems.map((child: NavChild, subIdx) => {
                              const isChildActive =
                                child.href === item.href
                                  ? pathname === child.href
                                  : isActivePath(pathname, child.href);
                              const subLetter = String.fromCharCode(97 + subIdx);
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className={`flex items-baseline gap-3 py-2 text-foreground no-underline rounded-lg px-2 hover:bg-surface/50 transition-colors ${isChildActive ? 'text-accent font-medium bg-surface/40' : ''
                                      }`}
                                    aria-current={isChildActive ? 'page' : undefined}
                                  >
                                    <span className="font-sans text-[11px] text-primary font-bold" aria-hidden="true">
                                      {String(idx + 1).padStart(2, '0')}{subLetter}
                                    </span>
                                    <div>
                                      <span className="block text-[17px] font-serif">
                                        {child.label}
                                      </span>
                                      {child.description && (
                                        <span className="block text-[12px] text-muted">
                                          {child.description}
                                        </span>
                                      )}
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
                    className="border-b border-border"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-baseline gap-4 py-3.5 font-serif text-[26px] leading-[1.25] text-foreground no-underline ${isActive ? 'text-accent font-semibold' : ''
                        }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="font-sans text-[12px] tracking-[0.1em] text-primary font-bold" aria-hidden="true">
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