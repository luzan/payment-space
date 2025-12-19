# Debit Networks & Routing

> **Last Updated:** 2025-12-18
>
> **Status:** Complete
>
> **Changes Log:**
>
> - 2025-12: Initial comprehensive notes with LCR analysis and regulatory context
> - Note: Capital One/Discover acquisition status, Maestro sunset timeline should be verified periodically

Debit card routing is one of the most complex and economically significant aspects of payment processing. Unlike credit cards that route through a single network (Visa or Mastercard), debit transactions can route through multiple networks. This creates opportunities for cost optimization.

---

## Overview

A debit card transaction has two possible paths:

1. **PIN Debit**: Routes through regional PIN networks (PULSE, STAR, NYCE)
2. **Signature Debit**: Routes through card networks (Visa, Mastercard)

The Durbin Amendment (2010) requires issuers to support at least two unaffiliated networks on each card. This gives merchants routing choice.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DEBIT CARD ROUTING OPTIONS                               │
└─────────────────────────────────────────────────────────────────────────────┘

                         DEBIT CARD
                             │
                             ▼
              ┌──────────────┴──────────────┐
              │      CARDHOLDER CHOICE      │
              │      (or Merchant LCR)      │
              └──────────────┬──────────────┘
                             │
           ┌─────────────────┴─────────────────┐
           │                                   │
           ▼                                   ▼
┌─────────────────────┐             ┌─────────────────────┐
│    PIN DEBIT        │             │   SIGNATURE DEBIT   │
│                     │             │                     │
│  • PULSE            │             │  • Visa             │
│  • STAR             │             │  • Mastercard       │
│  • NYCE             │             │                     │
│  • Accel            │             │  Routes like        │
│  • Interlink        │             │  credit card        │
│  • Maestro          │             │                     │
│                     │             │                     │
│  Single-message     │             │  Dual-message       │
│  Real-time settle   │             │  2-3 day settle     │
│  Fixed fees         │             │  % + fixed fees     │
└─────────────────────┘             └─────────────────────┘
```

---

## Historical Context

The U.S. debit network landscape has consolidated significantly over time.

**Pre-2010s:**

- 20+ regional PIN networks existed (Honor, NYCE, STAR, MAC, etc.)
- Most were owned by ATM consortiums and regional banks
- Fragmented market with regional coverage

**2010s Consolidation:**

- Processors acquired networks (Fiserv acquired STAR and Accel; FIS acquired NYCE)
- Visa acquired Interlink from Visa member banks
- Mastercard expanded Maestro internationally

**Post-Durbin (2011+):**

- Two-network requirement preserved some competition
- But ownership concentrated in Visa, Mastercard, and top 2 processors
- PINless routing became competitive battleground for e-commerce

---

## PIN Debit Networks

### Major Networks by Owner

| Owner | Network | Notes |
|-------|---------|-------|
| **Visa** | Interlink | PIN debit for Visa cards |
| **Mastercard** | Maestro | Being phased out globally (sunset by 2027) |
| **Fiserv** | STAR, Accel | Major processor-owned networks |
| **FIS** | NYCE | Bundled with core processing |
| **Discover** | PULSE | Capital One acquisition pending (announced Feb 2024, regulatory approval ongoing) |

**Note on Discover/Capital One:** Capital One announced acquisition of Discover Financial Services in February 2024. As of early 2025, the deal faces significant regulatory scrutiny and has not closed. PULSE remains under Discover ownership until the merger completes.

**Note on Maestro:** Mastercard announced in 2021 that it will sunset Maestro globally by 2027, replacing it with Debit Mastercard. This affects international debit routing strategies.

### Regional and Independent Networks

- Jeanie (Vantiv)
- Shazam (Midwest focus)
- Alaska Option (Alaska only)
- Culiance (credit union network)

These regional networks have declining market share as national networks dominate.

### PINless Debit Support

Not all PIN networks support card-not-present (CNP) transactions:

**PINless Enabled:**

- STAR
- Accel
- NYCE
- PULSE

**PINless NOT Available:**

- Interlink (Visa)
- Maestro (Mastercard)

**Why the difference?** Visa and Mastercard earn more from signature debit. They have no incentive to enable PINless on their PIN networks. The lack of PINless support also reflects original design assumptions. PIN networks were built for in-person, PIN-authenticated transactions before PINless became a regulatory necessity.

---

## PIN Debit vs Signature Debit

### Side-by-Side Comparison

| Aspect | PIN Debit | Signature Debit |
|--------|-----------|-----------------|
| **Network** | PIN network (PULSE, STAR) | Card network (Visa, MC) |
| **Authentication** | PIN entry | Signature or none |
| **Message Type** | Single-message | Dual-message |
| **Settlement** | Same/next day | 2-3 days |
| **Fee Structure** | Fixed fee ($0.08-$0.15) | Percentage + fixed |
| **Chargeback Risk** | Lower | Higher |
| **Cash Back** | Standard feature | Rare (some MCCs only) |

### Processing Flow Comparison

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      PIN DEBIT (Single-Message)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   POS Terminal                                                              │
│       │                                                                     │
│       │  1. Card + PIN entered                                              │
│       ▼                                                                     │
│   PIN Network (PULSE/STAR/NYCE)                                             │
│       │                                                                     │
│       │  2. Authorization + Clearing in ONE message                         │
│       ▼                                                                     │
│   Issuing Bank                                                              │
│       │                                                                     │
│       │  3. Immediate debit from account                                    │
│       ▼                                                                     │
│   Response sent back                                                        │
│                                                                             │
│   Total time: 1-3 seconds                                                   │
│   Settlement: Same day or next day                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                    SIGNATURE DEBIT (Dual-Message)                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   MESSAGE 1: AUTHORIZATION                                                  │
│   ─────────────────────────────                                             │
│   POS Terminal                                                              │
│       │                                                                     │
│       │  1. Card swiped/tapped, "Credit" selected                           │
│       ▼                                                                     │
│   Visa/Mastercard Network                                                   │
│       │                                                                     │
│       │  2. Authorization request                                           │
│       ▼                                                                     │
│   Issuing Bank → Approve/Decline                                            │
│       │                                                                     │
│       │  3. Hold placed on funds                                            │
│       ▼                                                                     │
│   Authorization code returned                                               │
│                                                                             │
│   MESSAGE 2: CLEARING (hours/days later)                                    │
│   ──────────────────────────────────────                                    │
│   Merchant batches transactions                                             │
│       │                                                                     │
│       │  4. Clearing message to network                                     │
│       ▼                                                                     │
│   Settlement process                                                        │
│       │                                                                     │
│       │  5. Funds transfer                                                  │
│       ▼                                                                     │
│   Merchant funded (T+2 or T+3)                                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Security Differences

**PIN Debit:**

- Banks rarely side with cardholders if PIN was entered correctly
- Reduces "friendly fraud" (false unauthorized claims)
- Strong cardholder authentication

**Signature Debit:**

- Easier for cardholders to dispute
- Higher chargeback risk for merchants
- Signature verification is weaker than PIN

---

## The Durbin Amendment

### What Is It?

The Durbin Amendment is Section 1075 of the Dodd-Frank Act. It was enacted in 2010 and implemented in 2011.

**Two Main Requirements:**

1. Cap debit interchange fees for large banks
2. Require at least two unaffiliated networks on each card

### Interchange Fee Cap

The cap applies to "regulated" issuers (banks with $10B+ in assets).

**Maximum Fee Formula:**

```text
Base Fee:              $0.21
+ Ad Valorem:          0.05% of transaction amount
+ Fraud Adjustment:    $0.01 (if eligible)
─────────────────────────────────────────────────
Maximum Total:         $0.22 + 0.05%
```

**Example Calculation ($100 transaction):**

- Base: $0.21
- Ad valorem: $100 x 0.05% = $0.05
- Fraud adjustment: $0.01
- **Total cap: $0.27**

### Who Is Regulated vs Exempt?

| Category | Asset Threshold | Interchange |
|----------|-----------------|-------------|
| **Regulated** | $10B+ in assets | Capped at $0.22 + 0.05% |
| **Exempt** | Under $10B | No cap (avg 1.21%) |

**Regulated Examples:** Chase, Bank of America, Wells Fargo, Citi

**Exempt Examples:** Community banks, credit unions

The exemption is based on the **issuing bank's** size, not the merchant's size.

### What Does "Unaffiliated Networks" Mean?

Issuers must enable at least **two unaffiliated networks** on each debit card.

**Valid Combinations:**

- Visa signature + PULSE (different owners)
- Mastercard signature + STAR (different owners)
- Interlink (Visa PIN) + NYCE (FIS) - different owners

**Invalid Combinations:**

- STAR + Accel (both owned by Fiserv)
- Interlink + Visa signature (both Visa)

Many issuers enable 3-4 networks to ensure compliance even if ownership structures change through acquisitions.

### Routing Choice Requirements

The Durbin Amendment requires:

1. Issuers must enable at least 2 unaffiliated networks
2. Merchants can choose which network to route through
3. Networks must support both card-present AND card-not-present

This is what enables least-cost routing.

### Regulatory Developments

**Note:** The regulatory landscape for debit interchange is actively evolving. There have been ongoing court challenges and proposed legislative changes. Always verify current regulatory status when making business decisions.

**Key developments to monitor:**

- Court challenges to Regulation II and Federal Reserve authority
- Proposed legislation to raise threshold from $10B to $50B
- Federal Reserve proposed rule requiring networks to support CNP routing

---

## Debit Network Routing

### When Are Routing Decisions Made?

```
Card Read → Terminal → Gateway/Processor → Network
    │           │              │               │
    │           │              │               └── Actual routing
    │           │              └── Network selection logic
    │           └── PIN vs Signature choice
    └── BIN detected
```

### How the System Decides PIN vs Signature

**Cardholder Selection (Traditional):**

- Cardholder selects "Debit" at terminal → PIN debit flow
- Cardholder selects "Credit" at terminal → Signature debit flow

**Merchant-Controlled Routing:**

- Terminal can be configured to default to one option
- Least-cost routing selects the cheaper option automatically

**PINless Debit (Card-Not-Present):**

- No PIN entry possible online
- Routes through PINless-enabled networks (STAR, PULSE, NYCE, Accel)
- Or routes through signature debit (Visa, Mastercard)

### Least-Cost Routing (LCR)

**Definition:** Dynamically selecting the cheapest debit network for each transaction.

**How It Works:**

1. System identifies all eligible networks on the card
2. Calculates total cost for each network option
3. Routes to lowest-cost network
4. Falls back to next option if declined

**Example Calculation ($75 transaction):**

```text
Card supports: Visa Signature Debit, PULSE, STAR

OPTION 1 - Visa Signature Debit (Regulated):
  Interchange:     0.05% + $0.21 = $0.25
  Network fee:     $0.02
  Processor:       0.15% + $0.10 = $0.21
  TOTAL:           $0.48

OPTION 2 - PULSE PIN Debit:
  Network fee:     $0.12
  Processor:       $0.10
  TOTAL:           $0.22

OPTION 3 - STAR PIN Debit:
  Network fee:     $0.14
  Processor:       $0.10
  TOTAL:           $0.24

─────────────────────────────────────────────────
LCR Decision: Route via PULSE ($0.22)
Savings: $0.26 vs Visa (54% reduction)
```

### Factors in Network Selection

1. **Card BIN Configuration**
   - Which networks did the issuer enable?
   - Durbin requires at least 2 unaffiliated networks

2. **Merchant Routing Rules**
   - Cost-based prioritization
   - Network-specific negotiated rates

3. **Transaction Characteristics**
   - Amount (affects percentage-based fees)
   - Card-present vs card-not-present
   - Merchant category code (MCC)

4. **Network Availability**
   - Geographic coverage
   - PINless support for CNP

### Transaction Amount Limits

PIN networks often have maximum transaction limits:

| Network | Typical Limit | Notes |
|---------|---------------|-------|
| PULSE | $1,000-$2,500 | Issuer configurable |
| STAR | $1,000-$2,500 | Issuer configurable |
| NYCE | $1,000-$2,500 | Issuer configurable |

**Why limits exist:**

- PIN networks designed for retail/ATM transactions
- Risk management (immediate settlement means less time to detect fraud)
- Network infrastructure built for everyday purchase amounts

**What happens above the limit:**

- Transaction must route to signature debit
- Or be declined if merchant forced PIN routing
- LCR systems must check transaction amount before selecting network

Visa/Mastercard signature debit typically supports much higher limits ($10,000+), though issuer limits still apply.

### Routing Failure Scenarios

**What Happens When LCR Fails?**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      ROUTING FAILURE SCENARIOS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. NETWORK DECLINE                                                         │
│     ─────────────────                                                       │
│     Primary network (e.g., PULSE) declines                                  │
│         ↓                                                                   │
│     System falls back to next option (e.g., STAR)                           │
│         ↓                                                                   │
│     May eventually fall back to signature debit                             │
│         ↓                                                                   │
│     Adds latency (each attempt takes 1-3 seconds)                           │
│                                                                             │
│  2. CARD DOESN'T SUPPORT SELECTED NETWORK                                   │
│     ───────────────────────────────────────                                 │
│     BIN database was outdated or incorrect                                  │
│         ↓                                                                   │
│     Transaction fails or routes to fallback                                 │
│         ↓                                                                   │
│     Importance of accurate, real-time BIN data                              │
│                                                                             │
│  3. MERCHANT NOT ENABLED ON NETWORK                                         │
│     ────────────────────────────────────                                    │
│     Merchant may not have contract with selected PIN network                │
│         ↓                                                                   │
│     Gateway must route to available network                                 │
│         ↓                                                                   │
│     LCR constrained by merchant's network relationships                     │
│                                                                             │
│  4. TRANSACTION EXCEEDS NETWORK LIMIT                                       │
│     ──────────────────────────────────                                      │
│     $500 transaction, but PULSE has $300 limit                              │
│         ↓                                                                   │
│     Must route to STAR or signature debit                                   │
│         ↓                                                                   │
│     LCR must check limits before selecting network                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Best Practice:** If BIN lookup fails or times out, most systems default to signature debit (universal acceptance) rather than risk transaction decline.

### Approval Rate vs Cost Tradeoffs

**The Hidden Cost of Aggressive LCR:**

LCR can **increase decline rates** by 0.5-2% in some scenarios.

**Why?**

1. **Network Downtime:** If you route 80% of transactions to PULSE, PULSE downtime affects 80% of your volume.

2. **Issuer Authorization Differences:** Some issuers have stricter fraud rules on certain networks. A transaction approved on Visa might decline on PULSE for the same card.

3. **Fallback Latency:** If primary network declines and you fall back, the added latency (2-6 seconds) increases customer abandonment.

**Example Analysis:**

```text
Scenario: 1% decline increase from aggressive LCR

Before LCR:
  Approval rate: 94%
  Cost per transaction: $0.35

After Aggressive LCR:
  Approval rate: 92% (2% decline increase)
  Cost per transaction: $0.20

Math (per 100 transactions, $75 average ticket):
  Lost sales: 2 transactions × $75 = $150
  Cost savings: 100 × $0.15 = $15

  NET LOSS: $135 per 100 transactions
```

**Best Practice:**

- Monitor approval rates by network
- Use blended strategy (aggressive LCR for small tickets, conservative for large)
- A/B test routing changes before full rollout

---

## Fee Comparison

### Regulated Debit Fees (Banks $10B+)

| Fee Type | Signature Debit | PIN Debit |
|----------|-----------------|-----------|
| Interchange | 0.05% + $0.21 | N/A |
| Network Fee | ~$0.02 | $0.08-$0.15 |
| **Average Total** | ~$0.25-$0.30 | ~$0.10-$0.15 |

### Exempt Debit Fees (Banks Under $10B)

| Fee Type | Signature Debit | PIN Debit |
|----------|-----------------|-----------|
| Interchange | Avg 1.21% | N/A |
| Network Fee | ~$0.02 | $0.08-$0.15 |
| **Average Total** | ~$0.52+ | ~$0.10-$0.15 |

### Real Examples by Transaction Size

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       FEE COMPARISON BY TICKET SIZE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  $15 TRANSACTION (Small Ticket)                                             │
│  ───────────────────────────────                                            │
│                                                                             │
│  Regulated Signature:  0.05% × $15 + $0.22 + $0.02 = $0.25                  │
│  PIN Debit:            $0.12 network fee             = $0.12                │
│  Savings:              $0.13 (52%)                                          │
│                                                                             │
│  $75 TRANSACTION (Medium Ticket)                                            │
│  ────────────────────────────────                                           │
│                                                                             │
│  Regulated Signature:  0.05% × $75 + $0.22 + $0.02 = $0.28                  │
│  PIN Debit:            $0.12 network fee             = $0.12                │
│  Savings:              $0.16 (57%)                                          │
│                                                                             │
│  $150 TRANSACTION (Large Ticket)                                            │
│  ─────────────────────────────────                                          │
│                                                                             │
│  Regulated Signature:  0.05% × $150 + $0.22 + $0.02 = $0.32                 │
│  PIN Debit:            $0.12 network fee              = $0.12               │
│  Savings:              $0.20 (62.5%)                                        │
│                                                                             │
│  $100 TRANSACTION (Exempt Issuer)                                           │
│  ─────────────────────────────────                                          │
│                                                                             │
│  Exempt Signature:     1.21% × $100 + $0.02          = $1.23                │
│  PIN Debit:            $0.12 network fee              = $0.12               │
│  Savings:              $1.11 (90%!)                                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Merchant Preferences

**Prefer PIN Debit When:**

- High average ticket size ($50+)
- High transaction volume
- Thin profit margins (grocery, fuel, QSR)
- Regulated issuer cards are common

**Prefer Signature Debit When:**

- Very small tickets (under $10)
- Card-not-present only (limited PINless options)
- Customer convenience prioritized

**Use Least-Cost Routing:**

- Let the system decide per transaction
- Optimize for each card and amount combination
- Monitor approval rates to balance cost vs. conversion

---

## Technical Implementation

### BIN Routing Information

**What is a BIN/IIN?**

Bank Identification Number (BIN), also called Issuer Identification Number (IIN). The first 6-9 digits of a card number.

```text
4111 1111 1111 1111
└──┬──┘
   BIN/IIN (historically 6 digits, now expanding to 8-9 digits)

First digit identifies the network:
  4 = Visa
  5 = Mastercard
  6 = Discover
  3 = Amex
```

**Why the expansion?** The industry is running out of 6-digit BIN combinations as card issuance grows globally.

**What BIN Tells You:**

- Issuing bank
- Card brand (Visa, Mastercard)
- Card type (credit, debit, prepaid)
- Country of issuance

**What BIN Does NOT Tell You (without lookup):**

- Which PIN debit networks are enabled
- Whether PINless routing is available
- Regulated vs exempt status

### Determining Regulated vs Exempt Status

**Challenge:** BIN data doesn't always clearly indicate regulated vs exempt status.

**Complications:**

1. **Bank acquisitions:** A small bank's BINs may become regulated after acquisition
2. **Asset threshold timing:** Banks crossing $10B threshold mid-year
3. **BIN sharing:** Some BINs used by multiple issuers (program managers)
4. **Data lag:** BIN databases may not update immediately

**Industry Practice:**

- Processors use proprietary databases combining BIN data + Federal Reserve issuer lists
- Interchange fees applied may differ from theoretical caps
- Merchants often can't perfectly predict fees before processing

**Example BIN Lookup Response:**

```json
{
  "bin": "411111",
  "cardBrand": "Visa",
  "cardType": "Debit",
  "issuer": "Chase Bank",
  "regulated": true,
  "debitNetworks": [
    "Visa (Signature)",
    "Interlink (PIN)",
    "PULSE (PIN/PINless)",
    "STAR (PIN/PINless)"
  ],
  "pinlessEnabled": true
}
```

### Network Tokenization Impact

**Challenge:** When a debit card is tokenized (stored in Apple Pay, Google Pay, or merchant vault), the token may be **network-specific**.

**Impact on Routing:**

- A Visa token can only route through Visa
- Defeats the purpose of least-cost routing
- Merchants lose ability to route to cheaper PIN networks

**Industry Solutions:**

- **Network-agnostic tokens** (emerging standard)
- **Multi-network tokens** where wallet provides tokens for multiple networks
- **On-behalf tokenization** where merchant controls token network

**PayFac Consideration:**

If your platform supports recurring billing or card-on-file, tokenization strategy directly impacts routing optionality. Consider requesting tokens from multiple networks when storing cards.

### EMV AID Selection

EMV chip cards have Application Identifiers (AIDs) that determine routing:

**Global AID (Visa/Mastercard):**

- Routes to Visa or Mastercard network
- Signature authentication
- Higher cost

**U.S. Common Debit AID:**

- Routes to multiple network options
- Enables merchant routing choice
- PIN or PINless authentication

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         EMV AID SELECTION FLOW                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Card Inserted/Tapped                                                      │
│         │                                                                   │
│         ▼                                                                   │
│   Terminal reads EMV chip                                                   │
│         │                                                                   │
│         ▼                                                                   │
│   Chip provides available AIDs                                              │
│         │                                                                   │
│         ▼                                                                   │
│   Cardholder selects "Debit" or "Credit"                                    │
│         │                                                                   │
│    ┌────┴────┐                                                              │
│    │         │                                                              │
│    ▼         ▼                                                              │
│ "Credit"  "Debit"                                                           │
│    │         │                                                              │
│    ▼         ▼                                                              │
│ Global    U.S. Common                                                       │
│   AID     Debit AID                                                         │
│    │         │                                                              │
│    ▼         ▼                                                              │
│ Visa/MC   PIN network                                                       │
│ Signature (merchant choice)                                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Terminal Configuration Best Practices

1. **Prioritize U.S. Common Debit AID** over Global AID
2. **Enable multiple PIN networks** (PULSE, STAR, NYCE, Accel)
3. **Implement least-cost routing logic** in gateway
4. **Set appropriate No CVM limits** (e.g., $50 for contactless)
5. **Keep BIN database updated** for accurate routing

---

## International Debit Cards

### Key International Networks

| Network | Region | Notes |
|---------|--------|-------|
| **Maestro** | Global | Mastercard's international debit, sunset by 2027 |
| **V PAY** | Europe | Visa Europe PIN debit, chip-only (no mag stripe) |
| **UnionPay** | China | World's largest by transaction volume |
| **Interac** | Canada | Canada's domestic debit network |
| **EFTPOS** | Australia | Australia's domestic debit network |

### Routing Limitations

**International debit cards generally cannot route through U.S. PIN networks.**

Example: A Canadian Interac debit card used at a U.S. merchant:

- Cannot route through PULSE, STAR, NYCE, or Accel
- Must route through Visa or Mastercard signature debit
- No LCR optimization available

**Why?**

- Lack of network interoperability agreements
- Different settlement systems and currencies
- Technical incompatibilities between domestic networks

**PayFac Consideration:**

If your sub-merchants have significant international tourist traffic, factor this into routing economics. LCR savings will be limited for international cards.

---

## Self-Assessment Questions & Answers

### Question 21: What is the difference between PIN debit and signature debit? How does routing differ?

**Answer:**

**PIN Debit:**

- Cardholder enters a PIN to authenticate
- Routes through PIN debit networks (PULSE, STAR, NYCE, Accel, Interlink, Maestro)
- Uses single-message processing (auth and clearing combined)
- Settles same day or next day
- Fixed fee structure ($0.08-$0.15 per transaction)
- Also called "online debit"

**Signature Debit:**

- Cardholder signs or uses no verification for small amounts
- Routes through card networks (Visa, Mastercard) like credit cards
- Uses dual-message processing (auth first, clearing later)
- Settles in 2-3 business days
- Percentage-based fees (interchange + network fees)
- Also called "offline debit" or "run as credit"

**Routing Difference:**

PIN debit routes through regional/independent PIN networks owned by processors (Fiserv, FIS) or card networks (Interlink, Maestro). Signature debit routes through the same infrastructure as credit cards (Visa, Mastercard networks).

---

### Question 22: What is the Durbin Amendment, and how does it affect debit card processing?

**Answer:**

The Durbin Amendment is Section 1075 of the Dodd-Frank Act (2010). It has two main effects:

**1. Interchange Fee Cap:**

For banks with $10 billion or more in assets, debit interchange is capped at:

- $0.21 base fee
- Plus 0.05% of transaction amount
- Plus $0.01 fraud adjustment (if eligible)

A $100 transaction costs maximum $0.27 in interchange for regulated issuers.

Banks under $10B are exempt. They can charge market rates (average 1.21%).

**2. Routing Choice Requirement:**

Issuers must enable at least two unaffiliated networks on each debit card. This means a Visa debit card must also support a non-Visa PIN network (like PULSE or STAR).

This gives merchants the right to choose which network to route transactions through. It enabled least-cost routing.

**Impact:**

- Large merchants save significantly on debit processing
- Small issuers (exempt banks) have higher interchange revenue
- Created the PINless debit market for e-commerce routing optimization

---

### Question 23: A customer uses a debit card. How does the system decide whether to route it as PIN debit or signature debit?

**Answer:**

The routing decision happens at multiple points:

**1. Cardholder Selection (Most Common):**

At the terminal, the cardholder selects "Debit" or "Credit":

- "Debit" triggers PIN entry and routes through PIN debit network
- "Credit" skips PIN and routes through Visa/Mastercard as signature debit

**2. Terminal Configuration:**

The merchant can configure terminal defaults:

- Default to "Debit" option (prompts for PIN)
- Use least-cost routing to automatically select cheapest option

**3. EMV AID Selection:**

For chip cards, the terminal selects an Application Identifier:

- Global AID routes to Visa/Mastercard (signature debit)
- U.S. Common Debit AID enables PIN network routing

**4. Card-Not-Present (Online):**

No PIN entry is possible online. The system uses:

- PINless debit through PIN networks (STAR, PULSE, NYCE, Accel)
- Or signature debit through Visa/Mastercard

The gateway/processor makes this decision based on which networks the card supports and merchant routing preferences.

**5. No CVM Transactions:**

For contactless transactions under a threshold (often $50), no PIN or signature is required. The terminal can still route through PIN networks using PINless capability.

---

### Question 24: Why might a merchant prefer PIN debit over signature debit, or vice versa?

**Answer:**

**Reasons to Prefer PIN Debit:**

1. **Lower Fees:** PIN debit has fixed fees ($0.08-$0.15) vs percentage-based fees. On a $100 transaction, PIN debit saves $0.15-$0.20 compared to regulated signature debit.

2. **Much Lower Fees for Exempt Issuers:** For cards from small banks, PIN debit costs ~$0.12 vs $1.23+ for signature debit.

3. **Faster Settlement:** Same-day or next-day settlement vs 2-3 days.

4. **Lower Fraud/Chargeback Risk:** PIN verification provides stronger authentication. Banks rarely side with cardholders who entered their PIN.

5. **Cash Back Option:** Only PIN debit supports cash back at POS.

**Reasons to Prefer Signature Debit:**

1. **Very Small Tickets:** For transactions under $10, the fixed signature debit minimum may be less than PIN network fees.

2. **Card-Not-Present:** Not all cards support PINless routing. Signature debit works for all e-commerce.

3. **Customer Convenience:** Some customers prefer not entering a PIN. Faster checkout for contactless.

4. **Rewards Programs:** Some debit cards offer rewards only when run as credit (signature debit).

**Best Practice:**

Use least-cost routing (LCR) to let the system decide per transaction. This calculates the cheapest option for each card and amount combination. A $20 purchase may route differently than a $200 purchase on the same card.

---

### Question 25: A merchant processes a $500 debit card transaction. The card supports PULSE, STAR, and Visa signature debit. PULSE has a $300 transaction limit. Which network will LCR select?

**Answer:**

LCR must route to either STAR or Visa signature debit, since PULSE doesn't support transactions over $300.

**Cost Comparison:**

- **STAR:** ~$0.14 network fee = $0.14 total
- **Visa Signature (Regulated):** 0.05% x $500 + $0.22 = $0.47

**LCR Decision:** Route via STAR ($0.14 total cost)

**Key Insight:** LCR systems must check transaction amount against network limits before selecting the cheapest option. The cheapest network (PULSE) is not available for this transaction due to amount limits.

---

### Question 26: A customer uses a Canadian Interac debit card at a U.S. merchant with LCR enabled. What network will the transaction route through?

**Answer:**

The transaction will route through **Visa or Mastercard signature debit** (depending on the card's co-badging).

Canadian Interac cards cannot route through U.S. PIN networks (PULSE, STAR, NYCE, Accel) due to lack of network interoperability. There is no direct connection between Interac and U.S. domestic PIN networks.

**Result:** LCR optimization is not available for international cards. The merchant pays standard Visa/Mastercard signature debit fees.

**PayFac Consideration:** Merchants with high international tourist traffic will see limited benefit from LCR since many transactions cannot be optimized.

---

### Question 27: A PayFac enables LCR and routes 90% of debit transactions through PULSE to save costs. After enabling LCR, the overall approval rate drops from 94% to 92%. Should the PayFac continue using aggressive LCR?

**Answer:**

**Not necessarily.** The math often favors approval rate over cost savings.

**Analysis (per 100 transactions, $75 average ticket):**

**Before LCR:**
- 94 approved transactions
- Cost: 100 x $0.35 = $35
- Revenue: 94 x $75 = $7,050

**After Aggressive LCR:**
- 92 approved transactions (2 additional declines)
- Cost: 100 x $0.20 = $20
- Revenue: 92 x $75 = $6,900

**Comparison:**
- Cost savings: $15
- Lost revenue: $150 (2 x $75)
- **Net loss: $135 per 100 transactions**

**Recommendation:**

The PayFac should adjust LCR logic to balance cost and approval rate:

1. Use aggressive LCR for small tickets (where lost sale value is lower)
2. Use conservative routing for large tickets (approval rate matters more)
3. Monitor approval rates by network and A/B test changes
4. Consider diversifying across multiple networks to reduce concentration risk

---

## Why This Matters for PayFac

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  DEBIT ROUTING & PAYFAC OPERATIONS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. COST OPTIMIZATION FOR SUB-MERCHANTS                                     │
│     • Offer LCR as platform differentiator                                  │
│     • Help sub-merchants reduce processing costs                            │
│     • Competitive advantage over traditional ISOs                           │
│                                                                             │
│  2. REVENUE OPPORTUNITY                                                     │
│     • Negotiate volume-based network rates                                  │
│     • Retain savings margin or share with sub-merchants                     │
│     • Additional service fee for routing optimization                       │
│                                                                             │
│  3. TECHNICAL REQUIREMENTS                                                  │
│     • BIN database integration for network eligibility                      │
│     • Routing logic in payment gateway                                      │
│     • Real-time cost calculation engine                                     │
│     • Tokenization strategy for card-on-file routing                        │
│                                                                             │
│  4. COMPLIANCE                                                              │
│     • Honor Durbin routing requirements                                     │
│     • Support at least 2 unaffiliated networks                              │
│     • Cannot force routing to networks not enabled on card                  │
│                                                                             │
│  5. REGULATORY AWARENESS                                                    │
│     • Monitor Durbin Amendment legal challenges                             │
│     • Track proposed threshold changes ($10B to $50B)                       │
│     • Adjust pricing strategy if regulations change                         │
│                                                                             │
│  6. APPROVAL RATE MONITORING                                                │
│     • Track approval rates by network                                       │
│     • Balance cost savings vs. conversion rates                             │
│     • A/B test routing changes before full rollout                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Key Takeaways

1. **Debit cards can route two ways:** PIN debit through regional networks, or signature debit through Visa/Mastercard.

2. **PIN debit uses single-message processing** (auth and clearing combined). Signature debit uses dual-message (separate auth and clearing).

3. **The Durbin Amendment** caps interchange at $0.22 + 0.05% for banks with $10B+ in assets and requires two unaffiliated networks on each card.

4. **Exempt issuers** (under $10B) have no cap. Their signature debit costs ~4x more than regulated issuers.

5. **PIN debit is almost always cheaper.** Savings range from 50% on small tickets to 90% on exempt issuer cards.

6. **Least-cost routing** dynamically selects the cheapest network for each transaction, but must consider transaction limits and approval rates.

7. **BIN data and terminal configuration** are critical. U.S. Common Debit AID enables routing choice. Global AID locks you into Visa/MC.

8. **PINless debit** enables PIN network routing for card-not-present transactions. Only STAR, PULSE, NYCE, and Accel support PINless. Interlink and Maestro do not.

9. **International cards** cannot use U.S. PIN networks. No LCR optimization available for foreign-issued debit cards.

10. **Network tokenization** can defeat LCR. A Visa token can only route through Visa. Consider multi-network tokenization strategies.

11. **Approval rate vs cost** is a critical tradeoff. Aggressive LCR can increase declines by 0.5-2%. Monitor and balance.

---

## Key Terms Defined

| Term | Definition |
|------|------------|
| **PIN Debit** | Debit transaction authenticated by PIN entry. Routes through PIN debit networks using single-message processing. |
| **Signature Debit** | Debit transaction authenticated by signature (or no CVM). Routes through Visa/Mastercard using dual-message processing. |
| **Durbin Amendment** | Federal regulation capping debit interchange for large banks and requiring routing choice. Part of Dodd-Frank (2010). |
| **Debit Network** | Payment network that routes debit transactions. Includes PIN networks (PULSE, STAR, NYCE) and card networks (Visa, Mastercard). |
| **Routing Optimization** | Selecting the most cost-effective network for each debit transaction based on real-time fee calculation. |
| **Network Selection** | Process of choosing which debit network to route a transaction through based on cost, availability, and rules. |
| **Single-Message** | Processing method where authorization and clearing happen in one message. Used by PIN debit networks. |
| **Dual-Message** | Processing method with separate authorization and clearing messages. Used by signature debit (like credit cards). |
| **Regulated Issuer** | Bank with $10B+ in assets subject to Durbin interchange caps. |
| **Exempt Issuer** | Bank under $10B in assets not subject to Durbin caps. Higher interchange rates. |
| **PINless Debit** | PIN debit routing without PIN entry. Used for card-not-present transactions through select networks. |
| **BIN/IIN** | Bank/Issuer Identification Number. First 6-9 digits of card number identifying the issuer. Used for routing decisions. |
| **U.S. Common Debit AID** | EMV application identifier that enables multiple network routing options. |
| **Global AID** | EMV application identifier that routes exclusively to Visa or Mastercard. |
| **Unaffiliated Networks** | Networks with different ownership, required by Durbin for routing choice. |

---

## References

### Regulatory Resources

- [Federal Reserve - Regulation II (Debit Card Interchange)](https://www.federalreserve.gov/paymentsystems/regii-about.htm) - Official Durbin Amendment regulation
- [Federal Reserve - Average Debit Interchange Fees](https://www.federalreserve.gov/paymentsystems/regii-average-interchange-fee.htm) - Published interchange data
- [Federal Reserve - Interchange Fee Standards](https://www.federalreserve.gov/paymentsystems/regii-interchange-fee-standards.htm) - Regulated vs exempt issuer lists

### Network Interchange Rates

- [Visa USA Interchange Reimbursement Fees (PDF)](https://usa.visa.com/dam/VCOM/download/merchants/visa-usa-interchange-reimbursement-fees.pdf) - Official Visa debit rates
- [Mastercard Interchange Programs and Rates](https://www.mastercard.us/en-us/business/overview/support/merchant-rates-2024.html) - Official Mastercard debit rates

### Industry Analysis

- [Federal Reserve Bank of Chicago - Debit Card Competition: Signature vs PIN](https://www.chicagofed.org/publications/chicago-fed-letter/2005/december-221) - Academic analysis of debit routing
- [U.S. Payments Forum - Debit Resources](https://www.uspaymentsforum.org/) - EMV and debit implementation guides
- [Electronic Transactions Association](https://www.electran.org/) - Payments industry association

### Technical Resources

- [PULSE Network](https://www.pulsenetwork.com/) - PULSE debit network information
- [STAR Network (Fiserv)](https://www.firstdata.com/en_us/products/merchant-solutions/debit-solutions.html) - STAR network documentation
- [NYCE Network (FIS)](https://www.fisglobal.com/) - NYCE network information

### Debit Routing Optimization

- [Merchant Cost Consulting - Debit Card Processing Fees](https://merchantcostconsulting.com/lower-credit-card-processing-fees/debit-card-processing-fees-explained/) - Practical fee analysis
- [Merchant Cost Consulting - PIN vs Signature Debit](https://merchantcostconsulting.com/lower-credit-card-processing-fees/pin-or-signature-debit/) - Comparison guide

---

*Previous: [Transaction Lifecycle Basics](./03-transaction-lifecycle.md)*
*Next: [Payment Processors](./05-payment-processors.md)*
