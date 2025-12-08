import { notFound } from 'next/navigation';
import TopBanner from '@/components/TopBanner';
import BlogPost from '@/components/BlogPost';
import Footer from '@/components/Footer';
import { getPost, getAllPosts } from '@/utils/PostLoader';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(post => ({
    topic: post.topic.toLowerCase(),
    slug: post.slug
  }));
}

export async function generateMetadata({ params }) {
  const { topic, slug } = await params;
  const post = await getPost(topic, slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: "Bryce's Journal",
    description: post.preview,
  };
}

export default async function PostPage({ params }) {
  const { topic, slug } = await params;
  const post = await getPost(topic, slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <TopBanner currentTopic={topic} />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <BlogPost post={post} />
      </main>

      <Footer />
    </>
  );
}
