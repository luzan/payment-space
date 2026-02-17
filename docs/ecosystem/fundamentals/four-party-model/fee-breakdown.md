---
title: "Interchange Fees Explained | Complete Payment Fee Breakdown & Money Flow"
description: "How interchange fees work: 1.4%-3.3% to issuers, 0.13%-0.16% network fees, plus acquirer markup. See exact money flow for $100 transaction with diagrams."
sidebar_position: 3
sidebar_label: "Fee Breakdown"
slug: fee-breakdown
keywords:
  - interchange fees
  - interchange fees explained
  - payment fees
  - merchant discount rate
  - assessment fees
  - acquirer markup
---

# Interchange Fees Explained: Complete Payment Fee Breakdown

> **Last Updated:** 2025-12-18
>
> **Status:** Complete

**How do interchange fees work?** Every card transaction involves three fee layers: **interchange fees** (1.4%-3.3% paid to issuing banks), **assessment fees** (0.13%-0.16% paid to card networks like Visa/Mastercard), and **acquirer markups** (0.1%-1.5% negotiable). The total Merchant Discount Rate (MDR) typically ranges from 1.5%-3.5% depending on card type, transaction method, and merchant category. This guide breaks down exactly where every dollar goes, which fees you can negotiate, and how to optimize your processing costs.

---

## What Are Interchange Fees?

Interchange fees are the largest component of merchant payment processing costs, representing 70-80% of total fees. These fees are paid by the acquiring bank to the issuing bank on every card transaction to compensate for:

- **Credit risk**: The issuer extends credit to cardholders and bears default risk
- **Fraud liability**: Issuers are liable for fraudulent transactions in most cases
- **Rewards funding**: Higher interchange rates (2.5%-3.3%) fund cashback and travel rewards programs
- **Network infrastructure**: Processing, authorization, and settlement systems

**Key fact:** Interchange rates are set by [card networks](/glossary#card-network) (Visa/Mastercard), not merchants or [acquirers](/glossary#acquiring-bank), and vary by:
- Card type (debit vs credit vs premium rewards)
- Transaction type ([card-present](/glossary#card-present) vs [card-not-present](/glossary#card-not-present))
- [Merchant category](/glossary#merchant-category-code) (grocery vs retail vs e-commerce)
- Data quality ([Level 2 vs Level 2/3 data](/ecosystem/fundamentals/four-party-model/optimization))

Interchange is **non-negotiable** — only the [acquirer](/glossary#acquiring-bank) markup portion of fees can be negotiated.

### Interchange Comparison: Card Types

| Card Type | Example | Typical Interchange | $100 Transaction Fee | Why This Rate? |
|-----------|---------|-------------------|---------------------|----------------|
| **Regulated Debit** | Chase debit (bank >$10B assets) | 0.05% + $0.22 | $0.27 | Durbin Amendment cap |
| **Unregulated Debit** | Local credit union debit | 0.80% - 1.15% | $0.80 - $1.15 | No Durbin cap applies |
| **Basic Credit** | Visa Classic, Mastercard Standard | 1.43% + $0.05 | $1.48 | Standard consumer credit |
| **Rewards Credit** | Chase Freedom, Citi Double Cash | 1.65% - 2.10% | $1.70 - $2.15 | Funds 1-2% cashback |
| **Premium Rewards** | Chase Sapphire Reserve, AmEx Platinum | 2.40% - 3.30% | $2.45 - $3.35 | Funds 3-5% rewards/perks |
| **Corporate Card** | Visa Business, Mastercard Commercial | 2.50% - 3.50% | $2.60 - $3.60 | Business controls, reporting |

**Merchant Impact:** A merchant accepting all card types pays 12x more for a premium rewards card compared to a [regulated debit card](/ecosystem/fundamentals/debit-networks-routing) on the same transaction.

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
| **Data quality** | [Level 2/3 data](/ecosystem/fundamentals/four-party-model/optimization) | Basic data |

### Actual Interchange Ranges

| Card Type | Typical Range |
|-----------|---------------|
| **[Regulated debit](/ecosystem/fundamentals/debit-networks-routing)** (Durbin) | 0.05% + $0.22 (capped) |
| **Unregulated debit** | 0.8% - 1.5% |
| **Consumer credit** | 1.4% - 2.4% |
| **Premium rewards credit** | 2.0% - 3.3% |
| **Commercial/corporate** | 2.5% - 3.5% |

**Example:** A Chase Sapphire Reserve transaction might have 2.95% interchange, while a [regulated debit card](/ecosystem/fundamentals/debit-networks-routing) from Chase is capped at $0.22 + 0.05%.

---

## Card-Present vs Card-Not-Present

Where and how the card is used affects interchange:

| Transaction Type | Example | Interchange Impact |
|------------------|---------|-------------------|
| **[Card-present (CP)](/glossary#card-present)** | Chip inserted, tap-to-pay | Lower (lower fraud risk) |
| **[Card-not-present (CNP)](/glossary#card-not-present)** | E-commerce, phone orders | Higher (higher fraud risk) |
| **Keyed-in** | Manually typed at terminal | Highest (highest risk) |

### Example Interchange Difference (Visa)

- CPS Retail (chip): 1.43% + $0.05
- CPS E-commerce: 1.80% + $0.10
- Standard (non-qualified): 2.30% + $0.10

**This is critical for [PayFacs](/ecosystem/fundamentals/four-party-model/payfac) building software platforms that primarily process CNP [transactions](/ecosystem/fundamentals/four-party-model/transaction-flows).**

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

The [Merchant Discount Rate (MDR)](/glossary#merchant-discount-rate) is the total fee merchants pay, comprising three components:

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

1. **Funding rewards**: Higher [interchange](/glossary#interchange-fee) (2.5-3.3%) funds the 2-5% cashback/points programs
2. **Issuer economics**: [Issuers](/glossary#issuing-bank) need to cover the cost of rewards they pay out
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
| **Commercial Data Rate 1** | B2B with [Level 2 data](/ecosystem/fundamentals/four-party-model/optimization) | 2.10% + $0.10 |
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

**Downgrade example:** A [card-present](/glossary#card-present) transaction that should qualify at 1.43% + $0.05 might downgrade to 2.30% + $0.10 if batched late or missing data. See [Interchange Optimization](/ecosystem/fundamentals/four-party-model/optimization) for strategies to avoid downgrades.

---

## Key Takeaways

1. **[Interchange](/glossary#interchange-fee) dominates**: 70-80% of total merchant fees go to interchange
2. **Not all cards cost the same**: Premium rewards cards can be 2x more expensive than basic debit
3. **[Card-present](/glossary#card-present) is cheaper**: [CNP](/glossary#card-not-present) transactions have 20-40% higher interchange
4. **Only markup is negotiable**: Interchange and [assessment fees](/glossary#assessment-fee) are set by networks
5. **Qualification matters**: Late batching or missing data causes costly downgrades
6. **Assessment fees add up**: Small percentage but affects every transaction
7. **Cross-subsidy effect**: Merchants fund cardholder rewards programs

---

## Related Topics

**Four-Party Model Series:**

- **[Four-Party Model Overview](/ecosystem/fundamentals/four-party-model/)** - Core concepts and party roles
- **[Transaction Flows](/ecosystem/fundamentals/four-party-model/transaction-flows)** - Authorization, capture, settlement
- **[Interchange Optimization](/ecosystem/fundamentals/four-party-model/optimization)** - Reducing costs through data
- **[PayFac Position](/ecosystem/fundamentals/four-party-model/payfac)** - How PayFacs fit into the model
- **[Self-Assessment Quiz](/ecosystem/fundamentals/four-party-model/quiz)** - Test your understanding

**Deep Dives:**
- **[Debit Networks & Routing](/ecosystem/fundamentals/debit-networks-routing)** - Durbin Amendment and debit interchange caps
- **[Card Network Role](/ecosystem/fundamentals/card-network-role)** - Network economics and rules

---

## References

### Official Interchange Rate Documentation

- [Visa USA Interchange Reimbursement Fees](https://usa.visa.com/support/merchant/library/repository/merchant-fees.html) - Official Visa interchange rate portal
- [Mastercard Interchange Programs and Rates](https://www.mastercard.us/en-us/business/overview/support/merchant-rates-2024.html) - Official Mastercard interchange schedules

*Note: Interchange rates change in April and October. Always verify current rates at official network portals.*

---

*Continue reading: [Interchange Optimization](/ecosystem/fundamentals/four-party-model/optimization)*
