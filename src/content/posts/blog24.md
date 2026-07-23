---
title: "The T Cell Takes the Antigen With It"
date: "2026-02-11"
preview: "The intuitive assumption is that antigen-low relapse is the same process caught early — a tumor on its way to antigen-negative, or a subclone that always expressed less CD19 being selected. This paper argues the tumor is not doing anything."
topic: "Immunotherapy"
subtopics: ["CAR-T", "Tumor Microenvironment"]
image: "/blog-images/blog24_2.jpeg"
---

Relapse after CD19 CAR-T therapy comes in two forms, and the field has treated them as one problem. Antigen-negative relapse is well explained: acquired mutations, alternative splicing that removes the CAR-binding epitope, lineage switch to a myeloid phenotype. These are genetic, permanent, and selected for. Antigen-*low* relapse is the other category, and its mechanism was unclear.

The intuitive assumption is that antigen-low relapse is the same process caught early — a tumor on its way to antigen-negative, or a subclone that always expressed less CD19 being selected. This paper argues the tumor is not doing anything. The CAR-T cells are physically pulling CD19 off the leukemia cells and onto themselves, and the consequences of holding that antigen are what causes the therapy to fail.

## The Problem

CD19 CAR-T produces high complete response rates in B-ALL, and a large fraction of patients relapse anyway. The permanent-loss mechanisms account for some of it. What remains is a population of relapses where CD19 is still present, just reduced, and where the CAR-T cells are still there but not working.

Two things need explaining simultaneously, and the field had been explaining them separately: why the antigen goes down, and why the T cells stop functioning. A mechanism that produced only one of those would be incomplete.

## Background Science

Trogocytosis — from the Greek for "gnaw" — is the transfer of membrane fragments between cells in contact. It is not new immunology. T cells have been known to strip pieces of plasma membrane, including MHC and associated molecules, from antigen-presenting cells during synapse formation. The process is active, actin-dependent, and involves physical extraction rather than shedding or secretion.

The relevant precedent is that TCR internalization from the immunological synapse works through a phagocytosis-like mechanism, and that low-avidity T cells can inhibit high-avidity killing by stripping antigen from targets first. So the phenomenon was documented. What had not been asked is whether the enormously strong, non-physiological synapse a CAR forms does the same thing at a scale that matters clinically.

The other necessary background is costimulatory domain design. The two CAR architectures in clinical use are CD28-based (19-28ζ) and 4-1BB-based (19-BBζ). These differ in signaling kinetics and persistence — CD28 CARs are faster and more intense, 4-1BB CARs slower and longer-lived — and this paper tests both, which turns out to matter.

## What They Did

The system is NALM6 leukemia in mice, treated with CD19 CAR-T cells at deliberately subtherapeutic doses so relapse would actually occur.

**Establishing that the antigen moves.** CAR-T cells recovered from relapsed mice — from bone marrow and extramedullary sites — stained positive for CD19 on their surface. T cells do not make CD19. Meanwhile, *Cd19* mRNA in the relapsed NALM6 cells was not significantly reduced, ruling out transcriptional downregulation as the explanation for lower surface protein.

Three controls establish that this is contact-dependent physical transfer rather than shedding and re-binding. A transwell assay, which separates the two cell populations while sharing medium, showed no CD19 reduction on the segregated leukemia cells. Latrunculin A, an F-actin inhibitor, blocked the transfer — it requires cytoskeletal work. And the sharpest one: a heavy amino acid labeling proteomics experiment with CD19–mCherry-expressing NALM6 cells, detecting heavy-labeled CD19 peptides in the trogocytosis-positive T cell fraction. The protein in the T cell was made by the tumor.

The kinetics are fast. Co-culture time courses show CD19 dropping on NALM6 and appearing on CAR-T within hours.

**Establishing that it is specific and general.** CD81 and CD22 on the NALM6 surface were unaffected — this is not bulk membrane transfer, it is extraction of the targeted molecule. And the phenomenon is not a CD19 quirk: the same thing happens with CD22 CARs against CD22, BCMA CARs against BCMA on myeloma cells, and mesothelin CARs against MSLN on a lung line. It also works with primary patient blasts from ALL and CLL, and with CAR-T cells made from patient material rather than healthy donors.

Confocal imaging of NALM6–CAR-T conjugates shows the CD19–CAR complex internalized into the T cell, which is consistent with the receptor and its cargo being taken in together.

**Establishing the consequences.** This is where the mechanism becomes a failure mode rather than a curiosity, and there are two arms.

The T cell now displays CD19 on its surface. Other CAR-T cells see it as a target. Fratricide — CAR-T cells killing each other — reduces the effector pool. The authors tested this directly by transducing T cells to express CD19, confirming the setup is sufficient to cause the effect.

Separately, trogocytosis-positive T cells become exhausted. Sorted trog⁺ versus trog⁻ fractions differ in PD-1, LAG-3, and TIM-3 expression. The plausible reading is continuous self-stimulation: a CAR-T cell carrying its own antigen is engaging its own receptor, or a neighbor's, without interruption.

So the same event lowers antigen density on the tumor *and* degrades the effector population, in two independent ways.

**Antigen density as the governing variable.** To test this cleanly, they built NALM6 lines with graded CD19 using CRISPR — monoallelic disruption for intermediate expression, biallelic for low, with one allele carrying a point substitution near the signal peptide cleavage site to preserve reduced-but-nonzero surface protein. CD22 levels were unchanged across the panel.

Against this ladder, the two costimulatory designs diverge. Both are affected by trogocytosis, but differentially depending on how much antigen is left — which is the practical translation of a large body of work showing CD28 and 4-1BB CARs differ in antigen sensitivity.

**Cooperative killing.** The last piece is the most interesting conceptually. Single-cell killing assays comparing wells at one T cell per tumor cell versus one T cell per two tumor cells show that observed killing exceeds what you would predict from independent action. CAR-T cells cooperate — multiple cells contributing to lysis of a single target. Cooperativity compensates for individually insufficient lytic capacity, and it degrades as antigen density falls.

This points at the therapeutic implication: effector-to-target ratio matters more than a simple dose-response would suggest, and combinatorial targeting (hitting a second antigen) can rescue tumors that a single CAR cannot clear once trogocytosis has lowered the first antigen below threshold.

## What's New?

- CAR-T cells physically extract target antigen from tumor cells by trogocytosis, in hours, actin-dependently
- Confirmed by heavy-isotope proteomics: the CD19 on the T cell was synthesized by the tumor
- The transfer is antigen-specific, not bulk membrane — CD81 and CD22 stay put
- Antigen reduction is reversible and post-transcriptional; *Cd19* mRNA is unchanged
- T cells that acquire antigen become fratricide targets and become exhausted
- The phenomenon generalizes across CD19, CD22, BCMA, and mesothelin CARs
- CD28 and 4-1BB CARs are differentially vulnerable depending on residual antigen density
- CAR-T killing is cooperative rather than independent, and cooperativity fails at low antigen

## My Interpretation

What makes this paper land is that it converts a passive story into an active one. The default model of antigen-low relapse has the tumor doing something — mutating, splicing, downregulating, or simply having been heterogeneous to begin with. Here the tumor is largely a bystander. The therapy lowers the antigen itself, and the lowering is a direct mechanical consequence of the therapy working.

That is an unusual shape for a resistance mechanism, and it has a specific implication: this is not selection. There is no variant being enriched. Every engagement removes some antigen, so the process is a function of dose and contact frequency rather than of standing genetic variation in the tumor. It should be predictable in a way that mutational escape is not.

The dual consequence is the part I find hardest to design around. If trogocytosis only lowered antigen, you could push antigen sensitivity — lower the activation threshold, tune the scFv, add costimulation. If it only caused fratricide, you could block that. It does both, from one event, and the two effects reinforce each other: fewer effectors and less antigen each make the other worse.

The self-stimulation framing of exhaustion is worth sitting with, because it connects to the tonic signaling literature from a different direction. A CAR-T cell holding its own antigen is a cell whose receptor is permanently engaged. That is the same problem as scFv aggregation driving ligand-independent signaling, arrived at not through construct design but through the cell's own success at killing. The better it works, the more antigen it accumulates, the more continuously it signals.

Where I would apply pressure is the extrapolation to patients. The models are NALM6 in NSG mice at subtherapeutic doses, chosen specifically so relapse would happen. That is a legitimate design for isolating a mechanism, and the primary patient blast experiments help, but it does not establish how much of clinical antigen-low relapse is trogocytosis versus everything else. The paper shows the mechanism is real, sufficient, and general. It does not establish the fraction.

The antigen density panel is also worth reading carefully. NALM6^med^ and NALM6^low^ are CRISPR-edited lines with defined allelic disruption, which is exactly the right way to get a clean density gradient. But an engineered line with reduced CD19 is not necessarily equivalent to a tumor cell that has just had CD19 stripped off it — the latter has an active process ongoing, possibly membrane damage, possibly altered signaling. The comparison assumes density is the only variable that matters.

## What I'd Do Next

The obvious question is whether trogocytosis can be uncoupled from killing. The extraction depends on actin and on synapse formation, both of which the T cell also needs to kill. If the mechanisms are shared at the molecular level, this is a design constraint rather than a solvable problem. If they diverge somewhere — different GTPases, different timing, different membrane domains — that divergence is the therapeutic target. The TC21/RhoG pathway implicated in TCR internalization is where I would start.

The affinity question is the practical one, and it was answered later: lower-affinity CARs trogocytose less, lose antigen more slowly, and expand better. Reading this paper knowing that result, the affinity dimension is conspicuously absent here — every construct compared differs in costimulation, not in binding strength. That is a reasonable choice given what the paper is about, but affinity is the more directly tunable parameter and it turned out to matter.

The third gap is what happens to the antigen after transfer. Confocal shows internalized CD19–CAR complexes, and the T cell surface stains CD19-positive, but the fate — degraded, recycled, presented — determines how long a trogocytosis-positive cell remains a fratricide target and whether the exhaustion is sustained or transient. If acquired antigen turns over quickly, the effect is self-limiting. If it persists or recycles to the surface, it is not.

There is also a reversibility experiment the paper implies without doing. If antigen loss is post-transcriptional and mRNA is intact, tumor cells should re-express CD19 once CAR-T pressure is removed. Measuring the recovery kinetics would say whether a rest period between doses — or sequential rather than simultaneous combinatorial targeting — could exploit the reversibility rather than fight it.

## Something I Learned

The heavy amino acid labeling experiment is the piece of craft I want to remember. The problem is that flow cytometry showing CD19 on a T cell is compatible with several explanations: antigen shed into the medium and re-bound, antibody carryover, gating artifact from tightly conjugated cells. Any of these produces the same staining pattern.

Metabolically labeling the tumor's CD19 with heavy amino acids and then detecting heavy-labeled peptides in sorted T cell lysates settles it. The peptide was synthesized in the tumor cell and is now in the T cell. That is not an inference from a surface stain — it is a molecular provenance claim.

The general lesson is about matching evidence to the ambiguity you are trying to remove. The competing explanations here all involve the same molecule in the same place, so no amount of better imaging or cleaner gating would distinguish them. What distinguishes them is *where the protein was made*, and the only way to access that is to label at synthesis. Working backward from the specific confound to the assay that eliminates it, rather than reaching for the most powerful technique available, is the skill.

It also reframes what the extended data section is for. Most of the load-bearing controls in this paper — the transwell, the latrunculin, the CD81/CD22 specificity, the isotope labeling — are in Extended Data Figure 3, not the main figures. The main figures show the phenomenon and its consequences. The supplement shows why you should believe it is real.

## Favorite Figure

![Figure 2](/blog-images/blog24_1.jpg)

## References

1. Hamieh, M., Dobrin, A., Cabriolu, A., van der Stegen, S. J. C., Giavridis, T., Mansilla-Soto, J., Eyquem, J., Zhao, Z., Whitlock, B. M., Miele, M. M., Li, Z., Cunanan, K. M., Huse, M., Hendrickson, R. C., Wang, X., Rivière, I., & Sadelain, M. CAR T cell trogocytosis and cooperative killing regulate tumour antigen escape. Nature 568(7750):112–116 (2019).