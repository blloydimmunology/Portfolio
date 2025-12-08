# Medical Blog Site - Design Document

**Date**: 2025-12-07
**Project**: Medical/Cells-Focused Blog with Topic-Based Navigation
**Design Reference**: Nautilus (nautil.us) - Clean, minimal aesthetic

---

## Table of Contents
1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Visual Design](#visual-design)
4. [Content Structure](#content-structure)
5. [Navigation & User Flow](#navigation--user-flow)
6. [Features](#features)
7. [Technical Implementation](#technical-implementation)
8. [Future Enhancements](#future-enhancements)

---

## Overview

### Purpose
A personal medical/biology blog with topic-based organization, featuring clean scientific aesthetic and centered layout design.

### Design Philosophy
- **Clinical Clean**: Professional medical aesthetic with deep blue accents
- **Centered Layout**: All content center-aligned for symmetrical, scientific paper feel
- **Minimalist**: No animations, shadows, or visual clutter
- **Content-First**: Typography and whitespace as primary design elements
- **Topic-Driven**: Navigate by medical subjects (Immunology, Cardiology, etc.) rather than chronological

### Key Differences from Reference Portfolio
- **Centered vs Left-Aligned**: All content centered instead of left-aligned
- **Topic Navigation**: Topic-first organization with subtopic filtering
- **Simplified**: No sidenotes system, cleaner feature set
- **Clinical Aesthetic**: Blue accents instead of pure neutrals
- **Default Topic Homepage**: Opens to most-viewed topic instead of general home

---

## Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Rendering**: Static Site Generation (SSG)
- **Styling**: Tailwind CSS
- **Content**: Markdown files with frontmatter
- **Markdown Processing**:
  - `gray-matter` - Parse frontmatter
  - `react-markdown` - Render markdown
  - `remark-gfm` - GitHub Flavored Markdown
  - `remark-math` + `rehype-katex` - Math equations (optional)
- **Deployment**: Vercel (or similar static host)

### Project Structure
```
bryce-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout
│   │   ├── page.js                # Homepage (redirects to default topic)
│   │   ├── about/
│   │   │   └── page.js            # About page
│   │   ├── [topic]/
│   │   │   ├── page.js            # Topic page with post list
│   │   │   └── [slug]/
│   │   │       └── page.js        # Individual blog post
│   │   ├── globals.css            # Global styles
│   │   └── api/                   # Future: subscription endpoints
│   ├── components/
│   │   ├── TopBanner.jsx          # Site title, search, subscribe
│   │   ├── TopicDropdown.jsx      # Topic navigation menu
│   │   ├── SearchBar.jsx          # Search functionality
│   │   ├── PostList.jsx           # List of posts with filters
│   │   ├── PostCard.jsx           # Individual post preview
│   │   ├── SubtopicFilters.jsx    # Subtopic filter pills
│   │   ├── BlogPost.jsx           # Full post rendering
│   │   └── Footer.jsx             # Site footer
│   ├── content/
│   │   └── posts/
│   │       ├── immunology-basics.md
│   │       ├── vaccine-development.md
│   │       └── ...
│   ├── utils/
│   │   └── PostLoader.js          # Load and organize posts
│   └── config/
│       └── site.js                # Site configuration
├── public/
│   └── blog-images/               # Blog post images
├── docs/
│   └── plans/                     # Design documents
├── SUBSCRIBE.md                   # Subscription implementation guide
├── tailwind.config.mjs
├── next.config.mjs
└── package.json
```

### Routes
- `/` - Homepage (defaults to configured topic)
- `/[topic]` - Topic page (e.g., `/immunology`)
- `/[topic]/[slug]` - Individual post (e.g., `/immunology/vaccine-basics`)
- `/about` - About page
- `/api/subscribe` - Future: Email subscription endpoint

---

## Visual Design

### Design System

#### Color Palette - Clinical Clean
```js
// Primary Colors
background: 'bg-white'
backgroundAlt: 'bg-blue-50'       // Very light blue-gray

// Text
headings: 'text-blue-900'         // Deep professional blue
body: 'text-neutral-700'          // Medium gray for readability
metadata: 'text-neutral-600'      // Date, tags, etc.
muted: 'text-neutral-500'         // Less important text

// Interactive
primary: 'bg-blue-900'            // Buttons, active states
primaryHover: 'hover:bg-blue-700'
borders: 'border-blue-100'        // Subtle separation
```

#### Typography
```js
// Font Family
font: 'Inter' (or similar clean sans-serif)

// Hierarchy
siteTitle: 'text-3xl font-bold tracking-tight text-blue-900'
pageHeading: 'text-2xl font-bold text-blue-900'
postTitle: 'text-xl font-semibold text-blue-900'
sectionTitle: 'text-lg font-semibold text-blue-900'
body: 'text-sm text-neutral-700 leading-relaxed'
metadata: 'text-sm text-neutral-600'
small: 'text-xs text-neutral-500'
```

#### Spacing System
```js
sectionGap: 'mb-16'        // Between major sections
componentGap: 'mb-8'       // Between components
itemGap: 'mb-4'            // Between list items
tightGap: 'mb-2'           // Metadata to content
```

#### Layout
```js
// Centered Design
container: 'max-w-4xl mx-auto px-6'
textCenter: 'text-center'
readingWidth: 'max-w-2xl mx-auto'  // For blog post content
```

### Component Designs

#### Top Banner
- **Position**: Sticky top navigation
- **Layout**: Vertically stacked, all centered
- **Structure**:
  ```
  ┌─────────────────────────────┐
  │      [Topic Menu ▼]         │
  │                             │
  │       SITE TITLE            │
  │                             │
  │    [   Search Bar   ]       │
  │                             │
  │    [ Subscribe Button ]     │
  └─────────────────────────────┘
  ```
- **Styling**: White background, subtle bottom border
- **Height**: Auto (generous padding)

#### Topic Dropdown Menu
- **Trigger**: "Topics ▼" button centered in banner
- **Display**: Centered modal/overlay on click
- **Content**: List of all topics, alphabetically sorted
- **Styling**: Clean list with hover states, centered on screen
- **Example**:
  ```
  ┌──────────────────┐
  │   Cardiology     │
  │   Immunology     │ ← hover state
  │   Neurology      │
  │   Oncology       │
  └──────────────────┘
  ```

#### Search Bar
- **Design**: Simple input field, centered
- **Placeholder**: "Search articles..."
- **Behavior**: Client-side real-time search
- **Results**: Dropdown below input with topic grouping
- **Styling**: Border only, no background fill

#### Post List
- **Layout**: Centered column of post cards
- **Spacing**: Generous gaps between posts (mb-8)
- **Card Structure** (all centered):
  ```
  ────────────────────────────
       Post Title

       Date • Topic

       Preview text snippet that
       gives context about the post...

       [Subtopic] [Subtopic]
  ────────────────────────────
  ```

#### Subtopic Filters
- **Position**: Below page heading, centered
- **Design**: Small pills (matching reference portfolio style)
- **States**:
  - Unselected: `bg-blue-100 text-blue-900`
  - Selected: `bg-blue-900 text-white`
  - Hover: `hover:bg-blue-200`
- **Layout**: Horizontally centered row with wrapping

#### Individual Blog Post
- **Layout**: Narrow reading width, center-aligned
- **Structure**:
  ```
  ┌─────────────────────────┐
  │    Post Title           │
  │    Date • Topic         │
  │                         │
  │  Article content with   │
  │  optimal line length    │
  │  for reading (~65-75    │
  │  characters per line)   │
  │                         │
  │  [Images centered]      │
  │                         │
  │  More content...        │
  └─────────────────────────┘
  ```
- **Styling**: Clean typography, generous line height
- **No sidenotes**: Keep it simple

#### Footer
- **Content**: Copyright, social links (if any), about link
- **Styling**: Minimal, centered, subtle top border
- **Spacing**: `pt-16 pb-10`

---

## Content Structure

### Markdown File Format

**Location**: `src/content/posts/*.md`

**Frontmatter Schema**:
```yaml
---
title: "Understanding Vaccine Development"
date: "2025-01-15"
preview: "A deep dive into modern vaccine development processes and challenges"
topic: "Immunology"
subtopics: ["Vaccines", "Research Methods"]
---

## Introduction

Your markdown content here...
```

**Field Definitions**:
- `title` (required): Post title
- `date` (required): Publication date (YYYY-MM-DD format)
- `preview` (required): Short description for post list
- `topic` (required): Primary topic category
- `subtopics` (optional): Array of subtopic tags

### Supported Markdown Features
- Headings (##, ###, etc.)
- Bold, italic, links
- Lists (ordered, unordered)
- Code blocks with syntax highlighting
- Images
- Tables
- Math equations (via KaTeX): `$inline$` and `$$display$$`
- GitHub Flavored Markdown extensions

### Image Handling
- Store images in `public/blog-images/[post-slug]/`
- Reference in markdown: `![Alt text](/blog-images/post-slug/image.png)`
- All images centered in post layout

---

## Navigation & User Flow

### User Journeys

#### 1. New Visitor Landing
```
Homepage (default topic)
  → See topic name as heading
  → Browse post list
  → Click post → Read article
```

#### 2. Topic Exploration
```
Any page
  → Click "Topics ▼" in banner
  → Select different topic
  → View that topic's posts
  → Filter by subtopic (optional)
  → Click post
```

#### 3. Search-Driven
```
Any page
  → Type in search bar
  → See real-time results
  → Click result → Navigate to post
```

#### 4. About Discovery
```
Homepage
  → Click "About" in footer or banner
  → Read bio/background
  → Navigate back to topics
```

### Navigation Hierarchy
```
┌─────────────────────────────────────┐
│           TOP BANNER                │
│  [Topics ▼] Title Search Subscribe  │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│         TOPIC PAGE                  │
│  Heading: "Immunology"              │
│  [Subtopic Filters]                 │
│  Post List                          │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│         BLOG POST                   │
│  Full article content               │
└─────────────────────────────────────┘
```

---

## Features

### Phase 1 (Initial Implementation)

#### 1. Topic-Based Navigation
- Automatic topic extraction from markdown files
- Topic dropdown menu
- Dynamic topic pages
- Default topic configuration

#### 2. Subtopic Filtering
- Extract subtopics from post frontmatter
- Pill-style filters on topic pages
- Client-side filtering (no page reload)
- "All" option to show all posts in topic

#### 3. Search Functionality
- Search across titles and previews
- Real-time client-side filtering
- Display results with topic context
- Highlight matching text

#### 4. Post Rendering
- Full markdown support
- Code syntax highlighting
- Math equation rendering
- Responsive images
- Clean typography

#### 5. About Page
- Static page with bio/background
- Centered layout matching site aesthetic
- Simple, no frills

### Phase 2 (Future Enhancements)

#### 1. Email Subscription
- Subscribe form in banner
- Email collection via API route
- Storage in JSON file or database
- Resend integration for notifications
- **See SUBSCRIBE.md for implementation guide**

#### 2. View Tracking
- Track topic/post views
- Automatically update default topic
- Analytics integration (optional)

#### 3. Related Posts
- Show related posts at bottom of articles
- Based on topic/subtopic matching
- Or: manual "related" field in frontmatter

#### 4. RSS Feed
- Auto-generate RSS feed
- Organized by topic

#### 5. Advanced Search
- Full content search (not just titles/previews)
- Search within specific topics
- Search by subtopic

---

## Technical Implementation

### Site Configuration

**File**: `src/config/site.js`
```js
export const siteConfig = {
  title: "Site Title",
  description: "A medical and biology focused blog",
  author: "Author Name",
  defaultTopic: "Immunology", // Homepage shows this topic
  url: "https://yourdomain.com",
  social: {
    // Optional social links
  }
}
```

### Post Loading Logic

**File**: `src/utils/PostLoader.js`

**Key Functions**:

```js
// Get all posts across all topics
export async function getAllPosts()

// Get all unique topics from posts
export async function getAllTopics()

// Get posts filtered by topic
export async function getPostsByTopic(topic)

// Get all subtopics for a specific topic
export async function getSubtopicsByTopic(topic)

// Get single post by topic and slug
export async function getPost(topic, slug)

// Search posts by query (title, preview, content)
export async function searchPosts(query)
```

**Implementation Pattern** (similar to existing BlogLoader.js):
```js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/posts');

export async function getAllPosts() {
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
        ...data
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

// Additional functions follow similar patterns...
```

### Page Generation

#### Homepage (`src/app/page.js`)
```js
import { redirect } from 'next/navigation';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  // Redirect to default topic
  redirect(`/${siteConfig.defaultTopic.toLowerCase()}`);
}
```

#### Topic Page (`src/app/[topic]/page.js`)
```js
import { getPostsByTopic, getAllTopics, getSubtopicsByTopic } from '@/utils/PostLoader';
import PostList from '@/components/PostList';

export async function generateStaticParams() {
  const topics = await getAllTopics();
  return topics.map(topic => ({
    topic: topic.toLowerCase()
  }));
}

export default async function TopicPage({ params }) {
  const { topic } = params;
  const posts = await getPostsByTopic(topic);
  const subtopics = await getSubtopicsByTopic(topic);

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-blue-900 text-center mb-8">
        {topic}
      </h1>
      <PostList posts={posts} subtopics={subtopics} />
    </main>
  );
}
```

#### Post Page (`src/app/[topic]/[slug]/page.js`)
```js
import { getPost, getAllPosts } from '@/utils/PostLoader';
import BlogPost from '@/components/BlogPost';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({
    topic: post.topic.toLowerCase(),
    slug: post.slug
  }));
}

export default async function PostPage({ params }) {
  const { topic, slug } = params;
  const post = await getPost(topic, slug);

  return <BlogPost post={post} />;
}
```

### Client-Side Features

#### Search Implementation
- Load all post metadata on page load
- Filter on keystroke using JavaScript
- Display results in dropdown
- Navigate on result click

#### Subtopic Filtering
- Client component with state
- Filter posts array by selected subtopic
- Update URL params (optional) for shareable filtered views

### Styling Configuration

**File**: `tailwind.config.mjs`
```js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors if needed
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        // Customize prose styles for blog posts
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For markdown rendering
  ],
}
```

**File**: `src/app/globals.css`
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
  /* Custom utilities if needed */
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## Future Enhancements

### Potential Features (Post-Launch)

1. **Email Subscription System**
   - Full implementation guide in SUBSCRIBE.md
   - Resend API integration
   - Subscriber management
   - New post notifications

2. **View Analytics**
   - Track page views per topic/post
   - Auto-update default topic based on popularity
   - Simple analytics dashboard

3. **Content Enhancements**
   - Interactive diagrams (medical illustrations)
   - Video embeds
   - Citation system for references
   - Glossary for medical terms

4. **Social Features**
   - Share buttons (minimal design)
   - Reading time estimates
   - Table of contents for long posts

5. **Performance Optimizations**
   - Image optimization with Next.js Image component
   - Lazy loading for images
   - Search indexing for faster searches

6. **Content Management**
   - Draft/published status
   - Scheduled publishing
   - Content versioning

---

## Development Workflow

### Adding a New Blog Post

1. Create markdown file in `src/content/posts/`:
   ```bash
   touch src/content/posts/new-post.md
   ```

2. Add frontmatter and content:
   ```yaml
   ---
   title: "New Post Title"
   date: "2025-01-15"
   preview: "Brief description"
   topic: "Immunology"
   subtopics: ["Vaccines"]
   ---

   ## Introduction

   Your content here...
   ```

3. Add images to `public/blog-images/new-post/`

4. Build and deploy:
   ```bash
   npm run build
   npm run start  # or deploy to Vercel
   ```

### Changing Default Topic

Edit `src/config/site.js`:
```js
export const siteConfig = {
  // ...
  defaultTopic: "Cardiology", // Changed from "Immunology"
}
```

### Adding a New Topic

Simply create posts with new topic in frontmatter - topics are automatically detected.

---

## Design Decisions & Rationale

### Why Centered Layout?
- Scientific papers are typically centered
- Creates formal, academic aesthetic
- Symmetry conveys professionalism
- Different from typical blog layouts

### Why Topic-First Navigation?
- Medical content naturally groups by specialty
- Easier to find related content
- Encourages exploration within subjects
- More organized than chronological lists

### Why Clinical Blue?
- Professional medical association
- Not as stark as pure black/white
- Distinctive while remaining minimal
- Evokes trust and authority

### Why No Sidenotes?
- Simplifies implementation
- Mobile-friendly by default
- Content stays focused
- Can add later if needed

### Why Client-Side Search?
- No backend required for static site
- Fast for reasonable post counts (<100 posts)
- Simple to implement
- Can upgrade to Algolia/etc. if needed

### Why Manual Default Topic?
- Simple to configure
- No analytics complexity in v1
- Can easily upgrade to dynamic later
- Gives author control

---

## Success Criteria

### MVP Launch Ready When:
- [ ] All topics display correctly
- [ ] Posts render with proper formatting
- [ ] Search returns accurate results
- [ ] Subtopic filtering works
- [ ] Responsive on mobile/tablet/desktop
- [ ] About page is complete
- [ ] Design matches clinical aesthetic
- [ ] Site loads quickly (<2s)

### Quality Checklist:
- [ ] No console errors
- [ ] All links work
- [ ] Images load properly
- [ ] Math equations render (if used)
- [ ] Code blocks have syntax highlighting
- [ ] Typography is readable
- [ ] Spacing is consistent
- [ ] Centered layout on all pages
- [ ] Clean, professional appearance

---

## Related Documentation

- **SUBSCRIBE.md** - Email subscription implementation guide
- **README.md** - Project setup and development instructions
- **Reference Portfolio** - `~/Documents/Coding/GitProjects/PersonalPortfolio/portfolio-next`

---

## Notes

- Keep design minimal - resist adding unnecessary features
- Content quality > feature quantity
- Mobile-first responsive design
- Accessibility considerations (semantic HTML, alt text, etc.)
- SEO optimization (meta tags, sitemap, etc.)

---

**End of Design Document**
