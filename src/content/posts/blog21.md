---
title: "A Regulator Cell's Paradox"
date: "2025-04-30"
preview: "Regulatory T cells are usually cast as the immune system's brakes. Foxp3 defines the lineage, the lineage suppresses inflammation, and defects in it produce catastrophic autoimmunity. But in psoriatic skin, a fraction of Foxp3⁺ cells produce IL-17A, the same cytokine that drives the disease."
topic: "Immunology"
subtopics: ["Autoimmunity", "T-cells"]
image: "/blog-images/blog21_2.jpeg"
---

Regulatory T cells are usually cast as the immune system's brakes. Foxp3 defines the lineage, the lineage suppresses inflammation, and defects in it produce catastrophic autoimmunity. But in psoriatic skin, a fraction of Foxp3⁺ cells produce IL-17A, the same cytokine that drives the disease. The usual framing treats this as a curiosity — Tregs behaving oddly in an inflamed environment. This paper argues something sharper: that IL-23, the cytokine at the center of psoriasis pathogenesis, actively converts Tregs into IL-17A producers, and that it does so preferentially from committed Tregs rather than from conventional T cells picking up Foxp3 along the way.

## The Problem

Psoriasis is a well-characterized IL-23/IL-17 disease. Blocking either arm works clinically, which is unusual clarity for an autoimmune condition. Th17 cells produce IL-17A, RORγt drives that program, and IL-23 sustains it.

The complication is that lesional skin also contains Foxp3⁺ cells making IL-17A. These "Th17-like Tregs" have been described in psoriasis, rheumatoid arthritis, and elsewhere. Nobody knows where they come from or what they do.

The obstacle is practical. By the time you biopsy human psoriatic skin, these cells already exist. You are looking at an endpoint. You cannot watch them form, you cannot ask what signal produced them, and you cannot test whether blocking that signal prevents them. The field has been stuck describing a population it cannot generate.

## Background Science

Two lineages are relevant, and they are more closely related than their opposite functions suggest.

Tregs are defined by Foxp3 and suppress immune responses through IL-10, IL-2 consumption, and contact-dependent mechanisms. A large fraction of skin-resident T cells are Tregs — roughly 20% of CD4⁺ T cells in mouse ear skin in this paper's control animals.

Th17 cells are defined by RORγt and produce IL-17A. Both lineages differentiate from naive CD4⁺ precursors, and the signals that specify them overlap considerably. TGF-β pushes toward Foxp3; TGF-β plus IL-6 pushes toward RORγt. The branch point is close.

Lineage stability was long assumed. A committed Treg was supposed to stay a Treg. That assumption has eroded — Tregs expressing T-bet, GATA3, or Bcl6 have been described, mostly as specialized suppressors tuned to the inflammation they are restraining. Colonic RORγt⁺ Tregs are protective, restraining Th17 responses in the gut. So a RORγt⁺ Treg is not inherently pathological; context determines it.

IL-23 is a heterodimer of p19 and p40 that acts on RORγt⁺ cells to stabilize and sustain the Th17 program. Its role in maintaining Th17 cells is established. What it does to Tregs was not.

## What They Did

The authors used a mouse model of psoriasiform dermatitis: four daily intradermal injections of recombinant IL-23 into the ear, analyzed on day 4. This produces measurable ear thickening and leukocyte infiltration, and it isolates IL-23 as the driving signal rather than modeling the full complexity of human disease.

IL-23 increased both the frequency and absolute number of Tregs in ear skin and draining lymph nodes, and drove them into cycle — more Ki67⁺ Tregs in both compartments. Despite this expansion, disease still progressed, which is the first hint that these Tregs were not doing their job.

The key measurement: in vehicle-treated animals, roughly 1% of Tregs made IL-17A. IL-23 raised this five to six fold. Among all CD4⁺IL-17A⁺ cells in treated skin, 10–15% co-expressed Foxp3 and RORγt — a population essentially absent in controls, where IL-17A⁺ cells were RORγt⁺Foxp3⁻ as expected.

They then tested whether this population was pharmacologically tractable. A RORγt inverse agonist reduced ear thickness by 84% by area under the curve and nearly abolished the Foxp3⁺RORγt⁺IL-17A⁺ population. Anti-TNF-α and anti-IL-23p19 antibodies — both clinically validated in psoriasis — reduced ear inflammation by 69% and 72% respectively, and both significantly reduced the hybrid population in skin and lymph nodes.

The ontogeny experiment is the one that matters most. Foxp3⁺ IL-17A⁺ cells could in principle arise two ways: from conventional T cells that upregulate Foxp3, or from committed Tregs that lose lineage fidelity. The authors sorted GFP⁻ (Tconv) and GFP⁺ (Treg) CD4⁺ cells from Foxp3-GFP reporter mice and stimulated each with IL-23. Sorted Tconv cells did upregulate Foxp3 in culture (8–15%), but IL-23 converted very few of them to the RORγt⁺IL-17A⁺ phenotype. Sorted Tregs converted robustly and secreted substantially more IL-17A protein.

## What's New?

- IL-23 expands cutaneous Tregs and drives them into proliferation, yet disease progresses anyway
- A CD4⁺Foxp3⁺RORγt⁺IL-17A⁺ population accumulates specifically under IL-23-driven inflammation
- The population depends on RORγt signaling and is nearly eliminated by a RORγt inverse agonist
- Anti-TNF-α and anti-IL-23p19 both reduce it, linking it to clinical efficacy
- In vitro, these cells derive preferentially from committed Tregs, not from Tconv cells acquiring Foxp3
- The effect is specific to IL-17A; IFN-γ⁺ Tregs were not meaningfully enriched

The methodological contribution is at least as important as the biology. The field lacked any system for generating these cells, and now has both an in vivo model and an in vitro protocol.

## My Interpretation

The finding I keep returning to is that IL-23 expanded the Treg compartment while disease got worse. The instinct when you see more Tregs at a site of inflammation is to read it as an attempted counter-regulatory response. Here the expansion is real, proliferation is real, and it accomplishes nothing — because a fraction of those cells have been recruited into the pathology they were supposed to suppress.

That reframes Treg number as a nearly useless readout on its own. If you had measured only frequency in this model, you would have concluded the regulatory arm was responding appropriately. The relevant variable is not how many Tregs are present but what they are producing, and those two things move in opposite directions here.

The ontogeny result is the part I find most convincing, largely because it rules out the more comfortable explanation. If these cells came from Tconv precursors transiently expressing Foxp3, the population would be a labeling artifact more than a phenomenon — activated conventional T cells often upregulate Foxp3 without becoming suppressive. The GFP sort makes that hard to sustain. Starting from cells that were Foxp3⁺ before IL-23 was introduced, and getting robust conversion, argues that established Tregs are being redirected.

I would stop short of the strongest reading, though, and the authors mostly do too. They show these cells produce IL-17A. They do not show they have lost suppressive function, and IL-10 actually went up in the IL-23-stimulated Tregs. A cell making both IL-17A and IL-10 is not obviously pathogenic — it might be a suppressor that has picked up an inflammatory accessory function, which is roughly what colonic RORγt⁺ Tregs appear to be. The paper's title says plasticity, not conversion, and that restraint is warranted.

There is also the AbbVie question. The authors are company employees, the RORγt inverse agonist is theirs, and the therapeutic comparators are drugs in this space. That does not make the data wrong — the flow cytometry is clean and the controls are appropriate — but it does shape which experiments got run. A population that responds to your compound is a more attractive population to characterize than one that does not.

## What I'd Do Next

The obvious gap is functional. Everything here is phenotype: Foxp3, RORγt, IL-17A, Ki67. Nothing tests whether these cells suppress. A straightforward in vitro suppression assay comparing sorted Th17-like Tregs against conventional Tregs would resolve whether "plasticity" means degraded function or added function, and the answer determines whether targeting these cells is a good idea or a bad one.

The second gap is the one the authors name themselves. There is no surface marker for this population, so it can only be identified by intracellular staining — which requires fixation, which kills the cells. You can count them but you cannot isolate them alive, which is why the functional experiments have not been done. A reporter mouse or a reliable surface signature would unlock most of the follow-up.

The model itself is also worth interrogating. Injecting recombinant IL-23 directly into skin is a clean way to isolate one variable, and clean is the right choice for a first pass. But human psoriasis involves keratinocyte crosstalk, a much broader cytokine environment, and a chronic time course. Four days of exogenous IL-23 tells you what IL-23 is sufficient to do, not what happens in a lesion that has been there for years. Whether these cells persist, accumulate, or resolve over a chronic course seems like the question with the most clinical weight.

## Something I Learned

The sorting experiment taught me something about how to design a discriminating test. Both hypotheses — Tconv-derived and Treg-derived — predict the same endpoint population. Assaying the endpoint tells you nothing. The only way through is to label the starting material and follow it, which is what the Foxp3-GFP reporter does.

That sounds obvious stated plainly, but the failure mode is common: measuring the thing you care about rather than the thing that distinguishes your hypotheses. The endpoint here is the interesting cell, and the endpoint is exactly the wrong measurement. What separated the two models was information about where the cells started, which had to be captured before the experiment began.

It is also a good reminder of why reporter mice are worth the trouble. The entire ontogeny claim rests on a single genetic tool, and without it this paper would have been a description of a population with no account of where it came from.

## Favorite Figure

![Figure 1](/blog-images/blog21_1.jpg)


## References

1. Kannan, A. K., Su, Z., Gauvin, D. M., Paulsboe, S. E., Duggan, R., Lasko, L. M., Honore, P., Kort, M. E., McGaraughty, S. P., Scott, V. E., & Gauld, S. B. IL-23 induces regulatory T cell plasticity with implications for inflammatory skin diseases. *Scientific Reports* 9:17675 (2019).