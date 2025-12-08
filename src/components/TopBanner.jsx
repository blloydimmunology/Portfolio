import Link from 'next/link';
import SearchBar from './SearchBar';
import { siteConfig } from '@/config/site';
import { getAllTopics, getAllPosts } from '@/utils/PostLoader';
import { getTopicConfig } from '@/config/topics';

export default async function TopBanner({ currentTopic }) {
  const topics = await getAllTopics();
  const allPosts = await getAllPosts();

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200/60 shadow-sm">
      {/* Top row: Menu, Logo, Subscribe */}
      <div className="border-b border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="w-10" /> {/* Spacer for symmetry */}

          <Link href="/" className="block group">
            <h1 className="text-2xl font-bold text-neutral-900 tracking-tight group-hover:text-blue-900 transition-colors">
              {siteConfig.title}
            </h1>
          </Link>

          <Link
            href="/subscribe"
            className="px-5 py-2.5 bg-blue-900 text-white text-sm font-semibold rounded-md hover:bg-blue-800 transition-all hover:shadow-md"
          >
            Subscribe
          </Link>
        </div>
      </div>

      {/* Topic navigation row */}
      <div className="py-5 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {topics.map(topic => {
              const config = getTopicConfig(topic);
              const isActive = currentTopic?.toLowerCase() === topic.toLowerCase();
              return (
                <Link
                  key={topic}
                  href={`/${topic.toLowerCase()}`}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap
                    transition-all duration-200
                    ${
                      isActive
                        ? 'bg-blue-900 text-white shadow-md'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/60 hover:border-neutral-300 hover:shadow-sm'
                    }
                  `}
                >
                  <span className="text-base">{config.icon}</span>
                  {topic}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="py-4 bg-neutral-50/50">
        <div className="max-w-2xl mx-auto px-6">
          <SearchBar allPosts={allPosts} />
        </div>
      </div>
    </header>
  );
}
