---
layout: blogpost
title: LiDAR-as-Camera for End-to-End Driving
date: 2022-09-15
#image: https://img.youtube.com/vi/jpdRXS1U5Dg/maxres3.jpg
#alt: Autonomous driving at night
image: /images/blog/lidar_channels.png
alt: Ouster lidar channels
permalink: /blog/:title/
meta: LiDAR-as-Camera for End-to-End Driving
language: en
author: Ardi Tampuu
---

Ouster LiDARs can output surround-view images with intensity, depth, and ambient radiation channels. These measurements originate from the same sensor, rendering them perfectly aligned in time and space. The fact that grayscale-image-like intensity and ambient radiation images are aligned with depth information is a very interesting property for self-driving. Aligning information from different sensors is very sensitive to temporal synchronization issues and needs precise calibration of sensors. Hence, fusing an image from an RGB camera and depth information from a LiDAR requires a considerable and continuous engineering effort. With Ouster LiDAR-as-camera feature you get it basically for free. 

In [the paper](https://arxiv.org/abs/2206.15170) presented at [ICRA Fresh Perspectives on the Future of Autonomous Driving workshop](https://www.icra2022av.org/), we investigated whether these LiDAR images are sufficient for an end-to-end driving model to learn the road-following task with a real car. Driving based on only depth sensing has been attempted before, but Ouster LiDAR’s output images add two new channels of information: intensity and ambient radiation. They look like grayscale images of the scene and might compensate for the lack of visible light information. Importantly, LiDAR-as-camera feature allows using very well-studied convolutional networks on LiDAR data and performing apples-to-apples comparison with the camera-based models.

## The Task

Our goal is to test whether LiDAR-as-camera images are a promising input type for end-to-end driving models. These models consist of just one neural network that transforms inputs from a sensor to steering commands the car should perform. Most commonly, such networks are created by optimizing them to imitate human commands, based on recordings of human driving in a process called behavioral cloning. To this end, we have recorded camera images, LiDAR images and steering values during 500km of human driving on [WRC Rally Estonia 2022](https://www.rallyestonia.ee/) tracks. These are mainly narrow winding gravel roads in rural areas.

For declaring LiDAR-as-camera as an interesting input type worthy of further study, it does not suffice to just solve a task. We need to solve it, at least in certain conditions, equally or better than models based on RGB camera images. For the comparison to be fair, we use the exact same dataset of human driving and the exact same training methods, based on [NVIDIA PilotNet](https://arxiv.org/abs/1604.07316). The only difference between the approaches is whether the input is a region of interest (see Figure 2) from a camera image or from a LiDAR-image.

After conditioning the models to imitate human behavior on the collected dataset, we deploy them to the real world. On a section of a WRC Rally Estonia track the models are given control over the steering of [our Lexus car](https://adl.cs.ut.ee/lab/vehicle). The speed is not controlled by the models, instead it is matched to 80% of the speed our test driver used along the route.

![Inputs to the model](/images/blog/inputs.png){:width="100%"}

**Figure 1.** Examples of summer, autumn and winter for the two input modalities. RGB colors on LiDAR images correspond to intensity, range and ambient radiation channels. Red box denotes the cropped region of interest that was the input to the network.

## Driving Performance

In total, LiDAR-based models resulted in 2 times less situations where the safety driver had to take over control, but the tests were run on different days and we can not claim LiDAR-image models are superior. Nevertheless, this clearly demonstrates that LiDAR-image based driving is feasible and competitive with RGB camera based road-following models, even in good light conditions which favor cameras.
  
However, LiDARs work just fine even when there is no light. We show that our LiDAR models can **without any adaptation** generalize to driving at night. Camera models trained on daylight data completely fail to generalize to the night due to the visual scenery being completely different. 

We also deployed the LiDAR model, trained on summer and autumn data, in the winter with snow piles surrounding the road. In this task, the LiDAR-image based model struggles in certain open-field sections, but drives cleanly in the forest. We suppose that the reflectivity of snow is different from vegetation and gravel the model is optimized for, rendering the intensity image very different. Hence the model has to strongly rely on the range image, which is more informative in the forest where there are more objects, trees, to detect and base decisions on. 

Being able to generalize to new light and weather conditions is the expected benefit of an active sensor that generates by itself the signal that it measures.

**Table 1.** The road testing results of LiDAR vs camera. DpI refers to the mean distance between safety driver interventions. All tests were conducted on the same test track near Elva, Estonia. The training data for all models did not include the test track, except for Overfitting experiments, which contained one lap on the test track.

![On-policy results](/images/blog/on_policy.png){:width="90%"}

### Main observations

* In favorable conditions for both model types, LiDAR-image based models show same-or-better performance in the road-following task as RGB camera-based models.
* Light conditions influence camera images, while intensity and range LiDAR channels are not affected. This is due to the active nature of the LiDAR sensor that produces by itself the signal it measures.
* Night and winter conditions were not in the training set. LiDAR models can handle night with minimal and winter with partial reduction in performance.
* In winter the failures were mainly in open field sections.


![Interventions during night](/images/blog/night_interventions.png){:width="48%"}
![Interventions during winter](/images/blog/winter_interventions.png){:width="50%"}

**Figure 2.** Interventions during night (left) and winter (right) driving with the LiDAR model. The map also depicts land usage: dark green denotes forest while light green denotes agricultural land. Grey areas are of an unspecified usage, mostly residential use with private houses, partially fenced gardens. On the winter trajectory, there is only one intervention in the forest, while more open areas prove challenging for the summer-trained LiDAR model in the winter.

Below is the video of autonomous driving at night. RGB camera image is shown for illustration, but driving is done based on LiDAR images.

<iframe width="780" height="580" src="https://www.youtube.com/embed/jpdRXS1U5Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p/>

### Stability as a Predictor of Quality

While deploying models on the road, we noticed that most interventions were preceded by unstable driving with shaking steering wheel. The model controlling the car was returning inconsistent values in consecutive time points as if it did not know with certainty how to respond to the situation. This gave us the idea to use the temporal similarity of generated commands as a proxy that estimates the model’s certainty about its actions in the given situation. Of course, a very bad model can be very certain about its bad decisions, but among good models, maybe temporal stability over small periods of time can separate the very good models from the rest?

Determining the best models before deploying them in the real world is crucial as deployment takes time and resources. **We need a before-deployment measure that correlates well with the frequency of interventions when the models are deployed.** Intuitively, one could measure how precisely a given model’s predictions agree with human driving on a held-out recording of human driving. Unfortunately, mean predictive error shows only a weak correlation with actual driving ability when deployed. In our work we showed that among sufficiently good models, the temporal stability of predictions is an equally powerful before-deployment predictor of actual driving performance. When combining the measures of mean error and prediction stability, we get an even stronger correlation with performance when deployed. 

**Table 2.** Correlations between the distance per intervention metric computed during deployment and the measures we can obtain before deployment. On a recording of human driving on the test track in similar weather, we ask different models to predict what they would do on each frame. We measure the average difference to the command actually given by the human as mean absolute error. We summarize the similarity of decisions in consecutive frames with the whiteness measure. After actually deploying the models we can ask which metric correlates with the deployment results better.

|           | Whiteness<br/>(temporal stability) | Mean absolute error<br/>(predictive ability) | Combined |
|:----------|-------------------------------:|-----------------------------------------:|---------:|
| Pearson R |                          -0.72 |                                    -0.76 |    -0.82 |
{: width="90%"}
<p/>

Temporal stability and prediction accuracy are inherently different measures. When needing to pick one model to go out and deploy, we suggest one should pay attention to both the quality and stability. Temporal stability cannot be used alone, because model outputting constant steering would have the best temporal stability, but would be useless in practice.

## Conclusions

The work done so far revealed a few interesting facts. First, the information contained in LiDAR-as-camera input feed is sufficient for the simplest task of autonomous driving - road following. While it looks noisy for the human eye, for at least this task and the used conditions, this input might be even more informative than RGB-camera images, as evidenced by somewhat lower intervention rate.

Moreover, as we had hoped, the LiDAR-as-camera input is less sensitive to environmental conditions. Without modifications, the models were able to drive also at night and to some degree in the winter. This generalization ability might mean that LiDAR-based driving is more data efficient and therefore cheaper to develop in some cases.

Interestingly, only intensity channel based driving performed much better than depth-only driving. We know from other works that knowledge about depth is beneficial for self-driving systems, so this result does not mean that depth is useless. It only means it is not sufficient alone. In combination with other information and in different tasks with different challenges depth is probably still useful, if not necessary, for safe self-driving. What our result shows, however, is that the intensity images are a very rich source of information, competitive with RGB images in simpler applications. 

In future we plan to test LiDAR-as-camera based driving in a more challenging task: highway driving. In this task the distance information, e.g. the distance to the leading car, is likely very important. Combining the facts that intensity channel was proven rich in information and competitive with RGB images, and that the depth information is likely useful here, there is a hope that LiDAR-image based driving would again perform very well.
