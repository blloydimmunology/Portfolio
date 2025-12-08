import { notFound } from 'next/navigation';
import TopBanner from '@/components/TopBanner';
import BlogPost from '@/components/BlogPost';
import Footer from '@/components/Footer';
import { getPost, getAllPosts } from '@/utils/PostLoader';

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(post => ({
    topic: post.topic.toLowerCase(),
    slug: post.slug
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const { topic, slug } = params;
  const post = await getPost(topic, slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.preview,
  };
}

export default async function PostPage({ params }) {
  const { topic, slug } = params;

  // Get the post
  const post = await getPost(topic, slug);

  // If post not found, show 404
  if (!post) {
    notFound();
  }

  return (
    <>
      <TopBanner currentTopic={topic} />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <BlogPost post={post} />
      </main>

      <Footer />
    </>
  );
}
