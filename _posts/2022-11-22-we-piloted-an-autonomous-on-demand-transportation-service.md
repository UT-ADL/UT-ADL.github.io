---
layout: blogpost
subtitle: Blog
title: We piloted an autonomous on-demand transportation service
date: 2022-11-22
image: /images/blog/on_demand_pilot.png
alt: Comparative efficiency of buses and cars
permalink: /blog/:title/
meta: We piloted an autonomous on-demand transportation service
language: en
author: Georg Vann
---

In terms of mobility, the 20th century was the century of the automobile. What we today call cars have empowered hundreds of millions of individuals across much of the world, none more so than in North America and Europe. Life in the 21st century however is increasingly providing us with evidence that a continuation of such proliferation of personal car ownership is unrealistic. The concept of owning a car is -- after all -- a deeply individualistic one, and there is no way we can expect everyone to have their own set of four wheels. Fortunately, humans have a long history of sharing and we are aptly demonstrating this ability every time we take the bus, the train or even the airplane.

![Comparative efficiency of buses and cars in road space use](/images/blog/on-demand-road-space-efficiency.png)

Public transportation is dramatically more resource-efficient than relying on personal vehicles. You would guess that stakeholders in mobility (is there anyone who doesn't belong in this bracket?) are surely looking towards public transportation as the need for sustainable mobility is looming large. Since we ourselves are very much in the business of mobility, we try to keep an eye on these things as well. We were surprised to find out that public transportation is not that big of a deal in our otherwise-so-progressive home town of Tartu. Namely, only 9% of people living near Tartu use public transportation for commuting [2].

![Commuter preferences pie chart](/images/blog/on-demand-commuters-preferences.png){:style="max-width: 610px; margin: 0 auto; display: block;"}

To a large extent, public transportation outside the city of Tartu (i.e., in the surrounding municipalities) manifests itself in a bus network. Buses work great in cities, but given the large area of operation and sparsely distributed population, any and all bus service providers see their resources spread out very thinly outside population centers. In other words, the commuter is faced with many issues: inconvenient schedules and/or routes, the closest stop being too far, the need for transfers, etc. The extent of unattractiveness of the bus service also means that on the other end, there is the service provider, who is constantly running buses that are empty!

A relatively recent phenomenon that shows promise in alleviating these problems is on-demand (also demand-responsive) transportation. As the name suggests, an on-demand bus will come pick you up when and where you need it. There are certain restrictions, obviously: it might be a designated stop, not at your very door-step, and you most probably cannot expect it to happen in the middle of the night. By meeting the specific needs of the commuters, on-demand transportation promises to eliminate empty runs, and make the service much more accessible, convenient and attractive.

The most prominent such pilot project around these parts has seen on-demand transportation deployed in Saaremaa [3] — Estonia's largest island — but similar operations are springing up across the globe [4]. The one thing that these ventures all have in common is that they take place in sparsely populated areas. And this is where self-driving comes in…

Our experience -- and that of Tesla, Volvo, Waymo and others -- suggests that autonomous vehicles are much more capable operating outside urban areas than inside them. Lose the pesky pedestrians, the unpredictability of urban traffic, and, suddenly, self-driving becomes much more feasible. Following the logic of divide and conquer, it's difficult to argue against trying to solve a seemingly insurmountable problem (true autonomy) by breaking it into simpler sub-tasks beforehand (e.g., achieving autonomy on secondary highways). Having realized that, it all came together: we could actually make an impact by helping to develop an autonomous on-demand transportation service!

![Four steps to KITT](/images/blog/on-demand-four-steps-kitt.png){:style="max-width: 571px; margin: 0 auto; display: block;"}

The timing couldn't have been better, since the city of Tartu recently decided to experiment with on-demand transportation themselves. After fruitful negotiations, we agreed to a pilot project which would see our self-driving car deployed in parallel with the regular vans. The deployment was preceded by two months of preparations: mapping the area of operation, integrating our vehicle and control systems to the infrastructure provided by our partners, etc. The 66 km of lanes we ended up mapping confirmed our suspicions: it was the largest area of operation covered by an autonomous vehicle in Estonia. The ambition of the project became even more clear when considering that there were 26 on-demand stops, and that we had to be able to take the passenger(s) from any stop A to any stop B...

![Tartu on-demand area map](/images/blog/on-demand-tartu-map.jpg)

All that was a joint effort as the pilot project consisted of five partners without whom none of this would have been possible. We -- the Autonomous Driving Lab -- obviously provided the autonomous vehicle together with operators. Secondly, Modern Mobility made it possible to integrate ourselves seamlessly to the vedas.ee platform, which is used to offer on-demand transportation here in Estonia. The third partner, Traffest, provided us access to the traffic lights system of Tartu, enabling our car to know the state of 30 traffic lights. It was Bercman Technologies who helped us with their two smart, radar-equipped intersections and one smart pedestrian crossing, all of which helped our car better sense its surroundings. And -- finally -- it was our friends at the city of Tartu who were kind enough to welcome us to join their on-demand transportation initiative.

![Partner logos](/images/blog/on-demand-partner-logos.png){:style="max-width: 617px; margin: 0 auto; display: block;"}

During the two weeks of operation, we ended up servicing 33 passengers across 21 rides. We had aimed to operate 90% of the distance autonomously and we achieved that! During the 331 km traveled, the safety driver intervened 252 times. A fifth of the disengagements (55 times) were a precautionary measure that saw brakes applied manually whenever the passengers got on or off. Much of the 38 disengagements that took place because of pedestrian crossings wouldn't need to have been made, but again, we decided to take no risks as we were facing many new variables. The rest of the disengagements were caused by a variety of factors: swerving (23), rerouting (21), localization (14), suicidal squirrels too small for our object detection to register (1)...

![Operation statistics](/images/blog/on-demand-statistics-table.png){:style="max-width: 564px; margin: 0 auto; display: block;"}

The 1,31 km of average distance between all those interventions might not be that impressive when compared to the giants of the industry, but let's not forget that our team is ~100 times smaller and we aren't driven by productization. All-in-all, we are quite happy with ourselves! We wanted to find out whether there is a specific use case for autonomous vehicles that is A) more realistic to achieve than desperately scrambling for true autonomy, and B) would help contribute towards sustainable mobility. And we are now convinced that autonomous on-demand transportation is exactly that!

{% include youtube.html id="aP1L64Pgw8g" %}

**References:**

[1] [ResearchGate](https://www.researchgate.net/figure/Comparative-efficiency-of-buses-and-cars-in-road-space-use_fig1_268406078)\\
[2] [Tartu ja selle lähiümbruse liikuvusuuring 2020/2021](https://tartu.ee/et/liikuvusuuring)\\
[3] [ERR: New on-demand bus system launched on Saaremaa](https://news.err.ee/1608770576/new-on-demand-bus-system-launched-on-saaremaa)\\
[4] [The Guardian: Is on-demand transport the answer?](https://www.theguardian.com/cities/2019/mar/28/is-on-demand-micro-transit-the-answer-to-our-transport-woes)\\
[5] [Tartu nõudeliinid](https://www.tartu.ee/et/noudeliinid)\\
[6] [Modern Mobility](https://modernmobility.ee/)\\
[7] [Traffest](https://traffest.ee/)\\
[8] [Bercman Technologies](https://www.bercman.com/)\\
[9] [Tartu city](https://www.tartu.ee/)
