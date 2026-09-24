import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';

interface ServiceData {
  title: string;
  subtitle: string;
  forWhen: string;
  whoItsFor: string[];
  whatSessionsLookLike: string[];
  focusAreas: string[];
  faq: { q: string; a: string }[];
}

const SERVICE_MAP: Record<string, ServiceData> = {
  'individual-therapy': {
    title: 'Individual Therapy',
    subtitle: 'One-on-One Collaborative Care',
    forWhen: 'For when something feels stuck, overwhelming, or difficult to understand on your own.',
    whoItsFor: [
      'Adults navigating chronic anxiety, stress, or emotional overwhelm',
      'Individuals dealing with life transitions, identity shifts, or relationship breakups',
      'Those seeking to build healthier emotional boundaries and self-worth',
      'People wanting to understand their recurring emotional habits without judgment',
    ],
    whatSessionsLookLike: [
      'A steady, 50-minute dedicated space focused entirely on your lived experience',
      'Gentle exploration of emotional patterns and bodily sensations during discussion',
      'Collaborative pacing—we do not force revelations before you feel ready',
      'Practical tools and grounding practices you can carry into your daily life',
    ],
    focusAreas: [
      'Self-worth and internal dialogue',
      'Emotional regulation and somatic awareness',
      'Depression, chronic anxiety, and stress',
      'Grief, loss, and life changes',
    ],
    faq: [
      {
        q: 'How long does individual therapy typically take?',
        a: 'Every person’s journey is unique. Some clients find clarity and symptom relief in 8–12 sessions, while others choose longer-term depth work to address lifelong patterns.',
      },
      {
        q: 'Do you offer online or in-person sessions?',
        a: 'We offer both secure HIPAA-compliant telehealth throughout Florida and in-person sessions at our Coral Gables office.',
      },
    ],
  },
  'couples-therapy': {
    title: 'Couples Therapy',
    subtitle: 'Relational Reconnection & Repair',
    forWhen: 'For when you care about each other, but keep getting caught in the same patterns.',
    whoItsFor: [
      'Partners trapped in repeating arguments that never seem to resolve',
      'Couples experiencing emotional distance, withdrawal, or intimacy struggles',
      'Partners seeking to repair trust following a breach or conflict',
      'Pre-marital or transitioning couples wanting to establish solid communication foundations',
    ],
    whatSessionsLookLike: [
      'A structured, balanced space where both voices are respected and protected',
      'Identifying the specific cycles that trigger defensiveness or shutdown',
      'Live in-session practice of vulnerable communication and active emotional listening',
      'Concrete strategies to de-escalate fights at home before they cause harm',
    ],
    focusAreas: [
      'Attachment styles and unmet emotional needs',
      'De-escalating defensive communication cycles',
      'Rebuilding intimacy and affectionate connection',
      'Navigating parenting and family stressors as a unified team',
    ],
    faq: [
      {
        q: 'What if my partner is hesitant about attending therapy?',
        a: 'Hesitation is completely normal. Couples therapy is not about taking sides or deciding who is "wrong"; it is about understanding the dance between you both.',
      },
      {
        q: 'What approach do you use for couples therapy?',
        a: 'Vanessa integrates the Gottman Method and Emotionally Focused Therapy (EFT) principles to foster emotional safety and practical connection.',
      },
    ],
  },
  'parenting-family-therapy': {
    title: 'Parenting & Family Therapy',
    subtitle: 'Strengthening Family Bonds & Authority',
    forWhen: 'For families navigating conflict, changing roles, and the challenges of raising children.',
    whoItsFor: [
      'Parents feeling overwhelmed, exhausted, or stuck in power struggles with their children',
      'Families adjusting to divorce, remarriage, or major developmental milestones',
      'Parents wanting to break generational cycles and establish positive discipline',
      'Families needing support with adolescent emotional outbursts or anxiety',
    ],
    whatSessionsLookLike: [
      'Clarifying family rules, emotional boundaries, and role expectations',
      'Guidance on how to maintain loving warmth while upholding consistent authority',
      'Interactive discussions to bridge communication divides between parents and children',
      'Parent-only coaching sessions paired with joint family sessions as clinically appropriate',
    ],
    focusAreas: [
      'Healthy parental authority without fear or harshness',
      'Developmental stages and adolescent emotional regulation',
      'Co-parenting consistency across households',
      'Family conflict resolution and relational repair',
    ],
    faq: [
      {
        q: 'Will my child be seen alone or with the family?',
        a: 'Depending on the age and clinical situation, therapy typically involves a combination of parent consultations and joint family sessions.',
      },
      {
        q: 'How does family therapy help parent-child conflict?',
        a: 'It shifts the focus from blaming the child to understanding how the entire family system communicates and regulates stress together.',
      },
    ],
  },
  'trauma-focused-therapy': {
    title: 'Trauma-Focused Therapy',
    subtitle: 'EMDR & Somatic Healing',
    forWhen: 'For when past experiences still affect how you feel, respond, or connect with others today.',
    whoItsFor: [
      'Individuals dealing with single-incident trauma or ongoing developmental childhood adversity',
      'Those suffering from PTSD triggers, flashbacks, or emotional numbness',
      'People whose nervous systems feel perpetually on guard (hypervigilance) or shut down (freeze)',
      'Anyone who has tried talk therapy and still feels trauma held physically in their body',
    ],
    whatSessionsLookLike: [
      'Comprehensive preparation phase focusing on nervous system stabilization and grounding skills',
      'Bilateral stimulation (EMDR) protocols to desensitize and reprocess target memories',
      'Somatic tracking of physical sensations to safely discharge trapped survival energy',
      'Restoring a felt sense of safety, dignity, and personal empowerment in present life',
    ],
    focusAreas: [
      'EMDR (Eye Movement Desensitization and Reprocessing)',
      'Somatic Experiencing and body-based regulation',
      'Healing early relational neglect and abuse memories',
      'Overcoming chronic hyperarousal and panic reactions',
    ],
    faq: [
      {
        q: 'Will I have to recount every detail of my trauma?',
        a: 'No. Modalities like EMDR and somatic therapy focus on internal emotional and physiological processing rather than requiring you to verbalize graphic details.',
      },
      {
        q: 'Is EMDR safe for complex trauma?',
        a: 'Yes, when facilitated with careful pacing, adequate stabilization resources, and an experienced licensed clinician like Vanessa.',
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(SERVICE_MAP).map((slug) => ({ service: slug }));
}

export default function ServiceDetailPage({ params }: { params: { service: string } }) {
  const data = SERVICE_MAP[params.service];
  if (!data) notFound();

  return (
    <div className="page">
      <PageHero
        eyebrow={data.subtitle}
        title={data.title}
        lead={<em>&ldquo;{data.forWhen}&rdquo;</em>}
      />

      {/* Main Service Content */}
      <section className="section-rhythm">
        <div className="container" style={{ maxWidth: '920px' }}>
          <PlaceholderNote>
            Everything on this page below the heading is draft content — who it’s for, what sessions
            look like, focus areas, and questions. It will be replaced with Vanessa’s own wording.
          </PlaceholderNote>
          {/* Who It's For & What Sessions Look Like Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginBottom: '4rem',
            }}
          >
            {/* Who It's For */}
            <div
              className="editorial-card"
              style={{ padding: '2.5rem', backgroundColor: '#FFFFFF' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: '22px',
                  marginBottom: '1.25rem',
                  color: 'var(--sage-deep)',
                }}
              >
                Who This Is For
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.whoItsFor.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink)', display: 'flex', gap: '0.65rem' }}>
                    <span style={{ color: 'var(--sage)', fontWeight: 700 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Sessions Look Like */}
            <div
              className="editorial-card"
              style={{ padding: '2.5rem', backgroundColor: '#FFFFFF' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: '22px',
                  marginBottom: '1.25rem',
                  color: 'var(--salmon-text)',
                }}
              >
                What Sessions Look Like
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.whatSessionsLookLike.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ink)', display: 'flex', gap: '0.65rem' }}>
                    <span style={{ color: 'var(--salmon-text)', fontWeight: 700 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Focus Areas List */}
          <div
            style={{
              backgroundColor: '#FAF5EE',
              borderRadius: 'var(--radius-card)',
              padding: '2.5rem',
              border: '1px solid var(--hairline)',
              marginBottom: '4rem',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '22px', marginBottom: '1.25rem' }}>
              Key Clinical Focus Areas
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {data.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '1rem 1.25rem',
                    borderRadius: '8px',
                    border: '1px solid var(--hairline)',
                    fontSize: '14.5px',
                    fontWeight: 500,
                  }}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* Service FAQ */}
          <div style={{ marginBottom: '4rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: '24px',
                textAlign: 'center',
                marginBottom: '2rem',
              }}
            >
              Common Questions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {data.faq.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--hairline)',
                    borderRadius: 'var(--radius-card)',
                    padding: '1.75rem',
                  }}
                >
                  <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '18px', marginBottom: '0.5rem' }}>
                    {item.q}
                  </h4>
                  <p style={{ color: 'var(--ink-muted)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--hairline)',
              boxShadow: 'var(--shadow-editorial)',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '24px', marginBottom: '0.75rem' }}>
              Take the Next Step in Care
            </h3>
            <p style={{ color: 'var(--ink-muted)', marginBottom: '1.75rem' }}>
              Schedule a consultation with Vanessa to discuss how {data.title.toLowerCase()} can support your goals.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/consultation" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link href="/ways-we-work" className="btn btn-secondary">
                Back to All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
