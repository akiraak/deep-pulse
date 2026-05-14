---
url: https://developer.nvidia.com/blog/build-a-secure-always-on-local-ai-agent-with-nvidia-nemoclaw-and-openclaw/
title: "Build a More Secure, Always-On Local AI Agent with OpenClaw and NVIDIA NemoClaw | NVIDIA Technical Blog"
---

[ [Agentic AI / Generative AI](https://developer.nvidia.com/blog/category/generative-ai/){wpel-link="internal" rel="follow" target="_self"} ]{.category-name .content-s} []{.post-rate-widget .content-s} [ ]{.post-lang-switcher}

English한국어

# Build a More Secure, Always-On Local AI Agent with OpenClaw and NVIDIA NemoClaw {#build-a-more-secure-always-on-local-ai-agent-with-openclaw-and-nvidia-nemoclaw .h--large .txt-clr--blck .mt-2 .mb-0}

Use NVIDIA DGX Spark to deploy OpenClaw and NemoClaw end-to-end, from model serving to Telegram connectivity, with full control over your runtime environment.

![Decorative image.](https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-1024x576.jpg){.attachment-full-page-width .size-full-page-width .wp-post-image decoding="async" fetchpriority="high" height="576" sizes="(max-width: 1024px) 100vw, 1024px" srcset="https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-1024x576.jpg 1024w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-179x101.jpg 179w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-300x169.jpg 300w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-768x432.jpg 768w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-625x352.jpg 625w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-1536x864.jpg 1536w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-645x363.jpg 645w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-660x370.jpg 660w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-500x281.jpg 500w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-160x90.jpg 160w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-362x204.jpg 362w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-196x110.jpg 196w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark-960x540.jpg 960w, https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/Claw-DGX-Spark.webp 1920w" width="1024"}

Apr 17, 2026

By [Patrick Moorhead](https://developer.nvidia.com/blog/author/pmoorhead/ "Posts by Patrick Moorhead"){.author .url .fn wpel-link="internal" rel="author follow" target="_self"} and [Edward Li](https://developer.nvidia.com/blog/author/edwli/ "Posts by Edward Li"){.author .url .fn wpel-link="internal" rel="author follow" target="_self"}

[]{.count-box .wp_ulike_counter_up ulike-counter-value="+21"}

Like

[ Discuss (0)](#entry-content-comments)

-   [L](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fdeveloper.nvidia.com%2Fblog%2Fbuild-a-secure-always-on-local-ai-agent-with-nvidia-nemoclaw-and-openclaw%2F){.for-linkedin wpel-link="external" rel="follow" target="_blank"}
-   [T](https://twitter.com/intent/tweet?text=Build+a+More+Secure%2C+Always-On+Local+AI+Agent+with+OpenClaw+and+NVIDIA+NemoClaw+%7C+NVIDIA+Technical+Blog+https%3A%2F%2Fdeveloper.nvidia.com%2Fblog%2Fbuild-a-secure-always-on-local-ai-agent-with-nvidia-nemoclaw-and-openclaw%2F){.for-twitter wpel-link="external" rel="follow" target="_blank"}
-   [F](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdeveloper.nvidia.com%2Fblog%2Fbuild-a-secure-always-on-local-ai-agent-with-nvidia-nemoclaw-and-openclaw%2F){.for-facebook wpel-link="external" rel="follow" target="_blank"}
-   [R](https://www.reddit.com/submit?url=https%3A%2F%2Fdeveloper.nvidia.com%2Fblog%2Fbuild-a-secure-always-on-local-ai-agent-with-nvidia-nemoclaw-and-openclaw%2F&title=Build+a+More+Secure%2C+Always-On+Local+AI+Agent+with+OpenClaw+and+NVIDIA+NemoClaw+%7C+NVIDIA+Technical+Blog){.for-reddit wpel-link="external" rel="follow" target="_blank"}
-   [E](mailto:?subject=I'd%20like%20to%20share%20a%20link%20with%20you&body=https%3A%2F%2Fdeveloper.nvidia.com%2Fblog%2Fbuild-a-secure-always-on-local-ai-agent-with-nvidia-nemoclaw-and-openclaw%2F){.for-mail}

![](data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI1IiB2aWV3Ym94PSIwIDAgMjUgMjUiIHdpZHRoPSIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIuNDkxNSAxNS4zMDE5QzIyLjI5NCAxNS4zMDQ3IDIyLjA5NzYgMTUuMzMxNiAyMS45MDY2IDE1LjM4MTlMMjAuMjU0IDEyLjkwMTlMMjEuOTA1IDEwLjQyMTlDMjIuMDk2NyAxMC40NzMxIDIyLjI5MzMgMTAuNDk4NyAyMi40OTE1IDEwLjUwMTlDMjIuODg0NCAxMC41MDMyIDIzLjI3MTYgMTAuNDA3OCAyMy42MTkgMTAuMjI0MUMyMy45NjY1IDEwLjA0MDQgMjQuMjYzNSA5Ljc3NDA1IDI0LjQ4MzkgOS40NDg0NUMyNC43MDQ0IDkuMTIyODUgMjQuODQxNSA4Ljc0Nzk5IDI0Ljg4MzIgOC4zNTY4N0MyNC45MjUgNy45NjU3NSAyNC44NzAxIDcuNTcwMzUgMjQuNzIzMyA3LjIwNTQ3QzI0LjU3NjYgNi44NDA1OSAyNC4zNDI1IDYuNTE3NDEgMjQuMDQxNyA2LjI2NDM3QzIzLjc0MDkgNi4wMTEzNCAyMy4zODI1IDUuODM2MiAyMi45OTgyIDUuNzU0MzdDMjIuNjEzOSA1LjY3MjU1IDIyLjIxNTQgNS42ODY1NCAyMS44Mzc4IDUuNzk1MTJDMjEuNDYwMSA1LjkwMzcgMjEuMTE0OSA2LjEwMzU0IDIwLjgzMjYgNi4zNzcwNkwxNS4yNzA5IDMuNTkzMDVDMTUuMjg2OCAzLjQ5NzA1IDE1LjI5NjQgMy4zOTk0NiAxNS4yOTk2IDMuMzAxODZDMTUuMjk5NiAyLjY2NTM0IDE1LjA0NzEgMi4wNTQ4OSAxNC41OTc1IDEuNjA0OEMxNC4xNDc5IDEuMTU0NzEgMTMuNTM4MSAwLjkwMTg1NSAxMi45MDIzIDAuOTAxODU1QzEyLjI2NjUgMC45MDE4NTUgMTEuNjU2OCAxLjE1NDcxIDExLjIwNzIgMS42MDQ4QzEwLjc1NzYgMi4wNTQ4OSAxMC41MDUxIDIuNjY1MzQgMTAuNTA1MSAzLjMwMTg2QzEwLjUwODMgMy4zOTk0NiAxMC41MTc4IDMuNDk3MDUgMTAuNTMzOCAzLjU5MzA1TDQuOTcyMTEgNi4zNzcwNkM0LjY4OTc2IDYuMTAyNjcgNC4zNDQzMyA1LjkwMjAyIDMuOTY2MjYgNS43OTI4MUMzLjU4ODE4IDUuNjgzNiAzLjE4OTA4IDUuNjY5MTggMi44MDQxMiA1Ljc1MDgyQzIuNDE5MTYgNS44MzI0NSAyLjA2MDE4IDYuMDA3NjQgMS43NTg4IDYuMjYwOTNDMS40NTc0MyA2LjUxNDIzIDEuMjIyOTIgNi44Mzc4NiAxLjA3NTk1IDcuMjAzMjlDMC45Mjg5ODEgNy41Njg3MiAwLjg3NDA1OCA3Ljk2NDc0IDAuOTE2MDI4IDguMzU2NDRDMC45NTc5OTggOC43NDgxMyAxLjA5NTU3IDkuMTIzNDggMS4zMTY2MiA5LjQ0OTM5QzEuNTM3NjcgOS43NzUzIDEuODM1NCAxMC4wNDE4IDIuMTgzNTggMTAuMjI1M0MyLjUzMTc2IDEwLjQwODggMi45MTk3IDEwLjUwMzggMy4zMTMxOSAxMC41MDE5QzMuNTExMzYgMTAuNDk4NyAzLjcwNzk0IDEwLjQ3MTUgMy44OTgxMyAxMC40MjE5TDUuNTUwNjYgMTIuOTAxOUwzLjg5OTczIDE1LjM4MTlDMy43MDgxOCAxNS4zMzE0IDMuNTExMjIgMTUuMzA0NiAzLjMxMzE5IDE1LjMwMTlDMi45MjAyOSAxNS4zMDA1IDIuNTMzMDggMTUuMzk1OSAyLjE4NTY1IDE1LjU3OTZDMS44MzgyMiAxNS43NjMzIDEuNTQxMjIgMTYuMDI5NyAxLjMyMDc3IDE2LjM1NTNDMS4xMDAzMiAxNi42ODA5IDAuOTYzMTg5IDE3LjA1NTcgMC45MjE0NDIgMTcuNDQ2OEMwLjg3OTY5NSAxNy44MzggMC45MzQ2MTMgMTguMjMzNCAxLjA4MTM2IDE4LjU5ODJDMS4yMjgxMSAxOC45NjMxIDEuNDYyMTkgMTkuMjg2MyAxLjc2MzAxIDE5LjUzOTNDMi4wNjM4MiAxOS43OTI0IDIuNDIyMTUgMTkuOTY3NSAyLjgwNjQ2IDIwLjA0OTNDMy4xOTA3NyAyMC4xMzEyIDMuNTg5MjggMjAuMTE3MiAzLjk2NjkxIDIwLjAwODZDNC4zNDQ1NSAxOS45IDQuNjg5NzQgMTkuNzAwMiA0Ljk3MjExIDE5LjQyNjdMMTAuNTMzOCAyMi4yMTA3QzEwLjUxNzggMjIuMzA2NyAxMC41MDgzIDIyLjQwNDMgMTAuNTA1MSAyMi41MDE5QzEwLjUwNTEgMjMuMTM4NCAxMC43NTc2IDIzLjc0ODggMTEuMjA3MiAyNC4xOTg5QzExLjY1NjggMjQuNjQ5IDEyLjI2NjUgMjQuOTAxOSAxMi45MDIzIDI0LjkwMTlDMTMuNTM4MSAyNC45MDE5IDE0LjE0NzkgMjQuNjQ5IDE0LjU5NzUgMjQuMTk4OUMxNS4wNDcxIDIzLjc0ODggMTUuMjk5NiAyMy4xMzg0IDE1LjI5OTYgMjIuNTAxOUMxNS4yOTU4IDIyLjQwNDMgMTUuMjg2MiAyMi4zMDcxIDE1LjI3MDkgMjIuMjEwN0wyMC44MzI2IDE5LjQyNjdDMjEuMTE0OSAxOS43MDEgMjEuNDYwNCAxOS45MDE3IDIxLjgzODQgMjAuMDEwOUMyMi4yMTY1IDIwLjEyMDEgMjIuNjE1NiAyMC4xMzQ1IDIzLjAwMDYgMjAuMDUyOUMyMy4zODU1IDE5Ljk3MTMgMjMuNzQ0NSAxOS43OTYxIDI0LjA0NTkgMTkuNTQyOEMyNC4zNDczIDE5LjI4OTUgMjQuNTgxOCAxOC45NjU5IDI0LjcyODcgMTguNjAwNEMyNC44NzU3IDE4LjIzNSAyNC45MzA2IDE3LjgzOSAyNC44ODg3IDE3LjQ0NzNDMjQuODQ2NyAxNy4wNTU2IDI0LjcwOTEgMTYuNjgwMiAyNC40ODgxIDE2LjM1NDNDMjQuMjY3IDE2LjAyODQgMjMuOTY5MyAxNS43NjE5IDIzLjYyMTEgMTUuNTc4NEMyMy4yNzI5IDE1LjM5NDkgMjIuODg1IDE1LjI5OTkgMjIuNDkxNSAxNS4zMDE5Wk0xMi44ODg0IDIuNTAyNzRDMTMuMDE4NSAyLjUwMzI0IDEzLjE0NjUgMi41MzU1MiAxMy4yNjEzIDIuNTk2NzlDMTMuMzc2MSAyLjY1ODA1IDEzLjQ3NDIgMi43NDY0NCAxMy41NDcxIDIuODU0MjlDMTMuNjIgMi45NjIxNCAxMy42NjU1IDMuMDg2MTcgMTMuNjc5NyAzLjIxNTYzQzEzLjY5MzkgMy4zNDUwOSAxMy42NzYzIDMuNDc2MDUgMTMuNjI4NCAzLjU5NzE0TDEzLjYwNiAzLjY0MTk0QzEzLjU0MjkgMy43Nzk4MSAxMy40NDE2IDMuODk2NjQgMTMuMzE0MSAzLjk3ODU1QzEzLjE4NjYgNC4wNjA0NSAxMy4wMzgzIDQuMTAzOTkgMTIuODg2OCA0LjEwMzk5QzEyLjczNTMgNC4xMDM5OSAxMi41ODcgNC4wNjA0NSAxMi40NTk2IDMuOTc4NTVDMTIuMzMyMSAzLjg5NjY0IDEyLjIzMDcgMy43Nzk4MSAxMi4xNjc2IDMuNjQxOTRMMTIuMTQ1MyAzLjU5ODc0QzEyLjA5NyAzLjQ3NzMxIDEyLjA3OTEgMy4zNDU4OSAxMi4wOTMzIDMuMjE1OTZDMTIuMTA3NCAzLjA4NjAzIDEyLjE1MzIgMi45NjE1NiAxMi4yMjY1IDIuODUzNDJDMTIuMjk5OCAyLjc0NTI4IDEyLjM5ODUgMi42NTY3OCAxMi41MTM5IDIuNTk1NjRDMTIuNjI5MyAyLjUzNDUxIDEyLjc1NzkgMi41MDI2MSAxMi44ODg0IDIuNTAyNzRaTTIzLjI3NjcgOC4xMDI3NEMyMy4yNzY3IDguMzE0OTEgMjMuMTkyNSA4LjUxODQgMjMuMDQyNiA4LjY2ODQzQzIyLjg5MjggOC44MTg0NSAyMi42ODk1IDguOTAyNzQgMjIuNDc3NiA4LjkwMjc0QzIyLjI2NTYgOC45MDI3NCAyMi4wNjI0IDguODE4NDUgMjEuOTEyNSA4LjY2ODQzQzIxLjc2MjcgOC41MTg0IDIxLjY3ODUgOC4zMTQ5MSAyMS42Nzg1IDguMTAyNzRDMjEuNjc4NSA3Ljg5MDU3IDIxLjc2MjcgNy42ODcwOCAyMS45MTI1IDcuNTM3MDVDMjIuMDYyNCA3LjM4NzAyIDIyLjI2NTYgNy4zMDI3NCAyMi40Nzc2IDcuMzAyNzRDMjIuNjg5NSA3LjMwMjc0IDIyLjg5MjggNy4zODcwMiAyMy4wNDI2IDcuNTM3MDVDMjMuMTkyNSA3LjY4NzA4IDIzLjI3NjcgNy44OTA1NyAyMy4yNzY3IDguMTAyNzRaTTIuNTAwMTcgOC4xMDI3NEMyLjUwMyA3LjkyMzA1IDIuNTY2MTcgNy43NDk1NiAyLjY3OTUxIDcuNjEwMkMyLjc5Mjg1IDcuNDcwODUgMi45NDk3NiA3LjM3Mzc2IDMuMTI0OTUgNy4zMzQ1OEMzLjMwMDE0IDcuMjk1NCAzLjQ4MzQgNy4zMTY0MSAzLjY0NTIgNy4zOTQyM0MzLjgwNyA3LjQ3MjA1IDMuOTM3OTIgNy42MDIxNCA0LjAxNjg1IDcuNzYzNTRMNC4wMzkyMyA3LjgwODM0QzQuMDk4NzEgNy45NTMwNiA0LjExMzc2IDguMTEyMjUgNC4wODI0NCA4LjI2NTU4QzQuMDUxMTMgOC40MTg5IDMuOTc0ODggOC41NTk0MSAzLjg2MzQzIDguNjY5MTRDMy43NTE1OCA4Ljc4MDc2IDMuNjA5MjEgOC44NTY3IDMuNDU0MjggOC44ODczN0MzLjI5OTM2IDguOTE4MDUgMy4xMzg4MyA4LjkwMjA3IDIuOTkyOTcgOC44NDE0N0MyLjg0NzEgOC43ODA4NiAyLjcyMjQ1IDguNjc4MzUgMi42MzQ3NCA4LjU0Njg3QzIuNTQ3MDMgOC40MTUzOSAyLjUwMDIgOC4yNjA4NCAyLjUwMDE3IDguMTAyNzRaTTIuNTAwMTcgMTcuNzAyN0MyLjUwMDE3IDE3LjQ5MDYgMi41ODQzNiAxNy4yODcxIDIuNzM0MjIgMTcuMTM3MUMyLjg4NDA4IDE2Ljk4NyAzLjA4NzMzIDE2LjkwMjcgMy4yOTkyNyAxNi45MDI3QzMuNTExMiAxNi45MDI3IDMuNzE0NDUgMTYuOTg3IDMuODY0MzEgMTcuMTM3MUM0LjAxNDE3IDE3LjI4NzEgNC4wOTgzNiAxNy40OTA2IDQuMDk4MzYgMTcuNzAyN0M0LjA5ODM2IDE3LjkxNDkgNC4wMTQxNyAxOC4xMTg0IDMuODY0MzEgMTguMjY4NEMzLjcxNDQ1IDE4LjQxODUgMy41MTEyIDE4LjUwMjcgMy4yOTkyNyAxOC41MDI3QzMuMDg3MzMgMTguNTAyNyAyLjg4NDA4IDE4LjQxODUgMi43MzQyMiAxOC4yNjg0QzIuNTg0MzYgMTguMTE4NCAyLjUwMDE3IDE3LjkxNDkgMi41MDAxNyAxNy43MDI3Wk0xMi44ODg0IDIzLjMwMjdDMTIuNzU2NiAyMy4zMDI4IDEyLjYyNjggMjMuMjcwMiAxMi41MTA2IDIzLjIwNzhDMTIuMzk0NCAyMy4xNDU1IDEyLjI5NTUgMjMuMDU1MyAxMi4yMjI1IDIyLjk0NTRDMTIuMTQ5NiAyMi44MzU1IDEyLjEwNDkgMjIuNzA5MiAxMi4wOTI2IDIyLjU3NzhDMTIuMDgwMiAyMi40NDY0IDEyLjEwMDUgMjIuMzE0IDEyLjE1MTcgMjIuMTkyM0MxMi4yMTI4IDIyLjA1MTkgMTIuMzEyOSAyMS45MzE5IDEyLjQ0MDEgMjEuODQ2OEMxMi41NjczIDIxLjc2MTYgMTIuNzE2MyAyMS43MTQ4IDEyLjg2OTMgMjEuNzEyQzEzLjAyMjMgMjEuNzA5MSAxMy4xNzI5IDIxLjc1MDMgMTMuMzAzMiAyMS44MzA2QzEzLjQzMzYgMjEuOTExIDEzLjUzODEgMjIuMDI3MSAxMy42MDQ0IDIyLjE2NTFMMTMuNjI2OCAyMi4yMDk5QzEzLjY4NjggMjIuMzU0MSAxMy43MDI0IDIyLjUxMjkgMTMuNjcxNiAyMi42NjU5QzEzLjY0MDkgMjIuODE5IDEzLjU2NTEgMjIuOTU5NCAxMy40NTQyIDIzLjA2OTFDMTMuMzc5OCAyMy4xNDM0IDEzLjI5MTYgMjMuMjAyMiAxMy4xOTQ1IDIzLjI0MjNDMTMuMDk3NCAyMy4yODI0IDEyLjk5MzQgMjMuMzAyOSAxMi44ODg0IDIzLjMwMjdaTTIyLjQ3NzYgMTguNTAyN0MyMi4zMjY3IDE4LjUwMTYgMjIuMTc5MyAxOC40NTc3IDIyLjA1MjMgMTguMzc2MUMyMS45MjUzIDE4LjI5NDYgMjEuODI0IDE4LjE3ODcgMjEuNzYgMTguMDQxOUwyMS43Mzc2IDE3Ljk5NzFDMjEuNjk4MSAxNy45MDI5IDIxLjY3NzcgMTcuODAxNyAyMS42Nzc3IDE3LjY5OTVDMjEuNjc3NyAxNy41OTczIDIxLjY5ODEgMTcuNDk2MiAyMS43Mzc2IDE3LjQwMTlMMjEuNzUyIDE3LjM3NDdDMjEuODA5OCAxNy4yNDIyIDIxLjkwMjMgMTcuMTI3OSAyMi4wMTk5IDE3LjA0MzhDMjIuMTM3NCAxNi45NTk4IDIyLjI3NTUgMTYuOTA5MiAyMi40MTk0IDE2Ljg5NzRDMjIuNTYzMyAxNi44ODU3IDIyLjcwNzggMTYuOTEzMiAyMi44MzczIDE2Ljk3NzFDMjIuOTY2OSAxNy4wNDA5IDIzLjA3NjggMTcuMTM4OCAyMy4xNTUyIDE3LjI2MDFDMjMuMjMzNyAxNy4zODE1IDIzLjI3NzggMTcuNTIxOSAyMy4yODMgMTcuNjY2NEMyMy4yODgxIDE3LjgxMDkgMjMuMjU0IDE3Ljk1NDEgMjMuMTg0MyAxOC4wODA4QzIzLjExNDYgMTguMjA3NCAyMy4wMTIgMTguMzEyOCAyMi44ODcyIDE4LjM4NTdDMjIuNzYyNSAxOC40NTg2IDIyLjYyMDQgMTguNDk2MyAyMi40NzYgMTguNDk0N0wyMi40Nzc2IDE4LjUwMjdaTTE4LjAxODYgOS44MDgzNEwyMC4xNzE0IDguNzMxNTRDMjAuMTU1NCA4LjYzNTU0IDIwLjE0NTggOC41Mzc5NCAyMC4xNDI2IDguNDQwMzRDMjAuMTQ1OCA4LjM0Mjc0IDIwLjE1NTQgOC4yNDUxNCAyMC4xNzE0IDguMTQ5MTRMMTUuMjg0MSA1LjcwMjc0TDE4LjAxODYgOS44MDgzNFpNMTAuNjE1OCA1LjcwNDM0TDUuNzMwMTIgOC4xNDkxNEM1Ljc0NTQ1IDguMjQ1NTUgNS43NTUwNSA4LjM0Mjc5IDUuNzU4ODggOC40NDAzNEM1Ljc1NTY5IDguNTM3OTQgNS43NDYxIDguNjM1NTQgNS43MzAxMiA4LjczMTU0TDcuODgyODggOS44MDgzNEwxMC42MTU4IDUuNzA0MzRaTTUuNzMwMTIgMTcuNzQ5MUw3Ljg4Mjg4IDE2LjY3MjNMMTAuNjE3NCAyMC43Nzc5TDUuNzMwMTIgMTguMzMxNUM1Ljc0NjEgMTguMjM1NSA1Ljc1NTY5IDE4LjEzNzkgNS43NTg4OCAxOC4wNDAzQzUuNzU1MDUgMTcuOTQyOCA1Ljc0NTQ1IDE3Ljg0NTYgNS43MzAxMiAxNy43NDkxWk0xMi4yMTA4IDEzLjUzNjNMMTIuMjMzMiAxMy41Nzk1SDEyLjIzNjRDMTIuMyAxMy43MTc1IDEyLjQwMjEgMTMuODM0MSAxMi41MzAzIDEzLjkxNTVDMTIuNjU4NSAxMy45OTY4IDEyLjgwNzQgMTQuMDM5NSAxMi45NTkyIDE0LjAzODNDMTMuMTEwOSAxNC4wMzcxIDEzLjI1OTIgMTMuOTkyMSAxMy4zODYxIDEzLjkwODhDMTMuNTEzIDEzLjgyNTUgMTMuNjEzMiAxMy43MDcyIDEzLjY3NDcgMTMuNTY4M0wxMy42ODkxIDEzLjU0MTFDMTMuNzI5MiAxMy40NDQgMTMuNzQ5OCAxMy4zMzk4IDEzLjc0OTcgMTMuMjM0N0MxMy43NDk2IDEzLjEyOTYgMTMuNzI4OCAxMy4wMjU1IDEzLjY4ODUgMTIuOTI4NEMxMy42NDgyIDEyLjgzMTMgMTMuNTg5MiAxMi43NDMxIDEzLjUxNDggMTIuNjY4OEMxMy40NDA1IDEyLjU5NDYgMTMuMzUyMyAxMi41MzU3IDEzLjI1NTIgMTIuNDk1NUMxMy4xNTgxIDEyLjQ1NTQgMTMuMDU0MSAxMi40MzQ4IDEyLjk0OTEgMTIuNDM0OUMxMi44NDQxIDEyLjQzNSAxMi43NDAxIDEyLjQ1NTkgMTIuNjQzMSAxMi40OTYyQzEyLjU0NjEgMTIuNTM2NSAxMi40NTgxIDEyLjU5NTYgMTIuMzgzOSAxMi42N0MxMi4zMDk3IDEyLjc0NDQgMTIuMjUwOSAxMi44MzI4IDEyLjIxMDggMTIuOTI5OUMxMi4xNzA2IDEzLjAyNiAxMi4xNDk5IDEzLjEyOSAxMi4xNDk5IDEzLjIzMzFDMTIuMTQ5OSAxMy4zMzczIDEyLjE3MDYgMTMuNDQwMyAxMi4yMTA4IDEzLjUzNjNaTTE0LjYwOTcgMTQuOTcxNUMxNC4zNjM3IDE1LjIwNjYgMTQuMDcwNiAxNS4zODY2IDEzLjc0OTggMTUuNDk5NVYyMC4xOTg3TDE2LjU3ODYgMTUuOTU3MUwxNC42MDk3IDE0Ljk3MTVaTTE1LjM0OCAxMy4yNDAzQzE1LjM0NDggMTMuMzM5NSAxNS4zMzUzIDEzLjQzODcgMTUuMzE5MyAxMy41Mzc5TDE3LjQ3MzYgMTQuNjA4M0wxOC4zODQ2IDEzLjI0MDNMMTcuNDcyIDExLjg3MjNMMTUuMzE5MyAxMi45NDkxQzE1LjMzNDYgMTMuMDQ1NiAxNS4zNDQyIDEzLjE0MjggMTUuMzQ4IDEzLjI0MDNaTTEzLjc0OTggMTAuOTkzOUMxNC4wNzA2IDExLjEwNjkgMTQuMzYzNyAxMS4yODY5IDE0LjYwOTcgMTEuNTIxOUwxNi41Nzg2IDEwLjUyOTlMMTMuNzQ5OCA2LjI4MTk0VjEwLjk5MzlaTTEyLjE1MTcgMTAuOTg3NVY2LjI4MTk0TDkuMzIyODUgMTAuNTI5OUwxMS4yOTE4IDExLjUxNTVDMTEuNTM3OCAxMS4yODA1IDExLjgzMDkgMTEuMTAwNSAxMi4xNTE3IDEwLjk4NzVaTTEwLjU1MzUgMTMuMjQwM0MxMC41NTY3IDEzLjE0MjcgMTAuNTY2MiAxMy4wNDUxIDEwLjU4MjIgMTIuOTQ5MUw4LjQyNzg3IDExLjg3MjNMNy41MTY5IDEzLjI0MDNMOC40Mjk0NiAxNC42MDgzTDEwLjU4MjIgMTMuNTMxNUMxMC41NjYyIDEzLjQzNTUgMTAuNTU2NyAxMy4zMzc5IDEwLjU1MzUgMTMuMjQwM1pNMTIuMTUxNyAxNS40OTMxQzExLjgzMDkgMTUuMzgwMiAxMS41Mzc4IDE1LjIwMDIgMTEuMjkxOCAxNC45NjUxTDkuMzIyODUgMTUuOTUwN0wxMi4xNTE3IDIwLjE5ODdWMTUuNDkzMVpNMjAuMTcxNCAxNy43NDkxTDE4LjAxODYgMTYuNjcyM0wxNS4yODQxIDIwLjc3NzlMMjAuMTcxNCAxOC4zMzE1QzIwLjE1NTQgMTguMjM1NSAyMC4xNDU4IDE4LjEzNzkgMjAuMTQyNiAxOC4wNDAzQzIwLjE0NTggMTcuOTQyNyAyMC4xNTU0IDE3Ljg0NTEgMjAuMTcxNCAxNy43NDkxWk0xOC45MTIgMTUuMzI5OUwyMC4yMDQ5IDE1Ljk3NzlMMTkuMzQzNSAxNC42ODAzTDE4LjkxMiAxNS4zMjk5Wk0yMC4yMDQ5IDEwLjUwMjdMMTguOTEyIDExLjE1MDdMMTkuMzQzNSAxMS44MDAzTDIwLjIwNDkgMTAuNTAyN1pNNi45ODk0OSAxMS4xNDQzTDUuNjk2NTYgMTAuNTA0M0w2LjU1Nzk4IDExLjgwMDNMNi45ODk0OSAxMS4xNDQzWk01LjY5NjU2IDE1Ljk3NzlMNi45ODk0OSAxNS4zMjk5TDYuNTU3OTggMTQuNjgwM0w1LjY5NjU2IDE1Ljk3NzlaIiBmaWxsPSIjY2NjY2NjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD4KPC9zdmc+) [AI-Generated Summary]{style="padding-left:10px; font-weight: bold"}

<div>

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWVtcHR5IiBmaWxsPSJub25lIiBoZWlnaHQ9IjIwIiB2aWV3Ym94PSIwIDAgMjEgMjAiIHdpZHRoPSIyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuOTkyOCAyLjVDMTAuNzk3NSAyLjUgMTAuNjE3MiAyLjYwNDE1IDEwLjUxOTUgMi43NzMyMkw3LjkyOTgxIDcuMjU4NzZMNy40Mjk2OSA3Ljc1ODg4VjE0LjM1M0w5Ljg0NDUgMTVIMTUuNzIwOUwxNy4xMTE2IDkuODEwMTFMMTYuNDkyNiA3LjVIMTAuMzY1MkwxMS41MjA2IDMuMTg3ODhDMTEuNjEzNiAyLjg0MDgyIDExLjM1MjEgMi41IDEwLjk5MjggMi41Wk02LjE3OTY5IDE1VjcuNUw0LjMwNDY5IDcuNVYxNUw2LjE3OTY5IDE1Wk03LjA2ODg1IDYuMjVMOS40MzcwMSAyLjE0ODIyQzkuNzU3OTEgMS41OTI0IDEwLjM1MSAxLjI1IDEwLjk5MjggMS4yNUMxMi4xNzQgMS4yNSAxMy4wMzM3IDIuMzcwNDQgMTIuNzI4IDMuNTExNEwxMS45OTQyIDYuMjVIMTcuNDUxN0wxOC40MDU3IDkuODEwMTFMMTYuNjgwMSAxNi4yNUg5LjY3OTk0TDcuNDI5NjkgMTUuNjQ3MVYxNi4yNUgzLjA1NDY5VjYuMjUwMDFMNy4wNjg4NSA2LjI1WiIgZmlsbD0iIzVFNUU1RSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+Cjwvc3ZnPg==){.svg-empty} ![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWZpbGwiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHZpZXdib3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNS42MjUwMiA2LjI1TDIuNSA2LjI1MDAxVjE2LjI1SDUuNjI1MDNMNS42MjUwMiA2LjI1WiIgZmlsbD0iIzVFNUU1RSI+PC9wYXRoPgo8cGF0aCBkPSJNNi44NzUwMiAxNS42NDcxTDkuMTI1MjUgMTYuMjVIMTYuMTI1NEwxNy44NTEgOS44MTAxMUwxNi44OTcgNi4yNUgxMS40Mzk1TDEyLjE3MzMgMy41MTE0QzEyLjQ3OSAyLjM3MDQ0IDExLjYxOTMgMS4yNSAxMC40MzgxIDEuMjVDOS43OTYyOCAxLjI1IDkuMjAzMjIgMS41OTI0IDguODgyMzIgMi4xNDgyMkw2Ljg3NTAyIDUuNjI0OTZMNi44NzUwMiAxNS42NDcxWiIgZmlsbD0iIzVFNUU1RSI+PC9wYXRoPgo8L3N2Zz4=){.svg-fill}

</div>

[Like]{.feedback-thumbsuptext}

<div>

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWVtcHR5IiBmaWxsPSJub25lIiBoZWlnaHQ9IjIwIiB2aWV3Ym94PSIwIDAgMjEgMjAiIHdpZHRoPSIyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMjM1NyAzLjc1SDE3LjYxMDdWMTMuNzVMMTMuNTk2NiAxMy43NUwxMS4yMjg0IDE3Ljg1MThDMTAuOTA3NSAxOC40MDc2IDEwLjMxNDUgMTguNzUgOS42NzI2NiAxOC43NUM4LjQ5MTQ0IDE4Ljc1IDcuNjMxNyAxNy42Mjk2IDcuOTM3NDIgMTYuNDg4Nkw4LjY3MTIzIDEzLjc1SDMuMjEzNjlMMi4yNTk3NyAxMC4xODk5TDMuOTg1MzMgMy43NUgxMC45ODU1TDEzLjIzNTcgNC4zNTI5NlYzLjc1Wk0xNC40ODU3IDEyLjVMMTYuMzYwNyAxMi41VjVMMTQuNDg1NyA1VjEyLjVaTTEzLjIzNTcgNS42NDcwNVYxMi4yNDExTDEyLjczNTYgMTIuNzQxMkwxMC4xNDU5IDE3LjIyNjhDMTAuMDQ4MyAxNy4zOTU5IDkuODY3ODggMTcuNSA5LjY3MjY2IDE3LjVDOS4zMTMzNSAxNy41IDkuMDUxODMgMTcuMTU5MiA5LjE0NDgzIDE2LjgxMjFMMTAuMzAwMyAxMi41SDQuMTcyODVMMy41NTM4NiAxMC4xODk5TDQuOTQ0NDkgNUgxMC44MjA5TDEzLjIzNTcgNS42NDcwNVoiIGZpbGw9IiM1RTVFNUUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPgo8L3N2Zz4=){.svg-empty} ![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ic3ZnLWZpbGwiIGZpbGw9Im5vbmUiIGhlaWdodD0iMjAiIHZpZXdib3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTQuMzc0NCAxMy43NUwxNy40OTk0IDEzLjc1VjMuNzVIMTQuMzc0NEwxNC4zNzQ0IDEzLjc1WiIgZmlsbD0iIzVFNUU1RSI+PC9wYXRoPgo8cGF0aCBkPSJNMTMuMTI0NCA0LjM1Mjk1TDEwLjg3NDIgMy43NUgzLjg3NEwyLjE0ODQ0IDEwLjE4OTlMMy4xMDIzNyAxMy43NUg4LjU1OTlMNy44MjYwOSAxNi40ODg2QzcuNTIwMzcgMTcuNjI5NiA4LjM4MDExIDE4Ljc1IDkuNTYxMzMgMTguNzVDMTAuMjAzMSAxOC43NSAxMC43OTYyIDE4LjQwNzYgMTEuMTE3MSAxNy44NTE4TDEzLjEyNDQgMTQuMzc1TDEzLjEyNDQgNC4zNTI5NVoiIGZpbGw9IiM1RTVFNUUiPjwvcGF0aD4KPC9zdmc+){.svg-fill}

</div>

[Dislike]{.feedback-thumbsdowntext}

![](data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjkiIHZpZXdib3g9IjAgMCAxNCA5IiB3aWR0aD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMi41NzQyIDJMNy40NDkyMyA3TDIuMzI0MjUgMiIgc3Ryb2tlPSIjMWExYTFhIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KPC9zdmc+)

-   NVIDIA NemoClaw is an open-source stack that enables secure, on-premises deployment of autonomous AI assistants using NVIDIA Nemotron 3 Super models, orchestrated by NVIDIA OpenShell and OpenClaw for sandboxed execution and tool integration.
-   The tutorial guides users through deploying NemoClaw on NVIDIA DGX Spark, covering hardware prerequisites, Docker and Ollama setup, model download, sandbox configuration, and integration with Telegram for remote access.
-   Key security features include network and filesystem isolation managed by OpenShell, real-time policy approval for external access, and full local inference to ensure that no data leaves the device during agent operation.

AI-generated content may summarize information incompletely. Verify important information. [Learn more](https://www.nvidia.com/en-us/agreements/trustworthy-ai/terms/){wpel-link="internal" rel="noopener noreferrer follow" target="_self"}

Agents are evolving from question-and-answer systems into long-running autonomous assistants that read files, call APIs, and drive multi-step workflows. However, deploying an agent to execute code and use tools without proper isolation raises real risks---especially when using third-party cloud infrastructure due to data privacy and control.

NVIDIA NemoClaw is an open-source reference stack that orchestrates [NVIDIA OpenShell](https://docs.nvidia.com/openshell/latest/get-started){wpel-link="internal" rel="follow" target="_self"} to run [OpenClaw](https://docs.nvidia.com/nemoclaw/){wpel-link="internal" rel="follow" target="_self"}, a self-hosted gateway that connects messaging platforms to AI coding agents powered by open models like NVIDIA Nemotron. NemoClaw adds guided onboarding, lifecycle management, image hardening, and a versioned blueprint, providing a complete pipeline from model inference to more secure, interactive agent deployment.

This tutorial walks through a NemoClaw deployment on NVIDIA DGX Spark---from configuring the runtime environment and serving the model locally, to installing the NemoClaw stack and connecting it to Telegram for remote access. You'll build a local, sandboxed AI assistant that runs on your hardware and is accessible from any Telegram client.

<figure class="wp-block-embed aligncenter is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
<div class="wp-block-embed__wrapper">
<span class="embed-youtube" style="text-align:center; display: block;"></span>
</div>
<figcaption><em>Video 1. A walkthrough on how to set up your autonomous long-running agent</em></figcaption>
</figure>

## Quick links to the model and code[](#quick_links_to_the_model_and_code){.heading-anchor-link aria-label="Scroll to Quick links to the model and code section"} {#quick_links_to_the_model_and_code .wp-block-heading}

Access the following resources for the tutorial:

🧠 Software and models:

-   [**NemoClaw with NVIDIA Nemotron 3 Super and Telegram on DGX Spark**](https://build.nvidia.com/spark/nemoclaw/instructions){wpel-link="internal" rel="follow" target="_self"}: An end-to-end guide for setting up NemoClaw with local inference.
-   [**NVIDIA Nemotron 3 Super 120B on NVIDIA Build**](https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b){wpel-link="internal" rel="follow" target="_self"}: The model used for the tutorial.

🛠️ Code and documentation:

-   [**NVIDIA NemoClaw documentation**](https://docs.nvidia.com/nemoclaw/){wpel-link="internal" rel="follow" target="_self"}: Complete reference for configuration, policies, and advanced deployment.
-   [**NVIDIA NemoClaw on GitHub**](https://github.com/NVIDIA/NemoClaw){wpel-link="external" rel="follow" target="_blank"}: Source code and community contributions.
-   [**NVIDIA DGX Spark**](https://www.nvidia.com/en-us/products/workstations/dgx-spark/){wpel-link="internal" rel="follow" target="_self"}: Hardware specifications and developer resources.

## Prerequisites[](#prerequisites){.heading-anchor-link aria-label="Scroll to Prerequisites section"} {#prerequisites .wp-block-heading}

For full setup instructions, visit the [DGX Spark Playbook for NemoClaw](https://build.nvidia.com/spark/nemoclaw/overview){wpel-link="internal" rel="follow" target="_self"}, or [get started with no hardware needed](https://build.nvidia.com/nemoclaw){wpel-link="internal" rel="follow" target="_self"}.

*If you intend to use another device, NemoClaw is tested and validated on devices listed under alternative deployments in the* [*documentation. Check*](https://docs.nvidia.com/nemoclaw/latest/inference/inference-options.html){wpel-link="internal" rel="follow" target="_self"} *for API/VLLM capability.*

Before beginning setup, ensure the following requirements are met:

-   **Hardware**: DGX Spark (GB10) system running Ubuntu 24.04 LTS with the latest NVIDIA drivers.
-   **Docker**: Version 28.x or higher, with the NVIDIA container runtime configured (covered in the next section).
-   **Ollama**: Installed as the local model-serving engine.
-   **Telegram bot token**: Created through Telegram's \@BotFather (detailed in the Telegram integration section).

**Estimated time:** Approximately 20--30 minutes of active setup, plus 15--30 minutes for the initial model download (\~87 GB), depending on network bandwidth.

The following commands verify system readiness:

``` {.brush: .bash; .title: .; .notranslate title=""}
head -n 2 /etc/os-release    # Expected: Ubuntu 24.04
nvidia-smi                     # Expected: NVIDIA GB10 GPU
docker info --format '{{.ServerVersion}}'  # Expected: 28.x+
```

### The NemoClaw components[](#the_nemoclaw_components){.heading-anchor-link aria-label="Scroll to The NemoClaw components section"} {#the_nemoclaw_components .wp-block-heading}

Before building a sandboxed assistant, it's important to understand the software used in this environment.

<figure class="wp-block-table aligncenter">
<table>
<tbody>
<tr class="odd">
<td><strong>Component</strong></td>
<td><strong>What it is</strong></td>
<td><strong>What it does</strong></td>
<td><strong>When to use It</strong></td>
</tr>
<tr class="even">
<td><a href="https://github.com/NVIDIA/NemoClaw" data-wpel-link="external" rel="follow" target="_blank">NVIDIA NemoClaw</a></td>
<td>Reference stack with Orchestration layer and Installer</td>
<td>Installs OpenClaw and OpenShell with policies and inference.</td>
<td>Fastest way to create an always-on assistant in a more secure sandbox.</td>
</tr>
<tr class="odd">
<td><a href="https://github.com/NVIDIA/OpenShell" data-wpel-link="external" rel="follow" target="_blank">NVIDIA OpenShell</a></td>
<td>Security runtime and gateway</td>
<td>Enforces safety boundaries (sandboxing), manages credentials, and proxies network/API calls.</td>
<td>When you need a “walled garden” to run agents without exposing sensitive information or enabling unrestricted web access.</td>
</tr>
<tr class="even">
<td><a href="https://github.com/OpenClaw/OpenClaw" data-wpel-link="external" rel="follow" target="_blank">OpenClaw</a></td>
<td>Multi-channel agent framework</td>
<td>Lives inside the sandbox. Manages chat platforms (Slack/Discord), memory, and tool integration.</td>
<td>When you need to create a long-lived agent connected to messaging apps and persistent memory.</td>
</tr>
<tr class="odd">
<td><a href="https://build.nvidia.com/nvidia/nemotron-3-super-120b-a12b" data-wpel-link="internal" rel="follow" target="_self">NVIDIA Nemotron 3 Super 120B</a></td>
<td>Agent-optimized LLM (120B Parameters)</td>
<td>Provides the “brain” with high instruction-following and multi-step reasoning capabilities.</td>
<td>For production-grade assistants who need to use tools and follow complex workflows.</td>
</tr>
<tr class="even">
<td><a href="https://docs.nvidia.com/nim/large-language-models/latest/get-started/index.html" data-wpel-link="internal" rel="follow" target="_self">NVIDIA NIM</a> / <a href="https://ollama.com/" data-wpel-link="external" rel="follow" target="_blank">Ollama</a></td>
<td>Inference deployments</td>
<td>Runs the Nemotron model locally </td>
<td>If you have a GPU and want to run the LLM locally</td>
</tr>
</tbody>
</table>
<figcaption><em>Table 1. Architectural components of the NVIDIA NemoClaw stack</em></figcaption>
</figure>

**Security note:** While OpenShell provides robust isolation, remember that no sandbox offers complete protection against advanced prompt injection. Always deploy on isolated systems when testing new tools.

Let's get started.

## Configure the runtimes[](#configure_the_runtimes){.heading-anchor-link aria-label="Scroll to Configure the runtimes section"} {#configure_the_runtimes .wp-block-heading}

DGX Spark requires several Docker configuration steps to support GPU-accelerated containers with the appropriate isolation settings. Start by registering the NVIDIA container runtime with Docker:

``` {.brush: .bash; .title: .; .notranslate title=""}
sudo nvidia-ctk runtime configure --runtime=docker
```

Next, set the cgroup namespace mode to `host`. This configuration is required for DGX Spark to work correctly with containerized workloads:

``` {.brush: .bash; .title: .; .notranslate title=""}
sudo python3 -c "
import json, os
path = '/etc/docker/daemon.json'
d = json.load(open(path)) if os.path.exists(path) else {}
d['default-cgroupns-mode'] = 'host'
json.dump(d, open(path, 'w'), indent=2)
"

Restart Docker to apply the changes and verify that the NVIDIA runtime is functioning:

sudo systemctl restart docker
docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
```

The output should display the GB10 GPU. To avoid requiring `sudo` for subsequent Docker commands, add the current user to the Docker group:

``` {.brush: .bash; .title: .; .notranslate title=""}
sudo usermod -aG docker $USER
newgrp docker
```

## Install Ollama[](#install_ollama){.heading-anchor-link aria-label="Scroll to Install Ollama section"} {#install_ollama .wp-block-heading}

Ollama is a lightweight model-serving engine for running large language models locally. Install it using the official installer:

``` {.brush: .bash; .title: .; .notranslate title=""}
  curl -fsSL https://ollama.com/install.sh | sh
```

By default, Ollama listens only on localhost. Because the NemoClaw agent runs inside a sandbox, with its own network namespace, it must reach Ollama across network boundaries. Configure Ollama to listen on all interfaces:

``` {.brush: .bash; .title: .; .notranslate title=""}
  sudo mkdir -p /etc/systemd/system/ollama.service.d                                                                                                                                                                                            
  printf '[Service]\nEnvironment="OLLAMA_HOST=0.0.0.0"\n' | \     
    sudo tee /etc/systemd/system/ollama.service.d/override.conf
  sudo systemctl daemon-reload                                                                                                                                                                                                                  
  sudo systemctl restart ollama
```

Verify that Ollama is running and reachable on all interfaces:

``` {.brush: .bash; .title: .; .notranslate title=""}
  curl http://0.0.0.0:11434
```

**Important:** Only start Ollama through systemd. A manually started Ollama process doesn't pick up the OLLAMA_HOST=0.0.0.0 override, and the NemoClaw sandbox won't reach the inference server.

``` {.brush: .bash; .title: .; .notranslate title=""}
sudo systemctl restart ollama
```

Next, pull the Nemotron 3 Super 120B model. The download is about 87 GB:

``` {.brush: .bash; .title: .; .notranslate title=""}
ollama pull nemotron-3-super:120b
```

Once the download completes, pre-load the model weights into GPU memory to avoid cold-start latency on the first agent interaction:

``` {.brush: .bash; .title: .; .notranslate title=""}
ollama run nemotron-3-super:120b
```

After the model loads and presents a prompt, exit the session with `/bye`. The weights will remain cached in memory. Confirm that the model is available:

``` {.brush: .bash; .title: .; .notranslate title=""}
ollama list
# You should see something like 
NAME                     ID              SIZE     MODIFIED                                                                                                                                                                                        nemotron-3-super:120b    95acc78b3ffd    86 GB    2 weeks ago    
```

## Install NemoClaw[](#install_nemoclaw){.heading-anchor-link aria-label="Scroll to Install NemoClaw section"} {#install_nemoclaw .wp-block-heading}

With the foundation in place, install NemoClaw with a single command:

``` {.brush: .bash; .title: .; .notranslate title=""}
curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash
```

The installer provides Node.js dependencies, the OpenShell runtime, and the NemoClaw CLI, then launches an onboarding wizard. The wizard prompts for the following configuration choices:

1.  **Sandbox name**: Specify a lowercase alphanumeric name with hyphens (for example, `my-assistant`). This name is used in all subsequent commands.
2.  **Inference provider**: Select **Local Ollama** (option 7) to route inference to the local Ollama instance.
3.  **Model**: Select **nemotron-3-super:120b** (option 1).
4.  **Policy presets:** Press Y if you accept the default policies. These presets configure filesystem and network restrictions for the sandbox.
5.  **Telegram integration:** You can optionally configure your Telegram bot during step 5 of the onboarding wizard.

At the end of the onboarding process, the installer displays a tokenized Web UI URL in the format `http://127.0.0.1:18789/#token=<long-token-here>`. Record this URL, as it is required to access the web dashboard in the future and won't be shown again.

If the `nemoclaw` command isn't recognized after installation, reload the shell environment to enable it for all future sessions:

``` {.brush: .bash; .title: .; .notranslate title=""}
source ~/.bashrc
```

### Verify the setup[](#verify_the_setup){.heading-anchor-link aria-label="Scroll to Verify the setup section"} {#verify_the_setup .wp-block-heading}

Connect to the sandbox and verify that the agent can reach the inference backend:

``` {.brush: .bash; .title: .; .notranslate title=""}
nemoclaw my-assistant connect
```

This command returns model information confirming that the sandboxed environment can communicate with Ollama. Next, send a test message through the agent:

``` {.brush: .bash; .title: .; .notranslate title=""}
openclaw agent --agent main --local -m "hello" --session-id test
```

If the configuration is correct, NVIDIA Nemotron 3 Super generates a response. Note that inference with the 120B model typically takes 30--90 seconds per response---this is expected for a model of this size running local inference.

The interactive terminal UI provides a more conversational testing experience:

``` {.brush: .bash; .title: .; .notranslate title=""}
openclaw tui
```

Use **Ctrl+C** to exit the terminal UI when finished. 

### Accessing the Web UI[](#accessing_the_web_ui){.heading-anchor-link aria-label="Scroll to Accessing the Web UI section"} {#accessing_the_web_ui .wp-block-heading}

To access the web dashboard locally, exit the sandbox and open the tokenized URL recorded during onboarding:

``` {.brush: .bash; .title: .; .notranslate title=""}
exit
```

Then navigate to http://127.0.0.1:18789/#token=\<long-token-here\> in a browser.

**Remote access from another machine.** If you're accessing DGX Spark over the network rather than directly, additional configuration is required. First, determine the Spark's IP address:

``` {.brush: .bash; .title: .; .notranslate title=""}
hostname -I | awk '{print $1}'
```

Start port forwarding through the Spark's terminal session:

``` {.brush: .bash; .title: .; .notranslate title=""}
openshell forward start 18789 my-assistant --background
```

From your remote machine, create an SSH tunnel to the Spark:

``` {.brush: .bash; .title: .; .notranslate title=""}
ssh -L 18789:127.0.0.1:18789 <your-user>@<your-spark-ip>
```

With the tunnel active, open http://127.0.0.1:18789/#token=\<long-token-here\> in a browser on the remote machine. 

**Note**: Only use `127.0.0.1`. A `localhost` may result in an "origin not allowed" error.

## Connect to Telegram[](#connect_to_telegram){.heading-anchor-link aria-label="Scroll to Connect to Telegram section"} {#connect_to_telegram .wp-block-heading}

Telegram integration extends the assistant beyond the local terminal, making it accessible from any device with a Telegram client.

### Create the Telegram bot[](#create_the_telegram_bot){.heading-anchor-link aria-label="Scroll to Create the Telegram bot section"} {#create_the_telegram_bot .wp-block-heading}

Open Telegram and search for \@BotFather to manage your bots. Start a conversation and use the `/newbot` command. \@BotFather guides you through naming the bot and provides an API token upon completion. Save this token for the configuration step below.

**Note:** If you configured Telegram during the NemoClaw onboarding wizard, Telegram is already running inside the sandbox.

If you didn't configure Telegram during onboarding, rerun the onboarding wizard with the token set. This rebuilds the sandbox with Telegram baked in. The bot token is registered with the OpenShell gateway and doesn't enter the sandbox directly. 

``` {.brush: .bash; .title: .; .notranslate title=""}
export TELEGRAM_BOT_TOKEN=<your-bot-token>
nemoclaw onboard      
```

### Verify the integration[](#verify_the_integration){.heading-anchor-link aria-label="Scroll to Verify the integration section"} {#verify_the_integration .wp-block-heading}

Open Telegram, locate the bot, and send a message. On first contact, OpenClaw requires pairing. The bot will respond with a pairing code:

``` {.brush: .plain; .title: .; .notranslate title=""}
OpenClaw: access not configured. 
Your Telegram user id: <your-id> 
Pairing code: <CODE>
```

Approve the pairing from inside the sandbox: 

``` {.brush: .bash; .title: .; .notranslate title=""}
nemoclaw my-assistant connect  
openclaw pairing approve telegram <CODE>
exit
```

Send another message in Telegram. After the inference latency window, the bot should return a response generated by NVIDIA Nemotron 3 Super. 

At this point, the deployment is complete. An AI assistant is running entirely on NVIDIA DGX Spark, sandboxed by OpenShell, powered by a 120B open model, and accessible remotely through Telegram. All inference occurs locally no data leaves the device, and there are no external service dependencies at runtime.

## What commands can I reference for deployment?[](#what_commands_can_i_reference_for_deployment){.heading-anchor-link aria-label="Scroll to What commands can I reference for deployment? section"} {#what_commands_can_i_reference_for_deployment .wp-block-heading}

The following commands are useful for ongoing management of the NemoClaw deployment.

<figure class="wp-block-table">
<table>
<thead>
<tr class="header">
<th><strong>Command</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><code>nemoclaw my-assistant connect</code></td>
<td>Open a shell session inside the sandbox.</td>
</tr>
<tr class="even">
<td><code>nemoclaw my-assistant status</code></td>
<td>Display sandbox status.</td>
</tr>
<tr class="odd">
<td><code>nemoclaw my-assistant logs --follow</code></td>
<td>Stream live sandbox logs.</td>
</tr>
<tr class="even">
<td><code>nemoclaw list</code></td>
<td>List all configured sandboxes.</td>
</tr>
<tr class="odd">
<td><code>nemoclaw start / nemoclaw stop</code></td>
<td>Start or stop auxiliary services (Telegram bridge, etc.).</td>
</tr>
<tr class="even">
<td><code>openshell forward start 18789 my-assistant --background</code></td>
<td>Enable port forwarding for remote Web UI access.</td>
</tr>
</tbody>
</table>
<figcaption><em>Table 2. Commands for orchestrating, monitoring, and accessing NemoClaw agent environments</em></figcaption>
</figure>

## Commands for a clean uninstall[](#commands_for_a_clean_uninstall){.heading-anchor-link aria-label="Scroll to Commands for a clean uninstall section"} {#commands_for_a_clean_uninstall .wp-block-heading}

For cleanup and uninstallation, NemoClaw provides an uninstaller at `~/.nemoclaw/source/uninstall.sh`. Refer to the [instructions page](https://build.nvidia.com/spark/nemoclaw/instructions){wpel-link="internal" rel="follow" target="_self"} for details on cleanup flags and troubleshooting common issues.

## Extending agent access with policy approvals [](#extending_agent_access_with_policy_approvals%C2%A0){.heading-anchor-link aria-label="Scroll to Extending agent access with policy approvals  section"} {#extending_agent_access_with_policy_approvals  .wp-block-heading}

By default, the sandbox restricts the agent to a limited set of network endpoints. When you ask the agent to do something that requires an external service.

For example, fetching a webpage or calling a third-party API, OpenShell blocks the request and the agent reports that network access isn't available.

To see this in action, open the OpenShell TUI in one terminal on the host:

``` {.brush: .bash; .title: .; .notranslate title=""}
openshell term
```

In a second terminal, connect to the sandbox and start a conversation: 

``` {.brush: .bash; .title: .; .notranslate title=""}
openclaw tui
```

Ask the agent to do something like "use curl to fetch [https://httpbin.org/get](https://httpbin.org/get){wpel-link="external" rel="follow" target="_blank"}".

The agent attempts the request, OpenShell blocks it, and the TUI displays the blocked connection with the destination host, port, and the binary that initiated it. 

From the TUI, you can approve the request for the current session, or deny it to keep the endpoint blocked.

When you want to permanently add an endpoint, use a policy preset from the host: 

``` {.brush: .bash; .title: .; .notranslate title=""}
nemoclaw my-assistant policy-add
```

This approval flow gives you real-time visibility and control over what the agent can access without modifying the base policy or restarting the sandbox. 

## Get started[](#get_started){.heading-anchor-link aria-label="Scroll to Get started section"} {#get_started .wp-block-heading}

Start building with [NVIDIA NemoClaw](https://www.nvidia.com/en-us/ai/nemoclaw/){wpel-link="internal" rel="follow" target="_self"} today.

*Stay up to date on* [*NVIDIA NemoClaw*](https://www.nvidia.com/en-us/ai/nemoclaw/?ncid=pa-srch-goog-984177&_bt=804567865336&_bk=nvidia%20nemoclaw&_bm=p&_bn=g&_bg=197993095849&gad_source=1&gad_campaignid=23744621431&gbraid=0AAAAAD4XAoH_kQc1-Boid2Ek_6Jpq6XvV&gclid=CjwKCAjw7vzOBhBxEiwAc7WNrw1rLYyIfYDjwHUf-ByeuSf4RlErtGFRa-kdJbYhwHu_AEezW5SwFRoC-2oQAvD_BwE){wpel-link="internal" rel="follow" target="_self"} *by subscribing to* [*NVIDIA news*](https://www.nvidia.com/en-us/ai-data-science/generative-ai/news/){wpel-link="internal" rel="follow" target="_self"} *and following NVIDIA AI on* [*LinkedIn*](https://www.linkedin.com/showcase/nvidia-ai/posts/?feedView=all){wpel-link="external" rel="follow" target="_blank"}*,* [*X*](https://x.com/NVIDIAAIDev){wpel-link="external" rel="follow" target="_blank"}*,* [*Discord*](https://discord.com/channels/1019361803752456192/1482072289511211200){wpel-link="external" rel="follow" target="_blank"}*, and* [*YouTube*](https://www.youtube.com/@NVIDIADeveloper){wpel-link="external" rel="follow" target="_blank"}*.*

*Visit the* [*NemoClaw page*](https://www.nvidia.com/en-us/ai/nemoclaw/?ncid=pa-srch-goog-984177&_bt=804567865336&_bk=nvidia%20nemoclaw&_bm=p&_bn=g&_bg=197993095849&gad_source=1&gad_campaignid=23744621431&gbraid=0AAAAAD4XAoH_kQc1-Boid2Ek_6Jpq6XvV&gclid=CjwKCAjw7vzOBhBxEiwAc7WNrw1rLYyIfYDjwHUf-ByeuSf4RlErtGFRa-kdJbYhwHu_AEezW5SwFRoC-2oQAvD_BwE){wpel-link="internal" rel="follow" target="_self"} *for resources to get started. Explore NemoClaw on* [*GitHub*](https://github.com/NVIDIA/NemoClaw){wpel-link="external" rel="follow" target="_blank"} *and* [*Playbook*](https://build.nvidia.com/spark/nemoclaw){wpel-link="internal" rel="follow" target="_self"} *available on* [*build.nvidia.com*](https://build.nvidia.com/nemoclaw){wpel-link="internal" rel="follow" target="_self"}*.*

*Engage with* [*Nemotron livestreams*](https://www.youtube.com/playlist?list=PL5B692fm6--vEL0FwctKghCpyEnBGAQJA){wpel-link="external" rel="follow" target="_blank"}*,* [*tutorials*](https://www.youtube.com/playlist?list=PL5B692fm6--vdRKB14FImVi7MTJ77zjn4){wpel-link="external" rel="follow" target="_blank"}*, and the developer community on the* [*NVIDIA forum*](https://forums.developer.nvidia.com/c/ai-data-science/nvidia-nemotron/669){wpel-link="internal" rel="follow" target="_self"} *and* [*Discord.*](https://discord.com/channels/1019361803752456192/1482072289511211200){wpel-link="external" rel="follow" target="_blank"}

[ Discuss (0)](#entry-content-comments)

[]{.count-box .wp_ulike_counter_up ulike-counter-value="+21"}

Like

## Tags {#tags .h--smaller .txt-clr--blck}

[Agentic AI / Generative AI](https://developer.nvidia.com/blog/category/generative-ai/){wpel-link="internal" rel="follow" target="_self"} \| [Developer Tools & Techniques](https://developer.nvidia.com/blog/category/development/){wpel-link="internal" rel="follow" target="_self"} \| [Trustworthy AI / Cybersecurity](https://developer.nvidia.com/blog/category/cybersecurity/){wpel-link="internal" rel="follow" target="_self"} \| [General](https://developer.nvidia.com/blog/recent-posts/?industry=General){wpel-link="internal" rel="follow" target="_self"} \| [Nemotron](https://developer.nvidia.com/blog/recent-posts/?products=Nemotron){wpel-link="internal" rel="follow" target="_self"} \| [Intermediate Technical](https://developer.nvidia.com/blog/recent-posts/?learning_levels=Intermediate+Technical){wpel-link="internal" rel="follow" target="_self"} \| [Tutorial](https://developer.nvidia.com/blog/recent-posts/?content_types=Tutorial){wpel-link="internal" rel="follow" target="_self"} \| [Build AI Agents](https://developer.nvidia.com/blog/tag/build-ai-agent/){wpel-link="internal" rel="follow" target="_self"} \| [claws](https://developer.nvidia.com/blog/tag/claws/){wpel-link="internal" rel="follow" target="_self"} \| [DGX Spark](https://developer.nvidia.com/blog/tag/dgx-spark/){wpel-link="internal" rel="follow" target="_self"} \| [featured](https://developer.nvidia.com/blog/tag/featured/){wpel-link="internal" rel="follow" target="_self"} \| [LLMs](https://developer.nvidia.com/blog/tag/large-language-models/){wpel-link="internal" rel="follow" target="_self"} \| [NemoClaw](https://developer.nvidia.com/blog/tag/nemoclaw/){wpel-link="internal" rel="follow" target="_self"} \| [OpenShell](https://developer.nvidia.com/blog/tag/openshell/){wpel-link="internal" rel="follow" target="_self"}

## About the Authors {#about-the-authors .h--smaller .txt-clr--blck}

![Avatar photo](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20131%20131%22%3E%3C/svg%3E){.lazyload .avatar .avatar-131 .photo data-src="https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/unnamed-4-131x131.webp" data-srcset="https://developer-blogs.nvidia.com/wp-content/uploads/2026/04/unnamed-4-262x262.webp 2x" decoding="async" height="131" width="131"}

**About Patrick Moorhead**\
Patrick Moorhead is a member of the technical marketing engineering team at NVIDIA. His interests include building AI agents and machine learning. He is currently studying data science at Baylor University.

[View all posts by Patrick Moorhead![](data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE2IiB2aWV3Ym94PSIwIDAgMzIwIDYxMiIgd2lkdGg9IjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zMDUgMjM5YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDExMyA0NjVjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwcy05LjQtMjQuNiAwLTMzLjlsMTc1LTE3NUw3OSA4MWMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlzMjQuNi05LjQgMzMuOSAwTDMwNSAyMzl6Ij48L3BhdGg+PC9zdmc+)](https://developer.nvidia.com/blog/author/pmoorhead/){wpel-link="internal" rel="author follow" target="_self"}

![Edward Li](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20131%20131%22%3E%3C/svg%3E){.lazyload .avatar .avatar-131 .photo data-src="https://developer-blogs.nvidia.com/wp-content/uploads/2024/01/cropped-edward-li-131x131.jpg" data-srcset="https://developer-blogs.nvidia.com/wp-content/uploads/2024/01/cropped-edward-li-262x262.jpg 2x" decoding="async" height="131" width="131"}

**About Edward Li**\
Edward Li is a technical marketing engineer with NVIDIA Enterprise Computing. He is a recent graduate of the University of Pennsylvania School of Engineering and Applied Science. He holds a bachelor's degree and a master's degree in Computer Science with a concentration in Data Science. At NVIDIA, Edward is passionate about data science, AI, and ML and is working on solutions to bring generative AI to enterprises.

[View all posts by Edward Li![](data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE2IiB2aWV3Ym94PSIwIDAgMzIwIDYxMiIgd2lkdGg9IjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zMDUgMjM5YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDExMyA0NjVjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwcy05LjQtMjQuNiAwLTMzLjlsMTc1LTE3NUw3OSA4MWMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlzMjQuNi05LjQgMzMuOSAwTDMwNSAyMzl6Ij48L3BhdGg+PC9zdmc+)](https://developer.nvidia.com/blog/author/edwli/){wpel-link="internal" rel="author follow" target="_self"}

## Comments {#comments .h--smaller .txt-clr--blck .mb-0}

Comments are closed.
