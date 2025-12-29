---
title: "Resources & Reading Materials"
description: "Recommended sources for learning merchant onboarding and underwriting"
sidebar_position: 3
keywords:
  - resources
  - reading materials
  - regulatory sources
  - industry documentation
---

# Resources & Reading Materials

Curated list of authoritative sources for understanding merchant onboarding, verification, and underwriting.

---

## Regulatory Sources

### FinCEN (Financial Crimes Enforcement Network)

**Customer Due Diligence Rule**
- Website: [fincen.gov](https://www.fincen.gov)
- Search: "FinCEN CDD Rule"
- Focus on: Beneficial ownership requirements, CIP requirements
- Key Document: 31 CFR 1010.230

**Beneficial Ownership Information Reporting**
- Search: "FinCEN BOI"
- Focus on: Reporting requirements, ownership thresholds
- Updated: Corporate Transparency Act (effective 2024)

**Related Topics:**
- [Beneficial Ownership](../kyc-kyb/beneficial-ownership.md)
- [KYC Requirements](../kyc-kyb/kyc-requirements.md)

---

### OFAC (Office of Foreign Assets Control)

**OFAC Sanctions Programs**
- Website: [ofac.treasury.gov](https://ofac.treasury.gov)
- Focus on: SDN list, compliance requirements for financial services
- Live List: [Sanctions List Search](https://sanctionssearch.ofac.treas.gov/)

**OFAC Compliance Guidance**
- Search: "OFAC compliance guidance for payment processors"
- Focus on: Screening requirements, risk-based approach
- Document: "Framework for OFAC Compliance Commitments"

**Related Topics:**
- [Sanctions Screening](../kyc-kyb/sanctions-screening.md)

---

## Card Network Documentation

### Visa

**Visa Merchant Screening Standards**
- Source: Visa Core Rules and Visa Product and Service Rules
- Search in: Visa Rules portal (requires network access)
- Focus on: PayFac merchant screening obligations

**Visa Integrity Risk Program (VIRP)**
- Focus on: High-risk merchant categories, compliance requirements
- Related: Visa Acquirer Monitoring Program (VAMP)

**Visa Global Brand Protection**
- Focus on: Merchant risk identification, prohibited activities

**Related Topics:**
- [Underwriting Fundamentals](../underwriting/fundamentals.md)
- [Risk Factors](../underwriting/risk-factors.md)

---

### Mastercard

**Mastercard Merchant Monitoring Standards**
- Source: Mastercard Rules
- Focus on: Registration requirements, prohibited merchants

**Business Risk Assessment and Mitigation (BRAM)**
- Focus on: Due diligence requirements for payment facilitators
- Related: Mastercard Excessive Chargeback Program (ECP)

**Mastercard MATCH System**
- Focus on: Terminated merchant reporting, inquiry process
- Document: MATCH System Guide

**Related Topics:**
- [Merchant Agreements](../merchant-lifecycle/merchant-agreements.md)
- [Ongoing Monitoring](../merchant-lifecycle/ongoing-monitoring.md)

---

## MCC Code Resources

**Official MCC Code Lists**
- Visa Merchant Data Standards Manual
- Mastercard Merchant Category Codes List
- ISO 18245 (International standard for MCC)

**High-Risk MCC Reference**
- Study network-published lists of restricted/prohibited MCCs
- Compare Visa vs. Mastercard prohibited categories
- IRS Form 1099-K MCC reporting requirements

**Related Topics:**
- [MCC Codes](../underwriting/mcc-codes.md)

---

## Industry Resources

### Electronic Transactions Association (ETA)

**PayFac Guidelines**
- Website: [electran.org](https://www.electran.org)
- Focus on: Onboarding best practices, underwriting standards
- Resources: PayFac white papers, industry reports

### NACHA (The Electronic Payments Association)

**Know Your Customer Guidelines**
- Focus on: ACH-specific KYC requirements (relevant for payouts)
- Website: [nacha.org](https://www.nacha.org)

### PCI Security Standards Council

**PCI DSS Requirements**
- Relevant for: Merchant compliance obligations
- Website: [pcisecuritystandards.org](https://www.pcisecuritystandards.org)

---

## Vendor Documentation

Study these to understand industry-standard verification approaches:

### Identity Verification Providers

**Jumio**
- Focus on: Document verification workflows, liveness detection
- Documentation: [jumio.com/developers](https://www.jumio.com/developers)

**Persona**
- Focus on: Identity verification flows, customizable onboarding
- Documentation: [withpersona.com/docs](https://docs.withpersona.com/)

**Alloy**
- Focus on: KYC/KYB orchestration, decision engine
- Documentation: [alloy.com/developers](https://docs.alloy.com/)

**Socure**
- Focus on: Identity verification, fraud prevention
- Documentation: [socure.com/developers](https://developer.socure.com/)

**Related Topics:**
- [KYC Requirements](../kyc-kyb/kyc-requirements.md)

---

### Business Verification Providers

**Middesk**
- Focus on: Business verification approaches, entity validation
- Documentation: [middesk.com/docs](https://docs.middesk.com/)

**Enigma**
- Focus on: Business intelligence data, verification
- Documentation: [enigma.com/developers](https://developers.enigma.com/)

**LexisNexis Business Verification**
- Focus on: Entity verification, business credit
- Website: [lexisnexis.com/risk](https://risk.lexisnexis.com/)

**Related Topics:**
- [KYB Requirements](../kyc-kyb/kyb-requirements.md)

---

### Sanctions Screening Providers

**ComplyAdvantage**
- Focus on: AML/sanctions screening, ongoing monitoring
- Documentation: [complyadvantage.com/developers](https://developers.complyadvantage.com/)

**Dow Jones Risk & Compliance**
- Focus on: Watchlist screening, adverse media
- Website: [dowjones.com/professional/risk](https://www.dowjones.com/professional/risk/)

**Chainalysis**
- Focus on: Crypto sanctions screening, transaction monitoring
- Documentation: [chainalysis.com/kyc](https://www.chainalysis.com/solutions/kyc/)

**Related Topics:**
- [Sanctions Screening](../kyc-kyb/sanctions-screening.md)

---

## Recommended Reading

### Industry Reports

- "State of PayFac Report" - Published annually by industry analysts
- Payment facilitator underwriting best practices whitepapers
- Annual fraud and chargeback reports (Nilson Report, Javelin Strategy)

### Case Studies

**Research Focus:**
- Regulatory enforcement actions against payment processors for onboarding failures
- Study why specific PayFacs faced penalties (search for consent orders)
- OFAC penalty case studies
- Card network fines and program violations

**Sources:**
- FinCEN enforcement actions
- OFAC civil penalties
- Card network compliance bulletins
- Payment industry news sites

---

## Research Keywords

When searching for information:

- "Payment facilitator merchant underwriting"
- "KYB verification payment processing"
- "OFAC compliance payment processor"
- "High risk merchant categories MCC"
- "Beneficial ownership payment facilitator"
- "Merchant reserve requirements"
- "MATCH list TMF file"
- "FinCEN CDD rule beneficial ownership"
- "Chargeback monitoring program"

---

## API Documentation to Study

Review for understanding data requirements:

**Stripe Connect Account Creation**
- URL: [docs.stripe.com/connect/accounts](https://docs.stripe.com/connect/accounts)
- Focus on: Required fields, verification workflow, identity verification

**Adyen KYC Documentation**
- URL: [docs.adyen.com/platforms/verification-overview](https://docs.adyen.com/platforms/verification-overview)
- Focus on: Onboarding requirements, document types, verification status

**Square Merchant Onboarding**
- URL: [developer.squareup.com/docs/oauth-api](https://developer.squareup.com/docs/oauth-api)
- Focus on: Application flow, required information

**PayPal Platform Onboarding**
- Focus on: Merchant verification, onboarding API

---

## Payment Industry Publications

**The Nilson Report**
- Focus on: Fraud statistics, payment trends
- Website: [nilsonreport.com](https://www.nilsonreport.com)

**PaymentsSource**
- Focus on: Payment industry news, regulatory updates
- Website: [paymentssource.com](https://www.paymentssource.com)

**American Banker**
- Focus on: Banking and payments regulation
- Website: [americanbanker.com](https://www.americanbanker.com)

---

## Legal and Compliance Resources

**Bank Secrecy Act (BSA)**
- Source: FinCEN website
- Focus on: AML requirements for financial institutions

**USA PATRIOT Act**
- Section 326: Customer Identification Program (CIP)
- Focus on: Identity verification requirements

**Fair Credit Reporting Act (FCRA)**
- Focus on: Adverse action notices, credit report usage

**Equal Credit Opportunity Act (ECOA)**
- Focus on: Discrimination prevention in decisioning

**Related Topics:**
- [Underwriting Fundamentals](../underwriting/fundamentals.md)
- [Risk Scoring](../underwriting/risk-scoring.md)

---

## Continuous Learning

### Stay Updated On:

- **Card Network Rules** - Updated quarterly
- **OFAC Sanctions Lists** - Updated frequently
- **FinCEN Guidance** - New rules and interpretations
- **State Regulations** - Money transmitter license requirements
- **Industry Best Practices** - Evolving verification techniques

### Join Industry Groups:

- Electronic Transactions Association (ETA)
- Regional payment associations
- FinTech-focused communities
- LinkedIn payment industry groups

---

## Glossary Reference

For payment industry terminology, refer to:

**Project Glossary**
- See the [Payments Glossary](/glossary) - 100+ payment industry terms

**External Glossaries**
- Visa Global Payment Terms
- Mastercard Glossary of Terms
- FinCEN Glossary

---

> **Next Steps:** Apply your learning to the [Self-Assessment Questions](./questions.md) to validate understanding.
