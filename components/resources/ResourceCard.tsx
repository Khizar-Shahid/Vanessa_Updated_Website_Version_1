import React from 'react';
import { ResourceItem } from './types';
import ResourceRequestButton from './ResourceRequestButton';

interface ResourceCardProps {
  item: ResourceItem;
}

export default function ResourceCard({ item }: ResourceCardProps) {
  return (
    <div className="p-8 md:p-10 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-[box-shadow,border-color] flex flex-col justify-between">
      <div>
        <div className="inline-block bg-primary-soft text-primary text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full mb-4">
          {item.badge}
        </div>

        <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-3">
          {item.title}
        </h3>

        <p className="text-[14.5px] leading-relaxed text-muted mb-5">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {item.topics.map((t, idx) => (
            <span
              key={idx}
              className="text-[11.5px] text-foreground bg-[#FAF5EE] px-2.5 py-1 rounded border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-border mt-auto">
        <span className="text-[12.5px] text-muted block mb-3 font-medium">
          {item.format}
        </span>
        <ResourceRequestButton resourceId={item.id} resourceTitle={item.title} />
      </div>
    </div>
  );
}
