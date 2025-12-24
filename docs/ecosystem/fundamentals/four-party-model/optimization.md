---
title: "Interchange Optimization"
description: "Strategies for reducing interchange costs through Level 2/3 data, cross-border optimization, and best practices"
sidebar_position: 4
sidebar_label: "Optimization"
slug: optimization
keywords:
  - interchange optimization
  - level 2 data
  - level 3 data
  - cross-border fees
  - merchant optimization
---

# Interchange Optimization

> **Last Updated:** 2025-12-18
>
> **Status:** Complete
>
> This document covers strategies for reducing interchange costs and optimizing transaction processing.

---

## Level 2 and Level 3 Data

Passing additional transaction data qualifies for lower commercial card rates:

### Data Levels Overview

| Data Level | Required Fields | Savings | Best For |
|------------|-----------------|---------|----------|
| **Level 1** | Basic card data | Standard rates | Consumer transactions |
| **Level 2** | + Tax amount, customer code, merchant postal code | 0.10-0.25% lower | B2B, government |
| **Level 3** | + Line item detail, product codes, quantities | 0.30-0.50% lower | Large B2B, corporate |

### Level 1 Data (Standard)

Basic transaction data required for all transactions:

```
┌────────────────────────────────────────────────────────────────────┐
│                        LEVEL 1 DATA                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  • Merchant name and location                                     │
│  • Transaction amount                                             │
│  • Transaction date/time                                          │
│  • Card number (PAN)                                              │
│  • Card expiration date                                           │
│  • Authorization code                                             │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Level 2 Data (Enhanced)

Additional data for B2B and government transactions:

```
┌────────────────────────────────────────────────────────────────────┐
│                        LEVEL 2 DATA                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Level 1 data PLUS:                                                │
│                                                                    │
│  • Tax amount                                                      │
│  • Customer code / Purchase order number                          │
│  • Merchant postal/ZIP code                                       │
│  • Merchant tax ID                                                │
│  • Duty amount (if applicable)                                    │
│  • Freight/shipping amount                                        │
│  • Destination postal code                                        │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**Typical savings:** 0.10% - 0.25% on commercial cards

### Level 3 Data (Full Line-Item Detail)

Comprehensive data for large corporate purchases:

```
┌────────────────────────────────────────────────────────────────────┐
│                        LEVEL 3 DATA                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Level 2 data PLUS (for each line item):                           │
│                                                                    │
│  • Item description                                                │
│  • Product code / SKU                                              │
│  • Quantity                                                        │
│  • Unit of measure                                                 │
│  • Unit price                                                      │
│  • Extended item amount                                            │
│  • Item tax rate                                                   │
│  • Item tax amount                                                 │
│  • Discount amount (if applicable)                                │
│  • Commodity code                                                  │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**Typical savings:** 0.30% - 0.50% on commercial cards

### Example: Interchange Savings with Level 2/3 Data

**Scenario:** $10,000 corporate card transaction

| Data Level | Interchange Rate | Fee Amount | Annual Savings (100 txns) |
|------------|------------------|------------|---------------------------|
| **Level 1** | 2.50% | $250 | $25,000 |
| **Level 2** | 2.25% | $225 | $22,500 ($2,500 saved) |
| **Level 3** | 2.00% | $200 | $20,000 ($5,000 saved) |

**For B2B merchants processing significant corporate card volume, Level 3 data can save thousands annually.**

---

## Other Optimization Tactics

### 1. AVS/CVV Verification

Address Verification Service (AVS) and Card Verification Value (CVV) improve qualification:

| Verification | Impact | Savings |
|--------------|--------|---------|
| **AVS match** | Qualifies for better CNP rates | 0.05% - 0.15% |
| **CVV match** | Reduces fraud, improves rates | 0.05% - 0.10% |
| **Both match** | Best CNP qualification | 0.10% - 0.25% |

**Example:**
- Standard e-commerce: 1.95% + $0.10
- With AVS/CVV match: 1.80% + $0.10

### 2. Batch Timing

Close batches within 24 hours to avoid downgrades:

```
┌────────────────────────────────────────────────────────────────────┐
│                      BATCH TIMING IMPACT                           │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ✓ Settle within 24 hours:  Qualified rate (1.43% + $0.05)        │
│                                                                    │
│  ⚠ Settle 24-72 hours:      Mid-qualified (1.95% + $0.10)         │
│                                                                    │
│  ✗ Settle >72 hours:        Non-qualified (2.30% + $0.10)         │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**Best practice:** Batch daily before cutoff time (typically 5-6 PM EST)

### 3. Correct Merchant Category Code (MCC)

Ensure your MCC matches your actual business:

| MCC | Category | Typical Interchange |
|-----|----------|-------------------|
| **5411** | Grocery stores | 1.15% + $0.05 (lower) |
| **5541** | Service stations | 1.19% + $0.05 (lower) |
| **5812** | Restaurants | 1.43% + $0.05 |
| **5999** | Miscellaneous retail | 1.80% + $0.10 (higher) |

**Impact:** Using incorrect MCC can result in higher interchange or downgrade to standard rates.

### 4. Address Data for CNP Transactions

For card-not-present transactions, providing complete address data helps:

| Data Provided | Qualification |
|---------------|--------------|
| **No AVS** | Standard/non-qualified |
| **Partial AVS** | Mid-qualified |
| **Full AVS match** | Qualified for best CNP rate |

### 5. Settle Promptly After Authorization

Delayed settlement can cause downgrades:

```
Authorization → Capture → Settlement

Best practice timeline:
• Authorize at point of sale
• Capture within same day
• Batch before daily cutoff
• Settle T+1

Avoid:
• Authorizing days before capture (hotels: acceptable exception)
• Batching days after authorization
• Missing batch cutoff times
```

---

## Cross-Border Transactions

International transactions involve additional fees:

### Cross-Border Fee Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      CROSS-BORDER TRANSACTION FEES                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Standard domestic fees:                              ~2.5%                 │
│                                                                             │
│  PLUS:                                                                      │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │ Currency conversion fee:                           1.0% - 3.0%         │ │
│  │ Cross-border assessment:                           0.40% - 1.00%       │ │
│  │ International service fee:                         0.20% - 0.40%       │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  TOTAL for cross-border:                              4.0% - 7.0%           │
│                                                                             │
│  Note: Rates vary by network, card type, and currency pair                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Cross-Border Fee Components

| Fee Type | Rate | Description |
|----------|------|-------------|
| **Visa International Service Assessment** | 0.40% - 1.00% | Varies by region and card type |
| **Mastercard Cross-Border Assessment** | 0.45% - 1.00% | Higher for intra-Europe transactions |
| **Currency Conversion Fee** | 1.0% - 3.0% | Processor's FX markup |
| **International Acquirer Fee** | 0.20% - 0.50% | Additional acquirer markup |

### Cross-Border Optimization Strategies

1. **Multi-currency pricing**: Present prices in customer's currency
2. **Local acquiring**: Establish local merchant accounts in high-volume markets
3. **Dynamic currency conversion (DCC)**: Offer choice of currencies (but watch FX markups)
4. **Currency hedging**: Lock in FX rates for predictable costs

### Additional Cross-Border Considerations

**Different interchange schedules by region:**
- EU: Capped at 0.2% (debit) and 0.3% (credit) since 2015
- Australia: Similar caps implemented
- US: No caps (hence higher fees)

**Regulatory differences:**
- Strong Customer Authentication (SCA) in EU
- 3D Secure requirements
- Data localization laws (GDPR, etc.)

**Settlement currency:**
- Settlement in local currency vs USD
- FX exposure and timing
- Multi-currency accounting

---

## Optimization Checklist

Use this checklist to maximize interchange qualification:

### For All Merchants

- [ ] Close batches within 24 hours of authorization
- [ ] Use correct MCC for your business type
- [ ] Implement AVS/CVV verification for CNP transactions
- [ ] Capture transactions promptly after authorization
- [ ] Ensure all required transaction data is present
- [ ] Monitor downgrades and investigate causes
- [ ] Review interchange statements monthly

### For B2B Merchants

- [ ] Implement Level 2 data capture (tax, PO number, etc.)
- [ ] Implement Level 3 data for large corporate sales
- [ ] Train staff on importance of collecting customer codes
- [ ] Validate Level 2/3 data submission in test environment
- [ ] Track savings from enhanced data vs standard processing

### For International Merchants

- [ ] Compare local acquiring vs cross-border fees
- [ ] Evaluate multi-currency pricing options
- [ ] Understand regional interchange differences
- [ ] Comply with regional regulations (SCA, etc.)
- [ ] Monitor FX rates and conversion fees

### For PayFacs

- [ ] Educate sub-merchants on optimization strategies
- [ ] Provide Level 2/3 data APIs in platform
- [ ] Monitor sub-merchant downgrades
- [ ] Consider interchange optimization as value-add service
- [ ] Track portfolio-wide qualification rates

---

## Common Optimization Mistakes

### Mistake 1: Not Passing Level 2/3 Data for B2B

**Impact:** Leaving 0.30% - 0.50% savings on the table

**Solution:** Implement Level 2/3 data capture for corporate customers

### Mistake 2: Late Batching

**Impact:** Downgrades from 1.43% to 2.30% (0.87% penalty)

**Solution:** Automate batch closing before daily cutoff

### Mistake 3: Incorrect MCC

**Impact:** Higher interchange or non-qualification

**Solution:** Verify MCC matches actual business activity

### Mistake 4: Missing AVS/CVV for CNP

**Impact:** 0.10% - 0.25% higher rates, increased fraud

**Solution:** Require AVS/CVV for all card-not-present transactions

### Mistake 5: Delayed Capture

**Impact:** Downgrades and possible authorization expiration

**Solution:** Capture within same business day when possible

---

## Key Takeaways

1. **Level 2/3 data saves money**: B2B merchants can save 0.30% - 0.50% with full line-item data

2. **Batch timing is critical**: Late batching causes costly downgrades

3. **AVS/CVV reduces costs**: Verification improves CNP qualification and reduces fraud

4. **Cross-border is expensive**: International fees can reach 4% - 7% total

5. **MCC matters**: Correct category code ensures proper interchange

6. **Prompt settlement helps**: Delay between auth and settlement causes downgrades

7. **Monitor downgrades**: Regular review identifies optimization opportunities

---

## Related Topics

**Four-Party Model Series:**
- **[Four-Party Model Overview](/ecosystem/fundamentals/four-party-model/)** - Core concepts and party roles
- **[Transaction Flows](/ecosystem/fundamentals/four-party-model/transaction-flows)** - Authorization, capture, settlement
- **[Fee Breakdown](/ecosystem/fundamentals/four-party-model/fee-breakdown)** - Where fees go and why
- **[PayFac Position](/ecosystem/fundamentals/four-party-model/payfac)** - How PayFacs fit into the model
- **[Self-Assessment Quiz](/ecosystem/fundamentals/four-party-model/quiz)** - Test your understanding

**Deep Dives:**
- **[Debit Networks & Routing](/ecosystem/fundamentals/debit-networks-routing)** - Least-cost routing optimization
- **[Card Network Role](/ecosystem/fundamentals/card-network-role)** - Network rules and compliance

---

## References

### Official Documentation

- [Visa Level 2/Level 3 Data Requirements](https://usa.visa.com/support/merchant/library/repository/merchant-data-standards.html)
- [Mastercard Enhanced Data Specifications](https://www.mastercard.us/en-us/business/overview/support/merchant-data-standards.html)

---

*Continue reading: [PayFac Position in the Model](/ecosystem/fundamentals/four-party-model/payfac)*
