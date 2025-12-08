'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchBar({ allPosts }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);

    if (searchQuery.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const filtered = allPosts.filter(
      post =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.preview.toLowerCase().includes(lowerQuery) ||
        post.topic.toLowerCase().includes(lowerQuery)
    );

    setResults(filtered.slice(0, 5)); // Limit to 5 results
    setIsOpen(filtered.length > 0);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search articles..."
          className="w-full px-5 py-2.5 border border-neutral-200/60 rounded-md text-sm text-center
                     bg-white shadow-sm
                     focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900/20
                     transition-all placeholder:text-neutral-400"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Results dropdown */}
          <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-lg z-20 max-h-96 overflow-y-auto">
            {results.map(post => (
              <Link
                key={post.slug}
                href={`/${post.topic.toLowerCase()}/${post.slug}`}
                onClick={handleClear}
                className="block px-5 py-3.5 hover:bg-neutral-50 transition-colors border-b border-neutral-100 last:border-b-0 group"
              >
                <div className="text-sm font-semibold text-neutral-900 mb-1.5 group-hover:text-blue-900 transition-colors">
                  {post.title}
                </div>
                <div className="text-xs font-medium text-blue-700 uppercase tracking-wider mb-1">
                  {post.topic}
                </div>
                <div className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                  {post.preview}
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
