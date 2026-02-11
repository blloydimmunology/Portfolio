---
title: "CAR-T Therapy Can Be Merged With Antibody-Drug Conjugates"
date: "2026-02-11"
preview: "Solid tumors have resisted both CAR-T therapy and antibody-drug conjugates for different reasons. This study collapses that divide, engineering CAR-T cells that deliver chemotherapy directly within the tumor microenvironment."
topic: "Immunotherapy"
subtopics: ["CAR-T", "Antibody-Drug Conjugates"]
image: "/blog-images/blog2_4.jpg"
---


CAR-T therapy and Antibody-drug conjugates (ADCs) have been explored separately as therapeutic options for beating cancer. But instead of considering each separately, what if the answer is to merge them? This paper by Xin et al does something unique: turning CAR-T cells into their own drug delivery systems.

## The Problem

CAR-T cell therapy is dominant in blood cancers, but solid tumors remains challenging due to numerous factors:
- Limited tumor infiltration
- Immunosuppressive TME
- Antigen heterogeneity and loss

ADCs operate by binding to an antigen that can internalize itself, therefore introducing the conjugate into the cell, targeting itself to the lysosome, which degrades the complex, releasing the drug, and killing the cell. However, this relies on antigen internalization, in which many tumor antigens can’t do this, which limits ADCs applicability.

So, solid tumors can exploit both weaknesses. Traditional chemotherapy has been combined with CAR-T before, but that just causes excess toxicity (I am very anti-traditional chemo, plus CAR-T has the current problem of cytokine release syndrome, so this combination doesn’t sound fun for the patient). So how can we avoid this extra toxicity while also finding ways to make these strategies more efficient?


## Background Science
CAR-T cells have the ability to target surface antigens on cancer cells without requiring endocytosis. The paper references an antigen known as CA9, which is found on numerous cancer types, that the CAR portion of their construct was designed for. 

Monomethyl auristatin E (MMAE) is a commonly used, FDA-approved, drug payload used in ADC therapies. This was the payload used in their CAR-T-D-C design.

Tumors overexpress a protease called Cathepsin B (CTSB). Proteases act to hydrolyze peptide bonds, which connect consecutive amino acid residues in proteins. The authors use this knowledge to their advantage when designing the construct, which will be explained in the next section. 

Finally, a ‘linker’ is a term used to describe the way in which the drug (payload) is attached to its transporter. In traditional ADCs, that transporter is an antibody. In this paper, it is a CAR-T cell. So this linker will attach the drug to the CAR-T cell.


## What They Did
First, an improved version of the current CA9-CAR was designed. This was done through immunizing mice with LNP-encapsulated mRNAs that gave an array of possible CAR designs based on differing scFV versions to try out. From here, they tested all of their proposed CAR designs in a cell-killing assay, and chose the best one, showing improved antigen targeting.

Now they needed to find a way to create a linkage between the T-cells and the drug payload, since this has really never been done before. This involved a really cool series of chemical reactions:
Cells were incubated with a molecule called Ac4ManNAz. When T-cells take up this molecule, it enters the sialic acid biosynthesis metabolic pathway. Through this, the cells will start to express glycoproteins that contain azide (N3) groups. In this way, they have ‘decorated’ the cell surfaces with azide groups
With these azides, they introduce DBCO-linked molecules. DBCO reacts with azides through a reaction called strain-promoted azide-alkyne cycloaddition (SPAAC). This forms a stable bond between the azides and DBCO

Now, the DBCO can be linked to the payload through a linker. The paper describes the use of a Valine-Citrulline linker. This will sit between the DBCO and MMAE payload. So our final construct looks like this:

![Figure 1](/blog-images/blog2_3.jpg)

The genius in this design comes with the actual linker choice. As I previously mentioned, the protease CTSB is overexpressed in the tumor microenvironment. CTSB is especially favorable for cleaving Valine-Citrulline linkages, so when the construct enters the TME, CTSB will cleave this linkage, releasing the MMAE into the environment. The CAR-T cell will enable physical trafficking into the tumor microenvironment, then the linker will get detached, allowing the drug payload to float freely and kill tumor cells. Theoretically, it is a clever design, allowing the disadvantages of both strategies to be counteracted by the advantages of the other.

In vitro cell-killing assays showed improved killing for CAR-T-D-C cells compared to either strategy alone, showing synergy between them when merged together.

A final experiment validated that the drug remains attached to the construct until it reaches the tumor. If it was released early, it wouldn’t be any better than traditional chemotherapy! By tagging the MMAE with a Cy7 fluorescent tag, the researchers could see it localized specifically to tumor sites, indicating valid targeting.

## What's New?
A lot from this paper is novel, but several advances stand out:
- CAR-T therapy and antibody-drug conjugates have a true dual-function when merged
- The suppressive tumor microenvironment can be used to our advantage through using CTSB as a switch to activate payload release
- CAR-T-D-C confers better CAR-T localization in tumor-rich regions with higher immune activation scores
- Demonstration of targeting both internalized and non-internalized antigens with applicability across tumor types

Taken altogether, this certainly has potential to shape how we view targeted chemotherapy, and is an extremely interesting case of combining current strategies and known cellular chemistry to create something novel that improves upon what we already know.


## My Interpretation
Although I do not know that much about ADCs, now knowing that they rely on internalizing antigens, I think this could have a lot of promise. CAR-T therapy has a real struggle with solid tumors, and a big part of that is antigen heterogeneity. By releasing MMAE locally, CAR-T-D-C may be able to kill antigen-negative and antigen-positive cells, making this a big leap for immunotherapy. 

I think the biggest challenge will be confirming that drug payload won’t release off-target. That is why antigen targeting is extremely important. If MMAE gets released in other parts of the body, then that will cause a lot of excess toxicity. However, because it is an improvement upon traditional chemotherapy, which would release the drug systemically, this is definitely a huge leap of progress.


## What I'd Do Next
This makes me interested in the metabolic consequences of the CAR-T cells themselves. If MMAE is there to help out, will the CAR-T cells become exhausted as much as usual? 

I also would like to learn more about the release kinetics of this drug with this specific construct design. Is there any reason that the TME may modify itself to release less CTSB, therefore making this construct less effective over a long term?

Given the immune-cell surface-labeling flexibility, I would love to see this adapted to CAR-NK cells.

I also wonder if the MMAE may affect the CAR-T cells at all. Is there a chance that with a certain dosage of CAR-T-D-C’s, that the MMAE could kill a portion of the CAR-T cells? I would like to gain a better explanation of how MMAE may interact with the immune cells as a potential off-target attack.


## Something I Learned
The design philosophy was very interesting to me. I knew that we can reprogram cells to do and express as we like, but I was not aware of this ability to utilize organic chemistry to create an attachment to the cells in this way. Additionally, using the TME to our advantage is not something you see all the time. Usually, it is trying to block the TME from acting at full strength.


## My Favorite Figure
![Figure 1](/blog-images/blog2_1.jpg)
![Figure 1](/blog-images/blog2_2.jpg)


---

## References
1. Xin, S., Feng, Y., Zhang, F., Yu, J., Dong, C., Tao, B., Tang, K., Wu, Q., Chen, B., Ren, P., Verma, N., Liu, C., Suzuki, K., Ling, X., Park, D., Kluger, H., Crawford, J. M., Fan, R., Zhou, J., & Chen, S. (2026). CAR-T-drug conjugate against solid tumor. bioRxiv. https://doi.org/10.64898/2026.01.02.696502
