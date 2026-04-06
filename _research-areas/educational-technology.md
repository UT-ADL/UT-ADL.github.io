---
layout: research-area
title: Educational technology
icon: /images/icons/educational_technology.png
research_lead: Ardi Tampuu
lead_image: "/images/team/ardi.jpg"
lead_description: Lecturer of Artificial Intelligence, Educational Technology Team Lead
lead_email: ardi.tampuu@ut.ee
---

It is not feasible to use the real car for a multitude of BSc and MSc projects per year. We believe minicars are a very useful training environment for habituating bachelor and master level students with the domain of data-driven self-driving. In particular:

- The platform of DonkeyCar allows simple behavior cloning with neural networks with minimal effort, lowering the barrier of entry for students uncertain about their data science skills.
- The DonkeyCar S1 comes pre-assembled and has a well-functioning codebase which handles the communication with the hardware. Not having to deal with hardware lowers the barrier of entry for IT students not (yet) comfortable with robotics.
- Data collection and model evaluation takes 5-10x less time on minicars when compared to the real-world vehicle. What would be a week of work to get sufficient evaluation runs (for statistical significance), is a day on minicars.
- Using simulations is an alternative to minicars. But this comes at a considerable computing cost and requires significant infrastructure if one aims for realistic physics and graphics. The physics and "graphics" are accurate and real when using minicars, and free of charge.
- Many concepts, such as overfitting, distribution shift, on- and off-policy metrics, the effect of delays, the inertia problem when using speed or multi-frame inputs — all are relevant for end-to-end self-driving of both the minicars and the real car and can easily be taught and investigated on the smaller platform. Additionally, the student learns about the neural network architectures and computer vision.

Additionally, we believe that data-driven self-driving with minicars is a very useful environment for teaching machine learning and data science in general. More specifically:

- The student must perform the entire life-cycle of a data-science project: starting from data collection, dataset cleaning and validation, and finishing with **deploying the solution, analyzing its performance and improving it over many iterations.**
- Deploying student-made solutions is rare in data science, hence students rarely get exposed to the challenges it poses. For example, a Kaggle competition does not end with deployment, but an evaluation on the test set, which is usually iid with development and validation sets. Real life is rarely IID with your development data.
- In most real-life contexts the project actually does not end at test-set evaluation, nor even at initial deployment, because the initial deployment likely fails. What follows is the error analysis, correcting the dataset or the model, another deployment, another performance analysis, etc.
- The student is working with a real-life object and gets exposed to the difficulties it causes, such as the time-consuming data collection, high diversity of data (e.g, light conditions in self-driving), distribution shifts happening over time (e.g., due to wear and tear of hardware), and so on. Learning to spot problems and fix them will prove crucial when later deploying solutions in the industry.
