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
