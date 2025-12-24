---
title: "Transaction Lifecycle Overview"
description: "Core concepts of the card transaction lifecycle from authorization to settlement"
sidebar_position: 1
sidebar_label: "Overview"
keywords: [transaction lifecycle, authorization, capture, clearing, settlement, funding, batch processing]
---

# Transaction Lifecycle Overview

Every card transaction follows a predictable lifecycle from the moment a card is swiped until the merchant receives funds. Understanding this lifecycle is critical for anyone building or operating payment systems.

## Overview

A card transaction moves through three distinct phases:

| Phase | Timing | What Happens |
|-------|--------|--------------|
| **Authorization** | 1-3 seconds | Real-time approval/decline decision |
| **Capture/Clearing** | End of day (batch) | Transaction details exchanged for settlement |
| **Funding/Settlement** | T+1 to T+3 days | Actual money movement between parties |

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    TRANSACTION LIFECYCLE OVERVIEW                           │
└─────────────────────────────────────────────────────────────────────────────┘

    PHASE 1                    PHASE 2                    PHASE 3
  AUTHORIZATION              CLEARING                   FUNDING
   (Real-time)              (Batch/EOD)               (T+1 to T+3)
       │                        │                         │
       ▼                        ▼                         ▼
┌─────────────┐          ┌─────────────┐          ┌─────────────┐
│   Approve   │          │   Submit    │          │   Money     │
│     or      │─────────▶│   Batch     │─────────▶│   Moves     │
│   Decline   │          │   Files     │          │             │
└─────────────┘          └─────────────┘          └─────────────┘

  "Can this                "Here are the            "Transfer the
   transaction              transactions             funds between
   proceed?"                from today"              accounts"
```

## Phase 1: Authorization

Authorization is the real-time process of getting approval for a transaction. This happens in 1-3 seconds.

### Step-by-Step Authorization Flow

```
                        AUTHORIZATION FLOW (1-3 seconds)
    ═══════════════════════════════════════════════════════════════════════

    CARDHOLDER          MERCHANT           ACQUIRER          NETWORK           ISSUER
         │                  │                  │                 │                │
         │  1. Present Card │                  │                 │                │
         │  (tap/swipe/dip) │                  │                 │                │
         │─────────────────▶│                  │                 │                │
         │                  │                  │                 │                │
         │                  │  2. Send Auth    │                 │                │
         │                  │     Request      │                 │                │
         │                  │─────────────────▶│                 │                │
         │                  │                  │                 │                │
         │                  │                  │  3. Route to    │                │
         │                  │                  │     Network     │                │
         │                  │                  │────────────────▶│                │
         │                  │                  │                 │                │
         │                  │                  │                 │  4. Route to   │
         │                  │                  │                 │     Issuer     │
         │                  │                  │                 │───────────────▶│
         │                  │                  │                 │                │
         │                  │                  │                 │                │ 5. Issuer
         │                  │                  │                 │                │    Checks:
         │                  │                  │                 │                │    • Balance
         │                  │                  │                 │                │    • Fraud
         │                  │                  │                 │                │    • Card status
         │                  │                  │                 │                │    • Limits
         │                  │                  │                 │                │
         │                  │                  │                 │  6. Response   │
         │                  │                  │                 │◀───────────────│
         │                  │                  │                 │    (Approved   │
         │                  │                  │  7. Response    │     or Declined)
         │                  │                  │◀────────────────│                │
         │                  │  8. Response     │                 │                │
         │                  │◀─────────────────│                 │                │
         │  9. "Approved"   │                  │                 │                │
         │◀─────────────────│                  │                 │                │
         │                  │                  │                 │                │
```

### Data Transmitted During Authorization

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AUTHORIZATION REQUEST MESSAGE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CARD DATA                          TRANSACTION DATA                        │
│  ─────────                          ────────────────                        │
│  • PAN (Card Number)                • Amount                                │
│  • Expiration Date                  • Currency Code                         │
│  • CVV/CVC (if CNP)                 • Date/Time                             │
│  • Track Data (if CP)               • Transaction Type                      │
│  • EMV Chip Data (if chip)          • Entry Mode (swipe/dip/tap/keyed)      │
│                                                                             │
│  MERCHANT DATA                      TERMINAL DATA                           │
│  ─────────────                      ─────────────                           │
│  • Merchant ID (MID)                • Terminal ID                           │
│  • Merchant Category Code (MCC)     • Terminal Capability                   │
│  • Merchant Name                    • POS Condition Code                    │
│  • Merchant Location                • Card Sequence Number                  │
│                                                                             │
│  ADDITIONAL DATA (varies)                                                   │
│  ───────────────────────                                                    │
│  • AVS Data (billing address)       • 3D Secure results                     │
│  • Level 2/3 Data (B2B)             • Recurring indicator                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### What the Issuer Checks

When the issuer receives an authorization request, they evaluate:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      ISSUER AUTHORIZATION CHECKS                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. CARD VALIDITY                                                           │
│     □ Is the card number valid?                                             │
│     □ Is the card not expired?                                              │
│     □ Is the card not blocked/cancelled?                                    │
│     □ Is the CVV correct? (if provided)                                     │
│                                                                             │
│  2. ACCOUNT STATUS                                                          │
│     □ Is the account in good standing?                                      │
│     □ Is there sufficient available credit/balance?                         │
│     □ Is the account not frozen?                                            │
│                                                                             │
│  3. FRAUD ANALYSIS                                                          │
│     □ Does location match cardholder patterns?                              │
│     □ Is amount consistent with spending history?                           │
│     □ Are there velocity concerns (many txns quickly)?                      │
│     □ Is MCC consistent with cardholder behavior?                           │
│     □ Risk score from fraud models                                          │
│                                                                             │
│  4. CARD RESTRICTIONS                                                       │
│     □ Is this merchant category allowed?                                    │
│     □ Is international usage allowed? (if cross-border)                     │
│     □ Is online usage allowed? (if CNP)                                     │
│     □ Are spending limits respected?                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Authorization Response Codes

When the issuer responds, they send a response code:

| Code | Name | Meaning | Action |
|------|------|---------|--------|
| **00** | Approved | Transaction authorized | Proceed with sale |
| **05** | Do Not Honor | Generic decline | Ask for another card |
| **14** | Invalid Card Number | PAN failed validation | Check card number |
| **41** | Lost Card | Card reported lost | Retain card if possible |
| **43** | Stolen Card | Card reported stolen | Retain card if possible |
| **51** | Insufficient Funds | Not enough balance/credit | Ask for another card |
| **54** | Expired Card | Card past expiration | Ask for another card |
| **57** | Transaction Not Permitted | Card restrictions | Try different card |
| **61** | Exceeds Withdrawal Limit | Over daily limit | Try smaller amount |
| **65** | Activity Limit Exceeded | Velocity limit hit | Wait and retry |
| **91** | Issuer Unavailable | System down | Retry later |

### Authorization Hold vs Actual Charge

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AUTHORIZATION HOLD vs ACTUAL CHARGE                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  AUTHORIZATION HOLD ("Auth Only")                                           │
│  ────────────────────────────────                                           │
│  • Reserves funds on the card but does NOT transfer money                   │
│  • Reduces available credit/balance immediately                             │
│  • Appears as "pending" on cardholder statement                             │
│  • NO interchange is charged yet                                            │
│  • Must be captured later to complete the transaction                       │
│                                                                             │
│  CAPTURE ("Auth + Capture" or "Sale")                                       │
│  ─────────────────────────────────────                                      │
│  • Completes the transaction                                                │
│  • Tells the issuer: "This transaction is final, move the money"            │
│  • Interchange fees are calculated                                          │
│  • Transaction included in settlement                                       │
│                                                                             │
│  WHY SEPARATE?                                                              │
│  ──────────────                                                             │
│  • Hotels: Auth at check-in, capture at checkout (final amount may vary)    │
│  • Gas pumps: Auth for $150, capture actual pump amount ($45)               │
│  • E-commerce: Auth at order, capture at shipment                           │
│  • Restaurants: Auth for meal, capture with tip added                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Authorization Validity Periods

Authorizations don't last forever. If not captured, they expire:

| Transaction Type | Visa Auth Validity | Mastercard Auth Validity |
|-----------------|-------------------|-------------------------|
| Standard retail | 7 days | 7 days |
| Card-not-present | 7 days | 7 days |
| Hotels/Lodging | 31 days | 30 days |
| Car rental | 31 days | 30 days |
| Cruise lines | 31 days | 30 days |
| Delayed delivery (e-commerce) | 30 days | 30 days |
| Recurring/subscription | Special rules | Special rules |

:::note 3D Secure Impact
While authorization typically takes 1-3 seconds, 3D Secure (Verified by Visa, Mastercard SecureCode) can add 5-20 seconds for CNP transactions requiring step-up authentication.
:::

**What happens when auth expires?**

- The hold drops off the cardholder's account
- Merchant can still capture, but risk of decline increases
- May result in a "late presentment" fee
- Issuer may decline if cardholder's available credit changed

## Phase 2: Capture and Clearing

After authorization, transactions must be captured and cleared before money can move.

### What is Capture?

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           WHAT IS CAPTURE?                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CAPTURE = "Finalize this transaction for settlement"                       │
│                                                                             │
│  When a merchant CAPTURES a transaction, they're saying:                    │
│  • "This sale is complete"                                                  │
│  • "Please include this in settlement"                                      │
│  • "Transfer the money from cardholder to me"                               │
│                                                                             │
│  CAPTURE TIMING BY BUSINESS TYPE:                                           │
│  ────────────────────────────────                                           │
│                                                                             │
│  Retail Store (CP):                                                         │
│  • Auth + Capture usually combined in single message                        │
│  • "Sale" transaction = auth and capture together                           │
│                                                                             │
│  E-commerce (CNP):                                                          │
│  • Auth at checkout (card validated, funds held)                            │
│  • Capture at shipment (goods dispatched to customer)                       │
│  • Gap can be hours to days                                                 │
│                                                                             │
│  Restaurant:                                                                │
│  • Auth for meal amount                                                     │
│  • Capture after tip added (different amount)                               │
│                                                                             │
│  Hotel:                                                                     │
│  • Pre-auth at check-in (estimated stay)                                    │
│  • Capture at checkout (final bill)                                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Batch Processing

Merchants typically don't send each capture individually. They batch them.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          BATCH PROCESSING                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Throughout the day, merchant processes transactions:                       │
│                                                                             │
│   9:15 AM   │  Auth+Capture │  $45.00   │  Visa     │  ████████4521        │
│  10:30 AM   │  Auth+Capture │  $127.50  │  MC       │  ████████8832        │
│  11:45 AM   │  Auth+Capture │  $23.00   │  Visa     │  ████████1199        │
│   1:00 PM   │  Auth+Capture │  $89.99   │  Amex     │  ████████5544        │
│   2:30 PM   │  Auth+Capture │  $156.00  │  Visa     │  ████████7766        │
│   4:15 PM   │  Auth+Capture │  $34.50   │  MC       │  ████████2211        │
│    ...      │     ...       │    ...    │   ...     │      ...             │
│                                                                             │
│  END OF DAY - BATCH CUTOFF TIME:                                            │
│  ───────────────────────────────                                            │
│                                                                             │
│  Cutoff times vary by processor and location:                               │
│  • East Coast merchants: typically 11:00 PM ET                              │
│  • West Coast merchants: 8:00 PM PT (11:00 PM ET)                           │
│  • Some processors: 6:00 PM local time                                      │
│  • Enterprise merchants: Negotiated (can be midnight or later)              │
│                                                                             │
│  IMPORTANT: Transaction timing affects funding!                             │
│  • 10:00 PM Friday (before cutoff) → Monday/Tuesday funding                 │
│  • 11:30 PM Friday (after cutoff) → Tuesday/Wednesday funding               │
│                                                                             │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                      BATCH SETTLEMENT                               │   │
│  │                                                                     │   │
│  │   Total Transactions:  47                                           │   │
│  │   Total Volume:        $4,521.75                                    │   │
│  │                                                                     │   │
│  │   By Network:                                                       │   │
│  │   • Visa:       28 txns    $2,890.25                                │   │
│  │   • Mastercard: 15 txns    $1,342.50                                │   │
│  │   • Amex:        4 txns    $289.00                                  │   │
│  │                                                                     │   │
│  │   Status: SUBMITTED TO PROCESSOR                                    │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  WHAT HAPPENS AFTER BATCH CLOSES:                                          │
│  ─────────────────────────────────                                          │
│  1. Processor receives batch file from merchant                             │
│  2. Processor sorts transactions by card network                            │
│  3. Processor submits to each network (Visa, MC, etc.)                      │
│  4. Networks route to respective issuers                                    │
│  5. Settlement calculated (who owes whom)                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### The Clearing Process

```
                           CLEARING PROCESS
    ═══════════════════════════════════════════════════════════════════════

    MERCHANT              PROCESSOR            NETWORK              ISSUER
         │                    │                   │                    │
         │  1. Submit Batch   │                   │                    │
         │   (all day's txns) │                   │                    │
         │───────────────────▶│                   │                    │
         │                    │                   │                    │
         │                    │  2. Format &      │                    │
         │                    │     Submit to     │                    │
         │                    │     Networks      │                    │
         │                    │──────────────────▶│                    │
         │                    │                   │                    │
         │                    │                   │  3. Calculate      │
         │                    │                   │     Net Positions  │
         │                    │                   │     & Route to     │
         │                    │                   │     Issuers        │
         │                    │                   │───────────────────▶│
         │                    │                   │                    │
         │                    │                   │                    │ 4. Issuer
         │                    │                   │                    │    converts
         │                    │                   │                    │    auth to
         │                    │                   │                    │    posted
         │                    │                   │                    │    charge
         │                    │                   │                    │
         │                    │                   │  5. Settlement     │
         │                    │                   │     Instructions   │
         │                    │                   │◀───────────────────│
         │                    │                   │                    │
         │                    │  6. Funding       │                    │
         │                    │     Instructions  │                    │
         │                    │◀──────────────────│                    │
         │                    │                   │                    │

    KEY CLEARING ACTIVITIES:

    • Transactions matched to original authorizations
    • Interchange fees calculated based on card type, MCC, etc.
    • Network assessment fees calculated
    • Net settlement positions determined
    • Cardholder statements updated (pending → posted)
```

## Phase 3: Funding (Settlement)

Funding is when actual money moves between bank accounts.

### Net Settlement Process

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      NET SETTLEMENT PROCESS                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Rather than moving money for each transaction, networks calculate          │
│  NET POSITIONS and settle the difference.                                   │
│                                                                             │
│  EXAMPLE - Single Day's Activity:                                           │
│  ─────────────────────────────────                                          │
│                                                                             │
│  ISSUER A (Chase) processed:                                                │
│  • $1,000,000 in cardholder purchases (owes acquirers)                      │
│  • $200,000 in merchant sales to their merchants (owed by acquirers)        │
│  • Net Position: OWES $800,000                                              │
│                                                                             │
│  ACQUIRER B (Wells Fargo) processed:                                        │
│  • $500,000 in merchant sales (owed by issuers)                             │
│  • $100,000 in cardholder purchases (owes issuers)                          │
│  • Net Position: OWED $400,000                                              │
│                                                                             │
│  NETWORK CALCULATES:                                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │   Chase owes $800,000 total                                         │   │
│  │   Wells Fargo owed $400,000                                         │   │
│  │   [Other parties make up the difference]                            │   │
│  │                                                                     │   │
│  │   Settlement: Chase wire transfers funds to network                 │   │
│  │               Network distributes to Wells Fargo and others         │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  WHY NET SETTLEMENT?                                                        │
│  ───────────────────                                                        │
│  • Moving $10M net is cheaper than moving $500M gross                       │
│  • Reduces counterparty risk                                                │
│  • More efficient use of capital                                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Funding Timelines

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FUNDING TIMELINES                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  TERMINOLOGY:                                                               │
│  • T = Transaction Date                                                     │
│  • T+1 = One business day after transaction                                 │
│  • T+2 = Two business days after transaction                                │
│                                                                             │
│  TYPICAL FUNDING SCHEDULES:                                                 │
│  ──────────────────────────                                                 │
│                                                                             │
│  ┌───────────────┬─────────────┬───────────────────────────────────────┐   │
│  │ Merchant Type │ Funding     │ Notes                                 │   │
│  ├───────────────┼─────────────┼───────────────────────────────────────┤   │
│  │ Large retail  │ T+1         │ Next business day                     │   │
│  │ Standard      │ T+2         │ Two business days                     │   │
│  │ E-commerce    │ T+2 to T+3  │ Higher risk = longer hold             │   │
│  │ High-risk     │ T+3 to T+7  │ Extended holds, reserves              │   │
│  │ New merchant  │ T+3 to T+7  │ Until processing history established  │   │
│  └───────────────┴─────────────┴───────────────────────────────────────┘   │
│                                                                             │
│  EXAMPLE TIMELINE:                                                          │
│  ─────────────────                                                          │
│                                                                             │
│  Monday:    Customer purchases $100 (authorization)                         │
│  Monday:    Merchant batches transactions at end of day (capture)           │
│  Tuesday:   Clearing process runs overnight                                 │
│  Wednesday: Merchant receives $97.50 (T+2 funding)                          │
│                                                                             │
│  WEEKEND/HOLIDAY IMPACT:                                                    │
│  ───────────────────────                                                    │
│  Friday batch → Monday clearing → Tuesday/Wednesday funding                 │
│  Saturday/Sunday transactions → Monday batch → Tuesday clearing             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### How Fees Are Deducted

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FEE DEDUCTION DURING FUNDING                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Merchants receive NET deposits - fees are already deducted.                │
│                                                                             │
│  EXAMPLE: $10,000 in Daily Sales                                            │
│  ─────────────────────────────────                                          │
│                                                                             │
│  Gross Sales:                                    $10,000.00                 │
│                                                                             │
│  Less: Interchange Fees (avg 1.80%)              -$180.00                   │
│  Less: Network Assessments (0.14%)               -$14.00                    │
│  Less: Processor/Acquirer Markup (0.50%)         -$50.00                    │
│  Less: Per-Transaction Fees (47 × $0.10)         -$4.70                     │
│                                                  ──────────                 │
│  Total Fees:                                     -$248.70 (2.49%)           │
│                                                                             │
│  NET DEPOSIT TO MERCHANT:                        $9,751.30                  │
│                                                                             │
│                                                                             │
│  FEE COLLECTION METHODS:                                                    │
│  ───────────────────────                                                    │
│                                                                             │
│  1. NET SETTLEMENT (most common)                                            │
│     • Fees deducted from each deposit                                       │
│     • Merchant receives net amount                                          │
│                                                                             │
│  2. GROSS + MONTHLY BILLING                                                 │
│     • Merchant receives gross deposits                                      │
│     • Fees billed monthly via ACH debit                                     │
│     • More common for large merchants                                       │
│                                                                             │
│  3. DAILY DISCOUNT                                                          │
│     • Percentage fee deducted daily                                         │
│     • Per-transaction fees billed monthly                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Key Terms Defined

| Term | Definition |
|------|------------|
| **Authorization** | Real-time process of getting approval from the issuer for a transaction. Results in a hold on funds but no money movement. |
| **Authorization Hold** | A temporary hold placed on cardholder funds that reduces available credit/balance. Not an actual charge. |
| **Capture** | The process of finalizing an authorized transaction for settlement. Tells the issuer to convert the hold to an actual charge. |
| **Batch** | A group of transactions submitted together for settlement, typically at end of business day. |
| **Clearing** | The process of exchanging transaction details between acquirers and issuers through the card network to calculate settlement amounts. |
| **Settlement** | The actual transfer of funds between financial institutions to fulfill payment obligations. |
| **Funding** | When the merchant's bank account receives the net proceeds from settled transactions. |
| **T+1, T+2** | Settlement timing notation. T = transaction date. T+1 = one business day after transaction. |

## Related Topics

- [The Four-Party Model](/ecosystem/fundamentals/four-party-model) - Participants and interchange economics
- [Card Network Role](/ecosystem/fundamentals/card-network-role) - Network rules, routing, and assessment fees
- [Debit Networks & Routing](/ecosystem/fundamentals/debit-networks-routing) - PIN vs signature debit
- [Payment Processors](/ecosystem/industry-players/payment-processors) - Processing infrastructure
- [Payment Gateways](/ecosystem/industry-players/payment-gateways/overview) - Tokenization and security
