'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Meet Vanessa §4 signature visual: two abstract lines that begin apart and
 * move closer together as the visitor scrolls. Under reduced motion the
 * [data-converge] override shows them already joined.
 */
export default function ConvergingLines() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const topY = useTransform(scrollYProgress, [0, 1], [-46, 0]);
  const bottomY = useTransform(scrollYProgress, [0, 1], [46, 0]);

  return (
    <div ref={ref} className="converge" aria-hidden="true">
      <svg viewBox="0 0 900 140" fill="none">
        <motion.g data-converge="" style={{ y: topY }}>
          <path
            d="M10 50 C 150 20, 260 90, 400 58 C 520 30, 640 84, 890 70"
            stroke="var(--sage)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </motion.g>
        <motion.g data-converge="" style={{ y: bottomY }}>
          <path
            d="M10 90 C 170 120, 280 52, 420 82 C 540 108, 660 56, 890 70"
            stroke="var(--salmon)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </motion.g>
        <circle cx="890" cy="70" r="4" fill="var(--sage-deep)" />
      </svg>
    </div>
  );
}
