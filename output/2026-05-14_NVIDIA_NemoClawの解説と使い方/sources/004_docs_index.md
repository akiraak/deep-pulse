---
url: https://docs.nvidia.com/nemoclaw/latest/index.html
title: "NVIDIA NemoClaw — NVIDIA NemoClaw Developer Guide"
---

# NVIDIA NemoClaw[\#](#nvidia-nemoclaw "Link to this heading"){.headerlink}

[![License](https://img.shields.io/badge/License-Apache_2.0-blue)](https://github.com/NVIDIA/NemoClaw/blob/main/LICENSE){.reference .external rel="noreferer noopener" target="_blank"} [![Security Policy](https://img.shields.io/badge/Security-Report%20a%20Vulnerability-red)](https://github.com/NVIDIA/NemoClaw/blob/main/SECURITY.md){.reference .external rel="noreferer noopener" target="_blank"} [![Project Status](https://img.shields.io/badge/status-alpha-orange)](https://github.com/NVIDIA/NemoClaw/blob/main/docs/about/release-notes.md){.reference .external rel="noreferer noopener" target="_blank"} [![Discord](https://img.shields.io/badge/Discord-Join-7289da)](https://discord.gg/XFpfPv9Uvx){.reference .external rel="noreferer noopener" target="_blank"}

NVIDIA NemoClaw is an open-source reference stack that simplifies running [OpenClaw](https://openclaw.ai){.reference .external rel="noreferer noopener" target="_blank"} always-on assistants more safely. NemoClaw provides onboarding, lifecycle management, and OpenClaw operations within OpenShell containers. It installs the [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell){.reference .external rel="noreferer noopener" target="_blank"} runtime, part of NVIDIA Agent Toolkit, setting up an environment designed for executing agents with additional security and inference routing capabilities.

## Get Started[\#](#get-started "Link to this heading"){.headerlink}

Run the following command to install NemoClaw and run your first sandboxed agent.

[]{.nc-term-dot .nc-term-dot-r} []{.nc-term-dot .nc-term-dot-y} []{.nc-term-dot .nc-term-dot-g}

![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld2JveD0iMCAwIDE2IDE2Ij4KPHBhdGggZD0iTTQgMmEyIDIgMCAwIDEgMi0yaDhhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJINmEyIDIgMCAwIDEtMi0yem0yLTFhMSAxIDAgMCAwLTEgMXY4YTEgMSAwIDAgMCAxIDFoOGExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMXpNMiA1YTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDhhMSAxIDAgMCAwIDEtMXYtMWgxdjFhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDF2MXoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPgo8L3N2Zz4=)

<div>

[\$ ]{.nc-ps}[curl -fsSL https://www.nvidia.com/nemoclaw.sh \| bash]{.nc-cmd}

</div>

To find detailed instructions on the installation process, refer to the [[Quickstart]{.std .std-doc}](get-started/quickstart.html){.reference .internal} guide.

To learn more about NemoClaw at a high level, refer to the [[NemoClaw Overview]{.std .std-doc}](about/overview.html){.reference .internal}, [[Architecture Overview]{.std .std-doc}](about/how-it-works.html){.reference .internal}, and [[Ecosystem]{.std .std-doc}](about/ecosystem.html){.reference .internal} pages.

## Explore[\#](#explore "Link to this heading"){.headerlink}

About NemoClaw

Learn what NemoClaw is and its capabilities, benefits, and common use cases.

[Concept]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[Overview of NVIDIA NemoClaw]{.doc}](about/overview.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Architecture Overview

High-level overview of plugin, blueprint, sandbox lifecycle, and protection layers.

[Concept]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[NemoClaw Architecture Overview]{.doc}](about/how-it-works.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Ecosystem

Learn how OpenClaw, OpenShell, and NemoClaw form a stack and when to use NemoClaw versus OpenShell alone.

[Concept]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[Ecosystem]{.doc}](about/ecosystem.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Quickstart with OpenClaw

Install the CLI, configure inference, and launch your first sandboxed agent.

[Tutorial]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[NemoClaw Quickstart with OpenClaw]{.doc}](get-started/quickstart.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Quickstart with Hermes

Launch Hermes in an OpenShell sandbox with the [`nemohermes`{.docutils .literal .notranslate}]{.pre} alias.

[Tutorial]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[NemoClaw Quickstart with Hermes]{.doc}](get-started/quickstart-hermes.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Inference Options

Providers available during onboarding and how inference routing works.

[Reference]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[Inference Options]{.doc}](inference/inference-options.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Manage Sandboxes

Understand [`SOUL.md`{.docutils .literal .notranslate}]{.pre}, [`USER.md`{.docutils .literal .notranslate}]{.pre}, and other workspace files, plus backup and restore.

[Concept]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[Workspace Files]{.doc}](manage-sandboxes/workspace-files.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Network Policies

Egress control, operator approval flow, and policy configuration.

[Reference]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[Network Policies]{.doc}](reference/network-policies.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Security Best Practices

Controls reference, risk framework, and posture profiles for sandbox security.

[Concept]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[Security Best Practices]{.doc}](security/best-practices.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Architecture Details

Learn the detailed architecture of NemoClaw, including plugin structure, blueprint system, and sandbox lifecycle.

[Reference]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[Architecture]{.doc}](reference/architecture.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Commands

CLI commands for launching, connecting, monitoring, and managing sandboxes.

[Reference]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[CLI Commands Reference]{.doc}](reference/commands.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

Agent Skills

Use AI coding assistants with NemoClaw's built-in agent skills for guided setup and operation.

[Resource]{.sd-sphinx-override .sd-badge .sd-bg-secondary .sd-bg-text-secondary}

[[NemoClaw Agent Skills for Your AI Coding Assistant]{.doc}](resources/agent-skills.html){.sd-stretched-link .sd-hide-link-text .reference .internal}

------------------------------------------------------------------------

Notice and Disclaimer

This software automatically retrieves, accesses or interacts with external materials. Those retrieved materials are not distributed with this software and are governed solely by separate terms, conditions and licenses. You are solely responsible for finding, reviewing and complying with all applicable terms, conditions, and licenses, and for verifying the security, integrity and suitability of any retrieved materials for your specific use case. This software is provided "AS IS", without warranty of any kind. The author makes no representations or warranties regarding any retrieved materials, and assumes no liability for any losses, damages, liabilities or legal consequences from your use or inability to use this software or any retrieved materials. Use this software and the retrieved materials at your own risk.
