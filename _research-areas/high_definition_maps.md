---
layout: research-area
title: High-definition maps
icon: /images/icons/HighDM.png
research_lead: Edgar Sepp 
lead_image: "/images/team/edgar.png"
lead_description: Mapping Lead of Autonomous Driving Lab 
lead_email: edgar.sepp@ut.ee
---

Maps enabling autonomous driving are usually called high-definition maps (HD maps). These maps are specialized
lane-level maps with very high locational accuracy. Possible benefits from HD maps could be:

* global planning (routing)
* local planning (associate lanes with traffic lights and signs)
* semantic knowledge that can be used for behavior planning and prediction estimates
* use in the localization task. A very good way of summarizing the benefits of the HD map is to treat it as an
  additional sensor that extends the viewing horizon for the car.

It is interesting to note that approaches claiming they do not use HD maps, still solve local planning tasks on the map - 
the output from the perception stack (sensors) is translated into a top-down view around the car and the local planning
is done on top of that top-down raster image. Essentially this image can be treated as a raster map that is generated in
real-time.

Collecting data for HD maps and keeping them up to date is costly, therefore machine learning and automation is used in
order to make these processes scalable for large areas. We employ deep learning to generate HD maps from different data
sources: orthophotos, lidar point clouds, dashcam footage, etc. We also aim for a unified representation of the map data
that could be later converted into any standardized HD map format, e.g. OpenDRIVE, Lanelet2, Autoware CSV.

![High-definition map](/images/research/hd_map.jpg){:class="img-fluid"}

