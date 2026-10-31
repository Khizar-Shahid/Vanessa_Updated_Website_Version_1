import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'p' | 'div';
}

export default function Eyebrow({ children, className = '', as: Component = 'span' }: EyebrowProps) {
  return (
    <Component
      className={`font-sans text-[11.5px] font-semibold tracking-[0.18em] uppercase text-accent inline-flex items-center gap-3 mb-4 leading-[1.4] before:content-[''] before:w-[26px] before:h-[1px] before:bg-current before:opacity-60 before:shrink-0 ${className}`}
    >
      {children}
    </Component>
  );
}
