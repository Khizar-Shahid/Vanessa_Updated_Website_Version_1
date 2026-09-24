'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

// §3.5 motion principles: fade + 16px rise, 80ms sibling stagger,
// triggered once at ~20% viewport entry. Reduced-motion users get the
// final state via the [data-reveal] override in globals.css.
export const EASE_EDITORIAL = [0.2, 0.8, 0.3, 1] as const;

const VIEWPORT = { once: true, amount: 0.2 } as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_EDITORIAL } },
};

type Tag = 'div' | 'section' | 'ul' | 'ol' | 'li' | 'span' | 'p' | 'h1' | 'h2' | 'article';

interface RevealProps {
  children: React.ReactNode;
  as?: Tag;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  id?: string;
}

/** A single element that fades and rises into view once. */
export function Reveal({ children, as = 'div', className, style, delay = 0, id }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      id={id}
      data-reveal=""
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={itemVariants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

interface RevealGroupProps extends RevealProps {
  stagger?: number;
  /** Animate on mount instead of on scroll (used for the hero). */
  immediate?: boolean;
}

/** A parent whose RevealItem children reveal in sequence. */
export function RevealGroup({
  children,
  as = 'div',
  className,
  style,
  delay = 0,
  stagger = 0.08,
  immediate = false,
  id,
}: RevealGroupProps) {
  const Component = motion[as];
  const groupVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial="hidden"
      {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport: VIEWPORT })}
      variants={groupVariants}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ children, as = 'div', className, style, id }: Omit<RevealProps, 'delay'>) {
  const Component = motion[as];
  return (
    <Component id={id} data-reveal="" className={className} style={style} variants={itemVariants}>
      {children}
    </Component>
  );
}
