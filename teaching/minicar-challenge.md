---
layout: teaching
title: Minicar Challenge
permalink: /teaching/minicar-challenge
subtitle: Teaching
meta: ADL Minicar Challenge, is a yearly software competition held by the Autonomous Driving Lab (ADL) and the Insitute of Computer Science. The task in this competition series is to create a software solution that can autonomously drive a toy car based on visual inputs.
---

## {{page.title}}

**ADL Minicar Challenge**, is a yearly **software competition** held by the Autonomous Driving Lab (ADL) and the Insitute of Computer Science. The task in this competition series is to create a software solution that can autonomously drive a toy car based on visual inputs.

Most of the solutions apply some form of **data science**, very often **machine learning** and **artificial neural networks** to solve the task. However, any software can be used, including hand-written rules and commands. We call it a software competition because upgrading the hardware is not allowed.

We strongly believe that self-driving with toy cars is an **awesome way to learn the entire life cycle of data-driven solutions**. In common data science student projects the data acquisition, cleaning and model deployment phases are omitted. In here, the student will be responsible for the entire process from data collection to multiple iterations of deployment and learning from failures. Having a solution successfully deployed in the real world looks good on any CV. 

### Competition in January 2024

The competition is held in January 2024 using the **DonkeyCar S1** platform. The main task is driving in a toy urban environment, with the following four challenges:

1. **Avoiding obstacles** — static vehicles and pedestrians on the road
2. **Pedestrian crossings** — giving way to pedestrians
3. **Intersections** — giving way to a vehicle on the right at T-shaped intersections
4. **Traffic signs** — obeying traffic signs

Participation in the competition can yield **6 ECTS** if you register to Autonomous Vehicles Project LTAT.06.012. It can also serve as a course project in various courses, e.g. Machine Learning, Neural Networks and Introduction to Data Science. The competition is also open to students from other faculties and non-students.

We use the **DonkeyCar S1** platform. These cars come equipped with a frontal camera that is the main sensor. They also have an IMU (inertial measurement unit), that can but doesn't need to be used. The car is 1:10 scale compared to a real car. **Changing car hardware is not allowed in this competition, this is a software competition.** The existing codebase lets you get to collecting data in 10 minutes and training a neural network model in less than an hour.

Full rules and hardware details are available from the course page.

### The Minicar

The **DonkeyCar S1** is a 1:10 scale car equipped with:
- A camera as the main sensor
- Raspberry Pi 4b for onboard computation
- MM1 board for motor control
- A mobile app for remote control and data collection

The car can drive autonomously using a convolutional neural network (CNN) at ~25 Hz. The model is trained on collected driving data from the toy town environment.

![Donkey car S1](/images/teaching/donkeycar.png){:width="50%"}
{:align="center"}

### Competition in January 2023

The winners were:
- **1st place:** Yevhen Pankevych & Volodymyr Savchuk
- **2nd place:** Mihkel Lepson & Artur Tuttar
- **3rd place:** Pavlo Pyvovar

The hardware platform was DonkeyCar S1. Three new challenge elements were added compared to 2022.

### Competition in January 2022

In January 2022 the second competition was held with 1:10 scale cars called DonkeyCar. There were two tasks: object avoidance and route completion. The main prizes for each tasks were 1000 euros. 

The rewarded teams were:\\
Task 1: object avoidance and lane following [promo video](https://drive.google.com/file/d/1AWb7K9OS040sXaDyKyH51hV61MoAK9FU/view?usp=sharing)\\
**1st place:**  Rustam Abdumalikov and Aral Açıkalın [winners run](https://drive.google.com/file/d/1qED1JFRyDuxDXJ4y6F0RvhAILj8njNfm/view?usp=sharing) \\
**2nd place:** Mike Camara \\
**3rd place:** Kristjan Roosild \\
\\
Task 2: route completion [pr video](https://drive.google.com/file/d/1CrOKqFfi5kZkyHpE5qf5ne21npsTHCCW/view?usp=sharing)\\
**1st place:**  Rustam Abdumalikov and Aral Açıkalın \\
**2nd place:** not awarded \\
**3rd place:** not awarded

![Winners 2022](/images/teaching/winners_2022.jpeg){:width="50%"}
{:align="center"}

### Competition in January 2021

In January 2021 the first competition was held with 1:25 scale cars on a racing track. The winning solution completed the track in both directions with clean driving and great speed. The rewarded teams were:\\
**1st place:** Leo Schoberwalter ([video1](https://drive.google.com/file/d/1MzgqSjSFthfcl4rvc4ZiQBDQvcD8IibS/view?usp=sharing), [video2](https://drive.google.com/file/d/12NC186FKDB7pgkrsDROx-rrRo1FaDQS8/view?usp=sharing), [ video from onboad camera](https://drive.google.com/file/d/1R-dBgMdWhQLGk2pjV_vDJtgL8ml7Vlm7/view?usp=sharing))\\
**2nd place:** Enlik and Handy Kurniawan ([video1](https://drive.google.com/file/d/1mhBgMoL_4N9rT2IkuqKXscPD7hAwWJ_4/view?usp=sharing), [video2](https://drive.google.com/file/d/1HlBUeXQJezDm9TfexEiBHcmumzP69lfP/view?usp=sharing)) \\
**3rd place:** Thamara Luup, Mykyta Baliesnyi, Aleksasha Krylov ([video1](https://drive.google.com/file/d/1icsKWh0XZ22zLCCydekP-xTyXt4E95DD/view?usp=sharing), [video2](https://drive.google.com/file/d/13HN55vnDwECtH478REL3H0k1Gvk1arcN/view?usp=sharing))
