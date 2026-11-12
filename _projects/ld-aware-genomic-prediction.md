---
layout: page
title: LD-Aware Genomic Prediction
description: EBMGP-style genomic prediction study evaluating LD-aware SNP representations, pooling strategies, and classical baselines across three species and eleven traits.
img:
importance: 3
category: research
github: https://github.com/kitkiti/ld-aware-genomic-prediction
---

This collaborative project with Md. Rezaur Rahman Bhuiyan and Jareen Tasneem Khondaker implemented and evaluated an EBMGP-style deep genomic-prediction pipeline across rice, sorghum, and Holstein-bull datasets.

## Highlights

- Implemented an end-to-end downstream pipeline from Elastic Net-selected SNP subsets through LD-aware tokenization, BERT-style token/position/type embeddings, convolutional feature extraction, and phenotype regression.
- Evaluated 11 quantitative traits across three species using 5-fold cross-validation.
- Reproduced LD-threshold ablations across multiple thresholds and compared MAP, average, max, and local-importance pooling.
- Benchmarked the deep model against RidgeCV, BayesianRidge, and histogram-gradient-boosting baselines using matched feature subsets and folds.
- Found that pooling strategy produced larger performance differences than the exact LD threshold, while classical baselines remained strong for some species and traits.

## Scope

The project adapts and evaluates the EBMGP framework rather than introducing the original method. It uses processed genotype/phenotype data and precomputed Elastic Net SNP rankings associated with the EBMGP experimental setup rather than reproducing the complete upstream raw-data preprocessing and feature-selection pipeline.

## Technologies

Python, PyTorch, Jupyter, genomic feature engineering, convolutional neural networks, cross-validation, and regression evaluation.

[View the project repository on GitHub](https://github.com/kitkiti/ld-aware-genomic-prediction)
