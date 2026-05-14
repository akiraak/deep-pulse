---
url: https://docs.nvidia.com/nemoclaw/latest/get-started/quickstart.html
title: "NemoClaw Quickstart with OpenClaw — NVIDIA NemoClaw Developer Guide"
---

# NemoClaw Quickstart with OpenClaw[\#](#nemoclaw-quickstart-with-openclaw "Link to this heading"){.headerlink}

Follow these steps to get started with NemoClaw and your first sandboxed OpenClaw agent.

Note

Make sure you have completed reviewing the [[Prerequisites]{.std .std-doc}](prerequisites.html){.reference .internal} before following this guide.

## Install NemoClaw and Onboard OpenClaw Agent[\#](#install-nemoclaw-and-onboard-openclaw-agent "Link to this heading"){.headerlink}

Download and run the installer script. The script installs Node.js if it is not already present, then runs the guided onboard wizard to create a sandbox, configure inference, and apply security policies.

Note

NemoClaw creates a fresh OpenClaw instance inside the sandbox during the onboarding process.

    curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash

The piped installer prompts through your terminal. In headless scripts or CI, pass explicit acceptance to the [`bash`{.docutils .literal .notranslate}]{.pre} side of the pipe:

    $ curl -fsSL https://www.nvidia.com/nemoclaw.sh | NEMOCLAW_NON_INTERACTIVE=1 NEMOCLAW_ACCEPT_THIRD_PARTY_SOFTWARE=1 bash

If you use nvm or fnm to manage Node.js, the installer might not update your current shell's PATH. If [`nemoclaw`{.docutils .literal .notranslate}]{.pre} is not found after install, run [`source`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`~/.bashrc`{.docutils .literal .notranslate}]{.pre} (or [`source`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`~/.zshrc`{.docutils .literal .notranslate}]{.pre} for zsh) or open a new terminal.

On Linux, the installer checks Docker before it installs NemoClaw. If Docker is missing, the installer downloads the official Docker convenience script, asks for [`sudo`{.docutils .literal .notranslate}]{.pre}, installs Docker, and starts the Docker service when systemd is available. If Docker is installed but your current shell cannot use the Docker socket yet, the installer adds your user to the [`docker`{.docutils .literal .notranslate}]{.pre} group when needed and exits with a recovery command.

    $ newgrp docker
    $ curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash

On DGX Spark and DGX Station, an interactive installer can offer express install after you accept the third-party software notice. Express install switches onboarding to non-interactive mode, applies the suggested security policy, and selects the managed local inference path for that platform. Set [`NEMOCLAW_NO_EXPRESS=1`{.docutils .literal .notranslate}]{.pre} to skip the express prompt, or set [`NEMOCLAW_PROVIDER`{.docutils .literal .notranslate}]{.pre} before launching the installer when you want to choose a provider yourself.

The installer auto-launches [`nemoclaw`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`onboard`{.docutils .literal .notranslate}]{.pre} when it can locate the freshly-installed binary. If it cannot locate the binary, or if blocking host preflight checks fail, it does not launch the wizard automatically. In that case, the installer prints the relevant diagnostics and a [`To`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`finish`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`setup,`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`run:`{.docutils .literal .notranslate}]{.pre} block with the explicit [`nemoclaw`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`onboard`{.docutils .literal .notranslate}]{.pre} command.

Note

The onboard flow builds the sandbox image with [`NEMOCLAW_DISABLE_DEVICE_AUTH=1`{.docutils .literal .notranslate}]{.pre} so the dashboard is immediately usable during setup. This is a build-time setting baked into the sandbox image, not a runtime knob. If you export [`NEMOCLAW_DISABLE_DEVICE_AUTH`{.docutils .literal .notranslate}]{.pre} after onboarding finishes, it has no effect on an existing sandbox.

### Respond to the Onboard Wizard[\#](#respond-to-the-onboard-wizard "Link to this heading"){.headerlink}

After the installer launches [`nemoclaw`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`onboard`{.docutils .literal .notranslate}]{.pre}, the wizard runs preflight checks, starts or reuses the OpenShell gateway, and asks for an inference provider, sandbox name, optional web search, optional messaging channels, and network policy presets. At any prompt, press Enter to accept the default shown in [`[brackets]`{.docutils .literal .notranslate}]{.pre}, type [`back`{.docutils .literal .notranslate}]{.pre} to return to the previous prompt, or type [`exit`{.docutils .literal .notranslate}]{.pre} to quit. If existing sandbox sessions are running, the installer warns before onboarding because the setup can rebuild or upgrade sandboxes after the new sandbox launches.

The inference provider prompt presents a numbered list.

      1) NVIDIA Endpoints
      2) OpenAI
      3) Other OpenAI-compatible endpoint
      4) Anthropic
      5) Other Anthropic-compatible endpoint
      6) Google Gemini
      7) Local Ollama (localhost:11434)
      8) Model Router (experimental)
      Choose [1]:

Pick the option that matches where you want inference traffic to go, then expand the matching helper below for the follow-up prompts and the API key environment variable to set. For the full list of providers and validation behavior, refer to [[Inference Options]{.std .std-doc}](../inference/inference-options.html){.reference .internal}. Local Ollama appears when NemoClaw detects a usable local Ollama path or can offer an install or start action for your platform. The Model Router option appears when the blueprint router profile is enabled.

Tip

Export the API key before launching the installer so the wizard does not have to ask for it. For example, run [`export`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`NVIDIA_API_KEY=<your-key>`{.docutils .literal .notranslate}]{.pre} before [`curl`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`...`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`|`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`bash`{.docutils .literal .notranslate}]{.pre}. If you entered a key incorrectly, refer to [[Reset a Stored Credential]{.std .std-ref}](../manage-sandboxes/lifecycle.html#reset-a-stored-credential){.reference .internal} to clear and re-enter it.

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1zZXJ2ZXIiIGhlaWdodD0iMS4wZW0iIHZlcnNpb249IjEuMSIgdmlld2JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMS4wZW0iPjxwYXRoIGQ9Ik0xLjc1IDFoMTIuNWMuOTY2IDAgMS43NS43ODQgMS43NSAxLjc1djRjMCAuMzcyLS4xMTYuNzE3LS4zMTQgMSAuMTk4LjI4My4zMTQuNjI4LjMxNCAxdjRhMS43NSAxLjc1IDAgMCAxLTEuNzUgMS43NUgxLjc1QTEuNzUgMS43NSAwIDAgMSAwIDEyLjc1di00YzAtLjM1OC4xMDktLjcwNy4zMTQtMWExLjczOSAxLjczOSAwIDAgMS0uMzE0LTF2LTRDMCAxLjc4NC43ODQgMSAxLjc1IDFaTTEuNSAyLjc1djRjMCAuMTM4LjExMi4yNS4yNS4yNWgxMi41YS4yNS4yNSAwIDAgMCAuMjUtLjI1di00YS4yNS4yNSAwIDAgMC0uMjUtLjI1SDEuNzVhLjI1LjI1IDAgMCAwLS4yNS4yNVptLjI1IDUuNzVhLjI1LjI1IDAgMCAwLS4yNS4yNXY0YzAgLjEzOC4xMTIuMjUuMjUuMjVoMTIuNWEuMjUuMjUgMCAwIDAgLjI1LS4yNXYtNGEuMjUuMjUgMCAwIDAtLjI1LS4yNVpNNyA0Ljc1QS43NS43NSAwIDAgMSA3Ljc1IDRoNC41YS43NS43NSAwIDAgMSAwIDEuNWgtNC41QS43NS43NSAwIDAgMSA3IDQuNzVaTTcuNzUgMTBoNC41YS43NS43NSAwIDAgMSAwIDEuNWgtNC41YS43NS43NSAwIDAgMSAwLTEuNVpNMyA0Ljc1QS43NS43NSAwIDAgMSAzLjc1IDRoLjVhLjc1Ljc1IDAgMCAxIDAgMS41aC0uNUEuNzUuNzUgMCAwIDEgMyA0Ljc1Wk0zLjc1IDEwaC41YS43NS43NSAwIDAgMSAwIDEuNWgtLjVhLjc1Ljc1IDAgMCAxIDAtMS41WiI+PC9wYXRoPjwvc3ZnPg==){.sd-octicon .sd-octicon-server}]{.sd-summary-icon}[Option 1: NVIDIA Endpoints]{.sd-summary-text}[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1jaGV2cm9uLXJpZ2h0IiBoZWlnaHQ9IjEuNWVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEuNWVtIj48cGF0aCBkPSJNOC43MiAxOC43OGEuNzUuNzUgMCAwIDEgMC0xLjA2TDE0LjQ0IDEyIDguNzIgNi4yOGEuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOGw2LjI1IDYuMjVhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtNi4yNSA2LjI1YS43NS43NSAwIDAgMS0xLjA2IDBaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-chevron-right}]{.sd-summary-state-marker .sd-summary-chevron-right}

Routes inference to models hosted on [build.nvidia.com](https://build.nvidia.com){.reference .external rel="noreferer noopener" target="_blank"}.

Use [`NVIDIA_API_KEY`{.docutils .literal .notranslate}]{.pre} for the API key. Get one from the [NVIDIA build API keys page](https://build.nvidia.com/settings/api-keys){.reference .external rel="noreferer noopener" target="_blank"}.

Respond to the wizard as follows.

1.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, press Enter (or type [`1`{.docutils .literal .notranslate}]{.pre}) to select **NVIDIA Endpoints**.

2.  At the [`NVIDIA_API_KEY:`{.docutils .literal .notranslate}]{.pre} prompt, paste your key if it is not already exported.

3.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`model`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, pick a curated model from the list (for example, [`Nemotron`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`3`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`Super`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`120B`{.docutils .literal .notranslate}]{.pre}, [`GLM-5`{.docutils .literal .notranslate}]{.pre}, [`MiniMax`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`M2.7`{.docutils .literal .notranslate}]{.pre}, [`GPT-OSS`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`120B`{.docutils .literal .notranslate}]{.pre}, or [`DeepSeek`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`V4`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`Pro`{.docutils .literal .notranslate}]{.pre}), or pick [`Other...`{.docutils .literal .notranslate}]{.pre} to enter any model ID from the [NVIDIA Endpoints catalog](https://build.nvidia.com){.reference .external rel="noreferer noopener" target="_blank"}.

NemoClaw validates the model against the catalog API before creating the sandbox.

Tip

Use this option for Nemotron and other models hosted on [`build.nvidia.com`{.docutils .literal .notranslate}]{.pre}. If you run NVIDIA Nemotron from a self-hosted NIM, an enterprise gateway, or any other endpoint, choose **Option 3** instead, since all Nemotron models expose OpenAI-compatible APIs.

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1zZXJ2ZXIiIGhlaWdodD0iMS4wZW0iIHZlcnNpb249IjEuMSIgdmlld2JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMS4wZW0iPjxwYXRoIGQ9Ik0xLjc1IDFoMTIuNWMuOTY2IDAgMS43NS43ODQgMS43NSAxLjc1djRjMCAuMzcyLS4xMTYuNzE3LS4zMTQgMSAuMTk4LjI4My4zMTQuNjI4LjMxNCAxdjRhMS43NSAxLjc1IDAgMCAxLTEuNzUgMS43NUgxLjc1QTEuNzUgMS43NSAwIDAgMSAwIDEyLjc1di00YzAtLjM1OC4xMDktLjcwNy4zMTQtMWExLjczOSAxLjczOSAwIDAgMS0uMzE0LTF2LTRDMCAxLjc4NC43ODQgMSAxLjc1IDFaTTEuNSAyLjc1djRjMCAuMTM4LjExMi4yNS4yNS4yNWgxMi41YS4yNS4yNSAwIDAgMCAuMjUtLjI1di00YS4yNS4yNSAwIDAgMC0uMjUtLjI1SDEuNzVhLjI1LjI1IDAgMCAwLS4yNS4yNVptLjI1IDUuNzVhLjI1LjI1IDAgMCAwLS4yNS4yNXY0YzAgLjEzOC4xMTIuMjUuMjUuMjVoMTIuNWEuMjUuMjUgMCAwIDAgLjI1LS4yNXYtNGEuMjUuMjUgMCAwIDAtLjI1LS4yNVpNNyA0Ljc1QS43NS43NSAwIDAgMSA3Ljc1IDRoNC41YS43NS43NSAwIDAgMSAwIDEuNWgtNC41QS43NS43NSAwIDAgMSA3IDQuNzVaTTcuNzUgMTBoNC41YS43NS43NSAwIDAgMSAwIDEuNWgtNC41YS43NS43NSAwIDAgMSAwLTEuNVpNMyA0Ljc1QS43NS43NSAwIDAgMSAzLjc1IDRoLjVhLjc1Ljc1IDAgMCAxIDAgMS41aC0uNUEuNzUuNzUgMCAwIDEgMyA0Ljc1Wk0zLjc1IDEwaC41YS43NS43NSAwIDAgMSAwIDEuNWgtLjVhLjc1Ljc1IDAgMCAxIDAtMS41WiI+PC9wYXRoPjwvc3ZnPg==){.sd-octicon .sd-octicon-server}]{.sd-summary-icon}[Option 2: OpenAI]{.sd-summary-text}[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1jaGV2cm9uLXJpZ2h0IiBoZWlnaHQ9IjEuNWVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEuNWVtIj48cGF0aCBkPSJNOC43MiAxOC43OGEuNzUuNzUgMCAwIDEgMC0xLjA2TDE0LjQ0IDEyIDguNzIgNi4yOGEuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOGw2LjI1IDYuMjVhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtNi4yNSA2LjI1YS43NS43NSAwIDAgMS0xLjA2IDBaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-chevron-right}]{.sd-summary-state-marker .sd-summary-chevron-right}

Routes inference to the OpenAI API at [`https://api.openai.com/v1`{.docutils .literal .notranslate}]{.pre}.

Use [`OPENAI_API_KEY`{.docutils .literal .notranslate}]{.pre} for the API key. Get one from the [OpenAI API keys page](https://platform.openai.com/api-keys){.reference .external rel="noreferer noopener" target="_blank"}.

Respond to the wizard as follows.

1.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, type [`2`{.docutils .literal .notranslate}]{.pre} to select **OpenAI**.

2.  At the [`OPENAI_API_KEY:`{.docutils .literal .notranslate}]{.pre} prompt, paste your key if it is not already exported.

3.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`model`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, pick a curated model (for example, [`gpt-5.4`{.docutils .literal .notranslate}]{.pre}, [`gpt-5.4-mini`{.docutils .literal .notranslate}]{.pre}, [`gpt-5.4-nano`{.docutils .literal .notranslate}]{.pre}, or [`gpt-5.4-pro-2026-03-05`{.docutils .literal .notranslate}]{.pre}), or pick **Other...** to enter any OpenAI model ID.

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1saW5rLWV4dGVybmFsIiBoZWlnaHQ9IjEuMGVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAxNiAxNiIgd2lkdGg9IjEuMGVtIj48cGF0aCBkPSJNMy43NSAyaDMuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuNWEuMjUuMjUgMCAwIDAtLjI1LjI1djguNWMwIC4xMzguMTEyLjI1LjI1LjI1aDguNWEuMjUuMjUgMCAwIDAgLjI1LS4yNXYtMy41YS43NS43NSAwIDAgMSAxLjUgMHYzLjVBMS43NSAxLjc1IDAgMCAxIDEyLjI1IDE0aC04LjVBMS43NSAxLjc1IDAgMCAxIDIgMTIuMjV2LTguNUMyIDIuNzg0IDIuNzg0IDIgMy43NSAyWm02Ljg1NC0xaDQuMTQ2YS4yNS4yNSAwIDAgMSAuMjUuMjV2NC4xNDZhLjI1LjI1IDAgMCAxLS40MjcuMTc3TDEzLjAzIDQuMDMgOS4yOCA3Ljc4YS43NTEuNzUxIDAgMCAxLTEuMDQyLS4wMTguNzUxLjc1MSAwIDAgMS0uMDE4LTEuMDQybDMuNzUtMy43NS0xLjU0My0xLjU0M0EuMjUuMjUgMCAwIDEgMTAuNjA0IDFaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-link-external}]{.sd-summary-icon}[Option 3: Other OpenAI-Compatible Endpoint]{.sd-summary-text}[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1jaGV2cm9uLXJpZ2h0IiBoZWlnaHQ9IjEuNWVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEuNWVtIj48cGF0aCBkPSJNOC43MiAxOC43OGEuNzUuNzUgMCAwIDEgMC0xLjA2TDE0LjQ0IDEyIDguNzIgNi4yOGEuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOGw2LjI1IDYuMjVhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtNi4yNSA2LjI1YS43NS43NSAwIDAgMS0xLjA2IDBaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-chevron-right}]{.sd-summary-state-marker .sd-summary-chevron-right}

Routes inference to any server that implements [`/v1/chat/completions`{.docutils .literal .notranslate}]{.pre}, including OpenRouter, LocalAI, llama.cpp, vLLM behind a proxy, and any compatible gateway.

Use [`COMPATIBLE_API_KEY`{.docutils .literal .notranslate}]{.pre} for the API key. Set it to whatever credential your endpoint expects. If your endpoint does not require auth, use any non-empty placeholder.

Respond to the wizard as follows.

1.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, type [`3`{.docutils .literal .notranslate}]{.pre} to select **Other OpenAI-compatible endpoint**.

2.  At the [`OpenAI-compatible`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`base`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`URL`{.docutils .literal .notranslate}]{.pre} prompt, enter the provider's base URL. Find the exact value in your provider's API documentation. NemoClaw appends [`/v1`{.docutils .literal .notranslate}]{.pre} automatically, so leave that suffix off.

3.  At the [`COMPATIBLE_API_KEY:`{.docutils .literal .notranslate}]{.pre} prompt, paste your key if it is not already exported.

4.  At the [`Other`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`OpenAI-compatible`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`endpoint`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`model`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[]:`{.docutils .literal .notranslate}]{.pre} prompt, enter the model ID exactly as it appears in your provider's model catalog.

For example, when you use NVIDIA's OpenAI-compatible inference endpoint, enter [`https://inference-api.nvidia.com`{.docutils .literal .notranslate}]{.pre} as the base URL and the model ID your endpoint exposes, such as [`openai/openai/gpt-5.5`{.docutils .literal .notranslate}]{.pre}.

NemoClaw sends a real inference request to validate the endpoint and model. If the endpoint does not return the streaming events OpenClaw needs from the Responses API, NemoClaw falls back to the chat completions API and configures OpenClaw to use [`openai-completions`{.docutils .literal .notranslate}]{.pre}.

Tip

NVIDIA Nemotron models expose OpenAI-compatible APIs, so this option is the right choice for any Nemotron deployment that does not live on [`build.nvidia.com`{.docutils .literal .notranslate}]{.pre}. Common examples include a self-hosted NIM container, an enterprise NVIDIA AI Enterprise gateway, or a vLLM/SGLang server running Nemotron weights. Point the base URL at your endpoint and enter the Nemotron model ID exactly as your server reports it.

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1zZXJ2ZXIiIGhlaWdodD0iMS4wZW0iIHZlcnNpb249IjEuMSIgdmlld2JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMS4wZW0iPjxwYXRoIGQ9Ik0xLjc1IDFoMTIuNWMuOTY2IDAgMS43NS43ODQgMS43NSAxLjc1djRjMCAuMzcyLS4xMTYuNzE3LS4zMTQgMSAuMTk4LjI4My4zMTQuNjI4LjMxNCAxdjRhMS43NSAxLjc1IDAgMCAxLTEuNzUgMS43NUgxLjc1QTEuNzUgMS43NSAwIDAgMSAwIDEyLjc1di00YzAtLjM1OC4xMDktLjcwNy4zMTQtMWExLjczOSAxLjczOSAwIDAgMS0uMzE0LTF2LTRDMCAxLjc4NC43ODQgMSAxLjc1IDFaTTEuNSAyLjc1djRjMCAuMTM4LjExMi4yNS4yNS4yNWgxMi41YS4yNS4yNSAwIDAgMCAuMjUtLjI1di00YS4yNS4yNSAwIDAgMC0uMjUtLjI1SDEuNzVhLjI1LjI1IDAgMCAwLS4yNS4yNVptLjI1IDUuNzVhLjI1LjI1IDAgMCAwLS4yNS4yNXY0YzAgLjEzOC4xMTIuMjUuMjUuMjVoMTIuNWEuMjUuMjUgMCAwIDAgLjI1LS4yNXYtNGEuMjUuMjUgMCAwIDAtLjI1LS4yNVpNNyA0Ljc1QS43NS43NSAwIDAgMSA3Ljc1IDRoNC41YS43NS43NSAwIDAgMSAwIDEuNWgtNC41QS43NS43NSAwIDAgMSA3IDQuNzVaTTcuNzUgMTBoNC41YS43NS43NSAwIDAgMSAwIDEuNWgtNC41YS43NS43NSAwIDAgMSAwLTEuNVpNMyA0Ljc1QS43NS43NSAwIDAgMSAzLjc1IDRoLjVhLjc1Ljc1IDAgMCAxIDAgMS41aC0uNUEuNzUuNzUgMCAwIDEgMyA0Ljc1Wk0zLjc1IDEwaC41YS43NS43NSAwIDAgMSAwIDEuNWgtLjVhLjc1Ljc1IDAgMCAxIDAtMS41WiI+PC9wYXRoPjwvc3ZnPg==){.sd-octicon .sd-octicon-server}]{.sd-summary-icon}[Option 4: Anthropic]{.sd-summary-text}[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1jaGV2cm9uLXJpZ2h0IiBoZWlnaHQ9IjEuNWVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEuNWVtIj48cGF0aCBkPSJNOC43MiAxOC43OGEuNzUuNzUgMCAwIDEgMC0xLjA2TDE0LjQ0IDEyIDguNzIgNi4yOGEuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOGw2LjI1IDYuMjVhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtNi4yNSA2LjI1YS43NS43NSAwIDAgMS0xLjA2IDBaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-chevron-right}]{.sd-summary-state-marker .sd-summary-chevron-right}

Routes inference to the Anthropic Messages API at [`https://api.anthropic.com`{.docutils .literal .notranslate}]{.pre}.

Use [`ANTHROPIC_API_KEY`{.docutils .literal .notranslate}]{.pre} for the API key. Get one from the [Anthropic console keys page](https://console.anthropic.com/settings/keys){.reference .external rel="noreferer noopener" target="_blank"}.

Respond to the wizard as follows.

1.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, type [`4`{.docutils .literal .notranslate}]{.pre} to select **Anthropic**.

2.  At the [`ANTHROPIC_API_KEY:`{.docutils .literal .notranslate}]{.pre} prompt, paste your key if it is not already exported.

3.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`model`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, pick a curated model (for example, [`claude-sonnet-4-6`{.docutils .literal .notranslate}]{.pre}, [`claude-haiku-4-5`{.docutils .literal .notranslate}]{.pre}, or [`claude-opus-4-6`{.docutils .literal .notranslate}]{.pre}), or pick **Other...** to enter any Claude model ID.

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1saW5rLWV4dGVybmFsIiBoZWlnaHQ9IjEuMGVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAxNiAxNiIgd2lkdGg9IjEuMGVtIj48cGF0aCBkPSJNMy43NSAyaDMuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuNWEuMjUuMjUgMCAwIDAtLjI1LjI1djguNWMwIC4xMzguMTEyLjI1LjI1LjI1aDguNWEuMjUuMjUgMCAwIDAgLjI1LS4yNXYtMy41YS43NS43NSAwIDAgMSAxLjUgMHYzLjVBMS43NSAxLjc1IDAgMCAxIDEyLjI1IDE0aC04LjVBMS43NSAxLjc1IDAgMCAxIDIgMTIuMjV2LTguNUMyIDIuNzg0IDIuNzg0IDIgMy43NSAyWm02Ljg1NC0xaDQuMTQ2YS4yNS4yNSAwIDAgMSAuMjUuMjV2NC4xNDZhLjI1LjI1IDAgMCAxLS40MjcuMTc3TDEzLjAzIDQuMDMgOS4yOCA3Ljc4YS43NTEuNzUxIDAgMCAxLTEuMDQyLS4wMTguNzUxLjc1MSAwIDAgMS0uMDE4LTEuMDQybDMuNzUtMy43NS0xLjU0My0xLjU0M0EuMjUuMjUgMCAwIDEgMTAuNjA0IDFaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-link-external}]{.sd-summary-icon}[Option 5: Other Anthropic-Compatible Endpoint]{.sd-summary-text}[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1jaGV2cm9uLXJpZ2h0IiBoZWlnaHQ9IjEuNWVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEuNWVtIj48cGF0aCBkPSJNOC43MiAxOC43OGEuNzUuNzUgMCAwIDEgMC0xLjA2TDE0LjQ0IDEyIDguNzIgNi4yOGEuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOGw2LjI1IDYuMjVhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtNi4yNSA2LjI1YS43NS43NSAwIDAgMS0xLjA2IDBaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-chevron-right}]{.sd-summary-state-marker .sd-summary-chevron-right}

Routes inference to any server that implements the Anthropic Messages API at [`/v1/messages`{.docutils .literal .notranslate}]{.pre}, including Claude proxies, Bedrock-compatible gateways, and self-hosted Anthropic-compatible servers.

Use [`COMPATIBLE_ANTHROPIC_API_KEY`{.docutils .literal .notranslate}]{.pre} for the API key. Set it to whatever credential your endpoint expects.

Respond to the wizard as follows.

1.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, type [`5`{.docutils .literal .notranslate}]{.pre} to select **Other Anthropic-compatible endpoint**.

2.  At the [`Anthropic-compatible`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`base`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`URL`{.docutils .literal .notranslate}]{.pre} prompt, enter the proxy or gateway's base URL from its documentation.

3.  At the [`COMPATIBLE_ANTHROPIC_API_KEY:`{.docutils .literal .notranslate}]{.pre} prompt, paste your key if it is not already exported.

4.  At the [`Other`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`Anthropic-compatible`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`endpoint`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`model`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[]:`{.docutils .literal .notranslate}]{.pre} prompt, enter the model ID exactly as it appears in your gateway's model catalog.

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1zZXJ2ZXIiIGhlaWdodD0iMS4wZW0iIHZlcnNpb249IjEuMSIgdmlld2JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMS4wZW0iPjxwYXRoIGQ9Ik0xLjc1IDFoMTIuNWMuOTY2IDAgMS43NS43ODQgMS43NSAxLjc1djRjMCAuMzcyLS4xMTYuNzE3LS4zMTQgMSAuMTk4LjI4My4zMTQuNjI4LjMxNCAxdjRhMS43NSAxLjc1IDAgMCAxLTEuNzUgMS43NUgxLjc1QTEuNzUgMS43NSAwIDAgMSAwIDEyLjc1di00YzAtLjM1OC4xMDktLjcwNy4zMTQtMWExLjczOSAxLjczOSAwIDAgMS0uMzE0LTF2LTRDMCAxLjc4NC43ODQgMSAxLjc1IDFaTTEuNSAyLjc1djRjMCAuMTM4LjExMi4yNS4yNS4yNWgxMi41YS4yNS4yNSAwIDAgMCAuMjUtLjI1di00YS4yNS4yNSAwIDAgMC0uMjUtLjI1SDEuNzVhLjI1LjI1IDAgMCAwLS4yNS4yNVptLjI1IDUuNzVhLjI1LjI1IDAgMCAwLS4yNS4yNXY0YzAgLjEzOC4xMTIuMjUuMjUuMjVoMTIuNWEuMjUuMjUgMCAwIDAgLjI1LS4yNXYtNGEuMjUuMjUgMCAwIDAtLjI1LS4yNVpNNyA0Ljc1QS43NS43NSAwIDAgMSA3Ljc1IDRoNC41YS43NS43NSAwIDAgMSAwIDEuNWgtNC41QS43NS43NSAwIDAgMSA3IDQuNzVaTTcuNzUgMTBoNC41YS43NS43NSAwIDAgMSAwIDEuNWgtNC41YS43NS43NSAwIDAgMSAwLTEuNVpNMyA0Ljc1QS43NS43NSAwIDAgMSAzLjc1IDRoLjVhLjc1Ljc1IDAgMCAxIDAgMS41aC0uNUEuNzUuNzUgMCAwIDEgMyA0Ljc1Wk0zLjc1IDEwaC41YS43NS43NSAwIDAgMSAwIDEuNWgtLjVhLjc1Ljc1IDAgMCAxIDAtMS41WiI+PC9wYXRoPjwvc3ZnPg==){.sd-octicon .sd-octicon-server}]{.sd-summary-icon}[Option 6: Google Gemini]{.sd-summary-text}[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1jaGV2cm9uLXJpZ2h0IiBoZWlnaHQ9IjEuNWVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEuNWVtIj48cGF0aCBkPSJNOC43MiAxOC43OGEuNzUuNzUgMCAwIDEgMC0xLjA2TDE0LjQ0IDEyIDguNzIgNi4yOGEuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOGw2LjI1IDYuMjVhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtNi4yNSA2LjI1YS43NS43NSAwIDAgMS0xLjA2IDBaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-chevron-right}]{.sd-summary-state-marker .sd-summary-chevron-right}

Routes inference to Google's OpenAI-compatible Gemini endpoint at [`https://generativelanguage.googleapis.com/v1beta/openai/`{.docutils .literal .notranslate}]{.pre}.

Use [`GEMINI_API_KEY`{.docutils .literal .notranslate}]{.pre} for the API key. Get one from [Google AI Studio API keys](https://aistudio.google.com/app/apikey){.reference .external rel="noreferer noopener" target="_blank"}.

Respond to the wizard as follows.

1.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, type [`6`{.docutils .literal .notranslate}]{.pre} to select **Google Gemini**.

2.  At the [`GEMINI_API_KEY:`{.docutils .literal .notranslate}]{.pre} prompt, paste your key if it is not already exported.

3.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`model`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[5]:`{.docutils .literal .notranslate}]{.pre} prompt, pick a curated model (for example, [`gemini-3.1-pro-preview`{.docutils .literal .notranslate}]{.pre}, [`gemini-3.1-flash-lite-preview`{.docutils .literal .notranslate}]{.pre}, [`gemini-3-flash-preview`{.docutils .literal .notranslate}]{.pre}, [`gemini-2.5-pro`{.docutils .literal .notranslate}]{.pre}, [`gemini-2.5-flash`{.docutils .literal .notranslate}]{.pre}, or [`gemini-2.5-flash-lite`{.docutils .literal .notranslate}]{.pre}), or pick **Other...** to enter any Gemini model ID.

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1jcHUiIGhlaWdodD0iMS4wZW0iIHZlcnNpb249IjEuMSIgdmlld2JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMS4wZW0iPjxwYXRoIGQ9Ik02LjUuNzVWMmgzVi43NWEuNzUuNzUgMCAwIDEgMS41IDBWMmgxLjI1Yy45NjYgMCAxLjc1Ljc4NCAxLjc1IDEuNzVWNWgxLjI1YS43NS43NSAwIDAgMSAwIDEuNUgxNHYzaDEuMjVhLjc1Ljc1IDAgMCAxIDAgMS41SDE0djEuMjVBMS43NSAxLjc1IDAgMCAxIDEyLjI1IDE0SDExdjEuMjVhLjc1Ljc1IDAgMCAxLTEuNSAwVjE0aC0zdjEuMjVhLjc1Ljc1IDAgMCAxLTEuNSAwVjE0SDMuNzVBMS43NSAxLjc1IDAgMCAxIDIgMTIuMjVWMTFILjc1YS43NS43NSAwIDAgMSAwLTEuNUgydi0zSC43NWEuNzUuNzUgMCAwIDEgMC0xLjVIMlYzLjc1QzIgMi43ODQgMi43ODQgMiAzLjc1IDJINVYuNzVhLjc1Ljc1IDAgMCAxIDEuNSAwWm01Ljc1IDExLjc1YS4yNS4yNSAwIDAgMCAuMjUtLjI1di04LjVhLjI1LjI1IDAgMCAwLS4yNS0uMjVoLTguNWEuMjUuMjUgMCAwIDAtLjI1LjI1djguNWMwIC4xMzguMTEyLjI1LjI1LjI1Wk01Ljc1IDVoNC41YS43NS43NSAwIDAgMSAuNzUuNzV2NC41YS43NS43NSAwIDAgMS0uNzUuNzVoLTQuNWEuNzUuNzUgMCAwIDEtLjc1LS43NXYtNC41QS43NS43NSAwIDAgMSA1Ljc1IDVabS43NSA0LjVoM3YtM2gtM1oiPjwvcGF0aD48L3N2Zz4=){.sd-octicon .sd-octicon-cpu}]{.sd-summary-icon}[Option 7: Local Ollama]{.sd-summary-text}[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1jaGV2cm9uLXJpZ2h0IiBoZWlnaHQ9IjEuNWVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEuNWVtIj48cGF0aCBkPSJNOC43MiAxOC43OGEuNzUuNzUgMCAwIDEgMC0xLjA2TDE0LjQ0IDEyIDguNzIgNi4yOGEuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOGw2LjI1IDYuMjVhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtNi4yNSA2LjI1YS43NS43NSAwIDAgMS0xLjA2IDBaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-chevron-right}]{.sd-summary-state-marker .sd-summary-chevron-right}

Routes inference to a local Ollama instance. Depending on your platform, the wizard can use an existing daemon, start an installed daemon, or offer an install action.

No API key is required. On non-WSL hosts, NemoClaw generates a token and starts an authenticated proxy so containers can reach Ollama without exposing the daemon directly to your network. On WSL, NemoClaw can also use Ollama on the Windows host through [`host.docker.internal`{.docutils .literal .notranslate}]{.pre}.

Respond to the wizard as follows.

1.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, type [`7`{.docutils .literal .notranslate}]{.pre} to select **Local Ollama**.

2.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`model`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, pick from **Ollama models** if any are already installed. If none are installed, pick a **starter model** to pull and load now, or pick **Other...** to enter any Ollama model ID.

For setup details, including GPU recommendations and starter model choices, refer to [[Use a Local Inference Server]{.std .std-doc}](../inference/use-local-inference.html){.reference .internal}.

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1naXQtY29tcGFyZSIgaGVpZ2h0PSIxLjBlbSIgdmVyc2lvbj0iMS4xIiB2aWV3Ym94PSIwIDAgMTYgMTYiIHdpZHRoPSIxLjBlbSI+PHBhdGggZD0iTTkuNTczLjY3N0EuMjUuMjUgMCAwIDEgMTAgLjg1NFYyLjVoMUEyLjUgMi41IDAgMCAxIDEzLjUgNXY1LjYyOGEyLjI1MSAyLjI1MSAwIDEgMS0xLjUgMFY1YTEgMSAwIDAgMC0xLTFoLTF2MS42NDZhLjI1LjI1IDAgMCAxLS40MjcuMTc3TDcuMTc3IDMuNDI3YS4yNS4yNSAwIDAgMSAwLS4zNTRaTTYgMTJ2LTEuNjQ2YS4yNS4yNSAwIDAgMSAuNDI3LS4xNzdsMi4zOTYgMi4zOTZhLjI1LjI1IDAgMCAxIDAgLjM1NGwtMi4zOTYgMi4zOTZBLjI1LjI1IDAgMCAxIDYgMTUuMTQ2VjEzLjVINUEyLjUgMi41IDAgMCAxIDIuNSAxMVY1LjM3MmEyLjI1IDIuMjUgMCAxIDEgMS41IDBWMTFhMSAxIDAgMCAwIDEgMVpNNCAzLjI1YS43NS43NSAwIDEgMC0xLjUgMCAuNzUuNzUgMCAwIDAgMS41IDBaTTEyLjc1IDEyYS43NS43NSAwIDEgMCAwIDEuNS43NS43NSAwIDAgMCAwLTEuNVoiPjwvcGF0aD48L3N2Zz4=){.sd-octicon .sd-octicon-git-compare}]{.sd-summary-icon}[Option 8: Model Router]{.sd-summary-text}[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1jaGV2cm9uLXJpZ2h0IiBoZWlnaHQ9IjEuNWVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEuNWVtIj48cGF0aCBkPSJNOC43MiAxOC43OGEuNzUuNzUgMCAwIDEgMC0xLjA2TDE0LjQ0IDEyIDguNzIgNi4yOGEuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOGw2LjI1IDYuMjVhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtNi4yNSA2LjI1YS43NS43NSAwIDAgMS0xLjA2IDBaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-chevron-right}]{.sd-summary-state-marker .sd-summary-chevron-right}

Starts a host-side model router and routes sandbox inference through OpenShell to that router. The router chooses from the model pool in [`nemoclaw-blueprint/router/pool-config.yaml`{.docutils .literal .notranslate}]{.pre} for each request.

Use [`NVIDIA_API_KEY`{.docutils .literal .notranslate}]{.pre} for the model pool credentials.

Respond to the wizard as follows.

1.  At the [`Choose`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`[1]:`{.docutils .literal .notranslate}]{.pre} prompt, type [`8`{.docutils .literal .notranslate}]{.pre} to select **Model Router (experimental)**.

2.  At the [`NVIDIA_API_KEY:`{.docutils .literal .notranslate}]{.pre} prompt, paste your key if it is not already exported.

3.  Review the configuration summary and continue with the sandbox build.

For scripted setup, set:

    $ NEMOCLAW_PROVIDER=routed NVIDIA_API_KEY=<your-key> nemoclaw onboard --non-interactive

The router listens on the host at port [`4000`{.docutils .literal .notranslate}]{.pre}. The sandbox still calls [`https://inference.local/v1`{.docutils .literal .notranslate}]{.pre}, so do not point in-sandbox tools at the host router port directly.

[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1iZWFrZXIiIGhlaWdodD0iMS4wZW0iIHZlcnNpb249IjEuMSIgdmlld2JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMS4wZW0iPjxwYXRoIGQ9Ik01IDUuNzgyVjIuNWgtLjI1YS43NS43NSAwIDAgMSAwLTEuNWg2LjVhLjc1Ljc1IDAgMCAxIDAgMS41SDExdjMuMjgybDMuNjY2IDUuNzZDMTUuNjE5IDEzLjA0IDE0LjU0MyAxNSAxMi43NjcgMTVIMy4yMzNjLTEuNzc2IDAtMi44NTItMS45Ni0xLjg5OS0zLjQ1OFptLTIuNCA2LjU2NWEuNzUuNzUgMCAwIDAgLjYzMyAxLjE1M2g5LjUzNGEuNzUuNzUgMCAwIDAgLjYzMy0xLjE1M0wxMi4yMjUgMTAuNWgtOC40NVpNOS41IDIuNWgtM1Y2YzAgLjE0My0uMDQuMjgzLS4xMTcuNDAzTDQuNzMgOWg2LjU0TDkuNjE3IDYuNDAzQS43NDYuNzQ2IDAgMCAxIDkuNSA2WiI+PC9wYXRoPjwvc3ZnPg==){.sd-octicon .sd-octicon-beaker}]{.sd-summary-icon}[Experimental: Local NIM and Local vLLM]{.sd-summary-text}[![](data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9InNkLW9jdGljb24gc2Qtb2N0aWNvbi1jaGV2cm9uLXJpZ2h0IiBoZWlnaHQ9IjEuNWVtIiB2ZXJzaW9uPSIxLjEiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjEuNWVtIj48cGF0aCBkPSJNOC43MiAxOC43OGEuNzUuNzUgMCAwIDEgMC0xLjA2TDE0LjQ0IDEyIDguNzIgNi4yOGEuNzUxLjc1MSAwIDAgMSAuMDE4LTEuMDQyLjc1MS43NTEgMCAwIDEgMS4wNDItLjAxOGw2LjI1IDYuMjVhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtNi4yNSA2LjI1YS43NS43NSAwIDAgMS0xLjA2IDBaIj48L3BhdGg+PC9zdmc+){.sd-octicon .sd-octicon-chevron-right}]{.sd-summary-state-marker .sd-summary-chevron-right}

These options appear when [`NEMOCLAW_EXPERIMENTAL=1`{.docutils .literal .notranslate}]{.pre} is set and the prerequisites are met.

-   **Local NVIDIA NIM** requires a NIM-capable GPU. NemoClaw pulls and manages a NIM container.

-   **Local vLLM** uses a vLLM server already running on [`localhost:8000`{.docutils .literal .notranslate}]{.pre}, or installs and starts a managed vLLM container on supported DGX Spark, DGX Station, and Linux NVIDIA GPU hosts. NemoClaw auto-detects the loaded model.

For setup, refer to [[Use a Local Inference Server]{.std .std-doc}](../inference/use-local-inference.html){.reference .internal}.

### Review the Configuration Before the Sandbox Build[\#](#review-the-configuration-before-the-sandbox-build "Link to this heading"){.headerlink}

After you enter the sandbox name, the wizard prints a review summary and asks for final confirmation before registering the provider, prompting for optional integrations, and building the sandbox image. For example, if you picked an OpenAI-compatible endpoint, the summary looks like the following:

      ──────────────────────────────────────────────────
      Review configuration
      ──────────────────────────────────────────────────
      Provider:      compatible-endpoint
      Model:         openai/openai/gpt-5.5
      API key:       COMPATIBLE_API_KEY (staged for OpenShell gateway registration)
      Web search:    disabled
      Messaging:     none
      Sandbox name:  my-gpt-claw
      Note:          Sandbox build typically takes 5–15 minutes on this host.
      ──────────────────────────────────────────────────
      Web search and messaging channels will be prompted next.
      Apply this configuration? [Y/n]:

The default is [`Y`{.docutils .literal .notranslate}]{.pre}, so you can press Enter once to continue. Answer [`n`{.docutils .literal .notranslate}]{.pre} to abort cleanly, fix the entries, and re-run [`nemoclaw`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`onboard`{.docutils .literal .notranslate}]{.pre}.

Non-interactive runs ([`NEMOCLAW_NON_INTERACTIVE=1`{.docutils .literal .notranslate}]{.pre}) print the summary for log clarity but skip the prompt.

### Configure Web Search and Messaging[\#](#configure-web-search-and-messaging "Link to this heading"){.headerlink}

After you confirm the summary, NemoClaw registers the selected provider with the OpenShell gateway and sets the [`inference.local`{.docutils .literal .notranslate}]{.pre} route. The wizard then asks whether to enable Brave Web Search. If you enable it, enter a Brave Search API key when prompted.

The wizard also offers messaging channels such as Telegram, Discord, and Slack. Press a channel number to toggle it, then press Enter to continue. If you select a channel, NemoClaw validates the token format before it bakes the channel configuration into the sandbox. For example, Slack bot tokens must start with [`xoxb-`{.docutils .literal .notranslate}]{.pre}.

### Choose Network Policy Presets[\#](#choose-network-policy-presets "Link to this heading"){.headerlink}

After the sandbox image builds and OpenClaw starts inside the sandbox, NemoClaw asks which network policy tier to apply. The default **Balanced** tier includes common development presets such as npm, PyPI, Hugging Face, Homebrew, and Brave Search when the selected agent supports web search. Use the arrow keys or [`j`{.docutils .literal .notranslate}]{.pre} and [`k`{.docutils .literal .notranslate}]{.pre} to move, Space to select, and Enter to confirm.

The preset selector lets you include more destinations, such as GitHub, Jira, Slack, Telegram, or local inference. Press [`r`{.docutils .literal .notranslate}]{.pre} to toggle a selected preset between read-only and read-write when the preset supports both modes.

When the install completes, a summary confirms the running environment. Before printing the summary, NemoClaw verifies that the sandbox gateway and dashboard port forward are reachable. Inference route and messaging bridge checks are reported as warnings when they need more time or additional configuration. The [`Model`{.docutils .literal .notranslate}]{.pre} and provider line reflects the inference option you picked during onboarding. The example below shows the result if you picked an OpenAI-compatible endpoint during onboarding.

    ──────────────────────────────────────────────────
    Sandbox      my-gpt-claw (Landlock + seccomp + netns)
    Model        openai/openai/gpt-5.5 (Other OpenAI-compatible endpoint)
    ──────────────────────────────────────────────────
    Run:         nemoclaw my-gpt-claw connect
    Status:      nemoclaw my-gpt-claw status
    Logs:        nemoclaw my-gpt-claw logs --follow
    ──────────────────────────────────────────────────

    To change settings later:
      Model:       nemoclaw inference get
                   nemoclaw inference set --model <model> --provider <provider> --sandbox my-gpt-claw

    [INFO]  === Installation complete ===

If you picked a different option, the [`Model`{.docutils .literal .notranslate}]{.pre} line shows that provider's model and label instead. For example, you might see [`gpt-5.4`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`(OpenAI)`{.docutils .literal .notranslate}]{.pre}, [`claude-sonnet-4-6`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`(Anthropic)`{.docutils .literal .notranslate}]{.pre}, [`gemini-2.5-flash`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`(Google`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`Gemini)`{.docutils .literal .notranslate}]{.pre}, [`llama3.1:8b`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`(Local`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`Ollama)`{.docutils .literal .notranslate}]{.pre}, [`nvidia-routed`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`(Model`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`Router)`{.docutils .literal .notranslate}]{.pre}, or [`<your-model>`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`(Other`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`OpenAI-compatible`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`endpoint)`{.docutils .literal .notranslate}]{.pre}.

## Run Your First Agent Prompt[\#](#run-your-first-agent-prompt "Link to this heading"){.headerlink}

You can chat with the agent from the terminal or the browser.

### Open the OpenClaw UI in a Browser to Chat with the Agent[\#](#open-the-openclaw-ui-in-a-browser-to-chat-with-the-agent "Link to this heading"){.headerlink}

The onboard wizard starts a background port forward to the sandbox dashboard, then prints the dashboard URL in the install summary. The default host port is [`18789`{.docutils .literal .notranslate}]{.pre}. If that port is already taken, NemoClaw uses the next free dashboard port, such as [`18790`{.docutils .literal .notranslate}]{.pre}, and prints that port in the final URL. The gateway token is redacted from displayed output; retrieve it explicitly when the browser asks for authentication.

    ──────────────────────────────────────────────────
    OpenClaw UI (auth token redacted from displayed URLs)
    Port 18790 must be forwarded before opening these URLs.
    Dashboard: http://127.0.0.1:18790/
    Token:       nemoclaw my-gpt-claw gateway-token --quiet
                 append  #token=<token> locally if the browser asks for auth.
    ──────────────────────────────────────────────────

Open the dashboard URL in your browser. If the browser asks for authentication, run the printed [`gateway-token`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`--quiet`{.docutils .literal .notranslate}]{.pre} command and append [`#token=<token>`{.docutils .literal .notranslate}]{.pre} locally. Treat the token like a password.

### Chat with the Agent from the Terminal[\#](#chat-with-the-agent-from-the-terminal "Link to this heading"){.headerlink}

Connect to the sandbox and use the OpenClaw CLI.

    nemoclaw my-assistant connect

In the sandbox shell, send a single message and print the response.

    openclaw agent --agent main --local -m "hello" --session-id test

## Next Steps[\#](#next-steps "Link to this heading"){.headerlink}

Navigate to the following topics to learn more about NemoClaw.

-   [[NemoClaw Overview]{.std .std-doc}](../about/overview.html){.reference .internal} to learn what NemoClaw is and its capabilities.

-   [[Architecture Overview]{.std .std-doc}](../about/how-it-works.html){.reference .internal} to understand how NemoClaw works.

-   [[Ecosystem]{.std .std-doc}](../about/ecosystem.html){.reference .internal} to understand how OpenClaw, OpenShell, and NemoClaw relate in the wider stack, and when to use NemoClaw versus OpenShell.

Use the following topics to learn how to use NemoClaw.

-   [[Manage NemoClaw sandboxes]{.std .std-doc}](../manage-sandboxes/lifecycle.html){.reference .internal} for port forwards, rebuilds, upgrades, and uninstall.

-   [[Inference Options]{.std .std-doc}](../inference/inference-options.html){.reference .internal} to use a different model or endpoint.

-   [[Network Policies]{.std .std-doc}](../network-policy/approve-network-requests.html){.reference .internal} to manage egress approvals.

-   [[Troubleshooting]{.std .std-doc}](../reference/troubleshooting.html){.reference .internal} for common error messages and resolution steps.
