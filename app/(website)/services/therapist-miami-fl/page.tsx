import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import OrganicLine from '@/components/OrganicLine';
import { ArrowRight, Feather, HeartHandshake, Sprout, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Therapist in Miami, FL | Thrive With Therapy',
  description:
    'Looking for a therapist in Miami, FL? Thrive With Therapy offers individual, couples, family, and trauma-focused therapy. Schedule a consultation.',
  keywords: ['Therapist in Miami, FL'],
  alternates: {
    canonical: '/services/therapist-miami-fl',
  },
};

const THERAPY_OFFERINGS = [
  {
    num: '01',
    title: 'Individual Therapy',
    subtitle: 'One-on-One Support',
    intro: 'Work through anxiety, stress, emotional patterns, and major life transitions in a grounded, private space.',
    href: '/services/individual-therapy-miami',
    Icon: Sprout,
  },
  {
    num: '02',
    title: 'Couples Therapy',
    subtitle: 'Relational Healing',
    intro: 'Break repetitive communication cycles, rebuild emotional intimacy, and restore trust together.',
    href: '/services/couples-therapy-miami',
    Icon: HeartHandshake,
  },
  {
    num: '03',
    title: 'Parenting & Family Therapy',
    subtitle: 'Family Growth & Dynamics',
    intro: 'Navigate child & adolescent challenges, resolve conflict, and strengthen boundaries at home.',
    href: '/services/parenting-family-therapy-miami',
    Icon: Users,
  },
  {
    num: '04',
    title: 'Trauma-Focused Therapy',
    subtitle: 'EMDR & Somatics',
    intro: 'Process painful past experiences and calm nervous system distress at a gentle, safe pace.',
    href: '/services/trauma-therapy-miami',
    Icon: Feather,
  },
];

export default function TherapistMiamiFLPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="MIAMI, FLORIDA PRACTICE"
        title="Therapist in Miami, FL – Compassionate Therapy & Support"
        lead={
          <>
            A warm, confidential, and collaborative space in Miami to explore what&apos;s happening beneath the surface, understand recurring patterns, and foster lasting emotional healing.
          </>
        }
      />

      {/* Overview Section */}
      <section className="section-rhythm section--bordered">
        <div className="container split">
          <div className="split__text">
            <span className="label-eyebrow">COMPASSIONATE CARE</span>
            <h2>Therapy Tailored to Your Life in Miami</h2>
            <p className="body-large">
              Living in Miami brings energy, culture, and vibrant opportunity—but it also comes with high-paced demands, relationship strains, career stress, and personal transitions. Whether you are facing anxiety, processing past hardship, or seeking deeper connection with a partner or child, therapy offers a space to pause and reflect.
            </p>
            <p style={{ color: 'var(--ink-muted)', lineHeight: 1.7 }}>
              Led by Vanessa M. Sierra, LMFT, our practice provides evidence-based, compassionate care. We work collaboratively to understand not just what you are feeling, but why—helping you develop sustainable tools and grounded insight.
            </p>
          </div>

          <div className="split__media">
            <div className="media-frame media-frame--right">
              <Image
                src="/images/space-to-pause.jpg"
                alt="A quiet, comfortable therapy and reflection space"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="split__line split__line--right" aria-hidden="true">
              <OrganicLine variant="curve-right" />
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Offerings Grid */}
      <section className="section-rhythm">
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="label-eyebrow">OUR SERVICES IN MIAMI</span>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '32px', marginBottom: '1rem' }}>
              Specialized Areas of Care
            </h2>
            <p style={{ color: 'var(--ink-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '16px' }}>
              We provide tailored modalities designed to support individuals, couples, and families through every stage of growth.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '3.5rem',
            }}
          >
            {THERAPY_OFFERINGS.map(({ num, title, subtitle, intro, href, Icon }) => (
              <div
                key={num}
                className="editorial-card"
                style={{
                  padding: '2.5rem 2rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--sage-soft, #EEF3ED)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--sage-deep)',
                      }}
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--salmon-text)' }}>
                      {num}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-nunito-sans), sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-muted)',
                      display: 'block',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {subtitle}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-playfair), serif',
                      fontSize: '22px',
                      marginBottom: '0.85rem',
                      color: 'var(--ink)',
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--ink-muted)', marginBottom: '1.5rem' }}>
                    {intro}
                  </p>
                </div>

                <Link
                  href={href}
                  className="text-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Approach / Office info */}
      <section className="section-rhythm section--wash section--bordered">
        <div className="container" style={{ maxWidth: '860px', textAlign: 'center' }}>
          <span className="label-eyebrow">FLEXIBLE & CONFIDENTIAL</span>
          <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '30px', marginBottom: '1.25rem' }}>
            In-Person in South Florida & Telehealth Across Florida
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--ink-muted)', marginBottom: '2rem' }}>
            We welcome clients for in-person sessions at our peaceful office located in Coral Gables (convenient to Coconut Grove, Brickell, and Greater Miami), as well as secure HIPAA-compliant telehealth sessions accessible anywhere across Florida.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/consultation" className="btn btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
