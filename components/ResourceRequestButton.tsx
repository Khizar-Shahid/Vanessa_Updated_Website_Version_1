'use client';

import React, { useId, useRef, useState } from 'react';
import { Mail, X, CheckCircle2 } from 'lucide-react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

interface Props {
  resourceId: string;
  resourceTitle: string;
}

/**
 * "Download Free Resource" button. Opens a small dialog that asks for an
 * email address; the PDF is then emailed by /api/resources/request.
 */
export default function ResourceRequestButton({ resourceId, resourceTitle }: Props) {
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
      <button type="button" onClick={open} className="btn btn-secondary resource-card__cta">
        Download Free Resource
      </button>

      <dialog
        ref={dialogRef}
        className="resource-dialog"
        aria-labelledby={`${ids}-title`}
        onClick={(e) => {
          // Clicking the backdrop (outside the panel) closes the dialog
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className="resource-dialog__panel">
          <button type="button" onClick={close} className="resource-dialog__close" aria-label="Close">
            <X size={18} strokeWidth={1.8} />
          </button>

          {status === 'sent' ? (
            <div className="resource-dialog__done" role="status">
              <CheckCircle2 size={40} strokeWidth={1.4} aria-hidden="true" />
              <h2 id={`${ids}-title`}>Check your inbox</h2>
              <p>
                We&apos;ve sent <strong>{resourceTitle}</strong> to <strong>{email}</strong>. If it
                doesn&apos;t arrive in a few minutes, please check your spam or promotions folder.
              </p>
              <button type="button" onClick={close} className="btn btn-primary">
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              <span className="resource-dialog__icon" aria-hidden="true">
                <Mail size={22} strokeWidth={1.6} />
              </span>
              <h2 id={`${ids}-title`}>Get {resourceTitle}</h2>
              <p className="resource-dialog__lead">
                Enter your email and we&apos;ll send you the free PDF.
              </p>

              <label htmlFor={`${ids}-email`} className="resource-dialog__label">
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
                className="resource-dialog__input"
                aria-describedby={message ? `${ids}-error` : undefined}
                aria-invalid={status === 'error' || undefined}
              />

              {/* Honeypot for bots — hidden from people and assistive tech */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="resource-dialog__hp"
              />

              {message && (
                <p id={`${ids}-error`} className="resource-dialog__error" role="alert">
                  {message}
                </p>
              )}

              <button type="submit" className="btn btn-primary resource-dialog__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Email me the PDF'}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
