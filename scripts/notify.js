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
