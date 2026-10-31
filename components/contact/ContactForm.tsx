'use client';

import React, { useState } from 'react';

export default function ContactForm() {
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
  const [submitError, setSubmitError] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError('We couldn\'t reach the server. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 md:p-12 bg-white rounded-2xl border border-border shadow-sm text-center">
        <div className="w-14 h-14 rounded-full bg-primary-soft text-primary flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-foreground mb-3">
          Thank You for Reaching Out
        </h3>
        <p className="text-muted text-[15px] leading-relaxed mb-8 max-w-[420px] mx-auto">
          Your message has been safely received. Vanessa will review your note and
          respond within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-[0.02em] rounded-full min-h-[44px] px-6 bg-transparent text-graphite border-[1.5px] border-graphite hover:bg-graphite hover:text-white hover:-translate-y-0.5 transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 md:p-12 bg-white rounded-2xl border border-border shadow-sm">
      <form onSubmit={handleSubmit} noValidate>
        <h3 className="font-serif text-2xl text-foreground mb-2">
          Send a Message
        </h3>
        <p className="text-muted text-[14px] leading-relaxed mb-7">
          Please fill out this form to inquire about therapy services or ask any questions.
        </p>

        {/* Name */}
        <div className="mb-5">
          <label htmlFor="contact-name" className="block text-[13.5px] font-semibold text-foreground mb-1.5">
            Your Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-2.5 rounded-lg text-[15px] bg-[#FAF6F1] border focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.name ? 'border-accent' : 'border-border'
            }`}
          />
          {errors.name && (
            <span id="name-error" className="text-xs text-accent mt-1.5 block">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="contact-email" className="block text-[13.5px] font-semibold text-foreground mb-1.5">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-4 py-2.5 rounded-lg text-[15px] bg-[#FAF6F1] border focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? 'border-accent' : 'border-border'
            }`}
          />
          {errors.email && (
            <span id="email-error" className="text-xs text-accent mt-1.5 block">
              {errors.email}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label htmlFor="contact-phone" className="block text-[13.5px] font-semibold text-foreground mb-1.5">
            Phone Number (Optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-[15px] bg-[#FAF6F1] border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Service Interest */}
        <div className="mb-5">
          <label htmlFor="contact-service" className="block text-[13.5px] font-semibold text-foreground mb-1.5">
            Service of Interest
          </label>
          <select
            id="contact-service"
            value={formData.serviceInterest}
            onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-[15px] bg-[#FAF6F1] border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          >
            <option value="Individual Therapy">Individual Therapy</option>
            <option value="Couples Therapy">Couples Therapy</option>
            <option value="Parenting & Family Therapy">Parenting &amp; Family Therapy</option>
            <option value="Trauma-Focused Therapy (EMDR)">Trauma-Focused Therapy (EMDR)</option>
            <option value="Other Question">General Question</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="contact-message" className="block text-[13.5px] font-semibold text-foreground mb-1.5">
            Your Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            placeholder="How can we help you?"
            className={`w-full px-4 py-2.5 rounded-lg text-[15px] bg-[#FAF6F1] border resize-y focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.message ? 'border-accent' : 'border-border'
            }`}
          />
          {errors.message && (
            <span id="message-error" className="text-xs text-accent mt-1.5 block">
              {errors.message}
            </span>
          )}
        </div>

        {/* Server Error */}
        {submitError && (
          <div role="alert" className="p-3 bg-[#FFF5F4] rounded-lg border border-accent text-sm text-accent mb-4">
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-[0.02em] rounded-full min-h-[48px] px-7 bg-primary text-white border-[1.5px] border-primary hover:bg-[#3D6F40] hover:border-[#3D6F40] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(71,128,74,0.6)] transition-all duration-300 mb-6 disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Privacy Note */}
        <div className="p-4 bg-[#FAF5EE] rounded-lg border border-border text-xs leading-relaxed text-muted">
          <strong>Privacy &amp; Confidentiality Notice:</strong> While we treat all inquiries
          with care, standard email and web forms are not encrypted health communication
          channels. Please avoid including sensitive personal clinical details. If you are
          experiencing an acute crisis or psychiatric emergency, please call 988 or go to your
          nearest emergency room.
        </div>
      </form>
    </div>
  );
}
