'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

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

export default function FaqPage() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'what-can-i-talk-about': true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Structured Data (JSON-LD) for FAQPage (§9)
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
    <div className="page">
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="PRACTICE CLARITY"
        title="Frequently Asked Questions"
        lead="Helpful information about session structure, fees, clinical approaches, and what to expect when beginning therapy."
      />

      {/* FAQ Accordion Section */}
      <section className="section-rhythm">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {FAQ_ITEMS.map((item) => {
              const isOpen = !!openIds[item.id];

              return (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--hairline)',
                    borderRadius: 'var(--radius-card)',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px -4px rgba(42, 43, 42, 0.05)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    style={{
                      width: '100%',
                      padding: '1.5rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-playfair), serif',
                        fontSize: '19px',
                        fontWeight: 500,
                        color: 'var(--ink)',
                      }}
                    >
                      {item.question}
                    </span>
                    <span
                      style={{
                        fontSize: '22px',
                        color: isOpen ? 'var(--salmon-text)' : 'var(--sage-deep)',
                        fontWeight: 300,
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.25s ease',
                      }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      style={{
                        padding: '0 1.75rem 1.75rem 1.75rem',
                        fontSize: '15.5px',
                        lineHeight: 1.75,
                        color: 'var(--ink-muted)',
                        borderTop: '1px solid rgba(42, 43, 42, 0.06)',
                        paddingTop: '1rem',
                      }}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Have a question banner */}
          <div
            style={{
              marginTop: '4.5rem',
              padding: '2.5rem',
              backgroundColor: '#FAF5EE',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--hairline)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '22px', marginBottom: '0.5rem' }}>
              Still have a question?
            </h3>
            <p style={{ color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
              We are happy to answer any questions about our practice or help you navigate starting
              therapy.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-primary">
                Contact Our Office
              </Link>
              <Link href="/consultation" className="btn btn-secondary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
