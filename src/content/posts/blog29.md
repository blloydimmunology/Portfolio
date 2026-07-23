---
title: "Reaction Coordinate Diagrams and What Enzymes Do"
date: "2026-02-11"
preview: "A little about enzymes!"
topic: "MCAT"
subtopics: ["Chem/Phys"]
image: "/blog-images/blog29_1.png"
---

Energy diagrams are one of the few MCAT topics where the entire question is often answerable by reading the picture correctly. The trick is knowing which vertical distance means what, and being clear that enzymes change exactly one of them.

## Reading the Diagram

The x-axis is the **reaction coordinate** — progress from reactants to products. It is not time and not a physical distance. The y-axis is free energy, G.

Three features matter.

**Reactants and products** sit at the left and right, at whatever energy levels they have.

**ΔG** is the vertical difference between them. Negative ΔG (products lower than reactants) means the reaction is spontaneous, or exergonic. Positive ΔG means non-spontaneous, endergonic. This tells you about **thermodynamics** — whether the reaction is favorable and where equilibrium sits.

**Ea**, the activation energy, is the vertical distance from the reactants *up to the peak*. This is the barrier that has to be crossed. It tells you about **kinetics** — how fast the reaction goes.

The single most important thing on this topic: **ΔG and Ea are independent.** A reaction can be wildly favorable and still take a thousand years, because a large negative ΔG says nothing about the barrier. Diamond converting to graphite is spontaneous. It has an enormous activation energy.

## The Peak Is the Transition State

The top of the curve is the **transition state**, sometimes written with a double dagger (‡).

It is not an intermediate. It is a fleeting arrangement at the point of maximum energy — bonds partially broken and partially formed, existing for roughly a bond vibration. It cannot be isolated.

An **intermediate** is different: it sits in a *valley* between two peaks. It is a real species with real bonds, and can sometimes be detected or isolated. A carbocation in SN1 is an intermediate.

So: peaks are transition states, valleys between peaks are intermediates. A multi-step reaction has multiple humps.

**The rate-determining step is the step with the highest peak** — specifically, the highest energy point relative to the starting material. If a two-hump diagram shows the first peak higher, step one is rate-determining.

## What Enzymes Change

Enzymes **lower Ea**. That is it.

They do this by stabilizing the transition state, which pulls the peak down. Lower barrier, faster reaction — in both directions equally.

What enzymes **do not** change:

- **ΔG.** The reactants and products sit at the same energies with or without enzyme. Thermodynamics is a property of the molecules, not the path.
- **Keq.** Since ΔG° = −RT ln Keq, unchanged ΔG means unchanged equilibrium constant.
- **The equilibrium position.** An enzyme gets you to equilibrium faster; it does not shift where equilibrium is.
- **Whether the reaction is spontaneous.** An enzyme cannot make an endergonic reaction favorable on its own.

Enzymes are also **not consumed** by the reaction they catalyze.

If a question shows a diagram with the product energy lowered, or the ΔG changed, that is not an enzyme.

## Both Directions, Equally

Because the enzyme lowers the single peak both reactions share, it accelerates the forward and reverse reactions by the same factor. Catalysis is direction-agnostic.

This follows necessarily from Keq being unchanged. If an enzyme sped up only the forward direction, the ratio of rate constants would change, and so would the equilibrium constant — which would mean catalysis creates free energy from nothing.

## How Ea Gets Lowered

Mechanistic detail is lower-yield than the conceptual point, but a few show up in passages.

**Transition state stabilization** — the central idea. The active site binds the transition state more tightly than it binds the substrate. This is the modern formulation and it explains why transition-state analogs are potent binders.

**Proximity and orientation** — holding two substrates near each other in the right geometry. This is largely an entropic effect: much of the cost of a bimolecular reaction is bringing two molecules together in the correct alignment, and the enzyme pays that cost in advance.

**Acid-base catalysis** — active site residues donate or accept protons. Histidine is the standard example, since its pKa near 6 means it can do either at physiological pH.

**Covalent catalysis** — the enzyme forms a temporary covalent bond with the substrate, opening a lower-energy path. Serine proteases work this way.

**Metal ion catalysis** — metals stabilize developing negative charge, orient substrates, or participate in redox.

**Induced fit** is worth distinguishing from lock-and-key. Lock-and-key says the active site is pre-shaped and rigid. Induced fit says the enzyme changes conformation on binding, tightening around the substrate. Induced fit is the accepted model, and it connects to transition state stabilization — the conformational change often optimizes the fit to the transition state rather than the ground state.

## Coupling

Enzymes cannot make an unfavorable reaction favorable, but cells do run unfavorable reactions constantly. The mechanism is **coupling**: pairing an endergonic reaction with an exergonic one so the sum has negative ΔG.

ATP hydrolysis is the standard partner, at roughly −30.5 kJ/mol under standard conditions. An enzyme can couple ATP hydrolysis to an endergonic step, and the combined reaction proceeds. The enzyme facilitates it, but the driving force comes from the ATP, not the catalysis.

This distinction is testable: "how does the enzyme make this reaction spontaneous?" is a trick question. It does not. Coupling does.

## Diagram Questions to Expect

- **Identify Ea vs. ΔG.** Ea goes from reactants to peak; ΔG goes from reactants to products.
- **Which curve is catalyzed?** The one with the lower peak and identical endpoints.
- **Exergonic or endergonic?** Products below reactants → exergonic.
- **Rate-determining step?** Highest peak.
- **Number of intermediates?** Count the valleys between peaks.
- **Effect on equilibrium?** None.

A common trap: a diagram showing two curves where both the peak *and* the product energy differ. That is not catalysis — it is a different reaction or different products.

Another: asking about the reverse reaction's Ea. That is the distance from *products* up to the same peak. In an exergonic reaction the reverse barrier is larger, which is why the forward direction dominates.

## The One-Line Version

Ea is kinetics, ΔG is thermodynamics, enzymes lower Ea only, and they do it in both directions without touching the equilibrium.