import Link from 'next/link';
import SearchBar from './SearchBar';
import { siteConfig } from '@/config/site';
import { getAllTopics, getAllPosts } from '@/utils/PostLoader';
import { getTopicConfig } from '@/config/topics';

export default async function TopBanner({ currentTopic }) {
  const topics = await getAllTopics();
  const allPosts = await getAllPosts();

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-divider">
      {/* Top row: Menu, Logo, Subscribe */}
      <div className="border-b border-divider">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="w-10" /> {/* Spacer for symmetry */}

          <Link href="/" className="block group">
            <h1 className="text-[32px] font-semibold text-primary-text font-serif tracking-tight group-hover:text-primary-accent transition-colors duration-200">
              {siteConfig.title}
            </h1>
          </Link>

          <Link
            href="/subscribe"
            className="px-6 py-3 bg-primary-accent text-white text-sm font-medium hover:bg-primary-accent-hover transition-colors duration-200"
          >
            Subscribe
          </Link>
        </div>
      </div>

      {/* Topic navigation row */}
      <div className="py-5 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {topics.map(topic => {
              const isActive = currentTopic?.toLowerCase() === topic.toLowerCase();
              return (
                <Link
                  key={topic}
                  href={`/${topic.toLowerCase()}`}
                  className={`
                    px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200
                    border-b-2
                    ${
                      isActive
                        ? 'text-primary-accent border-primary-accent'
                        : 'text-secondary-text border-transparent hover:text-primary-accent hover:border-divider'
                    }
                  `}
                >
                  {topic}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="py-4 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <SearchBar allPosts={allPosts} />
        </div>
      </div>
    </header>
  );
}
