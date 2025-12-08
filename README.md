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
