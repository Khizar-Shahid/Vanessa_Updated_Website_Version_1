import React from 'react';
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
  alternates: {
    canonical: '/consultation',
  },
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
        <div className="container max-w-[880px]">
          <div className="bg-white rounded-2xl border border-hairline shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] p-8 md:p-14">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl text-ink font-serif mb-3">
                Select Your Therapeutic Service
              </h2>
              <p className="text-ink-muted text-[15px] leading-relaxed max-w-[580px] mx-auto">
                Choose a service to open Vanessa&apos;s booking calendar, where you can pick a time,
                share details, and confirm your appointment.
              </p>
            </div>

            <ul className="list-none p-0 m-0 flex flex-col gap-5">
              {BOOKING_SERVICES.map((svc) => (
                <li key={svc.id}>
                  <a
                    href={svc.googleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 md:p-8 bg-parchment hover:bg-[#F3EDE3] border border-hairline rounded-xl transition-all duration-200 no-underline text-ink"
                  >
                    <div className="flex flex-col gap-1.5 flex-1">
                      <span className="font-serif text-xl font-medium text-ink group-hover:text-salmon-text transition-colors">
                        {svc.name}
                      </span>
                      <span className="text-[13px] font-semibold tracking-wider uppercase text-sage-deep">
                        {svc.duration} • {svc.price}
                      </span>
                      <span className="text-[14px] text-ink-muted leading-relaxed mt-1">
                        {svc.description}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-salmon-text font-semibold text-sm shrink-0">
                      <span>Book on Google</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
