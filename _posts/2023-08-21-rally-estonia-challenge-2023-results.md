---
layout: blogpost
title: Rally Estonia Challenge 2023 Results
date: 2023-08-21
image: /images/blog/rally_estonia_2023_results.jpg
alt: Rally Estonia Challenge 2023
permalink: /blog/:title/
meta: Rally Estonia Challenge 2023 Results
language: en
author: Tambet Matiisen
---

In spring 2023, twenty-seven students from the University of Tartu participated in a challenge to create autonomous driving models trained on the Rally Estonia Dataset, which contained approximately 500 kilometers of recordings from WRC Rally Estonia stages in 2021 and 2022. The organizers selected rally tracks specifically because "they have been designed to be challenging for humans, they can also serve as a demanding benchmark for a machine."

## Evaluation Process

The assessment occurred in two phases. First, neural network models were evaluated using the Vista simulation engine, developed at MIT. The simulation created virtual environments based on real-world recordings, with crashes occurring when vehicles deviated more than one meter from the original path. Models with fewer crashes advanced to real-world testing.

Five teams qualified for on-road evaluation on June 15th, testing their models on a 4.5-kilometer section of the Elva track (9 kilometers total in both directions). Safety driver interventions served as the primary evaluation metric.

## Results

**Final Rankings:**

1. **Anything** (Grayson Felt, Anish Shrestha, Ali Maharramov) - 1 disengagement
2. **Snake** (Thomas Metral, Paul Pelletier, Florian Bergere) - 3 disengagements
3. **RallyPilot** (Pavlo Pyvovar, Yuliia Siur, Nikita Fordui, Mert Bektas) - 3 disengagements
4. **Benatas** (Benjamin Eckhardt, Donatas Vaiciukevicius) - 3 disengagements
5. **kkh** (Karl Kaspar Haavel) - 4 disengagements

## Team Approaches

The winning team incorporated recurrent neural networks into the baseline architecture. The second-place team optimized hyperparameters, while the third-place team focused on data preprocessing and augmentation techniques.

## Key Takeaways

Organizers noted that simulation results correlated well with real-world performance, and ONNX submission formatting proved effective. However, the baseline model remained highly competitive, with most teams unable to substantially surpass it. The organizers suggested future challenges require more demanding tasks.
