---
url: https://www.theregister.com/2026/04/20/lovable_denies_data_leak/
title: "Lovable denies data leak, cites 'intentional behavior'"
---

<div>

</div>

[Security](/tag/security)

# Vibe coding upstart Lovable denies data leak, cites \'intentional behavior,\' then throws HackerOne under the bus {#vibe-coding-upstart-lovable-denies-data-leak-cites-intentional-behavior-then-throws-hackerone-under-the-bus .headline .mainTitle style=""}

A lesson in how not to respond to vulnerability reports

[Jessica Lyons]{.lab-hidden-byline-name itemprop="name"} [[Jessica]{.firstname} [Lyons]{.lastname}](https://www.theregister.com/author/Jessica-Lyons-and-Connor-Jones){itemprop="url" rel="author"}

[ [Published]{.dateLabel} tue 21 Apr 2026 // 00:26 UTC ]{.dateGroup .datePublished}

[](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233){.fi-social-facebook aria-label="Share on Facebook" target="_blank"} [](https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233){.fi-social-twitter aria-label="Share on X (Twitter)" target="_blank"} [](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233){.fi-social-linkedin aria-label="Share on LinkedIn" target="_blank"} [](https://bsky.app/intent/compose?text=Lovable%20denies%20data%20leak%2C%20cites%20'intentional%20behavior'%0Ahttps%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233){.fi-social-bluesky aria-label="Share on Bluesky" target="_blank"} [](https://www.reddit.com/submit?url=https%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233&title=Lovable%20denies%20data%20leak%2C%20cites%20'intentional%20behavior'){.fi-social-reddit aria-label="Share on Reddit" target="_blank"} [](https://api.whatsapp.com/send?text=Lovable%20denies%20data%20leak%2C%20cites%20'intentional%20behavior'%0Ahttps%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233){.fi-social-whatsapp aria-label="Share on WhatsApp" target="_blank"}

[UPDATED]{.tertiary .color_mobile_tertiary lab-text_color="tertiary"} Vibe-coding platform Lovable is pooh-poohing a researcher's finding that anyone could open a free account on the service and read other users\' sensitive info, including credentials, chat history, and source code. However, the company's story keeps changing: First it attributed the publicly exposed info to \"intentional behavior\" and \"unclear documentation,\" then threw bug-bounty service HackerOne under the bus.

The drama appears to be the latest example of an AI firm, in this case a startup that [claims a \$6.6 billion valuation](https://lovable.dev/blog/series-b){rel="nofollow" target="_blank"}, [shirking responsibility for security flaws](https://www.theregister.com/2026/04/19/ai_vendors_response_to_security/){target="_blank"} in its products. Companies including Uber, Zendesk, and Deutsche Telekom all use Lovable\'s vibe coding AI tool, according to its latest funding announcement.

\"Lovable has a mass data breach affecting every project created before November 2025,\" a researcher who goes by \@weezerOSINT on X [posted](https://x.com/weezerOSINT/status/2046170666131669027){rel="nofollow" target="_blank"} on Monday. \"I made a Lovable account today and was able to access another user\'s source code, database credentials, AI chat histories, and customer data are all readable by any free account.\"

[REG AD]{.ad-label}

The researcher said they reported the flaw 48 days ago, and that HackerOne labeled it a \"duplicate submission,\" and left it open. The researcher then sent a [bug report](https://x.com/weezerOSINT/status/2046171798992199974/photo/1){rel="nofollow" target="_blank"} to HackerOne, and [screen shots](https://x.com/weezerOSINT/status/2046170666131669027/photo/2){rel="nofollow" target="_blank"} show a March 3 submission date. Subsequent posts show the [AI leaking secrets](https://x.com/weezerOSINT/status/2046170671110402443){rel="nofollow" target="_blank"} and personal data in chats.

[REG AD]{.ad-label}

### BOLA bug {#bola-bug .crosshead}

The leak stems from a [Broken Object Level Authorization (BOLA) vulnerability](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization){rel="nofollow" target="_blank"}, which occurs when an API exposes endpoints that allow users to access or modify sensitive data belonging to other users due to missing ownership validation.

According to the bug hunter, no offensive hacking is needed to trigger the bug. They say they made five API calls from a free account and gained access to another user\'s profile, their public projects, and source code, and then extracted database credentials from the source code.

In X posts later on Monday the AI coding company [first said](https://x.com/Lovable/status/2046270357674299623){rel="nofollow" target="_blank"} it was \"made aware of concerns regarding the visibility of chat messages and code on Lovable projects with public visibility settings,\" and added: \"To be clear: We did not suffer a data breach.\"

The company then went on to blame its documentation -- specifically \"our documentation of what \'public\' implies was unclear, and that\'s a failure on us.\" It also noted that chat messages for public projects \"used to be visible,\" but that is no longer the case.

And then it offered this head-scratching message about intentionally making prompts and source code visible:

##  {#section style=""}

When it comes to code of public projects: That is intentional behavior. We have experimented with different UX for how the build history is surfaced on public projects, but the core behavior has been consistent and by design.

So it\'s by design -- unless you\'re an enterprise customer, that is. For this group of users, \"being able to set visibility to public for new projects has been disabled since May 25, 2025.\"

### Lovable\'s oops moment {#lovables-oops-moment .crosshead}

[REG AD]{.ad-label}

Later on Monday, Lovable [issued a new statement](https://x.com/Lovable/status/2046301006795870346){rel="nofollow" target="_blank"} on X, apologizing that its earlier post \"didn\'t properly address our mistake,\" explaining how it got into this public-versus-private-project mess in the first place, and then blaming its bug bounty partner, HackerOne, for its failure to fix the flaw.

Users, the startup said, can select a \"public\" or \"private\" option for projects.

\"A public project meant the entire project was public, both chat and code,\" Lovable explained. \"Over time, we realized this was confusing. Many users thought \'public\' just meant others could see their published app, not the chat of an unpublished project. That\'s reasonable.\"

Early free-tier users didn\'t get an option to create private projects. They had to upgrade to a paid plan if they wanted to do that -- until May 2025, when Lovable started letting free-tier users make private projects, and disabled the public setting for enterprise customers altogether.

## MORE CONTEXT {#more-context .article-list-title style=""}

-   [](https://www.theregister.com/2026/04/19/ai_vendors_response_to_security/){k5a-url="/a/null" itemprop="url"}

    ### I meant to do that! AI vendors shrug off responsibility for vulns {#i-meant-to-do-that-ai-vendors-shrug-off-responsibility-for-vulns .al-title itemprop="name headline"}

-   [](https://www.theregister.com/2026/02/27/lovable_app_vulnerabilities/){k5a-url="/a/null" itemprop="url"}

    ### Lovable-hosted app littered with basic flaws exposed 18K users, researcher claims {#lovable-hosted-app-littered-with-basic-flaws-exposed-18k-users-researcher-claims .al-title itemprop="name headline"}

-   [](https://www.theregister.com/2026/04/17/anthropic_debuts_claude_design/){k5a-url="/a/null" itemprop="url"}

    ### Anthropic mocks up Claude Design to draft fancy new pink slips for marketing teams {#anthropic-mocks-up-claude-design-to-draft-fancy-new-pink-slips-for-marketing-teams .al-title itemprop="name headline"}

-   [](https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/){k5a-url="/a/null" itemprop="url"}

    ### Anthropic won\'t own MCP \'design flaw\' putting 200K servers at risk, researchers say {#anthropic-wont-own-mcp-design-flaw-putting-200k-servers-at-risk-researchers-say .al-title itemprop="name headline"}

In December 2025, the company switched to private by default across all tiers.

\"We also retroactively patched our API so public project chats couldn\'t be accessed, no matter what,\" according to the company's mea culpa. \"Unfortunately, in February, while unifying permissions in our backend, we accidentally re-enabled access to chats on public projects.\"

This was the security issue that WeezerOSINT reported Lovable via HackerOne. Chaos ensued.

\"Unfortunately, the reports were closed without escalation because our HackerOne partners thought that seeing public projects\' chats was the intended behaviour,\" Lovable wrote. \"Upon learning this, we immediately reverted the change to make all public projects\' chats private again.\"

[REG AD]{.ad-label}

HackerOne declined to comment initially, pending further review. \"Given the nature of customer programs and the need to review details carefully, we\'re not able to comment further right now," the company told *The Register*. "We want to ensure anything we share is accurate and responsible. We\'ll follow up once we\'ve completed that review.\"

Lovable noted it appreciates the researchers who uncovered this mess. \"We understand that pointing to documentation issues alone was not enough here,\" it said. \"We\'ll do better.\" ®

### Updated at 02:45 UTC, April 21 {#updated-at-0245-utc-april-21 .crosshead}

A Loveable spokesperson has been in touch, and told *The Register* that the company wasn't aware of the issue until Monday, and "we addressed it as soon as we learned about it."

"This was originally reported through our vulnerability disclosure program (via HackerOne)," the spokesperson added. "Unfortunately, the reports were closed without escalation to our internal team because our HackerOne partners thought that seeing public projects' chats was the intended behavior, as was the case historically."

The spokesperson clarified that any user could have changed their project from public to private at any time. " And chats from public projects are no longer visible - for anyone," they added.

[ [security](/tag/security){tag="security"} [ai](/tag/ai){tag="ai"} [bug bounty](/tag/bug%20bounty){tag="bug bounty"} [hackerone](/tag/hackerone){tag="hackerone"} ]{.tags}

[](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233){.fi-social-facebook aria-label="Share on Facebook" target="_blank"} [](https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233){.fi-social-twitter aria-label="Share on X (Twitter)" target="_blank"} [](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233){.fi-social-linkedin aria-label="Share on LinkedIn" target="_blank"} [](https://bsky.app/intent/compose?text=Lovable%20denies%20data%20leak%2C%20cites%20'intentional%20behavior'%0Ahttps%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233){.fi-social-bluesky aria-label="Share on Bluesky" target="_blank"} [](https://www.reddit.com/submit?url=https%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233&title=Lovable%20denies%20data%20leak%2C%20cites%20'intentional%20behavior'){.fi-social-reddit aria-label="Share on Reddit" target="_blank"} [](https://api.whatsapp.com/send?text=Lovable%20denies%20data%20leak%2C%20cites%20'intentional%20behavior'%0Ahttps%3A%2F%2Fwww.theregister.com%2Fsecurity%2F2026%2F04%2F21%2Flovable-denies-data-leak-cites-intentional-behavior%2F5226233){.fi-social-whatsapp aria-label="Share on WhatsApp" target="_blank"}
