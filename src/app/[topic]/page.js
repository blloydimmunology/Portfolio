import { notFound } from 'next/navigation';
import TopBanner from '@/components/TopBanner';
import PostList from '@/components/PostList';
import Footer from '@/components/Footer';
import {
  getPostsByTopic,
  getAllTopics,
  getSubtopicsByTopic
} from '@/utils/PostLoader';

export async function generateStaticParams() {
  const topics = await getAllTopics();
  return topics.map(topic => ({
    topic: topic.toLowerCase()
  }));
}

export async function generateMetadata({ params }) {
  const { topic } = await params;
  const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);

  return {
    title: "Bryce's Journal",
    description: `Browse all posts about ${topicTitle}`,
  };
}

export default async function TopicPage({ params }) {
  const { topic } = await params;
  const posts = await getPostsByTopic(topic);

  if (!posts || posts.length === 0) {
    notFound();
  }

  const subtopics = await getSubtopicsByTopic(topic);
  const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);

  return (
    <>
      <TopBanner currentTopic={topic} />

      <main className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-[28px] font-semibold text-primary-text text-center mb-3 font-serif">
            {topicTitle}
          </h2>
          <p className="text-secondary-text text-center text-sm">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'}
          </p>
        </div>

        <PostList posts={posts} subtopics={subtopics} />
      </main>

      <Footer />
    </>
  );
}
