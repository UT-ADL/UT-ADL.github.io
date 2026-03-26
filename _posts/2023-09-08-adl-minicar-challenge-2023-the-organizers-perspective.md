---
layout: blogpost
title: "ADL Minicar Challenge 2023: the organizer's perspective"
date: 2023-09-08
image: /images/blog/minicar_challenge_2023.png
alt: Minicar Challenge 2023
permalink: /blog/:title/
meta: ADL Minicar Challenge 2023
language: en
author: Ardi Tampuu
---

This post documents the behind-the-scenes organization of the ADL Minicar Challenge 2023, a self-driving software competition where teams deploy autonomous solutions on hardware without modifications permitted.

## Timeline and Preparation

The competition required semester-long preparation:

- **August-September:** Competition rules and track design were developed
- **September:** Promotional campaign and vehicle testing occurred
- **October-December:** Regular team meetings during the Autonomous Vehicles Project course
- **December:** Organizers produced scoring demonstration videos
- **Early January:** Mock competition to estimate duration and resource needs
- **January 25, 2023:** Competition day
- **Post-event:** Verification and prize distribution

## Design Challenges

The organizers drew lessons from previous competitions. The 2022 event featured obstacle avoidance and route navigation. Participants demonstrated that faster implementations would likely outperform the winning solution, which processed "about 120-130 milliseconds" per frame.

For 2023, organizers attempted "more complete urban driving" including wall avoidance, character collision prevention, and traffic rule compliance. Space constraints in the university building limited the toy town's size, resulting in a compact layout featuring T-junctions, crossings, and stop signs.

## Scoring Framework

Inspired by CARLA benchmarks, organizers penalized different infractions at varying severity levels and measured route completion percentage. This addressed a core challenge: determining appropriate penalties for different violations in an urban driving context.

## Rule Complexities

Several contentious issues emerged:

- When vehicles become stuck, should safety drivers intervene? If so, where should they reposition the car?
- Should reversing out of situations receive different penalties than crashes?
- Should simultaneous collisions with multiple objects incur cumulative penalties?
- Are stopping pauses acceptable for decision-making?

## Participant Performance Issues

Only three teams competed (five teams withdrew). Performance fell short of expectations due to several factors:

- **Sign recognition:** Teams achieved "less than 50% accuracy" detecting directional driving signs
- **Battery problems:** All teams selected Ni-H2 batteries instead of higher-capacity alternatives, causing unreliable speed maintenance
- **False positives:** Solutions detected stop signs where none existed, likely triggered by "a spectator with a red shirt"
- **Turning radius:** Vehicles struggled with steep turns, causing trajectory errors in subsequent segments

## Results

**1st place (1,000 EUR):** Yevhen Pankevych and Volodymyr Savchuk (average score: 0.068)
**2nd place (500 EUR):** Mihkel Lepson and Artur Tuttar (average score: 0.054)
**3rd place (250 EUR):** Pavlo Pyvovar (score: 0.020)

The highest single-run score was 0.206, despite various minor infractions.

## Key Takeaways

Students gained valuable experience understanding that "deployment is the longest and most complicated phase" of data science projects. Organizers recognized that their scoring system required adjustment for lower-than-expected performance levels and that future events with more participants need streamlined procedures.
