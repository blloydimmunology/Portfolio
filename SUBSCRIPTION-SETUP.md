# Subscription System - Setup Checklist

## What's Already Implemented ✓
- Subscribe form in top banner
- Subscribe form on /subscribe page
- API routes for subscription and notifications
- Management scripts (check subscribers, notify, add subscriber)
- JSON file storage for subscribers
- Email templates with teal theme (#0d7377)

## Required Steps to Go Live

### 1. Set Up Resend Account
- [ ] Sign up at https://resend.com
- [ ] Get your API key from Dashboard → API Keys
- [ ] For production: Verify your domain in Resend
  - Add DNS records they provide
  - Wait for verification (~24 hours)

### 2. Configure Environment Variables
Create `.env.local` file in project root:

```bash
# Get from https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Generate with: openssl rand -hex 32
NOTIFY_SECRET=your_random_secret_here

# Local development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production (add to Vercel environment variables):
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
NOTIFY_SECRET=your_production_secret
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 3. Update Email Sender Domain
In both API route files, change the sender email:

**Files to update:**
- `src/app/api/subscribe/route.js` (line 31)
- `src/app/api/notify-subscribers/route.js` (line 43)

Change from:
```js
from: 'Bryce Lloyd <noreply@yourdomain.com>'
```

To your verified domain:
```js
from: 'Bryce Lloyd <noreply@brycellog.com>'
```

### 4. Test Locally
```bash
# Start dev server
npm run dev

# Test subscription (use your real email)
# Go to http://localhost:3001 and subscribe

# Check if subscriber was added
npm run subscribers

# Test notification
npm run notify -- "Test Post" "Immunology" "test-slug" "This is a test"
```

### 5. Deploy to Production
```bash
# Add environment variables in Vercel dashboard
# Push to GitHub (triggers deployment)
git push origin main

# After deployment, test with real email
```

## Usage Commands

```bash
# View all subscribers
npm run subscribers

# Send notification manually
npm run notify -- "Post Title" "Topic" "slug" "Optional preview"

# Add subscriber manually (for testing)
npm run add-subscriber -- test@example.com
```

## Notes

- **Development Mode**: Resend only sends to verified email addresses
- **Production Mode**: Requires verified domain
- **Rate Limits**: Free tier = 100 emails/day, 3,000/month
- **Subscriber Data**: Stored in `data/subscribers.json` (not in git)

## Future Enhancements (Optional)

- [ ] Add unsubscribe functionality
- [ ] Upgrade from JSON to database (when >100 subscribers)
- [ ] Add topic-specific subscriptions
- [ ] Implement email preferences
- [ ] Add analytics for open/click rates
