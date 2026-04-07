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

![Fourth place winners team Benatas posing with the car](/images/blog/rally-estonia-2023-event.jpg){:class="max-w-full h-auto"}

**Photo:** Fourth place winners team Benatas posing with the car.

In the 2023 spring semester 27 students from the University of Tartu took the challenge to make a car drive by itself on the rural roads of Estonia. The students had to train neural network models on the [Rally Estonia Dataset](https://github.com/UT-ADL/e2e-rally-estonia){:target="_blank"}, which consists of ~500 km recordings from [WRC Rally Estonia](https://www.rallyestonia.ee/){:target="_blank"} stages from 2021 and 2022. Rally tracks were chosen because as they have been designed to be challenging for humans, they can also serve as a demanding benchmark for a machine.

The evaluation of the submitted driving models took place in two stages. As a first step, the neural network models trained by students were evaluated in the [Vista simulation engine](https://github.com/UT-ADL/vista-evaluation/){:target="_blank"} developed at [MIT](https://github.com/vista-simulator/vista){:target="_blank"}. Only the solutions demonstrating a competitive performance in the simulation were admitted to testing in the real world.

A Vista simulation is created based on a real-world recording, but as the driving model feeds driving commands to the simulator, the camera viewpoint is artificially shifted as if the car had moved.

<iframe src="https://www.youtube.com/embed/_oJ2Q4iQ1KE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; aspect-ratio: 16/9;"></iframe>

**Video:** Evaluation of a model in a Vista simulation.

If the car diverges more than 1 meter from the path followed in the underlying recording, the vehicle is considered to have crashed. The model with the least amount of crashes in the simulation wins. In case of an equal number of crashes, the model with the least jerky steering, measured as whiteness, is considered the winner. The results of this virtual evaluation are presented in the Table 1 below.

**Table 1:** Vista simulation results. The first part of the model name in the first column refers to the team name, followed by the submission number and model type in parenthesis.

<table style="border-collapse: collapse; font-size: 14px; text-align: center;">
<tr><td style="background: #bdbdbd; border: 1px solid #000; padding: 2pt;">Model (type)</td><td style="background: #bdbdbd; border: 1px solid #000; padding: 2pt;">Crashes (Total)</td><td style="background: #bdbdbd; border: 1px solid #000; padding: 2pt;">Whiteness eff (Avg)</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">Anything_3 (conditional)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">167</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">2.718</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">Anything_5 (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">187</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">2.719</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">RallyPilot_2 (conditioanl)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">202</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">2.618</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">Snake_1 (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">208</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">2.792</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">Benatas_1 (steering)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">208</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">5.308</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">Benatas_2** (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">208</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">2.6</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">kkh_1.onnx (conditional)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">209</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">2.676</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">Snake_5 (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">210</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">2.879</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">Snake_2 (conditional)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">212</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">2.682</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">Anything_1 (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">215</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">2.828</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">FM_1 (conditional)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">218</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">2.554</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">SCMLsolo_2 (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">220</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">3.002</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">AA_0 (conditional)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">224</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">2.736</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">Anything_2 (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">225</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">2.922</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">RallyPilot_1 (conditional)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">228</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">2.828</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">shelduck_1 (steering)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">230</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">4.348</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">Snake_4 (conditional)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">231</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">2.84</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">SCMLsolo_1 (steering)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">232</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">5.892</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">RallyPiolt_0 (conditional)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">233</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">2.89</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">Snake_3 (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">235</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">3.022</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">DS_1 (conditional)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">236</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">3.024</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">darel_1 (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">237</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">2.753</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">Anything_4 (conditional)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">242</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">3.029</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">Snake_6** (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">248</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">2.667</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">leo_1 (steering)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">249</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">3.994</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">leo_2 (steering)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">255</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">3.623</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">leo_3 (steering)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">255</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">4.071</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">bebera_ct_0 (conditional)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">1441</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">17.23</td></tr>
<tr><td style="background: #fff; border: 1px solid #000; padding: 2pt;">DL_1 (steering)</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">1607</td><td style="background: #fff; border: 1px solid #000; padding: 2pt;">5.453</td></tr>
<tr><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">laughingthrush_0 (steering)</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">1647</td><td style="background: #f3f3f3; border: 1px solid #000; padding: 2pt;">10.23</td></tr>
</table>

Based on these results, five teams were invited to participate in the real-world evaluation of the models: Anything, RallyPilot, Snake, Benatas and kkh. The real-world evaluation took place on June 15th on a 4.5 km long section of WRC Rally Estonia's [Elva track](https://www.rally-maps.com/Rally-Estonia-2022/Elva){:target="_blank"}. The section was traversed in both directions, resulting in 9 km of driving. The car was monitored by the safety driver and a computer operator on front seats, the participating students could ride along on the back seat to observe their models drive.

<iframe src="https://www.youtube.com/embed/H8KQlzrqzh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; aspect-ratio: 16/9;"></iframe>

**Video:** Evaluation of the models in the real car.

The evaluation metric in the real-world tests was the number of safety driver interventions a.k.a. disengagements. It was up to the safety driver to decide whether she felt an intervention was necessary to ensure the safety of the passengers and the car. In case of an equal number of interventions, again, the model with the least jerky steering would win. The results are presented in Table 2 below.

**Table 2:** Final evaluation results.

<table style="border-collapse: collapse; font-size: 14px;">
<tr><td style="background: #40916c; color: #fff; border: 1px solid #9e9e9e; padding: 7pt;"></td><td style="background: #40916c; color: #fff; border: 1px solid #9e9e9e; padding: 7pt;">Team</td><td style="background: #40916c; color: #fff; border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">Disengagements</td><td style="background: #40916c; color: #fff; border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">Whiteness</td></tr>
<tr><td style="background: #eee; border: 1px solid #9e9e9e; padding: 7pt;">1st place</td><td style="border: 1px solid #9e9e9e; padding: 7pt;"><b>Anything</b><br>Grayson Felt<br>Anish Shrestha<br>Ali Maharramov</td><td style="border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">1</td><td style="border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">26.88</td></tr>
<tr><td style="background: #eee; border: 1px solid #9e9e9e; padding: 7pt;">2nd place</td><td style="border: 1px solid #9e9e9e; padding: 7pt;"><b>Snake</b><br>Thomas Metral<br>Paul Pelletier<br>Florian Bergere</td><td style="border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">3</td><td style="border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">24.47</td></tr>
<tr><td style="background: #eee; border: 1px solid #9e9e9e; padding: 7pt;">3rd place</td><td style="border: 1px solid #9e9e9e; padding: 7pt;"><b>RallyPilot</b><br>Pavlo Pyvovar<br>Yuliia Siur<br>Nikita Fordui<br>Mert Bektas</td><td style="border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">3</td><td style="border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">29.72</td></tr>
<tr><td style="background: #eee; border: 1px solid #9e9e9e; padding: 7pt;">4th place</td><td style="border: 1px solid #9e9e9e; padding: 7pt;"><b>Benatas</b><br>Benjamin Eckhardt<br>Donatas Vaiciukevicius</td><td style="border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">3</td><td style="border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">34.35</td></tr>
<tr><td style="background: #eee; border: 1px solid #9e9e9e; padding: 7pt;">5th place</td><td style="border: 1px solid #9e9e9e; padding: 7pt;"><b>kkh</b><br>Karl Kaspar Haavel</td><td style="border: 1px solid #9e9e9e; padding: 7pt; text-align: right;">4</td><td style="border: 1px solid #9e9e9e; padding: 7pt; text-align: right;"></td></tr>
</table>

Congratulations to the winners! The teams took quite different approaches to the problem:
- The winning team incorporated a recurrent neural network (RNN) into the baseline model architecture provided by the organizers. You can read about their experiences from their [blog post](https://medium.com/@graysonfelt/rally-estonia-challenge-2023-steering-the-path-to-success-f129ea3092db){:target="_blank"}.
- The second place fine-tuned the hyperparameters of the baseline model. You can read about their experiences from their [blog post](https://medium.com/@metralthom/rally-estonia-challenge-f4f004a222e8){:target="_blank"}.
- The third place focused on the data and tried various preprocessing and data augmentation techniques, while using the baseline model as it was. You can read about their experiences from their [blog post](https://medium.com/@ppyvovar_11902/rallypilot-a-quest-to-teach-a-car-to-drive-rally-tracks-3278ffc9176){:target="_blank"}.

<div style="display: flex; gap: 8px;">
  <a href="/images/blog/rally-estonia-2023-photo1.jpg" target="_blank" style="width: 33.333%;"><img src="/images/blog/rally-estonia-2023-photo1.jpg" alt="The winning team Anything" style="width: 100%; height: 220px; object-fit: cover;"></a>
  <a href="/images/blog/rally-estonia-2023-photo2.jpg" target="_blank" style="width: 33.333%;"><img src="/images/blog/rally-estonia-2023-photo2.jpg" alt="Team RallyPilot won third place" style="width: 100%; height: 220px; object-fit: cover;"></a>
  <a href="/images/blog/rally-estonia-2023-photo3.jpg" target="_blank" style="width: 33.333%;"><img src="/images/blog/rally-estonia-2023-photo3.jpg" alt="Team Benatas finished in fourth place" style="width: 100%; height: 220px; object-fit: cover;"></a>
</div>

**Photos:** 1st, 2nd and 4th place teams at the Rally Estonia Challenge 2023 award ceremony.

Finally some general observations and takeaways from the organizers:
- In general, the competition ran smoothly. Apart from minor hiccups the baseline code and the dataset were usable for the students.
- The use of simulation as a preliminary evaluation fulfilled its task of filtering the submissions, the results in the simulation were correlated with the real-world driving results.
- The choice of using ONNX as the submission format was a success - it was relatively easy to create and sufficiently flexible, for example, students managed to incorporate RNN in the model without any changes in the inference code.
- The baseline model was too competitive, very few students managed to outperform it substantially. Still, the winning solution clearly drove safer than the baseline.
- The task of road following is too simple, the first teams had very few interventions and the differences between the teams were very small.

We are looking forward to organizing the competition next year, possibly with a more challenging task!
