---
title: "Sponsor Delegation"
description: "Understanding responsibilities delegated from sponsor bank to PayFac"
sidebar_position: 1
keywords:
  - sponsor bank
  - delegation
  - PayFac responsibilities
  - underwriting delegation
---

# Sponsor Delegation

> **Status:** Pending content development
>
> **Last Updated:** 2025-12-25

## Overview

When a bank sponsors a PayFac, it delegates specific underwriting, compliance, and risk management responsibilities to the PayFac. Understanding what is delegated (and what isn't) is critical for PayFac operations and sponsor bank relationship management.

## Content Sections (To Be Developed)

### What Is Sponsor Delegation?

In the traditional model, the sponsor bank:
- Underwrites each merchant
- Approves each merchant application
- Monitors each merchant's activity
- Manages chargebacks and fraud
- Reports to card networks

In the PayFac model, the sponsor bank:
- Underwrites the PayFac itself (not sub-merchants)
- Approves the PayFac's underwriting program
- Monitors the PayFac's portfolio performance
- Holds the PayFac liable for sub-merchant losses
- Relies on the PayFac to manage sub-merchants

### Delegated Responsibilities

#### Sub-Merchant Underwriting

**What's Delegated:**
- Application review and approval
- Risk assessment and scoring
- Terms and pricing determination
- Reserve requirement setting

**PayFac Obligations:**
- Follow sponsor-approved underwriting policy
- Document all decisions
- Stay within approved risk parameters
- Report exceptions to sponsor

**Not Delegated:**
- Underwriting the PayFac itself
- Approving changes to PayFac program
- Setting portfolio-level risk limits

#### KYC/KYB Verification

**What's Delegated:**
- Individual identity verification (KYC)
- Business entity verification (KYB)
- Beneficial ownership identification
- Document collection and validation

**PayFac Obligations:**
- Maintain verification standards meeting or exceeding sponsor requirements
- Use approved verification vendors
- Retain verification documentation
- Provide sponsor access to records

#### Sanctions Screening

**What's Delegated:**
- OFAC and SDN list screening
- PEP screening
- Ongoing sanctions monitoring

**PayFac Obligations:**
- Screen all sub-merchants and beneficial owners
- Use real-time/daily updated lists
- Document all screening results
- Report matches to sponsor immediately

#### Ongoing Monitoring

**What's Delegated:**
- Transaction monitoring
- Chargeback tracking
- Fraud detection
- Performance reviews
- Re-verification triggers

**PayFac Obligations:**
- Implement automated monitoring systems
- Maintain alert response procedures
- Escalate high-risk situations to sponsor
- Provide regular portfolio performance reports

#### MATCH List Management

**What's Delegated:**
- MATCH inquiries for sub-merchant applicants
- MATCH reporting for terminated sub-merchants
- Documentation of termination reasons

**PayFac Obligations:**
- Check MATCH before approving sub-merchants
- Report sub-merchant terminations with proper reason codes
- Maintain termination documentation
- Meet reporting timelines

#### Chargeback Management

**What's Delegated:**
- Chargeback notification to sub-merchants
- Chargeback representment decisions
- Fee collection from sub-merchants

**PayFac Obligations:**
- Notify sub-merchants of chargebacks within SLA
- Assist sub-merchants with representment
- Collect chargeback fees and debits
- Cover chargebacks if sub-merchant doesn't (then pursue recovery)

### What Is NOT Delegated

**Sponsor Bank Retains:**
- Final approval of PayFac application
- Portfolio-level risk limits
- Card network registration (PayFac operates under sponsor's MID structure)
- Network fines and compliance (sponsor is ultimately liable)
- Regulatory examination authority
- Right to terminate PayFac relationship
- Settlement and funding responsibilities

### Sponsor Bank Oversight

Even with delegation, the sponsor bank maintains oversight:

#### Regular Reporting

PayFac must provide:
- Monthly portfolio performance reports
- Chargeback ratio by sub-merchant and aggregate
- Fraud rates and losses
- Underwriting metrics (approval rates, volume by risk tier)
- Compliance certifications

#### Periodic Audits

Sponsor bank conducts:
- Annual (or more frequent) compliance audits
- Underwriting file reviews
- System and process reviews
- Policy compliance verification

#### Remediation Rights

If sponsor identifies deficiencies:
- Require corrective action plans
- Impose additional monitoring or reporting
- Restrict sub-merchant onboarding (freeze new approvals)
- Require reserve increases
- Terminate PayFac relationship (worst case)

### PayFac Program Requirements

To obtain and maintain delegation, PayFac must demonstrate:

**Infrastructure:**
- Automated underwriting and risk scoring
- KYC/KYB verification systems
- Transaction monitoring and fraud detection
- Chargeback management workflows
- Case management and documentation

**Policies and Procedures:**
- Written underwriting policy (sponsor-approved)
- KYC/KYB verification standards
- Sanctions screening procedures
- Ongoing monitoring protocols
- MATCH reporting procedures
- Incident response plans

**Staffing:**
- Qualified underwriting team
- Compliance officer(s)
- Risk management function
- Customer support for sub-merchants

**Financial Strength:**
- Adequate reserves to cover portfolio risk
- Financial stability to withstand losses
- Insurance coverage (E&O, cyber liability)

### Delegation Agreement

The delegation is formalized in the Sponsor Bank Agreement (or PayFac Agreement):

**Key Terms:**
- Scope of delegated responsibilities
- Underwriting parameters (volume limits, MCC restrictions, etc.)
- Reporting requirements and frequency
- Audit rights and procedures
- Remediation and termination conditions
- Liability allocation
- Indemnification obligations

## Practical Example

### Scenario: Sub-Merchant Onboarding Flow

1. **Application Submitted** → PayFac system
2. **Automated Checks** → KYC/KYB, sanctions, MATCH inquiry (PayFac performs)
3. **Risk Scoring** → PayFac underwriting engine
4. **Decision** → PayFac approves within program parameters
5. **Documentation** → PayFac retains all records
6. **Reporting** → PayFac includes in monthly sponsor report
7. **Audit** → Sponsor reviews sample files during annual audit

**Sponsor's Role:** Reviews aggregate data, audits processes, does NOT approve individual sub-merchants

## Self-Assessment Questions

[Questions to be added covering delegation scope, PayFac obligations, and sponsor oversight]

## Related Topics

- [Portfolio Risk](./portfolio-risk.md) - Managing aggregate sub-merchant risk
- [PayFac Overview](/ecosystem/payfac-model/overview) - Understanding the PayFac model
- [Underwriting Fundamentals](../underwriting/fundamentals.md) - Core underwriting principles

## References

- Visa Payment Facilitator Model Guidelines
- Mastercard Payment Facilitator Standards
- Card network sponsor bank requirements
