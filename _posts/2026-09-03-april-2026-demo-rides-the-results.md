---
layout: blogpost
subtitle: Blog
title: April 2026 demo rides — the results
date: 2026-09-03
image: /images/lab/ADL-Car.jpg
alt: ADL self-driving car
permalink: /blog/:title/
meta: Results of the April 2026 demo ride campaign — 323 km across Tartu, 151 disengagements, 2.14 km per intervention
language: en
author: Tambet Matiisen
---

![The ADL self-driving car](/images/lab/ADL-Car.jpg)

In April we [opened demo rides to the public](/blog/we-can-now-drive-anywhere-in-tartu-come-book-a-ride/) across the whole of Tartu. Between 14 April and 28 May 2026 we drove 19 of them with passengers in the back seat. The passengers picked their own pickup and dropoff bus stops, which means the routes were not ours to choose — this is as close to a real service as we currently get.

We recorded every ride and then went through the recordings and annotated everything the car did wrong. We also asked the passengers what they thought. This post is what came out of both.

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

Twenty-one of the 88 legs — 65 km in total — were driven without a single intervention. The longest fully autonomous leg was 7.5 km and lasted 16 minutes.

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

The comparison is deliberately kept at roughly constant distance — about 320 km each time — so the columns are directly comparable. The first two campaigns ran on the Tiksoja on-demand route, mostly rural roads with light traffic. The last two were in Tartu itself, with traffic lights, crosswalks, roundabouts and pedestrians. So the improvement from 1.26 to 2.14 km per intervention was earned while the roads got harder, not easier.

![Kilometres between safety driver interventions across four campaigns: Tiksoja 2022 1.26 km, Tiksoja 2023 1.62 km, Tartu 2025 1.44 km, Tartu 2026 2.14 km](/images/blog/demo-rides-2026-km-per-intervention.svg)

The average speeds make the difference concrete: 28 km/h in 2022 and 32 km/h in 2023 on the rural route, against 21 km/h in 2025 and 23 km/h in 2026 in the city. City driving is slower and denser, and every kilometre of it contains far more opportunities to get something wrong.

### What we count as a problem

Disengagements are the standard industry metric, but on their own they undercount. A car that slams the brakes for a bush at the roadside does not need the safety driver to take over — it is simply unpleasant to ride in. If we only counted interventions, we would be blind to most of what makes the ride bad.

So we annotate every noticeable misbehaviour. Over the campaign that came to **662 annotated events**:

| Event type | Count | Share |
|---|---:|---:|
| Unnecessary or excessive braking | 349 | 52.7% |
| Disengagement (safety driver took over) | 151 | 22.8% |
| Unnecessary swerving | 102 | 15.4% |
| Other | 36 | 5.4% |
| Missing or late braking | 19 | 2.9% |
| Manual start (car had to be driven out of a spot) | 5 | 0.8% |

Every event is traced to the module and the specific node in [Autoware Mini](/lab/software) that caused it, and given a short problem category. That is what lets us turn a ride log into a prioritised work list.

### Which part of the stack is at fault

| Module | All 662 events | 151 disengagements |
|---|---:|---:|
| Local planner | 282 (42.6%) | 55 (36.4%) |
| Perception | 249 (37.6%) | 42 (27.8%) |
| Map | 92 (13.9%) | 20 (13.2%) |
| Human operator mistake | 9 (1.4%) | 9 (6.0%) |
| Remote assistance | 9 (1.4%) | 8 (5.3%) |
| Controller | 10 (1.5%) | 7 (4.6%) |
| Localization | 6 (0.9%) | 5 (3.3%) |
| Other | 5 (0.8%) | 5 (3.3%) |

Planning and perception together account for four out of five events. The map is third, and that is the encouraging part of the table: map problems are the cheapest kind to fix — a lane centreline is moved, a stop line is added, and the problem is gone for every future ride.

### The individual problems that cost us autonomy

Ranked by how many times the safety driver had to take over:

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

Three of these deserve a note.

**Approaching vehicles detected too late** almost always happened during unprotected left turns. The car looks at the oncoming lane, sees nothing, and commits — but a fast car was there, just beyond the range where our lidar clustering resolves it. The safety driver stops the manoeuvre before it starts. This is our single largest source of interventions and the most safety-relevant one.

**Double traffic lights** are the two-lamp configuration used in Tartu for lane-specific signals. Our YOLO detector classifies them as red more often than it should, so the car stops on the stop line with a green light and stays there. Eleven of the 22 misclassifications ended in an intervention simply because the traffic behind us could not wait. It is a narrow, well-defined perception problem with an unusually good effort-to-payoff ratio.

**Pedestrians at crosswalks** failed in both directions. Six times the car detected a person crossing too late, and five times a person standing at the kerb — clearly intending to cross, and legally entitled to — was not treated as a reason to stop. In the other direction, 12 times a pedestrian at a green light made the car brake to a standstill when it should have driven on, and 29 times a completely stationary roadside object was projected onto a crosswalk and did the same.

### Phantom braking, the problem that never becomes an intervention

The safety driver does not take over for any of these. They never appear in a disengagement rate. But you feel every one of them from the back seat:

| Problem | Events |
|---|---:|
| Roadside object cluster expands onto the path | 42 |
| Path extends into the opposite lane while swerving | 38 |
| Lane centreline mapped too close to the boundary | 34 |
| Stationary roadside object activates a crosswalk | 29 |
| Lane boundary position inaccurate | 29 |
| Inaccurate radar detection from an oncoming vehicle | 27 |
| Tracker assigns an object a wrong speed and moves it onto the path | 25 |
| Double traffic light classified incorrectly | 22 |

A pattern runs through the top of this list: an object that is not really in our way is briefly believed to be. A parked van's lidar cluster breathes a few centimetres into the safety buffer; a building wall picks up a speed and a predicted trajectory that reaches a crosswalk; a radar return from an oncoming car appears on our own lane behind a curve. Each is harmless in isolation and each produces a brake application that a passenger remembers.

The swerve planner is the other half of the story. It is the single busiest node in the whole log at 120 events, and its most common failure is generating a path that reaches into the opposite lane — which then trips the lane boundary checker, which then slows the car down. The car brakes because of how it decided to steer.

### What the passengers said

The log tells us what the car did. It does not tell us what any of it felt like from the back seat, so we asked. Thirteen riders filled in a questionnaire after their ride — eleven in Estonian, two in English — rating five aspects of the experience from 1 to 5.

![Distribution of 13 passenger ratings across five dimensions: felt safe 4.3, met expectations 3.9, ride was comfortable 3.5, car seemed capable 3.5, compared to a human driver 2.1](/images/blog/demo-rides-2026-passenger-ratings.svg)

Thirteen self-selected responses is a signal, not a survey, and we read it as such. But the shape of it is unambiguous, and it is not the shape we would have guessed.

**People felt safe.** Eleven of the thirteen chose 4 or 5 on safety, six of them the maximum — "no anxiety at any point". Nobody was frightened. Every single respondent said the ride met or exceeded their expectations, and eight said it exceeded them.

**And they still rated the car well below a human driver.** Ten of the thirteen judged it worse than a competent human on the same route; only two judged it better. This is the one dimension where our passengers are harsh, and it sits right next to the dimension where they are most generous. Feeling safe and being impressed are apparently not the same judgement.

**What separates the two is smoothness.** Of the riders who named a specific rough moment, most named braking — and they named exactly the causes our own log ranks at the top:

> "Sudden braking when another vehicle got too close. Lane changes."

> "An unexpected cloud of dust caused sudden braking."

> "Some oncoming cars caused unexpected slowing, but overall everything was very OK."

> "Sudden braking — the car's program is different from how I normally drive. For example, I brake early at uncontrolled intersections and crosswalks."

*(Translated from Estonian.)*

A dust cloud read as an obstacle is a phantom lidar cluster. Oncoming cars causing unexplained deceleration is the radar detector, 27 events in our log. The passengers, with no access to the annotation sheet, independently reproduced our top-of-list findings. That is the most useful thing this questionnaire told us: the phantom braking we ranked as a comfort problem is in fact the thing that decides whether a rider thinks the car is any good.

**Over-caution is not free.** One passenger flagged something we had not counted as a problem at all:

> "Because the car drove 40 km/h and stopped at every uncontrolled intersection, I was worried that some other car would drive into us."

We treat excessive caution as a comfort cost. This rider treats it as a safety risk — and on a road with other drivers who do not expect a car to stop, they have a point. A second passenger traced their low rating to a specific missing capability rather than to any error: the car does not change lanes, which forces longer, stranger routes.

**What people liked was not the driving.** Asked what made the ride feel the way it did, riders kept naming the tablet showing what the car perceives, and the crew explaining what was happening:

> "It was very cool to order the car and actually see what the car sees."

> "It felt like a private tour arranged especially for me. Looking at the tablet feels like taking part in a simulation, but the route is my everyday commute and we were really outside. A completely new experience, better than a 5D film."

> "A wonderful experience! Especially thanks to the team, who explained everything so well."

That is worth stating plainly, because it qualifies every number above: what we measured is a guided demonstration with two engineers in the front seats answering questions, not an unattended robotaxi ride. The overall feeling score averaged 6.3 out of 7, and a good part of that is the crew, not the software. One rider caught the same thing from the other side — "it rather seemed that we humans were the uncertain ones, because we knew the machine needs help."

Our favourite response describes a roundabout:

> "I thought the other car was going to hit us, but the driver explained that the machine had calculated the trajectory long ago and knew it was safe to pull out."

The car was right, the passenger was scared, and it took a human explaining the software to close the gap. Until a car can make that argument by the way it moves, riding in one will keep needing a translator.

### Human factors

Nine of the 151 interventions were our own mistakes rather than the car's: engaging without a global path (4), engaging in the wrong gear, disengaging before the recording was stopped, one accidental disengagement, a phone that fell onto the emergency stop button and cut power to the drive-by-wire system, and a passenger who left a door open.

Four more came from passengers changing their minds mid-ride — including two elderly ladies whose actual destination was inside a parking lot, which we have not mapped and cannot drive into.

We count these against ourselves. They are part of what it costs to run a service.

### Does it matter who is in the driver's seat?

| Safety driver | Distance | Interventions | km per intervention |
|---|---:|---:|---:|
| Edgar Sepp | 171 km | 82 | 2.09 |
| Karl-Johan Pilve | 152 km | 69 | 2.20 |

Five percent apart over 150 kilometres each. The number is a property of the software, not of the person watching it.

### Remote assistance

Remote assistance was in use for almost the whole campaign — an operator connected over the network who can confirm the car may enter an intersection, or draw a path around an obstruction. Eight interventions are charged to it: a drawn path with too sharp a turn (4), starting into an intersection despite oncoming traffic (3), and not checking for an overtaking vehicle (1).

That is the visible cost. The benefit — the situations where the car would otherwise have sat still until the safety driver took over — does not show up in this table at all, because those interventions never happened. Measuring that properly is on our list.

### What we are fixing next

The data gives an unusually clear ranking:

1. **Swerve planner** — 120 events, the largest single source in the log. Stop the local path from reaching into the opposite lane, and stop unstable clusters from producing jerky swerving.
2. **Lidar clustering** — 98 events, and the origin of our biggest disengagement cause. Detect approaching vehicles earlier, and stop roadside clutter from expanding onto the path.
3. **Pedestrian crosswalk checker** — 77 events. Handle people who are standing and clearly waiting; stop reacting to people and objects that are not crossing.
4. **Traffic light detection** — the double traffic light configuration, 22 events and 11 interventions, all from one narrow failure mode.
5. **Lane changing**, which is not a bug at all but the missing capability our passengers noticed fastest, and the reason some routes are longer and stranger than they need to be.
6. **Map corrections** — 92 events, and the cheapest fixes available: centrelines too close to boundaries (34), inaccurate boundary positions (29), missing bus stop lanelets, unmapped road closures and speed bumps.

### Come ride with us

Demo rides are still open, and we annotate every one of them the same way, so the next campaign will tell us whether the fixes above actually worked. If you would like to contribute a route we have not driven yet — and preferably a hard one — you can [book a demo ride](/lab/demo-ride).
