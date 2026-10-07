'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InsightCard, { InsightItem } from '@/components/InsightCard';
import { EASE_EDITORIAL } from '@/components/motion/Reveal';

type Filter = 'all' | 'video' | 'article';

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All Insights' },
  { id: 'video', label: 'Videos' },
  { id: 'article', label: 'Articles' },
];

/** /insights index: newest first, filterable by type. */
export default function InsightsBrowser({ initialItems }: { initialItems: InsightItem[] }) {
  const availableFilters = FILTERS.filter(
    (f) => f.id === 'all' || initialItems.some((item) => item.type === f.id),
  );
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const items = initialItems.filter((item) => activeFilter === 'all' || item.type === activeFilter);

  return (
    <>
      {/* Only offer filters when there is more than one kind of insight to choose from */}
      {availableFilters.length > 2 && (
        <div className="filter-pills" role="group" aria-label="Filter insights by type">
          {availableFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              aria-pressed={activeFilter === f.id}
              className="filter-pill"
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {/* Keyed by filter so the visible set fades in fresh on each change */}
      <ul key={activeFilter} className="card-grid card-grid--3">
        {items.map((item, idx) => (
          <motion.li
            key={item.id}
            data-reveal=""
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_EDITORIAL, delay: idx * 0.08 }}
          >
            <InsightCard item={item} showDate />
          </motion.li>
        ))}
      </ul>
    </>
  );
}
