---
layout: blogpost
subtitle: Blog
title: Meet us at Vehicle Tech Week Europe 2026
date: 2026-06-18 00:00:00 +0300
image: /images/blog/vehicle-tech-week-2026-vil-sim-carla.jpg
alt: The CARLA digital twin of Tartu with simulated traffic and pedestrians
permalink: /blog/:title/
meta: We're exhibiting at Automotive Testing Expo Europe, part of Vehicle Tech Week, in Stuttgart on 23–25 June 2026, with a live vehicle-in-the-loop demonstration.
language: en
author: Autonomous Driving Lab
---

<style>
  .vtw figure { margin: 1.6em 0; }
  .vtw figcaption { color: #5b6675; font-size: .92rem; margin-top: .6em; }
  .vtw-pair { display: flex; gap: 12px; flex-wrap: wrap; }
  .vtw-pair img { flex: 1 1 320px; width: 100%; min-width: 0; border-radius: 8px; display: block; }
  .vtw-map { background: #0b1f3a; border-radius: 10px; padding: 10px 14px 4px; }
  .vtw-map img { width: 100%; display: block; }
  .vtw-stats { display: flex; flex-wrap: wrap; gap: 8px 36px; justify-content: center;
    background: #0b1f3a; color: #fff; border-radius: 10px; padding: 18px 16px; margin: 0 0 1.4em; }
  .vtw-stats .n { font-size: 1.5rem; font-weight: 700; color: #cfe84a; }
  .vtw-stats .l { font-size: .85rem; color: #c3cad6; }
  .vtw-stats .stat { text-align: center; }
  .vtw table { border-collapse: collapse; width: 100%; margin: 1.4em 0; font-size: .96rem; }
  .vtw th, .vtw td { border: 1px solid #e4e8ee; padding: 9px 12px; text-align: center; }
  .vtw th:first-child, .vtw td:first-child { text-align: left; }
  .vtw thead th { background: #f5f7fa; font-weight: 600; }
  .vtw tr.vil td { background: #cfe84a; font-weight: 600; }
  .vtw-where { border-left: 3px solid #cfe84a; padding: 4px 0 4px 16px; margin: 1.2em 0; }
  .vtw-where div { margin: .15em 0; }
  .vtw-where .ev { font-weight: 600; }
</style>

<div class="vtw">

  <p>We'll be at Automotive Testing Expo Europe in Stuttgart from 23 to 25 June 2026, part of this year's Vehicle Tech Week. You'll find our stand in the Academia Lounge (Hall 1, Booth 1292), and our Lexus RX450h will be running a live vehicle-in-the-loop test drive in the outdoor demo area by Gate 10.</p>

  <h2>Our main demo: vehicle-in-the-loop</h2>

  <p>In vehicle-in-the-loop (ViL) testing, the car drives for real on a closed course while perceiving a simulated world. Perception, planning, and control all run on the actual vehicle, but the traffic, pedestrians, and road it reacts to come from our CARLA digital twin of Tartu.</p>

  <figure>
    <div class="vtw-pair">
      <img src="/images/blog/vehicle-tech-week-2026-vil-real-proving-ground.jpg" alt="Lexus RX450h driving on an empty closed course">
      <img src="/images/blog/vehicle-tech-week-2026-vil-sim-carla.jpg" alt="The same scene rendered in CARLA with simulated traffic and pedestrians">
    </div>
    <figcaption>The car drives on an empty closed course (left) while it sees and reacts to a busy simulated Tartu street (right).</figcaption>
  </figure>

  <p>This combines two things that are usually hard to get at the same time &mdash; real vehicle dynamics and full freedom over the scenario:</p>

  <table>
    <thead>
      <tr><th></th><th>Real vehicle dynamics</th><th>Any scenario</th></tr>
    </thead>
    <tbody>
      <tr><td>Pure simulation</td><td>No</td><td>Yes</td></tr>
      <tr><td>Proving ground</td><td>Yes</td><td>Limited</td></tr>
      <tr class="vil"><td>Vehicle-in-the-loop</td><td>Yes</td><td>Yes</td></tr>
    </tbody>
  </table>

  <p>Pure simulation can build any scenario but can't reproduce real braking distances, accelerations, and tire&ndash;road interaction. A proving ground gives you the real dynamics, but staging varied scenarios there is slow and costly. Vehicle-in-the-loop keeps the real dynamics of the car while placing it in any simulated traffic and conditions, which we build with our Visual Scenario Editor for CARLA.</p>

  <h2>The Tartu living lab</h2>

  <p>Behind the demo is our living lab in Tartu: a city-scale testbed, continuously validated by our self-driving car, which we run in public-street testing every week. As far as we know, it's the largest living lab operated by an academic institution.</p>

  <figure class="vtw-map">
    <img src="/images/blog/vehicle-tech-week-2026-tartu-living-lab-map.svg" alt="Map of Tartu showing the mapped lane network and bus stops covered by the living lab">
  </figure>

  <div class="vtw-stats">
    <div class="stat"><div class="n">40 km&sup2;</div><div class="l">operating area</div></div>
    <div class="stat"><div class="n">490 km</div><div class="l">mapped lanes</div></div>
    <div class="stat"><div class="n">435</div><div class="l">bus stops</div></div>
  </div>

  <p>The living lab brings together everything you'd rely on: a 40 km&sup2; CARLA digital twin of Tartu, a real autonomous vehicle running our open-source software (Autoware Mini), a lane-level HD map of every bus route, and machine-readable traffic lights that broadcast their state even in poor weather, plus remote assistance and teleoperation. And because Estonia has four seasons, you can test in snow, ice, and low light &mdash; conditions many sites can't offer.</p>

  <h2>Where to find us</h2>

  <div class="vtw-where">
    <div class="ev">Automotive Testing Expo Europe &middot; Vehicle Tech Week</div>
    <div>Messe Stuttgart &middot; 23&ndash;25 June 2026</div>
    <div>Stand: Academia Lounge, Hall 1, Booth 1292</div>
    <div>Live test drive: outdoor demo area by Gate 10</div>
  </div>

  <p>Come see the car and the demo, and talk with our team about autonomous driving in Tartu. To set up a time in advance, write to <a href="mailto:adl@ut.ee">adl@ut.ee</a>.</p>

</div>
