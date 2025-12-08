'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchBar({ allPosts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(term.toLowerCase()) ||
      post.preview.toLowerCase().includes(term.toLowerCase()) ||
      post.topic.toLowerCase().includes(term.toLowerCase())
    );

    setResults(filtered);
    setShowResults(true);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => searchTerm.length >= 2 && setShowResults(true)}
        placeholder="Search posts..."
        className="w-full px-4 py-2 border border-divider text-sm text-primary-text placeholder:text-tertiary-text focus:outline-none focus:border-primary-accent transition-colors duration-200"
      />

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-divider max-h-96 overflow-y-auto z-50">
          {results.map(post => (
            <Link
              key={post.slug}
              href={`/${post.topic.toLowerCase()}/${post.slug}`}
              className="block px-4 py-3 border-b border-divider last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => {
                setShowResults(false);
                setSearchTerm('');
              }}
            >
              <h4 className="text-sm font-semibold text-primary-text mb-1">
                {post.title}
              </h4>
              <p className="text-xs text-secondary-text">
                {post.topic} • {post.date}
              </p>
            </Link>
          ))}
        </div>
      )}

      {showResults && results.length === 0 && searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-divider p-4 z-50">
          <p className="text-sm text-secondary-text">No posts found</p>
        </div>
      )}
    </div>
  );
}
