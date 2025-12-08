# Medical Blog Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a topic-based medical/biology blog with Next.js, featuring centered clinical design, topic navigation, subtopic filtering, and search functionality.

**Architecture:** Next.js 15 App Router with Static Site Generation (SSG). Markdown content with frontmatter parsing. Client-side search and filtering. Centered layout with clinical blue aesthetic.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, gray-matter, react-markdown, remark-gfm, rehype-katex

---

## Design Reference

See `docs/plans/2025-12-07-medical-blog-design.md` for complete design specification.

**Key Design Principles:**
- Clinical clean aesthetic (blue-900 accents)
- ALL content center-aligned (not left-aligned)
- Topic-first navigation
- Minimal, professional design

---

## Task 1: Project Setup & Dependencies

**Files:**
- Create: `package.json`
- Create: `next.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `postcss.config.mjs`
- Create: `.gitignore`

**Step 1: Initialize Next.js project**

```bash
npx create-next-app@latest . --app --tailwind --no-src --import-alias "@/*"
```

When prompted:
- TypeScript? No
- ESLint? Yes
- Turbopack? No
- App Router? Yes
- Customize import alias? Yes (@/*)

**Step 2: Install additional dependencies**

```bash
npm install gray-matter react-markdown remark-gfm remark-math rehype-katex katex
```

**Step 3: Verify installation**

Run: `npm run dev`
Expected: Development server starts on http://localhost:3000

**Step 4: Stop dev server and commit**

```bash
git add .
git commit -m "chore: initialize Next.js project with dependencies"
```

---

## Task 2: Project Structure & Configuration

**Files:**
- Create: `src/config/site.js`
- Create: `src/content/posts/.gitkeep`
- Create: `public/blog-images/.gitkeep`
- Modify: `tailwind.config.mjs`
- Modify: `.gitignore`

**Step 1: Create directory structure**

```bash
mkdir -p src/config
mkdir -p src/content/posts
mkdir -p src/utils
mkdir -p src/components
mkdir -p public/blog-images
touch src/content/posts/.gitkeep
touch public/blog-images/.gitkeep
```

**Step 2: Create site configuration**

File: `src/config/site.js`

```javascript
export const siteConfig = {
  title: "Medical Blog",
  description: "A medical and biology focused blog",
  author: "Author Name",
  defaultTopic: "Immunology",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
}
```

**Step 3: Update Tailwind configuration**

File: `tailwind.config.mjs`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

**Step 4: Install typography plugin**

```bash
npm install @tailwindcss/typography
```

**Step 5: Update .gitignore**

File: `.gitignore`

Add these lines:
```
# Subscriber data (for future subscription feature)
data/subscribers.json

# Local env files
.env*.local
.env.production
```

**Step 6: Commit**

```bash
git add .
git commit -m "chore: setup project structure and configuration"
```

---

## Task 3: Global Styles & Layout

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.js`
- Delete: `src/app/page.js` (will recreate later)

**Step 1: Create global styles**

File: `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white text-neutral-700;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

**Step 2: Update root layout**

File: `src/app/layout.js`

```javascript
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

**Step 3: Delete existing page.js**

```bash
rm src/app/page.js
```

**Step 4: Verify setup**

Run: `npm run dev`
Expected: Error "page.js not found" (expected - we'll create it later)

**Step 5: Commit**

```bash
git add .
git commit -m "feat: add global styles and root layout with Inter font"
```

---

## Task 4: Post Loader Utility

**Files:**
- Create: `src/utils/PostLoader.js`

**Step 1: Create PostLoader utility**

File: `src/utils/PostLoader.js`

```javascript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/posts');

// Ensure posts directory exists
function ensurePostsDirectory() {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    fs.mkdirSync(POSTS_DIRECTORY, { recursive: true });
  }
}

// Get all posts across all topics
export async function getAllPosts() {
  ensurePostsDirectory();

  try {
    const fileNames = fs.readdirSync(POSTS_DIRECTORY);

    const posts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(POSTS_DIRECTORY, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          content,
          title: data.title || 'Untitled',
          date: data.date || '',
          preview: data.preview || '',
          topic: data.topic || 'Uncategorized',
          subtopics: data.subtopics || [],
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    return posts;
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

// Get all unique topics
export async function getAllTopics() {
  const posts = await getAllPosts();
  const topics = [...new Set(posts.map(post => post.topic))];
  return topics.sort();
}

// Get posts filtered by topic
export async function getPostsByTopic(topic) {
  const posts = await getAllPosts();
  return posts.filter(
    post => post.topic.toLowerCase() === topic.toLowerCase()
  );
}

// Get all subtopics for a specific topic
export async function getSubtopicsByTopic(topic) {
  const posts = await getPostsByTopic(topic);
  const subtopics = new Set();

  posts.forEach(post => {
    post.subtopics.forEach(subtopic => subtopics.add(subtopic));
  });

  return Array.from(subtopics).sort();
}

// Get single post by topic and slug
export async function getPost(topic, slug) {
  const posts = await getAllPosts();
  return posts.find(
    post =>
      post.topic.toLowerCase() === topic.toLowerCase() &&
      post.slug === slug
  );
}

// Search posts by query
export async function searchPosts(query) {
  const posts = await getAllPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(
    post =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.preview.toLowerCase().includes(lowerQuery) ||
      post.topic.toLowerCase().includes(lowerQuery)
  );
}
```

**Step 2: Verify no syntax errors**

```bash
node -c src/utils/PostLoader.js
```

Expected: No output (means no syntax errors)

**Step 3: Commit**

```bash
git add src/utils/PostLoader.js
git commit -m "feat: add PostLoader utility for content management"
```

---

## Task 5: Sample Blog Posts

**Files:**
- Create: `src/content/posts/immunology-basics.md`
- Create: `src/content/posts/vaccine-development.md`
- Create: `src/content/posts/cardiology-intro.md`

**Step 1: Create first sample post**

File: `src/content/posts/immunology-basics.md`

```markdown
---
title: "Introduction to Immunology"
date: "2025-01-15"
preview: "Understanding the basics of the immune system and how it protects the body from disease."
topic: "Immunology"
subtopics: ["Basics", "Cell Biology"]
---

## What is Immunology?

Immunology is the study of the immune system - the complex network of cells, tissues, and organs that work together to defend the body against harmful pathogens.

## Key Components

The immune system consists of several key components:

- **White Blood Cells**: The primary defenders against infection
- **Antibodies**: Proteins that recognize and neutralize foreign substances
- **Lymphatic System**: A network that transports immune cells

## How It Works

When a pathogen enters the body, the immune system responds through a coordinated series of events:

1. Recognition of the foreign invader
2. Activation of immune cells
3. Elimination of the threat
4. Development of immunological memory

## Conclusion

Understanding immunology is crucial for developing vaccines, treating autoimmune diseases, and improving overall health outcomes.
```

**Step 2: Create second sample post**

File: `src/content/posts/vaccine-development.md`

```markdown
---
title: "Modern Vaccine Development"
date: "2025-01-14"
preview: "An overview of how vaccines are developed, tested, and approved for public use."
topic: "Immunology"
subtopics: ["Vaccines", "Research Methods"]
---

## The Vaccine Development Process

Modern vaccine development follows a rigorous process to ensure safety and efficacy.

## Stages of Development

### Preclinical Testing

Before human trials, vaccines undergo extensive laboratory testing to identify promising candidates.

### Clinical Trials

The clinical trial process consists of three phases:

- **Phase 1**: Small group testing for safety
- **Phase 2**: Expanded testing for efficacy
- **Phase 3**: Large-scale trials for confirmation

### Approval and Monitoring

After successful trials, regulatory agencies review the data before granting approval.

## Recent Advances

New technologies like mRNA vaccines have revolutionized the speed and flexibility of vaccine development.
```

**Step 3: Create third sample post (different topic)**

File: `src/content/posts/cardiology-intro.md`

```markdown
---
title: "Understanding Heart Health"
date: "2025-01-13"
preview: "A beginner's guide to cardiovascular health and the basics of cardiology."
topic: "Cardiology"
subtopics: ["Basics", "Prevention"]
---

## The Heart and Cardiovascular System

The cardiovascular system is responsible for pumping blood throughout the body, delivering oxygen and nutrients to tissues.

## Key Concepts

### Heart Structure

The heart consists of four chambers:
- Two atria (upper chambers)
- Two ventricles (lower chambers)

### Cardiovascular Health

Maintaining heart health involves:

1. Regular exercise
2. Balanced nutrition
3. Stress management
4. Regular check-ups

## Common Conditions

Understanding common cardiovascular conditions helps in early detection and prevention.

## Prevention

Cardiovascular disease is largely preventable through lifestyle modifications and medical management.
```

**Step 4: Verify posts load correctly**

Test the PostLoader utility:

```bash
node -e "import('./src/utils/PostLoader.js').then(m => m.getAllPosts()).then(posts => console.log('Posts loaded:', posts.length))"
```

Expected: "Posts loaded: 3"

**Step 5: Commit**

```bash
git add src/content/posts/
git commit -m "feat: add sample blog posts for testing"
```

---

## Task 6: Homepage (Redirect to Default Topic)

**Files:**
- Create: `src/app/page.js`

**Step 1: Create homepage with redirect**

File: `src/app/page.js`

```javascript
import { redirect } from 'next/navigation';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  // Redirect to default topic
  const defaultTopicSlug = siteConfig.defaultTopic.toLowerCase();
  redirect(`/${defaultTopicSlug}`);
}
```

**Step 2: Verify redirect works**

Run: `npm run dev`
Visit: `http://localhost:3000`
Expected: Should redirect to `/immunology` (or 404 since we haven't created topic pages yet)

**Step 3: Commit**

```bash
git add src/app/page.js
git commit -m "feat: add homepage with redirect to default topic"
```

---

## Task 7: Topic Dropdown Component

**Files:**
- Create: `src/components/TopicDropdown.jsx`

**Step 1: Create TopicDropdown component**

File: `src/components/TopicDropdown.jsx`

```javascript
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
```

**Step 2: Verify no syntax errors**

```bash
node -c src/components/TopicDropdown.jsx
```

Expected: No output

**Step 3: Commit**

```bash
git add src/components/TopicDropdown.jsx
git commit -m "feat: add TopicDropdown navigation component"
```

---

## Task 8: Search Bar Component

**Files:**
- Create: `src/components/SearchBar.jsx`

**Step 1: Create SearchBar component**

File: `src/components/SearchBar.jsx`

```javascript
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
          className="w-full px-4 py-2 border border-blue-100 rounded text-sm text-center
                     focus:outline-none focus:border-blue-900 transition-colors"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
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
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-blue-100 rounded shadow-sm z-20 max-h-96 overflow-y-auto">
            {results.map(post => (
              <Link
                key={post.slug}
                href={`/${post.topic.toLowerCase()}/${post.slug}`}
                onClick={handleClear}
                className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-blue-50 last:border-b-0"
              >
                <div className="text-sm font-semibold text-blue-900 mb-1">
                  {post.title}
                </div>
                <div className="text-xs text-neutral-600 mb-1">
                  {post.topic}
                </div>
                <div className="text-xs text-neutral-500 line-clamp-2">
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
```

**Step 2: Verify no syntax errors**

```bash
node -c src/components/SearchBar.jsx
```

Expected: No output

**Step 3: Commit**

```bash
git add src/components/SearchBar.jsx
git commit -m "feat: add SearchBar component with real-time filtering"
```

---

## Task 9: Top Banner Component

**Files:**
- Create: `src/components/TopBanner.jsx`

**Step 1: Create TopBanner component**

File: `src/components/TopBanner.jsx`

```javascript
import Link from 'next/link';
import TopicDropdown from './TopicDropdown';
import SearchBar from './SearchBar';
import { siteConfig } from '@/config/site';
import { getAllTopics, getAllPosts } from '@/utils/PostLoader';

export default async function TopBanner({ currentTopic }) {
  const topics = await getAllTopics();
  const allPosts = await getAllPosts();

  return (
    <header className="border-b border-blue-100 py-8 bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="flex justify-center">
          <TopicDropdown topics={topics} currentTopic={currentTopic} />
        </div>

        <Link href="/" className="block">
          <h1 className="text-3xl font-bold text-blue-900 tracking-tight hover:text-blue-700 transition-colors">
            {siteConfig.title}
          </h1>
        </Link>

        <SearchBar allPosts={allPosts} />

        <div className="text-sm text-neutral-600">
          Subscribe feature coming soon
        </div>
      </div>
    </header>
  );
}
```

**Step 2: Verify no syntax errors**

```bash
node -c src/components/TopBanner.jsx
```

Expected: No output

**Step 3: Commit**

```bash
git add src/components/TopBanner.jsx
git commit -m "feat: add TopBanner with navigation, search, and branding"
```

---

## Task 10: Footer Component

**Files:**
- Create: `src/components/Footer.jsx`

**Step 1: Create Footer component**

File: `src/components/Footer.jsx`

```javascript
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-100 mt-16 pt-8 pb-10">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <div className="flex justify-center gap-6 text-sm">
          <Link
            href="/about"
            className="text-neutral-600 hover:text-blue-900 transition-colors"
          >
            About
          </Link>
        </div>

        <p className="text-xs text-neutral-500">
          © {currentYear} {siteConfig.author}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
```

**Step 2: Verify no syntax errors**

```bash
node -c src/components/Footer.jsx
```

Expected: No output

**Step 3: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: add Footer component"
```

---

## Task 11: Subtopic Filters Component

**Files:**
- Create: `src/components/SubtopicFilters.jsx`

**Step 1: Create SubtopicFilters component**

File: `src/components/SubtopicFilters.jsx`

```javascript
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
    <div className="flex gap-2 justify-center flex-wrap mb-8">
      <button
        onClick={() => handleClick('all')}
        className={`
          text-xs px-3 py-1 rounded transition-colors
          ${
            selected === 'all'
              ? 'bg-blue-900 text-white'
              : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
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
            text-xs px-3 py-1 rounded transition-colors
            ${
              selected === subtopic
                ? 'bg-blue-900 text-white'
                : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
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

**Step 2: Verify no syntax errors**

```bash
node -c src/components/SubtopicFilters.jsx
```

Expected: No output

**Step 3: Commit**

```bash
git add src/components/SubtopicFilters.jsx
git commit -m "feat: add SubtopicFilters component"
```

---

## Task 12: Post Card Component

**Files:**
- Create: `src/components/PostCard.jsx`

**Step 1: Create PostCard component**

File: `src/components/PostCard.jsx`

```javascript
import Link from 'next/link';

export default function PostCard({ post }) {
  const postUrl = `/${post.topic.toLowerCase()}/${post.slug}`;

  return (
    <Link href={postUrl} className="block">
      <article className="text-center border-b border-blue-100 pb-8 mb-8 hover:opacity-80 transition-opacity">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          {post.title}
        </h3>

        <p className="text-sm text-neutral-600 mb-3">
          {post.date} • {post.topic}
        </p>

        <p className="text-sm text-neutral-700 leading-relaxed mb-4 max-w-2xl mx-auto">
          {post.preview}
        </p>

        {post.subtopics && post.subtopics.length > 0 && (
          <div className="flex gap-2 justify-center flex-wrap">
            {post.subtopics.map(subtopic => (
              <span
                key={subtopic}
                className="text-xs px-2 py-1 bg-blue-50 text-blue-900 rounded"
              >
                {subtopic}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
```

**Step 2: Verify no syntax errors**

```bash
node -c src/components/PostCard.jsx
```

Expected: No output

**Step 3: Commit**

```bash
git add src/components/PostCard.jsx
git commit -m "feat: add PostCard component for post previews"
```

---

## Task 13: Post List Component

**Files:**
- Create: `src/components/PostList.jsx`

**Step 1: Create PostList component**

File: `src/components/PostList.jsx`

```javascript
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
        <p className="text-neutral-600">No posts found in this topic.</p>
      </div>
    );
  }

  return (
    <div>
      <SubtopicFilters subtopics={subtopics} onFilter={handleFilter} />

      <div className="space-y-0">
        {filteredPosts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-600">No posts match this filter.</p>
        </div>
      )}
    </div>
  );
}
```

**Step 2: Verify no syntax errors**

```bash
node -c src/components/PostList.jsx
```

Expected: No output

**Step 3: Commit**

```bash
git add src/components/PostList.jsx
git commit -m "feat: add PostList component with filtering"
```

---

## Task 14: Topic Page

**Files:**
- Create: `src/app/[topic]/page.js`

**Step 1: Create topic page directory**

```bash
mkdir -p src/app/\[topic\]
```

**Step 2: Create topic page**

File: `src/app/[topic]/page.js`

```javascript
import { notFound } from 'next/navigation';
import TopBanner from '@/components/TopBanner';
import PostList from '@/components/PostList';
import Footer from '@/components/Footer';
import {
  getPostsByTopic,
  getAllTopics,
  getSubtopicsByTopic
} from '@/utils/PostLoader';

// Generate static params for all topics
export async function generateStaticParams() {
  const topics = await getAllTopics();
  return topics.map(topic => ({
    topic: topic.toLowerCase()
  }));
}

// Generate metadata for each topic page
export async function generateMetadata({ params }) {
  const { topic } = params;
  const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);

  return {
    title: topicTitle,
    description: `Browse all posts about ${topicTitle}`,
  };
}

export default async function TopicPage({ params }) {
  const { topic } = params;

  // Get posts for this topic
  const posts = await getPostsByTopic(topic);

  // If no posts found, show 404
  if (!posts || posts.length === 0) {
    notFound();
  }

  // Get subtopics for filtering
  const subtopics = await getSubtopicsByTopic(topic);

  // Capitalize topic for display
  const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);

  return (
    <>
      <TopBanner currentTopic={topic} />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-blue-900 text-center mb-12">
          {topicTitle}
        </h1>

        <PostList posts={posts} subtopics={subtopics} />
      </main>

      <Footer />
    </>
  );
}
```

**Step 3: Verify no syntax errors**

```bash
node -c src/app/\[topic\]/page.js
```

Expected: No output

**Step 4: Test topic page**

Run: `npm run dev`
Visit: `http://localhost:3000/immunology`
Expected: See topic page with posts and filters

**Step 5: Commit**

```bash
git add src/app/\[topic\]/
git commit -m "feat: add dynamic topic page with post listing"
```

---

## Task 15: Blog Post Component

**Files:**
- Create: `src/components/BlogPost.jsx`

**Step 1: Create BlogPost component**

File: `src/components/BlogPost.jsx`

```javascript
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function BlogPost({ post }) {
  return (
    <article className="max-w-2xl mx-auto">
      {/* Post header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-3">
          {post.title}
        </h1>
        <p className="text-sm text-neutral-600">
          {post.date} • {post.topic}
        </p>
      </header>

      {/* Post content */}
      <div className="prose prose-sm prose-neutral max-w-none
                      prose-headings:text-blue-900 prose-headings:font-bold prose-headings:text-center
                      prose-a:text-blue-900 prose-a:no-underline hover:prose-a:underline
                      prose-code:text-blue-900 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                      prose-pre:bg-neutral-900 prose-pre:text-neutral-100
                      prose-img:mx-auto prose-img:rounded">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Subtopics */}
      {post.subtopics && post.subtopics.length > 0 && (
        <div className="mt-12 pt-8 border-t border-blue-100 text-center">
          <p className="text-xs text-neutral-600 mb-3">Topics</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {post.subtopics.map(subtopic => (
              <span
                key={subtopic}
                className="text-xs px-3 py-1 bg-blue-100 text-blue-900 rounded"
              >
                {subtopic}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
```

**Step 2: Verify no syntax errors**

```bash
node -c src/components/BlogPost.jsx
```

Expected: No output

**Step 3: Commit**

```bash
git add src/components/BlogPost.jsx
git commit -m "feat: add BlogPost component with markdown rendering"
```

---

## Task 16: Individual Post Page

**Files:**
- Create: `src/app/[topic]/[slug]/page.js`

**Step 1: Create post page directory**

```bash
mkdir -p src/app/\[topic\]/\[slug\]
```

**Step 2: Create post page**

File: `src/app/[topic]/[slug]/page.js`

```javascript
import { notFound } from 'next/navigation';
import TopBanner from '@/components/TopBanner';
import BlogPost from '@/components/BlogPost';
import Footer from '@/components/Footer';
import { getPost, getAllPosts } from '@/utils/PostLoader';

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(post => ({
    topic: post.topic.toLowerCase(),
    slug: post.slug
  }));
}

// Generate metadata for each post
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

  // Get the post
  const post = await getPost(topic, slug);

  // If post not found, show 404
  if (!post) {
    notFound();
  }

  return (
    <>
      <TopBanner currentTopic={topic} />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <BlogPost post={post} />
      </main>

      <Footer />
    </>
  );
}
```

**Step 3: Verify no syntax errors**

```bash
node -c src/app/\[topic\]/\[slug\]/page.js
```

Expected: No output

**Step 4: Test post page**

Run: `npm run dev`
Visit: `http://localhost:3000/immunology/immunology-basics`
Expected: See full blog post with markdown rendering

**Step 5: Commit**

```bash
git add src/app/\[topic\]/\[slug\]/
git commit -m "feat: add individual blog post page"
```

---

## Task 17: About Page

**Files:**
- Create: `src/app/about/page.js`

**Step 1: Create about page directory**

```bash
mkdir -p src/app/about
```

**Step 2: Create about page**

File: `src/app/about/page.js`

```javascript
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

      <main className="max-w-2xl mx-auto px-6 py-12">
        <article className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">
            About This Blog
          </h1>

          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
            <p>
              Welcome to {siteConfig.title}, a blog focused on medical science
              and biology topics.
            </p>

            <p>
              This site explores various aspects of medicine, immunology,
              cardiology, and other biological sciences through in-depth
              articles and explanations.
            </p>

            <p>
              The goal is to make complex medical and biological concepts
              accessible and understandable for curious readers.
            </p>

            <p className="pt-4 text-neutral-600">
              Written by {siteConfig.author}
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
```

**Step 3: Verify no syntax errors**

```bash
node -c src/app/about/page.js
```

Expected: No output

**Step 4: Test about page**

Visit: `http://localhost:3000/about`
Expected: See centered about page with content

**Step 5: Commit**

```bash
git add src/app/about/
git commit -m "feat: add about page"
```

---

## Task 18: 404 Not Found Page

**Files:**
- Create: `src/app/not-found.js`

**Step 1: Create not-found page**

File: `src/app/not-found.js`

```javascript
import Link from 'next/link';
import TopBanner from '@/components/TopBanner';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <TopBanner />

      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          404 - Page Not Found
        </h1>

        <p className="text-neutral-700 mb-8">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </main>

      <Footer />
    </>
  );
}
```

**Step 2: Verify no syntax errors**

```bash
node -c src/app/not-found.js
```

Expected: No output

**Step 3: Test 404 page**

Visit: `http://localhost:3000/nonexistent-page`
Expected: See 404 page with link back home

**Step 4: Commit**

```bash
git add src/app/not-found.js
git commit -m "feat: add custom 404 page"
```

---

## Task 19: Build & Production Testing

**Files:**
- None (testing only)

**Step 1: Run production build**

```bash
npm run build
```

Expected: Build completes successfully, all pages generated statically

**Step 2: Start production server**

```bash
npm start
```

**Step 3: Test all routes**

Visit and verify:
- `http://localhost:3000` → Redirects to `/immunology`
- `http://localhost:3000/immunology` → Shows Immunology topic page
- `http://localhost:3000/cardiology` → Shows Cardiology topic page
- `http://localhost:3000/immunology/immunology-basics` → Shows post
- `http://localhost:3000/about` → Shows about page
- `http://localhost:3000/fake-page` → Shows 404

**Step 4: Test interactive features**

- Click topic dropdown → Shows all topics
- Type in search → Shows filtered results
- Click subtopic filter → Filters posts
- Click post card → Navigates to post

**Step 5: Stop server and commit (if needed)**

No changes to commit if tests pass.

---

## Task 20: Final README & Documentation

**Files:**
- Create: `README.md`

**Step 1: Create README**

File: `README.md`

```markdown
# Medical Blog

A clean, minimal blog site focused on medical and biological topics. Built with Next.js and featuring topic-based navigation.

## Features

- **Topic-Based Navigation**: Browse posts by medical specialty
- **Subtopic Filtering**: Filter posts within topics
- **Search**: Real-time search across all posts
- **Markdown Support**: Full markdown with math equations (KaTeX)
- **Centered Design**: Clean, clinical aesthetic
- **Static Generation**: Fast, pre-rendered pages

## Tech Stack

- Next.js 15 (App Router, SSG)
- React 19
- Tailwind CSS
- Markdown (gray-matter, react-markdown)
- KaTeX for math equations

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [topic]/           # Dynamic topic pages
│   ├── about/             # About page
│   └── layout.js          # Root layout
├── components/            # React components
├── content/
│   └── posts/            # Markdown blog posts
├── config/
│   └── site.js           # Site configuration
└── utils/
    └── PostLoader.js     # Content loading utilities
```

## Adding New Posts

Create a markdown file in `src/content/posts/`:

```markdown
---
title: "Post Title"
date: "2025-01-15"
preview: "Brief description"
topic: "Immunology"
subtopics: ["Vaccines", "Research"]
---

Your content here...
```

## Configuration

Edit `src/config/site.js` to customize:

- Site title
- Default topic (homepage)
- Author name
- Site URL

## Documentation

- **Design Document**: `docs/plans/2025-12-07-medical-blog-design.md`
- **Subscription Guide**: `SUBSCRIBE.md` (for future feature)
- **AI Assistant Guide**: `CLAUDE.md`

## License

All rights reserved.
```

**Step 2: Verify README renders correctly**

```bash
cat README.md
```

Expected: Clean, readable markdown

**Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add comprehensive README"
```

---

## Task 21: Final Cleanup & Deployment Prep

**Files:**
- Modify: `package.json` (add metadata)
- Create: `.nvmrc` (optional)

**Step 1: Update package.json metadata**

File: `package.json`

Add/update these fields:
```json
{
  "name": "medical-blog",
  "version": "1.0.0",
  "description": "A medical and biology focused blog",
  "author": "Your Name",
  "private": true
}
```

**Step 2: Create .nvmrc for Node version (optional)**

File: `.nvmrc`

```
18
```

**Step 3: Verify all files are committed**

```bash
git status
```

Expected: "nothing to commit, working tree clean"

**Step 4: Create final commit if needed**

```bash
git add .
git commit -m "chore: finalize project for deployment"
```

**Step 5: Verify build one more time**

```bash
npm run build
```

Expected: Successful build with no errors or warnings

---

## Deployment Instructions

### Vercel (Recommended)

1. **Push to GitHub**:
```bash
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Import to Vercel**:
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Configure:
  - Framework Preset: Next.js
  - Build Command: `npm run build`
  - Output Directory: `.next`
- Click "Deploy"

3. **Environment Variables** (if needed later):
- Add in Vercel dashboard under Settings → Environment Variables

### Other Platforms

See Next.js deployment docs: https://nextjs.org/docs/app/building-your-application/deploying

---

## Post-Implementation Checklist

Before marking complete:

- [ ] All pages load correctly
- [ ] Topic navigation works
- [ ] Search filters results
- [ ] Subtopic filters work
- [ ] Markdown renders properly
- [ ] Math equations display (if used)
- [ ] Mobile responsive
- [ ] Build completes successfully
- [ ] All links work
- [ ] 404 page displays for invalid routes
- [ ] Centered layout on all pages
- [ ] Blue color scheme applied consistently

---

## Future Enhancements

See `SUBSCRIBE.md` for email subscription implementation.

Additional ideas:
- RSS feed
- Related posts
- View analytics
- Dark mode (optional)
- Comments system

---

**End of Implementation Plan**
