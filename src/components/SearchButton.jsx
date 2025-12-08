'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchButton({ allPosts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term.trim().length < 2) {
      setResults([]);
      return;
    }

    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(term.toLowerCase()) ||
      post.preview.toLowerCase().includes(term.toLowerCase()) ||
      post.topic.toLowerCase().includes(term.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 border border-divider text-sm font-medium text-primary-text hover:border-primary-accent transition-colors duration-200"
      >
        Search
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-96 bg-white border border-divider z-50 shadow-lg">
            <div className="p-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search posts..."
                className="w-full px-4 py-2 border border-divider text-sm text-primary-text placeholder:text-tertiary-text focus:outline-none focus:border-primary-accent transition-colors duration-200"
                autoFocus
              />
            </div>

            {results.length > 0 && (
              <div className="max-h-96 overflow-y-auto">
                {results.map(post => (
                  <Link
                    key={post.slug}
                    href={`/${post.topic.toLowerCase()}/${post.slug}`}
                    className="block px-4 py-3 border-t border-divider hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => {
                      setIsOpen(false);
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

            {searchTerm.length >= 2 && results.length === 0 && (
              <div className="px-4 py-3 border-t border-divider">
                <p className="text-sm text-secondary-text">No posts found</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
