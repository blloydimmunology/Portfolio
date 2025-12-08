# Neo-Academic Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform medical blog from beginner card-grid aesthetic to professional, editorial design inspired by Nautilus Magazine.

**Architecture:** Systematic component-by-component transformation maintaining all functionality while elevating visual sophistication. Start with foundational changes (typography, colors) then rebuild components using new design system.

**Tech Stack:** Next.js 15, Tailwind CSS, Google Fonts (Crimson Text + Inter), react-markdown

---

## Task 1: Typography Foundation

**Files:**
- Modify: `src/app/layout.js` (add Google Fonts)
- Modify: `tailwind.config.mjs` (extend font families)
- Modify: `src/app/globals.css` (update base styles)

**Step 1: Add Google Fonts to layout**

Edit `src/app/layout.js`:

```javascript
import { Inter, Crimson_Text } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter'
});

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-crimson'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonText.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Step 2: Update Tailwind config**

Edit `tailwind.config.mjs`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          text: '#1a1a1a',
          accent: '#0d7377',
          'accent-hover': '#0a5c5f',
          'accent-light': '#e0f2f1',
        },
        secondary: {
          text: '#525252',
        },
        tertiary: {
          text: '#737373',
        },
        divider: '#e5e5e5',
      },
    },
  },
  plugins: [],
};
```

**Step 3: Update global styles**

Edit `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white text-primary-text font-sans;
    font-feature-settings: "liga" 1, "kern" 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

**Step 4: Test the build**

Run: `npm run dev`
Expected: Dev server starts, fonts load correctly
Verify: Open browser, check that Inter and Crimson Text are loading

**Step 5: Commit**

```bash
git add src/app/layout.js tailwind.config.mjs src/app/globals.css
git commit -m "feat: add typography foundation with Crimson Text and Inter fonts

- Add Google Fonts (Crimson Text for headlines, Inter for body)
- Configure Tailwind with font families and custom color palette
- Update global styles with new design tokens

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: TopBanner - Remove Decorative Effects

**Files:**
- Modify: `src/components/TopBanner.jsx`

**Step 1: Remove backdrop blur, shadows, and update structure**

Edit `src/components/TopBanner.jsx`:

```jsx
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
```

**Step 2: Test in browser**

Run: `npm run dev`
Expected: Header renders with clean, flat design
Verify:
- No backdrop blur
- No shadows
- No rounded corners on subscribe button
- Topic links have bottom border on active state
- No emoji icons

**Step 3: Commit**

```bash
git add src/components/TopBanner.jsx
git commit -m "refactor: simplify TopBanner to flat, editorial design

- Remove backdrop blur, shadows, rounded corners
- Change topic navigation from pills to text links with bottom borders
- Remove emoji icons from topics
- Apply new color palette and typography
- Simplify hover effects to color transitions only

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: SearchBar - Minimal Styling

**Files:**
- Modify: `src/components/SearchBar.jsx`

**Step 1: Simplify SearchBar styling**

Edit `src/components/SearchBar.jsx`:

```jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SearchBar({ allPosts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term.trim() === '') {
      setResults([]);
      setShowResults(false);
      return;
    }

    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(term.toLowerCase()) ||
      post.preview.toLowerCase().includes(term.toLowerCase())
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
        onFocus={() => searchTerm && setShowResults(true)}
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
```

**Step 2: Test search functionality**

Run: `npm run dev`
Expected: Search bar renders with minimal styling
Verify:
- No rounded corners
- Simple border that changes to teal on focus
- Clean dropdown results (no shadows)

**Step 3: Commit**

```bash
git add src/components/SearchBar.jsx
git commit -m "refactor: simplify SearchBar with minimal flat design

- Remove rounded corners
- Change focus state to simple border color change
- Remove shadows from dropdown
- Apply new color palette

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 4: PostCard - Transform to Editorial Style

**Files:**
- Modify: `src/components/PostCard.jsx`

**Step 1: Rebuild PostCard with minimal design**

Edit `src/components/PostCard.jsx`:

```jsx
import Link from 'next/link';

export default function PostCard({ post }) {
  const postUrl = `/${post.topic.toLowerCase()}/${post.slug}`;

  return (
    <Link href={postUrl} className="block group">
      <article className="bg-white overflow-hidden border border-divider hover:border-primary-accent transition-colors duration-200 h-full flex flex-col">
        {/* Image or placeholder */}
        {post.image ? (
          <div className="w-full aspect-[16/9] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full aspect-[16/9] bg-primary-accent-light flex items-center justify-center">
            <span className="text-5xl font-serif text-primary-accent opacity-30">
              {post.topic.charAt(0)}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3 text-sm">
            <span className="text-secondary-text">{post.date}</span>
            <span className="text-tertiary-text">•</span>
            <span className="text-xs uppercase tracking-wider text-primary-accent font-medium" style={{ letterSpacing: '0.05em' }}>
              {post.topic}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-primary-text mb-3 leading-snug group-hover:text-primary-accent transition-colors duration-200 font-serif">
            {post.title}
          </h3>

          <p className="text-[15px] text-secondary-text leading-relaxed mb-4 flex-1" style={{ lineHeight: '1.6' }}>
            {post.preview}
          </p>

          {post.subtopics && post.subtopics.length > 0 && (
            <div className="flex gap-2 flex-wrap pt-3 border-t border-divider text-xs text-tertiary-text">
              {post.subtopics.slice(0, 3).map((subtopic, index) => (
                <span key={subtopic}>
                  {subtopic}
                  {index < Math.min(post.subtopics.length, 3) - 1 && ' |'}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
```

**Step 2: Test PostCard rendering**

Run: `npm run dev`
Expected: Post cards render with clean, editorial style
Verify:
- No rounded corners
- No shadows
- Simple border that changes color on hover
- No hover animations (no translateY, no image scale)
- Placeholder shows topic initial letter, no emoji
- Subtopics displayed as text with separators

**Step 3: Commit**

```bash
git add src/components/PostCard.jsx
git commit -m "refactor: transform PostCard to editorial magazine style

- Remove rounded corners, shadows, and hover animations
- Replace emoji placeholder with topic initial letter
- Change subtopic pills to simple text with separators
- Apply serif font to titles
- Use new color palette throughout
- Simple border hover effect only

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 5: PostList - Increase Grid Spacing

**Files:**
- Modify: `src/components/PostList.jsx`

**Step 1: Update grid gap and styling**

Edit `src/components/PostList.jsx`:

```jsx
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
```

**Step 2: Test grid layout**

Run: `npm run dev`
Expected: Grid has more generous spacing (32px gap)
Verify: Cards are spaced farther apart, creating a more refined gallery feel

**Step 3: Commit**

```bash
git add src/components/PostList.jsx
git commit -m "refactor: increase grid spacing for refined layout

- Change gap from 6 (24px) to 8 (32px)
- Update text colors to new palette

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 6: SubtopicFilters - Minimal Button Style

**Files:**
- Modify: `src/components/SubtopicFilters.jsx`

**Step 1: Rebuild with minimal design**

Edit `src/components/SubtopicFilters.jsx`:

```jsx
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
```

**Step 2: Test subtopic filtering**

Run: `npm run dev`
Expected: Filters render as minimal bordered buttons
Verify:
- No rounded corners
- No background fills
- Simple border and text color changes
- Clean hover states

**Step 3: Commit**

```bash
git add src/components/SubtopicFilters.jsx
git commit -m "refactor: simplify SubtopicFilters with minimal button design

- Remove rounded corners and background fills
- Use simple border and text color states
- Apply new color palette
- Clean hover transitions

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 7: BlogPost - Article Typography

**Files:**
- Modify: `src/components/BlogPost.jsx`

**Step 1: Update BlogPost component with editorial typography**

Edit `src/components/BlogPost.jsx`:

```jsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function BlogPost({ post }) {
  return (
    <article className="max-w-[680px] mx-auto">
      {/* Header */}
      <header className="mb-12">
        <p className="text-xs uppercase tracking-wider text-primary-accent font-medium mb-4" style={{ letterSpacing: '0.05em' }}>
          {post.topic}
        </p>

        <h1 className="text-4xl font-semibold text-primary-text mb-4 font-serif" style={{ lineHeight: '1.3' }}>
          {post.title}
        </h1>

        <div className="text-sm text-secondary-text mb-8">
          {post.date}
        </div>

        {post.subtopics && post.subtopics.length > 0 && (
          <>
            <div className="border-t border-divider my-8" />
            <div className="flex gap-2 flex-wrap text-sm text-tertiary-text">
              {post.subtopics.map((subtopic, index) => (
                <span key={subtopic}>
                  {subtopic}
                  {index < post.subtopics.length - 1 && ' |'}
                </span>
              ))}
            </div>
          </>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4 font-serif" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-semibold text-primary-text mt-8 mb-3 font-serif" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-base text-primary-text mb-6" style={{ lineHeight: '1.7' }} {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-primary-accent underline hover:text-primary-accent-hover transition-colors duration-200" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="mb-6 space-y-2 text-primary-text" style={{ lineHeight: '1.7' }} {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="mb-6 space-y-2 text-primary-text" style={{ lineHeight: '1.7' }} {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-[3px] border-primary-accent pl-6 italic text-secondary-text my-6" {...props} />
            ),
            code: ({ node, inline, ...props }) =>
              inline ? (
                <code className="bg-gray-100 px-1.5 py-0.5 text-sm font-mono" {...props} />
              ) : (
                <code className="block bg-gray-100 p-4 text-sm font-mono overflow-x-auto my-6" {...props} />
              ),
            img: ({ node, ...props }) => (
              <img className="w-full my-6" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
```

**Step 2: Test article rendering**

Run: `npm run dev`
Navigate to: Any blog post
Expected: Article displays with refined typography
Verify:
- Serif headlines
- Comfortable reading width (680px)
- Generous line-height (1.7)
- Proper heading hierarchy
- Blockquotes with left teal border
- Clean link styling

**Step 3: Commit**

```bash
git add src/components/BlogPost.jsx
git commit -m "refactor: apply editorial typography to blog posts

- Use serif font for all headings
- Set optimal reading width (680px)
- Apply generous line-height (1.7) for body text
- Style blockquotes with teal left border
- Update all typography to match design system
- Remove prose classes in favor of custom styling

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 8: Topic Page Layout

**Files:**
- Modify: `src/app/[topic]/page.js`

**Step 1: Update container width and spacing**

Edit `src/app/[topic]/page.js`:

```jsx
import { notFound } from 'next/navigation';
import TopBanner from '@/components/TopBanner';
import PostList from '@/components/PostList';
import Footer from '@/components/Footer';
import { getAllTopics, getPostsByTopic } from '@/utils/PostLoader';
import { getTopicConfig } from '@/config/topics';

export async function generateStaticParams() {
  const topics = await getAllTopics();
  return topics.map(topic => ({
    topic: topic.toLowerCase()
  }));
}

export async function generateMetadata({ params }) {
  const { topic } = params;
  const config = getTopicConfig(topic);

  return {
    title: `${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles`,
    description: config.description || `Articles about ${topic}`,
  };
}

export default async function TopicPage({ params }) {
  const { topic } = params;

  const posts = await getPostsByTopic(topic);

  if (!posts || posts.length === 0) {
    notFound();
  }

  const subtopics = [...new Set(posts.flatMap(post => post.subtopics || []))];

  return (
    <>
      <TopBanner currentTopic={topic} />

      <main className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-[28px] font-semibold text-primary-text text-center mb-3 font-serif">
            {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </h2>
          <p className="text-secondary-text text-center text-sm">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'}
          </p>
        </div>

        <PostList posts={posts} subtopics={subtopics} />
      </main>

      <Footer />
    </>
  );
}
```

**Step 2: Test topic page**

Run: `npm run dev`
Navigate to: Any topic page
Expected:
- Container width is 1200px
- Generous padding (64px vertical)
- Topic heading uses serif font

**Step 3: Commit**

```bash
git add src/app/[topic]/page.js
git commit -m "refactor: update topic page layout and spacing

- Increase container width to 1200px
- Add generous vertical spacing (py-16)
- Apply serif font to topic heading
- Use new color palette

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 9: Individual Post Page Layout

**Files:**
- Modify: `src/app/[topic]/[slug]/page.js`

**Step 1: Update post page spacing**

Edit `src/app/[topic]/[slug]/page.js`:

```jsx
import { notFound } from 'next/navigation';
import TopBanner from '@/components/TopBanner';
import BlogPost from '@/components/BlogPost';
import Footer from '@/components/Footer';
import { getPost, getAllPosts } from '@/utils/PostLoader';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(post => ({
    topic: post.topic.toLowerCase(),
    slug: post.slug
  }));
}

export async function generateMetadata({ params }) {
  const { topic, slug } = params;
  const post = await getPost(topic, slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.preview,
  };
}

export default async function PostPage({ params }) {
  const { topic, slug } = params;
  const post = await getPost(topic, slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <TopBanner currentTopic={topic} />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <BlogPost post={post} />
      </main>

      <Footer />
    </>
  );
}
```

**Step 2: Test post page**

Run: `npm run dev`
Navigate to: Any individual post
Expected: Post has generous padding (64px vertical)

**Step 3: Commit**

```bash
git add src/app/[topic]/[slug]/page.js
git commit -m "refactor: update post page spacing

- Increase vertical padding to py-16 (64px)
- Ensure comfortable reading experience

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 10: Footer Component

**Files:**
- Modify: `src/components/Footer.jsx`

**Step 1: Simplify Footer design**

Edit `src/components/Footer.jsx`:

```jsx
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-divider mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-sm text-secondary-text mb-3">
            © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center text-sm">
            <Link href="/about" className="text-secondary-text hover:text-primary-accent transition-colors duration-200">
              About
            </Link>
            <Link href="/subscribe" className="text-secondary-text hover:text-primary-accent transition-colors duration-200">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Test footer**

Run: `npm run dev`
Expected: Footer renders with minimal styling

**Step 3: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "refactor: simplify Footer with minimal design

- Apply new color palette
- Use clean border separator
- Simple centered layout

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 11: About Page Styling

**Files:**
- Modify: `src/app/about/page.js`

**Step 1: Update About page typography**

Edit `src/app/about/page.js`:

```jsx
import TopBanner from '@/components/TopBanner';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'About',
  description: `About ${siteConfig.title}`,
};

export default function AboutPage() {
  return (
    <>
      <TopBanner />

      <main className="max-w-[680px] mx-auto px-6 py-16">
        <article>
          <h1 className="text-4xl font-semibold text-primary-text mb-6 font-serif" style={{ lineHeight: '1.3' }}>
            About
          </h1>

          <div className="space-y-6 text-base text-primary-text" style={{ lineHeight: '1.7' }}>
            <p>
              Welcome to {siteConfig.title}, a collection of articles exploring topics in medicine,
              biology, and the life sciences.
            </p>

            <p>
              This site is maintained by {siteConfig.author}, focusing on making complex scientific
              concepts accessible and engaging for a broad audience.
            </p>

            <p>
              The articles here cover a range of subjects from immunology to cardiology,
              biochemistry to public health. Each piece aims to combine scientific rigor
              with clear, readable prose.
            </p>

            <h2 className="text-2xl font-semibold text-primary-text mt-12 mb-4 font-serif">
              Get in Touch
            </h2>

            <p>
              Interested in staying updated? <a href="/subscribe" className="text-primary-accent underline hover:text-primary-accent-hover transition-colors duration-200">Subscribe</a> to
              receive new articles via email.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
```

**Step 2: Test About page**

Run: `npm run dev`
Navigate to: /about
Expected: About page uses editorial typography

**Step 3: Commit**

```bash
git add src/app/about/page.js
git commit -m "refactor: apply editorial typography to About page

- Use serif font for headings
- Apply optimal reading width (680px)
- Use generous line-height (1.7)
- Apply new color palette

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 12: Subscribe Page Styling

**Files:**
- Check if `src/app/subscribe/page.js` exists
- Create or modify as needed

**Step 1: Create/update Subscribe page**

Create `src/app/subscribe/page.js` (if it doesn't exist):

```jsx
import TopBanner from '@/components/TopBanner';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Subscribe',
  description: `Subscribe to ${siteConfig.title}`,
};

export default function SubscribePage() {
  return (
    <>
      <TopBanner />

      <main className="max-w-[680px] mx-auto px-6 py-16">
        <article className="text-center">
          <h1 className="text-4xl font-semibold text-primary-text mb-6 font-serif" style={{ lineHeight: '1.3' }}>
            Subscribe
          </h1>

          <p className="text-base text-secondary-text mb-12" style={{ lineHeight: '1.7' }}>
            Get notified when new articles are published. No spam, unsubscribe anytime.
          </p>

          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-divider text-sm text-primary-text placeholder:text-tertiary-text focus:outline-none focus:border-primary-accent transition-colors duration-200"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-accent text-white text-sm font-medium hover:bg-primary-accent-hover transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-tertiary-text mt-6">
              By subscribing, you agree to receive email updates. You can unsubscribe at any time.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
```

**Step 2: Test Subscribe page**

Run: `npm run dev`
Navigate to: /subscribe
Expected: Clean, minimal subscription form

**Step 3: Commit**

```bash
git add src/app/subscribe/page.js
git commit -m "feat: create Subscribe page with minimal design

- Center-aligned layout with optimal reading width
- Simple form with clean styling
- Apply new color palette and typography
- No rounded corners or shadows

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 13: Homepage Redirect

**Files:**
- Modify: `src/app/page.js`

**Step 1: Ensure homepage redirects properly**

Edit `src/app/page.js`:

```jsx
import { redirect } from 'next/navigation';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  redirect(`/${siteConfig.defaultTopic.toLowerCase()}`);
}
```

**Step 2: Test homepage**

Run: `npm run dev`
Navigate to: / (root)
Expected: Redirects to default topic page

**Step 3: Commit**

```bash
git add src/app/page.js
git commit -m "chore: verify homepage redirect

Ensure homepage properly redirects to default topic

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 14: Remove Unused CSS

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Clean up globals.css**

Edit `src/app/globals.css` - remove unused utility classes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white text-primary-text font-sans;
    font-feature-settings: "liga" 1, "kern" 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

**Step 2: Verify no breaking changes**

Run: `npm run dev`
Expected: Site functions normally

**Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "chore: remove unused CSS utilities

- Remove card-hover class (no longer using hover animations)
- Keep only essential utilities

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 15: Build and Verify

**Files:**
- None (verification task)

**Step 1: Run production build**

Run: `npm run build`
Expected: Build completes successfully with no errors

**Step 2: Check for warnings**

Review build output for:
- Any TypeScript errors
- Any linting issues
- Any missing dependencies

**Step 3: Test production build locally**

Run: `npm start`
Navigate through:
- Homepage (should redirect)
- Topic pages (all topics)
- Individual post pages (sample posts)
- About page
- Subscribe page

Verify:
- All fonts loading correctly (Crimson Text + Inter)
- Colors match design system
- No visual glitches
- Responsive behavior works
- No console errors

**Step 4: Commit any fixes**

If any issues found, fix and commit:
```bash
git add [files]
git commit -m "fix: [description of fix]"
```

---

## Task 16: Update Documentation

**Files:**
- Modify: `CLAUDE.md`

**Step 1: Update CLAUDE.md with new design system**

Edit `CLAUDE.md` - update the "Design System" section:

```markdown
## Design System

### Colors (Teal Accent Theme)
```js
// Background
bg-white

// Text
text-primary-text        // #1a1a1a - Headings, primary
text-secondary-text      // #525252 - Body text
text-tertiary-text       // #737373 - Muted

// Interactive
bg-primary-accent        // #0d7377 - Links, active states
hover:bg-primary-accent-hover // #0a5c5f - Hover states
border-divider           // #e5e5e5 - Borders
bg-primary-accent-light  // #e0f2f1 - Light backgrounds
```

### Typography
```js
// Fonts
font-serif              // Crimson Text - Headlines
font-sans               // Inter - Body text

// Hierarchy
text-4xl font-serif     // Page titles (36px)
text-[32px] font-serif  // Site title (32px)
text-[28px] font-serif  // Section headings (28px)
text-2xl font-serif     // H2 in content (24px)
text-xl font-serif      // H3, Post card titles (20px)
text-base font-sans     // Body text (16px)
text-[15px] font-sans   // Post previews (15px)
text-sm font-sans       // Metadata, buttons (14px)
text-xs font-sans       // Labels (12px)
```

### Layout
```js
max-w-[1200px] mx-auto  // Main container (topic pages)
max-w-[680px] mx-auto   // Reading width (articles)
py-16                    // Page vertical padding (64px)
gap-8                    // Grid gap (32px)
```

### Design Rules

**DO:**
- ✅ Use serif font for all headings
- ✅ Use sans-serif for body text
- ✅ Keep line-height at 1.7 for readability
- ✅ Use simple borders (no shadows)
- ✅ Square corners (no border-radius)
- ✅ Generous whitespace
- ✅ Teal accent color for interactive elements

**DON'T:**
- ❌ Add rounded corners
- ❌ Add shadows or gradients
- ❌ Add hover animations (translateY, scale)
- ❌ Use emoji icons
- ❌ Add unnecessary visual effects
```

**Step 2: Commit documentation**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md with new design system

- Document new typography system (Crimson Text + Inter)
- Update color palette to teal accent theme
- Update layout specifications
- Clarify design rules

🤖 Generated with Claude Code

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Final Verification Checklist

Before completing implementation, verify:

- [ ] All fonts loading (Crimson Text + Inter)
- [ ] No rounded corners anywhere
- [ ] No box shadows
- [ ] No hover animations (translateY, scale, image zoom)
- [ ] All borders are simple 1px solid
- [ ] Teal accent color used consistently
- [ ] Topic navigation shows as text links with bottom borders
- [ ] Post cards have flat design with borders only
- [ ] Grid spacing is generous (32px)
- [ ] Article typography is comfortable (680px width, 1.7 line-height)
- [ ] All pages use new color palette
- [ ] Serif font on all headings
- [ ] Sans-serif font on all body text
- [ ] Build completes with no errors
- [ ] Site is responsive at all breakpoints
- [ ] No console errors

---

## Post-Implementation

After all tasks complete:

1. **Final build test**: `npm run build && npm start`
2. **Visual regression check**: Compare before/after screenshots
3. **Merge strategy**: Review all commits, consider squashing if needed
4. **REQUIRED**: Use @superpowers:finishing-a-development-branch to complete

---

**Plan Status**: Ready for execution
**Estimated Tasks**: 16 tasks
**Estimated Time**: 2-3 hours for methodical implementation
**Prerequisites**: Worktree created, dependencies installed

