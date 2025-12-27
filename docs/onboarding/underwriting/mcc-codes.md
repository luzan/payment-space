---
title: "Merchant Category Codes (MCC)"
description: "Understanding MCC classification, risk tiers, and business categorization"
sidebar_position: 3
keywords:
  - MCC codes
  - merchant category codes
  - business classification
  - high-risk MCC
---

# Merchant Category Codes (MCC)

> **Status:** Pending content development
>
> **Last Updated:** 2025-12-25

## Overview

Merchant Category Codes (MCCs) are four-digit numbers assigned by card networks to classify the type of goods or services a merchant provides. MCC determines interchange rates, transaction risk, and regulatory treatment.

## Content Sections (To Be Developed)

### What Are MCC Codes?

- Definition and purpose
- Who assigns MCCs (ISO 18245 standard)
- How MCCs are used:
  - Interchange rate determination
  - Risk classification
  - Card benefit eligibility (travel rewards, cashback categories)
  - Regulatory compliance (surcharge rules, prohibited transactions)

### MCC Structure

- Four-digit numeric code
- Grouped by industry category
- Example categories:
  - 0001-1499: Agricultural Services
  - 1500-2999: Contracted Services
  - 4000-4799: Transportation Services
  - 5000-5599: Retail Outlet Services
  - 5600-5699: Clothing Stores
  - 5700-7299: Miscellaneous Stores
  - 7300-7999: Business Services
  - 8000-8999: Professional Services and Membership Organizations

### Common MCC Examples

| MCC | Description | Risk Level |
|-----|-------------|------------|
| 5411 | Grocery Stores, Supermarkets | Low |
| 5812 | Eating Places, Restaurants | Low |
| 5999 | Miscellaneous Retail | Medium |
| 6051 | Crypto Currency | High |
| 5967 | Direct Marketing - Inbound Telemarketing | High |
| 7995 | Gambling Transactions | High |
| 5912 | Drug Stores, Pharmacies | Low |
| 4511 | Airlines | Medium |

### MCC Risk Tiers

#### Low-Risk MCCs
- Grocery stores
- Restaurants (non-alcohol)
- Retail clothing
- Book stores
- Pharmacies (prescription)

#### Medium-Risk MCCs
- General retail
- Professional services
- Travel agencies
- Equipment rental
- Repair services

#### High-Risk MCCs
- Telemarketing
- Dating services
- Adult content
- Gambling
- Nutraceuticals/supplements
- Debt collection
- Cryptocurrencies

#### Prohibited/Restricted MCCs
- Firearms and ammunition (restricted)
- Cannabis (federally prohibited in US)
- Counterfeit goods
- Illegal services

### MCC Assignment Process

1. Merchant describes their business
2. Underwriter evaluates primary business activity
3. Most specific MCC is selected
4. Assignment documented in merchant agreement
5. MCC submitted to processor/acquirer

### MCC Misclassification

**Indicators of Misclassification:**
- Actual product/service doesn't match MCC description
- Merchant pressures for lower-risk MCC
- Website content contradicts stated business type
- Transaction patterns inconsistent with MCC

**Consequences:**
- Chargeback liability
- Acquirer fines
- Account termination
- MATCH list addition (reason code for misrepresentation)

### Special MCC Considerations

#### Restricted Industries
Some MCCs require additional licenses or sponsor bank approval:
- Financial services
- Money transfer
- Cannabis-related businesses (CBD vs. THC)
- Adult entertainment

#### Interchange Optimization
- Lower-risk MCCs may qualify for lower interchange
- MCC downgrading (fraud) vs. legitimate optimization

#### Card Network Rules
- Specific MCC restrictions by network (Visa vs. Mastercard)
- Emerging MCC codes (e.g., 6051 for cryptocurrency added 2020)

### Multiple Business Lines

When a merchant operates multiple business types:
- Assign primary MCC based on highest revenue/volume
- May require separate merchant accounts for vastly different businesses
- Avoid generic "miscellaneous" MCCs when specific codes exist

## MCC and Pricing

Interchange rates vary significantly by MCC:

- Supermarkets: Lower interchange (high volume, low margin)
- Travel: Higher interchange (rewards cards, premium cardholders)
- Government/education: Regulated lower rates

## Self-Assessment Questions

[Questions to be added covering MCC classification, risk tiers, and assignment rules]

## Related Topics

- [Risk Factors](./risk-factors.md) - How MCC affects overall risk
- [Fundamentals](./fundamentals.md) - Underwriting use of MCC
- [Four-Party Model](/ecosystem/fundamentals/four-party-model/fee-breakdown.md) - Interchange rates

## References

- Visa MCC Merchant Category Classification
- Mastercard Merchant Category Codes
- ISO 18245 Standard
- IRS Form 1099-K MCC Reporting Requirements
