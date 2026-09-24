'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'first-session',
    question: 'What happens during a first therapy session?',
    answer:
      'The initial consultation is a warm, unhurried space to discuss what brings you to therapy, review your personal history and current support systems, and clarify what you hope to experience or change. It is an opportunity to ask questions and determine if our therapeutic approach feels safe, supportive, and aligned with your needs.',
  },
  {
    id: 'session-length',
    question: 'How long are sessions and how frequently do we meet?',
    answer:
      'Standard individual and couples therapy sessions run for 50 minutes. Most clients begin by meeting weekly to establish rhythm, safety, and momentum. As you make meaningful progress and internalize regulation tools, we may transition to bi-weekly or monthly maintenance sessions.',
  },
  {
    id: 'fees-insurance',
    question: 'What are your session fees and do you accept insurance?',
    answer:
      'Individual sessions are $185 and Couples / Family sessions are $200 per 50-minute clinical hour. While we do not bill insurance directly, we can provide you with a monthly Superbill (statement for insurance reimbursement) that you can submit to your health plan for out-of-network benefits.',
  },
  {
    id: 'online-therapy',
    question: 'How does online therapy (telehealth) work?',
    answer:
      'Online sessions are conducted over a secure, encrypted, HIPAA-compliant video platform. Telehealth is available to any resident located within the state of Florida. All you need is a private, comfortable space and a stable internet connection.',
  },
  {
    id: 'emdr-suitability',
    question: 'How do I know if EMDR is right for me?',
    answer:
      'EMDR is recommended if you find yourself stuck in recurring emotional reactions, flashbacks, negative core beliefs, or physical tension stemming from past experiences. In our early sessions, Vanessa assesses your readiness, equips you with emotional grounding tools, and ensures EMDR is paced safely for your nervous system.',
  },
  {
    id: 'confidentiality',
    question: 'Is everything we discuss completely confidential?',
    answer:
      'Yes. As a Licensed Marriage and Family Therapist (LMFT), Vanessa adheres to strict legal and ethical confidentiality standards under Florida law and HIPAA. Details of your therapy cannot be disclosed to anyone without your written consent, subject to standard legal exceptions (e.g., imminent risk of harm to self or others).',
  },
];

export default function FaqPage() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'first-session': true,
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
          <PlaceholderNote>
            These questions and answers — including fees, insurance, and session details — are drafts.
            They need to be replaced with Vanessa’s real FAQ content before launch.
          </PlaceholderNote>
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
