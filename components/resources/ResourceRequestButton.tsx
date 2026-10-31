'use client';

import React, { useId, useRef, useState } from 'react';
import { Mail, X, CheckCircle2 } from 'lucide-react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

interface ResourceRequestButtonProps {
  resourceId: string;
  resourceTitle: string;
}

export default function ResourceRequestButton({
  resourceId,
  resourceTitle,
}: ResourceRequestButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const ids = useId();

  const open = () => {
    setStatus('idle');
    setMessage('');
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    setStatus('sending');
    setMessage('');
    try {
      const res = await fetch('/api/resources/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resourceId,
          email,
          company: (form.elements.namedItem('company') as HTMLInputElement | null)?.value ?? '',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setStatus('sent');
    } catch {
      setStatus('error');
      setMessage('We couldn’t reach the server. Please check your connection and try again.');
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="w-full inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-[0.02em] rounded-full min-h-[44px] px-6 bg-transparent text-graphite border-[1.5px] border-graphite hover:bg-graphite hover:text-white hover:-translate-y-0.5 transition-all duration-300"
      >
        Download Free Resource
      </button>

      <dialog
        ref={dialogRef}
        className="p-0 rounded-2xl border border-hairline shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm max-w-lg w-full m-auto"
        aria-labelledby={`${ids}-title`}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className="p-8 md:p-10 bg-white relative">
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-ink-muted hover:text-ink bg-cream/50 border border-hairline transition-colors"
            aria-label="Close"
          >
            <X size={18} strokeWidth={1.8} />
          </button>

          {status === 'sent' ? (
            <div className="text-center py-4 flex flex-col items-center gap-4" role="status">
              <CheckCircle2 size={44} strokeWidth={1.4} className="text-sage" aria-hidden="true" />
              <h2 id={`${ids}-title`} className="font-serif text-2xl text-ink">
                Check your inbox
              </h2>
              <p className="text-ink-muted text-[14.5px] leading-relaxed">
                We&apos;ve sent <strong>{resourceTitle}</strong> to <strong>{email}</strong>. If it
                doesn&apos;t arrive in a few minutes, please check your spam folder.
              </p>
              <button
                type="button"
                onClick={close}
                className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-[0.02em] rounded-full min-h-[44px] px-6 bg-sage-deep text-white border-[1.5px] border-sage-deep hover:bg-[#3D6F40] hover:border-[#3D6F40] transition-colors mt-2"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false} className="flex flex-col gap-4">
              <span className="w-12 h-12 rounded-full bg-sage-soft text-sage-deep flex items-center justify-center mb-1" aria-hidden="true">
                <Mail size={22} strokeWidth={1.6} />
              </span>
              <h2 id={`${ids}-title`} className="font-serif text-2xl text-ink">
                Get {resourceTitle}
              </h2>
              <p className="text-ink-muted text-[14.5px]">
                Enter your email address and we&apos;ll deliver the free PDF directly to your inbox.
              </p>

              <div>
                <label htmlFor={`${ids}-email`} className="block text-[13px] font-semibold text-ink-muted mb-1.5 uppercase tracking-wider">
                  Email address
                </label>
                <input
                  id={`${ids}-email`}
                  type="email"
                  name="email"
                  required
                  autoFocus
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-hairline bg-parchment text-ink focus:outline-none focus:ring-2 focus:ring-sage"
                  aria-describedby={message ? `${ids}-error` : undefined}
                  aria-invalid={status === 'error' || undefined}
                />
              </div>

              {/* Honeypot for bots */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {message && (
                <p id={`${ids}-error`} className="text-salmon-text text-sm" role="alert">
                  {message}
                </p>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-[0.02em] rounded-full min-h-[46px] px-6 bg-sage-deep text-white border-[1.5px] border-sage-deep hover:bg-[#3D6F40] hover:border-[#3D6F40] transition-colors mt-2 disabled:opacity-60"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Email me the PDF'}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
