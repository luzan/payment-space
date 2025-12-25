---
title: "Real-Time Payment Rails"
description: "RTP, FedNow, wire transfers, and instant settlement payment networks"
sidebar_position: 3
sidebar_label: "Real-Time Rails"
keywords:
  - RTP
  - FedNow
  - real-time payments
  - instant payments
  - wire transfers
  - CHIPS
  - Fedwire
---

# Real-Time Payment Rails

> **Last Updated:** 2025-12-24
> **Status:** Complete

## Quick Reference

**RTP Network (The Clearing House):**
- **Volume:** 343M payments in 2024 (+38% YoY), $246B value (+94% YoY)
- **Participating FIs:** 1,000+ institutions (67% growth in 2024)
- **Transaction Limit:** $1M (increasing to $10M on Feb 9, 2025)
- **Settlement:** Instant (&lt;20 seconds), 24/7/365
- **Daily Volume:** 1M+ transactions/day

**FedNow Service (Federal Reserve):**
- **Launch:** July 2023
- **Participating FIs:** 1,500+ institutions (all 50 states)
- **Growth:** 645% YoY (Q3 2024 to Q3 2025)
- **Transaction Limit:** $10M (effective Nov 12, 2025)
- **Settlement:** Instant (&lt;20 seconds), 24/7/365

**Wire Transfers:**
- **CHIPS:** ~500K daily payments, $1.8T daily value, 42 members
- **Fedwire:** 9,000+ connected FIs, real-time gross settlement
- **Cost:** $10-$30 per transaction

:::tip The Instant Settlement Revolution
Real-time payment rails represent the biggest shift in payment infrastructure since ACH launched in the 1970s. By 2027, instant payments are projected to account for 25-30% of all electronic payments in the US.
:::

## What Are Real-Time Payments?

Real-time payments (RTP) are electronic fund transfers that settle instantly (within seconds) and are available to the receiver immediately, 24/7/365, including weekends and holidays.

### Key Characteristics

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    REAL-TIME PAYMENT CHARACTERISTICS                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. INSTANT SETTLEMENT                                                      │
│     • Funds move in &lt;20 seconds (not T+1/T+2)                               │
│     • Irrevocable once settled                                              │
│     • No batch processing delays                                            │
│                                                                             │
│  2. 24/7/365 AVAILABILITY                                                   │
│     • No "business days only" restriction                                   │
│     • Works nights, weekends, holidays                                      │
│     • No cutoff times like ACH                                              │
│                                                                             │
│  3. RICH DATA / MESSAGING                                                   │
│     • ISO 20022 message format (modern XML-based)                           │
│     • Remittance information (invoice numbers, descriptions)                │
│     • Up to 140 characters of payment information                           │
│     • Structured data for reconciliation                                    │
│                                                                             │
│  4. REQUEST FOR PAYMENT (RfP)                                               │
│     • Payee can send payment request to payer                               │
│     • Payer approves/declines                                               │
│     • Alternative to debit/pull transactions                                │
│                                                                             │
│  5. CONFIRMATION OF PAYEE                                                   │
│     • Verify receiver account before sending                                │
│     • Reduce misdirected payments                                           │
│     • Name-matching validation                                              │
│                                                                             │
│  6. IRREVOCABLE                                                             │
│     • No returns/chargebacks once settled                                   │
│     • Much lower dispute risk vs ACH/cards                                  │
│     • Final settlement = true payment finality                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## RTP vs FedNow vs ACH vs Wires

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     PAYMENT RAIL COMPARISON (2024-2025)                     │
├──────────────┬────────┬────────┬───────────┬─────────┬────────────────────────┤
│  Attribute   │  RTP   │ FedNow │    ACH    │  Wires  │  Cards                 │
├──────────────┼────────┼────────┼───────────┼─────────┼────────────────────────┤
│ Settlement   │Instant │Instant │ T+1 to T+3│Same-day │ T+1 to T+2             │
│              │(&lt;20s)  │(&lt;20s)  │(Same-Day: │ (RTGS)  │                        │
│              │        │        │ 3 windows)│         │                        │
├──────────────┼────────┼────────┼───────────┼─────────┼────────────────────────┤
│ Availability │24/7/365│24/7/365│Business   │Business │ 24/7 (auth)            │
│              │        │        │days + Same│  hours  │ Settlement: business   │
│              │        │        │-Day       │         │ days                   │
├──────────────┼────────┼────────┼───────────┼─────────┼────────────────────────┤
│ Direction    │ Push   │ Push   │ Both      │ Push    │ Pull                   │
│              │        │  +RfP  │           │         │                        │
├──────────────┼────────┼────────┼───────────┼─────────┼────────────────────────┤
│ Max Amount   │ $10M   │ $10M   │ $1M       │Unlimited│ Varies ($25K-$100K     │
│ (2025)       │(Feb 9) │(Nov 12)│(Same-Day) │         │ typical)               │
├──────────────┼────────┼────────┼───────────┼─────────┼────────────────────────┤
│ Cost per     │$0.50-  │$0.50-  │ $0.20-    │ $10-$30 │ $2.00-$3.50            │
│ $100         │$1.00   │$1.00   │ $1.50     │         │                        │
├──────────────┼────────┼────────┼───────────┼─────────┼────────────────────────┤
│ Returns/     │ None   │ None   │ Yes       │ Very    │ Yes (chargebacks)      │
│ Disputes     │(irrevo-│(irrevo-│(60 days)  │ rare    │ (120-180 days)         │
│              │cable)  │cable)  │           │         │                        │
├──────────────┼────────┼────────┼───────────┼─────────┼────────────────────────┤
│ Participating│1,000+  │1,500+  │11,000+    │9,000+   │ Universal              │
│ FIs          │        │        │           │         │ (merchant acceptance)  │
├──────────────┼────────┼────────┼───────────┼─────────┼────────────────────────┤
│ Message      │ISO     │ISO     │ NACHA     │Fedwire/ │ ISO 8583               │
│ Format       │20022   │20022   │ format    │SWIFT    │                        │
├──────────────┼────────┼────────┼───────────┼─────────┼────────────────────────┤
│ Best Use     │Instant │Instant │Recurring, │Large B2B│ Consumer POS,          │
│ Cases        │payouts,│payouts,│B2B,       │Real     │ e-commerce,            │
│              │gig     │urgent  │subscrip-  │estate,  │ international          │
│              │economy │payments│tions      │securit. │                        │
└──────────────┴────────┴────────┴───────────┴─────────┴────────────────────────┘
```

## RTP Network (The Clearing House)

The RTP network, operated by The Clearing House, launched in November 2017 as the first real-time payment rail in the US.

### RTP Transaction Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        RTP TRANSACTION FLOW                                 │
│                         (Settlement < 20 seconds)                           │
└─────────────────────────────────────────────────────────────────────────────┘

  PAYER                    PAYER FI           RTP NETWORK        PAYEE FI                 PAYEE
  (Sender)                 (Bank A)          (TCH Clearing)      (Bank B)               (Receiver)
     │                         │                    │                 │                      │
     │                         │                    │                 │                      │
     │  1. Initiate Payment    │                    │                 │                      │
     │  (mobile/web app)       │                    │                 │                      │
     │────────────────────────▶│                    │                 │                      │
     │                         │                    │                 │                      │
     │                         │  2. Validate:      │                 │                      │
     │                         │     • Funds        │                 │                      │
     │                         │     • Limits       │                 │                      │
     │                         │     • Fraud check  │                 │                      │
     │                         │                    │                 │                      │
     │                         │  3. Send to RTP    │                 │                      │
     │                         │─────────────────────────────────────▶│                      │
     │                         │                    │                 │                      │
     │                         │                    │  4. Route to    │                      │
     │                         │                    │     Payee FI    │                      │
     │                         │                    │─────────────────▶                      │
     │                         │                    │                 │                      │
     │                         │                    │                 │  5. Validate:        │
     │                         │                    │                 │     • Account exists │
     │                         │                    │                 │     • Account active │
     │                         │                    │                 │     • Can receive    │
     │                         │                    │                 │                      │
     │                         │                    │                 │  6. Credit account   │
     │                         │                    │                 │──────────────────────▶
     │                         │                    │                 │                      │
     │                         │                    │                 │  7. Send confirmation│
     │                         │                    │  8. Confirm     │◀─────────────────────│
     │                         │  9. Confirm        │◀─────────────────                      │
     │  10. Confirmation       │◀─────────────────  │                 │                      │
     │◀────────────────────────│                    │                 │                      │
     │                         │                    │                 │                      │
     │                         │                    │                 │                      │
     │                    11. SETTLEMENT (Immediate - same message)                          │
     │                         │                    │                 │                      │
     │                         │  Debit Payer FI    │                 │                      │
     │                         │◀────────────────────                 │                      │
     │                         │                    │                 │                      │
     │                         │                    │  Credit Payee FI│                      │
     │                         │                    │─────────────────▶                      │
     │                         │                    │                 │                      │

  TOTAL TIME: 5-20 seconds from initiation to funds available

  KEY DIFFERENCES FROM ACH:
  ────────────────────────
  • No batch processing (each transaction processed individually)
  • No end-of-day settlement (settles as transaction processes)
  • No return windows (irrevocable once confirmed)
  • Works 24/7/365 (no business day restrictions)
```

### RTP Growth and Statistics

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       RTP NETWORK GROWTH (2017-2024)                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LAUNCH: November 2017                                                      │
│  ──────────────────────                                                     │
│  Initial participants: 25 financial institutions                            │
│  Coverage: ~50% of US demand deposit accounts                               │
│                                                                             │
│  2024 STATISTICS:                                                           │
│  ────────────────                                                           │
│  Volume:          343 million payments (+38% YoY)                           │
│  Value:           $246 billion (+94% YoY)                                   │
│  Participants:    1,000+ financial institutions (+67% growth in 2024)       │
│  Daily Volume:    1M+ transactions per day                                  │
│                                                                             │
│  Average Transaction Size: $717 ($246B / 343M)                              │
│                                                                             │
│  TRANSACTION LIMIT EVOLUTION:                                               │
│  ─────────────────────────────                                              │
│  2017 Launch:        $25,000                                                │
│  March 2020:         $100,000                                               │
│  July 2022:          $1,000,000                                             │
│  Feb 9, 2025:        $10,000,000 (upcoming)                                 │
│                                                                             │
│  TOP USE CASES (2024):                                                      │
│  ──────────────────────                                                     │
│  1. Gig economy / instant payouts (DoorDash, Uber, Lyft)                   │
│  2. Insurance claim payments                                                │
│  3. Account-to-account transfers (A2A)                                      │
│  4. B2B urgent payments                                                     │
│  5. Earned wage access (on-demand salary)                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### RTP Pricing Model

Unlike ACH (which is very cheap), RTP has higher per-transaction costs:

| Pricing Component | Cost | Billed To |
|-------------------|------|-----------|
| **Sending FI fee** | $0.045/transaction | Payer's bank |
| **Receiving FI fee** | $0.01/transaction | Payee's bank |
| **Network fee** | Varies | Both FIs |
| **Typical merchant cost** | $0.50-$1.00/transaction | End customer (passed through) |

:::tip RTP Cost vs Value
While RTP costs 2-5x more than ACH ($0.50-$1.00 vs $0.20-$0.30), the instant settlement provides significant value:
- Reduces working capital needs
- Enables just-in-time payments
- Improves customer experience
- Eliminates return risk (irrevocable)

For gig economy platforms paying drivers, the instant payout experience justifies the higher cost.
:::

### Request for Payment (RfP)

One of RTP's most powerful features:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      REQUEST FOR PAYMENT (RfP) FLOW                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Traditional payments are "pull" (merchant debits customer account)         │
│  RfP enables "push" (customer sends payment on request)                     │
│                                                                             │
│  EXAMPLE: Utility Bill Payment via RfP                                      │
│  ──────────────────────────────────────                                     │
│                                                                             │
│  DAY 1: Bill Generated                                                      │
│  ────────────────────                                                       │
│                                                                             │
│    Utility Company                                             Customer     │
│         │                                                          │         │
│         │  1. Send RfP via RTP network                            │         │
│         │  ────────────────────────────────────────────────────▶  │         │
│         │                                                          │         │
│         │     RfP Details:                                         │         │
│         │     • Amount: $150.00                                    │         │
│         │     • Due Date: Jan 15, 2025                             │         │
│         │     • Account #: 123-456-789                             │         │
│         │     • Description: "Electric bill for Dec 2024"          │         │
│         │                                                          │         │
│         │                                                          │  2. Customer sees RfP │
│         │                                                          │     in mobile banking │
│         │                                                          │     app               │
│         │                                                          │                       │
│         │  3. Customer approves/declines                           │                       │
│         │  ◀────────────────────────────────────────────────────   │                       │
│         │                                                          │                       │
│         │     Customer Actions:                                    │                       │
│         │     [ Approve & Pay Now ]                                │                       │
│         │     [ Schedule for Jan 15 ]                              │                       │
│         │     [ Decline ]                                          │                       │
│         │                                                          │                       │
│         │                                                          │  Customer clicks      │
│         │                                                          │  "Approve & Pay Now"  │
│         │                                                          │                       │
│         │  4. RTP payment initiated (customer → utility)           │                       │
│         │  ◀────────────────────────────────────────────────────   │                       │
│         │                                                          │                       │
│         │  5. Payment settles instantly                            │                       │
│         │     Utility receives $150.00 in &lt;20 seconds              │                       │
│         │                                                          │                       │
│                                                                                            │
│  BENEFITS:                                                                                 │
│  ─────────                                                                                 │
│  • No ACH debit authorization needed (customer initiates)                                 │
│  • No return risk (customer explicitly approves)                                          │
│  • Better customer control (approve/decline/schedule)                                     │
│  • Rich remittance data (invoice number, description)                                     │
│  • Instant settlement                                                                     │
│                                                                                            │
│  VS. TRADITIONAL ACH DEBIT:                                                                │
│  ──────────────────────────                                                                │
│  ACH: Merchant debits customer → Customer can return/dispute for 60 days                  │
│  RfP: Customer approves payment → Irrevocable, no returns                                 │
│                                                                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

## FedNow Service (Federal Reserve)

FedNow launched July 20, 2023, as the Federal Reserve's instant payment service.

### FedNow vs RTP Comparison

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          FedNow vs RTP COMPARISON                           │
├──────────────────┬──────────────────────────┬───────────────────────────────┤
│   Attribute      │        FedNow            │           RTP                 │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Operator         │ Federal Reserve (govt)   │ The Clearing House (private)  │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Launch Date      │ July 2023                │ November 2017 (6 years older) │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Participants     │ 1,500+ FIs (all 50 states)│ 1,000+ FIs                   │
│ (2024-2025)      │                          │                              │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Transaction Limit│ $10M (Nov 12, 2025)      │ $1M → $10M (Feb 9, 2025)      │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Pricing (FI)     │ $0.045/transaction       │ $0.045 send, $0.01 receive    │
│                  │ (sender pays, receiver   │                              │
│                  │ free for first 5 years)  │                              │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Request for      │ Planned (not yet live)   │ Available since 2021          │
│ Payment (RfP)    │                          │                              │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Reach            │ Broader (Fed has         │ Concentrated in largest banks │
│                  │ universal FI coverage)   │ (but growing rapidly)         │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Growth Rate      │ 645% YoY (Q3 2024-2025)  │ 38% YoY (2024)                │
│                  │ (from low base)          │                              │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Settlement       │ Instant (&lt;20 sec)        │ Instant (&lt;20 sec)             │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Availability     │ 24/7/365                 │ 24/7/365                      │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Message Format   │ ISO 20022                │ ISO 20022                     │
├──────────────────┼──────────────────────────┼───────────────────────────────┤
│ Fraud Monitoring │ Fed oversight            │ TCH oversight                 │
└──────────────────┴──────────────────────────┴───────────────────────────────┘
```

### FedNow Growth Trajectory

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     FedNow SERVICE GROWTH (2023-2025)                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  JULY 2023: LAUNCH                                                          │
│  ──────────────────                                                         │
│  Initial participants: 35 financial institutions                            │
│  Certified service providers: 16                                            │
│                                                                             │
│  Q3 2024:                                                                   │
│  ────────                                                                   │
│  Participating FIs: ~600                                                    │
│  Transaction volume: Low (ramping up)                                       │
│                                                                             │
│  Q3 2025:                                                                   │
│  ────────                                                                   │
│  Participating FIs: 1,500+ (all 50 states)                                  │
│  Growth: 645% YoY increase in transaction volume                            │
│  Estimated annual volume: ~10 million payments                              │
│  Estimated annual value: $20 billion+                                       │
│                                                                             │
│  TRANSACTION LIMIT EVOLUTION:                                               │
│  ─────────────────────────────                                              │
│  July 2023 launch:       $500,000                                           │
│  Nov 12, 2025:           $10,000,000                                        │
│                                                                             │
│  PROJECTION (2027):                                                         │
│  ───────────────────                                                        │
│  Expected to reach 100M+ transactions/year                                  │
│  May overtake RTP in volume (broader FI reach)                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Why Two Networks?

A common question: Why does the US have both RTP and FedNow?

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      WHY RTP AND FedNow CO-EXIST?                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  HISTORICAL CONTEXT:                                                        │
│  ───────────────────                                                        │
│  • RTP launched 2017 (private sector initiative by The Clearing House)      │
│  • Fed announced FedNow development in 2019                                 │
│  • Community banks wanted Fed-operated option (concern about private        │
│    monopoly, pricing power)                                                 │
│  • Fed's mandate: ensure all FIs have access to payment infrastructure      │
│                                                                             │
│  ARGUMENTS FOR FedNow:                                                      │
│  ──────────────────────                                                     │
│  ✓ Universal access (all FIs can join, not just TCH members)                │
│  ✓ Non-profit pricing (Fed doesn't need to profit)                          │
│  ✓ Regulatory oversight (Fed can ensure compliance)                         │
│  ✓ Public good mandate (financial inclusion)                                │
│                                                                             │
│  ARGUMENTS FOR RTP:                                                         │
│  ────────────────────                                                       │
│  ✓ First-mover advantage (6 years head start)                               │
│  ✓ Innovation speed (private sector moves faster)                           │
│  ✓ Market-driven features (RfP, fraud detection)                            │
│  ✓ Proven scale (343M payments in 2024)                                     │
│                                                                             │
│  LIKELY OUTCOME:                                                            │
│  ────────────────                                                           │
│  Both networks will co-exist, similar to:                                   │
│  • Visa and Mastercard in card networks                                     │
│  • ACH operators (Fed and EPN/TCH)                                          │
│                                                                             │
│  FIs may participate in both networks                                       │
│  Interoperability may develop over time                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

:::warning Network Fragmentation
Unlike most countries with a single instant payment rail (UK: Faster Payments, Europe: SEPA Instant, India: UPI), the US has two networks. This creates integration complexity for platforms, which must choose one, both, or use aggregators.
:::

## Wire Transfers: CHIPS and Fedwire

Wire transfers predate real-time payment rails and serve large-value, time-sensitive transactions.

### CHIPS (Clearing House Interbank Payments System)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CHIPS (The Clearing House)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  OVERVIEW:                                                                  │
│  ────────                                                                   │
│  Operator:        The Clearing House                                        │
│  Participants:    42 largest financial institutions                         │
│  Daily Volume:    ~500,000 payments                                         │
│  Daily Value:     ~$1.8 trillion                                            │
│  Settlement:      End-of-day net settlement                                 │
│  Hours:           9:00 PM (prior day) to 5:00 PM ET                         │
│                                                                             │
│  SETTLEMENT MODEL: Net Settlement                                           │
│  ────────────────────────────────────                                       │
│  Unlike Fedwire (gross settlement), CHIPS uses multilateral net settlement: │
│                                                                             │
│  Throughout the day:                                                        │
│  • Participants send/receive payments                                       │
│  • CHIPS tracks net positions                                               │
│                                                                             │
│  End of day:                                                                │
│  • CHIPS calculates each bank's net position                                │
│  • Net debtors send funds to CHIPS                                          │
│  • CHIPS distributes to net creditors                                       │
│  • Final settlement via Fedwire                                             │
│                                                                             │
│  TYPICAL USES:                                                              │
│  ──────────────                                                             │
│  • International payments (USD leg of FX transactions)                      │
│  • Large interbank transfers                                                │
│  • Securities settlement                                                    │
│  • Correspondent banking                                                    │
│                                                                             │
│  COST:                                                                      │
│  ──────                                                                     │
│  Varies by participant volume, typically $10-$30 per transaction            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Fedwire (Federal Reserve)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FEDWIRE (Federal Reserve)                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  OVERVIEW:                                                                  │
│  ────────                                                                   │
│  Operator:        Federal Reserve Banks                                     │
│  Participants:    9,000+ financial institutions                             │
│  Daily Volume:    ~800,000 payments                                         │
│  Daily Value:     ~$4 trillion                                              │
│  Settlement:      Real-Time Gross Settlement (RTGS)                         │
│  Hours:           9:00 PM (prior day) to 6:30 PM ET                         │
│                                                                             │
│  SETTLEMENT MODEL: Real-Time Gross Settlement (RTGS)                        │
│  ──────────────────────────────────────────────────────                     │
│  Each transaction settles individually and immediately:                     │
│                                                                             │
│  1. Sender initiates wire transfer                                          │
│  2. Fed debits sender's account immediately                                 │
│  3. Fed credits receiver's account immediately                              │
│  4. Settlement is final and irrevocable                                     │
│                                                                             │
│  No netting, no batch processing, no delays                                 │
│                                                                             │
│  TYPICAL USES:                                                              │
│  ──────────────                                                             │
│  • Real estate transactions (home purchases, commercial property)           │
│  • Large business payments (>$1M)                                           │
│  • Securities settlement (bonds, stocks)                                    │
│  • International wire transfers (outgoing USD)                              │
│  • Time-sensitive, high-value transfers                                     │
│                                                                             │
│  COST:                                                                      │
│  ──────                                                                     │
│  Fed fee: $0.715 per transaction (to FI)                                    │
│  FI markup: $10-$35 (typical customer charge)                               │
│  Total: $10.72-$35.72 per wire                                              │
│                                                                             │
│  SECURITY:                                                                  │
│  ──────────                                                                 │
│  • Most secure payment method (Fed-operated)                                │
│  • Requires explicit authorization (not automated)                          │
│  • Non-reversible (finality)                                                │
│  • Fraud rare but high-impact when it occurs                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### CHIPS vs Fedwire Comparison

| Attribute | CHIPS | Fedwire |
|-----------|-------|---------|
| **Operator** | The Clearing House (private) | Federal Reserve (government) |
| **Participants** | 42 largest banks | 9,000+ FIs |
| **Settlement** | Net (end of day) | Gross (real-time) |
| **Daily Volume** | ~500K | ~800K |
| **Daily Value** | ~$1.8T | ~$4T |
| **Hours** | 9 PM - 5 PM ET | 9 PM - 6:30 PM ET |
| **Typical Use** | International, interbank | Domestic, real estate, securities |
| **Cost** | $10-$30 | $10.72-$35.72 |

## Use Case Comparison

### When to Use Each Rail

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     PAYMENT RAIL SELECTION GUIDE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SCENARIO: Gig Economy Platform (Uber, DoorDash)                            │
│  ─────────────────────────────────────────────────                          │
│  Need: Instant payouts to drivers/dashers                                   │
│  Frequency: Multiple times per day                                          │
│  Amount: $20-$500 per payout                                                │
│                                                                             │
│  ✓ BEST: RTP or FedNow                                                      │
│    • Instant settlement (driver sees money in seconds)                      │
│    • 24/7 availability (payouts anytime)                                    │
│    • Irrevocable (no return risk)                                           │
│    • Cost justified by UX improvement                                       │
│                                                                             │
│  ✗ NOT: ACH (too slow, driver expects instant)                              │
│  ✗ NOT: Wires (too expensive for small amounts)                             │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SCENARIO: SaaS Subscription Platform                                       │
│  ──────────────────────────────────                                         │
│  Need: Recurring monthly charges                                            │
│  Frequency: Once per month                                                  │
│  Amount: $50-$500/month                                                     │
│                                                                             │
│  ✓ BEST: ACH                                                                │
│    • Lowest cost ($0.20-$0.50 vs $0.50-$1.00 RTP)                           │
│    • T+1/T+2 settlement acceptable                                          │
│    • Pull mechanism (merchant-initiated)                                    │
│    • Proven reliability                                                     │
│                                                                             │
│  ✗ NOT: RTP/FedNow (unnecessary cost for non-urgent)                        │
│  ✗ NOT: Cards (2-3x more expensive)                                         │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SCENARIO: Real Estate Closing                                              │
│  ────────────────────────────────                                           │
│  Need: Secure, irrevocable transfer                                         │
│  Frequency: One-time                                                        │
│  Amount: $50,000 - $5,000,000                                               │
│                                                                             │
│  ✓ BEST: Fedwire                                                            │
│    • Proven for real estate transactions                                    │
│    • Real-time gross settlement (RTGS)                                      │
│    • Most secure (Fed-operated)                                             │
│    • No amount limit                                                        │
│    • Title companies trust wires                                            │
│                                                                             │
│  ✓ ALTERNATIVE: RTP/FedNow (if < $10M, after Feb/Nov 2025 limit increases) │
│  ✗ NOT: ACH (return risk unacceptable)                                      │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SCENARIO: Insurance Claim Payment                                          │
│  ───────────────────────────────────                                        │
│  Need: Fast settlement to policyholder                                      │
│  Frequency: Ad-hoc (when claim approved)                                    │
│  Amount: $500 - $100,000                                                    │
│                                                                             │
│  ✓ BEST: RTP or FedNow                                                      │
│    • Fast settlement (critical in emergencies)                              │
│    • Customer satisfaction (claim paid instantly)                           │
│    • Cost acceptable for customer goodwill                                  │
│                                                                             │
│  ✓ ALTERNATIVE: Same-Day ACH (if 3 daily windows acceptable)                │
│  ✗ NOT: Standard ACH (T+2 too slow for urgent need)                         │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SCENARIO: B2B Invoice Payment                                              │
│  ───────────────────────────────                                            │
│  Need: Large invoices with remittance data                                  │
│  Frequency: Weekly/monthly                                                  │
│  Amount: $10,000 - $500,000                                                 │
│                                                                             │
│  ✓ BEST: ACH CCD (with addenda for remittance)                              │
│    • Lowest cost for large amounts                                          │
│    • Addenda records for invoice matching                                   │
│    • T+1/T+2 acceptable for B2B terms                                       │
│                                                                             │
│  ✓ ALTERNATIVE: RTP/FedNow RfP (if instant settlement needed)               │
│    • Request for Payment enables rich remittance data                       │
│    • Instant settlement improves working capital                            │
│    • Higher cost justified by faster cash flow                              │
│                                                                             │
│  ✗ NOT: Cards (too expensive for large B2B amounts)                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## PayFac Integration Considerations

### Platform Decision: Build vs Partner

| Approach | Pros | Cons | Best For |
|----------|------|------|----------|
| **Build direct (connect to RTP/FedNow)** | Full control, lowest transaction fees, feature flexibility | High upfront cost ($500K-$2M), compliance burden, ongoing maintenance | Large platforms (>$1B annual volume) |
| **Partner with processor** | Faster launch (weeks vs months), shared compliance, proven infrastructure | Higher per-transaction fees, limited feature control, dependency | Most PayFac platforms |
| **Use aggregator (Stripe, Modern Treasury)** | Easiest integration (API), no compliance burden, multi-rail support | Highest fees, least control, vendor lock-in | Startups, SMB-focused platforms |

### NestJS Integration Example (Modern Treasury)

```typescript
// real-time-payment.service.ts
import { Injectable } from '@nestjs/common';
import { ModernTreasuryClient } from './clients/modern-treasury.client';

export enum PaymentRail {
  RTP = 'rtp',
  FEDNOW = 'fednow',
  WIRE = 'wire',
  ACH = 'ach',
}

@Injectable()
export class RealTimePaymentService {
  constructor(private modernTreasury: ModernTreasuryClient) {}

  /**
   * Send instant payment via RTP or FedNow
   *
   * @param merchantId - Sub-merchant ID
   * @param recipientBankAccount - Recipient's bank account details
   * @param amount - Amount in cents
   * @param rail - Payment rail (RTP or FedNow)
   * @param description - Payment description (up to 140 chars)
   */
  async sendInstantPayment(
    merchantId: string,
    recipientBankAccount: {
      routingNumber: string;
      accountNumber: string;
      accountName: string;
    },
    amount: number,
    rail: PaymentRail.RTP | PaymentRail.FEDNOW,
    description: string,
  ) {
    // Validate amount (must be ≤ $10M for both networks as of 2025)
    const maxAmount = 10_000_000_00; // $10M in cents
    if (amount > maxAmount) {
      throw new Error(`Amount exceeds ${rail.toUpperCase()} limit of $10,000,000`);
    }

    // Check merchant balance (instant payments require prefunding)
    const merchantBalance = await this.getMerchantBalance(merchantId);
    if (merchantBalance < amount) {
      throw new Error('Insufficient merchant balance for instant payout');
    }

    // Create payment order
    const paymentOrder = await this.modernTreasury.createPaymentOrder({
      type: 'payment',
      amount,
      direction: 'credit', // Sending money
      originatingAccountId: await this.getMerchantAccountId(merchantId),
      receivingAccount: {
        routingNumber: recipientBankAccount.routingNumber,
        accountNumber: recipientBankAccount.accountNumber,
        accountName: recipientBankAccount.accountName,
      },
      description,
      statementDescriptor: description.substring(0, 18), // Max 18 chars
      priority: 'high',
      effectiveDate: new Date().toISOString().split('T')[0], // Today
      ledgerTransaction: {
        description: `${rail.toUpperCase()} payout - ${description}`,
      },
      metadata: {
        merchantId,
        paymentRail: rail,
      },
    });

    // Modern Treasury automatically selects RTP/FedNow based on receiving bank capabilities
    // and "priority: high" flag

    return {
      paymentId: paymentOrder.id,
      status: paymentOrder.status, // 'processing', 'sent', 'completed', 'failed'
      expectedSettlement: 'instant', // &lt;20 seconds
      estimatedFee: this.calculateRTPFee(amount),
    };
  }

  /**
   * Send wire transfer (Fedwire)
   */
  async sendWireTransfer(
    merchantId: string,
    recipientBankAccount: {
      routingNumber: string;
      accountNumber: string;
      accountName: string;
      address?: string;
    },
    amount: number,
    description: string,
    beneficiaryInfo?: {
      name: string;
      address: string;
      reference: string;
    },
  ) {
    // Check Fedwire hours (9 PM prior day to 6:30 PM ET)
    const now = new Date();
    const etHour = now.getUTCHours() - 5; // Rough EST conversion
    if (etHour >= 18.5 || etHour < 21) {
      throw new Error('Fedwire is not available at this time (hours: 9 PM - 6:30 PM ET)');
    }

    const paymentOrder = await this.modernTreasury.createPaymentOrder({
      type: 'wire',
      amount,
      direction: 'credit',
      originatingAccountId: await this.getMerchantAccountId(merchantId),
      receivingAccount: {
        routingNumber: recipientBankAccount.routingNumber,
        accountNumber: recipientBankAccount.accountNumber,
        accountName: recipientBankAccount.accountName,
      },
      description,
      priority: 'high',
      remittanceInformation: beneficiaryInfo?.reference,
      metadata: {
        merchantId,
        paymentRail: 'wire',
        beneficiaryName: beneficiaryInfo?.name,
        beneficiaryAddress: beneficiaryInfo?.address,
      },
    });

    return {
      paymentId: paymentOrder.id,
      status: paymentOrder.status,
      expectedSettlement: 'same-day',
      estimatedFee: this.calculateWireFee(),
    };
  }

  /**
   * Handle payment status webhook from Modern Treasury
   */
  async handlePaymentStatusWebhook(payload: {
    eventType: string;
    paymentOrderId: string;
    status: string;
    failureReason?: string;
  }) {
    switch (payload.eventType) {
      case 'payment_order.completed':
        // Payment successfully sent and confirmed by receiving bank
        await this.updatePaymentStatus(payload.paymentOrderId, 'completed');
        break;

      case 'payment_order.returned':
        // Payment was returned (rare for RTP/FedNow due to pre-validation)
        await this.handlePaymentReturn(payload.paymentOrderId, payload.failureReason);
        break;

      case 'payment_order.failed':
        // Payment failed (invalid account, network error, etc.)
        await this.handlePaymentFailure(payload.paymentOrderId, payload.failureReason);
        break;
    }
  }

  /**
   * Calculate RTP/FedNow fee
   */
  private calculateRTPFee(amount: number): number {
    // Typical pricing: $0.50-$1.00 per transaction
    // Assume $0.75 base + 0.1% of amount
    const baseFee = 75; // $0.75 in cents
    const variableFee = Math.floor(amount * 0.001); // 0.1%
    return Math.min(baseFee + variableFee, 100); // Cap at $1.00
  }

  /**
   * Calculate wire transfer fee
   */
  private calculateWireFee(): number {
    return 2500; // $25.00 flat fee
  }
}
```

### Request for Payment (RfP) Implementation

```typescript
// request-for-payment.service.ts
import { Injectable } from '@nestjs/common';
import { ModernTreasuryClient } from './clients/modern-treasury.client';

@Injectable()
export class RequestForPaymentService {
  constructor(private modernTreasury: ModernTreasuryClient) {}

  /**
   * Send Request for Payment (RfP) via RTP network
   *
   * Example: Utility bill, invoice payment
   */
  async sendPaymentRequest(
    merchantId: string,
    customerBankAccount: {
      routingNumber: string;
      accountNumber: string;
    },
    amount: number,
    dueDate: Date,
    invoiceNumber: string,
    description: string,
  ) {
    // Create RfP via Modern Treasury (or direct RTP API)
    const rfp = await this.modernTreasury.createPaymentRequest({
      type: 'request_for_payment',
      amount,
      direction: 'debit', // Requesting money from customer
      counterpartyAccount: {
        routingNumber: customerBankAccount.routingNumber,
        accountNumber: customerBankAccount.accountNumber,
      },
      dueDate: dueDate.toISOString(),
      description,
      metadata: {
        merchantId,
        invoiceNumber,
      },
    });

    // RfP is sent to customer's bank
    // Customer will see it in mobile banking app

    return {
      requestId: rfp.id,
      status: 'pending', // Awaiting customer response
      expiresAt: dueDate,
    };
  }

  /**
   * Handle RfP response webhook
   */
  async handleRfPResponse(payload: {
    requestId: string;
    status: 'approved' | 'declined' | 'expired';
    paymentId?: string;
  }) {
    if (payload.status === 'approved') {
      // Customer approved - RTP payment will be initiated automatically
      // Funds will arrive in &lt;20 seconds
      await this.updateInvoiceStatus(payload.requestId, 'paid');
    } else if (payload.status === 'declined') {
      // Customer declined payment request
      await this.updateInvoiceStatus(payload.requestId, 'declined');
      // Merchant may follow up with customer or send reminder
    } else if (payload.status === 'expired') {
      // RfP expired without response
      await this.updateInvoiceStatus(payload.requestId, 'expired');
      // Merchant may resend RfP or use alternative collection method
    }
  }
}
```

## Self-Assessment Questions

1. **What is the key difference between RTP and ACH in terms of settlement timing?**

2. **Why are RTP and FedNow payments irrevocable (no returns), while ACH allows returns for up to 60 days?**

3. **When would you choose Fedwire over RTP/FedNow for a payment?**

4. **What is Request for Payment (RfP), and how does it differ from traditional merchant-initiated debits?**

5. **A platform wants to offer instant payouts to gig workers. Which payment rail should they use, and why?**

See [quiz.md](./quiz.md) for answers and additional questions.

## Related Topics

- [Alternative Payment Methods Overview](./index.md) - Compare real-time rails to ACH, cards, wallets
- [ACH & NACHA](./ach-nacha.md) - Traditional batch processing alternative
- [Transaction Lifecycle](../../fundamentals/transaction-lifecycle/overview.md) - Card payment timing comparison
- [PayFac Implementation](../implementation.md) - Platform architecture considerations

## References

### Official Sources

- [RTP Network (The Clearing House)](https://www.theclearinghouse.org/payment-systems/rtp) - Official RTP documentation
- [FedNow Service](https://www.frbservices.org/financial-services/fednow) - Federal Reserve instant payments
- [Fedwire Funds Service](https://www.frbservices.org/financial-services/wires) - Wire transfer system
- [CHIPS](https://www.theclearinghouse.org/payment-systems/chips) - Large-value payment system

### Industry Reports

- The Clearing House RTP Network Growth Reports (quarterly)
- Federal Reserve FedNow Adoption Statistics
- ACI Worldwide Real-Time Payments Report
- Mercator Advisory Group Instant Payments Research

### Integration Partners

- [Modern Treasury](https://www.moderntreasury.com/) - Multi-rail payment operations platform
- [Dwolla](https://www.dwolla.com/) - ACH and real-time payment APIs
- [Finix](https://www.finixpayments.com/) - PayFac platform with RTP support
- [Stripe Treasury](https://stripe.com/treasury) - Banking-as-a-Service with instant payouts
