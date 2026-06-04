---
url: https://www.viksnewsletter.com/p/why-cpo-uses-external-lasers
title: "Why Co-Packaged Optics Uses External Lasers Instead of Integrated Sources"
---

# Why Co-Packaged Optics Uses External Lasers Instead of Integrated Sources {#why-co-packaged-optics-uses-external-lasers-instead-of-integrated-sources .post-title .published .title-X77sOw dir="auto"}

### On-chip lasers for CPO are the holy grail, but a near-term pragmatic approach is to keep lasers external for thermals and reliability. A look at the physics, implementation, and solutions. {#on-chip-lasers-for-cpo-are-the-holy-grail-but-a-near-term-pragmatic-approach-is-to-keep-lasers-external-for-thermals-and-reliability.-a-look-at-the-physics-implementation-and-solutions. .subtitle .subtitle-HEEcLo dir="auto"}

[](https://substack.com/@vikramskr){.pencraft .pc-display-contents .pc-reset aria-label="View Vikram Sekar's profile"}

![Vikram Sekar\'s avatar](https://substackcdn.com/image/fetch/$s_!G5_u!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fafc78b68-c3cf-4c29-94f3-1422781e3e92_185x185.png){.img-OACg1c .object-fit-cover-u4ReeV .pencraft .pc-reset draggable="false" height="36" srcset="https://substackcdn.com/image/fetch/$s_!G5_u!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fafc78b68-c3cf-4c29-94f3-1422781e3e92_185x185.png 1x, https://substackcdn.com/image/fetch/$s_!G5_u!,w_72,h_72,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fafc78b68-c3cf-4c29-94f3-1422781e3e92_185x185.png 2x, https://substackcdn.com/image/fetch/$s_!G5_u!,w_108,h_108,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fafc78b68-c3cf-4c29-94f3-1422781e3e92_185x185.png 3x" width="36"}

[[Vikram Sekar](https://substack.com/@vikramskr){.pencraft .pc-reset .decoration-hover-underline-ClDVRM .reset-IxiVJZ}]{state="closed" style="min-width:0;"}

Nov 09, 2025

∙ Paid

37

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgZmlsbD0iIzAwMDAwMCIgaGVpZ2h0PSIyMCIgcm9sZT0iaW1nIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3R5bGU9ImhlaWdodDoyMHB4O3dpZHRoOjIwcHg7IiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48dGl0bGU+PC90aXRsZT48c3ZnIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lc3NhZ2UtY2lyY2xlIiBoZWlnaHQ9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld2JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuOSAyMEE5IDkgMCAxIDAgNCAxNi4xTDIgMjJaIj48L3BhdGg+PC9zdmc+){.icon}

3

3

Share

*Welcome to a 🔒 **subscriber-only deep-dive edition** 🔒 of my weekly newsletter. Each week, I help investors, professionals and students stay up-to-date on complex topics, and navigate the semiconductor industry.*

*If you're new, [start here](https://www.viksnewsletter.com/p/new-start-here). See [here](https://www.viksnewsletter.com/p/new-start-here?r=222kot&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false) for all the benefits of upgrading your subscription tier!*

[Subscribe]{.button-text}

*As a paid subscriber, you will also have access to a video explanation of this post, an executive summary with key highlights, and a google drive link to this article so that you can parse it with your favorite LLM to mine insights best suited to your needs.*

<div>

------------------------------------------------------------------------

</div>

CPO is not a new idea, and has been around for the last decade. I recommend Asianometry: [The AI Bandwidth Wall & Co-Packaged Optics](https://youtu.be/G5r2OyCN5_s?si=iA4VYm6pjTUl4mOu), if you are unfamiliar with the basic concept. For a long time, CPO has had to deal with challenges that involved laser integration.

**The core problem is thermal**. Modern switch ASICs dissipate hundreds of watts of power. Laser sources require precise temperature control to maintain stable wavelength, output power, and reasonable lifetimes. Placing these temperature-sensitive components directly adjacent to high-power switch silicon creates a fundamental conflict.

**The second challenge is reliability and serviceability**. Field data from hyperscalers shows that laser sources are among the top three failure modes in optical systems. In traditional pluggable transceivers, a failed laser means swapping out a front-panel module. In co-packaged optics, the laser is integrated with the switch ASIC itself. A laser failure would require replacing the entire package, an expensive and disruptive operation that undermines the business case for CPO deployment.

**The industry's solution to both problems is external lasers**. By relocating laser sources away from the switch ASIC to front-panel modules, CPO systems can maintain lasers at controlled temperatures while preserving hot-swap serviceability. This approach, standardized through External Laser Small Form-Factor Pluggable (ELSFP) specifications, has become the practical path forward for CPO deployment.

<figure>
<a href="https://substackcdn.com/image/fetch/$s_!5UJm!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06709d0d-1c3b-4db8-82ce-b504083253c2_1668x824.png" class="image-link image2 is-viewable-img can-restack" data-component-name="Image2ToDOM" target="_blank"></a>
<div class="image2-inset">
<img src="https://substackcdn.com/image/fetch/$s_!5UJm!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06709d0d-1c3b-4db8-82ce-b504083253c2_1668x824.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/06709d0d-1c3b-4db8-82ce-b504083253c2_1668x824.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:719,&quot;width&quot;:1456,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" loading="lazy" sizes="100vw" srcset="https://substackcdn.com/image/fetch/$s_!5UJm!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06709d0d-1c3b-4db8-82ce-b504083253c2_1668x824.png 424w, https://substackcdn.com/image/fetch/$s_!5UJm!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06709d0d-1c3b-4db8-82ce-b504083253c2_1668x824.png 848w, https://substackcdn.com/image/fetch/$s_!5UJm!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06709d0d-1c3b-4db8-82ce-b504083253c2_1668x824.png 1272w, https://substackcdn.com/image/fetch/$s_!5UJm!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06709d0d-1c3b-4db8-82ce-b504083253c2_1668x824.png 1456w" width="1456" height="719" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIwIiByb2xlPSJpbWciIHN0cm9rZT0idmFyKC0tY29sb3ItZmctcHJpbWFyeSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdib3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
<img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXhpbWl6ZTIgbHVjaWRlLW1heGltaXplLTIiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld2JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
<figcaption>Source: Broadcom</figcaption>
</figure>

Today, CPO is a reality and it is not just speed that is a benefit; even at 800G interconnect speeds (100G/lane), there are significant energy savings. As speeds go to 1.6T and beyond, CPO becomes the primary technology of choice.

In this post, we will dig deeper into how external lasers solve CPO's thermal and reliability challenges. We will cover:

-   **Where to put the laser?**: The architectural tradeoffs between traditional pluggable transceivers and co-packaged optics

-   **Temperature Sensitivity in III-V Laser Wavelength**: Why heat causes wavelength shifts and channel interference

-   **Impact of Temperature on Lasing Threshold and Efficiency**: How elevated temperatures degrade laser performance

-   **Lifetime Degradation at High Temperatures**: Exponential reduction in laser operational lifetimes

**For paid subscribers:**

-   **Laser Failure Rates**: Field data from hyperscale datacenter operations

-   **Solving the CPO Serviceability Problem with ELSFP**: How external laser modules preserve hot-swap capability

-   **InP Distributed Feedback Lasers for CPO**: The laser technology used in production CPO systems

-   **CPO Measured Reliability Performance**: Lab stress test data from Broadcom

-   **Laser sources: Key players**: Best solutions for external lasers, and evolving ones

**Read time**: \~12 mins

*Subscribe to get all these newsletters!* *If you're new, [start here](https://www.viksnewsletter.com/p/new-start-here). See [here](https://www.viksnewsletter.com/p/new-start-here?r=222kot&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false) for all the benefits of a paid subscription.*

[Subscribe]{.button-text}

------------------------------------------------------------------------

</div>

### Where to put the laser? {#where-to-put-the-laser .header-anchor-post}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saW5rIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCAxM2E1IDUgMCAwIDAgNy41NC41NGwzLTNhNSA1IDAgMCAwLTcuMDctNy4wN2wtMS43MiAxLjcxIj48L3BhdGg+PHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+PC9zdmc+){.lucide .lucide-link}

Laser sources are required to convert electrical information into the optical domain. Pluggable optics today have the laser source in a small form factor pluggable (SFP) device that has a full optical transceiver in a compact connector that plugs into the front of the rack.

<figure>
<a href="https://substackcdn.com/image/fetch/$s_!-jgG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4567942b-3b5f-4746-8241-33b4cafbc8ca_900x600.png" class="image-link image2 is-viewable-img can-restack" data-component-name="Image2ToDOM" target="_blank"></a>
<div class="image2-inset">
<img src="https://substackcdn.com/image/fetch/$s_!-jgG!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4567942b-3b5f-4746-8241-33b4cafbc8ca_900x600.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/4567942b-3b5f-4746-8241-33b4cafbc8ca_900x600.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:600,&quot;width&quot;:900,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" loading="lazy" sizes="100vw" srcset="https://substackcdn.com/image/fetch/$s_!-jgG!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4567942b-3b5f-4746-8241-33b4cafbc8ca_900x600.png 424w, https://substackcdn.com/image/fetch/$s_!-jgG!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4567942b-3b5f-4746-8241-33b4cafbc8ca_900x600.png 848w, https://substackcdn.com/image/fetch/$s_!-jgG!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4567942b-3b5f-4746-8241-33b4cafbc8ca_900x600.png 1272w, https://substackcdn.com/image/fetch/$s_!-jgG!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4567942b-3b5f-4746-8241-33b4cafbc8ca_900x600.png 1456w" width="900" height="600" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIwIiByb2xlPSJpbWciIHN0cm9rZT0idmFyKC0tY29sb3ItZmctcHJpbWFyeSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdib3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
<img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXhpbWl6ZTIgbHVjaWRlLW1heGltaXplLTIiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld2JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
<figcaption>Source: Zyxel.</figcaption>
</figure>

The internals of an optical SFP transceiver are shown below. It consists of a transmitter optical sub-assembly (TOSA) consisting of a driver IC that drives a laser diode. The receiver optical sub-assembly (ROSA) has a diode photodetector and a trans-impedance amplifier (TIA) that amplifies the detected optical signals. If there are any optical failures, this whole connector and optical fiber assembly can be easily swapped out.

<figure>
<a href="https://substackcdn.com/image/fetch/$s_!XJBE!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd5c8154-a60d-4a3f-ba28-68df7928c3e5_1560x421.png" class="image-link image2 is-viewable-img can-restack" data-component-name="Image2ToDOM" target="_blank"></a>
<div class="image2-inset">
<img src="https://substackcdn.com/image/fetch/$s_!XJBE!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd5c8154-a60d-4a3f-ba28-68df7928c3e5_1560x421.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/cd5c8154-a60d-4a3f-ba28-68df7928c3e5_1560x421.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:393,&quot;width&quot;:1456,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" loading="lazy" sizes="100vw" srcset="https://substackcdn.com/image/fetch/$s_!XJBE!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd5c8154-a60d-4a3f-ba28-68df7928c3e5_1560x421.png 424w, https://substackcdn.com/image/fetch/$s_!XJBE!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd5c8154-a60d-4a3f-ba28-68df7928c3e5_1560x421.png 848w, https://substackcdn.com/image/fetch/$s_!XJBE!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd5c8154-a60d-4a3f-ba28-68df7928c3e5_1560x421.png 1272w, https://substackcdn.com/image/fetch/$s_!XJBE!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd5c8154-a60d-4a3f-ba28-68df7928c3e5_1560x421.png 1456w" width="1456" height="393" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIwIiByb2xlPSJpbWciIHN0cm9rZT0idmFyKC0tY29sb3ItZmctcHJpbWFyeSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdib3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
<img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXhpbWl6ZTIgbHVjaWRlLW1heGltaXplLTIiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld2JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
<figcaption>Optical transceiver internals. Source: Linovision</figcaption>
</figure>

But CPO takes this optical transceiver and integrates it next to the switch ASIC on the same package. In an ideal scenario, the electrical-optical conversion that was happening in the connector, now happens in a silicon photonics (SiPho) chip right next to the silicon ASIC. This dramatically reduces the electrical interconnect distance needed between the optics and ASIC. The electrical DSP used in optical transceivers to compensate and correct for electrical loss can now be eliminated resulting in significant power savings in every connector.

<figure>
<a href="https://substackcdn.com/image/fetch/$s_!BliC!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F84e9826c-1641-483f-97a1-d9b68b96779f_1018x463.png" class="image-link image2 is-viewable-img can-restack" data-component-name="Image2ToDOM" target="_blank"></a>
<div class="image2-inset">
<img src="https://substackcdn.com/image/fetch/$s_!BliC!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F84e9826c-1641-483f-97a1-d9b68b96779f_1018x463.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/84e9826c-1641-483f-97a1-d9b68b96779f_1018x463.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:463,&quot;width&quot;:1018,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" loading="lazy" sizes="100vw" srcset="https://substackcdn.com/image/fetch/$s_!BliC!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F84e9826c-1641-483f-97a1-d9b68b96779f_1018x463.png 424w, https://substackcdn.com/image/fetch/$s_!BliC!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F84e9826c-1641-483f-97a1-d9b68b96779f_1018x463.png 848w, https://substackcdn.com/image/fetch/$s_!BliC!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F84e9826c-1641-483f-97a1-d9b68b96779f_1018x463.png 1272w, https://substackcdn.com/image/fetch/$s_!BliC!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F84e9826c-1641-483f-97a1-d9b68b96779f_1018x463.png 1456w" width="1018" height="463" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIwIiByb2xlPSJpbWciIHN0cm9rZT0idmFyKC0tY29sb3ItZmctcHJpbWFyeSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdib3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
<img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXhpbWl6ZTIgbHVjaWRlLW1heGltaXplLTIiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld2JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
<figcaption>Source: Nvidia Developer Technical Blog.</figcaption>
</figure>

But where should the laser go in a co-packaged solution? The lowest loss and highest power savings will come from integrating the laser into the SiPho chip. But the industry has intentionally avoided doing that, instead choosing to keep the laser external to the rack as shown in the CPO solution above.

In the next few sections, we will discuss why this less optimal configuration was chosen, and how it is a better path for practical deployment of CPO. The answer lies in the fundamental physics of how temperature affects laser operation.

### Temperature Sensitivity in III-V Laser Wavelength {#temperature-sensitivity-in-iii-v-laser-wavelength .header-anchor-post}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saW5rIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCAxM2E1IDUgMCAwIDAgNy41NC41NGwzLTNhNSA1IDAgMCAwLTcuMDctNy4wN2wtMS43MiAxLjcxIj48L3BhdGg+PHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+PC9zdmc+){.lucide .lucide-link}

To understand why lasers are sensitive to temperature, we need to understand that laser action occurs in direct bandgap semiconductors that are mostly found only in III-V compound semiconductors like Indium Phosphide (InP). Silicon cannot produce laser light efficiently, which is why photonics chips need separate III-V based laser sources in the first place. If you want to understand why silicon fails as a laser material, I covered this in detail in an earlier post below.

[](https://www.viksnewsletter.com/p/why-we-cant-build-lasers-on-silicon){rel="noopener" target="_blank"}

## Why We Can\'t Build Lasers on Silicon {#why-we-cant-build-lasers-on-silicon .pencraft .pc-reset .color-pub-primary-text-NyXPlw .line-height-36-XIK16z .font-display-nhmvtD .size-30-tZAWf_ .weight-bold-DmI9lw .reset-IxiVJZ}

[Vikram Sekar](https://substack.com/profile/124411709-vikram-sekar){.inheritColor-WetTGJ}

December 8, 2024

![Why We Can\'t Build Lasers on Silicon](https://substackcdn.com/image/fetch/$s_!p87M!,w_280,h_280,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6d890bce-c01c-4c8e-a681-7e3841044973_1456x1048.png){.img-OACg1c .mdSquare-pPKPYa .pencraft .pc-reset height="280" sizes="100vw" width="280"}

Silicon technology has dominated for decades for its low cost and ability to scale, but it has its Achilles heel: you can't build lasers on silicon.

[](https://www.viksnewsletter.com/p/why-we-cant-build-lasers-on-silicon){.pencraft .pc-reset .align-center-y7ZD4w .line-height-20-t4M0El .font-text-qe4AeH .size-13-hZTUKr .weight-medium-fw81nC .reset-IxiVJZ}

[Read full story]{.pencraft .pc-reset .color-accent-BVX_7M .line-height-20-t4M0El .font-text-qe4AeH .size-14-MLPa7j .weight-semibold-uqA4FV .reset-IxiVJZ}![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hcnJvdy1yaWdodCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSAxMmgxNCI+PC9wYXRoPjxwYXRoIGQ9Im0xMiA1IDcgNy03IDciPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-arrow-right}

The laser wavelength depends on the band gap energy (Eg) between the valence and conduction bands in the semiconductor. When temperature rises, electrons gain thermal energy and the band gap shrinks. A smaller band gap means longer wavelength output, i.e., a "red-shift" towards the red end of the spectrum.

<figure>
<a href="https://substackcdn.com/image/fetch/$s_!gtSL!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5c64baca-b289-4cdf-b6d1-4d631c966558_1266x591.png" class="image-link image2 is-viewable-img can-restack" data-component-name="Image2ToDOM" target="_blank"></a>
<div class="image2-inset">
<img src="https://substackcdn.com/image/fetch/$s_!gtSL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5c64baca-b289-4cdf-b6d1-4d631c966558_1266x591.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/5c64baca-b289-4cdf-b6d1-4d631c966558_1266x591.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:591,&quot;width&quot;:1266,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" loading="lazy" sizes="100vw" srcset="https://substackcdn.com/image/fetch/$s_!gtSL!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5c64baca-b289-4cdf-b6d1-4d631c966558_1266x591.png 424w, https://substackcdn.com/image/fetch/$s_!gtSL!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5c64baca-b289-4cdf-b6d1-4d631c966558_1266x591.png 848w, https://substackcdn.com/image/fetch/$s_!gtSL!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5c64baca-b289-4cdf-b6d1-4d631c966558_1266x591.png 1272w, https://substackcdn.com/image/fetch/$s_!gtSL!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5c64baca-b289-4cdf-b6d1-4d631c966558_1266x591.png 1456w" width="1266" height="591" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIwIiByb2xlPSJpbWciIHN0cm9rZT0idmFyKC0tY29sb3ItZmctcHJpbWFyeSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdib3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
<img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXhpbWl6ZTIgbHVjaWRlLW1heGltaXplLTIiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld2JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
<figcaption>Source: ViksNewsletter</figcaption>
</figure>

For example, in an InP distributed feedback (DFB) laser operating with 1310 or 1550 nm telecom wavelengths, there is approximately 0.1 nm/°C dependence of wavelength on temperature. This might sound small, but in wavelength division multiplexing (WDM) systems where multiple optical channels are packed closely together, even small wavelength shifts can cause channel interference and data errors.

### Impact of Temperature on Lasing Threshold and Efficiency {#impact-of-temperature-on-lasing-threshold-and-efficiency .header-anchor-post}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saW5rIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCAxM2E1IDUgMCAwIDAgNy41NC41NGwzLTNhNSA1IDAgMCAwLTcuMDctNy4wN2wtMS43MiAxLjcxIj48L3BhdGg+PHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+PC9zdmc+){.lucide .lucide-link}

Temperature increases the lasing threshold current - the minimum drive current needed to achieve laser action and produce coherent light output. At higher temperatures, energy gets diverted into competing processes like carrier leakage and Auger recombination rather than stimulated laser emission. Unless you significantly increase the drive current to compensate, the laser's output power will drop.

The plot below shows all these effects in a commercial InP DFB laser from Lumentum. As the junction temperature in the DFB laser diode (DFB) rises from 25°C to 50°C:

-   The threshold current increases and the output power at a given drive current decreases (inset a: left axis)

-   The laser wavelength shifts to higher values (insets c, d, e: case temperature is 50°C)

The conversion efficiency (inset b) is plotted for a constant fiber power of 0.4W, which requires different drive currents. As a result, it appears that efficiency gets better as the laser source gets hotter (increasing LD). However, for a constant laser temperature (say LD=40°C), increase in ambient "case" temperature significantly drops the efficiency (solid orange versus dotted red).

<figure>
<a href="https://substackcdn.com/image/fetch/$s_!oimn!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa041922b-c54c-4b45-afb7-a1cc845edb8f_1189x831.png" class="image-link image2 is-viewable-img can-restack" data-component-name="Image2ToDOM" target="_blank"></a>
<div class="image2-inset">
<img src="https://substackcdn.com/image/fetch/$s_!oimn!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa041922b-c54c-4b45-afb7-a1cc845edb8f_1189x831.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/a041922b-c54c-4b45-afb7-a1cc845edb8f_1189x831.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:831,&quot;width&quot;:1189,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" loading="lazy" sizes="100vw" srcset="https://substackcdn.com/image/fetch/$s_!oimn!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa041922b-c54c-4b45-afb7-a1cc845edb8f_1189x831.png 424w, https://substackcdn.com/image/fetch/$s_!oimn!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa041922b-c54c-4b45-afb7-a1cc845edb8f_1189x831.png 848w, https://substackcdn.com/image/fetch/$s_!oimn!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa041922b-c54c-4b45-afb7-a1cc845edb8f_1189x831.png 1272w, https://substackcdn.com/image/fetch/$s_!oimn!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa041922b-c54c-4b45-afb7-a1cc845edb8f_1189x831.png 1456w" width="1189" height="831" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIwIiByb2xlPSJpbWciIHN0cm9rZT0idmFyKC0tY29sb3ItZmctcHJpbWFyeSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdib3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
<img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXhpbWl6ZTIgbHVjaWRlLW1heGltaXplLTIiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld2JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
<figcaption><span>InP DFB laser performance at different temperatures. Source: Lumentum (</span><a href="https://resource.lumentum.com/s3fs-public/technical-library-items/cleo_2022_high_power_cw_laser_for_co-packaged_optics.pdf">link</a><span>)</span></figcaption>
</figure>

### Lifetime Degradation at High Temperatures {#lifetime-degradation-at-high-temperatures .header-anchor-post}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saW5rIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE4IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCAxM2E1IDUgMCAwIDAgNy41NC41NGwzLTNhNSA1IDAgMCAwLTcuMDctNy4wN2wtMS43MiAxLjcxIj48L3BhdGg+PHBhdGggZD0iTTE0IDExYTUgNSAwIDAgMC03LjU0LS41NGwtMyAzYTUgNSAwIDAgMCA3LjA3IDcuMDdsMS43MS0xLjcxIj48L3BhdGg+PC9zdmc+){.lucide .lucide-link}

High temperatures also destroy laser lifetime. The degradation follows Arrhenius-type relationships where device life decreases exponentially as temperature rises. The modeled plot below shows probability density functions for laser failure at different operating temperatures.

<figure>
<a href="https://substackcdn.com/image/fetch/$s_!bblU!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed54da77-9b07-4060-a886-d08ca1191e93_557x461.png" class="image-link image2 is-viewable-img can-restack" data-component-name="Image2ToDOM" target="_blank"></a>
<div class="image2-inset">
<img src="https://substackcdn.com/image/fetch/$s_!bblU!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed54da77-9b07-4060-a886-d08ca1191e93_557x461.png" class="sizing-normal" data-attrs="{&quot;src&quot;:&quot;https://substack-post-media.s3.amazonaws.com/public/images/ed54da77-9b07-4060-a886-d08ca1191e93_557x461.png&quot;,&quot;srcNoWatermark&quot;:null,&quot;fullscreen&quot;:null,&quot;imageSize&quot;:null,&quot;height&quot;:461,&quot;width&quot;:557,&quot;resizeWidth&quot;:null,&quot;bytes&quot;:null,&quot;alt&quot;:null,&quot;title&quot;:null,&quot;type&quot;:null,&quot;href&quot;:null,&quot;belowTheFold&quot;:true,&quot;topImage&quot;:false,&quot;internalRedirect&quot;:null,&quot;isProcessing&quot;:false,&quot;align&quot;:null,&quot;offset&quot;:false}" loading="lazy" sizes="100vw" srcset="https://substackcdn.com/image/fetch/$s_!bblU!,w_424,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed54da77-9b07-4060-a886-d08ca1191e93_557x461.png 424w, https://substackcdn.com/image/fetch/$s_!bblU!,w_848,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed54da77-9b07-4060-a886-d08ca1191e93_557x461.png 848w, https://substackcdn.com/image/fetch/$s_!bblU!,w_1272,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed54da77-9b07-4060-a886-d08ca1191e93_557x461.png 1272w, https://substackcdn.com/image/fetch/$s_!bblU!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed54da77-9b07-4060-a886-d08ca1191e93_557x461.png 1456w" width="557" height="461" />
<div class="image-link-expand">
<div class="pencraft pc-display-flex pc-gap-8 pc-reset">
<img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIwIiByb2xlPSJpbWciIHN0cm9rZT0idmFyKC0tY29sb3ItZmctcHJpbWFyeSkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHZpZXdib3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0yLjUzMDAxIDcuODE1OTVDMy40OTE3OSA0LjczOTExIDYuNDMyODEgMi41IDkuOTExNzMgMi41QzEzLjE2ODQgMi41IDE1Ljk1MzcgNC40NjIxNCAxNy4wODUyIDcuMjM2ODRMMTcuNjE3OSA4LjY3NjQ3TTE3LjYxNzkgOC42NzY0N0wxOC41MDAyIDQuMjY0NzFNMTcuNjE3OSA4LjY3NjQ3TDEzLjY0NzMgNi45MTE3Nk0xNy40OTk1IDEyLjE4NDFDMTYuNTM3OCAxNS4yNjA5IDEzLjU5NjcgMTcuNSAxMC4xMTc4IDE3LjVDNi44NjExOCAxNy41IDQuMDc1ODkgMTUuNTM3OSAyLjk0NDMyIDEyLjc2MzJMMi40MTE2NSAxMS4zMjM1TTIuNDExNjUgMTEuMzIzNUwxLjUyOTMgMTUuNzM1M00yLjQxMTY1IDExLjMyMzVMNi4zODIyNCAxMy4wODgyIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
<img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYXhpbWl6ZTIgbHVjaWRlLW1heGltaXplLTIiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdmlld2JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iOSAyMSAzIDIxIDMgMTUiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjIxIiB4Mj0iMTQiIHkxPSIzIiB5Mj0iMTAiPjwvbGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMjEiIHkyPSIxNCI+PC9saW5lPjwvc3ZnPg==" class="lucide lucide-maximize2 lucide-maximize-2" />
</div>
</div>
</div>
<figcaption><span>Source: </span><a href="https://ee.stanford.edu/~jmk/pubs/ext.vs.integ.light.sources.jlt.4-21.pdf">External vs. Integrated Light Sources for Intra-Data Center Co-Packaged Optical Interfaces</a><span>. These are only simulated curves, but the make the point.</span></figcaption>
</figure>

This plot means that if you tested 1000 laser components to failure at any given temperature, most would fail near the peak of the curve shown for that temperature. A few unlucky units fail early and a few lucky ones survive unusually long, representing the tail ends of each curve. The dotted vertical line marks the 5-year lifetime target that switch ASICs are typically rated to achieve. The curves show that temperature rise causes orders of magnitude reduction in laser lifetimes. It is quite common that operating a laser at 85°C instead of 25°C could result in the devices failing 10 times sooner.

> The thermal challenge in laser sources involves maintaining them at temperatures where they can survive the multi-year operational lifetimes required for practical datacenter deployment.

<div>

------------------------------------------------------------------------

</div>

For paid subscribers:

-   **Laser Failure Rates**: Field data from hyperscale datacenter operations

-   **Solving the CPO Serviceability Problem with ELSFP**: How external laser modules preserve hot-swap capability

-   **InP Distributed Feedback Lasers for CPO**: The laser technology used in production CPO systems

-   **CPO Measured Reliability Performance**: Lab stress test data from Broadcom

-   **Laser sources: Key players**: Best solutions for external lasers, and evolving ones

*Paid subscribers get a lot more in-depth, practical information! Upgrade your subscription to get the whole perspective. Your support for all the hard work is greatly appreciated!*

[Subscribe]{.button-text}

------------------------------------------------------------------------

</div>

## This post is for paid subscribers {#this-post-is-for-paid-subscribers .paywall-title}

Subscribe

[Already a paid subscriber? **Sign in**](https://substack.com/sign-in?redirect=%2Fp%2Fwhy-cpo-uses-external-lasers&for_pub=viksnewsletter&change_user=false){native="true"}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hcnJvdy1sZWZ0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjIwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xMiAxOS03LTcgNy03Ij48L3BhdGg+PHBhdGggZD0iTTE5IDEySDUiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-arrow-left}Previous

Next![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hcnJvdy1yaWdodCIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSAxMmgxNCI+PC9wYXRoPjxwYXRoIGQ9Im0xMiA1IDcgNy03IDciPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-arrow-right}

</div>
