---
title: "Payment Model Selection Decision Framework"
description: "Comprehensive guide for choosing between traditional acquiring, ISO, ISV, and PayFac models with decision trees, case studies, and ROI analysis"
sidebar_position: 2
sidebar_label: "Decision Framework"
keywords:
  - payment model selection
  - PayFac decision
  - ISV vs PayFac
  - payment strategy
  - build vs buy PayFac
  - PFaaS evaluation
  - payment revenue models
  - vertical SaaS payments
  - marketplace payments
  - embedded payments
  - payment ROI analysis
  - payment business case
  - Toast payments
  - Stripe model
  - Shopify Payments
  - embedded finance
---

# Payment Model Selection Decision Framework

## Overview

Choosing the right payment processing model is a critical strategic decision that impacts revenue, operational complexity, regulatory burden, and customer experience. This guide provides a comprehensive framework for evaluating Traditional Acquiring, ISO, ISV, and PayFac models based on your business type, volume, resources, and strategic objectives.

---

## 3. When to Choose Each Model: 2025 Decision Framework

### Traditional Acquiring

**Choose Traditional Acquiring When:**
- **High Volume Merchants:** Processing $1M+ monthly ($12M+ annually)
- **Large Enterprises:** Established businesses with dedicated finance/operations teams
- **Complex Needs:** Multi-currency, custom routing, specialized merchant categories
- **Negotiating Leverage:** Volume justifies custom pricing (interchange plus 5-15 bps)
- **Direct Control:** Want direct relationship with acquiring bank
- **Industry Requirements:** Some industries require direct merchant accounts (adult, firearms, cannabis-adjacent)

**Volume Thresholds:**
- Minimum to justify: $500K-$1M annual volume
- Optimal: $5M+ annual volume
- Custom pricing typically at: $10M+ annual volume

**Resource Requirements:**
- Dedicated finance/accounting team for reconciliation
- PCI compliance resources (QSA engagement for Level 1/2 merchants)
- Legal team for contract negotiation
- 30-90 days for implementation and onboarding

**Growth Considerations:**
- Can negotiate better rates as volume increases
- May require multiple acquiring relationships for redundancy
- International expansion requires regional acquiring relationships

**Real-World Examples:**
- **Amazon:** Direct acquiring relationships with Chase, First Data (now Fiserv)
- **Walmart:** Multiple direct acquirer relationships globally
- **Large e-commerce brands:** Wayfair, Chewy, etc.

---

### ISO Model

**Choose ISO Model When:**
- **Sales-Focused Business:** Core competency is merchant acquisition, not technology
- **Local Market Expertise:** Regional presence in specific industries or geographies
- **Relationship-Driven:** Merchants value personal service and relationship management
- **Low Capital:** Want payment business without $500K+ infrastructure investment
- **Partnership Approach:** Willing to share economics for faster time-to-market
- **No Tech Development:** Don't want to build payment technology infrastructure

**Volume Thresholds:**
- Can start with 10-50 merchants
- Profitable at 100-500 merchants depending on merchant sizes
- Top ISOs have 5,000-50,000+ merchant portfolios

**Resource Requirements:**
- $10K-$100K startup capital (registration, CRM, marketing)
- Sales team (commissioned or employed)
- Relationship with acquirer(s) - requires vetting and approval
- Basic business operations (contracts, support)

**Revenue Expectations:**
- **Residual Split:** 10-50% of acquirer's margin (varies by merchant risk/volume)
- **Example Economics:**
  - Merchant processing $50K/month at 2.9% + $0.30
  - Gross revenue: ~$1,500/month
  - Interchange + assessments: ~$1,250
  - Acquirer margin: ~$250
  - ISO residual (30% split): ~$75/month per merchant
  - Need 200+ merchants for $15K monthly residual income

**Growth Considerations:**
- Build merchant portfolio for recurring residual income
- May evolve into ISV by acquiring or building software
- Can sell portfolio to larger ISO/acquirer (typical 24-36x monthly residuals)
- Limited control over merchant experience (depends on acquirer)

**Real-World Examples:**
- **North American Bancard (NAB):** One of largest ISOs in North America
- **Total Merchant Services:** Omaha-based ISO with 100K+ merchant portfolio
- **TSYS Merchant Solutions:** Combination of direct acquiring and ISO relationships
- **Local/Regional ISOs:** Thousands of small ISOs serving specific markets

---

### ISV Model

**Choose ISV Model When:**
- **Software-First Business:** Core product is SaaS platform, payments are enhancement
- **Vertical SaaS:** Serving specific industry with deep domain expertise (dental, salons, restaurants)
- **Existing Merchant Base:** Already have customer relationships and sticky software
- **Payment Revenue Goal:** Want 20-40% of revenue from payments without full PayFac burden
- **Moderate Control Needed:** Need better experience than pure referral but not full ownership
- **Faster Than PayFac:** Want payment revenue in 3-6 months vs 12-18 months for PayFac

**Volume Thresholds:**
- Viable with 100-500 software customers
- Payment revenue becomes significant at 1,000+ merchants
- Optimal: 5,000+ merchants with $10K-$100K monthly processing each

**Resource Requirements:**
- $50K-$500K for integration and partnership (varies widely)
- Engineering team for payment API integration (3-6 months of work)
- Support team trained on payment issues
- Partnership with ISO, acquirer, or PayFac-as-a-Service provider

**ISV Partnership Models:**

**Model 1: Referral ISV**
- Refer customers to payment partner
- Receive referral fees or residual split (10-30% of margin)
- Minimal integration (redirect to partner application)
- Lowest risk, lowest control, lowest revenue

**Model 2: Integrated ISV**
- Deep API integration with payment partner
- Co-branded experience
- Residual split (20-50% of margin)
- Moderate risk, moderate control, good revenue

**Model 3: ISV-as-PayFac (using PFaaS)**
- Become registered PayFac using infrastructure provider (Stripe Connect, Finix, Infinicept)
- Full control over merchant experience
- Keep 60-80% of payment margin (pay PFaaS provider 20-40%)
- Higher risk/compliance burden, highest control, highest revenue

**Revenue Expectations:**
- **Example: Integrated ISV with 2,000 merchants**
  - Average merchant: $30K monthly volume
  - Total portfolio: $60M monthly ($720M annually)
  - Effective rate: 2.75%
  - Gross payment revenue: $1.65M monthly
  - ISV residual (40% split): $660K monthly ($7.9M annually)
  - Compared to SaaS revenue: If charging $200/month SaaS fee = $400K monthly ($4.8M annually)
  - **Payment revenue can exceed software revenue**

**Growth Considerations:**
- Can evolve into full PayFac as volume grows
- Software stickiness reduces merchant churn (payment becomes embedded)
- Payment revenue smooths SaaS revenue volatility
- Merchant data improves software product (transaction insights)

**Real-World Examples:**
- **Toast (Restaurant POS):** Started as ISV, became PayFac, now publicly traded - payment revenue 70%+ of total
- **Mindbody (Wellness/Salon software):** Integrated payments generate significant portion of revenue
- **ServiceTitan (Home Services):** PayFac model embedded in field service platform
- **Procore (Construction Management):** Integrated payments for contractor payments
- **Housecall Pro:** Field service SaaS with embedded PayFac payments

---

### PayFac Model

**Choose PayFac Model When:**
- **Platform/Marketplace Business:** Facilitating commerce between multiple parties (Uber, Etsy model)
- **Instant Onboarding Required:** User experience demands immediate payment acceptance
- **Full Experience Control:** Brand and UX control is critical competitive advantage
- **Large Sub-Merchant Volume:** Hundreds to thousands of small merchants/sellers
- **Payment Revenue Core:** Payments are primary or significant revenue driver
- **Long-Term Investment:** Can commit $2M+ and 12-24 months to build properly
- **Risk Management Capability:** Have or can build sophisticated fraud/risk operations
- **Compliance Readiness:** Can handle rigorous regulatory and network oversight

> **WARNING: The "PayFac Trap" for Early-Stage Companies**
>
> Many startups become PayFac too early and regret it. Anti-pattern to avoid:
> - SaaS company at $2M ARR with 200 customers
> - Sees payment revenue opportunity
> - Builds/buys PayFac infrastructure
> - **Result:** Payment engineering consumes 50%+ of resources, compliance
>   distracts from core product, company churns before hitting profitable scale
>
> **Better Pattern:**
> 1. Start with ISV referral (0 investment)
> 2. Evolve to integrated ISV (moderate investment)
> 3. Use PFaaS when you hit $10M+ monthly volume
> 4. Build custom only at $100M+ monthly OR if payments are existential to business

**Volume Thresholds:**
- **Minimum viable:** $5M-$10M monthly aggregate volume across sub-merchants
- **Profitable:** $25M-$50M monthly volume
- **Optimal:** $100M+ monthly volume
- **Economics improve significantly:** $500M+ monthly volume

**Resource Requirements:**

**Capital Requirements:**
- **Technology Build:** $500K-$2M (risk engine, KYC/KYB, ledger, reporting, compliance tools)
- **Operational Reserves:** $500K-$3M (sponsor bank may require reserve fund)
- **Ongoing Reserves:** 5-10% of monthly volume (rolling reserve for chargebacks/fraud)
- **Working Capital:** 2-7 day settlement lag means funding sub-merchants before receiving funds
- **Total Minimum:** $1M-$5M to launch properly

**Organizational Requirements:**
- **Engineering Team:** 5-10 engineers for core payment infrastructure
- **Risk/Compliance Team:** Dedicated risk analysts, compliance officers, AML specialist
- **Support Team:** Payment-specialized customer support (24/7 for many models)
- **Finance Team:** Reconciliation, treasury management, reserve management
- **Legal Team:** Card network rules, state licensing, sponsor bank relationship
- **Typical Headcount:** 15-30 people for payment operations alone

**Timeline:**
- **Sponsor Bank Relationship:** 3-6 months to establish and negotiate
- **Network Registration:** 2-4 months (Visa/Mastercard approval process)
- **State Licensing:** 6-18 months (Money Transmitter Licenses in 40+ states)
- **Technology Build:** 6-12 months (if building from scratch)
- **Total Time to Launch:** 12-24 months from decision to first transaction

**Revenue Expectations:**
- **PayFac keeps full merchant margin minus processor costs**
- **Example Economics:**
  - Sub-merchant effective rate: 2.9% + $0.30
  - Interchange + assessments: ~2.0% + $0.10 (blended)
  - Processor costs: ~0.15% + $0.05
  - **PayFac margin: ~0.75% + $0.15** (~75-90 bps)

- **Volume-Based Example:**
  - $50M monthly volume
  - 0.80% net margin
  - **$400K monthly payment revenue**
  - **$4.8M annual payment revenue**

- **At Scale:**
  - $500M monthly volume
  - 0.85% net margin (improves with volume)
  - **$4.25M monthly payment revenue**
  - **$51M annual payment revenue**

**Growth Considerations:**
- Economics improve dramatically with scale (processor pricing tiers)
- Value-added services increase revenue (instant payouts, lending, expense management)
- Network effects: more sub-merchants = better fraud detection = lower loss rates
- Can become acquiring bank with sufficient scale (rare, requires $100M+ capital)

**Real-World Examples:**

**Pure PayFacs:**
- **Stripe:** Dominant internet PayFac, $1T+ annual volume
- **Square:** Card-present PayFac for SMBs, $200B+ annual volume
- **PayPal/Braintree:** Legacy PayFac model, evolved from different origin
- **Adyen:** Global PayFac/acquirer hybrid, serves enterprise platforms

**Platform PayFacs:**
- **Shopify Payments:** Powers merchant payments on Shopify platform
- **Etsy Payments:** Facilitates seller payments on marketplace
- **DoorDash/Uber:** Facilitate merchant/driver payments (complex multi-party)
- **Airbnb:** Host payment facilitation

**Vertical SaaS PayFacs:**
- **Toast:** Restaurant payment facilitation ($100B+ annual volume)
- **ServiceTitan:** Home services payment platform
- **Mindbody:** Wellness industry payment facilitation
- **Procore Payments:** Construction payment facilitation

**PayFac-Enabled (using PFaaS):**
- **Thousands of smaller platforms** using Stripe Connect, Finix, Infinicept, Payrix, Fortis
- Can launch in 3-6 months vs 18-24 months
- Lower capital requirement ($100K-$500K)
- Share economics with PFaaS provider

---


## 8. Real-World Examples and Case Studies

### Traditional Acquiring Examples

**Amazon**
- **Model:** Direct acquiring relationships with multiple banks
- **Volume:** $500B+ annually
- **Acquiring Partners:** JPMorgan Chase, Fiserv (First Data), regional acquirers globally
- **Why This Model:**
  - Volume justifies custom pricing (interchange plus 3-5 bps)
  - Complex needs (multi-currency, global acquiring, custom routing)
  - Direct control over payment operations
  - Negotiating power with networks for custom programs

**Walmart**
- **Model:** Direct acquiring, also operates own payment network (Walmart Pay)
- **Volume:** $600B+ annually (total sales, significant portion card payments)
- **Strategy:** Minimize payment costs through direct relationships and proprietary solutions
- **Why This Model:**
  - Scale justifies building proprietary infrastructure
  - Cost savings of 10-20 bps = hundreds of millions annually

**Large E-commerce Brands (Wayfair, Chewy, Zappos)**
- **Model:** Direct acquiring with major processors
- **Typical Setup:** Cybersource, Fiserv, or Worldpay as processor/acquirer
- **Why This Model:**
  - $100M-$1B+ annual volume
  - Sophisticated fraud management needs
  - Custom integration requirements
  - Better economics than platform solutions at their scale

---

### ISO Examples

**North American Bancard (NAB)**
- **Model:** One of the largest ISOs in North America
- **Portfolio:** 100,000+ merchants
- **Volume:** $50B+ annually
- **Business Model:**
  - Sales force of 1,000+ agents
  - Partner with multiple acquirers (gives merchants choice)
  - Focus on SMB merchants ($50K-$5M annual volume)
  - Revenue: Residuals from acquirer partnerships
- **Why Successful:**
  - Strong sales culture and agent network
  - Exceptional merchant service reputation
  - Technology investments (proprietary gateway, reporting tools)
  - Vertical specialization (restaurants, retail, etc.)

**Total Merchant Services (TMS)**
- **Model:** Omaha-based ISO with 100K+ merchant portfolio
- **Strategy:** Relationship-driven sales, regional focus
- **Why This Model Works:**
  - Low overhead compared to building technology
  - Recurring residual income (merchants stay for years)
  - Can sell portfolio at 24-36x monthly residuals (exit strategy)

**Agent ISOs (Thousands of Small ISOs)**
- **Typical Profile:** 1-10 person operation, 50-500 merchants
- **Annual Revenue:** $100K-$1M in residuals
- **Model:** Local sales, personal relationships, industry specialization
- **Example Economics:**
  - 300 merchants × $100 average monthly residual = $30K/month = $360K/year
  - Operating costs: $100K (salaries, marketing, office)
  - Net profit: $260K (73% margin)
- **Why This Works:**
  - Low barrier to entry
  - Scalable with sales effort
  - Passive income once portfolio is built

---

### ISV Examples

**Toast (Restaurant POS) - Evolved to PayFac**
- **Started As:** ISV with payment integration (2012-2015)
- **Evolution:** Became PayFac (2015-present)
- **Current Model:** Full PayFac with proprietary hardware
- **Volume:** $100B+ annually (2024)
- **Revenue Split:** ~70% payment revenue, 30% software/hardware
- **Why Evolution Happened:**
  - Payment revenue potential exceeded SaaS revenue
  - Control over full merchant experience
  - Faster onboarding critical for sales cycle
  - Higher valuation multiples (fintech vs SaaS)
- **Public Market:** IPO 2021, $10B+ valuation

**Mindbody (Wellness/Salon Software)**
- **Model:** Integrated ISV using payment partnerships
- **Strategy:** Deep integration with payment partners (previously PayPal, now multiple)
- **Why Not Full PayFac:**
  - Focus on software product excellence
  - Payment revenue meaningful but not core
  - Complexity of multi-location, multi-service provider model
- **Revenue:** Payments contribute 30-40% of total revenue

**ServiceTitan (Home Services Platform)**
- **Model:** PayFac model (using Stripe Connect infrastructure)
- **Strategy:** Embedded payments critical for contractor/customer transactions
- **Volume:** $10B+ annually
- **Why PayFac:**
  - Instant contractor onboarding critical
  - Payment data improves software (job completion, customer satisfaction)
  - High-value transactions ($500-$5,000 average) = good unit economics
- **Valuation:** $9.5B+ (2023), IPO planned

**Procore (Construction Management)**
- **Model:** Integrated payments (Procore Payments launched 2019)
- **Strategy:** Initially ISV partnership, now PayFac-enabled
- **Why Important:**
  - Construction payments are complex (lien waivers, compliance, multi-party)
  - Payment data critical for project management
  - High transaction values ($10K-$1M+ per payment)
- **Adoption:** Rapidly growing as contractors demand integrated solution

**Housecall Pro (Field Service SaaS)**
- **Model:** PayFac using Stripe Connect
- **Why PayFac:**
  - Instant technician onboarding critical for sales
  - Payment revenue exceeds SaaS revenue
  - Small merchants ($50K-$500K annually) = perfect PayFac fit
- **Growth:** 25,000+ service businesses, $3B+ annual volume

---

### Pure PayFac Examples

**Stripe**
- **Model:** Pure-play PayFac for internet businesses
- **Founded:** 2010 (Collison brothers, Y Combinator)
- **Innovation:** "7 lines of code" to accept payments (vs weeks/months previously)
- **Volume:** $1T+ annually (2023)
- **Valuation:** $50B+ (private)
- **Why Successful:**
  - Developer experience excellence
  - Instant merchant onboarding
  - Global infrastructure (40+ countries)
  - Platform revenue model (Stripe Connect) - PayFac for platforms
  - Expanded to financial services (Treasury, Issuing, Capital)
- **Economics:**
  - Takes 2.9% + $0.30 for standard processing
  - Net margin estimated 30-40 bps after all costs
  - At $1T volume: $3B-$4B in net payment revenue
  - Additional revenue from value-added services

**Square**
- **Model:** PayFac for SMB card-present (expanded to card-not-present)
- **Founded:** 2009 (Jack Dorsey)
- **Innovation:** Simple hardware (card reader), instant approval, transparent pricing
- **Volume:** $200B+ annually (2023)
- **Public Company:** NYSE:SQ (now Block, Inc.), $40B+ market cap
- **Why Successful:**
  - Eliminated merchant account complexity for micro-merchants
  - Hardware + software integration
  - Ecosystem (Square POS, Payroll, Banking, Loans)
- **Evolution:** Expanded to larger merchants, acquired Afterpay (BNPL), Cash App (consumer payments)

**PayPal / Braintree**
- **Model:** PayFac (though originated differently than modern PayFacs)
- **PayPal:** Consumer-to-merchant payments (1998), evolved to merchant acquiring
- **Braintree:** Acquired 2013, developer-focused PayFac
- **Volume:** $1.5T+ annually (PayPal total)
- **Why Enduring:**
  - Network effects (500M+ consumer accounts)
  - Trust and brand recognition
  - Venmo (P2P payments), BNPL (Pay in 4)
- **Challenges:** Competition from Stripe, Square; seen as legacy by some developers

**Adyen**
- **Model:** PayFac + global acquirer (unified commerce platform)
- **Founded:** 2006 (Netherlands)
- **Customers:** Enterprise platforms (Uber, Microsoft, Spotify, eBay)
- **Volume:** $500B+ annually
- **Public Company:** Euronext, $50B+ market cap
- **Differentiation:**
  - Single platform for online, in-store, mobile globally
  - Direct acquiring relationships (not just PayFac)
  - Enterprise focus (vs Stripe's developer focus)
  - Revenue optimization tools (smart routing, cascading)

---

### Platform PayFac Examples

**Shopify Payments**
- **Model:** PayFac embedded in e-commerce platform
- **Built On:** Stripe Connect initially, now proprietary infrastructure
- **Volume:** $200B+ annually (2023)
- **Merchant Count:** 2M+ merchants using Shopify Payments
- **Why Critical to Shopify:**
  - Payment revenue now 25%+ of total revenue
  - Reduces merchant churn (integrated payments are sticky)
  - Enables financial services (Shopify Capital, Balance)
  - Lower overall merchant costs = competitive advantage
- **Economics:**
  - Charges merchants 2.9% + $0.30 (online), lower for Shopify Plus
  - Estimated net margin: 40-50 bps
  - $200B × 0.45% = $900M annual payment revenue

**Etsy Payments**
- **Model:** PayFac for marketplace sellers
- **Why Implemented:**
  - Previous model: sellers set up own PayPal (friction, inconsistent experience)
  - PayFac: instant seller onboarding, consistent buyer experience
  - Control over full transaction flow
- **Volume:** $13B+ annually
- **Impact:** Dramatically increased seller adoption and buyer conversion

**DoorDash / Uber Eats**
- **Model:** Complex multi-party payment facilitation
- **Flow:**
  - Consumer pays platform (card transaction)
  - Platform pays restaurant (sub-merchant payout)
  - Platform pays driver (1099 contractor payout)
- **Why Complex:**
  - Must hold funds temporarily (float)
  - Must manage disputes (consumer, restaurant, driver)
  - Instant payouts for drivers (1-3% fee, revenue driver)
- **Volume:** $50B+ annually (DoorDash)

**Airbnb**
- **Model:** PayFac for host payouts
- **Flow:**
  - Guest books and pays Airbnb
  - Airbnb holds funds until check-in
  - Airbnb pays host (minus service fee) after check-in
- **Why PayFac:**
  - Control over payout timing (trust and safety)
  - Global payouts (hosts in 220+ countries)
  - Dispute management (guest/host conflicts)
- **Volume:** $70B+ annually

---

### Vertical SaaS PayFac Examples (Deep Dive)

**Toast (Restaurant) - The PayFac Success Story**

**Timeline:**
- 2011: Founded as restaurant POS software
- 2013: Integrated payments (ISV model with processor)
- 2015: Became PayFac (realized payment revenue > software revenue)
- 2021: IPO at $20B valuation
- 2024: $100B+ annual volume, $3B+ revenue (70% from payments)

**Business Model:**
- Hardware: Sell or lease POS terminals (handheld, countertop, kiosk)
- Software: $0-$165/month SaaS subscription (many on processing-only)
- Processing: 2.49% + $0.15 (card-present), 2.99% + $0.15 (card-not-present)
- Additional Services: Payroll, marketing, loyalty (drive revenue and stickiness)

**Why PayFac Model Won:**
- Restaurants need instant onboarding (can't wait 7 days for merchant account)
- Payment revenue per restaurant: $500-$2,000/month
- SaaS revenue per restaurant: $50-$165/month
- **Payment revenue 5-10x higher than software revenue**
- Integrated experience: orders, payments, kitchen, reporting in one system

**Competitive Advantage:**
- Data flywheel: Transaction data improves software recommendations (menu optimization, labor scheduling)
- Stickiness: Switching costs are high (hardware, training, integrated systems)
- Network effects: More restaurants = better benchmarking data for all

**Challenges:**
- Low margins in restaurant industry (thin merchant margins = price sensitivity)
- High churn in restaurant industry (30% of restaurants fail in first year)
- Competition from Square, Clover, legacy POS providers

---

**Mindbody (Wellness/Fitness/Salon)**

**Model:** ISV integrated payments (not full PayFac, uses partners)

**Why Not Full PayFac:**
- Complex business model: Multi-location studios, independent instructors, retail sales, memberships
- International presence (harder to PayFac globally)
- Focus on software innovation rather than payment infrastructure
- Payment partnerships provide sufficient revenue without operational burden

**Revenue Impact:**
- Payments contribute 30-40% of total revenue
- Average location processes $10K-$50K monthly
- Integrated payments improve retention (churn reduction worth more than incremental payment margin)

---

**Procore (Construction)**

**Model:** Evolved ISV to PayFac-enabled payments

**Why Payments Matter in Construction:**
- Payment complexity: Lien waivers, conditional releases, multi-party payments (GC, sub, supplier)
- Payment timing: Progress payments tied to project milestones
- Compliance: Certified payroll, prevailing wage, tax reporting
- High values: $10K-$1M+ per payment transaction

**Strategy:**
- Launched Procore Payments 2019 (integrated with project management)
- Ties payments to project workflows (invoices, change orders, RFIs)
- Compliance automation (lien waivers generated automatically)

**Why This Works:**
- Payment data improves project management (cash flow forecasting, budget variance)
- High transaction values = good unit economics even at lower rates
- Stickiness: Payments + project data = hard to leave platform

---

### PayFac-as-a-Service (PFaaS) Providers

These companies enable ISVs to become PayFacs without building full infrastructure:

**Stripe Connect**
- **Model:** Infrastructure for platforms to become PayFacs
- **Customers:** Shopify, Lightspeed, Mindbody, thousands of others
- **Pricing:** Typically interchange + 0.25-0.50% + $0.05-$0.10
- **Value Prop:** Instant onboarding, compliance handled, global reach, developer experience

**Finix**
- **Model:** PayFac-as-a-Service for software companies
- **Focus:** ISVs wanting full PayFac economics without building infrastructure
- **Pricing:** Transparent (often better margins than Stripe for established ISVs)

**Infinicept**
- **Model:** Embedded payments infrastructure for banks and software companies
- **Differentiation:** White-label, highly customizable
- **Target:** Larger ISVs and banks wanting branded PayFac programs

**Payrix (Worldpay/FIS)**
- **Model:** PFaaS from large processor
- **Advantage:** Leverage Worldpay's processing infrastructure and sponsor bank relationships

**Modern Treasury (Infrastructure Layer)**
- **Model:** Payment operations infrastructure (not full PayFac but enables money movement)
- **Use Case:** Platforms needing sophisticated ledger, reconciliation, money movement
- **Customers:** Platforms building complex financial products

---


## 9. Decision Framework: Choosing Your Model in 2025

### Decision Tree

```
START: Do you want to make money from payments?
│
NO → Don't pursue any model, use simple payment gateway
│
YES → Continue
│
├─ Are you a software platform with existing merchant customers?
│  │
│  YES → Continue to ISV/PayFac decision
│  │  │
│  │  ├─ Do you have 1,000+ merchants processing $10M+ monthly aggregate?
│  │  │  │
│  │  │  NO → ISV Model (integrated payments via partner)
│  │  │  │    └─ Partner with ISO or use PFaaS (Stripe Connect)
│  │  │  │
│  │  │  YES → Continue to PayFac decision
│  │  │     │
│  │  │     ├─ Can you invest $1M+ and 12-18 months?
│  │  │     │  │
│  │  │     │  NO → ISV Model using PFaaS (become PayFac with infrastructure partner)
│  │  │     │  │    └─ Options: Stripe Connect, Finix, Infinicept
│  │  │     │  │
│  │  │     │  YES → Continue
│  │  │     │     │
│  │  │     │     ├─ Is payment revenue strategic (not just nice-to-have)?
│  │  │     │     │  │
│  │  │     │     │  NO → Stick with ISV model (PFaaS)
│  │  │     │     │  │
│  │  │     │     │  YES → Full PayFac Model
│  │  │     │     │     └─ Decide: Build from scratch OR use PFaaS
│  │  │     │     │        ├─ Build if: $100M+ monthly volume, payments are core business
│  │  │     │     │        └─ PFaaS if: Faster time-to-market, lower capital, good economics
│  │
│  NO → Are you primarily a sales organization?
│     │
│     YES → ISO Model
│     │   └─ Build merchant portfolio for recurring residuals
│     │
│     NO → Do you have a marketplace/platform connecting buyers and sellers?
│        │
│        YES → PayFac Model (required for instant onboarding and multi-party payments)
│        │
│        NO → Traditional Acquiring (direct merchant account)
│           └─ Process your own business's payments
```

---

### Volume-Based Decision Guide

| Monthly Volume | Recommended Model | Rationale |
|----------------|-------------------|-----------|
| **$0-$50K** | Traditional gateway or aggregator (Stripe, Square as merchant) | Too small for other models; use standard processing |
| **$50K-$500K** | Traditional acquiring OR PayFac as sub-merchant | Can negotiate better rates with direct acquiring; or use PayFac for simplicity |
| **$500K-$5M** | Traditional acquiring (direct merchant account) | Volume justifies direct relationship and better pricing |
| **$5M-$25M** | Traditional acquiring OR consider ISO if sales-focused | Optimal for direct acquiring with custom pricing |
| **$25M-$100M** | Traditional acquiring OR ISV if you're software platform | Negotiating power for interchange-plus pricing |
| **$100M+** | Traditional acquiring OR PayFac if platform business | At this scale, economics justify almost any model; choose based on business strategy |

**For Software Platforms (ISV/PayFac Decision):**

| Aggregate Portfolio Volume (Monthly) | Merchant Count | Recommended Model | Expected Payment Revenue |
|-------------------------------------|----------------|-------------------|-------------------------|
| **$1M-$10M** | 100-500 | ISV (integrated via partner) | $30K-$300K annually |
| **$10M-$50M** | 500-2,000 | ISV (PFaaS) or PayFac consideration | $300K-$1.5M annually |
| **$50M-$100M** | 2,000-5,000 | PayFac via PFaaS (Stripe Connect, etc.) | $1.5M-$3M annually |
| **$100M-$500M** | 5,000-20,000 | PayFac (PFaaS or build) | $3M-$15M annually |
| **$500M+** | 20,000+ | Full PayFac (consider building infrastructure) | $15M+ annually |

---

### Industry-Specific Recommendations

**E-commerce / Online Retail:**
- **Small ($0-$1M annually):** Stripe, Square, PayPal as merchant
- **Medium ($1M-$50M):** Traditional acquiring (Braintree, Adyen, Cybersource)
- **Large ($50M+):** Direct acquiring, multiple processors for redundancy
- **Platform (Shopify-like):** PayFac model essential

**Marketplaces (Multi-Party Payments):**
- **Any Size:** PayFac model required (Stripe Connect, custom PayFac)
- **Rationale:** Must facilitate payments between buyers and sellers; traditional acquiring doesn't support this

**SaaS Platforms:**
- **Horizontal SaaS:** ISV model sufficient (unless huge scale)
- **Vertical SaaS:** PayFac model highly recommended (Toast, ServiceTitan model)
- **Rationale:** Vertical SaaS has deeper merchant relationships and payment revenue can exceed SaaS revenue

**Field Services (Plumbing, HVAC, Electrical):**
- **PayFac via PFaaS:** Best model (Housecall Pro, Jobber approach)
- **Why:** Instant onboarding critical, small contractors need simple solutions, integrated invoicing/payments

**Healthcare (Medical, Dental, Veterinary):**
- **ISV with integrated payments:** Common model
- **Why:** HIPAA compliance complexity, established practice management systems, payment integration enhances but doesn't define product

**Restaurants / Hospitality:**
- **PayFac model:** Increasingly dominant (Toast, Square, Clover)
- **Why:** Instant onboarding, integrated ordering/payments, high payment volume relative to software value

**Professional Services (Legal, Accounting):**
- **Traditional acquiring or ISV:** Depending on platform size
- **Why:** Lower payment volumes, trust account complexity, less price-sensitive

**Retail (Brick-and-Mortar):**
- **Small Retail:** Square, Clover (PayFac solutions)
- **Large Retail:** Direct acquiring, custom terminals
- **POS Software Providers:** PayFac model (Lightspeed, Shopify POS)

---

### Build vs Buy Decision (for PayFac)

**Build Full PayFac Infrastructure When:**
- Monthly volume exceeds $100M (or clear path to $500M+)
- Payments are core to business strategy (not just revenue add-on)
- You need complete control (branding, UX, feature roadmap)
- You have capital ($2M-$5M) and patience (18-24 months)
- You have or can build strong engineering and compliance teams
- Geographic expansion or unique features require custom infrastructure
- **Examples:** Stripe (started with custom infrastructure), Toast (evolved to custom)

**Use PayFac-as-a-Service (PFaaS) When:**
- Monthly volume is $10M-$100M (or path to $100M in 2-3 years)
- You want PayFac economics without building infrastructure
- Time-to-market matters (6 months vs 18+ months)
- Capital is constrained ($250K-$1M available vs $2M-$5M)
- You want to focus engineering on core product, not payment infrastructure
- You're willing to share economics (60-80% of margin vs 95-100%)
- **Examples:** Most vertical SaaS companies, smaller platforms

**Stay as ISV (Integrated Payments) When:**
- Monthly volume is $1M-$25M with slow growth
- Payments are nice-to-have, not strategic
- You want revenue without operational complexity
- You don't need instant merchant onboarding (3-5 days acceptable)
- Capital and resources are very limited
- **Examples:** Many horizontal SaaS tools, niche vertical software

---

### ROI Analysis: ISV vs PayFac (PFaaS) vs PayFac (Built)

**Scenario:** Software platform with 2,000 merchants, $50M monthly volume ($600M annually)

**Option 1: ISV Model (Revenue Share with Payment Partner)**
- Merchant effective rate: 2.75%
- Platform receives: 40% of partner margin (after interchange/processor costs)
- **Annual payment revenue:** ~$1.2M
- **Investment required:** $200K (integration, support setup)
- **Operating cost:** $150K annually (support, maintenance)
- **Net profit:** $1.05M annually
- **Payback period:** 2-3 months
- **Margin:** 87%

**Option 2: PayFac via PFaaS (Stripe Connect, Finix, etc.)**
- Merchant effective rate: 2.90%
- Platform net margin: ~0.50% (after interchange, processor, PFaaS fees)
- **Annual payment revenue:** ~$3M
- **Investment required:** $400K (integration, compliance setup, reserves)
- **Operating cost:** $400K annually (support, compliance, engineering)
- **Net profit:** $2.6M annually
- **Payback period:** 2-3 months
- **Margin:** 87%
- **Incremental profit vs ISV:** +$1.55M annually

**Option 3: Full PayFac (Built from Scratch)**
- Merchant effective rate: 2.90%
- Platform net margin: ~0.80% (after interchange, processor, sponsor - no PFaaS fees)
- **Annual payment revenue:** ~$4.8M
- **Investment required:** $2.5M (engineering, compliance, infrastructure, reserves)
- **Operating cost:** $1.5M annually (team of 20+, infrastructure, compliance)
- **Net profit:** $3.3M annually
- **Payback period:** 9-12 months
- **Margin:** 69%
- **Incremental profit vs PFaaS:** +$700K annually
- **Incremental profit vs ISV:** +$2.25M annually

**At Scale ($500M Monthly Volume, $6B Annually):**

| Model | Annual Payment Revenue | Operating Cost | Net Profit | Margin | Build Payback |
|-------|------------------------|----------------|------------|--------|---------------|
| ISV (Revenue Share) | $12M | $800K | $11.2M | 93% | N/A |
| PayFac (PFaaS) | $30M | $2.5M | $27.5M | 92% | N/A |
| PayFac (Built) | $48M | $6M | $42M | 88% | 2-3 months* |

*Payback = incremental investment of $2.1M (vs PFaaS) / incremental annual profit of $14.5M = ~2 months

**Key Insight:** At scale ($500M+ monthly), building full PayFac infrastructure becomes highly profitable. Below $100M monthly, PFaaS usually makes more sense.

---


## 10. Future Trends and Evolution (2025 and Beyond)

### Emerging Models

**1. Embedded Finance (BaaS + Payments)**
- Platforms offering full financial services: payments + banking + lending + cards
- **Examples:** Stripe Treasury + Issuing, Unit.co, Synapse (failed 2024), Column
- **Trend:** Every platform becomes a "fintech" with embedded banking

**2. Crypto Payment Facilitation**
- PayFacs expanding to crypto acceptance (USDC, Bitcoin)
- **Examples:** Stripe crypto (relaunched 2024), BitPay, Coinbase Commerce
- **Challenge:** Regulatory uncertainty, volatility, consumer adoption

**3. Real-Time Payments (RTP/FedNow Integration)**
- PayFacs integrating instant settlement via FedNow, RTP Network
- **Impact:** Instant sub-merchant payouts without PayFac fronting capital
- **Trend:** Accelerating in 2025+ as FedNow adoption grows

**4. AI-Powered Risk and Underwriting**
- ML models for instant merchant onboarding decisions
- Real-time fraud detection with higher accuracy
- **Impact:** Lower fraud loss rates, higher instant approval rates

**5. Vertical-Specific PayFacs**
- Deep specialization in high-complexity industries (healthcare, construction, real estate)
- **Examples:** Procore Payments (construction), DrChrono (healthcare)
- **Trend:** Generic PayFacs (Stripe, Square) face competition from vertical specialists

**6. Cross-Border PayFac Platforms**
- Global PayFac registration (navigate 50+ country regulations)
- **Examples:** Adyen (leader), Stripe (expanding), Checkout.com
- **Challenge:** Country-by-country licensing, local payment methods

---

### Regulatory Changes to Watch (2025+)

**1. CFPB Payment Platform Regulation**
- Consumer Financial Protection Bureau increasing oversight of payment platforms
- Potential new rules for PayFacs regarding consumer protection, data privacy
- **Impact:** Increased compliance burden, may favor larger players

**2. State MTL Harmonization Efforts**
- Efforts to create uniform money transmitter licensing across states
- **Impact:** Would reduce burden for PayFacs (currently 40+ separate applications)

**3. PSD3 (Europe) and Open Banking Expansion**
- Payment Services Directive 3 (proposed) would further regulate platforms
- **Global Impact:** EU regulations often influence US standards

**4. Interchange Regulation**
- Ongoing pressure to cap interchange rates (Durbin Amendment expansion discussions)
- **Impact:** Would reduce margins for all models, but PayFacs still benefit from control

**5. Stablecoin Regulation**
- Potential federal framework for stablecoins could enable crypto payment facilitation
- **Impact:** PayFacs may integrate stablecoin settlements

---

### Technology Disruptions

**1. Account-to-Account (A2A) Payments**
- Open banking enables direct bank transfers (bypassing cards)
- **Impact:** May reduce card volume, but PayFacs can facilitate A2A
- **Examples:** Plaid + payment initiation, Tink (Visa acquisition)

**2. Central Bank Digital Currencies (CBDCs)**
- If US launches digital dollar, could disrupt private payment rails
- **Impact:** Uncertain; PayFacs may facilitate CBDC transactions

**3. Biometric Payments**
- Face recognition, fingerprint payments in physical retail
- **Impact:** PayFacs must support new authentication methods

**4. IoT Payments**
- Connected devices making autonomous payments
- **Impact:** New use cases for PayFac facilitation (car pays for parking, fridge orders groceries)

---


## Self-Assessment Questions & Answers

### Basic Understanding

**Q1: What is the primary difference between an ISO and a PayFac in terms of money flow?**

**A:** An ISO is **not in the money flow** - funds go directly from acquirer to merchant, and the ISO receives a residual payment from the acquirer for the referral. A PayFac **is in the money flow** - funds go from the sponsor bank to the PayFac's master merchant account, and the PayFac then disburses to sub-merchants. This makes the PayFac responsible for settlement and creates more liability but also more control.

---

**Q2: Why did the PayFac model emerge in the 2010s when ISOs had been around since the 1980s?**

**A:** The PayFac model emerged due to:
1. **User Experience Demands:** Modern software platforms needed instant merchant onboarding (minutes vs 7-14 days)
2. **Technology Advancement:** Automated KYC/KYB, risk scoring, and fraud detection made instant underwriting viable
3. **Platform Business Models:** Marketplaces and SaaS platforms needed complete control over merchant experience
4. **Economics:** Platforms realized payment revenue could exceed software revenue
5. **Developer Experience:** APIs and modern infrastructure made building payment systems feasible

The ISO model couldn't deliver instant onboarding or full control, so the PayFac model filled that gap.

---

**Q3: If you're a software company with 500 merchants processing $25M monthly, which model should you choose and why?**

**A:** **PayFac via PayFac-as-a-Service (PFaaS)** is the optimal choice because:
- Volume ($25M monthly) is sufficient to generate meaningful payment revenue ($750K-$1.5M annually with PFaaS)
- PFaaS allows you to get PayFac economics and control without building full infrastructure
- Investment required is moderate ($250K-$500K) vs full build ($2M-$5M)
- Time to market is 3-6 months vs 18-24 months for full PayFac
- At this volume, the incremental margin from building your own infrastructure ($200K-$300K annually) doesn't justify the $2M+ additional investment
- If you grow to $100M+ monthly, you can consider building custom infrastructure later

---

### Intermediate Understanding

**Q4: Compare the PCI DSS obligations for an ISO vs a PayFac. Why is the PayFac burden so much higher?**

**A:**
- **ISO:** If the ISO doesn't store, process, or transmit cardholder data (CHD), they may have minimal PCI obligations. If they do handle CHD, they must validate as a Level 1 Service Provider (annual QSA audit, ~$50K-$100K cost).

- **PayFac:** Mandatory Level 1 Service Provider validation, which includes:
  - Annual on-site QSA audit ($50K-$250K)
  - Quarterly ASV vulnerability scans
  - Attestation of Compliance (AOC)
  - **Responsibility for sub-merchant compliance:** PayFacs must ensure sub-merchants are PCI compliant or reduce their scope through tokenization
  - Must maintain evidence of sub-merchant compliance programs for network reviews

**Why higher burden?**
- PayFacs handle sensitive payment data for potentially thousands of sub-merchants
- They operate payment infrastructure (gateways, vaults, processing systems)
- Card networks hold PayFacs responsible for the compliance of their entire sub-merchant portfolio
- A breach at one sub-merchant can impact the PayFac's registration status

---

**Q5: What are the typical reserve requirements for a PayFac, and how do they impact cash flow?**

**A:**
**Reserves PayFac Must Hold:**
1. **Platform Reserve (held by sponsor bank):**
   - $250K-$2M minimum depending on program size
   - May require 5-10% of monthly volume in rolling reserve
   - Example: $50M monthly volume = $2.5M-$5M in reserves

2. **Sub-Merchant Reserves (held by PayFac):**
   - Standard sub-merchants: 5-10% rolling reserve (released after 90-180 days)
   - High-risk sub-merchants: 10-30%
   - New sub-merchants: 20-30% for first 90 days
   - Volume spikes: May trigger additional reserve holds

**Cash Flow Impact:**
Example: PayFac with $100M monthly portfolio
- 10% average sub-merchant reserves = $10M held
- Platform reserve with sponsor = $3M
- **Total capital tied up: $13M**
- If offering instant payouts: Must also fund 2-7 day settlement gap (additional $6M-$20M in working capital needs)

**Result:** PayFacs must have significant capital available that generates no return - this is a cost of the model.

---

**Q6: Explain the economics of the ISV revenue share model. If a merchant processes $100K monthly at 2.75%, and the ISV gets a 40% revenue share, how much does the ISV actually make?**

**A:**
Let's break down the full economics:

**Merchant Processing:**
- Volume: $100,000
- Rate: 2.75% + $0.25 per transaction (assume 400 transactions)
- Gross revenue: $2,750 + $100 = $2,850

**Cost Breakdown:**
- Interchange + assessments: ~$2,000 + $50 = $2,050
- Processor cost: ~$150 + $20 = $170
- **Payment partner margin: $2,850 - $2,220 = $630**

**ISV Revenue Share (40% of partner margin):**
- **ISV receives: $630 × 40% = $252 per month**
- **Annually: $252 × 12 = $3,024 per merchant**

**If ISV has 500 such merchants:**
- Monthly payment revenue: $252 × 500 = $126,000
- Annual payment revenue: $1,512,000

**Compare to SaaS revenue at $150/month per merchant:**
- Monthly SaaS revenue: $75,000
- **Payment revenue exceeds SaaS revenue by 68%**

This math explains why so many SaaS companies pursue integrated payments.

---

### Advanced Understanding

**Q7: A PayFac is at $500M monthly volume and considering building their own infrastructure instead of using PFaaS. Walk through the ROI analysis. Should they build?**

**A:**

**Current State (PFaaS):**
- Volume: $500M monthly = $6B annually
- Merchant effective rate: 2.90%
- Gross revenue: $174M annually
- Interchange + assessments: ~$120M
- PFaaS provider fees: ~$24M (includes processing, infrastructure, compliance)
- **PayFac net revenue: $30M annually**
- Operating costs: $2.5M (reduced team since PFaaS handles infrastructure)
- **Net profit: $27.5M annually**

**If Build Custom Infrastructure:**
- Volume: $500M monthly = $6B annually
- Merchant effective rate: 2.90% (same)
- Gross revenue: $174M annually
- Interchange + assessments: ~$120M
- Direct processor costs: ~$8M (better rates at this volume)
- Sponsor bank fees: ~$3M
- **Gross margin: $43M annually**
- Operating costs: $6M (team of 30+, infrastructure, compliance)
- **Net profit: $37M annually**

**ROI Analysis:**
- **Incremental profit: $37M - $27.5M = $9.5M annually**
- **Investment required:**
  - Engineering build: $2M
  - Additional reserves: $3M
  - Migration costs: $500K
  - **Total investment: $5.5M**
- **Payback period: $5.5M / $9.5M = 7 months**
- **ROI: 173% in first year**

**Recommendation: YES, build custom infrastructure**
- Payback is under 1 year
- Ongoing incremental profit of $9.5M annually
- More control over roadmap and features
- Better margins as volume continues to grow
- At $500M+ monthly, the scale justifies the complexity

**When NOT to build:**
- If volume is below $100M monthly (payback extends to 2+ years)
- If payments are not core to business strategy
- If engineering resources are needed for core product innovation
- If time-to-market for new features is critical (PFaaS providers add features faster)

---

**Q8: Compare the regulatory liability for a PayFac vs an ISV using PFaaS. Who is responsible if a sub-merchant violates AML/BSA regulations?**

**A:**

**ISV Using PFaaS:**
- **Primary Liability: PFaaS Provider** - The PFaaS provider is the registered PayFac and is responsible for:
  - AML program compliance
  - Transaction monitoring
  - SAR filing
  - Sub-merchant screening
  - OFAC compliance
- **ISV Responsibility:**
  - Provide accurate sub-merchant data to PFaaS provider
  - May have contractual obligations to PFaaS provider for certain verifications
  - Could face reputational risk
  - **Typically not directly liable to regulators**

**Full PayFac (Built or Direct Registered):**
- **Full Liability on PayFac:**
  - Must have written AML program
  - Must conduct transaction monitoring for suspicious activity
  - Must file SARs for suspicious transactions over $2,000
  - Must screen sub-merchants and transactions against OFAC lists
  - Must register as MSB with FinCEN
  - **Civil penalties: $25,000-$100,000+ per violation**
  - **Criminal liability possible for willful violations**
  - Bank sponsor may terminate relationship for violations

**Real-World Scenario:**
- Sub-merchant is money laundering via structuring (multiple transactions under $10K to avoid CTR)
- Transactions total $500K over 3 months
- No SAR was filed

**ISV/PFaaS:** PFaaS provider liable, must file SAR, may face FinCEN penalties. ISV typically not liable (unless they knew and didn't report to PFaaS).

**Full PayFac:** PayFac directly liable, could face:
- FinCEN civil penalty: $50,000-$250,000
- Required to enhance AML program
- Sponsor bank may require exit plan
- Potential criminal investigation if willful

**Key Insight:** Using PFaaS significantly reduces regulatory liability for the platform, which is a major advantage for companies that don't have deep compliance expertise.

---

**Q9: How do chargeback monitoring programs (VDMP, VFMP) impact a PayFac differently than a traditional merchant? Provide a specific example with fines.**

**A:**

**Traditional Merchant:**
- **Monitored Individually:** Each merchant account is monitored separately
- **Thresholds:** VDMP standard threshold = 0.9% chargeback rate + 100 chargebacks/month
- **Impact:** If one merchant exceeds, that merchant is enrolled in VDMP
- **Fines:** $50-$250 per chargeback over threshold
- **Remediation:** Merchant must reduce chargebacks or acquirer may terminate account
- **Scope:** Affects only that one merchant

**PayFac:**
- **Monitored at Portfolio Level:** Entire sub-merchant portfolio aggregated
- **Thresholds:** Same (0.9% chargeback rate + 100 chargebacks/month), but applied to total volume
- **Impact:** If portfolio exceeds, PayFac enrollment (not just one sub-merchant)
- **Fines:** Applied to PayFac, not individual sub-merchants
- **Remediation:** PayFac must reduce portfolio chargebacks or face:
  - Escalating fines
  - Potential PayFac registration termination
  - Impacts ALL sub-merchants if registration is terminated
- **Scope:** Affects entire platform

**Specific Example:**

**PayFac Portfolio:**
- Total monthly volume: $100M
- Total chargebacks: 1,200
- Chargeback rate: 1.2%

**VDMP Enrollment:**
- Threshold: 0.9% + 100 chargebacks
- Chargeback rate: 1.2% (exceeds 0.9%) ✓
- Chargeback count: 1,200 (exceeds 100) ✓
- **Result: Enrolled in VDMP**

**Fines (Assuming Standard Program, $50/CB):**
- Excess chargebacks: 1,200 - (900 chargebacks at 0.9% threshold) = 300
- **Monthly fine: 300 × $50 = $15,000**
- **Annual fine if not corrected: $180,000**

**Escalation:**
- Month 4-6 in VDMP: Fines increase to $100/CB = $30,000/month
- Month 7+: Potential termination of PayFac registration
- **If terminated: All sub-merchants lose ability to process**

**PayFac Remediation Strategies:**
- Identify high-chargeback sub-merchants (often 10% of merchants cause 80% of chargebacks)
- Implement stricter underwriting
- Terminate bad sub-merchants
- Implement fraud prevention tools (3D Secure, fraud scoring)
- Work with sub-merchants on dispute prevention

**Key Difference:** A traditional merchant with high chargebacks affects only themselves. A PayFac with high chargebacks in their portfolio can lose their ability to operate entirely, affecting thousands of sub-merchants. This is why PayFacs must have sophisticated risk monitoring.

---

**Q10: Explain the money flow and fee distribution in a marketplace PayFac scenario (like Etsy or DoorDash). How does it differ from a simple PayFac payout?**

**A:**

**Simple PayFac Payout (e.g., Toast - Restaurant POS):**
```
Transaction Flow:
Customer pays $100 (credit card) for meal
   ↓
Toast (PayFac) authorizes and captures transaction
   ↓
Toast receives settlement from sponsor bank: $97.10
   (Minus interchange $1.80 + assessment $0.14 + processor $0.15 + network $0.01 = $2.90)
   ↓
Toast deducts platform processing fee: 2.49% + $0.15 = $2.64
   ↓
Restaurant receives payout: $97.10 - $2.64 = $94.46
   ↓
Toast net revenue: $2.64 - $2.10 = $0.54 per transaction

Simple flow: Customer → PayFac → Merchant
```

**Marketplace PayFac (e.g., Etsy - Buyer to Seller Marketplace):**
```
Transaction Flow:
Buyer pays $100 for handmade item
   ↓
Etsy (PayFac) authorizes and captures transaction
   ↓
Etsy receives settlement from sponsor bank: $97.10
   (Same interchange/network costs: $2.90)
   ↓
Etsy deducts:
   - Transaction fee: 6.5% = $6.50
   - Payment processing fee: 3% + $0.25 = $3.25
   - Listing fee: $0.20
   Total Etsy fees: $9.95
   ↓
Seller receives payout: $100 - $9.95 = $90.05
   ↓
Etsy net revenue: $9.95 - $2.90 = $7.05 per transaction

More complex: Buyer → PayFac (marketplace) → Seller
PayFac both facilitates payment AND charges marketplace fees
```

**Multi-Party Marketplace (e.g., DoorDash - Consumer, Restaurant, Dasher):**
```
Transaction Flow:
Consumer pays $50 for food delivery
   ↓
DoorDash (PayFac) authorizes and captures transaction
   ↓
DoorDash receives settlement from sponsor bank: $48.55
   (Minus interchange + fees: $1.45)
   ↓
DoorDash must distribute to multiple parties:

   1. Restaurant payout:
      - Subtotal: $40
      - DoorDash commission: -$12 (30%)
      - Restaurant net: $28
      - Payout timeline: 7-15 days (or instant for 1.5% fee)

   2. Dasher (driver) payout:
      - Delivery fee from customer: $5
      - DoorDash base pay: $3
      - Dasher tip: $5
      - Total Dasher payment: $13
      - Payout timeline: Instant or weekly

   3. DoorDash revenue:
      - Consumer paid: $50
      - Restaurant payout: -$28
      - Dasher payout: -$13
      - Processing costs: -$1.45
      - DoorDash net: $7.55

Complex flow: Consumer → PayFac → Restaurant
                                  → Dasher
             PayFac orchestrates multi-party settlement
```

**Key Differences from Simple PayFac:**

1. **Multiple Payees:**
   - Simple: One payout (customer → merchant)
   - Marketplace: Multiple payouts (customer → platform → seller, + others)

2. **Fee Layering:**
   - Simple: Payment processing fee only
   - Marketplace: Processing fee + marketplace commission + service fees

3. **Settlement Timing:**
   - Simple: Typically daily or weekly
   - Marketplace: May vary by party (instant for drivers, delayed for restaurants)

4. **Float and Working Capital:**
   - Simple: 2-7 day settlement lag, must fund sub-merchant before receiving settlement
   - Marketplace: May hold funds longer (seller protection), more complex working capital needs

5. **Dispute Complexity:**
   - Simple: Customer disputes merchant, PayFac facilitates
   - Marketplace: Customer may dispute, but issue may be with marketplace OR seller OR driver
   - Must determine which party is liable

6. **Ledger Complexity:**
   - Simple: Two-party ledger (platform and sub-merchant balances)
   - Marketplace: Multi-party ledger (platform, seller, buyer, service provider balances)

7. **Regulatory:**
   - Simple: PayFac rules apply
   - Marketplace: May have additional consumer protection obligations, potential regulation as marketplace (not just PayFac)

**Why This Matters:**
Marketplace PayFac models are significantly more complex than standard PayFac models. They require:
- Sophisticated ledger systems (multi-party accounting)
- Complex dispute resolution workflows
- Higher working capital (multiple payout streams)
- More regulatory oversight (marketplace regulations + PayFac regulations)
- Advanced reconciliation (ensure all parties paid correctly)

Many marketplaces use specialized PayFac providers (Stripe Connect, Adyen for Platforms) rather than building this complexity themselves.


---

## Related Topics

### Within Payment Ecosystem Module
- [Model Comparison Overview](/payment-ecosystem/payfac-model/comparing-models/overview) - Detailed comparison tables and regulatory requirements
- [Four-Party Model](/payment-ecosystem/fundamentals/four-party-model) - Foundation for understanding payment flows
- [PayFac Overview](/payment-ecosystem/payfac-model/overview) - Payment Facilitator deep dive
- [PayFac Implementation](/payment-ecosystem/payfac-model/implementation) - Building a PayFac platform
- [ISOs](/payment-ecosystem/industry-players/isos) - Independent Sales Organizations
- [ISVs](/payment-ecosystem/industry-players/isvs) - Independent Software Vendors in payments

### Cross-Module References
- Merchant Onboarding (Week 3-4) - KYC/KYB requirements for different models
- Risk & Compliance (Week 5-6) - Chargeback management, fraud, risk implications by model
- Transaction Processing (Week 7-8) - How transactions flow through different models
- Platform Architecture (Week 9-10) - Technical implementation for PayFac models
- Regulatory Partnerships (Week 11-12) - Sponsor bank relationships in depth

---

## References

### Official Card Network Documentation
- [Visa Payment Facilitator Program](https://usa.visa.com/partner-with-us/payment-facilitator.html)
- [Mastercard Payment Service Provider Program](https://developer.mastercard.com/digital-enablement/documentation/)

### Regulatory Resources
- [FinCEN MSB Registration](https://www.fincen.gov/money-services-business-msb-registration)
- [CFPB Payment Platform Guidance](https://www.consumerfinance.gov/)
- [State Money Transmitter Licensing (CSBS)](https://www.csbs.org/policy/money-transmitter-modernization)

### Industry Research
- [McKinsey: The 2023 McKinsey Global Payments Report](https://www.mckinsey.com/industries/financial-services/our-insights/payments)
- [FIS Global Payments Report](https://www.fisglobal.com/en/global-payments-report)

### PayFac Infrastructure Providers
- [Stripe Connect Documentation](https://stripe.com/connect)
- [Finix PayFac-as-a-Service](https://finix.com/)
- [Infinicept Embedded Payments](https://infinicept.com/)

### Industry Analysis
- [A16z: The Fintech Unbundling](https://a16z.com/fintech/)
- [Andreessen Horowitz: Embedded Fintech](https://a16z.com/embedded-fintech/)

---

**Last Updated:** 2025-12-23

**Source:** `/week-01-02-payment-ecosystem/notes/11-comparing-models.md` (Sections 3, 8-10, Q&A)

