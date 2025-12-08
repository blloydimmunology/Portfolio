# CLAUDE.md - Medical Blog Development Guide

Quick reference guide for AI assistants working on this medical/biology blog.

---

## Design Philosophy

### Core Principles
- **Clinical Clean**: Professional medical aesthetic with deep blue (`blue-900`) accents
- **Centered Layout**: All content center-aligned (NOT left-aligned)
- **Minimalism**: No animations, shadows, gradients, or visual clutter
- **Topic-First**: Navigate by medical subjects, not chronological
- **Content-Focused**: Typography and whitespace as design elements

### Visual Style
- Clean, symmetrical, centered layout
- Blue color palette (`blue-900`, `blue-700`, `blue-100`, `blue-50`)
- Neutral grays for text (`neutral-700`, `neutral-600`)
- White background
- Simple borders only
- No marketing language or superlatives

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, SSG)
- **Styling**: Tailwind CSS
- **Content**: Markdown files with gray-matter
- **Typography**: Inter font (or similar clean sans-serif)
- **Markdown**: react-markdown, remark-gfm, rehype-katex

---

## Project Structure

```
src/
├── app/
│   ├── page.js                 # Redirects to default topic
│   ├── [topic]/
│   │   ├── page.js            # Topic page with post list
│   │   └── [slug]/page.js     # Individual blog post
│   ├── about/page.js          # About page
│   └── globals.css
├── components/
│   ├── TopBanner.jsx          # Title, search, subscribe
│   ├── TopicDropdown.jsx      # Topic navigation
│   ├── PostList.jsx           # Post list with filtering
│   ├── SubtopicFilters.jsx    # Subtopic pills
│   └── BlogPost.jsx           # Post rendering
├── content/
│   └── posts/*.md             # Blog posts
├── utils/
│   └── PostLoader.js          # Content loading logic
└── config/
    └── site.js                # Site configuration
```

---

## Content Format

### Markdown Frontmatter
```yaml
---
title: "Post Title"
date: "2025-01-15"
preview: "Brief description for post list"
topic: "Immunology"              # Required: Main category
subtopics: ["Vaccines", "Cells"] # Optional: Subcategories
---
```

### Supported Features
- GitHub Flavored Markdown
- Math equations: `$inline$` and `$$display$$`
- Code blocks with syntax highlighting
- Images: `/blog-images/post-slug/image.png`

---

## Design System

### Colors (Clinical Blue Theme)
```js
// Background
bg-white
bg-blue-50          // Very light blue-gray

// Text
text-blue-900       // Headings, primary
text-neutral-700    // Body text
text-neutral-600    // Metadata
text-neutral-500    // Muted

// Interactive
bg-blue-900         // Buttons, active
hover:bg-blue-700   // Hover states
border-blue-100     // Borders
```

### Typography
```js
// Hierarchy (all centered)
text-3xl font-bold text-blue-900         // Site title
text-2xl font-bold text-blue-900         // Page headings
text-xl font-semibold text-blue-900      // Post titles
text-lg font-semibold text-blue-900      // Section titles
text-sm text-neutral-700 leading-relaxed // Body
text-sm text-neutral-600                 // Metadata
```

### Layout (Centered)
```js
max-w-4xl mx-auto text-center    // Main container
max-w-2xl mx-auto                // Reading width (posts)
```

### Spacing
```js
mb-16    // Section gaps
mb-8     // Component gaps
mb-4     // Item gaps
mb-2     // Tight spacing
```

---

## Key Features

### 1. Topic-Based Navigation
- Topics extracted from post frontmatter
- Dropdown menu in top banner
- Each topic gets own page: `/[topic]`
- Homepage redirects to default topic (configured in `site.js`)

### 2. Subtopic Filtering
- Pills below topic heading
- Client-side filtering (no page reload)
- Styled like: `bg-blue-100` (unselected), `bg-blue-900 text-white` (selected)

### 3. Search
- Client-side search across titles and previews
- Real-time results as you type
- Simple input field in top banner

### 4. About Page
- Static page at `/about`
- Centered layout matching site aesthetic
- Author bio, background, purpose

---

## Site Configuration

**File**: `src/config/site.js`
```js
export const siteConfig = {
  title: "Site Title",
  description: "Medical/biology blog",
  author: "Author Name",
  defaultTopic: "Immunology",  // Homepage shows this
  url: "https://yourdomain.com"
}
```

---

## Component Patterns

### Top Banner (Centered, Sticky)
```jsx
<header className="border-b border-blue-100 py-8 bg-white sticky top-0">
  <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
    <TopicDropdown />
    <h1 className="text-3xl font-bold text-blue-900">
      Site Title
    </h1>
    <SearchBar />
    <SubscribeForm />
  </div>
</header>
```

### Post Card (Centered)
```jsx
<div className="text-center border-b border-blue-100 pb-8 mb-8">
  <h3 className="text-xl font-semibold text-blue-900 mb-2">
    Post Title
  </h3>
  <p className="text-sm text-neutral-600 mb-3">
    Date • Topic
  </p>
  <p className="text-sm text-neutral-700 leading-relaxed mb-4">
    Preview text...
  </p>
  <div className="flex gap-2 justify-center">
    {/* Subtopic pills */}
  </div>
</div>
```

### Subtopic Filter Pills
```jsx
<div className="flex gap-2 justify-center flex-wrap mb-8">
  <button className="text-xs px-3 py-1 rounded bg-blue-100 text-blue-900 hover:bg-blue-200">
    Subtopic
  </button>
  <button className="text-xs px-3 py-1 rounded bg-blue-900 text-white">
    Active Subtopic
  </button>
</div>
```

---

## Common Tasks

### Adding a New Post
1. Create `src/content/posts/new-post.md`
2. Add frontmatter with title, date, preview, topic, subtopics
3. Write content
4. Add images to `public/blog-images/new-post/`
5. Build: `npm run build`

### Changing Default Topic
Edit `src/config/site.js`:
```js
defaultTopic: "Cardiology"  // Changed from "Immunology"
```

### Adding Email Subscription
See `SUBSCRIBE.md` for complete implementation guide.

---

## Design Rules to Follow

### DO:
- ✅ Center all content (headings, text, components)
- ✅ Use blue-900 for primary elements
- ✅ Keep generous whitespace
- ✅ Use Inter font (or similar clean sans-serif)
- ✅ Match existing spacing patterns
- ✅ Keep it minimal and clean

### DON'T:
- ❌ Add animations, shadows, or gradients
- ❌ Use marketing language
- ❌ Left-align content (this is centered design)
- ❌ Add unnecessary features
- ❌ Use emojis unless requested
- ❌ Create popups or modals (except simple dropdowns)

---

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

---

## Key Differences from Reference Portfolio

The reference portfolio (`~/Documents/Coding/GitProjects/PersonalPortfolio/portfolio-next`) is similar but different:

| Feature | Reference Portfolio | This Blog |
|---------|-------------------|-----------|
| Layout | Left-aligned | **Centered** |
| Colors | Pure neutrals | **Blue accents** |
| Navigation | Simple nav | **Topic dropdown** |
| Organization | Chronological + tags | **Topic-first** |
| Complexity | Sidenotes, complex | **Simpler** |

**Don't copy layout styles from reference portfolio** - this site is centered.

---

## Important Notes

- Content comes from markdown files in `src/content/posts/`
- Topics are auto-extracted (no manual topic list)
- Static site generation (SSG) - all pages built at build time
- No backend/database needed (except future subscription feature)
- Mobile-responsive design
- Clean, professional medical aesthetic

---

## Subscription System

**Status**: Not implemented yet
**Guide**: See `SUBSCRIBE.md` for complete implementation steps

Will include:
- Email collection via Resend API
- Subscriber management
- New post notifications
- Management scripts

---

## Related Files

- `docs/plans/2025-12-07-medical-blog-design.md` - Full design document
- `SUBSCRIBE.md` - Email subscription implementation guide
- `tailwind.config.mjs` - Tailwind configuration
- `src/config/site.js` - Site settings

---

**Last Updated**: 2025-12-07

Remember: **Clinical clean, centered layout, blue accents, minimal design.**
