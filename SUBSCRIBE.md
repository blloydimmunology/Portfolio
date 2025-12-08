# Email Subscription System - Implementation Guide

This document provides a complete guide for implementing email subscriptions on the medical blog site.

---

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Architecture](#architecture)
4. [Implementation Steps](#implementation-steps)
5. [API Routes](#api-routes)
6. [Frontend Components](#frontend-components)
7. [Email Templates](#email-templates)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Management Scripts](#management-scripts)

---

## Overview

### What This System Does
- Collects email addresses from visitors
- Stores subscribers in a JSON file (upgradeable to database)
- Sends confirmation emails on subscription
- Allows manual notification of subscribers when new posts are published
- Provides scripts to manage subscriber list

### Tech Stack
- **Email Service**: [Resend](https://resend.com) - Simple, modern email API
- **Storage**: JSON file (`data/subscribers.json`) - Upgradeable to database
- **API**: Next.js API routes

### Design Philosophy
- Minimal, non-intrusive
- No marketing language
- Single email input + button
- Clear confirmation states
- Respect user privacy

---

## Prerequisites

### 1. Resend Account Setup

1. **Create Account**: Go to https://resend.com and sign up
2. **Verify Domain** (for production):
   - Add your domain in Resend dashboard
   - Add DNS records they provide
   - Wait for verification (~24 hours)
3. **Get API Key**:
   - Go to Dashboard → API Keys
   - Click "Create API Key"
   - Copy the key (starts with `re_`)

### 2. Environment Variables

Create `.env.local` in project root:

```bash
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Secret for triggering notifications (generate random string)
NOTIFY_SECRET=your_random_secret_here_use_openssl_rand

# Site URL (for links in emails)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production (`.env.production`):
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
NOTIFY_SECRET=your_production_secret
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Generate random secret**:
```bash
openssl rand -hex 32
```

### 3. Install Dependencies

```bash
npm install resend
```

---

## Architecture

### Data Flow

#### Subscription Flow
```
User enters email
    ↓
Submit form (client)
    ↓
POST /api/subscribe
    ↓
Validate email
    ↓
Check if already subscribed
    ↓
Add to subscribers.json
    ↓
Send confirmation email (Resend)
    ↓
Return success to client
    ↓
Show confirmation message
```

#### Notification Flow
```
New blog post published
    ↓
Run notification script (manual)
    ↓
POST /api/notify-subscribers
    ↓
Verify secret key
    ↓
Read all subscribers
    ↓
Send email to each (Resend)
    ↓
Return count of emails sent
```

### File Structure
```
bryce-portfolio/
├── src/
│   ├── app/
│   │   └── api/
│   │       ├── subscribe/
│   │       │   └── route.js          # Subscription endpoint
│   │       └── notify-subscribers/
│   │           └── route.js          # Notification endpoint
│   ├── components/
│   │   └── SubscribeForm.jsx         # Subscribe UI component
│   └── utils/
│       └── subscribers.js            # Subscriber management utilities
├── data/
│   └── subscribers.json              # Subscriber storage
├── scripts/
│   ├── notify.js                     # Manual notification script
│   ├── check-subscribers.js          # View subscriber list
│   └── add-subscriber.js             # Manually add subscriber
├── .env.local                        # Local environment variables
└── .env.production                   # Production environment variables
```

---

## Implementation Steps

### Step 1: Create Data Directory

```bash
mkdir -p data
echo '[]' > data/subscribers.json
```

Add to `.gitignore`:
```
data/subscribers.json
.env.local
.env.production
```

### Step 2: Create Subscriber Utilities

**File**: `src/utils/subscribers.js`

```js
import fs from 'fs';
import path from 'path';

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data/subscribers.json');

// Ensure subscribers file exists
function ensureSubscribersFile() {
  const dir = path.dirname(SUBSCRIBERS_FILE);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify([], null, 2));
  }
}

// Get all subscribers
export function getSubscribers() {
  ensureSubscribersFile();
  const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf8');
  return JSON.parse(data);
}

// Add a subscriber
export function addSubscriber(email) {
  ensureSubscribersFile();

  const subscribers = getSubscribers();

  // Check if already subscribed
  if (subscribers.includes(email)) {
    return { success: false, message: 'Already subscribed' };
  }

  // Add new subscriber
  subscribers.push(email);
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));

  return { success: true, message: 'Subscribed successfully' };
}

// Remove a subscriber
export function removeSubscriber(email) {
  ensureSubscribersFile();

  const subscribers = getSubscribers();
  const filtered = subscribers.filter(sub => sub !== email);

  if (filtered.length === subscribers.length) {
    return { success: false, message: 'Email not found' };
  }

  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(filtered, null, 2));
  return { success: true, message: 'Unsubscribed successfully' };
}

// Validate email format
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

### Step 3: Create API Routes

#### Subscribe Route

**File**: `src/app/api/subscribe/route.js`

```js
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
      from: 'Your Blog <noreply@yourdomain.com>', // Update with your domain
      to: email,
      subject: 'Subscription Confirmed',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e3a8a; text-align: center;">Thanks for Subscribing!</h1>
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
```

#### Notify Subscribers Route

**File**: `src/app/api/notify-subscribers/route.js`

```js
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
        from: 'Your Blog <noreply@yourdomain.com>', // Update with your domain
        to: email,
        subject: `New Post: ${title}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1e3a8a;">${title}</h1>
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
                      background-color: #1e3a8a;
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
```

### Step 4: Create Subscribe Component

**File**: `src/components/SubscribeForm.jsx`

```jsx
'use client';

import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-blue-900 font-medium">
          ✓ {message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === 'loading'}
          className="px-4 py-2 border border-blue-100 rounded text-sm
                     focus:outline-none focus:border-blue-900
                     disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-2 bg-blue-900 text-white text-sm font-medium rounded
                     hover:bg-blue-700 transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600 mt-2">{message}</p>
      )}
    </form>
  );
}
```

### Step 5: Integrate Subscribe Form

Add to **Top Banner** (`src/components/TopBanner.jsx`):

```jsx
import SubscribeForm from './SubscribeForm';

export default function TopBanner() {
  return (
    <header className="border-b border-blue-100 py-8 bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-3xl font-bold text-blue-900">
          Your Site Title
        </h1>

        {/* Search bar here */}

        <SubscribeForm />
      </div>
    </header>
  );
}
```

Or add to **individual blog posts** at the bottom.

---

## Email Templates

### Confirmation Email Template

Clean, minimal design matching site aesthetic:

```html
<div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
  <h1 style="color: #1e3a8a; text-align: center; font-size: 24px; margin-bottom: 24px;">
    Thanks for Subscribing!
  </h1>

  <p style="color: #374151; line-height: 1.6; font-size: 16px; margin-bottom: 16px;">
    You've successfully subscribed to receive updates when new posts are published.
  </p>

  <p style="color: #374151; line-height: 1.6; font-size: 16px; margin-bottom: 32px;">
    You'll receive an email notification whenever a new article is posted.
  </p>

  <div style="text-align: center; padding: 24px 0; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
    <a href="${process.env.NEXT_PUBLIC_SITE_URL}"
       style="color: #1e3a8a; text-decoration: none; font-weight: 500;">
      Visit the blog →
    </a>
  </div>

  <p style="color: #6b7280; font-size: 14px; margin-top: 32px; text-align: center;">
    If you didn't request this subscription, you can safely ignore this email.
  </p>
</div>
```

### New Post Notification Template

```html
<div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
  <div style="text-align: center; margin-bottom: 32px;">
    <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">
      NEW POST
    </p>
    <h1 style="color: #1e3a8a; font-size: 28px; margin: 0;">
      ${title}
    </h1>
    <p style="color: #6b7280; font-size: 14px; margin-top: 8px;">
      ${topic}
    </p>
  </div>

  ${preview ? `
    <p style="color: #374151; line-height: 1.6; font-size: 16px; margin-bottom: 32px;">
      ${preview}
    </p>
  ` : ''}

  <div style="text-align: center; margin: 32px 0;">
    <a href="${postUrl}"
       style="display: inline-block;
              background-color: #1e3a8a;
              color: white;
              padding: 14px 32px;
              text-decoration: none;
              border-radius: 4px;
              font-weight: 500;
              font-size: 16px;">
      Read the Article
    </a>
  </div>

  <div style="border-top: 1px solid #e5e7eb; margin-top: 48px; padding-top: 24px;">
    <p style="color: #9ca3af; font-size: 12px; text-align: center; line-height: 1.5;">
      You're receiving this because you subscribed to updates from ${siteConfig.title}.
      <br/>
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #6b7280;">
        Visit the blog
      </a>
    </p>
  </div>
</div>
```

---

## Management Scripts

### View Subscribers

**File**: `scripts/check-subscribers.js`

```js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUBSCRIBERS_FILE = path.join(__dirname, '../data/subscribers.json');

function getSubscribers() {
  if (!fs.existsSync(SUBSCRIBERS_FILE)) {
    console.log('No subscribers file found');
    return [];
  }

  const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf8');
  return JSON.parse(data);
}

const subscribers = getSubscribers();

console.log(`\nTotal Subscribers: ${subscribers.length}\n`);

if (subscribers.length > 0) {
  subscribers.forEach((email, index) => {
    console.log(`${index + 1}. ${email}`);
  });
}

console.log('');
```

**Add to `package.json`**:
```json
{
  "scripts": {
    "subscribers": "node scripts/check-subscribers.js"
  }
}
```

**Usage**:
```bash
npm run subscribers
```

### Notify Subscribers Script

**File**: `scripts/notify.js`

```js
import 'dotenv/config';

// Get command line arguments
const args = process.argv.slice(2);

if (args.length < 3) {
  console.log('Usage: npm run notify -- <title> <topic> <slug> [preview]');
  console.log('Example: npm run notify -- "Vaccine Basics" "Immunology" "vaccine-basics" "Learn about vaccines"');
  process.exit(1);
}

const [title, topic, slug, preview] = args;

async function notifySubscribers() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/notify-subscribers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.NOTIFY_SECRET,
        title,
        topic,
        slug,
        preview
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✓', data.message);
    } else {
      console.error('✗ Error:', data.error);
    }
  } catch (error) {
    console.error('✗ Failed to notify subscribers:', error.message);
  }
}

notifySubscribers();
```

**Add to `package.json`**:
```json
{
  "scripts": {
    "notify": "node scripts/notify.js"
  }
}
```

**Usage**:
```bash
npm run notify -- "Post Title" "Topic" "post-slug" "Optional preview"
```

### Add Subscriber Manually

**File**: `scripts/add-subscriber.js`

```js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUBSCRIBERS_FILE = path.join(__dirname, '../data/subscribers.json');

const email = process.argv[2];

if (!email) {
  console.log('Usage: npm run add-subscriber -- email@example.com');
  process.exit(1);
}

function addSubscriber(email) {
  const subscribers = fs.existsSync(SUBSCRIBERS_FILE)
    ? JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, 'utf8'))
    : [];

  if (subscribers.includes(email)) {
    console.log('✗ Email already subscribed');
    return;
  }

  subscribers.push(email);
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
  console.log('✓ Added:', email);
}

addSubscriber(email);
```

**Add to `package.json`**:
```json
{
  "scripts": {
    "add-subscriber": "node scripts/add-subscriber.js"
  }
}
```

**Usage**:
```bash
npm run add-subscriber -- test@example.com
```

---

## Testing

### Local Testing Checklist

1. **Test Subscription Flow**:
   ```bash
   npm run dev
   ```
   - Navigate to site
   - Enter email in subscribe form
   - Check for success message
   - Verify email appears in `data/subscribers.json`
   - Check inbox for confirmation email

2. **Test Duplicate Subscription**:
   - Try subscribing with same email
   - Should show "Already subscribed" error

3. **Test Invalid Email**:
   - Try: `notanemail`
   - Should show validation error

4. **Test Notification**:
   ```bash
   npm run notify -- "Test Post" "Immunology" "test-post" "This is a test"
   ```
   - Check subscriber inbox for notification email
   - Verify link goes to correct post

5. **Test Scripts**:
   ```bash
   npm run subscribers        # View subscriber list
   npm run add-subscriber -- test@example.com
   ```

### Development Mode (Resend)

During development, Resend sends emails to verified addresses only. To test:

1. Go to Resend dashboard
2. Add your test email as a verified sender
3. Use that email for testing

### Production Testing

Before going live:
- [ ] Domain verified in Resend
- [ ] Production environment variables set
- [ ] Test with real email addresses
- [ ] Verify all links work
- [ ] Check email rendering in different clients

---

## Deployment

### Vercel Deployment

1. **Add Environment Variables** in Vercel dashboard:
   - `RESEND_API_KEY`
   - `NOTIFY_SECRET`
   - `NEXT_PUBLIC_SITE_URL`

2. **Deploy**:
   ```bash
   git push origin main
   ```

3. **Test Production**:
   - Subscribe with real email
   - Verify confirmation email
   - Test notification flow

### Update Email Sender

In production, update `from` address in both API routes:

```js
from: 'Your Name <noreply@yourdomain.com>'
```

Requires domain verification in Resend.

---

## Upgrading to Database

### When to Upgrade

Consider switching from JSON to database when:
- More than ~100 subscribers
- Need subscriber metadata (subscription date, preferences, etc.)
- Want unsubscribe functionality
- Need better performance

### Database Options

**Vercel Postgres** (simplest for Vercel deployments):
```bash
npm install @vercel/postgres
```

**Supabase** (full-featured):
```bash
npm install @supabase/supabase-js
```

**MongoDB** (if you need flexibility):
```bash
npm install mongodb
```

### Migration Steps

1. Create database table/collection
2. Migrate existing JSON data
3. Update `subscribers.js` utility functions
4. Update API routes
5. Test thoroughly
6. Deploy

---

## Privacy & Compliance

### Best Practices

- **Clear Communication**: Tell users what they're subscribing to
- **Easy Unsubscribe**: Add unsubscribe link to notification emails (future)
- **Data Security**: Don't share email list
- **Minimal Data**: Only collect what's needed (email)
- **Respect Privacy**: No tracking pixels or analytics in emails

### GDPR Considerations

If targeting EU users:
- Add checkbox to confirm consent
- Store subscription timestamp
- Implement unsubscribe functionality
- Add privacy policy link

---

## Troubleshooting

### Emails Not Sending

1. Check API key is correct in `.env.local`
2. Verify Resend account is active
3. Check console for error messages
4. Verify domain is verified (production)

### Already Subscribed Error

Check `data/subscribers.json` - email may already exist

### Invalid Email Error

Email validation uses simple regex - may need to adjust for edge cases

### Notification Script Fails

1. Verify `NOTIFY_SECRET` matches in `.env.local`
2. Check `NEXT_PUBLIC_SITE_URL` is correct
3. Ensure dev server is running (`npm run dev`)

---

## Complete Workflow Example

### Publishing a New Post

1. **Write Post**:
   ```bash
   touch src/content/posts/new-post.md
   ```

2. **Add Content**:
   ```yaml
   ---
   title: "Understanding Vaccines"
   date: "2025-01-15"
   preview: "How vaccines work at the cellular level"
   topic: "Immunology"
   subtopics: ["Vaccines", "Cell Biology"]
   ---

   Your content...
   ```

3. **Build and Deploy**:
   ```bash
   git add .
   git commit -m "Add new post: Understanding Vaccines"
   git push origin main
   ```

4. **Notify Subscribers**:
   ```bash
   npm run notify -- "Understanding Vaccines" "Immunology" "understanding-vaccines" "How vaccines work at the cellular level"
   ```

5. **Verify**:
   - Check subscriber inboxes
   - Verify link works
   - Check email formatting

---

## Summary

This subscription system provides:
- ✅ Simple email collection
- ✅ Automatic confirmation emails
- ✅ Manual subscriber notifications
- ✅ Management scripts
- ✅ Minimal, clean design
- ✅ Easy to upgrade later

**Next Steps After Implementation**:
1. Test thoroughly in development
2. Deploy to production
3. Verify domain with Resend
4. Update email sender addresses
5. Test with real subscribers
6. Monitor and iterate

---

**End of Subscription Implementation Guide**
