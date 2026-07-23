---
title: "The Most Cited Paper Nobody Reads"
date: "2026-02-11"
preview: "This paper has been cited well over 300,000 times, which for most of the last several decades made it the most cited paper in the scientific literature."
topic: "Random"
subtopics: ["Science", "Methods"]
image: "/blog-images/blog23_1.jpeg"
---

This paper has been cited well over 300,000 times, which for most of the last several decades made it the most cited paper in the scientific literature. That fact is usually deployed as a curiosity — a methods paper outranking every conceptual advance in biology. The more interesting framing is that the citation count is almost entirely disconnected from what the paper actually contains.

Lowry and colleagues did not discover the reaction. Wu had proposed using the Folin phenol reagent for protein measurement in 1922, and by 1951 at least half a dozen modified procedures were in circulation. What this paper does is characterize the assay's failure modes: how it responds to pH, timing, copper concentration, and the dozens of substances a biochemist might have in a tube. It is a paper about the conditions under which an existing method can be trusted. That it became the canonical citation is a consequence of the characterization, not the chemistry.

## The Problem

The authors state it plainly in the opening. The reagent had obvious virtues — sensitivity and procedural simplicity — and had not caught on for general biochemical use.

The reason is implicit in what follows. A method that works only under conditions you have not mapped is not a method; it is a source of numbers you cannot defend. Anyone adopting the Folin reagent in 1951 would have had no way to know whether an unexpected reading meant low protein, a slightly off pH, a few seconds' delay in mixing, or trace glycine in their buffer. The barrier to adoption was not that the assay failed. It was that nobody had written down when it failed.

## Background Science

Two chemistries stack here, and the paper is careful to separate them.

The first is the biuret reaction. In alkaline solution, Cu²⁺ coordinates to the nitrogen atoms of peptide bonds, forming a violet complex. Because it reads the backbone rather than side chains, biuret response is roughly proportional to peptide bond count and therefore fairly uniform across proteins. Its weakness is sensitivity — you need milligrams.

The second is reduction of the Folin-Ciocalteu reagent, a phosphomolybdic-phosphotungstic mixture that turns blue when reduced. Tyrosine and tryptophan reduce it, which means the raw reaction reads aromatic residue content. That is a poor proxy for total protein, since aromatic content varies enormously between proteins.

The insight the paper investigates is that these two in sequence do something neither does alone. Pretreating with alkaline copper increases Folin color three to fifteen fold, but the same copper treatment barely affects free tyrosine and tryptophan. The copper is not simply making the aromatics more reactive. Something about the copper-peptide complex is itself reducing the reagent.

## What They Did

The paper is a systematic characterization, and the findings distribute across roughly four questions.

**What the copper is doing.** Fitting a simple binding equilibrium to low-copper data gives an apparent dissociation constant near 3 × 10⁻⁶ M, with maximum chromogenic copper of about one mole per seven or eight amino acid residues. Compared against published biuret measurements — where roughly one copper binds per four residues, with dissociation constants about tenfold weaker — this implies that only about half the copper-binding sites produce Folin reduction, and that those sites bind copper considerably more tightly than the rest. A subpopulation of binding sites, not all of them.

**Timing, and why it is unforgiving.** The Folin reagent at pH 10 is reactive only briefly. Its yellow phosphomolybdate color decays with a half-time of about 8 seconds, presumably as phosphate dissociates from molybdate. This is why the procedure specifies adding reagent E "very rapidly" and mixing within a second or two — a few seconds of hesitation costs color. Strangely, once protein is present the color keeps developing for many minutes after the reagent has stopped being able to react with freshly added protein. The absorption spectrum changes shape between 3 and 30 minutes, which the authors read as rearrangement of the primary reduction product rather than continued reduction.

**Buffering.** Adding Folin reagent liberates acid during the first minute. Maximum color requires holding near pH 10 through that transient, and the paper shows that NaOH sufficient to neutralize the phosphoric acid combined with Na₂CO₃ as buffer gives more color than any amount of either alone. This is the sort of detail that determines whether a protocol reproduces in someone else's hands.

**Interference, catalogued.** Non-interfering at stated concentrations: urea, guanidine, sodium tungstate, sulfate, nitrate, neutralized perchloric and trichloroacetic acid, ethanol, ether, acetone, zinc sulfate, barium hydroxide. Interfering: most phenols (thymol notably), uric acid, guanine and xanthine, ammonium sulfate above about 0.15%, hydrazine. Glycine at 0.5% cuts protein color in half. Guanine gives about 50% more color than serum protein by weight, while guanosine barely reacts and purified hypoxanthine gives none — a specificity pattern with no obvious explanation offered.

The paper is equally direct about the assay's two structural weaknesses. Chromogenicity varies between proteins by up to threefold (trypsin versus gelatin at the extremes), and color is not strictly linear with concentration. Both are stated as facts to work around, not minimized.

## What's New?

- Copper-treated protein reduces the Folin reagent through a mechanism distinct from free aromatic amino acids
- Only about half of biuret copper-binding sites generate Folin color, and those bind copper about tenfold more tightly
- Folin reagent reactivity decays with an ~8 second half-time, making mixing speed a determinant of the result
- Color continues developing after the reagent is spent, with a spectral shift suggesting product rearrangement
- Combined NaOH/carbonate buffering outperforms either alone
- Detection to 0.2 μg with a microprocedure, roughly 100× more sensitive than biuret and 10–20× more than A280
- A working list of interfering and non-interfering substances at defined concentrations

## My Interpretation

The characteristic that makes this paper work is that it is written by people who clearly ran the assay badly many times before writing it.

The evidence is in the footnotes, which are the best part of the paper. There is a footnote on cleaning 3 mm tubes: rinse with dilute NaOH, boil in half-concentrated nitric acid, rinse repeatedly in redistilled water, and empty by slow centrifugation into a beaker with a false bottom of steel screen so the beakers do not break. There is a footnote defining "buzzing" — holding a tube at an angle against a rapidly rotating flattened rod or nail, with the observation that a commercial rubber-tipped massage vibrator works about as well. There is a footnote on the specific difficulty of redissolving precipitated bovine serum albumin, reporting that overnight standing recovers 97% of the signal while 30 minutes at 100° recovers only 82%.

None of that is chemistry. All of it is the difference between a protocol that works in the author's hands and one that works in yours. The paper's implicit theory is that a method is not a reaction but a reaction plus the full set of conditions under which it behaves — and that the second part is where the real information lives, because it is what nobody publishes.

That, I think, is the actual explanation for the citation count, and it is more interesting than "everyone measures protein." Everyone did measure protein before 1951, using other methods. What this paper supplied was a version you could adopt without repeating the failure modes yourself. It converted a technique into infrastructure, and infrastructure gets cited every time it is used.

There is a mild irony worth noting. The authors are honest about the assay's limitations — variable chromogenicity, nonlinearity — and recommend it for specific applications where those limitations do not bite: enzyme fractionation, mixed tissue proteins where absolute values are not needed, very small samples, large batches of similar samples. It has since been used for essentially everything, frequently without a standard curve run under matched conditions, which is exactly the practice the paper's careful characterization was meant to prevent. The method outran its own caveats.

## What I'd Do Next

The mechanism is left genuinely open, and it is not clear it was ever fully closed afterward. Copper binds peptide nitrogens; copper-treated protein reduces phosphomolybdate far better than aromatics alone; only half the copper sites contribute. The obvious follow-up in 1951 would have been to identify what distinguishes the productive sites — sequence context, coordination geometry, redox potential of the resulting complex. Some of this was later addressed, but the assay's chemistry remained fuzzier for longer than its ubiquity would suggest.

The rearrangement observation deserved more. The reagent goes unreactive after seconds, yet color develops for tens of minutes with a shifting spectrum. That is a real chemical phenomenon that the paper flags and then sets aside. Following it would probably have said something about the identity of the reduced species.

The protein-to-protein variability is the limitation with the most practical weight. Trypsin and gelatin differ threefold; gelatin's low tyrosine and tryptophan content is presumably part of the story, but the paper shows copper reduces the spread rather than eliminating it. Working out what predicts a protein's chromogenicity — aromatic content alone, or something about backbone accessibility to copper — would let users correct rather than caveat. In practice the field mostly solved this by switching to Bradford and BCA, which have their own protein-dependent biases. The problem was routed around, not solved.

## Something I Learned

Reading this made me reconsider what a methods paper is for. My default assumption has been that they describe procedures, and that the value is in the procedure. This paper suggests the value is in the boundary conditions: the pH range where color is maximal, the seconds of delay that cost you signal, the 0.5% glycine that halves your reading, the tube diameter below which everything reads low for reasons the authors could not identify and say so.

That last one stuck with me. Microanalysis in wide tubes gives systematically low color; extensive testing did not identify the cause; oxygen, carbon dioxide, and glass surface were ruled out. They report the effect, report their failure to explain it, and give the practical workaround — slender tubes, standards run under identical conditions. There is no attempt to construct a plausible-sounding mechanism to fill the gap.

Reporting a robust effect you cannot explain, clearly labeled as unexplained, is more useful to a reader than a speculative mechanism would have been. It tells you exactly what to do and exactly how much to trust the reasoning behind it. I suspect a lot of what makes a protocol survive seventy-five years is that kind of honesty about where the authors' understanding stopped.

## References

1. Lowry, O. H., Rosebrough, N. J., Farr, A. L., & Randall, R. J. Protein measurement with the Folin phenol reagent. *Journal of Biological Chemistry* 193(1):265–275 (1951).