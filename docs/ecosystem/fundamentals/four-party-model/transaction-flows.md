---
title: "Payment Authorization and Settlement Flow | Transaction Lifecycle Explained"
description: "Payment authorization (300-800ms) vs settlement (T+1 to T+3) explained. Complete transaction flow with response codes, batch timing, and real-world examples."
sidebar_position: 2
sidebar_label: "Transaction Flows"
slug: transaction-flows
keywords:
  - payment authorization
  - settlement flow
  - transaction lifecycle
  - authorization vs settlement
  - decline codes
  - batch settlement
---

# Payment Authorization and Settlement Flow Explained

> **Last Updated:** 2025-12-18
>
> **Status:** Complete
>
> This document details the technical flows of transactions through the four-party model.

**What is the difference between authorization and settlement?** **Authorization** is the real-time approval of a transaction (300-800ms), where the issuing bank places a hold on funds. **Settlement** is the actual movement of money between banks (T+1 to T+3 days later), when the merchant receives funds. Between these two events are **capture** (merchant claiming the authorized amount) and **clearing** (card networks calculating net positions). Understanding this four-stage transaction lifecycle—authorization → capture → clearing → settlement—is critical for building payment platforms that handle timing, reconciliation, and customer experience correctly.

---

## Authorization Flow (Milliseconds to Seconds)

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

---

## Quick Comparison: Authorization vs Capture vs Settlement

| Aspect | Authorization | Capture | Clearing | Settlement |
|--------|--------------|---------|----------|------------|
| **Timing** | Real-time (300-800ms) | Same day or later | End of day | T+1 to T+3 |
| **What happens** | Hold placed on funds | Merchant claims amount | Network calculates positions | Money moves between banks |
| **Who initiates** | Merchant POS/gateway | Merchant system | Automatic batch process | Card networks + banks |
| **Money moves?** | ❌ No (hold only) | ❌ No | ❌ No | ✅ Yes |
| **Can be reversed?** | ✅ Yes (void) | ✅ Yes (before settlement) | ⚠️ Rare | ❌ No (chargeback only) |
| **Amount flexibility** | Fixed | Can be less than auth | Final amount locked | Exact capture amount |
| **Failure impact** | Transaction declined | Authorization expires | None (retry next cycle) | Merchant not funded |

**Example Timeline:**
- **Monday 2:00 PM**: Authorization (customer taps card)
- **Monday 6:00 PM**: Capture (merchant closes batch)
- **Monday 11:59 PM**: Clearing (network processes batch)
- **Tuesday 9:00 AM**: Settlement (money moves)
- **Tuesday 3:00 PM**: Funding (merchant receives money)

## Authorization vs Capture vs Settlement

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
│     • Interchange fees determined (see [Fee Breakdown](./fee-breakdown))    │
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

### Real-World Examples

| Scenario | Authorization | Capture | Why? |
|----------|---------------|---------|------|
| **Restaurant** | $50 (meal) | $60 (meal + tip) | Tip added after auth |
| **Hotel** | $500 (deposit) | $350 (actual stay) | Final amount lower |
| **Gas station** | $100 (pre-auth) | $45 (pumped) | Actual amount unknown upfront |
| **E-commerce** | $100 | $100 | Captured at shipping |

**Key Point:** If a merchant authorizes but never captures, the hold releases after the issuer's timeout period (typically 7-30 days). This can frustrate cardholders who see "pending" charges. For complete details on the full transaction journey, see [Transaction Lifecycle](../transaction-lifecycle/overview).

---

## Settlement Flow

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

### Settlement Timing Varies

| Factor | Impact |
|--------|--------|
| **Card type** | Credit: T+1 to T+2; Debit: Often T+1 |
| **Merchant risk** | High-risk: T+5 to T+7 or rolling reserves |
| **Batch timing** | Batches after cutoff (5-6 PM EST) settle next cycle |
| **Weekends/holidays** | No settlement on non-business days |

---

## What Do Payment Decline Codes Mean? Authorization Response Codes Explained

When a transaction is processed, the issuer returns a response code:

### Common Decline Codes Merchants See

| Code | Customer-Friendly Message | What It Means for Merchant |
|------|-------------------------|--------------------------|
| **00** | "Payment approved" | Transaction successful |
| **05** | "Payment declined" | Generic decline - don't retry immediately |
| **51** | "Insufficient funds" | Card balance too low - suggest alternative payment |
| **54** | "Card expired" | Update payment method |
| **57** | "Not permitted" | Card type restricted for your merchant category |
| **59** | "Fraud suspected" | DO NOT retry - ask for different payment method |
| **N7** | "Invalid CVV" | Allow customer to re-enter security code |

**Best practices:**
- Never share actual decline codes with customers (privacy/security)
- Log all decline codes for fraud pattern analysis
- Soft declines (51, 61, 65): Retry after 24 hours
- Hard declines (05, 57, 59): Never retry, request new payment method

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

## Transaction Timing Best Practices

### Authorization Hold Periods

Different issuers have different hold periods:

| Card Type | Typical Hold Period | Notes |
|-----------|-------------------|-------|
| **Credit cards** | 7-30 days | Varies by issuer |
| **Debit cards** | 3-7 days | Shorter due to immediate funds impact |
| **Prepaid cards** | 3-5 days | Shortest holds |

### Batch Cutoff Times

Most processors have daily batch cutoff times:

- **Standard cutoff:** 5-6 PM Eastern Time
- **Late cutoff:** Some processors offer 11 PM or midnight cutoffs
- **Weekend/holiday:** Batches held until next business day

**Important:** Batching after cutoff pushes settlement to the next cycle (T+2 instead of T+1).

---

## Transaction States

Throughout the lifecycle, a transaction moves through distinct states:

```
┌──────────────────────────────────────────────────────────────────────────┐
│                          TRANSACTION STATES                              │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  AUTHORIZED → CAPTURED → CLEARING → SETTLED → COMPLETED                  │
│                                                                          │
│  Alternative paths:                                                      │
│  AUTHORIZED → VOIDED (before capture)                                    │
│  AUTHORIZED → EXPIRED (hold timeout)                                     │
│  CAPTURED → REFUNDED (full or partial)                                   │
│  SETTLED → CHARGEBACK (dispute initiated)                                │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### State Definitions

| State | Description | Money Movement |
|-------|-------------|----------------|
| **Authorized** | Hold placed, awaiting capture | None (hold only) |
| **Captured** | Merchant claims funds | None yet |
| **Clearing** | Network calculating positions (see [Fee Breakdown](./fee-breakdown)) | None yet |
| **Settled** | Banks transfer funds | Merchant funded |
| **Completed** | Final state | Complete |
| **Voided** | Authorization canceled | Hold released |
| **Expired** | Authorization timeout | Hold released |
| **Refunded** | Funds returned to cardholder | Reversal |
| **Chargeback** | Disputed, under investigation | Funds reversed |

---

## Key Takeaways

1. **Authorization ≠ Settlement**: Authorization is a promise; settlement is actual payment (T+1 to T+3)

2. **Capture flexibility**: Merchants can capture less than authorized (hotels, gas stations) but not more

3. **Batch timing matters**: Late batches delay settlement and may incur downgrades

4. **Response codes protect privacy**: Merchants only see codes, not detailed decline reasons

5. **Soft vs hard declines**: Only retry soft declines; hard declines indicate permanent issues

6. **Hold periods vary**: Credit cards hold longer (7-30 days) than debit (3-7 days)

7. **Weekend/holiday impact**: No settlement on non-business days

---

## Related Topics

**Four-Party Model Series:**
- **[Four-Party Model Overview](./)** - Core concepts and party roles
- **[Fee Breakdown & Money Flow](./fee-breakdown)** - Where fees go and why
- **[Interchange Optimization](./optimization)** - Reducing costs through data
- **[PayFac Position](./payfac)** - How PayFacs fit into the model
- **[Self-Assessment Quiz](./quiz)** - Test your understanding

**Deep Dives:**
- **[Transaction Lifecycle](../transaction-lifecycle/overview)** - Complete transaction journey including disputes
- **[Card Network Role](../card-network-role)** - Network infrastructure and routing
- **Risk & Compliance** - Fraud detection and chargeback management (coming soon)

---

*Continue reading: [Fee Breakdown & Money Flow](./fee-breakdown)*
