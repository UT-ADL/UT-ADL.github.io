---
layout: blogpost
subtitle: Blog
title: Rally Estonia Challenge 2023 Results
date: 2023-08-21
image: /images/blog/rally_estonia_2023_results.jpg
alt: Rally Estonia Challenge 2023
permalink: /blog/:title/
meta: Rally Estonia Challenge 2023 Results
language: en
author: Tambet Matiisen
---

![Fourth place winners team Benatas posing with the car](/images/blog/rally-estonia-2023-event.jpg)

**Photo:** Fourth place winners team Benatas posing with the car.

In the 2023 spring semester 27 students from the University of Tartu took the challenge to make a car drive by itself on the rural roads of Estonia. The students had to train neural network models on the [Rally Estonia Dataset](https://github.com/UT-ADL/e2e-rally-estonia){:target="_blank"}, which consists of ~500 km recordings from [WRC Rally Estonia](https://www.rallyestonia.ee/){:target="_blank"} stages from 2021 and 2022. Rally tracks were chosen because as they have been designed to be challenging for humans, they can also serve as a demanding benchmark for a machine.

The evaluation of the submitted driving models took place in two stages. As a first step, the neural network models trained by students were evaluated in the [Vista simulation engine](https://github.com/UT-ADL/vista-evaluation/){:target="_blank"} developed at [MIT](https://github.com/vista-simulator/vista){:target="_blank"}. Only the solutions demonstrating a competitive performance in the simulation were admitted to testing in the real world.

A Vista simulation is created based on a real-world recording, but as the driving model feeds driving commands to the simulator, the camera viewpoint is artificially shifted as if the car had moved.

{% include youtube.html id="_oJ2Q4iQ1KE" %}

**Video:** Evaluation of a model in a Vista simulation.

If the car diverges more than 1 meter from the path followed in the underlying recording, the vehicle is considered to have crashed. The model with the least amount of crashes in the simulation wins. In case of an equal number of crashes, the model with the least jerky steering, measured as whiteness, is considered the winner. The results of this virtual evaluation are presented in the Table 1 below.

**Table 1:** Vista simulation results. The first part of the model name in the first column refers to the team name, followed by the submission number and model type in parenthesis.

| Model (type) | Crashes (Total) | Whiteness eff (Avg) |
|---|---:|---:|
| Anything_3 (conditional) | 167 | 2.718 |
| Anything_5 (conditional) | 187 | 2.719 |
| RallyPilot_2 (conditional) | 202 | 2.618 |
| Snake_1 (conditional) | 208 | 2.792 |
| Benatas_1 (steering) | 208 | 5.308 |
| Benatas_2\*\* (conditional) | 208 | 2.6 |
| kkh_1.onnx (conditional) | 209 | 2.676 |
| Snake_5 (conditional) | 210 | 2.879 |
| Snake_2 (conditional) | 212 | 2.682 |
| Anything_1 (conditional) | 215 | 2.828 |
| FM_1 (conditional) | 218 | 2.554 |
| SCMLsolo_2 (conditional) | 220 | 3.002 |
| AA_0 (conditional) | 224 | 2.736 |
| Anything_2 (conditional) | 225 | 2.922 |
| RallyPilot_1 (conditional) | 228 | 2.828 |
| shelduck_1 (steering) | 230 | 4.348 |
| Snake_4 (conditional) | 231 | 2.84 |
| SCMLsolo_1 (steering) | 232 | 5.892 |
| RallyPilot_0 (conditional) | 233 | 2.89 |
| Snake_3 (conditional) | 235 | 3.022 |
| DS_1 (conditional) | 236 | 3.024 |
| darel_1 (conditional) | 237 | 2.753 |
| Anything_4 (conditional) | 242 | 3.029 |
| Snake_6\*\* (conditional) | 248 | 2.667 |
| leo_1 (steering) | 249 | 3.994 |
| leo_2 (steering) | 255 | 3.623 |
| leo_3 (steering) | 255 | 4.071 |
| bebera_ct_0 (conditional) | 1441 | 17.23 |
| DL_1 (steering) | 1607 | 5.453 |
| laughingthrush_0 (steering) | 1647 | 10.23 |

Based on these results, five teams were invited to participate in the real-world evaluation of the models: Anything, RallyPilot, Snake, Benatas and kkh. The real-world evaluation took place on June 15th on a 4.5 km long section of WRC Rally Estonia's [Elva track](https://www.rally-maps.com/Rally-Estonia-2022/Elva){:target="_blank"}. The section was traversed in both directions, resulting in 9 km of driving. The car was monitored by the safety driver and a computer operator on front seats, the participating students could ride along on the back seat to observe their models drive.

{% include youtube.html id="H8KQlzrqzh0" %}

**Video:** Evaluation of the models in the real car.

The evaluation metric in the real-world tests was the number of safety driver interventions a.k.a. disengagements. It was up to the safety driver to decide whether she felt an intervention was necessary to ensure the safety of the passengers and the car. In case of an equal number of interventions, again, the model with the least jerky steering would win. The results are presented in Table 2 below.

**Table 2:** Final evaluation results.

<table>
<thead>
<tr><th></th><th>Team</th><th style="text-align: right;">Disengagements</th><th style="text-align: right;">Whiteness</th></tr>
</thead>
<tbody>
<tr><td>1st place</td><td><b>Anything</b><br>Grayson Felt<br>Anish Shrestha<br>Ali Maharramov</td><td style="text-align: right;">1</td><td style="text-align: right;">26.88</td></tr>
<tr><td>2nd place</td><td><b>Snake</b><br>Thomas Metral<br>Paul Pelletier<br>Florian Bergere</td><td style="text-align: right;">3</td><td style="text-align: right;">24.47</td></tr>
<tr><td>3rd place</td><td><b>RallyPilot</b><br>Pavlo Pyvovar<br>Yuliia Siur<br>Nikita Fordui<br>Mert Bektas</td><td style="text-align: right;">3</td><td style="text-align: right;">29.72</td></tr>
<tr><td>4th place</td><td><b>Benatas</b><br>Benjamin Eckhardt<br>Donatas Vaiciukevicius</td><td style="text-align: right;">3</td><td style="text-align: right;">34.35</td></tr>
<tr><td>5th place</td><td><b>kkh</b><br>Karl Kaspar Haavel</td><td style="text-align: right;">4</td><td style="text-align: right;"></td></tr>
</tbody>
</table>

Congratulations to the winners! The teams took quite different approaches to the problem:
- The winning team incorporated a recurrent neural network (RNN) into the baseline model architecture provided by the organizers. You can read about their experiences from their [blog post](https://medium.com/@graysonfelt/rally-estonia-challenge-2023-steering-the-path-to-success-f129ea3092db){:target="_blank"}.
- The second place fine-tuned the hyperparameters of the baseline model. You can read about their experiences from their [blog post](https://medium.com/@metralthom/rally-estonia-challenge-f4f004a222e8){:target="_blank"}.
- The third place focused on the data and tried various preprocessing and data augmentation techniques, while using the baseline model as it was. You can read about their experiences from their [blog post](https://medium.com/@ppyvovar_11902/rallypilot-a-quest-to-teach-a-car-to-drive-rally-tracks-3278ffc9176){:target="_blank"}.

<div class="image-row">
  <a href="/images/blog/rally-estonia-2023-photo1.jpg" target="_blank"><img src="/images/blog/rally-estonia-2023-photo1.jpg" alt="The winning team Anything"></a>
  <a href="/images/blog/rally-estonia-2023-photo2.jpg" target="_blank"><img src="/images/blog/rally-estonia-2023-photo2.jpg" alt="Team RallyPilot won third place"></a>
  <a href="/images/blog/rally-estonia-2023-photo3.jpg" target="_blank"><img src="/images/blog/rally-estonia-2023-photo3.jpg" alt="Team Benatas finished in fourth place"></a>
</div>

**Photos:** 1st, 2nd and 4th place teams at the Rally Estonia Challenge 2023 award ceremony.

Finally some general observations and takeaways from the organizers:
- In general, the competition ran smoothly. Apart from minor hiccups the baseline code and the dataset were usable for the students.
- The use of simulation as a preliminary evaluation fulfilled its task of filtering the submissions, the results in the simulation were correlated with the real-world driving results.
- The choice of using ONNX as the submission format was a success - it was relatively easy to create and sufficiently flexible, for example, students managed to incorporate RNN in the model without any changes in the inference code.
- The baseline model was too competitive, very few students managed to outperform it substantially. Still, the winning solution clearly drove safer than the baseline.
- The task of road following is too simple, the first teams had very few interventions and the differences between the teams were very small.

We are looking forward to organizing the competition next year, possibly with a more challenging task!
