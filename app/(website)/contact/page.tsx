import React from 'react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  alternates: {
    canonical: '/contact',
  },
  title: 'Contact Our Office | Thrive with Therapy',
  description:
    'Contact Vanessa M. Sierra, LMFT in Coral Gables, FL. Reach out to inquire about therapy services, schedule a consultation, or ask questions.',
};

export default function ContactPage() {
  return (
    <div className="page">
      <PageHero
        eyebrow="CONNECT WITH US"
        title="Contact Our Office"
        lead="We are here to support you. Reach out to ask questions, coordinate care details, or learn more about starting therapy in Coral Gables or online throughout Florida."
      />

      <section className="section-rhythm">
        <div className="container max-w-[1040px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Info & Office Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="label-eyebrow block mb-2">PRACTICE DETAILS</span>
                <h2 className="text-2xl md:text-3xl text-ink font-serif mb-6">Get in Touch</h2>
              </div>

              <div className="flex flex-col gap-6 mb-4">
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-sage-soft text-sage-deep flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-ink mb-0.5">Phone</h4>
                    <p className="m-0">
                      <a href="tel:954-635-0234" className="text-link text-[15px] hover:text-salmon-text">
                        954-635-0234
                      </a>
                    </p>
                    <span className="text-xs text-ink-muted">Call or text (confidential voicemail)</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-salmon-soft text-salmon-text flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-ink mb-0.5">Email</h4>
                    <p className="m-0">
                      <a href="mailto:vanessa@thrivementalhealthsolutions.com" className="text-link text-[15px] break-all hover:text-salmon-text">
                        vanessa@thrivementalhealthsolutions.com
                      </a>
                    </p>
                    <span className="text-xs text-ink-muted">Responses typically within 24 business hours</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-[#FAF5EE] text-ink border border-hairline flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-ink mb-0.5">Clinical Office &amp; Telehealth</h4>
                    <p className="m-0 text-[15px] text-ink">Coral Gables, FL (South Florida)</p>
                    <span className="text-xs text-ink-muted">Online telehealth throughout Florida • In-person by appointment</span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-7 bg-[#FAF6F1] rounded-2xl border border-hairline">
                <h4 className="font-serif text-lg text-ink mb-2">Office Hours</h4>
                <p className="text-xs md:text-sm leading-relaxed text-ink-muted m-0">
                  <strong>Monday – Thursday:</strong> 9:00 AM – 6:00 PM<br />
                  <strong>Friday:</strong> 9:00 AM – 2:00 PM<br />
                  <strong>Saturday – Sunday:</strong> Closed
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
