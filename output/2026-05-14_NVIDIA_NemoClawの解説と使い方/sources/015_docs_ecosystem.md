---
url: https://docs.nvidia.com/nemoclaw/latest/about/ecosystem.html
title: "Ecosystem — NVIDIA NemoClaw Developer Guide"
---

# Ecosystem[\#](#ecosystem "Link to this heading"){.headerlink}

NemoClaw provides onboarding, lifecycle management, and OpenClaw operations within OpenShell containers.

This page describes how the ecosystem is formed across projects, where NemoClaw sits relative to [OpenShell](https://github.com/NVIDIA/OpenShell){.reference .external rel="noreferer noopener" target="_blank"} and [OpenClaw](https://openclaw.ai){.reference .external rel="noreferer noopener" target="_blank"}, and how to choose between NemoClaw and OpenShell.

## How the Stack Fits Together[\#](#how-the-stack-fits-together "Link to this heading"){.headerlink}

There are three pieces that are put together in a NemoClaw deployment: OpenClaw, OpenShell, and NemoClaw, each with a distinct scope. The following diagram shows how they fit together.

``` mermaid
        flowchart TB
    NC["🦞 NVIDIA NemoClaw<br/>CLI, plugin, blueprint"]
    OS["🐚 NVIDIA OpenShell<br/>Gateway, policy, inference routing"]
    OC["🦞 OpenClaw<br/>Assistant in sandbox"]

    NC -->|orchestrates| OS
    OS -->|isolates and runs| OC

    classDef nv fill:#76b900,stroke:#333,color:#fff
    classDef nvLight fill:#e6f2cc,stroke:#76b900,color:#1a1a1a
    classDef nvDark fill:#333,stroke:#76b900,color:#fff

    class NC nv
    class OS nv
    class OC nvDark

    linkStyle 0 stroke:#76b900,stroke-width:2px
    linkStyle 1 stroke:#76b900,stroke-width:2px
    
```

NemoClaw sits above OpenShell in the operator workflow. It drives OpenShell APIs and CLI to create and configure the sandbox that runs OpenClaw. Models and endpoints sit behind OpenShell's inference routing. NemoClaw onboarding wires provider choice into that routing.

The following table shows the scope of each component in the stack.

  Project                                                                                                           Scope
  ----------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [OpenClaw](https://openclaw.ai){.reference .external rel="noreferer noopener" target="_blank"}                    The assistant: runtime, tools, memory, and behavior inside the container. It does not define the sandbox or the host gateway.
  [OpenShell](https://github.com/NVIDIA/OpenShell){.reference .external rel="noreferer noopener" target="_blank"}   The execution environment: sandbox lifecycle, network, filesystem, and process policy, inference routing, and the operator-facing [`openshell`{.docutils .literal .notranslate}]{.pre} CLI for those primitives.
  NemoClaw                                                                                                          The NVIDIA reference stack that implements the definition above on the host: [`nemoclaw`{.docutils .literal .notranslate}]{.pre} CLI and plugin, versioned blueprint, channel messaging configured for OpenShell-managed delivery, and state migration helpers so OpenClaw runs inside OpenShell in a documented, repeatable way.

## NemoClaw Path versus OpenShell Path[\#](#nemoclaw-path-versus-openshell-path "Link to this heading"){.headerlink}

Both paths assume OpenShell can sandbox a workload. The difference is who owns the integration work.

  Path                 What it means
  -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **NemoClaw path**    You adopt the reference stack. NemoClaw's blueprint encodes a hardened image, default policies, and orchestration so [`nemoclaw`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`onboard`{.docutils .literal .notranslate}]{.pre} can stand up a known-good OpenClaw-on-OpenShell setup with less custom glue.
  **OpenShell path**   You use OpenShell as the platform and supply your own container, install steps for OpenClaw, policy YAML, provider setup, and any host bridges. OpenShell stays the sandbox and policy engine; nothing requires NemoClaw's blueprint or CLI.

## What NemoClaw Adds Beyond the OpenShell Community Sandbox[\#](#what-nemoclaw-adds-beyond-the-openshell-community-sandbox "Link to this heading"){.headerlink}

OpenShell ships a community sandbox for OpenClaw. Running [`openshell`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`sandbox`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`create`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`--from`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`openclaw`{.docutils .literal .notranslate}]{.pre} pulls that package, builds the image, applies the bundled policy, and starts a working sandbox. This is a valid path, and it produces a running OpenClaw environment with OpenShell isolation.

NemoClaw builds on that foundation with additional security hardening, automation, and lifecycle tooling. The following table compares the two paths.

  Capability             [`openshell`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`sandbox`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`create`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`--from`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`openclaw`{.docutils .literal .notranslate}]{.pre}                                   [`nemoclaw`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`onboard`{.docutils .literal .notranslate}]{.pre}
  ---------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Sandbox isolation      Yes. OpenShell applies seccomp filters, Landlock filesystem restrictions, privilege dropping, network namespace isolation, and no-new-privileges enforcement. The community sandbox bundles its own policy tailored for OpenClaw.                                                                                                                                                                                                             Yes. NemoClaw applies these through the blueprint and layers a more restrictive policy on top (see rows below).
  Credential handling    OpenShell's provider system replaces real credentials with placeholder tokens in the sandbox environment. The L7 proxy resolves placeholders to real values at egress. You create providers manually with [`openshell`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`provider`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`create`{.docutils .literal .notranslate}]{.pre}.   NemoClaw creates OpenShell providers automatically during onboarding. It also filters sensitive host environment variables (provider API keys, [`DISCORD_BOT_TOKEN`{.docutils .literal .notranslate}]{.pre}, [`SLACK_BOT_TOKEN`{.docutils .literal .notranslate}]{.pre}, [`TELEGRAM_BOT_TOKEN`{.docutils .literal .notranslate}]{.pre}) from the sandbox creation command to prevent accidental leakage through build args.
  Image hardening        The community image includes standard system tools for general-purpose use.                                                                                                                                                                                                                                                                                                                                                                   NemoClaw strips build toolchains ([`gcc`{.docutils .literal .notranslate}]{.pre}, [`g++`{.docutils .literal .notranslate}]{.pre}, [`make`{.docutils .literal .notranslate}]{.pre}) and network probes ([`netcat`{.docutils .literal .notranslate}]{.pre}) from the runtime image to reduce attack surface.
  Filesystem policy      The community sandbox bundles a policy for OpenClaw.                                                                                                                                                                                                                                                                                                                                                                                          NemoClaw defines a targeted read-only and read-write layout. System paths ([`/usr`{.docutils .literal .notranslate}]{.pre}, [`/lib`{.docutils .literal .notranslate}]{.pre}, [`/etc`{.docutils .literal .notranslate}]{.pre}) are read-only. The agent's home directory ([`/sandbox`{.docutils .literal .notranslate}]{.pre}) and config directory ([`/sandbox/.openclaw`{.docutils .literal .notranslate}]{.pre}) are writable by default so the agent can manage config, install skills, and write to standard paths natively.
  Inference setup        The community sandbox includes an [`openclaw-start`{.docutils .literal .notranslate}]{.pre} script that runs OpenClaw's onboarding wizard inside the sandbox. You can also create providers and configure OpenShell inference routing manually from the host.                                                                                                                                                                                 NemoClaw's onboarding wizard validates your credential from the host, lets you select a provider (NVIDIA Endpoints, OpenAI, Anthropic, Google Gemini, Ollama, and compatible endpoints), and configures OpenShell's inference routing automatically. Credentials stay on the host and are delivered through OpenShell's provider system.
  Channel messaging      OpenShell provides the credential provider system and L7 proxy that delivers channel tokens securely (including path-based resolution for Telegram's [`/bot<token>/`{.docutils .literal .notranslate}]{.pre} URL pattern). You create providers and configure OpenClaw's channel settings manually.                                                                                                                                           NemoClaw automates channel setup during onboarding: it collects bot tokens, registers them as OpenShell providers, and bakes OpenClaw channel config with placeholder tokens that OpenShell's proxy resolves at egress. No separate bridge process runs on the host.
  Blueprint versioning   No blueprint. The community sandbox uses whatever image version is currently published.                                                                                                                                                                                                                                                                                                                                                       NemoClaw downloads the blueprint artifact, checks version compatibility, and verifies its digest before applying. Running [`nemoclaw`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`onboard`{.docutils .literal .notranslate}]{.pre} on different machines produces the same sandbox.
  State migration        Not included.                                                                                                                                                                                                                                                                                                                                                                                                                                 NemoClaw migrates agent state across machines with credential stripping and integrity verification.
  Process count limits   OpenShell applies seccomp and privilege dropping. You set process count limits manually with [`--ulimit`{.docutils .literal .notranslate}]{.pre} or orchestrator config.                                                                                                                                                                                                                                                                      NemoClaw applies [`ulimit`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`-u`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`512`{.docutils .literal .notranslate}]{.pre} in the container entrypoint to cap the process count and mitigate fork-bomb attacks, on top of OpenShell's seccomp and privilege dropping.

## When to Use Which[\#](#when-to-use-which "Link to this heading"){.headerlink}

Use the following table to decide when to use NemoClaw versus OpenShell.

  Situation                                                                                                                                          Prefer
  -------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------
  You want OpenClaw with minimal assembly, NVIDIA defaults, and the documented install and onboard flow.                                             NemoClaw
  You need maximum flexibility for custom images, a layout that does not match the NemoClaw blueprint, or a workload outside this reference stack.   OpenShell with your own integration
  You are standardizing on the NVIDIA reference for always-on assistants with policy and inference routing.                                          NemoClaw
  You are building internal platform abstractions where the NemoClaw CLI or blueprint is not the right fit.                                          OpenShell (and your orchestration)

## Related topics[\#](#related-topics "Link to this heading"){.headerlink}

-   [[Overview]{.std .std-doc}](overview.html){.reference .internal} contains what NemoClaw is, capabilities, benefits, and use cases.

-   [[How It Works]{.std .std-doc}](how-it-works.html){.reference .internal} describes how NemoClaw runs, plugin, blueprint, sandbox creation, routing, protection layers.

-   [[Architecture]{.std .std-doc}](../reference/architecture.html){.reference .internal} shows the repository structure and technical diagrams.
