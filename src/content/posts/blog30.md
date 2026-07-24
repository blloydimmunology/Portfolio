---
title: "The Twenty Amino Acids"
date: "2025-08-13"
preview: "All about amino acid"
topic: "MCAT"
subtopics: ["Chem/Phys", "Bio/Biochem"]
image: "/blog-images/blog30_1.png"
---

The MCAT does not usually ask you to draw structures from memory, but it constantly asks questions that depend on knowing which category an amino acid falls into and roughly what its pKa is. Learning the groups is worth more than learning individual structures.

## The Backbone

Every amino acid has the same core: a central alpha carbon bonded to an amino group, a carboxyl group, a hydrogen, and an R group. The R group is the only thing that varies, and it determines everything about behavior.

All are **L-amino acids** in proteins, and all except glycine are chiral. Glycine's R group is just H, so its alpha carbon has two identical substituents and is not a stereocenter.

Nearly all are **(S)** by CIP rules. Cysteine is the exception — its sulfur outranks the carboxyl group, flipping the priority assignment even though the spatial arrangement is unchanged. Same geometry, different label.

At physiological pH the backbone exists as a **zwitterion**: the amino group is protonated (NH₃⁺) and the carboxyl is deprotonated (COO⁻). Net charge zero from the backbone alone.

## Nonpolar

These bury themselves in protein cores and in membranes. Hydrophobic effect drives this — water excludes them rather than them being attracted to each other.

**Aliphatic:** glycine, alanine, valine, leucine, isoleucine, methionine
**Aromatic:** phenylalanine, tryptophan
**Cyclic:** proline

A few worth flagging individually:

- **Glycine** is the smallest and the most conformationally flexible. It shows up where a backbone needs to turn sharply, and in collagen's repeating Gly-X-Y where nothing larger fits.
- **Proline** has its R group bonded back to the backbone nitrogen, forming a ring. This locks the backbone angle and eliminates the amide hydrogen, so proline cannot donate a hydrogen bond. It breaks alpha helices and is common in turns.
- **Methionine** contains sulfur but is nonpolar — the sulfur is thioether, not thiol. It is the start codon amino acid.

## Polar Uncharged

These sit on protein surfaces, hydrogen bond with water, and often appear in active sites.

**Serine, threonine, cysteine, asparagine, glutamine, tyrosine**

- **Serine and threonine** have hydroxyls and are the main phosphorylation targets, along with tyrosine. Serine is also the nucleophile in serine proteases.
- **Cysteine** has a thiol (–SH) and is the one that forms **disulfide bonds**. Two cysteines oxidize to form cystine, a covalent crosslink that stabilizes tertiary and quaternary structure. This is the only common covalent side-chain crosslink and it is heavily tested. Disulfides form in oxidizing environments — extracellular and ER, not cytoplasm.
- **Tyrosine** is aromatic *and* polar, because of its hydroxyl. It gets classified either way depending on the source. Along with tryptophan and phenylalanine, it absorbs UV at 280 nm, which is how protein concentration is measured.

## Acidic

**Aspartate and glutamate**

Carboxylic acid side chains, pKa around 4. At physiological pH they are deprotonated and **negatively charged**.

Note the naming: aspartic acid/aspartate and glutamic acid/glutamate refer to the protonated and deprotonated forms. At pH 7.4 the -ate names are accurate.

## Basic

**Lysine, arginine, histidine**

- **Lysine**, pKa ~10.5, protonated and positive at physiological pH.
- **Arginine**, pKa ~12.5, the most basic. Its guanidinium group is resonance-stabilized when protonated, and it is essentially always positive in biological contexts.
- **Histidine**, pKa ~6.0, is the important one. This is close enough to physiological pH that histidine can be protonated or deprotonated depending on local environment — which makes it the standard acid-base catalyst in enzyme active sites. It is also the residue behind hemoglobin's buffering capacity.

If a question involves a residue that gains or loses a proton near pH 7, the answer is almost always histidine.

## Charge at a Given pH

The rule that resolves most of these questions: **below a group's pKa it is protonated, above it is deprotonated.**

Applied to charge:
- Acidic groups (COOH) are neutral when protonated, negative when deprotonated
- Basic groups (NH₂) are positive when protonated, neutral when deprotonated

So at pH 7.4:
- Backbone amino: protonated, +1
- Backbone carboxyl: deprotonated, −1
- Asp/Glu side chains: −1
- Lys/Arg side chains: +1
- His: mostly neutral, partially +

## pI

The **isoelectric point** is the pH at which net charge is zero.

For amino acids with nonionizable side chains, pI is the average of the two backbone pKa values — roughly (2.3 + 9.6)/2 ≈ 6.0.

For amino acids with ionizable side chains, average the two pKa values that flank the neutral species. Practically:
- **Acidic** amino acids → average the two acidic pKa values → low pI (~3)
- **Basic** amino acids → average the two basic pKa values → high pI (~10)

The application: at pH above its pI a molecule carries net negative charge and migrates toward the anode in electrophoresis. At pH below its pI, net positive, migrates toward the cathode. At pH = pI, it does not migrate and is least soluble — the basis for isoelectric focusing.

## Essential vs. Nonessential

Essential means the body cannot synthesize it and it must come from diet. Low-yield in detail, but occasionally referenced.

The nine essential: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine.

## What Gets Tested

- **Charge at a stated pH**, usually requiring you to compare pH to side chain pKa
- **Which residues would sit on a protein's surface vs. buried** — polar/charged out, nonpolar in
- **Disulfide bonds** — cysteine only, and what reducing agents do to them
- **Proline and glycine** disrupting or enabling secondary structure
- **Histidine** as the catalytic residue in a passage
- **pI and electrophoresis direction**
- **Hydrophobic residues** in transmembrane segments

If you know the five categories, the three special cases (Gly, Pro, Cys), and where His sits relative to physiological pH, most questions resolve without needing the structures.