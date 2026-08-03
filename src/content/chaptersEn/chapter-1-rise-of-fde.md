---
title: "Chapter 1: The Rise of FDE"
order: 0
---

> "The biggest challenge of building software for spies is: I don't know any spies."
> — Bob McGrew, early Palantir executive, former Chief Research Officer of OpenAI

## 1.1 First, a Dead Nine Million Dollars

The story always opens the same way. In a conference room at a large enterprise, the vendor's demo has just ended. The large model answers every question fluently, the data dashboards gleam, and even the most skeptical executive cannot find a flaw. The CEO decides on the spot: sign it. A contract worth millions, handshakes all around, a photo op, a press release.

Nine months later, the project is dead.

Not a dramatic death—a silent one. The system is still running, the servers are still on, but no business unit is actually using it. The vendor delivered every feature in the contract, and the enterprise paid every invoice. The only thing that never arrived was "value."

If you think this is just bad luck, MIT's famous 2025 report will tell you: this is the norm. They interviewed 52 organizations, collected 153 executive surveys, and reviewed over 300 public enterprise AI projects. The conclusion was a single line: of the thirty to forty billion dollars poured in, **95% produced no measurable financial return**.

95%. In other words, the dominant melody of enterprise AI adoption is not success—it is systematic, institutional failure.

What's more interesting is the way things fail. The report states explicitly: the problem is not the model. Those models that dazzle in demos stay smart in production; they just "don't store feedback, don't keep context, don't enter the workflow"—they look like products but handle like exhibits. Stanford's macro data from the same year corroborates: 88% of organizations are using AI, but the percentage of agent applications that actually make it into production is in the single digits. McKinsey delivers the final blow: only 6% of companies can say AI contributes more than 5% to profit.

Around the time the report came out, a remark from a manufacturing COO made the rounds in the industry: "The internet says everything has changed; back on our shop floor, nothing has moved." (Source: Appendix C.) That line cuts deeper than any data point—his company doesn't lack budget, doesn't lack tools. What it lacks is someone to jam the tools into the real workflows of the shop floor.

In the same period, the report's lead author told a story about a control group. Some companies founded by teenagers and twenty-somethings were hitting twenty million dollars in revenue within a year using generative AI. Their playbook was the exact opposite of the incumbents: pick one pain point, drive it through, and bind tightly to customers who would actually use the product. The older companies always tried to swallow everything in one bite; the young ones took a single bite, chewed through it, then took the next. (Source: Appendix C.)

Remember this contrast. It is practically a trailer for Chapter 2.

In truth, this chasm was not dug in the AI era. China's enterprise software industry had been lying in it for over a decade: large companies demand customization, vendors lose money on every deal, code is delivered and abandoned on departure, and the whole lot collectively devolve into "the client's outsourcing shop." One practitioner put it bluntly: customization is the natural enemy of SaaS, and this curse can only dissolve on its own when the market matures. The American side is more dignified, but the script is much the same: sales signs the deal, implementation moves in, six months later they deliver a "feature-complete but unloved" system, and then begins a long, grinding dispute.

Ultimately it is the same wall: **the place where software is built, and the place where value is created, are not the same place.** On this side of the wall, requirements get relayed through tickets, meeting minutes, and weekly reports, losing a layer of blood with each retelling; on the other side, the customer's real workflow hides in spreadsheets no one documents, in conventions passed around by word of mouth, in the tacit knowledge of "you have to ask Old Wang about that." The software industry invented countless ladders to scale that wall—requirements docs, user research, implementation methodologies, customer success teams—the wall stayed.

Until one company decided: stop climbing the wall. Send the people over.

## 1.2 Palantir's Victory

In 2003, Silicon Valley was still climbing out of the wreckage of the dot-com bust. Peter Thiel and a handful of young Stanford alumni founded a company named after *The Lord of the Rings*—Palantir, the Seeing Stone, the legendary crystal that could see across distant lands. Their mission sounded like science fiction: build data analysis software for the U.S. intelligence community, connect the fragments scattered across countless classified databases into a coherent picture, and help analysts hunt terrorists.

This business had a premise that would make any product manager break down on the spot. Years later, early executive Bob McGrew recounted the story vividly on a podcast:

> "Our goal when we started was to build software for the intelligence community—put bluntly, to build software for spies. And one challenge of building software for spies is: I don't know any spies, and you probably don't either. Even if you happen to find a spy and ask 'how do you actually work day to day,' he usually won't tell you."

No user interviews. No requirements documents. No usability testing. The first lesson of the internet startup playbook was void here. One of the co-founders, Stephen Cohen, came up with a clumsily endearing workaround: build a demo, show it to people at the intelligence agency, and ask what they thought. They were not polite: "This is terrible. It has nothing to do with what we do." Cohen didn't retreat. He followed up: "So what would you want to be different?" Out came the notebook, one item at a time, written down, taken back, revised, and brought back to their door.

This clumsy loop is the embryo of FDE. It contains two intuitions that would later prove worth a fortune: first, that customers in complex domains do not know what they want until they see something that works; and second, that the fastest way to learn what customers want is to stand the builder next to the user.

The man who promoted this intuition into corporate strategy was employee number 13, Shyam Sankar. As Palantir moved from its first customer to its second and third, the team discovered a counterintuitive fact: every customer wanted something subtly but critically different. The standard response is to extract commonalities, build a generic product, and say no to variation. But Palantir's customers were the CIA, the FBI, and the U.S. military in a war zone—saying no meant being out. Sankar went the other way: build a platform that could be flexibly customized, then deploy engineers to the customer site to close the last mile.

His most consequential move was to rewrite the accounting. In the software industry's ledger, "building custom work for a single customer" is called services—the enemy of margin. Sankar flipped it: **on-site customization is not a cost; it is product discovery.** Every pit an engineer steps into at a customer site becomes a signpost for the platform's next evolution.

Sankar himself was the first Forward Deployed Engineer, and his earliest on-site stint is practically the archetype scene for the role. Around 2007, the largest source of U.S. casualties in Iraq was roadside bombs. The interagency operations center set up to counter them allowed Sankar to bring a small team and a "still-rough" product into a classified information room for two weeks of co-location. A classified information room is a physically isolated, compartmented space where even speakerphone is forbidden. Sankar devised a brute-force fix: he used an elastic band to strap the phone to his head, freeing both hands to code—one ear taking the analyst's feedback, the other ear hearing colleagues back at Silicon Valley HQ. Nineteen hours a day for two weeks: demo, ingest data, collect feedback, fix on the spot. By the end, the analysts said: this thing is useful. Sankar himself was spent; he called CEO Karp: "This is unsustainable, we're done." Karp's answer later became company doctrine: turn this "unsustainable" into an institution. (Source: Appendix C.)

Years later, colleagues recalled that Sankar could deliver a dressing-down without a trace of emotion. Once, he and colleague Mabrey were chatting happily in an airport café when the colleague suddenly received a sharply worded critique email from him—written and sent from the seat across the table. "There was no personal attack, only one subtext: to win, I owe you this truth." (Source: Appendix C.)

This playbook soon drew blood on the battlefield. Deployed Palantir engineers found that soldiers didn't need fancy intelligence charts; they needed one simple tool to mark "this road is suspect" on a map—roadside bombs were the patrol's biggest killer. The engineers threw together a crude map tool on the spot; a soldier could mark a dangerous stretch with one click, visible to the whole unit in real time. That tool saved lives and later settled into a standard feature of the platform. Note: it could not have been born in any headquarters conference room. It could only be born in the instant when an engineer and a soldier looked at the same road together.

On the commercial side, things died once first. Palantir's first enterprise-facing product was called Metropolis, and market response was dismal—only a few financial firms used it grudgingly. The second attempt, Foundry, finally got traction, and the turning point was Airbus: in the Toulouse factory, an A380 fuel pump fault kept recurring; Airbus's own engineers had chased it for two years with no answer. Palantir's people came in, piped the sensor data into the platform, and cracked the case in two weeks—fuel sloshed away from the pump body during climb. A trivial fix secured an order reportedly worth tens of billions of dollars. Airbus's head of digitalization later said publicly: "The same problem used to take us twenty-four months to chase down." (Source: Appendix C.) Airbus became Palantir's most stalwart champion in Europe, building its Skywise data platform entirely on top of Foundry, connecting tens of thousands of aircraft and over fifty thousand users.

A bit of gossip worth recording. The rumor has long circulated that Palantir's software was involved in the 2011 operation that killed Osama bin Laden. This claim has never been confirmed, and never been refuted—the journalist who wrote Palantir's biography reporting deliberately left this ambiguous footnote in place. True or not, the rumor itself is Palantir's best sales weapon. (Source: Appendix C.)

By 2016, the number of Palantir Forward Deployed Engineers at one point exceeded the number of traditional software engineers. A software company where more than half its engineers weren't at headquarters building the product, but deployed at customer sites around the world. Wall Street didn't understand it for years, dismissing it as a "human wave" that was "more like a consulting firm."

Then time gave its answer. In 2023 it launched the AI platform AIP, paired with a playbook called "Bootcamp" (detailed in Chapter 8), compressing the nine-to-twelve-month enterprise software sales cycle into weeks. In Q4 2025, its "Rule of 40"—revenue growth plus profit margin, the software industry's health metric, where 40 is a passing grade—hit 127%; in Q1 2026, 145%. It signed $4.26 billion in a single quarter, hit Net Revenue Retention of 139%, and held $7.2 billion in cash. Karp said only one thing on the earnings call: "We are a sui generis species." Its market cap at one point broke $400 billion. (Source: Appendix C.)

The people who once laughed at the human-wave tactic were speechless. Palantir used twenty years to prove one thing: that wall cannot be scaled by ladders, but it can be crossed by people. The people who crossed it got a formal name—Forward Deployed Engineer, FDE.

## 1.3 What Is an FDE

### A One-Line Definition

The definition adopted in this book comes from the mode's best exponent, Bob McGrew—an early engineer at PayPal, later an early Palantir executive, and later still Chief Research Officer of OpenAI, where he led the teams behind ChatGPT and GPT-4:

> **A Forward Deployed Engineer is an engineer stationed at the customer site who closes the gap between "what the product can do" and "what the customer needs."**

Every word in this plain sentence carries weight.

"Stationed on-site" means your working context is embedded in the customer's world: you join the customer's channels, read the customer's data, sit in the customer's meetings, and get to know the person who "knows why the process is the way it is"—not necessarily sitting in the customer's office every day. The "gap" is the reason this role exists: where the product works out of the box, you're not needed; the deeper the gap, the more you're needed—intelligence, finance, manufacturing, healthcare, law. "Engineer" is the most important qualifier: you write production code, not reports. Palantir deliberately kept the words "software engineer" in the title to signal to the world: this is not a consulting role. As for "Forward Deployed," it's a military term for troops deployed to the front line—placing the most effective fighters as close to the problem as possible.

### What It Is Not

The fastest way to understand a new role is by elimination.

It is not pre-sales. Pre-sales ends before the contract is signed; its goal is to win the deal, its deliverable is a slide deck. FDE enters deep water only after the contract is signed; its goal is to win the outcome, its deliverable is a system running in production. Pre-sales makes the customer believe "this can be done"; FDE makes it actually be done.

It is also not on-site outsourcing—a distinction that matters especially for Chinese readers, because "on-site engineers" have a long and inglorious history in the domestic market. One of the first Chinese service providers to fly the FDE flag drew the line with on-site work in three sentences on its website: on-site bills by the hour, FDE delivers by phase and accepts by result; on-site writes from scratch, FDE brings a platform base to engineer on top of; on-site stays longer and longer, and when the person leaves the system stops, whereas FDE finishes and leaves, with capability remaining in the system and the customer team. In a word, on-site sells headcount; FDE sells outcomes.

Jove, the FDE lead at the Silicon Valley AI customer-service company Cresta, laid out this boundary in finer detail in a video conversation. His team is growing from 30 to 100 this year, and his judgment is: **an FDE must be bound to an AI platform to mean anything**—if the work is only traditional data integration and system setup, it's hard to distinguish from a traditional implementation engineer or outsourcing. He has one hard rule for hiring: in the age of Agents, an engineer who can't use code is illiterate. Another mechanism worth noting is the dual mandate: FDEs don't only have to make the deployment succeed, they also carry the metric of "making the product more mature"—what's learned on-site must feed back into the platform. (Source: Appendix C.)

It is not a consultant. Consultants deliver recommendations by the project and aren't accountable for execution; FDEs are accountable for the system's ultimate operation, with the endpoint being "the customer team can use it on its own." The Anthropic partnership with the fintech company FIS is a textbook specimen: engineers embedded inside FIS to co-build an anti-money-laundering agent, compressing investigations from hours to minutes—but the written goal of the engagement was not to hand over a system, but to "transfer knowledge, so FIS can build its own agents going forward." A consultant wants you to keep needing him; an FDE wants you to stop needing him eventually.

It is also not a traditional product engineer. Product engineers face an abstract user—personas (what the user looks like), funnels (how many go from visit to payment), daily active users; FDEs face concrete customers—a bank's risk-control department, a farm in Iowa, a patrol on the outskirts of Baghdad. Palantir has a famous internal role split: platform engineers own "one capability, serving many customers," while Forward Deployed Engineers (the internal codename "Delta") own "one customer, mobilizing many capabilities." What a platform engineer pursues is a feature that works everywhere; what an FDE pursues is to fully solve the one customer's problem in front of him first.

### How This Wind Got Behind It

A role invented in 2003—why did it only become the hottest job in 2025?

The most direct fuse is generative AI. Large models created an unprecedented gap: anyone can produce a dazzling demo in five minutes, but wiring that demo into the enterprise's real data, permissions, compliance, and workflows is an order of magnitude harder. The model companies one by one figured it out: **the next pivot is not model quality, it's deployment capability.**

The numbers trace the steepness of the curve: in the first nine months of 2025, FDE job postings grew eightfold; on the YC job board, over a hundred startups posted a role that barely existed three years ago. The venture firm a16z flat-out called it "the hottest job in tech" and paired it with a perfect analogy: enterprises buying AI is like your grandma getting an iPhone—she wants to use it, but she needs you to set it up for her.

A series of reports in the *Financial Times* in November 2025 is the best cross-section for observing this trend. Fournier, OpenAI's head of forward deployment for Europe, said the team was founded only a year ago and is about to grow to 50 people, with "demand beyond our expectations"; de Jong, Anthropic's head of applied AI, put it more pointedly: "The needs of a Fortune 500 bank and an AI-native startup are entirely different species"—so her team grew fivefold in a year. Palantir's UK head, Prettijohn, condensed the company's creed into one line: "Software only has value when it actually matters to the end customer." Even the CEO of the model company Cohere, Gomez, stepped up to endorse it: "We embed engineers at the very start of the contract, and only pull back once the customer is running smoothly." (Source: Appendix C.)

The intensity of the talent war has three hard metrics: OpenAI's forward deployment team started from 2 people and grew to 52 in a year; Salesforce, which wrote "we don't do our own implementation" into the textbooks, publicly committed to hiring 1,000 FDEs; even Deloitte, which makes its living selling consulting, set up a dedicated FDE practice line in December 2025. (Source: Appendix C.)

Then came the giants voting with their feet. On May 11, 2026, OpenAI announced the formation of a "deployment company": self-controlled, joined by TPG, Bain Capital, Brookfield and 19 other top capital providers, with an initial investment of over $4 billion, a reported pre-money valuation of about $10 billion, and the side acquisition of a consulting firm with 150 deployment engineers. Hours later, Anthropic was reported to be forming a counterpart with Blackstone. The two biggest model companies, on the same day, elevated "deployment" from cost center to strategic asset—the capital market voted for FDE in the most expensive way possible.

The deepest reason is the one McGrew saw through most clearly: "AI agents are a category with no incumbent, so there is a massive amount of product discovery to do." What customer-management software should look like had a standard answer twenty years ago; what an agent should look like, nobody knows—including the customers themselves. The answer can only be found at the customer site.

History drew a circle here: in 2003, Palantir invented FDE because it "didn't know how spies work"; in 2025, the entire industry embraced FDE because it "doesn't know how agents work inside enterprises." Twenty-two years, the same answer.

## 1.4 The Responsibilities and Traits of an FDE

### A Resume Made for This Role

If you had to answer "what kind of career is an FDE," McGrew's resume is practically the standard answer.

His first job was at PayPal, as an early engineer. That group later became known as the "PayPal Mafia" and profoundly shaped all of Silicon Valley. After leaving, he joined Palantir in its startup phase, rose to executive, and lived through the entire process of FDE going from an emergency measure to corporate strategy. When he ran product and engineering teams, he coined a famous analogy: Forward Deployed Engineers pave one "gravel road" after another toward value at the customer site, and the product team decides which gravel roads are worth widening and paving into "highways" to serve the next ten customers.

Later still, he became Chief Research Officer of OpenAI, leading the development of ChatGPT, GPT-4, and the o1 reasoning model. In other words, this man has built the platform on this side of the wall, has crossed to the other side to stand on-site, and finally hand-built the very technology that made that wall higher than ever.

An amusing scene played out at a YC AI conference in 2025. McGrew had expected founders to swarm him asking "how did you invent ChatGPT"; instead, everyone chased him with the same question: **how does Palantir's FDE model actually work?** The man who invented ChatGPT was most often asked about delivery methodology. That detail is the best footnote to where the wind is blowing.

### Three Layers of Traits

Drawing on over twenty job listings and first-person accounts from practitioners, FDE traits can be distilled into three layers.

The first layer is being a broad enough technical generalist. An FDE doesn't need to be the deepest expert in any one domain, but must be able to solve full-stack problems independently on-site: write code, wire up APIs, understand data pipelines, work the cloud, read the temperament of large models, and understand the enterprise's "utilities"—single sign-on (one login, access everywhere), permissions, and compliance certification. The market puts a clear price on this combination: a 2026 compensation report shows the median total annual comp for a mid-level FDE at a top AI lab is about $385,000, senior about $610,000, and principal over $1 million—higher than most pure R&D roles at the same level, because the market knows how scarce these people are. (Source: Appendix C.)

The second layer is the ability to translate technology into business outcomes. This is the watershed between an FDE and an ordinary engineer. One frontline practitioner's line is widely quoted: "The model is usually the cleanest part. The hard part is finding the workflow nobody wrote down, the data source people actually trust, and the person who knows why the process is the way it is." Palantir's hiring bar says it even more plainly: "The candidate's expressiveness, clarity, and conversational ease should make me glad to have him run a meeting with a customer." The interview also screens for this translation ability. OpenAI and Palantir's FDE interviews have a signature segment called "problem decomposition": throw the candidate a large, fuzzy, real enterprise problem; for sixty minutes, no code is written—only how you ask questions, how you bound the scope, how you build order out of chaos is observed. The interviewer's advice is: understand the problem before you dive in—slow is smooth, smooth is fast. In an ordinary interview, "I optimized the query by 40%" is a perfect answer; in an FDE interview, the perfect answer is: "I optimized the query by 40%, which got the customer's analysts their reports two hours earlier every day and tripled the team's throughput." A technical achievement must be converted into the customer's language to count as answered.

The third layer is ownership, plus a touch of "rebellion." A line circulates in practitioner circles, describing the accountability this role demands: "Deployment breaks at 2 a.m. You don't file a ticket, you don't blame another team, you don't go back to sleep. You fix it. Period." Palantir has a subtler expectation for business-side roles: deep industry knowledge, coupled with the willingness to be a "rebel"—seeing the absurdity in the customer's status quo and pushing for ten-x rather than ten-percent change. The behavioral bar CEO Karp set back then was the "French waiter": embedded in the service flow, attuned to real needs, and at the same time confident and tasteful enough to guide the customer from "what they think they want" to "what's actually good for them."

### What a Day Looks Like

In daily practice, an FDE's time splits roughly like this: four to five tenths writing code and tuning systems on the customer side, two to three tenths aligning direction with customer management, breaking down problems, and making architecture decisions, one to two tenths distilling patterns learned on-site back into the company's product line, and the rest on evaluation, optimization, and knowledge sharing—writing playbook manuals, internal evangelism, and training customer teams.

Hidden in this schedule is an important message: the FDE is not "an engineer on loan," but "an engineer with a two-way mission"—delivering outcomes to the customer on one end, and feeding intelligence back to the company on the other. That is also the subject of the next section.

## 1.5 Let Results Speak

If one sentence had to capture the FDE working creed, it would be: let results speak.

First, separate "data" from "results." Enterprise software history is full of projects with great-looking data and terrible outcomes: every box on the feature list is checked, but only five percent of people use it; the system has four-nines availability, but the business would rather keep using spreadsheets. The vast majority of the 95% of failed projects in the MIT report didn't lack data dashboards—the numbers were all there, the value never came, because no one was accountable for "that one line on the financial statement."

The FDE model institutionally prevents "results" from being diluted, and it does so through three things.

- **Pricing moves toward outcomes:** Even in its early government work, Palantir used heavy "pay-on-success" arrangements. McGrew recalls it plainly: "Early on, it made sense for the startup to take all the risk—you pay us once it works." This logic evolved more finely in the AI era: Sierra charges per "resolved session," no resolution, no fee; many FDE service providers deliver by phase and accept by result. Once billing is tied to results, the delivery team's entire behavior re-sorts—you won't spend three weeks polishing a feature nobody uses, because "nobody uses it" comes out of your own pocket.

- **Success metrics are set before work begins:** The first step of an FDE engagement isn't writing code—it's defining "what counts as success" with the customer. Palantir's Bootcamp requires the customer to first lock down an extremely focused core battleground—"reduce scheduling conflicts on a given production line by 30%," not "explore AI-empowered manufacturing"—precisely to keep the project from drifting into the unfalsifiable under the banner of "exploration." The OpenAI partnership with John Deere is a textbook example: hundreds of real operational cases were reviewed alongside agronomy experts, a custom evaluation system was built, and only then did model iteration begin. The eventual "up to 70% reduction in chemical usage" figure wasn't a post-hoc PR packaging—it was a target set before a line of code was written.

- **The final judge is the customer organization's behavioral change:** The report has a biting finding: only about four in ten enterprises offer employees official AI tool subscriptions, while as many as nine in ten employees routinely use personal consumer-grade products to solve work problems. This means a large share of "successfully launched" projects are actually in a state of "the official system spins idle while employees route around it." In the FDE philosophy, go-live is not a milestone; the customer team changing how it works is. Sierra deliberately names the role "Agent Engineer," and its lead Meurer explained the selection bar: only two kinds of problems are taken—ones that are genuinely hard, and ones that have genuine business impact, and both must hold at once.

"Let results speak" sounds like common sense, but to execute it is to offend the entire structure of interests: sales can no longer over-promise, because the delivery team is accountable for outcomes; the customer's IT can no longer hide behind a "feature checklist," because the business department's adoption rate becomes the acceptance standard; and the FDE himself can no longer claim "I built to spec" as a defense, because whether the spec itself was right is also on his tab. That is exactly why this role is precious, and why it is expensive.

## 1.6 The Four Faces of an FDE in a Team

An FDE lives in four worlds at once; he is the connector between them.

- **To the customer, he is "embedded product manager + full-stack engineer":** He observes the customer's real work like an anthropologist—the most valuable discoveries come from "watching," not "asking"—and then builds on the spot like a founder. Palantir institutionalized this pairing: the deployment strategist codenamed "Echo" is responsible for reading the customer's mission, stakeholders, and adoption path, while the Forward Deployed Engineer codenamed "Delta" handles technical implementation. Two people to a team—one diagnoses, one builds—and neither is dispensable.

- **To the product line, he is "the outpost and intelligence officer":** This is the most essential difference between an FDE and a traditional delivery team. The cost of traditional implementation is a cost of sales—every person-day spent must be earned back from the contract; a healthy FDE organization treats on-site work as R&D—three customers hit the same integration gap, that's not three headaches, that's one piece of product intelligence; five deployments all need the same workflow, that should be abstracted into the platform's next standard capability. A former Palantir engineer recalls that the key components of the Foundry platform were born in customer sites scattered across Zurich, Houston, São Paulo, Toulouse, and other far-flung places—grown bottom-up, eventually feeding back into a product generating hundreds of millions of dollars a year. (Source: Appendix C.)

- **To sales, he is "a trust amplifier":** Enterprise customers have been let down too many times and are immune to all slide decks. FDEs rebuild trust with two moves: first, hands-on—on the customer's own data, in the customer's own environment, build something that actually runs on the spot; second, honesty—the willingness to say no to the customer's wrong premises. Palantir's Bootcamp industrialized this trust-production process: the customer brings real data, a deployable prototype is produced in one to five days, and executives lay hands on it themselves. Early Bootcamps' paid conversion rate was only 5% to 10%; the company's disclosed later conversion rate is now close to 75%. Trust can be produced, engineered. (Source: Appendix C.)

- **To the organization itself, he is "a talent crucible":** An easily overlooked fact: Palantir has produced a remarkable density of founders. This is no surprise—the daily training of an FDE is to end-to-end build something valuable and get it used, under constrained resources, ambiguous requirements, and complex stakeholder maps—which is almost a complete rehearsal for founder training. Sreenivas, who later founded Decagon; Meurer, who assembled Sierra's agent engineering team; and several of the authors of the most widely circulated methodology article in the industry—all came out of Palantir's forward deployed ranks. One company's talent spillover became the talent infrastructure for an entire industry. (Source: Appendix C.)

Taken together, these four identities point to one conclusion: the FDE is not a box on an org chart, but an upgrade in how the organization learns—turning "understanding the customer" from second-hand information relayed up the chain into an engineer's own muscle memory.

## 1.7 How to Hire an FDE

A cold splash of water first: FDE is one of the hardest roles to hire in the software industry, because it demands one person be excellent on two dimensions that usually trade off against each other.

Barry, a former Palantir engineer, laid it out in an essay: Palantir's bar for hiring FDEs was "engineers who could get into Google or Facebook"—because they go to customer sites to **build** systems, not to tune parameters; but technical skill alone is far from enough, and forward-deployed people also need creativity, judgment, and presence in front of the customer. He added a painful truth: this is far more expensive and difficult than hiring a traditional pre-sales team.

Breaking down the market's hiring practices, FDE recruiting has three key stages.

- **Candidate profile:** Hire "curious bulldozers," not "refined craftsmen." a16z's advice to startups uses the phrase "curious doer": high initiative, lacking reverence for the status quo, hungry for the customer's problems. McGrew is more specific: an FDE team wants two kinds of people—"domain rebels," who know the industry but don't worship its conventions; and "rapid prototypers," who prize speed over perfection and accept that the first version gets thrown away and rewritten. Conversely, two types favored in traditional engineering cultures are actually red flags for the FDE role: the "craftsman" who puts code elegance above customer outcomes, and the "loyal executor" who treats every customer utterance as gospel.

- **Interview:** Replace the eight-part essay with a "decomposition round." The "problem decomposition" mentioned earlier is the soul of the FDE interview: give the candidate a fuzzy, huge, real-business-edged problem—"A bank's compliance team manually reviews 30,000 transaction alerts a day, 90% false positives, what do you do"—then watch for sixty minutes. What's tested isn't the answer, it's the process: did you ask about constraints before diving in, did you separate root cause from symptom, do you remember a real user sits at the other end of the system, can you clearly articulate the trade-offs. Palantir also embeds about twenty minutes of behavioral questions in every technical round, and will explicitly reject technically strong but culturally mismatched candidates—the most important cultural item is a sense of order in the face of ambiguity.

- **Pricing:** Accept a hybrid of "engineer comp + business flexibility." The 2026 market data can serve as an anchor: Palantir's forward deployed engineers have a median total annual comp of about $215,000; mid-level FDEs at top AI labs are about $385,000, senior about $610,000; Anthropic's roles have a base between $200,000 and $300,000. Another detail worth noting is bonus design: Palantir's bonuses are often tied to operating metrics like customer expansion, sitting between engineering bonuses and sales commissions; a16z's advice is to align incentives with the account manager, but not to put hard sales targets on FDEs—that would steer behavior toward closing deals rather than delivering results. Compensation structure is the final step of role definition: how you pay ultimately shapes how people behave. (Source: Appendix C.)

## 1.8 How to Become an FDE

Shift the angle: if you're an engineer, product manager, or consultant looking to enter this fast-growing market, what's the path?

Self-test first: the glamour and the cost of this role are two sides of the same coin. In practitioner forums, the discussion of FDE has a rare honesty. The positive side: the best combination of technical substance and brand endorsement, one of the few roles that can simultaneously build up technology, business, and customer relationships. The cost side: a quarter to half of time on the road is the norm—OpenAI's job posting explicitly states travel up to 50%; the work rhythm is defined by the customer's urgency, not your own schedule; and there's a recurring reminder—the risk of burnout is real.

One comment is sharp enough to be worth copying verbatim: "Some treat it as a brand springboard, some say it's consulting with a cool title—both are true. The difference is whether your company feeds field learning back into the product, or sells you as person-days." This line is both a career criterion and the subject of Chapter 7. (Source: Appendix C.)

Then take a remedial course: what you need to pick up isn't technology, it's the craft of "translation." A technical foundation is only the ticket of admission, and most engineers have it; what's truly scarce are three translation skills—translating business problems into technical problems (Chapter 2), translating technical solutions into language executives understand (Chapter 3), and translating field experience into knowledge the team can reuse (Chapter 7). To practice these three, classwork is no match for fieldwork: sit in on a pre-sales call, pull a site shift, train a real user, then see which kind of discomfort you grow fastest in.

For interview prep, rewrite your resume as "customer-outcome oriented." The principle was stated earlier, and bears repeating: every technical achievement in your resume must run the last mile into the customer's language. "Built a retrieval-augmented system" is engineer-speak; "the retrieval-augmented system I built cut the customer's first-response time from 4 hours to 8 minutes, and at renewal they proactively asked to expand" is FDE-speak. Have two kinds of stories ready at the same time: one where you built order out of unclear requirements, and one honest failure—Palantir-school interviewers have a fixation on "tell me a real failure," because the essence of this work is advancing under uncertainty, and someone who won't admit failure has no capacity to evolve.

When picking a company, ask three counter-questions. First: "What's your product platform?"—an FDE with no platform base is pure labor outsourcing. Second: "How does field learning flow back into the product?"—ask for a recent example of something that went from on-site to a product feature, and if they can't produce one, that's a red flag. Third: "Who does the FDE report to?"—reporting into product or engineering usually means the model is taken seriously; reporting into sales means you risk becoming a pre-sales staffing pool.

## 1.9 The FDE Toolkit

To close this chapter, here is the current tool landscape for this role. Tools go out of date, but the capability layering behind them doesn't. Five layers, from the ground beneath your feet to the road behind you.

- **Platform base layer | the company's weapons.** The premise of the FDE model is "bring a platform to the field," otherwise it degenerates into custom development. Palantir's Foundry and AIP, whose core is that thing called the "Ontology"—modeling the enterprise's data, logic, and actions into a semantic layer so that AI runs on a foundation that "understands the business"; OpenAI's model interfaces and agent toolchain; Sierra's agent platform. When evaluating any FDE opportunity, the thickness of this layer is the first priority.

- **AI engineering layer, the individual's craft.** The daily craft post-2025 includes: prompt engineering and context management; retrieval augmentation, letting the model look things up before answering; evaluation systems, building quantifiable yardsticks for fuzzy business quality—this is the signature skill that distinguishes the AI-era FDE from the traditional implementation engineer; agent architecture, tool invocation, multi-agent collaboration, keeping humans in the loop at critical junctures; and engineering optimization for cost and speed.

- **Data and integration layer, the first battle on entry.** Almost every FDE project's first week is spent wrestling with this layer: data pipelines, enterprise system connectors, permissions and identity authentication, the vector database for AI to look up material, and data governance and masking (redacting sensitive information). One practitioner's rule of thumb: seventy percent of project progress is stuck here, but you don't see it in the demo—it's the underwater part of the iceberg.

- **Delivery and collaboration layer, survival gear inside the customer's environment.** Working inside the customer's security boundary means "dual adaptation": you must be fluent in your own modern toolchain, and also be able to stoop to the customer's environment—maybe an intranet physically disconnected from the internet, maybe deployment only in the customer's cloud environment, maybe you can't even reach the code-hosting sites. Containerization (the technique of packaging up an environment and carrying it away), infrastructure-as-code (managing server environments with code), and the contingency plan of "being able to bring the environment up in an offline meeting room" all belong to this layer.

- **Knowledge capture layer, the leverage of scale.** This is the most easily neglected layer, but the one that determines whether a team can escape "revenue growing linearly with headcount": playbook manuals, component libraries, deployment checklists, and the writing habit of rewriting "one customer's solution" into "a pattern for a class of customers." Chapter 7 is devoted to it.

Taken together, the five-layer toolkit is the complete silhouette of this role: feet planted on a platform, hands holding engineering, eyes on outcomes, and a product line connected behind you.

That is the FDE. In the seven chapters that follow, we head into the interior of the methodology, starting from a project's most original choice—how to make sure you're solving the right problem.
