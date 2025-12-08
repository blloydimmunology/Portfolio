# Adding Images to Blog Posts

## How to Add Images

### Step 1: Add Image to Public Folder

Place your image in `/public/blog-images/`:

```
public/
└── blog-images/
    ├── vaccine-hero.jpg
    ├── heart-anatomy.png
    └── cell-structure.png
```

### Step 2: Reference Image in Frontmatter

Add the `image` field to your blog post frontmatter:

```markdown
---
title: "Modern Vaccine Development"
date: "2025-01-14"
preview: "An overview of how vaccines are developed"
topic: "Immunology"
subtopics: ["Vaccines", "Research Methods"]
image: "/blog-images/vaccine-hero.jpg"
---

Your blog content here...
```

### Step 3: That's It!

The image will automatically appear as the post card thumbnail in the grid layout.

## Image Guidelines

**Recommended specs:**
- **Aspect ratio**: 16:9 or 4:3
- **Dimensions**: 800x600px minimum
- **File size**: Under 500KB for optimal loading
- **Format**: JPG, PNG, or WebP

**Naming convention:**
- Use descriptive names: `heart-anatomy.jpg` not `img1.jpg`
- Use lowercase and hyphens: `cell-structure.png`
- Keep filenames short and clear

## Example Blog Post

```markdown
---
title: "Understanding the Human Heart"
date: "2025-01-15"
preview: "A detailed exploration of heart anatomy and function"
topic: "Cardiology"
subtopics: ["Basics", "Anatomy"]
image: "/blog-images/heart-diagram.jpg"
---

## Introduction

Your article content here...
```

## Without an Image

If you don't specify an `image` field, posts will show a default gradient placeholder with a DNA emoji (🧬).

## Finding Images

**Free medical image sources:**
- [Unsplash](https://unsplash.com/s/photos/medical) - High-quality free photos
- [Pexels](https://www.pexels.com/search/medical/) - Free stock photos
- [Pixabay](https://pixabay.com/images/search/medical/) - Free images and illustrations

**Remember**: Always check image licenses and give attribution when required!
