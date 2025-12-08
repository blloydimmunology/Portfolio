import Link from 'next/link';
import SearchButton from './SearchButton';
import { siteConfig } from '@/config/site';
import { getAllTopics, getAllPosts } from '@/utils/PostLoader';

export default async function TopBanner({ currentTopic }) {
  const topics = await getAllTopics();
  const allPosts = await getAllPosts();

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-divider">
      {/* Top row: Title centered, Search + Subscribe on right */}
      <div className="border-b border-divider">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-center relative">
            <Link href="/" className="block group">
              <h1 className="text-[32px] font-semibold text-primary-text font-serif tracking-tight group-hover:text-primary-accent transition-colors duration-200">
                {siteConfig.title}
              </h1>
            </Link>

            <div className="absolute right-0 flex items-center gap-3">
              <SearchButton allPosts={allPosts} />
              <Link
                href="/subscribe"
                className="px-6 py-3 bg-primary-accent text-white text-sm font-medium hover:bg-primary-accent-hover transition-colors duration-200"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Topic navigation row - centered */}
      <div className="py-5">
        <div className="flex items-center justify-center gap-6 flex-wrap px-6">
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
    </header>
  );
}
