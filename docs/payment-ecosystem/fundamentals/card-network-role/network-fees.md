---
title: "Network Fees and Assessments"
description: "Understanding card network fees beyond interchange, including assessments and passthrough charges"
sidebar_position: 4
sidebar_label: "Network Fees"
keywords:
  - network assessments
  - visa fees
  - mastercard fees
  - acquirer processing fee
  - NABU fee
  - network fees
  - passthrough fees
  - card processing costs
---

# Network Fees and Assessments

Networks charge fees for using their infrastructure. While interchange gets most of the attention, network fees add 0.15-0.25% to the total cost of card acceptance.

---

## Fee Structure Overview

Card network fees consist of two main categories:

**1. ASSESSMENT FEES** (percentage-based)
- Charged on transaction volume
- Typically 0.13-0.15% of transaction amount
- Charged to acquirer (passed to merchant)

**2. PASSTHROUGH FEES** (fixed per-transaction)
- Charged per authorization, clearing, settlement
- Often overlooked but add up quickly
- Range from $0.01 to $0.04 per transaction

:::info Key Distinction
Assessment fees are percentage-based (scale with transaction size), while passthrough fees are fixed amounts (same cost for $10 or $1,000 transaction).
:::

---

## Network Assessment Fees

Assessment fees are charged on transaction volume and are non-negotiable.

### Current Assessment Rates (2024-2025)

| Network | Assessment Rate | Notes |
|---------|----------------|-------|
| **Visa** | 0.14% | Charged on gross transaction volume |
| **Mastercard** | 0.1375% | Slightly lower than Visa |
| **American Express** | Included in merchant discount | No separate assessment for closed-loop |
| **Discover** | 0.13% | Similar to Visa/Mastercard |

**CALCULATION EXAMPLE:**
```text
Transaction: $100
Visa Assessment: $100 × 0.14% = $0.14
Mastercard Assessment: $100 × 0.1375% = $0.14
```

:::note Volume-Based Variations
Assessment rates may vary slightly based on:
- Total processing volume
- Card-present vs card-not-present
- Merchant category code (MCC)
- International vs domestic
:::

---

## Passthrough Fees (The Hidden Costs)

Passthrough fees are fixed per-transaction charges that many merchants don't realize they're paying.

### Visa Passthrough Fees

**ACQUIRER PROCESSING FEE (APF):**
- **Amount:** $0.0195 per transaction
- **Applies to:** Every Visa authorization
- **Non-negotiable**
- **Who pays:** Acquirer → Merchant

**FIXED ACQUIRER NETWORK FEE (FANF):**
- **Amount:** Monthly fee based on MCC
- **Range:** $1-$25 per month depending on merchant category
- **Applies to:** All Visa merchants
- **Varies by:** Industry and processing volume

**DIGITAL COMMERCE FEE:**
- **Amount:** 0.02% of transaction
- **Applies to:** E-commerce transactions
- **Introduced:** April 2024
- **Purpose:** Fund network infrastructure improvements

**AUTHORIZATION FEE:**
- **Amount:** $0.02 per authorization
- **Applies to:** Each authorization request (even if declined)
- **Includes:** Both approved and declined transactions

**CLEARING FEE:**
- **Amount:** ~$0.01 per cleared transaction
- **Applies to:** Captured transactions sent for clearing
- **Timing:** Batch clearing process

**SETTLEMENT FEE:**
- **Amount:** ~$0.01 per settlement
- **Applies to:** Final settlement to merchant
- **Frequency:** Daily settlement batches

### Mastercard Passthrough Fees

**NETWORK ACCESS & BRAND USAGE (NABU):**
- **Amount:** $0.0195 per authorization
- **Equivalent to:** Visa APF
- **Applies to:** Every Mastercard transaction
- **Non-negotiable**

**DIGITAL ENABLEMENT FEE:**
- **Amount:** $0.01 per transaction
- **Applies to:** E-commerce and digital wallet transactions
- **Purpose:** Support digital payment infrastructure

**AUTHORIZATION FEE:**
- **Amount:** $0.02-$0.04 per auth
- **Applies to:** Each authorization request
- **Includes:** Approved and declined

**CLEARING/SETTLEMENT:**
- **Amount:** ~$0.01-$0.02 per transaction
- **Applies to:** Batch processing

---

## Special Fee Categories

### International Transaction Fees

When cards are used outside their country of issuance:

| Fee Type | Rate | Description |
|----------|------|-------------|
| **Cross-Border Fee** | 0.40% - 1.00% | Card issued in one country, used in another |
| **Currency Conversion** | 0.20% - 0.30% | Network charges for FX conversion |
| **International Service Fee** | 0.40% - 0.80% | Additional processing complexity |

**TOTAL INTERNATIONAL SURCHARGE:** 1.00% - 2.10% on top of domestic fees

**EXAMPLE:**
```text
US merchant processes €100 from German Visa card:
- Base interchange: 1.80% ($1.80 equivalent)
- Visa assessment: 0.14% ($0.14)
- Cross-border fee: 0.90% ($0.90)
- Currency conversion: 0.30% ($0.30)
─────────────────────────────────────
Total network fees: 3.14% ($3.14) before acquirer markup
```

### Chargeback Fees

Networks charge fees when disputes occur:

| Fee Type | Amount | Who Pays |
|----------|--------|----------|
| **Chargeback Processing** | $15-$25 | Merchant (via acquirer) |
| **Arbitration Filing** | $100-$500 | Losing party |
| **Excessive Chargeback Program** | $5,000-$25,000/month | Merchants in monitoring programs |

### Industry-Specific Fees

**HIGH-RISK MCC FEES:**
- Adult entertainment: +0.10% - 0.25%
- Gambling: +0.15% - 0.30%
- Travel: +0.05% - 0.10%

**GOVERNMENT/UTILITIES:**
- Reduced rates for certain MCCs
- May have special assessment structures

---

## Complete Fee Breakdown: Real-World Example

Let's break down ALL fees on a typical e-commerce transaction.

### $100 Visa Card-Not-Present Transaction

| Fee Component | Rate/Amount | Calculation | Fee Amount | Who Receives |
|---------------|-------------|-------------|------------|--------------|
| **Interchange** | 1.80% + $0.10 | ($100 × 1.80%) + $0.10 | **$1.90** | Issuing Bank |
| **Assessment** | 0.14% | $100 × 0.14% | **$0.14** | Visa Network |
| **APF** | $0.0195 | Fixed | **$0.02** | Visa Network |
| **Digital Commerce** | 0.02% | $100 × 0.02% | **$0.02** | Visa Network |
| **Authorization** | $0.02 | Fixed | **$0.02** | Visa Network |
| **Clearing** | $0.01 | Fixed | **$0.01** | Visa Network |
| **Acquirer Markup** | 0.30% + $0.10 | ($100 × 0.30%) + $0.10 | **$0.40** | Acquirer/Processor |
| **TOTAL FEES** | - | - | **$2.51** | - |

**MERCHANT RECEIVES:** $100 - $2.51 = **$97.49**

**FEE BREAKDOWN BY RECIPIENT:**
- Issuing Bank (Interchange): $1.90 (75.7%)
- Visa Network (Assessment + Passthrough): $0.21 (8.4%)
- Acquirer/Processor (Markup): $0.40 (15.9%)

:::tip Effective Network Fee Rate
When all passthrough fees are included, effective network fees are typically **0.15% - 0.25%** of transaction volume, not just the assessment rate.
:::

---

## How Fees Change by Transaction Type

### Card-Present vs Card-Not-Present

**$100 CARD-PRESENT (Chip):**
```text
Interchange:        $1.54  (1.54% + $0.05)
Assessment (Visa):  $0.14  (0.14%)
APF:                $0.02
Authorization:      $0.02
Clearing:           $0.01
Acquirer markup:    $0.30  (0.30%)
─────────────────────────
TOTAL:              $2.03
Merchant receives:  $97.97
```

**$100 CARD-NOT-PRESENT (E-commerce):**
```text
Interchange:        $1.90  (1.80% + $0.10)
Assessment (Visa):  $0.14  (0.14%)
APF:                $0.02
Digital Commerce:   $0.02  (0.02%)
Authorization:      $0.02
Clearing:           $0.01
Acquirer markup:    $0.40  (0.40%)
─────────────────────────
TOTAL:              $2.51
Merchant receives:  $97.49
```

**DIFFERENCE:** CNP costs $0.48 more (23.6% higher) than CP

### Debit vs Credit

**$100 REGULATED DEBIT (Chase):**
```text
Interchange:        $0.27  (Durbin cap: 0.05% + $0.22)
Assessment (Visa):  $0.14  (0.14%)
APF:                $0.02
Authorization:      $0.02
Clearing:           $0.01
Acquirer markup:    $0.30  (0.30%)
─────────────────────────
TOTAL:              $0.76
Merchant receives:  $99.24
```

**$100 CREDIT (Rewards):**
```text
Interchange:        $2.40  (2.30% + $0.10)
Assessment (Visa):  $0.14  (0.14%)
APF:                $0.02
Digital Commerce:   $0.02
Authorization:      $0.02
Clearing:           $0.01
Acquirer markup:    $0.40  (0.40%)
─────────────────────────
TOTAL:              $3.01
Merchant receives:  $96.99
```

**DIFFERENCE:** Credit costs $2.25 more than regulated debit (296% higher)

---

## Fee Negotiation: What's Possible

Understanding which fees are negotiable helps merchants and PayFacs negotiate better rates.

### Non-Negotiable Fees (75-80% of total)

**INTERCHANGE:**
- Set by card networks
- Published in official rate schedules
- Updated April and October
- Same for all acquirers
- **NEGOTIABLE:** ❌ NO

**NETWORK ASSESSMENTS:**
- Set by Visa/Mastercard
- Applied uniformly to all transactions
- Published rates
- **NEGOTIABLE:** ❌ NO

**PASSTHROUGH FEES (APF, NABU, etc.):**
- Fixed by networks
- Same for all acquirers
- Cannot be waived
- **NEGOTIABLE:** ❌ NO

### Negotiable Fees (20-25% of total)

**ACQUIRER/PROCESSOR MARKUP:**
- This is the ONLY negotiable component
- Typically 0.10% - 1.50%
- Based on volume, risk, industry
- **NEGOTIABLE:** ✅ YES

**WHAT TO NEGOTIATE:**

| Merchant Profile | Typical Markup | Best-Case Markup |
|-----------------|----------------|------------------|
| **High-volume, low-risk** | 0.30% - 0.50% | 0.10% - 0.25% |
| **Medium-volume** | 0.40% - 0.70% | 0.30% - 0.50% |
| **Low-volume** | 0.70% - 1.50% | 0.50% - 1.00% |
| **High-risk** | 1.00% - 2.50% | 0.75% - 1.50% |

**NEGOTIATION LEVERAGE:**
- **Volume:** $10M+/year = strong leverage
- **Low chargebacks:** < 0.5% = better rates
- **Card-present:** Lower risk = lower markup
- **Industry:** Low-risk verticals get better rates
- **Competition:** Multiple quotes create leverage

---

## Hidden Fees to Watch For

Beyond network fees, processors may add additional charges:

### Common Hidden Fees

**STATEMENT FEES:**
- Monthly fee: $10-$25
- Often waived for high-volume merchants

**PCI NON-COMPLIANCE FEES:**
- Monthly charge: $20-$100
- Until annual PCI SAQ completed

**BATCH FEES:**
- Per-batch charge: $0.10-$0.25
- If batching multiple times per day

**MONTHLY MINIMUM FEES:**
- Charge if processing below threshold: $25-$50
- Common for low-volume merchants

**EARLY TERMINATION FEES:**
- Cancellation penalty: $250-$500
- Often in 3-year contracts

**AVS/CVV FEES:**
- Per-transaction: $0.005-$0.01
- For address/CVV verification

**GATEWAY FEES:**
- Monthly: $10-$25
- Per-transaction: $0.05-$0.10

:::warning Red Flags
- "Bundled" or "flat-rate" pricing that hides interchange
- "Qualified/Mid-Qualified/Non-Qualified" tiering (usually inflates costs)
- Automatic rate increases without notice
- Fees not disclosed upfront
:::

---

## PayFac Pricing Considerations

PayFacs must understand network fees to price sub-merchants profitably.

### PayFac Cost Structure

**COSTS INCURRED:**
- Interchange (passed through)
- Network assessments (passed through)
- Passthrough fees (passed through)
- Sponsor bank fees (markup)
- Platform costs (overhead)

**TYPICAL PAYFAC PRICING:**
```text
Sub-merchant charges: 2.9% + $0.30 per transaction

$100 transaction breakdown:
- Interchange:          $1.90
- Assessment/Network:   $0.21
- Sponsor bank markup:  $0.15
- PayFac margin:        $0.64  (0.64%)
─────────────────────────────
Total charged:          $2.90
```

**PAYFAC MARGIN:** 0.30% - 0.70% (on the markup portion)

### Blended vs Interchange-Plus

**BLENDED PRICING (Common for PayFacs):**
- Single rate: 2.9% + $0.30
- Simple for sub-merchants
- PayFac absorbs interchange variance
- Risk: Premium cards eat margin

**INTERCHANGE-PLUS (Transparent):**
- Interchange + X% markup
- Sub-merchant pays actual cost
- PayFac has predictable margin
- More complex to explain

---

## Key Takeaways

1. **Network fees are 15-25% of total cost** - Beyond interchange, networks charge assessments and passthrough fees

2. **Most fees are non-negotiable** - Only the acquirer markup (20-25% of fees) can be negotiated

3. **Passthrough fees add up** - $0.02-$0.04 per transaction seems small but adds significant cost at scale

4. **CNP costs more than CP** - E-commerce has additional digital commerce fees beyond higher interchange

5. **International is expensive** - Cross-border fees add 1-2% on top of domestic fees

---

## Related Topics

**Card Network Fundamentals:**
- **[Card Network Role Overview](/payment-ecosystem/fundamentals/card-network-role/)** - What card networks do
- **[Network Rules](/payment-ecosystem/fundamentals/card-network-role/network-rules)** - Compliance and governance

**Fee Analysis:**
- **[Fee Breakdown](/payment-ecosystem/fundamentals/four-party-model/fee-breakdown)** - Complete fee structure including interchange
- **[Interchange Optimization](/payment-ecosystem/fundamentals/four-party-model/optimization)** - Reducing total processing costs

**Pricing Models:**
- **[PayFac Economics](/payment-ecosystem/fundamentals/four-party-model/payfac)** - How PayFacs price and profit

---

## References

### Official Network Fee Schedules

- [Visa USA Interchange Reimbursement Fees](https://usa.visa.com/support/merchant/library/visa-usa-interchange-reimbursement-fees.html) - Includes assessment fee updates
- [Mastercard Interchange Rates](https://www.mastercard.us/en-us/business/overview/support/interchange-rates.html) - Assessment fees listed separately

### Industry Analysis

- [The Nilson Report](https://nilsonreport.com/) - Payment industry statistics and trends
- [PaymentsSource](https://www.paymentssource.com/) - News on network fee changes

### Processor Transparency

- [Stripe Pricing](https://stripe.com/pricing) - Example of transparent interchange-plus pricing
- [Square Pricing](https://squareup.com/us/en/pricing) - Example of blended pricing model

---

*Continue learning: [Card-Present vs Card-Not-Present](/payment-ecosystem/fundamentals/card-network-role/card-present-vs-cnp)*
