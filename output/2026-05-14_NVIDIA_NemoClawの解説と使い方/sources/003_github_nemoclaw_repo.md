---
url: https://github.com/NVIDIA/NemoClaw
title: "GitHub - NVIDIA/NemoClaw: Run OpenClaw more securely inside NVIDIA OpenShell with managed inference · GitHub"
---

# 🦞 NVIDIA NemoClaw: Reference Stack for Running OpenClaw in OpenShell {#nvidia-nemoclaw-reference-stack-for-running-openclaw-in-openshell .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#-nvidia-nemoclaw-reference-stack-for-running-openclaw-in-openshell){#user-content--nvidia-nemoclaw-reference-stack-for-running-openclaw-in-openshell .anchor aria-label="Permalink: 🦞 NVIDIA NemoClaw: Reference Stack for Running OpenClaw in OpenShell"}

[![License](https://camo.githubusercontent.com/d8e3b9d3b1213595b06824a404d41ad7743f1e880a3f9e47bae54533a9b60c99/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4170616368655f322e302d626c7565){canonical-src="https://img.shields.io/badge/License-Apache_2.0-blue" style="max-width: 100%;"}](https://github.com/NVIDIA/NemoClaw/blob/main/LICENSE) [![Security Policy](https://camo.githubusercontent.com/d7b3ea7a80c2502d6f91036a7b8d1b56bf3f0c7fda63638c5735c06d64af5644/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53656375726974792d5265706f72742532306125323056756c6e65726162696c6974792d726564){canonical-src="https://img.shields.io/badge/Security-Report%20a%20Vulnerability-red" style="max-width: 100%;"}](https://github.com/NVIDIA/NemoClaw/blob/main/SECURITY.md) [![Project Status](https://camo.githubusercontent.com/71cb9a97360b8841ddfc125fa85687761845a6d44b48b4de9b527a2d2dce2930/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d616c7068612d6f72616e6765){canonical-src="https://img.shields.io/badge/status-alpha-orange" style="max-width: 100%;"}](https://github.com/NVIDIA/NemoClaw/blob/main/docs/about/release-notes.md) [![Discord](https://camo.githubusercontent.com/32172cbf5d9e1bad5a24c341e72d774dfdeb83e7099e33bfbb21756a3e669e42/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446973636f72642d4a6f696e2d373238396461){canonical-src="https://img.shields.io/badge/Discord-Join-7289da" style="max-width: 100%;"}](https://discord.gg/XFpfPv9Uvx){rel="nofollow"}

NVIDIA NemoClaw is an open source reference stack that simplifies running [OpenClaw](https://openclaw.ai){rel="nofollow"} always-on assistants more safely. It installs the [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell) runtime, part of NVIDIA Agent Toolkit, which provides additional security for running autonomous agents.

> **Alpha software**
>
> NemoClaw is available in early preview starting March 16, 2026. This software is not production-ready. Interfaces, APIs, and behavior may change without notice as we iterate on the design. The project is shared to gather feedback and enable early experimentation. We welcome issues and discussion from the community while the project evolves.

NemoClaw adds guided onboarding, a hardened blueprint, state management, OpenShell-managed channel messaging, routed inference, and layered protection on top of the [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell) runtime. For the full feature list, refer to [Overview](https://docs.nvidia.com/nemoclaw/latest/about/overview.html){rel="nofollow"}. For the system diagram, component model, and blueprint lifecycle, refer to [How It Works](https://docs.nvidia.com/nemoclaw/latest/about/how-it-works.html){rel="nofollow"} and [Architecture](https://docs.nvidia.com/nemoclaw/latest/reference/architecture.html){rel="nofollow"}.

## Getting Started {#getting-started .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#getting-started){#user-content-getting-started .anchor aria-label="Permalink: Getting Started"}

Follow these steps to install NemoClaw and run your first sandboxed OpenClaw agent.

### Prerequisites {#prerequisites .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#prerequisites){#user-content-prerequisites .anchor aria-label="Permalink: Prerequisites"}

Before getting started, check the prerequisites to ensure you have the necessary software and hardware to run NemoClaw.

#### Hardware {#hardware .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#hardware){#user-content-hardware .anchor aria-label="Permalink: Hardware"}

  Resource   Minimum      Recommended
  ---------- ------------ -------------
  CPU        4 vCPU       4+ vCPU
  RAM        8 GB         16 GB
  Disk       20 GB free   40 GB free

The sandbox image is approximately 2.4 GB compressed. During image push, the Docker daemon, k3s, and the OpenShell gateway run alongside the export pipeline, which buffers decompressed layers in memory. On machines with less than 8 GB of RAM, this combined usage can trigger the OOM killer. If you cannot add memory, configuring at least 8 GB of swap can work around the issue at the cost of slower performance.

#### Software {#software .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#software){#user-content-software .anchor aria-label="Permalink: Software"}

  Dependency   Version
  ------------ ----------------
  Node.js      22.16 or later
  npm          10 or later
  Platform     See below

#### OpenShell Lifecycle {#openshell-lifecycle .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#openshell-lifecycle){#user-content-openshell-lifecycle .anchor aria-label="Permalink: OpenShell Lifecycle"}

For NemoClaw-managed environments, use `nemoclaw onboard` when you need to create or recreate the OpenShell gateway or sandbox. Avoid `openshell self-update`, `npm update -g openshell`, `openshell gateway start --recreate`, or `openshell sandbox create` directly unless you intend to manage OpenShell separately and then rerun `nemoclaw onboard`.

#### Container Runtimes {#container-runtimes .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#container-runtimes){#user-content-container-runtimes .anchor aria-label="Permalink: Container Runtimes"}

The following table lists tested platform and runtime combinations. Availability is not limited to these entries, but untested configurations may have issues.

  OS                      Container runtime              Status                    Notes
  ----------------------- ------------------------------ ------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Linux                   Docker                         Tested                    Primary tested path.
  macOS (Apple Silicon)   Colima, Docker Desktop         Tested with limitations   Install Xcode Command Line Tools (`xcode-select --install`) and start the runtime before running the installer.
  DGX Spark               Docker                         Tested                    Use the standard installer and `nemoclaw onboard`. For an end-to-end walkthrough with local Ollama inference, see the [NVIDIA Spark playbook](https://build.nvidia.com/spark/nemoclaw){rel="nofollow"}.
  Windows WSL2            Docker Desktop (WSL backend)   Tested with limitations   Requires WSL2 with Docker Desktop backend.

For platform-specific pre-setup (for example, Windows WSL 2), see [Prerequisites](https://docs.nvidia.com/nemoclaw/latest/get-started/prerequisites.html){rel="nofollow"}.

### Install NemoClaw and Onboard OpenClaw Agent {#install-nemoclaw-and-onboard-openclaw-agent .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#install-nemoclaw-and-onboard-openclaw-agent){#user-content-install-nemoclaw-and-onboard-openclaw-agent .anchor aria-label="Permalink: Install NemoClaw and Onboard OpenClaw Agent"}

Download and run the installer script. The script installs Node.js if it is not already present, then runs the guided onboard wizard to create a sandbox, configure inference, and apply security policies.

> **ℹ️ Note**
>
> NemoClaw creates a fresh OpenClaw instance inside the sandbox during the onboarding process.
>
> The installer runs as your normal user and does not require `sudo` or root. It installs Node.js via nvm and NemoClaw via npm, both into user-local directories. Docker must be installed and running before you run the installer. Installing Docker may require elevated privileges on Linux.

    curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash

The piped installer prompts through your terminal. In headless scripts or CI, pass explicit acceptance to the `bash` side of the pipe:

    curl -fsSL https://www.nvidia.com/nemoclaw.sh | NEMOCLAW_NON_INTERACTIVE=1 NEMOCLAW_ACCEPT_THIRD_PARTY_SOFTWARE=1 bash

If you use nvm or fnm to manage Node.js, the installer may not update your current shell\'s PATH. If `nemoclaw` is not found after install, run `source ~/.bashrc` (or `source ~/.zshrc` for zsh) or open a new terminal.

When the install completes, a summary confirms the running environment:

``` {.notranslate lang="text"}
──────────────────────────────────────────────────
Sandbox      my-assistant (Landlock + seccomp + netns)
Model        nvidia/nemotron-3-super-120b-a12b (NVIDIA Endpoints)
──────────────────────────────────────────────────
Run:         nemoclaw my-assistant connect
Status:      nemoclaw my-assistant status
Logs:        nemoclaw my-assistant logs --follow
──────────────────────────────────────────────────

To change settings later:
  Model:       nemoclaw inference get
               nemoclaw inference set --model <model> --provider <provider> --sandbox my-assistant

[INFO]  === Installation complete ===
```

### Chat with the Agent {#chat-with-the-agent .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#chat-with-the-agent){#user-content-chat-with-the-agent .anchor aria-label="Permalink: Chat with the Agent"}

Connect to the sandbox, then chat with the agent through the TUI or the CLI.

    nemoclaw my-assistant connect

In the sandbox shell, open the OpenClaw terminal UI and start a chat:

    openclaw tui

Alternatively, send a single message and print the response:

    openclaw agent --agent main --local -m "hello" --session-id test

### Model Router (Experimental) {#model-router-experimental .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#model-router-experimental){#user-content-model-router-experimental .anchor aria-label="Permalink: Model Router (Experimental)"}

NemoClaw includes an optional model router that automatically picks the most efficient model for each query. Instead of sending every request to a single large model, the router uses a lightweight encoder to predict which model in a pool can handle each query correctly, then routes to the cheapest one that meets an accuracy threshold.

The router uses the [NVIDIA LLM Router v3](https://github.com/NVIDIA-AI-Blueprints/llm-router/tree/v3) prefill routing engine and runs on the host as a LiteLLM proxy. The sandbox reaches it through the OpenShell gateway and continues to call `https://inference.local/v1`; do not probe `localhost:4000` or `host.openshell.internal` directly from inside the sandbox.

#### Enable during onboard {#enable-during-onboard .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#enable-during-onboard){#user-content-enable-during-onboard .anchor aria-label="Permalink: Enable during onboard"}

Select **Model Router (experimental)** during the onboard wizard, or set `NEMOCLAW_PROVIDER=routed` for non-interactive mode:

    NEMOCLAW_PROVIDER=routed nemoclaw onboard --non-interactive

The onboard wizard starts the router, configures the OpenShell provider, and creates the sandbox. The router process runs on the host on port 4000.

#### Configure the model pool {#configure-the-model-pool .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#configure-the-model-pool){#user-content-configure-the-model-pool .anchor aria-label="Permalink: Configure the model pool"}

Edit `nemoclaw-blueprint/router/pool-config.yaml` to define which models the router can choose from:

    routing:
      method: prefill
      checkpoint: llm-router/checkpoints/prefill_router_qwen08b.pt
      tolerance: 0.20
      encoder: Qwen/Qwen3.5-0.8B

    models:
      - name: nano
        litellm_model: "openai/nvidia/nvidia/Nemotron-3-Nano-30B-A3B"
        cost_per_m_input_tokens: 0.05
        api_base: "https://inference-api.nvidia.com"

      - name: super
        litellm_model: "openai/nvidia/nvidia/nemotron-3-super-v3"
        cost_per_m_input_tokens: 0.10
        api_base: "https://inference-api.nvidia.com"

The `tolerance` parameter controls the accuracy-cost tradeoff: 0.0 always picks the most accurate model, 1.0 always picks the cheapest, and 0.20 (default) allows up to 20 percentage points below the best for a cheaper model.

#### Architecture {#architecture .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#architecture){#user-content-architecture .anchor aria-label="Permalink: Architecture"}

The router runs on the host, not inside the sandbox:

``` {.notranslate lang="text"}
Sandbox (OpenClaw) ──> OpenShell Gateway (L7 proxy) ──> Model Router (:4000) ──> NVIDIA API
                                                         └── PrefillRouter selects model
```

Credentials flow through the OpenShell provider system. The sandbox never sees raw API keys.

### Uninstall {#uninstall .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#uninstall){#user-content-uninstall .anchor aria-label="Permalink: Uninstall"}

To remove NemoClaw and all resources created during setup, run the CLI\'s built-in uninstall command:

    nemoclaw uninstall

  Flag                 Effect
  -------------------- --------------------------------------------
  `--yes`              Skip the confirmation prompt.
  `--keep-openshell`   Leave OpenShell binaries installed.
  `--delete-models`    Also remove NemoClaw-pulled Ollama models.

`nemoclaw uninstall` runs the version-pinned `uninstall.sh` shipped with your installed CLI, with no network fetch at uninstall time.

If the `nemoclaw` CLI is missing or broken, fall back to the hosted script:

    curl -fsSL https://raw.githubusercontent.com/NVIDIA/NemoClaw/refs/heads/main/uninstall.sh | bash

For a full comparison of the two forms, see [`nemoclaw uninstall` vs. the hosted `uninstall.sh`](https://docs.nvidia.com/nemoclaw/latest/reference/commands.html#nemoclaw-uninstall-vs-the-hosted-uninstallsh){rel="nofollow"}.

For troubleshooting installation or onboarding issues, see the [Troubleshooting guide](https://docs.nvidia.com/nemoclaw/latest/reference/troubleshooting.html){rel="nofollow"}.

## Documentation {#documentation .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#documentation){#user-content-documentation .anchor aria-label="Permalink: Documentation"}

Refer to the following pages on the official documentation website for more information on NemoClaw.

  Page                                                                                                                               Description
  ---------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------
  [Overview](https://docs.nvidia.com/nemoclaw/latest/about/overview.html){rel="nofollow"}                                            What NemoClaw does and how it fits together.
  [Architecture Overview](https://docs.nvidia.com/nemoclaw/latest/about/how-it-works.html){rel="nofollow"}                           High-level overview of Plugin, blueprint, sandbox lifecycle, and protection layers.
  [Ecosystem](https://docs.nvidia.com/nemoclaw/latest/about/ecosystem.html){rel="nofollow"}                                          How OpenClaw, OpenShell, and NemoClaw form a stack and when to use NemoClaw versus OpenShell alone.
  [Architecture Details](https://docs.nvidia.com/nemoclaw/latest/reference/architecture.html){rel="nofollow"}                        Detailed description of Plugin structure, blueprint lifecycle, sandbox environment, and host-side state.
  [Prerequisites](https://docs.nvidia.com/nemoclaw/latest/get-started/prerequisites.html){rel="nofollow"}                            Hardware, software, and supported platforms, with any platform-specific pre-setup.
  [Inference Options](https://docs.nvidia.com/nemoclaw/latest/inference/inference-options.html){rel="nofollow"}                      Supported providers, validation, and routed inference configuration.
  [Network Policies](https://docs.nvidia.com/nemoclaw/latest/reference/network-policies.html){rel="nofollow"}                        Baseline rules, operator approval flow, and egress control.
  [Customize Network Policy](https://docs.nvidia.com/nemoclaw/latest/network-policy/customize-network-policy.html){rel="nofollow"}   Static and dynamic policy changes, presets.
  [Security Best Practices](https://docs.nvidia.com/nemoclaw/latest/security/best-practices.html){rel="nofollow"}                    Controls reference, risk framework, and posture profiles for sandbox security.
  [Sandbox Hardening](https://docs.nvidia.com/nemoclaw/latest/deployment/sandbox-hardening.html){rel="nofollow"}                     Container security measures, capability drops, process limits.
  [CLI Commands](https://docs.nvidia.com/nemoclaw/latest/reference/commands.html){rel="nofollow"}                                    Full NemoClaw CLI command reference.
  [Troubleshooting](https://docs.nvidia.com/nemoclaw/latest/reference/troubleshooting.html){rel="nofollow"}                          Common issues and resolution steps.

## Project Structure {#project-structure .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#project-structure){#user-content-project-structure .anchor aria-label="Permalink: Project Structure"}

The following directories make up the NemoClaw repository.

``` {.notranslate lang="text"}
NemoClaw/
├── bin/              # CLI entry point and library modules (CJS)
├── nemoclaw/         # TypeScript plugin (Commander CLI extension)
│   └── src/
│       ├── blueprint/    # Runner, snapshot, SSRF validation, state
│       ├── commands/     # Slash commands, migration state
│       └── onboard/      # Onboarding config
├── nemoclaw-blueprint/   # Blueprint YAML and network policies
│   └── router/
│       ├── pool-config.yaml  # Model pool and routing config
│       └── llm-router/      # LLM Router v3 submodule (prefill routing engine)
├── scripts/          # Install helpers, setup, automation
├── test/             # Integration and E2E tests
└── docs/             # User-facing docs (Sphinx/MyST)
```

## Community {#community .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#community){#user-content-community .anchor aria-label="Permalink: Community"}

Join the NemoClaw community to ask questions, share feedback, and report issues.

-   [Discord](https://discord.gg/XFpfPv9Uvx){rel="nofollow"}
-   [GitHub Discussions](https://github.com/NVIDIA/NemoClaw/discussions)
-   [GitHub Issues](https://github.com/NVIDIA/NemoClaw/issues)

## Contributing {#contributing .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#contributing){#user-content-contributing .anchor aria-label="Permalink: Contributing"}

We welcome contributions. See [CONTRIBUTING.md](/NVIDIA/NemoClaw/blob/main/CONTRIBUTING.md) for development setup, coding standards, and the PR process.

## Security {#security .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#security){#user-content-security .anchor aria-label="Permalink: Security"}

NVIDIA takes security seriously. If you discover a vulnerability in NemoClaw, **DO NOT open a public issue.** Use one of the private reporting channels described in [SECURITY.md](/NVIDIA/NemoClaw/blob/main/SECURITY.md):

-   Submit a report through the [NVIDIA Vulnerability Disclosure Program](https://www.nvidia.com/en-us/security/report-vulnerability/){rel="nofollow"}.
-   Send an email to <psirt@nvidia.com> encrypted with the [NVIDIA PGP key](https://www.nvidia.com/en-us/security/pgp-key){rel="nofollow"}.
-   Use [GitHub\'s private vulnerability reporting](https://docs.github.com/en/code-security/how-tos/report-and-fix-vulnerabilities/configure-vulnerability-reporting/configuring-private-vulnerability-reporting-for-a-repository) to submit a report directly on this repository.

For security bulletins and PSIRT policies, visit the [NVIDIA Product Security](https://www.nvidia.com/en-us/security/){rel="nofollow"} portal.

## Notice and Disclaimer {#notice-and-disclaimer .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#notice-and-disclaimer){#user-content-notice-and-disclaimer .anchor aria-label="Permalink: Notice and Disclaimer"}

This software automatically retrieves, accesses or interacts with external materials. Those retrieved materials are not distributed with this software and are governed solely by separate terms, conditions and licenses. You are solely responsible for finding, reviewing and complying with all applicable terms, conditions, and licenses, and for verifying the security, integrity and suitability of any retrieved materials for your specific use case. This software is provided \"AS IS\", without warranty of any kind. The author makes no representations or warranties regarding any retrieved materials, and assumes no liability for any losses, damages, liabilities or legal consequences from your use or inability to use this software or any retrieved materials. Use this software and the retrieved materials at your own risk.

## License {#license .heading-element dir="auto" tabindex="-1"}

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1saW5rIiBkYXRhLWNvbXBvbmVudD0iT2N0aWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0ibTcuNzc1IDMuMjc1IDEuMjUtMS4yNWEzLjUgMy41IDAgMSAxIDQuOTUgNC45NWwtMi41IDIuNWEzLjUgMy41IDAgMCAxLTQuOTUgMCAuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOCAxLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMi41LTIuNWEyLjAwMiAyLjAwMiAwIDAgMC0yLjgzLTIuODNsLTEuMjUgMS4yNWEuNzUxLjc1MSAwIDAgMS0xLjA0Mi0uMDE4Ljc1MS43NTEgMCAwIDEtLjAxOC0xLjA0MlptLTQuNjkgOS42NGExLjk5OCAxLjk5OCAwIDAgMCAyLjgzIDBsMS4yNS0xLjI1YS43NTEuNzUxIDAgMCAxIDEuMDQyLjAxOC43NTEuNzUxIDAgMCAxIC4wMTggMS4wNDJsLTEuMjUgMS4yNWEzLjUgMy41IDAgMSAxLTQuOTUtNC45NWwyLjUtMi41YTMuNSAzLjUgMCAwIDEgNC45NSAwIC43NTEuNzUxIDAgMCAxLS4wMTggMS4wNDIuNzUxLjc1MSAwIDAgMS0xLjA0Mi4wMTggMS45OTggMS45OTggMCAwIDAtMi44MyAwbC0yLjUgMi41YTEuOTk4IDEuOTk4IDAgMCAwIDAgMi44M1oiPjwvcGF0aD48L3N2Zz4=){.octicon .octicon-link}](#license){#user-content-license .anchor aria-label="Permalink: License"}

Apache 2.0. See [LICENSE](/NVIDIA/NemoClaw/blob/main/LICENSE).
