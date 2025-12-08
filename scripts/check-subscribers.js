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
