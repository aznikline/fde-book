---
title: "Appendix A: Key Metrics for FDE"
order: 9
---

This appendix lays out the metric system for the full FDE chain of work, organized into four layers: delivery, customer, business, and organization. With metrics, quality matters more than quantity—locking onto three to five core metrics per customer project beats a dashboard plastered across an entire wall.

## I. Delivery-Layer Metrics (Is the Project Done Right?)

**TTV (Time to Value):** The time from entering the account to the customer's first measurable value. The lifeline metric of the FDE model. Reference benchmarks: validating a Minimum Viable Deployment should take weeks (2 to 6 weeks), and a full deployment months (1 to 4 months). A steadily lengthening TTV is the first signal that the methodology or the platform base is in trouble.

**POC Conversion Rate:** The proportion of validation projects that proceed to paid deployment. Palantir's Bootcamp lifted this number from the early 5% to 10% to roughly 75% in the company's disclosed figures (other accounts say certain sessions run even higher)—it measures two things at once: "customer screening quality" and "delivery quality." Too low a conversion rate means intake screening failed; too high (approaching 100%), and you should check whether you're only taking deals with no challenge.

**Evaluation Pass Rate:** The proportion of AI outputs that pass the business evaluation set, along with its time-series trend in production. An early-warning alarm for quality drift.

**Deployment Frequency and Rollback Rate:** Hard metrics for iteration speed. A healthy deployment cadence should keep high-frequency small steps (weekly or even daily), with rollback rate low and stable.

**Defect Escape Rate:** The proportion of defects only discovered after go-live. It measures the completeness of the testing and evaluation system, not the engineers' skill level.

## II. Customer-Layer Metrics (How Is the Customer Doing?)

**Activation Rate:** The proportion of the target user base that forms stable usage habits. Note the denominator is "target user base," not "system account count." MIT's report gives an industry warning line: only about four in ten enterprises provide employees with official AI tool subscriptions—if your activation rate stays low long-term, the deployment is nominally alive but actually dead.

**Usage Depth:** How many people use the key features (how many scenarios they're used in), the distribution of usage frequency (punch-the-clock usage vs. workflow embedding), and the emergence of self-service exploration behaviors (users starting to discover new use cases on their own—this is the most precious signal).

**Health Score:** A composite of four categories of signals—usage, value, relationship, and business (see Section 5.6). Key discipline: a full sweep every week; once it drops below the warning line, an intervention workflow is triggered automatically.

**Supporter Coverage:** The number and hierarchical distribution of active allies within the customer organization. A single point is high-risk; three points form a network.

**Using NPS with Caution:** Net Promoter Score (NPS, the metric that asks "how likely are you to recommend us to others") has limited reference value in enterprise settings—small samples, easily politicized. A more reliable alternative is "early inquiry on renewal intent": two quarters before expiry, ask the supporter directly, "If we renewed today, would you renew?"

## III. Business-Layer Metrics (Is the Business Worth It?)

**NRR (Net Revenue Retention):** The annual change in revenue from existing customers (including churn, downgrades, and expansion). The chief verdict on the FDE business model. Passing line 100%, excellent line 120%. Companies with NRR above 120% have an internally driven growth engine.

**Delivery Gross Margin:** A single customer's revenue minus the direct costs of delivery (labor, travel, cloud resources). The passing line for the FDE model floats with the degree of platformization: in the pure-labor delivery phase it may be only 20% to 40%, and once platform reuse kicks in it should climb above 60%. How fast the margin rises, more than its absolute level, tells whether the model is working—an FDE that doesn't rise is a consulting firm.

**Customization Decay Rate:** McGrew's touchstone—the customization work for the Nth customer should be significantly less than for the 1st. If customization doesn't drop for three customers in a row, immediately review the field-to-product feedback mechanism.

**Sales Cycle:** Time from first contact to contract signing. Palantir used the Bootcamp to compress it from 9 to 12 months down to weeks. It is a composite readout of acquisition efficiency and the depth of the trust asset.

**CAC Payback Period:** The time it takes for customer acquisition cost (CAC, including the investment in free validation) to be recouped through contract gross margin. The FDE model is almost always ugly early on; what matters is seeing the trend of it shortening as cases accumulate.

**LTV/CAC:** The ratio of customer Life Time Value (LTV) to customer acquisition cost. The health line for enterprise business is generally above 3; in the FDE model, because acquisition costs are front-loaded, the early ratio may be below 2 and must be read alongside Net Revenue Retention to make sense.

## IV. Organization-Layer Metrics (Can the Team Go the Distance?)

**Field-to-Product Feedback Rate:** The number of outputs per unit of time that settle from the field into components or platform capabilities (components committed to the library, manual updates, platformization proposals). What this metric measures is whether the "soul organ" of the FDE model is still beating.

**Delivery Asset Reuse Rate:** The proportion of existing components, templates, and checklists reused in new projects. The reuse rate is a composite readout of the three levels of replication leverage (Chapter 7), and the target should rise quarter over quarter.

**Per-FDE Output:** The annual revenue supported per Forward Deployed Engineer. It is the general ledger of scale: the ceiling of a pure-labor model is obvious, and after platformization it should keep rising.

**Team Endurance Indicators:** Travel intensity (days on the road per month), on-call load, attrition rate, and burnout warning signals. On Reddit, the biggest gripe among FDE practitioners is travel and endurance—if the team burns out, every metric above is just fireworks.

## Usage Recommendations

1. Lock each customer project onto 3 to 5 "core metric combinations": typically one value metric + one usage metric + one relationship metric.
2. Collect baseline data on day one of the project launch—miss it, and it's gone forever.
3. Build metrics jointly with the customer and get mutual sign-off, otherwise they carry no weight at the renewal table.
4. Service the metric system itself every six months: delete the ones nobody looks at, add the ones that keep getting asked about.
