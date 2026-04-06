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

In the 2023 spring semester 27 students from the University of Tartu took the challenge to make a car drive by itself on the rural roads of Estonia. The students had to train neural network models on the Rally Estonia Dataset, which consists of ~500 km recordings from WRC Rally Estonia stages from 2021 and 2022. Rally tracks were chosen because as they have been designed to be challenging for humans, they can also serve as a demanding benchmark for a machine.

The evaluation of the submitted driving models took place in two stages. As a first step, the neural network models trained by students were evaluated in the Vista simulation engine developed at MIT. Only the solutions demonstrating a competitive performance in the simulation were admitted to testing in the real world. A Vista simulation is created based on a real-world recording, but as the driving model feeds driving commands to the simulator, the camera viewpoint is artificially shifted as if the car had moved.

<iframe width="780" height="580" src="https://www.youtube.com/embed/_oJ2Q4iQ1KE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If the car diverges more than 1 meter from the path followed in the underlying recording, the vehicle is considered to have crashed. The model with the least amount of crashes in the simulation wins. In case of an equal number of crashes, the model with the least jerky steering, measured as whiteness, is considered the winner.

**Vista simulation results (top entries):**

| Model (type) | Crashes (Total) | Whiteness eff (Avg) |
|---|---|---|
| Anything_3 (conditional) | 167 | 2.718 |
| Anything_5 (conditional) | 187 | 2.719 |
| RallyPilot_2 (conditional) | 202 | 2.618 |
| Snake_1 (conditional) | 208 | 2.792 |
| Benatas_1 (steering) | 208 | 5.308 |

Based on these results, five teams were invited to participate in the real-world evaluation of the models: Anything, RallyPilot, Snake, Benatas and kkh. The real-world evaluation took place on June 15th on a 4.5 km long section of WRC Rally Estonia's Elva track. The section was traversed in both directions, resulting in 9 km of driving. The car was monitored by the safety driver and a computer operator on front seats, the participating students could ride along on the back seat to observe their models drive.

## Final Results

| Team | Disengagements | Whiteness |
|---|---|---|
| 1st place: Anything (Grayson Felt, Anish Shrestha, Ali Maharramov) | 1 | 26.88 |
| 2nd place: Snake (Thomas Metral, Paul Pelletier, Florian Bergere) | 3 | 24.47 |
| 3rd place: RallyPilot (Pavlo Pyvovar, Yuliia Siur, Nikita Fordui, Mert Bektas) | 3 | 29.72 |
| 4th place: Benatas (Benjamin Eckhardt, Donatas Vaiciukevicius) | 3 | 34.35 |
| 5th place: kkh (Karl Kaspar Haavel) | 4 | -- |

Congratulations to the winners! The teams took quite different approaches to the problem:
- The winning team incorporated a recurrent neural network (RNN) into the baseline model architecture provided by the organizers.
- The second place fine-tuned the hyperparameters of the baseline model.
- The third place focused on the data and tried various preprocessing and data augmentation techniques, while using the baseline model as it was.

<iframe width="780" height="580" src="https://www.youtube.com/embed/H8KQlzrqzh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![Rally Estonia Challenge 2023 event](/images/blog/rally-estonia-2023-event.jpg){:class="max-w-full h-auto"}

![1st, 2nd and 4th place teams at the award ceremony](/images/blog/rally-estonia-2023-photo1.jpg){:class="max-w-full h-auto"}

![Rally Estonia Challenge 2023](/images/blog/rally-estonia-2023-photo2.jpg){:class="max-w-full h-auto"}

![Rally Estonia Challenge 2023](/images/blog/rally-estonia-2023-photo3.jpg){:class="max-w-full h-auto"}
