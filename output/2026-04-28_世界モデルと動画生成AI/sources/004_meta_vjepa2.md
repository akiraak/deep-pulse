---
url: https://ai.meta.com/blog/v-jepa-2-world-model-benchmarks/
title: "Introducing the V-JEPA 2 world model and new benchmarks for physical reasoning"
---

[![Meta](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=tMWBMip6ruEQ7kNvwHgv7k7&_nc_oc=Adoe_x3LVEnAbu85GzxARMPBlHDjGcwj7N5WD6S_oDnQ0nKC1AyLi0aArXIoWvXEL-k&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af2VSoEKvK3dyaDxlVphtIVkdwm1nQCpWsxzgEGTNQZD6g&oe=69F6D3B9){._aqmi ._aqmj ._8h4h .img height="18" style="border-top-left-radius:px;border-top-right-radius:px;border-bottom-left-radius:px;border-bottom-right-radius:px;" width="89"}](#){._9b0l ._9b0e ._aqmh ms="{\"creative\":\"link\"}" ms-clickable="true" role="button" style=""}

[Products](#){._9b0l ._9b0e ._aqmb ms="{\"creative\":\"link\"}" ms-clickable="true" role="button" style=""}

[AI Research](#){._9b0l ._9b0e ._aqmb ms="{\"creative\":\"link\"}" ms-clickable="true" role="button" style=""}

[The Latest](/blog/){._9b0l ._9b0e ._aqm7 ._aqmb ms="{\"creative\":\"click_internal\"}" ms-clickable="true" style="" target="_self"}

[About](#){._9b0l ._9b0e ._aqmb ms="{\"creative\":\"link\"}" ms-clickable="true" role="button" style=""}

[Get Llama](https://www.llama.com/?utm_source=ai_meta_site&utm_medium=web&utm_content=AI_nav&utm_campaign=09252025_moment){#u_0_0_iw ._9b0l ._9b0e ._aqm7 ._aqmb lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

[Try Meta AI](https://applink.meta.ai/?utm_source=ai_meta_site&utm_medium=web&utm_content=AI_nav&utm_campaign=04082026_moment){#u_0_1_IP ._9b0l ._9b0e ._aqm7 ._aqmb lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

[![](data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwIiB2aWV3Ym94PSIwIDAgMjAgMjAiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi41NDUgMi41NDZjMy4zNDktMy4zNSA4Ljc0Ni0zLjQgMTIuMDMxLS4xMTUgMy4wNDggMy4wNDggMy4yMjMgNy45MTQuNTU4IDExLjI3NS40MzguNDM0IDMuMTQ4IDMuMTQ0IDQuMjIgNC4yMTZsLjQxLjQxYy4zNTYuMzU1LjI5Ljk5OC0uMDcyIDEuMzYtLjM2My4zNjMtMS4wMDUuNDI4LTEuMzYuMDcyLTIuNzQtMi43MzktNC4yODMtNC4yOC00LjYzMy00LjYyNS0zLjM2IDIuNjYtOC4yMjIgMi40ODMtMTEuMjY4LS41NjMtMy4yODYtMy4yODUtMy4yMzQtOC42ODIuMTE0LTEyLjAzem0xMC43MTcgMS40MjhhNi41NzUgNi41NzUgMCAwMC05LjI4OCAwIDYuNTc1IDYuNTc1IDAgMDAwIDkuMjg4IDYuNTc1IDYuNTc1IDAgMDA5LjI4OCAwIDYuNTc1IDYuNTc1IDAgMDAwLTkuMjg4eiIgZmlsbD0iQ3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=)](/){._9b0l ._9b0e ._aqms ms="{\"creative\":\"click_internal\"}" ms-clickable="true" style=""}

<div>

FEATURED

Open Source

# [Introducing the V-JEPA 2 world model and new benchmarks for physical reasoning]{._amgd} {#introducing-the-v-jepa-2-world-model-and-new-benchmarks-for-physical-reasoning ._a5c- ._a5w7 ._a5ct style="color:#1C2B33;"}

[June 11, 2025]{._amum}[•]{._amgg}

[15 minute read]{._metaAIBlogHero__readTime}

-   Meta Video Joint Embedding Predictive Architecture 2 (V-JEPA 2) is a world model that achieves state-of-the-art performance on visual understanding and prediction in the physical world. Our model can also be used for zero-shot robot planning to interact with unfamiliar objects in new environments.
-   V-JEPA 2 represents our next step toward our goal of achieving advanced machine intelligence (AMI) and building useful AI agents that can operate in the physical world.
-   We're also releasing three new benchmarks to evaluate how well existing models can reason about the physical world from video.

Today, we're excited to share V-JEPA 2, the first world model trained on video that enables state-of-the-art understanding and prediction, as well as zero-shot planning and robot control in new environments. As we work toward our goal of achieving advanced machine intelligence (AMI), it will be important that we have AI systems that can learn about the world as humans do, plan how to execute unfamiliar tasks, and efficiently adapt to the ever-changing world around us.

V-JEPA 2 is a 1.2 billion-parameter model that was built using [[Meta Joint Embedding Predictive Architecture]{.underline}](https://ai.meta.com/blog/yann-lecun-advances-in-ai-research/){lnfb-mode="ie" target="_blank"} (JEPA), which we first shared in 2022. Our previous work has shown that JEPA performs well for modalities like [[images]{.underline}](https://ai.meta.com/blog/yann-lecun-ai-model-i-jepa/){lnfb-mode="ie" target="_blank"} and [[3D point clouds]{.underline}](https://locate3d.atmeta.com/){lnfb-mode="ie" target="_blank"}. Building on [[V-JEPA]{.underline}](https://ai.meta.com/blog/v-jepa-yann-lecun-ai-model-video-joint-embedding-predictive-architecture/){lnfb-mode="ie" target="_blank"}, our first model trained on video that we released last year, V-JEPA 2 improves action prediction and world modeling capabilities that enable robots to interact with unfamiliar objects and environments to complete a task. We're also sharing three new benchmarks to help the research community evaluate how well their existing models learn and reason about the world using video. By sharing this work, we aim to give researchers and developers access to the best models and benchmarks to help accelerate research and progress---ultimately leading to better and more capable AI systems that will help enhance people's lives.

What are world models?

[]{#u_0_7_J7}

We all know that if you toss a tennis ball into the air, gravity will pull it back down. It would be surprising if it hovered, suddenly pivoted mid-air and went flying in a different direction, or spontaneously changed into an apple. That kind of physical intuition isn't something adults obtain after years of education---young children develop this intuition by observing the world around them before they can even speak in full sentences.

The ability to predict how the world will respond to our actions---or the actions of others---is something humans use all the time, especially when planning what actions to take and how to best navigate new situations. Consider all the ways this physical intuition shows up in our everyday lives. When we walk through an unfamiliar crowded area, we're making moves toward our destination while also trying not to bump into people or obstacles along the path. When playing hockey, we skate to where the puck is going, not where it currently is. And when preparing a meal using a stove, we think about how much longer to leave the pot on the flame or whether to turn down the heat. Our internal model of the world provides us with this intuition and also acts as an internal simulator, allowing us to predict the outcome of a hypothetical action, so we can ultimately choose the best action based on what we believe will best achieve our goal.

Before taking action, we use our world model to imagine the potential consequences. As we work toward building AI agents that can similarly think before they act, it's important that they learn world models that enable the following capabilities:

-   **Understanding:** A world model should be able to understand observations of the world, including things like recognizing objects, actions, and motions in a video.
-   **Predicting:** A world model should be able to make predictions about how the world will evolve, and how the world will change if the agent takes an action.
-   **Planning:** Building on the ability to make predictions, a world model should be useful for planning sequences of actions that achieve a given goal.

Introducing V-JEPA 2

[]{#u_0_a_0T}

Our long-term vision is that world models will enable AI agents to plan and reason in the physical world. As the next step towards this vision, we're releasing V-JEPA 2, a world model trained primarily on video---a rich and readily available source of information about the world. By making V-JEPA 2 code and model checkpoints available for commercial and research applications, we hope to build a broad community around this research, driving progress toward our ultimate goal of developing world models that can transform the way AI interacts with the physical world.

Built using a joint-embedding predictive architecture (JEPA), V-JEPA 2 has two main components:

-   An **encoder**, which takes in raw video and outputs embeddings that capture useful semantic information about the state of the observed world.
-   A **predictor**, which takes in a video embedding and additional context about what to predict and outputs predicted embeddings.

We train V-JEPA 2 using self-supervised learning from video, which allows us to train on video without requiring additional human annotation. V-JEPA 2 training involves two stages: actionless pre-training, followed by additional action-conditioned training.

In the first stage---pre-training---we use more than 1 million hours of video and 1 million images from diverse sources. This rich visual data helps the model learn a lot about how the world works, including how people interact with objects, how objects move in the physical world, and how objects interact with other objects. We find that the model already demonstrates key capabilities related to understanding and prediction after the pre-training stage. For example, by training a lightweight attentive read-out on top of the frozen encoder features, V-JEPA 2 achieves exceptional performance on the Something-Something v2 action recognition task, which relies on motion understanding. Similarly, by training an attentive read-out on top of the frozen encoder and predictor features, V-JEPA 2 sets a new state-of-the-art on the Epic-Kitchens-100 action anticipation task of predicting what action (comprised of a noun and a verb) will be performed 1 second into the future from egocentric video. Finally, aligning V-JEPA 2 with a language model results in state-of-the-art performance on video question answering benchmarks such as Perception Test and TempCompass.

After the actionless pre-training stage, the model can make predictions about how the world might evolve---however, these predictions don't directly take into account specific actions that an agent would take. In the second stage of training, we focus on making the model more useful for planning by using robot data, which includes visual observations (video) and the control actions that the robot was executing. We incorporate this data into the JEPA training procedure by providing the action information to the predictor. After training on this additional data, the predictor learns to account for specific actions when making predictions and can then be used for control. We don't need a lot of robot data for this second phase---in our technical report, we show that training with only 62 hours of robot data already results in a model that can be used for planning and control.

We demonstrate how V-JEPA 2 can be used for zero-shot robot planning in new environments and involving objects not seen during training. Unlike other robot foundation models---which usually require that some training data come from the specific robot instance and environment where the model is deployed---we train the model on the open source [[DROID dataset]{.underline}](https://droid-dataset.github.io/){lnfb-mode="ie" target="_blank"} and then deploy it directly on robots in our labs. We show that the V-JEPA 2 predictor can be used for foundational tasks like reaching, picking up an object, and placing it in a new location.

For short-horizon tasks, such as picking or placing an object, we specify a goal in the form of an image. We use the V-JEPA 2 encoder to get embeddings of the current and goal states. Starting from its observed current state, the robot then plans by using the predictor to imagine the consequences of taking a collection of candidate actions and rating the candidates based on how close they get to the desired goal. At each time step, the robot re-plans and executes the top-rated next action toward that goal via model-predictive control. For longer horizon tasks, such as picking up an object and placing it in the right spot, we specify a series of visual subgoals that the robot tries to achieve in sequence, similar to visual imitation learning observed in humans. With these visual subgoals, V-JEPA 2 achieves success rates of 65% -- 80% for pick-and-placing new objects in new and unseen environments.

Download the V-JEPA artifacts:

[](https://github.com/facebookresearch/vjepa2){#u_0_i_t8 ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

GitHub![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMzYiIHZpZXdib3g9IjAgMCAzNiAzNiIgd2lkdGg9IjM2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjk1MDIgMTUuNDY0NUwxMy43NTc5IDIzLjY1NjlDMTMuMzY3NCAyNC4wNDc1IDEyLjczNDIgMjQuMDQ3NSAxMi4zNDM3IDIzLjY1NjlDMTEuOTUzMiAyMy4yNjY0IDExLjk1MzIgMjIuNjMzMyAxMi4zNDM3IDIyLjI0MjdMMjAuNTM2IDE0LjA1MDNIMTUuODc5MkMxNS4zMjY5IDE0LjA1MDMgMTQuODc5MiAxMy42MDI2IDE0Ljg3OTIgMTMuMDUwM0MxNC44NzkyIDEyLjQ5OCAxNS4zMjY5IDEyLjA1MDMgMTUuODc5MiAxMi4wNTAzSDIyLjk1MDJDMjMuNTAyNSAxMi4wNTAzIDIzLjk1MDIgMTIuNDk4IDIzLjk1MDIgMTMuMDUwM1YyMC4xMjE0QzIzLjk1MDIgMjAuNjczNyAyMy41MDI1IDIxLjEyMTQgMjIuOTUwMiAyMS4xMjE0QzIyLjM5OCAyMS4xMjE0IDIxLjk1MDIgMjAuNjczNyAyMS45NTAyIDIwLjEyMTRWMTUuNDY0NVoiIGZpbGw9IkN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){._a6er ._a6et ._a6er ._a6et}

[](https://huggingface.co/collections/facebook/v-jepa-2-6841bad8413014e185b497a6){#u_0_j_Qd ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

Hugging Face![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMzYiIHZpZXdib3g9IjAgMCAzNiAzNiIgd2lkdGg9IjM2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjk1MDIgMTUuNDY0NUwxMy43NTc5IDIzLjY1NjlDMTMuMzY3NCAyNC4wNDc1IDEyLjczNDIgMjQuMDQ3NSAxMi4zNDM3IDIzLjY1NjlDMTEuOTUzMiAyMy4yNjY0IDExLjk1MzIgMjIuNjMzMyAxMi4zNDM3IDIyLjI0MjdMMjAuNTM2IDE0LjA1MDNIMTUuODc5MkMxNS4zMjY5IDE0LjA1MDMgMTQuODc5MiAxMy42MDI2IDE0Ljg3OTIgMTMuMDUwM0MxNC44NzkyIDEyLjQ5OCAxNS4zMjY5IDEyLjA1MDMgMTUuODc5MiAxMi4wNTAzSDIyLjk1MDJDMjMuNTAyNSAxMi4wNTAzIDIzLjk1MDIgMTIuNDk4IDIzLjk1MDIgMTMuMDUwM1YyMC4xMjE0QzIzLjk1MDIgMjAuNjczNyAyMy41MDI1IDIxLjEyMTQgMjIuOTUwMiAyMS4xMjE0QzIyLjM5OCAyMS4xMjE0IDIxLjk1MDIgMjAuNjczNyAyMS45NTAyIDIwLjEyMTRWMTUuNDY0NVoiIGZpbGw9IkN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){._a6er ._a6et ._a6er ._a6et}

[](https://ai.meta.com/vjepa){#u_0_k_ME ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

Visit the V-JEPA 2 website![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMzYiIHZpZXdib3g9IjAgMCAzNiAzNiIgd2lkdGg9IjM2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjk1MDIgMTUuNDY0NUwxMy43NTc5IDIzLjY1NjlDMTMuMzY3NCAyNC4wNDc1IDEyLjczNDIgMjQuMDQ3NSAxMi4zNDM3IDIzLjY1NjlDMTEuOTUzMiAyMy4yNjY0IDExLjk1MzIgMjIuNjMzMyAxMi4zNDM3IDIyLjI0MjdMMjAuNTM2IDE0LjA1MDNIMTUuODc5MkMxNS4zMjY5IDE0LjA1MDMgMTQuODc5MiAxMy42MDI2IDE0Ljg3OTIgMTMuMDUwM0MxNC44NzkyIDEyLjQ5OCAxNS4zMjY5IDEyLjA1MDMgMTUuODc5MiAxMi4wNTAzSDIyLjk1MDJDMjMuNTAyNSAxMi4wNTAzIDIzLjk1MDIgMTIuNDk4IDIzLjk1MDIgMTMuMDUwM1YyMC4xMjE0QzIzLjk1MDIgMjAuNjczNyAyMy41MDI1IDIxLjEyMTQgMjIuOTUwMiAyMS4xMjE0QzIyLjM5OCAyMS4xMjE0IDIxLjk1MDIgMjAuNjczNyAyMS45NTAyIDIwLjEyMTRWMTUuNDY0NVoiIGZpbGw9IkN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){._a6er ._a6et ._a6er ._a6et}

[](https://arxiv.org/abs/2506.09985){#u_0_l_DH ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

Read the paper![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIHZpZXdib3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NDYgMTBIMjZWMjEuMjU0TDI0LjAzMDEgMjEuMjczNUwyNC4wMjk3IDEzLjM3N0wxMS40MDY3IDI2TDEwIDI0LjU5MzNMMjIuNjAzOSAxMS45ODk0TDE0Ljc0NiAxMS45ODk0VjEwWiIgZmlsbD0iQ3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=){._a6er ._a6et ._a6er ._a6et}

## Benchmarking physical understanding {#benchmarking-physical-understanding ._a92o ._a5e5 ._a5w7}

As we continue to make advancements in the field of world models, we're excited to share our work and support progress in the open source community. We're releasing three new benchmarks to evaluate how well existing models can understand and reason about the physical world from video. While humans perform well on all three benchmarks (85% -- 95% accuracy), there's a notable gap between human performance and that of top models including V-JEPA 2, indicating important directions for models to improve in.

**IntPhys 2** is specifically designed to measure the ability of models to distinguish between physically plausible and implausible scenarios, building and expanding upon the earlier [[IntPhys benchmark]{.underline}](https://arxiv.org/abs/1803.07616){lnfb-mode="ie" target="_blank"}. We designed IntPhys 2 similar to the way developmental cognitive scientists evaluate when young humans acquire intuitive physics, via the violation of expectations paradigm. We achieve this using a game engine that generates pairs of videos, where the two videos are identical up to a certain point, and then a physics-breaking event occurs in one of the two videos. The model must then identify which video has the physics-breaking event. While humans achieve near-perfect accuracy on this task across a range of scenarios and conditions, we find that current video models are at or close to chance.

Download IntPhys 2:

[](https://github.com/facebookresearch/IntPhys2){#u_0_m_d0 ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

GitHub![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMzYiIHZpZXdib3g9IjAgMCAzNiAzNiIgd2lkdGg9IjM2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjk1MDIgMTUuNDY0NUwxMy43NTc5IDIzLjY1NjlDMTMuMzY3NCAyNC4wNDc1IDEyLjczNDIgMjQuMDQ3NSAxMi4zNDM3IDIzLjY1NjlDMTEuOTUzMiAyMy4yNjY0IDExLjk1MzIgMjIuNjMzMyAxMi4zNDM3IDIyLjI0MjdMMjAuNTM2IDE0LjA1MDNIMTUuODc5MkMxNS4zMjY5IDE0LjA1MDMgMTQuODc5MiAxMy42MDI2IDE0Ljg3OTIgMTMuMDUwM0MxNC44NzkyIDEyLjQ5OCAxNS4zMjY5IDEyLjA1MDMgMTUuODc5MiAxMi4wNTAzSDIyLjk1MDJDMjMuNTAyNSAxMi4wNTAzIDIzLjk1MDIgMTIuNDk4IDIzLjk1MDIgMTMuMDUwM1YyMC4xMjE0QzIzLjk1MDIgMjAuNjczNyAyMy41MDI1IDIxLjEyMTQgMjIuOTUwMiAyMS4xMjE0QzIyLjM5OCAyMS4xMjE0IDIxLjk1MDIgMjAuNjczNyAyMS45NTAyIDIwLjEyMTRWMTUuNDY0NVoiIGZpbGw9IkN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){._a6er ._a6et ._a6er ._a6et}

[](https://huggingface.co/datasets/facebook/IntPhys2){#u_0_n_Ov ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

Hugging Face![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMzYiIHZpZXdib3g9IjAgMCAzNiAzNiIgd2lkdGg9IjM2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjk1MDIgMTUuNDY0NUwxMy43NTc5IDIzLjY1NjlDMTMuMzY3NCAyNC4wNDc1IDEyLjczNDIgMjQuMDQ3NSAxMi4zNDM3IDIzLjY1NjlDMTEuOTUzMiAyMy4yNjY0IDExLjk1MzIgMjIuNjMzMyAxMi4zNDM3IDIyLjI0MjdMMjAuNTM2IDE0LjA1MDNIMTUuODc5MkMxNS4zMjY5IDE0LjA1MDMgMTQuODc5MiAxMy42MDI2IDE0Ljg3OTIgMTMuMDUwM0MxNC44NzkyIDEyLjQ5OCAxNS4zMjY5IDEyLjA1MDMgMTUuODc5MiAxMi4wNTAzSDIyLjk1MDJDMjMuNTAyNSAxMi4wNTAzIDIzLjk1MDIgMTIuNDk4IDIzLjk1MDIgMTMuMDUwM1YyMC4xMjE0QzIzLjk1MDIgMjAuNjczNyAyMy41MDI1IDIxLjEyMTQgMjIuOTUwMiAyMS4xMjE0QzIyLjM5OCAyMS4xMjE0IDIxLjk1MDIgMjAuNjczNyAyMS45NTAyIDIwLjEyMTRWMTUuNDY0NVoiIGZpbGw9IkN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){._a6er ._a6et ._a6er ._a6et}

[](https://www.arxiv.org/abs/2506.09849){#u_0_o_jp ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

Read the paper![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIHZpZXdib3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NDYgMTBIMjZWMjEuMjU0TDI0LjAzMDEgMjEuMjczNUwyNC4wMjk3IDEzLjM3N0wxMS40MDY3IDI2TDEwIDI0LjU5MzNMMjIuNjAzOSAxMS45ODk0TDE0Ljc0NiAxMS45ODk0VjEwWiIgZmlsbD0iQ3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=){._a6er ._a6et ._a6er ._a6et}

**Minimal Video Pairs (MVPBench)** measures the physical understanding abilities of video-language models via multiple choice questions. Unlike other video question-answering benchmarks in the literature, MVPBench is designed to mitigate common shortcut solutions that have been observed in video-language models, such as relying on superficial visual or textual cues and biases. Each example in MVPBench has a minimal-change pair: a visually similar video together with the same question but with an opposing answer. In order to get credit for one example, a model must also get its minimal-change pair correct.

![](/images/about/video_error.png){._as1d}

Download Minimal Video Pairs (MVPBench):

[](https://github.com/facebookresearch/minimal_video_pairs){#u_0_p_Jr ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

GitHub![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMzYiIHZpZXdib3g9IjAgMCAzNiAzNiIgd2lkdGg9IjM2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjk1MDIgMTUuNDY0NUwxMy43NTc5IDIzLjY1NjlDMTMuMzY3NCAyNC4wNDc1IDEyLjczNDIgMjQuMDQ3NSAxMi4zNDM3IDIzLjY1NjlDMTEuOTUzMiAyMy4yNjY0IDExLjk1MzIgMjIuNjMzMyAxMi4zNDM3IDIyLjI0MjdMMjAuNTM2IDE0LjA1MDNIMTUuODc5MkMxNS4zMjY5IDE0LjA1MDMgMTQuODc5MiAxMy42MDI2IDE0Ljg3OTIgMTMuMDUwM0MxNC44NzkyIDEyLjQ5OCAxNS4zMjY5IDEyLjA1MDMgMTUuODc5MiAxMi4wNTAzSDIyLjk1MDJDMjMuNTAyNSAxMi4wNTAzIDIzLjk1MDIgMTIuNDk4IDIzLjk1MDIgMTMuMDUwM1YyMC4xMjE0QzIzLjk1MDIgMjAuNjczNyAyMy41MDI1IDIxLjEyMTQgMjIuOTUwMiAyMS4xMjE0QzIyLjM5OCAyMS4xMjE0IDIxLjk1MDIgMjAuNjczNyAyMS45NTAyIDIwLjEyMTRWMTUuNDY0NVoiIGZpbGw9IkN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){._a6er ._a6et ._a6er ._a6et}

[](https://huggingface.co/datasets/facebook/minimal_video_pairs){#u_0_q_dI ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

Hugging Face![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMzYiIHZpZXdib3g9IjAgMCAzNiAzNiIgd2lkdGg9IjM2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjk1MDIgMTUuNDY0NUwxMy43NTc5IDIzLjY1NjlDMTMuMzY3NCAyNC4wNDc1IDEyLjczNDIgMjQuMDQ3NSAxMi4zNDM3IDIzLjY1NjlDMTEuOTUzMiAyMy4yNjY0IDExLjk1MzIgMjIuNjMzMyAxMi4zNDM3IDIyLjI0MjdMMjAuNTM2IDE0LjA1MDNIMTUuODc5MkMxNS4zMjY5IDE0LjA1MDMgMTQuODc5MiAxMy42MDI2IDE0Ljg3OTIgMTMuMDUwM0MxNC44NzkyIDEyLjQ5OCAxNS4zMjY5IDEyLjA1MDMgMTUuODc5MiAxMi4wNTAzSDIyLjk1MDJDMjMuNTAyNSAxMi4wNTAzIDIzLjk1MDIgMTIuNDk4IDIzLjk1MDIgMTMuMDUwM1YyMC4xMjE0QzIzLjk1MDIgMjAuNjczNyAyMy41MDI1IDIxLjEyMTQgMjIuOTUwMiAyMS4xMjE0QzIyLjM5OCAyMS4xMjE0IDIxLjk1MDIgMjAuNjczNyAyMS45NTAyIDIwLjEyMTRWMTUuNDY0NVoiIGZpbGw9IkN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){._a6er ._a6et ._a6er ._a6et}

[](https://www.arxiv.org/abs/2506.09987){#u_0_r_4C ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

Read the paper![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIHZpZXdib3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NDYgMTBIMjZWMjEuMjU0TDI0LjAzMDEgMjEuMjczNUwyNC4wMjk3IDEzLjM3N0wxMS40MDY3IDI2TDEwIDI0LjU5MzNMMjIuNjAzOSAxMS45ODk0TDE0Ljc0NiAxMS45ODk0VjEwWiIgZmlsbD0iQ3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=){._a6er ._a6et ._a6er ._a6et}

**CausalVQA** measures the ability of video-language models to answer questions related to physical cause-and-effect. The benchmark is designed to focus on causal understanding in physical-world videos, including questions about counterfactuals (*what would have happened if\...*), anticipation (*what might happen next*), and planning (*what action should occur next to accomplish a goal*). We find that while large multimodal models are increasingly capable of answering questions about "what happened" in the video, they still struggle to answer questions about "what could have happened" and "what might happen next," revealing a substantial gap with respect to human performance on predicting how the physical world will likely evolve given the space of actions and events.

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.2365-6/505659190_1076190384571844_1077779805511425455_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=n2h-ii6083UQ7kNvwGDTKEO&_nc_oc=Adon3QzGJ1XaNfCrLtpxa0y0gpsqiOxsQncw8QuG5Ann33L8d5JGMIlNG7gGSRv-ufY&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af3D3DGBnYRcIHvhyc7-fxdm3FlI9SDTijl_hB2meK3Wsw&oe=6A0B59D3){#u_0_s_mP ._as9p ._1-qs ._9mk0 .img style="border-top-left-radius:px;border-top-right-radius:px;border-bottom-left-radius:px;border-bottom-right-radius:px;"}

Download CausalVQA:

[](https://github.com/facebookresearch/CausalVQA){#u_0_t_gc ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

GitHub![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIHZpZXdib3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NDYgMTBIMjZWMjEuMjU0TDI0LjAzMDEgMjEuMjczNUwyNC4wMjk3IDEzLjM3N0wxMS40MDY3IDI2TDEwIDI0LjU5MzNMMjIuNjAzOSAxMS45ODk0TDE0Ljc0NiAxMS45ODk0VjEwWiIgZmlsbD0iQ3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=){._a6er ._a6et ._a6er ._a6et}

[](https://arxiv.org/abs/2506.09943){#u_0_u_rV ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

Read the paper![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIHZpZXdib3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NDYgMTBIMjZWMjEuMjU0TDI0LjAzMDEgMjEuMjczNUwyNC4wMjk3IDEzLjM3N0wxMS40MDY3IDI2TDEwIDI0LjU5MzNMMjIuNjAzOSAxMS45ODk0TDE0Ljc0NiAxMS45ODk0VjEwWiIgZmlsbD0iQ3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=){._a6er ._a6et ._a6er ._a6et}

We're also publishing a Leaderboard on Hugging Face to help the community track model progress against these new benchmarks.

[](https://huggingface.co/spaces/facebook/physical_reasoning_leaderboard){#u_0_v_mn ._a6rw ._a6ee ._a6ep ._a6eo ._a6hq ._a6ej lnfb-mode="ie" ms="{\"creative\":\"click_external\"}" ms-clickable="true" rel="noreferrer noopener" style="" target="_blank"}

View the Hugging Face Leaderboard![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZXIgX2E2ZXQgX2E2ZXIgX2E2ZXQiIGZpbGw9Im5vbmUiIGhlaWdodD0iMzYiIHZpZXdib3g9IjAgMCAzNiAzNiIgd2lkdGg9IjM2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjk1MDIgMTUuNDY0NUwxMy43NTc5IDIzLjY1NjlDMTMuMzY3NCAyNC4wNDc1IDEyLjczNDIgMjQuMDQ3NSAxMi4zNDM3IDIzLjY1NjlDMTEuOTUzMiAyMy4yNjY0IDExLjk1MzIgMjIuNjMzMyAxMi4zNDM3IDIyLjI0MjdMMjAuNTM2IDE0LjA1MDNIMTUuODc5MkMxNS4zMjY5IDE0LjA1MDMgMTQuODc5MiAxMy42MDI2IDE0Ljg3OTIgMTMuMDUwM0MxNC44NzkyIDEyLjQ5OCAxNS4zMjY5IDEyLjA1MDMgMTUuODc5MiAxMi4wNTAzSDIyLjk1MDJDMjMuNTAyNSAxMi4wNTAzIDIzLjk1MDIgMTIuNDk4IDIzLjk1MDIgMTMuMDUwM1YyMC4xMjE0QzIzLjk1MDIgMjAuNjczNyAyMy41MDI1IDIxLjEyMTQgMjIuOTUwMiAyMS4xMjE0QzIyLjM5OCAyMS4xMjE0IDIxLjk1MDIgMjAuNjczNyAyMS45NTAyIDIwLjEyMTRWMTUuNDY0NVoiIGZpbGw9IkN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){._a6er ._a6et ._a6er ._a6et}

## Next steps along the path to advanced machine intelligence {#next-steps-along-the-path-to-advanced-machine-intelligence ._a92o ._a5e5 ._a5w7}

There are several areas we plan to explore further as we continue our work on world models. Currently, V-JEPA 2 learns and makes predictions at a single time scale. However, many tasks require planning across multiple time scales. Think of breaking down a high-level task into smaller steps, such as loading the dishwasher or baking a cake. We want to focus on training hierarchical JEPA models that are capable of learning, reasoning, and planning across multiple temporal and spatial scales. Another important direction will be multimodal JEPA models that can make predictions using a variety of senses, including vision, audio, and touch. As always, we look forward to sharing more in the future and continuing the important discussions we're having with the research community.

Our latest updates delivered to your inbox

[Subscribe](https://ai.facebook.com/subscribe/){target="_blank"} to our newsletter to keep up with Meta AI news, events, research breakthroughs, and more.

## Join us in the pursuit of what's possible with AI. {#join-us-in-the-pursuit-of-whats-possible-with-ai. ._a92o ._a5e5 ._a5wf ._a5ct style="color:#FFFFFF;"}

[![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iX2E2ZW4iIGZpbGw9Im5vbmUiIHZpZXdib3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOSAzN0M5LjA1ODg3IDM3IDEgMjguOTQxMSAxIDE5QzEgOS4wNTg4NyA5LjA1ODg3IDEgMTkgMUMyOC45NDExIDEgMzcgOS4wNTg4NyAzNyAxOUMzNyAyOC45NDExIDI4Ljk0MTEgMzcgMTkgMzdaIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjRkZGRkZGIj48L3BhdGg+PHBhdGggY2xhc3M9Il9hcmMzIiBkPSJNMTYuMzEwMiAxMi4yNzA3TDI2LjE1NzQgMTIuMjcwN0wyNi4xNTc0IDIyLjExNzlMMjQuNDMzOCAyMi4xMzVMMjQuNDMzNSAxNS4yMjU2TDEzLjM4ODMgMjYuMjcwN0wxMi4xNTc0IDI1LjAzOThMMjMuMTg1OCAxNC4wMTE0TDE2LjMxMDIgMTQuMDExNUwxNi4zMTAyIDEyLjI3MDdaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+PHBhdGggY2xhc3M9Il9hcmM0IiBkPSJNMTYuMzEwMiAxMi4yNzA3TDI2LjE1NzQgMTIuMjcwN0wyNi4xNTc0IDIyLjExNzlMMjQuNDMzOCAyMi4xMzVMMjQuNDMzNSAxNS4yMjU2TDEzLjM4ODMgMjYuMjcwN0wxMi4xNTc0IDI1LjAzOThMMjMuMTg1OCAxNC4wMTE0TDE2LjMxMDIgMTQuMDExNUwxNi4zMTAyIDEyLjI3MDdaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+PC9zdmc+){._a6en}See all open positions](https://www.metacareers.com/jobs/?is_leadership=0&sub_teams%5B0%5D=Artificial+Intelligence&is_in_page=0&fbclid=IwAR0O8BF7opOj5gASJmwYVGalPPXTLu-6xrl9w00eC7Rarp2HQ9uEH8tERFw){._a6rw ._a6ee ._a6em ._ae82 ._a6ek aria-label="Link to Meta Careers in AI(opens in new tab)" lnfb-mode="ie" ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"blog_template_careers_cta\"}" ms-clickable="true" rel="noreferrer noopener" style="color:#FFFFFF;" target="_blank"}

</div>

</div>

::: {._8za3 ms="{\"creative\":\"section\",\"creative_detail\":\"section\",\"create_type\":\"section\",\"create_type_detail\":\"section\"}"}

[[Our approach]{._8x6t ._8x94 ._8w61 ._8w6h}](/about){#u_0_x_nh ._8xc5 ._8x97 ._8w61 ._7ot6 ._8-c1 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"our-approach\",\"create_type\":\"our-approach\",\"create_type_detail\":\"click_footer\"}"}

[[About AI at Meta]{._8x6t ._8x94 ._8w61 ._8w6h}](/about){#u_0_11_/V ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"our-approach_about-ai-at-meta\",\"create_type\":\"our-approach_about-ai-at-meta\",\"create_type_detail\":\"click_footer\"}"}

[[People]{._8x6t ._8x94 ._8w61 ._8w6h}](/results/?content_types%5B0%5D=person&sort_by=random){#u_0_12_x9 ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"our-approach_people\",\"create_type\":\"our-approach_people\",\"create_type_detail\":\"click_footer\"}"}

[[Careers]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.metacareers.com/jobs/?is_leadership=0&sub_teams%5B0%5D=Artificial%20Intelligence&is_in_page=0){#u_0_13_sC ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 lnfb-mode="ie" ms="{\"creative\":\"click_footer\",\"creative_detail\":\"our-approach_careers\",\"create_type\":\"our-approach_careers\",\"create_type_detail\":\"click_footer\"}" target="_blank"}

[[Research]{._8x6t ._8x94 ._8w61 ._8w6h}](/research){#u_0_15_TC ._8xc5 ._8x97 ._8w61 ._7ot6 ._8-c1 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"research\",\"create_type\":\"research\",\"create_type_detail\":\"click_footer\"}"}

[[Infrastructure]{._8x6t ._8x94 ._8w61 ._8w6h}](/infrastructure){#u_0_19_x6 ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"research_infra\",\"create_type\":\"research_infra\",\"create_type_detail\":\"click_footer\"}"}

[[Resources]{._8x6t ._8x94 ._8w61 ._8w6h}](/resources){#u_0_1a_bV ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"research_resources\",\"create_type\":\"research_resources\",\"create_type_detail\":\"click_footer\"}"}

[[Demos]{._8x6t ._8x94 ._8w61 ._8w6h}](https://aidemos.meta.com/){#u_0_1b_wA ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 lnfb-mode="ie" ms="{\"creative\":\"click_footer\",\"creative_detail\":\"research_Demos\",\"create_type\":\"research_Demos\",\"create_type_detail\":\"click_footer\"}" target="_blank"}

[[Meta AI]{._8x6t ._8x94 ._8w61 ._8w6h}](/meta-ai/){#u_0_1d_Bs ._8xc5 ._8x97 ._8w61 ._7ot6 ._8-c1 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"meta-ai_footer\",\"create_type\":\"meta-ai_footer\",\"create_type_detail\":\"click_footer\"}"}

[[Explore Meta AI]{._8x6t ._8x94 ._8w61 ._8w6h}](/meta-ai/){#u_0_1h_K8 ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"meta-ai_footer_overview\",\"create_type\":\"meta-ai_footer_overview\",\"create_type_detail\":\"click_footer\"}"}

[[Get Meta AI]{._8x6t ._8x94 ._8w61 ._8w6h}](/get-meta-ai/){#u_0_1i_m9 ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"meta-ai_footer_discover\",\"create_type\":\"meta-ai_footer_discover\",\"create_type_detail\":\"click_footer\"}"}

[[AI Studio]{._8x6t ._8x94 ._8w61 ._8w6h}](/ai-studio/){#u_0_1j_jk ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"meta-ai_footer_ai_studio\",\"create_type\":\"meta-ai_footer_ai_studio\",\"create_type_detail\":\"click_footer\"}"}

[[Latest news]{._8x6t ._8x94 ._8w61 ._8w6h}](/blog){#u_0_1l_N/ ._8xc5 ._8x97 ._8w61 ._7ot6 ._8-c1 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"latest-news\",\"create_type\":\"latest-news\",\"create_type_detail\":\"click_footer\"}"}

[[Blog]{._8x6t ._8x94 ._8w61 ._8w6h}](/blog){#u_0_1p_so ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"latest-news_blog\",\"create_type\":\"latest-news_blog\",\"create_type_detail\":\"click_footer\"}"}

[[Newsletter]{._8x6t ._8x94 ._8w61 ._8w6h}](/subscribe){#u_0_1q_pq ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 ms="{\"creative\":\"click_footer\",\"creative_detail\":\"latest-news_newsletter\",\"create_type\":\"latest-news_newsletter\",\"create_type_detail\":\"click_footer\"}"}

Foundational models

[[Llama]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.llama.com/){#u_0_1v_fr ._8xc5 ._8y8i ._8x97 ._8w61 ._7f94 lnfb-mode="ie" ms="{\"creative\":\"click_footer\",\"creative_detail\":\"foundational-models_meta-llama\",\"create_type\":\"foundational-models_meta-llama\",\"create_type_detail\":\"click_footer\"}" target="_blank"}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.2365-6/87524316_2677189655726266_6338721200264445952_n.svg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=ccM6rQVhEzgQ7kNvwECJqN9&_nc_oc=Adre1uviqwWfR1F33kIo26Djwru3q5eYltqxb1u_3NBhnVsVN0bAvhCiI2z4LkqNFsw&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af3ph7AZGBPAk6FSSlPPrIP0-N8xzWlVOTq88htSYLS13g&oe=6A0B3D78){#u_0_1w_OF ._8zlc ._7f2d ._8-b- ._8-b- .img}

<div>

</div>

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.facebook.com/aiatmeta/){#u_0_1y_tL ._8xc5 ._8y8i ._8x97 ._8w61 ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_facebook\",\"create_type\":\"footer_facebook\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335682312_964107378293184_3093631164486164913_n.svg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=rkSQ6ynucYAQ7kNvwH1DjLX&_nc_oc=Adp1DyfYADsjXEzooTU6HeypN5kwt4xXCGGkpXJTaPh-GbqJFponIt34iM2T8Tw7N3s&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1aVZ5sfbKfdoUZZohE17m-wvLueAK7Phqo0DBCRGatZA&oe=69F6C3E7){._8zlc ._7f2d .img}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335682312_964107378293184_3093631164486164913_n.svg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=rkSQ6ynucYAQ7kNvwH1DjLX&_nc_oc=Adp1DyfYADsjXEzooTU6HeypN5kwt4xXCGGkpXJTaPh-GbqJFponIt34iM2T8Tw7N3s&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1aVZ5sfbKfdoUZZohE17m-wvLueAK7Phqo0DBCRGatZA&oe=69F6C3E7){._8zlc ._7f2d .img}

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://twitter.com/aiatmeta/){#u_0_1z_9N ._8xc5 ._8y8i ._8x97 ._8w61 lnfb-mode="ie" ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_twitter\",\"create_type\":\"footer_twitter\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336009607_1870102080040414_6753977241281150924_n.svg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=KnNzzp1IelAQ7kNvwGnfcuF&_nc_oc=Adq0-h-pGTEcQzzh27SYSU4bN_yMh-03nX8X_iyAf1r23wWl36BwKbrRyUwu6cFT3uQ&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1vSxvgU04srJuBOn_Ld-EKYhGNK-CpnPCCI54JpvfpAA&oe=69F6F462){._8zlc ._7f2d .img}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336009607_1870102080040414_6753977241281150924_n.svg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=KnNzzp1IelAQ7kNvwGnfcuF&_nc_oc=Adq0-h-pGTEcQzzh27SYSU4bN_yMh-03nX8X_iyAf1r23wWl36BwKbrRyUwu6cFT3uQ&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1vSxvgU04srJuBOn_Ld-EKYhGNK-CpnPCCI54JpvfpAA&oe=69F6F462){._8zlc ._7f2d .img}

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.linkedin.com/showcase/aiatmeta){#u_0_20_tJ ._8xc5 ._8y8i ._8x97 ._8w61 lnfb-mode="ie" ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_linkedin\",\"create_type\":\"footer_linkedin\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336289415_1541032296405649_2165099305308791297_n.svg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=sKYKSnRGNV0Q7kNvwGKGHsV&_nc_oc=Adq-ma2kHXh36m74x6nOon24pmnqcoDCLkqFju0EZ5Q7NVClPVBdsMMYKGke8J_dXm0&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af2UNOjOKl_sqvZ-ktZ6faHWOLv1VaYCUyP2q2MWQSnmDA&oe=69F6E7FB){._8zlc ._7f2d .img}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336289415_1541032296405649_2165099305308791297_n.svg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=sKYKSnRGNV0Q7kNvwGKGHsV&_nc_oc=Adq-ma2kHXh36m74x6nOon24pmnqcoDCLkqFju0EZ5Q7NVClPVBdsMMYKGke8J_dXm0&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af2UNOjOKl_sqvZ-ktZ6faHWOLv1VaYCUyP2q2MWQSnmDA&oe=69F6E7FB){._8zlc ._7f2d .img}

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.youtube.com/@aiatmeta){#u_0_21_/H ._8xc5 ._8y8i ._8x97 ._8w61 lnfb-mode="ie" ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_youtube\",\"create_type\":\"footer_youtube\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335648731_142576991793348_7786819189843639239_n.svg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wWtOlvHWtrsQ7kNvwG8o9X2&_nc_oc=AdptVksF5JZrOAZ8ZB1CSiBGxEmCZtOvlEdwjCKO_XamLOgt-W7iAhOxA2r8FGhygkU&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af08JDk3JkohhnG1PQFLVJNl06ZhOpkXBmQvpAFY-MqA5g&oe=69F6C92E){._8zlc ._7f2d .img}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335648731_142576991793348_7786819189843639239_n.svg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wWtOlvHWtrsQ7kNvwG8o9X2&_nc_oc=AdptVksF5JZrOAZ8ZB1CSiBGxEmCZtOvlEdwjCKO_XamLOgt-W7iAhOxA2r8FGhygkU&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af08JDk3JkohhnG1PQFLVJNl06ZhOpkXBmQvpAFY-MqA5g&oe=69F6C92E){._8zlc ._7f2d .img}

::: {._7fbm ms="{\"creative\":\"section\",\"creative_detail\":\"section\",\"create_type\":\"section\",\"create_type_detail\":\"section\"}" style=""}

<div>

Our approach

[[Our approach]{._8x6t ._8x94 ._8w61 ._8w6h}](/about){#u_0_26_n0 ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[About AI at Meta]{._8x6t ._8x94 ._8w61 ._8w6h}](/about){#u_0_27_QM ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[People]{._8x6t ._8x94 ._8w61 ._8w6h}](/results/?content_types%5B0%5D=person&sort_by=random){#u_0_28_sG ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[Careers]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.metacareers.com/jobs/?is_leadership=0&sub_teams%5B0%5D=Artificial%20Intelligence&is_in_page=0){#u_0_29_Qp ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa lnfb-mode="ie" ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}" target="_blank"}

[[Research]{._8x6t ._8x94 ._8w61 ._8w6h}](/research){#u_0_2e_Jr ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[Infrastructure]{._8x6t ._8x94 ._8w61 ._8w6h}](/infrastructure){#u_0_2f_jR ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[Resources]{._8x6t ._8x94 ._8w61 ._8w6h}](/resources){#u_0_2g_sy ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[Demos]{._8x6t ._8x94 ._8w61 ._8w6h}](https://aidemos.meta.com/){#u_0_2h_gy ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa lnfb-mode="ie" ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}" target="_blank"}

Meta AI

[[Meta AI]{._8x6t ._8x94 ._8w61 ._8w6h}](/meta-ai/){#u_0_2m_UU ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[Explore Meta AI]{._8x6t ._8x94 ._8w61 ._8w6h}](/meta-ai/){#u_0_2n_Q/ ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[Get Meta AI]{._8x6t ._8x94 ._8w61 ._8w6h}](/get-meta-ai/){#u_0_2o_j2 ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[AI Studio]{._8x6t ._8x94 ._8w61 ._8w6h}](/ai-studio/){#u_0_2p_Dp ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}

Latest news

[[Latest news]{._8x6t ._8x94 ._8w61 ._8w6h}](/blog){#u_0_2u_sI ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[Blog]{._8x6t ._8x94 ._8w61 ._8w6h}](/blog){#u_0_2v_+X ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}[[Newsletter]{._8x6t ._8x94 ._8w61 ._8w6h}](/subscribe){#u_0_2w_Cm ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}"}

Foundational models

[[Llama]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.llama.com/){#u_0_31_3Y ._8xc5 ._8y8i ._8x97 ._8w61 ._7faa lnfb-mode="ie" ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}" target="_blank"}

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.facebook.com/aiatmeta/){#u_0_32_mJ ._8xc5 ._8y8i ._8x97 ._8w61 ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_facebook\",\"create_type\":\"footer_facebook\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335682312_964107378293184_3093631164486164913_n.svg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=rkSQ6ynucYAQ7kNvwH1DjLX&_nc_oc=Adp1DyfYADsjXEzooTU6HeypN5kwt4xXCGGkpXJTaPh-GbqJFponIt34iM2T8Tw7N3s&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1aVZ5sfbKfdoUZZohE17m-wvLueAK7Phqo0DBCRGatZA&oe=69F6C3E7){._8zlc ._7f2d .img}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335682312_964107378293184_3093631164486164913_n.svg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=rkSQ6ynucYAQ7kNvwH1DjLX&_nc_oc=Adp1DyfYADsjXEzooTU6HeypN5kwt4xXCGGkpXJTaPh-GbqJFponIt34iM2T8Tw7N3s&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1aVZ5sfbKfdoUZZohE17m-wvLueAK7Phqo0DBCRGatZA&oe=69F6C3E7){._8zlc ._7f2d .img}

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://twitter.com/aiatmeta/){#u_0_33_yw ._8xc5 ._8y8i ._8x97 ._8w61 lnfb-mode="ie" ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_twitter\",\"create_type\":\"footer_twitter\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336009607_1870102080040414_6753977241281150924_n.svg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=KnNzzp1IelAQ7kNvwGnfcuF&_nc_oc=Adq0-h-pGTEcQzzh27SYSU4bN_yMh-03nX8X_iyAf1r23wWl36BwKbrRyUwu6cFT3uQ&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1vSxvgU04srJuBOn_Ld-EKYhGNK-CpnPCCI54JpvfpAA&oe=69F6F462){._8zlc ._7f2d .img}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336009607_1870102080040414_6753977241281150924_n.svg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=KnNzzp1IelAQ7kNvwGnfcuF&_nc_oc=Adq0-h-pGTEcQzzh27SYSU4bN_yMh-03nX8X_iyAf1r23wWl36BwKbrRyUwu6cFT3uQ&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1vSxvgU04srJuBOn_Ld-EKYhGNK-CpnPCCI54JpvfpAA&oe=69F6F462){._8zlc ._7f2d .img}

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.linkedin.com/showcase/aiatmeta){#u_0_34_VA ._8xc5 ._8y8i ._8x97 ._8w61 lnfb-mode="ie" ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_linkedin\",\"create_type\":\"footer_linkedin\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336289415_1541032296405649_2165099305308791297_n.svg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=sKYKSnRGNV0Q7kNvwGKGHsV&_nc_oc=Adq-ma2kHXh36m74x6nOon24pmnqcoDCLkqFju0EZ5Q7NVClPVBdsMMYKGke8J_dXm0&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af2UNOjOKl_sqvZ-ktZ6faHWOLv1VaYCUyP2q2MWQSnmDA&oe=69F6E7FB){._8zlc ._7f2d .img}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336289415_1541032296405649_2165099305308791297_n.svg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=sKYKSnRGNV0Q7kNvwGKGHsV&_nc_oc=Adq-ma2kHXh36m74x6nOon24pmnqcoDCLkqFju0EZ5Q7NVClPVBdsMMYKGke8J_dXm0&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af2UNOjOKl_sqvZ-ktZ6faHWOLv1VaYCUyP2q2MWQSnmDA&oe=69F6E7FB){._8zlc ._7f2d .img}

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.youtube.com/@aiatmeta){#u_0_35_FC ._8xc5 ._8y8i ._8x97 ._8w61 lnfb-mode="ie" ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_youtube\",\"create_type\":\"footer_youtube\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335648731_142576991793348_7786819189843639239_n.svg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wWtOlvHWtrsQ7kNvwG8o9X2&_nc_oc=AdptVksF5JZrOAZ8ZB1CSiBGxEmCZtOvlEdwjCKO_XamLOgt-W7iAhOxA2r8FGhygkU&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af08JDk3JkohhnG1PQFLVJNl06ZhOpkXBmQvpAFY-MqA5g&oe=69F6C92E){._8zlc ._7f2d .img}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335648731_142576991793348_7786819189843639239_n.svg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wWtOlvHWtrsQ7kNvwG8o9X2&_nc_oc=AdptVksF5JZrOAZ8ZB1CSiBGxEmCZtOvlEdwjCKO_XamLOgt-W7iAhOxA2r8FGhygkU&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af08JDk3JkohhnG1PQFLVJNl06ZhOpkXBmQvpAFY-MqA5g&oe=69F6C92E){._8zlc ._7f2d .img}

::: {._8za3 ms="{\"creative\":\"section\",\"creative_detail\":\"section\",\"create_type\":\"section\",\"create_type_detail\":\"section\"}"}

[[Privacy Policy]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.facebook.com/about/privacy/){#u_0_36_Xo ._8xc5 ._8y8i ._8x97 ._8w61 ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}" target="_blank"}

[[Terms]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.facebook.com/policies/){#u_0_37_F9 ._8xc5 ._8y8i ._8x97 ._8w61 ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}" target="_blank"}

[[Cookies]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.facebook.com/policies/cookies/){#u_0_38_48 ._8xc5 ._8y8i ._8x97 ._8w61 ms="{\"creative\":\"link\",\"creative_detail\":\"link\",\"create_type\":\"link\",\"create_type_detail\":\"link\"}" target="_blank"}

Meta © 2026

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.facebook.com/aiatmeta/){#u_0_39_yV ._8xc5 ._8y8i ._8x97 ._8w61 ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_facebook\",\"create_type\":\"footer_facebook\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335682312_964107378293184_3093631164486164913_n.svg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=rkSQ6ynucYAQ7kNvwH1DjLX&_nc_oc=Adp1DyfYADsjXEzooTU6HeypN5kwt4xXCGGkpXJTaPh-GbqJFponIt34iM2T8Tw7N3s&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1aVZ5sfbKfdoUZZohE17m-wvLueAK7Phqo0DBCRGatZA&oe=69F6C3E7){._8zlc ._7f2d .img}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335682312_964107378293184_3093631164486164913_n.svg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=rkSQ6ynucYAQ7kNvwH1DjLX&_nc_oc=Adp1DyfYADsjXEzooTU6HeypN5kwt4xXCGGkpXJTaPh-GbqJFponIt34iM2T8Tw7N3s&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1aVZ5sfbKfdoUZZohE17m-wvLueAK7Phqo0DBCRGatZA&oe=69F6C3E7){._8zlc ._7f2d .img}

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://twitter.com/aiatmeta/){#u_0_3a_29 ._8xc5 ._8y8i ._8x97 ._8w61 lnfb-mode="ie" ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_twitter\",\"create_type\":\"footer_twitter\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336009607_1870102080040414_6753977241281150924_n.svg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=KnNzzp1IelAQ7kNvwGnfcuF&_nc_oc=Adq0-h-pGTEcQzzh27SYSU4bN_yMh-03nX8X_iyAf1r23wWl36BwKbrRyUwu6cFT3uQ&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1vSxvgU04srJuBOn_Ld-EKYhGNK-CpnPCCI54JpvfpAA&oe=69F6F462){._8zlc ._7f2d .img}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336009607_1870102080040414_6753977241281150924_n.svg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=KnNzzp1IelAQ7kNvwGnfcuF&_nc_oc=Adq0-h-pGTEcQzzh27SYSU4bN_yMh-03nX8X_iyAf1r23wWl36BwKbrRyUwu6cFT3uQ&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af1vSxvgU04srJuBOn_Ld-EKYhGNK-CpnPCCI54JpvfpAA&oe=69F6F462){._8zlc ._7f2d .img}

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.linkedin.com/showcase/aiatmeta){#u_0_3b_Go ._8xc5 ._8y8i ._8x97 ._8w61 lnfb-mode="ie" ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_linkedin\",\"create_type\":\"footer_linkedin\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336289415_1541032296405649_2165099305308791297_n.svg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=sKYKSnRGNV0Q7kNvwGKGHsV&_nc_oc=Adq-ma2kHXh36m74x6nOon24pmnqcoDCLkqFju0EZ5Q7NVClPVBdsMMYKGke8J_dXm0&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af2UNOjOKl_sqvZ-ktZ6faHWOLv1VaYCUyP2q2MWQSnmDA&oe=69F6E7FB){._8zlc ._7f2d .img}

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.8562-6/336289415_1541032296405649_2165099305308791297_n.svg?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=sKYKSnRGNV0Q7kNvwGKGHsV&_nc_oc=Adq-ma2kHXh36m74x6nOon24pmnqcoDCLkqFju0EZ5Q7NVClPVBdsMMYKGke8J_dXm0&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af2UNOjOKl_sqvZ-ktZ6faHWOLv1VaYCUyP2q2MWQSnmDA&oe=69F6E7FB){._8zlc ._7f2d .img}

[[]{._8x6t ._8x94 ._8w61 ._8w6h}](https://www.youtube.com/@aiatmeta){#u_0_3c_Hq ._8xc5 ._8y8i ._8x97 ._8w61 lnfb-mode="ie" ms="{\"creative\":\"click_external-link\",\"creative_detail\":\"footer_youtube\",\"create_type\":\"footer_youtube\",\"create_type_detail\":\"click_external-link\"}" rel="noreferrer" target="_blank"}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335648731_142576991793348_7786819189843639239_n.svg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wWtOlvHWtrsQ7kNvwG8o9X2&_nc_oc=AdptVksF5JZrOAZ8ZB1CSiBGxEmCZtOvlEdwjCKO_XamLOgt-W7iAhOxA2r8FGhygkU&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af08JDk3JkohhnG1PQFLVJNl06ZhOpkXBmQvpAFY-MqA5g&oe=69F6C92E){._8zlc ._7f2d .img}

![](https://scontent-sea1-1.xx.fbcdn.net/v/t39.8562-6/335648731_142576991793348_7786819189843639239_n.svg?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wWtOlvHWtrsQ7kNvwG8o9X2&_nc_oc=AdptVksF5JZrOAZ8ZB1CSiBGxEmCZtOvlEdwjCKO_XamLOgt-W7iAhOxA2r8FGhygkU&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=c4uVduhl1Yr55T8rxrVDDQ&_nc_ss=7820f&oh=00_Af08JDk3JkohhnG1PQFLVJNl06ZhOpkXBmQvpAFY-MqA5g&oe=69F6C92E){._8zlc ._7f2d .img}
