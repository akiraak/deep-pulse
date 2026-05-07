---
url: https://lovable.dev/blog/our-response-to-the-april-2026-incident
title: "Our response to the April 2026 incident | Lovable"
---

On April 20, a security researcher publicly reported that data within public Lovable projects could be accessed by any authenticated user. We shipped a fix within two hours, but both our product and initial external response missed the mark. We owe you a clearer accounting of what happened, why it happened, and what we\'re doing about it.

**Private projects and Lovable Cloud were never impacted.** Between February 3, 2026 and April 20, 2026 public project chat history and source code could potentially be accessed by any Lovable user provided they had a project link.

**Current status:**

-   We have fixed the issue --- chat history and source code of public projects are no longer accessible to other users.
-   We are making all current public projects private, with the exception of Lovable's official remixable templates, and will communicate with users whose public projects are now private so they can make choices about their project visibility.
-   We are redesigning user experience around project visibility.
-   We are restructuring our HackerOne vulnerability triage process, including extensive product training to all HackerOne triagers.
-   We are continuing to review which public projects may have been viewed by Lovable users other than the project owners between February 3, 2026 and April 20, 2026, and will communicate with those project owners.

See below for more details.

## **What happened**

Chat histories and source code of public projects were historically accessible by design. Over the course of 2025, we deliberately removed that access based on user feedback. In February 2026, backend regressions re-enabled public access to chat history and source code on public projects.

Researchers filed multiple valid reports about this issue through our Responsible Disclosure Programs with HackerOne, but these were closed instead of being escalated to Lovable because of outdated internal documentation we provided to the triage team.

Our first public response was dismissive and failed to acknowledge the real concern.

### Timeline

-   **November 2024** --- Lovable launched
-   **March 2025** --- Chat history and source code for public projects could no longer be accessed via the API; and chat history for public projects could no longer be accessed via remixing.
-   **May 2025** --- Enterprise users could no longer create new public projects or change an existing project\'s visibility to public.
-   **November 2025\*** --- All new projects across all tiers became private-by-default.
-   **February 2026** --- Backend regressions re-enabled public access to chat history and code on public projects.

\* *dates incorrectly stated in original communications.*

## **Background: how public projects worked**

In the early days of Lovable, we were building something new: a place where anyone could create software by talking to AI. Few knew what vibe coding was or what was possible. So we leaned into community and discovery: you could see every project being built on the platform, watch how others prompted the AI, remix what they made, and go build your own. It was how people learned what Lovable could do.

When you created a project, you could choose \"Public\" or \"Private.\" A public project meant the entire project was open (code and chat history included), your project was remixable, and it was showcased on your profile page. And on the free tier, all projects were public by default; you needed a paid plan to go private.

Over time we realized this was confusing, especially as our number of non-technical users grew. Many users understood \"public\" to mean their published app was visible on the web, not that someone could read through their build conversation.

**How visibility works today**

This is an important distinction we should have made clearer. Lovable has two independent visibility settings:

-   **Project visibility** (editor access) controls who can view your project in the Lovable editor -- including your source code, chat history, work-in-progress, and any unpublished changes.
-   **Website access** (published URL access) controls who can visit your published app at its live URL.

Publishing your app does not change who can access your project in the editor, and changing project visibility does not affect who can visit the published app.

## **The HackerOne reports**

Multiple researchers reported this issue through our Responsible Disclosure Programs on HackerOne --- the first on February 22, 2026. All reports were closed without being escalated to our internal security team.

The decision to close the reports was based on internal static documentation and context we had provided to our HackerOne partners, which still described public project chat visibility as intended behavior.

HackerOne should be treated as an extension of our security team, and we are responsible for equipping them with accurate, up-to-date information about what constitutes expected behavior on our platform. We are updating all program documentation and retraining our HackerOne triage team on Lovable\'s current permission model. Beyond this immediate fix, we are restructuring our escalation workflow to ensure that any product change affecting user data access automatically triggers an update to our triage documentation --- so that this kind of gap between product behavior and triage guidance cannot recur. Our internal security team is also re-triaging all reports to make sure any further inaccuracies are addressed.

We also want to acknowledge and thank the researchers. They found a real issue, reported it through the proper channels, and were let down by our process.

## **What else we\'re changing**

On April 20, we started implementing a series of product and process changes:

**Product changes:**

-   Done: Fixed the issue and reverted the permission regression --- chat history and source code of public projects are no longer accessible to other Lovable users.
-   Done: Making all historically public projects private, with the exception of our official templates on lovable.dev, and the explicit option to opt-in to remix.
-   In-progress: Communicating with users who had public and remixed projects via email and in-product announcements about the new flow, so they can opt in if they want to allow remixing of their projects going forward.

**Process changes:**

-   Done: Updated our documentation to more visibly highlight the difference between project visibility (who can see your editor, chat, and code) and published app visibility (who can see the deployed website).
-   In-progress: Restructuring our vulnerability triage process and doing comprehensive product training for all triagers in our Responsible Disclosure Programs with HackerOne.
-   In-progress: Continuing to review what public projects were viewed by Lovable users other than the project owners between February 3, 2026 and April 20, 2026 and working on communicating with the project owners.

Overall, we are continuing to improve our access controls to reduce the likelihood of similar issues in the future.

## **Where we fell short**

Lovable is trusted by millions of people to build software. That\'s a responsibility we don\'t take lightly, and this incident made clear that we need to hold ourselves to a higher standard on security, transparency, and how we communicate when something goes wrong.

Prior to March 26, 2025, chat history on public projects was accessible by design. However, many users --- particularly non-technical users --- did not understand the implications of their projects being public. Users did not realize that remixing a public project gave the person remixing it access to the full chat history and source code. We should have recognized this sooner and acted faster.

When we did act, we didn\'t do it consistently. Enterprise customers were moved to private-by-default in May 2025, but other users were not given the ability to make projects private-by-default until November 2025.

In February 2026, we made a product change that had an unintended negative impact. A backend regression reintroduced access to chat histories on public projects --- undoing protections we had deliberately put in place between March and November 2025. We didn\'t go far enough or fast enough in building safeguards around visibility settings, and a change that should have been caught slipped through.

Our initial communication regarding the public report missed the mark and created more confusion. We should have led with what happened, who was affected, and what we were doing to fix it.

We see that we hadn\'t built the product safeguards, the communication muscle, or the security processes to match the trust our users placed in us. We\'re fixing all three, with urgency.

If you previously had public projects and may be affected, we will contact you directly with further information and recommended steps. We will also continue to update our users with more information as our investigation continues.

Thank you for building with us,

Anton, Fabian & The Team at Lovable
