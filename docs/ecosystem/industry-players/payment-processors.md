---
title: Payment Processors
description: The technical backbone of card payments - infrastructure that routes transactions between merchants, card networks, and banks
sidebar_position: 1
sidebar_label: Payment Processors
keywords:
  - payment processors
  - front-end processing
  - back-end processing
  - authorization routing
  - settlement clearing
  - Fiserv
  - First Data
  - Global Payments
  - Worldpay
  - Stripe
  - Adyen
  - processor selection
  - network certification
---

# Payment Processors

>
> **Last Updated:** 2025-12-18
>
> **Status:** Complete
>
> **Changes Log:**
> - 2025-12: Initial comprehensive notes with PayFac context and payment-critic review

Payment processors are the technical backbone of the card payment ecosystem. They provide the infrastructure that routes transactions between merchants, [card networks](/ecosystem/fundamentals/card-network-role), and banks. Understanding processors is essential for anyone building a PayFac platform.

---

## Overview

A **payment processor** is a company that provides the technical infrastructure and services to move transaction data between merchants, card networks, and banks. Think of processors as the "plumbing" of the payment ecosystem.

| Function | Description |
|----------|-------------|
| **Technical Infrastructure** | Network connectivity, transaction routing, PCI-compliant data handling |
| **Business Services** | Underwriting, fraud detection, chargeback management, reporting |
| **Financial Services** | Settlement coordination, reserve management, currency conversion |

**Key Distinction:** Most third-party processors are NOT banks and don't hold banking licenses to move money independently. They must partner with [acquiring banks](./acquiring-banks/overview) (sponsor banks for PayFacs) that hold regulatory licenses and settlement accounts. However, some major processors are **bank-owned entities** (Chase Paymentech, Elavon, Wells Fargo Merchant Services) with direct access to banking infrastructure.

---

## What a Payment Processor Does

```
+-----------------------------------------------------------------------------+
|                     WHAT A PAYMENT PROCESSOR DOES                           |
+-----------------------------------------------------------------------------+
|                                                                             |
|  TECHNICAL INFRASTRUCTURE:                                                  |
|  * Connects merchants to card networks (Visa, Mastercard, etc.)             |
|  * Routes authorization requests in milliseconds                            |
|  * Batches and submits transactions for settlement                          |
|  * Maintains PCI-compliant data security                                    |
|  * Provides APIs, SDKs, and terminals                                       |
|                                                                             |
|  BUSINESS SERVICES:                                                         |
|  * Merchant underwriting and onboarding                                     |
|  * Fraud detection and prevention                                           |
|  * Chargeback management                                                    |
|  * Reporting and reconciliation                                             |
|  * Customer support                                                         |
|                                                                             |
|  FINANCIAL SERVICES:                                                        |
|  * Settlement and funding coordination                                      |
|  * Reserve management                                                       |
|  * Currency conversion (for multi-currency)                                 |
|                                                                             |
+-----------------------------------------------------------------------------+
```

---

## Historical Evolution

The payment processing industry has evolved through distinct eras:

### 1950s-1970s: Manual Processing

- Merchants used manual imprinters ("knuckle busters")
- Made carbon copies of embossed cards
- Called issuers for voice authorization
- Mailed paper receipts to acquiring banks
- Settlement took **weeks**
- High error rates and fraud

### 1970s-1990s: Electronic Authorization Era

Key innovations:
- **1973:** Visa develops VisaNet - first electronic authorization network
- **1975:** Magnetic stripe cards standardized (ISO 7813)
- **1979:** Electronic terminals replace manual imprinters
- **1980s:** Point-of-sale (POS) networks proliferate
- **1987:** ISO 8583 standard for transaction messages

Impact:
- Authorization: Weeks -> **Seconds**
- Settlement: Weeks -> **Days** (T+1 to T+3, modern processors offer T+0 or T+1 standard)
- Major players emerge: National Data Corporation (NDC), First Data Corporation (1971)

### 1990s-2000s: Internet Era & Consolidation

E-commerce revolution:
- **1994:** First secure online transaction (Cybersource)
- **1998:** PayPal founded (payment aggregator model)
- **Late 1990s:** [Payment gateways](./payment-gateways/overview) emerge (Authorize.Net, CyberSource)
- Card-not-present (CNP) processing becomes significant

Industry consolidation:
- Banks acquire processors for "end-to-end" control
- Processors acquire competitors for scale
- **2002:** Chase acquires Paymentech
- **2008:** Worldpay spun out from RBS

### 2010s-Present: Fintech Disruption

New players emerge:
- **2006:** Adyen founded - unified commerce
- **2009:** Square founded - mobile payments for SMBs
- **2010:** Stripe founded - developer-first payments

Mega-mergers (2019):
- Fiserv acquires First Data for $22B
- FIS acquires Worldpay for $43B
- Global Payments acquires TSYS for $21.5B

2024-2025 reshuffling:
- **2024:** FIS sells 55% Worldpay stake to GTCR for $18.5B (implying ~$34B total valuation, down from $43B paid in 2019)
- **April 2025 (announced, expected close Q4 2025/Q1 2026):** Global Payments acquiring Worldpay for $22.7B
- **April 2025 (announced, expected close 2025-2026):** Global Payments selling TSYS/Issuer Solutions to FIS for $13.5B

---

## Front-End vs Back-End Processing

Payment processing involves two distinct functions, often performed by different companies:

### Front-End Processing (Authorization)

```
+-----------------------------------------------------------------------------+
|                      FRONT-END PROCESSING                                   |
+-----------------------------------------------------------------------------+
|                                                                             |
|  FUNCTION: Real-time authorization routing and response                     |
|                                                                             |
|  RESPONSIBILITIES:                                                          |
|  1. Transaction Acceptance                                                  |
|     - POS terminals, payment gateways, APIs                                 |
|     - Accept card swipe/dip/tap/keyed data                                  |
|     - Validate data format                                                  |
|                                                                             |
|  2. Routing to Card Networks                                                |
|     - Identify card type from BIN                                           |
|     - Route to appropriate network (Visa/MC/Amex/Discover)                  |
|     - Format message in ISO 8583 standard                                   |
|                                                                             |
|  3. Fraud Screening                                                         |
|     - Real-time fraud checks (velocity, geolocation, BIN)                   |
|     - AVS/CVV verification                                                  |
|     - Machine learning models for risk scoring                              |
|                                                                             |
|  4. Response Handling                                                       |
|     - Receive approve/decline from issuer                                   |
|     - Return response to merchant                                           |
|     - Store authorization data for later settlement                         |
|                                                                             |
|  TIMING: Milliseconds to seconds                                            |
|                                                                             |
+-----------------------------------------------------------------------------+
```

**Examples of Front-End Processors:** Stripe, Adyen, Authorize.Net, Braintree

### Back-End Processing (Settlement & Clearing)

```
+-----------------------------------------------------------------------------+
|                      BACK-END PROCESSING                                    |
+-----------------------------------------------------------------------------+
|                                                                             |
|  FUNCTION: Batch settlement, clearing, and funding                          |
|                                                                             |
|  RESPONSIBILITIES:                                                          |
|  1. Batch Processing                                                        |
|     - Collect day's authorized/captured transactions                        |
|     - Sort by card network                                                  |
|     - Create settlement files                                               |
|                                                                             |
|  2. Interchange Calculation                                                 |
|     - Determine exact interchange rate for each transaction                 |
|     - Based on: card type, MCC, entry mode, data quality                    |
|     - Calculate network assessment fees                                     |
|                                                                             |
|  3. Clearing Submission                                                     |
|     - Submit files to Visa, Mastercard, etc.                                |
|     - Receive clearing responses                                            |
|     - Match settled transactions to authorizations                          |
|                                                                             |
|  4. Settlement & Funding                                                    |
|     - Calculate net positions                                               |
|     - Coordinate with acquiring bank                                        |
|     - Fund merchants (T+1 to T+3)                                           |
|                                                                             |
|  TIMING: Daily batch cycles, overnight processing                           |
|                                                                             |
+-----------------------------------------------------------------------------+
```

**Examples of Back-End Processors:** First Data (Fiserv), TSYS (now part of Global Payments)

### Full-Stack vs Specialized Processors

| Type | Description | Examples |
|------|-------------|----------|
| **Full-Stack** | Handle both front-end AND back-end | First Data (Fiserv), Worldpay, Global Payments, Chase Paymentech, Adyen |
| **Front-End Only** | Focus on merchant experience, outsource settlement | Authorize.Net, Many ISOs |
| **Back-End Only** | Infrastructure for front-end processors | Rare in modern market; FIS focusing here |

### Technical Flow: Front-End to Back-End

```
+------------------------------------------------------------------------------+
|            TECHNICAL FLOW: FRONT-END -> BACK-END PROCESSING                  |
+------------------------------------------------------------------------------+

PHASE 1: AUTHORIZATION (Front-End Processor)
============================================

   Terminal/API          Front-End            Card               Issuer
                        Processor           Network
       |                    |                   |                   |
       |  POST /charge      |                   |                   |
       |------------------>|                   |                   |
       |                    | 1. Validate       |                   |
       |                    | 2. Tokenize       |                   |
       |                    | 3. Fraud check    |                   |
       |                    |                   |                   |
       |                    | ISO 8583 message  |                   |
       |                    |------------------>|------------------>|
       |                    |                   |                   |
       |                    |<------------------|<------------------|
       |<-------------------|   APPROVED        |                   |
       |  {auth_code: 1234} |                   |                   |
       |                    |                   |                   |
       |                    | Store auth data   |                   |
       |                    | in database for   |                   |
       |                    | later settlement  |                   |
       |                    |                   |                   |

PHASE 2: CAPTURE & SETTLEMENT (Hand-off to Back-End)
====================================================

 Front-End              Back-End             Card             Acquiring
 Processor             Processor            Network             Bank
     |                     |                   |                  |
     | End of day batch    |                   |                  |
     | (all captured txns) |                   |                  |
     |------------------->|                   |                  |
     |                     |                   |                  |
     |                     | 1. Calculate      |                  |
     |                     |    interchange    |                  |
     |                     | 2. Format         |                  |
     |                     |    settlement     |                  |
     |                     |    files          |                  |
     |                     |                   |                  |
     |                     | Submit to network |                  |
     |                     |------------------>|                  |
     |                     |                   |                  |
     |                     |                   | Clearing process |
     |                     |                   |                  |
     |                     | Funding           |                  |
     |                     | instructions      |                  |
     |                     |<------------------|                  |
     |                     |                   |                  |
     |                     | Request funds     |                  |
     |                     | from bank         |                  |
     |                     |---------------------------------------->|
     |                     |                   |                  |
     |<--------------------| Settlement report |                  |
     |  (for merchant)     |                   |                  |
     |                     |                   |                  |
```

---

## How Processors Connect to Card Networks

Processors must be **certified** by card networks to route transactions. This is a multi-year, multi-million dollar process.

### Direct Network Connections (Tier 1)

**What it means:**
- Processor has direct connection to Visa, Mastercard networks
- They are a "member" or "principal member" of the network
- Can submit both authorization and settlement messages

**Requirements:**
1. **Network Certification**
   - Pass extensive technical testing
   - Prove system reliability (99.9%+ uptime)
   - Demonstrate PCI DSS Level 1 compliance
   - Timeline: 12-24 months

2. **Financial Requirements**
   - Sponsor bank relationship (if not a bank itself)
   - Reserves/collateral (millions of dollars)
   - Financial audit requirements

3. **Ongoing Compliance**
   - Annual recertification
   - Security audits (quarterly)
   - Network rule updates (continuous)

**Who has direct connections:** First Data (Fiserv), Worldpay, Global Payments/TSYS, Chase Paymentech, Elavon, Adyen, Stripe

### Gateway Connections (Tier 2/3)

**What it means:**
- Processor routes through ANOTHER processor's network connection
- They are a "gateway" or "third-party processor"
- Don't directly touch card networks

```
   Merchant
      |
      v
+------------------+
|  Payment Gateway |  <-- Encrypts data
+------------------+
      |
      v
+------------------+
| Payment Processor|  <-- Routes to issuer
+------------------+
      |
      v
+------------------+
|   Issuing Bank   |  <-- Approves/declines
+------------------+
```

**Trade-offs:**

| Advantages | Disadvantages |
|------------|---------------|
| Lower infrastructure cost | Higher per-transaction fees |
| Faster time-to-market | Extra latency (additional hop) |
| No certification burden | Dependent on upstream processor |
| Focus on merchant UX | Limited control over routing |

### Network-Specific Requirements

| Network | Key Protocol | Certification | Special Programs |
|---------|--------------|---------------|------------------|
| **Visa** | VisaNet, ISO 8583 variant | Visa Global Acquirer Processing | Visa Token Service (VTS), Visa Direct |
| **Mastercard** | Banknet, ISO 8583 variant | Mastercard TPP or Member | MDES (tokenization), Mastercard Send |
| **American Express** | Proprietary (moving to ISO 8583) | OptBlue or Direct | Higher MDR (2.5-3.5%), three-party model |
| **Discover** | ISO 8583 | Discover Network Alliance | Discover Global Network partnerships |

---

## Major Payment Processors (2025 Landscape)

### Fiserv / First Data

**History:**
- 1971: First Data Corporation founded
- 1980s-2000s: Aggressive acquisition strategy, becomes #1 processor
- 2007: Taken private by KKR for $29B
- 2015: IPO, returns to public markets
- 2019: Fiserv acquires First Data for $22B

**Market Position (2025):**
- **Largest processor** by transaction volume (45% of US card transactions)
- Processes 6,000+ transactions per second
- Serves 6 million+ merchant locations

**Key Products:**
| Product | Description |
|---------|-------------|
| **Clover** | POS system for SMBs, competes with Square |
| **Carat** | Omnichannel commerce platform for enterprise |
| **North** | Traditional enterprise acquiring |
| **Star Network** | 4th largest US debit network |

**PayFac Relevance:** Many PayFacs use Fiserv/First Data. Offers PayFac-in-a-Box solutions and sponsor bank introductions.

### Global Payments / Worldpay (Post-2025 Deal)

**Corporate History:**
- **Global Payments:** Spun out from National Data Corp (2001), acquired TSYS (2019) for $21.5B
- **TSYS:** Founded 1959, leader in issuer processing, 40% of US card issuing market
- **Worldpay:** Founded 1989, spun out from RBS (2010), acquired by FIS (2019) for $43B

**2025 Mega-Deal:**
- Global Payments acquiring Worldpay from GTCR for $22.7B
- Global Payments selling TSYS/Issuer Solutions to FIS for $13.5B
- Becoming **pure-play merchant acquirer** with global scale

**Market Position (Post-2025):**
- 2nd largest merchant acquirer globally
- Processes $4 trillion+ annually
- Strong in: Integrated software, vertical SaaS, e-commerce

**PayFac Relevance:** Major provider for PayFac platforms. Worldpay has strong PayFac-as-a-Service offering.

### FIS (Post-Worldpay Exit)

**History:**
- 1968: Founded as Systematics
- 2019: Acquires Worldpay for $43B - **THE BIG BET**
- 2024: Sells 55% Worldpay stake to GTCR for $18.5B (implies ~$34B total valuation) - **ADMITTED FAILURE**
- 2025: Announced acquisition of TSYS/Issuer Solutions from GPN for $13.5B (pending close)

**The Worldpay Failure - What Happened:**
- Cultural clash between FIS (bank software) and Worldpay (payments)
- Worldpay lost market share to Stripe, Adyen, Shopify
- Technology modernization stalled
- FIS paid $43B in 2019, sold 55% stake at implied ~$34B total valuation in 2024 (~$9B+ loss)

**Post-2025 Strategy:** Refocusing on core strength: **ISSUER PROCESSING**
- #1 in issuer processing (manages 3 billion+ cards)
- #1 in bank core systems (7,000+ bank clients)
- Exiting merchant acquiring

**Key Lesson:** Just because you're big doesn't mean you can succeed in every payments vertical. Merchant acquiring requires different DNA than issuer processing.

### Bank-Owned Processors

#### Chase Paymentech (JPMorgan Chase)

- **Position:** 4th largest US processor
- **Strength:** Vertical integration (bank + processor + treasury services)
- **Focus:** Enterprise merchants, Chase banking clients
- **PayFac Use:** Can act as sponsor bank + processor (one-stop shop)

#### Elavon (US Bank subsidiary)

- **Position:** 5th largest US processor
- **Strength:** International reach (strong in Europe, Canada)
- **Focus:** Mid-market merchants
- **PayFac Use:** Offers PayFac solutions via US Bank sponsorship

**Why Banks Own Processors:**

| Advantages | Challenges |
|------------|------------|
| Vertical integration (deposits + acquiring) | Bank compliance culture slows innovation |
| No sponsor bank fees | Risk-averse (won't serve high-risk) |
| Regulatory licenses in place | Often lag in technology |

### Fintech Processors: Adyen & Stripe

#### Adyen

**Founded:** 2006 in Amsterdam

**Unique Model:**
- Built full-stack from scratch (no legacy systems)
- Single platform for all channels (online, in-store, mobile)
- Direct network certifications (250+ payment methods)
- Own payment terminals (hardware + software)

**Market Position:**
- Processes EUR 500B+ annually
- Enterprise focus (Uber, Spotify, Microsoft, eBay)

**Strengths:**
- True omnichannel (one platform, all channels)
- Transparent pricing (interchange++)
- High authorization rates (smart routing)
- Modern tech stack (built for cloud)

**PayFac Relevance:** Offers "Platforms" solution for PayFac model. Used by Uber, Shopify, DoorDash.

#### Stripe

**Founded:** 2010 by Collison brothers

**Unique Model:**
- Developer-first approach (7 lines of code to accept payments)
- PayFac model from day 1 (instant merchant onboarding)
- Initially used third-party processors, now direct connections
- Expanded to full financial services (Treasury, Issuing)

**Market Position:**
- Processes $1 trillion+ annually
- Millions of businesses (long tail + enterprise)
- Dominant in tech/SaaS/startups

**Strengths:**
- Easiest integration (best developer experience)
- Instant onboarding (Express, Connect for platforms)
- Global reach (46+ countries)
- Continuous innovation

**PayFac Relevance:** **Stripe Connect is the PayFac platform leader.** Powers thousands of SaaS platforms.

---

## Why Adyen & Stripe Are Winning

| Factor | Legacy Processors | Fintech Processors |
|--------|------------------|-------------------|
| **Technology** | Legacy mainframes | Modern cloud platforms |
| **Developer Experience** | Complex integrations | Easy APIs |
| **Pricing** | Hidden fees | Transparent pricing |
| **Innovation Speed** | Multi-year cycles | Quarterly releases |
| **Global Coverage** | Fragmented regional | Single platform for all markets |
| **Mindset** | Bank/ISO legacy thinking | Merchant-first |

---

## Payment Gateway vs Payment Processor

This is a common point of confusion:

### Payment Gateway

**Definition:** Technology platform that accepts, encrypts, and routes payment information. Modern gateways provide merchant-facing APIs, tokenization, fraud screening, and can route to multiple processors.

**Function:**
- Collects and encrypts customer payment data
- Customer-facing interface (APIs, hosted checkout)
- Acts as a bridge between parties
- **Modern capabilities:** Tokenization/vaulting, fraud screening, routing logic, retry logic, multi-processor orchestration

**Examples:** Authorize.Net, Braintree, NMI, Spreedly (orchestration), Primer.io

### Payment Processor

**Definition:** Company that facilitates electronic transactions by processing and authorizing payments.

**Function:**
- Moves money between banks
- Verifies transactions
- Operates on the back end
- Ensures compliance with industry standards

**Examples:** First Data (Fiserv), Worldpay, Global Payments

### Key Differences

| Aspect | Payment Gateway | Payment Processor |
|--------|-----------------|-------------------|
| **Primary Role** | Collects and encrypts data | Moves money, authorizes transactions |
| **Position** | Customer-facing | Back-end operations |
| **Security Function** | Encrypts sensitive data | Verifies compliance |
| **Services** | Secure data transmission | Fraud detection, chargeback management |
| **Typical Fees** | Monthly fee | Transaction fees |

### How They Work Together

```
Customer enters card info
         |
         v
+------------------+
|  Payment Gateway |  <-- Encrypts data
+------------------+
         |
         v
+------------------+
| Payment Processor|  <-- Routes to issuer
+------------------+
         |
         v
+------------------+
|   Issuing Bank   |  <-- Approves/declines
+------------------+
```

**Do You Need Both?** For most businesses, yes. Many modern providers (Stripe, Square, PayPal) bundle both services into one.

---

## Processor Selection Criteria

### 1. Pricing & Economics

**Pricing Models:**

| Model | Description | Best For |
|-------|-------------|----------|
| **Interchange-Plus** | IC + Network Fees + Processor Markup (e.g., IC + $0.20 + 0.25%) | Mid-large merchants, PayFacs |
| **Flat-Rate** | Single rate (e.g., 2.9% + $0.30) | Startups, low volume, simplicity |
| **Tiered** | Qualified/Mid-qualified/Non-qualified buckets | **AVOID** - predatory pricing |

**Key Questions:**
- What are per-transaction fees?
- Monthly/annual platform fees?
- Chargeback fees?
- Reserve requirements?
- Volume discounts at what thresholds?

### 2. Integration Capabilities

**Technical Requirements:**
- REST API quality (documentation, SDKs, support)
- Webhook reliability (idempotency, retry logic)
- Tokenization/vault options
- PCI scope reduction tools:
  - Hosted fields / iframes
  - Point-to-point encryption (P2PE) for card-present
  - Network tokenization (VTS, MDES)
  - Link-based checkout (redirect flows)
- Mobile SDKs (iOS, Android)
- Testing/sandbox environments

**PayFac-Specific Needs:**
- Sub-merchant onboarding APIs
- Split payment/marketplace functionality
- Automated underwriting hooks
- Payout scheduling flexibility

### 3. Settlement Timing

| Factor | Consideration |
|--------|---------------|
| Standard funding | T+1 vs T+2 vs T+3 |
| Next-day funding | Available? What fee? |
| Instant payouts | Available? What fee? |
| Reserve release | When are reserves released? |

**Why it matters:** Cash flow for sub-merchants affects churn.

### 4. Geographic Coverage

- Domestic-only vs international
- Which countries/currencies supported
- Local acquiring vs cross-border
- Multi-currency settlement options

### 5. Risk Appetite & Merchant Categories

Processors vary widely in risk tolerance:

| Type | Merchant Categories | Chargeback Tolerance |
|------|---------------------|---------------------|
| **Conservative** (Banks) | Low-risk only | &lt;0.5% |
| **Moderate** (First Data, Global Payments) | Most standard MCCs | ~1% |
| **Aggressive** (High-risk specialists) | CBD, adult, crypto | 2%+ |

**Critical:** Match processor's risk appetite to your target merchants.

### 6. Support & Partnership

- Account manager quality
- Technical support responsiveness
- Underwriting team accessibility
- Compliance/legal support
- Roadmap alignment

---

## PayFac Implications

### How PayFacs Work with Processors

```
   Sub-Merchant --> PayFac Platform --> Processor --> Card Networks
                         |                    |
                         |                    |
                         v                    v
                   Master Merchant       Sponsor Bank
                      Account
```

**PayFac Handles:**
- Sub-merchant onboarding
- KYC/KYB verification
- Underwriting decisions
- Platform features
- Payout scheduling
- First-line support
- Fraud monitoring

**Processor Handles:**
- Network connectivity
- Authorization routing
- Settlement/clearing
- Interchange calculation
- Chargeback lifecycle
- PCI infrastructure

### Processor vs Sponsor Bank

| Aspect | Sponsor Bank | Processor |
|--------|--------------|-----------|
| **Who** | Licensed bank (Chase, Wells Fargo) | Technology company (Stripe, First Data) |
| **Role** | Master merchant account, regulatory licenses | Technology infrastructure |
| **Fees** | Platform fee ($50K-$250K+/year) + basis points | Interchange-plus pricing + platform fees |
| **What they provide** | Licenses, regulatory oversight, reserves | APIs, routing, settlement, reporting |

**Bundled vs Separate:**
- **Bundled:** Chase Paymentech (processor + bank in one) - simpler but locked in
- **Separate:** Stripe (processor) + Wells Fargo (sponsor) - flexible but two relationships

### Why Processor Choice Matters for PayFacs

1. **You can't easily switch** - Integration takes months; this is a 5-10 year decision
2. **Processor limits = your limits** - Geographic reach, MCCs, funding speed all constrained
3. **Processor economics = your economics** - Small fee changes = big margin impact
4. **Uptime is your reputation** - If processor goes down, YOU look bad
5. **Compliance risk is shared** - If they lose certification, your platform shuts down

### Processing Agreement Key Terms

**Pay attention to:**
- Pricing & fee escalation provisions
- Reserve requirements and release terms
- Termination clauses (notice period, early termination fees)
- Data portability (can you export your data?)
- SLAs with financial penalties
- Liability caps
- Volume commitments and minimums

**Red Flags:**
- "Qualified/Non-qualified" tiered pricing
- Auto-renewal without opt-out window
- Processor can terminate without cause on 30 days notice
- Huge early termination fees
- No data portability

---

## Processor Economics & Revenue Models

Understanding how processors make money helps you negotiate better and understand their incentives.

### Primary Revenue: Processing Margins

**Interchange-Plus Model (Most Common for PayFacs):**
```
Processor charges: Interchange + Network Fees + Markup
Example: $100 transaction
  - Interchange: $1.80 (goes to issuer)
  - Network fees: $0.15 (goes to Visa/MC)
  - Processor markup: $0.30 (processor keeps)
  - Merchant pays: $2.25 total
```

**Blended/Flat-Rate Model (Stripe, Square):**
- Processor charges fixed % (e.g., 2.9% + $0.30)
- Processor keeps difference between their rate and actual costs
- Higher margin for processor, simpler for merchant

### Secondary Revenue Streams

| Revenue Stream | Description | Typical Amount |
|----------------|-------------|----------------|
| **Monthly fees** | Platform, gateway, PCI compliance | $10-$100/month |
| **Chargeback fees** | Per-chargeback handling fee | $15-$25 per dispute |
| **International fees** | Currency conversion markup | 1-3% above mid-market |
| **Premium features** | Instant payouts, advanced fraud tools | 0.5-1.5% per payout |
| **Hardware revenue** | Terminals, card readers | $50-$500 per device |

### Volume Economics

Processors have **high fixed costs** (infrastructure, compliance) and **low marginal costs**:
- Break-even: Typically $5-10B annual processing volume
- Profitable scale: $50B+ annually
- This is why consolidation happens - **scale is survival**

---

## Authorization Rate Optimization

**Why This Matters:** Authorization rate directly impacts revenue. A 2-5% difference in approval rates can mean millions in additional or lost revenue.

### Industry Benchmarks

| Transaction Type | Average Auth Rate | Top Performers |
|------------------|-------------------|----------------|
| Card-present (CP) | 95-98% | 98%+ |
| Card-not-present (CNP) | 80-85% | 87-90%+ |
| Recurring/subscription | 85-90% | 92%+ |

### What Drives Higher Auth Rates

1. **Direct network connections** - Fewer hops = faster authorization
2. **Smart retry logic** - Automatic retry with different parameters
3. **Network tokenization** - Visa/MC tokens update automatically
4. **3DS optimization** - Reduce friction while maintaining compliance
5. **Account Updater** - Automatically update expired cards
6. **Machine learning** - Predict and avoid soft declines

### Revenue Impact Example

```
PayFac processes $1B annually
Auth rate: 85% vs 90% = 5% difference
5% of $1B = $50M in additional approved volume
At 2.5% take rate = $1.25M additional revenue
```

**Key Point:** Authorization rate should be a **key processor selection criterion** for PayFacs.

---

## Market Landscape Summary (2025)

| Processor | Market Position | Strength | PayFac Offering |
|-----------|----------------|----------|-----------------|
| **Fiserv/First Data** | #1 (45% US) | Scale, full-stack | PayFac-in-a-Box |
| **Global Payments/Worldpay** | #2 globally | International, vertical SaaS | PayFac-as-a-Service |
| **FIS** | #1 issuer processing | Bank software | Exiting merchant acquiring |
| **Chase Paymentech** | #4 US | Bank integration | Bundled processor + sponsor |
| **Elavon** | #5 US | International | PayFac via US Bank |
| **Adyen** | Enterprise leader | True omnichannel | Platforms solution |
| **Stripe** | Developer leader | APIs, instant onboarding | Stripe Connect |

---

## Self-Assessment Questions & Answers

### Question 9: A merchant says they use "Stripe for payments." What roles is Stripe actually playing?

**Answer:**

Stripe is playing **multiple roles** simultaneously:

1. **Payment Gateway** - Provides APIs and hosted checkout to collect card data
2. **Payment Processor** - Routes authorization requests to card networks
3. **Payment Facilitator (PayFac)** - Acts as master merchant, onboards sub-merchants instantly
4. **Acquirer-lite** - Works with sponsor banks but handles acquirer-like functions

**Key Point:** Modern fintechs like Stripe have vertically integrated the payment stack. The merchant says "Stripe" but they're actually using:
- Stripe's APIs (gateway function)
- Stripe's direct network connections (processor function)
- Stripe's master merchant account (PayFac function)
- Stripe's sponsor bank relationships (acquiring function)

This is why Stripe can onboard merchants instantly - they ARE the PayFac, not just a processor.

### Question 12: What is the key difference between a payment gateway and a payment processor?

**Answer:**

| Aspect | Payment Gateway | Payment Processor |
|--------|-----------------|-------------------|
| **Primary Function** | Securely **collects and transmits** payment data | **Routes transactions** and **moves money** between banks |
| **Position in Flow** | Customer-facing, front-end | Back-end, between gateway and card networks |
| **What It Does** | Encrypts card data, sends to processor | Authorizes transactions, handles settlement |
| **Security Role** | Protects data in transit | Ensures compliance, fraud detection |
| **Examples** | Authorize.Net, Braintree (standalone) | First Data (Fiserv), TSYS, Worldpay |

**Analogy:**
- **Gateway** = The secure mailroom that receives and packages letters
- **Processor** = The postal system that actually delivers the letters

**Modern Reality:** Many providers (Stripe, Adyen, Square) bundle both into one service, which is why the distinction can be confusing. But understanding the difference helps when architecting payment systems or negotiating contracts.

---

## Key Takeaways

1. **Processors are the plumbing** - They're the technical infrastructure connecting merchants to card networks

2. **Front-end != Back-end** - Authorization routing is different from settlement/clearing

3. **Direct network connections are expensive** - Certification costs millions and takes years

4. **The industry is consolidating** - 2019-2025 saw massive M&A reshaping the landscape

5. **Fintechs are disrupting** - Stripe and Adyen built modern platforms and are eating market share

6. **For PayFacs, processor choice is critical** - You're locked in for years; their capabilities become yours

7. **Gateway != Processor** - Gateways collect data; processors route transactions and move money

8. **Sponsor bank != Processor** - Banks provide licenses and accounts; processors provide technology

9. **The FIS/Worldpay failure teaches** - Not all payments businesses are the same; $43B can disappear

10. **Read the fine print** - Processing agreements have gotchas in termination, reserves, and SLAs

---

## References

### Market Research & Industry Analysis

- [Payments Dive - Fiserv takes lead back from FIS](https://www.paymentsdive.com/news/fiserv-fis-payments-processing-competition-nilson/648496/) - Market share analysis
- [Nilson Report](https://nilsonreport.com/) - Industry publication tracking payment card statistics
- [CardRates - Credit Card Processors Market Share 2025](https://www.cardrates.com/advice/credit-card-processors-market-share/) - Processor rankings

### Recent M&A Activity

- [American Banker - Global Payments divests issuer business to FIS](https://www.americanbanker.com/payments/news/global-payments-divests-issuer-business-to-fis) - 2025 deal coverage
- [FIS Press Release - Worldpay Stake Sale and TSYS Acquisition](https://www.fisglobal.com/about-us/media-room/press-release/2025/fis-sale-of-worldpay-stake-and-strategic-acquisition-of-global-payments-issuer-solutions-business)
- [Business Wire - Global Payments Worldpay Acquisition](https://www.businesswire.com/news/home/20250416743638/en/Global-Payments-Announces-Agreements-to-Acquire-Worldpay-and-Divest-Issuer-Solutions) - Official announcement

### Gateway vs Processor Education

- [Stripe - Payment processor vs payment gateway](https://stripe.com/resources/more/payment-processor-vs-payment-gateway) - Clear explanation
- [Shopify - Payment Gateway vs Payment Processor](https://www.shopify.com/blog/payment-gateway-vs-payment-processor) - E-commerce perspective
- [Tipalti - Gateway vs Processor](https://tipalti.com/resources/learn/payment-gateway-vs-payment-processor/) - Business finance view

### Processor Technical Information

- [Finix - The Payment Processing Players](https://finix.com/resources/blogs/the-payment-processing-players) - Processor landscape
- [EMS Corporate - Front-End vs Back-End Processing](https://www.emscorporate.com/news/frontend-vs-backend-payment-processing) - Technical breakdown
- [Green Sheet - What does a processor do?](http://www.greensheet.com/emagazine.php?story_id=2300) - Industry perspective

### Network Requirements

- [Visa Core Rules](https://usa.visa.com/support/merchant/visa-rules.html) - Official Visa rulebook
- [Mastercard Rules](https://www.mastercard.us/en-us/business/overview/support/rules.html) - Mastercard standards

---

## Related Topics

| Topic | Description |
|-------|-------------|
| [The Four-Party Model](/ecosystem/fundamentals/four-party-model) | Interchange economics and fee structures |
| [Card Network Role](/ecosystem/fundamentals/card-network-role) | BIN routing and network certifications |
| [Transaction Lifecycle](/ecosystem/fundamentals/transaction-lifecycle/overview) | Authorization, settlement, and chargebacks |
| [Debit Networks & Routing](/ecosystem/fundamentals/debit-networks-routing) | Processor-owned networks (STAR, NYCE) |
| [Payment Gateways](./payment-gateways/overview) | Gateway vs processor distinction |
| [Acquiring Banks](./acquiring-banks/overview) | Sponsor banks and processor relationships |
| [ISOs](./isos) | ISO/processor distribution model |
| [ISVs](./isvs) | PayFac model and embedded payments |
