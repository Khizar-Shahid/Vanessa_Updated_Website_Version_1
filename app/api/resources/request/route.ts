import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import resourcesData from '@/content/resources.json';

// Emails a free resource PDF to the address a visitor enters.
//
// Environment variables (set in Vercel → Settings → Environment Variables):
//   RESEND_API_KEY         required — API key from resend.com
//   RESOURCE_FROM_EMAIL    required — sender on a domain verified in Resend,
//                          e.g. "Vanessa Sierra <resources@thrivementalhealthsolutions.com>"
//   RESOURCE_REPLY_TO      optional — where replies go (defaults to the practice email)
//   RESOURCE_NOTIFY_EMAIL  optional — also send the practice a note for each request
//   GHL_PRIVATE_TOKEN      GoHighLevel Private Integration token (scope: contacts.write)
//   GHL_LOCATION_ID        GoHighLevel sub-account (location) ID the contacts belong to

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PRACTICE_EMAIL = 'vanessa@thrivementalhealthsolutions.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Resource = (typeof resourcesData.freeResources)[number];

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  }
}

const GHL_API = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';

/**
 * Saves the visitor as a GoHighLevel contact, tagged with the resource they
 * requested. Upsert matches an existing contact by email, and tags are added
 * separately so a returning visitor keeps the tags from earlier downloads.
 */
async function saveToGoHighLevel(email: string, resource: Resource) {
  const token = process.env.GHL_PRIVATE_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    console.info(`[resources] GoHighLevel not configured — skipped saving ${email}`);
    return;
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const upsert = await fetch(`${GHL_API}/contacts/upsert`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ locationId, email, source: 'Website – Free Resource' }),
  });
  if (!upsert.ok) {
    throw new Error(`GoHighLevel upsert responded ${upsert.status}: ${await upsert.text()}`);
  }
  const { contact } = (await upsert.json()) as { contact?: { id?: string } };
  if (!contact?.id) throw new Error('GoHighLevel upsert returned no contact id');

  const tagged = await fetch(`${GHL_API}/contacts/${contact.id}/tags`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ tags: ['website free resource', `resource: ${resource.title}`] }),
  });
  if (!tagged.ok) {
    throw new Error(`GoHighLevel tags responded ${tagged.status}: ${await tagged.text()}`);
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

function resourceEmailHtml(resource: Resource) {
  const title = escapeHtml(resource.title);
  return `
  <div style="font-family:Georgia,serif;color:#2A2B2A;max-width:560px;margin:0 auto;padding:24px;line-height:1.6">
    <p style="font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#B5533F;margin:0 0 8px">Thrive Mental Health Solutions</p>
    <h1 style="font-weight:400;font-size:26px;margin:0 0 16px">${title}</h1>
    <p style="font-family:Arial,sans-serif;font-size:15px">Thank you for your interest. Your free resource is attached to this email as a PDF — you can print it or fill it in on your device.</p>
    <p style="font-family:Arial,sans-serif;font-size:15px">Take your time with it. There are no right or wrong answers.</p>
    <p style="font-family:Arial,sans-serif;font-size:15px;margin-top:24px">Warmly,<br/>Vanessa M. Sierra, LMFT</p>
    <hr style="border:none;border-top:1px solid #e5e0d8;margin:24px 0"/>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#5C605B">You received this because this address was entered to request a free resource on thrivewiththerapy.org. If that wasn’t you, you can ignore this email.</p>
  </div>`;
}

export async function POST(request: Request) {
  let body: { resourceId?: unknown; email?: unknown; company?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill the "company" field
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === 'string' ? body.email.trim() : '';
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const resource = resourcesData.freeResources.find((r) => r.id === body.resourceId);
  if (!resource) {
    return NextResponse.json({ error: 'That resource could not be found.' }, { status: 404 });
  }

  // Save the lead to the CRM alongside sending the email. A CRM hiccup is
  // logged but never blocks the visitor from getting their PDF.
  const crmSaved = saveToGoHighLevel(email, resource).catch((err) =>
    console.error('[resources] Failed to save contact to GoHighLevel', err),
  );

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESOURCE_FROM_EMAIL;
  if (!apiKey || !from) {
    await crmSaved;
    if (process.env.NODE_ENV === 'development') {
      // Lets the form be tried locally before email delivery is configured
      console.info(`[resources] Email not configured — would send "${resource.title}" to ${email}`);
      return NextResponse.json({ ok: true, simulated: true });
    }
    console.error('[resources] RESEND_API_KEY or RESOURCE_FROM_EMAIL is not set');
    return NextResponse.json(
      { error: 'Sorry, we can’t send resources right now. Please try again later.' },
      { status: 503 },
    );
  }

  try {
    const pdf = await readFile(path.join(process.cwd(), 'private', 'resources', resource.file));

    await sendEmail(apiKey, {
      from,
      to: [email],
      reply_to: process.env.RESOURCE_REPLY_TO || PRACTICE_EMAIL,
      subject: `Your free resource: ${resource.title}`,
      html: resourceEmailHtml(resource),
      text: `Thank you for your interest. "${resource.title}" is attached as a PDF.\n\nWarmly,\nVanessa M. Sierra, LMFT`,
      attachments: [{ filename: `${resource.title}.pdf`, content: pdf.toString('base64') }],
    });

    const notify = process.env.RESOURCE_NOTIFY_EMAIL;
    if (notify) {
      // Best-effort: the visitor already has their PDF even if this fails
      await sendEmail(apiKey, {
        from,
        to: [notify],
        subject: `Resource requested: ${resource.title}`,
        text: `${email} requested "${resource.title}" from the website.`,
      }).catch((err) => console.error('[resources] Notification failed', err));
    }

    await crmSaved;
    return NextResponse.json({ ok: true });
  } catch (err) {
    await crmSaved;
    console.error('[resources] Failed to send resource', err);
    return NextResponse.json(
      { error: 'Sorry, something went wrong sending your resource. Please try again.' },
      { status: 502 },
    );
  }
}
