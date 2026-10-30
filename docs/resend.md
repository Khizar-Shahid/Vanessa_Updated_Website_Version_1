# Resend – Contact Form Email Delivery

This document explains how the contact form on the Thrive with Therapy website sends form submissions to a list of notification emails using [Resend](https://resend.com).

---

## Overview

When a visitor fills out the contact form at `/contact`, the data is sent to a Next.js API route (`/api/contact`) which uses the Resend SDK to deliver a formatted HTML email to the practice team.

**Flow:**

```
User fills form → POST /api/contact → Resend SDK → Email delivered to team
```

---

## Prerequisites

1. **Resend account** — Sign up at [resend.com](https://resend.com)
2. **Verified domain** — Add and verify your sending domain at [resend.com/domains](https://resend.com/domains). Resend will provide DNS records (TXT, MX, CNAME) to add at your domain registrar.
3. **API key** — Generate one at [resend.com/api-keys](https://resend.com/api-keys)
4. **`resend` npm package** — Already installed in this project (`npm install resend`)

---

## Environment Variables

Set these in `.env` (local) and in Vercel → Settings → Environment Variables (production):

```env
# Resend API key (required)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Verified sender address (required)
# Must be on a domain verified in your Resend account
CONTACT_FROM_EMAIL="Thrive with Therapy <info@thrivewiththerapy.org>"
```

> **Important:** The email in `CONTACT_FROM_EMAIL` must use a domain you've verified in Resend. Using an unverified domain returns a 403 error: *"The [domain] domain is not verified."*

---

## Files Involved

| File | Purpose |
|---|---|
| `app/(website)/contact/page.tsx` | Client-side form with validation, submission, error/success states |
| `app/api/contact/route.ts` | Server-side API route that sends the email via Resend SDK |
| `.env` | Stores `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` |

---

## API Route (`app/api/contact/route.ts`)

### Key parts:

**1. Recipient list** — Update this array to control who receives form submissions:

```ts
const NOTIFY_EMAILS = [
  'abdurrehman.swe@gmail.com',
  'khizar@aplusactive.com',
  'tassadiqhussain35@gmail.com',
];
```

**2. Resend SDK usage:**

```ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: process.env.CONTACT_FROM_EMAIL,
  to: NOTIFY_EMAILS,
  replyTo: visitorEmail,           // so you can reply directly to the visitor
  subject: `New Inquiry from ${name}`,
  html: htmlContent,               // formatted HTML email body
});
```

**3. Error handling** — The route returns structured JSON errors that the frontend displays:

- `400` — Missing required fields (name, email, message)
- `500` — `RESEND_API_KEY` not configured
- `502` — Resend API returned an error

---

## Frontend Form (`app/(website)/contact/page.tsx`)

### Key implementation details:

**1. State management:**

```ts
const [formData, setFormData] = useState({ name: '', email: '', phone: '', serviceInterest: '', message: '' });
const [errors, setErrors] = useState<Record<string, string>>({});   // field-level validation
const [submitError, setSubmitError] = useState('');                  // server error message
const [submitted, setSubmitted] = useState(false);                  // success state
const [isSubmitting, setIsSubmitting] = useState(false);             // loading state
```

**2. Form submission — `fetch` to the API route:**

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Client-side validation first
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setIsSubmitting(true);
  setSubmitError('');

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setSubmitError(data.error || 'Something went wrong.');
      return;
    }

    setSubmitted(true);  // show success view
  } catch {
    setSubmitError('Couldn\'t reach the server. Check your connection.');
  } finally {
    setIsSubmitting(false);
  }
};
```

**3. UI states:**

- **Validation errors** — Shown inline below each field
- **Server error** — Styled alert box shown above the submit button
- **Success** — The form is replaced with a "Thank You" confirmation view
- **Loading** — Submit button shows "Sending..." and is disabled

---

## Adding a New Form That Uses Resend

To add another form (e.g., a waitlist or intake form):

1. **Create the API route** (e.g., `app/api/waitlist/route.ts`):
   ```ts
   import { NextResponse } from 'next/server';
   import { Resend } from 'resend';

   export const runtime = 'nodejs';
   export const dynamic = 'force-dynamic';

   export async function POST(request: Request) {
     const body = await request.json();
     // validate fields...

     const resend = new Resend(process.env.RESEND_API_KEY);
     const { error } = await resend.emails.send({
       from: process.env.CONTACT_FROM_EMAIL!,
       to: ['recipient@example.com'],
       replyTo: body.email,
       subject: 'New Waitlist Signup',
       html: '...your HTML...',
     });

     if (error) {
       return NextResponse.json({ error: error.message }, { status: 502 });
     }
     return NextResponse.json({ ok: true });
   }
   ```

2. **Create the frontend form** — Follow the same pattern: `fetch` → handle `res.ok` → show success/error.

3. **Set `CONTACT_FROM_EMAIL`** — Reuse the same verified sender, or add a new env var for a different sender.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| 403: *"domain is not verified"* | `CONTACT_FROM_EMAIL` uses an unverified domain | Verify the domain at [resend.com/domains](https://resend.com/domains) |
| 500: *"Email service is not configured"* | `RESEND_API_KEY` missing from environment | Add it to `.env` and Vercel env vars |
| 502: Resend error | API key invalid, rate limit hit, or Resend outage | Check [resend.com/api-keys](https://resend.com/api-keys) and [status.resend.com](https://status.resend.com) |
| Form shows success but no email arrives | Check spam/promotions folder | Also verify the recipient isn't blocked in Resend dashboard |
| *"Unable to fetch data"* in local dev | Next.js dev server network/DNS issue | Works on Vercel; for local testing, check VPN/firewall |

---

## Resend Free Plan Limits

- **100 emails/day**, 3,000/month
- Single verified domain
- Monitor usage at [resend.com/overview](https://resend.com/overview)
