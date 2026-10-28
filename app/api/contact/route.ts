import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const NOTIFY_EMAILS = [
  'abdurrehman.swe@gmail.com',
  'khizar@aplusactive.com',
  'tassadiqhussain35@gmail.com',
];

function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceInterest, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const fromAddress = process.env.CONTACT_FROM_EMAIL || 'Thrive with Therapy <onboarding@resend.dev>';

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #2A2B2A; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #EAE5DE; border-radius: 8px;">
        <h2 style="color: #2F5233; margin-top: 0;">New Contact Form Submission</h2>
        <p style="font-size: 15px; margin-bottom: 20px;">You received a new inquiry from the Thrive with Therapy website.</p>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f0ebe4;">
            <td style="padding: 10px 0; font-weight: bold; width: 140px; color: #5C605B;">Full Name:</td>
            <td style="padding: 10px 0;">${escapeHtml(name)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0ebe4;">
            <td style="padding: 10px 0; font-weight: bold; color: #5C605B;">Email:</td>
            <td style="padding: 10px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #2F5233;">${escapeHtml(email)}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f0ebe4;">
            <td style="padding: 10px 0; font-weight: bold; color: #5C605B;">Phone:</td>
            <td style="padding: 10px 0;">${phone ? escapeHtml(phone) : '<em>Not provided</em>'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f0ebe4;">
            <td style="padding: 10px 0; font-weight: bold; color: #5C605B;">Service Interest:</td>
            <td style="padding: 10px 0;">${escapeHtml(serviceInterest || 'General Inquiry')}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f0ebe4;">
          <p style="font-weight: bold; margin-bottom: 8px; color: #5C605B;">Message:</p>
          <div style="background-color: #FAF6F1; padding: 14px; border-radius: 6px; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>

        <p style="font-size: 12px; color: #8C8A85; margin-top: 24px;">Sent from Thrive with Therapy Contact Form</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: NOTIFY_EMAILS,
      replyTo: email,
      subject: `New Inquiry from ${name} (${serviceInterest || 'General'})`,
      html: htmlContent,
    });

    if (error) {
      console.error('[contact] Resend SDK error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send message via email provider.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error('[contact] Unexpected server error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
