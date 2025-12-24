---
title: PayFac Implementation
description: Master merchant architecture, risk models, types of PayFac implementations, business economics, and decision framework for building vs using PFaaS
sidebar_position: 2
sidebar_label: Implementation
keywords:
  - payfac implementation
  - master merchant
  - payfac risk model
  - payfac economics
  - pfaas
  - payfac decision framework
  - settlement flow
  - reserve account
  - underwriting
  - payfac types
  - break-even analysis
---

# PayFac Implementation

This guide covers the technical and business aspects of implementing a Payment Facilitator model, including master merchant architecture, risk management, implementation types, and economic decision frameworks.

:::info See Also
- [PayFac Model Overview](./overview) - Historical context, market landscape, regulatory requirements
- [Comparing Models](./comparing-models/overview) - Full comparison of PayFac vs ISO vs traditional acquiring
:::

## Master Merchant Model Architecture

### Settlement Flow: How Money Moves

```
PAYFAC SETTLEMENT & SPLIT PAYOUT
═══════════════════════════════════════════════════════════════

DAY 0: Transactions Occur
┌─────────────────────────────────────────────────────────────┐
│ Sub-Merchant A: $10,000 in sales                            │
│ Sub-Merchant B: $5,000 in sales                             │
│ Sub-Merchant C: $8,000 in sales                             │
│ TOTAL: $23,000                                              │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
DAY 1: Clearing & Network Settlement
┌─────────────────────────────────────────────────────────────┐
│ Networks settle to PayFac's sponsor bank                    │
│ Amount: $23,000 (gross volume)                              │
│                                                              │
│ Sponsor bank DEBITS for network fees:                       │
│ • Interchange: $414 (avg 1.8%)                              │
│ • Assessment: $92 (avg 0.4%)                                │
│ • Network fees: $23 (passthrough)                           │
│ NET RECEIVED BY PAYFAC: $22,471                             │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
DAY 2: PayFac Calculates Sub-Merchant Payouts
┌─────────────────────────────────────────────────────────────┐
│ PayFac's pricing to sub-merchants: 2.9% + $0.30/txn         │
│                                                              │
│ Sub-Merchant A: $10,000 volume (100 txns)                   │
│ • PayFac fee: $290 + $30 = $320                             │
│ • Payout to Sub-Merchant A: $9,680                          │
│                                                              │
│ Sub-Merchant B: $5,000 volume (50 txns)                     │
│ • PayFac fee: $145 + $15 = $160                             │
│ • Payout to Sub-Merchant B: $4,840                          │
│                                                              │
│ Sub-Merchant C: $8,000 volume (80 txns)                     │
│ • PayFac fee: $232 + $24 = $256                             │
│ • Payout to Sub-Merchant C: $7,744                          │
│                                                              │
│ TOTAL SUB-MERCHANT PAYOUTS: $22,264                         │
│ TOTAL PAYFAC FEE COLLECTED: $736                            │
└─────────────────────────────────────────────────────────────┘
```

**Key Architectural Points:**

1. **PayFac Receives Gross Settlement**: All funds settle to PayFac first
2. **PayFac Performs Split Logic**: Calculate each sub-merchant's payout
3. **PayFac Initiates Transfers**: ACH/wire transfers to sub-merchant accounts
4. **Timing Control**: PayFac can control payout speed (instant, daily, weekly)

### Bank Account Architecture

```
PAYFAC BANK ACCOUNT ARCHITECTURE
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│                    SPONSOR BANK                              │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  SETTLEMENT ACCOUNT                                │     │
│  │  (Receives daily settlement from networks)         │     │
│  │  Balance: Fluctuates daily                         │     │
│  └────────────┬───────────────────────────────────────┘     │
│               │                                              │
│               │ Automated sweep/transfer                     │
│               │                                              │
│  ┌────────────▼───────────────────────────────────────┐     │
│  │  OPERATING ACCOUNT                                 │     │
│  │  (PayFac working capital)                          │     │
│  │  Used for sub-merchant payouts                     │     │
│  └────────────┬───────────────────────────────────────┘     │
│               │                                              │
│  ┌────────────▼───────────────────────────────────────┐     │
│  │  RESERVE ACCOUNT                                   │     │
│  │  (Held for chargeback/loss coverage)               │     │
│  │  Mandated by card networks + sponsor bank          │     │
│  │  Typical: 5-20% of monthly volume                  │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘

                         │
                         │ ACH Transfers
                         ▼
┌─────────────────────────────────────────────────────────────┐
│             SUB-MERCHANT BANK ACCOUNTS                       │
│                                                              │
│  Sub-Merchant A → Chase Bank Account                        │
│  Sub-Merchant B → Wells Fargo Account                       │
│  Sub-Merchant C → BofA Account                              │
└─────────────────────────────────────────────────────────────┘
```

**Reserve Account Deep Dive:**

| Aspect | Details |
|--------|---------|
| **Purpose** | Cover chargeback losses when sub-merchant defaults |
| **Funding** | Deducted from each settlement before payout |
| **Typical %** | 5-10% for low-risk, 15-20% for high-risk |
| **Duration** | Rolling reserve (released after 180+ days) |
| **Control** | Sponsor bank has first lien on reserve funds |

**Example Reserve Calculation:**
```
Daily Volume: $100,000
Reserve Rate: 10%
Daily Reserve Withhold: $10,000

After 180 days rolling:
Total Reserve Balance: $10,000 × 180 = $1,800,000

This $1.8M cushion covers:
• Pending chargebacks
• Sub-merchant account closures
• Fraud losses
• Regulatory fines
```

## Risk and Liability Model

**The PayFac assumes 100% liability for sub-merchant activity.** This is the fundamental tradeoff that enables instant onboarding.

### Liability Comparison

| Model | Who Bears Risk When Merchant Defaults |
|-------|-------------------------------------|
| **Traditional** | Acquiring Bank (they underwrote the merchant) |
| **ISO** | Acquiring Bank (ISO is just sales agent) |
| **PayFac** | PayFac (master merchant = merchant of record) |

### Chargeback Liability Chain

When a sub-merchant defaults on a chargeback:

```
CHARGEBACK SCENARIO: Sub-Merchant Defaults
═══════════════════════════════════════════════════════════════

DAY 0: Transaction Occurs
┌─────────────────────────────────────────────────────────────┐
│ Cardholder buys $500 product from Sub-Merchant "ShopXYZ"    │
│ Transaction flows through PayFac master MID                  │
│ Sub-Merchant receives $485 payout (after fees)               │
└─────────────────────────────────────────────────────────────┘

DAY 45: Chargeback Filed
┌─────────────────────────────────────────────────────────────┐
│ Cardholder disputes charge: "Product never delivered"       │
│ Issuing bank files chargeback through network               │
│ Network debits PayFac master MID: $500                      │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
DAY 46: PayFac Attempts Recovery
┌─────────────────────────────────────────────────────────────┐
│ PayFac debits sub-merchant's connected bank account          │
│                                                              │
│ SCENARIO A: Sub-merchant account has funds                  │
│ └─→ $500 recovered from sub-merchant                        │
│     └─→ PayFac whole (may add chargeback fee: $25)          │
│                                                              │
│ SCENARIO B: Sub-merchant account insufficient               │
│ └─→ Only $100 available in account                          │
│     └─→ PayFac recovers $100, loses $400                    │
│         └─→ If sub-merchant disappeared: PAYFAC LOSS        │
│                                                              │
│ SCENARIO C: Sub-merchant account closed / vanished          │
│ └─→ Cannot debit non-existent account                       │
│     └─→ PAYFAC ABSORBS $500 LOSS                            │
│         └─→ This is covered by reserve fund                 │
└─────────────────────────────────────────────────────────────┘
```

### Underwriting: Tiered Risk-Based Approach

Since PayFac bears liability, underwriting is critical. Most PayFacs use a tiered approach:

| Tier | Approval Time | Requirements | Volume Limits | Use Case |
|------|--------------|--------------|---------------|----------|
| **Tier 1: Instant** | Under 60 seconds | SSN/EIN, bank account, OFAC check | $5K/month for 90 days | Gig workers, micro-merchants |
| **Tier 2: Enhanced** | 1-3 hours | + Business verification, credit check | $50K/month | Established SMBs |
| **Tier 3: Full** | 1-3 days | + Financials, UBO background check | Negotiated | High-risk/high-volume |

**The Tradeoff:**

| Approach | Pros | Cons |
|----------|------|------|
| **Instant Approval** | Better UX, higher conversion | Higher fraud/chargeback losses |
| **Thorough Underwriting** | Lower losses, better quality | Slower onboarding, lower conversion |

**Best Practice:** Most PayFacs approve instantly with LOW limits, monitor for 30-90 days, then auto-increase limits for good actors.

## Types of PayFac Implementations

### 1. Full PayFac (Registered Direct)

```
FULL PAYFAC IMPLEMENTATION
═══════════════════════════════════════════════════════════════

Card Networks (Visa, Mastercard, Amex)
           │
           │ PayFac Registration
           ▼
     Sponsor Bank
           │
           │ Sponsorship Agreement
           ▼
    Payment Processor
           │
           │ Processing Agreement
           ▼
     PAYFAC PLATFORM (You build everything)
     • Merchant onboarding system
     • KYC/KYB/underwriting
     • Transaction monitoring
     • Split payout logic
     • Chargeback management
     • Compliance/reporting
           │
           ▼
    Sub-Merchants (Your customers)
```

**What You Control:**
- Complete payment experience
- Pricing to sub-merchants
- Underwriting rules and limits
- Payout timing and logic

**What You Must Handle:**
- PCI DSS Level 1 compliance (~$100K+/year)
- Card network registrations (Visa, MC, Amex, Discover)
- Sponsor bank relationship and audits
- Money transmitter licensing (state-by-state)
- AML/KYC programs and compliance officer
- Reserve funds (millions in capital)
- 24/7 risk monitoring
- Chargeback management infrastructure

**Cost to Build:**
- Technology build: $500K - $2M (12-24 months)
- Annual compliance: $200K - $500K
- Sponsor bank fees: $50K - $150K/year
- Processor fees: Based on volume

**When It Makes Sense:**
- Processing over $1B/year
- Want maximum control and margin
- Have compliance/regulatory expertise
- Can invest $2M+ upfront

**Examples:** Square (built full stack), Shopify Payments, Toast

### 2. PayFac-as-a-Service (PFaaS)

```
PAYFAC-AS-A-SERVICE MODEL
═══════════════════════════════════════════════════════════════

Card Networks
     │
     ▼
Sponsor Bank
     │
     ▼
PAYFAC PROVIDER (Stripe Connect, Adyen, etc.)
THEY handle:
• PayFac registration with networks
• Sponsor bank relationship
• PCI Level 1 compliance
• Core underwriting platform
• Settlement/payout infrastructure
• Chargeback management
• Reserve fund management
• Base compliance (AML/KYC)
     │
     │ Revenue Share: 60-80% to you
     ▼
YOUR PLATFORM (ISV)
YOU handle:
• Your software/product
• User onboarding flow
• Customer support (tier 1)
• Your branding
     │
     ▼
YOUR CUSTOMERS (Sub-merchants)
```

**Economics Example:**

```
Sub-merchant processes $100K/month

Payment Flow:
┌─────────────────────────────────────────────────────────────┐
│ Gross volume: $100,000                                      │
│                                                              │
│ Interchange + assessments: $2,150 (2.15%)                   │
│                                                              │
│ PFaaS provider charges you: $2,900 (2.9%)                   │
│ • Covers interchange + their margin                         │
│                                                              │
│ You charge sub-merchant: $3,400 (3.4%)                      │
│                                                              │
│ Your net revenue: $500 (50 bps)                             │
│                                                              │
│ PFaaS provider keeps: $750 (75 bps gross)                   │
└─────────────────────────────────────────────────────────────┘
```

**Time to Market:** 2-4 weeks (vs 12-24 months for full PayFac)

**When It Makes Sense:**
- Processing under $500M/year
- Want payments revenue without full complexity
- Limited compliance resources
- Need fast time to market
- Okay with lower margins

**Major Providers:**

| Provider | Model | Strengths |
|----------|-------|-----------|
| **Stripe Connect** | API-first, developer-focused | Best developer experience, fastest integration |
| **Adyen MarketPay** | Enterprise-grade | Global reach, unified commerce |
| **Braintree Marketplace** | PayPal-owned | Strong fraud tools, PayPal integration |
| **Finix** | Payments infrastructure | Full white-label, higher revenue share |

:::warning PFaaS Underwriting Reality
Not all "PFaaS" providers are equal. Some providers are just API wrappers where the underlying processor makes all underwriting decisions (you have no control). True PFaaS providers like Stripe Connect actually perform underwriting and bear risk. Ask providers: "Who makes the accept/decline decision?" and "Who bears fraud liability?"
:::

### 3. Managed PayFac

Middle ground between Full PayFac and PFaaS:

- **YOU** register as the PayFac with card networks (your name)
- **YOU** have sponsor bank relationship
- **PROVIDER** manages technology/operations for you

**When It Makes Sense:**
- Want PayFac economics but not build burden
- Have capital and compliance resources
- Processing $200M - $1B/year
- Need more control than PFaaS offers

## Business Economics of PayFac

### Revenue Streams

```
PAYFAC REVENUE MODEL
═══════════════════════════════════════════════════════════════

1. Payment Processing Markup
   Blended pricing: 2.9% + $0.30
   Cost of goods sold: 2.03% + $0.05
   Gross margin: 0.87% + $0.25 per transaction (~30%)

2. Value-Added Services (Optional)
   • Instant payouts: 1.5% fee
   • Currency conversion: 2% markup
   • Chargeback insurance: $10/month per sub-merchant
   • Premium support: $50/month
   • Analytics/reporting: $25/month
```

### Cost Structure

```
PAYFAC COST BREAKDOWN
═══════════════════════════════════════════════════════════════

Variable Costs (per transaction):
• Interchange: 1.80%
• Network assessments: 0.13%
• Processor fee: 0.10% + $0.05
SUBTOTAL: 2.03% + $0.05 per transaction

Fixed Costs (monthly/annual):
Technology & Infrastructure: $20K-80K/month
Compliance & Regulatory: $15K-40K/month
Risk & Operations: $40K-80K/month
TOTAL FIXED COSTS: $75K-200K/month ($900K-$2.4M/year)

Loss Provisions (risk reserves):
• Chargeback losses: 0.05% of volume (5 bps)
• Fraud losses: 0.03% of volume (3 bps)
• ACH return failures: 0.02% (2 bps)
TOTAL LOSS PROVISION: 0.10% (10 bps)
```

### Break-Even Analysis

```
BREAK-EVEN CALCULATION
═══════════════════════════════════════════════════════════════

Fixed Costs: $150K/month (conservative estimate)
Gross Margin: 32.6% of revenue (after variable costs)
Loss Provision: 10 bps of volume

Simplified calculation:
Let X = monthly volume needed

Revenue = X × 2.9%
COGS = X × 2.08%
Gross Profit = X × 0.82%
Loss Provision = X × 0.10%
Net Contribution = X × 0.72%

Break-even when: X × 0.72% = $150,000

X = $150,000 / 0.0072 = $20,833,333/month

BREAK-EVEN: ~$21M/month = $250M/year (optimistic)

More realistic with $200K/month fixed costs:
BREAK-EVEN: ~$28M/month = $333M/year

Conservative with $300K/month fixed costs:
BREAK-EVEN: ~$42M/month = $500M/year
```

:::tip Key Insight
PayFac is a **SCALE BUSINESS**. You must reach significant volume to profitability. This is why:

1. Most PayFacs fail before reaching scale (ran out of capital)
2. PFaaS makes sense for under $500M/year (leverage someone else's fixed costs)
3. Full PayFac only for $1B+ opportunity (need volume to justify investment)
:::

## When to Build Full PayFac vs Use PFaaS

### Decision Framework

```
PAYFAC VS PFAAS DECISION TREE
═══════════════════════════════════════════════════════════════

What's your projected 3-year payment volume?

Under $100M/year
└─→ USE PFAAS (Stripe Connect, etc)
    Reason: Can't cover fixed costs

$100M-$500M/year
└─→ START WITH PFAAS, evaluate full PayFac at $300M
    Reason: Defer capital investment, prove model first

$500M-$1B/year
└─→ CONSIDER MANAGED PAYFAC or build full
    Reason: Economics justify investment, but risky

Over $1B/year
└─→ BUILD FULL PAYFAC (if strategic fit)
    Reason: Margin improvement worth investment
```

### Volume-Based Economics Comparison

```
AT $500M ANNUAL VOLUME:
─────────────────────────────────────
PFaaS Route:
• Revenue: $500M × 50 bps = $2.5M/year
• Fixed costs: $0
• NET: $2.5M profit

Full PayFac Route:
• Revenue: $500M × 72 bps = $3.6M/year
• Fixed costs: $2M/year
• NET: $1.6M profit

→ PFaaS STILL WINS at $500M volume
─────────────────────────────────────

AT $1.5B ANNUAL VOLUME:
─────────────────────────────────────
PFaaS Route:
• Revenue: $1.5B × 50 bps = $7.5M/year

Full PayFac Route:
• Revenue: $1.5B × 72 bps = $10.8M/year
• Fixed costs: $2.5M/year
• NET: $8.3M profit

→ Full PayFac now makes $800K MORE
─────────────────────────────────────

AT $3B+ ANNUAL VOLUME:
─────────────────────────────────────
PFaaS Route:
• Revenue: $3B × 60 bps = $18M/year (negotiated rate)

Full PayFac Route:
• Revenue: $3B × 72 bps = $21.6M/year
• Fixed costs: $3M/year
• NET: $18.6M profit

PLUS: Can negotiate better interchange rates
• Improved gross margin: 80 bps possible
• Revised profit: $24M - $3M = $21M

→ Full PayFac makes $3M MORE annually
─────────────────────────────────────
```

### Readiness Checklist

Before building full PayFac, assess capabilities:

**Technical Capabilities:**
- [ ] Engineering team of 10+ developers
- [ ] Experience with financial systems / ledgers
- [ ] DevOps expertise for high-availability systems
- [ ] Security-first mindset and practices

**Compliance & Risk:**
- [ ] Can hire Chief Compliance Officer
- [ ] Budget for legal counsel ($200K+/year)
- [ ] Can build risk/fraud team (5+ analysts)
- [ ] Understand PCI DSS requirements

**Capital & Business:**
- [ ] Access to $2M+ for reserves and build
- [ ] Can sustain 18-24 month payback period
- [ ] Board/investors support payments strategy
- [ ] Payments are core to business model (not bolt-on)

**Operational:**
- [ ] Can staff 24/7 support for payment issues
- [ ] Can handle chargeback disputes
- [ ] Willing to manage sponsor bank relationship

**IF YOU CHECKED:**
- **Less than 50%**: Use PFaaS
- **50-75%**: Consider Managed PayFac
- **Over 75%**: Can consider Full PayFac (if volume justifies)

## The Graduated PayFac Journey

Many successful PayFacs started with PFaaS:

```
Year 1: Launch with PFaaS
• Integrate in 4 weeks
• Process $50M in year 1
• Payment revenue: $250K (50 bps margin)
• Learn: underwriting, risk, chargeback management

Year 2-3: Scale on PFaaS
• Process $300M/year by end of year 3
• Payment revenue: $1.5M/year
• Validate: PMF, retention, payment attach rate
• Hire compliance team, build risk expertise

Year 4: Evaluate Full PayFac Build
• Confident path to $1B+ volume
• Compliance team in place
• Board approves $2M+ investment
Decision: START PayFac registration if YES

Year 5-6: Build & Migrate
• Complete PayFac registration (6-12 months)
• Build platform (12-18 months)
• Migrate sub-merchants gradually (6 months)
• Processing $800M on own platform by Year 6

Year 7+: Full PayFac at Scale
• Process $2B/year
• Annual profit advantage: $1.9M+ vs PFaaS
• Cumulative payback of initial investment achieved
```

**Real-World Examples:**

| Company | Started | Graduated | Outcome |
|---------|---------|-----------|---------|
| **Shopify** | 2013: Stripe partnership | 2015: Shopify Payments (full PayFac) | $200B+ volume, payments > software revenue |
| **Lightspeed** | Used third-party processors | 2019: Built PayFac | Payment revenue growing 50%+ YoY |
| **Toast** | 2016: Processor partnership | 2019: Built full PayFac | Payments 75% of revenue |

## Summary

### The PayFac Model in One Paragraph

A Payment Facilitator is a registered entity with card networks that onboards sub-merchants under its own master merchant account (MID), enabling instant merchant onboarding while assuming 100% liability for sub-merchant transactions, chargebacks, and fraud. PayFacs bear the compliance burden (PCI Level 1, sponsor bank relationship, network registration) in exchange for controlling the payment experience and capturing payment processing margin.

### Critical Decision Points

1. **Liability Model**: PayFac bears ALL risk (vs acquirer in traditional model)
2. **Economics**: Need $500M-$1B annual volume for full PayFac profitability
3. **Build vs Buy**: PFaaS for under $500M/year, evaluate full PayFac at $500M-$1B+
4. **Risk Management**: Success requires sophisticated underwriting + monitoring
5. **Value-Add Services**: Payment margin alone is thin; need ancillary revenue

### When to Choose Each Model

**Use Full PayFac When:**
- Processing $1B+ annual volume (or confident path to it)
- Payments are strategic to your business model
- Have compliance and risk capabilities
- Can invest $2M+ upfront for 18-24 month payback

**Use PFaaS When:**
- Processing under $500M annually
- Want fast time to market (weeks, not years)
- Limited compliance/risk resources
- Okay with lower margin for zero fixed costs
- Payments are revenue add-on (not core differentiation)

**Best Strategy:** Start with PFaaS, graduate to full PayFac if/when volume justifies it.

## Related Topics

- [Sponsor Bank Relationships](#) - How PayFacs partner with sponsor banks
- [Merchant Underwriting](#) - KYC/KYB requirements for sub-merchants
- [Platform Architecture](#) - Multi-tenant entity modeling and split payouts
- [Money Transmitter Licensing](#) - State-by-state licensing requirements

*Source: Week 01-02 Payment Ecosystem > PayFac Model Notes*
