---
url: https://blogs.nvidia.com/blog/rtx-ai-garage-gtc-2026-nemoclaw/
title: "RTX PCs and DGX Spark Supercomputers Run AI Agents Locally | NVIDIA Blog"
---

[The paradigm of consumer computing has revolved around the concept of a personal device --- from PCs to smartphones and tablets. Now, generative AI --- particularly OpenClaw --- has introduced a new category: agent computers. These devices, like the NVIDIA DGX Spark desktop AI supercomputer or dedicated NVIDIA RTX PCs, are ideal for running personal agents --- privately and for free. ]{style="font-weight: 400"}

[[NVIDIA GTC]{style="font-weight: 400"}](https://www.nvidia.com/gtc/){target="_blank"}[, running]{style="font-weight: 400"}[ this week, is showcasing a host of agentic AI announcements including:]{style="font-weight: 400"}

-   [New open models for local agents, including NVIDIA Nemotron 3 Nano 4B and Nemotron 3 Super 120B, and optimizations for Qwen 3.5 and Mistral Small 4.]{style="font-weight: 400"}
-   [NVIDIA NemoClaw, an open source stack for OpenClaw that optimizes OpenClaw experiences on NVIDIA devices by increasing security and supporting local models. ]{style="font-weight: 400"}
-   [Easier fine‑tuning with Unsloth Studio]{style="font-weight: 400"} [to further improve open model accuracy for agentic workflows.]{style="font-weight: 400"}

[In-person GTC attendees can swing by the ]{style="font-weight: 400"}[[NVIDIA build-a-claw event]{style="font-weight: 400"}](https://blogs.nvidia.com/blog/gtc-2026-news/#build-a-claw)[ in the GTC Park, running daily through March 19, from 8 a.m.-5 p.m. NVIDIA experts will help guests customize and deploy a proactive, always-on AI assistant using their device of choice. Whether technical or just curious, participants will name their agent, define its personality and grant it access to the tools it needs --- creating a personal assistant reachable from their preferred messaging app.]{style="font-weight: 400"}

## **New Open Models Bring Cloud-Level Quality to Local Agents **

[The next generation of local models --- with increasingly large context windows --- delivers the intelligence to run agents on PC. Combined with richer user context and powerful local tools, these advances are unlocking new possibilities on AI PCs, especially on DGX Spark, with its 128GB of unified memory that supports models with more than 120 billion parameters.]{style="font-weight: 400"}

[**Nemotron 3 Super**](https://blogs.nvidia.com/blog/nemotron-3-super-agentic-ai/)[, released last week, is a 120‑billion‑parameter open model with 12 billion active parameters, designed to run complex agentic AI systems. Nemotron 3 Super is optimal for powering agents on the DGX Spark or NVIDIA RTX PRO workstations. On ]{style="font-weight: 400"}[[PinchBench]{style="font-weight: 400"}](https://pinchbench.com/?score=best){target="_blank"}[ --- a new benchmark for determining how well large language models perform with OpenClaw --- Nemotron 3 Super scored 85.6%, making it the top open model in its class.]{style="font-weight: 400"}

**Mistral Small 4**[, a 119-billion-parameter open model with 6 billion active parameters --- 8 billion including all layers --- unifies the capabilities of Mistral's flagship models. Users now have an ultraefficient model optimized for general chat, coding and agentic tasks.]{style="font-weight: 400"}

[Both of these models run locally on DGX Spark and RTX PRO GPUs.]{style="font-weight: 400"}

[For GeForce RTX users looking for smaller models, ]{style="font-weight: 400"}**Nemotron 3 Nano 4B**[ is the latest model to join the ]{style="font-weight: 400"}[[NVIDIA Nemotron 3 family of open models]{style="font-weight: 400"}](https://nvidianews.nvidia.com/news/nvidia-debuts-nemotron-3-family-of-open-models){target="_blank"}[, providing a compact, capable starting point for building agents and assistants locally on RTX AI PCs. The model is a strong fit for building action-taking conversational personas in games and apps that run on resource-constrained hardware. It's available across any NVIDIA GPU-enabled system and combines state-of-the-art instruction-following and exceptional tool use with minimal VRAM footprint. ]{style="font-weight: 400"}

[In addition, NVIDIA announced optimizations for ]{style="font-weight: 400"}**Alibaba's Qwen 3.5 models**[,]{style="font-weight: 400"} [which have demonstrated outstanding accuracy (]{style="font-weight: 400"}[[27B]{style="font-weight: 400"}](https://huggingface.co/Qwen/Qwen3.5-27B){target="_blank"}[, ]{style="font-weight: 400"}[[9B]{style="font-weight: 400"}](https://huggingface.co/Qwen/Qwen3.5-9B){target="_blank"}[ and ]{style="font-weight: 400"}[[4B]{style="font-weight: 400"}](https://huggingface.co/Qwen/Qwen3.5-4B){target="_blank"}[) and are suited for running local agents on NVIDIA GPUs. The new models natively support vision, multi-token prediction and a large 262,000-token context window. The dense 27-billion-parameter model excels when paired with an RTX 5090 GPU.]{style="font-weight: 400"}

<figure id="attachment_91182" class="wp-caption aligncenter" aria-describedby="caption-attachment-91182" style="width: 1200px">
<a href="https://blogs.nvidia.com/wp-content/uploads/2026/03/rtx-ai-pc-raig-blog-perf-chart-desktop-light@2x.png"><img src="https://blogs.nvidia.com/wp-content/uploads/2026/03/rtx-ai-pc-raig-blog-perf-chart-desktop-light@2x-1680x819.png" class="size-large wp-image-91182" decoding="async" sizes="(max-width: 1200px) 100vw, 1200px" srcset="https://blogs.nvidia.com/wp-content/uploads/2026/03/rtx-ai-pc-raig-blog-perf-chart-desktop-light@2x-1680x819.png 1680w, https://blogs.nvidia.com/wp-content/uploads/2026/03/rtx-ai-pc-raig-blog-perf-chart-desktop-light@2x-960x468.png 960w, https://blogs.nvidia.com/wp-content/uploads/2026/03/rtx-ai-pc-raig-blog-perf-chart-desktop-light@2x-1280x624.png 1280w, https://blogs.nvidia.com/wp-content/uploads/2026/03/rtx-ai-pc-raig-blog-perf-chart-desktop-light@2x-1536x749.png 1536w, https://blogs.nvidia.com/wp-content/uploads/2026/03/rtx-ai-pc-raig-blog-perf-chart-desktop-light@2x-630x307.png 630w, https://blogs.nvidia.com/wp-content/uploads/2026/03/rtx-ai-pc-raig-blog-perf-chart-desktop-light@2x.png 2045w" width="1200" height="585" /></a>
<figcaption><em>All configurations measured using Q4_K_M quantizations BS = 1, ISL = 1024 and OSL = 128 on NVIDIA RTX 5090 and Mac M3 Ultra desktops. Token generation throughput measured on llama.cpp b7789, using the llama-bench tool.</em></figcaption>
</figure>

[Users can try these models today via Ollama, LM Studio and llama.cpp, with accelerated inference powered by RTX GPUs and DGX Spark. Learn more about the latest on ]{style="font-weight: 400"}[[NVIDIA open models]{style="font-weight: 400"}](https://nvidianews.nvidia.com/news/nvidia-expands-open-model-families-to-power-the-next-wave-of-agentic-physical-and-healthcare-ai){target="_blank"}[. ]{style="font-weight: 400"}

## **Faster Creative AI With the Latest RTX-Optimized Models**

[LTX 2.3, Lightricks' state-of-the-art audio-video model, released earlier this month, now has support for ]{style="font-weight: 400"}[[NVFP4]{style="font-weight: 400"}](https://huggingface.co/Lightricks/LTX-2.3-nvfp4){target="_blank"}[ and ]{style="font-weight: 400"}[[FP8]{style="font-weight: 400"}](https://huggingface.co/Lightricks/LTX-2.3-fp8){target="_blank"}[ distilled models, accelerating performance by 2.1x. Learn more about ]{style="font-weight: 400"}[[Lightricks' LTX 2.3 model]{style="font-weight: 400"}](https://ltx.io/model/model-blog/ltx-2-3-release){target="_blank"}[.]{style="font-weight: 400"}

[In addition, Black Forest Lab's FLUX.2 Klein 9B received an update last week, accelerating image editing by up to 2x. NVIDIA has collaborated with Black Forest Labs to release an ]{style="font-weight: 400"}[[FP8 version]{style="font-weight: 400"}](https://huggingface.co/black-forest-labs/FLUX.2-klein-9b-kv){target="_blank"}[, optimized for the fastest performance and optimal memory consumption on RTX GPUs. ]{style="font-weight: 400"}

## **NVIDIA NemoClaw --- NVIDIA Optimizations for OpenClaw**

[AI developers and enthusiasts are buying DGX Spark supercomputers or building dedicated RTX PCs to run autonomous AI agents, such as OpenClaw, that draw context from personal files, apps and workflows and can automate daily tasks. However, as adoption of agentic systems like OpenClaw grows, so do concerns about token costs, as well as security and privacy.]{style="font-weight: 400"}

[To help address these concerns, NVIDIA this week introduced ]{style="font-weight: 400"}[[NemoClaw]{style="font-weight: 400"}](https://www.nvidia.com/en-us/ai/nemoclaw/){target="_blank"}[, an open source stack for OpenClaw that deploys optimizations for OpenClaw on NVIDIA devices. The first features available in NemoClaw are NVIDIA Nemotron open models and the NVIDIA OpenShell runtime. Nemotron local models enable users to run inference locally, which means better privacy and no token costs. OpenShell is the runtime designed for executing claws more safely.]{style="font-weight: 400"}

[Learn more about]{style="font-weight: 400"} [[NemoClaw]{style="font-weight: 400"}](https://nvidianews.nvidia.com/news/nvidia-announces-nemoclaw){target="_blank"}[. Watch the]{style="font-weight: 400"} [[GTC keynote]{style="font-weight: 400"}](https://www.nvidia.com/gtc/keynote/){target="_blank"}[ from NVIDIA founder and CEO Jensen Huang and explore ]{style="font-weight: 400"}[[sessions]{style="font-weight: 400"}](https://www.nvidia.com/gtc/session-catalog/){target="_blank"}*[.]{style="font-weight: 400"}*

## **Fine-Tuning Made Easy With Unsloth Studio**

[As open models make giant leaps, one way of further improving accuracy is fine-tuning, which allows users to customize a model for their own data and use cases. This technique normally requires in-depth technical expertise, coding knowledge and massive amounts of configuration. Unsloth, a leading open source library for model fine-tuning and alignment, today launched Unsloth Studio, an easy-to-use, web-based user interface that simplifies the fine-tuning process for AI enthusiasts and developers.]{style="font-weight: 400"}

[Unsloth Studio offers support for more than 500 AI models. The simple user interface makes the training and fine-tuning process easy: Users can just drop in their dataset, tap the graph-based canvas to generate additional high-quality synthetic data and start the fine-tuning job. It supports quantized low-rank adaptation, low-rank adaptation and full fine-tuning. As the model is being fine-tuned, users can monitor and visualize job progress. Finally, they can export the model into a framework of choice and chat away, all within the same web app. ]{style="font-weight: 400"}

[Unsloth Studio's new interface is built on the Unsloth library, which delivers up to 2x faster training with up to 70% VRAM savings, using custom and specialized GPU kernels. This means that new users can get the most out of their NVIDIA RTX GPUs and DGX Spark, right out of the box. ]{style="font-weight: 400"}

[Try ]{style="font-weight: 400"}[[Unsloth Studio today]{style="font-weight: 400"}](http://github.com/unslothai/unsloth){target="_blank"}[, including with new models like Nemotron 3 Nano 4B and Qwen 3.5. Check out other ]{style="font-weight: 400"}[[RTX AI Garage]{style="font-weight: 400"}](https://blogs.nvidia.com/blog/rtx-ai-garage-fine-tuning-unsloth-dgx-spark/)[ posts for more information on fine-tuning models with NVIDIA GeForce RTX GPUs.]{style="font-weight: 400"}

## **#ICYMI From GTC 2026**

[✨]{style="font-weight: 400"}**RTX AI** **video generation guide featuring RTX Video in ComfyUI:** [Launched at CES earlier this year, the new ]{style="font-weight: 400"}[[RTX AI video generation guide]{style="font-weight: 400"}](https://www.nvidia.com/en-us/geforce/news/rtx-ai-video-generation-guide/){target="_blank"}[ shows creators and enthusiasts how to go from concept to creation using guided text-to-image workflows to produce keyframes for AI-generated videos, then upscale to 4K with RTX Video technology running on local GPUs. Get started with the guide and share creations on social media with #AIonRTX.]{style="font-weight: 400"}

[💿]{style="font-weight: 400"}[**NVIDIA AI for Media**](https://developer.nvidia.com/maxine?sortBy=developer_learning_library%2Fsort%2Ftitle%3Aasc){target="_blank"}[ is a set of high‑performance, easy‑to‑use software development kits that bring NVIDIA Broadcast-class AI effects --- enhanced audio (]{style="font-weight: 400"}[[Linux]{style="font-weight: 400"}](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/maxine/collections/maxine_linux_audio_effects_sdk_collection){target="_blank"}[ or ]{style="font-weight: 400"}[[Windows]{style="font-weight: 400"}](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/maxine/collections/maxine_windows_audio_effects_sdk_collection){target="_blank"}[), ]{style="font-weight: 400"}[[video]{style="font-weight: 400"}](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/maxine/collections/maxine_vfx_sdk){target="_blank"}[ and ]{style="font-weight: 400"}[[augmented-reality]{style="font-weight: 400"}](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/maxine/collections/maxine_ar_sdk){target="_blank"}[ features --- to live media, video conferencing and post‑production workflows. The latest update --- available today --- adds more accurate lip-syncing, multi‑active-speaker detection, faster 4K upscaling on RTX PRO and GeForce RTX 40 and 50 Series GPUs via the RTX Video Super Resolution feature, better background noise reduction and lower latency for the NVIDIA Studio Voice feature.]{style="font-weight: 400"}

[💻 ]{style="font-weight: 400"}[**NVIDIA DLSS 5**](https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games){target="_blank"}[, arriving this fall, delivers an AI-powered breakthrough in visual fidelity for games by infusing pixels with photoreal lighting and materials to bridge the gap between rendering and reality.]{style="font-weight: 400"}

[🤖]{style="font-weight: 400"}**Maxon released Redshift 2026.4**[, introducing a new real-time visualization workflow powered by DLSS to allow architects to walk through projects at interactive speed and quality. "NVIDIA's DLSS technology is a critical component, allowing us to deliver high-quality visuals at interactive speeds," said Philip Losch, chief technology and AI officer at Maxon.]{style="font-weight: 400"}

**🪟Reincubate Camo has added Windows ML on NVIDIA TensorRT RTX EP** [for AI Autotune in its Camo Streamlight app, significantly improving performance on RTX GPUs.]{style="font-weight: 400"}

*[Plug in to NVIDIA AI PC on ]{style="font-weight: 400"}*[*[Facebook]{style="font-weight: 400"}*](https://www.facebook.com/NVIDIA.AI.PC/){target="_blank"}*[, ]{style="font-weight: 400"}*[*[Instagram]{style="font-weight: 400"}*](https://www.instagram.com/nvidia.ai.pc/){target="_blank"}*[, ]{style="font-weight: 400"}*[*[TikTok]{style="font-weight: 400"}*](https://www.tiktok.com/@nvidia_ai_pc){target="_blank"}*[ and ]{style="font-weight: 400"}*[*[X]{style="font-weight: 400"}*](https://x.com/NVIDIA_AI_PC){target="_blank"}*[ --- and stay informed by subscribing to the ]{style="font-weight: 400"}*[*[RTX AI PC newsletter]{style="font-weight: 400"}*](https://www.nvidia.com/en-us/ai-on-rtx/?modal=subscribe-ai){target="_blank"}*[.]{style="font-weight: 400"}*

*[Follow NVIDIA Workstation on ]{style="font-weight: 400"}*[*[LinkedIn]{style="font-weight: 400"}*](https://www.linkedin.com/showcase/3761136/){target="_blank"}*[ and ]{style="font-weight: 400"}*[*[X]{style="font-weight: 400"}*](https://x.com/NVIDIAworkstatn){target="_blank"}*[. ]{style="font-weight: 400"}*

*[See ]{style="font-weight: 400"}*[*[notice]{style="font-weight: 400"}*](https://www.nvidia.com/en-eu/about-nvidia/terms-of-service/){target="_blank"}*[ regarding software product information.]{style="font-weight: 400"}*

-   Categories:
-   [AI](https://blogs.nvidia.com/blog/category/generative-ai/){.whitespace-nowrap .text-xs}

-   Tags:
-   [Agentic AI](https://blogs.nvidia.com/blog/tag/agentic-ai/){.whitespace-nowrap .text-xs}
-   [Artificial Intelligence](https://blogs.nvidia.com/blog/tag/artificial-intelligence/){.whitespace-nowrap .text-xs}
-   [GeForce](https://blogs.nvidia.com/blog/tag/geforce/){.whitespace-nowrap .text-xs}
-   [Generative AI](https://blogs.nvidia.com/blog/tag/generative-ai/){.whitespace-nowrap .text-xs}
-   [GTC 2026](https://blogs.nvidia.com/blog/tag/gtc-2026/){.whitespace-nowrap .text-xs}
-   [NVIDIA RTX](https://blogs.nvidia.com/blog/tag/nvidia-rtx/){.whitespace-nowrap .text-xs}
-   [NVIDIA Studio](https://blogs.nvidia.com/blog/tag/nvidia-studio/){.whitespace-nowrap .text-xs}
-   [RTX AI Garage](https://blogs.nvidia.com/blog/tag/rtx-ai-garage/){.whitespace-nowrap .text-xs}

### Related News {#related-news .related-news-title .nvidia-heading-medium}

![NVIDIA, Ineffable Intelligence Team Up to Build the Future of Reinforcement Learning Infrastructure](https://blogs.nvidia.com/wp-content/uploads/2026/05/agentic-logo-lockup-Ineffable-press-1920x1080-1-300x169.png){.w-full .h-full .object-cover decoding="async" height="169" loading="lazy" sizes="auto, (max-width: 640px) 630px, (min-width: 640px) 300px, 100vw" srcset="https://blogs.nvidia.com/wp-content/uploads/2026/05/agentic-logo-lockup-Ineffable-press-1920x1080-1-300x169.png 300w, https://blogs.nvidia.com/wp-content/uploads/2026/05/agentic-logo-lockup-Ineffable-press-1920x1080-1-960x540.png 960w, https://blogs.nvidia.com/wp-content/uploads/2026/05/agentic-logo-lockup-Ineffable-press-1920x1080-1-1680x945.png 1680w, https://blogs.nvidia.com/wp-content/uploads/2026/05/agentic-logo-lockup-Ineffable-press-1920x1080-1-1280x720.png 1280w, https://blogs.nvidia.com/wp-content/uploads/2026/05/agentic-logo-lockup-Ineffable-press-1920x1080-1-1536x864.png 1536w, https://blogs.nvidia.com/wp-content/uploads/2026/05/agentic-logo-lockup-Ineffable-press-1920x1080-1-scaled.png 2048w, https://blogs.nvidia.com/wp-content/uploads/2026/05/agentic-logo-lockup-Ineffable-press-1920x1080-1-1290x725.png 1290w, https://blogs.nvidia.com/wp-content/uploads/2026/05/agentic-logo-lockup-Ineffable-press-1920x1080-1-630x354.png 630w, https://blogs.nvidia.com/wp-content/uploads/2026/05/agentic-logo-lockup-Ineffable-press-1920x1080-1-400x225.png 400w" width="300"}

[AI Infrastructure](https://blogs.nvidia.com/blog/category/enterprise/){.primary-category-link}

### [NVIDIA, Ineffable Intelligence Team Up to Build the Future of Reinforcement Learning Infrastructure](https://blogs.nvidia.com/blog/ineffable-intelligence-reinforcement-learning-infrastructure/){.text-[16px] .xl:text-[20px]} {#nvidia-ineffable-intelligence-team-up-to-build-the-future-of-reinforcement-learning-infrastructure .related-news-post-title .nvidia-heading-smaller}

May 13, 2026

![OpenAI's New GPT-5.5 Powers Codex on NVIDIA Infrastructure --- and NVIDIA Is Already Putting It to Work](https://blogs.nvidia.com/wp-content/uploads/2026/04/logo-lockup-codex-tech-blog-v-1920x1080-5175350-300x169.png){.w-full .h-full .object-cover decoding="async" height="169" loading="lazy" sizes="auto, (max-width: 640px) 630px, (min-width: 640px) 300px, 100vw" srcset="https://blogs.nvidia.com/wp-content/uploads/2026/04/logo-lockup-codex-tech-blog-v-1920x1080-5175350-300x169.png 300w, https://blogs.nvidia.com/wp-content/uploads/2026/04/logo-lockup-codex-tech-blog-v-1920x1080-5175350-960x540.png 960w, https://blogs.nvidia.com/wp-content/uploads/2026/04/logo-lockup-codex-tech-blog-v-1920x1080-5175350-1680x945.png 1680w, https://blogs.nvidia.com/wp-content/uploads/2026/04/logo-lockup-codex-tech-blog-v-1920x1080-5175350-1280x720.png 1280w, https://blogs.nvidia.com/wp-content/uploads/2026/04/logo-lockup-codex-tech-blog-v-1920x1080-5175350-1536x864.png 1536w, https://blogs.nvidia.com/wp-content/uploads/2026/04/logo-lockup-codex-tech-blog-v-1920x1080-5175350-1290x725.png 1290w, https://blogs.nvidia.com/wp-content/uploads/2026/04/logo-lockup-codex-tech-blog-v-1920x1080-5175350-630x354.png 630w, https://blogs.nvidia.com/wp-content/uploads/2026/04/logo-lockup-codex-tech-blog-v-1920x1080-5175350-400x225.png 400w, https://blogs.nvidia.com/wp-content/uploads/2026/04/logo-lockup-codex-tech-blog-v-1920x1080-5175350.png 1920w" width="300"}

[AI](https://blogs.nvidia.com/blog/category/generative-ai/){.primary-category-link}

### [OpenAI's New GPT-5.5 Powers Codex on NVIDIA Infrastructure --- and NVIDIA Is Already Putting It to Work](https://blogs.nvidia.com/blog/openai-codex-gpt-5-5-ai-agents/){.text-[16px] .xl:text-[20px]} {#openais-new-gpt-5.5-powers-codex-on-nvidia-infrastructure-and-nvidia-is-already-putting-it-to-work .related-news-post-title .nvidia-heading-smaller}

Apr 23, 2026

![NVIDIA and Google Cloud Collaborate to Advance Agentic and Physical AI](https://blogs.nvidia.com/wp-content/uploads/2026/04/google-cloud-nvidia-300x169.jpg){.w-full .h-full .object-cover decoding="async" height="169" loading="lazy" sizes="auto, (max-width: 640px) 630px, (min-width: 640px) 300px, 100vw" srcset="https://blogs.nvidia.com/wp-content/uploads/2026/04/google-cloud-nvidia-300x169.jpg 300w, https://blogs.nvidia.com/wp-content/uploads/2026/04/google-cloud-nvidia-960x540.jpg 960w, https://blogs.nvidia.com/wp-content/uploads/2026/04/google-cloud-nvidia-1680x945.jpg 1680w, https://blogs.nvidia.com/wp-content/uploads/2026/04/google-cloud-nvidia-1280x720.jpg 1280w, https://blogs.nvidia.com/wp-content/uploads/2026/04/google-cloud-nvidia-1536x864.jpg 1536w, https://blogs.nvidia.com/wp-content/uploads/2026/04/google-cloud-nvidia-1290x725.jpg 1290w, https://blogs.nvidia.com/wp-content/uploads/2026/04/google-cloud-nvidia-630x354.jpg 630w, https://blogs.nvidia.com/wp-content/uploads/2026/04/google-cloud-nvidia-400x225.jpg 400w, https://blogs.nvidia.com/wp-content/uploads/2026/04/google-cloud-nvidia.jpg 1920w" width="300"}

[Cloud](https://blogs.nvidia.com/blog/category/enterprise/cloud-2/){.primary-category-link}

### [NVIDIA and Google Cloud Collaborate to Advance Agentic and Physical AI](https://blogs.nvidia.com/blog/google-cloud-agentic-physical-ai-factories/){.text-[16px] .xl:text-[20px]} {#nvidia-and-google-cloud-collaborate-to-advance-agentic-and-physical-ai .related-news-post-title .nvidia-heading-smaller}

Apr 22, 2026

![Rethinking AI TCO: Why Cost per Token Is the Only Metric That Matters](https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-blogheader-token-1920x1080-5144600_HEADLINE.jpg-300x169.jpg){.w-full .h-full .object-cover decoding="async" height="169" loading="lazy" sizes="auto, (max-width: 640px) 630px, (min-width: 640px) 300px, 100vw" srcset="https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-blogheader-token-1920x1080-5144600_HEADLINE.jpg-300x169.jpg 300w, https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-blogheader-token-1920x1080-5144600_HEADLINE.jpg-960x540.jpg 960w, https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-blogheader-token-1920x1080-5144600_HEADLINE.jpg-1680x945.jpg 1680w, https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-blogheader-token-1920x1080-5144600_HEADLINE.jpg-1280x720.jpg 1280w, https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-blogheader-token-1920x1080-5144600_HEADLINE.jpg-1536x864.jpg 1536w, https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-blogheader-token-1920x1080-5144600_HEADLINE.jpg-1290x725.jpg 1290w, https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-blogheader-token-1920x1080-5144600_HEADLINE.jpg-630x354.jpg 630w, https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-blogheader-token-1920x1080-5144600_HEADLINE.jpg-400x225.jpg 400w, https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-blogheader-token-1920x1080-5144600_HEADLINE.jpg.jpg 1920w" width="300"}

[AI Infrastructure](https://blogs.nvidia.com/blog/category/enterprise/){.primary-category-link}

### [Rethinking AI TCO: Why Cost per Token Is the Only Metric That Matters](https://blogs.nvidia.com/blog/lowest-token-cost-ai-factories/){.text-[16px] .xl:text-[20px]} {#rethinking-ai-tco-why-cost-per-token-is-the-only-metric-that-matters .related-news-post-title .nvidia-heading-smaller}

Apr 15, 2026
