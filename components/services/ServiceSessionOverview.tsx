import React from 'react';

interface ServiceSessionOverviewProps {
  whoItsFor: string[];
  whatSessionsLookLike: string[];
}

export default function ServiceSessionOverview({
  whoItsFor,
  whatSessionsLookLike,
}: ServiceSessionOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
      {/* Who It's For */}
      <div className="editorial-card p-8 md:p-10 bg-white rounded-2xl border border-hairline shadow-sm">
        <h3 className="font-serif text-[22px] mb-5 text-sage-deep font-medium">
          Who This Is For
        </h3>
        <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
          {whoItsFor.map((item, idx) => (
            <li key={idx} className="text-[15px] leading-relaxed text-ink flex items-start gap-2.5">
              <span className="text-sage font-bold leading-none mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* What Sessions Look Like */}
      <div className="editorial-card p-8 md:p-10 bg-white rounded-2xl border border-hairline shadow-sm">
        <h3 className="font-serif text-[22px] mb-5 text-salmon-text font-medium">
          What Sessions Look Like
        </h3>
        <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
          {whatSessionsLookLike.map((item, idx) => (
            <li key={idx} className="text-[15px] leading-relaxed text-ink flex items-start gap-2.5">
              <span className="text-salmon-text font-bold leading-none mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
