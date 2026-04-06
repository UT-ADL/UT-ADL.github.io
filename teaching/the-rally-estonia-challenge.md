---
layout: teaching
title: The Rally Estonia Challenge
permalink: /teaching/the-rally-estonia-challenge
subtitle: Teaching
meta: A neural network training competition organized by the ADL focused on autonomous driving in rural areas using data from WRC Rally Estonia tracks.
---

## {{ page.title }}

The Rally Estonia Challenge is a neural network training competition organized by the ADL.

The challenge aims to contribute towards making autonomous transportation in rural areas feasible. To simulate such challenges, we have gathered over 500 km of recordings from the WRC Rally Estonia tracks across four different seasons.

The participants train neural networks to drive on the rural Estonian roads. The results are first evaluated in the [VISTA simulation](https://github.com/vista-simulator/vista) and the three best-scoring teams are evaluated with a real car on the actual rally tracks. The team with the least interventions wins.

![End-to-end driving](/images/teaching/end-to-end.png){:class="max-w-full h-auto"}

## The Competition of Spring '23

For results of Rally Estonia Challenge 2023 see the [blog post](/blog/rally-estonia-challenge-2023-results/).

### Technical summary

**Objective:** Create a data-driven autonomous driving system for a Lexus RX450h.

**Dataset:** Camera images, turn signal states, steering angles, GPS locations from Rally Estonia tracks.

**Task:** Train a neural network to transform sensor readings into steering commands.

#### Timeline

- **April 11** — Dataset availability
- **May 31** — Submission deadline
- **June 5–9** — VISTA simulation evaluation
- **June 12–15** — Real-world testing (top 3 teams)
- **June 16** — Winner announcement and ceremony

#### Team Requirements

- Up to three persons plus supervisor
- At least 50% must be students
- Related to specific spring 2023 courses (Neural Networks, Special Course in Machine Learning)
- Non-course participants welcome with student team members

#### Prizes

- **1st place:** €300 + three WRC Rally Estonia 2023 passes
- **2nd & 3rd place:** €150 each
- **Top three teams:** Rally experience, ADL t-shirts
- Potential for publication if developed further

### General Requirements

#### Road Navigation

Solutions must autonomously steer on roads without other traffic. Roads are mostly gravel with rare paved sections.
Must maintain right lane on two-lane roads (Estonia drives right-handed). Single-lane roads allow flexible
positioning with safe margins to edges.

#### Route Completion

Systems must navigate from point A to point B, including completing specific desired turns at intersections.
Navigation commands are simulated via blinker signals (left, right, or straight).

#### Speed Control

Vehicle speed is handled by car software, not the neural network. VISTA simulations use 100% benchmark speed;
real-world uses 80%.

### Technical Specifications

#### Model Input/Output Requirements

Three supported model types (submitted as ONNX files):

1. **steering** — Input: `[1,3,68,264]` RGB image → Output: `[1,1]` steering angle (radians)
2. **conditional-steering** — Input: `[1,3,68,264]` RGB image → Output: `[1,3]` steering angles (straight/left/right conditions)
3. **conditional-waypoints** — Input: `[1,3,68,264]` RGB image → Output: `[1,60]` waypoint coordinates for three route conditions

#### Dataset Access

Located at `/gpfs/space/projects/rally2023` on HPC rocket cluster:
- **rally-estonia-cropped-antialias** (175GB) — pre-cropped front camera images (recommended)
- **rally-estonia-full** — full-size images from all three cameras and lidar

#### Hardware Specifications

- **VISTA evaluation:** NVIDIA RTX 2080Ti GPU at 10Hz
- **Real-world deployment:** AStuff Spectra computer with NVIDIA RTX 2080Ti GPU

### Submission & Validation

- Participants can self-validate using the example Elva track from the VISTA evaluation codebase
- Can convert additional training set recordings to VISTA traces using provided scripts
- Up to 5 submissions plus initial dummy submission
- File naming: `[Team_name]_[Submission_Number].onnx` (e.g., `Eagles_1.onnx`)

### Evaluation Criteria

#### Safety Driver Interventions

- **VISTA:** Triggered when vehicle exceeds 1m from human driver trajectory
- After intervention: Car repositioned 1 second further along route
- **Real-world:** Subjective safety driver judgment based on danger perception and traffic law compliance
- Each trace is run 3 times; primary metric is the sum of interventions across all runs

#### Tiebreaker

Equal intervention counts are resolved by lower whiteness score.

### Reference Projects

- Romet Aidla's MSc thesis: [Video](https://www.youtube.com/watch?v=HGolLsE_abg){:target="_blank"} · [Thesis](https://comserv.cs.ut.ee/ati_thesis/datasheet.php?id=75346&language=en){:target="_blank"} · [GitHub](https://github.com/UT-ADL/e2e-rally-estonia){:target="_blank"}
- Mykyta Baliesniy's MSc thesis: [Thesis](https://comserv.cs.ut.ee/ati_thesis/datasheet.php?id=75382){:target="_blank"} · [GitHub](https://github.com/nikebless/ebm-driving){:target="_blank"}

### Licensing

The created software must be labeled with a free-to-use license for educational purposes. A GitHub repository is
required 24 hours before the main event (can be initially private).

### Results

See the [Rally Estonia Challenge 2023 results](/blog/rally-estonia-challenge-2023-results/) blog post.

### Contact

- **Tambet Matiisen:** [tambet.matiisen@ut.ee](mailto:tambet.matiisen@ut.ee)
- **Ardi Tampuu:** [ardi.tampuu@ut.ee](mailto:ardi.tampuu@ut.ee)
- **General:** [adl@ut.ee](mailto:adl@ut.ee)
