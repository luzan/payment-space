---
title: "Complete Transaction Example"
description: "Step-by-step walkthrough of a $100 credit card transaction from authorization to funding"
sidebar_position: 4
sidebar_label: "Complete Example"
keywords: [transaction example, money flow, authorization example, settlement example, fee breakdown]
---

# Complete Transaction Example

Let's trace a $100 credit card purchase from start to finish, following the money and fees through all three phases of the transaction lifecycle.

## Timeline: $100 Purchase at Coffee Shop

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

## Detailed Fee Breakdown by Party

### Chase (Issuing Bank) - $1.80

**What they receive**: Interchange fee of 1.80%

**Why they receive it**:
- **Credit risk**: Extending credit to cardholder
- **Fraud liability**: Covering fraudulent transactions
- **Rewards programs**: Funding cash back, points, miles
- **Customer service**: Supporting cardholders
- **Float cost**: Paying merchant before collecting from cardholder

**Fee determinants**:
- Card type (rewards card = higher)
- Transaction type (CNP vs CP)
- Merchant category (MCC)
- Transaction size

:::info Interchange Variation
A basic debit card might only charge 0.50% ($0.50), while a premium rewards card could charge 2.40% ($2.40) on the same $100 transaction. The issuer keeps this difference.
:::

### Visa (Card Network) - $0.15

**What they receive**: Network assessment fee of 0.15%

**Why they receive it**:
- **Network infrastructure**: Operating global payment network
- **Security systems**: Fraud detection, tokenization, 3D Secure
- **Brand marketing**: "Everywhere you want to be"
- **Rules & compliance**: Developing and enforcing network rules
- **Innovation**: Developing new payment technologies

**Fee structure** (2024-2025 rates):
- Acquirer processing fee: 0.14% (this transaction)
- International service assessment: 0.00% (domestic transaction)
- Kilobyte access fee: $0.00195 per transaction
- Flat fee per transaction: Minimal

### Acquirer/Processor - $0.55

**What they receive**: Markup + per-transaction fee

**Fee breakdown**:
- Percentage markup: 0.45% = $0.45
- Per-transaction fee: $0.10
- Total: $0.55

**Why they receive it**:
- **Payment processing**: Routing transactions to networks
- **POS hardware/software**: Terminal support and updates
- **Risk monitoring**: Fraud detection at merchant level
- **Settlement**: Managing merchant funding
- **Customer support**: Supporting merchant inquiries
- **Compliance**: PCI-DSS, AML, regulatory reporting

**What this covers**:
- Infrastructure and data centers
- Transaction routing and switching
- Integration with merchant systems
- Risk management and underwriting
- Chargeback management

### Coffee Shop (Merchant) - $97.50

**What they receive**: Net proceeds after all fees

**Effective cost**: $2.50 or 2.50% of sale

**What this covers for them**:
- Convenience for customers (no cash handling)
- Guaranteed payment (no bounced checks)
- Fraud protection (chargeback rights, though risky)
- Faster checkout
- Higher average transaction size (cards = more spending)

## Alternative Scenarios: How Fees Change

### Scenario 1: Debit Card (PIN-based)

```
Same $100 transaction, different card type:

Customer uses PIN debit card:
┌────────────────────────────────────────────────────┐
│ Issuer interchange:    $0.21 (Durbin-capped)      │
│ Network fee (Interlink): $0.05                     │
│ Processor markup:      $0.30 + $0.10              │
│ ──────────────────────────────────────────────     │
│ Total fees:            $0.66                       │
│ Merchant receives:     $99.34                      │
└────────────────────────────────────────────────────┘

SAVINGS FOR MERCHANT: $1.84 per transaction (74% lower fees)
```

### Scenario 2: American Express

```
Same $100 transaction, Amex card:

Customer uses American Express:
┌────────────────────────────────────────────────────┐
│ Amex discount rate:    $2.89 (2.89%)              │
│ (Amex handles all fees internally)                │
│ ──────────────────────────────────────────────     │
│ Total fees:            $2.89                       │
│ Merchant receives:     $97.11                      │
└────────────────────────────────────────────────────┘

COST INCREASE: $0.39 more than Visa (16% higher)
```

### Scenario 3: Card-Not-Present (Online)

```
Same $100 transaction, online purchase:

Customer enters card number online:
┌────────────────────────────────────────────────────┐
│ Issuer interchange:    $1.95 (higher for CNP)     │
│ Network fee:           $0.15                       │
│ Processor markup:      $0.50 + $0.15              │
│ ──────────────────────────────────────────────     │
│ Total fees:            $2.75                       │
│ Merchant receives:     $97.25                      │
└────────────────────────────────────────────────────┘

COST INCREASE: $0.25 more than card-present (10% higher)

WHY HIGHER?
• Higher fraud risk in CNP environment
• No physical card verification
• No signature or PIN
• Issuer assumes more risk
```

## What Happens on the Cardholder's Statement

### Tuesday 9:15 AM (Authorization)

```
CHASE CREDIT CARD STATEMENT
─────────────────────────────────────────────────────
Available Credit: $2,500

PENDING TRANSACTIONS:
Date        Merchant            Amount      Status
──────────────────────────────────────────────────────
01/15/24    Coffee Shop Co.     $100.00    PENDING

Available Credit: $2,400 (reduced by $100 hold)
```

### Wednesday (After Clearing)

```
CHASE CREDIT CARD STATEMENT
─────────────────────────────────────────────────────
Available Credit: $2,400

POSTED TRANSACTIONS:
Date        Merchant            Amount      Status
──────────────────────────────────────────────────────
01/15/24    Coffee Shop Co.     $100.00    POSTED

PENDING TRANSACTIONS:
(none)

Statement Balance: $100.00
Minimum Payment: $25.00
Payment Due: 02/15/24
```

:::tip Customer Sees Full Amount
The customer is charged $100 and sees $100 on their statement. They don't see the fee breakdown—that's between the merchant and the payment ecosystem.
:::

## PayFac Platform Considerations

If a Payment Facilitator is involved (e.g., Stripe, Square, Shopify):

```
MONEY FLOW WITH PAYFAC:
═══════════════════════════════════════════════════════

Customer Pays:           $100.00
                           │
                           ▼
Issuer keeps:            $1.80 (interchange)
                           │
                           ▼
Network keeps:           $0.15 (assessment)
                           │
                           ▼
PayFac receives:         $98.05 (from acquirer)
                           │
                           ▼
PayFac keeps:            $0.80 (platform fee: 0.80% + $0.10)
                           │
                           ▼
Sub-merchant receives:   $97.25

SUB-MERCHANT'S VIEW:
• Sees a single "processing fee" of 2.75% ($2.75)
• Doesn't see breakdown between interchange, network, PayFac
• Receives net deposit of $97.25

PAYFAC'S ECONOMICS:
• Pays out $98.05 to acquirer (interchange + network fee)
• Charges sub-merchant $2.75
• Keeps $0.70 as gross margin
• Must cover: compliance, support, tech, reserves
```

## Timeline Summary: When Money Moves

| Time | Event | Money Status |
|------|-------|--------------|
| **Tuesday 9:15 AM** | Authorization | Hold placed, no money moved |
| **Tuesday 11:00 PM** | Batch close | Transactions queued for clearing |
| **Wednesday 3:00 AM** | Clearing | Fees calculated, positions netted |
| **Wednesday 10:00 AM** | Settlement | Banks wire net positions |
| **Wednesday 2:00 PM** | Merchant funding | Coffee shop receives $97.50 |

:::note Business Day Consideration
If Tuesday were a Friday, the merchant would receive funds the following Tuesday or Wednesday due to weekend processing delays.
:::

## See Also

- [Transaction Lifecycle Overview](./overview.md) - Understanding the three phases
- [Failure Scenarios](./failure-scenarios.md) - What happens when things go wrong
- [Settlement Files](./settlement-files.md) - Data exchanged during clearing

## References

- [Visa Interchange Rates](https://usa.visa.com/support/merchant/library/visa-merchant-data-standards.html) - Official Visa interchange schedules
- [Mastercard Assessment Fees](https://www.mastercard.us/en-us/business/overview/support/rules.html) - Current assessment fee structures
