'use client';

import React, { useState } from 'react';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenId?: string;
}

export default function FaqAccordion({ items, defaultOpenId }: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>(
    defaultOpenId ? { [defaultOpenId]: true } : {},
  );

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-col gap-5">
      {items.map((item) => {
        const isOpen = !!openIds[item.id];

        return (
          <div
            key={item.id}
            className="bg-white border border-border rounded-2xl overflow-hidden shadow-[0_4px_15px_-4px_rgba(42,43,42,0.05)] transition-shadow hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="w-full p-6 md:p-7 flex items-center justify-between gap-4 bg-transparent border-0 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="font-serif text-lg md:text-xl font-medium text-foreground">
                {item.question}
              </span>
              <span
                className={`text-2xl font-light transition-transform duration-200 select-none ${
                  isOpen ? 'text-accent rotate-45' : 'text-primary'
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-6 md:px-7 pb-7 text-[15.5px] leading-relaxed text-muted border-t border-border/40 pt-4"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
