# Data Readiness Gate

**Interactive practice prototype for deciding whether an AI use case is ready to proceed**

[Try the live demonstration](https://data-readiness-audit-gate-prototype.vercel.app/)
[Inspect the JavaScript](./script.js)

## Purpose

A dataset can be technically available while still being unsuitable for an AI implementation. This browser-based prototype makes the reasons for a deployment hold visible and actionable.

## What the interactive prototype covers

- **Data sources:** Assess ownership, access, quality issues, and intended use.
- **Label consistency:** Inspect a fictional case in which equivalent evidence receives inconsistent historical outcomes.
- **Bias review:** Identify groups or situations with thin representation.
- **Compliance:** Review access controls, vendor processing terms, and auditability questions.
- **Deployment decision:** Explore a simulated hold/release gate and remediation scenario.

## What this prototype demonstrates

A dataset can be available without being suitable for an AI release. This browser-based student project converts data-readiness and governance concerns into a **visible deployment hold/review decision**.

## Try it yourself

1. Open the **Data Sources** panel and identify ownership gaps.
2. Use **Label Consistency → Run label consistency demo** to view conflicting decisions for the same fictional facts.
3. Open **Bias Review** and **Compliance Review** to inspect underrepresented cases and open controls.
4. Open **Deployment Gate**, toggle the **Simulate remediation** control, and examine which decisions change.

## Design contributions

Mapped source ownership, label integrity, subgroup review, and required audit fields into an interactive readiness demonstration. Translated findings into reviewer-friendly descriptions and a remediation checklist.

## Technical boundaries

Static HTML/CSS/JavaScript, deployed on Vercel. All names, scores, decisions, and evidence are invented examples. No real model inference, patient data, or live external database.

## Next iteration

Allow a user to adjust simulated source-quality values, preserve the hard-stop controls, export an evidence summary, and compare the before/after gate outcomes. Any further controls should stay clearly marked as synthetic. endpoint is connected.

## Data and safety

Every organization, number, policy, and score in this practice demo is fictional. The prototype contains no patient information and makes no real-world clinical recommendation.

## Why this matters for enterprise AI

The prototype expresses a practical design principle: define minimum data and governance conditions before an AI system can be approved for use. A decision gate should be explainable to business owners and reviewers, even when the underlying architecture is complex.

**Designed by Maya Kalantari | Georgetown University**
