---
url: https://docs.nvidia.com/nemoclaw/latest/about/overview.html
title: "Overview of NVIDIA NemoClaw — NVIDIA NemoClaw Developer Guide"
---

# Overview of NVIDIA NemoClaw[\#](#overview-of-nvidia-nemoclaw "Link to this heading"){.headerlink}

NVIDIA NemoClaw is an open-source reference stack that simplifies running [OpenClaw](https://openclaw.ai){.reference .external rel="noreferer noopener" target="_blank"} always-on assistants more safely. NemoClaw provides onboarding, lifecycle management, and OpenClaw operations within OpenShell containers. It incorporates policy-based privacy and security guardrails, giving you control over your agents' behavior and data handling. This enables self-evolving claws to run more safely in clouds, on prem, RTX PCs and DGX Spark.

NemoClaw pairs hosted models on inference providers or local endpoints with a hardened sandbox, routed inference, and declarative egress policy so deployment stays safer and more repeatable. The sandbox runtime comes from [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell){.reference .external rel="noreferer noopener" target="_blank"}; NemoClaw adds the blueprint, [`nemoclaw`{.docutils .literal .notranslate}]{.pre} CLI, onboarding, and related tooling as the reference way to run OpenClaw there.

  Capability             Description
  ---------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Sandbox OpenClaw       Creates an OpenShell sandbox pre-configured for OpenClaw, with filesystem and network policies applied from the first boot.
  Route inference        Configures OpenShell inference routing so agent traffic goes to the provider and model you chose during onboarding (NVIDIA Endpoints, OpenAI, Anthropic, Gemini, compatible endpoints, local Ollama, and others). The agent uses [`inference.local`{.docutils .literal .notranslate}]{.pre} inside the sandbox; credentials stay on the host.
  Manage the lifecycle   Handles blueprint versioning, digest verification, and sandbox setup.

## Key Features[\#](#key-features "Link to this heading"){.headerlink}

NemoClaw provides the following product capabilities.

  Feature              Description
  -------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Guided onboarding    Validates credentials, selects providers, and creates a working sandbox in one command.
  Hardened blueprint   A security-first Dockerfile with capability drops, least-privilege network rules, and declarative policy.
  State management     Safe migration of agent state across machines with credential stripping and integrity verification.
  Messaging channels   OpenShell-managed processes connect Telegram, Discord, Slack, and similar platforms to the sandboxed agent. NemoClaw configures channels during onboarding; OpenShell supplies the native constructs, credential flow, and runtime supervision.
  Routed inference     Provider-routed model calls through the OpenShell gateway, transparent to the agent. Supports NVIDIA Endpoints, OpenAI, Anthropic, Google Gemini, compatible endpoints, local Ollama, local vLLM, and the Model Router.
  Layered protection   Network, filesystem, process, and inference controls that can be hot-reloaded or locked at creation.

## Benefits of Using NemoClaw[\#](#benefits-of-using-nemoclaw "Link to this heading"){.headerlink}

Autonomous AI agents can make arbitrary network requests, access the host filesystem, and call any inference endpoint. Without guardrails, this creates security, cost, and compliance risks that grow as agents run unattended.

NemoClaw provides the following benefits to mitigate these risks.

  Benefit                      Description
  ---------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Sandboxed execution          Every agent runs inside an OpenShell sandbox with Landlock, seccomp, and network namespace isolation. No access is granted by default.
  Routed inference             Model traffic is routed through the OpenShell gateway to your selected provider, transparent to the agent. You can switch providers or models. Refer to [[Inference Options]{.std .std-doc}](../inference/inference-options.html){.reference .internal}.
  Declarative network policy   Egress rules are defined in YAML. Unknown hosts are blocked and surfaced to the operator for approval.
  Single CLI                   The [`nemoclaw`{.docutils .literal .notranslate}]{.pre} command orchestrates the full stack: gateway, sandbox, inference provider, and network policy.
  Blueprint lifecycle          Versioned blueprints handle sandbox creation, digest verification, and reproducible setup.

## Use Cases[\#](#use-cases "Link to this heading"){.headerlink}

You can use NemoClaw for various use cases including the following.

  Use Case                Description
  ----------------------- ----------------------------------------------------------------------------------------
  Always-on assistant     Run an OpenClaw assistant with controlled network access and operator-approved egress.
  Sandboxed testing       Test agent behavior in a locked-down environment before granting broader permissions.
  Remote GPU deployment   Deploy a sandboxed agent to a remote GPU instance for persistent operation.

## Next Steps[\#](#next-steps "Link to this heading"){.headerlink}

Navigate to the following topics to learn more about NemoClaw and how to install and use it.

-   [[Architecture Overview]{.std .std-doc}](how-it-works.html){.reference .internal} to understand how NemoClaw works.

-   [[Ecosystem]{.std .std-doc}](ecosystem.html){.reference .internal} to understand how OpenClaw, OpenShell, and NemoClaw relate in the wider stack, and when to use NemoClaw versus OpenShell.

-   [[Quickstart]{.std .std-doc}](../get-started/quickstart.html){.reference .internal} to install NemoClaw and run your first sandboxed agent.

-   [[Inference Options]{.std .std-doc}](../inference/inference-options.html){.reference .internal} to check the inference providers that NemoClaw supports and how inference routing works.
