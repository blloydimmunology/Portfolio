---
title: "Sn1 vs Sn2 Reactions"
date: "2026-02-11"
preview: "Substitution Reactions!"
topic: "MCAT"
subtopics: ["Chem/Phys"]
image: "/blog-images/blog28_1.png"
---

Nucleophilic substitution shows up on the MCAT less as a synthesis question and more as a reasoning question: given a substrate and conditions, which mechanism runs, and what happens to stereochemistry. Almost every question reduces to a small set of variables, and if you can rank those variables you can answer most of them without memorizing much.

## The Core Difference

**SN2** is one step. The nucleophile attacks the electrophilic carbon while the leaving group is still attached, passing through a five-coordinate transition state where both are partially bonded. Bond forming and bond breaking are simultaneous. Rate = k[substrate][nucleophile] — bimolecular, hence the 2.

**SN1** is two steps. The leaving group departs first, generating a carbocation. The nucleophile then attacks that carbocation. The first step is slow and rate-determining, so the nucleophile's concentration does not appear in the rate law. Rate = k[substrate] — unimolecular.

Everything else follows from this. SN2 has one transition state and no intermediate. SN1 has a genuine carbocation intermediate, and carbocations do carbocation things.

## Substrate: The Dominant Variable

If you only check one thing, check the substrate.

**SN2 favors less substituted carbons.** The nucleophile has to reach the electrophilic carbon, and alkyl groups get in the way. Steric hindrance kills it.

Methyl > primary > secondary >> tertiary (essentially zero)

**SN1 favors more substituted carbons**, because carbocation stability drives the rate-determining step. Alkyl groups donate electron density inductively and through hyperconjugation.

Tertiary > secondary >> primary (essentially zero) > methyl (never)

Note the inversion. Primary substrates go SN2 or nothing. Tertiary substrates go SN1 or nothing. Secondary is the ambiguous case where the other variables decide — which is exactly why MCAT questions use secondary substrates when they want to test whether you understand conditions.

**Two special cases worth knowing:**

- **Allylic and benzylic** substrates are good for *both*. The carbocation is resonance-stabilized (helping SN1), and the adjacent π system stabilizes the SN2 transition state too. If you see allylic or benzylic, substrate is not the deciding factor.
- **Neopentyl** (a primary carbon with a quaternary carbon next door) is primary but effectively SN2-inert. The β-branching blocks backside attack. This is a favorite trap.

## Nucleophile

**SN2 requires a strong nucleophile.** It participates in the rate-determining step, so its strength matters directly. Strong nucleophiles are usually anionic and often bear a negative charge on a large, polarizable atom: HO⁻, RO⁻, CN⁻, N₃⁻, HS⁻, I⁻.

**SN1 works with weak nucleophiles.** The nucleophile shows up after the hard part is over. Often it *is* the solvent — water, methanol, ethanol. When the solvent is the nucleophile, the reaction is called solvolysis, and solvolysis is a strong SN1 signal.

Quick heuristic: **strong, anionic nucleophile → SN2. Weak, neutral nucleophile → SN1.**

Nucleophilicity vs. basicity trips people up. In protic solvents, nucleophilicity increases down a group (I⁻ > Br⁻ > Cl⁻ > F⁻) because larger anions are less solvated and more polarizable. Basicity goes the opposite direction. They are not the same property — one is kinetic (attacking carbon), the other thermodynamic (grabbing protons).

## Solvent

**Polar aprotic favors SN2.** DMSO, DMF, acetone, acetonitrile. These solvate the cation but cannot hydrogen-bond to the anionic nucleophile, leaving it "naked" and highly reactive.

**Polar protic favors SN1.** Water, alcohols, carboxylic acids. They hydrogen-bond to and stabilize the carbocation and the departing leaving group, accelerating ionization. They also cage anionic nucleophiles, which suppresses SN2.

Mnemonic that works: protic has the proton to donate for hydrogen bonding. Aprotic does not.

## Leaving Group

Both mechanisms need a good leaving group, so this rarely distinguishes them — but it matters more for SN1, since the leaving group departs in the rate-determining step.

Good leaving groups are weak bases (stable once they leave): I⁻ > Br⁻ > Cl⁻ >> F⁻, plus tosylate, mesylate, and water.

Terrible leaving groups: HO⁻, RO⁻, NH₂⁻, H⁻. This is why alcohols do not undergo substitution directly — you have to protonate the OH first, converting it to water, or convert it to a tosylate.

## Stereochemistry

This is the highest-yield piece and the most commonly tested.

**SN2 gives inversion.** The nucleophile attacks 180° from the leaving group — backside attack — and the other three substituents flip through, like an umbrella in wind. This is **Walden inversion**. If the carbon is a stereocenter, R becomes S (or S becomes R), and the product is a single enantiomer.

Caution: the R/S label can occasionally stay the same if priority rankings shift with the new substituent. The *spatial* arrangement always inverts. Check the geometry, not the letter.

**SN1 gives racemization** — in principle. The carbocation is sp², trigonal planar, and the nucleophile attacks either face with roughly equal probability. You get a mix of R and S.

In practice the mixture is usually not exactly 50:50. The leaving group lingers near the face it left from, partially blocking it, so you typically see slight excess inversion. The MCAT usually says "racemic mixture," but "predominantly racemic with slight inversion" is the more accurate version and occasionally appears as an answer choice.

## Rearrangements

Only SN1. Because there is a carbocation, and carbocations rearrange to become more stable.

**Hydride shift**: an H moves from an adjacent carbon with its electrons, shifting the positive charge.
**Methyl shift**: same idea with a CH₃ group, used when no hydride is available.

Both are 1,2-shifts — the group moves to the immediately adjacent carbon. Secondary carbocations next to tertiary carbons rearrange readily.

If a question gives you a substrate where rearrangement would produce a more stable cation and the product connectivity is different from what you expected, that is the answer. SN2 never does this — no intermediate, no opportunity.

## Competing E1 and E2

Substitution and elimination compete for the same substrates, and the MCAT knows it.

- **Strong bulky base** (tert-butoxide, LDA) → E2. Too big to attack carbon, so it grabs a proton instead.
- **Strong non-bulky nucleophile/base** on primary → SN2 wins.
- **Heat** → favors elimination generally (entropy: more particles in the products).
- **Tertiary substrate + strong base** → E2.
- **Tertiary substrate + weak nucleophile, protic solvent** → SN1 with E1 alongside. These share the carbocation intermediate, so you get both.

A useful framing: strong bases that are poor nucleophiles do E2. Strong nucleophiles that are weak bases (CN⁻, N₃⁻, I⁻, RS⁻) do SN2 cleanly.

## The Decision Sequence

For a typical question, run this in order:

1. **Substrate.** Tertiary → SN1/E1. Primary → SN2/E2. Secondary → keep going.
2. **Nucleophile.** Strong and anionic → SN2. Weak or neutral → SN1.
3. **Solvent.** Aprotic → SN2. Protic → SN1.
4. **Base bulk.** If the nucleophile is a bulky strong base → elimination.

Most secondary-substrate questions are resolved at step 2 or 3.

## Quick Reference

| | SN1 | SN2 |
|---|---|---|
| Steps | 2 | 1 |
| Rate law | k[substrate] | k[substrate][Nu] |
| Intermediate | Carbocation | None (TS only) |
| Substrate | 3° > 2° >> 1° | CH₃ > 1° > 2° >> 3° |
| Nucleophile | Weak, often solvent | Strong, anionic |
| Solvent | Polar protic | Polar aprotic |
| Stereochemistry | Racemization | Inversion |
| Rearrangement | Yes | No |

## What Actually Gets Tested

The MCAT rarely asks "is this SN1 or SN2" as a bare question. It embeds it:

- A stereochemistry question where you have to know the product is inverted or racemic
- A rate question where doubling nucleophile concentration does or does not change rate — this distinguishes the mechanisms directly
- A passage on drug metabolism or a synthetic route where substitution is one step
- An unexpected product from rearrangement

If you know that the rate law difference is the operational definition and that stereochemistry follows from whether an intermediate exists, most of it reconstructs itself.