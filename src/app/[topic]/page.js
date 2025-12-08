import { notFound } from 'next/navigation';
import TopBanner from '@/components/TopBanner';
import PostList from '@/components/PostList';
import Footer from '@/components/Footer';
import {
  getPostsByTopic,
  getAllTopics,
  getSubtopicsByTopic
} from '@/utils/PostLoader';

// Generate static params for all topics
export async function generateStaticParams() {
  const topics = await getAllTopics();
  return topics.map(topic => ({
    topic: topic.toLowerCase()
  }));
}

// Generate metadata for each topic page
export async function generateMetadata({ params }) {
  const { topic } = params;
  const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);

  return {
    title: topicTitle,
    description: `Browse all posts about ${topicTitle}`,
  };
}

export default async function TopicPage({ params }) {
  const { topic } = params;

  // Get posts for this topic
  const posts = await getPostsByTopic(topic);

  // If no posts found, show 404
  if (!posts || posts.length === 0) {
    notFound();
  }

  // Get subtopics for filtering
  const subtopics = await getSubtopicsByTopic(topic);

  // Capitalize topic for display
  const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);

  return (
    <>
      <TopBanner currentTopic={topic} />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <PostList posts={posts} subtopics={subtopics} />
      </main>

      <Footer />
    </>
  );
}
