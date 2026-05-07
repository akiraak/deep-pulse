---
url: https://www.xda-developers.com/keep-finding-vibe-coded-apps-leak-user-data/
title: "I keep finding vibe coded apps that leak user data, and I'm not even looking for it"
---

[![Adam Conway](https://static0.xdaimages.com/wordpress%2Fwp-content%2Fauthors%2F6697d8346a578-adamconway-pfp-updated-valnet.png?fit=crop&w=90&h=90){decoding="async" loading="lazy" style="display:block;height:auto;max-width:100%;"}](/author/adamconway-xda/)

[By ]{.meta_txt} [Adam Conway](/author/adamconway-xda/){.meta_txt .article-author}

[Published]{.is-mobile-hidden} Apr 19, 2026, 4:30 PM EDT

I'm Adam Conway, an Irish technology fanatic with a BSc in Computer Science and I\'m XDA's Lead Technical Editor. My Bachelor's thesis was conducted on the viability of benchmarking the non-functional elements of Android apps and smartphones such as performance, and I've been working in the tech industry in some way or another since 2017.\
\
In my spare time, you'll probably find me playing Counter-Strike or VALORANT, and you can reach out to me at [adam@xda-developers.com](mailto:adam@xda-developers.com){rel="nofollow noopener noreferrer" target="_blank"}, on Twitter as [\@AdamConwayIE](https://twitter.com/AdamConwayIE){rel="nofollow noopener noreferrer" target="_blank"}, on Instagram as [adamc.99](https://www.instagram.com/adamc.99/){rel="nofollow noopener noreferrer" target="_blank"}, or u/AdamConwayIE on Reddit.

[]{#login-button-article-sidebar .w-header-user-box .on-load-show}

Sign in to your [XDA]{.brand-color} account

The barrier to shipping software has never been lower. You can describe an idea to an AI, watch it produce a working prototype in an afternoon, and have it deployed behind a domain name by the end of the evening. The results can be impressive, and I\'m not here to argue that vibe coding is inherently bad.

What I *am* here to argue is that I cannot stop stumbling onto vibe coded apps that leak data. I\'m not looking for vulnerabilities when I open someone\'s new site, I don\'t run Burp Suite or [ZAP](https://www.xda-developers.com/nas-wouldnt-give-ssh-access-hacked-into/){target="_blank"} against every URL I click on, and I\'m not even particularly *curious* most of the time. And yet every few weeks, I end up accidentally looking at data that I have absolutely no business seeing, on a platform that someone seemingly spun up without a second thought about what it means to properly store data. The same problems keep surfacing, again and again, and they\'re the kind of problems that should never have been shipped in the first place.

This isn\'t a [[vibe coding](/vibe-coding-is-the-most-fun-way-to-build-with-ai/){target="_blank"}]{.display-card-hyperlink-article data-id="1028671"} hit piece, either. The pattern is older than LLMs. Developers have been leaving S3 buckets open and trusting the frontend since long before Claude could write JavaScript. What *has* changed is the volume. We\'ve seen the timeline of a development pipeline that once started with an idea to the creation of a live website drop from weeks to hours, but the mistakes also scale with it. And the mistakes I keep running into are always the same kind: data stored insecurely.

## A gaming site that served every user\'s details to every client {#a-gaming-site-that-served-every-user-39-s-details-to-every-client}

### Every user account and their conversations

![vibe coded site leaking info about other users in the Chrome console](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2026/04/vibe-coded-site-leaking-info-1.jpg?q=49&fit=crop&w=825&dpr=2){.img-brightness-opt-out img-url="https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2026/04/vibe-coded-site-leaking-info-1.jpg?q=49&fit=crop&w=825&dpr=2" decoding="async" height="1138" loading="lazy" width="1650"}

A couple of weeks ago, a friend sent me a link to a gaming site for players of a well-known competitive shooter. The concept was universally laughed at across gaming circles, as the idea was that you could match with other users and queue up competitive games with people you meet on this weird Tinder-for-FPS-games style site. I was in a call with some friends when we saw it, and I got curious enough to poke around, given that there were many who suggested it was a vibe coded mess. I was streaming my screen to my friends in Discord at the time, so I quickly spun up an account to see it for myself.

I wasn\'t trying to break anything. I just wanted to see what API the site was calling when I loaded a profile, more out of curiosity than anything else. What I saw instead was a single endpoint returning what looked suspiciously like the site\'s entire user database. Names, preferences, email address, in-game rank, and more. Even more disturbingly, another endpoint returned a JSONL of a conversation between two other users, completely at random. The *homepage* was fetching every registered user and filtering them down on the client. The data was already on my machine before I\'d clicked anything. Funnily enough, one user had used a common XSS injection test as their name on their profile.

Still, I hadn\'t crafted any particular request designed to gain access to something I shouldn\'t have, nor had I guessed an ID, I hadn\'t done anything more sophisticated than looking at my browser console. Anyone with even basic fundamentals of web development would both know not to do this, and would likely have a decent stab at preventing it. They certainly wouldn\'t *launch* the site in this form if they knew what they had actually done.

I sent an email to the site owner, telling them about the problems, then I left and deleted my account. There\'s something uniquely uncomfortable about realizing you\'ve been handed access to strangers\' private conversations by a site that is asking you to trust it with *your* private conversations. Somebody *actually* shipped that. The worst part is that the app itself looked fine. A nice, branded landing page, a signup flow that worked, and if you didn\'t open the network tab, you\'d have no reason to suspect anything was wrong. And that\'s exactly the problem.

## A content platform that served up its own drafts

### If you knew where to look

![Why I use OnlyOffice Document instead of Word](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/12/reasons-to-use-onlyoffice-document-instead-of-word.jpg?q=49&fit=crop&w=825&dpr=2){.img-brightness-opt-out img-url="https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/12/reasons-to-use-onlyoffice-document-instead-of-word.jpg?q=49&fit=crop&w=825&dpr=2" decoding="async" height="928" loading="lazy" width="1650"}

That site was just the most recent example, but it\'s nowhere near an isolated issue. A few months back, I was poking around a small content platform that someone I knew had built and was proudly posting about online. It was a decent-looking site, reasonably polished, clearly put together with generous help from an AI assistant. I was curious how posts were being served up, so I looked in the developer console at the JSON object that got sent by the server. The public posts were there\... but so were a few extra ones that weren\'t rendered by default, and they were marked as drafts.

The JSON object contained not just the title, but the entire article body as well. These were half-written posts, scheduled posts, and testing posts which I presume were for testing the functionality of the platform. None of this was meant to be visible to the end user.

The pattern was identical to the previous site. The API was returning every article a user had ever written, and the frontend was supposed to *hide* the ones that weren\'t published. While the frontend filter worked, all you had to do was simply open the network tab, and the whole set was there. Whoever built it had treated the browser like a trusted part of the stack, when the browser should be the *least* trusted link in the chain.

![Bambuddy in Zen Browser on a MacBook Pro](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2026/03/bambuddy-feature-image-cleaned.JPG?q=49&fit=crop&w=825&dpr=2){.img-brightness-opt-out img-url="https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2026/03/bambuddy-feature-image-cleaned.JPG?q=49&fit=crop&w=825&dpr=2" decoding="async" height="1100" loading="lazy" width="1650"}

These things are almost never malicious, and people love to build vibe coded applications for their own uses and testing, and that\'s totally fine. There are plenty of vibe coded solutions to things that people can build for their own testing, but from a production standpoint, right now, I have yet to see a totally vibe-coded solution, start to finish, that didn\'t have severe security issues that were immediately obvious. Think about it this way: if you don\'t know what you don\'t know, how can you know when an AI agent gets it wrong?

I\'ve talked before about [[Bambuddy](/finally-have-full-control-bambu-lab-printer-ditched-bambu-cloud/){target="_blank"}]{.display-card-hyperlink-article data-id="1028706"}, a self-hosted companion app for Bambu Lab 3D printers that I still run myself to keep my printers off Bambu\'s cloud. It had a textbook vibe coding blunder of its own at launch, with a hardcoded JWT secret sitting in the public source code and a TODO comment left next to it. Still, the code is open, the flaws were acknowledged rather than buried, and the app fills a gap that the official tooling flat out doesn\'t. That\'s the kind of vibe coded project that I\'m willing to use, because the response to its bugs was the right one, and it still fills a gap that others didn\'t address. The tool, AI-assisted as it may be, has already been incredibly useful to me, so I don\'t want to come across as if I\'m totally *against* vibe coding in general.

Right now, these tools can\'t replace humans; they can only extend their capabilities. Getting in a taxi and asking to be driven to your destination doesn\'t automatically mean you can drive, and you don\'t always know if the person driving you there is taking the most efficient, safest route.

## Some of them make the news

### There have been some high-profile cases

![Amazon S3 bucket list](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2026/02/amazon-s3-bucket-list.jpg?q=70&fit=crop&w=825&dpr=1){.img-brightness-opt-out img-url="https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2026/02/amazon-s3-bucket-list.jpg?q=70&fit=crop&w=825&dpr=1" decoding="async" height="552" loading="lazy" width="825"}

These two are my own small examples, but the same failure mode has been showing up at a much bigger scale lately, and in places where the data being leaked is a lot more sensitive than the half-written blog drafts I was talking about.

One site that made the rounds recently invited users to submit names, locations, and employers of people whose public statements they disagreed with, on the promise that the submitters themselves would stay anonymous. A researcher found almost immediately that the email addresses and phone numbers of the people filing tips were being exposed through the app\'s own interface, regardless of whatever privacy toggles they had set. The site was pulled offline after the story broke, but by then, it had been live long enough that a lot of personal data had already been handed to anyone who cared to look. A platform whose whole pitch involved protecting the users who submitted information didn\'t even manage the most basic step of scoping profile data on the server.

Another, a community app that required every user to upload a selfie and a photo of a government-issued ID at signup, stored those uploads in a cloud storage bucket that was configured to allow anonymous reads\... and someone found it. More than seventy thousand images, including roughly thirteen thousand driver\'s licences and passports, were pulled out of the bucket and posted publicly. On top of that, over a million private messages between users were exposed through the same misconfiguration. The app had been sold on the premise that it would keep its users safe, and it ended up producing one of the most complete privacy breaches of the year.

Both of these apps launched fast. Both were built by small teams who, judging from the source code, were likely leaning on AI or low-code tooling to ship at the pace they did, especially given that the first even contained placeholders like \"your-google-verification-code\" in the site\'s meta tags. And both failed at the exact same place in the stack as the other sites: the server did not actually check who was allowed to see what, because nobody writing the code thought to tell it to.

Then there\'s the case where the developer walks away from the problem entirely. [Huntarr](https://www.reddit.com/r/selfhosted/comments/1rckopd/huntarr_your_passwords_and_your_entire_arr_stacks/){rel="noopener noreferrer nofollow" target="_blank"} was a self-hosted automation tool that, late last year, became the subject of a public security review. The researcher turned up twenty-one separate issues across the codebase, including an unauthenticated settings endpoint that would happily return plaintext passwords and API keys for every service the app integrated with. A handful of curl commands, no login required, alongside an unauthenticated 2FA setup endpoint that handed back TOTP secrets to anyone who asked. When the findings went public, the developer\'s response was not to patch any of it. Posts raising the concerns were removed from the project\'s subreddit, users who mentioned them were banned, and eventually the entire project was wiped.

The GitHub repository, the Discord, and every channel where users might organise a response were gone, and the community ended up forking an older build to keep something usable alive. The codebase, per the researcher, had no review process, no pull requests, and no automated tests behind it, which is exactly what happens when a project outgrows the capabilities of the person maintaining it.

## The shared failure mode of vibe coded apps

### Authorization is a solved problem, unless you\'re an LLM {#authorization-is-a-solved-problem-unless-you-39-re-an-llm}

![burp suite screenshot](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/06/burp-suite-screenshot_3.png?q=49&fit=crop&w=825&dpr=2){.img-brightness-opt-out img-url="https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/06/burp-suite-screenshot_3.png?q=49&fit=crop&w=825&dpr=2" decoding="async" height="928" loading="lazy" width="1650"}

All of these incidents look cosmetically different, but the root cause is exactly the same. The developer, or more accurately the model that wrote most of the code, treated the frontend as the authority on what a user is allowed to see. The backend happily returns everything it has, and the UI is supposed to show only the bits that apply to the logged-in user.

This is a basic misunderstanding of what authorization *is*. A server that returns all user data and trusts the client to filter it has not implemented authorization, but rather, a very polite suggestion. Anyone willing to open the network tab, disable a bit of JavaScript, or make the API call directly gets the full payload with no friction at all.

LLMs are particularly good at producing this specific bug. If you ask an assistant to \"make a page that shows the user\'s profile with their messages underneath,\" it will cheerfully wire up a query that fetches messages, render them on the page, and not pause to ask who is allowed to see what. The model is optimizing for what you asked for, which is a page that works. \"Works\" and \"secure\" are different words, and a huge number of vibe coded apps confuse the two.

The architectural pattern that vibe coding tools push makes this even worse. Most of the popular AI app builders generate a frontend that talks directly to a hosted backend service like Firebase or Supabase, using an API key that\'s baked into the client. That isn\'t inherently dangerous. Both services give you a way to configure per-table access rules, called security rules in Firebase and row-level security in Supabase, that decide who can read and write what. The problem is that those rules are often left unchanged or misconfigured, and the AI model can\'t be trusted to do it for you correctly, and someone inexperienced may not know how to validate it.

If you don\'t know these rules exist, or you don\'t configure them correctly, your database is perfectly happy to hand out the contents of every row to anyone who asks. That is how the ID-verification app I mentioned earlier ended up with its uploads readable by anyone who found the right URL. That is also, for what it\'s worth, exactly how the Lovable flaw I\'m about to get to works under the hood. The missing check isn\'t hidden deep in a codebase somewhere. It is often a single toggle that nobody flipped.

Of course, a skilled developer using an AI assistant would catch this immediately. A senior engineer knows to write authorization logic on the server, to treat every request as hostile, and to confirm that User A cannot read User B\'s data. But the whole pitch of vibe coding, explicit or otherwise, is that you don\'t *need* to be a senior engineer. You can just describe the app and ship it.

## Why this isn\'t going to get better {#why-this-isn-39-t-going-to-get-better}

### Sacrificing security for speed is always a risk

![replit lovable and claude code open on mac](https://static0.xdaimages.com/wordpress/wp-content/uploads/2026/03/img_6393.jpeg?q=49&fit=crop&w=825&dpr=2){.img-brightness-opt-out img-url="https://static0.xdaimages.com/wordpress/wp-content/uploads/2026/03/img_6393.jpeg?q=49&fit=crop&w=825&dpr=2" decoding="async" height="1100" loading="lazy" width="1650"}

The obvious rebuttal is that this has always been a problem. Leaky APIs, over-fetched client bundles, and trust-the-frontend authorization were in the OWASP Top Ten years before AI coding assistants became a serious tool. That\'s fair, and I\'m not suggesting these mistakes started with Claude or GPT. What has changed is the number of apps being shipped compared to the number of apps being reviewed by someone who knows what an IDOR is.

The numbers back this up too. In March 2025, Matt Palmer, an engineer at [[Replit](/tried-replit-lovable-and-claude-to-build-the-same-app/){target="_blank"}]{.display-card-hyperlink-article data-id="1029657"}, was playing with a LinkedIn profile generator that had been built using Lovable, one of the more prominent AI app builders. He removed an authorization header from one of the site\'s API requests, resent it, and got back what looked like the platform\'s entire user database. Names, email addresses, the custom prompts users had written to make their profiles, and enough personal information to be properly dangerous. He and a colleague, Kody Low, decided to test how common the problem was and ran the same style of check against 1,645 different apps Lovable was showcasing on its own marketplace. 170 of them, roughly one in ten, were leaking user data through the exact same class of flaw. A second researcher, Daniel Asaria at Palantir, independently [reproduced the issue using fifteen lines of Python](https://x.com/danialasaria/status/1911862269996118272){rel="noopener noreferrer nofollow" target="_blank"} and pulled debt balances, home addresses, and API keys out of multiple apps in under an hour. The vulnerability eventually got assigned CVE-2025-48757, and the root cause was, predictably, that Lovable apps were connecting to Supabase without row-level security policies configured. It\'s worth noting that Lovable disputes the CVE\'s validity, and places the blame on users. The former chief security officer at Facebook, Alex Stamos, [summed up](https://www.semafor.com/article/05/29/2025/the-hottest-new-vibe-coding-startup-lovable-is-a-sitting-duck-for-hackers){rel="noopener noreferrer nofollow" target="_blank"} the practice of connecting users directly to a database. \"You can do it correctly,\" he said. \"The odds of doing it correctly are extremely low.\"

The economics of vibe coding reward speed above almost everything else. You spin up a small SaaS tool, you put it behind a login wall, and you start charging for it. If the worst that happens is that a handful of early users notice something weird and move on, a vibe coded app could reach profitability before it reaches a real security review. That\'s not an oversight in these AI tools; that\'s the whole point of them. They don\'t replace a proper audit or security review, but people don\'t treat them that way. Some of those apps hold genuinely sensitive data, and the people using them are extending the same trust they\'d give an app built by a proper engineering team.

I get it, not every app needs a formal threat model. A small weekend project that lets people track their coffee purchases probably doesn\'t deserve weeks of pen testing. But a site holding private conversations between users, or a content platform holding unpublished writing, or really anything that asks users for personal information, should at least have a server that refuses to hand out data the requester has no right to. That is not a high bar. It\'s the single most basic thing a backend can do.

If you\'re building with an AI assistant, the best thing you can do is treat every endpoint as if an attacker is about to call it. Ask the model to explain the authorization logic. Turn off JavaScript and see what the site still does. Open the network tab on your own app before someone else does. These are not advanced techniques, but they are consistently skipped, and the results keep ending up in my browser by accident more often than I would like.

What I really want is for the vibe coding ecosystem to develop a slightly better reflex around server-side trust. The tooling is phenomenal, and I\'m not saying I want it to go away. I want it to get better at flagging the exact class of mistake that keeps ending up in production. An AI assistant that produces an endpoint returning every user\'s messages, and doesn\'t say, on its own, \"you probably want to scope this to the logged-in user and check permissions on the server,\" is not doing its user any favours. These authorization problems are *basic*. In the software engineering world, these are considered solved problems, and they should be well within the capabilities of serious coding assistants to flag them. They just don\'t.

Until that happens, people will keep finding these things by accident. I\'m sure I\'m not the only one who has, and if you\'re building something that collects messages, personal information, or private drafts, please, at a minimum, make sure the server is the one doing the gatekeeping. Your users trusted you enough to hand over their data. Sending it all back to me, unprompted, is a spectacular way to break that trust.

Every vibe coded app I find is a security nightmare. That\'s not a joke, it\'s just what I keep running into. And I haven\'t even been looking for them.
