---
url: https://docs.nvidia.com/nemoclaw/latest/reference/network-policies.html
title: "Network Policies — NVIDIA NemoClaw Developer Guide"
---

# Network Policies[\#](#network-policies "Link to this heading"){.headerlink}

NemoClaw runs with a deny-by-default network policy. The sandbox can only reach endpoints that are explicitly allowed. Any request to an unlisted destination is intercepted by OpenShell, and the operator is prompted to approve or deny it in real time through the TUI.

## Baseline Policy[\#](#baseline-policy "Link to this heading"){.headerlink}

The baseline policy is defined in [`nemoclaw-blueprint/policies/openclaw-sandbox.yaml`{.docutils .literal .notranslate}]{.pre}.

Note

Hermes sandboxes use an agent-specific baseline policy in [`agents/hermes/policy-additions.yaml`{.docutils .literal .notranslate}]{.pre} so Hermes runtime binaries can reach the service endpoints they need while keeping the same deny-by-default model.

### Filesystem[\#](#filesystem "Link to this heading"){.headerlink}

  Path                                                                                                                                                                                                                                                                                                                                                                 Access
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------
  [`/sandbox`{.docutils .literal .notranslate}]{.pre}, [`/tmp`{.docutils .literal .notranslate}]{.pre}, [`/dev/null`{.docutils .literal .notranslate}]{.pre}                                                                                                                                                                                                           Read-write
  [`/usr`{.docutils .literal .notranslate}]{.pre}, [`/lib`{.docutils .literal .notranslate}]{.pre}, [`/proc`{.docutils .literal .notranslate}]{.pre}, [`/dev/urandom`{.docutils .literal .notranslate}]{.pre}, [`/app`{.docutils .literal .notranslate}]{.pre}, [`/etc`{.docutils .literal .notranslate}]{.pre}, [`/var/log`{.docutils .literal .notranslate}]{.pre}   Read-only

The sandbox process runs as a dedicated [`sandbox`{.docutils .literal .notranslate}]{.pre} user and group. Landlock LSM enforcement applies on a best-effort basis.

### Network Policies[\#](#id1 "Link to this heading"){.headerlink}

The following endpoint groups are allowed by default:

+----------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------+
| Policy                                                   | Endpoints                                                                                                                                        | Binaries                                                                                                                           | Rules                                                        |
+==========================================================+==================================================================================================================================================+====================================================================================================================================+==============================================================+
| [`nvidia`{.docutils .literal .notranslate}]{.pre}        | [`integrate.api.nvidia.com:443`{.docutils .literal .notranslate}]{.pre}, [`inference-api.nvidia.com:443`{.docutils .literal .notranslate}]{.pre} | [`/usr/local/bin/openclaw`{.docutils .literal .notranslate}]{.pre}                                                                 | POST to inference and embedding paths, GET to model listings |
+----------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------+
| [`clawhub`{.docutils .literal .notranslate}]{.pre}       | [`clawhub.ai:443`{.docutils .literal .notranslate}]{.pre}                                                                                        | [`/usr/local/bin/openclaw`{.docutils .literal .notranslate}]{.pre}, [`/usr/local/bin/node`{.docutils .literal .notranslate}]{.pre} | GET, POST                                                    |
+----------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------+
| [`openclaw_api`{.docutils .literal .notranslate}]{.pre}  | [`openclaw.ai:443`{.docutils .literal .notranslate}]{.pre}                                                                                       | [`/usr/local/bin/openclaw`{.docutils .literal .notranslate}]{.pre}, [`/usr/local/bin/node`{.docutils .literal .notranslate}]{.pre} | GET, POST                                                    |
+----------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------+
| [`openclaw_docs`{.docutils .literal .notranslate}]{.pre} | [`docs.openclaw.ai:443`{.docutils .literal .notranslate}]{.pre}                                                                                  | [`/usr/local/bin/openclaw`{.docutils .literal .notranslate}]{.pre}                                                                 | GET only                                                     |
+----------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------+
| [`npm_registry`{.docutils .literal .notranslate}]{.pre}  | [`registry.npmjs.org:443`{.docutils .literal .notranslate}]{.pre}                                                                                | [`/usr/local/bin/openclaw`{.docutils .literal .notranslate}]{.pre} only (openclaw plugins install)                                 | GET only                                                     |
+----------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------+

All endpoints use TLS termination and are enforced at port 443.

Note

GitHub access ([`github.com`{.docutils .literal .notranslate}]{.pre}, [`api.github.com`{.docutils .literal .notranslate}]{.pre}) is not included in the baseline policy. Apply the [`github`{.docutils .literal .notranslate}]{.pre} preset during onboarding if your agent needs GitHub access. See [[Customize the Network Policy]{.std .std-doc}](../network-policy/customize-network-policy.html){.reference .internal}.

Messaging endpoints for Telegram, Discord, and Slack are not included in the baseline policy. Enable the channel during onboarding or apply the matching messaging preset so the sandbox can reach that platform.

## Policy Tiers[\#](#policy-tiers "Link to this heading"){.headerlink}

During onboarding, the wizard prompts for a policy tier that determines the default set of presets applied on top of the baseline policy. The baseline policy is always applied regardless of the selected tier.

  Tier                 Presets included                                                                              Description
  -------------------- --------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------
  Restricted           None                                                                                          Base sandbox only. No third-party network access beyond inference and core agent tooling.
  Balanced (default)   npm, pypi, huggingface, brew, brave when supported                                            Full dev tooling and web search for agents that support web search. No messaging platform access.
  Open                 npm, pypi, huggingface, brew, brave when supported, slack, discord, telegram, jira, outlook   Broad access across third-party services including messaging and productivity.

After selecting a tier, a combined preset and access-mode screen lets you include or exclude individual presets and toggle each between read (GET only) and read-write (GET + POST/PUT/PATCH) access. Tier-default presets are pre-selected; additional presets can be added from the full list. NemoClaw filters tier defaults by the active agent's supported integrations. For example, Hermes onboarding omits the Brave Search preset because Hermes does not use NemoClaw's OpenClaw web-search configuration.

Tier definitions are stored in [`nemoclaw-blueprint/policies/tiers.yaml`{.docutils .literal .notranslate}]{.pre}.

In non-interactive mode, set the tier with [`NEMOCLAW_POLICY_TIER`{.docutils .literal .notranslate}]{.pre}:

    $ NEMOCLAW_POLICY_TIER=open nemoclaw onboard --non-interactive --yes-i-accept-third-party-software

If the value does not match a known tier, onboarding exits with an error listing the valid options.

### Inference[\#](#inference "Link to this heading"){.headerlink}

The baseline policy allows only the [`local`{.docutils .literal .notranslate}]{.pre} inference route. External inference providers are reached through the OpenShell gateway, not by direct sandbox egress.

## Operator Approval Flow[\#](#operator-approval-flow "Link to this heading"){.headerlink}

When the agent attempts to reach an endpoint not listed in the policy, OpenShell intercepts the request and presents it in the TUI for operator review:

1.  The agent makes a network request to an unlisted host.

2.  OpenShell blocks the connection and logs the attempt.

3.  The TUI command [`openshell`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`term`{.docutils .literal .notranslate}]{.pre} displays the blocked request with host, port, and requesting binary.

4.  The operator approves or denies the request.

5.  If approved, the endpoint is added to the running policy for the session.

To try this, run the walkthrough:

    $ ./scripts/walkthrough.sh

This opens a split tmux session with the TUI on the left and the agent on the right.

## Modifying the Policy[\#](#modifying-the-policy "Link to this heading"){.headerlink}

### Static Changes[\#](#static-changes "Link to this heading"){.headerlink}

Edit [`nemoclaw-blueprint/policies/openclaw-sandbox.yaml`{.docutils .literal .notranslate}]{.pre} and re-run the onboard wizard:

    $ nemoclaw onboard

### Dynamic Changes[\#](#dynamic-changes "Link to this heading"){.headerlink}

Apply policy updates to a running sandbox without restarting:

    $ openshell policy update <sandbox-name> --add-endpoint api.example.com:443:read-only:rest:enforce

To replace the live policy with a complete raw policy file, use [`openshell`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`policy`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`set`{.docutils .literal .notranslate}]{.pre}:

    $ openshell policy set --policy <policy-file> <sandbox-name>
