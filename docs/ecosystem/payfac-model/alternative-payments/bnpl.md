---
title: "Buy Now Pay Later (BNPL)"
description: "Klarna, Affirm, Afterpay, and PayPal Pay Later - integration, fees, and regulatory landscape"
sidebar_position: 5
sidebar_label: "BNPL"
keywords:
  - BNPL
  - buy now pay later
  - Klarna
  - Affirm
  - Afterpay
  - PayPal Pay Later
  - installment payments
---

# Buy Now Pay Later (BNPL)

> **Last Updated:** 2025-12-24
> **Status:** Complete

## Quick Reference

**US Market Statistics (2025):**

- **Market Size:** $170.32 billion
- **Users:** 91.5 million
- **E-commerce Market Share:** ~10%
- **Average Order Value Increase:** +20-30% for merchants

**Major Providers (US 2024):**

- **Klarna:** 42.8M users, $2.8B revenue, most offered globally
- **Affirm:** 21M users, $2.32B revenue (+46% YoY), no late fees
- **Afterpay:** 19.3M users, $10.16B US volume, Block/Square owned
- **PayPal:** 400M+ global users, $33B+ BNPL volume

**Merchant Fees:**

- **Afterpay:** $0.30 + 4-6%
- **PayPal:** $0.49 + 4.99%
- **Affirm/Klarna:** 2-8% + fixed fee (negotiated, varies by merchant)

:::tip AOV Impact
Merchants offering BNPL see 20-30% higher average order values and 10-15% conversion rate improvements. The higher merchant fees (4-8%) are often justified by increased sales volume.
:::

## What is BNPL?

Buy Now Pay Later (BNPL) is a short-term financing option that allows consumers to split purchases into interest-free installments. Unlike traditional credit cards:

- **No interest** (if paid on time)
- **Fixed installments** (typically 4 payments over 6 weeks)
- **Instant approval** (soft credit check, algorithmic decisioning)
- **No credit card required**
- **Merchant paid upfront** (BNPL provider assumes risk)

### BNPL vs Credit Cards

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                          BNPL vs CREDIT CARDS                                 │
├──────────────────┬────────────────────────┬───────────────────────────────────┤
│   Attribute      │         BNPL           │        Credit Cards               │
├──────────────────┼────────────────────────┼───────────────────────────────────┤
│ Interest Rate    │ 0% (if paid on time)   │ 16-25% APR                        │
│                  │ Late fees: $0-$10      │                                   │
├──────────────────┼────────────────────────┼───────────────────────────────────┤
│ Approval         │ Instant (soft pull)    │ Days (hard credit pull)           │
│                  │ High approval rate     │ Lower approval for thin credit    │
├──────────────────┼────────────────────────┼───────────────────────────────────┤
│ Payment Terms    │ Fixed (4 payments,     │ Revolving (minimum payment,       │
│                  │ 6 weeks typical)       │ no fixed term)                    │
├──────────────────┼────────────────────────┼───────────────────────────────────┤
│ Credit Limit     │ Purchase-specific      │ Credit line (e.g., $5K)           │
│                  │ (varies by transaction)│                                   │
├──────────────────┼────────────────────────┼───────────────────────────────────┤
│ Merchant Fees    │ 2-8% + fixed fee       │ 1.5-3.5% + $0.10-$0.30            │
│                  │ (higher than cards)    │                                   │
├──────────────────┼────────────────────────┼───────────────────────────────────┤
│ Consumer Appeal  │ "Interest-free"        │ Flexibility, rewards              │
│                  │ Transparent pricing    │                                   │
├──────────────────┼────────────────────────┼───────────────────────────────────┤
│ Risk Bearer      │ BNPL provider          │ Issuing bank                      │
│                  │ (merchant paid upfront)│                                   │
├──────────────────┼────────────────────────┼───────────────────────────────────┤
│ Regulation       │ Evolving (CFPB scrutiny│ Well-established (TILA, Reg Z)    │
│                  │ as of 2024-2025)       │                                   │
└──────────────────┴────────────────────────┴───────────────────────────────────┘
```

## How BNPL Works

### Standard 4-Payment Model

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      BNPL STANDARD PAYMENT FLOW                             │
│                     (4 payments over 6 weeks)                               │
└─────────────────────────────────────────────────────────────────────────────┘

EXAMPLE: $400 purchase with Affirm/Klarna/Afterpay

  DAY 0                    WEEK 2              WEEK 4              WEEK 6
  (Purchase)               (Payment 2)         (Payment 3)         (Payment 4)
      │                        │                   │                   │
      │                        │                   │                   │
      ▼                        ▼                   ▼                   ▼
  ┌────────┐              ┌────────┐          ┌────────┐          ┌────────┐
  │ $100   │              │ $100   │          │ $100   │          │ $100   │
  │  due   │──────────────│  due   │──────────│  due   │──────────│  due   │
  │  now   │   2 weeks    │        │ 2 weeks  │        │ 2 weeks  │        │
  └────────┘              └────────┘          └────────┘          └────────┘
      │                        │                   │                   │
      │                        │                   │                   │
      └────────────────────────┴───────────────────┴───────────────────┘
                                    $400 TOTAL

  MERCHANT RECEIVES:
  ─────────────────
  Full $400 upfront (minus fees) - same day as purchase
  BNPL provider assumes all collection risk


  CUSTOMER TIMELINE:
  ─────────────────

  Day 0:    Makes $400 purchase at checkout
            Selects "Pay with Affirm" (or Klarna, Afterpay, etc.)
            Instant approval (soft credit check)
            First payment ($100) charged immediately
            Receives goods/services

  Week 2:   Auto-debit $100 from linked debit card/bank account
  Week 4:   Auto-debit $100
  Week 6:   Auto-debit $100 (final payment)

  TOTAL PAID: $400 (0% interest if all payments on time)


  IF CUSTOMER MISSES PAYMENT:
  ───────────────────────────

  Afterpay:  $10 late fee (max $68 per order)
             Service paused until brought current

  Klarna:    $7 late fee (varies by state)
             Does NOT report to credit bureaus (traditionally)

  Affirm:    NO late fees (differentiator)
             Interest may apply (depends on loan terms)

  PayPal:    NO late fees
             May affect future BNPL eligibility
```

### Merchant Payment Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BNPL MERCHANT PAYMENT FLOW                               │
└─────────────────────────────────────────────────────────────────────────────┘

  CUSTOMER          MERCHANT         BNPL PROVIDER         MERCHANT BANK
      │                 │                   │                    │
      │  1. $400        │                   │                    │
      │     purchase    │                   │                    │
      │────────────────▶│                   │                    │
      │                 │                   │                    │
      │  2. Select BNPL │                   │                    │
      │     at checkout │                   │                    │
      │────────────────▶│                   │                    │
      │                 │                   │                    │
      │                 │  3. Send purchase │                    │
      │                 │     details       │                    │
      │                 │──────────────────▶│                    │
      │                 │                   │                    │
      │                 │                   │  4. Instant credit │
      │                 │                   │     decision       │
      │  5. Approval    │                   │     (algorithmic)  │
      │◀────────────────│◀──────────────────│                    │
      │  ($400 approved,│                   │                    │
      │   4 × $100)     │                   │                    │
      │                 │                   │                    │
      │  6. First $100  │                   │                    │
      │     charged     │                   │                    │
      │────────────────────────────────────▶│                    │
      │                 │                   │                    │
      │                 │  7. Merchant paid │                    │
      │                 │     $372 ($400 -  │                    │
      │                 │     $28 fee: 7%)  │                    │
      │                 │◀──────────────────│                    │
      │                 │                   │                    │
      │                 │                   │  8. Payout         │
      │                 │                   │───────────────────▶│
      │                 │                   │                    │
      │  9. Ship goods  │                   │                    │
      │◀────────────────│                   │                    │
      │                 │                   │                    │
      │                 │                   │  10-12. BNPL provider│
      │                 │                   │        collects    │
      │  Weeks 2-6:     │                   │        remaining   │
      │  Auto-debit     │                   │        payments    │
      │  $100 × 3       │                   │        from        │
      │────────────────────────────────────▶│        customer    │
      │                 │                   │                    │

  KEY POINTS:
  ──────────
  • Merchant receives payment upfront (Day 0 or T+1)
  • Merchant has NO collection risk
  • BNPL provider handles all customer billing
  • Merchant pays higher fees than cards (7% vs 2.5%)
```

## Major BNPL Providers

### Klarna

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              KLARNA (2024)                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SCALE:                                                                     │
│  ──────                                                                     │
│  US Users:              42.8 million (largest BNPL by users)                │
│  Global Users:          150M+                                               │
│  Revenue:               $2.8 billion (2024)                                 │
│  Merchant Partners:     500K+ globally                                      │
│                                                                             │
│  FOUNDED: 2005 (Stockholm, Sweden)                                          │
│  US ENTRY: 2015                                                             │
│                                                                             │
│  PAYMENT OPTIONS:                                                           │
│  ─────────────────                                                          │
│  1. Pay in 4:           4 interest-free payments over 6 weeks               │
│  2. Pay in 30 days:     Full payment 30 days after purchase (interest-free) │
│  3. Monthly financing:  6-36 month installments (interest applies)          │
│                                                                             │
│  MERCHANT FEES:                                                             │
│  ───────────────                                                            │
│  Variable pricing (negotiated):                                             │
│  • Small merchants:     5.99% + $0.30                                       │
│  • Large merchants:     2.49%-3.99% + $0.30 (volume discounts)              │
│                                                                             │
│  CONSUMER FEES:                                                             │
│  ───────────────                                                            │
│  Pay in 4:              $0 (if paid on time)                                │
│  Late fee:              $7 (varies by state, max per state law)             │
│  Monthly financing:     Interest rates vary (disclosed upfront)             │
│                                                                             │
│  APPROVAL PROCESS:                                                          │
│  ──────────────────                                                         │
│  • Soft credit check (no impact on credit score)                            │
│  • Instant decision (&lt;1 second)                                          │
│  • Proprietary algorithm (not just FICO score)                              │
│  • Considers purchase amount, customer history, device signals              │
│                                                                             │
│  KEY FEATURES:                                                              │
│  ─────────────                                                              │
│  ✓ In-store (via app, generate one-time barcodes)                           │
│  ✓ Online (embedded checkout widget)                                        │
│  ✓ Marketing tools (Klarna promotes merchants to users)                     │
│  ✓ Shopping app (product discovery, wish lists)                             │
│                                                                             │
│  DIFFERENTIATORS:                                                           │
│  ────────────────                                                           │
│  • Most merchant partnerships globally (H&M, Nike, Sephora, etc.)           │
│  • Shopping app with 37M+ downloads                                         │
│  • Strong in fashion/apparel vertical                                       │
│  • International reach (45+ countries)                                      │
│                                                                             │
│  REGULATORY STATUS:                                                         │
│  ────────────────────                                                       │
│  • Licensed lender in most US states                                        │
│  • Does NOT report to credit bureaus (traditionally)                        │
│  • Subject to CFPB scrutiny (2024-2025)                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Affirm

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              AFFIRM (2024)                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SCALE:                                                                     │
│  ──────                                                                     │
│  US Users:              21 million                                          │
│  Revenue:               $2.32 billion (+46% YoY) - fastest growing          │
│  Merchant Partners:     293K+ (Q4 2024)                                     │
│  Public Company:        NASDAQ: AFRM (IPO Jan 2021)                         │
│                                                                             │
│  FOUNDED: 2012 (San Francisco)                                              │
│  FOUNDER: Max Levchin (PayPal co-founder)                                   │
│                                                                             │
│  PAYMENT OPTIONS:                                                           │
│  ─────────────────                                                          │
│  1. Pay in 4:           4 interest-free payments over 6 weeks               │
│  2. Monthly payments:   3-48 months (0-36% APR)                             │
│     • 0% APR for qualified merchants (Peloton, Apple, etc.)                 │
│     • Interest disclosed upfront (no hidden fees)                           │
│                                                                             │
│  MERCHANT FEES:                                                             │
│  ───────────────                                                            │
│  Negotiated pricing (typical):                                              │
│  • Pay in 4:            2-3% + $0.30                                        │
│  • 0% APR promotions:   5-10% (merchant subsidizes interest)                │
│  • Standard financing:  3-6% + $0.30                                        │
│                                                                             │
│  CONSUMER FEES:                                                             │
│  ───────────────                                                            │
│  Pay in 4:              $0 (no late fees - key differentiator)              │
│  Monthly payments:      Interest only (0-36% APR disclosed upfront)         │
│  Late fees:             $0 (Affirm does NOT charge late fees)               │
│                                                                             │
│  KEY DIFFERENTIATORS:                                                       │
│  ────────────────────                                                       │
│  ✓ NO late fees (unlike Klarna, Afterpay)                                   │
│  ✓ Transparent pricing (APR disclosed before purchase)                      │
│  ✓ Reports to Experian (builds credit for on-time payments)                 │
│  ✓ Higher loan amounts (up to $25K for qualified customers)                 │
│  ✓ Longer terms (up to 48 months)                                           │
│                                                                             │
│  APPROVAL PROCESS:                                                          │
│  ──────────────────                                                         │
│  • Soft credit check (no impact unless proceed with loan)                   │
│  • Real-time risk assessment                                                │
│  • Income verification for larger purchases                                 │
│  • Approval rates: ~60-80% (more conservative than Klarna/Afterpay)         │
│                                                                             │
│  MAJOR PARTNERSHIPS:                                                        │
│  ────────────────────                                                       │
│  • Amazon (pay over time option)                                            │
│  • Apple (0% APR for Apple products)                                        │
│  • Peloton (0% APR financing)                                               │
│  • Walmart (checkout integration)                                           │
│  • Shopify (embedded BNPL for merchants)                                    │
│                                                                             │
│  TARGET MARKET:                                                             │
│  ───────────────                                                            │
│  • Higher-ticket items ($200-$25K)                                          │
│  • Consumer electronics, fitness, home goods                                │
│  • Travel (flights, hotels)                                                 │
│  • Medical/dental procedures                                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Afterpay (Block/Square)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        AFTERPAY (Block/Square, 2024)                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  OWNERSHIP: Acquired by Block (formerly Square) in 2021 for $29B            │
│             Fully integrated with Square ecosystem                          │
│                                                                             │
│  SCALE:                                                                     │
│  ──────                                                                     │
│  US Users:              19.3 million                                        │
│  US Volume:             $10.16 billion (2024)                               │
│  Merchant Partners:     100K+ globally                                      │
│                                                                             │
│  FOUNDED: 2014 (Australia)                                                  │
│  US ENTRY: 2018                                                             │
│                                                                             │
│  PAYMENT OPTIONS:                                                           │
│  ─────────────────                                                          │
│  Pay in 4 only:         4 interest-free payments over 6 weeks               │
│                         (Afterpay does NOT offer longer-term financing)     │
│                                                                             │
│  MERCHANT FEES:                                                             │
│  ───────────────                                                            │
│  $0.30 + 4-6% (varies by volume, merchant size)                             │
│  Square merchants:      Integrated pricing (may be discounted)              │
│                                                                             │
│  CONSUMER FEES:                                                             │
│  ───────────────                                                            │
│  Pay in 4:              $0 (if paid on time)                                │
│  Late fee:              $10 (first missed payment)                          │
│                         Additional $7 if still unpaid after 7 days          │
│                         Max late fees: $68 per order                        │
│                                                                             │
│  APPROVAL PROCESS:                                                          │
│  ──────────────────                                                         │
│  • NO hard credit check (differentiator)                                    │
│  • Instant approval (&lt;1 second)                                          │
│  • Algorithm considers:                                                     │
│    - Purchase amount                                                        │
│    - Payment history with Afterpay                                          │
│    - Account age                                                            │
│    - Current outstanding balance                                            │
│  • Does NOT check FICO score                                                │
│                                                                             │
│  KEY FEATURES:                                                              │
│  ─────────────                                                              │
│  ✓ No hard credit pull (accessible to credit-challenged consumers)          │
│  ✓ In-store via Afterpay Card (virtual card for in-store use)               │
│  ✓ Shop Directory (in-app merchant discovery)                               │
│  ✓ Integrated with Square POS (seamless for Square merchants)               │
│                                                                             │
│  DIFFERENTIATORS:                                                           │
│  ────────────────                                                           │
│  • Simplest model (Pay in 4 only, no longer terms)                          │
│  • Strong in fashion/beauty (Revolve, Fashion Nova, Sephora)                │
│  • Young demographic (Gen-Z focus)                                          │
│  • Block/Square ecosystem benefits                                          │
│                                                                             │
│  INTEGRATION WITH SQUARE:                                                   │
│  ─────────────────────────────                                              │
│  Square merchants can add Afterpay to:                                      │
│  • Square Online (e-commerce)                                               │
│  • Square POS (in-store)                                                    │
│  • No separate contract needed if already using Square                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### PayPal Pay Later

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         PAYPAL PAY LATER (2024)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ADVANTAGE: Embedded in PayPal checkout (400M+ global users)                │
│                                                                             │
│  SCALE:                                                                     │
│  ──────                                                                     │
│  Available to:          400M+ PayPal users globally                         │
│  BNPL Volume:           $33+ billion (2024)                                 │
│  Merchant Access:       35M+ merchants (existing PayPal merchants)          │
│                                                                             │
│  LAUNCHED: 2020 (consolidated Pay in 4, PayPal Credit)                      │
│                                                                             │
│  PAYMENT OPTIONS:                                                           │
│  ─────────────────                                                          │
│  1. Pay in 4:           4 interest-free payments over 6 weeks               │
│                         ($30-$1,500 purchases)                              │
│                                                                             │
│  2. Pay Monthly:        6-24 month financing (9.99-29.99% APR)              │
│                         ($199-$10,000 purchases)                            │
│                         Requires credit check                               │
│                                                                             │
│  MERCHANT FEES:                                                             │
│  ───────────────                                                            │
│  Same as PayPal standard: 2.99% + $0.49                                     │
│  OR PayPal Pay Later specific: $0.49 + 4.99%                                │
│  (Pricing varies by merchant agreement)                                     │
│                                                                             │
│  CONSUMER FEES:                                                             │
│  ───────────────                                                            │
│  Pay in 4:              $0 (no interest, no late fees)                      │
│  Pay Monthly:           Interest (9.99-29.99% APR)                          │
│                         NO late fees                                        │
│                                                                             │
│  APPROVAL PROCESS:                                                          │
│  ──────────────────                                                         │
│  Pay in 4:              Soft credit check, instant approval                 │
│  Pay Monthly:           Hard credit check (via TransUnion)                  │
│                                                                             │
│  KEY ADVANTAGES:                                                            │
│  ────────────────                                                           │
│  ✓ No separate integration (works with PayPal checkout)                     │
│  ✓ Largest reach (35M+ merchants already have PayPal)                       │
│  ✓ Consumer trust (PayPal brand recognition)                                │
│  ✓ Option shown automatically to eligible PayPal users                      │
│                                                                             │
│  UNIQUE FEATURES:                                                           │
│  ─────────────────                                                          │
│  • Embedded in PayPal checkout (no separate provider)                       │
│  • PayPal balance can be used for payments                                  │
│  • Works with existing PayPal merchant accounts                             │
│  • Buyer/seller protection same as PayPal                                   │
│                                                                             │
│  MERCHANT IMPLEMENTATION:                                                   │
│  ──────────────────────────                                                 │
│  If merchant accepts PayPal → automatically eligible for Pay Later          │
│  No additional integration needed                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Regulatory Landscape

### CFPB Interpretive Rule (2024-2025 Status)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BNPL REGULATORY TIMELINE                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  MAY 2024: CFPB Issues Interpretive Rule                                    │
│  ───────────────────────────────────────────                                │
│  Consumer Financial Protection Bureau (CFPB) announced:                     │
│  "BNPL lenders must provide the same legal protections and rights as        │
│   credit card lenders"                                                      │
│                                                                             │
│  Requirements under Regulation Z (Truth in Lending Act):                    │
│  • Provide billing statements                                               │
│  • Allow consumers to dispute charges                                       │
│  • Investigate disputed charges                                             │
│  • Process refunds to consumers (not BNPL lender)                           │
│                                                                             │
│  OCTOBER 2024: FTA Legal Challenge                                          │
│  ────────────────────────────────────                                       │
│  Financial Technology Association (FTA) sued CFPB:                          │
│  • Claimed rule exceeded CFPB authority                                     │
│  • Argued BNPL is NOT credit (since 0% interest)                            │
│  • Challenged applicability of Regulation Z                                 │
│                                                                             │
│  MAY 2025: CFPB Withdraws Enforcement Priority                              │
│  ─────────────────────────────────────────────────                          │
│  CFPB announced it would NOT prioritize enforcement of the rule:            │
│  • Ongoing litigation                                                       │
│  • Industry uncertainty                                                     │
│  • Focus on other priorities                                                │
│                                                                             │
│  CURRENT STATUS (December 2025):                                            │
│  ───────────────────────────────────                                        │
│  • Rule technically in effect but NOT enforced                              │
│  • No active BNPL-specific federal regulations                              │
│  • State-level regulation varies                                            │
│  • Industry self-regulation (via Responsible Lending Coalition)             │
│                                                                             │
│  IMPLICATIONS FOR PAYFAC PLATFORMS:                                         │
│  ───────────────────────────────────────                                    │
│  • Safe to integrate BNPL (no immediate compliance risk)                    │
│  • Monitor regulatory changes (may change in 2026+)                         │
│  • BNPL providers handle consumer compliance                                │
│  • Merchants have minimal regulatory burden                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

:::warning Regulatory Uncertainty
While BNPL is currently unregulated at the federal level (as of December 2025), this may change. The CFPB's interpretive rule could be enforced in the future, or Congress may pass BNPL-specific legislation. Monitor industry news.
:::

## Merchant Integration

### Integration Options

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BNPL INTEGRATION METHODS                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. DIRECT INTEGRATION (Provider SDK)                                       │
│  ─────────────────────────────────────                                      │
│  Merchant integrates directly with Klarna, Affirm, Afterpay APIs            │
│                                                                             │
│  Pros:                                                                      │
│  ✓ Full control over UX                                                     │
│  ✓ Best pricing (direct relationship)                                       │
│  ✓ Customizable messaging                                                   │
│                                                                             │
│  Cons:                                                                      │
│  ✗ Separate integration for each provider                                   │
│  ✗ Ongoing maintenance (SDK updates)                                        │
│  ✗ Longer time to market                                                    │
│                                                                             │
│  Example (Affirm):                                                          │
│  <script>                                                                   │
│    _affirm_config = {                                                       │
│      public_api_key: "YOUR_PUBLIC_KEY",                                     │
│      script: "https://cdn1.affirm.com/js/v2/affirm.js"                      │
│    };                                                                       │
│    affirm.ui.ready(() => {                                                  │
│      affirm.checkout({ merchant: { ... }, items: [...] });                 │
│    });                                                                      │
│  </script>                                                                  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  2. PAYMENT PROCESSOR AGGREGATION                                           │
│  ─────────────────────────────────────                                      │
│  Use Stripe, Braintree, Adyen - they aggregate multiple BNPL providers      │
│                                                                             │
│  Pros:                                                                      │
│  ✓ Single integration (processor handles all providers)                     │
│  ✓ Fast time to market                                                      │
│  ✓ Processor handles updates                                                │
│  ✓ Unified reporting                                                        │
│                                                                             │
│  Cons:                                                                      │
│  ✗ Higher fees (processor markup)                                           │
│  ✗ Less control over provider selection                                     │
│  ✗ Limited customization                                                    │
│                                                                             │
│  Example (Stripe):                                                          │
│  const paymentIntent = await stripe.paymentIntents.create({                 │
│    amount: 40000, // $400.00                                                │
│    currency: 'usd',                                                         │
│    payment_method_types: ['card', 'klarna', 'affirm', 'afterpay_clearpay'], │
│  });                                                                        │
│  // Stripe automatically shows available BNPL options based on amount       │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  3. PLATFORM/CART PLUGIN                                                    │
│  ───────────────────────────                                                │
│  Install BNPL plugin for Shopify, WooCommerce, Magento, BigCommerce         │
│                                                                             │
│  Pros:                                                                      │
│  ✓ Easiest (no code)                                                        │
│  ✓ Pre-built for platform                                                   │
│  ✓ Fast setup (hours, not weeks)                                            │
│                                                                             │
│  Cons:                                                                      │
│  ✗ Limited to plugin capabilities                                           │
│  ✗ May not match brand aesthetic                                            │
│  ✗ Platform lock-in                                                         │
│                                                                             │
│  Example (Shopify):                                                         │
│  1. Install "Klarna On-Site Messaging" app from Shopify App Store           │
│  2. Enter Klarna API credentials                                            │
│  3. Configure messaging (product pages, cart, checkout)                     │
│  4. Launch (no code required)                                               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### NestJS Implementation Example

```typescript
// bnpl.service.ts
import { Injectable } from '@nestjs/common';
import { AffirmClient } from './clients/affirm.client';
import { KlarnaClient } from './clients/klarna.client';

export enum BnplProvider {
  AFFIRM = 'affirm',
  KLARNA = 'klarna',
  AFTERPAY = 'afterpay',
  PAYPAL = 'paypal',
}

@Injectable()
export class BnplService {
  constructor(
    private affirmClient: AffirmClient,
    private klarnaClient: KlarnaClient,
  ) {}

  /**
   * Determine which BNPL providers to show based on cart amount
   *
   * Different providers have different minimum/maximum amounts
   */
  getAvailableProviders(cartTotal: number): BnplProvider[] {
    const providers: BnplProvider[] = [];

    // Affirm: $50 - $25,000
    if (cartTotal >= 5000 && cartTotal <= 2500000) {
      providers.push(BnplProvider.AFFIRM);
    }

    // Klarna: $35 - $10,000
    if (cartTotal >= 3500 && cartTotal <= 1000000) {
      providers.push(BnplProvider.KLARNA);
    }

    // Afterpay: $35 - $2,000
    if (cartTotal >= 3500 && cartTotal <= 200000) {
      providers.push(BnplProvider.AFTERPAY);
    }

    // PayPal Pay Later: $30 - $1,500 (Pay in 4)
    if (cartTotal >= 3000 && cartTotal <= 150000) {
      providers.push(BnplProvider.PAYPAL);
    }

    return providers;
  }

  /**
   * Create BNPL checkout session (Affirm example)
   */
  async createAffirmCheckout(
    merchantId: string,
    orderId: string,
    amount: number,
    customer: { firstName: string; lastName: string; email: string; phone: string },
    shippingAddress: any,
    lineItems: any[],
  ) {
    // Create Affirm checkout
    const checkout = await this.affirmClient.createCheckout({
      merchant: {
        user_confirmation_url: `https://yoursite.com/checkout/affirm/confirm`,
        user_cancel_url: `https://yoursite.com/checkout/affirm/cancel`,
        user_confirmation_url_action: 'POST',
      },
      order_id: orderId,
      shipping: shippingAddress,
      billing: shippingAddress, // Often same as shipping
      items: lineItems.map((item) => ({
        display_name: item.name,
        sku: item.sku,
        unit_price: item.price,
        qty: item.quantity,
        item_image_url: item.imageUrl,
        item_url: item.productUrl,
      })),
      total: amount,
      currency: 'USD',
      tax_amount: this.calculateTax(lineItems),
      shipping_amount: this.calculateShipping(shippingAddress),
      metadata: {
        merchant_id: merchantId,
        order_id: orderId,
      },
    });

    // Return checkout URL for redirect
    return {
      checkoutUrl: checkout.redirect_url,
      checkoutToken: checkout.checkout_token,
    };
  }

  /**
   * Handle Affirm callback after customer completes checkout
   */
  async handleAffirmCallback(checkoutToken: string): Promise<{
    status: 'approved' | 'declined';
    transactionId?: string;
    amount?: number;
  }> {
    // Authorize the charge
    const authorization = await this.affirmClient.authorizeCharge(checkoutToken);

    if (authorization.status === 'authorized') {
      // Charge is authorized, merchant can fulfill order
      // Capture charge (merchant receives money)
      const capture = await this.affirmClient.captureCharge(authorization.id);

      return {
        status: 'approved',
        transactionId: capture.id,
        amount: capture.amount,
      };
    } else {
      return { status: 'declined' };
    }
  }

  /**
   * Calculate merchant revenue impact of offering BNPL
   */
  calculateBnplImpact(
    monthlyVolume: number,
    averageOrderValue: number,
    bnplAdoptionRate: number = 0.15, // 15% of customers use BNPL
    aovIncrease: number = 0.25, // 25% higher AOV with BNPL
    conversionIncrease: number = 0.10, // 10% higher conversion
  ): {
    additionalRevenue: number;
    additionalFees: number;
    netBenefit: number;
  } {
    // Revenue without BNPL
    const baseRevenue = monthlyVolume;

    // Revenue with BNPL
    const bnplVolume = monthlyVolume * bnplAdoptionRate * (1 + aovIncrease);
    const nonBnplVolume = monthlyVolume * (1 - bnplAdoptionRate) * (1 + conversionIncrease);
    const totalRevenue = bnplVolume + nonBnplVolume;

    const additionalRevenue = totalRevenue - baseRevenue;

    // Additional fees (BNPL costs ~6% vs cards ~2.5% = 3.5% more)
    const additionalFees = bnplVolume * 0.035; // 3.5% incremental cost

    return {
      additionalRevenue,
      additionalFees,
      netBenefit: additionalRevenue - additionalFees,
    };
  }
}
```

## Self-Assessment Questions

1. **What is the key difference between BNPL and traditional credit cards from a consumer perspective?**

2. **Why do merchants pay higher fees for BNPL (4-8%) vs cards (2-3%), yet still offer it?**

3. **A customer misses a payment on Affirm vs Afterpay. What happens differently?**

4. **What is the current regulatory status of BNPL in the US (as of December 2025)?**

5. **For a $150 purchase, which BNPL providers would be available to the customer?**

See [quiz.md](./quiz.md) for answers and additional questions.

## Related Topics

- [Alternative Payment Methods Overview](./index.md) - Compare BNPL to ACH, cards, wallets
- [Digital Wallets](./digital-wallets.md) - PayPal and Venmo overlap with BNPL
- [Fee Breakdown](../../fundamentals/four-party-model/fee-breakdown.md) - Card economics comparison
- [PayFac Implementation](../implementation.md) - Platform integration strategies

## References

### Provider Documentation

- [Affirm Developer Docs](https://docs.affirm.com/) - API integration guides
- [Klarna Developer Portal](https://docs.klarna.com/) - Checkout and payments
- [Afterpay Developer](https://developers.afterpay.com/) - API reference
- [PayPal Pay Later](https://developer.paypal.com/docs/checkout/pay-later/) - Integration guide

### Industry Reports

- CFPB BNPL Report (2022) - Consumer protection study
- [Worldpay Global Payments Report](https://www.worldpay.com/global-payments-report) - Market sizing
- eMarketer BNPL Forecast - User adoption trends
- Consumer Financial Protection Bureau BNPL Market Study

### Regulatory Resources

- [CFPB Interpretive Rule (May 2024)](https://www.consumerfinance.gov/compliance/compliance-resources/consumer-laws-and-regulations/buy-now-pay-later/) - Credit card protections for BNPL
- Financial Technology Association (FTA) - Industry advocacy
