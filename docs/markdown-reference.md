---
title: "Markdown Reference Guide - All Supported Features"
date: "2025-01-20"
preview: "A comprehensive reference showing every markdown feature supported on this site."
topic: "Reference"
subtopics: ["Documentation", "Examples"]
---

# Markdown Reference Guide

This document demonstrates every markdown feature supported on Bryce's Journal. Use this as a reference when writing posts.

**Note:** This file is located in `docs/` so it won't appear on the live site - it's just for reference.

---

## Headers

Headers create the document structure. H1 is reserved for the post title.

### This is H3
#### This is H4
##### This is H5

---

## Text Formatting

You can make text **bold**, *italic*, ***bold and italic***, or ~~strikethrough~~.

You can also use `inline code` for technical terms or variables.

---

## Links

[This is an external link](https://example.com)

[This is an internal link to another post](/immunology/another-post)

You can also use bare URLs: https://example.com

---

## Lists

### Unordered Lists

- First item
- Second item
- Third item
  - Nested item
  - Another nested item
    - Double nested
- Back to main level

### Ordered Lists

1. First step
2. Second step
3. Third step
   1. Sub-step A
   2. Sub-step B
4. Fourth step

### Mixed Lists

- Unordered item
  1. Ordered sub-item
  2. Another ordered sub-item
- Back to unordered

---

## Blockquotes

> This is a blockquote. It's great for highlighting important passages or quotes from sources.

> You can have multiple paragraphs in a blockquote.
>
> Just add blank lines between them.

Nested quotes:

> This is a quote
>> This is a nested quote
>>> And this is even more nested

---

## Code Blocks

### Inline Code

Use backticks for `inline code` like variable names or short commands.

### Code Blocks with Syntax Highlighting

**JavaScript:**
```javascript
function calculateDosage(weight, concentration) {
  const dosage = weight * concentration;
  return dosage.toFixed(2);
}

console.log(calculateDosage(70, 0.5)); // 35.00
```

**Python:**
```python
def calculate_half_life(initial, current, time):
    """Calculate half-life from decay data"""
    import math
    k = -math.log(current / initial) / time
    half_life = math.log(2) / k
    return half_life

# Example usage
t_half = calculate_half_life(100, 50, 24)
print(f"Half-life: {t_half:.2f} hours")
```

**Bash/Shell:**
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

**No language specified:**
```
This is a plain code block
No syntax highlighting
Good for plain text
```

---

## Math Equations (KaTeX)

### Inline Math

The equation $E = mc^2$ is Einstein's famous mass-energy equivalence.

The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

Chemical formulas: $H_2O$, $CO_2$, $C_6H_{12}O_6$ (glucose)

Greek letters: $\alpha$, $\beta$, $\gamma$, $\delta$, $\theta$, $\lambda$, $\mu$

### Display Math (Centered)

The Henderson-Hasselbalch equation for pH:

$$
pH = pK_a + \log \frac{[A^-]}{[HA]}
$$

Michaelis-Menten kinetics:

$$
v = \frac{V_{max}[S]}{K_m + [S]}
$$

Population growth model:

$$
\frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right)
$$

The Nernst equation:

$$
E = E^0 - \frac{RT}{nF}\ln Q
$$

Complex matrix:

$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}
$$

---

## Tables

### Basic Table

| Parameter | Normal Range | Units |
|-----------|-------------|-------|
| Heart Rate | 60-100 | bpm |
| Blood Pressure | 120/80 | mmHg |
| Temperature | 36.5-37.5 | °C |
| Glucose | 70-100 | mg/dL |

### Aligned Columns

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left | Center | Right |
| Data | Data | Data |
| More | More | More |

### Complex Table

| Vaccine Type | Antigen | Adjuvant | Doses | Efficacy |
|--------------|---------|----------|-------|----------|
| mRNA | Spike protein mRNA | Lipid nanoparticle | 2 | 95% |
| Viral vector | Adenovirus + spike | None | 1-2 | 70-90% |
| Protein subunit | Recombinant spike | Alum/AS01 | 2 | 80-90% |
| Inactivated | Whole virus | Alum | 2-3 | 50-80% |

---

## Images

### Basic Image

![Cell structure diagram](/blog-images/reference/cell-diagram.png)

### Image with Description

![The structure of an antibody showing heavy and light chains](/blog-images/reference/antibody.png)

*Figure 1: Schematic representation of an IgG antibody molecule*

---

## Citations & Footnotes

### Basic Citations

The development of vaccines has saved millions of lives[^1]. Recent advances in mRNA technology have accelerated vaccine development[^2].

### Multiple References

COVID-19 vaccines use several different platforms[^3][^4][^5].

### Named References

The concept of herd immunity[^herd-immunity] is crucial for population-level protection.

### Inline Explanation

The half-life of this drug is approximately 6 hours[^half-life-note].

---

## Horizontal Rules

Use three hyphens, asterisks, or underscores:

---

***

___

---

## Special Characters & Escaping

### Special Characters

- Em dash: —
- En dash: –
- Ellipsis: …
- Copyright: ©
- Trademark: ™
- Registered: ®
- Degrees: 37°C
- Plus/minus: ±
- Multiplication: ×
- Division: ÷
- Arrows: → ← ↑ ↓

### Escaping Special Markdown Characters

To show asterisks without italics: \*not italic\*

To show backticks: \`not code\`

To show brackets: \[not a link\]

---

## Combining Features

### Example: Complex Scientific Content

In a randomized controlled trial (RCT), researchers investigated the efficacy of Drug X[^drug-x] in treating hypertension.

**Study Design:**
- Double-blind, placebo-controlled
- N = 500 participants
- Duration: 12 weeks

**Results:**

| Group | Baseline BP | Final BP | Change | p-value |
|-------|------------|----------|--------|---------|
| Drug X | 145/95 | 125/82 | -20/-13 | <0.001 |
| Placebo | 144/94 | 142/92 | -2/-2 | 0.45 |

The mean arterial pressure (MAP) was calculated using:

$$
MAP = \frac{SBP + 2(DBP)}{3}
$$

Where SBP is systolic blood pressure and DBP is diastolic blood pressure.

> "This represents a clinically significant reduction in cardiovascular risk." - Lead Researcher

The pharmacokinetics showed:
```python
# Calculate drug concentration over time
def concentration(dose, t, k_e):
    """First-order elimination"""
    C_0 = dose / V_d  # Initial concentration
    C_t = C_0 * math.exp(-k_e * t)
    return C_t
```

Key findings include[^findings]:
1. Significant BP reduction in treatment group
2. Minimal side effects (headache: 5%, dizziness: 3%)
3. Sustained effect throughout 12-week period
4. No difference in efficacy by age or gender

---

## Best Practices

### Writing Tips

1. **Use descriptive headers** - Break content into logical sections
2. **Keep paragraphs focused** - One idea per paragraph
3. **Use lists for scanability** - Bullets or numbers for multiple points
4. **Include citations** - Back up claims with references
5. **Add visual breaks** - Use quotes, code blocks, or images
6. **Write for clarity** - Prefer simple language over jargon

### Markdown Tips

- Preview your content locally with `npm run dev`
- Check that all links work before publishing
- Optimize images before uploading (< 1MB)
- Use consistent citation formatting (APA, MLA, etc.)
- Test math equations render correctly
- Ensure code blocks specify language for syntax highlighting

---

## References Section

[^1]: Plotkin, S.A. "Vaccines: past, present and future." *Nature Medicine* 11.4 (2005): S5-S11.

[^2]: Pardi, N., et al. "mRNA vaccines — a new era in vaccinology." *Nature Reviews Drug Discovery* 17.4 (2018): 261-279.

[^3]: Polack, F.P., et al. "Safety and Efficacy of the BNT162b2 mRNA Covid-19 Vaccine." *New England Journal of Medicine* 383.27 (2020): 2603-2615.

[^4]: Baden, L.R., et al. "Efficacy and Safety of the mRNA-1273 SARS-CoV-2 Vaccine." *New England Journal of Medicine* 384.5 (2021): 403-416.

[^5]: Sadoff, J., et al. "Safety and Efficacy of Single-Dose Ad26.COV2.S Vaccine against Covid-19." *New England Journal of Medicine* 384.23 (2021): 2187-2201.

[^herd-immunity]: Fine, P., et al. "Herd immunity: a rough guide." *Clinical Infectious Diseases* 52.7 (2011): 911-916.

[^half-life-note]: Half-life is the time required for a quantity to reduce to half its initial value. For drugs, this determines dosing frequency.

[^drug-x]: All drug names in this example are fictional and for demonstration purposes only.

[^findings]: Results are illustrative examples for markdown demonstration, not from an actual study.

---

## File Location Note

**This reference document is stored in:** `docs/markdown-reference.md`

It is **NOT** in `src/content/posts/` so it will not appear on the live site. This keeps your site clean while providing a complete reference for content creation.

To create a real post, copy the structure you need to a new file in `src/content/posts/`.

---

**Last Updated:** 2025-12-08
