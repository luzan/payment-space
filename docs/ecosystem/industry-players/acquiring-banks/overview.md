---
title: "Acquiring Banks Overview"
description: "Acquirer role, merchant underwriting, settlement, chargeback liability, and sponsor bank relationships"
sidebar_position: 1
sidebar_label: "Overview"
keywords:
  - acquiring bank
  - acquirer
  - merchant acquiring
  - sponsor bank
  - merchant underwriting
  - settlement
  - chargeback liability
  - reserves
  - network compliance
  - VDMP
  - ECP
  - PayFac sponsor
---

---

## Overview

An **acquiring bank** (also called an "acquirer" or "merchant bank") is a licensed financial institution that:

| Function | Description |
|----------|-------------|
| **Enables Card Acceptance** | Provides merchants the ability to accept credit/debit card payments |
| **Bears Merchant Risk** | Assumes liability for chargebacks if merchant can't pay |
| **Funds Settlements** | Transfers funds from card networks to merchants (minus fees) |
| **Ensures Compliance** | Maintains card network memberships and enforces network rules |
| **Underwrites Merchants** | Assesses merchant risk before and during the relationship |

**Key Distinction:** Acquiring banks are on the "merchant side" of the transaction, while issuing banks are on the "cardholder side." This distinction is fundamental to the Four-Party Model <!-- (/ecosystem/core-concepts/four-party-model not yet migrated) -->.

**Licensing Requirement:** Historically, only licensed banks (national or state-chartered depository institutions) could be principal members of Visa/Mastercard. However, as of 2024, **Georgia's MALPB (Merchant Acquiring Limited Purpose Bank) charter** allows non-depository [payment processors](/ecosystem/industry-players/payment-processors) to obtain network membership directly. This represents a significant change enabling companies like Fiserv and Stripe to acquire without traditional sponsor banks.

---

## Acquirer vs. Processor: Critical Distinction

Before diving deeper, it's worth distinguishing between acquirers and processors, two terms often confused in the industry:

| Aspect | Acquiring Bank | Processor |
|--------|----------------|-----------|
| **Legal Entity** | Licensed bank | Technology company (may or may not be bank) |
| **Network Membership** | Principal/Associate Member of Visa/MC | No direct membership (historically) |
| **Risk Bearing** | Bears merchant/chargeback risk | Typically no risk (unless also acquirer) |
| **Settlement** | Moves funds via network clearing | Routes transaction data only |
| **Regulatory Oversight** | Bank regulators (OCC, FDIC, Fed) | Limited (PCI, state licensing) |
| **Examples** | Wells Fargo, Chase, Elavon | Fiserv (pre-MALPB), First Data, Worldpay |

**Key Point:** Many entities are **both** (e.g., Chase Paymentech is acquirer + processor). Others are **acquirers partnering with separate processors** (e.g., Wells Fargo + Fiserv). Post-2024, some processors obtained MALPB charters to become acquirers directly (Fiserv, Stripe).

For more on processors, see [Payment Processors](/ecosystem/industry-players/payment-processors).

---

## Historical Evolution

### Origins: The Birth of Card Acquiring (1950s-1960s)

```
+------------------------------------------------------------------------------+
|                      THE EVOLUTION OF CARD ACQUIRING                          |
+------------------------------------------------------------------------------+

1950s: CHARGE CARDS EMERGE
==========================
1950: Diners Club launches first charge card
      • Single entity (closed-loop): issuer, acquirer, and network in one
      • Acquired merchants directly
      • No separation of functions

1958: BankAmericard Launches (Bank of America)
      • First widely-adopted bank card
      • Bank of America = Issuer + Acquirer + Network
      • Limited to California initially
      • Banks licensed to issue, creating franchise model

1960s: REGIONAL BANK LICENSING
==============================
1966: Bank of America licenses BankAmericard to other banks
      • First time issuing and acquiring separated
      • Licensed banks could ISSUE cards to their customers
      • Licensed banks could ACQUIRE merchants in their territory
      • Early "four-party" model emerges

1966: Interbank Card Association (IBA) founded
      • Eventually becomes Mastercard
      • Cooperative model: member banks jointly own network
      • Member banks each issue AND acquire

1970s: NETWORKS BECOME INDEPENDENT
==================================
1970: National BankAmericard Inc. (NBI) formed
      • Bank of America spins out network operations
      • Independent network separate from founding bank

1976: BankAmericard → VISA
      • Visa U.S.A. and Visa International formed
      • Clear separation: Network vs. Member Banks
      • Banks choose to issue, acquire, or both

1979: IBA rebrands to Mastercard
      • Similar cooperative structure

1980s-1990s: SPECIALIZATION ACCELERATES
=======================================
Key Developments:
• Electronic authorization replaces paper vouchers
• Processing becomes technology-intensive
• Banks outsource processing to third parties
• First Data Corporation founded (1971), becomes dominant processor
• "[ISO model](/ecosystem/industry-players/isos)" emerges: Non-bank sales agents acquire merchants
  but transactions processed via bank member

2000s-PRESENT: CONSOLIDATION AND FINTECH
=========================================
• Massive consolidation (thousands of acquirers → top 10 dominate)
• Non-bank processors achieve scale (Fiserv, Worldpay)
• PayFac model emerges (Square 2009, Stripe 2010)
• MALPB charters allow non-banks to acquire without sponsor (2024)

+------------------------------------------------------------------------------+
```

### Key Milestone: Separation of Acquiring from Issuing

In the early days, banks that issued cards to consumers also acquired merchants. This created a closed ecosystem but limited scale. The critical innovation was **separating these functions**:

| Era | Acquiring Model | Example |
|-----|-----------------|---------|
| **1950s** | Single entity does all | Diners Club |
| **1960s** | Regional bank licenses (issue + acquire in territory) | BankAmericard licensees |
| **1970s** | Networks become independent; banks specialize | Visa/Mastercard networks |
| **1980s** | ISOs emerge as sales/distribution layer | Non-bank merchant sales |
| **1990s** | Processors handle technology; banks hold licenses | First Data + Sponsor Banks |
| **2010s** | PayFacs <!-- (not yet migrated) --> aggregate under master merchants | Square, Stripe |
| **2020s** | MALPB charters allow processors to become acquirers directly | Fiserv, Stripe (Georgia) |

**Why This Matters for PayFacs:** The PayFac model is the latest evolution in the acquiring value chain. PayFacs sit between merchants and acquiring banks, assuming many acquirer-like responsibilities while the sponsor bank holds the regulatory licenses.

---

## The Acquirer's Role in Detail

### 1. Merchant Underwriting

Before approving a merchant, acquirers perform extensive due diligence:

```
+------------------------------------------------------------------------------+
|                    MERCHANT UNDERWRITING PROCESS                              |
+------------------------------------------------------------------------------+

INFORMATION GATHERED:
=====================
┌─────────────────────────────────────────────────────────────────────┐
│  BUSINESS VERIFICATION                                               │
│  • Legal business name and DBA                                       │
│  • Business address and contact information                          │
│  • Tax ID (EIN) or SSN for sole proprietors                         │
│  • Business license and registration                                 │
│  • Secretary of State verification                                   │
│  • Years in business                                                 │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│  PRINCIPAL VERIFICATION                                              │
│  • Owner/principal SSN and DOB                                       │
│  • Identity verification (driver's license, passport)                │
│  • Personal credit check                                             │
│  • Background check (criminal, civil litigation)                     │
│  • OFAC screening (sanctions lists)                                  │
│  • Politically Exposed Person (PEP) check                           │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│  FINANCIAL ASSESSMENT                                                │
│  • Bank statements (3-6 months)                                      │
│  • Processing history (if applicable)                                │
│  • Average ticket and monthly volume estimates                       │
│  • Refund/return policy                                              │
│  • Business model assessment                                         │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│  INDUSTRY/RISK ASSESSMENT                                            │
│  • Merchant Category Code (MCC) assignment                           │
│  • MATCH list check (terminated merchant file)                       │
│  • Industry risk classification                                      │
│  • Card-present vs card-not-present ratio                           │
│  • Cross-border transaction exposure                                 │
└─────────────────────────────────────────────────────────────────────┘

DECISION OUTCOMES:
==================
✓ APPROVED - Standard terms
✓ APPROVED with conditions:
  • Volume caps (e.g., $50k/month max)
  • Rolling reserve (5-20% held for 180 days)
  • Higher pricing for elevated risk
✗ DECLINED - Too risky or prohibited industry

+------------------------------------------------------------------------------+
```

### 2. Settlement and Funding

Acquirers coordinate the movement of funds from card networks to merchants:

```
+------------------------------------------------------------------------------+
|                      SETTLEMENT AND FUNDING FLOW                              |
+------------------------------------------------------------------------------+

DAY 0: AUTHORIZATION
====================
Customer pays $100 at merchant
  │
  ├─ Issuer authorizes transaction
  └─ No money moves yet (just approval)


DAY 0-1: CAPTURE & BATCHING
===========================
Merchant captures transaction (requests funds)
  │
  ├─ Transaction added to daily batch
  └─ Acquirer/processor receives batch at end of day


DAY 1: CLEARING
===============
Acquirer submits batch to card networks (Visa/Mastercard)
  │
  ├─ Network calculates net positions between banks
  ├─ Interchange determined for each transaction
  └─ Settlement instructions generated


DAY 1-2: SETTLEMENT (Funds Move)
================================

     Cardholder's              Card                  Acquirer's
     Issuing Bank             Network               Acquiring Bank
          │                     │                        │
          │  $100 - Interchange │                        │
          │  ($100 - $1.80)     │                        │
          │  = $98.20           │                        │
          │─────────────────────>                        │
          │                     │   $98.20 - Assessments │
          │                     │   ($98.20 - $0.16)     │
          │                     │   = $98.04             │
          │                     │───────────────────────&gt;│
          │                     │                        │
          │                     │                        │  Acquirer deducts
          │                     │                        │  markup ($0.54)
          │                     │                        │
          │                     │                        │  MERCHANT FUNDED
          │                     │                        │  $97.50
          │                     │                        │

SETTLEMENT TIMING BY RISK:
==========================
┌─────────────────┬────────────────┬─────────────────────────────────────┐
│ Merchant Risk   │ Funding Speed  │ Notes                               │
├─────────────────┼────────────────┼─────────────────────────────────────┤
│ Low (retail)    │ T+1 to T+2     │ Next-day funding common             │
│ Medium (e-comm) │ T+2 to T+3     │ Standard e-commerce                 │
│ High (travel)   │ T+7 to T+14    │ Delay to mitigate chargeback risk   │
│ Very High       │ After service  │ Funds held until service delivered  │
│                 │ delivered      │ (e.g., event tickets, pre-orders)   │
└─────────────────┴────────────────┴─────────────────────────────────────┘

+------------------------------------------------------------------------------+
```

For detailed transaction lifecycle, see [Transaction Lifecycle Basics<!-- (/ecosystem/core-concepts/transaction-lifecycle not yet migrated) -->.

### 3. Chargeback Liability and Risk

**The acquirer's most significant risk is chargeback liability:**

```
+------------------------------------------------------------------------------+
|                     CHARGEBACK LIABILITY CHAIN                                |
+------------------------------------------------------------------------------+

SCENARIO: Customer disputes $500 transaction
           Merchant cannot be reached or has no funds

TRADITIONAL ACQUIRER MODEL:
===========================

1. Cardholder disputes with Issuer
      │
      ▼
2. Issuer credits cardholder $500 and initiates chargeback
      │
      ▼
3. Network routes chargeback to Acquirer
      │
      ▼
4. Acquirer debits Merchant account $500 + $25 fee
      │
      ├─ IF Merchant has $525 in account → COVERED
      │
      └─ IF Merchant has $0 (bankrupt, fraud, disappeared)
              │
              ▼
         ACQUIRER ABSORBS $525 LOSS
         (This is the "merchant risk" acquirers bear)


PAYFAC MODEL - LAYERED LIABILITY:
=================================

1. Cardholder disputes with Issuer
      │
      ▼
2. Issuer initiates chargeback
      │
      ▼
3. Network routes to SPONSOR BANK (acquirer)
      │
      ▼
4. Sponsor Bank routes to PAYFAC
      │
      ▼
5. PayFac debits SUB-MERCHANT
      │
      ├─ IF Sub-Merchant has funds → COVERED
      │
      ├─ IF Sub-Merchant has no funds → DEBIT SUB-MERCHANT RESERVE
      │       │
      │       ├─ IF Reserve sufficient → COVERED
      │       │
      │       └─ IF Reserve insufficient → PAYFAC ABSORBS LOSS
      │
      └─ IF PayFac cannot pay → SPONSOR BANK ABSORBS LOSS
              │
              └─ Sponsor Bank debits PAYFAC RESERVE
                      │
                      └─ IF PayFac reserve insufficient → SPONSOR EATS LOSS

KEY INSIGHT:
============
• Sponsor bank holds PayFac reserves specifically for this scenario
• Typical reserve: 5-30% of monthly volume held for 180+ days
• This is why sponsor banks are extremely selective about PayFac partners

+------------------------------------------------------------------------------+
```

**Why Acquirers Bear This Risk:**

The card network rules place **ultimate liability on the acquirer**. When a merchant processes fraudulent transactions and disappears:

1. The issuer has already credited the cardholder
2. The network has already settled with the issuer
3. The acquirer is contractually obligated to make the issuer/network whole
4. If the merchant can't pay, the acquirer absorbs the loss

This is why underwriting, monitoring, and reserves exist: they protect the acquirer from catastrophic losses.

### 4. Reserve Management

Reserves are funds held to cover potential future losses:

```
+------------------------------------------------------------------------------+
|                         RESERVE TYPES AND CALCULATION                         |
+------------------------------------------------------------------------------+

TYPES OF RESERVES:
==================

1. ROLLING RESERVE
   ────────────────
   • Percentage of each transaction held for fixed period
   • Released on rolling basis (e.g., 6-month delay)

   Example: 10% Rolling 180-Day Reserve
   ┌─────────────────────────────────────────────────────────────┐
   │ Month 1: Process $100k → Hold $10k (release in Month 7)    │
   │ Month 2: Process $100k → Hold $10k (release in Month 8)    │
   │ Month 3: Process $100k → Hold $10k (release in Month 9)    │
   │ ...                                                        │
   │ Month 6: Process $100k → Hold $10k (release in Month 12)   │
   │                                                            │
   │ At steady state: $60k always held                          │
   │ (6 months × $10k/month)                                    │
   └─────────────────────────────────────────────────────────────┘


2. UPFRONT RESERVE
   ────────────────
   • Fixed amount deposited before processing begins
   • May be cash deposit or letter of credit

   Example: $50,000 upfront reserve
   • Merchant deposits $50k before first transaction
   • Released after relationship ends AND chargeback window closes


3. CAPPED RESERVE
   ───────────────
   • Like rolling reserve but with maximum amount

   Example: 10% Rolling Reserve, $100k Cap
   • Hold 10% until reserve reaches $100k
   • Once capped, no additional holdback
   • Still rolling release (old funds out, new funds in)


4. PACING RESERVE
   ───────────────
   • Triggers when merchant exceeds expected volume

   Example: Expected $100k/month, 20% pacing above $100k
   • Month 1: $100k processed → $0 held
   • Month 2: $150k processed → $10k held (20% of $50k over)

RESERVE RELEASE:
================
• Rolling reserves released on schedule (typically 180 days)
• Upfront reserves released 90-180 days after relationship ends
• Reserves can be "early released" with sponsor approval
• Reserve funds ARE merchant's money (liability on acquirer's books)

+------------------------------------------------------------------------------+
```

### 5. Network Compliance

Acquirers must maintain card network memberships and enforce rules:

| Requirement | Description |
|-------------|-------------|
| **Network Registration** | Principal or Associate member of Visa/Mastercard |
| **Annual Certification** | PCI DSS Level 1 compliance, network audits |
| **Risk Program Participation** | VDMP (Visa), ECP (Mastercard) monitoring |
| **Rule Enforcement** | Ensure merchants follow network operating regulations |
| **Dispute Management** | Handle chargebacks per network timelines |
| **Reporting** | Regular reporting to networks on merchant portfolio |

**If Acquirer Violates Rules:**
- Fines from networks ($5,000 - $100,000+ per violation)
- Increased monitoring and audits
- Potential loss of network membership (catastrophic for business)

---

## Bank-Owned vs Non-Bank Acquirers

### Bank-Owned Acquiring Operations

Some banks operate their own acquiring businesses:

```
+------------------------------------------------------------------------------+
|                    BANK-OWNED ACQUIRER STRUCTURE                              |
+------------------------------------------------------------------------------+

EXAMPLE: JPMorgan Chase / Chase Paymentech

                     ┌─────────────────────────────────────┐
                     │         JPMORGAN CHASE              │
                     │   (Bank Holding Company - BHC)      │
                     └──────────────────┬──────────────────┘
                                        │
              ┌─────────────────────────┼─────────────────────────┐
              │                         │                         │
              ▼                         ▼                         ▼
     ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
     │  CHASE BANK     │      │ CHASE PAYMENTECH │      │  JPM TREASURY   │
     │  (Retail Bank)  │      │  (Acquirer)      │      │  SERVICES       │
     │                 │      │                  │      │                 │
     │ • Consumer      │      │ • Merchant       │      │ • Corporate     │
     │   deposits      │      │   acquiring      │      │   treasury      │
     │ • Credit cards  │      │ • Processing     │      │ • Cash          │
     │ • Loans         │      │ • Settlement     │      │   management    │
     └─────────────────┘      └─────────────────┘      └─────────────────┘
              │                         │                         │
              └─────────────────────────┼─────────────────────────┘
                                        │
                              CROSS-SELL SYNERGIES:
                              ────────────────────
                     • Commercial bank client gets payment processing
                     • Payment processing client gets business banking
                     • Treasury services bundled with acquiring


ADVANTAGES OF BANK-OWNED:
=========================
✓ Direct network membership (no sponsor bank needed)
✓ Own settlement accounts (faster funding, lower cost)
✓ Cross-sell opportunities (banking + payments)
✓ Regulatory infrastructure already in place
✓ Brand trust and stability
✓ Can hold merchant reserves on own balance sheet

DISADVANTAGES:
==============
✗ Bank compliance culture slows innovation
✗ Risk-averse (won't serve high-risk merchants)
✗ Technology often lags fintechs
✗ Higher overhead costs
✗ Difficult to compete with nimble processors

+------------------------------------------------------------------------------+
```

### Processor-Bank Partnership Model

Many banks partner with processors for technology:

```
+------------------------------------------------------------------------------+
|                    PROCESSOR-BANK PARTNERSHIP MODEL                           |
+------------------------------------------------------------------------------+

EXAMPLE: Wells Fargo + Fiserv Partnership

┌───────────────────────────┐          ┌───────────────────────────┐
│      WELLS FARGO          │          │         FISERV            │
│      (Sponsor Bank)       │          │     (Processor)           │
│                           │          │                           │
│  PROVIDES:                │          │  PROVIDES:                │
│  • Bank charter/license   │          │  • Technology platform    │
│  • Network membership     │          │  • Transaction routing    │
│  • Settlement accounts    │          │  • Fraud detection        │
│  • Regulatory compliance  │          │  • Merchant portal        │
│  • Reserve management     │          │  • Reporting/analytics    │
│  • Brand                  │          │  • Gateway services       │
│                           │          │  • POS terminals          │
└─────────────┬─────────────┘          └─────────────┬─────────────┘
              │                                      │
              └─────────────────┬────────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │   WELLS FARGO         │
                    │   MERCHANT SERVICES   │
                    │   (Joint Offering)    │
                    │                       │
                    │   • Merchant brand    │
                    │   • Relationship mgmt │
                    │   • Pricing/contracts │
                    │   • First-line support│
                    └───────────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │       MERCHANT        │
                    │                       │
                    │   Sees: "Wells Fargo  │
                    │   Merchant Services"  │
                    │   Uses: Fiserv tech   │
                    └───────────────────────┘


WHY THIS MODEL EXISTS:
======================
• Processing technology is EXPENSIVE to build and maintain
• Banks don't want to compete with Fiserv on tech
• Fiserv doesn't want to become a bank (regulation)
• Partnership allows each party to focus on core competency

ECONOMICS:
==========
• Revenue split between bank and processor
• Processor typically takes technology fee (basis points + per-txn)
• Bank keeps remainder after network costs
• Customer sees single relationship with bank brand

OTHER EXAMPLES:
===============
• PNC Merchant Services (powered by Fiserv)
• US Bank + Elavon (though Elavon is bank-owned, uses some external tech)
• Many regional banks partner with Fiserv, Worldpay, or Global Payments

+------------------------------------------------------------------------------+
```

### Market Position Comparison

| Bank-Owned Acquirer | Parent Bank | 2024 Position | Strengths |
|---------------------|-------------|---------------|-----------|
| **Chase Paymentech** | JPMorgan Chase | #1 US ($2.7T+ volume) | Scale, enterprise, banking integration |
| **Elavon** | US Bank | #5 US, #2 bank-owned | International, CNP, midmarket |
| **Bank of America MS** | Bank of America | Top 10 | SMB focus, satisfaction leader |
| **Wells Fargo MS** | Wells Fargo | Top 10 | Fiserv tech, embedded finance |

---

## Sponsor Banks for PayFacs

### What is a Sponsor Bank?

A **sponsor bank** is an acquiring bank that provides PayFacs (and ISOs) access to card network membership:

```
+------------------------------------------------------------------------------+
|                     SPONSOR BANK vs ACQUIRING BANK                            |
+------------------------------------------------------------------------------+

ACQUIRING BANK (Traditional):
=============================

     Merchant ◀───────────▶ Acquiring Bank ◀───────────▶ Card Network
                  │
                  │
         Direct relationship
         Individual MID per merchant
         Bank underwrites each merchant


SPONSOR BANK (for PayFac):
==========================

     Sub-Merchant 1 ─────┐
                         │
     Sub-Merchant 2 ─────┼───▶ PayFac ◀───────▶ Sponsor Bank ◀───▶ Network
                         │        │
     Sub-Merchant 3 ─────┘        │
                                  │
                           Master Merchant
                             Account

THE KEY DISTINCTION:
====================
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ACQUIRING BANK:                    SPONSOR BANK:                            │
│  ────────────────                   ───────────────                          │
│  • Has direct merchant relationship • Has relationship with PayFac only     │
│  • Underwrites individual merchants • Underwrites the PayFac                 │
│  • Assigns MID to each merchant     • Assigns Master MID to PayFac           │
│  • Bears risk on each merchant      • Bears risk on PayFac aggregate         │
│  • Provides technology to merchants • Provides network access to PayFac      │
│                                                                              │
│  Same entity, different ROLE depending on relationship                       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘

+------------------------------------------------------------------------------+
```

### What Sponsor Banks Provide

```
+------------------------------------------------------------------------------+
|                    SPONSOR BANK SERVICES FOR PAYFACS                          |
+------------------------------------------------------------------------------+

1. NETWORK MEMBERSHIP & REGISTRATION
   ─────────────────────────────────
   • PayFac registered with Visa/Mastercard under sponsor's membership
   • Sponsor pays network registration fees (passes through to PayFac)
   • PayFac listed as sub-merchant of sponsor's master account

2. BIN SPONSORSHIP
   ─────────────────────────────────
   • BIN (Bank Identification Number) assigned to PayFac's transactions
   • All transactions route through sponsor's BIN
   • Sponsor's BIN appears in settlement files

3. SETTLEMENT INFRASTRUCTURE
   ─────────────────────────────────
   • Sponsor provides settlement accounts
   • Funds flow: Network → Sponsor → PayFac → Sub-merchants
   • Sponsor manages net settlement with networks

4. COMPLIANCE OVERSIGHT
   ─────────────────────────────────
   • Regular audits of PayFac operations
   • PCI compliance validation
   • AML/KYC program review
   • Network rule compliance monitoring
   • Transaction monitoring for fraud/risk

5. RESERVE MANAGEMENT
   ─────────────────────────────────
   • Sponsor holds reserves from PayFac
   • Reserves protect sponsor from PayFac default
   • Typical: 5-30% of monthly volume, 180-day rolling

6. REGULATORY COVERAGE
   ─────────────────────────────────
   • Sponsor's bank charter covers PayFac's activities
   • Sponsor reports to regulators on PayFac portfolio
   • Sponsor bears ultimate regulatory responsibility

+------------------------------------------------------------------------------+
```

### Major Sponsor Banks (2024-2025)

| Sponsor Bank | Assets | Notable Clients | Specialization |
|--------------|--------|-----------------|----------------|
| **Wells Fargo** | $1.9T | Major PayFacs | Full-service, embedded finance APIs |
| **Fifth Third (Newline)** | $215B | Stripe, Brex, ADP, Nuvei | BaaS platform, modern APIs |
| **Cross River** | ~$7B | Multiple PayFacs/ISOs | Fintech-focused, RTP/FedNow |
| **Evolve Bank & Trust** | ~$1.4B | Under Fed consent order (2024); restricted | BaaS, reduced sponsor activities |
| **Celtic Bank** | ~$1.2B | PayFacs, ISOs | Flexible, growth-stage friendly |

**Why So Few Sponsor Banks?**

```
+------------------------------------------------------------------------------+
|                    WHY SPONSOR BANK SUPPLY IS LIMITED                         |
+------------------------------------------------------------------------------+

MARKET REALITY:
===============
• ~1,000+ PayFacs/ISOs need sponsors
• Fewer than 100 banks actively sponsor
• Only ~15-20 banks are significant sponsors
• Creates supply-demand imbalance → sponsors can be selective

BARRIERS TO ENTRY:
==================

1. REGULATORY BURDEN
   • Sponsor is ultimately responsible for all sponsored entities
   • Bank regulators (OCC, FDIC, Fed) scrutinize sponsor programs
   • One bad PayFac can bring regulatory action on entire bank
   • Evolve Bank 2024: Fed enforcement action due to fintech oversight failures

2. OPERATIONAL COMPLEXITY
   • Need dedicated compliance team for PayFac oversight
   • Regular audits, site visits, transaction monitoring
   • 24/7 risk monitoring capabilities
   • Specialized legal expertise for sponsor agreements

3. CAPITAL REQUIREMENTS
   • Must hold capital against sponsored portfolio risk
   • Large reserves may be required by regulators
   • Concentration risk limits how much any one sponsor can take on

4. REPUTATIONAL RISK
   • PayFac fraud/compliance failures reflect on sponsor
   • Can damage bank's reputation with regulators and networks
   • Synapse/Evolve saga (2024) example of reputational damage

5. LIMITED UPSIDE FOR BANKS
   • Sponsor fees: ~$50k-$500k/year per PayFac
   • Risk: Potentially millions in losses if PayFac fails
   • Many banks conclude: "Not worth the headache"

RESULT:
=======
• Small number of specialized sponsor banks dominate
• High demand = premium pricing for sponsorship
• PayFacs compete for limited sponsor capacity
• Sponsor banks are highly selective on PayFac quality

+------------------------------------------------------------------------------+
```

### Sponsor Bank Requirements and Fees

**Typical PayFac Requirements from Sponsors:**

| Requirement | Typical Range | Notes |
|-------------|---------------|-------|
| **Minimum Volume** | $5M-$50M annual | Sponsors want scale |
| **Reserve** | 5-30% of monthly volume | Rolling 180 days |
| **PCI Compliance** | Level 1 Service Provider | Annual audit required |
| **AML Program** | Full BSA/AML program | FinCEN-registered MSB if applicable |
| **Insurance** | $1M-$10M E&O coverage | Errors and omissions, cyber |
| **Financial Audits** | Annual audited financials | Minimum 2 years operating history |
| **Background Checks** | All principals and key executives | Criminal, credit, OFAC |

**Typical Fee Structure:**

| Fee Type | Typical Range | When Charged |
|----------|---------------|--------------|
| **Setup/Onboarding** | $25,000-$100,000 | One-time at contract signing |
| **Annual Platform Fee** | $50,000-$250,000 | Annual fee for relationship |
| **Per-Transaction Fee** | 1-10 basis points | Per transaction |
| **Network Registration** | Pass-through | Visa/Mastercard fees |
| **Compliance/Audit** | $10,000-$50,000/year | Annual or as-needed |
| **Reserve Holdback** | 5-30% of volume | Monthly, rolling release |

**Total First-Year Cost Example (Mid-Size PayFac):**
- Setup: $50,000
- Annual fee: $100,000
- Per-transaction (on $100M volume): $50,000-$100,000
- Reserve (10% of $8.3M/month): ~$50M locked capital
- **Total cash required: $200,000+ fees, $50M+ reserves**

### Evaluating Sponsor Banks: Selection Criteria

| Criterion | Why It Matters | Red Flags | Green Flags |
|-----------|----------------|-----------|-------------|
| **Regulatory Health** | Under enforcement = service disruption | Consent orders, CAMELS rating less than 3 | Clean exam reports, proactive compliance |
| **Risk Appetite** | Alignment with your merchant mix | Generic "low-risk only" stance | Industry expertise matching your vertical |
| **Technology Platform** | Integration complexity and cost | Legacy systems, manual processes | Modern APIs, real-time reporting |
| **Pricing Transparency** | Hidden fees kill margins | "Call for pricing", complex fee schedules | Published rate cards, predictable costs |
| **Track Record** | Sponsor failures kill your business | Less than 2 years in sponsor business | 5+ years, multiple successful PayFac exits |
| **Contract Terms** | 10-year lock-in = risk | Unilateral termination clauses | Reasonable exits, performance SLAs |
| **Reserve Flexibility** | Capital efficiency | Fixed 30% reserve regardless of performance | Risk-based reserves, early release options |

**Reserve Negotiation Reality:**
- **Year 1:** Sponsor demands 20-30% reserves (you're unproven)
- **Year 2:** If below 0.5% chargeback rate, negotiate down to 15%
- **Year 3+:** With clean track record, some PayFacs get to 5-10%
- **Scale leverage:** At $1B+ volume, some PayFacs negotiate **capped reserves** (e.g., $100M max regardless of volume)

> **Insider Tip:** Build reserve release milestones into your initial sponsor agreement. "After 12 months with below 0.75% chargeback rate, reduce to 10%" prevents need for full contract renegotiation.

### Card Network Monitoring Programs

Acquirers must participate in network risk monitoring programs. Understanding these is critical for PayFacs:

**Visa Dispute Monitoring Program (VDMP):**
| Level | Chargeback Rate | Volume Threshold | Consequences |
|-------|----------------|------------------|--------------|
| **Standard** | 0.9% or higher | AND 100 or more chargebacks/month | Warning, remediation required |
| **Excessive** | 1.8% or higher | AND 1,000 or more chargebacks/month | Fines $25k-$100k/month, potential termination |

**Mastercard Excessive Chargeback Program (ECP):**
| Level | Chargeback Rate | Volume Threshold | Fines |
|-------|----------------|------------------|-------|
| **ECP** | 1.5% or higher | AND 100 or more chargebacks/month | $5,000-$50,000/month |
| **High Excessive** | 3.0% or higher | AND 300 or more chargebacks/month | $25,000-$200,000/month |

**Why This Matters for PayFacs:**
- High-chargeback sub-merchants can put entire PayFac platform at risk
- One bad sub-merchant at 5% chargeback rate can push aggregate ratio over threshold
- Sponsor banks monitor these programs closely; violations can trigger reserve increases or sponsorship termination
- PayFacs must implement robust sub-merchant monitoring to catch problems early

---

