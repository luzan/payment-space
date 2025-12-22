# The Four-Party Model

> **Last Updated:** 2025-12-18
>
> **Status:** Complete
>
> **Changes Log:**
> - 2025-12: Initial comprehensive notes with PayFac context

The Four-Party Model (also known as the Four-Corner Model) is the foundational structure of modern card payment networks. Understanding this model is essential for anyone building payment systems.

---

## Overview

The Four-Party Model consists of four main participants in every card transaction:

| Party | Role | Example |
|-------|------|---------|
| **Cardholder** | Consumer who uses the card | You, buying coffee |
| **Merchant** | Business accepting the payment | Starbucks |
| **Issuing Bank (Issuer)** | Bank that issued the card | Chase (your credit card bank) |
| **Acquiring Bank (Acquirer)** | Bank that enables merchant to accept cards | Wells Fargo Merchant Services |

The **[Card Network](./02-card-network-role.md)** (Visa, Mastercard) sits in the middle, facilitating communication between all parties.

---

## Visual Representation

### Basic Four-Party Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CARD NETWORK                                  │
│                        (Visa / Mastercard)                              │
│                                                                         │
│    Sets rules, routes transactions, manages disputes, collects fees     │
└─────────────────────────────────────────────────────────────────────────┘
                   ▲                               ▲
                   │                               │
                   │                               │
          ┌────────┴────────┐             ┌────────┴────────┐
          │  ISSUING BANK   │             │ ACQUIRING BANK  │
          │    (Issuer)     │             │   (Acquirer)    │
          │                 │             │                 │
          │ - Issues cards  │             │ - Enables card  │
          │ - Approves txns │             │   acceptance    │
          │ - Bears credit  │             │ - Bears merchant│
          │   risk          │             │   risk          │
          └────────┬────────┘             └────────┬────────┘
                   │                               │
                   │                               │
                   ▼                               ▼
          ┌─────────────────┐             ┌─────────────────┐
          │   CARDHOLDER    │────────────▶│    MERCHANT     │
          │                 │  purchases  │                 │
          │ - Uses card     │  goods or   │ - Sells goods/  │
          │ - Pays bill     │  services   │   services      │
          │   to issuer     │             │ - Receives      │
          │                 │             │   payment       │
          └─────────────────┘             └─────────────────┘
```

---

## Four-Party vs Three-Party Model

Before diving deeper, it's important to understand that not all card networks use the Four-Party Model.

### Three-Party Model (Closed-Loop)

American Express and Discover originally operated as **Three-Party** networks:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    THREE-PARTY MODEL (Closed-Loop)                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                      ┌─────────────────────┐                            │
│                      │   AMEX / DISCOVER   │                            │
│                      │                     │                            │
│                      │  Acts as BOTH:      │                            │
│                      │  • Issuer           │                            │
│                      │  • Acquirer         │                            │
│                      │  • Network          │                            │
│                      └──────────┬──────────┘                            │
│                                 │                                       │
│                    ┌────────────┴────────────┐                          │
│                    │                         │                          │
│                    ▼                         ▼                          │
│           ┌─────────────────┐       ┌─────────────────┐                 │
│           │   CARDHOLDER    │──────▶│    MERCHANT     │                 │
│           └─────────────────┘       └─────────────────┘                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Key Differences:**

| Aspect | Four-Party (Visa/MC) | Three-Party (AmEx/Discover) |
|--------|----------------------|----------------------------|
| **Network role** | Routes messages only | Issues cards + acquires merchants |
| **Interchange** | Paid issuer → acquirer | No interchange (internal) |
| **Merchant fees** | Lower (2.0-2.5%) | Higher (2.5-3.5%) |
| **Control** | Distributed | Centralized |

**Modern Reality:** Today, AmEx and Discover also license third-party issuers, making them quasi-four-party networks. But they still have proprietary acquiring arms.

**Why it matters for PayFac:**

- AmEx OptBlue program allows PayFacs to accept AmEx through their existing acquirer
- Different fee structures and chargeback rules apply for each network

---

## Transaction Flow

### Authorization Flow (Milliseconds to Seconds)

```
                              AUTHORIZATION FLOW
     ═══════════════════════════════════════════════════════════════════════════════

    CARDHOLDER          MERCHANT           ACQUIRER          NETWORK           ISSUER
         │                  │                  │                 │                │
         │  1. Tap/Swipe    │                  │                 │                │
         │─────────────────▶│                  │                 │                │
         │                  │  2. Auth Request │                 │                │
         │                  │─────────────────▶│                 │                │
         │                  │                  │  3. Route Auth  │                │
         │                  │                  │────────────────▶│                │
         │                  │                  │                 │  4. Verify &   │
         │                  │                  │                 │────────────────▶
         │                  │                  │                 │     Approve    │
         │                  │                  │                 │◀────────────────
         │                  │                  │  5. Response    │                │
         │                  │                  │◀────────────────│                │
         │                  │  6. Approval     │                 │                │
         │                  │◀─────────────────│                 │                │
         │  7. Confirmed    │                  │                 │                │
         │◀─────────────────│                  │                 │                │
         │                  │                  │                 │                │

    Typical Latency:
    • Optimal: 300-800ms
    • Acceptable: 1-2 seconds
    • Poor: 3+ seconds (network congestion or issuer delays)
```

### Authorization vs Capture vs Settlement

Many transactions involve multiple steps that are often confused:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              AUTHORIZATION → CAPTURE → CLEARING → SETTLEMENT                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. AUTHORIZATION (Real-time)                                               │
│     ───────────────────────────                                             │
│     • Issuer approves transaction and places HOLD on funds                  │
│     • No money moves yet                                                    │
│     • Hold typically lasts 7-30 days (issuer-dependent)                     │
│                                                                             │
│  2. CAPTURE (Same day or later)                                             │
│     ─────────────────────────────                                           │
│     • Merchant "captures" the authorized amount                             │
│     • Can be less than authorized amount                                    │
│     • Signals intent to collect funds                                       │
│                                                                             │
│  3. CLEARING (End of day)                                                   │
│     ─────────────────────────                                               │
│     • Network calculates net positions between banks                        │
│     • Interchange fees determined                                           │
│     • Transactions batched for settlement                                   │
│                                                                             │
│  4. SETTLEMENT (T+1 to T+3)                                                 │
│     ─────────────────────────                                               │
│     • Actual money moves between banks                                      │
│     • Merchant funded (minus fees)                                          │
│     • Cardholder's statement updated                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Real-World Examples:**

| Scenario | Authorization | Capture | Why? |
|----------|---------------|---------|------|
| **Restaurant** | $50 (meal) | $60 (meal + tip) | Tip added after auth |
| **Hotel** | $500 (deposit) | $350 (actual stay) | Final amount lower |
| **Gas station** | $100 (pre-auth) | $45 (pumped) | Actual amount unknown upfront |
| **E-commerce** | $100 | $100 | Captured at shipping |

**Key Point:** If a merchant authorizes but never captures, the hold releases after the issuer's timeout period (typically 7-30 days). This can frustrate cardholders who see "pending" charges.

### Settlement Flow

```
                           SETTLEMENT FLOW (T+1 to T+3)
    ════════════════════════════════════════════════════════════════════

      ISSUER             NETWORK            ACQUIRER           MERCHANT
         │                  │                  │                  │
         │                  │                  │  1. Batch Submit │
         │                  │                  │◀─────────────────│
         │                  │  2. Clearing     │                  │
         │                  │◀─────────────────│                  │
         │  3. Net Position │                  │                  │
         │◀─────────────────│                  │                  │
         │                  │                  │                  │
         │  4. Pay Acquirer │                  │                  │
         │  (minus fees)    │                  │                  │
         │─────────────────────────────────────▶                  │
         │                  │                  │  5. Pay Merchant │
         │                  │                  │  (minus fees)    │
         │                  │                  │─────────────────▶│
         │                  │                  │                  │
```

**Settlement Timing Varies:**

| Factor | Impact |
|--------|--------|
| **Card type** | Credit: T+1 to T+2; Debit: Often T+1 |
| **Merchant risk** | High-risk: T+5 to T+7 or rolling reserves |
| **Batch timing** | Batches after cutoff (5-6 PM EST) settle next cycle |
| **Weekends/holidays** | No settlement on non-business days |

---

## Deep Dive: Each Party's Role

### 1. Cardholder

The cardholder is the consumer who:

- Has a contractual relationship with the **issuing bank**
- Uses the card to make purchases
- Is responsible for paying the monthly bill
- Can dispute transactions (initiating [chargebacks](./03-transaction-lifecycle.md#when-things-go-wrong))

**Key Point:** The cardholder has NO direct relationship with the merchant's bank or the card network.

### 2. Merchant

The merchant is the business that:

- Has a contractual relationship with the **acquiring bank**
- Accepts card payments for goods/services
- Pays fees (Merchant Discount Rate) to accept cards
- Bears responsibility for valid transactions and fraud prevention

**Key Point:** The merchant receives the transaction amount MINUS fees, typically 1.5% - 3.5% of the sale.

### 3. Issuing Bank (Issuer)

The issuer is a financial institution that:

- Issues credit/debit cards to consumers
- Sets credit limits and terms
- Bears the **credit risk** (if cardholder doesn't pay)
- Approves or declines transactions in real-time
- Receives **interchange fees** on every transaction

**Examples:** Chase, Bank of America, Capital One, Citi

**Key Point:** The issuer makes money from:

- Interest on unpaid balances
- Annual fees
- Interchange fees (paid by the acquirer)

### 4. Acquiring Bank (Acquirer)

The acquirer is a financial institution that:

- Enables merchants to accept card payments
- Bears the **merchant risk** (chargebacks, fraud, merchant bankruptcy)
- Pays interchange fees to the issuer
- Funds the merchant (after deducting fees)
- Manages merchant underwriting and compliance

**Examples:** Chase Paymentech, Wells Fargo Merchant Services, Worldpay, Fiserv (see [Acquiring Banks](./07-acquiring-banks.md) and [Payment Processors](./05-payment-processors.md) for detailed coverage)

**Key Point:** The acquirer takes on significant risk. If a merchant processes fraudulent transactions and disappears, the acquirer is liable for chargebacks.

### 5. [Card Network](./02-card-network-role.md) (The "Fifth" Party)

Though called the "Four-Party Model," the network is essential:

- **Routes messages** between issuers and acquirers
- **Sets rules** all parties must follow
- **Calculates net positions** for settlement
- **Collects assessment fees** for network usage
- **Manages disputes** and arbitration

**Key Clarification:** Networks facilitate the exchange of funds and calculate net positions, but they don't hold merchant or cardholder funds. They instruct banks on how much to transfer.

**Examples:** Visa, Mastercard, Discover (network arm), UnionPay

---

## Money Flow: Where Do the Fees Go?

### Example: $100 Credit Card Purchase

```
┌──────────────────────────────────────────────────────────────────────────┐
│                         $100 TRANSACTION BREAKDOWN                       │
└──────────────────────────────────────────────────────────────────────────┘

                        Customer pays: $100.00
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                              FEE BREAKDOWN                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ INTERCHANGE FEE (to Issuer)                         ~$1.80 (1.8%)  │ │
│  │ ─────────────────────────────────────────────────────────────────  │ │
│  │ • Set by card networks (Visa/MC)                                   │ │
│  │ • Varies by card type, merchant category, transaction type         │ │
│  │ • Largest component of merchant fees                               │ │
│  │ • Premium rewards cards have HIGHER interchange (up to 3.3%)       │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ ASSESSMENT FEE (to Card Network)                    ~$0.16 (0.16%) │ │
│  │ ─────────────────────────────────────────────────────────────────  │ │
│  │ • Visa/Mastercard's fee for using their network                    │ │
│  │ • Includes both percentage-based and fixed components              │ │
│  │ • Also called "network fee" or "dues and assessments"              │ │
│  │ • Non-negotiable, set by networks                                  │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ ACQUIRER MARKUP (to Acquirer/Processor)             ~$0.54 (0.54%) │ │
│  │ ─────────────────────────────────────────────────────────────────  │ │
│  │ • Acquirer's profit margin                                         │ │
│  │ • This is the NEGOTIABLE portion                                   │ │
│  │ • May include processor fees if using third-party processor        │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│  TOTAL FEES (Merchant Discount Rate):                  $2.50 (2.5%)     │
│  ═══════════════════════════════════════════════════════════════════    │
│  MERCHANT RECEIVES:                                    $97.50           │
└─────────────────────────────────────────────────────────────────────────┘
```

*Note: Assessment fees include both percentage and fixed components. This is a simplified example.*

### Interchange Varies Significantly

Interchange is NOT a single rate. It varies by:

| Factor | Lower Interchange | Higher Interchange |
|--------|-------------------|-------------------|
| **Card type** | Basic debit | Premium rewards credit |
| **Transaction type** | Card-present (chip) | Card-not-present (online) |
| **Merchant category** | Grocery, utilities | Retail, e-commerce |
| **Data quality** | Level 2/3 data | Basic data |

**Actual Interchange Ranges:**

| Card Type | Typical Range |
|-----------|---------------|
| **Regulated debit** (Durbin) | 0.05% + $0.22 (capped) |
| **Unregulated debit** | 0.8% - 1.5% |
| **Consumer credit** | 1.4% - 2.4% |
| **Premium rewards credit** | 2.0% - 3.3% |
| **Commercial/corporate** | 2.5% - 3.5% |

**Example:** A Chase Sapphire Reserve transaction might have 2.95% interchange, while a regulated debit card from Chase is capped at $0.22 + 0.05%.

### Card-Present vs Card-Not-Present

Where and how the card is used affects interchange:

| Transaction Type | Example | Interchange Impact |
|------------------|---------|-------------------|
| **Card-present (CP)** | Chip inserted, tap-to-pay | Lower (lower fraud risk) |
| **Card-not-present (CNP)** | E-commerce, phone orders | Higher (higher fraud risk) |
| **Keyed-in** | Manually typed at terminal | Highest (highest risk) |

**Example Interchange Difference (Visa):**

- CPS Retail (chip): 1.43% + $0.05
- CPS E-commerce: 1.80% + $0.10
- Standard (non-qualified): 2.30% + $0.10

This is critical for PayFacs building software platforms that primarily process CNP transactions.

### Fee Flow Diagram

```
                              $100 Transaction
                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │     CARDHOLDER PAYS $100      │
                    │      (to Issuing Bank)        │
                    └───────────────┬───────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                            SETTLEMENT PROCESS                              │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ISSUER keeps $1.80                                                       │
│   (Interchange Fee)                                                        │
│        │                                                                   │
│        └──────────▶ Sends $98.20 to Card Network                           │
│                            │                                               │
│                            ▼                                               │
│                    NETWORK keeps $0.16                                     │
│                    (Assessment Fee)                                        │
│                            │                                               │
│                            └──────────▶ Sends $98.04 to Acquirer           │
│                                                │                           │
│                                                ▼                           │
│                                        ACQUIRER keeps $0.54                │
│                                        (Markup/Profit)                     │
│                                                │                           │
│                                                └──────────▶ MERCHANT       │
│                                                             receives       │
│                                                             $97.50         │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Authorization Response Codes

When a transaction is processed, the issuer returns a response code:

### Common Response Codes

| Code | Meaning | Recommended Action |
|------|---------|-------------------|
| **00** | Approved | Complete transaction |
| **05** | Do not honor | Generic decline, don't retry |
| **51** | Insufficient funds | Request alternate payment |
| **54** | Expired card | Request updated card |
| **55** | Incorrect PIN | Allow retry (max 3 attempts) |
| **57** | Transaction not permitted | Card restricted for this MCC |
| **59** | Suspected fraud | Do not retry, request alternate |
| **61** | Exceeds withdrawal limit | Try smaller amount or wait |
| **65** | Activity limit exceeded | Retry after 24h or call issuer |
| **N7** | CVV mismatch | Re-enter CVV |

**Key Point:** Merchants receive only the response code, not the specific reason. This protects cardholder privacy. A "Do not honor" (05) could mean fraud, account closure, or issuer policy.

### Soft Decline vs Hard Decline

| Type | Examples | Action |
|------|----------|--------|
| **Soft decline** | Insufficient funds, velocity limit | May retry later |
| **Hard decline** | Stolen card, account closed, fraud | Do NOT retry |

---

## Interchange Optimization

Merchants (and PayFacs) can reduce interchange costs through optimization:

### Level 2 and Level 3 Data

Passing additional transaction data qualifies for lower commercial card rates:

| Data Level | Required Fields | Savings |
|------------|-----------------|---------|
| **Level 1** | Basic card data | Standard rates |
| **Level 2** | + Tax amount, customer code, merchant postal code | 0.10-0.25% lower |
| **Level 3** | + Line item detail, product codes, quantities | 0.30-0.50% lower |

**Best for:** B2B transactions, government/corporate cards

### Other Optimization Tactics

1. **AVS/CVV verification** - Improves qualification, may lower rates
2. **Batch timing** - Close batches within 24 hours to avoid downgrades
3. **Correct MCC** - Ensure merchant category code matches actual business
4. **Address match** - AVS verification can improve interchange qualification
5. **Settle promptly** - Delayed capture can cause downgrades

---

## Cross-Border Transactions

International transactions involve additional fees:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      CROSS-BORDER TRANSACTION FEES                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Standard domestic fees:                              ~2.5%                 │
│                                                                             │
│  PLUS:                                                                      │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │ Currency conversion fee:                           1.0% - 3.0%         │ │
│  │ Cross-border assessment:                           0.40% - 1.00%       │ │
│  │ International service fee:                         0.20% - 0.40%       │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  TOTAL for cross-border:                              4.0% - 7.0%           │
│                                                                             │
│  Note: Rates vary by network, card type, and currency pair                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Additional Considerations:**

- **Different interchange schedules** by region
- **Regulatory differences** (Strong Customer Authentication in EU, etc.)
- **Settlement currency** impacts FX exposure

---

## The Durbin Amendment: Debit Interchange Caps

The Durbin Amendment (2010, part of Dodd-Frank) caps debit interchange for large banks. For comprehensive coverage of debit networks and routing, see [Debit Networks & Routing](./04-debit-networks-routing.md).

**Who It Affects:**

- Banks with **$10 billion+ in assets** ("regulated issuers")
- Examples: Chase, Bank of America, Wells Fargo, Citi

**The Cap:**

```text
Maximum: $0.22 + 0.05% of transaction amount
(+ $0.01 fraud adjustment if eligible)
```

**Impact:**

| Issuer Type | $100 Debit Transaction |
|-------------|------------------------|
| **Regulated** (Chase) | ~$0.27 interchange |
| **Unregulated** (local credit union) | ~$1.00+ interchange |

**Why It Matters:**

- Large banks earn ~70% less on debit vs credit
- This is why big banks push credit cards over debit
- Small banks/credit unions have competitive advantage in debit rewards
- Merchants save significantly on regulated debit (but some processors don't pass savings through)

---

## Honor All Cards Rule

A critical network rule that affects merchants:

**The Rule:** If a merchant accepts Visa, they must accept **ALL** Visa cards, including premium cards with higher interchange.

**Implications:**

- Merchants cannot selectively accept only low-interchange cards
- Cannot refuse premium rewards cards
- Creates cross-subsidy: cash/debit customers subsidize rewards cardholders

**Durbin Amendment Exception:**

- Merchants CAN set minimum transaction amounts up to $10
- Merchants CAN offer discounts for different payment types (cash vs card)
- Merchants CANNOT surcharge based on specific card type (in most states)

---

## Key Terms Defined

| Term | Definition |
|------|------------|
| **Issuer / Issuing Bank** | Financial institution that issues credit or debit cards to cardholders. Responsible for authorizing transactions and extending credit. |
| **Acquirer / Acquiring Bank** | Financial institution that enables merchants to accept card payments. Bears risk if merchant defaults on chargebacks. |
| **Interchange Fee** | Fee paid by acquiring bank to issuing bank on each transaction. Set by card networks. Ranges from 0.05% + $0.22 (regulated debit) to 3.3%+ (premium credit). |
| **Assessment Fee** | Fee charged by card networks (Visa, Mastercard) for using their infrastructure. Includes percentage and fixed components. Typically 0.13%-0.15% + per-transaction fees. |
| **Merchant Discount Rate (MDR)** | Total percentage fee charged to merchants. Includes interchange + assessment + acquirer markup. |
| **BIN/IIN** | Bank/Issuer Identification Number. First 6-8 digits of card number identifying the issuing institution. Industry transitioned to 8-digit IINs in 2022. |
| **Authorization** | Real-time approval from issuer to proceed with transaction. Places hold on funds. |
| **Capture** | Merchant's request to collect authorized funds. Can be same day or later. |
| **Settlement** | Actual movement of funds between banks. Typically T+1 to T+3. See [Transaction Lifecycle](./03-transaction-lifecycle.md). |
| **Chargeback** | Cardholder dispute that reverses a transaction. Merchant must prove transaction was valid. See [Transaction Lifecycle](./03-transaction-lifecycle.md#chargebacks-the-forced-reversal). |

---

## Why This Model Matters for PayFac

Understanding the Four-Party Model is critical for Payment Facilitators because:

1. **Risk Position**: PayFacs sit in the acquirer's position, inheriting merchant risk
2. **Fee Economics**: PayFacs must understand interchange to price their services
3. **Liability Chain**: When sub-merchants have chargebacks, the PayFac is liable
4. **Network Rules**: All parties must comply with Visa/Mastercard rules

### PayFac Position in the Model

```
Traditional Model:                    PayFac Model:
─────────────────                    ─────────────────

Merchant ◀──▶ Acquirer               Sub-Merchant ◀──▶ PayFac ◀──▶ Sponsor Bank
                                                        │
                                                        │ (PayFac assumes
                                                        │  acquirer-like
                                                        │  responsibilities)
                                                        ▼
                                                   Master Merchant
                                                      Account
```

### Sponsor Bank Relationship

**Critical concept:** PayFacs must have a **sponsor bank relationship**. The sponsor bank:

- Provides the **master merchant account**
- Holds **regulatory licenses** (state MTLs, federal registration)
- May hold **reserves** from the PayFac (5-10% of volume typical)
- Can **terminate the relationship** if risk thresholds exceeded
- Bears **ultimate regulatory responsibility**

**Examples of Sponsor Banks:** Wells Fargo, Fifth Third, Evolve Bank & Trust, Cross River Bank

### PayFac Responsibilities

As a PayFac, you assume acquirer-like responsibilities:

| Responsibility | Description |
|----------------|-------------|
| **Underwriting** | Vetting sub-merchants before onboarding |
| **First-line chargeback liability** | You pay chargebacks if sub-merchant can't |
| **Reserve management** | Holding funds from risky sub-merchants |
| **Compliance monitoring** | Ensuring sub-merchants follow network rules |
| **Fraud prevention** | Detecting and preventing fraudulent transactions |

**Key Point:** If a sub-merchant processes fraudulent transactions and disappears, the PayFac (not the sponsor bank) absorbs the chargeback losses first.

---

## Self-Assessment Questions & Answers

### Question 1: In a credit card transaction, who pays the interchange fee and who receives it?

**Answer:**

The **acquiring bank pays** the interchange fee, and the **issuing bank receives** it. This fee is deducted from the transaction amount before the merchant is funded. The interchange fee compensates the issuer for:

- Credit risk (lending money to the cardholder)
- Fraud protection
- Card rewards programs
- Transaction processing costs

### Question 2: Why does the acquiring bank take on risk when a merchant accepts a card payment?

**Answer:**

The acquiring bank takes on risk because:

1. **Chargeback Liability**: If a cardholder disputes a transaction and wins, the acquirer must return funds to the issuer. If the merchant can't cover this (bankrupt, fraudulent, or disappeared), the acquirer absorbs the loss.

2. **Merchant Fraud**: If a merchant processes fraudulent transactions or doesn't deliver goods/services, the acquirer is ultimately responsible.

3. **Settlement Timing**: The acquirer often funds merchants before receiving money from the issuer, creating a timing risk.

4. **Contractual Position**: The acquirer's agreement with the card network makes them responsible for their merchants' behavior.

This is why acquirers perform underwriting and require reserves from high-risk merchants.

### Question 3: What happens to a transaction if the issuing bank declines it? Where does the decline message originate?

**Answer:**

When an issuing bank declines a transaction:

1. The decline message **originates from the issuing bank** (issuer)
2. The issuer sends a decline response code through the card network
3. The network routes this to the acquirer/processor
4. The processor sends it to the payment gateway
5. The gateway communicates it to the merchant's POS/website
6. The customer sees "Card Declined"

**Common decline reasons:**

- Insufficient funds (code: 51)
- Incorrect CVV (code: N7)
- Expired card (code: 54)
- Suspected fraud (code: 59)
- Over credit limit (code: 61)

The merchant never knows the exact reason, just a generic code, to protect cardholder privacy.

### Question 4: A customer buys a $100 item. The merchant receives $97.50. Break down where the $2.50 went.

**Answer:**

| Recipient | Fee Type | Amount | Percentage |
|-----------|----------|--------|------------|
| **Issuing Bank** | Interchange Fee | $1.80 | 1.80% |
| **Card Network** (Visa/MC) | Assessment Fee | $0.16 | 0.16% |
| **Acquirer/Processor** | Markup | $0.54 | 0.54% |
| **Total Fees** | MDR | **$2.50** | **2.50%** |

**Breakdown:**

- **Interchange ($1.80)**: Non-negotiable, set by Visa/Mastercard, goes to issuer (e.g., Chase)
- **Assessment ($0.16)**: Non-negotiable, goes to Visa or Mastercard for network usage
- **Markup ($0.54)**: Negotiable, this is where the acquirer and processor make their profit

### Question 5: What is the difference between authorization and settlement?

**Answer:**

**Authorization:**

- Happens in real-time (milliseconds to seconds)
- Issuer approves or declines the transaction
- Places a HOLD on cardholder's available credit/balance
- No money actually moves yet
- Example: Hotel authorizes $500 when you check in

**Settlement:**

- Happens later (typically T+1 to T+3)
- Actual movement of funds between banks
- Merchant receives funds (minus fees)
- Cardholder's statement shows final charge
- Example: Hotel settles $350 when you check out

**Key difference:** Authorization is a promise to pay; settlement is actual payment. A merchant can authorize but never settle (transaction voided), or settle less than authorized (hotel example).

### Question 6: Why do premium rewards cards have higher interchange than basic cards?

**Answer:**

Premium rewards cards (like Chase Sapphire Reserve, AmEx Platinum) have higher interchange because:

1. **Funding rewards**: Higher interchange (2.5-3.3%) funds the 2-5% cashback/points programs
2. **Issuer economics**: Issuers need to cover the cost of rewards they pay out
3. **Consumer behavior**: Rewards cardholders spend more and prefer their rewards card
4. **No caps**: Unlike the EU/Australia, US has no credit card interchange caps
5. **Cross-subsidy**: Merchants pay more, effectively subsidizing rewards for cardholders

**The cycle:** Higher interchange → Better rewards → More card usage → Higher interchange. This creates an "interchange arms race" where card issuers compete on rewards funded by merchant fees.

---

## Key Takeaways

1. **Four parties, four relationships**: Cardholder → Issuer, Merchant → Acquirer, both connected through the Network

2. **Money flows opposite to goods**: Customer gets product, merchant gets money (minus fees)

3. **Risk is distributed**: Issuer bears credit risk, Acquirer bears merchant risk

4. **Interchange is king**: It's the largest fee component (1.4%-3.3% for credit) and drives industry economics

5. **Networks facilitate, not hold**: Visa/Mastercard route messages and calculate positions but don't hold funds

6. **Authorization ≠ Settlement**: Authorization is a promise; settlement is actual payment (T+1 to T+3)

7. **Card-present costs less**: CNP transactions have higher interchange due to fraud risk

8. **Durbin caps debit**: Large banks' debit interchange capped at $0.22 + 0.05%

9. **PayFacs inherit acquirer risk**: With a sponsor bank, PayFacs take on underwriting, chargebacks, and compliance

10. **Honor All Cards**: Merchants accepting Visa must accept ALL Visa cards, including premium

---

## Related Topics

- **[Card Network Role](./02-card-network-role.md)** - Deep dive into network infrastructure, BIN routing, and network rules
- **[Transaction Lifecycle](./03-transaction-lifecycle.md)** - Detailed authorization → capture → settlement flow
- **[Debit Networks & Routing](./04-debit-networks-routing.md)** - PIN vs signature debit, Durbin Amendment, least-cost routing
- **[Payment Processors](./05-payment-processors.md)** - The technical backbone connecting merchants to networks
- **[Payment Gateways](./06-payment-gateways.md)** - Secure transmission layer for payment data
- **[Acquiring Banks](./07-acquiring-banks.md)** - Merchant enablement and risk management
- **[ISOs](./08-isos.md)** - Independent Sales Organizations and merchant acquisition
- **[ISVs](./09-isvs.md)** - Software vendors with embedded payments

---

## References

### Official Interchange Rate Documentation

- [Visa USA Interchange Reimbursement Fees](https://usa.visa.com/support/merchant/library/repository/merchant-fees.html) - Official Visa interchange rate portal
- [Mastercard Interchange Programs and Rates](https://www.mastercard.us/en-us/business/overview/support/merchant-rates-2024.html) - Official Mastercard interchange schedules
- [Visa Merchant Regulations & Fees](https://usa.visa.com/support/small-business/regulations-fees.html) - Visa merchant fee overview

*Note: Interchange rates change periodically. Always verify current rates at official network portals.*

### Network Rules & Standards

- [Visa Core Rules and Visa Product and Service Rules](https://usa.visa.com/support/merchant/visa-rules.html) - Complete Visa rulebook
- [Mastercard Rules](https://www.mastercard.us/en-us/business/overview/support/rules.html) - Mastercard network standards

### Regulatory Resources

- [Federal Reserve Regulation II](https://www.federalreserve.gov/paymentsystems/regii-about.htm) - Debit interchange fee caps (Durbin Amendment)
- [CFPB Credit Card Market Report](https://www.consumerfinance.gov/data-research/research-reports/the-consumer-credit-card-market/) - Consumer protection and market analysis

### Industry Resources

- [Electronic Transactions Association (ETA)](https://www.electran.org/) - Payments industry association
- [Nilson Report](https://nilsonreport.com/) - Industry publication tracking payment card statistics
- [U.S. Payments Forum](https://www.uspaymentsforum.org/) - EMV and payments standards

---

## Further Reading

### Books

- **"Payments Systems in the U.S."** by Carol Coye Benson & Scott Loftesness - Comprehensive textbook on US payments
- **"Electronic Value Exchange"** by David Stearns - History of card networks and interchange

### Online Guides

- [Stripe: How Cards Work](https://stripe.com/guides/introduction-to-card-payments) - Developer-friendly overview
- [Merchant Cost Consulting: Interchange Rates](https://merchantcostconsulting.com/lower-credit-card-processing-fees/visa-interchange-rates/) - Detailed rate analysis
- [Helcim: Visa USA Interchange Rates](https://www.helcim.com/visa-usa-interchange-rates/) - Practical interchange breakdown

---

*Next Topic: [Card Network Role](./02-card-network-role.md)*
