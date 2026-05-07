---
url: https://www.kaspersky.com/blog/vibe-coding-2025-risks/54584/
title: "Security risks of vibe coding and LLM assistants for developers"
---

Although the benefits of AI assistants in the workplace [remain debatable](https://www.kaspersky.com/blog/shadow-ai-3-policies/54252/){rel="noopener nofollow" target="_blank"}, where they're being adopted most confidently of all is in software development. Here, LLMs play many roles --- from refactoring and documentation, to building whole applications. However, traditional information security problems in development are now compounded by the unique vulnerabilities of AI models. At this intersection, new bugs and issues emerge almost weekly.

## Vulnerable AI-generated code

When an LLM generates code, it may include bugs or security flaws. After all, these models are trained on publicly available data from the internet --- including thousands of examples of low-quality code. A recent Veracode [study](https://www.veracode.com/blog/genai-code-security-report/){rel="noopener nofollow" target="_blank"} found that leading AI models now produce code that compiles successfully 90% of the time. Less than two years ago, this figure was less than 20%. However, the security of that code has not improved --- 45% still contains classic vulnerabilities from the [OWASP Top-10 list](https://owasp.org/www-project-top-ten/){rel="noopener nofollow" target="_blank"}, with little change in the last two years. The study covered over a hundred popular LLMs and code fragments in Java, Python, C#, and JavaScript. Thus, regardless of whether the LLM is used for "code completion" in Windsurf or "[vibe coding](https://en.wikipedia.org/wiki/Vibe_coding){rel="noopener nofollow" target="_blank"}" in Loveable, the final application must undergo thorough vulnerability testing. But in practice this rarely happens: according to a [Wiz study](https://www.wiz.io/blog/common-security-risks-in-vibe-coded-apps){rel="noopener nofollow" target="_blank"}, 20% of vibe-coded apps have serious vulnerabilities or configuration errors.

As an example of such flaws, the case of the women-only dating app, Tea, is often used, which became notorious after [two major data leaks](https://www.bleepingcomputer.com/news/security/tea-app-leak-worsens-with-second-database-exposing-user-chats/){rel="noopener nofollow" target="_blank"}. However, this app predates vibe coding. Whether AI was to blame for Tea's slip-up will be [determined in court](https://news.bloomberglaw.com/bloomberg-law-analysis/analysis-trouble-brews-for-tea-app-amid-vibe-coding-allegations){rel="noopener nofollow" target="_blank"}. In the case of the startup Enrichlead, though, AI was definitely the culprit. Its founder [boasted](https://twitter.com/leojr94_/status/1900767509621674109){rel="noopener nofollow" target="_blank"} on social media that 100% of his platform's code was written by Cursor AI, with "zero hand-written code". Just days after its launch, it was found to be [full of newbie-level  security flaws](https://twitter.com/leojr94_/status/1901560276488511759?ref_src=twsrc%5Etfw){rel="noopener nofollow" target="_blank"} --- allowing anyone to access paid features or alter data. The project was shut down after the founder failed to bring the code up to an acceptable security standard using Cursor. However, he remains undeterred and has since started new vibe-coding-based projects.

## Common vulnerabilities in AI-generated code

Although AI-assisted programming has only existed for a year or two, there's already enough data to identify its most [common mistakes](https://www.wiz.io/blog/common-security-risks-in-vibe-coded-apps){rel="noopener nofollow" target="_blank"}. Typically, these are:

-   Lack of input validation, no sanitization of user input from extraneous characters, and other basic errors leading to classic vulnerabilities such as cross-site scripting (XSS) and SQL injection.
-   API keys and other secrets hardcoded directly into the webpage, and visible to users in its code.
-   Authentication logic implemented entirely on the client side, directly in the site's code running in the browser. This logic can be easily modified to bypass any checks.
-   Logging errors --- from insufficient filtering when writing to logs, to a complete absence of logs.
-   Overly powerful and dangerous functions --- AI models are optimized to output code that solves a task in the shortest way possible. But the shortest way is often insecure. A textbook example is [using the eval function](https://cloudsecurityalliance.org/blog/2025/07/09/understanding-security-risks-in-ai-generated-code){rel="noopener nofollow" target="_blank"} for mathematical operations on user input. This opens the door to arbitrary code execution in the generated application.
-   Outdated or non-existent dependencies. AI-generated code often references old versions of libraries, makes outdated or unsafe API calls, or even tries to [import fictitious libraries](https://www.kaspersky.com/blog/ai-slopsquatting-supply-chain-risk/53327/){rel="noopener nofollow" target="_blank"}. The latter is particularly dangerous because attackers can create a malicious library with a "plausible" name, and the AI agent will include it in a real project.

In a systematic study, the authors [scanned AI-generated code](https://arxiv.org/pdf/2412.15004){rel="noopener nofollow" target="_blank"} for weaknesses included in the [MITRE CWE Top 25 list](https://cwe.mitre.org/top25/){rel="noopener nofollow" target="_blank"}. The most common issues were CWE-94 (code injection), CWE-78 (OS command injection), CWE-190 (integer overflow), CWE-306 (missing authentication), and CWE-434 (unrestricted file upload).

A striking example of CWE-94 was the recent compromise of the Nx platform, [which we covered previously](https://www.kaspersky.com/blog/nx-build-s1ngularity-supply-chain-attack/54223/){rel="noopener nofollow" target="_blank"}. Attackers managed to trojanize a popular development tool by stealing a token enabling them to publish new product versions. The token theft exploited a vulnerability [introduced by a simple AI-generated code fragment](https://github.com/nrwl/nx/pull/32458){rel="noopener nofollow" target="_blank"}.

## Dangerous prompts

The well-known saying among developers "done exactly according to the spec" also applies when working with an AI assistant. If the prompt for creating a function or application is vague and doesn't mention security aspects, the likelihood of generating vulnerable code rises sharply. [A dedicated study](https://arxiv.org/pdf/2502.06039){rel="noopener nofollow" target="_blank"} found that even general remarks like "make sure the code follows best practices for secure code" reduced the rate of vulnerabilities by half.

The most effective approach, however, is to use detailed, language-specific security guidance referencing MITRE or OWASP error lists. A large collection of such security instructions from Wiz Research is available on [GitHub](https://github.com/wiz-sec-public/secure-rules-files){rel="noopener nofollow" target="_blank"}; it's recommended to add them to AI assistants' system prompts via files like *claude.md*, *.windsurfrules*, or similar.

## Security degradation during revisions

When AI-generated code is repeatedly revised through follow-up prompts, its security deteriorates. A recent [study](https://arxiv.org/abs/2506.11022){rel="noopener nofollow" target="_blank"} had GPT-4o modify previously written code up to 40 times, while researchers scanned each version for vulnerabilities after every round. After only five iterations, the code contained 37% more critical vulnerabilities than the initial version. The study tested four prompting strategies --- three of which each having a different emphasis: (i) performance, (ii) security, and (iii) new functionality; the fourth was written with unclear prompts.

When prompts focused on adding new features, 158 vulnerabilities appeared --- including 29 critical ones. When the prompt emphasized secure coding, the number dropped significantly --- but still included 38 new vulnerabilities, seven of them critical.

Interestingly, the "security-focused" prompts resulted in the highest percentage of errors in cryptography-related functions.

## Ignoring industry context

In sectors such as finance, healthcare, and logistics there are technical, organizational, and legal requirements that must be considered during app development. AI assistants are unaware of these constraints. This issue is often called "missing depth". As a result, storage and processing methods for personal, medical, and financial data mandated by local or industry regulations won't be reflected in AI-generated code. For example, an assistant might write a mathematically correct function for calculating deposit interest, but ignore rounding rules enforced by regulators. Healthcare data regulations often require detailed logging of every access attempt --- something AI won't automatically implement at the proper level of detail.

## Application misconfiguration

Vulnerabilities are not limited to the vibe code itself. Applications created through vibe coding are often built by inexperienced users, who either don't configure the runtime environment at all, or configure it according to advice from the same AI. This leads to dangerous misconfigurations:

-   Databases required by the application are created with overly broad external access permissions. This results in leaks like Tea/[Sapphos](https://therecord.media/brazil-lesbian-dating-app-shuts-down-vulnerability){rel="noopener nofollow" target="_blank"}, where the attacker doesn't even need to use the application to download or delete the entire database.
-   Internal corporate applications are left accessible to the public without authentication.
-   Applications are granted elevated permissions for access to critical databases. Combined with the vulnerabilities of AI-generated code, this simplifies SQL injections and similar attacks.

## Platform vulnerabilities

Most vibe-coding platforms run applications generated from prompts directly on their own servers. This ties developers to the platform --- including exposure to its vulnerabilities and dependence on its security practices. For example, in July a vulnerability was [discovered in the Base44 platform](https://www.wiz.io/blog/critical-vulnerability-base44){rel="noopener nofollow" target="_blank"} that allowed unauthenticated attackers to access any private application.

## Development-stage threats

The very presence of an assistant with broad access rights on the developer's computer creates risks. Here are a few examples:

The CurXecute vulnerability ([CVE-2025-54135](https://github.com/cursor/cursor/security/advisories/GHSA-4cxx-hrm3-49rm){rel="noopener nofollow" target="_blank"}) allowed attackers to order the popular AI development tool, Cursor, to execute arbitrary commands on the developer's machine. All this needed was an active Model Context Protocol (MCP) server connected to Cursor, which an external party could use for access. This is a typical situation --- MCP servers give AI agents access to Slack messages, Jira issues, and so on. Prompt injection can be performed through any of these channels.

The EscapeRoute vulnerability ([CVE-2025-53109](https://github.com/modelcontextprotocol/servers/security/advisories/GHSA-q66q-fx2p-7w4m){rel="noopener nofollow" target="_blank"}) allowed reading and writing of arbitrary files on the developer's disk. The flaw existed in Anthropic's popular MCP server, which lets AI agents write and read files in the system. The server's access restrictions just didn't work.

A [malicious MCP server](https://thehackernews.com/2025/09/first-malicious-mcp-server-found.html){rel="noopener nofollow" target="_blank"} that let AI agents send and receive email via Postmark simultaneously forwarded all correspondence to a hidden address. We predicted the emergence of such [malicious MCP servers](https://securelist.com/model-context-protocol-for-ai-integration-abused-in-supply-chain-attacks/117473/){rel="noopener" target="_blank"} back in September.

A vulnerability in the Gemini command-line interface allowed [arbitrary command execution](https://github.com/google-gemini/gemini-cli/pull/4795){rel="noopener nofollow" target="_blank"} when a developer simply asked the AI assistant to analyze a new project's code. The malicious injection was triggered from a *readme.md* file.

Amazon's Q Developer extension for Visual Studio Code briefly contained [instructions to wipe all data](https://www.bleepingcomputer.com/news/security/amazon-ai-coding-agent-hacked-to-inject-data-wiping-commands/){rel="noopener nofollow" target="_blank"} from a developer's computer. An attacker exploited a mistake of Amazon's developers, and managed to insert this malicious prompt into the assistant's public code without special privileges. Fortunately, a small coding error prevented it from being executed.

A vulnerability in the Claude Code agent ([CVE-2025-55284](https://embracethered.com/blog/posts/2025/claude-code-exfiltration-via-dns-requests/){rel="noopener nofollow" target="_blank"}) allowed data to be exfiltrated from a developer's computer through DNS requests. Prompt injection, which relied on common utilities that run automatically without confirmation, could be embedded in any code analyzed by the agent.

The autonomous AI agent Replit [deleted the primary databases of a project](https://twitter.com/jasonlk/status/1946069562723897802){rel="noopener nofollow" target="_blank"} it was developing because it decided the database required a cleanup. This violated a direct instruction prohibiting modifications (code freeze). Behind this unexpected AI behavior lays a key architectural flaw --- at the time, Replit had [no separation](https://x.com/jasonlk/status/1947765754050580959){rel="noopener nofollow" target="_blank"} between test and production databases.

A prompt injection placed in a source code comment prompted the Windsurf development environment to [automatically store malicious instructions in its long-term memory](https://embracethered.com/blog/posts/2025/windsurf-spaiware-exploit-persistent-prompt-injection/){rel="noopener nofollow" target="_blank"}, allowing it to steal data from the system over months.

In the [Nx compromise incident](https://www.kaspersky.com/blog/nx-build-s1ngularity-supply-chain-attack/54223/){rel="noopener nofollow" target="_blank"}, command-line tools for Claude, Gemini, and Q were used to search for passwords and keys that could be stolen from an infected system.

## How to use AI-generated code safely

The risk level from AI-generated code can be significantly, though not completely reduced through a mix of organizational and technical measures:

-   Implement automatic reviewing of AI-generated code as it's written using optimized [SAST](https://en.wikipedia.org/wiki/Static_application_security_testing){rel="noopener nofollow" target="_blank"} tools.
-   Embed security requirements into the system prompts of all AI environments.
-   Have experienced human specialists perform detailed code reviews, supported by specialized AI-powered security analysis tools to increase effectiveness.
-   Train developers to write secure prompts and, more broadly, provide them with [in-depth education on the secure use of AI](https://k-asap.com/en/?icid=gl_kdailyplacehold_acq_ona_smm__onl_b2b_kasperskydaily_wpplaceholder____kasap___){rel="noopener" target="_blank"}.
