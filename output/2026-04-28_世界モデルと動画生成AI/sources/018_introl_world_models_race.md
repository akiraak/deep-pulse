---
url: https://introl.com/blog/world-models-race-agi-2026
title: "World Models Race 2026 | Introl Blog"
---

<figure class="blog-post-hero">
<img src="/static/images/blog/world-models-race-agi-2026.webp" decoding="async" data-fetchpriority="high" loading="eager" width="800" height="449" alt="World Models Race 2026: How LeCun, DeepMind, and World Labs Are Redefining the Path to AGI" />
</figure>

Three billion dollars in pre-launch valuation for a startup that has not released a single product.^[1](#fn:1){.footnote-ref}^ Yann LeCun\'s AMI Labs represents the largest bet yet on a thesis that has divided AI researchers for years: large language models will never achieve general intelligence, and the path forward runs through world models instead.

## TL;DR

The world models paradigm exploded into mainstream AI development in late 2025 and early 2026. Yann LeCun left Meta after 12 years to launch AMI Labs, raising €500M at a €3B valuation to build AI systems that understand physics rather than just predicting text.^[2](#fn:2){.footnote-ref}^ Google DeepMind released Genie 3, the first real-time interactive world model capable of generating persistent 3D environments at 24 fps.^[3](#fn:3){.footnote-ref}^ Fei-Fei Li\'s World Labs launched Marble, making world model generation commercially available with pricing from free to \$95/month.^[4](#fn:4){.footnote-ref}^ NVIDIA\'s Cosmos platform has seen 2 million downloads as robotics and autonomous vehicle developers embrace synthetic physics-aware training data.^[5](#fn:5){.footnote-ref}^ For organizations building AI infrastructure, world models signal a computational shift from text processing toward video generation, physics simulation, and embodied reasoning.

## The LLM Ceiling

Large language models achieved remarkable capabilities through scale. GPT-4, Claude, and Gemini demonstrate sophisticated reasoning, code generation, and multi-step problem solving.^[6](#fn:6){.footnote-ref}^ Yet a fundamental limitation persists: these models learn statistical patterns from text, not understanding of physical reality.^[7](#fn:7){.footnote-ref}^

Research published in 2024 proved mathematically that LLMs cannot learn all computable functions and will therefore inevitably hallucinate when used as general problem solvers.^[8](#fn:8){.footnote-ref}^ The root cause lies in how LLMs operate: predicting which tokens follow previous tokens based on patterns learned from training data, without any grounding in physical reality.^[9](#fn:9){.footnote-ref}^

### The Hallucination Problem

LLMs generate plausible-sounding text that may describe physically impossible scenarios, historically inaccurate events, or logically inconsistent reasoning.^[10](#fn:10){.footnote-ref}^ Unlike humans who learn about gravity through embodied experience, LLMs only learn that the word \"gravity\" tends to appear near certain other words.^[11](#fn:11){.footnote-ref}^

  Limitation                   Cause                                                              Consequence
  ---------------------------- ------------------------------------------------------------------ ----------------------------------
  Factual hallucination        No verified knowledge base^[12](#fn:12){.footnote-ref}^            Confident fabrication of facts
  Physical reasoning failure   No embodied experience^[13](#fn:13){.footnote-ref}^                Describes impossible physics
  Causal confusion             Pattern matching, not understanding^[14](#fn:14){.footnote-ref}^   Correlation treated as causation
  Temporal incoherence         Sequential token prediction^[15](#fn:15){.footnote-ref}^           Events in impossible order

Yann LeCun has argued publicly for years that scaling LLMs will not produce general intelligence.^[16](#fn:16){.footnote-ref}^ \"LLMs are too limiting,\" LeCun stated in his NVIDIA GTC presentation. \"Scaling them up will not allow us to reach AGI.\"^[17](#fn:17){.footnote-ref}^

The alternative he proposes: world models that learn representations of physical reality, enabling prediction, planning, and reasoning about cause and effect.^[18](#fn:18){.footnote-ref}^

## Yann LeCun\'s AMI Labs

LeCun departed Meta in December 2025 after 12 years, five as founding director of Facebook AI Research (FAIR) and seven as chief AI scientist.^[19](#fn:19){.footnote-ref}^ His new venture, Advanced Machine Intelligence (AMI) Labs, represents the most ambitious attempt yet to commercialize world model research.^[20](#fn:20){.footnote-ref}^

### Funding and Structure

AMI Labs entered funding discussions seeking €500 million at a €3 billion valuation before launching any product.^[21](#fn:21){.footnote-ref}^ The target would represent one of the largest pre-launch raises in AI history, reflecting investor confidence in LeCun\'s vision and track record.^[22](#fn:22){.footnote-ref}^

  Role                 Person        Background
  -------------------- ------------- ---------------------------------------------------------------------
  Executive Chairman   Yann LeCun    Turing Award winner, Meta FAIR founder^[23](#fn:23){.footnote-ref}^
  CEO                  Alex LeBrun   Former CEO of Nabla (medical AI)^[24](#fn:24){.footnote-ref}^

The company plans to establish headquarters in Paris by January 2026.^[25](#fn:25){.footnote-ref}^ While Meta will not invest directly in AMI Labs, the companies plan to forge a partnership allowing LeCun to continue research connections.^[26](#fn:26){.footnote-ref}^

### Technical Vision

AMI Labs aims to create AI systems that understand physics, maintain persistent memory, and plan complex actions rather than simply predicting text sequences.^[27](#fn:27){.footnote-ref}^ LeCun describes a world model as \"your mental model of how the world behaves.\"^[28](#fn:28){.footnote-ref}^

\"You can imagine a sequence of actions you might take, and your world model will allow you to predict what the effect of the sequence of actions will be on the world,\" LeCun explained.^[29](#fn:29){.footnote-ref}^

The approach differs fundamentally from LLMs. Where GPT-style models predict the next word, world models predict the next state of a physical environment given actions taken within it.^[30](#fn:30){.footnote-ref}^ This enables:

-   **Planning**: Simulating outcomes before taking action
-   **Reasoning about physics**: Understanding that objects have mass, momentum, and spatial relationships
-   **Cause-effect understanding**: Learning that actions produce predictable consequences
-   **Persistent memory**: Maintaining consistent world state across time

### I-JEPA Foundation

AMI Labs builds on LeCun\'s I-JEPA (Image Joint Embedding Predictive Architecture) research at Meta.^[31](#fn:31){.footnote-ref}^ I-JEPA learns by predicting representations of image regions from other regions, developing abstract understanding of visual scenes without needing explicit labels.^[32](#fn:32){.footnote-ref}^

The approach parallels how humans develop intuitive physics through observation. A child watching objects fall develops an internal model of gravity without anyone explaining Newton\'s laws.^[33](#fn:33){.footnote-ref}^ I-JEPA and successor architectures aim to replicate this learning process in artificial systems.^[34](#fn:34){.footnote-ref}^

## DeepMind\'s Genie 3

Google DeepMind released Genie 3 in August 2025, representing the first real-time interactive general-purpose world model.^[35](#fn:35){.footnote-ref}^ Unlike previous systems that generated static environments or required significant processing time, Genie 3 produces navigable 3D worlds at 24 frames per second.^[36](#fn:36){.footnote-ref}^

### Technical Capabilities

Genie 3 generates dynamic environments from text prompts, maintaining visual consistency for several minutes of real-time interaction.^[37](#fn:37){.footnote-ref}^ The system does not rely on hard-coded physics engines; instead, the model teaches itself how the world works through training.^[38](#fn:38){.footnote-ref}^

  Capability             Specification
  ---------------------- -----------------------------------------------------------
  Frame rate             24 fps real-time^[39](#fn:39){.footnote-ref}^
  Resolution             720p^[40](#fn:40){.footnote-ref}^
  Consistency duration   Several minutes^[41](#fn:41){.footnote-ref}^
  Memory horizon         Up to 1 minute lookback^[42](#fn:42){.footnote-ref}^
  Physics                Self-learned, not hard-coded^[43](#fn:43){.footnote-ref}^

\"Genie 3 is the first real-time interactive general-purpose world model,\" stated Shlomi Fruchter, research director at DeepMind. \"It goes beyond narrow world models that existed before. It\'s not specific to any particular environment.\"^[44](#fn:44){.footnote-ref}^

### Auto-Regressive Architecture

The model generates one frame at a time, looking back at previously generated content to determine what happens next.^[45](#fn:45){.footnote-ref}^ Achieving real-time performance requires computing this auto-regressive process multiple times per second while maintaining consistency with potentially minute-old visual memory.^[46](#fn:46){.footnote-ref}^

Physical consistency emerges from training rather than explicit programming.^[47](#fn:47){.footnote-ref}^ Genie 3 environments maintain stable physics because the model learned physical regularities from training data, not because researchers manually encoded gravity or collision detection.^[48](#fn:48){.footnote-ref}^

### AGI Implications

DeepMind positions Genie 3 as a stepping stone toward artificial general intelligence.^[49](#fn:49){.footnote-ref}^ The lab expects world model technology to play a critical role as AI agents interact more with physical environments.^[50](#fn:50){.footnote-ref}^

\"Genie 3 marks a major leap toward Artificial General Intelligence by enabling AI agents to \'experience,\' interact with, and learn from richly simulated worlds without manual content creation,\" according to DeepMind\'s announcement.^[51](#fn:51){.footnote-ref}^

### Current Limitations

Genie 3 remains in limited research preview rather than public release.^[52](#fn:52){.footnote-ref}^ Known constraints include:

-   Limited action space for agent interactions
-   Consistency breakdown after several minutes
-   Incomplete real-world geographic accuracy
-   Challenges modeling complex multi-agent interactions

DeepMind continues expanding testing access to selected academics and creators.^[53](#fn:53){.footnote-ref}^

## Fei-Fei Li\'s World Labs and Marble

World Labs, founded by AI pioneer Fei-Fei Li, launched Marble in November 2025 as the first commercially available world model product.^[54](#fn:54){.footnote-ref}^ The startup emerged from stealth with \$230 million in funding just over a year before the Marble launch.^[55](#fn:55){.footnote-ref}^

### Product Architecture

Marble generates persistent, downloadable 3D environments from text prompts, photos, videos, 3D layouts, or panoramic images.^[56](#fn:56){.footnote-ref}^ Unlike competitors that generate worlds on-the-fly during exploration, Marble produces discrete environments that users can edit and export.^[57](#fn:57){.footnote-ref}^

  Input Type    Output
  ------------- ----------------------------
  Text prompt   3D environment
  Photo         3D environment
  Video         3D environment
  3D layout     AI-enhanced 3D environment
  Panorama      3D environment

The platform offers AI-native editing tools and a hybrid 3D editor enabling spatial structure blocking before AI fills visual details.^[58](#fn:58){.footnote-ref}^ Files export in formats compatible with industry-standard tools like Unreal Engine and Unity.^[59](#fn:59){.footnote-ref}^

### Pricing Model

World Labs adopted a freemium structure targeting creative professionals:^[60](#fn:60){.footnote-ref}^

  Tier       Price        Generations   Features
  ---------- ------------ ------------- -------------------
  Free       \$0          4/month       Basic generation
  Standard   \$20/month   12/month      Standard features
  Pro        \$35/month   25/month      Commercial rights
  Max        \$95/month   75/month      Premium features

### Target Applications

Initial use cases focus on gaming, visual effects for film, and virtual reality.^[61](#fn:61){.footnote-ref}^ Marble supports Vision Pro and Quest 3 VR headsets, with every generated world viewable in VR.^[62](#fn:62){.footnote-ref}^

Fei-Fei Li positions Marble as \"the first step toward creating a truly spatially intelligent world model.\"^[63](#fn:63){.footnote-ref}^ Beyond creative applications, the technology enables robotics training through simulated environments that would be expensive or dangerous to create in physical reality.^[64](#fn:64){.footnote-ref}^

## NVIDIA Cosmos: Industrial-Scale World Models

NVIDIA launched Cosmos at CES 2025 as a platform for physical AI development, specifically targeting autonomous vehicles and robotics.^[65](#fn:65){.footnote-ref}^ By January 2026, Cosmos world foundation models had been downloaded over 2 million times.^[66](#fn:66){.footnote-ref}^

### Platform Architecture

Cosmos comprises generative world foundation models, advanced tokenizers, guardrails, and an accelerated video processing pipeline.^[67](#fn:67){.footnote-ref}^ The models predict and generate physics-aware videos of future environment states, enabling synthetic training data generation at massive scale.^[68](#fn:68){.footnote-ref}^

  Model Tier   Optimization                                                Use Case
  ------------ ----------------------------------------------------------- ---------------------------
  Nano         Real-time, edge deployment^[69](#fn:69){.footnote-ref}^     On-device inference
  Super        High performance baseline^[70](#fn:70){.footnote-ref}^      General development
  Ultra        Maximum quality and fidelity^[71](#fn:71){.footnote-ref}^   Custom model distillation

The platform trained on 9,000 trillion tokens from 20 million hours of real-world data spanning human interactions, environments, industrial settings, robotics, and driving scenarios.^[72](#fn:72){.footnote-ref}^

### Industry Adoption

Leading robotics and automotive companies adopted Cosmos for synthetic data generation:^[73](#fn:73){.footnote-ref}^

  Company     Domain
  ----------- ------------------------
  1X          Humanoid robots
  Agility     Bipedal robots
  Figure AI   Humanoid robots
  Waabi       Autonomous trucking
  XPENG       Electric vehicles
  Uber        Ridesharing autonomous

### Cosmos Model Types

Three model types address different physical AI development needs:^[74](#fn:74){.footnote-ref}^

**Cosmos-Predict**: Simulates and predicts future world states in video form **Cosmos-Transfer**: Produces high-quality simulations conditioned on spatial control inputs **Cosmos-Reason**: Reasoning model for physical AI development

NVIDIA released the reasoning model as open and fully customizable, enabling developers to generate diverse training data using text, image, and video prompts.^[75](#fn:75){.footnote-ref}^

## Video Generation as World Simulation

The distinction between video generation and world models has blurred as leading video systems incorporate physics understanding. OpenAI describes Sora as teaching \"AI to understand and simulate the physical world in motion.\"^[76](#fn:76){.footnote-ref}^

### Sora 2 Progress

OpenAI released Sora 2 as a significant advancement in physical understanding.^[77](#fn:77){.footnote-ref}^ Where previous video models \"morphed objects and deformed reality\" to execute prompts, Sora 2 demonstrates physics compliance. A missed basketball shot rebounds off the backboard rather than teleporting to the hoop.^[78](#fn:78){.footnote-ref}^

\"The model\'s \'mistakes\' often appear to be mistakes of the internal agent being modeled,\" OpenAI noted, indicating the system simulates agents operating within physical constraints rather than generating arbitrary visual sequences.^[79](#fn:79){.footnote-ref}^

### Runway\'s World Models Approach

Runway\'s Gen-4.5, released in December 2025, claimed the top position on the Video Arena benchmark, outperforming Google\'s Veo 3 and OpenAI\'s Sora 2 Pro.^[80](#fn:80){.footnote-ref}^ Runway explicitly frames Gen-4.5 as moving beyond \"video generation\" toward \"world models that understand physics.\"^[81](#fn:81){.footnote-ref}^

\"Objects move with realistic weight, momentum and force. Liquids flow with proper dynamics,\" Runway stated.^[82](#fn:82){.footnote-ref}^ The company positions Gen-4.5 as a step toward \"General World Models\" that simulate environments including their physics.^[83](#fn:83){.footnote-ref}^

### Competitive Landscape

  Model        Company    Benchmark Position                                   Physics Focus
  ------------ ---------- ---------------------------------------------------- -------------------------------
  Gen-4.5      Runway     #1 Video Arena^[84](#fn:84){.footnote-ref}^          Explicit world model framing
  Veo 3        Google     #2 Video Arena^[85](#fn:85){.footnote-ref}^          Video generation with physics
  Sora 2 Pro   OpenAI     #7 Video Arena^[86](#fn:86){.footnote-ref}^          World simulation research
  Genie 3      DeepMind   N/A (different focus)^[87](#fn:87){.footnote-ref}^   Real-time interaction

## Applications Beyond Entertainment

World models address critical limitations in training embodied AI systems. Robotics and autonomous vehicles require understanding of physics that cannot be learned from text alone.^[88](#fn:88){.footnote-ref}^

### Robotics Training

Physical robots benefit from training in simulated environments before deployment.^[89](#fn:89){.footnote-ref}^ World models generate diverse scenarios that would be impractical or dangerous to create in reality. A warehouse robot can experience millions of package-handling scenarios in simulation, including edge cases that rarely occur in physical warehouses.^[90](#fn:90){.footnote-ref}^

NVIDIA\'s Cosmos enables developers to \"generate diverse data for training robots at scale using text, image and video prompts.\"^[91](#fn:91){.footnote-ref}^ This synthetic data addresses a fundamental challenge in robotics: unlike language models that can train on internet-scale text, robots have limited physical training data available.^[92](#fn:92){.footnote-ref}^

### Autonomous Vehicles

Autonomous vehicle development requires exposure to scenarios that occur rarely in real driving but must be handled correctly when encountered.^[93](#fn:93){.footnote-ref}^ World models enable generation of:

-   Near-miss collision scenarios
-   Unusual weather conditions
-   Pedestrian behaviors in edge cases
-   Construction zone configurations
-   Emergency vehicle interactions

World models serve as \"learned simulators\" or mental \"what if\" thought experiments for model-based reinforcement learning.^[94](#fn:94){.footnote-ref}^ By incorporating world models into driving systems, developers enable vehicles to understand human decisions and generalize to real-world situations.^[95](#fn:95){.footnote-ref}^

### Scientific Simulation

World models promise impact beyond robotics and vehicles. Applications include:^[96](#fn:96){.footnote-ref}^

-   Molecular structure simulation in chemistry
-   Physical law modeling in physics
-   Climate system prediction
-   Medical procedure training
-   Manufacturing process optimization

Organizations deploying AI infrastructure for world model development can consult [Introl](https://introl.com/coverage-area) for GPU deployment strategies across 257 global locations with 100,000 GPU capability.

## Infrastructure Requirements

World models demand different computational profiles than large language models. Video generation and physics simulation require substantially more compute per inference than text generation.^[97](#fn:97){.footnote-ref}^

### GPU Requirements

World model training involves video data rather than text, dramatically increasing memory and compute requirements.^[98](#fn:98){.footnote-ref}^ A single high-quality video frame contains orders of magnitude more information than a text token. Training on 20 million hours of video, as NVIDIA\'s Cosmos did, requires infrastructure beyond what most organizations can deploy independently.^[99](#fn:99){.footnote-ref}^

  Workload                Typical GPU Requirement
  ----------------------- --------------------------------
  LLM inference           1-8 GPUs per request
  World model inference   8-32 GPUs per request
  LLM training            Hundreds to thousands
  World model training    Thousands to tens of thousands

### Memory Bandwidth

Real-time world model inference at 24 fps requires rapid memory access to maintain consistency with previously generated frames.^[100](#fn:100){.footnote-ref}^ High-bandwidth memory (HBM) GPUs like NVIDIA H200 and B200 offer advantages for workloads that must repeatedly access large visual context windows.^[101](#fn:101){.footnote-ref}^

### Storage Considerations

Video training data consumes storage at rates far exceeding text corpora. A single hour of high-quality video may exceed 100GB uncompressed.^[102](#fn:102){.footnote-ref}^ Organizations building world model training infrastructure must plan for petabyte-scale storage with high-throughput access patterns.^[103](#fn:103){.footnote-ref}^

## The AGI Debate

The world models approach represents a philosophical divergence from the scaling hypothesis that drove LLM development.^[104](#fn:104){.footnote-ref}^ Proponents argue that text prediction cannot produce genuine understanding, while critics question whether learned physics simulations will generalize to novel situations.^[105](#fn:105){.footnote-ref}^

### The LeCun Position

LeCun argues that LLMs represent a dead end for AGI because they lack grounding in physical reality.^[106](#fn:106){.footnote-ref}^ Text-only training produces systems that can discuss physics without understanding physics, describe spatial relationships without perceiving space, and reason about causation without experiencing cause and effect.^[107](#fn:107){.footnote-ref}^

World models, by contrast, learn representations from sensory data and forecast dynamics like motion, force, and spatial relationships.^[108](#fn:108){.footnote-ref}^ This grounding potentially enables robust generalization that text-trained systems cannot achieve.^[109](#fn:109){.footnote-ref}^

### The Scaling Counter-Argument

Some researchers maintain that sufficient scale and architectural improvements can overcome LLM limitations.^[110](#fn:110){.footnote-ref}^ Anthropic CEO Dario Amodei predicted we might have \"a country of geniuses in a datacenter\" as early as 2026, suggesting LLM-derived systems could achieve human-level capability.^[111](#fn:111){.footnote-ref}^

The debate may prove empirical rather than philosophical. If world model companies produce systems that demonstrate reliable physical reasoning while LLMs continue hallucinating impossible physics, the field\'s center of gravity may shift permanently.^[112](#fn:112){.footnote-ref}^

## Key Takeaways

**For infrastructure planners:** - Budget for video-scale compute requirements (8-32x LLM inference) - Prioritize high-bandwidth memory GPUs (H200, B200) for real-time inference - Plan petabyte-scale storage for video training data - Consider NVIDIA Cosmos integration for robotics/AV applications

**For operations teams:** - Evaluate world model APIs for synthetic data generation - Develop expertise in video processing pipelines - Monitor real-time inference latency requirements - Prepare infrastructure for multi-modal workloads

**For strategic planning:** - Track AMI Labs launch for production-ready world models - Assess Genie 3 research access opportunities - Evaluate Marble for creative pipeline integration - Consider world model capabilities in long-term AI roadmaps

**For research teams:** - Experiment with NVIDIA Cosmos for robotics applications - Monitor DeepMind publications on Genie 3 architecture - Evaluate I-JEPA approaches for visual understanding - Compare world model outputs against LLM baselines

## References

------------------------------------------------------------------------

1.  ::: {#fn:1}
    [TechCrunch - Yann LeCun confirms his new \'world model\' startup](https://techcrunch.com/2025/12/19/yann-lecun-confirms-his-new-world-model-startup-reportedly-seeks-5b-valuation/) [↩](#fnref:1 "Jump back to footnote 1 in the text"){.footnote-backref}
    :::

2.  ::: {#fn:2}
    [Sifted - Yann LeCun raising €500m at €3bn valuation](https://sifted.eu/articles/yann-lecun-ami-labs-3bn-valuation) [↩](#fnref:2 "Jump back to footnote 2 in the text"){.footnote-backref}
    :::

3.  ::: {#fn:3}
    [Google DeepMind - Genie 3: A new frontier for world models](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) [↩](#fnref:3 "Jump back to footnote 3 in the text"){.footnote-backref}
    :::

4.  ::: {#fn:4}
    [TechCrunch - Fei-Fei Li\'s World Labs speeds up the world model race with Marble](https://techcrunch.com/2025/11/12/fei-fei-lis-world-labs-speeds-up-the-world-model-race-with-marble-its-first-commercial-product/) [↩](#fnref:4 "Jump back to footnote 4 in the text"){.footnote-backref}
    :::

5.  ::: {#fn:5}
    [NVIDIA Newsroom - Cosmos world foundation models downloaded 2 million times](https://nvidianews.nvidia.com/news/nvidia-announces-major-release-of-cosmos-world-foundation-models-and-physical-ai-data-tools) [↩](#fnref:5 "Jump back to footnote 5 in the text"){.footnote-backref}
    :::

6.  ::: {#fn:6}
    [Sebastian Raschka - The State Of LLMs 2025](https://magazine.sebastianraschka.com/p/state-of-llms-2025) [↩](#fnref:6 "Jump back to footnote 6 in the text"){.footnote-backref}
    :::

7.  ::: {#fn:7}
    [HSToday - The Vast World Beyond Large Language Models](https://www.hstoday.us/featured/the-vast-world-beyond-large-language-models/) [↩](#fnref:7 "Jump back to footnote 7 in the text"){.footnote-backref}
    :::

8.  ::: {#fn:8}
    [arXiv - Hallucination is Inevitable: An Innate Limitation of Large Language Models](https://arxiv.org/abs/2401.11817) [↩](#fnref:8 "Jump back to footnote 8 in the text"){.footnote-backref}
    :::

9.  ::: {#fn:9}
    [Nexla - LLM Hallucination---Types, Causes, and Solutions](https://nexla.com/ai-infrastructure/llm-hallucination/) [↩](#fnref:9 "Jump back to footnote 9 in the text"){.footnote-backref}
    :::

10. ::: {#fn:10}
    [arXiv - A Survey on Hallucination in Large Language Models](https://arxiv.org/abs/2311.05232) [↩](#fnref:10 "Jump back to footnote 10 in the text"){.footnote-backref}
    :::

11. ::: {#fn:11}
    [Medium - Understanding LLM Hallucination and Confabulation](https://codecraftspro.medium.com/understanding-llm-hallucination-and-confabulation-0ff0893884fd) [↩](#fnref:11 "Jump back to footnote 11 in the text"){.footnote-backref}
    :::

12. ::: {#fn:12}
    [Iguazio - What are LLM Hallucinations?](https://www.iguazio.com/glossary/llm-hallucination/) [↩](#fnref:12 "Jump back to footnote 12 in the text"){.footnote-backref}
    :::

13. ::: {#fn:13}
    [ACM - Integration of LLMs and the Physical World](https://dl.acm.org/doi/fullHtml/10.1145/3674399.3674402) [↩](#fnref:13 "Jump back to footnote 13 in the text"){.footnote-backref}
    :::

14. ::: {#fn:14}
    [Medium - LLM Hallucinations Explained](https://medium.com/@nirdiamant21/llm-hallucinations-explained-8c76cdd82532) [↩](#fnref:14 "Jump back to footnote 14 in the text"){.footnote-backref}
    :::

15. ::: {#fn:15}
    [arXiv - LLMs Will Always Hallucinate](https://arxiv.org/html/2409.05746v1) [↩](#fnref:15 "Jump back to footnote 15 in the text"){.footnote-backref}
    :::

16. ::: {#fn:16}
    [Futurism - Large Language Models Will Never Be Intelligent, Expert Says](https://futurism.com/artificial-intelligence/large-language-models-willnever-be-intelligent) [↩](#fnref:16 "Jump back to footnote 16 in the text"){.footnote-backref}
    :::

17. ::: {#fn:17}
    [Medium - Debunking the LLM-to-AGI Misconception](https://medium.com/@aryaroop04/debunking-the-llm-to-agi-misconception-why-current-large-language-models-llms-cannot-achieve-9e6202d3ae5a) [↩](#fnref:17 "Jump back to footnote 17 in the text"){.footnote-backref}
    :::

18. ::: {#fn:18}
    [Forrester - LLMs, Make Room For World Models](https://www.forrester.com/blogs/llms-make-room-for-world-models/) [↩](#fnref:18 "Jump back to footnote 18 in the text"){.footnote-backref}
    :::

19. ::: {#fn:19}
    [Fortune - Yann LeCun is targeting a \$3.5 billion valuation](https://fortune.com/2025/12/19/yann-lecun-ami-labs-ai-startup-valuation-meta-departure/) [↩](#fnref:19 "Jump back to footnote 19 in the text"){.footnote-backref}
    :::

20. ::: {#fn:20}
    [LinkedIn News - AI pioneer Yann LeCun launches new startup](https://www.linkedin.com/news/story/ai-pioneer-yann-lecun-launches-new-startup-6827508/) [↩](#fnref:20 "Jump back to footnote 20 in the text"){.footnote-backref}
    :::

21. ::: {#fn:21}
    [Sifted - AMI Labs funding details](https://sifted.eu/articles/yann-lecun-ami-labs-3bn-valuation) [↩](#fnref:21 "Jump back to footnote 21 in the text"){.footnote-backref}
    :::

22. ::: {#fn:22}
    [TechCrunch - Pre-launch funding scale](https://techcrunch.com/2025/12/19/yann-lecun-confirms-his-new-world-model-startup-reportedly-seeks-5b-valuation/) [↩](#fnref:22 "Jump back to footnote 22 in the text"){.footnote-backref}
    :::

23. ::: {#fn:23}
    [Fortune - LeCun background](https://fortune.com/2025/12/19/yann-lecun-ami-labs-ai-startup-valuation-meta-departure/) [↩](#fnref:23 "Jump back to footnote 23 in the text"){.footnote-backref}
    :::

24. ::: {#fn:24}
    [TechCrunch - Alex LeBrun CEO appointment](https://techcrunch.com/2025/12/19/yann-lecun-confirms-his-new-world-model-startup-reportedly-seeks-5b-valuation/) [↩](#fnref:24 "Jump back to footnote 24 in the text"){.footnote-backref}
    :::

25. ::: {#fn:25}
    [mlq.ai - AMI Labs Paris headquarters](https://mlq.ai/news/yann-lecun-in-talks-to-raise-500m-for-new-ai-startup-at-3b-valuation/) [↩](#fnref:25 "Jump back to footnote 25 in the text"){.footnote-backref}
    :::

26. ::: {#fn:26}
    [Fortune - Meta partnership](https://fortune.com/2025/12/19/yann-lecun-ami-labs-ai-startup-valuation-meta-departure/) [↩](#fnref:26 "Jump back to footnote 26 in the text"){.footnote-backref}
    :::

27. ::: {#fn:27}
    [AI Gopubby - Why Yann LeCun Bet \$3.5 Billion on World Models Over LLMs](https://ai.gopubby.com/why-yann-lecun-bet-3-5-billion-on-world-models-over-llms-e26eefdd900e) [↩](#fnref:27 "Jump back to footnote 27 in the text"){.footnote-backref}
    :::

28. ::: {#fn:28}
    [TechCrunch - LeCun world model definition](https://techcrunch.com/2025/12/19/yann-lecun-confirms-his-new-world-model-startup-reportedly-seeks-5b-valuation/) [↩](#fnref:28 "Jump back to footnote 28 in the text"){.footnote-backref}
    :::

29. ::: {#fn:29}
    [Fortune - World model vision](https://fortune.com/2025/12/19/yann-lecun-ami-labs-ai-startup-valuation-meta-departure/) [↩](#fnref:29 "Jump back to footnote 29 in the text"){.footnote-backref}
    :::

30. ::: {#fn:30}
    [Forrester - World models vs LLMs](https://www.forrester.com/blogs/llms-make-room-for-world-models/) [↩](#fnref:30 "Jump back to footnote 30 in the text"){.footnote-backref}
    :::

31. ::: {#fn:31}
    [Meta AI - I-JEPA: The first AI model based on Yann LeCun\'s vision](https://ai.meta.com/blog/yann-lecun-ai-model-i-jepa/) [↩](#fnref:31 "Jump back to footnote 31 in the text"){.footnote-backref}
    :::

32. ::: {#fn:32}
    [Meta AI - I-JEPA technical approach](https://ai.meta.com/blog/yann-lecun-ai-model-i-jepa/) [↩](#fnref:32 "Jump back to footnote 32 in the text"){.footnote-backref}
    :::

33. ::: {#fn:33}
    [AI Gopubby - Embodied learning comparison](https://ai.gopubby.com/why-yann-lecun-bet-3-5-billion-on-world-models-over-llms-e26eefdd900e) [↩](#fnref:33 "Jump back to footnote 33 in the text"){.footnote-backref}
    :::

34. ::: {#fn:34}
    [Meta AI - I-JEPA learning process](https://ai.meta.com/blog/yann-lecun-ai-model-i-jepa/) [↩](#fnref:34 "Jump back to footnote 34 in the text"){.footnote-backref}
    :::

35. ::: {#fn:35}
    [TechCrunch - DeepMind thinks Genie 3 presents stepping stone towards AGI](https://techcrunch.com/2025/08/05/deepmind-thinks-genie-3-world-model-presents-stepping-stone-towards-agi/) [↩](#fnref:35 "Jump back to footnote 35 in the text"){.footnote-backref}
    :::

36. ::: {#fn:36}
    [Google DeepMind - Genie 3 real-time capability](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) [↩](#fnref:36 "Jump back to footnote 36 in the text"){.footnote-backref}
    :::

37. ::: {#fn:37}
    [Marketing AI Institute - Google DeepMind\'s Genie 3 Virtual World Breakthrough](https://www.marketingaiinstitute.com/blog/google-genie-3) [↩](#fnref:37 "Jump back to footnote 37 in the text"){.footnote-backref}
    :::

38. ::: {#fn:38}
    [Google DeepMind - Self-learned physics](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) [↩](#fnref:38 "Jump back to footnote 38 in the text"){.footnote-backref}
    :::

39. ::: {#fn:39}
    [genie3.net - Frame rate specification](https://genie3.net/) [↩](#fnref:39 "Jump back to footnote 39 in the text"){.footnote-backref}
    :::

40. ::: {#fn:40}
    [Google DeepMind - Resolution specification](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) [↩](#fnref:40 "Jump back to footnote 40 in the text"){.footnote-backref}
    :::

41. ::: {#fn:41}
    [TechCrunch - Consistency duration](https://techcrunch.com/2025/08/05/deepmind-thinks-genie-3-world-model-presents-stepping-stone-towards-agi/) [↩](#fnref:41 "Jump back to footnote 41 in the text"){.footnote-backref}
    :::

42. ::: {#fn:42}
    [Google DeepMind - Memory horizon](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) [↩](#fnref:42 "Jump back to footnote 42 in the text"){.footnote-backref}
    :::

43. ::: {#fn:43}
    [OpenCV - Genie 3 self-learned physics](https://opencv.org/blog/genie-3/) [↩](#fnref:43 "Jump back to footnote 43 in the text"){.footnote-backref}
    :::

44. ::: {#fn:44}
    [TechCrunch - Shlomi Fruchter quote](https://techcrunch.com/2025/08/05/deepmind-thinks-genie-3-world-model-presents-stepping-stone-towards-agi/) [↩](#fnref:44 "Jump back to footnote 44 in the text"){.footnote-backref}
    :::

45. ::: {#fn:45}
    [Google DeepMind - Auto-regressive architecture](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) [↩](#fnref:45 "Jump back to footnote 45 in the text"){.footnote-backref}
    :::

46. ::: {#fn:46}
    [genie3.world - Computational requirements](https://genie3.world/) [↩](#fnref:46 "Jump back to footnote 46 in the text"){.footnote-backref}
    :::

47. ::: {#fn:47}
    [Codecademy - Emergent physics](https://www.codecademy.com/article/googles-genie-3-world-model) [↩](#fnref:47 "Jump back to footnote 47 in the text"){.footnote-backref}
    :::

48. ::: {#fn:48}
    [Google DeepMind - Training approach](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) [↩](#fnref:48 "Jump back to footnote 48 in the text"){.footnote-backref}
    :::

49. ::: {#fn:49}
    [TechCrunch - AGI positioning](https://techcrunch.com/2025/08/05/deepmind-thinks-genie-3-world-model-presents-stepping-stone-towards-agi/) [↩](#fnref:49 "Jump back to footnote 49 in the text"){.footnote-backref}
    :::

50. ::: {#fn:50}
    [Marketing AI Institute - AGI implications](https://www.marketingaiinstitute.com/blog/google-genie-3) [↩](#fnref:50 "Jump back to footnote 50 in the text"){.footnote-backref}
    :::

51. ::: {#fn:51}
    [genie3.net - AGI significance](https://genie3.net/) [↩](#fnref:51 "Jump back to footnote 51 in the text"){.footnote-backref}
    :::

52. ::: {#fn:52}
    [Google DeepMind - Research preview status](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) [↩](#fnref:52 "Jump back to footnote 52 in the text"){.footnote-backref}
    :::

53. ::: {#fn:53}
    [TechCrunch - Access expansion](https://techcrunch.com/2025/08/05/deepmind-thinks-genie-3-world-model-presents-stepping-stone-towards-agi/) [↩](#fnref:53 "Jump back to footnote 53 in the text"){.footnote-backref}
    :::

54. ::: {#fn:54}
    [TechCrunch - World Labs Marble launch](https://techcrunch.com/2025/11/12/fei-fei-lis-world-labs-speeds-up-the-world-model-race-with-marble-its-first-commercial-product/) [↩](#fnref:54 "Jump back to footnote 54 in the text"){.footnote-backref}
    :::

55. ::: {#fn:55}
    [World Labs - Company background](https://www.worldlabs.ai/) [↩](#fnref:55 "Jump back to footnote 55 in the text"){.footnote-backref}
    :::

56. ::: {#fn:56}
    [World Labs - Marble inputs](https://www.worldlabs.ai/blog/marble-world-model) [↩](#fnref:56 "Jump back to footnote 56 in the text"){.footnote-backref}
    :::

57. ::: {#fn:57}
    [BD Tech Talks - Marble differentiation](https://bdtechtalks.substack.com/p/what-to-know-about-world-labs-marble) [↩](#fnref:57 "Jump back to footnote 57 in the text"){.footnote-backref}
    :::

58. ::: {#fn:58}
    [TechCrunch - Editing tools](https://techcrunch.com/2025/11/12/fei-fei-lis-world-labs-speeds-up-the-world-model-race-with-marble-its-first-commercial-product/) [↩](#fnref:58 "Jump back to footnote 58 in the text"){.footnote-backref}
    :::

59. ::: {#fn:59}
    [Fast Company - Export compatibility](https://www.fastcompany.com/91437004/fei-fei-li-world-labs-spatial-ai-mapping-3d) [↩](#fnref:59 "Jump back to footnote 59 in the text"){.footnote-backref}
    :::

60. ::: {#fn:60}
    [World Labs - Marble pricing](https://marble.worldlabs.ai/) [↩](#fnref:60 "Jump back to footnote 60 in the text"){.footnote-backref}
    :::

61. ::: {#fn:61}
    [TIME - Inside Fei-Fei Li\'s Plan to Build AI-Powered Virtual Worlds](https://time.com/7339513/ai-fei-fei-li-virtual-worlds/) [↩](#fnref:61 "Jump back to footnote 61 in the text"){.footnote-backref}
    :::

62. ::: {#fn:62}
    [Analytics India Mag - VR support](https://analyticsindiamag.com/ai-news-updates/fei-fei-lis-world-labs-launches-marble-a-multimodal-3d-world-model-for-public-use/) [↩](#fnref:62 "Jump back to footnote 62 in the text"){.footnote-backref}
    :::

63. ::: {#fn:63}
    [TechCrunch - Li quote](https://techcrunch.com/2025/11/12/fei-fei-lis-world-labs-speeds-up-the-world-model-race-with-marble-its-first-commercial-product/) [↩](#fnref:63 "Jump back to footnote 63 in the text"){.footnote-backref}
    :::

64. ::: {#fn:64}
    [BD Tech Talks - Robotics applications](https://bdtechtalks.substack.com/p/what-to-know-about-world-labs-marble) [↩](#fnref:64 "Jump back to footnote 64 in the text"){.footnote-backref}
    :::

65. ::: {#fn:65}
    [NVIDIA Newsroom - Cosmos launch](https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-world-foundation-model-platform-to-accelerate-physical-ai-development) [↩](#fnref:65 "Jump back to footnote 65 in the text"){.footnote-backref}
    :::

66. ::: {#fn:66}
    [NVIDIA Newsroom - Download statistics](https://nvidianews.nvidia.com/news/nvidia-announces-major-release-of-cosmos-world-foundation-models-and-physical-ai-data-tools) [↩](#fnref:66 "Jump back to footnote 66 in the text"){.footnote-backref}
    :::

67. ::: {#fn:67}
    [NVIDIA - Cosmos platform](https://www.nvidia.com/en-us/ai/cosmos/) [↩](#fnref:67 "Jump back to footnote 67 in the text"){.footnote-backref}
    :::

68. ::: {#fn:68}
    [NVIDIA Technical Blog - WFM capabilities](https://developer.nvidia.com/blog/advancing-physical-ai-with-nvidia-cosmos-world-foundation-model-platform) [↩](#fnref:68 "Jump back to footnote 68 in the text"){.footnote-backref}
    :::

69. ::: {#fn:69}
    [NVIDIA - Nano tier](https://www.nvidia.com/en-us/ai/cosmos/) [↩](#fnref:69 "Jump back to footnote 69 in the text"){.footnote-backref}
    :::

70. ::: {#fn:70}
    [NVIDIA - Super tier](https://www.nvidia.com/en-us/ai/cosmos/) [↩](#fnref:70 "Jump back to footnote 70 in the text"){.footnote-backref}
    :::

71. ::: {#fn:71}
    [NVIDIA - Ultra tier](https://www.nvidia.com/en-us/ai/cosmos/) [↩](#fnref:71 "Jump back to footnote 71 in the text"){.footnote-backref}
    :::

72. ::: {#fn:72}
    [NVIDIA Newsroom - Training data scale](https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-world-foundation-model-platform-to-accelerate-physical-ai-development) [↩](#fnref:72 "Jump back to footnote 72 in the text"){.footnote-backref}
    :::

73. ::: {#fn:73}
    [NVIDIA Newsroom - Industry adoption](https://nvidianews.nvidia.com/news/nvidia-opens-portals-to-world-of-robotics-with-new-omniverse-libraries-cosmos-physical-ai-models-and-ai-computing-infrastructure) [↩](#fnref:73 "Jump back to footnote 73 in the text"){.footnote-backref}
    :::

74. ::: {#fn:74}
    [arXiv - Cosmos model types](https://arxiv.org/abs/2501.03575) [↩](#fnref:74 "Jump back to footnote 74 in the text"){.footnote-backref}
    :::

75. ::: {#fn:75}
    [NVIDIA Blogs - Cosmos open model](https://blogs.nvidia.com/blog/cosmos-world-foundation-models/) [↩](#fnref:75 "Jump back to footnote 75 in the text"){.footnote-backref}
    :::

76. ::: {#fn:76}
    [OpenAI - Video generation models as world simulators](https://openai.com/index/video-generation-models-as-world-simulators/) [↩](#fnref:76 "Jump back to footnote 76 in the text"){.footnote-backref}
    :::

77. ::: {#fn:77}
    [OpenAI - Sora 2 is here](https://openai.com/index/sora-2/) [↩](#fnref:77 "Jump back to footnote 77 in the text"){.footnote-backref}
    :::

78. ::: {#fn:78}
    [OpenAI - Sora 2 physics compliance](https://openai.com/index/sora-2/) [↩](#fnref:78 "Jump back to footnote 78 in the text"){.footnote-backref}
    :::

79. ::: {#fn:79}
    [OpenAI - Agent simulation](https://openai.com/index/sora-2/) [↩](#fnref:79 "Jump back to footnote 79 in the text"){.footnote-backref}
    :::

80. ::: {#fn:80}
    [CNBC - Runway Gen-4.5 benchmark](https://www.cnbc.com/2025/12/01/runway-gen-4-5-video-model-google-open-ai.html) [↩](#fnref:80 "Jump back to footnote 80 in the text"){.footnote-backref}
    :::

81. ::: {#fn:81}
    [WinBuzzer - Runway world models approach](https://winbuzzer.com/2025/12/01/new-runway-gen-4-5-ai-video-model-dethrones-google-veo-3-and-openai-sora-2-xcxwbn/) [↩](#fnref:81 "Jump back to footnote 81 in the text"){.footnote-backref}
    :::

82. ::: {#fn:82}
    [CNBC - Gen-4.5 physics](https://www.cnbc.com/2025/12/01/runway-gen-4-5-video-model-google-open-ai.html) [↩](#fnref:82 "Jump back to footnote 82 in the text"){.footnote-backref}
    :::

83. ::: {#fn:83}
    [WinBuzzer - General World Models goal](https://winbuzzer.com/2025/12/01/new-runway-gen-4-5-ai-video-model-dethrones-google-veo-3-and-openai-sora-2-xcxwbn/) [↩](#fnref:83 "Jump back to footnote 83 in the text"){.footnote-backref}
    :::

84. ::: {#fn:84}
    [CNBC - Gen-4.5 ranking](https://www.cnbc.com/2025/12/01/runway-gen-4-5-video-model-google-open-ai.html) [↩](#fnref:84 "Jump back to footnote 84 in the text"){.footnote-backref}
    :::

85. ::: {#fn:85}
    [CNBC - Veo 3 ranking](https://www.cnbc.com/2025/12/01/runway-gen-4-5-video-model-google-open-ai.html) [↩](#fnref:85 "Jump back to footnote 85 in the text"){.footnote-backref}
    :::

86. ::: {#fn:86}
    [CNBC - Sora 2 Pro ranking](https://www.cnbc.com/2025/12/01/runway-gen-4-5-video-model-google-open-ai.html) [↩](#fnref:86 "Jump back to footnote 86 in the text"){.footnote-backref}
    :::

87. ::: {#fn:87}
    [Google DeepMind - Genie 3 focus](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) [↩](#fnref:87 "Jump back to footnote 87 in the text"){.footnote-backref}
    :::

88. ::: {#fn:88}
    [NVIDIA - World models for physical AI](https://www.nvidia.com/en-us/glossary/world-models/) [↩](#fnref:88 "Jump back to footnote 88 in the text"){.footnote-backref}
    :::

89. ::: {#fn:89}
    [GitHub - Awesome-World-Models robotics applications](https://github.com/leofan90/Awesome-World-Models) [↩](#fnref:89 "Jump back to footnote 89 in the text"){.footnote-backref}
    :::

90. ::: {#fn:90}
    [Research.aimultiple - World Foundation Models use cases](https://research.aimultiple.com/world-foundation-model/) [↩](#fnref:90 "Jump back to footnote 90 in the text"){.footnote-backref}
    :::

91. ::: {#fn:91}
    [NVIDIA Blogs - Synthetic data generation](https://blogs.nvidia.com/blog/cosmos-world-foundation-models/) [↩](#fnref:91 "Jump back to footnote 91 in the text"){.footnote-backref}
    :::

92. ::: {#fn:92}
    [BD Tech Talks - Robotics data challenge](https://bdtechtalks.substack.com/p/what-to-know-about-world-labs-marble) [↩](#fnref:92 "Jump back to footnote 92 in the text"){.footnote-backref}
    :::

93. ::: {#fn:93}
    [arXiv - Survey of World Models for Autonomous Driving](https://arxiv.org/abs/2501.11260) [↩](#fnref:93 "Jump back to footnote 93 in the text"){.footnote-backref}
    :::

94. ::: {#fn:94}
    [China Daily - World models for autonomy](https://www.chinadaily.com.cn/a/202512/03/WS692f9201a310d6866eb2c978.html) [↩](#fnref:94 "Jump back to footnote 94 in the text"){.footnote-backref}
    :::

95. ::: {#fn:95}
    [arXiv - Driving model generalization](https://arxiv.org/html/2501.11260v4) [↩](#fnref:95 "Jump back to footnote 95 in the text"){.footnote-backref}
    :::

96. ::: {#fn:96}
    [world-model-roadmap.github.io - Simulating the Visual World with AI](https://world-model-roadmap.github.io/) [↩](#fnref:96 "Jump back to footnote 96 in the text"){.footnote-backref}
    :::

97. ::: {#fn:97}
    [NVIDIA - World model compute requirements](https://www.nvidia.com/en-us/glossary/world-models/) [↩](#fnref:97 "Jump back to footnote 97 in the text"){.footnote-backref}
    :::

98. ::: {#fn:98}
    [NVIDIA Technical Blog - Video training requirements](https://developer.nvidia.com/blog/advancing-physical-ai-with-nvidia-cosmos-world-foundation-model-platform) [↩](#fnref:98 "Jump back to footnote 98 in the text"){.footnote-backref}
    :::

99. ::: {#fn:99}
    [NVIDIA Newsroom - Training data scale](https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-world-foundation-model-platform-to-accelerate-physical-ai-development) [↩](#fnref:99 "Jump back to footnote 99 in the text"){.footnote-backref}
    :::

100. ::: {#fn:100}
     [Google DeepMind - Real-time requirements](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) [↩](#fnref:100 "Jump back to footnote 100 in the text"){.footnote-backref}
     :::

101. ::: {#fn:101}
     [NVIDIA - HBM advantages](https://www.nvidia.com/en-us/data-center/h200/) [↩](#fnref:101 "Jump back to footnote 101 in the text"){.footnote-backref}
     :::

102. ::: {#fn:102}
     [NVIDIA Research - Video data scale](https://research.nvidia.com/publication/2025-01_cosmos-world-foundation-model-platform-physical-ai) [↩](#fnref:102 "Jump back to footnote 102 in the text"){.footnote-backref}
     :::

103. ::: {#fn:103}
     [NVIDIA - Storage considerations](https://www.nvidia.com/en-us/ai/cosmos/) [↩](#fnref:103 "Jump back to footnote 103 in the text"){.footnote-backref}
     :::

104. ::: {#fn:104}
     [TechCrunch - 2026 AI pragmatism](https://techcrunch.com/2026/01/02/in-2026-ai-will-move-from-hype-to-pragmatism/) [↩](#fnref:104 "Jump back to footnote 104 in the text"){.footnote-backref}
     :::

105. ::: {#fn:105}
     [AI Frontiers - AGI\'s Last Bottlenecks](https://ai-frontiers.org/articles/agis-last-bottlenecks) [↩](#fnref:105 "Jump back to footnote 105 in the text"){.footnote-backref}
     :::

106. ::: {#fn:106}
     [Futurism - LeCun AGI position](https://futurism.com/artificial-intelligence/large-language-models-willnever-be-intelligent) [↩](#fnref:106 "Jump back to footnote 106 in the text"){.footnote-backref}
     :::

107. ::: {#fn:107}
     [Substack - Will AGI Emerge from Large Language Models?](https://yuxili.substack.com/p/will-agi-emerge-from-large-language) [↩](#fnref:107 "Jump back to footnote 107 in the text"){.footnote-backref}
     :::

108. ::: {#fn:108}
     [NVIDIA - World model representations](https://www.nvidia.com/en-us/glossary/world-models/) [↩](#fnref:108 "Jump back to footnote 108 in the text"){.footnote-backref}
     :::

109. ::: {#fn:109}
     [Forrester - World model generalization](https://www.forrester.com/blogs/llms-make-room-for-world-models/) [↩](#fnref:109 "Jump back to footnote 109 in the text"){.footnote-backref}
     :::

110. ::: {#fn:110}
     [arXiv - Large language models for AGI survey](https://arxiv.org/html/2501.03151v1) [↩](#fnref:110 "Jump back to footnote 110 in the text"){.footnote-backref}
     :::

111. ::: {#fn:111}
     [TechCrunch - Amodei AGI prediction](https://techcrunch.com/2026/01/02/in-2026-ai-will-move-from-hype-to-pragmatism/) [↩](#fnref:111 "Jump back to footnote 111 in the text"){.footnote-backref}
     :::

112. ::: {#fn:112}
     [Vontobel - 2026 Large Language Models Outlook](https://am.vontobel.com/en/insights/2026-large-language-models-outlook) [↩](#fnref:112 "Jump back to footnote 112 in the text"){.footnote-backref}
     :::

## You Might Also Like

[](/blog/aiops-data-centers-llm-infrastructure-management-2025){.related-post-card}

![AIOps for Data Centers: Using LLMs to Manage AI Infrastructure](/static/images/blog/dc-session3-11.webp){loading="lazy"}

### AIOps for Data Centers: Using LLMs to Manage AI Infrastructu\...

[](/blog/load-balancing-ai-inference-distributing-requests-1000-gpus){.related-post-card}

![Load Balancing for AI Inference: Distributing Requests Across 1000+ GPUs](/static/images/blog/dc-tpu-09.webp){loading="lazy"}

### Load Balancing for AI Inference: Distributing Requests Acros\...

[](/blog/disaggregated-computing-composable-infrastructure-cxl-ai-2025){.related-post-card}

![Disaggregated Computing for AI: Composable Infrastructure Architecture](/static/images/blog/dc-server-16.webp){loading="lazy"}

### Disaggregated Computing for AI: Composable Infrastructure Ar\...
