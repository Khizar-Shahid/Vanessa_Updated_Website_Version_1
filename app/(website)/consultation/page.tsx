import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

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
    duration: '50 MINUTES',
    description:
      'One-on-one sessions integrating cognitive, somatic, and trauma-focused modalities to facilitate deep, lasting physical and emotional healing.',
    googleLink: 'https://calendar.app.google/bGgkp1LH3Jqmta2K8',
  },
  {
    id: 'couples',
    name: 'Couples Therapy',
    price: '$200',
    duration: '50 MINUTES',
    description:
      'Supportive therapy for partners looking to resolve conflict, improve communication, and rebuild relational connection.',
    googleLink: 'https://calendar.app.google/hv6B67tHQDybFEw17',
  },
  {
    id: 'parenting',
    name: 'Parenting Skills Therapy',
    price: '$200',
    duration: '50 MINUTES',
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
    <div className="relative w-full overflow-x-clip">
      <PageHero
        eyebrow="SCHEDULING & CARE"
        title="Schedule Your Consultation"
        lead="Start with a conversation about what you are experiencing, what you are looking for, and whether therapy feels like the right next step."
      />

      {/* Main Booking Interface */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-[880px] mx-auto px-6">
          <div className="bg-white rounded-2xl border border-border shadow-[0_18px_40px_-26px_rgba(42,43,42,0.45)] p-8 md:p-14">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl text-foreground font-serif mb-3 font-normal">
                Select Your Therapeutic Service
              </h2>
              <p className="text-muted text-[15px] leading-relaxed max-w-[580px] mx-auto">
                Choose a service to open Vanessa&apos;s booking calendar, where you can pick a time,
                share insurance details, and confirm your appointment.
              </p>
            </div>

            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {BOOKING_SERVICES.map((svc) => (
                <li key={svc.id}>
                  <a
                    href={svc.googleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col min-[560px]:flex-row min-[560px]:items-center justify-between gap-6 p-6 sm:p-7 bg-background hover:bg-primary-soft/40 border border-border hover:border-primary/50 rounded-xl transition-all duration-300 no-underline hover:-translate-y-1"
                  >
                    <div className="flex flex-col flex-1">
                      <span className="font-serif text-[20px] font-normal leading-[1.3] text-foreground">
                        {svc.name}
                      </span>
                      <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-primary my-1">
                        {svc.duration}
                      </span>
                      <span className="text-[14px] text-muted leading-relaxed">
                        {svc.description}
                      </span>
                    </div>

                    <div className="flex flex-row min-[560px]:flex-col items-center min-[560px]:items-end justify-between min-[560px]:justify-center gap-2 shrink-0">
                      <span className="font-serif text-[24px] text-foreground leading-none">
                        {svc.price}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-white font-sans text-[13px] font-semibold leading-normal group-hover:bg-primary-hover transition-colors whitespace-nowrap shadow-sm">
                        View calendar <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Care Notice */}
          <div className="mt-10 text-center text-[13px] text-muted">
            Have questions before booking?{' '}
            <Link
              href="/contact"
              className="font-semibold text-foreground hover:text-accent underline underline-offset-4 decoration-accent-light/60 hover:decoration-accent transition-colors duration-200"
            >
              Send a confidential message to Vanessa
            </Link>{' '}
            or call{' '}
            <a
              href="tel:954-635-0234"
              className="font-semibold text-foreground hover:text-accent underline underline-offset-4 decoration-accent-light/60 hover:decoration-accent transition-colors duration-200"
            >
              954-635-0234
            </a>
            .
          </div>
        </div>
      </section>
    </div>
  );
}
