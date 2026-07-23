---
title: "Two Receptors, One Signal"
date: "2026-02-11"
preview: "The design question becomes which two antigens, and the engineering question becomes how to fit two binders onto a cell — tandem scFvs, bicistronic vectors, two separate CARs."
topic: "Immunotherapy"
subtopics: ["CAR-T", "Metabolism"]
image: "/blog-images/blog25_2.png"
---

Dual-targeting CAR-T is usually framed as an antigen problem. Solid tumors express antigens heterogeneously, single-target CARs leave antigen-low cells behind, so you add a second specificity and cover more of the tumor. The design question becomes which two antigens, and the engineering question becomes how to fit two binders onto a cell — tandem scFvs, bicistronic vectors, two separate CARs.

This paper argues that framing is incomplete, and that the more consequential variable is not what you target but how the signaling is wired. Two CARs on one T cell can be built with two independent CD3ζ chains or with one shared between them, and the second option produces a substantially better cell. The costimulatory domains are split — CD28 on one receptor, 4-1BB on the other — so they act in trans on a single activation signal. The result is a cell that does not have to choose between the fast, glycolytic phenotype CD28 produces and the persistent, oxidative one 4-1BB produces.

## The Problem

CAR-T works in B cell malignancies and has largely failed in solid tumors. Two reasons dominate.

The first is antigen heterogeneity. A leukemia is fairly uniform for CD19; a neuroblastoma is not uniform for anything. GD2 expression varies within a single tumor, and cells expressing it at low density survive a GD2 CAR. That is not acquired resistance — it is pre-existing variation that single-target therapy selects on.

The second is persistence. CAR-T cells in solid tumors are outnumbered, must traffic into hostile tissue, and encounter a suppressive microenvironment. They need to function immediately and keep functioning, and the field's existing tools push those two requirements in opposite directions.

That tension is specifically a costimulation problem. CD28-based CARs signal fast and hard, produce rapid killing, and exhaust. 4-1BB CARs signal more slowly, support memory differentiation and long persistence, and are less potent early. Third-generation CARs putting both domains in tandem on one receptor were supposed to solve this and largely have not — clinical results have been unremarkable, and this paper's own in vitro data show GD2.28.BBζ performing no better than GD2.28ζ.

## Background Science

A CAR has an scFv for antigen recognition, a hinge and transmembrane region, one or two costimulatory endodomains, and CD3ζ for activation. CD3ζ carries the ITAMs whose phosphorylation initiates the signaling cascade — LCK phosphorylates the ITAMs, ZAP70 docks, and downstream signaling follows.

The costimulatory domains work differently at the molecular level, not just kinetically. Prior work from this group showed 4-1BB recruits THEMIS-SHP1, which dampens LCK-mediated priming — 4-1BB is partly a brake on the same signal CD28 amplifies. That mechanistic difference is why stacking them in tandem does not simply sum their benefits.

The metabolic consequence was established by Kawalekar and colleagues: CD28 CARs drive glycolysis and effector differentiation; 4-1BB CARs favor oxidative phosphorylation, mitochondrial biogenesis, and central memory formation. Persistence tracks with the oxidative phenotype. Rapid killing tracks with the glycolytic one.

The other relevant background is CD8α. The hinge and transmembrane region derived from CD8α mediates dimerization, which turns out to be the structural basis for how two separate receptors can share a single signaling chain.

## What They Did

The antigen pair is GD2 and B7-H3 in neuroblastoma, with a second system using mesothelin and CSPG4 in mesothelioma. Both are solid tumor settings with genuinely heterogeneous antigen expression.

**Establishing that the obvious approaches fail.** The paper opens by ruling things out. Single-target CARs with either costimulatory domain, dual-target CARs with two complete signaling units, and tandem CD28/4-1BB third-generation CARs all fail to eradicate tumors under stress conditions — low T cell dose, high tumor burden, or delayed treatment. In multi-round co-culture, GD2.28.BBζ and co-expressed GD2.28ζ/B7-H3.28ζ performed no better than the single CAR.

This is the right way to open, and it does real work: it establishes that the eventual result is not just "more targeting is better."

**The shared CD3ζ design.** The construct that works pairs GD2.28ζ — a complete CAR with CD28 and CD3ζ — with B7-H3.BB, a receptor carrying 4-1BB but *no CD3ζ of its own*. Engagement of the B7-H3 receptor contributes costimulation to the activation signal running through the GD2 CAR's ζ chain.

That this works at all is the central claim, and the specificity controls in Extended Data Fig. 4 are what make it credible. Against Raji cells engineered to express B7-H3 but not GD2, the GD2.28ζ/B7-H3.BB combination produced killing and cytokine release. Two controls establish the mechanism: dNGFR.28ζ/B7-H3.BB, where the ζ-bearing receptor has a non-functional binder, and 28ζ/B7-H3.BB. The comparison isolates whether the ζ-less receptor is genuinely feeding into a shared signaling chain versus doing something on its own.

**The structural basis.** CD8α-mediated dimerization is what physically allows the sharing. The two receptors associate through their hinge/transmembrane regions, bringing the ζ-less receptor's costimulatory domain into the same complex as the ζ chain. Confocal imaging of GFP-tagged GD2.28ζ and B7-H3.BB shows CAR clustering on engagement with either the anti-idiotype antibody or B7-H3.Fc protein.

This is a nice result because it explains why the design is not arbitrary. The sharing is not a happy accident of overexpression; it depends on a specific structural feature that was already in the construct for other reasons.

**Orientation does not matter.** They inverted the arrangement — B7-H3.28ζ paired with GD2.BB — and got the same benefit in vitro and in vivo. That is a meaningful control. If the effect depended on which antigen carried the ζ chain, the mechanism would be about the antigens; showing it does not means the mechanism is about the wiring.

**Signaling and metabolism.** The shared-ζ cells show sustained phosphorylation of TCR-associated signaling molecules rather than the transient burst a CD28 CAR produces alone. Transcriptionally, the signature supports proliferation and long-term survival.

The metabolic result is the one that ties the paper together. These cells induce glycolysis — the CD28 phenotype, supporting rapid effector function — while preserving oxidative capacity, the 4-1BB phenotype associated with persistence. They are not intermediate between the two costimulatory programs. They have both.

**Antigen escape.** The final test is a high-burden SH-SY5Y model with heterogeneous GD2 expression. GD2.28ζ alone improved survival over control and then failed; GD2.28ζ/B7-H3.BB improved survival over GD2.28ζ. The dual design prevents outgrowth of the GD2-low population.

## What's New?

- Two CARs on one T cell can share a single CD3ζ chain, with the second receptor contributing only costimulation
- Sharing depends on CD8α-mediated dimerization bringing the receptors into one complex
- Split CD28/4-1BB costimulation acting in trans outperforms both single costimulation and tandem third-generation designs
- The design produces sustained rather than transient phosphorylation of proximal signaling molecules
- Metabolically, the cells are glycolytic *and* oxidative rather than one or the other
- Dual targeting prevents escape of antigen-low tumor cells in heterogeneous solid tumor models
- The benefit is orientation-independent and reproduces in a second antigen pair and tumor type

## My Interpretation

What makes this design interesting is that it treats the number of signaling units as a variable rather than a given. The default assumption when you put two CARs on a cell is that you are installing two complete receptors — each with its own binder, costimulation, and activation chain. This paper's result is that the second activation chain is not just unnecessary, it is worse.

The reason is probably that two independent ζ chains means two independent signaling events, each with its own kinetics and its own costimulatory flavor. A cell receiving a CD28-flavored signal from one receptor and a 4-1BB-flavored signal from another is not integrating them; it is running two programs. Collapsing to one ζ chain forces integration at the point where it matters — the same activation signal, modulated by both costimulatory domains simultaneously.

This also explains why third-generation tandem CARs disappointed, which had been a genuine puzzle. Putting CD28 and 4-1BB on the same receptor in series looks equivalent to putting them on two receptors that share a ζ chain, and it is not. The mechanistic reason is presumably the THEMIS-SHP1 result from this group's earlier work: 4-1BB actively dampens LCK priming, so in a tandem arrangement it is attenuating the same signal CD28 is trying to amplify, in a fixed stoichiometry, on every engagement. In the trans arrangement, the 4-1BB contribution depends on whether the second antigen is present and how much of it there is. The costimulation becomes conditional rather than constitutive.

That conditionality is worth sitting with, because it means the metabolic phenotype is tunable by the tumor rather than fixed by the construct. A cell engaging both antigens gets both signals; a cell engaging only one gets one. Whether that is a feature or an uncontrolled variable depends on how uniform the second antigen is — and the whole premise of the paper is that solid tumor antigens are not uniform.

The metabolic result is the strongest part and the part I would most want to see pushed on. "Glycolytic and oxidative simultaneously" is a claim about having escaped a tradeoff that the field has treated as fundamental. If the tradeoff is real — if effector differentiation genuinely costs you memory potential — then something has to give eventually, and a 35-day mouse experiment may not be long enough to see where. The alternative reading is that the tradeoff was never metabolic in the first place but was an artifact of how the two costimulatory domains were being deployed, in which case this is a genuine escape.

Where I would apply pressure is the same place as with most solid tumor CAR papers. These are NSG mice with human tumor lines, so there is no host immune system, no suppressive myeloid compartment, no functional stroma, and no TGF-β from a real tumor microenvironment. The trafficking problem — arguably the largest barrier in solid tumors — is partly bypassed by intravenous delivery into a metastatic model. The paper's own framing is about solid tumor difficulty, but the models omit several of the specific difficulties.

There is also a manufacturing consideration the paper does not dwell on. Transduction efficiency data appear in the extended figures for both systems, and getting two receptors expressed at consistent ratios across donors is a real problem. The shared-ζ design may actually help here — the ζ-less receptor is smaller — but the ratio of the two receptors on a given cell is now a functional variable, and cells with too little of the costimulatory receptor are just single-CAR cells.

## What I'd Do Next

The stoichiometry question is the obvious first move. If the benefit depends on both receptors being present in the same complex, then the ratio matters, and it is currently set by whatever the vector produces. Sorting cells by relative expression and testing function across the range would say whether there is an optimum and how wide the tolerable window is. If the window is narrow, that is a manufacturing problem worth knowing about early.

The second question is whether this design is vulnerable to trogocytosis, which is the natural connection to the previous post. Dual targeting is usually presented as the answer to antigen escape, and this paper tests it against pre-existing heterogeneity. But if the T cells are actively stripping both antigens off the tumor, the second target is being depleted alongside the first — and a design where costimulation depends on the second antigen would lose costimulation exactly when it is most needed. Measuring GD2 and B7-H3 on tumor cells after co-culture would answer this directly and is a straightforward experiment.

The third is the conditionality question raised above. Building tumor lines with the second antigen at graded densities, the way the trogocytosis paper did with CD19, would establish how much B7-H3 is required for the costimulatory contribution to materialize. That number is the practical boundary of where this design helps, and without it, "dual targeting prevents escape" is a claim about the specific antigen densities in these particular cell lines.

I would also want to see this against tumors with an intact suppressive microenvironment. The 4-1BB arm's contribution is supposed to be persistence, and persistence is tested most severely by TGF-β, adenosine, and hypoxia — none of which are meaningfully present here.

## Something I Learned

The negative results at the front of this paper are doing more work than the positive result, and I think that is the transferable lesson.

The paper could have opened with the shared-ζ construct and shown it beating a single-target CAR. That comparison would have been true and nearly uninformative, because a reader's first objection would be that two antigens beat one for obvious reasons. Instead the opening figure establishes that single targeting fails, dual targeting with conventional wiring fails, and tandem costimulation fails. By the time the working design appears, every simpler explanation for its success has been closed off.

That structure is expensive. Extended Data Figures 1 through 3 are almost entirely constructs that did not work, generated across six to eight donors each. In a field where the incentive is to show the thing that works, spending that much of a paper on things that do not is a choice.

But it is what makes the claim specific. The result is not "dual targeting is good" — it is "the ζ chain topology is the variable," and you can only make that claim by holding antigen number constant and varying the wiring. Designing the comparison so that the interesting variable is the only one left standing is harder than demonstrating that your construct works, and it is the difference between a paper that reports a result and one that establishes a principle.


## Favorite Figure

![Figure 5](/blog-images/blog25_1.jpg)

## References

1. Hirabayashi, K., Du, H., Xu, Y., Shou, P., Zhou, X., Fucá, G., Landoni, E., Sun, C., Chen, Y., Savoldo, B., & Dotti, G. Dual-targeting CAR-T cells with optimal co-stimulation and metabolic fitness enhance antitumor activity and prevent escape in solid tumors. *Nature Cancer* 2(9):904–918 (2021).
