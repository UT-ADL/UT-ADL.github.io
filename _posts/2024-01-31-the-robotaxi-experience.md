---
layout: blogpost
subtitle: Blog
title: The Robotaxi Experience
date: 2024-01-31
image: /images/blog/the_moving_office.jpg
alt: The Robotaxi Experience
permalink: /blog/:title/
meta: The Robotaxi Experience
language: en
author: Tambet Matiisen
---

The Autonomous Driving Lab has traditionally focused on the intricate technical challenges inherent in self-driving vehicles. However, as the technology approaches a level of maturity where widespread public adoption becomes feasible, our focus is expanding to encompass the user experience in autonomous transportation, particularly in the context of robotaxis.

This includes:

1. How do you order the robotaxi? What if the car cannot stop anywhere, but only in designated places, e.g. bus stops?
2. How do you easily recognize your robotaxi if they all look the same? How to make it easily recognizable to kids?
3. How does the robotaxi ensure that the person who entered the taxi is the person who actually ordered it, not some random bystander?
4. How can the robotaxi ensure that it is safe to start moving? Doors must be closed, seatbelts must be on, anything else?
5. How do you tell the robotaxi to open the trunk? What if you need help lifting your luggage?
6. How to entertain the users during the ride? Some people hate the small-talk with the driver, some enjoy it.
7. What if you change your mind during the ride? How can you ask for a stop or change of destination?
8. How do you confirm that you have left the car and the robotaxi can start moving? What if you don't close the door properly - does the robotaxi stay there forever?
9. Can the robotaxi ask help from the passer-by? E.g. to close the door, or why not even assist in a challenging situation? Can the driving assistance be crowd-sourced, e.g. you register your driving license and then occasionally get called to help out a stuck robotaxi?
10. How to ensure cleanliness of the robotaxi for the next passenger? What about the lost items?

In autumn semester 2023 we decided to tackle some of those challenges together with the [Sandbox digital product management program](https://sandbox.cs.ut.ee/){:target="_blank"}. We proposed the topic for the [Digital Product Management Industry Project course](https://sandbox.cs.ut.ee/digital-product-management-industry-project/){:target="_blank"}, where students attempt to solve real-world business problems. The focus is mainly on WHAT is the problem and WHY it needs to be solved, rather than HOW we are going to solve it.

The students divided themselves into five groups focusing on different robotaxi use-cases:

- [Business travelers](#business_travelers)
- [Families and kids](#families_and_kids)
- [Elderly people](#elderly_people)
- [Tourists with a lot of luggage](#tourists_luggage)
- [Tourists interested in sightseeing](#tourists_sightseeing)

The groups started by narrowing down the problem and doing market research. Based on the results, they proposed a vision for the product and validated it with user interviews. Finally they designed an UI/UX prototype in Figma and presented it to the organizers.

The solutions proposed by the students were very imaginative and thoughtful. The following is a short summary of the final presentations together with some additional comments.

### Business travelers {#business_travelers}

The key concept proposed by the team was "The Moving Office". The idea is that during a business trip the robotaxi could be your cozy home office, where you can do both work and relax in-between the meetings. As you do not have to drive, your hands are free to answer emails or finish your presentation. Robotaxi provides you privacy - you do not have to worry about your phone calls being overheard by the taxi driver. Also you do not have to worry about the parking place, the robotaxi will pick you up again after the meeting.

![Business travelers wireframe](/images/blog/robotaxi-business-travelers-wireframe.png)

The students proposed many innovative ideas how to make the experience more smooth for the business traveler, some key points:

- Import your meetings schedule from your calendar and automatically plan the trips. If there is missing data (times or locations), these can be added on spot.
- In-car work options: fast wifi connection, larger monitor, video call equipment, possibly printer.
- Reserve the robotaxi for the entire day and leave all your belongings in the car during the meetings.

In many ways the "The Moving Office" will be competing with rental cars rather than taxis.

![The Moving Office](/images/blog/the_moving_office.jpg)

The final report of the team can be found here:
[https://drive.google.com/file/d/1Q3dpeupbDGGczQvlGjuxijWvPKiegtTA/view?usp=sharing](https://drive.google.com/file/d/1Q3dpeupbDGGczQvlGjuxijWvPKiegtTA/view?usp=sharing){:target="_blank"}

The Figma prototype of the app can be found here:
[https://www.figma.com/proto/aRKFK8YUqHEgLUrHIf4XgI/Tourist_Wireframes?type=design&node-id=695-2853&t=CzGIhNfuo36PkjQa-0&scaling=scale-down&page-id=563%3A58&starting-point-node-id=695%3A2853](https://www.figma.com/proto/aRKFK8YUqHEgLUrHIf4XgI/Tourist_Wireframes?type=design&node-id=695-2853&t=CzGIhNfuo36PkjQa-0&scaling=scale-down&page-id=563%3A58&starting-point-node-id=695%3A2853){:target="_blank"}

### Families and kids {#families_and_kids}

While ordering a taxi for underage kids is not supported by [the official Bolt policy](https://bolt.eu/en/support/articles/360020582220/){:target="_blank"}, from user interviews the group learned that it is a very common usage pattern. Parents often use Bolt taxis to take their children back from school or to after school activities. To better support this use-case the team designed the robotaxi experience especially for families with kids.

![Families and kids wireframe](/images/blog/robotaxi-families-wireframe.png)

The key idea was to give the robotaxi AI a personality - Scooby Doo in the example. Kids communicate with a familiar cartoon character in a language they understand. The app included many features to make the experience smoother for both kids and their parents:

- The kid could ask the taxi to honk or flash lights, to make sure they pick the right car.
- The parents could keep track of their kid to ensure their wellbeing at all times.
- The app offers some collectibles to keep the kid engaged during the ride.

The final report of the team can be found here:
[https://drive.google.com/file/d/1HOazcJG8baIUEiMjs7mAsvv5Kn8m-QjD/view?usp=sharing](https://drive.google.com/file/d/1HOazcJG8baIUEiMjs7mAsvv5Kn8m-QjD/view?usp=sharing){:target="_blank"}

The parent view Figma prototype can be found here:
[https://www.figma.com/proto/zplc7Gz9fN34GaNJQ2do4J/Robotaxi-for-kids?type=design&node-id=461-1270&t=KSOSCiREFK29hm1J-1&scaling=scale-down&page-id=461%3A1062&starting-point-node-id=461%3A1270](https://www.figma.com/proto/zplc7Gz9fN34GaNJQ2do4J/Robotaxi-for-kids?type=design&node-id=461-1270&t=KSOSCiREFK29hm1J-1&scaling=scale-down&page-id=461%3A1062&starting-point-node-id=461%3A1270){:target="_blank"}

The child view Figma prototype can be found here:
[https://www.figma.com/proto/zplc7Gz9fN34GaNJQ2do4J/Robotaxi-for-kids?type=design&node-id=372-959&t=14W6qkO0DlPllPbw-1&scaling=scale-down&page-id=315%3A515&starting-point-node-id=372%3A959](https://www.figma.com/proto/zplc7Gz9fN34GaNJQ2do4J/Robotaxi-for-kids?type=design&node-id=372-959&t=14W6qkO0DlPllPbw-1&scaling=scale-down&page-id=315%3A515&starting-point-node-id=372%3A959){:target="_blank"}

### Elderly people {#elderly_people}

From the user interviews it became quickly clear that any new technology induces anxiety in elderly people. Therefore making sure they feel safe and in control at all times seemed especially crucial. Also elderly people might need physical assistance in getting into the car or fastening the seat belt. In practice a family member is usually giving a ride to their elders, so convincing them to switch to robotaxi is probably going to be challenging. Nevertheless the team did their best to deliver the least intimidating experience for them.

[![Elderly people screen 1](/images/blog/robotaxi-elderly-screen1.png)](/images/blog/robotaxi-elderly-screen1.png) [![Elderly people screen 2](/images/blog/robotaxi-elderly-screen2.png)](/images/blog/robotaxi-elderly-screen2.png) [![Elderly people screen 3](/images/blog/robotaxi-elderly-screen3.png)](/images/blog/robotaxi-elderly-screen3.png)

Some key features of the solution:

- Visualization and explanation of how the car sees the surroundings to ensure the passenger feels safe.
- Availability of first aid kit and common medicals in the car in case of emergency.
- The ability to pull over or call your relatives or Bolt support at any moment.

The team also played through how the car should communicate in case of failure.

![Elderly people failure communication](/images/blog/robotaxi-elderly-failure.png)

Some interesting ideas were left for future investigation:

- Reversing the robotaxi for elderly people - instead of bringing the elderly people to doctor or pharmacy, take doctor or pharmacy to the elderly people. Especially completely automated self-serving pharmacy sounded like a promising idea.
- The use of voice interface instead of an app. As elderly people are cautious about screens and buttons, a voice interface might be more appropriate for them. Modern large language models make free-form voice interface reality.
- The use of robotaxis by disabled people, e.g. with sight or hearing impairment. These people would win the most with private on-demand transport finally available to them.

The final report of the team can be found here:
[https://drive.google.com/file/d/1nv_PRSBBjm56Eyqpg6QuXIa8mkCSJJzh/view?usp=sharing](https://drive.google.com/file/d/1nv_PRSBBjm56Eyqpg6QuXIa8mkCSJJzh/view?usp=sharing){:target="_blank"}

The phone app Figma prototype can be found here:
[https://www.figma.com/proto/lXzMwtYR36Qo4jIYChl21A/Bolt-Auto?type=design&node-id=102-948&t=xIwU7KtXiQfr9pRO-1&scaling=min-zoom&page-id=102%3A754&starting-point-node-id=102%3A820&show-proto-sidebar=1&mode=design](https://www.figma.com/proto/lXzMwtYR36Qo4jIYChl21A/Bolt-Auto?type=design&node-id=102-948&t=xIwU7KtXiQfr9pRO-1&scaling=min-zoom&page-id=102%3A754&starting-point-node-id=102%3A820&show-proto-sidebar=1&mode=design){:target="_blank"}

The in-car interface Figma prototype can be found here:
[https://www.figma.com/proto/lXzMwtYR36Qo4jIYChl21A/Bolt-Auto?type=design&node-id=356-2874&t=xIwU7KtXiQfr9pRO-1&scaling=min-zoom&page-id=102%3A754&starting-point-node-id=356%3A2874&show-proto-sidebar=1&mode=design](https://www.figma.com/proto/lXzMwtYR36Qo4jIYChl21A/Bolt-Auto?type=design&node-id=356-2874&t=xIwU7KtXiQfr9pRO-1&scaling=min-zoom&page-id=102%3A754&starting-point-node-id=356%3A2874&show-proto-sidebar=1&mode=design){:target="_blank"}

### Tourists with a lot of luggage {#tourists_luggage}

Tourists are an important group of taxi users, that's why we had two student teams focusing on them. The first team decided to focus on the luggage aspect, because the lack of a human driver makes it challenging with robotaxis, from just opening the trunk to lifting heavier items.

![Tourists with luggage wireframe](/images/blog/robotaxi-luggage-wireframe.png)

The key features of the prototype:

- Ability to specify the luggage size in advance, a suitable taxi will be sent.
- Automatic measurement of the luggage using the phone camera.
- Luggage lifting help from a robotic arm. While completely autonomous loading of luggage might be out-of-range for the near future, the passenger could guide the arm manually, it could function as an amplifier of the passenger force.

The final report of the team can be found here:
[https://drive.google.com/file/d/12ye4XbrjXz9tp_jJIALmtYiqwj1NqCo7/view?usp=sharing](https://drive.google.com/file/d/12ye4XbrjXz9tp_jJIALmtYiqwj1NqCo7/view?usp=sharing){:target="_blank"}

The Figma prototype of the app can be found here:
[https://www.figma.com/proto/NOMNCS7ayy3PbNiklEasQs/ADL-Taxi-App-Prototype?type=design&node-id=625-3631&t=seJC7nTbg0Vm7Xpw-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2&mode=design](https://www.figma.com/proto/NOMNCS7ayy3PbNiklEasQs/ADL-Taxi-App-Prototype?type=design&node-id=625-3631&t=seJC7nTbg0Vm7Xpw-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2&mode=design){:target="_blank"}

### Tourists interested in sightseeing {#tourists_sightseeing}

Another tourist team focused more on the regular tourist experience, which is sightseeing. Navigating around in foreign city can be a stressful experience, both with public transportation and a rental car. Robotaxi provides a private experience that does not waste your time in getting lost or looking for a parking place.

[![Sightseeing screen 1](/images/blog/robotaxi-sightseeing-screen1.png)](/images/blog/robotaxi-sightseeing-screen1.png) [![Sightseeing screen 2](/images/blog/robotaxi-sightseeing-screen2.png)](/images/blog/robotaxi-sightseeing-screen2.png) [![Sightseeing screen 3](/images/blog/robotaxi-sightseeing-screen3.png)](/images/blog/robotaxi-sightseeing-screen3.png)

The key features of the experience:

- Automatic creation of route based on available time or desired sights.
- Audio guide during the ride that directs attention to sights you are passing by.
- Integration with accommodation and restaurants to follow up your trip.

The final report of the team can be found here:
[https://drive.google.com/file/d/16XUl3_KP62Kaf0Xlx5GiAWLBzO5IsIfm/view?usp=sharing](https://drive.google.com/file/d/16XUl3_KP62Kaf0Xlx5GiAWLBzO5IsIfm/view?usp=sharing){:target="_blank"}

The Figma prototype of the app can be found here:
[https://www.figma.com/proto/wgn1n3WJ2y6ZrKjjeADRf5/UI?node-id=13-924&starting-point-node-id=13%3A924&t=opMNZ0dsbKynhR8g-1&mode=design](https://www.figma.com/proto/wgn1n3WJ2y6ZrKjjeADRf5/UI?node-id=13-924&starting-point-node-id=13%3A924&t=opMNZ0dsbKynhR8g-1&mode=design){:target="_blank"}

### Conclusion

Many other insightful proposals were made, not necessarily related to any particular use-case:

- Opening the robotaxi door by placing the phone near the door handle. This can make use of NFC or Bluetooth technology, like Tesla. (Elderly team)
- Saving your preferences for music, temperature, etc. in the app and applying them to the ordered taxi beforehand. Once the taxi arrives, it already matches your comfort temperature and plays your favorite music. (Tourists with a lot of luggage team)
- Sale of snacks, drinks and simpler medications in the robotaxi. Similar to popcorn in cinemas, this allows potential additional revenue besides the basic transport fee. (Elderly team, Tourists with a lot of luggage team)
- Our favorite - karaoke in the car! As there is no driver, there is no embarrassment in singing alone (or with your friends). This could be the killer feature of robotaxis! (Elderly team)

In conclusion we were very pleased with imaginative and thoughtful ideas the students proposed and looking forward to integrating those into our self-driving car prototype.
