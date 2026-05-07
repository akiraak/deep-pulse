---
url: https://softwaremill.com/vibe-coding-against-owasp-top-10-2025/
title: "Vibe Coding Against OWASP Top10 2025"
---

# Vibe Coding Against OWASP Top10 2025 {#vibe-coding-against-owasp-top10-2025 .banner__title}

-   [Security](/blog/?tag=security){.no-border}
-   [OWASP](/blog/?tag=owasp){.no-border}
-   [Vibe Coding](/blog/?tag=vibe%20coding){.no-border}
-   [OWASP Top10](/blog/?tag=owasp%20top10){.no-border}

[](/blog/?author=Mateusz%20Gołąbek){.author__image .author__image--first}

<figure class="employee__image" alt="webp image" style="background-image:url(&#39;/user/themes/softwaremill/assets/team/gktmnfr630qxims.png?g-0860049e&#39;)">

</figure>

[Mateusz Gołąbek](/blog/?author=Mateusz%20Gołąbek){.author__name}

[22 Dec 2025.]{.date}[ 14 minutes read ]{.time-to-read}

![cover photo of the Vibe Coding Against OWASP Top 10 2025 article](/user/pages/blog/334.vibe-coding-against-owasp-top-10-2025/a6gpk517oqrtqnj.jpg?g-0860049e)

<div>

The OWASP Top 10, the reference standard for the most critical web application security risks, has just dropped a new 2025 version - the first major update since 2021. It feels like the perfect moment to ask: how does the rise of vibe coding intersect with these risks? **So I built a simple web app with AI and audited it against the new Top 10. The results explain why \"ship fast, fix later\" could be a dangerous game.**

![owasp top10](/user/pages/blog/334.vibe-coding-against-owasp-top-10-2025/owasp-top10.png?g-0860049e "owasp-top10")

#### *source:* <https://owasp.org/Top10/2025/> {#source-httpsowasp.orgtop102025 .center}

## OWASP Top 10 2025

The OWASP Top 10 sums up the most common web app security problems. It is built from a large dataset of real application security findings, grouped by underlying weakness (CWE). Categories are ranked mainly by how often they appear across applications, not by raw counts. Most entries come directly from data, while a couple are added through community surveys.

Let's start with an important thing - OWASP Top 10 is primarily an awareness document, not a coding or testing standard. It documents AppSec risks with not necessarily easily testable issues - the bare minimum and just a starting point in the AppSec world. If you are looking for the OWASP standard helping adopt application security, you should use ASVS - Application Security Verification Standard. I have recently written some blog posts about [implementing OWASP ASVS](https://softwaremill.com/implementing-owasp-asvs/) and [what\'s new in ASVS 5.0 2025 version](https://softwaremill.com/whats-new-in-asvs-5-0/). I encourage you to check them out.

Currently, we have access to the Top 10 2025 release candidate. However, while the data collection and analysis are finalized, the remaining thing is formatting and editing stuff, so we can treat it as ready in terms of the important knowledge. Here is a brief summary of what has changed in comparison to the 2021 version. You can read the full document, which includes a comprehensive explanation of each point at a dedicated site: [https://owasp.org/Top10/2025.](https://owasp.org/Top10/2025).

![ovasp-top10-2021-vs-2025](/user/pages/blog/334.vibe-coding-against-owasp-top-10-2025/ovasp-top10-2021-vs-2025.png?g-0860049e "ovasp-top10-2021-vs-2025")

#### *source:* <https://owasp.org/Top10/2025/0x00_2025-Introduction/> {#source-httpsowasp.orgtop1020250x00_2025-introduction .center}

## Vibe coding vs OWASP Top 10

The idea is simple: we\'ll **vibe code a web app where there\'s a lot of potential for making security mistakes from the OWASP Top 10 2025 issues.** The aim is to observe how often, especially when we\'re not paying close attention, we might unknowingly introduce vulnerabilities.

**It\'s essential to note that the goal isn\'t to prove that AI is unsafe or that vibe coding is inherently bad.** Instead, to take a look at what happens in practice, how shifts in discipline and workflow impact the incidence of common web security weaknesses.

We\'re about to vibe code **a personal gallery app for saving your favorite websites.** At first glance, it\'s straightforward - a minimal UI with login, a display of saved links, with extra features like an option to export the gallery. What looks like a harmless side project is actually a perfect playground for potential security pitfalls, each mapping somehow onto the OWASP Top 10. Potential vulnerabilities are:

-   **Operations on user-provided URLs** - Accepting URLs for website previews can become vectors for Server-Side Request Forgery (SSRF) or injection attacks if not properly validated and restricted.
-   **Import/export gallery functionality** - File operations without proper input validation open doors to denial-of-service (DoS) risks, cross-site-scripting (XSS) issues, file operation vulnerabilities, and data integrity failures.
-   **Authentication flows** - Login and registration features, if implemented carelessly, can leak information about existing accounts through enumeration or allow unauthorized access through weak session management.

We\'ll try out two versions of the vibe-coded app:

1.  **Vibe code MVP app** - Quick, simple prompts, fast code, skipping checklists, and only minimal manual testing. This is the \"just ship it mindset", prioritizing speed over caution - I expect such coding style to bring many vulnerabilities in favour of good visuals, which are often more focused on for a very quick MVP.
2.  **Vibe MVP app to production-ready (in AI opinion) state** - Enhances previously generated app with several prompts, covered with tests, focusing primarily on shipping it to production.

## Vibe coding vulnerable MVP app

Built with **Claude Opus 4.5 in Cursor** (blank, without rules, etc.).

Github link: [vibe-websitehub-pro/mvp](https://github.com/dzielnykompanion/vibe-websitehub-pro/tree/mvp)

Initial prompt used:

> Build me a full-stack web app called "WebsiteHub PRO" with a cool cosmic and rocket theme design, really stunning visually - in order to convince potential rich businessmen to invest in this project.
>
> -   It is a personal gallery of interesting websites. When I add a website URL, the app should automatically show it in the gallery with the website's name/title, a nice looking preview image and the original link.
> -   I want to enter a URL in an input box, click a button to add it, and immediately see it appear in the gallery.
> -   I want to export my entire gallery to a single file so I can see links offline. I also want to import it back from a local file.
> -   Add a login so different people can have their own separate galleries and store their own data. I also need a simple admin panel where an admin user can see and manage all saved sites and all users' galleries. Provide admin credentials in configuration.
> -   Store the saved websites in a Postgres database.
> -   For local development, run Postgres in Docker.
> -   Create a clear README explaining how to run the app locally end-to-end.

Given AI free choice of language and tools, it generated an app with the following tech-stack:

-   Framework: Next.js 14 (App Router)
-   Language: TypeScript
-   Styling: Tailwind CSS
-   Database: PostgreSQL
-   ORM: Prisma
-   Authentication: JWT (jose)

Vibe coding quickly delivered a simple, but quite nice-looking MVP:

![vibe-coded-mvp-app](/user/pages/blog/334.vibe-coding-against-owasp-top-10-2025/vibe-coded-mvp-app.png?g-0860049e "vibe-coded-mvp-app")

The MVP app hit most OWASP Top 10 items on the first try. As expected, a single prompt won't produce a fully secure, fully functional website. I didn't run any automated scanners here - this is a quick, manual review rather than a full professional security audit. Still, it was enough to spot several OWASP Top 10 issues that are relatively easy to notice and fix, for example:

  ❗ **Info**
  ------------------------------------------------------------------------------------------------------------------------------------------------
  This is not a full security assessment - it\'s just some cherry-picked highlights. There could easily be more vulnerabilities than shown here.

  OWASP Top 10                                status   vulnerability
  ------------------------------------------- -------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  A01:Broken Access Control                   ❌       The site accepts arbitrary URLs for metadata fetching - including internal addresses like `http://localhost:3001` where the app itself runs (internal IP). This demonstrates classic **Server-Side Request Forgery (SSRF)**
  A02:Security Misconfiguration               ❌       Classic - **misconfigured security headers**. Forgetting about headers like CSP (Content-Security-Policy), X-Frame-Option etc. is an oversight, opening the door to attacks like XSS and data leakage by default.
  A03:Software Supply Chain Failures          ⚠️       It\'s very easy to spot for such small application, but still, basically **all dependencies are outdated**, with special remark to `npm install` reporting critical vulnerability for Next.JS 14.2.5
  A04:Cryptographic Failures                  ❌       Although the app uses good practices like Bcrypt with 12 rounds for password or modern `jose` library avoiding deprecated cryptography algorithms, it still falls into very basic issues - app enables default value for JWT secret key, if environment variable is missing. This can lead to potentially **forge authentication tokens**. The fix for such behaviour is very simple and straightforward - just throw exceptions at the application start as it is better to treat misconfigurations as explicit failures rather than silent vulnerabilities.
  A05:Injection                               ❌       Prisma ORM prevents SQL injection. However, the app allows exporting your gallery as an HTML file you can open in a browser. When generating this HTML, website titles and descriptions are inserted directly into the code without any safety checks. This creates **a XSS (Cross-Site Scripting) vulnerability** - a malicious user could import a JSON file containing fake data like `<script>alert('hacked')</script>` - that malicious code may potentially runs in your browser.
  A06:Insecure Design                         ❌       It has rather no sense to evaluate AI design choices, given totally free choice in a blank project, but one issue stands out at first glance - the JSON import feature accepts input without enforcing any limits. An attacker can upload JSON with 1M+ sites leading to a **denial-of-service (DoS)**. Basic limits would mitigate this entirely.
  A07:Authentication Failures                 ⚠️       Similar like in A06, it rather have no much sense to evaluate security of topic like authentication in app written by AI without any rules from scratch, neverless, it\'s worth noting the app uses generic error messages in login (\"invalid credentials\") which mitigates account enumeration - a vulnerability I thought would be \"easy to achieve\" but was actually handled correctly. On the other hand, the password requirements are minimal (only 6+ characters), something I would have expected AI to enforce higher standards for, as stronger password requirements seem like a no-brainer.
  A08:Software or Data Integrity Failures     ❌       Import JSON functionality does not verify **authenticity or integrity of data** and lacks proper validation. This could be simply fixed by adding proper data schema validation and cryptographic signatures to verify imports.
  A09:Logging & Alerting Failures             ❌       The login endpoint returns `401 Unauthorized` on failed attempts - but **logs absolutely nothing**. An attacker could run thousands of credential-stuffing attempts and the application would be completely blind to it. Even one-liner `console.log` significantly improves audit log, yet the AI simply didn\'t generate them. Per OWASP: "**Without logging and monitoring, attacks and breaches cannot be detected.**\"
  A10:Mishandling of Exceptional Conditions   ❌       Exceptional conditions in quickly AI generated app is a broad topic, but one particularly interesting example is the empty catch block in the app function which fetches the user - when the authentication check fails for any reason - the code silently swallows the exception and redirects to login. This means **legitimate errors (le.g. malformed API response) are treated identically to authentication failures, potentially masking critical problems.** The fix is trivial: log the error before redirecting.

### Example Attack Scenario: XSS in Import / Export Flow

Here are the details of an example scenario of leveraging the XSS vulnerability mentioned in A05: Injection section. When exporting the gallery as HTML, the app uses raw string interpolation without any HTML escaping ([generateHtmlExport function](https://github.com/dzielnykompanion/vibe-code-websitehub-pro/blob/2d9d9a71ed8339a6f9fcf660ce37ddee3d1665f2/lib/export.ts#L63)):

``` typescript
<h3><a href="${site.url}" target="_blank" rel="noopener noreferrer">${site.title}</a></h3>
${site.description ? `<p>${site.description}</p>` : ''}
```

The dashboard correctly renders user data safely, but the HTML export function builds HTML through plain string concatenation **with no sanitization applied**.

An attacker crafts a malicious JSON file:

``` json
{
 "version": "1.0",
 "exportedAt": "2025-12-01T00:00:00.000Z",
 "sites": [
   {
     "url": "https://github.com",
     "title": "Github",
     "description": "Really nice site with nothing to worry about, used by millions of developers around the world. <script>alert('XSS!')</script>",
     "addedAt": "2025-12-01T00:00:00.000Z"
   }
 ]
}
```

Attack flow:

1.  **Import passes validation** - Validation only checks if fields are strings, not their content.
2.  **Malicious data stored** - Data gets saved to the database.
3.  **User exports as HTML** - The title/description are injected directly into HTML markup.
4.  **XSS executes** - When the user opens the exported HTML file, the injected scripts run in their browser.

![example-attack-scenario](/user/pages/blog/334.vibe-coding-against-owasp-top-10-2025/example-attack-scenario.png?g-0860049e "example-attack-scenario")

## From MVP to "production-ready" (according to AI)

In the second phase, I did not start a new application. Instead, I took the previously vibe coded MVP and iteratively hardened it. This time, I introduced Cursor rules to explicitly separate responsibilities between agents (planning, development, and testing). I then ran a sequence of smaller, focused prompts, repeatedly asking the AI to improve the same codebase until it explicitly stated that the application could be considered "production-ready".

Used rules: [.cursor/rules](https://github.com/dzielnykompanion/vibe-code-websitehub-pro/commit/89e714b3ce4614856c1a205a43e70398ee8738cf). Initial prompt:

> Analyze \@vibe-websitehub-pro.\
> Prepare a plan of what needs to be updated before exposing the app publicly.\
> At the end, confirm to me that these steps would be enough to treat this application as production-ready.

Resulted in **15 critical / high** essentials points which need to be addressed before public deployment, including most of the vulnerabilities mentioned for MVP version ([see whole response here](https://github.com/dzielnykompanion/vibe-code-websitehub-pro/commit/24e9ae02a8820e7668385f2b86f8fa2351b55466)), and another **15 medium / low.**

The issues were tackled with following prompt, with agentic iteration and test-driven-development (TDD):

> Lets then implement all critical and high-ranked issues.\
> Let\'s tackle each item individually, starting from top, with test-driven-development - first, prepare a plan of implementation using \@vibe-websitehub-pro/.cursor/rules/product-engineer.mdc, then implement test cases by \@vibe-websitehub-pro/.cursor/rules/test-developer.mdc , then implement code by \@vibe-websitehub-pro/.cursor/rules/main-developer.mdc.\
> Run all required tests, and if something does not pass, loop fixes by \@vibe-websitehub-pro/.cursor/rules/main-developer.mdc until all tests pass.\
> When you done each item from list, report to me with quick summary and ask for permission to go to the next item.

The plan itself was created again with Claude Opus 4.5, but implementation with many steps forced me to use a cheaper model, specifically auto mode from Cursor (balanced quality and speed). Here is our updated OWASP Top 10 assessment table after implementing fixes proposed by AI for the app to be production-ready (**after +20 agentic iterations, which took around 3h**):

  ❗ **Info**
  ------------------------------------------------------------------------------------------------------------------------------------------------
  This is not a full security assessment - it\'s just some cherry-picked highlights. There could easily be more vulnerabilities than shown here.

  OWASP Top 10                                status   vulnerabilities / fixes
  ------------------------------------------- -------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  A01:Broken Access Control                   ❌       SSRF fixed via URL validation blocking private IPs and localhost. Admin routes protected by middleware with session and role checks. However, when a user logs out, the JWT token remains valid for 7 days. The logout only clears the cookie client-side, which means the token could still be used from another device or browser until it expires. This is risky because if a token is compromised, an attacker could retain access even after the user thinks they logged out.
  A02:Security Misconfiguration               ❌       Added security headers (CSP, HSTS, etc.) and HTTPS enforced via middleware. However, CSP still sets `'unsafe-inline'` and `'unsafe-eval'` in `script-src` - it still allows an XSS path via scripts.
  A03:Software Supply Chain Failures          ⚠️       Dependencies stayed outdated - `npm install` still reports critical vulnerabilities.
  A04:Cryptographic Failures                  ✅       JWT secret validated (min 32 chars, throws if missing).
  A05:Injection                               ❌       Prisma ORM handles SQL injection. Import JSON feature sanitization added. **However**, the HTML export function still directly interpolates user data into HTML without escaping so this critical XSS vulnerability is still not fixed.
  A06:Insecure Design                         ✅       Input limits and max lengths added to prevent DoS. Rate limiting, pagination, and transactions improve overall design security. Import validation still lacks array size limits - a JSON with millions of sites could still cause DoS - but it was on plan for production on #24 position, labeled as medium issue, and wasn\'t implemented as we focused only on critical / high issues.
  A07:Authentication Failures                 ✅       Strong password requirements enforced server-side (8+ chars, uppercase, lowercase, number, special char). Rate limiting on auth endpoints. Generic error messages prevent enumeration. Nevertheless, it is still worth mentioning that in today\'s world two-factor-authorization (2FA) has become a standard for authentication but I didn't expect it here anyway.
  A08:Software or Data Integrity Failures     ⚠️       Import validation and sanitization added, but lacks cryptographic signatures for full integrity verification.
  A09:Logging and Alerting Failures           ✅       API request logging implemented via structured logger.
  A10:Mishandling of Exceptional Conditions   ✅       Errors handled properly - app logs full details server-side while sanitizing client responses. No silent failures.

## Summary

This experiment is only one example of vibe coding an app with an LLM. A different model, tech stack, prompt style, or agentic workflow could produce very different results - and that's important to emphasize. **The goal here is not to claim that AI can or cannot write secure software, but simply to raise awareness of how easily common OWASP Top 10 issues emerge when speed and convenience take priority.**

Remember also that the **OWASP Top 10 highlights the most common web application risks - not all of them**. Many other vulnerabilities exist, and a vibe-coded app can fall into those as well. In our case, the second "production-ready" iteration fixed a lot of critical issues, but several weaknesses remained (e.g. outdated dependencies, CSP looseness, export JSON XSS, etc.). The fact that the model itself calls this state "production-ready" is a result, not a guarantee. **Without independent validation - [Software Composition Analysis (SCA)](https://www.aikido.dev/scanners/open-source-dependency-scanning-sca), [Dynamic Application Security Testing (DAST)](https://www.aikido.dev/scanners/surface-monitoring-dast), manual review, etc. - such a statement lacks real operational value.** Leaving known vulnerable critical dependencies in place alone is enough to question any "ready for production" claim.

Additionally, it's worth remembering that LLMs reproduce both good and bad patterns from their training data. Without guidance and verification, insecure defaults emerge naturally. With clear constraints, validation, and iterative checks, the results can improve a lot - but that's still only one layer. A realistic approach today assumes that code (whether written by humans or AI) would be continuously scanned: SCA and [Static Application Security Testing (SAST)](https://www.aikido.dev/scanners/static-code-analysis-sast) for code and dependencies, plus scanners for configuration, [Infrastructure as Code (IaC)](https://www.aikido.dev/scanners/infrastructure-as-a-code-iac), and containers, all wired into a **Secure Software Development Lifecycle (SSDLC)**. Tools like Aikido bring these checks together in a single dashboard and keep them running in the background (you can check our [Software security with Aikido page](https://softwaremill.com/services/software-security-with-aikido/)).

AI is moving fast, so secure software can't rely on vibes or good intentions - it needs awareness, process, and automated security tooling in the pipeline by default.

If you\'re interested in building security into your development process, you might also enjoy our free ebook: [Cybersecurity: developing a security-first mindset](https://softwaremill.com/ebooks/developing-a-security-first-mindset/), for valuable insights on building secure applications.

[![banner-ebook-cybersecurity](/user/pages/blog/334.vibe-coding-against-owasp-top-10-2025/banner-ebook-cybersecurity.jpg?g-0860049e "banner-ebook-cybersecurity")](https://softwaremill.com/ebooks/developing-a-security-first-mindset/)

*Reviewed by: Krzysztof Ciesielski*

</div>

[Blog Comments powered by [Disqus]{.logo-disqus}.](http://disqus.com){.dsq-brlink rel="nofollow noopener noreferrer"}
