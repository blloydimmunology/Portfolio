---
title: "The Brake That Comes With a Gas Pedal"
date: "2026-05-20"
preview: "The Rezvani lab identifies CREM, a transcription factor downstream of cAMP, as a checkpoint that CAR-NK cells install on themselves."
topic: "Immunotherapy"
subtopics: ["CAR-NK", "Epigenetics"]
image: "/blog-images/blog22_2.jpeg"
---

Immune checkpoints are usually surface receptors. PD-1, CTLA-4, TIGIT, NKG2A — molecules a tumor can engage from the outside to shut a lymphocyte down. That framing has been productive enough to define a decade of immuno-oncology, and it carries an implicit model: dysfunction is imposed on the immune cell by its environment.

This paper argues for a different location. The Rezvani lab identifies CREM, a transcription factor downstream of cAMP, as a checkpoint that CAR-NK cells install on themselves. It is induced by the two signals the field deliberately engineers into these products — CAR ITAM signaling and IL-15 — and deleting it makes the cells substantially better. The brake, in other words, is not something the tumor applies. It comes bundled with the activation.

## The Problem

Checkpoint biology in NK cells is thinner than in T cells. TIGIT, TIM-3, NKG2A, and LAG-3 have established suppressive roles; PD-1 and CTLA-4 remain contested. Almost all of this work is on surface receptors, and almost none of it addresses transcription factors that negatively regulate the response from inside.

CAR-NK products compound the question. The clinically advanced constructs pair a CAR with an IL-15 transgene, because NK cells are short-lived and IL-15 extends them. This is the CAR19–IL-15 design that produced encouraging phase 1/2 results in CD19⁺ B cell malignancies. Both signals are intentionally maximized. What neither has been examined for is what regulatory machinery they switch on alongside the effector program.

## Background Science

CREM — cAMP response element modulator — sits in the canonical cAMP pathway. Rising intracellular cAMP activates protein kinase A, PKA phosphorylates CREB, and phosphorylated CREB binds cAMP response elements to drive transcription. CREM is one of the genes CREB drives, and CREM protein then binds many of the same elements.

The complication is that CREM is not one protein. Over forty human isoforms arise from alternative promoters and splicing. Some carry transactivation domains and act as activators (CREMτ and relatives); others lack them and act as repressors (CREMα, β, γ). ICER isoforms come from a separate internal promoter, have no transactivation domain, and repress exclusively. So "CREM is induced" is an ambiguous statement until you specify which products.

CREM is a known suppressor elsewhere — it attenuates cytokine transcription in T cells and contributes to regulatory phenotypes in macrophages. In NK cells it had been noted in single-cell datasets as marking particular subsets, with no functional work attached.

The relevant background from this same lab is the 2023 metabolic fitness paper: CAR19–IL-15 NK cells outlast standard CAR-NK cells but still exhaust, and tumors relapse when they do. This paper returns to that scRNA-seq dataset and asks what was transcriptionally distinctive at the moment the cells were working best.

## What They Did

Reanalyzing the Raji lymphoma model data, they found CREM among the top upregulated genes after infusion — and, importantly, at peak effector function. The same cells showed high GZMB, GZMH, and GNLY alongside upregulated inhibitory genes including KLRG1, KIR2DL3, and ADGRG1. Activation and dysfunction arriving together.

The induction experiments are where the mechanism gets nailed down, and they are unusually clean. Using a CD70-targeting CAR built from the CD27 extracellular domain, they made three variants: intact (CAR70), one with all six CD3ζ ITAM tyrosines mutated to phenylalanine (CAR70.3ζ.Y6F), and one with no intracellular domain at all (CD27 ECD). Antigen stimulation induced CREM only in the intact construct. Binding the antigen is not sufficient; ITAM signaling is required.

IL-15 induced CREM dose-dependently, more strongly than IL-2, blocked by IL-15 neutralization, and additively with CAR stimulation. Kinetics differ between the two: exogenous IL-15 gives a transient pulse — mRNA up by 6 hours, peaking at 24–48, back to baseline by 96. In the CAR–IL-15 construct, where IL-15 is secreted constitutively, CREM stays high indefinitely.

The pathway was established with pharmacology and ChIP. CAR ligation phosphorylated CREB, and neither the ITAM-dead nor the signaling-null construct did. The PKA inhibitor H89 blocked both phosphorylation and CREM induction; so did calcium chelation with EGTA. ChIP-qPCR showed CREB enriched at the CREM promoter, with pCREB binding increasing dose-dependently with IL-15. IL-15 also works partly through STAT5B, which binds the promoter directly, and STAT3, which does not — but CAR-driven induction happens with no detectable pSTAT3 or pSTAT5, so the PKA–CREB arm is independent.

The functional test was CRISPR knockout of a CREM exon shared by most non-ICER isoforms, across two CAR designs (CAR70–IL-15 and CAR.TROP2–IL-15) and a spread of tumor models: renal carcinoma, breast PDX, Burkitt lymphoma, pancreatic, ovarian. Knockout improved killing in spheroid and impedance assays, most visibly at low effector-to-target ratios and in serial rechallenge. In mice, CREM-KO CAR70–IL-15 cells gave better tumor control, better survival, more proliferation in blood, and greater infiltration into lung, liver, marrow, and spleen. Blood counts, serum chemistry, and organ histology showed nothing attributable to the edit.

A dissection experiment is worth noting: knockout helped only where CAR or IL-15 signaling was present. Against CD70-knockout tumors, it still helped IL-15-secreting cells but not CAR70 cells without IL-15. Non-transduced NK cells were unaffected unless given exogenous IL-15. CREM only matters where the pathway that induces it is running.

The mechanism section moves to chromatin. CREM ChIP-seq showed occupancy rising with activation and binding at effector loci (IFNG, GZMB, LAMP1), calcium signaling genes, and regulatory factors. Integrating with RNA-seq, knockout downregulated exhaustion and stress genes (BTG1, DUSP2, SMAD3, NFKB2, RGS1) and upregulated GZMB, IFNG, and developmental factors. ATAC-seq gave the cleanest result in the paper: wild-type cells closed their chromatin after tumor co-culture, while knockout cells stayed open, retaining accessibility at PRF1, GZMA, EOMES, TBX21, and across mTORC1, MYC, E2F, and oxidative phosphorylation programs. Motif analysis showed AP-1 accessible and ETS closed in knockout cells — a pattern previously associated with long-lived memory T cells.

## What's New?

- CREM is induced by CAR ITAM signaling and by IL-15, through PKA–CREB, with IL-15 additionally routing through STAT5B
- Induction coincides with peak effector function, not with late failure
- Deleting CREM improves cytotoxicity, persistence, and tumor infiltration across five tumor models and two CAR designs, with no detected toxicity
- CREM acts epigenetically: wild-type cells close chromatin on tumor contact, knockout cells do not
- The knockout epigenetic signature — open AP-1, closed ETS — resembles memory T cell profiles
- Knockout matters only where CAR or IL-15 signaling is active, which limits the off-target surface

## My Interpretation

The finding that reorganizes the picture for me is that CREM peaks when the cells are working, not when they are failing. The intuitive model of exhaustion is a wearing-down: sustained stimulation depletes something, and function decays as a consequence. This looks more like a governor — a regulatory response proportional to activation strength, engaged at the top of the effector curve rather than at the bottom.

That has an uncomfortable implication for how the field builds these products. The IL-15 transgene exists because NK cells are short-lived, and it works. But the constitutive secretion that makes it work also holds CREM permanently high, where exogenous IL-15 would give a pulse that resolves. The engineering choice that extends persistence is simultaneously installing a durable brake. That is not an argument against IL-15 — the clinical data are good — but it does mean the construct is buying its persistence at a cost that was invisible until someone looked for it.

The ATAC-seq is the result I find most persuasive, and it changes what "exhaustion" means here. Wild-type cells meeting a tumor close their chromatin; knockout cells do not. That is not a cell that has run out of something. It is a cell executing a program, and programs can in principle be edited. This connects back to the lab's earlier metabolic work in a way that reframes it: the metabolic decline they described may be partly downstream of a transcriptional decision rather than a straightforward resource problem. The knockout cells showed better glycolytic capacity, which fits.

The AP-1/ETS signature is a striking piece of convergence. Finding that a CREM knockout NK cell lands on the same chromatin configuration as a long-lived memory T cell suggests something more general about how cytotoxic lymphocytes encode durability, arrived at from a direction nobody was aiming.

Where I would apply pressure is the isoform question, which the authors are upfront about. CREM has activator and repressor forms, and the knockout removes an exon shared by most non-ICER isoforms — meaning both kinds. The phenotype is clean, but "CREM restrains NK cells" is a coarse statement about a gene that produces mutually antagonistic products. Their own data show knockout both raising and lowering direct target genes, which is the signature of exactly this problem. Whether the therapeutic effect comes from removing repressors, and whether some activator isoform is being lost as collateral, is unresolved.

The safety framing also deserves a note. The toxicity assessment is reasonable for what it is — organ histology, blood counts, serum chemistry, stable weights — but NSG mice lack the immune system that would generate most of the toxicity you would worry about when deleting an intrinsic brake. The authors say as much. A safety signal in this model is meaningful; the absence of one is weaker evidence.

## What I'd Do Next

The isoform experiment is the obvious first move, and the tools are already in the paper. They made ICER-specific guides. Selectively knocking out repressor isoforms versus activator isoforms, and comparing to the pan-CREM edit, would establish whether the benefit is attributable to a subset — which matters both mechanistically and for building a safer product. If a single repressor family carries the effect, that is a more targeted edit than deleting the shared exon.

The second question is depth of rescue. Knockout delays dysfunction rather than preventing it: wild-type cells were dysfunctional by day 10, knockout cells held at day 10 and were failing by day 20. That is a real gain and not a solution, which is the same shape as the IL-15 result in the 2023 paper. It raises the question of whether stacking interventions compounds or whether they converge on the same ceiling. CREM knockout combined with CISH deletion, or with the staggered re-dosing strategy from the earlier work, would test whether these are independent axes.

The solid tumor data here are stronger than in most CAR-NK papers — renal, breast PDX, pancreatic, ovarian — which is worth acknowledging given how often this field stays in liquid models. But cAMP is the pathway tumors manipulate through PGE2, adenosine, and adrenergic signaling, all of which are prominent features of solid tumor microenvironments. If the tumor can raise cAMP in an infiltrating NK cell, it can drive CREM through the same PKA–CREB axis the CAR does. That makes CREM knockout potentially more valuable in solid tumors than these models can show, since a subcutaneous or orthotopic xenograft in an immunodeficient mouse lacks much of the suppressive milieu. Testing knockout cells against tumors engineered for high PGE2 output would ask that question directly.

## Something I Learned

The three-construct design taught me something about how to isolate a signal. CAR70, CAR70.3ζ.Y6F, and CD27(ECD) are the same receptor with signaling progressively removed: intact, ITAM tyrosines mutated, endodomain deleted. Comparing induction across the three separates antigen binding from proximal signaling from the full cascade in a single experiment.

The general form is building the control into the molecule rather than into the treatment. A pharmacological approach — inhibit the pathway and see what drops — tells you the pathway is required but leaves the inhibitor's specificity as an open question. Mutating six tyrosines in a receptor you built is a much narrower claim about a much smaller perturbation. They did use H89 and EGTA too, and the combination is what makes the mechanism convincing, but the constructs are doing the load-bearing work.

It also reinforced something about reusing data. This entire paper starts from a scRNA-seq dataset the lab had already published and drawn a different conclusion from. The metabolic story was there; the CREM story was also there, and required going back with a different question. That is a reminder that a dataset is not exhausted when the paper is published, and that the limiting factor is usually what you thought to ask.

## Favorite Figure

![Figure 3](/blog-images/blog22_1.jpg)


## References

1. Rafei, H., Basar, R., Acharya, S., Hsu, Y.-S., Liu, P., Zhang, D., Bohn, T., Liang, Q., Mohanty, V., et al. CREM is a regulatory checkpoint of CAR and IL-15 signalling in NK cells. *Nature* 643(8073):1076–1086 (2025).
