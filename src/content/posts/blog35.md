---
title: "Signal Detection Theory"
date: "2026-04-08"
preview: "Important psychology section for test day"
topic: "MCAT"
subtopics: ["Psych/Soc"]
image: "/blog-images/blog35_1.png"
---

Psych/soc, and one of the few topics there with actual structure to it. It appears in perception passages and in anything involving diagnostic decisions.

## The Problem It Solves

Classical psychophysics assumed a fixed sensory threshold — stimuli above it are detected, below it are not. That model fails on a simple observation: whether someone reports detecting a faint stimulus depends on more than the stimulus. It depends on expectations, motivation, and the consequences of being wrong.

Signal detection theory separates these into two independent components: **sensitivity** (how well you can actually discriminate signal from noise) and **response bias** (how willing you are to say "yes").

The core claim is that there is always **noise** in the system. Even with no stimulus present, background neural activity fluctuates. Detection is not "is there a signal" but "is this activity level more likely to have come from noise alone or from signal plus noise."

## The Four Outcomes

Two possible states of the world crossed with two possible responses:

|  | Signal present | Signal absent |
|---|---|---|
| **Said yes** | **Hit** | **False alarm** |
| **Said no** | **Miss** | **Correct rejection** |

Hits and correct rejections are correct. Misses and false alarms are the two error types.

This maps directly onto statistics: a false alarm is a Type I error, a miss is a Type II error. And onto medicine: a false alarm is a false positive, a miss is a false negative.

## d′ (Sensitivity)

d-prime measures how far apart the noise distribution and the signal-plus-noise distribution are, in standard deviation units.

Higher d′ means the two distributions overlap less and the task is easier — better signal, better sensory system, or better attention. d′ = 0 means the distributions are identical and performance is at chance.

**d′ is independent of where you set your criterion.** It is a property of the observer's discriminative capacity, not their decision policy.

## β (Criterion / Response Bias)

The criterion is the cutoff on the internal evidence axis above which you say "yes."

**Shift the criterion left (liberal / low β):** more hits, more false alarms. You say yes readily.

**Shift the criterion right (conservative / high β):** fewer false alarms, more misses. You require strong evidence.

The critical insight: **moving the criterion trades hits against false alarms without changing sensitivity.** You cannot improve both error types by adjusting your bias. Only increasing d′ does that.

## What Moves the Criterion

**Payoffs and costs.** If missing the signal is catastrophic and false alarms are cheap, you go liberal. A radiologist screening for cancer accepts false positives to avoid misses. A smoke detector is calibrated the same way — occasional false alarms from burnt toast are better than missing a fire.

**Prior probability.** If signals are rare, you become conservative. This is base rate sensitivity, and failing to account for it is base rate neglect.

**Expectations and motivation.** Being told to expect a stimulus makes detection more likely — partly a real attentional effect on d′, partly a criterion shift.

## The ROC Curve

Plotting hit rate against false alarm rate as the criterion varies gives the receiver operating characteristic curve.

- The **diagonal** line is chance performance, d′ = 0.
- Curves bowing toward the **upper left** indicate higher sensitivity.
- Movement **along** a single curve is a criterion change.
- Movement **between** curves is a sensitivity change.

Area under the curve summarizes overall sensitivity. This is the same ROC analysis used to evaluate diagnostic tests.

## Related Threshold Concepts

**Absolute threshold** — the minimum stimulus intensity detected 50% of the time. The 50% is there precisely because there is no sharp cutoff.

**Difference threshold (JND)** — the smallest detectable difference between two stimuli.

**Weber's law** — the JND is a constant *proportion* of the original stimulus, not a constant amount. ΔI/I = k. You notice a 1 lb change on a 10 lb weight but not on a 100 lb weight.

**Subliminal stimuli** fall below the absolute threshold. They can produce measurable priming effects, but the popular claim that they drive complex behavior is not supported.

## What Gets Tested

- Classifying a described outcome into hit / miss / false alarm / correct rejection
- Recognizing that a change in payoffs shifts criterion, not sensitivity
- Reading an ROC curve for which observer is more sensitive
- Distinguishing d′ from β when a passage describes an intervention
- The medicine mapping — false positive and false negative

The most common trap: a passage describes participants becoming "better at detecting" something after being told to expect it, and asks whether sensitivity improved. Often the correct answer is that the criterion shifted — hits went up but so did false alarms, which is a bias change, not a sensitivity change. Check whether false alarms moved in the same direction as hits.