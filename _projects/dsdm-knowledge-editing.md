---
layout: page
title: DSDM Knowledge-Editing Experiments
description: Experimental infrastructure for DSDM-based replacement and knowledge editing, including ROME-aligned evaluation, consecutive editing, bounded sweeps, and reproducible experiment tooling.
img:
importance: 1
category: research
github: https://github.com/kitkiti/dsdm-knowledge-editing-experiments
---

This repository is a public research artifact derived from a 2026 collaboration on DSDM-based knowledge editing in language models. It preserves the development history of the experimental and evaluation infrastructure while omitting the underlying reference implementation and unpublished collaboration results.

## Highlights

- Developed replacement-experiment workflows with seen/unseen evaluation, run metadata, timing, and compatible baseline reuse.
- Built data-preparation and evaluation pipelines for zsRE, CounterFact, and TriviaQA.
- Implemented ROME-aligned efficacy, paraphrase, and locality evaluation for independent knowledge-editing experiments.
- Developed consecutive and checkpointed editing workflows for studying immediate edit behavior, retention, forgetting, and cumulative updates.
- Built bounded hyperparameter-sweep, aggregation, and reproducibility tooling for cluster-scale experiments.

## Scope

The underlying DSDM replacement approach and initial reference implementation originated within the research collaboration and are not distributed in the public repository. The artifact focuses on the experiment, evaluation, and research-engineering layer.

[View the research artifact on GitHub](https://github.com/kitkiti/dsdm-knowledge-editing-experiments)
