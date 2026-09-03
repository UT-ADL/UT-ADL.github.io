---
layout: blogpost
subtitle: Blog
title: April 2026 demo rides — the results
date: 2026-09-03
image: /images/blog/demo-rides-2026-summary.png
alt: April 2026 demo rides in Tartu at a glance
permalink: /blog/:title/
meta: Results of the April 2026 demo ride campaign — 323 km across Tartu, 151 disengagements, 2.14 km per intervention
language: en
author: Tambet Matiisen
---

![April 2026 demo rides in Tartu at a glance: 19 rides, 323 km driven, 13 h 57 min behind the wheel, 151 safety driver interventions, 2.14 km per intervention, 97.8% autonomous by distance](/images/blog/demo-rides-2026-summary.svg)

In April we [opened demo rides to the public](/blog/we-can-now-drive-anywhere-in-tartu-come-book-a-ride/) across the whole of Tartu. Between 14 April and 28 May 2026 we drove 19 of them with passengers in the back seat. Passengers chose their own pickup and dropoff bus stops, so the routes were not ours to pick.

We recorded every ride, annotated everything the car did wrong, and asked the passengers what they thought.

### The headline numbers

| | |
|---|---:|
| Rides | 19 |
| Recordings (individual legs) | 88 |
| Distance driven | 323 km |
| Time driven | 13 h 57 min |
| Safety driver interventions | 151 |
| **Distance per intervention** | **2.14 km** |
| **Time per intervention** | **5.5 min** |
| Autonomy, by distance | 97.8% |
| Autonomy, by time | 95.1% |

Twenty-one of the 88 legs, 65 km in total, were driven without a single intervention. The longest fully autonomous leg was 7.5 km and lasted 16 minutes. Two safety drivers shared the campaign and their intervention rates differ by five percent, so the number describes the software rather than the person watching it.

### How this compares to our earlier campaigns

|  | Tiksoja 2022 | Tiksoja 2023 | Tartu 2025 | Tartu 2026 |
|---|---:|---:|---:|---:|
| Distance, km | 331.2 | 322.6 | 312.8 | 323.1 |
| Time, min | 704 | 601 | 899 | 837 |
| Interventions | 263 | 199 | 217 | **151** |
| km per intervention | 1.26 | 1.62 | 1.44 | **2.14** |
| min per intervention | 2.7 | 3.0 | 4.1 | **5.5** |
| Autonomy by distance | 93.2% | 91.7% | 96.8% | **97.8%** |
| Autonomy by time | 85.9% | 90.6% | 94.1% | **95.1%** |

Each campaign covers roughly 320 km, but they are not otherwise like-for-like, and the differences all run the same way. 2022 ran on Autoware.ai; every campaign since has run on Autoware Mini. The first two were on the Tiksoja on-demand route, mostly rural roads with light traffic. 2025 covered Riia street and the city centre. 2026 covers the whole of Tartu, so the last column is both the newest software and the hardest driving of the four.

One caveat on the first two columns. In 2022 the safety driver stopped the car manually at 55 bus stops as a matter of policy rather than because anything failed, and both years include manually driven turnbacks. Corrected for those, 2022 and 2023 land almost on top of each other at about 1.75 km per disengagement, so the apparent jump between them is mostly a change in what got counted.

### What we count as a problem

Disengagements are the standard metric, but they undercount. A car that brakes hard for a bush at the roadside does not need the safety driver to take over; it is just unpleasant to ride in. So we annotate every noticeable misbehaviour. Over the campaign that came to **662 events**:

| Event type | Count | Share |
|---|---:|---:|
| Unnecessary or excessive braking | 349 | 52.7% |
| Disengagement (safety driver took over) | 151 | 22.8% |
| Unnecessary swerving | 102 | 15.4% |
| Other | 36 | 5.4% |
| Missing or late braking | 19 | 2.9% |
| Manual start (car had to be driven out of a spot) | 5 | 0.8% |

Each event is traced to the module and the specific node in [Autoware Mini](/lab/software) that caused it, which is what turns a ride log into a work list.

### Which part of the stack is at fault

Every one of the 662 events is attributed to a module. The right-hand column narrows the same data down to the 151 that ended with the safety driver taking over, so the two columns sum to 662 and 151 respectively.

| Module | Share of all 662 events | Share of the 151 disengagements |
|---|---:|---:|
| Local planner | 282 (42.6%) | 55 (36.4%) |
| Perception | 249 (37.6%) | 42 (27.8%) |
| Map | 92 (13.9%) | 20 (13.2%) |
| Human operator mistake | 9 (1.4%) | 9 (6.0%) |
| Remote assistance | 9 (1.4%) | 8 (5.3%) |
| Controller | 10 (1.5%) | 7 (4.6%) |
| Localization | 6 (0.9%) | 5 (3.3%) |
| Other | 5 (0.8%) | 5 (3.3%) |

Planning and perception account for four out of five events. Map problems come third and are the cheapest to fix: move a lane centerline, add a stop line, and the problem is gone for every future ride.

### The individual problems that cost us autonomy

These are the eight most common causes, and they account for 56 of the 151 disengagements between them. The rest is a long tail of categories with four or fewer each.

| Problem | Disengagements |
|---|---:|
| Approaching vehicles detected too late | 12 |
| Double traffic light classified incorrectly | 11 |
| Map-based prediction too short | 7 |
| Pedestrian detected too late at crosswalk | 6 |
| Pedestrian standing at a crosswalk not handled | 5 |
| Ego blocked by an obstacle in its lane | 5 |
| Trajectory collision blocks ego at an intersection | 5 |
| Localization problems | 5 |

**Approaching vehicles detected too late** almost always happened during unprotected left turns. The car looks at the oncoming lane, sees nothing and commits, but a fast car was there, just beyond the range where our lidar clustering resolves it. The safety driver stops the manoeuvre before it starts. This is our largest source of interventions and the most safety-relevant one.

**Double traffic lights** are the two-lamp configuration used in Tartu for lane-specific signals. Our YOLO detector classifies them as red more often than it should, so the car stops on the stop line with a green light and stays there. Eleven of the 22 misclassifications ended in an intervention because the traffic behind us could not wait.

**Pedestrians at crosswalks** failed in both directions. Six times the car detected a person crossing too late, and five times a person standing at the curb, clearly intending to cross, was not treated as a reason to stop. In the other direction the car was too timid: 12 times a pedestrian merely walking up to a crosswalk made it brake, sometimes to a standstill, while we had the green light and they had a red one. Another 29 times a roadside object that was standing still was perceived as drifting slightly, had its predicted path extended across a crosswalk, and slowed us down for nobody.

### Phantom braking

Most events never become an intervention, so they never show up in a disengagement rate at all. You still feel every one of them from the back seat. These are the eight most common problem categories across all 662 events, together accounting for 246 of them:

| Problem | Events |
|---|---:|
| Roadside object cluster expands onto the path | 42 |
| Path extends into the opposite lane while swerving | 38 |
| Lane centerline mapped too close to the boundary | 34 |
| Stationary roadside object activates a crosswalk | 29 |
| Lane boundary position inaccurate | 29 |
| Inaccurate radar detection from an oncoming vehicle | 27 |
| Tracker assigns an object a wrong speed and moves it onto the path | 25 |
| Double traffic light classified incorrectly | 22 |

The pattern at the top of this list is an object that is not really in our way being briefly believed to be. A parked van's lidar cluster breathes a few centimetres into the safety buffer, or a radar return from an oncoming car appears on our own lane behind a curve. Each is harmless in isolation, and each produces a brake application that a passenger remembers.

The swerve planner is the busiest node in the whole log at 120 events. Its most common failure is subtle: where the lanes are narrow, the safety buffer around the local path reaches slightly into the oncoming lane. The buffer then intersects an approaching vehicle that is entirely within its own lane, and the car brakes hard for traffic that was never going to hit it.

### What the passengers said

Thirteen riders filled in a questionnaire after their ride, eleven in Estonian and two in English, rating five aspects of the experience from 1 to 5.

![Passenger ratings on five questions, 13 responses each, on a 1 to 5 scale: felt safe 4.3, met expectations 3.9, ride was comfortable 3.5, car seemed capable 3.5, compared to a human driver 2.1](/images/blog/demo-rides-2026-passenger-ratings.svg)

Thirteen self-selected responses is a signal rather than a survey, but the pattern is clear. People felt safe and still rated the car well below a human driver. Eleven of the thirteen chose 4 or 5 on safety and every respondent said the ride met or exceeded their expectations. On the last question, where 3 means comparable to a competent human on the same route, ten put the car below that and only two above it.

What separates the two is smoothness. The riders who named a specific rough moment named the same causes our log ranks at the top:

> "An unexpected cloud of dust caused sudden braking."

> "Some oncoming cars caused unexpected slowing, but overall everything was very OK."

A dust cloud read as an obstacle is a phantom lidar cluster, and oncoming cars causing unexplained deceleration is the radar detector, 27 events in our log. Without access to the annotation sheet, the passengers reproduced our top findings.

One rider raised something we had not counted at all:

> "Because the car drove 40 km/h and stopped at every uncontrolled intersection, I was worried that some other car would drive into us."

We treat excessive caution as a comfort cost; this rider treats it as a safety risk. Another traced a low rating to a missing capability rather than an error: the car does not change lanes, which forces longer and stranger routes.

Asked what made the ride feel the way it did, riders kept naming the tablet showing what the car perceives and the crew explaining what was happening.

> "It felt like a private tour arranged especially for me. Looking at the tablet feels like taking part in a simulation, but the route is my everyday commute and we were really outside."

That qualifies every number above. What we measured is a guided demonstration with two engineers in the front seats answering questions, not an unattended robotaxi ride. The overall feeling score averaged 6.3 out of 7, and some of that is the crew rather than the software.

*(Quotes translated from Estonian.)*

### Human factors

Nine of the 151 interventions were our own mistakes rather than the car's: engaging without a global path (4), engaging in the wrong gear, disengaging before the recording was stopped, one accidental disengagement, a phone that fell onto the emergency stop button and cut power to the drive-by-wire system, and a passenger who left a door open.

Four more came from passengers changing their minds mid-ride, including two elderly ladies whose actual destination was inside a parking lot, which we have not mapped and cannot drive into. We count these against ourselves.

### Remote assistance

Remote assistance was in use for almost the whole campaign: an operator connected over the network who can confirm the car may enter an intersection, or draw a path around an obstruction. Eight interventions are charged to it, from a drawn path with too sharp a turn (4), starting into an intersection despite oncoming traffic (3), and not checking for an overtaking vehicle (1).

Those are the visible costs. The situations where the car would otherwise have sat still until the safety driver took over do not appear anywhere in the table, because those interventions never happened.

### What we are fixing next

1. **Swerve planner** — 120 events, the largest single source in the log. Stop the local path from reaching into the opposite lane, and stop unstable clusters from producing jerky swerving.
2. **Lidar clustering** — 98 events, and the origin of our biggest disengagement cause. Detect approaching vehicles earlier, and stop roadside clutter from expanding onto the path.
3. **Pedestrian crosswalk checker** — 77 events. Handle people who are standing and clearly waiting; stop reacting to people and objects that are not crossing.
4. **Traffic light detection** — the double traffic light configuration, 22 events and 11 interventions, all from one narrow failure mode.
5. **Lane changing**, the missing capability our passengers noticed fastest, and the reason some routes are longer than they need to be.
6. **Map corrections** — 92 events and the cheapest fixes available: centerlines too close to boundaries (34), inaccurate boundary positions (29), missing bus stop lanelets, unmapped road closures and speed bumps.

### Come ride with us

Demo rides are still open. If you would like to contribute a route we have not driven yet, preferably a hard one, you can [book a demo ride](/lab/demo-ride).
