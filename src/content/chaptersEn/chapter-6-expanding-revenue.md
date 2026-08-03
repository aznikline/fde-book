---
title: "Chapter 6: Expanding Revenue"
order: 5
---

> "The mark that the FDE model is working is: each subsequent customer requires diminishing customization."
> — Bob McGrew

## 6.1 The World of Free Validation

The internet economy turned "free" from a gimmick into strategy. The FDE trade cannot sidestep the hurdle of "free" either; only the shape of the hurdle differs: **in the age of enterprise AI, the most expensive kind of free is the free proof of concept**.

First consider the scale of this free economy. Palantir's AIP Bootcamp is, in essence, a production line built around free validation: customers bring real data, a deployable prototype is produced in one to five days, and the charge is zero or nominal. Starting from under a hundred sessions in 2022 and doubling year after year, by the 2025 peak it ran nearly 6 sessions a day—each session consuming several top engineers for several days, this is tens of millions of dollars a year in free investment. Former Palantir engineer Barry recalls the earlier days more bluntly: "We burned millions of dollars on customer pilots, many projects literally had negative-infinity margins, because we did them for free."

Why does free validation hold up? Three ledgers add up.

The first ledger: start with acquisition. Traditional enterprise software acquires customers through a sales army: travel, drinks, bids, drawn-out negotiations—money spent heavily and uncontrollably. The Bootcamp changes the play: don't persuade the customer, let the customer persuade himself—an executive hands-on tapping on a system running his own data beats a hundred slides. Palantir's sales cycle compressed from nine to twelve months down to weeks, and its U.S. commercial revenue grew 137% year-over-year in a single quarter, with the free Bootcamp the acknowledged main engine. **Free validation is not a cost; it is the substitution of engineering spend for sales spend—and engineering spend can accrete into product, while sales spend cannot**.

The second ledger: the power of risk pricing. McGrew's advice is that early-stage startups should proactively take on the risk: "Pay us once it works." The confidence comes from faith in the product, and from a cold calculation—the biggest doubt an enterprise customer has about a new vendor is "can you actually deliver," and free validation is the solvent for that doubt. Once doubt dissolves, subsequent pricing power returns to your hands: the customer is no longer buying "a bet," but "a certainty already verified before his eyes"—and certainty commands a premium.

The third ledger: even failure must be made to pay. Free validation inevitably produces failures—this is portfolio common sense. The difference lies in where the failure goes: traditional sales failure leaves a pile of travel invoices; FDE-style free validation failure leaves an understanding of an industry, a batch of reusable components, a set of evaluation data. As long as you build the feedback mechanism of Chapter 7, even failed validation is depositing into the company's account.

But free validation has one fatal prerequisite: it must be "graduation-based," not "indefinite-residency-based." That leads to the next section.

## 6.2 The End of the Free Lunch

Free is the means; charging is the purpose; the conversion design is life or death. In the FDE world, "validation-to-paid" is the most critical final kick, and also the most accident-prone link in the industry—the "POC purgatory" repeatedly invoked in earlier chapters mostly fails not because of technical failure, but because **no mechanism for "ending" was designed**.

From free to paid, there are five switches that must be designed up front.

- **Switch one:** Graduation criteria before kickoff. The principle emphasized in Chapter 2 lands here: the validation project writes out, in black and white at launch—cycle cap, acceptance metrics, the agreement to enter commercial negotiation upon meeting the bar. Palantir's Bootcamp takes this design to its extreme: on the day-4-to-5 schedule, "demo" is immediately followed by "decision." Conversion is not an after-the-fact event; it is a slot on the schedule.

- **Switch two:** Make the boundary of free explicit. The customer must clearly know: free until which day, covering what scope, and how the excess is priced. A blurry free boundary breeds the expectation that "free is the norm," and when the charging day arrives, the other side's feeling is not "starting to pay" but "being fleeced"—the same amount of money, different expectations, completely different experiences.

- **Switch three:** Turn the internal champion into a salesperson. After validation succeeds, the one who actually knocks on the budget door is not your sales, but the champion inside the customer who witnessed the value with his own eyes. Your job is to arm him: a one-page value report (numbers, comparisons, colleague testimony), a Q&A set for handling finance's scrutiny, and an opportunity-cost statement for "if we don't continue." The internal trust earned by an insider is something an outsider can never reach.

- **Switch four:** Lay the price anchor early. During the free period, start talking about value—"this system freed up about 120 person-hours for you this month." When the value narrative runs through the free period, the quote that appears later already has an anchor in the customer's mind; if the free period only talks features and never value, the quote is a sudden shock.

- **Switch five:** Design a graceful exit for "non-conversion." Not every validation should convert; a forced conversion is a poison contract. For customers who miss the bar or whose timing is wrong, offer a "pause but retain" option: retain data and configuration, agree on restart conditions, keep light contact. The enterprise market is small; today's "let's talk next year" is often the year-after's big deal—provided you make the farewell professional.

Taken together, the five switches amount to one sentence: **design "free-to-paid" not as a perilous leap, but as a gentle slope**.

## 6.3 Outcome-Based Pricing: Customers Pay for the Value They Receive

In ad placement there is a high-efficiency play: track user behavior, target precisely. FDE's pricing principle is just as direct: **however much value the customer receives, that's how much you charge**.

The dominant pricing model of the online-software era is per-seat—paying for the "right to use." This logic is being eroded in the AI era: when an agent can do the work of 10 people, per-seat pricing becomes a joke—are you going to pay for 0.1 of a seat? Hence the rise of outcome-based pricing, and Sierra charging per "resolved session" is the most conspicuous specimen: the customer doesn't pay for software; he pays for "a problem that got solved."

The evolution chain of outcome-based pricing has four tiers—the higher you go, the closer to value, and the harder to execute.

By usage: billed by the model's metering unit, call count, or processing volume. The advantage is clear and measurable; the disadvantage is that it tracks cost rather than value—high usage may mean high value, or it may mean system inefficiency. Per-call billing for model interfaces is the industry's baseline, but application-layer companies rarely make it their sole pricing.

By action: billed for "completing one return-processing task" or "generating one compliance report." A step above usage—the pricing unit begins to carry business meaning.

By result: billed for "successfully resolved session" or "one bad debt recovered." Sierra's per-resolution pricing and the loss-sharing model of some risk-control firms sit here. The execution difficulty is attribution—determining "resolved" requires a standard both sides accept (which is exactly the commercial use of the Chapter 4 evaluation system: a technical evaluation system is simultaneously a billing infrastructure).

By value share: take a cut of the financial value created for the customer—cost saved, revenue recovered, capacity freed. This is the ultimate form closest to value, and the hardest: it requires the customer to open financial data, requires counter-cyclical trust, requires extraordinary value-measurement capability. It currently appears only in select, deeply-bound, high-deal-size scenarios.

Companies that charge by result must dare to make results public. The customer data Sierra has published forms an interesting report card: property-management company Funnel Leasing, 94% self-service resolution rate; fintech Ramp, 90%; mattress brand Casper, 74% with customer satisfaction up over twenty percent; WeightWatchers, about 70%, satisfaction 4.6 out of 5; even the bottom-performing customer sits at 64%.

Third-party price estimates also surface: annual contract floor starts around $150,000, first-year budget including deployment commonly runs $200,000 to $350,000, large customers can reach the million-dollar-per-year level; per successful resolution, the reported price is $1 to $2. In other words, **every cent the customer pays corresponds to one "problem actually got solved"**—Sierra dares to charge this way because its evaluation system can prove "solved" to the customer. Pricing method and evaluation system are two faces of the same coin here. (Sources in Appendix C.)

When choosing a pricing tier, there is one plain principle: **the closer the pricing unit is to customer value, the higher your pricing ceiling—and the higher your measurement and trust cost**.

For readers of the China market, a realistic footnote: domestic enterprise customers' acceptance of "subscription" remains limited to this day; "perpetual license plus implementation" and "acceptance-based project payment" are still mainstream. Pricing for FDE in China usually calls for an East-West blend: phase-based delivery-and-acceptance (adapting to project-based habits) + value metrics written into acceptance criteria (injecting outcome-based pricing genes). Pure subscription is the ideal here; the hybrid is the path that actually works.

## 6.4 Deepening the Installed Base: From One Department to a Wide Net

There is an iron law in the enterprise market: **the biggest revenue growth lies not in new customers, but inside existing customers**. The industry measures this with Net Revenue Retention; strong FDE-driven companies stand above 120% year in, year out—without signing any new deals, installed-base revenue naturally grows two-tenths. Palantir's commercial story is, at its core, a story of installed-base deepening: from one intelligence team to a whole agency, from one factory to a whole group, from government departments to a commercial empire.

For the play of installed-base deepening, the industry has a vivid phrase: "land and expand." Landing relies on the previous five chapters; expansion runs in three directions.

- **Horizontal | from one team to adjacent teams:** You helped the customer-service department build a smart ticketing system; the after-sales department next door and the technical-support department are your easiest next wins. In horizontal expansion, the most persuasive evidence is right inside the customer: same company, same data environment, the colleague from the next department speaking from personal experience—this is the lowest-resistance expansion, almost no trust to rebuild. Harvey's expansion inside law firms runs exactly to this beat: cut in with a single practice group, six months of live validation, expand horizontally across the whole firm.

- **Vertical | from the execution layer to the decision layer:** The initial project usually serves frontline operators; vertical expansion is to carry the value chain upward: analytics and alerts for middle managers, decision cockpits for executives. The point of vertical expansion is not only revenue, but safety—Chapter 5 said it: a system loved only by the grassroots has no defender at budget season; only a system that has entered executive view enters the organization's "fixed-asset" column.

- **Deep | from an auxiliary tool to a core process:** The deepest expansion is to turn the system from "a helpful tool" into "a process you can't live without"—from "giving advice" to "executing business actions," from "optional" to "part of the standard operating procedure." Every step of deep expansion brings greater responsibility and a higher trust threshold, but it also builds the deepest moat: replacing a tool only means swapping software; replacing a system embedded in a process is surgery.

Two "land and expand" report cards are worth reading side by side. Harvey started from the single law firm Linklaters; by 2026 its users exceeded 100,000 lawyers across 1,300 organizations, covering most of the Am Law 100, more than 500 enterprise legal teams, and 50 asset-management firms, spread over 60 countries; annual recurring revenue rose from about $100 million in August 2025 to about $190 million in January 2026—nearly doubling in five months. Industry surveys show 68% of responding law firms already use Harvey's agents in production, with deep users saving 11 hours a week on average. Valuation followed with four jumps in a single year: $3 billion, $5 billion, $8 billion, $11 billion. (Sources in Appendix C.) And Palantir's Net Revenue Retention of 139% was already covered in section 5.1—together the two tables show the ultimate form of installed-base deepening: **new signings come from marketing; growth comes from the installed base**.

All three directions share one rhythm of discipline: **expansion must be pulled by value, not pushed by sales targets**. The health-score system of Chapter 5 has an offensive use here: departments with deep usage and clear value are the next targets for expansion; and the moment inside the customer organization when "someone sees another department using it well and comes asking on his own" is the golden window for expansion—at that point you are not selling, you are responding to demand.

## 6.5 How Anthropic and FIS Play the Financial-Services Hand

This chapter embeds a complete case: a set of partnerships with the most specimen value in the 2026 enterprise-AI market—Anthropic and fintech giant FIS co-building a financial-crime agent. It is a near-perfect demonstration of this chapter's entire methodology.

First, the hand. FIS is a giant of global financial-technology infrastructure, serving the core systems of banks worldwide. In May 2026, FIS released a financial-crime-detection agent; the first customers were Bank of Montreal and Amalgamated Bank. What this agent does: compress anti-money-laundering investigations from hours down to minutes—automatically assembling evidence across banking core systems, presenting it to the investigator ranked by risk, fully auditable and traceable end to end.

Next, the play—four moves, each interlocking.

Move one, embed rather than deliver. Anthropic sent its applied-AI team and forward deployment engineers to embed directly inside FIS, co-designing with FIS specialists. Note: FIS is not the end customer, but a channel-grade partner—Anthropic's agent will ride into the hundreds of banks behind FIS through FIS's products. This is one deal, and also the gateway to a hundred deals.

Move two, knowledge transfer as a selling point. The official statement deliberately writes that the embedding's goal includes "transferring knowledge, so FIS can independently build and extend more agents going forward." Writing "teach the customer" into the contract—this is both a preemptive answer to "vendor lock-in" worries (echoing the "vendor withdrawal" of 5.1), and an advanced form of binding: when a customer's tech stack grows on your methodology, the cost of separation only rises.

Move three, auditability as a product feature. In financial-compliance scenarios, regulators require every decision to be replayable. Anthropic made "fully auditable, fully traceable" the agent's core selling point, not an add-on—compliance is not a constraint, it is differentiation. This gives every regulated industry a template: **what others see as compliance cost, you can make your pricing rationale**.

Move four, ecosystem amplification. The same day the FIS case went public, Anthropic also announced connectors and "ready-to-use" templates for financial services, plus more than a dozen similar partnerships—a single case, immediately abstracted into replicable product assets. In the same period, the market also carried news that it was forming an enterprise-AI services company with Blackstone, reportedly at a scale of about $1.5 billion, squaring off directly with OpenAI's deployment company. (Sources in Appendix C.)

Finally, the dark line of this hand—the wariness of the CIOs. A technology media outlet serving enterprise CIOs quoted a strategy officer at a consulting firm with this reminder: "The most structural problem in this model is who actually pays for the forward-deployment cost—a question CIOs should ask, but mostly don't." A Gartner analyst predicted that before 2028, 70% of enterprises will be forced to abandon such solutions because of vendor cost and skills hollowing-out. This is a reminder: the revenue design of the FDE model harbors a long-term balance—**the value you create must consistently exceed the cost and dependency your presence brings. Earn the spread on value, and the business lasts; extract rent on dependency, and it eventually turns on you**.

## 6.6 Turning Punishment into Reward: The Psychology of Usage and Expansion Pricing

Good mechanism design can flip a punishment into a reward. In the FDE business model, this wisdom applies to one subtle scenario: **what to do when a customer's usage exceeds expectations**.

The crude approach is "punitive overage": once the contract volume is exhausted, the excess is billed at a punitive high price, or the system directly throttles and slows down. This was common in the early days of cloud computing, and the results were disastrous—customers suppressed their own usage to avoid going over, usage fell, value shrank, and renewal was lose-lose. **What you punish is exactly the thing you most want: deep usage**.

The "turn punishment into reward" design idea is to redefine "overage" as "a medal of growth." Three concrete techniques.

Technique one: tiered pricing—the more you use, the cheaper it gets. The higher the usage, the lower the unit price—turning "overage anxiety" into "volume-driving momentum." This is the same logic as tiered data pricing in telecom, but it must be made clear in the contract: what the customer sees is not "pay more for using more," but "using more means a lower unit price, we've gotten a better deal." Same bill, different narrative, different relationship trajectory.

Technique two: overage alert + proactive upgrade. When the system detects the customer is about to go over, it doesn't quietly keep billing—it proactively comes to the door: "Your usage is growing fast; at this rate, upgrading one tier would save 15%." Turn the billing event into a consultative-sales opportunity—what the customer feels is being looked after, not being played. This move also has a hidden payoff: it forces your team to keep watching the health of customer usage, naturally converging with the Chapter 5 health-score system.

Technique three: give the customer the credit for "what was saved." When usage optimization (model tiering, caching, batching) lowers cost, proactively account that saving to the customer: "This quarter, through architecture optimization, we saved you about X yuan." In the eyes of the customer's finance lead, a vendor that proactively helps the customer save money and a vendor waiting for the customer to go over are two different species—the trust premium the former harvests at renewal far exceeds the money saved.

Beneath pricing psychology lies a plain truth: **the pricing structure tells the customer "what kind of relationship we have" every single day**. A punitive structure says "we're watching you"; a reward structure says "we're growing with you." The pricing method answers a question in the customer's mind every day: whose side are you really on? The customer rereads that answer every day before renewal.

## 6.7 Building a Value-Measurement System to Win Big with Little

This chapter closes with a piece of infrastructure work: **build a value-measurement system that runs through every customer delivery**—turning "how much value we created for the customer" from impression into data, and from data into asset.

The things earlier chapters kept returning to converge in this system: Chapter 2's "economic-viability test" is its input (the value hypothesis at project kickoff), Chapter 4's evaluation system is its micro-foundation (quality data), Chapter 5's health score is its operating interface (customer-relationship data), and this chapter's pricing and expansion are its commercial outlet (revenue data). Put together, it helps you do four things.

- **For the customer | the evidence base at renewal and expansion:** Every quarterly review, every renewal negotiation, every upgrade proposal is backed by the value report this system outputs—hours saved, error rate down, throughput up, and the corresponding financial figures translated. Chapter 5 said value must be re-proven again and again—this system is the pipeline for that "proof." **A renewal negotiation armed with data and one armed with feel close deals on different orders of magnitude**.

- **For the company | the physical exam for delivery quality:** Aggregating value data across customers, you can answer questions on which the model's survival turns: which scenarios have the highest value density (where to aim the sales firepower)? Which customers carry the highest delivery cost (does pricing or play need adjusting)? Which deployments are creating value, and which are just spinning (does resource need reconfiguring)? Without this system, your answers to these questions are all guesses.

- **For the product | the amplifier of feedback intelligence:** Value data combined with usage data is the hardest basis for product decisions: which feature produces the most value (invest more), which feature no one uses (cut it decisively), which scenario keeps getting customized (the signal for platformization). This connects to the theme of Chapter 7—the value-measurement system is, in essence, the dashboard of the "field-to-product" feedback pipeline.

- **For the market | the material library for trust marketing:** "Chemical usage down 70%," "investigation time from hours to minutes"—these numbers that made the whole industry remember all come from the accumulation of the value-measurement system. The highest form of case marketing is not storytelling, it's showing data; and data doesn't materialize on the negotiating table out of thin air—it has to be collected from day one of delivery.

For building this system, three practical pieces of advice. First, collect the baseline from day one—without the before-transformation data, there is no proof of after-transformation value, and the baseline only exists at the moment the project launches; miss it and it's gone forever. Second, the metrics must be co-built with the customer—a metric he doesn't accept has no negotiating force no matter how nice the numbers look; the moment agreement is reached at the kickoff meeting, the metrics become your shared language. Third, restrain the number of metrics—three to five core metrics per customer is plenty; once they multiply, it's as if there are none.

The revenue chapter ends here. From the acquisition economics of free validation, to the pricing revolution of outcome-based pricing, to the expansion rhythm of installed-base deepening, to the infrastructure of value measurement—every thread points to one conclusion: **FDE-model revenue is not the spoils of sales, but the shadow of value. The greater the value you create, the longer the shadow**.

The next chapter is the book's "last mile": how to make all of this not depend on individual heroism, but accrete into replicable organizational capability—scaling replication.
