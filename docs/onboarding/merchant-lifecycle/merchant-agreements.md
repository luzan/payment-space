---
title: "Merchant Agreements"
description: "MPA terms, reserves, rolling reserves, and MATCH list reporting"
sidebar_position: 1
keywords:
  - merchant processing agreement
  - MPA
  - reserves
  - rolling reserve
  - MATCH list
  - TMF
---

# Merchant Agreements

> **Status:** Pending content development
>
> **Last Updated:** 2025-12-25

## Overview

The Merchant Processing Agreement (MPA) is the legal contract between the merchant and the acquirer (or PayFac) that defines the terms of the payment processing relationship. Understanding MPA terms, reserve structures, and MATCH list obligations is critical for both onboarding and ongoing merchant management.

## Content Sections (To Be Developed)

### Merchant Processing Agreement (MPA)

#### Key Contract Terms

**Processing Services:**
- Types of cards accepted (Visa, Mastercard, Amex, Discover)
- Card environments (CP, CNP, e-commerce)
- Settlement timeline
- Batch cutoff times

**Fees and Pricing:**
- Discount rate (percentage of transaction)
- Per-transaction fees
- Monthly minimums
- Chargeback fees
- PCI non-compliance fees
- Early termination fees

**Merchant Obligations:**
- PCI DSS compliance
- Transaction validity
- Delivery of goods/services
- Customer service standards
- Data security requirements
- Fraud prevention

**Acquirer/PayFac Rights:**
- Audit rights
- Right to suspend or terminate
- Reserve establishment
- Fee changes (with notice)
- Data usage

**Liability and Indemnification:**
- Chargeback liability (merchant responsibility)
- Data breach liability
- Regulatory fine responsibility
- Indemnification of acquirer/PayFac

**Termination Conditions:**
- Notice requirements
- Immediate termination triggers
- Final settlement
- Reserve release timeline

### Reserves

#### Types of Reserves

**Upfront Reserve:**
- One-time deposit at account opening
- Typical amounts: $5,000 - $50,000+ (risk-based)
- Held for duration of relationship plus tail period
- Released after account closure (if no liabilities)

**Rolling Reserve:**
- Percentage of each transaction held
- Typical rates: 5% - 20% (risk-based)
- Hold period: 90 - 180 days
- Creates ongoing reserve balance
- Released on rolling basis after hold period

**Minimum Reserve:**
- Floor amount regardless of volume
- Ensures baseline protection
- Typical: $10,000 - $100,000+

**Capped Reserve:**
- Rolling reserve with maximum balance
- Once cap reached, no additional holds
- Balances risk protection with merchant cash flow

#### Reserve Calculation Example

**Scenario:** 10% rolling reserve, 180-day hold

- Day 1: Process $10,000 → Hold $1,000
- Day 2: Process $15,000 → Hold $1,500
- Day 181: Release Day 1's $1,000 hold
- Day 182: Release Day 2's $1,500 hold

After 180 days of processing, reserve balance stabilizes at approximately 10% of trailing 180-day volume.

#### Reserve Purpose

- Cover chargebacks after merchant closure
- Mitigate fraud losses
- Ensure PCI fine payment
- Protect against merchant insolvency

#### Reserve Release

Conditions for releasing reserves:
- Account in good standing for X months
- Chargeback ratio below thresholds
- No pending disputes
- Tail period completion (90-180 days post-closure)

### MATCH List (Terminated Merchant File)

#### What Is MATCH?

- **Full Name:** Member Alert to Control High-Risk Merchants
- **Former Name:** Terminated Merchant File (TMF)
- **Purpose:** Shared database of terminated merchants across acquirers
- **Administrator:** Mastercard (on behalf of all networks)
- **Retention:** 5 years from addition date

#### MATCH Reason Codes

Merchants are added to MATCH for specific violations:

| Code | Reason | Description |
|------|--------|-------------|
| 01 | Account Data Compromise | Data breach, stolen card data |
| 02 | Common Point of Purchase | Fraudulent transaction source |
| 03 | Laundering | Money laundering activity |
| 04 | Excessive Chargebacks | Ratio exceeds network thresholds |
| 05 | Excessive Fraud | Fraud-to-sales ratio too high |
| 06 | Reserved for Future Use | - |
| 07 | Fraud Conviction | Criminal fraud conviction |
| 08 | Mastercard Questionable Merchant Audit Program | QMAP violation |
| 09 | Bankruptcy, Liquidation, Insolvency | Financial failure |
| 10 | Violation of Standards | Network rule violations |
| 11 | Merchant Collusion | Conspiracy with fraudsters |
| 12 | PCI-DSS Non-Compliance | Failure to maintain PCI compliance |
| 13 | Illegal Transactions | Prohibited goods/services |
| 14 | Identity Theft | Stolen identity used |

#### MATCH Inquiry Process

Before onboarding a merchant:
1. Check MATCH list using business and owner details
2. If hit found, review reason code
3. Generally decline application (some acquirers have exception processes)

#### MATCH Reporting Obligations

When terminating a merchant, report to MATCH if:
- Termination is for cause (not merchant-initiated closure)
- Reason aligns with one of the 14 reason codes
- Required documentation supports the reason code

**Timeline:** Report within timeframes specified by card networks (typically 5-10 business days)

#### MATCH Removal

- **Automatic:** After 5 years from addition date
- **Early Removal:** Rare, requires proving erroneous addition and network approval
- **Rebuttal:** Merchant can submit rebuttal statement (attached to listing, doesn't remove)

### Contract Best Practices

**For Acquirers/PayFacs:**
- Clear, unambiguous language
- Explicit reserve calculation formulas
- Defined termination triggers
- Regular contract reviews and updates

**For Merchants:**
- Read and understand all terms
- Negotiate reserves based on risk profile
- Understand termination conditions
- Know your MATCH list rights

## Self-Assessment Questions

[Questions to be added covering MPA terms, reserve structures, and MATCH list]

## Related Topics

- [Ongoing Monitoring](./ongoing-monitoring.md) - Triggering MATCH reporting
- [Underwriting Fundamentals](../underwriting/fundamentals.md) - Risk-based reserve setting
- [Risk Factors](../underwriting/risk-factors.md) - MATCH list as risk indicator

## References

- Mastercard MATCH System Guide
- Visa Acquirer Monitoring Program
- Sample Merchant Processing Agreements
- Card network operating regulations
