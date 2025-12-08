import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getSubscribers } from '@/utils/subscribers';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { secret, title, topic, slug, preview } = await request.json();

    // Verify secret
    if (secret !== process.env.NOTIFY_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Validate required fields
    if (!title || !topic || !slug) {
      return NextResponse.json(
        { error: 'Missing required fields: title, topic, slug' },
        { status: 400 }
      );
    }

    // Get all subscribers
    const subscribers = getSubscribers();

    if (subscribers.length === 0) {
      return NextResponse.json(
        { message: 'No subscribers to notify' },
        { status: 200 }
      );
    }

    // Build post URL
    const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${topic.toLowerCase()}/${slug}`;

    // Send email to all subscribers
    const emailPromises = subscribers.map(email =>
      resend.emails.send({
        from: 'Bryce Lloyd <noreply@yourdomain.com>',
        to: email,
        subject: `New Post: ${title}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #0d7377;">${title}</h1>
            <p style="color: #6b7280; font-size: 14px; margin-bottom: 16px;">
              ${topic}
            </p>
            ${preview ? `
              <p style="color: #374151; line-height: 1.6; margin-bottom: 24px;">
                ${preview}
              </p>
            ` : ''}
            <a href="${postUrl}"
               style="display: inline-block;
                      background-color: #0d7377;
                      color: white;
                      padding: 12px 24px;
                      text-decoration: none;
                      border-radius: 4px;
                      font-weight: 500;">
              Read Post
            </a>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 32px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              You're receiving this because you subscribed to updates.
            </p>
          </div>
        `
      })
    );

    await Promise.all(emailPromises);

    return NextResponse.json(
      {
        message: `Notified ${subscribers.length} subscriber(s)`,
        count: subscribers.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Notification error:', error);
    return NextResponse.json(
      { error: 'Failed to send notifications' },
      { status: 500 }
    );
  }
}
