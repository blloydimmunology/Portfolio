'use client';

import { useState } from 'react';

export default function SubtopicFilters({ subtopics, onFilter }) {
  const [selected, setSelected] = useState('all');

  const handleClick = (subtopic) => {
    setSelected(subtopic);
    onFilter(subtopic);
  };

  if (!subtopics || subtopics.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-3 justify-center flex-wrap mb-8">
      <button
        onClick={() => handleClick('all')}
        className={`
          text-xs px-4 py-2 rounded-full font-semibold whitespace-nowrap
          transition-all duration-200
          ${
            selected === 'all'
              ? 'bg-blue-900 text-white shadow-md'
              : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/60 hover:border-neutral-300 hover:shadow-sm'
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
            text-xs px-4 py-2 rounded-full font-semibold whitespace-nowrap
            transition-all duration-200
            ${
              selected === subtopic
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/60 hover:border-neutral-300 hover:shadow-sm'
            }
          `}
        >
          {subtopic}
        </button>
      ))}
    </div>
  );
}
