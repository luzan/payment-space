---
title: "ACH & NACHA Rules"
description: "Automated Clearing House processing, NACHA operating rules, return codes, and risk monitoring"
sidebar_position: 2
sidebar_label: "ACH & NACHA"
keywords:
  - ACH payments
  - NACHA rules
  - ACH returns
  - Same-Day ACH
  - ACH processing
  - return codes
---

# ACH & NACHA Rules

> **Last Updated:** 2025-12-24
> **Status:** Complete

## Quick Reference

**ACH Network Statistics (2024):**

- **Volume:** 33.56 billion payments, $86.2 trillion value (+6.7% YoY)
- **Same-Day ACH:** 1.24 billion payments (+45.3% YoY), $3.23 trillion value
- **Cost:** $0.20-$1.50 per transaction vs $2.00-$3.50 for cards
- **Settlement:** T+1 to T+3 (Standard), Same-day (3 windows)

**Critical NACHA Thresholds:**

- **Administrative Returns:** 3% limit
- **Overall Returns:** 15% limit
- **Unauthorized Returns:** 0.5% limit

**Same-Day ACH Windows (2024):**

- **Morning:** 10:30 AM ET submission, 1:00 PM ET settlement
- **Afternoon:** 2:45 PM ET submission, 5:00 PM ET settlement
- **Evening:** 4:45 PM ET submission (debits only), settlement next morning

:::tip Cost Savings
For a $100 transaction, ACH costs $0.20-$1.50 vs $2.00-$3.50 for cards (70-90% savings). For recurring billing, this difference compounds significantly.
:::

## What is ACH?

The Automated Clearing House (ACH) network is a batch-based electronic payment system that processes bank-to-bank transfers. Unlike card networks (which process transactions in real-time), ACH operates on a batch schedule.

### ACH vs Cards: Fundamental Differences

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                           ACH vs CARD NETWORKS                                │
├──────────────────┬────────────────────────────┬───────────────────────────────┤
│   Attribute      │          ACH               │           Cards               │
├──────────────────┼────────────────────────────┼───────────────────────────────┤
│ Processing       │ Batch (end of day or       │ Real-time (1-3 seconds)       │
│                  │ Same-Day windows)          │                               │
├──────────────────┼────────────────────────────┼───────────────────────────────┤
│ Settlement       │ T+1 to T+3                 │ T+1 to T+2                    │
│                  │ (Same-Day: hours)          │                               │
├──────────────────┼────────────────────────────┼───────────────────────────────┤
│ Authorization    │ No real-time auth          │ Real-time authorization       │
│                  │ (risk is on originator)    │ (issuer approves/declines)    │
├──────────────────┼────────────────────────────┼───────────────────────────────┤
│ Returns/Disputes │ Up to 60 days (some codes) │ 120-180 days (chargebacks)    │
│                  │ 2 business days (R01)      │                               │
├──────────────────┼────────────────────────────┼───────────────────────────────┤
│ Cost (per $100)  │ $0.20-$1.50                │ $2.00-$3.50                   │
├──────────────────┼────────────────────────────┼───────────────────────────────┤
│ Direction        │ Push OR Pull               │ Pull (merchant-initiated)     │
├──────────────────┼────────────────────────────┼───────────────────────────────┤
│ Network Rules    │ NACHA Operating Rules      │ Visa/MC/Amex network rules    │
├──────────────────┼────────────────────────────┼───────────────────────────────┤
│ Fraud Protection │ Minimal (returns only)     │ 3DS, tokenization, chargeback │
│                  │                            │ protections                   │
├──────────────────┼────────────────────────────┼───────────────────────────────┤
│ Best Use Cases   │ Recurring billing, B2B,    │ One-time purchases, POS,      │
│                  │ large transactions         │ international, mobile         │
└──────────────────┴────────────────────────────┴───────────────────────────────┘
```

### ACH Terminology

| Term | Definition |
|------|------------|
| **Originator** | The entity initiating the ACH transaction (merchant, employer, biller) |
| **ODFI (Originating Depository Financial Institution)** | The bank that receives the ACH file from the originator |
| **RDFI (Receiving Depository Financial Institution)** | The bank that receives funds (credit) or sends funds (debit) |
| **Receiver** | The account holder whose account is credited or debited |
| **SEC Code** | Standard Entry Class code indicating transaction type (WEB, PPD, CCD, etc.) |
| **Return** | Rejected ACH transaction sent back by RDFI |
| **NOC (Notification of Change)** | Request to update account information (not a return) |

## ACH Transaction Flow

### Standard ACH Processing

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      STANDARD ACH TRANSACTION FLOW                          │
│                           (T+1 to T+3 Settlement)                           │
└─────────────────────────────────────────────────────────────────────────────┘

  DAY 0 (Monday)                    DAY 1 (Tuesday)              DAY 2 (Wednesday)
  ──────────────                    ───────────────              ─────────────────

  ORIGINATOR                         ACH OPERATOR                 RECEIVER
  (Merchant)                         (Fed/EPN)                    (Customer)
      │                                   │                             │
      │ 1. Create ACH file                │                             │
      │    (batch of transactions)        │                             │
      │                                   │                             │
      ▼                                   │                             │
   ┌──────┐                               │                             │
   │ ODFI │  2. Submit file to            │                             │
   │      │─────ACH operator──────────────▶                             │
   └──────┘     (end of day)              │                             │
      │                                   │                             │
      │                              3. Process                         │
      │                                 batches                         │
      │                                overnight                        │
      │                                   │                             │
      │                                   │  4. Send to receiving       │
      │                                   │     banks (morning)         │
      │                                   │                             │
      │                                   ▼                             │
      │                              ┌────────┐                         │
      │                              │  RDFI  │  5. Post to accounts    │
      │                              │        │────(morning)───────────▶│
      │                              └────────┘                         │
      │                                   │                             │
      │                                   │                        ┌─────────┐
      │                                   │                        │Customer │
      │                                   │                        │ Account │
      │                                   │                        │ Updated │
      │                                   │                        └─────────┘
      │                                   │                             │
      │                              6. Settlement                      │
      │                                 (funds move)                    │
      │◀────────────────────────────────────────────────────────────────│
      │                                                                 │
   Merchant                                                          Customer
   funded                                                          debited


  TIMING BREAKDOWN:
  ─────────────────

  Monday 6:00 PM     │  Merchant submits ACH file to ODFI
  Monday 11:59 PM    │  ODFI cutoff, files sent to ACH operator
  Tuesday 12:00 AM   │  ACH operator begins processing
  Tuesday 8:30 AM    │  Files sent to RDFIs
  Tuesday 9:00 AM    │  RDFIs post debits/credits to accounts
  Wednesday morning  │  Settlement completes (T+2)
```

### Same-Day ACH Processing

Same-Day ACH was introduced in 2016 and has grown rapidly:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         SAME-DAY ACH WINDOWS (2024)                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  WINDOW 1: Morning                                                          │
│  ────────────────────                                                       │
│  Submission Deadline:  10:30 AM ET                                          │
│  Settlement:           1:00 PM ET (same day)                                │
│  Use Case:             Morning payroll, urgent vendor payments              │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐  │
│   │  8:00 AM  │  Originator submits file                                 │  │
│   │  10:30 AM │  ODFI deadline                                           │  │
│   │  11:00 AM │  ACH operator receives                                   │  │
│   │  12:00 PM │  Processing complete                                     │  │
│   │  1:00 PM  │  RDFI receives, posts to accounts                        │  │
│   │  1:30 PM  │  Funds available                                         │  │
│   └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  WINDOW 2: Afternoon                                                        │
│  ──────────────────────                                                     │
│  Submission Deadline:  2:45 PM ET                                           │
│  Settlement:           5:00 PM ET (same day)                                │
│  Use Case:             Afternoon transactions, insurance claims             │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐  │
│   │  12:00 PM │  Originator submits file                                 │  │
│   │  2:45 PM  │  ODFI deadline                                           │  │
│   │  3:15 PM  │  ACH operator receives                                   │  │
│   │  4:00 PM  │  Processing complete                                     │  │
│   │  5:00 PM  │  RDFI receives, posts to accounts                        │  │
│   │  5:30 PM  │  Funds available                                         │  │
│   └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  WINDOW 3: Evening (Debits Only)                                            │
│  ────────────────────────────────                                           │
│  Submission Deadline:  4:45 PM ET                                           │
│  Settlement:           Next morning (not truly same-day)                    │
│  Use Case:             End-of-day debits, bill payments                     │
│                                                                             │
│   ┌──────────────────────────────────────────────────────────────────────┐  │
│   │  3:00 PM        │  Originator submits file                           │  │
│   │  4:45 PM        │  ODFI deadline                                     │  │
│   │  5:15 PM        │  ACH operator receives                             │  │
│   │  Next day 8 AM  │  RDFI receives, posts to accounts                  │  │
│   └──────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

  SAME-DAY ACH STATISTICS (2024):
  ────────────────────────────────
  • Volume: 1.24 billion payments (+45.3% YoY)
  • Value: $3.23 trillion
  • Current limit: $1 million per transaction
  • Proposed limit: $10 million (effective March 2027)
  • Fee: Additional $0.052 per transaction (on top of standard ACH)
```

:::warning Same-Day ACH Limits
As of 2024, Same-Day ACH has a $1 million per-transaction limit. NACHA has proposed increasing this to $10 million effective March 2027, which will open Same-Day ACH to more B2B use cases.
:::

## SEC Codes (Standard Entry Class)

SEC codes indicate the type of ACH transaction and authorization method:

### Common SEC Codes

| SEC Code | Name | Description | Authorization | Use Case |
|----------|------|-------------|---------------|----------|
| **WEB** | Internet-Initiated | Online authorization | Internet agreement | E-commerce, online bill pay |
| **PPD** | Prearranged Payment & Deposit | Consumer recurring | Written/recorded auth | Subscriptions, payroll |
| **CCD** | Corporate Credit/Debit | Business-to-business | Written agreement | B2B payments, vendor payments |
| **TEL** | Telephone-Initiated | Phone authorization | Recorded call | Phone orders, telemarketing |
| **POP** | Point of Purchase | Check converted at POS | Signed check | Retail (check conversion) |
| **RCK** | Re-presented Check | Returned check retry | Original check | NSF check retry |
| **ARC** | Accounts Receivable | Lockbox check conversion | Signed check | Utility payments, healthcare |
| **BOC** | Back Office Conversion | Check converted in back office | Signed check | Mail-order, back-office processing |
| **CTX** | Corporate Trade Exchange | B2B with addenda | Written agreement | Large B2B with invoice detail |

:::tip Choosing the Right SEC Code
Using the wrong SEC code is a common compliance violation. WEB requires internet-initiated authorization, PPD requires written/recorded authorization. Misclassifying WEB as PPD (to avoid stricter return monitoring) violates NACHA rules.
:::

### SEC Code Return Windows

Different SEC codes have different return timeframes:

| SEC Code | Return Window | Unauthorized Return Window |
|----------|---------------|----------------------------|
| **WEB** | 2 business days (R01, R09) | 60 calendar days (R10, R11) |
| **PPD** | 2 business days (R01, R09) | 60 calendar days (R10) |
| **CCD** | 2 business days (R01, R09) | 60 calendar days (R10) |
| **TEL** | 2 business days (R01, R09) | 60 calendar days (R10, R11) |

## ACH Return Codes

When an ACH transaction fails, the RDFI returns it with a return code. Understanding return codes is critical for risk management.

### Most Common Return Codes

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                           COMMON ACH RETURN CODES                             │
├──────┬─────────────────────────────┬────────────────┬─────────────────────────┤
│ Code │ Reason                      │ Return Window  │ Meaning                 │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R01  │ Insufficient Funds          │ 2 business days│ Account lacks funds     │
│      │                             │                │ (most common return)    │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R02  │ Account Closed              │ 2 business days│ Account no longer active│
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R03  │ No Account / Unable to      │ 2 business days│ Account number invalid  │
│      │ Locate Account              │                │ or doesn't exist        │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R04  │ Invalid Account Number      │ 2 business days│ Account number fails    │
│      │                             │                │ validation              │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R05  │ Unauthorized Debit to       │ 60 days        │ Consumer didn't         │
│      │ Consumer Account Using      │                │ authorize (high risk)   │
│      │ Corporate SEC Code          │                │                         │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R06  │ Returned per ODFI Request   │ Various        │ ODFI requests return    │
│      │                             │                │ (expanded Oct 2024)     │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R07  │ Authorization Revoked       │ 60 days        │ Customer revoked auth   │
│      │                             │                │ (stop payment)          │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R08  │ Payment Stopped             │ 2 business days│ Customer placed stop    │
│      │                             │                │ payment                 │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R09  │ Uncollected Funds           │ 2 business days│ Funds not yet available │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R10  │ Customer Advises Unauthorized│ 60 days       │ Customer claims fraud   │
│      │                             │                │ (unauthorized - fraud)  │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R11  │ Check Truncation Entry Return│ Varies        │ Check-related issues    │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R13  │ RDFI Not Qualified to Participate│ 2 business days│ Bank can't process │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R14  │ Representative Payee Deceased│ 2 business days│ Payee has died         │
│      │ or Unable to Continue       │                │                         │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R15  │ Beneficiary or Account Holder│ 2 business days│ Account holder deceased│
│      │ Deceased                    │                │                         │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R16  │ Account Frozen              │ 2 business days│ Account is frozen       │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R17  │ Entry Not Processed by       │ 60 days       │ Suspected fraud         │
│      │ Gateway (Fraud Detection)   │                │ (expanded Oct 2024)     │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R20  │ Non-Transaction Account     │ 2 business days│ Account doesn't allow   │
│      │                             │                │ transactions            │
├──────┼─────────────────────────────┼────────────────┼─────────────────────────┤
│ R29  │ Corporate Customer Advises  │ 2 business days│ Business claims         │
│      │ Not Authorized              │                │ unauthorized            │
└──────┴─────────────────────────────┴────────────────┴─────────────────────────┘
```

### Return Code Risk Levels

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      RETURN CODE RISK CATEGORIES                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LOW RISK (Administrative Returns)                                          │
│  ─────────────────────────────────                                          │
│  • R02 (Account Closed)                                                     │
│  • R03 (No Account)                                                         │
│  • R04 (Invalid Account Number)                                             │
│                                                                             │
│  Action: Update account information, retry with corrected data              │
│          These count toward Administrative Return threshold (3%)            │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  MEDIUM RISK (Operational Returns)                                          │
│  ───────────────────────────────────                                        │
│  • R01 (Insufficient Funds)                                                 │
│  • R09 (Uncollected Funds)                                                  │
│  • R08 (Payment Stopped)                                                    │
│                                                                             │
│  Action: Can retry after a few days, may indicate temporary issue           │
│          Count toward Overall Return threshold (15%)                        │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  HIGH RISK (Unauthorized Returns)                                           │
│  ──────────────────────────────────                                         │
│  • R05 (Unauthorized Debit - Corporate SEC)                                 │
│  • R07 (Authorization Revoked)                                              │
│  • R10 (Customer Advises Unauthorized - Fraud)                              │
│  • R11 (Check Truncation - Unauthorized)                                    │
│  • R17 (Fraud Detection)                                                    │
│  • R29 (Corporate Not Authorized)                                           │
│                                                                             │
│  Action: DO NOT RETRY. Investigate fraud, review authorization              │
│          Count toward Unauthorized Return threshold (0.5%)                  │
│          Exceed threshold = NACHA enforcement action                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

:::danger Unauthorized Returns
R10 (Customer Advises Unauthorized) is the most serious return code. It indicates potential fraud and counts toward the 0.5% unauthorized return threshold. Exceeding this threshold can result in:

- NACHA enforcement action
- Fines ($100-$500 per occurrence)
- Potential suspension from ACH network
- Reputational damage
:::

## NACHA Monitoring Thresholds

NACHA enforces strict return rate thresholds. Exceeding these triggers enforcement actions.

### Return Rate Thresholds (2024)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        NACHA RETURN RATE THRESHOLDS                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ADMINISTRATIVE RETURNS:  3% Threshold                                      │
│  ───────────────────────────────────────                                    │
│  Includes: R02, R03, R04, R14, R15, R16, R20, R23                           │
│  Calculation: (Administrative Returns / Total Entries) × 100                │
│  Measurement Period: Rolling 60 days                                        │
│  Minimum Volume: 100+ entries                                               │
│                                                                             │
│  What happens if exceeded:                                                  │
│  • ODFI must notify originator                                              │
│  • Originator must develop corrective action plan                           │
│  • NACHA may impose fines                                                   │
│  • Repeated violations → suspension                                         │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  OVERALL RETURNS:  15% Threshold                                            │
│  ────────────────────────────────                                           │
│  Includes: All return codes                                                 │
│  Calculation: (Total Returns / Total Entries) × 100                         │
│  Measurement Period: Rolling 60 days                                        │
│  Minimum Volume: 100+ entries                                               │
│                                                                             │
│  What happens if exceeded:                                                  │
│  • Immediate ODFI notification                                              │
│  • Corrective action plan required within 10 business days                  │
│  • NACHA enforcement may suspend originator                                 │
│  • Fines escalate with repeat violations                                    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  UNAUTHORIZED RETURNS:  0.5% Threshold                                      │
│  ──────────────────────────────────────────                                 │
│  Includes: R05, R07, R10, R11, R29, R51, R52                                │
│  Calculation: (Unauthorized Returns / Total Entries) × 100                  │
│  Measurement Period: Rolling 60 days                                        │
│  Minimum Volume: ANY (no minimum)                                           │
│                                                                             │
│  What happens if exceeded:                                                  │
│  • MOST SERIOUS VIOLATION                                                   │
│  • Immediate suspension possible                                            │
│  • Fines: $100-$500 per unauthorized return                                 │
│  • Potential permanent ban from ACH network                                 │
│  • Reputational damage                                                      │
│                                                                             │
│  Example:                                                                   │
│  • 1,000 transactions/month                                                 │
│  • 6+ unauthorized returns = 0.6% (EXCEEDS THRESHOLD)                       │
│  • Just 5 unauthorized returns in 1,000 is acceptable (0.5%)                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Calculating Return Rates (Example)

```
EXAMPLE MERCHANT - 60 DAY PERIOD
─────────────────────────────────

Total ACH Entries:        10,000 transactions

Returns Breakdown:
├─ R01 (Insufficient Funds):     450
├─ R02 (Account Closed):         150
├─ R03 (No Account):              80
├─ R04 (Invalid Account):         20
├─ R07 (Auth Revoked):            10
├─ R08 (Payment Stopped):         40
├─ R10 (Unauthorized):             8
└─ Other:                         42

Total Returns:                   800

┌─────────────────────────────────────────────────────────────────────────┐
│                      THRESHOLD CALCULATIONS                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Administrative Returns (R02, R03, R04):                                │
│  (150 + 80 + 20) / 10,000 = 250 / 10,000 = 2.5%                         │
│  ✓ PASS (below 3% threshold)                                            │
│                                                                         │
│  Overall Returns (All return codes):                                    │
│  800 / 10,000 = 8.0%                                                    │
│  ✓ PASS (below 15% threshold)                                           │
│                                                                         │
│  Unauthorized Returns (R07, R10):                                       │
│  (10 + 8) / 10,000 = 18 / 10,000 = 0.18%                                │
│  ✓ PASS (below 0.5% threshold)                                          │
│                                                                         │
│  STATUS: ALL THRESHOLDS MET                                             │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

However, if R10 returns reached 51 (instead of 8):
51 / 10,000 = 0.51% → EXCEEDS 0.5% THRESHOLD → NACHA VIOLATION
```

:::warning Return Rate Monitoring
PayFac platforms must monitor return rates at both the platform level AND individual sub-merchant level. A single sub-merchant exceeding thresholds can trigger enforcement against the entire platform.
:::

## NACHA Rule Changes (2024-2026)

NACHA described the 2024-2026 rule changes as "the most significant in 20 years."

### October 2024 Changes (Effective)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    NACHA RULE CHANGES - OCTOBER 2024                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. R17 EXPANDED USE FOR FRAUD DETECTION                                    │
│  ────────────────────────────────────────────                               │
│  Previous: Limited to gateways only                                         │
│  Now: Any RDFI can use R17 for suspected fraud                              │
│                                                                             │
│  Impact:                                                                    │
│  • RDFIs have broader authority to return suspicious transactions           │
│  • R17 returns count as unauthorized (0.5% threshold)                       │
│  • Originators must respond within 60 days                                  │
│                                                                             │
│  PayFac Consideration:                                                      │
│  More aggressive fraud prevention may increase R17 returns                  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  2. R06 EXPANDED USE                                                        │
│  ───────────────────────                                                    │
│  Previous: ODFI could request return in limited circumstances               │
│  Now: Expanded scenarios for ODFI-requested returns                         │
│                                                                             │
│  New R06 scenarios:                                                         │
│  • Originator fraud detected                                                │
│  • Duplicate transmission                                                   │
│  • ODFI compliance requirements                                             │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  3. FUNDS AVAILABILITY EXCEPTIONS                                           │
│  ──────────────────────────────────                                         │
│  Previous: Strict same-day availability requirements                        │
│  Now: RDFIs can delay funds in fraud cases                                  │
│                                                                             │
│  Impact:                                                                    │
│  • Better fraud prevention for RDFIs                                        │
│  • May delay customer access to funds                                       │
│  • Applies to suspected fraud only                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### April 2025 Changes (Upcoming)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      NACHA RULE CHANGES - APRIL 2025                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  R06 RETURN RESPONSE TIMING                                                 │
│  ──────────────────────────────                                             │
│  New Requirement: Originators must respond to R06 returns within            │
│                   10 banking days                                           │
│                                                                             │
│  What response means:                                                       │
│  • Acknowledge the return                                                   │
│  • Provide explanation if disputing                                         │
│  • Take corrective action                                                   │
│                                                                             │
│  Impact on PayFacs:                                                         │
│  • Need automated R06 monitoring                                            │
│  • Must have process to contact sub-merchants quickly                       │
│  • Document all responses for compliance                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### March 2026 - September 2026: Fraud Monitoring Program

The most significant NACHA changes in 20 years:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│               NACHA FRAUD MONITORING PROGRAM (2026)                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PHASE 1: MARCH 2026                                                        │
│  ────────────────────                                                       │
│  Applies to: Largest ACH originators (top volume)                           │
│                                                                             │
│  Requirements:                                                              │
│  • Real-time fraud monitoring systems                                       │
│  • Transaction-level risk scoring                                           │
│  • Suspicious activity reporting                                            │
│  • Enhanced customer due diligence                                          │
│  • Quarterly reporting to ODFI                                              │
│                                                                             │
│  New Thresholds (in addition to existing):                                  │
│  • R10 returns: 0.5% (unchanged)                                            │
│  • R17 returns: New monitoring (TBD)                                        │
│  • Combined fraud returns: Potential new threshold                          │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PHASE 3: SEPTEMBER 2026                                                    │
│  ─────────────────────────                                                  │
│  Applies to: ALL ACH originators (regardless of volume)                     │
│                                                                             │
│  Requirements:                                                              │
│  • Fraud detection programs (mandatory)                                     │
│  • Know Your Customer (KYC) verification                                    │
│  • Transaction monitoring                                                   │
│  • Return rate monitoring (automated)                                       │
│  • Incident response procedures                                             │
│                                                                             │
│  PayFac Impact:                                                             │
│  • Must implement fraud monitoring for all sub-merchants                    │
│  • Real-time transaction screening required                                 │
│  • Enhanced onboarding/KYC for sub-merchants                                │
│  • Potential cost increase: fraud detection tools                           │
│  • Documentation requirements increase                                      │
│                                                                             │
│  Estimated Compliance Costs:                                                │
│  • Small platforms: $10K-$50K initial + ongoing monitoring                  │
│  • Large platforms: $100K-$500K+ (depends on existing systems)              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

:::danger 2026 Fraud Monitoring is Mandatory
By September 2026, ALL ACH originators must have fraud monitoring programs. PayFac platforms should begin planning now:

1. Assess current fraud detection capabilities
2. Budget for fraud monitoring tools (Plaid, Sift, custom ML)
3. Develop transaction screening workflows
4. Enhance sub-merchant onboarding/KYC
5. Train operations team on NACHA fraud requirements
:::

## Account Validation Methods

To reduce R02/R03/R04 returns (account closed, no account, invalid account), implement account validation.

### Validation Methods Comparison

| Method | Cost | Speed | Accuracy | Use Case |
|--------|------|-------|----------|----------|
| **Micro-deposits** | $0.00 (free) | 2-3 days | High (user confirms) | Low-volume, non-urgent |
| **Instant verification (Plaid, MX)** | $0.10-$0.40/check | Instant | Very high (bank login) | High-volume, best UX |
| **Account validation API** | $0.05-$0.20/check | &lt;1 second | High (RDFI check) | High-volume, automated |
| **ACH pre-note** | $0.01-$0.05 | 2-3 days | Medium (basic validation) | Legacy systems |

### Micro-Deposit Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        MICRO-DEPOSIT VALIDATION                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Day 0: Customer enters bank account info                                   │
│         Platform sends 2 small deposits (e.g., $0.17 and $0.23)             │
│                                                                             │
│  Day 1: Deposits sent via ACH (standard processing)                         │
│                                                                             │
│  Day 2-3: Deposits appear in customer's account                             │
│           Customer logs in, sees amounts                                    │
│                                                                             │
│  Day 3: Customer returns to platform, enters amounts                        │
│         Platform verifies: $0.17 + $0.23 = correct                          │
│         Account validated ✓                                                 │
│                                                                             │
│  Pros:                                                                      │
│  • Free (costs only ACH fees)                                               │
│  • Confirms account exists and customer has access                          │
│  • Widely accepted method                                                   │
│                                                                             │
│  Cons:                                                                      │
│  • 2-3 day delay                                                            │
│  • Customer friction (must check bank, return to platform)                  │
│  • ~10-15% abandonment rate                                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Instant Verification (Plaid/MX)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      INSTANT ACCOUNT VERIFICATION                           │
│                          (Plaid, MX, Finicity)                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Flow:                                                                      │
│  1. Customer clicks "Connect Bank Account"                                  │
│  2. Plaid widget opens (bank selection)                                     │
│  3. Customer enters bank login credentials                                  │
│  4. Plaid authenticates with bank                                           │
│  5. Customer selects checking/savings account                               │
│  6. Plaid returns: account number, routing number, balance, owner name      │
│  7. Account validated instantly ✓                                           │
│                                                                             │
│  Pros:                                                                      │
│  • Instant (seconds)                                                        │
│  • Very high accuracy (real bank connection)                                │
│  • Also provides balance info (reduce R01 NSF)                              │
│  • Low abandonment (easy UX)                                                │
│  • Supports 11,000+ financial institutions                                  │
│                                                                             │
│  Cons:                                                                      │
│  • Cost: $0.10-$0.40 per verification                                       │
│  • Requires third-party integration                                         │
│  • Some customers uncomfortable giving login credentials                    │
│  • Doesn't work for all banks (fallback to micro-deposits needed)           │
│                                                                             │
│  Pricing (Plaid, 2024):                                                     │
│  • Identity Verification: $0.13/check                                       │
│  • Auth (account validation): $0.10/check                                   │
│  • Balance: $0.05/check                                                     │
│  • Income Verification: $5-$15/check                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

:::tip Best Practice: Hybrid Approach
Use Plaid/MX for instant verification (primary), fall back to micro-deposits for unsupported banks. This maximizes conversion while maintaining validation for all customers.
:::

## ACH Risk Management for PayFac Platforms

### Sub-Merchant Monitoring Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ACH RISK MONITORING DASHBOARD                            │
│                      (Sub-Merchant View - 60 Days)                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Sub-Merchant: Acme Subscription Services                                   │
│  MID: ACH-12345                                                             │
│  Monthly Volume: $450,000 (4,200 transactions)                              │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                        RETURN RATES                                 │   │
│   ├─────────────────────────────────────────────────────────────────────┤   │
│   │                                                                     │   │
│   │  Administrative Returns:    126 / 8,400 = 1.5%                      │   │
│   │  Status: ✓ PASS (below 3%)                                          │   │
│   │  Trend:  ▼ Decreasing (was 2.1% last month)                         │   │
│   │                                                                     │   │
│   │  Overall Returns:           840 / 8,400 = 10.0%                     │   │
│   │  Status: ✓ PASS (below 15%)                                         │   │
│   │  Trend:  ▲ Increasing (was 8.5% last month)                         │   │
│   │                                                                     │   │
│   │  Unauthorized Returns:      4 / 8,400 = 0.05%                       │   │
│   │  Status: ✓ PASS (below 0.5%)                                        │   │
│   │  Trend:  ─ Stable                                                   │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                    RETURN CODE BREAKDOWN                            │   │
│   ├─────────────────────────────────────────────────────────────────────┤   │
│   │                                                                     │   │
│   │  R01 (NSF):                 672 (80% of returns) ⚠️                 │   │
│   │  R02 (Account Closed):       84 (10% of returns)                    │   │
│   │  R03 (No Account):           42 (5% of returns)                     │   │
│   │  R07 (Auth Revoked):          4 (0.5% of returns)                   │   │
│   │  Other:                      38 (4.5% of returns)                   │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  RECOMMENDATIONS:                                                           │
│  ───────────────────                                                        │
│  ⚠️  High R01 rate (80%) suggests insufficient balance checks               │
│      → Recommend Plaid Balance API before charging                          │
│      → Consider retry logic (wait 3-5 days, retry once)                     │
│                                                                             │
│  ✓  Administrative returns decreasing (good account validation)             │
│                                                                             │
│  ✓  Unauthorized returns very low (0.05%) - excellent                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Warning Triggers

Set up automated alerts for sub-merchants approaching thresholds:

| Trigger | Threshold | Alert Level | Action |
|---------|-----------|-------------|--------|
| **Administrative returns** | 2.5% (approaching 3%) | Warning | Email merchant, review account validation |
| **Overall returns** | 12% (approaching 15%) | Critical | Restrict new charges, investigate |
| **Unauthorized returns** | 0.3% (approaching 0.5%) | Critical | Immediate review, potential suspension |
| **R01 spike** | >50% of returns | Warning | Suggest balance checking |
| **R10 (fraud) spike** | >5 in 7 days | Critical | Fraud investigation, contact ODFI |

## ACH Integration Patterns

### NestJS Backend Example

```typescript
// ach-payment.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AchTransaction } from './entities/ach-transaction.entity';
import { BankAccount } from './entities/bank-account.entity';

export enum SecCode {
  WEB = 'WEB',    // Internet-initiated
  PPD = 'PPD',    // Prearranged payment
  CCD = 'CCD',    // Corporate
  TEL = 'TEL',    // Telephone-initiated
}

export enum AchTransactionType {
  DEBIT = 'DEBIT',   // Pull money from customer
  CREDIT = 'CREDIT', // Push money to customer
}

@Injectable()
export class AchPaymentService {
  constructor(
    @InjectRepository(AchTransaction)
    private achTransactionRepo: Repository<AchTransaction>,
    @InjectRepository(BankAccount)
    private bankAccountRepo: Repository<BankAccount>,
    private achProcessor: AchProcessorClient, // Third-party ACH processor
  ) {}

  /**
   * Create ACH debit (pull money from customer)
   *
   * @param merchantId - Sub-merchant ID
   * @param bankAccountId - Customer's bank account
   * @param amount - Amount in cents
   * @param secCode - SEC code (WEB, PPD, etc.)
   * @param description - Transaction description
   * @param idempotencyKey - Prevent duplicate charges
   */
  async createAchDebit(
    merchantId: string,
    bankAccountId: string,
    amount: number,
    secCode: SecCode,
    description: string,
    idempotencyKey: string,
  ): Promise<AchTransaction> {
    // Check for duplicate (idempotency)
    const existing = await this.achTransactionRepo.findOne({
      where: { idempotencyKey },
    });
    if (existing) return existing;

    // Validate bank account
    const bankAccount = await this.bankAccountRepo.findOne({
      where: { id: bankAccountId, merchantId },
    });
    if (!bankAccount) throw new Error('Bank account not found');
    if (!bankAccount.isVerified) throw new Error('Bank account not verified');

    // Check return rate history
    const returnRate = await this.calculateReturnRate(merchantId, 60);
    if (returnRate.unauthorized > 0.4) {
      throw new Error('Merchant approaching unauthorized return threshold');
    }

    // Create ACH transaction
    const achTxn = this.achTransactionRepo.create({
      merchantId,
      bankAccountId,
      amount,
      type: AchTransactionType.DEBIT,
      secCode,
      description,
      idempotencyKey,
      status: 'pending',
      scheduledSettlementDate: this.calculateSettlementDate(),
    });

    await this.achTransactionRepo.save(achTxn);

    // Submit to ACH processor
    try {
      const processorResponse = await this.achProcessor.createDebit({
        accountNumber: bankAccount.accountNumber,
        routingNumber: bankAccount.routingNumber,
        amount,
        secCode,
        description,
        individualId: achTxn.id,
      });

      achTxn.processorTransactionId = processorResponse.transactionId;
      achTxn.status = 'submitted';
      await this.achTransactionRepo.save(achTxn);
    } catch (error) {
      achTxn.status = 'failed';
      achTxn.errorMessage = error.message;
      await this.achTransactionRepo.save(achTxn);
      throw error;
    }

    return achTxn;
  }

  /**
   * Calculate return rates for NACHA threshold monitoring
   */
  async calculateReturnRate(merchantId: string, days: number) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const transactions = await this.achTransactionRepo.find({
      where: {
        merchantId,
        createdAt: MoreThanOrEqual(startDate),
      },
    });

    const totalTransactions = transactions.length;
    const returns = transactions.filter((t) => t.status === 'returned');

    const administrativeReturns = returns.filter((r) =>
      ['R02', 'R03', 'R04', 'R14', 'R15', 'R16', 'R20'].includes(r.returnCode),
    );

    const unauthorizedReturns = returns.filter((r) =>
      ['R05', 'R07', 'R10', 'R11', 'R17', 'R29'].includes(r.returnCode),
    );

    return {
      total: (returns.length / totalTransactions) * 100,
      administrative: (administrativeReturns.length / totalTransactions) * 100,
      unauthorized: (unauthorizedReturns.length / totalTransactions) * 100,
      thresholds: {
        administrativeExceeded: administrativeReturns.length / totalTransactions > 0.03,
        overallExceeded: returns.length / totalTransactions > 0.15,
        unauthorizedExceeded: unauthorizedReturns.length / totalTransactions > 0.005,
      },
    };
  }

  /**
   * Handle ACH return (webhook from processor)
   */
  async handleAchReturn(
    transactionId: string,
    returnCode: string,
    returnReason: string,
  ): Promise<void> {
    const achTxn = await this.achTransactionRepo.findOne({
      where: { processorTransactionId: transactionId },
    });
    if (!achTxn) throw new Error('Transaction not found');

    achTxn.status = 'returned';
    achTxn.returnCode = returnCode;
    achTxn.returnReason = returnReason;
    await this.achTransactionRepo.save(achTxn);

    // Check if return is unauthorized (high risk)
    const unauthorizedCodes = ['R05', 'R07', 'R10', 'R11', 'R17', 'R29'];
    if (unauthorizedCodes.includes(returnCode)) {
      await this.handleUnauthorizedReturn(achTxn);
    }

    // Update merchant return rate metrics
    await this.updateMerchantReturnRates(achTxn.merchantId);
  }

  /**
   * Handle unauthorized return (fraud alert)
   */
  private async handleUnauthorizedReturn(achTxn: AchTransaction): Promise<void> {
    // Log fraud incident
    await this.logFraudIncident({
      merchantId: achTxn.merchantId,
      transactionId: achTxn.id,
      returnCode: achTxn.returnCode,
      amount: achTxn.amount,
    });

    // Check if merchant exceeds unauthorized threshold
    const returnRate = await this.calculateReturnRate(achTxn.merchantId, 60);
    if (returnRate.thresholds.unauthorizedExceeded) {
      // Alert risk team
      await this.alertRiskTeam({
        merchantId: achTxn.merchantId,
        severity: 'critical',
        message: 'Merchant exceeded unauthorized return threshold (0.5%)',
        returnRate: returnRate.unauthorized,
      });

      // Consider suspending merchant
      await this.suspendMerchant(achTxn.merchantId, 'Exceeded NACHA unauthorized return threshold');
    }
  }

  /**
   * Calculate settlement date based on batch timing
   */
  private calculateSettlementDate(): Date {
    const now = new Date();
    const cutoffHour = 23; // 11 PM ET cutoff

    let settlementDate = new Date(now);
    settlementDate.setDate(settlementDate.getDate() + 2); // T+2 standard

    // Skip weekends
    if (settlementDate.getDay() === 0) settlementDate.setDate(settlementDate.getDate() + 1); // Sunday -> Monday
    if (settlementDate.getDay() === 6) settlementDate.setDate(settlementDate.getDate() + 2); // Saturday -> Monday

    return settlementDate;
  }
}
```

### Account Validation Service

```typescript
// bank-account-validation.service.ts
import { Injectable } from '@nestjs/common';
import { PlaidClient } from './clients/plaid.client';
import { MicroDepositService } from './micro-deposit.service';

export enum ValidationMethod {
  INSTANT = 'instant',      // Plaid/MX
  MICRO_DEPOSIT = 'micro',  // Traditional micro-deposits
  PRENOTE = 'prenote',      // ACH pre-note
}

@Injectable()
export class BankAccountValidationService {
  constructor(
    private plaidClient: PlaidClient,
    private microDepositService: MicroDepositService,
  ) {}

  /**
   * Validate bank account using instant verification (Plaid)
   */
  async validateInstant(
    publicToken: string, // From Plaid Link widget
    accountId: string,
  ): Promise<{
    accountNumber: string;
    routingNumber: string;
    accountName: string;
    accountType: 'checking' | 'savings';
    verified: boolean;
  }> {
    // Exchange public token for access token
    const accessToken = await this.plaidClient.exchangePublicToken(publicToken);

    // Get account details
    const accountInfo = await this.plaidClient.getAccountInfo(accessToken, accountId);

    return {
      accountNumber: accountInfo.account.mask, // Last 4 digits
      routingNumber: accountInfo.account.routing,
      accountName: accountInfo.account.name,
      accountType: accountInfo.account.subtype,
      verified: true, // Instant verification
    };
  }

  /**
   * Validate bank account using micro-deposits
   */
  async initiateMicroDeposits(
    bankAccountId: string,
    accountNumber: string,
    routingNumber: string,
  ): Promise<{ verificationId: string; expectedCompletionDate: Date }> {
    // Generate two random amounts (< $1.00)
    const amount1 = Math.floor(Math.random() * 99) + 1; // 1-99 cents
    const amount2 = Math.floor(Math.random() * 99) + 1;

    // Create verification record
    const verification = await this.microDepositService.create({
      bankAccountId,
      amount1,
      amount2,
      status: 'pending',
    });

    // Send ACH credits
    await this.sendMicroDeposits(accountNumber, routingNumber, amount1, amount2);

    const expectedDate = new Date();
    expectedDate.setDate(expectedDate.getDate() + 3); // T+3

    return {
      verificationId: verification.id,
      expectedCompletionDate: expectedDate,
    };
  }

  /**
   * Complete micro-deposit verification
   */
  async completeMicroDeposits(
    verificationId: string,
    amount1: number,
    amount2: number,
  ): Promise<{ verified: boolean; attemptsRemaining: number }> {
    const verification = await this.microDepositService.findById(verificationId);

    if (verification.attempts >= 3) {
      throw new Error('Maximum verification attempts exceeded');
    }

    verification.attempts += 1;

    const isCorrect = verification.amount1 === amount1 && verification.amount2 === amount2;

    if (isCorrect) {
      verification.status = 'verified';
      await this.microDepositService.save(verification);

      // Mark bank account as verified
      await this.bankAccountRepo.update(verification.bankAccountId, {
        isVerified: true,
        verificationMethod: ValidationMethod.MICRO_DEPOSIT,
      });

      return { verified: true, attemptsRemaining: 3 - verification.attempts };
    } else {
      verification.status = verification.attempts >= 3 ? 'failed' : 'pending';
      await this.microDepositService.save(verification);

      return { verified: false, attemptsRemaining: 3 - verification.attempts };
    }
  }
}
```

## Self-Assessment Questions

Test your understanding of ACH and NACHA rules:

1. **A merchant processes 5,000 ACH transactions in 60 days. They receive 180 R01 returns, 50 R02 returns, and 4 R10 returns. Do they exceed any NACHA thresholds?**

2. **What is the key difference between R01 (Insufficient Funds) and R10 (Customer Advises Unauthorized)?**

3. **A subscription service wants to accept ACH payments. Should they use WEB or PPD SEC code? Why?**

4. **What are the three Same-Day ACH windows, and when would you use each?**

5. **Why is instant account verification (Plaid) preferred over micro-deposits for user experience?**

6. **What changes are coming to ACH fraud monitoring in September 2026?**

See [quiz.md](./quiz.md) for answers and additional questions.

## Related Topics

- [Alternative Payment Methods Overview](./index.md) - Compare ACH to other payment rails
- [Real-Time Payment Rails](./real-time-rails.md) - RTP and FedNow for instant settlement
<!-- - [PayFac Risk & Compliance](../../risk-compliance/index.md) - Platform-level risk management (Coming soon) -->
- [Transaction Lifecycle](../../fundamentals/transaction-lifecycle/overview.md) - Card transaction comparison

## References

### Official NACHA Resources

- [NACHA Operating Rules](https://www.nacha.org/rules) - Complete rule set (subscription required)
- [NACHA Rule Changes](https://www.nacha.org/rules/upcoming-rule-changes) - 2024-2026 updates
- [NACHA Enforcement](https://www.nacha.org/rules/enforcement) - Penalties and violations
- [ACH Network Statistics](https://www.nacha.org/ach-network-statistics) - Volume and growth data

### Same-Day ACH

- [Same-Day ACH Guide](https://www.nacha.org/content/same-day-ach) - Processing windows and limits
- [Same-Day ACH Timeline](https://www.nacha.org/rules/same-day-ach-timeline) - Historical rollout

### Return Codes

- [ACH Return Codes Complete List](https://www.nacha.org/sites/default/files/2023-09/2024_Nacha_ACH_Returns_Handbook.pdf) - Official NACHA handbook

### Account Validation

- [Plaid Documentation](https://plaid.com/docs/) - Instant verification API
- [MX Platform](https://www.mx.com/products/verify/) - Alternative to Plaid
- [Finicity](https://www.finicity.com/) - Account validation (Mastercard owned)
