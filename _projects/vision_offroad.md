---
layout: project
title: Vision-based off-road navigation with geographical hints
category: Project
start_date: 2023-04-01
end_date: 2023-12-31
funding: 49 500 EUR
---

Together with [Milrem Robotics](https://milremrobotics.com/), we aim to demonstrate the feasibility of off-road navigation using just vision-based sensors, supported by an imprecise satellite navigation system.

Navigation in unstructured off-road environments is a common task in military, agriculture and forestry. This poses multiple challenges for autonomous ground vehicles (AGVs):

* Often there is no opportunity to pre-map the area, the navigation decisions need to be made on the go, based solely on sensory information.
* Even if there are maps of the area, these can often be out-of-date and not represent the reality — there might be fallen trees, ponds formed by rain water, tall grass, etc.
* The vision-based sensors (cameras) offer the richest sensory information to navigate such environments. For example, it is impossible to decide whether an AGV can drive through a puddle or through tall grass based on the LIDAR data alone.

In the first phase of the project a dataset is collected that is used to train two machine learning models: the first proposes new waypoints based on local sensor information, and the second uses the map to evaluate which of those waypoints leads to the final destination fastest. The second phase of the project sees the navigation system implemented on a real robot.
