# How to Add Blog Posts

Complete guide for adding new articles to Bryce's Journal.

---

## Quick Start

### 1. Create a New Markdown File

Navigate to: `src/content/posts/`

Create a file named: `your-post-slug.md`

**Naming conventions:**
- Use lowercase
- Use hyphens (not underscores or spaces)
- Keep it descriptive but concise
- Examples: `vaccine-basics.md`, `heart-anatomy-101.md`, `cell-signaling-overview.md`

### 2. Add Frontmatter (Required Metadata)

At the top of your markdown file, add this YAML frontmatter:

```yaml
---
title: "Your Post Title Here"
date: "2025-01-15"
preview: "A brief 1-2 sentence description that appears on post lists and search results."
topic: "Immunology"
subtopics: ["Vaccines", "Cell Biology"]
---
```

**Field descriptions:**
- **title**: The post headline (appears on post page and listings)
- **date**: Publication date in YYYY-MM-DD format (used for sorting)
- **preview**: Short description (1-2 sentences, ~100-200 chars)
- **topic**: Main category - MUST match existing topic or create new one
- **subtopics**: Array of tags/subcategories (optional but recommended)

**Available topics:**
Currently: `Immunology`, `Cardiology`
To add a new topic, just use it - topics are auto-extracted from posts!

**Subtopic suggestions:**
- Immunology: `Basics`, `Vaccines`, `Cell Biology`, `Immune System`, `Research Methods`
- Cardiology: `Basics`, `Prevention`, `Anatomy`, `Diseases`
- General: `Clinical Practice`, `Research`, `Public Health`

### 3. Write Your Content

After the frontmatter (after the closing `---`), write your article in markdown:

```markdown
---
title: "Understanding Immune Cells"
date: "2025-01-15"
preview: "An introduction to the key players in your immune system."
topic: "Immunology"
subtopics: ["Basics", "Cell Biology"]
---

## Introduction

Your introduction paragraph here...

## Main Section

### Subsection

Your content here...

- Bullet points
- Work great
- For lists

1. Numbered lists
2. Also work
3. Perfectly

## Conclusion

Wrap up your article...
```

---

## Markdown Features

### Supported Elements

#### Headers
```markdown
# H1 - Don't use (reserved for title)
## H2 - Main sections
### H3 - Subsections
#### H4 - Sub-subsections
```

#### Text Formatting
```markdown
**bold text**
*italic text*
***bold and italic***
~~strikethrough~~
`inline code`
```

#### Links
```markdown
[Link text](https://example.com)
[Internal link](/immunology/another-post)
```

#### Lists
```markdown
- Unordered list
- Another item
  - Nested item

1. Ordered list
2. Second item
3. Third item
```

#### Blockquotes
```markdown
> This is a quote
> It can span multiple lines
```

#### Code Blocks
````markdown
```javascript
function example() {
  return "syntax highlighted code";
}
```

```python
def example():
    return "also works for Python"
```
````

#### Math Equations (KaTeX)

**Inline math:**
```markdown
The equation $E = mc^2$ is famous.
```

**Display math:**
```markdown
$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

**Common examples:**
- Chemical formulas: `$H_2O$`, `$CO_2$`
- Greek letters: `$\alpha$`, `$\beta$`, `$\gamma$`
- Fractions: `$\frac{1}{2}$`
- Subscripts/superscripts: `$x^2$`, `$H_2O$`

#### Citations & Footnotes

**Perfect for academic content!** Add footnotes for references, citations, or supplementary notes.

**Syntax:**
```markdown
This statement needs a citation[^1].

Another fact from a different source[^2].

You can also use named references[^note-name].

[^1]: Author, A. "Title of Paper." *Journal Name* 10.5 (2020): 123-145.

[^2]: Smith, J., et al. *Book Title*. Publisher, 2019.

[^note-name]: This is a supplementary note with additional context.
```

**How it works:**
- Use `[^1]` inline to add a footnote reference (appears as superscript)
- Define the footnote content at the bottom with `[^1]: Your citation text`
- Number or name your footnotes (numbers auto-increment in order of appearance)
- All footnotes appear in a "References" section at the end of the post
- Clicking a footnote number jumps to the reference (smooth scroll)
- A subtle highlight shows the target reference
- Footnotes include a back-link (↩) to return to the text

**Example in context:**
```markdown
mRNA vaccines use lipid nanoparticles for delivery[^1]. This approach
has been studied since the 1990s[^2].

## References Section

The footnotes appear here automatically:

[^1]: Pardi, N., et al. "mRNA vaccines." *Nature Reviews* 17 (2018): 261-279.
[^2]: Wolff, J.A., et al. "Direct gene transfer." *Science* 247 (1990): 1465-1468.
```

**Best practices:**
- Use for academic citations, data sources, or detailed explanations
- Follow a consistent citation format (APA, MLA, Chicago, etc.)
- Include DOI or URL for online sources when possible
- Keep footnote text concise but informative
- Number sequentially in order of first appearance

**Styling:**
- Footnote numbers appear in teal (matching site accent)
- References section has a divider line above it
- Smaller font size for references (easier to scan)
- Hover effects on links for better UX

#### Images

Place images in: `public/blog-images/your-post-slug/`

Then reference them:
```markdown
![Alt text](/blog-images/your-post-slug/image.png)
```

**Best practices:**
- Use descriptive alt text
- Optimize images before uploading (compress, resize)
- Name files descriptively: `cell-structure-diagram.png`

#### Tables
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

---

## Complete Example Post

**File:** `src/content/posts/antibody-structure.md`

```markdown
---
title: "The Structure and Function of Antibodies"
date: "2025-01-20"
preview: "How Y-shaped proteins defend your body by recognizing and neutralizing foreign invaders."
topic: "Immunology"
subtopics: ["Cell Biology", "Immune System"]
---

## What Are Antibodies?

Antibodies, also known as immunoglobulins, are Y-shaped proteins produced by B cells that recognize and bind to specific foreign substances called antigens.

## Basic Structure

An antibody molecule consists of:

- **Two heavy chains**: Form the backbone
- **Two light chains**: Attached to heavy chains
- **Variable regions**: Recognize specific antigens
- **Constant regions**: Determine antibody class

### The Y-Shape

The distinctive Y-shape allows antibodies to:

1. Bind to antigens with the tips (variable regions)
2. Signal to immune cells with the base (constant region)
3. Cross-link multiple antigens

## How They Work

When an antibody encounters its target antigen:

> The variable region binds specifically to the antigen, like a lock and key mechanism.

This binding can:
- Neutralize toxins or viruses
- Mark pathogens for destruction
- Activate the complement system

## Antibody Classes

There are five main classes (isotypes):

| Class | Location | Function |
|-------|----------|----------|
| IgG | Blood and tissues | Main defense |
| IgM | Blood | First responder |
| IgA | Mucous membranes | Barrier protection |
| IgE | Tissues | Allergic responses |
| IgD | B cell surface | B cell activation |

## Medical Applications

Understanding antibody structure has led to:

- **Monoclonal antibodies**: Used in cancer treatment
- **Vaccines**: Trigger antibody production
- **Diagnostic tests**: Detect infections
- **Immunotherapy**: Harness immune responses

## Conclusion

The elegant structure of antibodies enables precise immune recognition while maintaining flexibility to respond to countless threats. This molecular architecture is fundamental to adaptive immunity.

---

*Further reading: [How Vaccines Work](/immunology/vaccine-basics)*
```

---

## Building and Deployment

### Local Development

After creating/editing posts:

```bash
# Start development server
npm run dev

# Visit http://localhost:3000 or 3001
# Your new post should appear automatically
```

The site will:
1. Auto-extract topics from all posts
2. Show your post on the appropriate topic page
3. Include it in search results
4. Display it chronologically (by date in frontmatter)

### Production Build

```bash
# Build static site
npm run build

# Preview production build
npm start
```

### Deployment (Vercel)

Simply push to GitHub:
```bash
git add src/content/posts/your-new-post.md
git commit -m "Add new post: Your Post Title"
git push origin main
```

Vercel will automatically:
1. Build the site
2. Deploy to production
3. Make your post live

---

## Post Checklist

Before publishing, verify:

- [ ] Frontmatter is complete and correct
- [ ] Date is in YYYY-MM-DD format
- [ ] Topic and subtopics are relevant
- [ ] Preview is concise and descriptive
- [ ] All links work (internal and external)
- [ ] Images are optimized and in correct folder
- [ ] Math equations render correctly (if used)
- [ ] Headings follow logical hierarchy (H2 → H3 → H4)
- [ ] Content is proofread and formatted
- [ ] Code blocks have language specified (if used)

---

## Notifying Subscribers

After publishing a new post:

```bash
# Send notification to all subscribers
npm run notify -- "Post Title" "Topic" "post-slug" "Optional preview text"

# Example:
npm run notify -- "The Structure of Antibodies" "Immunology" "antibody-structure" "How Y-shaped proteins defend your body"
```

**Required arguments:**
1. Post title (in quotes if it has spaces)
2. Topic name (must match exactly)
3. Post slug (filename without .md)
4. Preview text (optional - uses frontmatter preview if omitted)

---

## Common Issues

### Post Not Showing Up

1. Check frontmatter syntax (must be valid YAML)
2. Ensure file is in `src/content/posts/`
3. Verify file has `.md` extension
4. Restart dev server
5. Check console for errors

### Images Not Loading

1. Confirm images are in `public/blog-images/[post-slug]/`
2. Use absolute path: `/blog-images/...`
3. Check file names match exactly (case-sensitive)
4. Optimize large images (< 1MB recommended)

### Math Not Rendering

1. Use single `$` for inline: `$E = mc^2$`
2. Use double `$$` for display on own line
3. Escape special LaTeX characters if needed
4. Check KaTeX documentation for syntax

### Topic Not Appearing in Nav

- Topics are auto-extracted from posts
- Ensure at least one post has that topic
- Topic names are case-sensitive
- Restart dev server to see changes

---

## Tips for Great Posts

### Content
- Start with why readers should care
- Use clear, accessible language
- Break up long paragraphs
- Include relevant examples
- Link to related posts

### Structure
- Use descriptive headings
- Keep sections focused
- Include introduction and conclusion
- Use lists for scanability
- Add visual breaks (images, quotes, code)

### SEO
- Use descriptive titles (5-10 words)
- Write compelling previews
- Include relevant subtopics
- Link to other posts internally
- Use descriptive image alt text

---

## Need Help?

Refer to:
- `CLAUDE.md` - Full site documentation
- `README.md` - Project overview
- `IMPROVEMENT-IDEAS.md` - Feature suggestions
- [Markdown Guide](https://www.markdownguide.org/) - Syntax reference
- [KaTeX](https://katex.org/docs/supported.html) - Math syntax

---

**Last Updated**: 2025-12-08
