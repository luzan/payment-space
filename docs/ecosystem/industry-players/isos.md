---
title: "Independent Sales Organizations (ISOs)"
description: "ISO business model, revenue structure, registered vs non-registered ISOs, and role in merchant acquisition"
sidebar_position: 4
sidebar_label: "ISOs"
keywords:
  - ISO
  - Independent Sales Organization
  - merchant acquisition
  - residual income
  - ISO hierarchy
  - registered ISO
  - ISO agent
  - ISO vs PayFac
  - merchant onboarding
  - North American Bancard
  - Elavon ISO program
---


---

## Overview

An **ISO (Independent Sales Organization)** is a third-party company that acts as an intermediary between merchants and acquiring banks/payment processors. ISOs are NOT banks themselves - they are sales and distribution partners that recruit, onboard, and support merchants on behalf of processors.

| Role | Description |
|------|-------------|
| **Merchant Acquisition** | Find and recruit businesses to accept card payments |
| **Sales & Onboarding** | Sign up merchants, handle application process, KYC/underwriting |
| **Ongoing Support** | Provide customer service, troubleshoot issues, equipment support |
| **Revenue Model** | Earn residual income (basis points) on merchant transaction volume |

**Key Point:** ISOs do NOT process transactions themselves. They act as the sales and service layer, while the actual processing is handled by processors (First Data, Worldpay, etc.) and acquiring banks.

**Terminology Note:** "ISO" is primarily a US-centric term. In the UK/EU, similar entities are called "Acquiring Agents" or "Payment Service Providers (PSPs)."

---

## Historical Evolution

ISOs emerged to solve a fundamental problem: banks couldn't scale merchant acquisition on their own.

### 1980s-1990s: Birth of the ISO Model

```
TIMELINE: THE RISE OF ISOs
═══════════════════════════════════════════════════════════════

1980s: Card Acceptance Boom
┌─────────────────────────────────────────────────────────────┐
│ • Electronic terminals replacing manual imprinters          │
│ • Banks realize: We can't sign up every small merchant      │
│ • Problem: Banks are good at banking, bad at sales          │
│ • Solution: Outsource merchant acquisition to partners      │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
Mid-1980s: First ISOs Emerge
┌─────────────────────────────────────────────────────────────┐
│ • Sales-focused companies partner with acquiring banks      │
│ • Earn commissions on merchant sign-ups                     │
│ • Handle merchant support and equipment leases              │
│ • Banks focus on underwriting, settlement, compliance       │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
1990s-2000s: ISO Boom
┌─────────────────────────────────────────────────────────────┐
│ • Thousands of ISOs emerge (3,500+ in US today)             │
│ • Residual income model becomes standard                    │
│ • ISO agent/sub-agent hierarchies develop                   │
│ • ISOs handle ~25% of all US merchant sign-ups              │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
2010s-Present: ISO Evolution
┌─────────────────────────────────────────────────────────────┐
│ • Competition from PayFac model (instant onboarding)        │
│ • ISOs evolve into technology partners (value-added)        │
│ • Vertical specialization (healthcare, retail, restaurants) │
│ • Market consolidation: Larger ISOs acquire smaller ones    │
└─────────────────────────────────────────────────────────────┘
```

**Key Insight:** The ISO model arose because **banks are not sales organizations**. They have capital, licenses, and compliance expertise, but lack the sales infrastructure to reach millions of small businesses. ISOs filled this gap.

---

## How ISOs Work

### ISO Position in the Payment Ecosystem

```
┌───────────────────────────────────────────────────────────────────────┐
│                    ISO IN THE PAYMENT ECOSYSTEM                       │
└───────────────────────────────────────────────────────────────────────┘

                       ┌─────────────────┐
                       │  CARD NETWORK   │
                       │ (Visa/MC/Amex)  │
                       └────────┬────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
           ┌────────▼────────┐     ┌────────▼────────┐
           │  ISSUING BANK   │     │ ACQUIRING BANK  │
           │   (Chase, BofA) │     │ (Wells Fargo)   │
           └─────────────────┘     └────────┬────────┘
                                            │
                                   ┌────────▼────────┐
                                   │    PROCESSOR    │
                                   │  (First Data,   │
                                   │   Worldpay)     │
                                   └────────┬────────┘
                                            │
                                   ┌────────▼────────┐
                                   │      ISO        │◀─── YOU ARE HERE
                                   │ (Sales Partner) │
                                   └────────┬────────┘
                                            │
                    ┌───────────────────────┼───────────────────────┐
                    │                       │                       │
           ┌────────▼────────┐     ┌────────▼────────┐    ┌────────▼────────┐
           │   MERCHANT 1    │     │   MERCHANT 2    │    │   MERCHANT 3    │
           │  (Joe's Coffee) │     │ (Main St Deli)  │    │ (Yoga Studio)   │
           └─────────────────┘     └─────────────────┘    └─────────────────┘

KEY RELATIONSHIPS:
• ISO has contractual relationship with Processor/Bank (Sponsor Agreement)
• ISO recruits and signs merchants (Merchant Service Agreement)
• Each merchant gets own MID (Merchant ID) directly with acquirer
• ISO earns residual income on merchant transaction volume
```

**Critical Distinction: ISO vs PayFac**

| Aspect | ISO Model | PayFac Model |
|--------|-----------|--------------|
| **Merchant Account** | Each merchant gets own MID from acquirer | All sub-merchants share PayFac's master MID |
| **Onboarding Speed** | Days to weeks (bank underwriting) | Instant (PayFac underwriting) |
| **Liability** | Acquirer bears chargeback risk | PayFac bears first-line chargeback risk |
| **Role** | Sales intermediary/referral partner | Master merchant/aggregator |

See Four-Party Model <!-- (/ecosystem/core-concepts/four-party-model not yet migrated) --> for more on the foundational payment structure and [Payment Processors](/ecosystem/industry-players/payment-processors) for processor roles.

### ISO Workflow: Merchant Onboarding

```
┌──────────────────────────────────────────────────────────────────────┐
│                    ISO MERCHANT ONBOARDING FLOW                      │
└──────────────────────────────────────────────────────────────────────┘

STEP 1: PROSPECTING & SALES
────────────────────────────
   ISO Sales Rep
        │
        ├─ Cold calls / Door-to-door
        ├─ Referrals from existing merchants
        ├─ Marketing campaigns
        ├─ Vertical specialization (e.g., only restaurants)
        │
        ▼
   Merchant Interested
        │
        │
STEP 2: APPLICATION & DOCUMENTATION
────────────────────────────────────
        │
        ├─ Collect merchant info:
        │  • Business name, address, EIN
        │  • Owner info (SSN, DOB, address)
        │  • Business bank account
        │  • Processing volume estimates
        │  • MCC (Merchant Category Code)
        │
        ├─ Gather documents:
        │  • Business license
        │  • Bank statements
        │  • Voided check
        │  • Identity verification (driver's license)
        │
        ▼
   Submit to Processor/Bank
        │
        │
STEP 3: UNDERWRITING (1-5 days typical)
────────────────────────────────────────
        │
        ├─ Bank/Processor Reviews:
        │  • Credit check (business & owner)
        │  • MATCH list check (terminated merchant file)
        │  • Risk assessment (MCC, processing volume)
        │  • Sanctions screening
        │  • Business verification
        │
        ├─ Possible Outcomes:
        │  ✓ APPROVED (standard terms)
        │  ✓ APPROVED with conditions (reserves, volume caps)
        │  ✗ DECLINED (high risk, MATCH list, bad credit)
        │
        ▼
   Approved: MID Assigned
        │
        │
STEP 4: SETUP & ACTIVATION
───────────────────────────
        │
        ├─ ISO coordinates:
        │  • Terminal/POS delivery (if card-present)
        │  • Payment gateway setup (if card-not-present)
        │  • Training merchant on equipment
        │  • Testing transactions
        │
        ▼
   Merchant Goes Live
        │
        │
STEP 5: ONGOING SUPPORT & RESIDUALS
────────────────────────────────────
        │
        ├─ ISO Provides:
        │  • Customer support (equipment issues, declines)
        │  • Chargeback assistance
        │  • Statement reconciliation
        │  • Equipment upgrades
        │
        └─ ISO Earns:
           • Residual income (basis points on volume)
           • Equipment lease revenue
           • Ongoing service fees

   ┌────────────────────────────────────────────────────────┐
   │  ISO's incentive: Keep merchant happy and processing!  │
   │  Happy merchant = Long-term residual income            │
   └────────────────────────────────────────────────────────┘
```

**Key Insight:** ISOs are NOT involved in the actual transaction processing. They handle sales, onboarding, and support. The processor handles the technical infrastructure.

---

## ISO Types and Structure

The ISO world has evolved into different tiers and models:

### Types of ISOs

| ISO Type | Description | Risk/Responsibility | Revenue Model |
|----------|-------------|---------------------|---------------|
| **Registered ISO** | Has own BIN (Bank Identification Number), registered with card networks, takes on underwriting/risk responsibilities | HIGH - First-line liability for merchant risk | Highest residuals (0.30-1.00% of volume) |
| **Wholesale ISO** | Resells processor's services under their own brand, but processor handles underwriting | MEDIUM - Reputational risk, less financial liability | Medium residuals (0.10-0.40% of volume) |
| **Agent/Sub-Agent** | Individual sales rep or small company working under an ISO's umbrella | LOW - No direct liability, commission-based | Commission on sign-ups + smaller residuals |
| **ISO/ISV Hybrid** | Software company (ISV) that also acts as ISO, selling both software and payments | MEDIUM - Software reduces churn, adds value | Software fees + payment residuals |

### ISO Hierarchy: How the Money Flows

```
┌──────────────────────────────────────────────────────────────────────┐
│                        ISO HIERARCHY STRUCTURE                       │
└──────────────────────────────────────────────────────────────────────┘

                    ┌────────────────────────┐
                    │    ACQUIRING BANK      │
                    │    + PROCESSOR         │
                    │  (e.g., First Data)    │
                    └──────────┬─────────────┘
                               │
                   ┌───────────┴───────────┐
                   │  Charges merchant:    │
                   │  IC + 0.50% markup    │
                   └───────────┬───────────┘
                               │
                               ▼
                    ┌────────────────────────┐
                    │   MASTER ISO           │
                    │   (Registered ISO)     │
                    │   e.g., "North"        │
                    └──────────┬─────────────┘
                               │
                   ┌───────────┴───────────┐
                   │  Keeps: 0.20%         │
                   │  Passes down: 0.30%   │
                   └───────────┬───────────┘
                               │
                               ▼
                    ┌────────────────────────┐
                    │   SUB-ISO              │
                    │   (Regional partner)   │
                    └──────────┬─────────────┘
                               │
                   ┌───────────┴───────────┐
                   │  Keeps: 0.15%         │
                   │  Passes down: 0.15%   │
                   └───────────┬───────────┘
                               │
                               ▼
                    ┌────────────────────────┐
                    │   AGENT                │
                    │   (Individual rep)     │
                    └──────────┬─────────────┘
                               │
                   ┌───────────┴───────────┐
                   │  Keeps: 0.15%         │
                   │  (residual income)    │
                   └───────────┬───────────┘
                               │
                               ▼
                    ┌────────────────────────┐
                    │   MERCHANT             │
                    │   $1M monthly volume   │
                    └────────────────────────┘

EXAMPLE REVENUE SPLIT ($1M monthly volume):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Merchant pays: Interchange + 0.50% total markup = $5,000/month
• Master ISO earns: 0.20% × $1M = $2,000/month
• Sub-ISO earns: 0.15% × $1M = $1,500/month
• Agent earns: 0.15% × $1M = $1,500/month
• Total distributed: $5,000/month

NOTES:
• Each tier takes a cut, passing remainder down
• Agent/rep does the actual sales work
• Master ISO provides infrastructure, compliance, support
• This hierarchy allows massive scale (thousands of agents)
```

**Why This Structure Exists:**

- **Master ISO:** Has network registration, compliance team, underwriting capabilities, scale
- **Sub-ISO:** Regional expertise, established merchant relationships, sales team
- **Agent:** On-the-ground sales force, local market knowledge, merchant relationships

**Economics:** Successful ISOs achieve **15-25% EBITDA margins**. The key is scale - sign up thousands of merchants to generate meaningful residual income.

---

## ISO Revenue Model

ISOs earn money through **residual income** - ongoing passive income based on merchant transaction volume.

### How ISOs Make Money

```
┌──────────────────────────────────────────────────────────────────────┐
│                        ISO REVENUE STREAMS                           │
└──────────────────────────────────────────────────────────────────────┘

1. RESIDUAL INCOME (Primary Revenue)
═══════════════════════════════════════
   • Basis points on transaction volume
   • Recurring, passive income
   • Grows with merchant success

   Example: Merchant processes $100K/month
   ISO earns 0.25% = $250/month residual

   100 merchants × $250 = $25,000/month

   Scale is key: Need hundreds/thousands of merchants

2. RATE MARKUP
═══════════════════════════════════════
   • ISO "buys" at processor rate
   • "Sells" to merchant at higher rate
   • Keeps the difference

   Example:
   Processor charges ISO: IC + 0.20%
   ISO charges merchant: IC + 0.45%
   ISO keeps: 0.25% markup

3. MONTHLY SERVICE FEES
═══════════════════════════════════════
   • Statement fee: $10-25/month
   • PCI compliance fee: $5-15/month
   • Gateway fee: $10-25/month
   • Account maintenance: $5-20/month

   Total: $30-85/month per merchant

4. EQUIPMENT SALES/LEASES
═══════════════════════════════════════
   • Terminal sales: $200-500 upfront
   • Terminal leases: $30-60/month (often predatory)
   • Card readers: $50-100
   • POS systems: $500-2,000+

   Note: Equipment leases are controversial
         (48-month lease = $1,440-2,880 for $200 terminal)

5. CHARGEBACK FEES
═══════════════════════════════════════
   • Per-chargeback handling fee: $15-25
   • Passed through from processor + markup
   • Can be significant for high-risk merchants

6. EARLY TERMINATION FEES (ETF)
═══════════════════════════════════════
   • If merchant cancels contract early
   • Typical: $295-$595
   • Controversial but common
   • Compensates ISO for lost future residuals

7. PCI NON-COMPLIANCE FEES
═══════════════════════════════════════
   • If merchant doesn't complete PCI SAQ
   • $20-50/month penalty
   • Incentivizes compliance, generates revenue
```

### Residual Income: The ISO's Holy Grail

**Why Residuals Matter:**

- **Passive income:** Once merchant is onboarded, ISO earns monthly without additional work
- **Compounds over time:** More merchants = More residuals
- **Sellable asset:** ISOs can sell their merchant portfolio (typically 2-4× annual residuals)

**Example ISO Economics:**

```
ISO Portfolio Example (Mid-Sized ISO)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Merchants: 500
Average volume per merchant: $50,000/month
Average residual: 0.30% of volume

MONTHLY RESIDUAL INCOME:
500 merchants × $50K × 0.30% = $75,000/month

ANNUAL RESIDUAL INCOME:
$75,000 × 12 = $900,000/year

PORTFOLIO VALUE (at 3× annual residuals):
$900K × 3 = $2.7 million

ADDITIONAL REVENUE (monthly fees, equipment):
~$20-30K/month additional

TOTAL ANNUAL REVENUE:
~$1.1M - $1.2M

EXPENSES:
- Sales team salaries: $300K
- Support staff: $150K
- Marketing: $100K
- Overhead: $100K
- Chargebacks/reserves: $50K
Total: ~$700K

NET PROFIT: $400-500K (15-20% EBITDA margin)
```

**Key Insight:** ISOs are incentivized to keep merchants happy and processing. A merchant leaving or going out of business directly impacts the ISO's residual income stream.

---

## ISO vs PayFac Model

ISOs and PayFacs compete for the same merchants, but with fundamentally different models.

### Comparison: Traditional ISO vs PayFac

```
┌──────────────────────────────────────────────────────────────────────┐
│                       ISO vs PAYFAC MODELS                           │
└──────────────────────────────────────────────────────────────────────┘

TRADITIONAL ISO MODEL                     PAYFAC MODEL
─────────────────────────                ──────────────────

    ISO (Sales Partner)                  PayFac (Master Merchant)
            │                                      │
            │ Refers merchant                      │ Aggregates
            │ for underwriting                     │ sub-merchants
            ▼                                      ▼
    ┌──────────────────┐               ┌──────────────────┐
    │ ACQUIRING BANK   │               │ SPONSOR BANK     │
    │ Underwrites each │               │ Underwrites only │
    │ merchant         │               │ the PayFac       │
    └────────┬─────────┘               └────────┬─────────┘
             │                                   │
             │ Assigns individual                │ PayFac has
             │ MID to each merchant              │ Master MID
             │                                   │
    ┌────────▼─────────┐               ┌────────▼─────────┐
    │ MERCHANT         │               │ SUB-MERCHANT 1   │
    │ (Own MID)        │               │ (Under master)   │
    └──────────────────┘               ├──────────────────┤
    ┌──────────────────┐               │ SUB-MERCHANT 2   │
    │ MERCHANT         │               │ (Under master)   │
    │ (Own MID)        │               ├──────────────────┤
    └──────────────────┘               │ SUB-MERCHANT 3   │
                                       │ (Under master)   │
                                       └──────────────────┘
```

### ISO vs PayFac: Detailed Comparison

| Aspect | ISO Model | PayFac Model |
|--------|-----------|--------------|
| **Merchant Account** | Each merchant gets own MID from acquirer | All sub-merchants under PayFac's master MID |
| **Onboarding Time** | Days to weeks (bank underwriting required) | Instant to hours (PayFac underwrites) |
| **Underwriting** | Acquiring bank underwrites each merchant | PayFac underwrites sub-merchants |
| **Liability** | Acquiring bank bears chargeback risk | PayFac bears first-line chargeback risk |
| **Reserves** | Merchant may hold reserves with acquirer | PayFac may hold reserves from sub-merchants |
| **Regulatory** | ISO must register with networks | PayFac must register + comply with sponsor bank rules |
| **Settlement** | Funds go directly to merchant's bank account | Funds go to PayFac, then PayFac pays out sub-merchants |
| **Revenue Model** | Residual income on transaction volume | Transaction fees + platform fees + float |
| **Risk Burden** | Low - bank bears merchant risk | High - PayFac bears sub-merchant risk |
| **Technology** | Often relies on processor's tech | Must build robust platform for sub-merchant management |
| **Capital Requirements** | Low (sales/marketing) | High (reserves, compliance, technology) |
| **Scalability** | Limited by bank underwriting capacity | High - instant onboarding, software-driven |
| **Best For** | Traditional merchants, high-volume businesses | Platforms, SaaS companies, marketplaces |

### Merchant Onboarding: ISO vs PayFac Flow

```
┌──────────────────────────────────────────────────────────────────────┐
│              ONBOARDING COMPARISON: ISO vs PAYFAC                    │
└──────────────────────────────────────────────────────────────────────┘

ISO ONBOARDING (Days to Weeks)
═══════════════════════════════════════════════════════════════

Day 0:  Merchant applies via ISO
        │
        ├─ ISO collects extensive documentation
        │  • Business license
        │  • Bank statements (3-6 months)
        │  • Owner SSN, DOB, credit check authorization
        │  • Business EIN
        │  • Voided check
        │  • Processing history
        │
Day 1-2: ISO submits to acquiring bank/processor
        │
        ├─ Bank underwriting team reviews
        │  • Credit check (business + owner)
        │  • MATCH list screening
        │  • Risk assessment
        │  • Sanctions screening
        │  • Business verification
        │
Day 3-5: Underwriting decision
        │
        ├─ If approved:
        │  • MID assigned
        │  • Pricing confirmed
        │  • Reserves determined (if needed)
        │
Day 5-7: Setup & activation
        │
        ├─ Terminal/POS shipped
        │  • 2-5 days shipping
        │  • On-site installation (optional)
        │  • Training session
        │  • Test transactions
        │
Day 7-14: Merchant goes live
        │
        └─ Total time: 7-14 days (often longer)


PAYFAC ONBOARDING (Minutes to Hours)
═══════════════════════════════════════════════════════════════

Minute 0:  Merchant/sub-merchant applies online
           │
           ├─ Minimal info required (initially):
           │  • Business name
           │  • Email
           │  • Bank account for payouts
           │  • Owner name, DOB, SSN (last 4)
           │
Minute 1-5: PayFac's automated underwriting
           │
           ├─ Instant checks:
           │  • Identity verification (IDV APIs)
           │  • Business verification (Secretary of State)
           │  • Basic fraud screening
           │  • Risk scoring model
           │
Minute 5-10: Instant approval (most cases)
           │
           ├─ Sub-merchant ID assigned
           │  • API keys generated
           │  • Dashboard access granted
           │  • Can start processing immediately
           │
Minute 10+: Merchant/sub-merchant goes live
           │
           └─ Total time: 10-60 minutes

POST-APPROVAL (PayFac):
───────────────────────
• Additional verification may happen asynchronously
• PayFac monitors early transactions closely
• May request additional docs after first transactions
• Can pause account if red flags emerge

KEY DIFFERENCE:
──────────────
ISO: Bank says "yes" or "no" upfront
PayFac: PayFac says "yes" instantly, monitors continuously
```

**Why PayFacs Win on Speed:**

1. **They ARE the underwriter** - No waiting for bank approval
2. **Software-driven** - Automated risk scoring, instant decisions
3. **Risk-based monitoring** - Approve first, verify later (for low-risk)
4. **API-first** - Onboarding embedded in platform's UX

**Why ISOs Still Exist Despite PayFac Competition:**

1. **Traditional merchants prefer own MID** - Some businesses want direct bank relationship
2. **High-volume merchants** - Often get better rates through ISO/bank negotiation
3. **Complex businesses** - Custom pricing, specialized equipment, industry expertise
4. **Lower risk exposure** - Some businesses don't want PayFac aggregation model

---

## Position in Payment Ecosystem

ISOs occupy a unique position as the "sales force" of the payment industry. Understanding where they fit helps clarify their role and value.

### ISO in the Value Chain

```
┌──────────────────────────────────────────────────────────────────────┐
│                    PAYMENT ECOSYSTEM VALUE CHAIN                     │
└──────────────────────────────────────────────────────────────────────┘

┌─────────────────┐
│  CARD NETWORKS  │  Rule-makers, message routers, dispute arbiters
│ (Visa, MC, Amex)│  Revenue: Assessment fees, network fees
└────────┬────────┘
         │
         ├──────────────┬──────────────┐
         │              │              │
┌────────▼────────┐ ┌──▼──────────┐ ┌─▼─────────────┐
│ ISSUING BANKS   │ │ ACQUIRING   │ │  PROCESSORS   │
│ (Chase, BofA)   │ │ BANKS       │ │ (First Data,  │
│                 │ │ (Wells,     │ │  Worldpay)    │
│ Issue cards to  │ │  Chase)     │ │               │
│ consumers       │ │             │ │ Tech infra,   │
│                 │ │ Provide MIDs│ │ routing, APIs │
│ Revenue:        │ │ to merchants│ │               │
│ Interchange,    │ │             │ │ Revenue:      │
│ interest, fees  │ │ Revenue:    │ │ Processing    │
└─────────────────┘ │ Acquirer    │ │ markup        │
                    │ markup      │ └───────┬───────┘
                    └──────┬──────┘         │
                           │                │
                           └────────┬───────┘
                                    │
                           ┌────────▼────────┐
                           │      ISOs       │◀─── SALES LAYER
                           │                 │
                           │ Merchant        │     • Sign up merchants
                           │ acquisition,    │     • Handle onboarding
                           │ onboarding,     │     • Provide support
                           │ support         │     • Earn residuals
                           │                 │
                           │ Revenue:        │
                           │ Residuals,      │
                           │ monthly fees,   │
                           │ equipment       │
                           └────────┬────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
           ┌────────▼────────┐ ┌───▼──────────┐ ┌─▼──────────────┐
           │   MERCHANTS     │ │  MERCHANTS   │ │   MERCHANTS    │
           │                 │ │              │ │                │
           │ Accept cards,   │ │ (Thousands   │ │ (Small &       │
           │ pay fees        │ │  signed up   │ │  mid-market)   │
           └─────────────────┘ │  by ISO)     │ └────────────────┘
                               └──────────────┘
```

**ISO's Value Proposition:**

- **To Processors/Banks:** Sales force at scale, merchant support, local market expertise
- **To Merchants:** Easier access to payment acceptance, personalized support, equipment/training

See Four-Party Model <!-- (/ecosystem/core-concepts/four-party-model not yet migrated) --> for the foundational payment structure that ISOs operate within.

---

## Major Players (2024-2025)

The ISO market is fragmented with ~3,500 ISOs in the US, but consolidation is ongoing.

### Top ISOs (2024-2025)

#### North (formerly North American Bancard)

**Rebranded:** August 2024 (North American Bancard → North)

**Market Position:**
- One of largest non-bank merchant acquirers in North America
- $100B+ in annual transaction volume
- 100,000+ businesses served
- Strong in retail, restaurant, and e-commerce verticals

**Key Products:**
- EPX platform (omnichannel commerce)
- Point-of-sale systems
- E-commerce gateways
- ISV/PayFac partnerships

**Why They're Notable:**
- Major presence in ISO channel and direct acquiring
- Strong technology focus (modern platforms)
- Aggressive growth through partnerships

#### Elavon

**Ownership:** US Bank subsidiary

**Market Position:**
- Works with 265+ ISOs/MSPs (Merchant Service Providers)
- Forbes Best 2024 top 10 credit card processing
- Strong international presence (Europe, Canada, Latin America)

**ISO Program:**
- Provides processing infrastructure for ISOs
- Offers ISO partner program with residual sharing
- Banks on US Bank's sponsorship/licensing

**Why ISOs Choose Elavon:**
- Bank-backed stability and compliance
- International reach (for ISOs with global merchants)
- Competitive residual programs

#### Strategic Payments (SWIPE)

**Model:** Technology-forward ISO with proprietary software

**Focus:**
- Small to mid-market merchants
- Vertical-specific solutions (healthcare, retail, automotive)
- POS and payment processing bundled

#### Payment Depot

**Model:** Membership-based pricing (no residual markup)

**Differentiation:**
- Transparent pricing: Merchants pay monthly membership fee + true interchange-plus
- No long-term contracts
- ISO-like sales model but PayFac-like transparency

**Why Notable:** Disrupting traditional ISO pricing models

### Market Statistics

| Metric | Value |
|--------|-------|
| **Total ISOs in US** | ~3,500 |
| **ISO Market Share** | ~25% of all US merchant sign-ups |
| **Average ISO Size** | 50-500 merchants |
| **Top 50 ISOs** | Control ~60% of ISO market |
| **Residual Rates** | 0.10% - 1.00% of volume (avg ~0.25%) |
| **EBITDA Margins** | 15-25% (successful ISOs) |

### Major Processors ISOs Work With

| Processor | ISO Program | Notable |
|-----------|-------------|---------|
| **Fiserv/First Data** | ISO partner program | Largest processor, most ISOs use them |
| **Global Payments/Worldpay** | ISO/referral partner tiers | Strong international, vertical focus |
| **Elavon** | 265+ ISO partners | Bank-backed, ISO-friendly |
| **Chase Paymentech** | Select ISO partnerships | Bank integration, treasury services |

---

## Regulatory Requirements

ISOs must comply with card network rules and, in some cases, state and federal regulations.

### Card Network Registration

**Visa and Mastercard Requirements:**

```
┌──────────────────────────────────────────────────────────────────────┐
│                   ISO REGISTRATION REQUIREMENTS                      │
└──────────────────────────────────────────────────────────────────────┘

1. NETWORK REGISTRATION
═══════════════════════════════════════════════════════════════
   • Register with Visa and Mastercard as Third-Party Agent
   • Requires sponsor bank or processor relationship
   • Annual registration fees ($1,000-$5,000/network)
   • Must list all sub-agents

2. SPONSOR BANK AGREEMENT
═══════════════════════════════════════════════════════════════
   • ISO must have agreement with acquiring bank/processor
   • Bank sponsors the ISO's network registration
   • Bank retains ultimate liability
   • Agreement specifies:
     - Merchant categories allowed
     - Volume limits
     - Reserve requirements
     - Termination clauses

3. BACKGROUND CHECKS
═══════════════════════════════════════════════════════════════
   • Principals must pass background checks
   • No history of fraud, MATCH list violations
   • Credit checks may be required
   • Ongoing monitoring

4. FINANCIAL REQUIREMENTS
═══════════════════════════════════════════════════════════════
   • Some sponsors require reserves from ISO
   • Proof of business liability insurance
   • Financial audits (for larger ISOs)
```

### PCI DSS Compliance (2025)

**PCI DSS 4.0 Full Enforcement:** March 31, 2025

**ISO Responsibilities:**

| Scenario | PCI Requirement |
|----------|-----------------|
| **ISO handles card data** (call center, web portal) | Level 1 PCI DSS compliance (annual audit) |
| **ISO doesn't handle card data** (referral only) | Merchant must comply; ISO ensures merchants are compliant |
| **ISO provides payment terminals** | Must ensure terminals are PCI PTS certified |

**Key Point:** Most ISOs structure operations to AVOID touching card data (reducing PCI scope). They rely on processor's PCI-compliant infrastructure.

### AML/BSA Compliance

**Money Services Business (MSB) Considerations:**

- **Traditional ISO:** Generally NOT considered MSB (they don't move money)
- **ISO that holds merchant funds:** May trigger MSB registration requirement
- **PayFac:** IS subject to AML/BSA as they hold/move funds

**Best Practice:** ISOs consult legal counsel to ensure they don't inadvertently trigger MSB status.

### State Licensing

**Money Transmitter Licenses (MTLs):**

- **Traditional ISO:** Usually not required (not transmitting money)
- **ISO offering value-added services:** May require licensing depending on state
- **Varies by state:** Each state has different definitions

**Example:** If ISO holds merchant funds before remittance, some states may require MTL.

---

## Current Trends and Future

The ISO industry is evolving rapidly due to technological disruption and changing merchant expectations.

### Trend 1: Competition from PayFac Model

**Challenge:** PayFacs offer instant onboarding vs ISO's days/weeks

**ISO Response:**
- Partner with PayFac platforms (become resellers of PayFac services)
- Offer hybrid models (fast onboarding for low-risk, traditional for high-volume)
- Focus on high-touch service that PayFacs can't easily replicate

**Market Impact:**
- PayFac market projected to reach $4 trillion by 2025
- ISOs shifting from volume game to value game

### Trend 2: Vertical Specialization

**Why Verticals Win:**
- Deep industry expertise (understand merchant pain points)
- Tailored solutions (industry-specific POS, reporting, integrations)
- Higher margins (value-added services command premium)
- Lower churn (sticky due to specialized features)

**Popular Verticals:**
- Healthcare (medical billing integration, HIPAA compliance)
- Restaurants (POS, online ordering, table management)
- Automotive (dealership management systems)
- Retail (inventory management, e-commerce integration)
- Professional services (appointment scheduling, invoicing)

**Example:** An ISO specializing in dental practices offers:
- Dental practice management software integration
- Patient payment plans
- Insurance claim processing
- HIPAA-compliant payment processing

This ISO can charge higher fees and retains merchants longer than generic ISOs.

### Trend 3: Technology Integration (ISV/ISO Convergence)

**ISV-ISO Model:**

```
Traditional ISO:                    ISV-ISO:
────────────────                   ──────────

"We sell payment                   "We sell software that
processing"                        happens to include
                                  payments"

Merchant pays:                     Merchant pays:
• Processing fees                  • Software subscription
                                  • Processing fees (embedded)

Value proposition:                 Value proposition:
• Competitive rates                • Solve business problem
• Good support                     • Payments are seamless

Churn: HIGH                        Churn: LOW
(Easy to switch)                   (Switching software is hard)
```

**Why ISV-ISO Wins:**
- **Stickiness:** Merchants don't switch software easily
- **Higher lifetime value:** Software fees + payment residuals
- **Better experience:** Unified platform (no separate payment login)
- **Data advantage:** Software generates data that improves underwriting/fraud

**Examples:**
- Toast (restaurant POS + payments)
- Mindbody (fitness studio management + payments)
- Procore (construction project management + payments)

### Trend 4: Market Consolidation

**Drivers:**
- Scale advantages (technology investments, compliance costs)
- Residual portfolio monetization (ISOs selling to larger players)
- Private equity interest (predictable cash flows attractive)

**Activity:**
- Larger ISOs acquiring smaller ISOs for their merchant portfolios
- ISOs being acquired by processors/PayFacs for distribution channels
- Private equity roll-ups (acquire multiple ISOs, consolidate operations)

**Valuation Metrics:**
- 2-4× annual residual income (typical)
- Higher multiples for:
  - Low churn portfolios
  - Vertical-specialized books
  - Technology-integrated ISOs

### Trend 5: Embedded Finance & Invisible Payments

**Shift:** Payments becoming invisible, embedded in software workflows

**Impact on ISOs:**
- Traditional "payment-first" pitch losing effectiveness
- Merchants want solutions, not just payment processing
- ISOs must offer value beyond processing rates

**ISO Evolution:**
- From payment provider → Business solutions partner
- Bundling: Payments + software + lending + banking services
- Example: ISO offers:
  - Payment processing
  - POS software
  - Small business lending (through partner)
  - Business checking account (through BaaS partner)

### Trend 6: AI-Powered Fraud Prevention

**New Capability:** Machine learning models for real-time fraud detection

**ISO Opportunity:**
- Offer advanced fraud tools as value-add
- Reduce merchant chargebacks (increases retention)
- Differentiate from basic processing

**Partners:** ISOs partnering with fraud vendors (Sift, Kount, Riskified) to offer integrated fraud prevention.

---

## Self-Assessment Questions & Answers

### Question 10: An ISO approaches our platform to resell payment services. What does the ISO expect to receive from us, and what do they provide in return?

**Answer:**

**What the ISO Expects to Receive from Your PayFac Platform:**

1. **Residual Income/Revenue Share**
   - Basis points on transaction volume (typically 0.10-0.40% of processing volume)
   - Or: Percentage of the platform fees you charge
   - Ongoing passive income as long as merchants they refer are processing

2. **White-Label Capabilities**
   - Ability to brand the payment experience as their own
   - Custom branding on merchant dashboards, reports, emails
   - Their logo/name on merchant-facing materials

3. **Technical Integration/Platform Access**
   - API access to onboard sub-merchants
   - Merchant management dashboard (view portfolio, track volume, manage merchants)
   - Reporting tools (residual reports, transaction reports)

4. **Support Infrastructure**
   - Technical support for their merchants (or they'll handle first-line, escalate to you)
   - Underwriting support (you handle or collaborate on decisions)
   - Chargeback management tools

5. **Marketing Collateral**
   - Sales materials, case studies, pitch decks
   - Co-branded marketing assets
   - Training on how to sell your platform

6. **Fast Merchant Onboarding**
   - Instant or same-day onboarding (key advantage over traditional acquiring)
   - Simple application process for their merchants
   - Lower barrier to entry than bank underwriting

**What the ISO Provides in Return:**

1. **Merchant Acquisition**
   - Sales force to sign up new merchants
   - Access to their existing merchant relationships
   - Industry/vertical expertise and credibility

2. **First-Line Merchant Support**
   - Handle merchant questions, technical issues
   - Relationship management (keep merchants happy)
   - Reduce your support burden

3. **Local Market Presence**
   - Boots on the ground in regions/industries you don't reach
   - Face-to-face sales (some merchants prefer this)
   - Regional expertise and trust

4. **Merchant Retention**
   - Ongoing relationship keeps merchants processing
   - Proactive account management
   - Quick response to merchant needs

5. **Volume/Scale**
   - Bring significant processing volume to your platform
   - Help you reach economies of scale faster
   - Diversify your merchant base

**The Deal Structure (Typical):**

```
┌──────────────────────────────────────────────────────────────────────┐
│                   ISO RESELLER PARTNERSHIP MODEL                     │
└──────────────────────────────────────────────────────────────────────┘

YOUR PAYFAC PLATFORM
        │
        ├─ Provides:
        │  • White-label payment platform
        │  • API access
        │  • Compliance/underwriting
        │  • Settlement infrastructure
        │  • Support (tier 2/3)
        │
        ├─ Earns:
        │  • Processing markup (e.g., 0.50% of volume)
        │  • Platform fees
        │
        └─ Pays ISO:
           • Residual: 0.20% of volume
           • Or: 40% of platform revenue share

ISO PARTNER
        │
        ├─ Provides:
        │  • Merchant acquisition (sales)
        │  • First-line support
        │  • Merchant relationship management
        │  • Local market expertise
        │
        ├─ Earns:
        │  • Residual from you: 0.20% of volume
        │
        └─ May also charge merchants:
           • Additional services (POS, software)
           • Setup fees
           • Premium support fees

MERCHANT/SUB-MERCHANT
        │
        └─ Pays total processing fees
           (your markup + ISO's services)
```

**Key Negotiation Points:**

1. **Residual/Revenue Share:** What percentage or basis points?
2. **Exclusivity:** Is ISO exclusive to your platform or can they resell competitors?
3. **Minimum Volume Commitments:** Does ISO guarantee X merchants or Y volume?
4. **Support Responsibilities:** Who handles what level of support?
5. **Branding:** How much white-labeling is allowed?
6. **Contract Term:** How long is the partnership agreement?

**Why This Benefits Your PayFac Platform:**

- **Distribution at scale:** ISOs bring hundreds/thousands of merchants you wouldn't reach
- **Lower customer acquisition cost (CAC):** ISO does the sales work
- **Reduced support burden:** ISO handles first-line merchant support
- **Faster growth:** Leverage ISO's existing sales infrastructure

**Risks to Manage:**

- **Brand reputation:** ISO's poor service reflects on your platform
- **Compliance:** ISO must follow your underwriting/compliance rules
- **Merchant quality:** ISO incentivized by volume, may onboard risky merchants
- **Margin compression:** Sharing residuals reduces your take rate

**Best Practice:** Vet ISOs carefully. Check their merchant portfolio quality, churn rates, and compliance history before partnering.

---

## Key Takeaways

1. **ISOs are sales intermediaries** - They don't process transactions; they sign up merchants and earn residual income

2. **Each merchant gets own MID** - Unlike PayFacs, ISOs refer merchants to acquirers for individual merchant accounts

3. **Residual income is the holy grail** - ISOs earn ongoing passive income based on merchant transaction volume

4. **Hierarchy exists** - Master ISOs, sub-ISOs, and agents each take a cut of residuals

5. **~3,500 ISOs in US market** - Fragmented industry handling ~25% of merchant sign-ups

6. **ISOs evolved to solve sales problem** - Banks are good at banking, bad at sales; ISOs filled the gap

7. **PayFacs are disrupting ISOs** - Instant onboarding vs days/weeks is a major competitive threat

8. **ISOs are evolving** - Vertical specialization, technology integration, value-added services

9. **Successful ISOs make 15-25% EBITDA** - But require scale (hundreds/thousands of merchants)

10. **For PayFac platforms, ISOs are partners AND competitors** - They can be reseller partners (distribution) or competitors (both targeting same merchants)

---

## References

### Industry Organizations

- [Electronic Transactions Association (ETA)](https://www.electran.org/) - Trade association for payment processors and ISOs
- [Regional Acquirers Association](https://regionalacquirers.org/) - Consortium of independent merchant acquirers and ISOs

### ISO Market Research

- [Nilson Report](https://nilsonreport.com/) - Industry publication tracking ISO market share and trends
- [Digital Transactions](https://www.digitaltransactions.net/) - Payments industry news and analysis

### Major ISO/Acquirer Information

- [North (formerly North American Bancard)](https://www.north.com/) - One of largest non-bank acquirers
- [Elavon ISO Partner Program](https://www.elavon.com/partner-solutions.html) - Elavon's ISO partner offerings
- [Forbes Best Credit Card Processors 2024](https://www.forbes.com/advisor/business/best-credit-card-processors/) - Rankings including major ISOs

### Regulatory & Compliance

- [Visa Agent Rules](https://usa.visa.com/support/merchant/visa-rules.html) - Third-party agent registration requirements
- [Mastercard Third-Party Processor Registration](https://www.mastercard.us/en-us/business/overview/support/rules.html) - TPP requirements
- [PCI Security Standards Council](https://www.pcisecuritystandards.org/) - PCI DSS 4.0 requirements (April 2025 enforcement)

### PayFac vs ISO Comparison

- [Stripe: What is an ISO?](https://stripe.com/resources/more/what-is-an-independent-sales-organization-iso) - ISO definition and model
- [Payrix: ISO vs PayFac](https://www.payrix.com/blog/iso-vs-payfac) - Comparison of models
- [CardConnect: Understanding ISOs](https://cardconnect.com/launchpointe/payment-processing/independent-sales-organization/) - ISO business model

### Market Trends

- [McKinsey: The 2023 McKinsey Global Payments Report](https://www.mckinsey.com/industries/financial-services/our-insights/the-2023-mckinsey-global-payments-report) - Payment industry trends affecting ISOs
- [PaymentsJournal: The Future of the ISO Channel](https://www.paymentsjournal.com/) - ISO market evolution and disruption

---

*Previous Topic: [Acquiring Banks](/ecosystem/industry-players/acquiring-banks/overview)*

*Next Topic: [ISVs (Independent Software Vendors)](/ecosystem/industry-players/isvs)*

---

## Related Topics

| Topic | Description |
|-------|-------------|
| The Four-Party Model | Payment ecosystem where ISOs operate |
| Card Network Role | Network registration requirements for ISOs |
| Transaction Lifecycle <!-- (/ecosystem/core-concepts/transaction-lifecycle not yet migrated) --> | Authorization and settlement that ISOs don't control |
| [Payment Processors](/ecosystem/industry-players/payment-processors) | Processors that ISOs partner with |
| [Payment Gateways](/ecosystem/industry-players/payment-gateways/overview) | Gateway solutions ISOs resell |
| [Acquiring Banks](/ecosystem/industry-players/acquiring-banks/overview) | Sponsor banks for ISO registration |
| [ISVs](/ecosystem/industry-players/isvs) | PayFac model that competes with ISOs |
