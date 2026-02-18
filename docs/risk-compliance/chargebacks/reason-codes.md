---
title: "Chargeback Reason Codes | Visa & Mastercard"
description: "Complete reference guide to Visa and Mastercard chargeback reason codes, including fraud, authorization, processing errors, and consumer disputes."
sidebar_position: 3
sidebar_label: "Reason Codes"
keywords:
  - chargeback reason codes
  - Visa reason codes
  - Mastercard reason codes
  - dispute categories
  - fraud chargebacks
  - 10.4 chargeback
  - 4837 chargeback
---

# Chargeback Reason Codes

> **Last Updated:** 2025-02-17
> **Status:** Complete

Every chargeback is filed under a specific reason code that determines the nature of the dispute, required evidence for representment, and expected win rates. Understanding reason codes is essential for effective dispute management.

## Quick Reference

| Category | Visa Codes | Mastercard Codes | Description |
|----------|------------|------------------|-------------|
| Fraud | 10.x | 4837, 4863 | Unauthorized transactions |
| Authorization | 11.x | 4808, 4812 | Auth issues |
| Processing | 12.x | 4834, 4831 | Merchant errors |
| Consumer | 13.x | 4853, 4855 | Service disputes |

## Reason Code Structure

### Visa Reason Codes

Visa uses a hierarchical numbering system:

```
10.4
│  │
│  └── Sub-category (specific dispute type)
└──── Category (fraud, auth, processing, consumer)
```

| Category | Code Range | Description |
|----------|------------|-------------|
| Fraud | 10.1 - 10.5 | Fraudulent transactions |
| Authorization | 11.1 - 11.3 | Authorization issues |
| Processing Errors | 12.1 - 12.7 | Merchant mistakes |
| Consumer Disputes | 13.1 - 13.9 | Service/product issues |

### Mastercard Reason Codes

Mastercard uses 4-digit codes:

| Category | Code Range | Description |
|----------|------------|-------------|
| Fraud | 4837, 4863, 4871 | Unauthorized transactions |
| Authorization | 4807, 4808, 4812 | Authorization issues |
| Point-of-Interaction | 4834, 4831 | Processing errors |
| Cardholder Disputes | 4853, 4855 | Service disputes |

## Fraud Reason Codes (10.x / 48xx)

Fraud chargebacks are filed when the cardholder claims they did not authorize the transaction.

### Visa Fraud Codes

| Code | Name | Description | Win Rate |
|------|------|-------------|----------|
| **10.1** | EMV Liability Shift Counterfeit Fraud | Chip card used at non-chip terminal | 10-15% |
| **10.2** | EMV Liability Shift Non-Counterfeit Fraud | Lost/stolen chip card at non-chip terminal | 10-15% |
| **10.3** | Other Fraud - Card-Present | In-person fraud | 15-20% |
| **10.4** | Other Fraud - Card-Not-Present | Online/phone fraud | 20-30% |
| **10.5** | Visa Fraud Monitoring Program | VFMP-flagged fraud | 5-10% |

### Mastercard Fraud Codes

| Code | Name | Description | Win Rate |
|------|------|-------------|----------|
| **4837** | No Cardholder Authorization | Cardholder denies participation | 20-25% |
| **4863** | Cardholder Does Not Recognize | Transaction not recognized | 25-30% |
| **4871** | Chip/PIN Liability Shift | EMV liability shift | 10-15% |

### Fighting Fraud Chargebacks

Fraud chargebacks are challenging because the cardholder claims they didn't make the purchase. Key evidence includes:

| Evidence Type | Strength | Description |
|---------------|----------|-------------|
| **3D Secure Auth** | Strong | Shifts liability to issuer |
| **AVS Full Match** | Medium | Address matched issuer records |
| **CVV Match** | Medium | Security code verified |
| **Device Fingerprint** | Medium | Links to previous valid orders |
| **Prior Purchase History** | Medium | Same customer made prior orders |
| **IP Geolocation** | Weak-Medium | IP near billing address |
| **Email/Phone Match** | Weak | Known customer contact info |

:::tip 3D Secure Liability Shift
When you use 3D Secure (3DS) and the transaction is authenticated, liability shifts to the issuer. Fraud chargebacks on 3DS-authenticated transactions should be represented with the authentication proof.
:::

## Authorization Reason Codes (11.x / 48xx)

Authorization chargebacks occur when there are issues with the authorization process.

### Visa Authorization Codes

| Code | Name | Description | Win Rate |
|------|------|-------------|----------|
| **11.1** | Card Recovery Bulletin | Card was on hot list | 60-70% |
| **11.2** | Declined Authorization | Auth was declined but transaction processed | 70-80% |
| **11.3** | No Authorization | No auth obtained | 65-75% |

### Mastercard Authorization Codes

| Code | Name | Description | Win Rate |
|------|------|-------------|----------|
| **4807** | Warning Bulletin File | Card on hot list | 60-70% |
| **4808** | Authorization Required Not Obtained | No valid auth | 70-80% |
| **4812** | Account Number Not on File | Invalid card number | 75-85% |

### Fighting Authorization Chargebacks

Authorization chargebacks are often winnable if you have proper authorization records:

| Evidence Type | Description |
|---------------|-------------|
| Authorization Code | The auth code received at time of sale |
| Authorization Log | Full authorization request/response |
| AVS/CVV Response | Verification results |
| Timestamp | When authorization was obtained |

## Processing Error Codes (12.x / 48xx)

Processing error chargebacks result from merchant mistakes in processing the transaction.

### Visa Processing Error Codes

| Code | Name | Description | Win Rate |
|------|------|-------------|----------|
| **12.1** | Late Presentment | Transaction submitted too late | 30-40% |
| **12.2** | Incorrect Transaction Code | Wrong transaction type | 50-60% |
| **12.3** | Incorrect Currency | Wrong currency used | 60-70% |
| **12.4** | Incorrect Account Number | Wrong card number processed | 70-80% |
| **12.5** | Incorrect Amount | Amount different than agreed | 60-70% |
| **12.6** | Duplicate Processing | Same transaction twice | 40-50% |
| **12.7** | Invalid Data | Incorrect transaction data | 50-60% |

### Mastercard Processing Error Codes

| Code | Name | Description | Win Rate |
|------|------|-------------|----------|
| **4831** | Transaction Amount Differs | Amount doesn't match | 60-70% |
| **4834** | Duplicate Processing | Same transaction twice | 45-55% |

### Fighting Processing Error Chargebacks

Processing errors often involve proving transactions are distinct or amounts are correct:

| For Duplicate Claims | Evidence Needed |
|---------------------|-----------------|
| Two Valid Orders | Separate order confirmations, tracking numbers |
| Different Items | Itemized receipts showing different products |
| Different Dates | Transaction timestamps |
| Customer Acknowledgment | Email confirming both orders |

| For Amount Disputes | Evidence Needed |
|--------------------|-----------------|
| Original Agreement | Signed quote, order form |
| Price List | Published pricing |
| Invoice | Itemized invoice |

## Consumer Dispute Codes (13.x / 48xx)

Consumer disputes are filed when the cardholder has a complaint about the product or service received.

### Visa Consumer Dispute Codes

| Code | Name | Description | Win Rate |
|------|------|-------------|----------|
| **13.1** | Merchandise/Services Not Received | Customer didn't get what they paid for | 40-60% |
| **13.2** | Cancelled Recurring | Recurring charge after cancellation | 30-50% |
| **13.3** | Not as Described/Defective | Product different than expected | 35-50% |
| **13.4** | Counterfeit Merchandise | Fake goods | 20-30% |
| **13.5** | Misrepresentation | Misleading description | 30-40% |
| **13.6** | Credit Not Processed | Refund promised but not received | 50-60% |
| **13.7** | Cancelled Merchandise/Services | Cancelled but still charged | 40-50% |
| **13.8** | Original Credit Transaction Not Accepted | Original refund not applied | 60-70% |
| **13.9** | Non-Receipt of Cash or Load Transaction | ATM/load issues | 50-60% |

### Mastercard Consumer Dispute Codes

| Code | Name | Description | Win Rate |
|------|------|-------------|----------|
| **4853** | Cardholder Dispute | General service/merchandise dispute | 35-45% |
| **4855** | Goods or Services Not Provided | Non-receipt of goods/services | 40-55% |

### Fighting Consumer Dispute Chargebacks

Consumer disputes often have the best win rates when you have documentation:

#### For Non-Receipt (13.1 / 4855)

| Evidence Type | Strength | Description |
|---------------|----------|-------------|
| Tracking Number | Strong | Carrier tracking showing delivery |
| Delivery Confirmation | Very Strong | Signature or photo proof |
| GPS Coordinates | Very Strong | Delivery location match |
| Delivery Notification | Medium | Email/SMS delivery notification |

#### For Not as Described (13.3 / 4853)

| Evidence Type | Strength | Description |
|---------------|----------|-------------|
| Product Listing | Strong | Original description shown to customer |
| Product Photos | Strong | Actual product matches listing |
| Customer Communications | Medium | Customer didn't report issues |
| Return Policy | Medium | Customer had opportunity to return |

#### For Cancelled Recurring (13.2)

| Evidence Type | Strength | Description |
|---------------|----------|-------------|
| Terms of Service | Strong | Cancellation policy shown at signup |
| Cancellation Log | Very Strong | No cancellation request received |
| Active Usage | Strong | Customer used service after claimed cancellation |
| Notification Emails | Medium | Renewal notifications sent |

## Reason Code Quick Reference Chart

### Most Common Codes

| Rank | Visa | Mastercard | Category |
|------|------|------------|----------|
| 1 | 10.4 | 4837 | Fraud |
| 2 | 13.1 | 4855 | Not Received |
| 3 | 13.3 | 4853 | Not as Described |
| 4 | 13.2 | 4853 | Cancelled Recurring |
| 5 | 12.6 | 4834 | Duplicate |

### Reason Code to Evidence Matrix

| Code | 3DS | AVS | CVV | Tracking | Proof of Delivery | Terms |
|------|-----|-----|-----|----------|-------------------|-------|
| 10.4 | ★★★ | ★★ | ★★ | ★ | ★ | - |
| 4837 | ★★★ | ★★ | ★★ | ★ | ★ | - |
| 13.1 | - | - | - | ★★★ | ★★★ | - |
| 4855 | - | - | - | ★★★ | ★★★ | - |
| 13.3 | - | - | - | - | - | ★★★ |
| 13.2 | - | - | - | - | - | ★★★ |

★ = Somewhat helpful, ★★ = Helpful, ★★★ = Critical

## Code Migration Between Networks

When working with multiple processors, it's helpful to understand code equivalents:

| Dispute Type | Visa | Mastercard |
|--------------|------|------------|
| CNP Fraud | 10.4 | 4837 |
| Not Received | 13.1 | 4855 |
| Not as Described | 13.3 | 4853 |
| Duplicate | 12.6 | 4834 |
| Cancelled Recurring | 13.2 | 4853 |
| No Auth | 11.3 | 4808 |
| Credit Not Processed | 13.6 | 4853 |

## Related Topics

- [Chargeback Lifecycle](./lifecycle.md) - The dispute process
- [Representment Guide](./representment.md) - Building winning cases
- [Fraud Prevention](../fraud-prevention/index.md) - Preventing fraud chargebacks

## References

- [Visa Dispute Management Guidelines](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf)
- [Mastercard Chargeback Guide](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/mastercard-rules.pdf)
- [Chargebacks911 Reason Code Reference](https://chargebacks911.com/chargeback-reason-codes/)
