import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { addSubscriber, isValidEmail } from '@/utils/subscribers';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Add to subscribers
    const result = addSubscriber(email);

    if (!result.success) {
      return NextResponse.json(
        { error: result.message },
        { status: 400 }
      );
    }

    // Send confirmation email
    await resend.emails.send({
      from: 'Bryce Lloyd <noreply@yourdomain.com>',
      to: email,
      subject: 'Subscription Confirmed',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0d7377; text-align: center;">Thanks for Subscribing!</h1>
          <p style="color: #374151; line-height: 1.6;">
            You've successfully subscribed to receive updates when new posts are published.
          </p>
          <p style="color: #374151; line-height: 1.6;">
            You'll receive an email notification whenever a new article is posted.
          </p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 32px;">
            If you didn't request this subscription, you can safely ignore this email.
          </p>
        </div>
      `
    });

    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
