---
title: "Fee Breakdown & Money Flow"
description: "Understanding interchange, assessment fees, and merchant discount rates in the four-party model"
sidebar_position: 3
sidebar_label: "Fee Breakdown"
slug: fee-breakdown
keywords:
  - interchange fee
  - assessment fee
  - merchant discount rate
  - card fees
  - payment economics
---

# Fee Breakdown & Money Flow

> **Last Updated:** 2025-12-18
>
> **Status:** Complete
>
> This document breaks down the economics of card transactions and explains where every dollar goes.

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

---

## Interchange Varies Significantly

Interchange is NOT a single rate. It varies by:

| Factor | Lower Interchange | Higher Interchange |
|--------|-------------------|-------------------|
| **Card type** | Basic debit | Premium rewards credit |
| **Transaction type** | Card-present (chip) | Card-not-present (online) |
| **Merchant category** | Grocery, utilities | Retail, e-commerce |
| **Data quality** | Level 2/3 data | Basic data |

### Actual Interchange Ranges

| Card Type | Typical Range |
|-----------|---------------|
| **Regulated debit** (Durbin) | 0.05% + $0.22 (capped) |
| **Unregulated debit** | 0.8% - 1.5% |
| **Consumer credit** | 1.4% - 2.4% |
| **Premium rewards credit** | 2.0% - 3.3% |
| **Commercial/corporate** | 2.5% - 3.5% |

**Example:** A Chase Sapphire Reserve transaction might have 2.95% interchange, while a regulated debit card from Chase is capped at $0.22 + 0.05%.

---

## Card-Present vs Card-Not-Present

Where and how the card is used affects interchange:

| Transaction Type | Example | Interchange Impact |
|------------------|---------|-------------------|
| **Card-present (CP)** | Chip inserted, tap-to-pay | Lower (lower fraud risk) |
| **Card-not-present (CNP)** | E-commerce, phone orders | Higher (higher fraud risk) |
| **Keyed-in** | Manually typed at terminal | Highest (highest risk) |

### Example Interchange Difference (Visa)

- CPS Retail (chip): 1.43% + $0.05
- CPS E-commerce: 1.80% + $0.10
- Standard (non-qualified): 2.30% + $0.10

**This is critical for PayFacs building software platforms that primarily process CNP transactions.**

---

## Fee Flow Diagram

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

## Understanding Merchant Discount Rate (MDR)

The Merchant Discount Rate is the total fee merchants pay, comprising three components:

### MDR Components

```
┌──────────────────────────────────────────────────────────────────────┐
│                        MDR BREAKDOWN (2.5%)                          │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Interchange (1.80%)         ███████████████████  72%          │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Assessment (0.16%)          ██  6%                            │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Acquirer Markup (0.54%)     █████  22%                        │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Negotiable vs Non-Negotiable

| Component | Set By | Negotiable? | Typical Range |
|-----------|--------|-------------|---------------|
| **Interchange** | Card networks | No | 1.4% - 3.3% |
| **Assessment** | Card networks | No | 0.13% - 0.16% |
| **Acquirer markup** | Acquirer/processor | Yes | 0.1% - 1.5% |

**Key insight:** Only the acquirer markup is negotiable. Merchants with high volume can negotiate lower markups (0.1%-0.3%), while small businesses may pay 1%+ markups.

---

## Why Premium Rewards Cards Cost More

Premium rewards cards (like Chase Sapphire Reserve, AmEx Platinum) have higher interchange because:

1. **Funding rewards**: Higher interchange (2.5-3.3%) funds the 2-5% cashback/points programs
2. **Issuer economics**: Issuers need to cover the cost of rewards they pay out
3. **Consumer behavior**: Rewards cardholders spend more and prefer their rewards card
4. **No caps**: Unlike the EU/Australia, US has no credit card interchange caps
5. **Cross-subsidy**: Merchants pay more, effectively subsidizing rewards for cardholders

**The cycle:** Higher interchange → Better rewards → More card usage → Higher interchange. This creates an "interchange arms race" where card issuers compete on rewards funded by merchant fees.

---

## Assessment Fee Details

Assessment fees vary by network and transaction type:

### Visa Assessment Fees (2024-2025)

| Component | Rate |
|-----------|------|
| **Base assessment** | 0.14% |
| **Network access fee** | $0.0195 per transaction |
| **Credit voucher fee** | 0.14% (refunds) |
| **International service fee** | 0.40% - 1.00% (cross-border) |

### Mastercard Assessment Fees (2024-2025)

| Component | Rate |
|-----------|------|
| **Base assessment** | 0.1375% |
| **Network access fee** | $0.0195 per transaction |
| **Digital enablement fee** | $0.01 per transaction |
| **Cross-border assessment** | 0.45% - 1.00% |

*Note: Rates change periodically. Verify current rates at official network portals.*

---

## Interchange Categories

Card networks publish hundreds of interchange categories. Here are key examples:

### Visa Interchange Categories (Common Examples)

| Category | Description | Rate + Fixed |
|----------|-------------|--------------|
| **CPS Retail** | Card-present, chip/contactless | 1.43% + $0.05 |
| **CPS Supermarket** | Grocery stores (card-present) | 1.15% + $0.05 |
| **CPS Rewards 1** | Rewards card, card-present | 1.65% + $0.10 |
| **CPS E-commerce** | Online retail | 1.80% + $0.10 |
| **CPS Card Not Present** | Manual entry | 1.95% + $0.10 |
| **Commercial Data Rate 1** | B2B with Level 2 data | 2.10% + $0.10 |
| **Standard** | Non-qualified transactions | 2.30% + $0.10 |

### Mastercard Interchange Categories (Common Examples)

| Category | Description | Rate + Fixed |
|----------|-------------|--------------|
| **Merit 1** | Card-present, chip/contactless | 1.43% + $0.05 |
| **Core Value** | Basic debit, card-present | 0.95% + $0.05 |
| **E-commerce** | Online transactions | 1.80% + $0.10 |
| **World Elite** | Premium cards | 2.20% + $0.10 |
| **Standard** | Non-qualified | 2.30% + $0.10 |

---

## Transaction Qualification

Not all transactions qualify for the lowest interchange rate. Qualification depends on:

### Qualification Factors

```
┌────────────────────────────────────────────────────────────────────────┐
│                       INTERCHANGE QUALIFICATION                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  BEST RATE (Qualified):                                                │
│  ✓ Card-present with chip/contactless                                 │
│  ✓ AVS/CVV match (for CNP)                                            │
│  ✓ Settled within 24 hours                                            │
│  ✓ Correct merchant category code                                     │
│  ✓ All required data present                                          │
│                                                                        │
│  MID-TIER RATE (Mid-Qualified):                                        │
│  • Card-present but keyed                                             │
│  • Settled 24-72 hours after auth                                     │
│  • Missing some data fields                                           │
│                                                                        │
│  WORST RATE (Non-Qualified):                                           │
│  ✗ Settled >72 hours after auth                                       │
│  ✗ Incorrect MCC                                                      │
│  ✗ Missing critical data                                              │
│  ✗ High-risk transaction patterns                                     │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

**Downgrade example:** A card-present transaction that should qualify at 1.43% + $0.05 might downgrade to 2.30% + $0.10 if batched late or missing data.

---

## Key Takeaways

1. **Interchange dominates**: 70-80% of total merchant fees go to interchange
2. **Not all cards cost the same**: Premium rewards cards can be 2x more expensive than basic debit
3. **Card-present is cheaper**: CNP transactions have 20-40% higher interchange
4. **Only markup is negotiable**: Interchange and assessment are set by networks
5. **Qualification matters**: Late batching or missing data causes costly downgrades
6. **Assessment fees add up**: Small percentage but affects every transaction
7. **Cross-subsidy effect**: Merchants fund cardholder rewards programs

---

## Related Topics

**Four-Party Model Series:**

- **[Four-Party Model Overview](/payment-ecosystem/fundamentals/four-party-model/)** - Core concepts and party roles
- **[Transaction Flows](/payment-ecosystem/fundamentals/four-party-model/transaction-flows)** - Authorization, capture, settlement
- **[Interchange Optimization](/payment-ecosystem/fundamentals/four-party-model/optimization)** - Reducing costs through data
- **[PayFac Position](/payment-ecosystem/fundamentals/four-party-model/payfac)** - How PayFacs fit into the model
- **[Self-Assessment Quiz](/payment-ecosystem/fundamentals/four-party-model/quiz)** - Test your understanding

**Deep Dives:**
- **[Debit Networks & Routing](/payment-ecosystem/fundamentals/debit-networks-routing)** - Durbin Amendment and debit interchange caps
- **[Card Network Role](/payment-ecosystem/fundamentals/card-network-role)** - Network economics and rules

---

## References

### Official Interchange Rate Documentation

- [Visa USA Interchange Reimbursement Fees](https://usa.visa.com/support/merchant/library/repository/merchant-fees.html) - Official Visa interchange rate portal
- [Mastercard Interchange Programs and Rates](https://www.mastercard.us/en-us/business/overview/support/merchant-rates-2024.html) - Official Mastercard interchange schedules

*Note: Interchange rates change in April and October. Always verify current rates at official network portals.*

---

*Continue reading: [Interchange Optimization](/payment-ecosystem/fundamentals/four-party-model/optimization)*
