import React from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  faq: FAQItem[];
}

export default function ServiceFAQ({ faq }: ServiceFAQProps) {
  return (
    <div className="mb-14">
      <h3 className="font-serif text-2xl text-center mb-8 text-ink">
        Common Questions
      </h3>
      <div className="flex flex-col gap-5">
        {faq.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-hairline rounded-xl p-6 md:p-7 shadow-sm"
          >
            <h4 className="font-serif text-[18px] mb-2 text-ink font-medium">
              {item.q}
            </h4>
            <p className="text-ink-muted text-[15px] leading-relaxed m-0">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
