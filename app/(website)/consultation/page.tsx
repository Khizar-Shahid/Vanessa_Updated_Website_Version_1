import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

interface BookingService {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  googleLink: string;
}

const BOOKING_SERVICES: BookingService[] = [
  {
    id: 'individual',
    name: 'Individual, Trauma & Somatic Therapy',
    price: '$185',
    duration: '50 Minutes',
    description:
      'One-on-one sessions integrating cognitive, somatic, and trauma-focused modalities to facilitate deep, lasting physical and emotional healing.',
    googleLink: 'https://calendar.app.google/bGgkp1LH3Jqmta2K8',
  },
  {
    id: 'couples',
    name: 'Couples Therapy',
    price: '$200',
    duration: '50 Minutes',
    description:
      'Supportive therapy for partners looking to resolve conflict, improve communication, and rebuild relational connection.',
    googleLink: 'https://calendar.app.google/hv6B67tHQDybFEw17',
  },
  {
    id: 'parenting',
    name: 'Parenting Skills Therapy',
    price: '$200',
    duration: '50 Minutes',
    description:
      'Actionable guidance and emotional support to navigate raising children, strengthening boundaries, and fostering healthy family systems.',
    googleLink: 'https://calendar.app.google/MkSD8vZmRjieBb5q6',
  },
];

export const metadata = {
  title: 'Book a Consultation | Thrive with Therapy',
  description:
    'Book a session with Vanessa M. Sierra, LMFT — individual, couples, or parenting therapy, online or in person in Coral Gables, FL.',
};

export default function ConsultationBookingPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="SCHEDULING & CARE"
        title="Schedule Your Consultation"
        lead="Start with a conversation about what you are experiencing, what you are looking for, and whether therapy feels like the right next step."
      />

      {/* Main Booking Interface */}
      <section className="section-rhythm">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--hairline)',
              boxShadow: 'var(--shadow-editorial)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '26px', marginBottom: '0.75rem' }}>
                Select Your Therapeutic Service
              </h2>
              <p style={{ color: 'var(--ink-muted)', fontSize: '15px', margin: '0 auto' }}>
                Choose a service to open Vanessa&apos;s booking calendar, where you can pick a time,
                share insurance details, and confirm your appointment.
              </p>
            </div>

            {/* Each card links straight to that service's Google booking page. Google blocks
                embedding, so it opens in a new tab. */}
            <ul className="booking-options">
              {BOOKING_SERVICES.map((svc) => (
                <li key={svc.id}>
                  <a
                    href={svc.googleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="booking-option"
                  >
                    <span className="booking-option__text">
                      <span className="booking-option__name">{svc.name}</span>
                      <span className="booking-option__duration">{svc.duration}</span>
                      <span className="booking-option__desc">{svc.description}</span>
                    </span>
                    <span className="booking-option__side">
                      <span className="booking-option__price">{svc.price}</span>
                      <span className="booking-option__cta">
                        View calendar <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Care Notice */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '13px', color: 'var(--ink-muted)' }}>
            Have questions before booking?{' '}
            <Link href="/contact" className="text-link" style={{ fontSize: '13px' }}>
              Send a confidential message to Vanessa
            </Link>{' '}
            or call <a href="tel:954-635-0234" className="text-link" style={{ fontSize: '13px' }}>954-635-0234</a>.
          </div>
        </div>
      </section>
    </div>
  );
}
