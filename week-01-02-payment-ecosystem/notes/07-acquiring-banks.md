# Acquiring Banks

>
> **Last Updated:** 2025-12-21
>
> **Status:** Complete
>
> **Changes Log:**
> - 2025-12: Initial comprehensive notes with PayFac context and sponsor bank deep-dive
> - 2025-12-21: Payment-critic review applied - added acquirer/processor disambiguation, sponsor bank selection criteria, MALPB reality check, network monitoring programs, improved interchange examples

Acquiring banks are the financial institutions that enable merchants to accept card payments. They bear merchant risk, fund settlements, and serve as the critical link between merchants and card networks. For PayFac platforms, understanding acquiring banks (and their role as sponsor banks) is essential for building sustainable payment businesses.

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

**Key Distinction:** Acquiring banks are on the "merchant side" of the transaction, while issuing banks are on the "cardholder side." This distinction is fundamental to the [Four-Party Model](./01-four-party-model.md).

**Licensing Requirement:** Historically, only licensed banks (national or state-chartered depository institutions) could be principal members of Visa/Mastercard. However, as of 2024, **Georgia's MALPB (Merchant Acquiring Limited Purpose Bank) charter** allows non-depository [payment processors](./05-payment-processors.md) to obtain network membership directly. This represents a significant change enabling companies like Fiserv and Stripe to acquire without traditional sponsor banks.

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

For more on processors, see [Payment Processors](./05-payment-processors.md).

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
• "[ISO model](./08-isos.md)" emerges: Non-bank sales agents acquire merchants
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
| **2010s** | [PayFacs](./09-isvs.md#the-payfac-model) aggregate under master merchants | Square, Stripe |
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
          │                     │───────────────────────>│
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

For detailed transaction lifecycle, see [Transaction Lifecycle Basics](./03-transaction-lifecycle.md).

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
| **Regulatory Health** | Under enforcement = service disruption | Consent orders, CAMELS rating <3 | Clean exam reports, proactive compliance |
| **Risk Appetite** | Alignment with your merchant mix | Generic "low-risk only" stance | Industry expertise matching your vertical |
| **Technology Platform** | Integration complexity and cost | Legacy systems, manual processes | Modern APIs, real-time reporting |
| **Pricing Transparency** | Hidden fees kill margins | "Call for pricing", complex fee schedules | Published rate cards, predictable costs |
| **Track Record** | Sponsor failures kill your business | <2 years in sponsor business | 5+ years, multiple successful PayFac exits |
| **Contract Terms** | 10-year lock-in = risk | Unilateral termination clauses | Reasonable exits, performance SLAs |
| **Reserve Flexibility** | Capital efficiency | Fixed 30% reserve regardless of performance | Risk-based reserves, early release options |

**Reserve Negotiation Reality:**
- **Year 1:** Sponsor demands 20-30% reserves (you're unproven)
- **Year 2:** If <0.5% chargeback rate, negotiate down to 15%
- **Year 3+:** With clean track record, some PayFacs get to 5-10%
- **Scale leverage:** At $1B+ volume, some PayFacs negotiate **capped reserves** (e.g., $100M max regardless of volume)

> **Insider Tip:** Build reserve release milestones into your initial sponsor agreement. "After 12 months with <0.75% chargeback rate, reduce to 10%" prevents need for full contract renegotiation.

### Card Network Monitoring Programs

Acquirers must participate in network risk monitoring programs. Understanding these is critical for PayFacs:

**Visa Dispute Monitoring Program (VDMP):**
| Level | Chargeback Rate | Volume Threshold | Consequences |
|-------|----------------|------------------|--------------|
| **Standard** | ≥0.9% | AND ≥100 chargebacks/month | Warning, remediation required |
| **Excessive** | ≥1.8% | AND ≥1,000 chargebacks/month | Fines $25k-$100k/month, potential termination |

**Mastercard Excessive Chargeback Program (ECP):**
| Level | Chargeback Rate | Volume Threshold | Fines |
|-------|----------------|------------------|-------|
| **ECP** | ≥1.5% | AND ≥100 chargebacks/month | $5,000-$50,000/month |
| **High Excessive** | ≥3.0% | AND ≥300 chargebacks/month | $25,000-$200,000/month |

**Why This Matters for PayFacs:**
- High-chargeback sub-merchants can put entire PayFac platform at risk
- One bad sub-merchant at 5% chargeback rate can push aggregate ratio over threshold
- Sponsor banks monitor these programs closely; violations can trigger reserve increases or sponsorship termination
- PayFacs must implement robust sub-merchant monitoring to catch problems early

---

## Major Acquiring Banks: Detailed Comparison

### Chase Paymentech (JPMorgan Chase)

**Market Position:** #1 US merchant acquirer by volume ($2.7T+ in 2024)

```
+------------------------------------------------------------------------------+
|                       CHASE PAYMENTECH PROFILE                                |
+------------------------------------------------------------------------------+

OWNERSHIP: JPMorgan Chase (largest US bank)

TARGET MARKET:
• Enterprise merchants ($50M+ annual revenue)
• Strategic accounts (Fortune 500)
• Existing JPMorgan commercial banking clients

STRENGTHS:
┌────────────────────────────────────────────────────────────────────────────┐
│ ✓ Largest acquiring footprint in US (50B+ transactions annually)          │
│ ✓ Banking integration (treasury, lending, deposits bundled)               │
│ ✓ Financial stability (JPMorgan's balance sheet behind it)                │
│ ✓ Global capabilities (40+ countries)                                     │
│ ✓ Enterprise-grade security and compliance                                │
│ ✓ Advanced B2B capabilities (Level 2/3 data, virtual cards)               │
└────────────────────────────────────────────────────────────────────────────┘

WEAKNESSES:
┌────────────────────────────────────────────────────────────────────────────┐
│ ✗ Enterprise focus means SMB gets less attention                          │
│ ✗ Not a technology leader (innovation lags Stripe, Adyen)                 │
│ ✗ Complex onboarding (bank-style underwriting)                            │
│ ✗ Premium pricing for non-banking clients                                 │
│ ✗ Conservative risk appetite (won't serve high-risk)                      │
└────────────────────────────────────────────────────────────────────────────┘

PRICING (Enterprise):
• Interchange-plus: IC + 0.10-0.20% + $0.05-0.10
• Monthly platform fees: $50-$500+ (varies by features)
• Volume discounts at $50M+, $500M+, $1B+

WHEN TO CHOOSE:
• You're an enterprise with JPMorgan banking relationship
• You need global acquiring with bank stability
• You value integrated treasury/banking services
• You have $100M+ annual volume for best pricing

+------------------------------------------------------------------------------+
```

### Elavon (US Bank)

**Market Position:** #5 US acquirer, #2 bank-owned

```
+------------------------------------------------------------------------------+
|                          ELAVON PROFILE                                       |
+------------------------------------------------------------------------------+

OWNERSHIP: US Bancorp (5th largest US bank)
HEADQUARTERS: Atlanta, Georgia
CUSTOMERS: 1.3+ million merchants

TARGET MARKET:
• Mid-market merchants ($5M-$500M annual revenue)
• International merchants (strong Europe/Canada presence)
• Vertical specialists: Healthcare, hospitality, nonprofits, government

STRENGTHS:
┌────────────────────────────────────────────────────────────────────────────┐
│ ✓ Strong e-commerce/CNP capabilities (#4 in CNP volume)                   │
│ ✓ International reach (US, Europe, Canada)                                │
│ ✓ Vertical expertise (nonprofits, education, government)                  │
│ ✓ Competitive mid-market pricing                                          │
│ ✓ Bank-backed stability without enterprise-only focus                     │
│ ✓ Strong ISV/software partner program                                     │
└────────────────────────────────────────────────────────────────────────────┘

WEAKNESSES:
┌────────────────────────────────────────────────────────────────────────────┐
│ ✗ Less brand recognition than Chase, Stripe                               │
│ ✗ Technology less modern than fintechs                                    │
│ ✗ SMB/micro-merchant not a focus (Square, Stripe better)                  │
│ ✗ Enterprise accounts defer to Chase                                      │
└────────────────────────────────────────────────────────────────────────────┘

PRICING (Mid-Market):
• Interchange-plus: IC + 0.15-0.30% + $0.08-0.12
• Monthly fees: $25-$100
• Competitive rates for nonprofits, education

WHEN TO CHOOSE:
• You're a mid-market merchant ($5M-$100M revenue)
• You need international acquiring (especially Europe)
• You're in a vertical Elavon specializes in
• You want bank-backed stability at mid-market pricing

+------------------------------------------------------------------------------+
```

### Bank of America Merchant Services

**Market Position:** Top 10 US acquirer, #1 in J.D. Power satisfaction (2023)

```
+------------------------------------------------------------------------------+
|                   BANK OF AMERICA MERCHANT SERVICES                           |
+------------------------------------------------------------------------------+

OWNERSHIP: Bank of America (2nd largest US bank)
2023 REVENUE: ~$7 billion
STRUCTURE: Independent platform (ended Fiserv JV in 2020)

TARGET MARKET:
• Small to mid-market businesses (SMB focus)
• Existing Bank of America business banking clients
• Brick-and-mortar retail, restaurants, services

STRENGTHS:
┌────────────────────────────────────────────────────────────────────────────┐
│ ✓ #1 customer satisfaction (J.D. Power 2023)                              │
│ ✓ Strong SMB service and support                                          │
│ ✓ BofA banking integration (business checking, lending)                   │
│ ✓ Proprietary platform (post-Fiserv independence)                         │
│ ✓ Paze online checkout consortium member                                  │
└────────────────────────────────────────────────────────────────────────────┘

WEAKNESSES:
┌────────────────────────────────────────────────────────────────────────────┐
│ ✗ Less volume than Chase, Fiserv                                          │
│ ✗ Technology platform still maturing post-Fiserv                          │
│ ✗ Enterprise less of a focus                                              │
│ ✗ International capabilities limited vs peers                             │
└────────────────────────────────────────────────────────────────────────────┘

WHEN TO CHOOSE:
• You're an existing BofA business banking client
• Customer service quality is a priority
• You're SMB wanting bank-backed stability
• You value relationship-based pricing

+------------------------------------------------------------------------------+
```

### Wells Fargo Merchant Services

**Market Position:** Top 10 US acquirer, leading sponsor bank

```
+------------------------------------------------------------------------------+
|                   WELLS FARGO MERCHANT SERVICES                               |
+------------------------------------------------------------------------------+

OWNERSHIP: Wells Fargo (3rd largest US bank)
INFRASTRUCTURE: Powered by Fiserv partnership
2023 REVENUE: ~$4 billion

TARGET MARKET:
• Small to mid-market merchants
• Wells Fargo commercial banking clients
• PayFac/fintech sponsor relationships

STRENGTHS:
┌────────────────────────────────────────────────────────────────────────────┐
│ ✓ Fiserv technology platform (modern, full-featured)                      │
│ ✓ Leading sponsor bank for PayFacs                                        │
│ ✓ Embedded finance APIs (Manufacturer API, Dealer API)                    │
│ ✓ Wells Fargo banking integration                                         │
│ ✓ Strong B2B and commercial card capabilities                             │
└────────────────────────────────────────────────────────────────────────────┘

WEAKNESSES:
┌────────────────────────────────────────────────────────────────────────────┐
│ ✗ Dependent on Fiserv for technology (less control)                       │
│ ✗ Wells Fargo reputational challenges (post-scandals)                     │
│ ✗ Less differentiated vs. other Fiserv partners                           │
└────────────────────────────────────────────────────────────────────────────┘

SPONSOR BANK HIGHLIGHTS:
• Named leading fiscal sponsor (2024)
• Active PayFac sponsorship program
• Embedded finance products for OEMs, distributors

WHEN TO CHOOSE:
• You need a sponsor bank relationship
• You're a Wells Fargo commercial client
• You want Fiserv technology with bank backing
• You're building embedded payments (B2B, distribution)

+------------------------------------------------------------------------------+
```

### Comparison Matrix

| Factor | Chase Paymentech | Elavon | BofA Merchant | Wells Fargo MS |
|--------|------------------|--------|---------------|----------------|
| **Best For** | Enterprise, $100M+ | Mid-market, international | SMB, service quality | PayFac sponsor, B2B |
| **Volume Rank** | #1 | #5 | Top 10 | Top 10 |
| **Technology** | Proprietary | Proprietary | Proprietary | Fiserv-powered |
| **International** | Strong | Strong | Limited | Moderate |
| **Pricing** | Premium | Competitive | Mid-range | Competitive |
| **Sponsor Bank** | Limited | Limited | No | Yes (leading) |
| **Innovation** | Moderate | Moderate | Moderate | Moderate |

---

## 2024-2025 Market Dynamics

### Major Acquisitions and Restructuring

```
+------------------------------------------------------------------------------+
|                    2024-2025 ACQUIRING MARKET CHANGES                         |
+------------------------------------------------------------------------------+

1. CAPITAL ONE ACQUIRES DISCOVER (Regulatory Approval May 2025)
   ─────────────────────────────────────────────────────────────
   Deal Value: $35.3 billion (all-stock)

   TIMELINE:
   • Regulatory approval: May 2025 (Fed/OCC/Delaware)
   • Systems integration: Expected 18-24 months (Q2-Q3 2026)
   • Discover Network continues operating independently during integration

   IMPACT ON ACQUIRING:
   • Capital One gains Discover Network (fourth major US network)
   • Combined entity: Issuer + Acquirer + Network
   • Potential competitor to Visa/Mastercard duopoly
   • May offer lower interchange to attract merchants


2. GLOBAL PAYMENTS ACQUIRES WORLDPAY (In Progress)
   ─────────────────────────────────────────────────
   Net Purchase Price: $22.7 billion

   COMBINED ENTITY:
   • 6+ million merchants
   • 94 billion annual transactions
   • $3.7 trillion annual volume
   • 175+ countries

   PAYFAC IMPACT:
   • Larger PayFac-as-a-Service offering (Worldpay + GPN combined)
   • More competition to Stripe Connect
   • Potential for better pricing at scale


3. FIS STRATEGIC REPOSITIONING
   ────────────────────────────
   • Selling Worldpay stake to Global Payments
   • Acquiring Global Payments' Issuer Solutions for $13.5 billion
   • Exiting merchant acquiring, focusing on issuer processing

   LESSON:
   • Merchant acquiring and issuer processing require different expertise
   • Scale doesn't guarantee success across segments


4. MALPB CHARTERS (Georgia)
   ─────────────────────────
   Fiserv: Approved September 2024, processing since April 2024
   Stripe: Approved July 2024

   WHAT THIS MEANS:
   • Non-bank processors can now acquire directly
   • Bypass traditional sponsor bank relationships
   • Direct card network membership
   • Better economics for large processors

   PAYFAC IMPACT:
   • Large PayFacs may pursue own charter
   • Smaller PayFacs still need sponsor banks
   • May reduce sponsor bank market long-term

+------------------------------------------------------------------------------+
```

**MALPB Reality Check for PayFacs:**

While MALPB charters allow direct network membership without traditional bank licenses, they remain **impractical for most PayFacs**:

| Factor | Requirement | Reality |
|--------|-------------|---------|
| **Capital** | $5M minimum (Georgia) | Realistically need $50M+ for operations |
| **Regulatory Burden** | Federal Reserve supervision, state banking regs | Bank-level compliance infrastructure |
| **Ongoing Compliance** | Dedicated compliance, legal, risk teams | Think bank infrastructure, not startup |
| **Economic Threshold** | Makes sense at $10B+ annual volume | Where sponsor fees/restrictions become material |

**Bottom Line:** MALPBs benefit mega-processors (Fiserv, Stripe), not typical SaaS PayFacs processing $100M-$1B annually. For most PayFacs, the sponsor bank model remains the only practical option.

### Regulatory Developments

| Development | Status | Impact on Acquirers |
|-------------|--------|---------------------|
| **Debit Interchange Reduction** | Proposed (final rule expected Q2 2026) | ~30% reduction ($0.21→$0.145 cap); only affects regulated issuers ($10B+ assets) |
| **Durbin Threshold Increase** | In committee | $10B→$50B would reduce regulated issuers; uncertain passage |
| **Credit Card Competition Act** | Stalled in committee | If passed, routing choice for credit; low probability of passage |
| **DOJ vs Visa Antitrust** | Filed Sept 2024 | Alleges debit market monopolization; may increase routing competition |
| **Sponsor Bank Scrutiny** | Ongoing | Evolve enforcement action; heightened due diligence requirements |

### Technology Trends

```
+------------------------------------------------------------------------------+
|                     TECHNOLOGY TRENDS IN ACQUIRING                            |
+------------------------------------------------------------------------------+

1. EMBEDDED FINANCE
   ─────────────────
   • Banks offering APIs for non-financial companies
   • Payment processing becoming invisible, embedded in software
   • Fifth Third (Newline), Wells Fargo, Cross River leading
   • Every SaaS company can become a PayFac


2. REAL-TIME PAYMENTS
   ───────────────────
   • FedNow (launched 2023), RTP growing
   • Alternative to card rails for certain use cases
   • Acquirers must support multiple payment methods
   • 24% YoY growth in alternative rails


3. AI/ML FRAUD PREVENTION
   ───────────────────────
   • Real-time risk scoring standard
   • Chargeback reduction: -18% with AI tools
   • Acquirers compete on authorization rates
   • Data advantage for large acquirers


4. OMNICHANNEL UNIFICATION
   ────────────────────────
   • Single platform for online + in-store
   • Adyen, Stripe Terminal leading
   • Legacy acquirers struggling to unify channels
   • Customer expectations driving convergence

+------------------------------------------------------------------------------+
```

---

## PayFac Implications

### Why PayFacs Need Acquiring Banks

```
+------------------------------------------------------------------------------+
|              WHY PAYFACS CANNOT OPERATE WITHOUT ACQUIRING BANKS               |
+------------------------------------------------------------------------------+

CARD NETWORK RULES:
===================
• Only licensed banks can be principal members of Visa/Mastercard
• Principal membership required to acquire merchants
• Non-banks must partner with principal members

THE OPTIONS:
============

OPTION 1: Partner with Sponsor Bank (Most Common)
─────────────────────────────────────────────────
• PayFac registers under sponsor bank's membership
• Sponsor provides network access, settlement infrastructure
• PayFac handles merchant relationships, underwriting, support
• Cost: $100k-$500k/year + per-transaction fees + reserves

OPTION 2: Become a PayFac-as-a-Service Client (Easiest)
───────────────────────────────────────────────────────
• Use Stripe Connect, Adyen for Platforms, etc.
• Platform provider handles sponsor relationship
• Fastest time-to-market, least control
• Cost: Higher per-transaction fees (2.9% + $0.30 typical)

OPTION 3: Obtain Own Bank Charter (Hardest)
───────────────────────────────────────────
• Acquire or start a bank (ILC, MALPB, full bank charter)
• Direct network membership
• Full regulatory compliance burden
• Cost: $10M+ investment, 2+ years timeline
• Examples: Square (ILC), Stripe (MALPB), Fiserv (MALPB)

+------------------------------------------------------------------------------+
```

### The Sponsor-PayFac Relationship in Practice

```
+------------------------------------------------------------------------------+
|                   PAYFAC-SPONSOR BANK RELATIONSHIP                            |
+------------------------------------------------------------------------------+

STRUCTURE:
==========

         Card Network (Visa/Mastercard)
                    │
                    │ Network Membership
                    ▼
         ┌──────────────────────┐
         │    SPONSOR BANK      │
         │                      │
         │ • Holds network      │
         │   membership         │
         │ • Provides BIN       │
         │ • Settlement acct    │
         │ • Regulatory         │
         │   oversight          │
         │ • Holds PayFac       │
         │   reserves           │
         └──────────┬───────────┘
                    │
                    │ Sponsor Agreement
                    │ (5-10 year typical)
                    ▼
         ┌──────────────────────┐
         │       PAYFAC         │
         │                      │
         │ • Master Merchant    │
         │   Account            │
         │ • Onboards sub-      │
         │   merchants          │
         │ • Underwrites        │
         │ • Bears first-line   │
         │   chargeback risk    │
         │ • Holds sub-merchant │
         │   reserves           │
         │ • Provides platform  │
         └──────────┬───────────┘
                    │
          ┌─────────┼─────────┐
          │         │         │
          ▼         ▼         ▼
     Sub-Merch  Sub-Merch  Sub-Merch
        A          B          C


ONGOING RESPONSIBILITIES:
=========================

SPONSOR BANK:
• Quarterly/annual audits of PayFac
• Transaction monitoring (aggregate level)
• Reserve management
• Network compliance reporting
• Regulatory reporting
• Dispute resolution with networks

PAYFAC:
• Sub-merchant underwriting (KYC/KYB)
• Transaction monitoring (sub-merchant level)
• Chargeback handling (first line)
• Sub-merchant reserve management
• Customer support
• Platform development

SHARED:
• AML/BSA compliance
• Fraud prevention
• Risk program management
• PCI compliance oversight

+------------------------------------------------------------------------------+
```

### Reserve Flow Example

```
+------------------------------------------------------------------------------+
|                    RESERVE FLOW: SPONSOR ↔ PAYFAC ↔ SUB-MERCHANT              |
+------------------------------------------------------------------------------+

EXAMPLE SCENARIO:
• PayFac processes $10M/month across 1,000 sub-merchants
• Sponsor requires 10% rolling 180-day reserve from PayFac
• PayFac requires 10-20% reserve from sub-merchants (risk-based)

RESERVE STRUCTURE:
==================

Layer 1: Sub-Merchant Reserves (held by PayFac)
────────────────────────────────────────────────
• Low-risk sub-merchants: 0-5% reserve
• Medium-risk: 10% reserve
• High-risk: 20-30% reserve

Example Sub-Merchant (Medium Risk):
  Monthly Volume: $50,000
  Reserve Rate: 10%
  Monthly Holdback: $5,000
  After 6 months: $30,000 held
  Rolling release: Old funds out, new funds in


Layer 2: PayFac Reserve (held by Sponsor Bank)
──────────────────────────────────────────────
• PayFac aggregate volume: $10M/month
• Reserve rate: 10%
• Monthly holdback: $1M
• At steady state: $6M locked with sponsor

Total Capital Locked in Reserves:
────────────────────────────────
• Sub-merchant level: $3-6M (varies by risk mix)
• PayFac level: $6M
• TOTAL: $9-12M capital locked at steady state

WHY THIS MATTERS:
=================
• Reserves = working capital locked up
• PayFacs must raise capital for reserves (not just operating expenses)
• Sponsors require evidence of capital before onboarding PayFac
• Reserve release is negotiable (as track record builds)

+------------------------------------------------------------------------------+
```

---

## Self-Assessment Questions & Answers

### Question 2: Why does the acquiring bank take on risk when a merchant accepts a card payment?

**Answer:**

The acquiring bank takes on risk because of the **card network liability rules**:

1. **Chargeback Liability Chain:** When a cardholder disputes a transaction, the issuing bank credits the cardholder immediately. The issuer then initiates a chargeback through the network. The **acquirer is contractually obligated** to make the issuer whole. If the merchant cannot pay (bankrupt, fraud, disappeared), the acquirer absorbs the loss.

2. **Settlement Timing Risk:** Acquirers often fund merchants T+1 or T+2, before the chargeback window closes (typically 120 days). If chargebacks occur later, the merchant may not have funds to cover them.

3. **Merchant Fraud Risk:** If a merchant processes fraudulent transactions (e.g., charging stolen cards, not delivering goods), the acquirer faces losses when chargebacks arrive.

4. **Contractual Position:** The acquirer's membership agreement with card networks makes them responsible for all merchants they onboard. Networks don't pursue individual merchants; they hold the acquirer accountable.

**This is why:**
- Acquirers perform thorough underwriting before approving merchants
- High-risk merchants face reserves, volume caps, and higher pricing
- Acquirers monitor transaction patterns for fraud signals
- PayFacs (as aggregators) must provide substantial reserves to sponsor banks

### Question 4: A customer buys a $100 item. The merchant receives $97.50. Break down where the $2.50 went.

**Answer:**

The $2.50 represents the **Merchant Discount Rate (MDR)**, distributed as:

| Recipient | Fee Type | Amount | Percentage |
|-----------|----------|--------|------------|
| **Issuing Bank** | Interchange Fee | ~$1.80 | 1.80% |
| **Card Network** (Visa/MC) | Assessment Fee | ~$0.16 | 0.16% |
| **Acquiring Bank/Processor** | Acquirer Markup | ~$0.54 | 0.54% |
| **Total Fees** | MDR | **$2.50** | **2.50%** |

> **Note:** This is a simplified example using a mid-range consumer credit card. Actual interchange varies widely:
> - **Regulated debit:** 0.05% + $0.21 (Durbin cap)
> - **Basic credit:** 1.15% + $0.05
> - **Premium rewards cards:** 2.40-2.95% + $0.10
> - Network assessments also vary (Visa: ~0.13-0.15%, Mastercard: ~0.14%)

**Simplified Flow of Funds:**
1. Customer's issuing bank sends $98.20 to network ($100 - $1.80 interchange kept)
2. Network takes $0.16 assessment, sends $98.04 to acquirer
3. Acquirer deducts $0.54 markup, funds merchant $97.50

> **Technical Note:** In practice, network assessments are billed separately via monthly invoicing, not deducted from transaction flow. The diagram simplifies for clarity.

**Key Point for Acquirers:** The acquirer's margin ($0.54 in this example) must cover:
- Processing infrastructure costs
- Fraud prevention
- Chargeback handling
- Customer support
- Profit margin

For PayFacs, this margin is shared between the PayFac and sponsor bank.

See [Four-Party Model](./01-four-party-model.md) for detailed fee breakdown diagrams.

---

## Key Takeaways

1. **Acquirers enable card acceptance:** They provide merchants the ability to accept cards and bear the risk if merchants don't pay chargebacks.

2. **Bank license required:** Only licensed banks can be principal members of card networks. Non-banks must partner with bank sponsors.

3. **Risk is the acquirer's business:** Underwriting, reserves, and monitoring exist because acquirers bear ultimate chargeback liability.

4. **Bank-owned vs partnerships:** Chase and Elavon operate their own acquiring. Wells Fargo and PNC partner with Fiserv for technology.

5. **Sponsor banks are gatekeepers:** PayFacs cannot operate without sponsor banks (unless they obtain their own charter).

6. **Limited sponsor supply:** Only 15-20 active sponsors serve 1,000+ PayFacs/ISOs, creating a supply-demand imbalance.

7. **Reserves are expensive:** PayFacs may have 5-30% of volume locked in reserves with sponsors, plus sub-merchant reserves.

8. **Market is consolidating:** Capital One-Discover and Global Payments-Worldpay deals are reshaping the competitive landscape.

9. **MALPB changes the game:** Fiserv and Stripe are obtaining charters to bypass sponsors, but this remains accessible only to the largest processors.

10. **Sponsor relationship is strategic:** These are 5-10 year commitments. Choose carefully based on risk appetite, technology, and pricing.

---

## References

### Market Rankings and Research

- [Nilson Report](https://nilsonreport.com/) - Definitive source for acquirer rankings
- [U.S. Bank's Elavon 2025 Nilson Report Rankings](https://ir.usbank.com/news-events/news/news-details/2025/U-S--Banks-Elavon-Jumps-Two-Spots-in-2025-Nilson-Report-Ratings/default.aspx) - Elavon market position
- [UBS Merchant Acquiring Framework](https://www.ubs.com/global/en/investment-bank/insights-and-data/2024/us-merchant-acquiring-market-framework.html) - Market size and structure

### Major Acquirer Resources

- [Chase Paymentech](https://www.jpmorgan.com/merchant-services) - JPMorgan merchant services
- [Elavon](https://www.elavon.com/) - US Bank's acquiring arm
- [Bank of America Merchant Services](https://www.bankofamerica.com/smallbusiness/merchant-services/) - BofA acquiring
- [Wells Fargo Merchant Services](https://www.wellsfargo.com/biz/merchant-services/) - Wells Fargo acquiring

### Sponsor Bank and PayFac Resources

- [Cross River Acquiring BIN](https://www.crossriver.com/products/acquiring-bin) - Sponsor bank services
- [Stripe PayFac Guide](https://stripe.com/en-sg/guides/payfacs) - PayFac model explained
- [Stax: How to Find a Sponsor Bank](https://staxpayments.com/blog/sponsor-bank/) - Sponsor bank selection

### Regulatory and Compliance

- [Federal Reserve Regulation II](https://www.federalreserve.gov/paymentsystems/regii-about.htm) - Debit interchange rules
- [Visa Core Rules](https://usa.visa.com/support/merchant/visa-rules.html) - Network operating regulations
- [Mastercard Rules](https://www.mastercard.us/en-us/business/overview/support/rules.html) - Network standards

### Recent M&A and News

- [Capital One-Discover Acquisition](https://investor.capitalone.com/news-releases/news-release-details/capital-one-receives-final-regulatory-approvals-acquisition) - Deal completion
- [Global Payments Worldpay Acquisition](https://investors.globalpayments.com/news-events/press-releases/detail/469/global-payments-announces-agreements-to-acquire-worldpay) - Merger announcement
- [Payments Dive](https://www.paymentsdive.com/) - Industry news

### Industry Associations

- [Electronic Transactions Association (ETA)](https://www.electran.org/) - Payments industry trade association
- [Nacha](https://www.nacha.org/) - ACH network operator

---

*Previous Topic: [Payment Gateways](./06-payment-gateways.md)*

*Next Topic: [ISOs (Independent Sales Organizations)](./08-isos.md)*

---

## Related Topics

| Topic | Description |
|-------|-------------|
| [The Four-Party Model](./01-four-party-model.md) | Acquirer's role and interchange economics |
| [Card Network Role](./02-card-network-role.md) | Network membership and MATCH list |
| [Transaction Lifecycle](./03-transaction-lifecycle.md) | Settlement, funding, and chargebacks |
| [Debit Networks & Routing](./04-debit-networks-routing.md) | Durbin Amendment and debit interchange |
| [Payment Processors](./05-payment-processors.md) | Processor vs acquirer distinction |
| [Payment Gateways](./06-payment-gateways.md) | Gateway integration with acquirers |
| [ISOs](./08-isos.md) | ISO-acquirer relationships |
| [ISVs](./09-isvs.md) | PayFac model and sponsor bank requirements |
