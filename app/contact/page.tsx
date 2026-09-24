'use client';

import React, { useState } from 'react';
import PageHero from '@/components/PageHero';
import PlaceholderNote from '@/components/PlaceholderNote';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Individual Therapy',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share a brief message or question.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission to clinical routing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="page">
      <PageHero
        eyebrow="CONNECT WITH US"
        title="Contact Our Office"
        lead="We are here to support you. Reach out to ask questions, coordinate care details, or learn more about starting therapy in Coral Gables or online throughout Florida."
      />

      {/* Main Grid */}
      <section className="section-rhythm">
        <div className="container" style={{ maxWidth: '1040px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
            }}
          >
            {/* Left Column: Direct Contact Info & Office Details */}
            <div>
              <span className="label-eyebrow">PRACTICE DETAILS</span>
              <h2 style={{ fontSize: '28px', marginBottom: '1.5rem' }}>Get in Touch</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
                {/* Phone */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--sage-soft)',
                      color: 'var(--sage-deep)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '18px', marginBottom: '0.2rem' }}>
                      Phone
                    </h4>
                    <p style={{ margin: 0 }}>
                      <a href="tel:954-635-0234" className="text-link" style={{ fontSize: '15px' }}>
                        954-635-0234
                      </a>
                    </p>
                    <span style={{ fontSize: '12.5px', color: 'var(--ink-muted)' }}>
                      Call or text (confidential voicemail)
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--salmon-soft)',
                      color: 'var(--salmon-text)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '18px', marginBottom: '0.2rem' }}>
                      Email
                    </h4>
                    <p style={{ margin: 0 }}>
                      <a href="mailto:vanessa@thrivementalhealthsolutions.com" className="text-link" style={{ fontSize: '15px' }}>
                        vanessa@thrivementalhealthsolutions.com
                      </a>
                    </p>
                    <span style={{ fontSize: '12.5px', color: 'var(--ink-muted)' }}>
                      Responses typically within 24 business hours
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#FAF5EE',
                      color: 'var(--ink)',
                      border: '1px solid var(--hairline)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '18px', marginBottom: '0.2rem' }}>
                      Clinical Office &amp; Telehealth
                    </h4>
                    <p style={{ margin: 0, fontSize: '15px', color: 'var(--ink)' }}>
                      Coral Gables, FL (South Florida)
                    </p>
                    <span style={{ fontSize: '12.5px', color: 'var(--ink-muted)' }}>
                      Online telehealth throughout Florida • In-person by appointment
                    </span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div
                style={{
                  padding: '1.75rem',
                  backgroundColor: '#FAF6F1',
                  borderRadius: 'var(--radius-card)',
                  border: '1px solid var(--hairline)',
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '18px', marginBottom: '0.75rem' }}>
                  Office Hours
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--ink-muted)', margin: 0 }}>
                  <strong>Monday – Thursday:</strong> 9:00 AM – 6:00 PM<br />
                  <strong>Friday:</strong> 9:00 AM – 2:00 PM<br />
                  <strong>Saturday – Sunday:</strong> Closed
                </p>
              </div>
            </div>

            {/* Right Column: Accessible Contact Form */}
            <div>
              <div
                className="editorial-card"
                style={{
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  backgroundColor: '#FFFFFF',
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--sage-soft)',
                        color: 'var(--sage-deep)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem auto',
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '24px', marginBottom: '0.75rem' }}>
                      Thank You for Reaching Out
                    </h3>
                    <p style={{ color: 'var(--ink-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '2rem' }}>
                      Your message has been safely received. Vanessa will review your note and
                      respond within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary"
                      style={{ fontSize: '14px' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <PlaceholderNote>
                      This form is not connected yet — messages are not sent anywhere. Please call or email instead.
                    </PlaceholderNote>
                    <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '24px', marginBottom: '0.5rem' }}>
                      Send a Message
                    </h3>
                    <p style={{ color: 'var(--ink-muted)', fontSize: '14px', marginBottom: '1.75rem' }}>
                      Please fill out this form to inquire about therapy services or ask any questions.
                    </p>

                    {/* Name */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label htmlFor="contact-name" style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, marginBottom: '0.4rem' }}>
                        Your Full Name <span style={{ color: 'var(--salmon-text)' }}>*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: errors.name ? '1.5px solid var(--salmon-text)' : '1px solid var(--hairline)',
                          backgroundColor: '#FAF6F1',
                          fontSize: '15px',
                        }}
                      />
                      {errors.name && (
                        <span id="name-error" style={{ fontSize: '12px', color: 'var(--salmon-text)', marginTop: '0.3rem', display: 'block' }}>
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label htmlFor="contact-email" style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, marginBottom: '0.4rem' }}>
                        Email Address <span style={{ color: 'var(--salmon-text)' }}>*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: errors.email ? '1.5px solid var(--salmon-text)' : '1px solid var(--hairline)',
                          backgroundColor: '#FAF6F1',
                          fontSize: '15px',
                        }}
                      />
                      {errors.email && (
                        <span id="email-error" style={{ fontSize: '12px', color: 'var(--salmon-text)', marginTop: '0.3rem', display: 'block' }}>
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Phone */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, marginBottom: '0.4rem' }}>
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--hairline)',
                          backgroundColor: '#FAF6F1',
                          fontSize: '15px',
                        }}
                      />
                    </div>

                    {/* Service Interest */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label htmlFor="contact-service" style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, marginBottom: '0.4rem' }}>
                        Service of Interest
                      </label>
                      <select
                        id="contact-service"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--hairline)',
                          backgroundColor: '#FAF6F1',
                          fontSize: '15px',
                        }}
                      >
                        <option value="Individual Therapy">Individual Therapy</option>
                        <option value="Couples Therapy">Couples Therapy</option>
                        <option value="Parenting & Family Therapy">Parenting &amp; Family Therapy</option>
                        <option value="Trauma-Focused Therapy (EMDR)">Trauma-Focused Therapy (EMDR)</option>
                        <option value="Other Question">General Question</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor="contact-message" style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, marginBottom: '0.4rem' }}>
                        Your Message <span style={{ color: 'var(--salmon-text)' }}>*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        placeholder="How can we help you?"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: errors.message ? '1.5px solid var(--salmon-text)' : '1px solid var(--hairline)',
                          backgroundColor: '#FAF6F1',
                          fontSize: '15px',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                        }}
                      />
                      {errors.message && (
                        <span id="message-error" style={{ fontSize: '12px', color: 'var(--salmon-text)', marginTop: '0.3rem', display: 'block' }}>
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: '100%', fontSize: '15px', marginBottom: '1.5rem' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Privacy & Clinical Safety Disclaimer (§7 Privacy Note) */}
                    <div
                      style={{
                        padding: '1rem',
                        backgroundColor: '#FAF5EE',
                        borderRadius: '6px',
                        border: '1px solid var(--hairline)',
                        fontSize: '12px',
                        lineHeight: 1.6,
                        color: 'var(--ink-muted)',
                      }}
                    >
                      <strong>Privacy &amp; Confidentiality Notice:</strong> While we treat all inquiries
                      with care, standard email and web forms are not encrypted health communication
                      channels. Please avoid including sensitive personal clinical details in this form.
                      If you are experiencing an acute psychiatric crisis or emergency, please call 988 or
                      go to your nearest emergency room.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
