import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
  try {
    // Read the secret from your environment variables
    const secret = process.env.SANITY_WEBHOOK_SECRET;

    if (!secret) {
      return NextResponse.json({ message: 'Missing SANITY_WEBHOOK_SECRET in environment' }, { status: 401 });
    }

    // `parseBody` automatically reads the request, checks the 'sanity-webhook-signature' 
    // header, and mathematically verifies it against your secret.
    const { isValidSignature, body } = await parseBody<any>(req, secret);

    if (!isValidSignature) {
      return NextResponse.json({ message: 'Invalid signature. Hacker attack thwarted.' }, { status: 401 });
    }
    
    // Grab the slug of the document that was just published/edited in Sanity
    const slug = body?.slug?.current;

    // 1. Revalidate the main insights listing page so the new card shows up
    revalidatePath('/insights');

    // 2. Revalidate the specific blog post so the new content shows up
    if (slug) {
      revalidatePath(`/insights/${slug}`);
    }

    // 3. Revalidate the sitemap so Google sees the new URL immediately
    revalidatePath('/sitemap.xml');

    return NextResponse.json({ 
      message: 'Revalidated successfully', 
      revalidated: true,
      now: Date.now() 
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
