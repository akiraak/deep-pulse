---
url: https://blogs.nvidia.com/blog/what-openclaw-agents-mean-for-every-organization/
title: "Nemotron Labs: What OpenClaw Agents Mean for Every Organization | NVIDIA Blog"
---

*[Editor's note: This post is part of the ]{style="font-weight: 400;"}*[*[Nemotron Labs]{style="font-weight: 400;"}*](https://blogs.nvidia.com/blog/tag/nemotron-labs/)*[ blog series, which explores how the latest open models, datasets and training techniques help businesses build specialized AI systems and applications on NVIDIA platforms. Each post highlights practical ways to use an open stack to deliver real value in production --- from transparent research copilots to scalable AI agents.]{style="font-weight: 400;"}*

[By early 2026, the open source project ]{style="font-weight: 400;"}[[OpenClaw]{style="font-weight: 400;"}](https://github.com/openclaw/openclaw){target="_blank"}[ had become a phenomenon. In January, its GitHub star count crossed 100,000 as developer interest surged. Community dashboards and traffic analytics showed more than 2 million visitors in a single week. By March, OpenClaw topped 250,000 stars --- overtaking React to become the most-starred software project on GitHub in just 60 days.]{style="font-weight: 400;"}

![](https://blogs.nvidia.com/wp-content/uploads/2026/04/star-history-chart-nemotron-labs.jpg){.aligncenter .wp-image-92599 .size-full decoding="async" height="316" width="433"}

[Created by ]{style="font-weight: 400;"}[[Peter Steinberger]{style="font-weight: 400;"}](https://x.com/steipete){target="_blank"}[, OpenClaw is a self-hosted, persistent AI assistant designed to run locally or on private servers. The project drew attention for its accessibility and unbounded autonomy: Users could deploy an AI model locally without depending on cloud infrastructure or external application programming interfaces (APIs).]{style="font-weight: 400;"}

[Most ]{style="font-weight: 400;"}[[AI agents]{style="font-weight: 400;"}](https://www.nvidia.com/en-us/glossary/ai-agents/){target="_blank"}[ today are triggered by a prompt, complete a defined task and then stop running. A long-running autonomous agent, or "claw," works differently. These agents run persistently in the background, completing tasks on their own and surfacing only what requires a human decision. They operate on a heartbeat: At regular intervals, they check their task list, evaluate what needs action, and either act or wait for the next cycle.]{style="font-weight: 400;"}

[OpenClaw's rapid adoption also sparked debate. Security researchers raised concerns about how self-hosted AI tools manage sensitive data, authentication and model updates. Others questioned whether local deployments could expose users to new risks --- from unpatched server instances to malicious contributions in community forks. As contributors and maintainers worked to address these issues, OpenClaw's rise prompted a broader conversation across the AI ecosystem about the trade-offs between openness, privacy and safety.]{style="font-weight: 400;"}

[To help enhance the security and robustness of the ]{style="font-weight: 400;"}[[OpenClaw]{style="font-weight: 400;"}](https://openclaw.ai/){target="_blank"}[ project, NVIDIA is collaborating with ]{style="font-weight: 400;"}[[Steinberger]{style="font-weight: 400;"}](https://www.ted.com/talks/peter_steinberger_how_i_created_openclaw_the_breakthrough_ai_agent){target="_blank"}[ and the OpenClaw developer community to address potential vulnerabilities, as detailed in a ]{style="font-weight: 400;"}[[recent ]{style="font-weight: 400;"}[blog post ]{style="font-weight: 400;"}[by OpenClaw]{style="font-weight: 400;"}](https://openclaw.ai/blog/openclaw-security-in-public){target="_blank"}[.]{style="font-weight: 400;"}

[NVIDIA contributes code and guidance focused on improving model isolation, better managing local data access and strengthening the processes for verifying community code contributions. The goal is to support the project's momentum by contributing its security and systems expertise in an open, transparent way that strengthens the community's work while preserving OpenClaw's independent governance.]{style="font-weight: 400;"}

[ ]{style="font-weight: 400;"}[To help make long-running agents safer for enterprises, NVIDIA also introduced NVIDIA NemoClaw, a reference implementation that uses a single command to install OpenClaw, the NVIDIA OpenShell secure runtime and NVIDIA Nemotron open models with hardened defaults for networking, data access and security. NemoClaw serves as a blueprint for organizations to deploy claws more securely.]{style="font-weight: 400;"}

## **Inference Demand Multiplies With Each AI Wave**

[AI has moved through four phases, and the time between each is shortening. Predictive AI took years to become mainstream. ]{style="font-weight: 400;"}[[Generative AI]{style="font-weight: 400;"}](https://www.nvidia.com/en-us/glossary/generative-ai/){target="_blank"}[ moved faster. ]{style="font-weight: 400;"}[[Reasoning AI]{style="font-weight: 400;"}](https://www.nvidia.com/en-us/glossary/ai-reasoning/){target="_blank"}[ arrived faster still. Autonomous AI --- the wave OpenClaw represents --- is setting an even faster pace.]{style="font-weight: 400;"}

[What compounds with each wave is ]{style="font-weight: 400;"}[[inference]{style="font-weight: 400;"}](https://www.nvidia.com/en-us/glossary/ai-inference/){target="_blank"}[ demand. Generative AI increased ]{style="font-weight: 400;"}[[token]{style="font-weight: 400;"}](https://blogs.nvidia.com/blog/ai-tokens-explained/)[ usage over predictive AI. Reasoning AI increased it another 100x. Autonomous agents, which run continuously and act across long time horizons, drive inference demand up by another 1,000x over reasoning AI. Each wave multiplies the compute required.]{style="font-weight: 400;"}

![](https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-demand-graphic-nemotron-labs-960x367.jpg){.aligncenter .size-medium .wp-image-92602 decoding="async" height="367" loading="lazy" sizes="auto, (max-width: 960px) 100vw, 960px" srcset="https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-demand-graphic-nemotron-labs-960x367.jpg 960w, https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-demand-graphic-nemotron-labs-630x241.jpg 630w, https://blogs.nvidia.com/wp-content/uploads/2026/04/inference-demand-graphic-nemotron-labs.jpg 1210w" width="960"}

[This increase in token usage is enabling organizations to speed their productivity by orders of magnitude. For example, long-running agents can help researchers work through a problem overnight, iterate on a design across thousands of configurations, or monitor systems and surface only the anomalies that require human judgment --- freeing up researchers' work days for higher-value tasks.]{style="font-weight: 400;"}

## **Choosing the Tool: When to Deploy a 'Claw'**

[While generative AI has become a staple for on-demand tasks, there are specific scenarios where the persistent "heartbeat" of a claw offers distinct advantages. Determining when to move from a standard prompt-based AI to a long-running agent often comes down to the nature of the workflow:]{style="font-weight: 400;"}

-   **From "On-Demand" to "Always-On":**[ While standard models are excellent for immediate, human-triggered queries, claws are often better suited for tasks that require continuous background monitoring or periodic system checks without a manual start.]{style="font-weight: 400;"}
-   **Managing High-Iteration Loops:** [For complex problems, like testing thousands of chemical combinations or simulating infrastructure stress tests, a claw can manage the sheer volume of iterations that might otherwise be bottlenecked by human intervention.]{style="font-weight: 400;"}
-   **Shifting from Suggestions to Actions**[: In many workflows, standard AI is used to provide information or drafts. A claw is often considered when the goal is for the AI to move into the execution phase --- interacting with APIs, updating databases or managing files across a long time horizon.]{style="font-weight: 400;"}
-   **Resource Optimization:**[ For massive, token-heavy reasoning tasks, deploying a local claw on dedicated hardware like an ]{style="font-weight: 400;"}[[NVIDIA DGX Spark]{style="font-weight: 400;"}](https://www.nvidia.com/en-us/products/workstations/dgx-spark/){target="_blank"}[ personal AI supercomputer allows for more predictable costs and data privacy compared with high-frequency cloud API calls.]{style="font-weight: 400;"}

## **How Are Organizations Using Long-Running Autonomous Agents?**

[The practical applications of long-running autonomous agents span every function and sector.]{style="font-weight: 400;"}

[In financial services, agents continuously monitor trading systems and regulatory feeds, flagging material events before the morning review. In drug discovery, agents sweep new scientific literature, extracting relevant findings and updating internal databases in real time without researcher intervention --- a process that previously took weeks.]{style="font-weight: 400;"}

[In engineering and manufacturing, agents speed problem analysis by testing thousands of parameter combinations, ranking results and flagging the configurations worth examining --- and all this can happen overnight. ]{style="font-weight: 400;"}

[In IT operations, agents diagnose infrastructure incidents, apply known remediations and escalate only the novel problems --- compressing average time to resolution from hours to minutes. At ]{style="font-weight: 400;"}[ServiceNow]{style="font-weight: 400;"}[, AI specialists leveraging Apriel and NVIDIA Nemotron models can resolve 90% of tickets autonomously. ]{style="font-weight: 400;"}

## **How Can Companies Deploy Autonomous Agents Responsibly? **

[Autonomous agents are hands-on. They can send communications, write files, call APIs and update live systems. When an agent produces a wrong action, there are real consequences. Getting the accountability framework right from the start is essential, and organizations deploying autonomous agents in production must treat governance as a first-order requirement.]{style="font-weight: 400;"}

[Organizations need to see what their agents are doing, inspect their reasoning at each step, audit their actions and intervene when needed. ]{style="font-weight: 400;"}

[Organizations deploying autonomous agents responsibly are focused on three priorities: ]{style="font-weight: 400;"}

-   **An open, auditable framework:**[ NemoClaw is built on OpenClaw's MIT licensed codebase, which means organizations own the full agent harness. They can read, fork and modify every layer of how their agents are built and deployed. That transparency enables teams to understand and control the system at the code level. Running open source models like ]{style="font-weight: 400;"}[[NVIDIA Nemotron]{style="font-weight: 400;"}](https://www.nvidia.com/en-us/ai-data-science/foundation-models/nemotron/){target="_blank"}[ locally keeps sensitive workloads, including patient records, legal documents, financial transactions and proprietary research, within the organization's own environment, ensuring that trace data stays under organizational control.]{style="font-weight: 400;"}
-   **Securing the runtime environment:** [[NemoClaw]{style="font-weight: 400;"}](https://www.nvidia.com/en-us/ai/nemoclaw/){target="_blank"}[ runs agents inside ]{style="font-weight: 400;"}[[OpenShell]{style="font-weight: 400;"}](https://blogs.nvidia.com/blog/secure-autonomous-ai-agents-openshell/)[, a sandboxed environment that defines precisely what the agent can and cannot do, enforcing clear permission boundaries from the start. ]{style="font-weight: 400;"}
-   **Local compute:**[ NVIDIA DGX Spark supercomputers deliver data-center-class GPU performance in a deskside form factor built for continuous local inference that's always on, with local model hosting and data that stays within the organization's environment. ]{style="font-weight: 400;"}[[NVIDIA DGX Station]{style="font-weight: 400;"}](https://www.nvidia.com/en-us/products/workstations/dgx-station/){target="_blank"}[ systems scale that capability for teams running multiple agents simultaneously across complex, sustained workloads. ]{style="font-weight: 400;"}

[The organizations defining what autonomous agents do in practice are accumulating something valuable: months of live operational learning, governance frameworks developed through real workloads and agents that have absorbed the institutional context that makes them genuinely useful. This foundation will only deepen over time.]{style="font-weight: 400;"}

## **Get Started With NVIDIA NemoClaw**

[Access a step-by-step tutorial on ]{style="font-weight: 400;"}[[how to build a more secure AI agent with NemoClaw on NVIDIA DGX Spark]{style="font-weight: 400;"}](https://developer.nvidia.com/blog/build-a-secure-always-on-local-ai-agent-with-nvidia-nemoclaw-and-openclaw/){target="_blank"}[. Explore how NemoClaw can deploy more secure, always-on AI assistants with a single command.​ ]{style="font-weight: 400;"}

 

[Experiment with NemoClaw, available on ]{style="font-weight: 400;"}[[GitHub]{style="font-weight: 400;"}](https://github.com/NVIDIA/NemoClaw){target="_blank"}[, ]{style="font-weight: 400;"}[and j]{style="font-weight: 400;"}[oin the community of developers on ]{style="font-weight: 400;"}[[Discord]{style="font-weight: 400;"}](https://discord.com/channels/1019361803752456192/1482072289511211200){target="_blank"}[ building with ]{style="font-weight: 400;"}[[NemoClaw using NVIDIA Nemotron 3 Super and Telegram on DGX Spark]{style="font-weight: 400;"}](https://build.nvidia.com/spark/nemoclaw/overview){target="_blank"}[.]{style="font-weight: 400;"}

*[Stay up to date on agentic AI, ]{style="font-weight: 400;"}*[*[NVIDIA Nemotron]{style="font-weight: 400;"}*](https://www.nvidia.com/en-us/ai-data-science/foundation-models/nemotron/){target="_blank"}*[ and more by subscribing to ]{style="font-weight: 400;"}*[*[NVIDIA AI news]{style="font-weight: 400;"}*](https://www.nvidia.com/en-us/executive-insights/generative-ai-tools/?modal=stay-inf){target="_blank"}*[, ]{style="font-weight: 400;"}*[*[joining the community]{style="font-weight: 400;"}*](https://developer.nvidia.com/community){target="_blank"}*[ and following NVIDIA AI on ]{style="font-weight: 400;"}*[*[LinkedIn]{style="font-weight: 400;"}*](https://www.linkedin.com/showcase/nvidia-ai/posts/?feedView=all){target="_blank"}*[, ]{style="font-weight: 400;"}*[*[Instagram]{style="font-weight: 400;"}*](https://www.instagram.com/nvidiaai/?hl=en){target="_blank"}*[, ]{style="font-weight: 400;"}*[*[X]{style="font-weight: 400;"}*](https://x.com/NVIDIAAIDev){target="_blank"}*[ and ]{style="font-weight: 400;"}*[*[Facebook]{style="font-weight: 400;"}*](https://www.facebook.com/NVIDIAAI){target="_blank"}*[.  ]{style="font-weight: 400;"}*

*[Explore ]{style="font-weight: 400;"}*[*[self-paced video tutorials and livestreams]{style="font-weight: 400;"}*](https://youtube.com/playlist?list=PL5B692fm6--vdRKB14FImVi7MTJ77zjn4&feature=shared){target="_blank"}*[.]{style="font-weight: 400;"}*

-   Categories:
-   [AI](https://blogs.nvidia.com/blog/category/generative-ai/){.whitespace-nowrap .text-xs}

-   Tags:
-   [Agentic AI](https://blogs.nvidia.com/blog/tag/agentic-ai/){.whitespace-nowrap .text-xs}
-   [Artificial Intelligence](https://blogs.nvidia.com/blog/tag/artificial-intelligence/){.whitespace-nowrap .text-xs}
-   [Nemotron](https://blogs.nvidia.com/blog/tag/nemotron/){.whitespace-nowrap .text-xs}
-   [Nemotron Labs](https://blogs.nvidia.com/blog/tag/nemotron-labs/){.whitespace-nowrap .text-xs}
-   [Open Source](https://blogs.nvidia.com/blog/tag/open-source/){.whitespace-nowrap .text-xs}

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
