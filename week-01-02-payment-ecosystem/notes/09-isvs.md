# ISVs (Independent Software Vendors)

> **Last Updated:** 2025-12-21
>
> **Status:** Complete
>
> **Changes Log:**
> - 2025-12: Initial comprehensive notes

Independent Software Vendors (ISVs) are software companies that embed payment capabilities into their vertical-specific applications. ISVs represent the fastest-growing channel for merchant payment adoption, with **ISV market share projected to grow from 29% to 37%** of merchant acquisition. Understanding ISVs is critical because they are the ideal customer segment for PayFac platforms.

---

## Overview

An **ISV (Independent Software Vendor)** is a company that develops and sells software designed for specific business verticals or use cases. Unlike ISOs who primarily sell payment processing, ISVs sell software solutions that happen to include payments.

| Role | Description |
|------|-------------|
| **Primary Product** | Vertical-specific software (POS, practice management, booking systems) |
| **Payment Role** | Embed payments into software as a feature (not the core product) |
| **Value Proposition** | Solve industry-specific business problems, payments are seamless |
| **Revenue Model** | SaaS subscriptions + payment processing revenue |

**Key Point:** ISVs monetize payments as an **enhancement** to their software business. The software creates merchant dependency; payments become a natural revenue multiplier.

**The ISV Advantage:**
- **Stickiness:** Merchants won't switch software just for better payment rates
- **Higher LTV:** Software + payments = 2-5x revenue per merchant (a16z data)
- **Lower Churn:** 5-10% vs 15-30% for pure payment providers

---

## Historical Evolution

ISVs evolved from pure software companies to payment-embedded platforms.

### Timeline: The Rise of ISV-Embedded Payments

```
TIMELINE: ISV PAYMENT EVOLUTION
═══════════════════════════════════════════════════════════════

1990s-2000s: Software and Payments Separate
┌─────────────────────────────────────────────────────────────┐
│ • ISVs sell software (POS, practice management, etc.)       │
│ • Merchants get payments separately from ISO/bank           │
│ • Two vendors, two relationships, no integration            │
│ • Reconciliation headache: Match software sales to payments │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
2005-2010: Basic Integrations Emerge
┌─────────────────────────────────────────────────────────────┐
│ • ISVs partner with payment gateways (Authorize.net)        │
│ • Basic API integrations (separate logins, separate systems)│
│ • ISVs earn referral fees ($50-100 per merchant)            │
│ • Still fragmented experience for merchants                 │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
2010-2015: Square & Stripe Change Everything
┌─────────────────────────────────────────────────────────────┐
│ • Square (2009): Hardware + software + payments unified     │
│ • Stripe (2010): Developer-first APIs for embedded payments │
│ • Stripe Connect (2012): Enable platforms to onboard subs   │
│ • Merchants expect integrated, seamless payment experiences │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
2015-2020: ISV-to-PayFac Movement
┌─────────────────────────────────────────────────────────────┐
│ • Toast, Mindbody, Shopify become PayFacs                   │
│ • ISVs realize: "We can own the payment stack"              │
│ • PayFac-as-a-Service (PFaaS) emerges for smaller ISVs      │
│ • Payment revenue often exceeds software revenue            │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
2020-Present: Embedded Finance Expansion
┌─────────────────────────────────────────────────────────────┐
│ • Beyond payments: Lending, banking, insurance embedded     │
│ • ISV share of merchant acquisition: 29% → 37% (projected)  │
│ • Vertical SaaS dominates (horizontal software losing)      │
│ • AI/data driving new capabilities (fraud, underwriting)    │
└─────────────────────────────────────────────────────────────┘
```

**Key Insight:** The ISV payment evolution follows a clear pattern: **Software first, payments second**. ISVs that successfully embed payments create enormous switching costs and unlock significant revenue.

---

## What ISVs Do

ISVs solve industry-specific business problems through software, with payments as an integrated capability.

### The ISV Value Proposition

```
┌──────────────────────────────────────────────────────────────────────┐
│                    WHY MERCHANTS CHOOSE ISVs                         │
└──────────────────────────────────────────────────────────────────────┘

TRADITIONAL APPROACH (Without ISV):
──────────────────────────────────
Merchant needs:
1. Business software (POS, scheduling, etc.)
2. Payment processing (separate vendor)
3. Reporting/reconciliation (manual)
4. Integrations (often broken)

Timeline: Weeks to months to set up
Relationships: 2-5 different vendors
Complexity: High

ISV APPROACH (Embedded Payments):
──────────────────────────────────
Merchant needs:
1. ISV software (includes payments)

Timeline: Same day to 48 hours
Relationships: 1 vendor
Complexity: Low
Additional benefit: Unified reporting, automated reconciliation
```

### How ISVs Add Value

```
┌──────────────────────────────────────────────────────────────────────┐
│                    ISV VALUE STACK EXAMPLE                           │
│                    (Restaurant Software)                             │
└──────────────────────────────────────────────────────────────────────┘

                    ┌─────────────────┐
                    │  Diner/Customer │
                    └────────┬────────┘
                             │
                    ┌────────▼─────────┐
                    │   Restaurant     │
                    │   POS Terminal   │
                    └────────┬─────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                                         │
        ▼                                         ▼
┌───────────────┐                       ┌─────────────────┐
│ Payment       │                       │ Restaurant      │
│ Processing    │                       │ Management      │
│               │                       │                 │
│ • Card Auth   │                       │ • Menu Mgmt     │
│ • Settlement  │                       │ • Table Mgmt    │
│ • Tip Adjust  │                       │ • Kitchen Display│
│ • Reporting   │                       │ • Inventory     │
└───────┬───────┘                       │ • Labor Mgmt    │
        │                               │ • Reporting     │
        │                               └─────────────────┘
        │
        ▼
┌─────────────────────────────────────────┐
│         Value-Added Services            │
│                                         │
│  • Working Capital Loans (Toast Capital)│
│  • Payroll processing                   │
│  • Online ordering integration          │
│  • Loyalty programs                     │
│  • Third-party delivery integration     │
└─────────────────────────────────────────┘
                    │
                    ▼
            ┌───────────────┐
            │  Restaurant   │
            │     Owner     │
            │               │
            │ Single login  │
            │ Unified data  │
            │ One vendor    │
            └───────────────┘
```

---

## ISV Payment Integration Models

ISVs have evolved through several payment partnership models, each offering different levels of control and revenue.

### Evolution of ISV Payment Models

```
┌─────────────────────────────────────────────────────────────────┐
│               ISV Payment Model Evolution                        │
└─────────────────────────────────────────────────────────────────┘

Level 1: REFERRAL MODEL (Least Control, Least Revenue)
┌──────────────┐      Refers      ┌──────────────┐
│     ISV      │ ────────────────> │   Payment    │
│   Software   │                   │   Provider   │
└──────────────┘                   └──────────────┘
       │                                  │
       │                                  │
       ▼                                  ▼
  ┌─────────────────────────────────────────┐
  │           Merchant                      │
  │  (Manages two separate relationships)   │
  └─────────────────────────────────────────┘

Revenue: $50-100 per merchant referral (one-time)


Level 2: ISO PARTNERSHIP (Some Control, Some Revenue)
┌──────────────┐   Acts as ISO    ┌──────────────┐
│     ISV      │ <───────────────> │  Processor/  │
│  (ISO Agent) │   Revenue Share   │   Acquirer   │
└──────────────┘                   └──────────────┘
       │                                  │
       │                                  │
       └──────────┬───────────────────────┘
                  │
                  ▼
            ┌──────────┐
            │ Merchant │
            └──────────┘

Revenue: 10-20% of processing margin (ongoing residuals)
Control: Limited pricing control, no underwriting control


Level 3: [PAYFAC MODEL](#the-payfac-model) (High Control, High Revenue, High Risk)
┌──────────────────────────────────────────────────────┐
│                  ISV as PayFac                       │
│  ┌────────────┐         ┌──────────────────────┐    │
│  │    ISV     │         │  Payment Processing  │    │
│  │  Software  │ <────>  │  & Risk Management   │    │
│  └────────────┘         └──────────────────────┘    │
│                                                      │
│  Master Merchant Account with Processor/Bank        │
└──────────────────────────────────────────────────────┘
                  │
                  │ Sub-merchant
                  │ Relationships
                  ▼
       ┌──────────────────────┐
       │   Sub-merchants      │
       │  (Rapid onboarding)  │
       └──────────────────────┘

Revenue: 50-100% of processing margin
Control: Full pricing, underwriting, experience control
Risk: Chargeback liability, compliance burden, capital requirements


Level 4: PAYFAC-as-a-SERVICE (Medium Control, Good Revenue, Lower Risk)
┌──────────────────────────────────────────────────────┐
│                  ISV Platform                        │
│  ┌────────────┐         ┌──────────────────────┐    │
│  │    ISV     │         │   Payment UX/API     │    │
│  │  Software  │ <────>  │   (ISV-controlled)   │    │
│  └────────────┘         └──────────────────────┘    │
└──────────────────────────────────────────────────────┘
                  │ API Integration
                  ▼
       ┌──────────────────────┐
       │  PFaaS Provider      │
       │  (Stripe Connect,    │
       │   Adyen for Platforms,│
       │   PayPal Complete)   │
       │                      │
       │ • Compliance         │
       │ • Underwriting       │
       │ • Risk Management    │
       │ • Settlement         │
       └──────────────────────┘
                  │
                  ▼
       ┌──────────────────────┐
       │   Sub-merchants      │
       └──────────────────────┘

Revenue: 40-70% of processing margin
Control: Pricing and UX control, limited underwriting control
Risk: Significantly reduced, provider handles most compliance
```

### Model Comparison Table

| Aspect | Referral | ISO Partnership | PayFac | PFaaS |
|--------|----------|-----------------|--------|-------|
| **Revenue Share** | 1-5% | 10-20% | 50-100% | 40-70% |
| **Control Over Pricing** | None | Limited | Full | Full |
| **Control Over Underwriting** | None | None | Full | Partial |
| **Compliance Burden** | None | Low | Very High | Low-Medium |
| **Time to Market** | N/A | 6-12 months | 12-24 months | 3-6 months |
| **Chargeback Liability** | None | None | Full | Shared |
| **Capital Requirements** | None | Low | High ($500K-$5M) | Low-Medium |
| **Typical Volume Threshold** | Any | Any | $50M+ annually | $10M+ annually |

---

## Major ISV Players (2024-2025)

### Restaurant & Hospitality ISVs

**Toast**
- **Market Position:** #1 full-service restaurant POS
- **POS Market Share:** ~24%
- **Ranking:** 14th largest payment processor by volume
- **Gross Payment Volume (GPV):** $92 billion (2024)
- **Merchants:** 85,000+ restaurant locations
- **Target Market:** Table-service restaurants, full-service dining
- **Payment Model:** PayFac (owns payment stack)
- **Notable:** Payment processing revenue exceeds software subscription revenue
- **Differentiation:** Built specifically for restaurants, not adapted retail POS

**Square (Block, Inc.)**
- **Market Position:** Dominant in micro-merchants and mobile POS
- **POS Market Share:** ~27-28%
- **Merchants:** ~4 million U.S. merchants
- **GPV (F&B segment):** $58 billion
- **Target Market:** Very small retailers, market vendors, mobile sellers
- **Payment Model:** PayFac pioneer
- **Notable:** Democratized payment acceptance for smallest merchants
- **Ecosystem:** Expanded to banking (Square Banking), lending, payroll

**Shift4**
- **GPV:** $72 billion
- **Target Market:** Table-service restaurants, hospitality, stadiums
- **Payment Model:** PayFac + traditional acquiring
- **Notable:** 2024 acquisition of Revel Systems expanded POS footprint
- **Differentiation:** End-to-end payment technology + gateway services

**Clover (Fiserv)**
- **GPV:** $225 billion
- **Market Position:** Largest by volume, distributed through bank channels
- **Target Market:** Counter-service restaurants, retail
- **Distribution:** 41% of payment providers list Clover products
- **Payment Model:** Fiserv-owned platform, bank/ISO distribution
- **Notable:** Distributed through bank branches and ISOs/VARs, not direct sales

### Retail & E-commerce ISVs

**Lightspeed**
- **GPV:** $87 billion
- **Target Market:** Retail businesses needing sophisticated inventory management
- **Verticals:** Golf courses, bike shops, specialty retail
- **Payment Model:** PayFac (multi-processor backend)
- **Differentiation:** Advanced inventory, multi-location management

**Shopify**
- **Payment Revenue:** 74% of total revenue from merchant solutions
- **Merchants:** Millions of e-commerce stores
- **Payment Model Evolution:** Started on Stripe Connect (2013) → evolved to own more stack
- **Notable:** Demonstrates transition from software company to payments company
- **Differentiation:** E-commerce focus, omnichannel (online + in-person POS)

### Vertical Specialty ISVs

**Mindbody (Fitness & Wellness)**
- **Revenue from Payments:** 50%+ of total revenue
- **Target Market:** Fitness studios, yoga, pilates, spas, salons
- **Payment Features:** Recurring billing, class packages, membership management
- **Notable:** Classic vertical SaaS payments monetization model

**Clio (Legal)**
- **ARR Growth:** $100M (2022) → $200M (2024)
- **Target Market:** Law firms and legal practices
- **Payment Features:** Trust accounting compliance, client billing, invoice payments
- **Differentiation:** Industry-specific compliance (IOLTA accounts, bar association rules)

---

## Vertical Markets

ISVs dominate specific vertical markets where industry-specific software creates merchant dependency.

### High ISV Penetration Verticals (2024-2025)

| Vertical | ISV Penetration | Why ISVs Dominate | Leading ISVs |
|----------|-----------------|-------------------|--------------|
| **Restaurant & Hospitality** | 65% | Complex workflows (table mgmt, tips, kitchen), regulations | Toast, Square, Shift4, Clover |
| **Fitness & Wellness** | 55% | Recurring billing, scheduling, membership management | Mindbody, Zen Planner |
| **Retail** | 45% | Inventory management, multi-channel needs | Lightspeed, Square, Shopify |
| **Healthcare** | 40% | EHR integration, HIPAA compliance, patient billing | Practice management software |
| **Legal Services** | 35% | Trust accounting (IOLTA), matter-based billing | Clio, MyCase |
| **Field Services** | 50% | Mobile payments, scheduling, job costing | ServiceTitan, Jobber |

### Common Vertical ISV Payment Features

```
Industry-Specific Payment Features:
═══════════════════════════════════════════════════════════════

RESTAURANTS:
• Tip adjustment and tip pooling
• Split checks / multi-tender
• Pre-authorization (tabs)
• Kitchen display system integration
• Online ordering + delivery integration
• Alcohol age verification compliance

FITNESS & WELLNESS:
• Recurring membership billing
• Class package management
• No-show fees and cancellation policies
• Multi-location membership portability
• Family/couple account billing

HEALTHCARE:
• Patient responsibility estimation
• Insurance copay collection
• HIPAA-compliant payment processing
• Payment plan management
• EHR integration

LEGAL:
• Trust account (IOLTA) compliance
• Matter-based billing
• Retainer management
• Invoice financing
• Bar association rule compliance

FIELD SERVICES:
• Mobile payment at job site
• Signature capture
• Deposit and final payment workflows
• Invoice generation from job tickets
• Financing for large purchases
```

---

## ISV Economics

### Revenue Model Transformation

**Traditional ISV (Software-Only) Revenue:**
```
Monthly SaaS Subscription:     $100-500/month
Annual Value per Merchant:     $1,200-6,000
Margin:                        70-80%
Churn:                         15-25% annually
LTV:                           $4,000-20,000
```

**Modern ISV (Software + Payments) Revenue:**
```
Monthly SaaS Subscription:     $100-500/month
Payment Processing Revenue:    $500-2,000/month (on $50K-200K volume)
Annual Value per Merchant:     $7,200-30,000
Overall Margin:                40-60% (blended)
Churn:                         5-10% annually (sticky due to payments)
LTV:                           $50,000-200,000
```

**Revenue Multiplication Effect:**
- **2-5x increase in revenue per merchant** (a16z data)
- **Lower churn:** Switching costs increase dramatically when payments integrated
- **Higher LTV:** Longer customer relationships due to switching friction

### Payment Revenue Breakdown (Typical ISV PayFac)

**Example: Restaurant ISV Processing $100,000/month per merchant**

```
Gross Processing Revenue:      $100,000
[Interchange](./01-four-party-model.md#interchange-demystified) + Assessments:     -$2,200 (2.2% blended)
Processor Fee:                 -$300 (0.3%)
                              ─────────
Net Processing Margin:         $1,500 (1.5%)

ISV Charges Merchant:          2.75% + $0.10/txn
ISV Gross Revenue:             $2,750 + ~$150 = $2,900

ISV Costs:
- Interchange + Assessments:   -$2,200
- Processor Fee:               -$300
- Risk Reserve:                -$100
- Operational Costs:           -$100
                              ─────────
ISV Net Payment Profit:        $200/month per merchant

Comparison to SaaS Revenue:    $200 vs $300 SaaS subscription
Payment Revenue as % of Total: 40% of gross revenue
```

**At Scale (1,000 merchants):**
```
SaaS Revenue:          $300,000/month
Payment Revenue:       $200,000/month (net profit)
Total Monthly:         $500,000/month
Payment % of Profit:   ~40%

Note: Payment revenue often has better retention than SaaS
```

### ISV Dissatisfaction with Payment Partners (2023 TSG Survey)

- **58% dissatisfied with payment companies' innovation**
- **50% dissatisfied with deployment friction**
- **75% looking for new processing partners**

**This drives ISVs toward:**
1. Becoming PayFacs (full control)
2. Using PFaaS platforms (better than traditional ISOs)
3. Multi-processor strategies (reduce dependency)

---

## The ISV-to-PayFac Evolution

### Why ISVs Become PayFacs

**Control Motivations:**
1. **Pricing Control:** Set merchant rates independently, capture full margin
2. **Experience Control:** Own entire merchant onboarding and payment flow
3. **Data Control:** Access to transaction data for analytics and additional services
4. **Speed Control:** Onboard merchants in minutes vs weeks
5. **Feature Control:** Build custom payment features for vertical needs

**Economic Motivations:**
1. **Revenue Expansion:** Increase from 10-20% (ISO) to 50-100% (PayFac) of margin
2. **Merchant Stickiness:** Payments create switching costs, reduce churn
3. **Cross-Sell Opportunities:** Use payment data to offer lending, insurance
4. **Valuation Multiple:** Payment revenue valued higher than SaaS revenue

**Example: Toast's PayFac Evolution**
```
2013: Founded as restaurant management software
2014: Partnered with processor (limited control)
2016: Became PayFac (full control)
2021: IPO with payments as majority of revenue
2024: Payment processing revenue > software subscriptions

Result: Transformed from SaaS company to payment-first platform
```

### When Should an ISV Become a PayFac?

**Volume Threshold Rule of Thumb:**
- **$50-100 million annually** in merchant processing volume
- At this scale, economics justify compliance investment
- Below this, PFaaS usually makes more sense

**ISV-to-PayFac Decision Matrix:**

| Factor | Favor PayFac | Favor PFaaS |
|--------|--------------|-------------|
| **Annual Processing Volume** | >$100M | <$50M |
| **Merchant Count** | >500-1000 | <500 |
| **Risk Tolerance** | High (can handle liability) | Low |
| **Engineering Resources** | 10+ dedicated engineers | Limited dev resources |
| **Time to Market** | 12-24 months acceptable | Need 3-6 months |
| **Capital Available** | $2M-5M+ | <$1M |
| **Industry Risk Profile** | Low-risk vertical | Higher-risk vertical |
| **Control Requirements** | Need full underwriting control | Pricing control sufficient |
| **Compliance Expertise** | In-house or can hire | Outsource preferred |

**The Middle Path: PFaaS (PayFac-as-a-Service)**

Most ISVs (2024-2025) choose PFaaS for optimal balance:

```
┌──────────────────────────────────────────────────────────┐
│           PFaaS: Best of Both Worlds                     │
└──────────────────────────────────────────────────────────┘

ISV Controls:                    PFaaS Provider Handles:
✓ Merchant pricing               ✓ Sponsor bank relationship
✓ Merchant onboarding UX         ✓ Card network registration
✓ Payment flow/experience        ✓ Compliance monitoring
✓ Transaction data access        ✓ Underwriting decisioning
✓ Branded payment solution       ✓ Risk management
                                 ✓ Settlement operations
                                 ✓ Chargeback management
                                 ✓ PCI compliance

Revenue Share: 40-70% of margin (vs 50-100% as full PayFac)
Time to Market: 3-6 months (vs 12-24 months as full PayFac)
Capital Required: $100K-500K (vs $2M-5M as full PayFac)
```

**Leading PFaaS Providers (2024-2025):**
- Stripe Connect
- Adyen for Platforms
- PayPal Complete Payments
- Finix
- Worldpay for Platforms

---

## ISV vs ISO Comparison

Understanding the difference between ISVs and ISOs is critical for payment ecosystem literacy.

### Fundamental Differences

```
┌─────────────────────────────────────────────────────────────┐
│              ISV vs ISO: Core Distinction                    │
└─────────────────────────────────────────────────────────────┘

ISV (Independent Software Vendor)
┌────────────────────────────────────────┐
│  Primary Business: SOFTWARE            │
│                                        │
│  ┌──────────────┐                     │
│  │   Software   │ ◄──── Core Product  │
│  │   Platform   │                     │
│  └──────┬───────┘                     │
│         │                             │
│         ▼                             │
│  ┌──────────────┐                     │
│  │   Payments   │ ◄──── Monetization  │
│  │ (Integrated) │       Enhancement   │
│  └──────────────┘                     │
│                                        │
│  Value: Solving industry-specific      │
│         business problems              │
└────────────────────────────────────────┘

ISO (Independent Sales Organization)
┌────────────────────────────────────────┐
│  Primary Business: PAYMENT SALES       │
│                                        │
│  ┌──────────────┐                     │
│  │   Payment    │ ◄──── Core Product  │
│  │   Services   │                     │
│  └──────┬───────┘                     │
│         │                             │
│         ▼                             │
│  ┌──────────────┐                     │
│  │  Optional    │ ◄──── Value-Add     │
│  │  Equipment/  │       (Optional)    │
│  │  Software    │                     │
│  └──────────────┘                     │
│                                        │
│  Value: Payment expertise and          │
│         merchant services              │
└────────────────────────────────────────┘
```

### Detailed Comparison Table

| Dimension | ISV | ISO |
|-----------|-----|-----|
| **Primary Product** | Vertical-specific software | Payment processing services |
| **Revenue Model** | SaaS subscriptions + payment revenue | Payment processing residuals |
| **Merchant Relationship** | Own the merchant (via software dependency) | Share merchant with processor |
| **Switching Cost** | Very high (would lose business software) | Low (just payment processing) |
| **Target Market** | Specific verticals (restaurants, retail, etc.) | Any merchant needing payments |
| **Software Development** | Core competency | Not core, may resell third-party |
| **Payment Expertise** | Growing competency | Core competency |
| **Typical Evolution** | Software → Add payments → Become PayFac | Sales agent → Maybe add software |
| **Merchant Onboarding** | Integrated into software setup | Standalone payment application |
| **Churn Rate** | 5-10% annually | 15-30% annually |
| **Revenue per Merchant** | $500-2,500/month (software + payments) | $50-500/month (payments only) |

### The Blurring Lines (2024-2025 Trend)

**Key Distinguisher:**
- **ISV:** Merchant comes for the software, stays for integrated payments
- **ISO:** Merchant comes for payment processing, may get software too

See [ISOs (Independent Sales Organizations)](./08-isos.md) for detailed comparison.

---

## Current Trends (2024-2025)

### 1. Embedded Finance Expansion

ISVs moving beyond payments to full financial services:

```
Payment Evolution Ladder:

2010s: Accept Payments
       ↓
2015-2020: Own Payment Stack (PayFac)
       ↓
2020-2025: Embedded Finance

Components:
├── Payments (mature)
├── Lending (working capital, merchant cash advance)
├── Banking (deposit accounts, debit cards)
├── Payroll (employee payment, tax filing)
├── Insurance (liability, workers comp)
└── Investment (merchant cash management)
```

**Examples:**
- **Square:** Square Banking, Square Loans, Square Payroll
- **Shopify:** Shopify Capital (lending), Shopify Balance (banking)
- **Toast:** Toast Capital (lending), Toast Payroll

### 2. Vertical SaaS Dominance

Horizontal software losing to vertical-specific solutions:

**Why Vertical SaaS Wins:**
- Industry-specific workflows deeply integrated
- Compliance requirements baked in (e.g., alcohol sales, HIPAA)
- Industry terminology and UX match user expectations
- Pre-built integrations with industry tools
- Higher willingness to pay (solves specific pain points)

### 3. ISV Consolidation

Larger payment players acquiring ISVs:

**Recent Examples:**
- **Shift4 acquires Revel Systems (2024):** POS + payment processing
- **Fiserv owns Clover:** Distribution through bank channels
- **Global Payments acquires AdvancedMD:** Healthcare vertical

### 4. Multi-Processor Strategies

Larger ISVs avoiding single-processor dependency:

```
                ┌─────────────┐
                │     ISV     │
                │  Platform   │
                └──────┬──────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
   ┌─────────┐   ┌─────────┐   ┌─────────┐
   │Processor│   │Processor│   │Processor│
   │    A    │   │    B    │   │    C    │
   └─────────┘   └─────────┘   └─────────┘

Benefits:
- Redundancy (failover)
- Negotiating leverage
- Geographic optimization
- Cost optimization (route to lowest cost)
```

### 5. AI and Data-Driven Decisioning

ISVs leveraging payment + operational data:

**Use Cases:**
- **Fraud Detection:** Vertical-specific fraud patterns
- **Dynamic Pricing:** Adjust merchant rates based on risk
- **Working Capital Lending:** Underwrite loans using payment history
- **Business Intelligence:** Industry benchmarking for merchants

### 6. Regulatory Scrutiny Increasing

Payment-embedded ISVs facing more oversight:

**Key Concerns:**
- Money Transmitter Licensing requirements
- Banking charter requirements for embedded banking
- Consumer protection (CFPB oversight)
- AML/BSA compliance responsibilities

---

## PayFac Implications

For those building PayFac platforms, understanding ISVs is critical because **ISVs are your ideal customer segment**.

### Why ISVs are Ideal PayFac Platform Customers

1. **Built-In Distribution:** ISVs already have merchant relationships
2. **Lower Churn:** Merchants won't leave ISV just for better rates
3. **Higher Volume per Merchant:** ISVs target growing businesses
4. **Vertical Risk Expertise:** ISVs understand their industry's risk patterns
5. **Long-Term Relationship Value:** Cross-sell opportunities (lending, banking)

### PayFac Platform Partnership Models with ISVs

```
┌──────────────────────────────────────────────────────────┐
│        PayFac Platform + ISV Partnership Models          │
└──────────────────────────────────────────────────────────┘

Model 1: PFaaS (Most Common)
┌────────────────────────────────────────┐
│  PayFac Platform (Stripe Connect)      │
│  • Provides PayFac infrastructure      │
│  • Handles compliance, underwriting    │
│  • Manages sponsor bank relationship   │
└──────────────┬─────────────────────────┘
               │ API Integration
               ▼
┌────────────────────────────────────────┐
│  ISV Platform (e.g., Toast)            │
│  • Integrates payments into software   │
│  • Controls merchant pricing & UX      │
│  • Owns merchant relationship          │
└──────────────┬─────────────────────────┘
               │
               ▼
         [Sub-merchants]

Revenue Split: 60/40 or 70/30 (ISV/Platform)


Model 2: White-Label PayFac
┌────────────────────────────────────────┐
│  Your PayFac Infrastructure            │
│  • Processing, compliance, risk        │
│  • Completely white-labeled for ISV    │
└──────────────┬─────────────────────────┘
               │ White-label
               ▼
┌────────────────────────────────────────┐
│  ISV (Appears as Own PayFac)           │
│  • Full branding control               │
│  • Pricing control                     │
│  • Merchant relationship ownership     │
└──────────────┬─────────────────────────┘
               │
               ▼
         [Sub-merchants]

Revenue Split: ISV pays platform fee + processor costs
```

### What ISVs Want from PayFac Platforms

1. **Fast Integration:** Clean APIs, good documentation, sandbox environments
2. **White-Label Capabilities:** Their brand on merchant-facing materials
3. **Pricing Control:** Set their own merchant rates
4. **Fast Onboarding:** Instant or same-day merchant activation
5. **Revenue Share:** 40-70% of margin (competitive with becoming full PayFac)
6. **Support Infrastructure:** Help with merchant support, chargebacks
7. **Vertical Understanding:** Industry-specific features and risk models

---

## Self-Assessment Questions & Answers

### Question 11: Why would an ISV (like a restaurant POS software company) want to become a PayFac instead of just referring merchants to an ISO?

**Answer:**

An ISV would want to become a PayFac (or use a PFaaS provider) instead of just referring merchants to an ISO for several compelling reasons:

**1. Revenue Expansion (Economics)**

| Model | Revenue Share |
|-------|---------------|
| **ISO Referral** | 1-5% of margin (or $50-100 one-time referral) |
| **ISO Partnership** | 10-20% of margin |
| **PayFac** | 50-100% of margin |
| **PFaaS** | 40-70% of margin |

**Example Math:**
- Restaurant merchant processing $100,000/month
- ISO referral: ~$50-100 one-time
- ISO partnership: ~$50-100/month
- PayFac: ~$200-500/month ongoing

At 1,000 merchants, the difference is massive:
- ISO referral: $50K-100K one-time
- PayFac: $200K-500K/month recurring

**2. Control Over Merchant Experience**

As a PayFac, the ISV controls:
- **Onboarding Speed:** Instant activation vs waiting days/weeks for ISO/bank
- **Pricing:** Set competitive rates, bundle with software
- **User Experience:** Payments seamlessly integrated in software UI
- **Branding:** All merchant-facing materials show ISV brand
- **Support:** Handle merchant questions directly

With ISO referral, merchants deal with a third party for payments, fragmenting the experience.

**3. Merchant Stickiness (Lower Churn)**

```
ISO Referral Model:
┌──────────────┐      ┌──────────────┐
│ ISV Software │      │ ISO/Payment  │
│  (Separate)  │      │  (Separate)  │
└──────────────┘      └──────────────┘
        ↓                    ↓
    Merchant can easily switch either vendor

    Churn: 15-25% annually


PayFac Model:
┌─────────────────────────────────┐
│   ISV Software + Payments       │
│      (Unified Platform)         │
└─────────────────────────────────┘
        ↓
    Switching means losing entire system

    Churn: 5-10% annually
```

**4. Data and Cross-Sell Opportunities**

As PayFac, the ISV has access to:
- Real-time transaction data (sales trends, seasonality)
- Cash flow information (enable working capital lending)
- Business health indicators (early warning for churn)

This data enables:
- **Lending:** Offer merchant cash advances (Toast Capital)
- **Business Insights:** Help merchants optimize operations
- **Insurance:** Offer liability coverage based on volume
- **Banking:** Deposit accounts, business debit cards

**5. Competitive Advantage**

Restaurants comparing two POS systems:
- **System A:** "Sign up separately with a payment processor"
- **System B (PayFac):** "Accept payments immediately, all in one place"

System B wins every time for busy restaurant owners.

**6. Valuation Impact**

Public market and acquirer valuations:
- **Pure SaaS companies:** Valued at 5-10x revenue
- **SaaS + payments companies:** Valued at 8-15x revenue

Investors value payment revenue highly because:
- Recurring and growing with merchant success
- Higher switching costs than pure software
- Proven monetization model

**Trade-offs to Consider:**

| PayFac Benefits | PayFac Challenges |
|-----------------|-------------------|
| Higher revenue share | Chargeback liability |
| Full control | Compliance complexity |
| Better merchant experience | Capital requirements ($2M-5M) |
| Lower churn | Engineering investment |
| Cross-sell opportunities | Longer time to market (12-24 months) |

**The PFaaS Middle Ground:**

Most restaurant POS companies today choose PayFac-as-a-Service (PFaaS):
- Get 40-70% of margin (vs 10-20% with ISO)
- Fast time to market (3-6 months)
- Compliance handled by provider
- Control over pricing and experience
- Lower capital and engineering requirements

**Bottom Line:**

For a restaurant POS company, becoming a PayFac (or using PFaaS) transforms them from:
- **Software vendor** (merchant pays $100-300/month for software)

To:
- **Commerce platform** (merchant pays $500-2,000/month for software + payments)

That's a 5-10x increase in revenue per merchant, with lower churn and higher lifetime value. No rational business would choose a simple ISO referral when these alternatives exist.

---

## Key Takeaways

1. **ISVs are software-first** - They solve industry problems with software; payments are an add-on revenue stream

2. **ISV market share is growing rapidly** - Projected 29% → 37% of merchant acquisition

3. **Payment revenue can equal or exceed SaaS revenue** - Toast, Shopify, Mindbody all derive 40-70%+ from payments

4. **Vertical specialization creates stickiness** - Industry-specific software has much higher switching costs than payments alone

5. **ISVs have 4 payment models** - Referral (1-5%), ISO (10-20%), PayFac (50-100%), PFaaS (40-70%)

6. **PFaaS is the sweet spot for most ISVs** - Good economics, lower risk, faster time to market

7. **ISVs are ideal PayFac platform customers** - Built-in distribution, lower churn, higher volumes

8. **The trend is embedded finance** - Beyond payments: lending, banking, insurance, payroll

9. **75% of ISVs are looking for new payment partners** - Dissatisfaction creates opportunity

10. **For PayFac platforms, ISV partnerships are strategic** - They provide scale, vertical expertise, and distribution

---

## References

### Industry Research

- [Nilson Report](https://nilsonreport.com/) - Payment industry statistics and ISV market data
- [TSG (The Strawhecker Group)](https://thestrawgroup.com/) - ISV satisfaction surveys and market research
- [a16z: Fintech Scales Vertical SaaS](https://a16z.com/fintech-scales-vertical-saas/) - ISV payment economics analysis

### Major ISV Information

- [Toast Investor Relations](https://investors.toasttab.com/) - Public filings, GPV data
- [Block/Square Investor Relations](https://investors.block.xyz/) - Market share data
- [Shopify Investor Relations](https://investors.shopify.com/) - Payment revenue breakdown
- [Lightspeed Commerce](https://www.lightspeedhq.com/) - Retail ISV platform

### PayFac-as-a-Service Providers

- [Stripe Connect](https://stripe.com/connect) - Leading PFaaS platform
- [Adyen for Platforms](https://www.adyen.com/platforms) - Enterprise PFaaS
- [PayPal Commerce Platform](https://www.paypal.com/us/business/platforms-and-marketplaces) - PayPal's platform offering
- [Finix](https://www.finix.com/) - Modern PFaaS infrastructure

### Vertical SaaS Resources

- [Bessemer Venture Partners: State of the Cloud](https://www.bvp.com/atlas/state-of-the-cloud) - SaaS + payments trends
- [McKinsey: Embedded Finance](https://www.mckinsey.com/industries/financial-services/our-insights/embedded-finance) - Market projections

---

*Previous Topic: [ISOs (Independent Sales Organizations)](./08-isos.md)*

*Next Topic: [The Payment Facilitator Model](./10-payfac-model.md)*

---

## Related Topics

| Topic | Description |
|-------|-------------|
| [The Four-Party Model](./01-four-party-model.md) | Interchange economics and fee structures |
| [Card Network Role](./02-card-network-role.md) | Network registration for PayFacs |
| [Transaction Lifecycle](./03-transaction-lifecycle.md) | Authorization, settlement, chargebacks |
| [Debit Networks & Routing](./04-debit-networks-routing.md) | Durbin savings for ISV merchants |
| [Payment Processors](./05-payment-processors.md) | Processor relationships with ISVs |
| [Payment Gateways](./06-payment-gateways.md) | Gateway integration patterns |
| [Acquiring Banks](./07-acquiring-banks.md) | Sponsor banks for PayFac ISVs |
| [ISOs](./08-isos.md) | ISO vs ISV comparison |
