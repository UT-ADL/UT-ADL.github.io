---
layout: blogpost
title: "ADL Minicar Challenge 2023: the organizer's perspective"
date: 2023-09-08
image: /images/blog/minicar_challenge_2023.png
alt: Minicar Challenge 2023
permalink: /blog/:title/
meta: ADL Minicar Challenge 2023
language: en
author: Edgar Sepp
---

In this blog post, we try to illustrate what was going on behind the scenes of the ADL Minicar Challenge 2023. ADL Minicar challenge is a self-driving software competition. This means that while the competing solutions will be deployed and must perform well on hardware, modifications to the hardware are forbidden. The competition was held in January 2021 and January 2022 as part of the DeltaX student competition series but was hosted independently in 2023 under the flag of the Autonomous Driving Lab.

<iframe width="780" height="580" src="https://www.youtube.com/embed/TVLp19-C9HI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you want to see the final results of the 2023 challenge, achieved by the participants, you must scroll all the way to the bottom of the page. The tasks and challenges the organizers and participants had to face when organizing the event are reported in chronological order, to the best recollection of the author.

## Designing the task and rules for 2023

First of all, it is important to note that the competition is not a one-day event, but preparations for it last for an entire semester. To illustrate:
- In August-September, the competition rules were developed. The track was designed.
- In September, the competition was advertised by a promo video running on a big screen 24/7 for two weeks. The competition was advertised to students in multiple courses.
- In September, the vehicles were all tested and put in working order.
- In October-December, there were regular meetings with the teams participating in the competition as part of the Autonomous Vehicles Project course.
- In December, organizers produced videos exemplifying the scoring logic on trial runs.
- In early January, the organizers held a mock competition to estimate how long everything takes in practice, and how much time must be reserved for the competition.
- Competition day 25th of January 2023.
- Verifying validity of winning solutions, and paying out rewards.

In a similar competition back in January 2022, the students had competed in and solved the task of obstacle avoidance and route following in a town with an unknown road layout and object locations. Essentially, the teams knew the streets would be made of the wooden walls we have at the track, streets would be 60+ cm wide, and Lego cars, people, and animals may be placed in random locations on this track. The models were expected to generalize to a wide variety of situations.

This winning performance was in fact achieved with a solution that was computationally unnecessarily costly, with every frame taking about 120-130 milliseconds to deal with. This results in 7-8 frames being processed per second. A faster implementation would likely do even better.

We concluded that in the 2023 competition, more complete urban driving should be attempted - avoiding walls, and Lego characters, as well as following some traffic rules. For this, we needed a toy town where all this could take place.

From START, the vehicle must either go right or left at the T-junction according to the traffic sign. It must then complete a lap safely, without collisions, by following rules on the road crossing and the other T-junction where there might be another vehicle. When a stop sign is placed on the road the vehicle must stop.

## Scoring Framework

We took inspiration from the CARLA benchmark and decided to penalize different infractions differently, as well as count the proportion of the route the model managed to complete autonomously.

## The Final Event

In the wake of the final competition day, out of eight teams five dropped out and decided not to participate (reasons included Corona illness, failed RL approach in simulation, exchange students leaving, burnout, and one team not replying). With only 3 teams the organizers chose a simpler format.

## Participant Performance Issues

Performance fell short of expectations due to several factors:
- **Sign recognition:** Teams achieved less than 50% accuracy detecting directional driving signs.
- **Battery problems:** All teams selected Ni-H2 batteries instead of higher-capacity alternatives, causing unreliable speed maintenance.
- **False positives:** Solutions detected stop signs where none existed, likely triggered by a spectator with a red shirt.
- **Turning radius:** Vehicles struggled with steep turns, causing trajectory errors in subsequent segments.

## Results

**1st place (1,000 EUR):** Yevhen Pankevych and Volodymyr Savchuk (average score: 0.068)
**2nd place (500 EUR):** Mihkel Lepson and Artur Tuttar (average score: 0.054)
**3rd place (250 EUR):** Pavlo Pyvovar (score: 0.020)

The highest single-run score was 0.206, despite various minor infractions.

## Key Takeaways

Students gained valuable experience understanding that "deployment is the longest and most complicated phase" of data science projects. Organizers recognized that their scoring system required adjustment for lower-than-expected performance levels and that future events with more participants need streamlined procedures.
