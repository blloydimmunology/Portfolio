---
title: "Enzyme Inhibition"
date: "2026-02-11"
preview: "Enzyme inhibitors and how that impacts parameters"
topic: "MCAT"
subtopics: ["Bio/Biochem"]
image: "/blog-images/blog31_1.jpeg"
---

# Enzyme Inhibition

This is one of the most consistently tested biochemistry topics, and almost all of it comes down to two questions: does the inhibitor bind free enzyme, the enzyme-substrate complex, or both — and what does that do to Vmax and Km.

## The Two Parameters

Everything is expressed in terms of these, so they need to be solid.

**Vmax** is the maximum rate, reached when all enzyme is saturated with substrate. It depends on how much functional enzyme is present and how fast each molecule turns over. Vmax = kcat[E]total.

**Km** is the substrate concentration at which the rate is half of Vmax. Operationally it is a measure of **apparent affinity**: low Km means the enzyme reaches half-maximal velocity at low substrate concentration, so it binds substrate tightly. High Km means weak apparent binding.

The inverse relationship matters. **Km and affinity move in opposite directions.** Increased Km = decreased affinity.

## Competitive

**Binds:** free enzyme only, at the active site.

A competitive inhibitor resembles the substrate and occupies the active site. Substrate and inhibitor compete for the same location, and only one can be bound at a time.

**Effect:** Km increases, Vmax unchanged.

Km increases because you need more substrate to reach half-max — some of your enzyme is tied up at any moment. Apparent affinity drops.

Vmax is unchanged because the inhibition is **surmountable**. Pile on enough substrate and it outcompetes the inhibitor, and the enzyme reaches full speed. This is the defining feature: competitive inhibition can be overcome by adding substrate.

**Example:** methotrexate on dihydrofolate reductase. Also the classic malonate on succinate dehydrogenase.

## Noncompetitive

**Binds:** free enzyme and the ES complex equally, at an allosteric site.

The inhibitor binds somewhere other than the active site, and it does not care whether substrate is bound. Binding changes the enzyme's conformation so it cannot catalyze, but substrate binding itself is unaffected.

**Effect:** Vmax decreases, Km unchanged.

Vmax drops because inhibited enzyme molecules are effectively removed from the pool — you have less functional enzyme, and no amount of substrate recovers them. Not surmountable.

Km is unchanged because the inhibitor binds free E and ES with equal affinity, so it does not shift the balance between them. The enzyme that remains active binds substrate normally.

## Uncompetitive

**Binds:** the ES complex only.

The inhibitor's binding site only exists once substrate is bound and the enzyme has changed conformation. It cannot bind free enzyme.

**Effect:** Vmax decreases, Km decreases.

Vmax drops for the same reason as noncompetitive — functional enzyme is being removed.

Km *decreases* because the inhibitor sequesters ES. Removing ES from the equilibrium pulls E + S toward ES by Le Châtelier, so the enzyme appears to bind substrate more tightly. Apparent affinity increases.

This is the counterintuitive one, and it is why uncompetitive inhibition is a favorite MCAT question. **Adding more substrate makes uncompetitive inhibition worse**, because more substrate means more ES, which means more inhibitor binding sites.

## Mixed

**Binds:** both free enzyme and ES, but with *different* affinities.

**Effect:** Vmax decreases. Km increases or decreases depending on which form the inhibitor prefers.

- Prefers free E → Km increases (behaves more competitively)
- Prefers ES → Km decreases (behaves more uncompetitively)

Noncompetitive is technically the special case of mixed where the affinities happen to be equal. Some sources treat noncompetitive as a subtype of mixed; the MCAT generally lists them separately.

## The Table

| Type | Binds | Vmax | Km | Surmountable by substrate? |
|---|---|---|---|---|
| Competitive | Free E (active site) | — | ↑ | Yes |
| Noncompetitive | E and ES equally | ↓ | — | No |
| Uncompetitive | ES only | ↓ | ↓ | No (worsens) |
| Mixed | E and ES unequally | ↓ | ↑ or ↓ | No |

A pattern worth noticing: **only competitive leaves Vmax alone.** Everything else lowers it. And **only noncompetitive leaves Km alone.**

## Lineweaver-Burk

The double reciprocal plot, 1/v vs. 1/[S], turns the hyperbola into a straight line so the parameters can be read off intercepts.

- **y-intercept = 1/Vmax.** Higher intercept means lower Vmax.
- **x-intercept = −1/Km.** Further right (less negative) means smaller Km.
- **slope = Km/Vmax**

Reading inhibition from the plot:

**Competitive:** lines intersect on the **y-axis**. Same Vmax, so same y-intercept. Slope increases.

**Noncompetitive:** lines intersect on the **x-axis**. Same Km, so same x-intercept. Y-intercept rises.

**Uncompetitive:** lines are **parallel**. Both Vmax and Km decrease proportionally, so the slope (Km/Vmax) is unchanged. Both intercepts shift up and right.

**Mixed:** lines intersect somewhere in the second or third quadrant, off both axes.

The three intersection patterns — y-axis, x-axis, parallel — are the fastest way to answer a plot question. Memorize those three and you can identify the inhibitor type from the graph in a few seconds.

## Reversible vs. Irreversible

All four types above are **reversible** — the inhibitor binds noncovalently and dissociates.

**Irreversible inhibitors** form covalent bonds and permanently inactivate the enzyme. Kinetically this looks like noncompetitive inhibition (Vmax down, Km unchanged), because the effect is simply removing enzyme molecules from the pool.

Examples: aspirin acetylating COX, penicillin on transpeptidase, organophosphates on acetylcholinesterase.

**Suicide inhibitors** are a subtype: the enzyme processes them as if they were substrate, and the reaction generates a reactive species that covalently modifies the active site. The enzyme kills itself by doing its job.

## Allosteric Regulation

Related but distinct, and the MCAT does test the distinction.

**Allosteric enzymes** have multiple subunits and multiple binding sites, and show **sigmoidal** kinetics rather than hyperbolic — because of cooperativity between subunits. Hemoglobin is the standard example of a cooperative binding protein, though it is not an enzyme.

Allosteric *inhibitors* bind a regulatory site and stabilize the low-affinity conformation. Allosteric *activators* stabilize the high-affinity form.

**Feedback inhibition** is the physiological version: the end product of a pathway inhibits an early enzyme, usually the committed step. This is regulation, not poisoning.

Michaelis-Menten kinetics assumes non-cooperative, single-site behavior, so allosteric enzymes do not fit it and their curves are sigmoidal rather than hyperbolic. If a graph is S-shaped, do not reach for Km.

## Other Regulatory Mechanisms

Worth knowing as distinct from inhibition:

- **Covalent modification** — phosphorylation by kinases, dephosphorylation by phosphatases. Reversible, and can activate or inhibit depending on the enzyme.
- **Zymogens** — enzymes synthesized as inactive precursors and activated by proteolytic cleavage. Trypsinogen → trypsin, pepsinogen → pepsin, and the clotting cascade. Irreversible once cleaved.

## What Gets Tested

- **Identify inhibitor type from a Lineweaver-Burk plot** — use the intersection point
- **Identify from a Vmax/Km table** — use the two-parameter pattern
- **"Can adding substrate overcome this?"** — yes only for competitive
- **A drug described as a substrate analog** — competitive
- **A drug binding away from the active site** — noncompetitive or mixed
- **The uncompetitive trap** — recognizing that Km *decreases* and that substrate makes it worse

The fastest route through most questions: figure out what the inhibitor binds. Free enzyme only → competitive. ES only → uncompetitive. Both → noncompetitive or mixed. The Vmax and Km effects follow from there without separate memorization.