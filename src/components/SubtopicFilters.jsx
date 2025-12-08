'use client';

import { useState } from 'react';

export default function SubtopicFilters({ subtopics, onFilter }) {
  const [activeSubtopic, setActiveSubtopic] = useState('all');

  const handleClick = (subtopic) => {
    setActiveSubtopic(subtopic);
    onFilter(subtopic);
  };

  if (!subtopics || subtopics.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 flex gap-3 justify-center flex-wrap">
      <button
        onClick={() => handleClick('all')}
        className={`
          px-4 py-2 text-sm font-medium transition-colors duration-200
          border
          ${
            activeSubtopic === 'all'
              ? 'border-primary-accent text-primary-accent'
              : 'border-divider text-secondary-text hover:border-primary-accent hover:text-primary-accent'
          }
        `}
      >
        All
      </button>
      {subtopics.map(subtopic => (
        <button
          key={subtopic}
          onClick={() => handleClick(subtopic)}
          className={`
            px-4 py-2 text-sm font-medium transition-colors duration-200
            border
            ${
              activeSubtopic === subtopic
                ? 'border-primary-accent text-primary-accent'
                : 'border-divider text-secondary-text hover:border-primary-accent hover:text-primary-accent'
            }
          `}
        >
          {subtopic}
        </button>
      ))}
    </div>
  );
}
