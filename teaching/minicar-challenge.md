---
layout: text
title: Minicar Challenge
permalink: /teaching/minicar-challenge
subtitle: Teaching
subnav: teaching
meta: ADL Minicar Challenge, is a yearly software competition held by the Autonomous Driving Lab (ADL) and the Institute of Computer Science. The task in this competition series is to create a software solution that can autonomously drive a toy car based on visual inputs.
---

## Minicar Challenge

The ADL Minicar Challenge is a yearly software competition held by ADL and the Institute of Computer Science. The task in this competition series is to create a software solution that can autonomously drive a toy car based on visual inputs. The competition is also open to students from other faculties, universities, and even non-students (up to 50% per team).

Most of the solutions apply some form of data science, very often machine learning and artificial neural networks to solve the task. However, any software can be used, including hand-written rules and commands. We call it a software competition because upgrading the hardware is not allowed.

We strongly believe that self-driving with toy cars is an awesome way to learn **the entire life cycle of data-driven solutions**. In common data science student projects the **data acquisition, cleaning, and model deployment** phases are omitted. Here, the student will be responsible for the entire process from data collection to **multiple iterations of deployment and learning from failures**. Having a solution successfully deployed in the real world looks good on any CV.

## Competition in January 2024

The self-driving minicar competition will take place again in the fall semester of 2023/24 academic year. The final event will take place end of January (week of 22.01.-26.01 most likely). Participation in the final event is not obligatory, but rewards for the winners will be motivating. However, all teams that want to receive ECTS credit points for participation must pass a "rehearsal competition" at the beginning of January, because deploying the model is the key learning experience we value.

The hardware platform will again be DonkeyCar S1 (read below in the section "The Minicar"). The main task will again be urban driving in a toy town with the challenges of:

1. avoiding track walls, pedestrians, and static vehicles ([example video from 2023 winning team](https://drive.google.com/file/d/1r8IeQSGxHCGHfuOi6e6oSKZ1Ox_PXmbJ/view?usp=sharing))
2. giving way on a pedestrian crossing ([example video from 2023 winning team](https://drive.google.com/file/d/1ghxVFVVVrXZT8PZtJIrGH8e7KFRulGjC/view?usp=drive_link))
3. giving way to a vehicle on the right at an intersection ([example video from 2023 winning team](https://drive.google.com/file/d/1c5sHxkvN6JSrH8oCkCmUPyCmrNQE_Kc1/view?usp=drive_link))
4. adhering to "direction of driving" and "stop" signs ([example video from 2023 winning team](https://drive.google.com/file/d/1n63etRDFiCtRbQKLhZt-iZwwlmhd_epx/view?usp=drive_link))

The exact rules and scoring system are in the process of being developed, the preliminary rules you can find from [here](https://docs.google.com/document/d/1zBTwY-VUEgXVIhHUYzWLIWG2IdKjwuJtPAlVC0M6caM/edit). There are a few rules that we abide by every year:

1. the car hardware can not be changed, e.g. more sensors added, more compute added. The only exception is improving the turning radius by tweaking the pieces already mounted on the car (e.g. changing default wheel angles).
2. There are no restrictions on the software you create to drive the car, except that it needs to rely on the input sensors (and not play back recorded trajectory, for example)
3. You are free to use external computing power
4. You are free to use not-machine-learning based solutions, such as computer-vision-based approaches (detecting lines, devising a rule when and where to turn)

For students of the University of Tartu, participation in the competition could yield 3 ECTS if you register for the course Autonomous Vehicles Project LTAT.06.012 ([link](https://courses.cs.ut.ee/2023/AutVehProj/fall), email ardi.tampuu@ut.ee to register late). You can register for this course mid-semester, you just have to produce all deliverables by the end of the semester, as everyone does. It could also serve as a course project in other courses, e.g. Machine Learning, Neural Networks, Introduction to Data Science, and Intelligent Transportation Systems.

The DonkeyCar S1 platform is equipped with a frontal camera which is the main sensor and Raspberry Pi 4b as the computing power. It also has an IMU (inertial measurement unit) that can but hasn't been used by any team so far. The DonkeyCar codebase is really user-friendly and one can start collecting data in 5 minutes (the time of downloading the app) and training a driving model in less than an hour (the time of installing software on a laptop).

Email: [ardi.tampuu@ut.ee](mailto:ardi.tampuu@ut.ee) to participate.

![DonkeyCar S1](/images/teaching/donkeycar.png){:class="max-w-full h-auto"}

## The minicar

DonkeyCar S1 is a 1:10 scale toy car, equipped with a camera, Raspberry Pi 4b, and MM1 remote control board. It comes assembled and functional, no hardware skills are needed to use it. It has a strong and responsive community in Discord.

**The DonkeyCar:**
- Has a mobile app that allows you to get driving with the car in 5 minutes. Driving means collecting human-driving data that AI can learn from or that you can use to develop your computer-vision and rule-based approach! You can train basic neural network models within the app, without even having to install anything on your computer (but it's slow, the phone is not very powerful). You just drive around, collect data, and based on the recordings of your driving, the app can train a model to imitate you.
- The car can be controlled via a mobile app, web application, or a game controller. You can choose when to record and if to delete the last 100 frames (in case of behavior you don't want the model to learn, e.g. you crashed the car), and so on, either via application or via buttons on the controller. You can clear the data also afterward, there are tools with sufficiently comfortable UI for this.
- For more advanced models, there is a codebase that allows you to transfer recordings from the car to your computer, train a model in your computer or in Google Colabs, transfer the code/models back to the car, and launch it, let it drive.
- The codebase supports multiple model types.
- The cars can be configured to connect to any Wi-Fi network. Being in the same network you can connect to the car via ssh if you know the device name.
- The battery lasts for a few hours of driving but is a fire hazard and needs to be kept in fireproof bags when not in use. Please adhere to the safety rules regarding the batteries.

Based on prior projects, a few more words about the capabilities and limitations of the hardware:

- 180-degree turning diameter as measured by outside wheel 140-160 cm, depending on the car
- Cannot maintain speed when hardware heats up (need to manually turn up throttle)
- All driving so far has been done with end-to-end systems. So far only steering has been controlled, but it is possible to control speed too, it just needs more data to learn.
- Raspberry Pi 4b can compute simple CNN prediction in 40ms, 25 Hz is enough frequency for driving
- Can be taught to drive between walls, or follow a line. Can avoid obstacles. Can adhere to conditional commands "turn left, turn right" or other similar (drive slow).
- Can be taught to give way to another donkey coming from the right
- Can drive indoors and outdoors
- Quite sensitive to light conditions, as expected

## Competition in January 2023

Results of the 2023 competition:

**1st place (1000 euros prize):** Yevhen Pankevych and Volodymyr Savchuk, score 0.068, [github](https://github.com/yewhenp/autonomous_vehicles_project)\\
**2nd place (500 euros prize):** Mihkel Lepson and Artur Tuttar, score 0.054, [GitHub](https://github.com/Henrik895/ml-donkey-car-project)\\
**3rd place (250 euros prize):** Pavlo Pyvovar, score 0.020, [github](https://github.com/Pavel-Pyvovar/ADL-Minicar-Challenge-2023)

![Winners 2023](/images/teaching/winners_2023.png){:class="max-w-full h-auto" style="max-width: 410px; margin: 0 auto; display: block;"}

The hardware platform was DonkeyCar. The [rules](https://docs.google.com/document/d/1lKWmzDgB0UsW0jYLL02xssNvKfSIyu-uawcHl9se4VY/edit) give a good idea of the task. The main task was driving in a toy town with the challenges of avoiding pedestrians and static vehicles. Every infraction would multiply the score by a number smaller than one. Also, the percentage of the route completed autonomously will count. An example scoring route was produced for the students prior to the competition to explain scoring: ([see the video](https://drive.google.com/file/d/1FDUAhA5FW3Hfd9vd9KHWDOfSS8Ioa40N/view?usp=drive_link))

Three new elements were introduced in addition to Task 1 from the 2022 competition:

1. giving way on a pedestrian crossing,
2. giving way to a vehicle on the right on a T-shaped intersection
3. adhering to "entering one-directional street" and "stop" signs.

Participation in the competition could yield 6 ECTS if you register to the course Autonomous Vehicles Project LTAT.06.012 ([link](https://courses.cs.ut.ee/2022/AutVehProj/fall)). It could also serve as a course project in other courses, e.g. Machine Learning, Neural Networks, and Introduction to Data Science.

We used the DonkeyCar S1 platform. These cars come equipped with a frontal camera which is the main sensor. They also have an IMU (inertial measurement unit) that can but doesn't need to be used. The car is a 1:10 scale compared to a real car. Changing car hardware is not allowed in this competition. The existing codebase is really user-friendly and you can start collecting data in 10 minutes and training a neural network model in less than an hour.

You can also read about the organizer's perspective, on how it was to organize this event, [here.](/blog/adl-minicar-challenge-2023-the-organizer-s-perspective)

## Competition in January 2022

See more [here](https://courses.cs.ut.ee/t/DeltaXSelfDriving/Main/2022).

In January 2022 the second competition was held with DonkeyCars. There were two tasks: object avoidance and route completion. The main prizes for each task were 1000 euros.

The rewarded teams were:

**Task 1:** object avoidance and lane following [promo video](https://drive.google.com/file/d/1AWb7K9OS040sXaDyKyH51hV61MoAK9FU/view)\\
**1st place:** Rustam Abdumalikov and Aral Açıkalın [winners run](https://drive.google.com/file/d/1qED1JFRyDuxDXJ4y6F0RvhAILj8njNfm/view)\\
**2nd place:** Mike Camara\\
**3rd place:** Kristjan Roosild

**Task 2:** route completion [pr video](https://drive.google.com/file/d/1CrOKqFfi5kZkyHpE5qf5ne21npsTHCCW/view)\\
**1st place:** Rustam Abdumalikov and Aral Açıkalın\\
**2nd place:** not awarded\\
**3rd place:** not awarded

![Winners 2022](/images/teaching/winners_2022.jpeg){:class="max-w-full h-auto" style="max-width: 466px; margin: 0 auto; display: block;"}

## Competition in January 2021

See more [here](https://courses.cs.ut.ee/t/DeltaXSelfDriving/Main/2021).

In January 2021 the first competition was held with 1:25 scale cars on a racing track. The winning solution completed the track in both directions with clean driving and great speed.

The rewarded teams were:\\
**1st place:** Leo Schoberwalter ([video1](https://drive.google.com/file/d/1MzgqSjSFthfcl4rvc4ZiQBDQvcD8IibS/view), [video2](https://drive.google.com/file/d/12NC186FKDB7pgkrsDROx-rrRo1FaDQS8/view), [video from onboard camera](https://drive.google.com/file/d/1R-dBgMdWhQLGk2pjV_vDJtgL8ml7Vlm7/view))\\
**2nd place:** Enlik and Handy Kurniawan ([video1](https://drive.google.com/file/d/1mhBgMoL_4N9rT2IkuqKXscPD7hAwWJ_4/view), [video2](https://drive.google.com/file/d/1HlBUeXQJezDm9TfexEiBHcmumzP69lfP/view))\\
**3rd place:** Thamara Luup, Mykyta Baliesnyi, Aleksasha Krylov ([video1](https://drive.google.com/file/d/1icsKWh0XZ22zLCCydekP-xTyXt4E95DD/view), [video2](https://drive.google.com/file/d/13HN55vnDwECtH478REL3H0k1Gvk1arcN/view))
