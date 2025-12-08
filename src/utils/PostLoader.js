import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/posts');

// Ensure posts directory exists
function ensurePostsDirectory() {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    fs.mkdirSync(POSTS_DIRECTORY, { recursive: true });
  }
}

// Get all posts across all topics
export async function getAllPosts() {
  ensurePostsDirectory();

  try {
    const fileNames = fs.readdirSync(POSTS_DIRECTORY);

    const posts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(POSTS_DIRECTORY, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          content,
          title: data.title || 'Untitled',
          date: data.date || '',
          preview: data.preview || '',
          topic: data.topic || 'Uncategorized',
          subtopics: data.subtopics || [],
          image: data.image || '',
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return posts;
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

// Get all unique topics
export async function getAllTopics() {
  const posts = await getAllPosts();
  const topics = [...new Set(posts.map(post => post.topic))];
  return topics.sort();
}

// Get posts filtered by topic
export async function getPostsByTopic(topic) {
  const posts = await getAllPosts();
  return posts.filter(
    post => post.topic.toLowerCase() === topic.toLowerCase()
  );
}

// Get all subtopics for a specific topic
export async function getSubtopicsByTopic(topic) {
  const posts = await getPostsByTopic(topic);
  const subtopics = new Set();

  posts.forEach(post => {
    post.subtopics.forEach(subtopic => subtopics.add(subtopic));
  });

  return Array.from(subtopics).sort();
}

// Get single post by topic and slug
export async function getPost(topic, slug) {
  const posts = await getAllPosts();
  return posts.find(
    post =>
      post.topic.toLowerCase() === topic.toLowerCase() &&
      post.slug === slug
  );
}

// Search posts by query
export async function searchPosts(query) {
  const posts = await getAllPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(
    post =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.preview.toLowerCase().includes(lowerQuery) ||
      post.topic.toLowerCase().includes(lowerQuery)
  );
}
