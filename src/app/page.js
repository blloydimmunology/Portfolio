import { redirect } from 'next/navigation';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  // Redirect to default topic
  const defaultTopicSlug = siteConfig.defaultTopic.toLowerCase();
  redirect(`/${defaultTopicSlug}`);
}
