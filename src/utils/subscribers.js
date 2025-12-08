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
