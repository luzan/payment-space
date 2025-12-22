# The Payment Facilitator (PayFac) Model

> **Last Updated:** 2025-12-21
>
> **Status:** Complete
>
> **Changes Log:**
> - 2025-12-21: Added PFaaS underwriting spectrum section (critical market reality on outsourced vs actual underwriting)
> - 2025-12-21: Added market landscape data, cross-references, Q&A section, sources, and payment-critic review corrections
> - 2025-12: Initial comprehensive notes
>
> **Currency Note:** These notes reflect the PayFac landscape as of December 2024/January 2025. Key dates: Visa PayFac Certification (Sept 2025), PCI DSS v4.0 (March 2025). Interchange rates, regulations, and market dynamics evolve quarterly. Verify current rules before making business decisions.

Payment Facilitators (PayFacs) revolutionized merchant acquiring by introducing the "master merchant" aggregator model.

---

## Quick Reference Card

```
PAYFAC QUICK REFERENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What is it?
• Master merchant model aggregating sub-merchants
• PayFac bears 100% liability for sub-merchant activity

Key Numbers:
• Break-even volume: ~$750M/year
• Typical build cost: $500K - $2M
• Annual fixed costs: $1.8M - $3.6M
• Time to market: 18-24 months (full PayFac) / weeks (PFaaS)
• Gross margin: 70-90 bps after interchange

When to build?
• Processing $1B+/year: YES
• Processing $500M-$1B: MAYBE (evaluate carefully)
• Processing <$500M: Use PFaaS instead

Critical Requirements:
• Sponsor bank relationship
• Card network registration (Visa, MC, Amex, Discover)
• PCI DSS Level 1 compliance
• Reserve capital (5-20% of monthly volume)
• Risk/compliance team (8-12 FTE minimum)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Instead of each sub-merchant needing their own merchant account, PayFacs onboard sub-merchants under a single master MID, enabling instant onboarding while assuming full liability for sub-merchant activity. This model powers modern embedded payments.

**Prerequisites:** This module builds on [The Four-Party Model](./01-four-party-model.md), [Acquiring Banks](./07-acquiring-banks.md), and [ISOs](./08-isos.md). Understanding these foundations is essential for grasping how PayFacs fit into the payment ecosystem.

---

## Overview

A **Payment Facilitator (PayFac)** is a registered entity with [card networks](./02-card-network-role.md) that underwrites, onboards, and manages sub-merchants under its own master merchant account (MID). The PayFac bears full liability for all sub-merchant transactions, chargebacks, and fraud.

| Aspect | Description |
|--------|-------------|
| **Core Model** | Master merchant with aggregated sub-merchants |
| **Registration** | Registered directly with Visa, Mastercard, other networks |
| **Onboarding Speed** | Minutes to hours (vs weeks for traditional) |
| **Liability** | PayFac bears 100% of sub-merchant risk |
| **Use Case** | Platforms, marketplaces, SaaS companies with SMB customers |

**Key Distinction:** A PayFac is NOT just a technology layer - it's a **regulated entity** that assumes legal and financial responsibility for payment acceptance on behalf of sub-merchants.

**Common Confusion:**
- **PayFac ≠ [Payment Gateway](./06-payment-gateways.md)**: Gateway routes transactions; PayFac underwrites merchants
- **PayFac ≠ [Payment Processor](./05-payment-processors.md)**: Processor handles transaction processing; PayFac handles merchant underwriting/management
- **PayFac ≠ [ISO](./08-isos.md)**: ISO sells on behalf of acquirer; PayFac IS the merchant of record

**Related Concepts:**
- [ISVs](./09-isvs.md) often become PayFacs to monetize embedded payments
- PayFacs require [sponsor bank relationships](./07-acquiring-banks.md#sponsor-banks-for-payfacs) for settlement

> **Common Misconception:** "PayFacs make money on interchange."
>
> **Reality:** Interchange goes to the **issuing bank**, not the PayFac. PayFacs make money on the **markup above costs** (interchange + network assessments + processor fees). A PayFac charging 2.9% on a transaction where costs are 2.1% keeps the 80 bps spread - that's the PayFac margin, not interchange.

---

## Historical Evolution

### The Problem PayFacs Solved

Before PayFacs, every business needing to accept payments faced:

```
TRADITIONAL MERCHANT ACCOUNT SETUP (Pre-2009)
═══════════════════════════════════════════════════════════════

Step 1: Application Submission
┌─────────────────────────────────────────────────────────────┐
│ • 8-12 page merchant application form                       │
│ • Business tax returns, bank statements (6+ months)         │
│ • Business licenses, incorporation documents                │
│ • Personal guarantor information and credit check           │
│ • Processing volume estimates and business plan             │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
Step 2: Underwriting Review (3-7 Days)
┌─────────────────────────────────────────────────────────────┐
│ • Manual review by underwriting team                        │
│ • Credit bureau check (business + personal guarantor)       │
│ • Business verification (Secretary of State lookup)         │
│ • Risk assessment based on MCC code                         │
│ • Declined rate: 15-30% for SMBs                            │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
Step 3: MID Setup & Integration (5-10 Days)
┌─────────────────────────────────────────────────────────────┐
│ • Unique Merchant ID (MID) provisioned at processor         │
│ • Terminal/gateway setup and testing                        │
│ • PCI compliance documentation                              │
│ • API credentials and integration                           │
└─────────────────────────────────────────────────────────────┘

TOTAL TIME: 2-4 WEEKS (if approved)
APPROVAL RATE: 70-85% for SMBs

PROBLEMS:
• Too slow for online/mobile businesses wanting instant payments
• High rejection rate for micro-merchants (<$50K/year volume)
• Integration complexity requires developer resources
• Fixed costs make small merchants unprofitable for acquirers
```

**The Friction:** Traditional acquiring was built for established businesses with predictable revenue. It failed for:
- Gig economy workers (Uber drivers, Etsy sellers)
- New businesses without financial history
- Low-volume merchants (<$10K/month)
- Marketplaces needing to onboard thousands of sellers quickly

### 2009-2010: Square and PayPal Pioneer the PayFac Model

**Square's Innovation (2009):**
```
PROBLEM: Coffee shop owner can't accept cards without 2-week setup

SOLUTION: Instant merchant onboarding
┌─────────────────────────────────────────────────────────────┐
│ 1. Download Square app                                      │
│ 2. Enter SSN/EIN + bank account (60 seconds)                │
│ 3. Start accepting payments IMMEDIATELY                     │
│ 4. Money in bank account in 1-2 days                        │
└─────────────────────────────────────────────────────────────┘

HOW?
• Square registered as Payment Facilitator with Visa/MC
• All merchants onboarded under Square's master MID
• Square assumes liability for every transaction
• Square performs underwriting AFTER first transaction (risk-based)
```

**PayPal's Evolution (2010+):**
- PayPal had been aggregating merchants since 1998 (pre-PayFac term)
- Formalized PayFac registration with networks around 2010
- Pioneered "instant access, continuous monitoring" model

### 2011-2015: Visa/Mastercard Formalize PayFac Rules

```
CARD NETWORK RESPONSE
═══════════════════════════════════════════════════════════════

2011: Visa Payment Facilitator Program
┌─────────────────────────────────────────────────────────────┐
│ • Official recognition of PayFac business model             │
│ • Registration requirements and ongoing obligations         │
│ • Sub-merchant identification in clearing data              │
│ • Transaction/chargeback monitoring thresholds              │
└─────────────────────────────────────────────────────────────┘

2012: Mastercard Payment Facilitator Program
┌─────────────────────────────────────────────────────────────┐
│ • Similar framework to Visa                                 │
│ • Requires sponsor bank relationship                        │
│ • Sub-merchant data element requirements (DE 48)            │
│ • Risk program and reserve fund mandates                    │
└─────────────────────────────────────────────────────────────┘

2015: Industry Standardization
┌─────────────────────────────────────────────────────────────┐
│ • Amex OptBlue (PayFac-friendly aggregator program)         │
│ • Discover Network PayFac registration process              │
│ • Industry consensus on PayFac vs ISO distinctions          │
└─────────────────────────────────────────────────────────────┘
```

### 2016-Present: PayFac-as-a-Service Explosion

```
MARKET EVOLUTION
═══════════════════════════════════════════════════════════════

2016-2020: PFaaS Platforms Emerge
┌─────────────────────────────────────────────────────────────┐
│ • Stripe Connect, Braintree Marketplace, Adyen MarketPay    │
│ • ISVs can leverage existing PayFac infrastructure          │
│ • "Become a PayFac in days, not years"                      │
│ • Revenue share model: ISV gets 20-40 bps markup            │
└─────────────────────────────────────────────────────────────┘

2020-Present: Embedded Payments Everywhere
┌─────────────────────────────────────────────────────────────┐
│ • Vertical SaaS adds payments (Toast, Shopify, Mindbody)    │
│ • PayFac becomes largest revenue driver for many SaaS       │
│ • Estimated 1,500+ active PayFacs in US (2025)              │
│ • Payment revenue > software revenue for many platforms     │
└─────────────────────────────────────────────────────────────┘
```

**Key Insight:** PayFacs didn't just make onboarding faster - they fundamentally changed WHO could accept payments. The model enabled platforms to embed payments directly into their software, turning payment acceptance from a separate service into an integrated feature.

---

## Market Landscape (2024-2025)

The PayFac market has grown dramatically and continues to expand as embedded payments become ubiquitous.

### Market Size and Growth

| Metric | Value | Source |
|--------|-------|--------|
| **Global Market Size (2024)** | $15.2 billion | DataIntelo Market Research |
| **Projected Market (2033)** | $54.8 billion | Market Research |
| **CAGR (2025-2033)** | 15.2% | Industry Analysis |
| **Global Processing Volume (2025)** | $4.013 trillion forecast | Digital Transactions |
| **Active PayFacs (2025)** | 2,381 (up 91% from 1,244 in 2020) | Industry Forecast |
| **North America Market Share** | 38% of global ($7.8B revenue) | Market Research |
| **Fastest-Growing Region** | Asia Pacific (18.7% CAGR) | Market Analysis |

### Major PayFac Players

```
PAYFAC MARKET LEADERS (2024 Transaction Volume)
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│  STRIPE                                                      │
│  TPV: $1.4 trillion (+40% YoY)                              │
│  Revenue: $5.1 billion net                                   │
│  Market Share: 20.8% US                                      │
│  Valuation: $91.5 billion (May 2025)                         │
│  Key: 80% of largest US software companies use Stripe        │
│  Key: 50% of Fortune 100 companies use Stripe               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ADYEN                                                       │
│  TPV: €1.29 trillion (+33% YoY)                             │
│  Revenue: €1.996 billion (+23% YoY)                         │
│  Market Cap: €46 billion                                     │
│  EBITDA Margin: 50%                                          │
│  Key: Enterprise-focused, unified commerce platform          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  PAYPAL                                                      │
│  TPV: $1.68 trillion total payment volume                   │
│  Merchants: 35-36 million active merchant accounts           │
│  Total Accounts: 434 million (consumers + merchants)         │
│  Transactions: 26.3 billion in 2024                          │
│  Global Market Share: 43.4%                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  BLOCK (SQUARE)                                              │
│  TPV: $241 billion                                           │
│  Revenue: $24 billion                                        │
│  Market Cap: $46 billion                                     │
│  Key: SMB-focused, hardware + software integration           │
└─────────────────────────────────────────────────────────────┘
```

### PayFac-as-a-Service (PFaaS) Providers

The emergence of PFaaS has democratized access to PayFac capabilities:

| Provider | Key Strengths | Implementation Time | Revenue Model |
|----------|---------------|---------------------|---------------|
| **Stripe Connect** | API-first, developer experience | 2-4 weeks | Revenue share |
| **Finix** | Transition path to full PayFac | Variable | Growth-focused |
| **Tilled** | White-label capabilities | 8-16 weeks | 75-90% revenue share |
| **Rainforest** | Transparent pricing, fast funding | Fast | Ownership economics |
| **Clearent by Xplor** | SaaS-focused (launched Oct 2024) | Variable | Optimized infrastructure |
| **Adyen for Platforms** | Enterprise-grade, global reach | Variable | Transaction-based |

**PFaaS Economic Model:**
- Per $100 transaction: ~$3.00 total processing cost
- Breakdown: $2.20 interchange/network fees, $0.80 gross margin
- Platforms typically capture 75-90% of the $0.80 margin

### Recent Major Acquisitions

```
2024-2025 M&A ACTIVITY
═══════════════════════════════════════════════════════════════

GLOBAL PAYMENTS / WORLDPAY (April 2025)
┌─────────────────────────────────────────────────────────────┐
│ Deal Value: $24.25 billion                                   │
│ Expected Close: First half of 2026 (pending regulatory)     │
│ Synergies: $600 million annual expense savings              │
│                                                              │
│ Key Assets Acquired:                                         │
│ • Worldpay's payment gateway and global e-commerce base     │
│ • Payrix PayFac platform (acquired by Worldpay in 2022)     │
│ • Now branded: Worldpay for Platforms                        │
│                                                              │
│ Concurrent: Global Payments selling issuer business to FIS   │
│ for $13.5 billion                                            │
└─────────────────────────────────────────────────────────────┘

STRIPE / BRIDGE (October 2024)
┌─────────────────────────────────────────────────────────────┐
│ Deal Value: $1.1 billion                                     │
│ Focus: Stablecoin infrastructure expansion                   │
│ Strategy: Enterprise and infrastructure growth               │
└─────────────────────────────────────────────────────────────┘
```

### Regulatory Landscape (2024-2025)

**Visa/Mastercard Registration Requirements:**

| Requirement | Details |
|-------------|---------|
| **Registration Fees** | $5,000 Visa + $5,000 Mastercard |
| **State Licenses** | Money transmitter licenses (~$150,000 for national coverage) |
| **Visa Certification** | Mandatory by September 30, 2025 (PFids invalidated after) |
| **Certification Timeline** | 4-6 weeks to complete |
| **High-Risk Fee (Visa)** | $950/year (raised from $500 in April 2024) |
| **High-Risk Transaction Fee** | $0.10 + 10 bps (new as of April 2024) |

**Key Compliance Deadlines:**
- **PCI DSS v4.0 Compliance:** March 31, 2025 (v3.2.1 retired)
- **Visa PayFac Certification:** September 30, 2025
- **1099-K Threshold:** $5,000 (2024)

### Industry Trends

1. **Embedded Payments Acceleration**: "Most payments will come through software by 2025" - industry consensus
2. **Vertical SaaS Growth**: Market size $157 billion (2025), projected 12.6% CAGR to $400B+ by 2032
3. **B2B Payment Modernization**: B2B payments historically lagging consumer, now accelerating
4. **Healthcare PayFac Growth**: 30.6% CAGR through 2030 driven by telemedicine and EHR integration
5. **Consolidation**: Major processors acquiring PayFac infrastructure to compete with Stripe/Adyen

---

## The Master Merchant Model

This is the core architectural concept that makes PayFac work.

### Master Merchant Aggregation

```
TRADITIONAL MODEL: One Merchant = One MID
═══════════════════════════════════════════════════════════════

Merchant A ────→ MID: 1234567890001 ────→ Processor ────→ Networks
Merchant B ────→ MID: 1234567890002 ────→ Processor ────→ Networks
Merchant C ────→ MID: 1234567890003 ────→ Processor ────→ Networks

Each merchant has unique MID, separate underwriting, separate settlement


PAYFAC MODEL: Many Sub-Merchants Under One Master MID
═══════════════════════════════════════════════════════════════

                    ┌─────────────────────────────┐
                    │  PAYFAC MASTER MERCHANT     │
                    │  MID: 9999999999999         │
                    │  (Registered with Networks) │
                    └──────────────┬──────────────┘
                                   │
            ┌──────────────────────┼──────────────────────┐
            │                      │                      │
    ┌───────▼────────┐    ┌────────▼───────┐    ┌────────▼───────┐
    │ Sub-Merchant A │    │ Sub-Merchant B │    │ Sub-Merchant C │
    │ Sub-MID: A001  │    │ Sub-MID: B001  │    │ Sub-MID: C001  │
    │ Coffee Shop    │    │ Yoga Studio    │    │ Pet Groomer    │
    └────────────────┘    └────────────────┘    └────────────────┘

All transactions flow through PayFac's master MID
Sub-MID is included in transaction data for tracking/reporting
Networks see PayFac as the merchant (PayFac is merchant of record)
```

### How Sub-Merchant Identification Works

PayFacs must pass sub-merchant identifying information in transaction data:

```
TRANSACTION DATA STRUCTURE (ISO 8583)
═══════════════════════════════════════════════════════════════

Field 42: Card Acceptor Identification Code
┌─────────────────────────────────────────────────────────────┐
│ Value: [PayFac Master MID]                                  │
│ Example: 9999999999999                                      │
│                                                              │
│ This is what networks/issuers see as the "merchant"         │
└─────────────────────────────────────────────────────────────┘

Field 48: Additional Data (Sub-Merchant Info)
┌─────────────────────────────────────────────────────────────┐
│ Sub-element: Payment Facilitator Data                       │
│ • Sub-Merchant ID: A001                                     │
│ • Sub-Merchant Name: "Acme Coffee Shop"                     │
│ • Sub-Merchant Street: "123 Main St"                        │
│ • Sub-Merchant City: "Austin"                               │
│ • Sub-Merchant State: "TX"                                  │
│ • Sub-Merchant Postal Code: "78701"                         │
│ • Sub-Merchant Country: "USA"                               │
│                                                              │
│ This is used for cardholder statement descriptor + tracking │
└─────────────────────────────────────────────────────────────┘
```

> **Note on Field Structure Variability:** The ISO 8583 field structure shown above is a conceptual example. Field 48 ("Additional Data - Private Use") is used differently by each network and processor. The exact sub-element structure and tag format varies. PayFacs must work with their processor to implement the correct format for their specific network connections.

**Why This Matters:**

1. **Cardholder Statements**: Customer sees sub-merchant name (not PayFac name)
   - Statement shows: "ACME COFFEE SHOP AUSTIN TX"
   - Reduces friendly fraud ("I don't recognize this charge")

2. **Chargeback Tracking**: Networks can identify which sub-merchant caused chargeback
   - If Sub-Merchant A has excessive chargebacks, networks can request removal
   - PayFac can monitor per-sub-merchant chargeback rates

3. **Compliance**: Networks require sub-merchant data for audit/compliance
   - Visa/MC rules mandate accurate sub-merchant information
   - Failure to provide can result in fines or program termination

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
                               │
                               ▼
DAY 2: PayFac Splits & Funds
┌─────────────────────────────────────────────────────────────┐
│ PayFac initiates ACH transfers:                             │
│ • $9,680 → Sub-Merchant A's bank account                    │
│ • $4,840 → Sub-Merchant B's bank account                    │
│ • $7,744 → Sub-Merchant C's bank account                    │
│                                                              │
│ PayFac revenue calculation:                                 │
│ • Fee collected from subs: $736                             │
│ • Network costs paid: $529                                  │
│ • GROSS MARGIN: $207                                        │
│                                                              │
│ Still need to deduct:                                       │
│ • Processor fee (~10 bps): $23                              │
│ • Sponsor bank fee (~5 bps): $12                            │
│ • Platform costs (infrastructure, support)                  │
│ • Reserve fund allocation                                   │
└─────────────────────────────────────────────────────────────┘
```

**Key Architectural Points:**

1. **PayFac Receives Gross Settlement**: All funds settle to PayFac first
2. **PayFac Performs Split Logic**: Calculate each sub-merchant's payout
3. **PayFac Initiates Transfers**: ACH/wire transfers to sub-merchant accounts
4. **Timing Control**: PayFac can control payout speed (instant, daily, weekly)

### Master Merchant Account Structure

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

The reserve account is critical to the PayFac model:

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

---

## Risk Model and Liability Structure

This is what makes PayFac fundamentally different from traditional models: **the PayFac assumes 100% liability for sub-merchant activity.**

### Complete Liability Transfer

```
WHO BEARS RISK?
═══════════════════════════════════════════════════════════════

TRADITIONAL ACQUIRING MODEL:
┌─────────────────────────────────────────────────────────────┐
│ Merchant defaults/fraud:                                    │
│ └─→ Acquiring Bank bears loss                               │
│     └─→ Acquiring Bank has direct relationship with merchant│
│         └─→ Bank performed underwriting & credit check      │
│                                                              │
│ Chargeback issued by issuer:                                │
│ └─→ Acquirer debits merchant's account                      │
│     └─→ If merchant account insufficient, acquirer eats loss│
└─────────────────────────────────────────────────────────────┘

ISO MODEL:
┌─────────────────────────────────────────────────────────────┐
│ Merchant defaults/fraud:                                    │
│ └─→ Acquiring Bank STILL bears loss                         │
│     └─→ ISO is just a sales agent                           │
│         └─→ ISO may lose commission, but no financial risk  │
│                                                              │
│ ISO does NOT have liability (unless contractual guarantee)  │
└─────────────────────────────────────────────────────────────┘

PAYFAC MODEL:
┌─────────────────────────────────────────────────────────────┐
│ Sub-merchant defaults/fraud:                                │
│ └─→ PAYFAC bears 100% of loss                               │
│     └─→ Sponsor bank holds PayFac responsible               │
│         └─→ Networks hold PayFac (master merchant) liable   │
│             └─→ PayFac must cover from reserves/capital     │
│                                                              │
│ Chargeback on sub-merchant transaction:                     │
│ └─→ Issuer charges back to PayFac's master MID              │
│     └─→ PayFac debits sub-merchant account                  │
│         └─→ If sub-merchant bankrupt: PayFac eats loss      │
│                                                              │
│ PAYFAC = MERCHANT OF RECORD = FULL LIABILITY                │
└─────────────────────────────────────────────────────────────┘
```

**Why This Matters:**

The liability transfer is WHY PayFacs can offer instant onboarding. Traditional acquirers need weeks to underwrite because they bear the risk. PayFacs say: "We'll take the risk, you give us control over the merchant relationship."

### The Chargeback Liability Chain

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
│         └─→ PayFac charges sub-merchant for remaining       │
│             └─→ If sub-merchant disappeared: PAYFAC LOSS    │
│                                                              │
│ SCENARIO C: Sub-merchant account closed / vanished          │
│ └─→ Cannot debit non-existent account                       │
│     └─→ PAYFAC ABSORBS $500 LOSS                            │
│         └─→ This is covered by reserve fund                 │
└─────────────────────────────────────────────────────────────┘
```

**Real-World Chargeback Loss Math:**

```
PayFac Portfolio: 10,000 active sub-merchants
Monthly Volume: $50M
Average Chargeback Rate: 0.65%

Monthly Chargebacks: $50M × 0.65% = $325,000

Recovery Rate Analysis:
┌─────────────────────────────────────────────────────────────┐
│ Successfully debited from sub-merchant: 85%                 │
│ • Amount recovered: $276,250                                │
│                                                              │
│ Partial recovery (insufficient funds): 10%                  │
│ • Amount recovered: $16,250 (50% of $32,500)                │
│ • PayFac loss: $16,250                                      │
│                                                              │
│ Complete default (account closed/negative): 5%              │
│ • Amount recovered: $0                                      │
│ • PayFac loss: $16,250                                      │
│                                                              │
│ TOTAL MONTHLY CHARGEBACK LOSS: $32,500                      │
│ Loss as % of volume: 0.065% (6.5 basis points)              │
└─────────────────────────────────────────────────────────────┘

Annual Impact:
• Total chargeback loss: $390,000/year
• This MUST be factored into PayFac economics
• Covered by reserve fund + pricing markup
```

### Underwriting Responsibilities

Since PayFac bears liability, PayFac MUST underwrite sub-merchants. But how?

**Tiered Risk-Based Underwriting:**

```
PAYFAC UNDERWRITING APPROACHES
═══════════════════════════════════════════════════════════════

TIER 1: INSTANT APPROVAL (Low Risk)
┌─────────────────────────────────────────────────────────────┐
│ Sub-merchant provides:                                      │
│ • Legal name, DBA                                           │
│ • SSN/EIN                                                   │
│ • Bank account for payouts                                  │
│ • Business description/MCC code                             │
│                                                              │
│ Automated checks (< 60 seconds):                            │
│ • OFAC sanctions screening                                 │
│ • IRS TIN verification (if available)                       │
│ • Bank account verification (micro-deposits or Plaid)       │
│ • Fraud database check (MATCH list, TMF)                    │
│ • Negative news screening                                   │
│                                                              │
│ Approval with limits:                                       │
│ • Max $5,000/month for 90 days                              │
│ • Max $500/transaction                                      │
│ • Manual review at $2,500 cumulative                        │
│                                                              │
│ Use case: Gig workers, micro-merchants, new businesses      │
└─────────────────────────────────────────────────────────────┘

TIER 2: ENHANCED VERIFICATION (Medium Risk)
┌─────────────────────────────────────────────────────────────┐
│ Additional requirements:                                    │
│ • Business verification (Secretary of State)                │
│ • Website/social media review                               │
│ • Personal credit check on principal owner                  │
│ • Proof of bank account ownership                           │
│                                                              │
│ Approval timeline: 1-3 hours (some manual review)           │
│                                                              │
│ Approval with higher limits:                                │
│ • Max $50,000/month                                         │
│ • Max $5,000/transaction                                    │
│ • Ongoing transaction monitoring                            │
│                                                              │
│ Use case: Established SMBs, e-commerce stores               │
└─────────────────────────────────────────────────────────────┘

TIER 3: FULL UNDERWRITING (High Risk)
┌─────────────────────────────────────────────────────────────┐
│ Additional requirements:                                    │
│ • Business financial statements                             │
│ • Processing history (if applicable)                        │
│ • Business plan and website content review                  │
│ • Background check on beneficial owners (UBO)               │
│ • Potentially: physical site inspection                     │
│                                                              │
│ Approval timeline: 1-3 days                                 │
│                                                              │
│ Approval with no/high limits:                               │
│ • Negotiated based on business profile                      │
│ • May require rolling reserve (10-20%)                      │
│ • Enhanced monitoring and quarterly reviews                 │
│                                                              │
│ Use case: High-risk MCCs, high-volume merchants             │
└─────────────────────────────────────────────────────────────┘
```

**Key Decision: Approve Fast vs Underwrite Thoroughly**

This is the fundamental PayFac tradeoff:

| Approach | Pros | Cons |
|----------|------|------|
| **Instant Approval** | Better user experience, higher conversion | Higher fraud/chargeback losses |
| **Thorough Underwriting** | Lower losses, better portfolio quality | Slower onboarding, lower conversion |

**Most PayFacs use a hybrid approach:**
1. Approve instantly with LOW limits
2. Monitor first 30-90 days of activity
3. Auto-increase limits for good actors
4. Flag/suspend suspicious patterns immediately

### Fraud Monitoring Requirements

PayFacs must actively monitor for fraud patterns:

```
CONTINUOUS MONITORING SYSTEMS
═══════════════════════════════════════════════════════════════

Real-Time Transaction Monitoring:
┌─────────────────────────────────────────────────────────────┐
│ • Velocity checks (txns per hour/day/week)                  │
│ • Unusual transaction amounts (3x average)                  │
│ • Geographic anomalies (location mismatch)                  │
│ • High-risk transaction patterns:                           │
│   - Multiple small test charges                             │
│   - Rapid sequence of refunds                               │
│   - International card usage for domestic business          │
│                                                              │
│ Action: Auto-hold payouts, request documentation            │
└─────────────────────────────────────────────────────────────┘

Chargeback Rate Monitoring:
┌─────────────────────────────────────────────────────────────┐
│ Per sub-merchant chargeback thresholds:                     │
│ • WARNING: >0.65% chargeback rate                           │
│ • CRITICAL: >0.90% chargeback rate                          │
│ • EXCESSIVE: >1.5% chargeback rate                          │
│                                                              │
│ Action:                                                      │
│ • Warning: Email notification, request explanation          │
│ • Critical: Hold payouts, require action plan               │
│ • Excessive: Terminate sub-merchant account                 │
└─────────────────────────────────────────────────────────────┘

Network Monitoring Program Compliance:
┌─────────────────────────────────────────────────────────────┐
│ PayFac must monitor aggregate portfolio:                   │
│                                                              │
│ Visa Dispute Monitoring Program (VDMP) - TIERED (2024):     │
│ • VDMP Standard: 0.65-0.89% ratio AND 75+ chargebacks      │
│   └─→ Monitoring begins, action plan required               │
│ • VDMP Excessive: 0.9-1.79% ratio AND 100+ chargebacks     │
│   └─→ $50/chargeback fee, enhanced monitoring              │
│ • VDMP High Excessive: ≥1.8% ratio                         │
│   └─→ $25 review fee + potential program termination       │
│                                                              │
│ Mastercard Excessive Chargeback Program (ECP):              │
│ • Excessive: ≥1.5% rate OR ≥300 chargebacks/month          │
│ • High Excessive: ≥3.0% rate OR ≥1,000 chargebacks         │
│                                                              │
│ If PayFac portfolio breaches thresholds:                    │
│ └─→ Networks fine PayFac directly                           │
│     └─→ If unresolved: PayFac registration terminated       │
└─────────────────────────────────────────────────────────────┘
```

**Proactive Risk Management:**

Successful PayFacs don't wait for problems - they predict and prevent:

1. **Machine Learning Models**: Predict fraud probability at onboarding
2. **Behavioral Analysis**: Flag departures from normal patterns
3. **Industry Benchmarking**: Compare sub-merchant metrics to peer averages
4. **Manual Review Queues**: Human analysts review flagged accounts daily

### What Happens When Sub-Merchant Commits Fraud

Real-world scenario:

```
FRAUD SCENARIO: Bust-Out Scheme
═══════════════════════════════════════════════════════════════

Week 1-4: Establish Trust
┌─────────────────────────────────────────────────────────────┐
│ Sub-merchant "ElectronicsDeals" onboards                    │
│ • Provides valid SSN, bank account                          │
│ • Processes $5K/week in legitimate-looking transactions     │
│ • No chargebacks, good customer reviews                     │
│ • PayFac increases limits to $20K/week                      │
└─────────────────────────────────────────────────────────────┘

Week 5: The Bust-Out
┌─────────────────────────────────────────────────────────────┐
│ Friday: Sub-merchant processes $150K in one day             │
│ • Sudden spike triggers PayFac alerts                       │
│ • But transactions already authorized                       │
│ • Goods supposedly shipped                                  │
│                                                              │
│ Saturday: Sub-merchant requests expedited payout            │
│ • PayFac holds payout pending review (good practice!)       │
│                                                              │
│ Sunday: PayFac investigates                                 │
│ • Website now shows "out of stock" on everything            │
│ • Phone disconnected                                        │
│ • Social media accounts deleted                             │
└─────────────────────────────────────────────────────────────┘

Week 6-8: Chargebacks Roll In
┌─────────────────────────────────────────────────────────────┐
│ Customers never receive products                            │
│ • 450 chargebacks filed: $148,500                           │
│ • Chargeback rate: 99% (almost all transactions)            │
│                                                              │
│ PayFac holds $150K in settlement from Week 5                │
│ • This covers the chargeback losses                         │
│ • Sub-merchant never received payout                        │
│ • PAYFAC BREAKS EVEN (if held payout)                       │
│                                                              │
│ If PayFac had already paid out $150K:                       │
│ • Sub-merchant account closed, money gone                   │
│ • PAYFAC LOSES $148,500                                     │
│ • Reserve fund must cover loss                              │
│ • Potentially report fraud to law enforcement               │
└─────────────────────────────────────────────────────────────┘
```

**Critical Risk Controls:**

| Control | Purpose |
|---------|---------|
| **Payout Holds** | Don't fund until goods confirmed delivered |
| **Rolling Reserves** | Deduct % from each payout, release after 180 days |
| **Velocity Limits** | Cap daily/weekly volume increases |
| **Manual Review Triggers** | Human review for unusual patterns |
| **Customer Satisfaction** | Monitor complaint rates, reviews |

**Industry Reality:** Fraud losses are a COST OF DOING BUSINESS for PayFacs. Typical fraud loss rates:

- **Low-risk portfolio**: 0.02-0.05% of volume (2-5 bps)
- **Medium-risk**: 0.10-0.20% (10-20 bps)
- **High-risk**: 0.50%+ (50+ bps)

These must be priced into the PayFac revenue model.

---

## Key Differences: PayFac vs ISO vs Traditional

```
COMPARISON TABLE
═══════════════════════════════════════════════════════════════

┌─────────────────────┬──────────────────┬──────────────────┬──────────────────┐
│ Aspect              │ Traditional      │ ISO Model        │ PayFac Model     │
│                     │ Merchant Account │                  │                  │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Merchant of Record  │ Merchant itself  │ Merchant itself  │ PayFac           │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Merchant ID (MID)   │ Unique per       │ Unique per       │ Shared master    │
│                     │ merchant         │ merchant         │ MID              │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Onboarding Time     │ 2-4 weeks        │ 1-2 weeks        │ Minutes to hours │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Underwriting        │ Acquirer         │ Acquirer         │ PayFac           │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Risk Liability      │ Acquirer         │ Acquirer         │ PayFac (100%)    │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Chargeback Debit    │ Direct to        │ Direct to        │ PayFac debits    │
│                     │ merchant account │ merchant account │ sub-merchant     │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Settlement Receiver │ Merchant         │ Merchant         │ PayFac, then     │
│                     │                  │                  │ splits to subs   │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Pricing Control     │ ISO/Acquirer     │ ISO (negotiated) │ PayFac           │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Revenue Model       │ N/A              │ Residual bps     │ MDR markup       │
│                     │                  │ (10-50 bps)      │ (50-150 bps)     │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Technology Req      │ POS/Gateway      │ Sales CRM        │ Full platform    │
│                     │                  │                  │ infrastructure   │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ PCI Compliance      │ Merchant         │ Merchant         │ PayFac (Level 1) │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Regulatory Burden   │ Merchant         │ ISO registration │ Heavy: PayFac    │
│                     │                  │ (minimal)        │ registration,    │
│                     │                  │                  │ sponsor bank,    │
│                     │                  │                  │ MTLs, AML        │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Ideal For           │ Large            │ Sales agents     │ Platforms with   │
│                     │ established      │ with merchant    │ many small       │
│                     │ businesses       │ relationships    │ merchants        │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Minimum Volume      │ $50K+/month      │ Varies           │ $500+/month      │
│                     │                  │                  │ (low threshold)  │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Examples            │ Direct           │ North American   │ Stripe, Square,  │
│                     │ acquirer         │ Bancard, Dharma  │ PayPal, Shopify  │
│                     │ relationship     │ Merchant Svcs    │ Payments         │
└─────────────────────┴──────────────────┴──────────────────┴──────────────────┘
```

### When to Use Each Model

**Traditional Merchant Account:**
```
BEST FOR:
┌─────────────────────────────────────────────────────────────┐
│ ✓ Large enterprise merchants ($500K+/month volume)          │
│ ✓ Need custom interchange optimization                      │
│ ✓ Want direct relationship with acquirer                    │
│ ✓ Complex payment needs (multi-currency, specialized MCC)   │
│ ✓ Can negotiate interchange++ pricing                       │
│                                                              │
│ Example: Amazon gets interchange++ from acquirer            │
│ • Interchange: 1.80%                                        │
│ • Network assessments: 0.13%                                │
│ • Acquirer markup: 0.10%                                    │
│ • TOTAL: 2.03% (vs 2.9% from PayFac)                        │
└─────────────────────────────────────────────────────────────┘
```

**ISO Model:**
```
BEST FOR:
┌─────────────────────────────────────────────────────────────┐
│ ✓ Sales professionals wanting to sell payment processing    │
│ ✓ Don't want technology/compliance burden                   │
│ ✓ Focus on relationship-based sales                         │
│ ✓ Building long-term residual income portfolio              │
│ ✓ Partnering with existing acquirer/processor               │
│                                                              │
│ Example: Agent sells 100 merchants to First Data            │
│ • Each merchant: $10K/month volume                          │
│ • Total portfolio volume: $1M/month = $12M/year             │
│ • Residual: 25 bps = $30K/year passive income               │
└─────────────────────────────────────────────────────────────┘
```

**PayFac Model:**
```
BEST FOR:
┌─────────────────────────────────────────────────────────────┐
│ ✓ Software platforms with many small merchants              │
│ ✓ Need instant merchant onboarding                          │
│ ✓ Want full control over user experience                    │
│ ✓ Can handle technology/compliance requirements             │
│ ✓ Willing to assume liability for revenue opportunity       │
│                                                              │
│ Example: Restaurant SaaS with 5,000 customers               │
│ • Each restaurant: $30K/month volume                        │
│ • Attach rate: 60% (3,000 using payments)                   │
│ • Total volume: $90M/month = $1.08B/year                    │
│ • PayFac margin: 100 bps = $10.8M/year                      │
│ • Revenue > software subscriptions                          │
└─────────────────────────────────────────────────────────────┘
```

---

## Types of PayFac Implementations

There are several ways to operate as a PayFac (or leverage PayFac capabilities).

### 1. Full PayFac (Registered Direct)

```
FULL PAYFAC IMPLEMENTATION
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│                    CARD NETWORKS                             │
│              (Visa, Mastercard, Amex, etc)                   │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │ PayFac Registration
                   │ (Directly registered as PayFac)
                   │
┌──────────────────▼──────────────────────────────────────────┐
│                  SPONSOR BANK                                │
│         (e.g., Wells Fargo, Sutton Bank)                     │
│                                                              │
│  • Holds settlement accounts                                │
│  • Provides acquiring services                              │
│  • Monitors PayFac compliance                               │
│  • Can terminate relationship if issues                     │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │ Sponsorship Agreement
                   │
┌──────────────────▼──────────────────────────────────────────┐
│                  PAYMENT PROCESSOR                           │
│         (e.g., Fiserv, TSYS, FIS)                            │
│                                                              │
│  • Provides front-end/back-end processing                   │
│  • Handles authorization routing                            │
│  • Settlement/clearing systems                              │
│  • Transaction data transmission to networks                │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │ Processing Agreement
                   │
┌──────────────────▼──────────────────────────────────────────┐
│                    PAYFAC PLATFORM                           │
│              (You build everything)                          │
│                                                              │
│  • Merchant onboarding system                               │
│  • KYC/KYB/underwriting                                     │
│  • Transaction monitoring                                   │
│  • Split payout logic                                       │
│  • Chargeback management                                    │
│  • Compliance/reporting                                     │
│  • Customer support                                         │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │ Your APIs
                   │
┌──────────────────▼──────────────────────────────────────────┐
│                  SUB-MERCHANTS                               │
│          (Your customers/users)                              │
└─────────────────────────────────────────────────────────────┘
```

**What You Control:**
- Complete payment experience
- Pricing to sub-merchants
- Underwriting rules and limits
- Payout timing and logic
- All customer touchpoints

**What You Must Handle:**
- PCI DSS Level 1 compliance (~$100K+/year)
- Card network registrations (Visa, MC, Amex, Discover)
- Sponsor bank relationship and audits
- Money transmitter licensing (state-by-state) - see note below
- AML/KYC programs and compliance officer
- Reserve funds (millions in capital)
- 24/7 risk monitoring and fraud prevention
- Chargeback management infrastructure

> **Note on Money Transmitter Licensing:** MTL requirements for PayFacs are complex and state-dependent. Many PayFacs argue they are exempt because: (1) they don't take possession of funds in the traditional sense, (2) funds flow through sponsor bank settlement, (3) they may qualify for "agent of payee" exemptions in many states. However, regulatory interpretations vary, and some states have taken enforcement actions against PayFacs operating without licenses. **Legal counsel is essential** to determine your specific licensing requirements. Some states (NY, Texas, California) have stricter interpretations than others.

**Capital Requirements:**
- Initial: $500K - $2M (reserves + operational)
- Ongoing: 5-20% of monthly volume in reserves
- Example: $10M/month volume = $500K - $2M reserves

**Cost to Build:**
- Technology build: $500K - $2M (12-24 months)
- Annual compliance: $200K - $500K
- Sponsor bank fees: $50K - $150K/year
- Processor fees: Based on volume

**When It Makes Sense:**
- Processing >$500M/year
- Want maximum control and margin
- Have compliance/regulatory expertise
- Can invest $2M+ upfront

**Examples:**
- Square (built full stack)
- Shopify Payments (full PayFac)
- Toast (restaurant-focused PayFac)

### 2. PayFac-as-a-Service (PFaaS)

```
PAYFAC-AS-A-SERVICE MODEL
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│                    CARD NETWORKS                             │
└──────────────────┬──────────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────────┐
│                  SPONSOR BANK                                │
└──────────────────┬──────────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────────┐
│              PAYFAC PROVIDER                                 │
│       (Stripe Connect, Adyen MarketPay,                      │
│        Braintree Marketplace, Finix)                         │
│                                                              │
│  THEY handle:                                                │
│  • PayFac registration with networks                        │
│  • Sponsor bank relationship                                │
│  • PCI Level 1 compliance                                   │
│  • Core underwriting platform                               │
│  • Settlement/payout infrastructure                         │
│  • Chargeback management                                    │
│  • Reserve fund management                                  │
│  • Base compliance (AML/KYC)                                │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │ Revenue Share: 60-80% to you
                   │
┌──────────────────▼──────────────────────────────────────────┐
│                 YOUR PLATFORM (ISV)                          │
│                                                              │
│  YOU handle:                                                 │
│  • Your software/product                                    │
│  • User onboarding flow (payments embedded)                 │
│  • Customer support (tier 1)                                │
│  • Your branding                                            │
│  • Additional underwriting rules (optional)                 │
└──────────────────┬──────────────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────────────┐
│              YOUR CUSTOMERS                                  │
│         (Sub-merchants under PFaaS)                          │
└─────────────────────────────────────────────────────────────┘
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

Alternative Split Model:
┌─────────────────────────────────────────────────────────────┐
│ You charge sub-merchant: $3,400 (3.4%)                      │
│                                                              │
│ Revenue split:                                              │
│ • PFaaS provider: $375 (30%)                                │
│ • You receive: $875 (70%)                                   │
│                                                              │
│ PFaaS provider still pays interchange from their share      │
└─────────────────────────────────────────────────────────────┘
```

**Time to Market:**
- Integration: 2-4 weeks
- Launch: 1-3 months (vs 12-24 for full PayFac)

**Ongoing Costs:**
- Platform fees: $0 - $500/month
- Per-transaction: $0 - $0.10
- Revenue share: 20-40% of payment margin
- No compliance/licensing costs (handled by PFaaS)

**When It Makes Sense:**
- Processing <$500M/year
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

#### The PFaaS Underwriting Spectrum (Critical Market Reality)

Not all "PFaaS" providers are equal. A crucial distinction exists in **who actually performs underwriting**. This is often obscured by marketing but fundamentally affects liability, economics, and platform capabilities.

```
PFAAS UNDERWRITING MODELS
═══════════════════════════════════════════════════════════════

MODEL A: FULL OUTSOURCED UNDERWRITING ("PayFac Lite")
┌─────────────────────────────────────────────────────────────┐
│ Who Underwrites: Underlying processor or sponsor bank       │
│ PFaaS Provider Role: Technology layer ONLY                  │
│                                                              │
│ How it works:                                                │
│ • Platform collects merchant data via PFaaS provider's API  │
│ • PFaaS provider passes application to processor/bank       │
│ • PROCESSOR makes accept/decline decision                   │
│ • PFaaS provider has zero underwriting discretion           │
│                                                              │
│ Liability: Processor/bank bears fraud/chargeback losses     │
│ Platform control: Minimal (stuck with processor's appetite) │
│ Economics: Higher fees (processor risk costs embedded)      │
│                                                              │
│ ⚠️  Reality Check: This is NOT really a PayFac model -     │
│     it's a referral arrangement with better APIs.           │
└─────────────────────────────────────────────────────────────┘

MODEL B: HYBRID UNDERWRITING (Most Common Legitimate PFaaS)
┌─────────────────────────────────────────────────────────────┐
│ Who Underwrites: Shared - PFaaS + processor for edge cases  │
│ PFaaS Provider Role: First-pass automated decisioning       │
│                                                              │
│ How it works:                                                │
│ • PFaaS provider has built underwriting rules engine        │
│ • 70-80% of applications auto-approved/declined by rules    │
│ • Edge cases escalate to processor underwriting team        │
│ • PFaaS sets MCC ranges, velocity limits, thresholds        │
│ • Processor retains veto power on complex cases             │
│                                                              │
│ Liability: PFaaS provider (from loss reserve with sponsor)  │
│ Platform control: Some (can influence risk parameters)      │
│ Economics: Moderate fees (PFaaS absorbs risk costs)         │
│                                                              │
│ Examples: Stripe Connect operates primarily this way        │
└─────────────────────────────────────────────────────────────┘

MODEL C: PRIMARY UNDERWRITING (True PFaaS)
┌─────────────────────────────────────────────────────────────┐
│ Who Underwrites: PFaaS provider makes all decisions         │
│ PFaaS Provider Role: Full underwriting team + risk models   │
│                                                              │
│ How it works:                                                │
│ • PFaaS employs underwriting staff and data scientists      │
│ • PFaaS builds and maintains proprietary risk models        │
│ • 85-95% auto-decisioned by PFaaS ML models                 │
│ • Sponsor bank monitors portfolio, doesn't decide per-merch │
│ • PFaaS bears first-loss liability                          │
│                                                              │
│ Liability: PFaaS provider (significant reserves required)   │
│ Platform control: Limited (trust PFaaS expertise)           │
│ Economics: Premium pricing but superior approval rates      │
│                                                              │
│ Examples: Adyen, PayPal/Braintree                           │
└─────────────────────────────────────────────────────────────┘

MODEL D: DELEGATED UNDERWRITING (Platform-as-Underwriter)
┌─────────────────────────────────────────────────────────────┐
│ Who Underwrites: The platform (ISV/marketplace) itself      │
│ PFaaS Provider Role: Infrastructure + oversight             │
│                                                              │
│ How it works:                                                │
│ • Platform has actual underwriting expertise/team           │
│ • PFaaS provides tools: KYC APIs, risk scoring, rules engine│
│ • Platform makes accept/decline decisions                   │
│ • PFaaS monitors platform's underwriting quality            │
│ • Platform may bear first-loss liability                    │
│                                                              │
│ Liability: Platform (reserve required)                      │
│ Platform control: Maximum (own decisions)                   │
│ Economics: Lower platform fees, but platform funds risk     │
│                                                              │
│ Note: Rare - most platforms don't want this responsibility  │
└─────────────────────────────────────────────────────────────┘
```

**Card Network Rules on Underwriting Delegation:**

> **Key Insight:** PayFacs **can** delegate underwriting **execution** to third parties, but they **cannot** delegate **liability**. Networks hold the registered PayFac accountable regardless of who physically performed the underwriting.

| Aspect | What Can Be Delegated | What Cannot Be Delegated |
|--------|----------------------|--------------------------|
| **Execution** | Data collection, verification, decisioning | N/A |
| **Liability** | N/A | PayFac remains liable to sponsor bank |
| **Oversight** | Day-to-day operations | Annual reviews, policy setting |
| **Registration** | Third parties must register as TPAs | PayFac registration obligation |

**Third-Party Agent (TPA) Requirements:**
- Any party performing underwriting for a PayFac must be registered as a Visa TPA
- Failure to register: Fines starting at $10,000 per unregistered agent
- Annual TPA reviews mandatory
- PayFac retains ultimate responsibility

**How to Identify Model A Providers (Red Flags):**

```
⚠️ RED FLAGS - Provider Likely Model A (Outsourced Underwriting):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. "Our processor partners handle underwriting"
   → They're just a technology layer

2. Cannot provide Visa/MC PayFac registration numbers
   → May not be registered PayFac at all

3. "We work with multiple processors" but can't explain
   how underwriting differs per processor
   → Processor is making decisions, not them

4. No loss reserve requirement from platform
   → They bear no risk (processor does)

5. Cannot describe underwriting methodology in detail
   → They don't have one

6. < 0.15% platform fee on volume
   → Economics don't support real underwriting infrastructure

7. Very limited MCC support with no flexibility
   → Processor's risk appetite, not theirs

8. "All applications are manually reviewed"
   → They have no automated decisioning (processor handles it)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Due Diligence Questions for Evaluating PFaaS Providers:**

| Question | Model A Answer | Model B/C Answer |
|----------|---------------|-----------------|
| "Are you registered as PayFac with Visa/MC?" | No or vague | Yes, here's our ID |
| "Who makes accept/decline decisions?" | "Our processor" | "Our underwriting team" |
| "What % is auto-decisioned?" | "All go to processor" | "70-95% by our models" |
| "Do you employ underwriters? How many?" | "Processor handles that" | "Yes, 5-50+ people" |
| "What's your loss reserve requirement?" | "None for us" | "$50K-1M+ with sponsor" |
| "If my merchant commits fraud, who pays?" | "The processor" | "We do, from reserves" |
| "Can you describe your risk model?" | Can't answer specifically | Detailed methodology |

**Economic Reality Check:**

Underwriting infrastructure is expensive. If a PFaaS charges:

| Platform Fee | Likely Model | Why |
|--------------|--------------|-----|
| < 0.15% | Model A | Can't fund underwriting on this margin |
| 0.15-0.30% | Model B | Hybrid approach, some infrastructure |
| 0.30-0.50% | Model C | Full underwriting, significant investment |
| > 0.50% | Model C or overpriced A | Either premium or markup on referral |

**What This Means for Platform Economics:**

```
EXAMPLE: $100M Annual Volume

MODEL A (Outsourced Underwriting):
┌─────────────────────────────────────────────────────────────┐
│ Pricing: Interchange + 0.80%                                │
│ Platform payment to PFaaS: $800K                            │
│ Platform's net margin: ~0.30% = $300K                       │
│                                                              │
│ BUT: Limited MCC support, processor's risk appetite         │
│ AND: If processor tightens underwriting, your approvals drop│
│ AND: You have no control over merchant experience           │
└─────────────────────────────────────────────────────────────┘

MODEL B (Hybrid Underwriting - e.g., Stripe Connect):
┌─────────────────────────────────────────────────────────────┐
│ Pricing: Interchange + 0.25% (Stripe) + your markup         │
│ Platform payment to Stripe: $250K                           │
│ Platform's net margin: ~0.50% = $500K                       │
│                                                              │
│ AND: Stripe underwrites, bears liability                    │
│ AND: Better approval rates (sophisticated risk models)      │
│ AND: More consistent merchant experience                    │
└─────────────────────────────────────────────────────────────┘
```

> **Bottom Line:** "PFaaS" has become a marketing term applied to everything from sophisticated underwriting platforms to simple API wrappers over processor boarding. **Ask the right questions** to understand what you're actually getting.

### 3. Managed PayFac

```
MANAGED PAYFAC
═══════════════════════════════════════════════════════════════

Middle ground between Full PayFac and PFaaS:
┌─────────────────────────────────────────────────────────────┐
│ YOU register as the PayFac with card networks               │
│ YOU have sponsor bank relationship in your name             │
│                                                              │
│ But...                                                       │
│                                                              │
│ PROVIDER manages technology/operations for you:             │
│ • Uses their platform/infrastructure                        │
│ • Handles compliance monitoring                             │
│ • Provides dashboards/reporting                             │
│ • Manages risk/underwriting systems                         │
│                                                              │
│ Example: Partnership with processor (Worldpay, Fiserv)      │
│ • They provide "PayFac-in-a-box" platform                   │
│ • You bring merchants and capital                           │
│ • You control pricing and relationships                     │
└─────────────────────────────────────────────────────────────┘
```

**When It Makes Sense:**
- Want PayFac economics but not build burden
- Have capital and compliance resources
- Processing $200M - $1B/year
- Need more control than PFaaS offers

### 4. Wholesale PayFac

```
WHOLESALE PAYFAC (Multi-Level)
═══════════════════════════════════════════════════════════════

PayFac partners with reseller partners who bring sub-merchants:

┌─────────────────────────────────────────────────────────────┐
│                    PAYFAC (Level 1)                          │
│         (e.g., Stripe, PayPal, Finix)                        │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │ Reseller Agreement
                   │
     ┌─────────────┼─────────────┐
     │             │             │
┌────▼────┐   ┌────▼────┐   ┌────▼────┐
│Partner A│   │Partner B│   │Partner C│  (Your platforms)
│(ISO)    │   │(SaaS)   │   │(VAR)    │
└────┬────┘   └────┬────┘   └────┬────┘
     │             │             │
  ┌──┴──┐       ┌──┴──┐       ┌──┴──┐
  │ SM1 │       │ SM2 │       │ SM3 │  (Sub-merchants)
  │ SM2 │       │ SM3 │       │ SM4 │
  └─────┘       └─────┘       └─────┘

Revenue Split:
• Interchange: 1.80%
• PayFac keeps: 0.60%
• Partner keeps: 0.50%
• TOTAL charged to sub-merchant: 2.90%
```

**Example:** ISO partners with Stripe Connect
- ISO brings 100 merchants
- ISO handles sales/support
- Stripe handles all PayFac infrastructure
- Revenue split: 50/50 on net margin

---

## Business Economics of PayFac

Now let's break down the ACTUAL unit economics.

### Revenue Streams

```
PAYFAC REVENUE MODEL
═══════════════════════════════════════════════════════════════

1. Payment Processing Markup
┌─────────────────────────────────────────────────────────────┐
│ Blended pricing to sub-merchants: 2.9% + $0.30             │
│                                                              │
│ Cost of goods sold:                                         │
│ • Interchange: 1.80%                                        │
│ • Network assessments: 0.13%                                │
│ • Processor fee: 0.10%                                      │
│ • Total COGS: 2.03% + $0.05                                 │
│                                                              │
│ Gross margin: 0.87% + $0.25 per transaction                 │
│ Gross margin %: ~30%                                        │
└─────────────────────────────────────────────────────────────┘

2. Value-Added Services (Optional)
┌─────────────────────────────────────────────────────────────┐
│ • Instant payouts (premium): 1.5% fee                       │
│ • Currency conversion: 2% markup                            │
│ • Chargeback insurance: $10/month per sub-merchant          │
│ • Premium support: $50/month                                │
│ • Analytics/reporting: $25/month                            │
│ • Hardware (terminals): $100-500 margin per device          │
└─────────────────────────────────────────────────────────────┘

3. Platform/Subscription Fees
┌─────────────────────────────────────────────────────────────┐
│ Monthly platform fee: $0-$50/sub-merchant                   │
│ (Often waived if processing volume is sufficient)           │
└─────────────────────────────────────────────────────────────┘
```

### Cost Structure

```
PAYFAC COST BREAKDOWN
═══════════════════════════════════════════════════════════════

Variable Costs (per transaction):
┌─────────────────────────────────────────────────────────────┐
│ • Interchange: 1.80% (card network to issuer)               │
│ • Network assessments: 0.13% (Visa/MC fees)                 │
│ • Processor fee: 0.10% + $0.05 (front-end processing)       │
│ • Gateway fee: 0.05% (if using separate gateway)            │
│ SUBTOTAL: 2.08% + $0.05 per transaction                     │
└─────────────────────────────────────────────────────────────┘

Fixed Costs (monthly/annual):
┌─────────────────────────────────────────────────────────────┐
│ Technology & Infrastructure:                                │
│ • Cloud hosting (AWS/GCP): $10K-50K/month                   │
│ • Payment platform licensing: $5K-20K/month                 │
│ • API/developer tools: $2K-10K/month                        │
│                                                              │
│ Compliance & Regulatory:                                    │
│ • PCI Level 1 audit: $50K-100K/year                         │
│ • Sponsor bank fees: $50K-150K/year                         │
│ • Card network fees: $25K-50K/year registration             │
│ • AML/KYC tools (Jumio, Onfido): $5K-20K/month              │
│ • Legal/regulatory counsel: $50K-200K/year                  │
│                                                              │
│ Risk & Operations:                                          │
│ • Fraud detection tools: $10K-30K/month                     │
│ • Chargeback management: $5K-15K/month                      │
│ • Risk analyst team: $500K+/year                            │
│ • Customer support: $300K+/year                             │
│                                                              │
│ TOTAL FIXED COSTS: $150K-$300K/month                        │
│                    $1.8M-$3.6M/year                         │
└─────────────────────────────────────────────────────────────┘

Loss Provisions (risk reserves):
┌─────────────────────────────────────────────────────────────┐
│ • Chargeback losses: 0.05% of volume (5 bps)                │
│ • Fraud losses: 0.03% of volume (3 bps)                     │
│ • ACH return failures: 0.02% (2 bps)                        │
│ TOTAL LOSS PROVISION: 0.10% (10 bps)                        │
└─────────────────────────────────────────────────────────────┘
```

### Unit Economics Example

**Scenario:** Mid-sized PayFac platform

```
UNIT ECONOMICS MODEL
═══════════════════════════════════════════════════════════════

Portfolio Size: 5,000 active sub-merchants
Average Monthly Volume per Sub-Merchant: $10,000
Total Monthly Volume: $50M
Total Annual Volume: $600M

Revenue Calculation:
┌─────────────────────────────────────────────────────────────┐
│ Gross volume: $50,000,000/month                             │
│                                                              │
│ Payment processing revenue:                                 │
│ • Charge to subs: 2.9% + $0.30                              │
│ • Assume 50 avg transactions per sub-merchant               │
│ • Total txns: 250,000/month                                 │
│                                                              │
│ Revenue:                                                     │
│ • Rate component: $50M × 2.9% = $1,450,000                  │
│ • Txn fee component: 250K × $0.30 = $75,000                 │
│ • TOTAL REVENUE: $1,525,000/month                           │
└─────────────────────────────────────────────────────────────┘

Cost of Goods Sold:
┌─────────────────────────────────────────────────────────────┐
│ Variable costs:                                             │
│ • Interchange: $50M × 1.80% = $900,000                      │
│ • Assessments: $50M × 0.13% = $65,000                       │
│ • Processor: $50M × 0.10% + 250K × $0.05 = $62,500          │
│ • TOTAL COGS: $1,027,500                                    │
│                                                              │
│ Gross Profit: $1,525,000 - $1,027,500 = $497,500            │
│ Gross Margin: 32.6%                                         │
└─────────────────────────────────────────────────────────────┘

Operating Expenses:
┌─────────────────────────────────────────────────────────────┐
│ Fixed costs: $200,000/month                                 │
│ • Technology: $40K                                          │
│ • Compliance: $50K                                          │
│ • Risk/operations: $60K                                     │
│ • Personnel (30 FTE @ avg $120K): $300K/month               │
│ • TOTAL OPEX: $450K/month (scaled up)                       │
└─────────────────────────────────────────────────────────────┘

Loss Provisions:
┌─────────────────────────────────────────────────────────────┐
│ Risk losses: $50M × 0.10% = $50,000/month                   │
└─────────────────────────────────────────────────────────────┘

Net Profit:
┌─────────────────────────────────────────────────────────────┐
│ Gross profit: $497,500                                      │
│ Operating expenses: -$450,000                               │
│ Loss provisions: -$50,000                                   │
│                                                              │
│ NET LOSS: -$2,500/month                                     │
│                                                              │
│ Uh oh... This doesn't work at $50M/month!                   │
└─────────────────────────────────────────────────────────────┘
```

**The Profitability Question:** When does PayFac become profitable?

### Break-Even Analysis

```
BREAK-EVEN CALCULATION
═══════════════════════════════════════════════════════════════

Fixed Costs: $450,000/month
Gross Margin: 32.6% of revenue (after variable costs)
Loss Provision: 10 bps of volume

Simplified calculation:
┌─────────────────────────────────────────────────────────────┐
│ Let X = monthly volume needed                               │
│                                                              │
│ Revenue = X × 2.9%                                          │
│ COGS = X × 2.08%                                            │
│ Gross Profit = X × 0.82%                                    │
│ Loss Provision = X × 0.10%                                  │
│ Net Contribution = X × 0.72%                                │
│                                                              │
│ Break-even when: X × 0.72% = $450,000                       │
│                                                              │
│ X = $450,000 / 0.0072 = $62,500,000/month                   │
│                                                              │
│ BREAK-EVEN: $62.5M/month = $750M/year                       │
└─────────────────────────────────────────────────────────────┘

What this means:
┌─────────────────────────────────────────────────────────────┐
│ At $750M annual volume:                                     │
│ • Monthly net profit: $0                                    │
│ • Need ~6,250 sub-merchants @ $10K/month each               │
│                                                              │
│ At $1.5B annual volume (2x break-even):                     │
│ • Monthly volume: $125M                                     │
│ • Gross profit: $1.025M/month                               │
│ • Operating expenses: $450K/month                           │
│ • Loss provision: $125K/month                               │
│ • NET PROFIT: $450K/month = $5.4M/year                      │
│ • Profit margin: 3.6% of revenue                            │
└─────────────────────────────────────────────────────────────┘
```

**Key Insight:** PayFac is a **SCALE BUSINESS**. You must reach significant volume to profitability. This is why:

1. **Most PayFacs fail before reaching scale** - ran out of capital
2. **PFaaS makes sense for <$500M/year** - leverage someone else's fixed costs
3. **Full PayFac only for $1B+ opportunity** - need volume to justify investment

### Improved Economics Through Value-Added Services

Smart PayFacs don't rely only on payment processing margin:

```
REVENUE DIVERSIFICATION
═══════════════════════════════════════════════════════════════

Same $50M/month portfolio, but now with value-adds:

Payment Processing Revenue: $497,500 gross profit
┌─────────────────────────────────────────────────────────────┐
│ (same as before)                                            │
└─────────────────────────────────────────────────────────────┘

Value-Added Services (20% attach rate):
┌─────────────────────────────────────────────────────────────┐
│ 1,000 sub-merchants (20%) use instant payouts               │
│ • Avg instant payout: $5K/month                             │
│ • Fee: 1.5%                                                 │
│ • Revenue: 1,000 × $5K × 1.5% = $75,000/month               │
│ • Margin: 90% (low cost to provide)                         │
│ • Profit: $67,500/month                                     │
│                                                              │
│ 500 sub-merchants use premium analytics                     │
│ • Fee: $50/month                                            │
│ • Revenue: $25,000/month                                    │
│ • Margin: 80%                                               │
│ • Profit: $20,000/month                                     │
│                                                              │
│ TOTAL VALUE-ADD PROFIT: $87,500/month                       │
└─────────────────────────────────────────────────────────────┘

Revised P&L:
┌─────────────────────────────────────────────────────────────┐
│ Payment processing gross profit: $497,500                   │
│ Value-added services profit: $87,500                        │
│ TOTAL GROSS PROFIT: $585,000                                │
│                                                              │
│ Operating expenses: -$450,000                               │
│ Loss provisions: -$50,000                                   │
│                                                              │
│ NET PROFIT: $85,000/month = $1.02M/year                     │
│                                                              │
│ Now profitable at $50M/month! ($600M/year)                  │
└─────────────────────────────────────────────────────────────┘
```

**This is how successful PayFacs achieve profitability faster:**
- Stripe: Instant payouts, Radar (fraud), Atlas (incorporation)
- Square: Square Capital (lending), Square Marketing
- Shopify Payments: Fulfillment, inventory, POS hardware

---

## When to Become PayFac vs Use PFaaS

This is THE critical decision for any platform considering embedded payments.

### Decision Framework

```
PAYFAC VS PFAAS DECISION TREE
═══════════════════════════════════════════════════════════════

START: Do you need embedded payment capabilities?
│
├─ NO → Don't build payments, focus on core product
│
└─ YES → Continue...
    │
    ├─ What's your projected 3-year payment volume?
    │
    ├─── <$100M/year
    │    └─→ USE PFAAS (Stripe Connect, etc)
    │        Reason: Can't cover fixed costs
    │
    ├─── $100M-$500M/year
    │    └─→ START WITH PFAAS, evaluate full PayFac at $300M
    │        Reason: Defer capital investment, prove model first
    │
    ├─── $500M-$1B/year
    │    └─→ CONSIDER MANAGED PAYFAC or build full
    │        Reason: Economics justify investment, but risky
    │
    └─── >$1B/year
         └─→ BUILD FULL PAYFAC (if strategic fit)
             Reason: Margin improvement worth investment

Additional Considerations:
┌─────────────────────────────────────────────────────────────┐
│ Choose FULL PAYFAC if:                                      │
│ ✓ Volume >$1B/year (proven or highly confident)             │
│ ✓ Have $2M+ capital for reserves + build                    │
│ ✓ Can hire compliance/risk team (8-12 FTE minimum)          │
│ ✓ Payments are strategic (not just monetization)            │
│ ✓ Need full control over UX and pricing                     │
│ ✓ Willing to invest 18-24 months to profitability           │
│                                                              │
│ Choose PFAAS if:                                            │
│ ✓ Volume <$500M/year                                        │
│ ✓ Want fast time to market (weeks vs years)                 │
│ ✓ Limited compliance resources                              │
│ ✓ Payments are revenue add-on (not core strategy)           │
│ ✓ Prefer lower margin but zero fixed costs                  │
│ ✓ Need global reach (PFaaS has international)              │
└─────────────────────────────────────────────────────────────┘
```

### Volume Thresholds Analysis

```
VOLUME-BASED ECONOMICS
═══════════════════════════════════════════════════════════════

Annual Volume: $100M
┌─────────────────────────────────────────────────────────────┐
│ PFaaS Approach:                                             │
│ • Revenue share: 60% to you                                 │
│ • Net margin to you: 50 bps (0.50%)                         │
│ • Annual profit: $100M × 0.50% = $500K                      │
│ • Fixed costs: $0                                           │
│ • NET: $500K/year profit                                    │
│                                                              │
│ Full PayFac Approach:                                       │
│ • Gross margin: 72 bps (0.72%)                              │
│ • Gross profit: $100M × 0.72% = $720K                       │
│ • Fixed costs: $2M/year                                     │
│ • NET: -$1.28M/year LOSS                                    │
│                                                              │
│ VERDICT: PFaaS wins at $100M volume                         │
└─────────────────────────────────────────────────────────────┘

Annual Volume: $500M
┌─────────────────────────────────────────────────────────────┐
│ PFaaS Approach:                                             │
│ • Net margin: 50 bps                                        │
│ • Annual profit: $500M × 0.50% = $2.5M                      │
│                                                              │
│ Full PayFac Approach:                                       │
│ • Gross margin: 72 bps                                      │
│ • Gross profit: $500M × 0.72% = $3.6M                       │
│ • Fixed costs: $2M/year                                     │
│ • NET: $1.6M/year profit                                    │
│                                                              │
│ DELTA: Full PayFac makes $900K more, but...                 │
│ • Required $2M+ upfront investment                          │
│ • 18-24 months to build                                     │
│ • Ongoing compliance burden                                 │
│                                                              │
│ VERDICT: PFaaS still safer choice                           │
└─────────────────────────────────────────────────────────────┘

Annual Volume: $1.5B
┌─────────────────────────────────────────────────────────────┐
│ PFaaS Approach:                                             │
│ • Net margin: 50 bps (might negotiate to 60 bps at scale)   │
│ • Annual profit: $1.5B × 0.50% = $7.5M                      │
│                                                              │
│ Full PayFac Approach:                                       │
│ • Gross margin: 72 bps                                      │
│ • Gross profit: $1.5B × 0.72% = $10.8M                      │
│ • Fixed costs: $2.5M/year (scaled up slightly)              │
│ • NET: $8.3M/year profit                                    │
│                                                              │
│ DELTA: Full PayFac makes $800K more                         │
│ • Break-even achieved                                       │
│ • Margin gap widens further at higher volumes               │
│                                                              │
│ VERDICT: Full PayFac starts making sense                    │
└─────────────────────────────────────────────────────────────┘

Annual Volume: $3B+
┌─────────────────────────────────────────────────────────────┐
│ PFaaS Approach:                                             │
│ • Net margin: 60 bps (negotiated)                           │
│ • Annual profit: $3B × 0.60% = $18M                         │
│                                                              │
│ Full PayFac Approach:                                       │
│ • Gross margin: 72 bps                                      │
│ • Gross profit: $3B × 0.72% = $21.6M                        │
│ • Fixed costs: $3M/year                                     │
│ • NET: $18.6M/year profit                                   │
│                                                              │
│ PLUS: Can negotiate better interchange rates at volume      │
│ • Improved gross margin: 80 bps possible                    │
│ • Revised profit: $24M - $3M = $21M                         │
│                                                              │
│ DELTA: Full PayFac makes $3M more                           │
│                                                              │
│ VERDICT: Full PayFac clearly better                         │
└─────────────────────────────────────────────────────────────┘
```

### Technical and Operational Readiness

Beyond volume, assess your team's capabilities:

```
READINESS ASSESSMENT CHECKLIST
═══════════════════════════════════════════════════════════════

Technical Capabilities:
┌─────────────────────────────────────────────────────────────┐
│ □ Engineering team of 10+ developers                        │
│ □ Experience with financial systems / ledgers               │
│ □ DevOps expertise for high-availability systems            │
│ □ Security-first mindset and practices                      │
│ □ API design experience                                     │
│ □ Database expertise (ACID transactions, event sourcing)    │
└─────────────────────────────────────────────────────────────┘

Compliance & Risk:
┌─────────────────────────────────────────────────────────────┐
│ □ Can hire Chief Compliance Officer                         │
│ □ Budget for legal counsel ($200K+/year)                    │
│ □ Can build risk/fraud team (5+ analysts)                   │
│ □ Experience with KYC/AML processes                         │
│ □ Understand PCI DSS requirements                           │
└─────────────────────────────────────────────────────────────┘

Capital & Business:
┌─────────────────────────────────────────────────────────────┐
│ □ Access to $2M+ for reserves and build                     │
│ □ Can sustain 18-24 month payback period                    │
│ □ Board/investors support payments strategy                 │
│ □ Payments are core to business model (not bolt-on)         │
└─────────────────────────────────────────────────────────────┘

Operational:
┌─────────────────────────────────────────────────────────────┐
│ □ Can staff 24/7 support for payment issues                 │
│ □ Have customer success team                                │
│ □ Can handle chargeback disputes (staff + process)          │
│ □ Willing to manage sponsor bank relationship               │
└─────────────────────────────────────────────────────────────┘

IF YOU CHECKED <50%: Use PFaaS
IF YOU CHECKED 50-75%: Consider Managed PayFac
IF YOU CHECKED >75%: Can consider Full PayFac (if volume justifies)
```

### Risk Appetite Considerations

```
RISK PROFILE ANALYSIS
═══════════════════════════════════════════════════════════════

Low Risk Appetite:
┌─────────────────────────────────────────────────────────────┐
│ Use PFaaS if:                                               │
│ • Don't want regulatory risk                                │
│ • Can't afford compliance mistakes (fines, shutdowns)       │
│ • Need payments revenue but not core competency             │
│ • Prefer predictable costs vs. margin optimization          │
│                                                              │
│ Example: Vertical SaaS company, $200M volume potential      │
│ → Use Stripe Connect, focus on software innovation          │
└─────────────────────────────────────────────────────────────┘

Medium Risk Appetite:
┌─────────────────────────────────────────────────────────────┐
│ Consider Managed PayFac if:                                 │
│ • Want better economics than PFaaS                          │
│ • Can hire compliance resources                             │
│ • Processing $500M-$1B/year                                 │
│ • Want control but not infrastructure burden                │
│                                                              │
│ Example: E-commerce platform, $750M volume                  │
│ → Partner with processor for "PayFac-in-a-box"              │
└─────────────────────────────────────────────────────────────┘

High Risk Appetite:
┌─────────────────────────────────────────────────────────────┐
│ Build Full PayFac if:                                       │
│ • Payments ARE the business (not just revenue stream)       │
│ • Have fintech/banking expertise on team                    │
│ • Processing $1B+/year (or confident path to it)            │
│ • Want maximum control and differentiation                  │
│                                                              │
│ Example: Gig economy platform, $3B+ volume                  │
│ → Build full stack to control experience and margin         │
└─────────────────────────────────────────────────────────────┘
```

### The "Start PFaaS, Graduate to Full PayFac" Path

Many successful PayFacs started with PFaaS:

```
GRADUATED PAYFAC JOURNEY
═══════════════════════════════════════════════════════════════

Year 1: Launch with PFaaS (Stripe Connect)
┌─────────────────────────────────────────────────────────────┐
│ • Integrate in 4 weeks                                      │
│ • Onboard first 500 sub-merchants                           │
│ • Process $50M in year 1                                    │
│ • Payment revenue: $250K (50 bps margin)                    │
│ • Learn: underwriting, risk, chargeback management          │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
Year 2-3: Scale on PFaaS
┌─────────────────────────────────────────────────────────────┐
│ • Grow to 3,000 sub-merchants                               │
│ • Process $300M/year by end of year 3                       │
│ • Payment revenue: $1.5M/year                               │
│ • Validate: PMF, retention, payment attach rate             │
│ • Meanwhile: Hire compliance team, build risk expertise     │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
Year 4: Evaluate Full PayFac Build
┌─────────────────────────────────────────────────────────────┐
│ Decision Factors:                                           │
│ • Confident path to $1B+ volume (3x current)                │
│ • Compliance team in place                                  │
│ • Board approves $2M+ investment                            │
│ • Engineering capacity for 18-month build                   │
│                                                              │
│ If YES → Start PayFac registration process                  │
│ If NO → Stay on PFaaS, re-evaluate at $500M                 │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
Year 5-6: Build & Migrate
┌─────────────────────────────────────────────────────────────┐
│ • Complete PayFac registration (6-12 months)                │
│ • Build platform (12-18 months)                             │
│ • Migrate sub-merchants gradually (6 months)                │
│ • By end of Year 6: Processing $800M on own platform        │
│                                                              │
│ Economics comparison:                                       │
│ • PFaaS: $800M × 50 bps = $4M profit                        │
│ • Full PayFac: $800M × 72 bps - $2M = $3.76M profit         │
│ • Still break-even, but margin improves as volume grows     │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
Year 7+: Full PayFac at Scale
┌─────────────────────────────────────────────────────────────┐
│ • Process $2B/year                                          │
│ • Full PayFac profit: $2B × 72 bps - $2.5M = $11.9M         │
│ • PFaaS profit would be: $2B × 50 bps = $10M                │
│ • ANNUAL ADVANTAGE: $1.9M/year                              │
│ • Cumulative payback of initial investment achieved         │
└─────────────────────────────────────────────────────────────┘
```

**Real-World Examples:**

| Company | Started | Graduated | Outcome |
|---------|---------|-----------|---------|
| **Shopify** | 2013: Stripe partnership | 2015: Shopify Payments (full PayFac) | $200B+ volume, payments > software revenue |
| **Lightspeed** | Used third-party processors | 2019: Acquired Vend, built PayFac | Payment revenue growing 50%+ YoY |
| **Toast** | 2016: Used processor partnership | 2019: Built full PayFac | Payments 75% of revenue |

---

## Summary: Key Takeaways

### The PayFac Model in One Paragraph

A Payment Facilitator is a registered entity with card networks that onboards sub-merchants under its own master merchant account (MID), enabling instant merchant onboarding while assuming 100% liability for sub-merchant transactions, chargebacks, and fraud. PayFacs bear the compliance burden (PCI Level 1, sponsor bank relationship, network registration) in exchange for controlling the payment experience and capturing payment processing margin.

### Critical Decision Points

1. **Liability Model**: PayFac bears ALL risk (vs acquirer in traditional model)
2. **Economics**: Need $750M-$1B annual volume for full PayFac profitability
3. **Build vs Buy**: PFaaS for <$500M/year, evaluate full PayFac at $500M-$1B+
4. **Risk Management**: Success requires sophisticated underwriting + monitoring
5. **Value-Add Services**: Payment margin alone is thin; need ancillary revenue

### When PayFac Makes Sense

You should consider becoming a PayFac if:
- You're a platform/marketplace with many small merchants
- You need instant merchant onboarding (speed is competitive advantage)
- You can realistically reach $1B+ annual volume
- You have/can build compliance and risk capabilities
- Payments are strategic to your business model
- You're willing to invest 18-24 months to profitability

### When PFaaS Makes Sense

Use PayFac-as-a-Service if:
- You're <$500M annual volume (or uncertain you'll reach $1B)
- You want payments revenue without compliance burden
- You need fast time to market (weeks, not years)
- You have limited compliance/risk resources
- You're okay with lower margin for zero fixed costs
- Payments are a revenue add-on (not core differentiation)

### The Future of PayFac

As of 2025, the PayFac model is the dominant way platforms embed payments:
- **1,500+ active PayFacs** in US alone
- **Embedded finance** trend accelerating
- **PFaaS providers** making PayFac accessible to smaller platforms
- **Regulation evolving** with increased scrutiny on risk management
- **Competition intensifying** - margin compression over time

The most successful strategy: **Start with PFaaS, graduate to full PayFac if/when volume justifies it.**

---

## Related Topics to Explore Next

After understanding the PayFac model, continue your learning journey with:

1. **Sponsor Bank Relationships** (Week 11-12)
   - How PayFacs partner with sponsor banks
   - Bank obligations and oversight
   - Finding the right sponsor bank partner

2. **Card Network Registration** (Week 11-12)
   - Visa/Mastercard registration process
   - Ongoing compliance obligations
   - Network monitoring programs

3. **Money Transmitter Licensing** (Week 11-12)
   - State-by-state licensing requirements
   - When PayFacs need MTL vs when exempt
   - Compliance with state regulations

4. **Merchant Underwriting** (Week 3-4)
   - KYC/KYB requirements for sub-merchants
   - Risk-based underwriting approaches
   - Ultimate Beneficial Ownership (UBO)

5. **Platform Architecture** (Week 9-10)
   - Multi-tenant entity modeling
   - Split payout systems
   - Ledger design for PayFac platforms

---

## Self-Assessment Questions & Answers

The following questions (from the [Week 1-2 Questions](../questions.md)) test understanding of the PayFac model.

### Q13: Why can PayFacs onboard merchants faster than traditional acquirers?

**Answer:**

PayFacs can onboard merchants in minutes vs. weeks for traditional acquirers for several interconnected reasons:

1. **Master Merchant Model**: PayFacs don't create individual MIDs for each merchant. All sub-merchants operate under the PayFac's single master MID. This eliminates:
   - Individual network registration per merchant
   - Per-merchant underwriting by acquiring bank
   - Separate terminal/gateway provisioning

2. **Risk Transfer**: PayFacs assume 100% liability for sub-merchant transactions. Traditional acquirers underwrite thoroughly because THEY bear the risk. PayFacs underwrite lightly upfront because:
   - They can monitor transactions in real-time after approval
   - They control payouts and can hold funds if fraud is detected
   - They build loss provisions into their pricing

3. **Tiered Underwriting**: PayFacs use risk-based tiered approaches:
   - **Tier 1 (Instant)**: Minimal checks, low limits (e.g., $5K/month for 90 days)
   - **Tier 2 (Hours)**: Enhanced verification for medium-volume merchants
   - **Tier 3 (Days)**: Full underwriting only for high-risk/high-volume

4. **Technology Stack**: PayFacs invest in automated verification:
   - Instant OFAC/sanctions screening
   - Bank account verification (Plaid, micro-deposits)
   - TIN/EIN verification APIs
   - Fraud database checks (MATCH list)

**Example**: Square lets you buy a reader at a retail store and start accepting payments within 30 minutes. A traditional merchant account takes 2-4 weeks because the acquiring bank performs extensive credit checks and manually reviews the application.

---

### Q14: If a sub-merchant commits fraud and disappears, who is financially liable for chargebacks?

**Answer:**

**The PayFac bears 100% financial liability.**

Here's the liability chain:

```
FRAUD SCENARIO: Sub-merchant disappears with $50,000 in chargebacks
═══════════════════════════════════════════════════════════════

Card Network → Issues chargebacks to PayFac's master MID
     │
     ▼
PayFac's Sponsor Bank → Debits PayFac's settlement account $50,000
     │
     ▼
PayFac → Attempts to recover from sub-merchant
     │
     ├── IF sub-merchant has funds: PayFac recovers (rare in fraud cases)
     │
     └── IF sub-merchant disappeared: PayFac absorbs the $50,000 loss
         │
         └── Loss covered by:
             1. Reserve fund (mandatory buffer)
             2. PayFac's operating capital
             3. Ultimately, PayFac's balance sheet
```

**Why this differs from other models:**

| Model | Who Bears Loss |
|-------|---------------|
| **Traditional** | Acquiring bank (they underwrote the merchant) |
| **ISO** | Acquiring bank (ISO is just sales agent) |
| **PayFac** | PayFac (master merchant = merchant of record) |

**This is THE fundamental tradeoff:** PayFacs get fast onboarding and pricing control by accepting liability. This is why:
- Reserve requirements exist (5-20% of volume held back)
- Fraud monitoring is critical (can hold payouts before losses occur)
- Pricing includes loss provisions (~10 bps typically)
- Some sub-merchants get declined despite "instant" model

---

### Q15: What does "master merchant" mean, and why is this structure both an advantage and a risk?

**Answer:**

**Definition:** A master merchant is a single merchant account (MID) registered with card networks under which multiple sub-merchants operate. The PayFac is the master merchant; the businesses it onboards are sub-merchants.

```
MASTER MERCHANT STRUCTURE
═══════════════════════════════════════════════════════════════

              ┌─────────────────────────────────┐
              │  PAYFAC MASTER MERCHANT         │
              │  MID: 9999999999999              │
              │  Registered with Visa/MC        │
              │  = MERCHANT OF RECORD           │
              └────────────┬────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐      ┌────▼────┐      ┌────▼────┐
    │Sub-MID  │      │Sub-MID  │      │Sub-MID  │
    │ A001    │      │ B002    │      │ C003    │
    │Coffee   │      │Yoga     │      │Florist  │
    │Shop     │      │Studio   │      │         │
    └─────────┘      └─────────┘      └─────────┘

Networks see: ONE merchant (the PayFac)
PayFac tracks: Many sub-merchants internally
```

**Advantages:**

| Advantage | Explanation |
|-----------|-------------|
| **Instant Onboarding** | No per-merchant network registration needed |
| **Pricing Control** | PayFac sets rates, not acquirer or ISO |
| **User Experience** | Seamless, branded payment experience |
| **Revenue Capture** | PayFac keeps spread vs. referral fees |
| **Data Ownership** | Full visibility into transaction patterns |

**Risks:**

| Risk | Explanation |
|------|-------------|
| **Aggregated Liability** | ONE bad sub-merchant affects PayFac's network standing |
| **Chargeback Aggregation** | High chargebacks from one sub-merchant count against PayFac's portfolio |
| **Network Monitoring** | If PayFac exceeds VDMP/ECP thresholds, ALL sub-merchants impacted |
| **Reputational** | Sub-merchant fraud reflects on PayFac brand |
| **Termination Risk** | Sponsor bank can terminate entire relationship for compliance issues |

**The Balance:** PayFacs must maintain strict risk controls because one rogue sub-merchant can jeopardize thousands of legitimate businesses on the platform.

---

### Q16: What are the main reasons a business would choose to become a PayFac versus using a PayFac-as-a-Service solution?

**Answer:**

**Decision Framework:**

| Factor | Choose Full PayFac | Choose PFaaS |
|--------|-------------------|--------------|
| **Annual Volume** | >$1B/year (or clear path to it) | <$500M/year |
| **Capital Available** | $2M+ for reserves and build | Limited capital |
| **Time to Market** | Can wait 18-24 months | Need payments now (weeks) |
| **Compliance Resources** | Have or can hire CCO, risk team | Limited compliance expertise |
| **Strategic Importance** | Payments are core differentiator | Payments are revenue add-on |
| **Control Needed** | Full control over UX, pricing, data | Standard experience acceptable |

**Choose Full PayFac When:**

1. **Economics Justify Investment** - At $1B+ volume, the margin improvement (~20-30 bps) more than covers $2-3M annual fixed costs
2. **Strategic Necessity** - Payments define your product (like Square or Toast)
3. **Control is Critical** - You need custom underwriting rules, unique pricing, white-label everything
4. **Long-term Vision** - Willing to invest upfront for better unit economics at scale
5. **Risk Appetite** - Comfortable bearing fraud/chargeback liability

**Choose PFaaS When:**

1. **Speed Matters Most** - Need to launch payments in weeks, not years
2. **Volume is Moderate** - <$500M/year doesn't justify fixed costs
3. **Limited Resources** - Don't have compliance, risk, or engineering bandwidth
4. **Lower Risk Tolerance** - Prefer provider to handle fraud/compliance
5. **Global Needs** - PFaaS providers have international coverage you'd need years to build

**The Graduate Path:** Many successful PayFacs started with PFaaS:
- **Shopify**: Started with Stripe partnership (2013), launched Shopify Payments (full PayFac) in 2015
- **Toast**: Used processor partnerships initially, built full PayFac by 2019

**Economic Reality:**

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
```

**Bottom Line:** Use PFaaS until volume clearly justifies full PayFac investment, typically at $500M-$1B annual processing volume.

---

## Sources and References

### Card Network Official Documentation

- [Visa Payment Facilitator Model Guide](https://usa.visa.com/dam/VCOM/global/support-legal/documents/visa-payment-facilitator-model.pdf) - Official Visa PayFac program documentation
- [Visa Rules Public](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf) - Visa operating regulations (updated quarterly)
- [Mastercard Rules](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/mastercard-rules.pdf) - Mastercard program rules

### Market Research and Industry Data

- [Payment Facilitation Market Research Report 2033 - DataIntelo](https://dataintelo.com/report/payment-facilitation-market/) - Market size and growth projections
- [$4 Trillion in Payment-Facilitator Global Processing Volume - Digital Transactions](https://www.digitaltransactions.net/4-trillion-in-payment-facilitator-global-processing-volume-forecasted-by-2025/)
- [Deep Dive: Stripe vs. Adyen - Fintech Wrapup](https://www.fintechwrapup.com/p/deep-dive-stripe-vs-adyen-comparing)
- [Stripe Statistics (2025) - ElectroniQ](https://electroiq.com/stats/stripe-statistics/)
- [PayPal Statistics - Chargeflow](https://www.chargeflow.io/blog/paypal-statistics-facts)

### PayFac-as-a-Service Resources

- [The Future of Payment Facilitation: Rise of PFaaS - Mastercard Newsroom](https://www.mastercard.com/news/insights/2025/the-future-of-payment-facilitation-the-rise-of-payfac-as-a-service/)
- [Best Embedded Payments & PFaaS Companies - Swipesum](https://www.swipesum.com/insights/best-embedded-payments-payfac-as-a-service-companies)
- [Payfacs: A Guide to Payment Facilitation - Stripe](https://stripe.com/guides/payfacs)

### Regulatory and Compliance

- [Visa & Mastercard 2025 Rule Changes - Payment Nerds](https://paymentnerds.com/blog/visa-mastercard-2025-rule-changes-what-high-risk-merchants-must-know/)
- [Visa PayFacs Certification Program](https://km.visamiddleeast.com/en_KM/supporting-info/visa-certification-payfacs.html)
- [PCI Security Standards Council](https://www.pcisecuritystandards.org/) - PCI DSS requirements
- [Federal Reserve Payment Systems](https://www.federalreserve.gov/paymentsystems.htm)

### Industry Publications (Recommended for Updates)

- [Payments Dive](https://www.paymentsdive.com/) - Daily payments industry news
- [PYMNTS.com](https://www.pymnts.com/) - Real-time payments coverage
- [Digital Transactions](https://www.digitaltransactions.net/) - Transaction processing news
- [The Fintech Times](https://thefintechtimes.com/) - Fintech industry coverage

### Company Investor Relations (Public Data)

- [Adyen Investor Relations](https://www.adyen.com/investor-relations) - Quarterly earnings, transaction volumes
- [PayPal Investor Relations](https://investor.paypal-corp.com/) - Financial reports
- [Block Investor Relations](https://investors.block.xyz/) - Square/Block financials
- [Stripe Valuation - Sacra](https://sacra.com/c/stripe/valuation/) - Private company valuation tracking

---

**Next Module:** Week 3-4 - Merchant Onboarding & Underwriting
