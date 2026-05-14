---
url: https://docs.nvidia.com/nemoclaw/latest/deployment/sandbox-hardening.html
title: "Sandbox Image Hardening — NVIDIA NemoClaw Developer Guide"
---

# Sandbox Image Hardening[\#](#sandbox-image-hardening "Link to this heading"){.headerlink}

The NemoClaw sandbox image applies several security measures to reduce attack surface and limit the blast radius of untrusted workloads.

## Removed Unnecessary Tools[\#](#removed-unnecessary-tools "Link to this heading"){.headerlink}

Build toolchains ([`gcc`{.docutils .literal .notranslate}]{.pre}, [`g++`{.docutils .literal .notranslate}]{.pre}, [`make`{.docutils .literal .notranslate}]{.pre}) and network probes ([`netcat`{.docutils .literal .notranslate}]{.pre}) are explicitly purged from the runtime image. These tools are not needed at runtime and would unnecessarily widen the attack surface.

The runtime image keeps a small set of operational utilities for normal sandbox workflows, including [`vi`{.docutils .literal .notranslate}]{.pre}, [`jq`{.docutils .literal .notranslate}]{.pre}, and [`dos2unix`{.docutils .literal .notranslate}]{.pre}. Use these for lightweight inspection and file cleanup inside the sandbox, but make durable image or policy changes in the NemoClaw source tree and rebuild the sandbox.

If you need a compiler during build, use the existing multi-stage build (the [`builder`{.docutils .literal .notranslate}]{.pre} stage has full Node.js tooling) and copy only artifacts into the runtime stage.

## Process Limits[\#](#process-limits "Link to this heading"){.headerlink}

The container ENTRYPOINT sets [`ulimit`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`-u`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`512`{.docutils .literal .notranslate}]{.pre} to cap the number of processes a sandbox user can spawn. This mitigates fork-bomb attacks. The startup script ([`nemoclaw-start.sh`{.docutils .literal .notranslate}]{.pre}) applies the same limit.

Adjust the value via the [`--ulimit`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`nproc=512:512`{.docutils .literal .notranslate}]{.pre} flag if launching with [`docker`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`run`{.docutils .literal .notranslate}]{.pre} directly.

## Dropping Linux Capabilities[\#](#dropping-linux-capabilities "Link to this heading"){.headerlink}

The NemoClaw entrypoint drops dangerous capabilities from the process bounding set before it starts agent services. It removes [`CAP_SYS_ADMIN`{.docutils .literal .notranslate}]{.pre}, [`CAP_SYS_PTRACE`{.docutils .literal .notranslate}]{.pre}, [`CAP_NET_RAW`{.docutils .literal .notranslate}]{.pre}, [`CAP_DAC_OVERRIDE`{.docutils .literal .notranslate}]{.pre}, [`CAP_SYS_CHROOT`{.docutils .literal .notranslate}]{.pre}, [`CAP_FSETID`{.docutils .literal .notranslate}]{.pre}, [`CAP_SETFCAP`{.docutils .literal .notranslate}]{.pre}, [`CAP_MKNOD`{.docutils .literal .notranslate}]{.pre}, [`CAP_AUDIT_WRITE`{.docutils .literal .notranslate}]{.pre}, and [`CAP_NET_BIND_SERVICE`{.docutils .literal .notranslate}]{.pre}. When [`setpriv`{.docutils .literal .notranslate}]{.pre} is available, the entrypoint also removes the remaining privilege-separation capabilities during the switch from root to the [`sandbox`{.docutils .literal .notranslate}]{.pre} and [`gateway`{.docutils .literal .notranslate}]{.pre} users.

For defense-in-depth, also drop all Linux capabilities at the container runtime when you launch the image directly:

    $ docker run --rm \
        --cap-drop=ALL \
        --ulimit nproc=512:512 \
        nemoclaw-sandbox

### Docker Compose Example[\#](#docker-compose-example "Link to this heading"){.headerlink}

    services:
      nemoclaw-sandbox:
        image: nemoclaw-sandbox:latest
        cap_drop:
          - ALL
        cap_add:
          - NET_BIND_SERVICE
        ulimits:
          nproc:
            soft: 512
            hard: 512
        security_opt:
          - no-new-privileges:true
        read_only: true
        tmpfs:
          - /tmp:size=64m

> <div>
>
> **Note:** The [`Dockerfile`{.docutils .literal .notranslate}]{.pre} itself cannot enforce [`--cap-drop`{.docutils .literal .notranslate}]{.pre}. That is a runtime concern controlled by the container orchestrator. Always configure capability dropping in your [`docker`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`run`{.docutils .literal .notranslate}]{.pre} flags, Compose file, or Kubernetes [`securityContext`{.docutils .literal .notranslate}]{.pre}.
>
> </div>

## Filesystem Layout[\#](#filesystem-layout "Link to this heading"){.headerlink}

The sandbox Landlock policy declares which paths are writable. The agent's home directory ([`/sandbox`{.docutils .literal .notranslate}]{.pre}) is writable by default:

  Path                                                            Access       Purpose
  --------------------------------------------------------------- ------------ ---------------------------------------------------------------------------
  [`/sandbox`{.docutils .literal .notranslate}]{.pre}             read-write   Home directory --- agents can create files and use standard home paths
  [`/sandbox/.openclaw`{.docutils .literal .notranslate}]{.pre}   read-write   Agent config, state, workspace, plugins
  [`/sandbox/.nemoclaw`{.docutils .literal .notranslate}]{.pre}   read-write   Plugin state and config; blueprints within are DAC-protected (root-owned)
  [`/tmp`{.docutils .literal .notranslate}]{.pre}                 read-write   Temporary files and logs

This writable default is intentional. Seeing the sandbox user create files under [`/sandbox`{.docutils .literal .notranslate}]{.pre} or [`/sandbox/.openclaw`{.docutils .literal .notranslate}]{.pre} in a fresh sandbox does not mean Landlock failed. Landlock still enforces the fixed read-only system paths below.

System paths remain read-only to prevent agents from:

-   Replacing system binaries with trojanized versions

-   Modifying DNS resolution or TLS trust stores

-   Tampering with libraries or shell configuration outside [`/sandbox`{.docutils .literal .notranslate}]{.pre}

The image build pre-creates shell init files [`.bashrc`{.docutils .literal .notranslate}]{.pre} and [`.profile`{.docutils .literal .notranslate}]{.pre}. These files source runtime proxy configuration from [`/tmp/nemoclaw-proxy-env.sh`{.docutils .literal .notranslate}]{.pre}.

### Landlock Kernel Requirements[\#](#landlock-kernel-requirements "Link to this heading"){.headerlink}

Landlock LSM requires Linux kernel 5.13 or later with [`CONFIG_SECURITY_LANDLOCK=y`{.docutils .literal .notranslate}]{.pre}. The NemoClaw sandbox policy uses [`compatibility:`{.docutils .literal .notranslate}]{.pre}` `{.docutils .literal .notranslate}[`best_effort`{.docutils .literal .notranslate}]{.pre}, which means Landlock enforcement is silently skipped on kernels that do not support it.

On such kernels, protection falls back to DAC (file ownership and permissions) only. Files outside the writable paths would be inaccessible to the agent regardless of DAC permissions.

Operators should verify Landlock availability:

    $ ls /sys/kernel/security/landlock

For production deployments, kernel 5.13+ with Landlock enabled is strongly recommended. The [`test/e2e/e2e-cloud-experimental/checks/04-landlock-readonly.sh`{.docutils .literal .notranslate}]{.pre} script validates enforcement at runtime.

## References[\#](#references "Link to this heading"){.headerlink}

-   [#804](https://github.com/NVIDIA/NemoClaw/issues/804){.reference .external rel="noreferer noopener" target="_blank"}: Filesystem layout and Landlock policy

-   [#807](https://github.com/NVIDIA/NemoClaw/issues/807){.reference .external rel="noreferer noopener" target="_blank"}: gcc in sandbox image

-   [#808](https://github.com/NVIDIA/NemoClaw/issues/808){.reference .external rel="noreferer noopener" target="_blank"}: netcat in sandbox image

-   [#809](https://github.com/NVIDIA/NemoClaw/issues/809){.reference .external rel="noreferer noopener" target="_blank"}: No process limit

-   [#797](https://github.com/NVIDIA/NemoClaw/issues/797){.reference .external rel="noreferer noopener" target="_blank"}: Drop Linux capabilities
