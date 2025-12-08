# Simple Guide for Non-Technical Users

Everything you need to know to manage Bryce's Journal without touching code.

---

## What You Can Do

✅ Add new blog posts
✅ Edit the About page
✅ Notify subscribers when you publish
✅ Check your subscriber list
✅ Deploy updates to the live site

---

## 1. Adding Blog Posts

### Quick Steps

1. **Create a new file** in the folder: `src/content/posts/`
2. **Name it** with lowercase and hyphens: `my-new-post.md`
3. **Add the header** (copy this template):

```markdown
---
title: "Your Post Title"
date: "2025-01-20"
preview: "A short 1-2 sentence description."
topic: "Immunology"
subtopics: ["Vaccines", "Research"]
---

Your content starts here...
```

4. **Write your article** using simple markdown (see below)
5. **Save the file**

### Writing in Markdown

**Headings:**
```markdown
## Main Section
### Subsection
```

**Bold and italic:**
```markdown
**bold text**
*italic text*
```

**Links:**
```markdown
[Link text](https://example.com)
```

**Lists:**
```markdown
- Item one
- Item two

1. Numbered item
2. Another item
```

**Citations:**
```markdown
This needs a citation[^1].

[^1]: Author. "Title." Journal (2020): 123-145.
```

### Full Documentation

For complete examples and advanced features, see: **[HOW-TO-ADD-POSTS.md](HOW-TO-ADD-POSTS.md)**

---

## 2. Editing the About Page

### File Location

`src/app/about/page.js`

### How to Edit

1. **Open the file** in your text editor
2. **Find the text** between `<p>` and `</p>` tags
3. **Edit the content** - keep the tags, just change the words
4. **Save the file**

### Example

**Current text:**
```jsx
<p>
  Welcome to {siteConfig.title}, a collection of articles exploring topics in medicine,
  biology, and the life sciences.
</p>
```

**Change to:**
```jsx
<p>
  Welcome to {siteConfig.title}, where I share insights about immunology,
  cardiology, and the latest research in medicine.
</p>
```

**Important:**
- Keep `{siteConfig.title}` as-is (it auto-fills your site name)
- Keep the `<p>` and `</p>` tags
- Just change the text between them

### What You Can Edit

In `src/app/about/page.js`, you can change:
- The paragraphs in the first section
- Your bio/background
- The "Get in Touch" section
- Any text content

**What to keep:**
- The `{siteConfig.title}` and `{siteConfig.author}` parts
- The `<p>`, `</p>`, `<h2>`, `</h2>` tags
- The link to `/subscribe` (or update if you want)

---

## 3. Publishing Your Changes

### When Working Locally

After you add a post or edit the About page:

```bash
# See your changes live
npm run dev
# Then visit: http://localhost:3000 or 3001
```

### Deploying to the Live Site

Use these commands in your terminal:

```bash
# Step 1: Save your changes
git add .

# Step 2: Add a description
git commit -m "Add new post about vaccines"

# Step 3: Push to live site
git push origin main
```

**What happens:**
- Vercel detects the changes
- Automatically builds and deploys
- Your site updates in ~2 minutes

---

## 4. Subscriber Management

### Check Who's Subscribed

```bash
npm run subscribers
```

This shows a list of all email addresses.

### Notify Subscribers of New Post

After publishing a new post:

```bash
npm run notify -- "Post Title" "Topic" "post-slug" "Preview text"
```

**Example:**
```bash
npm run notify -- "Understanding mRNA Vaccines" "Immunology" "mrna-vaccines" "How messenger RNA vaccines work"
```

**Required info:**
- **Post Title**: Exact title from your frontmatter
- **Topic**: Must match (Immunology, Cardiology, etc.)
- **Post Slug**: Filename without `.md` (e.g., `mrna-vaccines` for `mrna-vaccines.md`)
- **Preview**: Optional short description

### Add Subscriber Manually (Testing)

```bash
npm run add-subscriber -- email@example.com
```

---

## 5. Changing Site Settings

### File: `src/config/site.js`

You can change:

```javascript
export const siteConfig = {
  title: "Bryce's Journal",           // Site name
  description: "A medical and biology focused journal",
  author: "Bryce Lloyd",               // Your name
  defaultTopic: "Immunology",          // Homepage default
  url: "https://yourdomain.com"        // Your URL
}
```

After editing:
1. Save the file
2. Restart dev server: `npm run dev`
3. Push changes: `git add . && git commit -m "Update site config" && git push`

---

## 6. Topics and Organization

### How Topics Work

- **Topics are auto-generated** from your posts
- If you write a post with `topic: "Cardiology"`, it appears in the nav
- No need to manually add topics anywhere

### Current Topics

Based on your posts. To add a new topic:
1. Just use it in a post's frontmatter: `topic: "Neurology"`
2. It will automatically appear in the navigation

---

## Common Tasks Cheat Sheet

| Task | Command |
|------|---------|
| Start local server | `npm run dev` |
| Check subscribers | `npm run subscribers` |
| Notify subscribers | `npm run notify -- "Title" "Topic" "slug" "Preview"` |
| Deploy to live site | `git add . && git commit -m "message" && git push` |

---

## Troubleshooting

### "Post not showing up"

1. Check frontmatter is correct (YAML format)
2. Make sure file is in `src/content/posts/`
3. File must end with `.md`
4. Restart dev server: Stop (Ctrl+C) then `npm run dev`

### "Images not loading"

1. Put images in: `public/blog-images/your-post-slug/`
2. Reference in markdown: `![Alt](/blog-images/your-post-slug/image.png)`
3. Use absolute path starting with `/`

### "Can't deploy"

1. Make sure all files are saved
2. Check you have internet connection
3. Run `git status` to see pending changes
4. If stuck, run: `git pull` then try pushing again

### "Subscribers not getting emails"

1. Make sure `.env.local` has your Resend API key
2. Check email domain is verified in Resend dashboard
3. Test with your own email first
4. Check spam folder

---

## Files You'll Edit Often

```
src/
├── content/
│   └── posts/              ← Your blog posts go here
│       └── your-post.md
├── app/
│   └── about/
│       └── page.js         ← Edit your About page here
└── config/
    └── site.js             ← Site-wide settings
```

**Never edit:**
- `node_modules/` folder
- `.next/` folder
- Anything in `components/` (unless you know React)

---

## Getting Help

### Documentation Files

- **This guide** - Basic tasks for non-technical users
- **HOW-TO-ADD-POSTS.md** - Detailed post creation guide
- **SUBSCRIPTION-SETUP.md** - Setting up email notifications
- **IMPROVEMENT-IDEAS.md** - Future feature ideas

### When You Need Technical Help

If you need to:
- Change site design/layout
- Add new features
- Fix broken functionality
- Modify navigation

→ You'll need a developer or to learn React/Next.js basics

---

## Quick Start Workflow

**Every time you want to publish:**

1. **Create/edit your post** in `src/content/posts/`
2. **Preview locally**: `npm run dev`
3. **Save changes**: `git add .`
4. **Commit**: `git commit -m "Add post about [topic]"`
5. **Deploy**: `git push origin main`
6. **Wait ~2 minutes** for Vercel to deploy
7. **Notify subscribers**: `npm run notify -- "Title" "Topic" "slug" "Preview"`

Done! Your post is live and subscribers are notified.

---

**Last Updated**: 2025-12-08

**Questions?** Check the detailed guides in the docs folder or ask a developer for help with technical issues.
