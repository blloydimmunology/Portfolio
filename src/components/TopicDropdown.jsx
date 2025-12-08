'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TopicDropdown({ topics, currentTopic }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-medium text-blue-900 hover:text-blue-700 transition-colors"
      >
        Topics ▼
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close dropdown */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown menu */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-blue-100 rounded shadow-sm z-20 min-w-[200px]">
            {topics.map(topic => (
              <Link
                key={topic}
                href={`/${topic.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-4 py-2 text-sm text-center
                  hover:bg-blue-50 transition-colors
                  ${
                    currentTopic?.toLowerCase() === topic.toLowerCase()
                      ? 'bg-blue-50 font-semibold text-blue-900'
                      : 'text-neutral-700'
                  }
                `}
              >
                {topic}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
