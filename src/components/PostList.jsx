'use client';

import { useState } from 'react';
import PostCard from './PostCard';
import SubtopicFilters from './SubtopicFilters';

export default function PostList({ posts, subtopics }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleFilter = (subtopic) => {
    if (subtopic === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post =>
        post.subtopics.includes(subtopic)
      );
      setFilteredPosts(filtered);
    }
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-text">No posts found in this topic.</p>
      </div>
    );
  }

  return (
    <div>
      <SubtopicFilters subtopics={subtopics} onFilter={handleFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-secondary-text">No posts match this filter.</p>
        </div>
      )}
    </div>
  );
}
