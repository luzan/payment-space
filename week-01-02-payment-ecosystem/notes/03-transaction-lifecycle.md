# Transaction Lifecycle Basics

> **Last Updated:** 2025-12-18
>
> **Status:** Complete
>
> **Changes Log:**
> - 2025-12: Initial comprehensive notes with chargeback lifecycle details

Every card transaction follows a predictable lifecycle from the moment a card is swiped until the merchant receives funds. Understanding this lifecycle is critical for anyone building or operating payment systems.

---

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

---

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

### Pre-Authorization vs Final Authorization

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              PRE-AUTHORIZATION vs FINAL AUTHORIZATION                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PRE-AUTHORIZATION                                                          │
│  ─────────────────                                                          │
│  • Used when final amount is unknown                                        │
│  • Common in: Hotels, car rentals, gas pumps, restaurants                   │
│  • Often for an estimated or maximum amount                                 │
│  • Creates a hold on funds                                                  │
│                                                                             │
│  Example: Hotel Pre-Auth                                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Day 1: Check-in                                                     │   │
│  │        Pre-auth for $500 (3 nights × $150 + incidentals)            │   │
│  │        Cardholder sees: "Pending $500"                              │   │
│  │                                                                     │   │
│  │ Day 3: Checkout                                                     │   │
│  │        Final bill: $425 (room + minibar)                            │   │
│  │        Capture $425, release $500 pre-auth                          │   │
│  │        Cardholder sees: "Posted $425"                               │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  FINAL AUTHORIZATION                                                        │
│  ───────────────────                                                        │
│  • Used when exact amount is known                                          │
│  • Common in: Retail, e-commerce (after checkout)                           │
│  • Can be Auth + Capture combined (single message)                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Partial and Incremental Authorizations

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│           PARTIAL AND INCREMENTAL AUTHORIZATIONS                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PARTIAL AUTHORIZATION                                                      │
│  ─────────────────────                                                      │
│  Used when cardholder has insufficient funds for full amount.               │
│                                                                             │
│  Example - Gas Station:                                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Pump requests $100 authorization                                    │   │
│  │ Card only has $45 available                                         │   │
│  │ Issuer responds: "Approved for $45"                                 │   │
│  │ Pump dispenses up to $45 in gas                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Industries using partial auth:                                             │
│  • Gas stations                                                             │
│  • Prepaid cards                                                            │
│  • Gift cards                                                               │
│  • Split-tender transactions                                                │
│                                                                             │
│                                                                             │
│  INCREMENTAL AUTHORIZATION                                                  │
│  ─────────────────────────                                                  │
│  Extending an existing authorization when final amount increases.           │
│                                                                             │
│  Example - Hotel:                                                           │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Day 1: Pre-auth $500 (3 nights estimated)                           │   │
│  │ Day 2: Guest extends stay - incremental auth +$150                  │   │
│  │ Checkout: Final auth total $650, capture $620                       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Requirements:                                                              │
│  • Must reference original authorization                                    │
│  • Must occur before original auth expires                                  │
│  • Common in: Hospitality, car rental, restaurants (tip adjust)             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Authorization Reversals

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                      AUTHORIZATION REVERSALS                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  WHAT IT IS:                                                                │
│  ───────────                                                                │
│  A message sent to CANCEL a previous authorization and release the hold.    │
│                                                                             │
│  WHEN TO USE:                                                               │
│  ────────────                                                               │
│  • Customer cancels order before shipment                                   │
│  • Duplicate authorization created                                          │
│  • Incorrect amount authorized                                              │
│  • Transaction voided before capture                                        │
│                                                                             │
│  HOW IT WORKS:                                                              │
│  ─────────────                                                              │
│                                                                             │
│  Normal Flow (without reversal):                                            │
│  • Authorization creates hold                                               │
│  • Hold remains until capture OR expiration (7 days)                        │
│  • Customer funds tied up even if order cancelled                           │
│                                                                             │
│  With Reversal:                                                             │
│  • Authorization creates hold                                               │
│  • Reversal sent within minutes/hours                                       │
│  • Hold drops within 24 hours (often immediately)                           │
│                                                                             │
│  BENEFITS:                                                                  │
│  ─────────                                                                  │
│  • Better customer experience (funds available immediately)                 │
│  • Prevents "pending charge" customer service calls                         │
│  • No interchange charged                                                   │
│  • No settlement issues                                                     │
│                                                                             │
│  REQUIREMENTS:                                                              │
│  ─────────────                                                              │
│  • Must include original authorization code                                 │
│  • Should be sent within 24 hours (some networks require 30 minutes)        │
│  • Not all processors support reversals                                     │
│                                                                             │
│  REAL-WORLD EXAMPLE:                                                        │
│  ───────────────────                                                        │
│                                                                             │
│  With Reversal:                      │  Without Reversal:                   │
│  ─────────────────────────────────────┼──────────────────────────────────── │
│  10:00 AM: Order placed, auth $150   │  10:00 AM: Order placed, auth $150  │
│  10:15 AM: Customer cancels          │  10:15 AM: Customer cancels         │
│  10:20 AM: Reversal sent             │  (merchant just doesn't capture)    │
│  10:21 AM: Hold released             │  Day 7: Hold finally expires        │
│  Customer happy                      │  Customer frustrated for a week     │
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

> **Note on 3D Secure:** While authorization typically takes 1-3 seconds, 3D Secure (Verified by Visa, Mastercard SecureCode) can add 5-20 seconds for CNP transactions requiring step-up authentication.

**What happens when auth expires?**

- The hold drops off the cardholder's account
- Merchant can still capture, but risk of decline increases
- May result in a "late presentment" fee
- Issuer may decline if cardholder's available credit changed

---

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

### Settlement File Contents

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       SETTLEMENT FILE CONTENTS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  TRANSACTION RECORD (for each transaction):                                 │
│  ──────────────────────────────────────────                                 │
│  • Original authorization code                                              │
│  • Card number (tokenized/encrypted)                                        │
│  • Transaction amount                                                       │
│  • Transaction date/time                                                    │
│  • Merchant ID                                                              │
│  • Terminal ID                                                              │
│  • Entry mode (CP/CNP)                                                      │
│  • Card type and BIN                                                        │
│                                                                             │
│  CALCULATED FIELDS:                                                         │
│  ─────────────────                                                          │
│  • Interchange fee (based on card type, MCC, entry mode)                    │
│  • Network assessment fee                                                   │
│  • Net amount due to merchant                                               │
│                                                                             │
│  BATCH SUMMARY:                                                             │
│  ─────────────                                                              │
│  • Total transaction count                                                  │
│  • Total gross volume                                                       │
│  • Total fees                                                               │
│  • Net settlement amount                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

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

---

## Complete Money Flow Example

Let's trace a $100 credit card purchase from start to finish.

### Timeline: $100 Purchase at Coffee Shop

```
┌─────────────────────────────────────────────────────────────────────────────┐
│            COMPLETE $100 TRANSACTION LIFECYCLE                              │
└─────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════
PHASE 1: AUTHORIZATION (Tuesday 9:15 AM - 2 seconds)
═══════════════════════════════════════════════════════════════════════════════

Customer taps Visa card for $100 coffee order

    Customer          Coffee Shop         Processor         Visa           Chase
        │                  │                  │               │               │
        │   Tap Card       │                  │               │               │
        │─────────────────▶│                  │               │               │
        │                  │  Auth Request    │               │               │
        │                  │  $100.00         │               │               │
        │                  │─────────────────▶│               │               │
        │                  │                  │──────────────▶│               │
        │                  │                  │               │──────────────▶│
        │                  │                  │               │               │
        │                  │                  │               │  ✓ Card valid │
        │                  │                  │               │  ✓ $2,500     │
        │                  │                  │               │    available  │
        │                  │                  │               │  ✓ No fraud   │
        │                  │                  │               │               │
        │                  │                  │               │◀──────────────│
        │                  │                  │◀──────────────│  APPROVED     │
        │                  │◀─────────────────│               │  Auth: 847291 │
        │   "Approved"     │                  │               │               │
        │◀─────────────────│                  │               │               │
        │                  │                  │               │               │

    RESULT:
    • $100 hold placed on customer's card
    • Customer's available credit: $2,500 → $2,400
    • NO MONEY HAS MOVED YET
    • Authorization code 847291 recorded

═══════════════════════════════════════════════════════════════════════════════
PHASE 2: CAPTURE & CLEARING (Tuesday 11:00 PM - overnight)
═══════════════════════════════════════════════════════════════════════════════

Coffee shop closes batch at end of day (includes our $100 transaction)

    Coffee Shop         Processor            Visa              Chase
        │                  │                   │                  │
        │  BATCH CLOSE     │                   │                  │
        │  (157 txns)      │                   │                  │
        │  ($8,432 total)  │                   │                  │
        │─────────────────▶│                   │                  │
        │                  │                   │                  │
        │                  │  Submit to Visa   │                  │
        │                  │  (93 Visa txns)   │                  │
        │                  │──────────────────▶│                  │
        │                  │                   │                  │
        │                  │                   │  Clear to Chase  │
        │                  │                   │  (incl. $100)    │
        │                  │                   │─────────────────▶│
        │                  │                   │                  │
        │                  │                   │                  │ Convert
        │                  │                   │                  │ "pending"
        │                  │                   │                  │ to
        │                  │                   │                  │ "posted"
        │                  │                   │                  │

    RESULT:
    • Customer's statement: "Pending" → "Posted $100.00"
    • Interchange calculated: $1.80 (1.80% for rewards card)
    • Settlement positions calculated
    • Fees allocated to each party

═══════════════════════════════════════════════════════════════════════════════
PHASE 3: FUNDING (Wednesday - money moves)
═══════════════════════════════════════════════════════════════════════════════

    Chase (Issuer)         Visa Network         Acquirer           Coffee Shop
          │                     │                   │                   │
          │  Net Settlement     │                   │                   │
          │  $98.05 owed        │                   │                   │
          │────────────────────▶│                   │                   │
          │                     │                   │                   │
          │                     │  $98.05           │                   │
          │                     │──────────────────▶│                   │
          │                     │                   │                   │
          │                     │                   │  $97.50           │
          │                     │                   │──────────────────▶│
          │                     │                   │                   │

═══════════════════════════════════════════════════════════════════════════════
FEE BREAKDOWN: Where the $2.50 Went
═══════════════════════════════════════════════════════════════════════════════

┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   Customer Pays:                             $100.00                       │
│                                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  CHASE (Issuer) keeps:                                              │  │
│   │                                                                     │  │
│   │    Interchange Fee:  $1.80 (1.80%)                                  │  │
│   │    ──────────────────────────────                                   │  │
│   │    • Compensates for credit risk                                    │  │
│   │    • Funds rewards program                                          │  │
│   │    • Covers fraud losses                                            │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                              │                             │
│                                              ▼                             │
│                                           $98.20                           │
│                                              │                             │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  VISA (Network) keeps:                                              │  │
│   │                                                                     │  │
│   │    Assessment Fee:   $0.15 (0.15%)                                  │  │
│   │    ──────────────────────────────                                   │  │
│   │    • Network infrastructure                                         │  │
│   │    • Brand marketing                                                │  │
│   │    • Rules enforcement                                              │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                              │                             │
│                                              ▼                             │
│                                           $98.05                           │
│                                              │                             │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  ACQUIRER/PROCESSOR keeps:                                          │  │
│   │                                                                     │  │
│   │    Markup:          $0.45 (0.45%)                                   │  │
│   │    Per-txn Fee:     $0.10                                           │  │
│   │    ─────────────────────────────                                    │  │
│   │    Total:           $0.55                                           │  │
│   │    • Processing infrastructure                                      │  │
│   │    • Merchant support                                               │  │
│   │    • Risk monitoring                                                │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                              │                             │
│                                              ▼                             │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  COFFEE SHOP receives:                   $97.50                     │  │
│   │                                                                     │  │
│   │    Net deposit = $100 - $2.50 fees                                  │  │
│   │                                                                     │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│   SUMMARY:                                                                 │
│   ─────────────────────────────────────────────────────────────────────    │
│   │ Recipient              │ Amount    │ Percentage │                      │
│   ├────────────────────────┼───────────┼────────────┤                      │
│   │ Chase (Issuer)         │ $1.80     │ 1.80%      │                      │
│   │ Visa (Network)         │ $0.15     │ 0.15%      │                      │
│   │ Acquirer/Processor     │ $0.55     │ 0.55%      │                      │
│   │ Coffee Shop (Merchant) │ $97.50    │ 97.50%     │                      │
│   │ ─────────────────────────────────────────────── │                      │
│   │ TOTAL                  │ $100.00   │ 100%       │                      │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## When Things Go Wrong

Understanding failure scenarios is critical for building robust payment systems.

### Authorization Declines

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      COMMON DECLINE SCENARIOS                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  HARD DECLINES (do not retry)                                               │
│  ────────────────────────────                                               │
│  • Invalid card number (14)                                                 │
│  • Expired card (54)                                                        │
│  • Lost/Stolen card (41, 43)                                                │
│  • Card not activated                                                       │
│  • Account closed                                                           │
│                                                                             │
│  ACTION: Ask customer for different payment method                          │
│                                                                             │
│  SOFT DECLINES (may retry)                                                  │
│  ─────────────────────────                                                  │
│  • Insufficient funds (51)                                                  │
│  • Over credit limit (61)                                                   │
│  • Issuer unavailable (91)                                                  │
│  • System malfunction (96)                                                  │
│                                                                             │
│  ACTION: May retry after delay, or ask for different payment                │
│                                                                             │
│  FRAUD DECLINES                                                             │
│  ─────────────                                                              │
│  • Do not honor (05) - often fraud-related                                  │
│  • Suspected fraud (59)                                                     │
│  • Security violation (63)                                                  │
│                                                                             │
│  ACTION: Do NOT retry. Customer must contact issuer.                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Void vs Refund vs Chargeback

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VOID vs REFUND vs CHARGEBACK                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  VOID                                                                       │
│  ────                                                                       │
│  When: BEFORE batch settlement (same day)                                   │
│  What: Cancels the authorization before capture                             │
│  Cost: Usually FREE - no interchange charged                                │
│  Result: Hold drops from customer's card immediately                        │
│                                                                             │
│  Best for: Customer changed mind, wrong amount, duplicate transaction       │
│                                                                             │
│                                                                             │
│  REFUND (Credit/Return)                                                     │
│  ──────────────────────                                                     │
│  When: AFTER batch settlement (next day+)                                   │
│  What: New transaction crediting money back to card                         │
│  Cost: Merchant pays refund transaction fees                                │
│        Interchange is generally NOT returned                                │
│  Result: Credit posts to customer's account in 3-10 days                    │
│                                                                             │
│  Best for: Returns, service issues, post-purchase problems                  │
│                                                                             │
│  INTERCHANGE ON REFUNDS - THE FULL STORY:                                   │
│  ─────────────────────────────────────────                                  │
│  General Rule: Interchange is NOT returned on refunds.                      │
│                                                                             │
│  Example:                                                                   │
│  • Sale: $100 (merchant pays $1.80 interchange)                             │
│  • Refund: $100 (merchant refunds full amount)                              │
│  • Merchant net loss: $1.80 + refund transaction fees                       │
│                                                                             │
│  EXCEPTIONS (important nuances):                                            │
│  • Voids (same day before settlement): Interchange never charged            │
│  • Some network programs: Partial interchange recovery within 24 hours      │
│  • Chargeback win: If merchant wins representment, interchange returned     │
│  • Auth reversal: Full release if reversed before settlement                │
│                                                                             │
│                                                                             │
│  CHARGEBACK                                                                 │
│  ──────────                                                                 │
│  When: Customer disputes with their bank (not merchant)                     │
│  What: Forced reversal initiated by issuer                                  │
│  Cost: Transaction amount + chargeback fee ($15-$100)                       │
│  Result: Funds pulled from merchant account                                 │
│                                                                             │
│  Merchant can fight chargebacks by submitting evidence                      │
│  Excessive chargebacks (>1%) can result in termination                      │
│                                                                             │
│  TIMELINE COMPARISON:                                                       │
│  ────────────────────                                                       │
│                                                                             │
│  Day 1        Day 2         Day 3-10      Day 30-120                        │
│    │            │              │              │                             │
│    │  ◄─VOID─►  │              │              │                             │
│    │            │  ◄──REFUND──►│              │                             │
│    │            │              │   ◄─────CHARGEBACK─────►                   │
│    │            │              │              │                             │
│  Sale       Settlement      Refund         Customer                         │
│            (batch close)    Posts          Disputes                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Expired Authorizations

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      EXPIRED AUTHORIZATION SCENARIOS                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SCENARIO: E-commerce merchant takes 10 days to ship                        │
│                                                                             │
│  Day 1:  Authorization for $150 - APPROVED                                  │
│  Day 10: Merchant tries to capture - PROBLEM!                               │
│                                                                             │
│  WHAT HAPPENS:                                                              │
│  ─────────────                                                              │
│  • Original auth expired (7 days for CNP)                                   │
│  • Hold dropped from customer's card                                        │
│  • Customer may have spent that available credit                            │
│                                                                             │
│  OPTIONS FOR MERCHANT:                                                      │
│  ────────────────────                                                       │
│  1. Re-authorize: New auth request                                          │
│     Risk: May decline if customer's credit situation changed                │
│                                                                             │
│  2. Force capture: Submit without valid auth                                │
│     Risk: Higher interchange rate ("downgrade")                             │
│     Risk: Customer chargeback ("transaction not authorized")                │
│                                                                             │
│  3. Incremental auth: Some networks allow extending auths                   │
│     Note: Must be done before original expires                              │
│                                                                             │
│  BEST PRACTICE:                                                             │
│  ─────────────                                                              │
│  • Capture quickly (ideally within 24-48 hours)                             │
│  • For delayed fulfillment, auth at shipment not checkout                   │
│  • Use auth reversal if order cancelled before capture                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Chargebacks by Phase

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      CHARGEBACK LIFECYCLE                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PHASE 1: FIRST CHARGEBACK (Day 0-120 from transaction)                     │
│  ─────────────────────────────────────────────────────                      │
│                                                                             │
│  Customer       Issuer         Network        Acquirer       Merchant       │
│      │            │               │              │              │           │
│      │ "I didn't  │               │              │              │           │
│      │ make this  │               │              │              │           │
│      │ purchase"  │               │              │              │           │
│      │───────────▶│               │              │              │           │
│      │            │  Initiate     │              │              │           │
│      │            │  Chargeback   │              │              │           │
│      │            │──────────────▶│              │              │           │
│      │            │               │─────────────▶│              │           │
│      │            │               │              │─────────────▶│           │
│      │            │               │              │              │           │
│      │            │               │              │   $100 + $25 │           │
│      │            │               │              │   debited    │           │
│      │            │               │              │              │           │
│                                                                             │
│  Merchant has 10-30 days to respond with evidence                           │
│                                                                             │
│                                                                             │
│  PHASE 2: REPRESENTMENT (Merchant fights back)                              │
│  ─────────────────────────────────────────────                              │
│                                                                             │
│  Merchant submits evidence:                                                 │
│  • Signed receipt / delivery confirmation                                   │
│  • AVS/CVV match records                                                    │
│  • Communication with customer                                              │
│  • Product/service evidence                                                 │
│                                                                             │
│  If issuer accepts evidence → Funds returned to merchant                    │
│  If issuer rejects → Proceed to pre-arbitration                             │
│                                                                             │
│                                                                             │
│  PHASE 3: PRE-ARBITRATION                                                   │
│  ────────────────────────                                                   │
│                                                                             │
│  Second round of evidence review                                            │
│  Higher stakes - losing party pays fees                                     │
│                                                                             │
│                                                                             │
│  PHASE 4: ARBITRATION (Final)                                               │
│  ───────────────────────────                                                │
│                                                                             │
│  Network makes final decision                                               │
│  Fees (2024-2025):                                                          │
│  • Visa: $500 filing fee (up from $350 in 2020)                             │
│  • Mastercard: $350-$500 depending on chargeback type                       │
│  • Pre-arbitration fees: $50-$100 additional                                │
│  Losing party pays these fees                                               │
│  Decision is binding                                                        │
│                                                                             │
│                                                                             │
│  COMMON CHARGEBACK REASON CODES:                                            │
│  ───────────────────────────────                                            │
│                                                                             │
│  │ Code │ Reason                    │ Common Cause                │         │
│  ├──────┼───────────────────────────┼─────────────────────────────┤         │
│  │ 10.4 │ Fraud - Card Absent       │ Stolen card used online     │         │
│  │ 13.1 │ Merchandise Not Received  │ Shipping issues             │         │
│  │ 13.3 │ Not as Described          │ Quality disputes            │         │
│  │ 13.6 │ Credit Not Processed      │ Refund not issued           │         │
│  │ 13.7 │ Cancelled Merchandise     │ Subscription issues         │         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Retrieval Requests

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        RETRIEVAL REQUESTS                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  WHAT IT IS:                                                                │
│  ───────────                                                                │
│  A retrieval request (also called "copy request") is when an issuer        │
│  asks for documentation about a transaction BEFORE initiating a             │
│  chargeback.                                                                │
│                                                                             │
│  WHY IT HAPPENS:                                                            │
│  ───────────────                                                            │
│  • Cardholder doesn't recognize the charge                                  │
│  • Cardholder needs receipt for expense report                              │
│  • Issuer investigating potential fraud                                     │
│                                                                             │
│  MERCHANT RESPONSE:                                                         │
│  ─────────────────                                                          │
│  Must provide within 10-20 days:                                            │
│  • Copy of signed receipt                                                   │
│  • Transaction details                                                      │
│  • Proof of delivery (if applicable)                                        │
│                                                                             │
│  IF MERCHANT DOESN'T RESPOND:                                               │
│  ────────────────────────────                                               │
│  • Request escalates to chargeback                                          │
│  • Merchant loses ability to fight                                          │
│  • Automatic loss                                                           │
│                                                                             │
│  BEST PRACTICE:                                                             │
│  ─────────────                                                              │
│  Always respond to retrieval requests - they're a WARNING                   │
│  Responding often prevents the chargeback entirely                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

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
| **Void** | Cancellation of a transaction before batch settlement. No fees typically charged. |
| **Refund** | Credit transaction issued after settlement to return funds to cardholder. Merchant may lose interchange. |
| **Chargeback** | Forced reversal of a transaction initiated by the cardholder through their issuing bank. |
| **Retrieval Request** | Request from issuer for transaction documentation, often precursor to a chargeback. |
| **Response Code** | Numeric code from issuer indicating authorization result (00=approved, 51=insufficient funds, etc.) |

---

## Self-Assessment Questions & Answers

### Question 9: What is the difference between authorization and capture? Why are they sometimes separate?

**Answer:**

**Authorization:**

- Real-time approval from the issuer
- Places a HOLD on funds
- No money moves yet
- Lasts 7-31 days depending on transaction type

**Capture:**

- Finalizes the transaction
- Includes transaction in settlement batch
- Triggers actual money movement
- Interchange fees calculated

**Why Separate?**

1. **Final amount unknown at time of purchase:**
   - Hotels: Auth at check-in for estimated stay, capture at checkout for actual bill
   - Gas pumps: Auth for $150 max, capture actual pump amount ($45)
   - Restaurants: Auth for meal, capture with tip included

2. **Fulfillment timing:**
   - E-commerce: Auth at checkout, capture at shipment
   - Prevents charging for items that can't be shipped

3. **Order changes:**
   - If customer cancels before shipment, void the auth (free)
   - After capture, must process a refund (costs money)

### Question 10: A customer makes a $50 purchase on Friday at 8 PM. When will the merchant receive the funds?

**Answer:**

**Timeline:**

| Day | Event |
|-----|-------|
| **Friday 8 PM** | Authorization approved, sale completed |
| **Friday 11 PM** | Batch closes, transactions submitted |
| **Saturday** | Non-business day - no processing |
| **Sunday** | Non-business day - no processing |
| **Monday** | Clearing process runs |
| **Tuesday** | Settlement/funding (T+2) |

**Merchant receives ~$48.75** (after ~$1.25 in fees) on **Tuesday**.

If the merchant is on T+1 funding with their processor, they might receive funds Monday, but weekend transactions typically settle together.

**Key factors affecting timing:**

- Business days only (no weekends/holidays)
- Batch close time (earlier = faster settlement)
- Merchant's funding agreement with processor
- Risk profile (new or high-risk merchants may have delays)

### Question 11: What's the difference between a void and a refund? When should each be used?

**Answer:**

**VOID:**

- When: Same day, before batch closes
- What: Cancels authorization, releases hold
- Cost: Usually FREE
- Timing: Immediate release of funds
- Use when: Wrong amount, duplicate, customer changed mind same day

**REFUND:**

- When: After batch has settled (next day or later)
- What: New credit transaction to card
- Cost: Transaction fees apply; interchange usually NOT returned
- Timing: 3-10 days for customer to see credit
- Use when: Returns, issues discovered after settlement

**Best Practice:**
Always void when possible. A $100 sale followed by a $100 refund costs the merchant ~$1.80 in interchange they don't get back. A void costs nothing.

### Question 12: What happens when an authorization expires before capture?

**Answer:**

When an authorization expires:

1. **The hold drops** - Customer's available credit is restored
2. **Customer may spend** - Those funds are now available for other purchases
3. **Capture may fail** - If customer's credit situation changed

**Merchant options:**

| Option | Risk Level | When to Use |
|--------|------------|-------------|
| Re-authorize | Medium | Customer still has card, likely to approve |
| Force capture | High | Desperate measure, high decline/chargeback risk |
| Cancel order | Safe | When unable to fulfill or re-auth fails |

**Prevention:**

- Capture within 24-48 hours when possible
- For delayed fulfillment, authorize at shipment, not checkout
- Use incremental authorizations for extending holds
- Set up alerts for aging authorizations

---

## Why This Matters for PayFac

Understanding the transaction lifecycle is critical for Payment Facilitators because:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                TRANSACTION LIFECYCLE & PAYFAC OPERATIONS                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. CASH FLOW MANAGEMENT                                                    │
│     • PayFacs must manage funding timing for thousands of sub-merchants     │
│     • Settlement delays impact sub-merchant satisfaction                    │
│     • Must maintain reserves for chargebacks                                │
│                                                                             │
│  2. RISK TIMING                                                             │
│     • Risk is highest between authorization and settlement                  │
│     • Fraudsters often run charges then disappear                           │
│     • Must monitor unusual patterns before funding                          │
│                                                                             │
│  3. DISPUTE MANAGEMENT                                                      │
│     • PayFac is liable for sub-merchant chargebacks                         │
│     • Must have systems to handle retrieval requests                        │
│     • Chargeback representment affects bottom line                          │
│                                                                             │
│  4. FEE ECONOMICS                                                           │
│     • Interchange is largest cost - must understand when it's charged       │
│     • Void vs refund decision affects profitability                         │
│     • Network fees calculated during clearing                               │
│                                                                             │
│  5. REPORTING & RECONCILIATION                                              │
│     • Must reconcile authorizations with settlements                        │
│     • Track voids, refunds, chargebacks                                     │
│     • Provide sub-merchants with accurate reporting                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Key Takeaways

1. **Three phases, different timing**: Authorization (seconds), Clearing (hours), Funding (days)

2. **Authorization is a promise, not payment**: Money doesn't move until settlement

3. **Batch processing is the norm**: Most merchants don't settle individual transactions

4. **Void early, refund late**: Voids save money; use them when possible

5. **Chargebacks are expensive**: Beyond the transaction amount, fees and penalties add up

6. **Time matters**: Authorization expiration, chargeback windows, funding delays all impact operations

---

## References

### Official Network Documentation

- [Visa Core Rules and Visa Product and Service Rules](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf) - Complete Visa transaction processing rules
- [Mastercard Rules Manual](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/mastercard-rules.pdf) - Mastercard transaction standards
- [Visa Merchant Data Standards Manual](https://usa.visa.com/dam/VCOM/download/merchants/visa-merchant-data-standards-manual.pdf) - Technical transaction formatting

### Authorization & Response Codes

- [Visa Response Codes](https://developer.visa.com/capabilities/vmis/reference#tag/Response-Codes) - Official Visa authorization response codes
- [ISO 8583 Standard](https://www.iso.org/standard/31628.html) - International standard for payment card messages

### Settlement & Clearing

- [Visa Settlement Services](https://usa.visa.com/products/visa-settlement-service.html) - Overview of Visa settlement process
- [The Clearing House](https://www.theclearinghouse.org/) - US payments clearing infrastructure

### Chargebacks & Disputes

- [Visa Claims Resolution (VCR)](https://usa.visa.com/supporting-info/visa-claims-resolution.html) - Visa dispute process
- [Mastercard Chargeback Guide](https://www.mastercard.us/en-us/business/overview/support/rules.html) - Mastercard dispute procedures
- [Visa Dispute Management Guidelines for Merchants (PDF)](https://usa.visa.com/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf) - Official Visa merchant chargeback best practices (June 2024)

### Industry Resources

- [Electronic Transactions Association (ETA)](https://www.electran.org/) - Payments industry association with educational resources
- [NACHA - The Electronic Payments Association](https://www.nacha.org/) - ACH network governance
- [Nilson Report](https://nilsonreport.com/) - Industry statistics and analysis

---

## Further Reading

### Books

- **"Payments Systems in the U.S."** by Carol Coye Benson & Scott Loftesness - Comprehensive textbook covering all payment systems
- **"Electronic Value Exchange"** by David Stearns - History of card payments and interchange development

### Online Resources

- [Stripe: How Card Payments Work](https://stripe.com/guides/introduction-to-online-payments) - Developer-friendly payment flow explanation
- [Square: Understanding Payment Processing](https://squareup.com/us/en/the-bottom-line/managing-your-finances/payment-processing) - Practical merchant perspective
- [Adyen: Payment Processing Explained](https://www.adyen.com/knowledge-hub/payment-processing-explained) - Technical payment flow details

---

*Previous: [Card Network Role](./02-card-network-role.md)*
*Next: [Debit Networks & Routing](./04-debit-networks-routing.md)*
