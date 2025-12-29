---
title: "2025 KYB Regulatory Updates"
description: "FinCEN Corporate Transparency Act exemption and Customer Due Diligence Rule updates affecting PayFac KYB requirements"
sidebar_position: 4
sidebar_label: "2025 Regulatory Updates"
keywords:
  - Corporate Transparency Act
  - CTA exemption
  - FinCEN CDD Rule
  - beneficial ownership reporting
  - 2025 regulations
---

# 2025 KYB Regulatory Updates

> **Last Updated:** 2025-12-28
> **Status:** Complete

This page covers the most significant 2025 regulatory changes affecting KYB processes for Payment Facilitators.

## FinCEN CTA Exemption (March 2025)

### Major Change

On **March 26, 2025**, FinCEN issued guidance removing BOI (Beneficial Ownership Information) reporting requirements for **all U.S. domestic companies** under the Corporate Transparency Act (CTA).

### Background

- **Corporate Transparency Act (CTA):** Enacted 2021, required companies to report beneficial owners to FinCEN
- **Original Rule:** All corporations, LLCs, and similar entities must file BOI reports identifying 25%+ beneficial owners
- **Exemptions:** Large operating companies, regulated entities (banks, brokers), certain trusts

### What Changed (March 2025)

- **U.S. Domestic Entities:** No longer required to file BOI reports with FinCEN
- **Foreign Entities:** Still must report BOI if registered to do business in the U.S.
- **25% Threshold:** Beneficial ownership threshold remains 25% for other purposes (FinCEN CDD Rule, sponsor bank requirements)

### Impact on PayFacs

| Area | Before (2021-2025) | After (March 2025) |
|------|-------------------|-------------------|
| **FinCEN BOI Filing** | Required for all entities | Not required for U.S. domestic entities |
| **PayFac KYB Process** | No change (never relied on FinCEN filings) | No change |
| **UBO Identification** | Required (25%+ owners) | **Still required** (FinCEN CDD Rule) |
| **Sponsor Bank Requirements** | UBO verification mandatory | **Still mandatory** |

### Key Takeaways

- **FinCEN BOI database is no longer updated** for U.S. entities (as of March 26, 2025)
- **PayFacs still must identify and verify UBOs** under FinCEN CDD Rule (separate regulation)
- **CTA exemption does NOT eliminate KYB requirements** for payment processors

:::warning CTA Exemption Does NOT Eliminate UBO Requirements
While the March 2025 CTA update removed FinCEN reporting, PayFacs are still required to collect and verify beneficial owner information under the **FinCEN Customer Due Diligence (CDD) Rule**, which remains in full effect. This is separate from the CTA.
:::

### Foreign Entity Requirements (Still in Effect)

- Foreign companies registered in the U.S. still must file BOI reports
- 25%+ beneficial owners must be identified
- Submitted to FinCEN BOI database

## FinCEN CDD Rule (Still Active)

The **Customer Due Diligence (CDD) Rule** remains the primary regulation requiring KYB and UBO verification for financial institutions, including PayFacs and sponsor banks.

### Four Core Components

#### 1. Customer Identification Program (CIP)

- Verify identity of business entity
- Collect: Legal name, address, EIN, entity type
- Validate through Secretary of State, IRS records

#### 2. Beneficial Ownership Identification

- **Who:** All individuals with 25%+ ownership (equity interest)
- **Plus:** One individual with significant control (senior officer if no 25%+ owner)
- **Information Required:**
  - Name
  - Date of birth
  - Address (residential or business)
  - Social Security Number (or passport for foreign individuals)

#### 3. Understanding Nature and Purpose of Customer Relationship

- What is the business purpose?
- What products/services does the merchant sell?
- Expected transaction volume and patterns
- Geographic scope (local, national, international)

#### 4. Ongoing Monitoring

- Monitor transactions for suspicious activity
- Update customer information periodically
- File SARs (Suspicious Activity Reports) when required

### CDD Timeline

- **Account opening:** Must collect beneficial ownership before opening account (onboarding)
- **Existing accounts:** No retroactive requirement (grandfathered)
- **Annual review:** Update UBO information if changes suspected

### Exemptions

- Financial institutions already regulated (banks, broker-dealers)
- Publicly traded companies (SEC reporting requirements)
- Government entities

:::info CDD vs CTA Distinction
- **FinCEN CDD Rule:** Financial institutions must collect UBO info (still required)
- **FinCEN CTA (now exempt for U.S. entities):** Companies must file UBO info with FinCEN (no longer required as of March 2025)

PayFacs operate under CDD Rule, so KYB/UBO requirements have **not changed** despite CTA exemption.
:::

## Summary: What PayFacs Need to Know

| Regulation | Status (Dec 2025) | PayFac Requirement |
|------------|-------------------|-------------------|
| **FinCEN CTA** | U.S. entities exempt | No direct impact on PayFac KYB |
| **FinCEN CDD Rule** | Active and enforced | Must collect 25%+ UBO info |
| **Sponsor Bank Requirements** | Active and expanding | Must verify all UBOs |
| **OFAC Screening** | Stricter (10-year retention) | Screen all parties, retain records 10 years |

## Related Topics

- [KYB Requirements Overview](../kyb-requirements.md) - Core KYB concepts
- [Beneficial Ownership](../beneficial-ownership.md) - UBO identification rules
- [Sanctions Screening](../sanctions-screening.md) - OFAC requirements including new retention rules

## References

**Government Sources:**

- [FinCEN CDD Rule](https://www.fincen.gov/resources/statutes-and-regulations/cdd-final-rule) - Customer Due Diligence requirements
- [FinCEN CTA Update (March 2025)](https://www.fincen.gov/beneficial-ownership-information) - Corporate Transparency Act exemption guidance
- [FinCEN BSA Requirements](https://www.fincen.gov/resources/statutes-regulations) - Bank Secrecy Act regulations
