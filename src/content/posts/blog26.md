---
title: "Expanding to Solid Tumors"
date: "2025-12-17"
preview: "The field's response has been to engineer around each of them — dual targeting, chemokine receptors, armored constructs, TGF-β resistance. That work is real and this Perspective covers it."
topic: "Immunotherapy"
subtopics: ["CAR-T", "Solid Tumors"]
image: "/blog-images/blog26_1.jpg"
---
For a decade the standard account of CAR-T in solid tumors has been that the therapy hits a wall built from three bricks: antigen heterogeneity, poor trafficking, and an immunosuppressive microenvironment. The field's response has been to engineer around each of them — dual targeting, chemokine receptors, armored constructs, TGF-β resistance. That work is real and this Perspective covers it.

But the framing of the piece is that something changed in 2024, and the thing that changed is not primarily a construct. Four glioblastoma trials reported responses in a disease that had defeated every prior attempt, and what they share is not a clever receptor design. It is that the cells were delivered locoregionally — intraventricularly or intrathecally — rather than intravenously. The most consequential variable in the recent successes may be the one that has nothing to do with synthetic biology.

## The Problem

CAR-T is curative for some patients with B cell malignancies. Melenhorst and colleagues documented decade-long remissions with persisting CD4⁺ CAR-T cells, which is about as strong a demonstration of a living drug as exists. The therapy has since moved into autoimmune disease — Mackensen's lupus work and the follow-up case series — with results that suggest the platform generalizes well beyond oncology.

Solid tumors were the exception, and the failures were instructive. O'Rourke's EGFRvIII trial in glioblastoma showed CAR-T cells reaching the tumor, killing antigen-positive cells, and inducing adaptive resistance — the therapy worked mechanistically and did not work clinically. Bagley's follow-up with repeated peripheral infusions plus pembrolizumab reported no efficacy at all. That is a decade of negative results in the tumor type with the worst prognosis and the clearest unmet need.

Meanwhile other cell therapies were succeeding in solid tumors. TIL therapy earned FDA approval in 2024. TCR-engineered cells produced responses in synovial sarcoma. So the barrier was not adoptive cell therapy in general — it was something specific to how CAR-T was being deployed.

## Background Science

The three canonical barriers each have a physical basis worth stating precisely.

**Trafficking.** A CAR-T cell infused intravenously has to survive circulation, extravasate through endothelium that may not display the right adhesion molecules, and penetrate desmoplastic stroma that physically excludes lymphocytes. Xiao and colleagues showed the stroma restricts extravasation directly. The engineering responses are chemokine receptor modification — CXCR1/CXCR2 to co-opt tumor IL-8, CCR2b, CXCR6 for pancreatic tumors — or degradative enzymes like heparanase and hyaluronidase to open the matrix.

**Antigen heterogeneity.** Solid tumors do not express anything uniformly. The responses are multi-targeting: bispecific and trispecific CARs, dual constructs, or CAR-T cells that secrete BiTEs locally to reach antigen-negative cells the CAR cannot see.

**Microenvironment.** Hypoxia, TGF-β, adenosine, checkpoint ligands, nutrient depletion. Responses include armored CARs secreting IL-12, IL-15, IL-18, or IL-21; PD-1-blocking scFv secretion; CRISPR deletion of PD-1 or CTLA-4; hypoxia-responsive promoters that restrict activity to the tumor; and orthogonal cytokine systems like the engineered IL-2/IL-2Rβ pair and synthetic IL-9 receptors.

That is the standard map, and the Perspective covers it thoroughly. What makes the piece interesting is what it puts at the center instead.

## What the Recent Trials Share

Four glioblastoma trials from 2024 are the pivot.

Choi and colleagues delivered CARv3-TEAM-E cells intraventricularly — a construct combining a CAR against EGFRvIII with a T cell engager against wild-type EGFR, which addresses heterogeneity by covering both the mutant and the normal receptor. Bagley's group delivered bivalent EGFR/IL13Rα2 CAR-T intrathecally. Brown and colleagues delivered IL13Rα2-targeted cells locoregionally. All three reported radiographic responses in recurrent glioblastoma.

The contrast with the earlier failures is stark and the confound is obvious: these trials also used better constructs. Bivalent targeting, engager secretion, improved manufacturing. Any of these could explain the difference.

But the earlier EGFRvIII trials had already shown that peripherally infused cells reach the tumor and kill. What they did not do is achieve enough local concentration for long enough. Direct CNS delivery bypasses the entire trafficking problem — no extravasation, no stromal penetration, no dilution across the body. Adusumilli's mesothelin trial made the same move in a different compartment, delivering regionally into pleural disease with pembrolizumab.

If locoregional delivery is doing the heavy lifting, that reframes a decade of engineering effort. Chemokine receptors, heparanase, matrix-degrading enzymes — all of these are solutions to a problem you can also solve with a catheter.

## What's New?

- Four 2024 glioblastoma trials report responses in a disease with no prior CAR-T successes
- The common feature is locoregional delivery (intraventricular, intrathecal) rather than intravenous
- Claudin18.2 CAR-T produced responses in gastrointestinal cancers; GD2-CART01 in neuroblastoma; CLDN6 CAR-T combined with an amplifying RNA vaccine
- Combination approaches are expanding: STING agonists, radiation conditioning, checkpoint blockade
- The engineering toolkit has broadened to include logic gates, base editing, hypoxia sensing, and orthogonal cytokine receptors
- Alternative effector cells — NKT, γδ T, CAR macrophages — are entering trials
- Host factors including the gut microbiome correlate with response and toxicity

## My Interpretation

The delivery result is the one I would want emphasized, and I suspect it will be underweighted because it is not a technology.

Locoregional administration is old, unglamorous, and available now. It requires a neurosurgeon and a reservoir, not a new vector. If it accounts for a meaningful fraction of the recent glioblastoma responses, then the most tractable near-term improvement in solid tumor CAR-T is logistical rather than molecular. That is an uncomfortable conclusion for a field organized around synthetic biology, and it is the kind of conclusion that gets mentioned and then not pursued.

It also has a hard boundary that the Perspective's framing risks obscuring. Glioblastoma and pleural mesothelioma are compartmentalized diseases — anatomically confined spaces you can inject into. Metastatic carcinoma is not. If the lesson generalizes only to tumors in accessible compartments, then the trafficking problem remains unsolved for most solid cancers and the engineering work remains necessary. The honest version of the claim is narrower than "we cracked solid tumors."

The second thing worth flagging is what "promising outcomes" means at this stage. These are phase 1 trials, interim analyses, small cohorts, and recurrent disease. Radiographic responses in recurrent glioblastoma are meaningful because the baseline is near zero, but they are not durable remissions. The Perspective is titled around expansion and momentum, and the citation base is heavily 2023–2024 — this is a piece written at a moment of optimism, by authors with substantial stakes in that optimism being warranted. June's disclosure statement runs to nearly twenty companies.

That is not a reason to discount the argument. It is a reason to read the enthusiasm as a claim about direction rather than about arrival, and to notice that the piece is partly an argument for continued investment.

Where I think the review is most useful is in the breadth of the engineering catalog, and where it is least satisfying is in prioritizing among the entries. There are perhaps forty distinct strategies cited here — chemokine receptors, armoring cytokines, logic gates, checkpoint deletion, hypoxia sensing, alternative effectors, combination partners. Almost all have preclinical support. Very few have been tested against each other. A field with forty solutions to three problems has a selection problem, not a supply problem, and the Perspective does not offer a framework for deciding which combinations are worth clinical testing.

The microbiome citations at the end are a good example of how wide the aperture has become. Smith and Stein-Thoeringer both found gut microbiome correlates of CAR-T response and toxicity, and the second specifically implicates antibiotic disruption. That is a genuinely interesting finding and it sits at the very edge of what CAR-T engineering can control — you cannot design it into a construct. Its inclusion signals that the field is starting to look at host factors, which is probably correct and also increases the number of variables faster than it resolves them.

## What I'd Do Next

The comparison the field needs is the one nobody has run: same construct, same disease, intravenous versus locoregional. Every recent trial changed multiple variables at once, so the delivery hypothesis remains inference rather than demonstration. A randomized route comparison in glioblastoma would be feasible, would cost far less than developing another construct, and would tell you whether to keep engineering trafficking solutions or to redirect that effort.

The second question is what locoregional delivery does to the strategies designed to solve trafficking. If cells are placed directly in the tumor, chemokine receptor modification is redundant — and possibly worse than redundant, since CXCR2 engineering is metabolically costly and might now be spending resources on a solved problem. Testing whether trafficking modifications still help in a locoregional context would clarify which parts of the toolkit are compartment-specific.

The third gap is durability, and it is the one that matters most. All four glioblastoma trials report responses; none report the kind of persistence Melenhorst documented in leukemia. Whether locoregionally delivered cells establish a resident population or clear within weeks determines whether this is a treatment or a temporary debulking. Jung and colleagues' tissue-resident memory CAR-T work, and Gavil's finding that chronic antigen drives a distinct residence program, suggest the biology exists to make cells stay. Whether it happens after intraventricular delivery is an open question with a straightforward answer available from serial CSF sampling.

I would also want to see the trogocytosis question asked in these trials. The earlier EGFRvIII data showed antigen loss after treatment. Whether that was genetic, adaptive, or extraction by the T cells themselves was not distinguished, and the answer would inform whether multi-targeting is a durable solution or one that depletes both antigens.

## Something I Learned

Reading a Perspective through its bibliography turned out to be a useful exercise, and it taught me something about how review articles encode arguments.

The reference list is not a neutral survey. Of 113 citations, the concentration in 2023–2024 is heavy, and the four glioblastoma trials sit early — references 16 through 18, immediately after the framing of the solid tumor problem. That placement is the argument. The engineering literature, some of it a decade old, comes later and functions as a toolkit for extending a result rather than as the source of the result.

You can also read what a review is arguing against. The presence of O'Rourke 2017 and Bagley's negative 2024 trial, both in the early citations, means the piece is not claiming CAR-T always worked and we just needed patience. It is making a before-and-after claim, and it is citing the "before" honestly.

The general lesson is that the structure of a review's evidence base carries information the prose may not state outright. Which papers are cited early, which are grouped together, what proportion is recent, and what negative results are included — these constrain what the argument can be. It is a partial substitute for reading the text, and more importantly, it is a way of checking whether the text's claims are supported by what it actually cites.

## References

1. Uslu, U., & June, C. H. Beyond the blood: expanding CAR T cell therapy to solid tumors. *Nature Biotechnology* 43(4):506–515 (2025).
