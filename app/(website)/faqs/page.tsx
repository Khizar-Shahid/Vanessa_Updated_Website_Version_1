import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FaqAccordion, { FaqItem } from '@/components/faqs/FaqAccordion';

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-can-i-talk-about',
    question: 'What can I talk about with a therapist?',
    answer:
      'You can talk about anything that is bothering you or affecting your life. This may include stress, anxiety, relationships, family problems, life changes, or difficult experiences. Therapy gives you a private place to talk openly without feeling judged.',
  },
  {
    id: 'is-individual-therapy-right',
    question: 'How do I know if individual therapy is right for me?',
    answer:
      'If you feel stuck, overwhelmed, stressed, or simply want to understand yourself better, individual therapy may be helpful. You do not need to have everything figured out before starting.',
  },
  {
    id: 'when-to-consider-couples-therapy',
    question: 'When should a couple consider therapy?',
    answer:
      'Couples do not have to wait until their relationship is in serious trouble. Therapy can be helpful when you are having the same arguments, finding it hard to communicate, feeling distant, or trying to work through a major change together.',
  },
  {
    id: 'what-happens-trauma-therapy',
    question: 'What happens in trauma therapy?',
    answer:
      'Trauma therapy gives you a safe place to talk about difficult experiences and how they may still affect you today. Your therapist will work with you at a pace that feels comfortable and supportive.',
  },
  {
    id: 'family-therapy-parenting',
    question: 'Can family therapy help with parenting problems?',
    answer:
      'Yes. Family therapy can give parents and children a chance to talk about problems and understand each other better. It can also help with communication, boundaries, family changes, and ongoing conflict.',
  },
  {
    id: 'therapy-in-coral-gables',
    question: 'Do you offer therapy in Coral Gables?',
    answer:
      'Yes. Thrive with Therapy provides individual, couples, trauma, and parenting and family therapy in Coral Gables, FL.',
  },
  {
    id: 'online-therapy',
    question: 'Is online therapy available?',
    answer:
      'Yes. Thrive with Therapy offers online therapy as well as in-person therapy. You can discuss which option works best for you during your consultation.',
  },
  {
    id: 'know-type-of-therapy',
    question: 'Do I need to know what type of therapy I need?',
    answer:
      'No. You do not need to choose a type of therapy before you reach out. You can simply explain what you are going through, and you can discuss your options during the consultation.',
  },
  {
    id: 'first-session-expectations',
    question: 'What should I expect from my first session?',
    answer:
      'Your first session is a chance to talk about what brought you to therapy, what you would like help with, and what you hope to get from therapy. It is also a chance for you and your therapist to get to know each other.',
  },
  {
    id: 'schedule-appointment',
    question: 'How can I schedule a therapy appointment?',
    answer:
      'You can contact Thrive with Therapy to schedule a consultation. This is a good first step if you have questions or would like to learn more about the therapy process.',
  },
];

export const metadata = {
  alternates: {
    canonical: '/faqs',
  },
  title: 'Frequently Asked Questions | Thrive with Therapy',
  description:
    'Helpful information about session structure, fees, clinical approaches, and what to expect when beginning therapy in Coral Gables, FL.',
};

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="relative w-full overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="PRACTICE CLARITY"
        title="Frequently Asked Questions"
        lead="Helpful information about session structure, fees, clinical approaches, and what to expect when beginning therapy."
      />

      <section className="py-16 md:py-24">
        <div className="w-full max-w-[820px] mx-auto px-6">
          <FaqAccordion items={FAQ_ITEMS} defaultOpenId="what-can-i-talk-about" />

          {/* Have a question banner */}
          <div className="mt-16 p-8 md:p-10 bg-[#FAF5EE] rounded-2xl border border-border text-center">
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Still have a question?
            </h3>
            <p className="text-muted mb-6 text-[15px] leading-relaxed max-w-[500px] mx-auto">
              We are happy to answer any questions about our practice or help you navigate starting
              therapy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-primary text-white border-[1.5px] border-primary hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300"
              >
                Contact Our Office
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-transparent text-graphite border-[1.5px] border-graphite hover:bg-graphite hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
