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

> **Status:** Complete
>
> **Last Updated:** 2025-12-28

## Overview

When a bank sponsors a PayFac, it delegates specific underwriting, compliance, and risk management responsibilities to the PayFac. Understanding what is delegated (and what isn't) is critical for PayFac operations and sponsor bank relationship management.

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

### Sponsor Bank Audit Mechanics

Understanding how sponsor bank audits work is crucial for maintaining compliance and avoiding remediation actions.

#### Audit Scope

**Sample Selection:**
- Sponsor reviews 50-100 sub-merchant files per audit
- Random sampling across risk tiers
- May target specific MCCs or high-volume merchants
- Focus on recent onboardings (last 12 months)

**What Sponsor Reviews:**
- **Completeness of underwriting files:**
  - All required KYC/KYB documentation present
  - Identity verification results with timestamps
  - Business verification evidence
  - Beneficial ownership documentation
  - Sanctions screening results
- **Policy compliance:**
  - Decisions consistent with approved underwriting policy
  - MCC assignments match business type
  - Reserve calculations follow policy formulas
  - Volume limits not exceeded
- **System controls:**
  - Automated screening functioning properly
  - Verification vendors approved and operational
  - Monitoring alerts being reviewed and actioned
  - Case management workflows documented
- **Exception review:**
  - Manual review decisions properly documented
  - Exception approvals by authorized personnel
  - Policy deviations have senior management sign-off

#### Required Documentation

For each sub-merchant file, sponsor expects to find:

**Identity Verification (KYC):**
- Government-issued photo ID (front and back)
- ID verification results from approved vendor (e.g., Jumio, Persona, Onfido)
- Liveness detection results (if applicable)
- Verification timestamp and method used
- SSN or EIN validation results

**Business Verification (KYB):**
- Articles of incorporation/organization/formation
- Business license (if required for industry/state)
- Certificate of Good Standing (less than 90 days old)
- Secretary of State verification results
- EIN verification from IRS TIN Matching or third-party vendor
- Business address verification (utility bill, lease, or database confirmation)

**Beneficial Ownership:**
- UBO questionnaire completed and signed
- Identity verification for all 25%+ owners
- Control person identification (if no 25%+ owners)
- Ownership structure documentation (cap table, operating agreement)
- For trusts/holding companies: documentation tracing to natural persons

**Sanctions Screening:**
- OFAC/SDN screening results with timestamp
- PEP screening results (if applicable for risk tier)
- Adverse media screening results
- Ongoing screening evidence (re-screening frequency documented)
- False positive resolution documentation (for fuzzy matches)

**Risk Assessment:**
- Risk scoring input data and calculated output
- MCC assignment rationale
- Processing volume projections and source
- Chargeback risk assessment (historical data if available)
- Reserve requirement calculation with supporting factors

**Decision Documentation:**
- Final approval/decline decision with date
- Underwriter name and credentials
- Manual review notes (if auto-decisioning overridden)
- Exception approvals (if policy limits exceeded)
- Conditions imposed (reserve, volume caps, monitoring frequency)

**Merchant Agreement:**
- Signed merchant application
- Signed Merchant Processing Agreement (MPA) or Terms of Service
- Pricing schedule and fee disclosure
- ACH authorization for debits
- Signature verification

#### Common Audit Findings

**Incomplete Documentation (Most Frequent):**
- Missing beneficial ownership documentation for 25%+ owners
- Expired Certificate of Good Standing (>90 days old)
- ID verification performed but results not retained in file
- Sanctions screening completed but no timestamp or results documented
- Business address not verified (accepted applicant's statement without proof)

**Policy Deviations:**
- Sub-merchant approved outside authorized MCC list
- Volume limits exceeded without exception approval
- Reserve calculation not following policy formula
- High-risk merchant approved without required EDD
- Control person not identified when no 25%+ owners exist

**Insufficient Evidence:**
- KYC verification relied on single method when policy requires dual verification
- Business verification lacks independent confirmation (only used applicant-provided docs)
- Sanctions screening false positive marked "clear" without documented reasoning
- Risk score assigned but input data not documented
- UBO ownership percentage claimed but no supporting documentation

**Process Control Failures:**
- Manual review decisions without documented rationale
- Policy exceptions approved by unauthorized personnel
- Verification timestamps missing or inconsistent with approval date
- Ongoing monitoring alerts not actioned or documented
- File access controls inadequate (unauthorized personnel modified records)

#### Finding Categories

**Minor Findings:**
- Definition: Documentation deficiencies that don't affect approval decision
- Examples:
  - Signature missing on internal checklist (merchant agreement properly signed)
  - Timestamp formatting inconsistency in logs
  - Duplicate documentation in file
- **Consequence:** Corrective action required, no immediate operational impact
- **Timeline:** 30-60 days to remediate

**Material Findings:**
- Definition: Compliance failures affecting approval quality or risk assessment
- Examples:
  - Multiple files missing beneficial ownership documentation
  - Sanctions screening conducted but results not documented
  - Risk scores assigned without supporting data
  - Policy deviations without exception approvals (5-10% of sample)
- **Consequence:** Freeze new sub-merchant onboarding until remediation plan approved
- **Timeline:** 30-90 days to remediate, monthly progress reporting
- **Impact:** Cannot onboard new sub-merchants; existing merchants continue processing

**Critical Findings:**
- Definition: Systemic failures creating significant risk or compliance violations
- Examples:
  - Sanctions screening vendor not functioning; multiple merchants onboarded without screening
  - 25%+ of sampled files lack required KYC/KYB documentation
  - Prohibited MCCs (gambling, adult) approved despite policy restriction
  - Beneficial ownership not collected for any merchants
  - Control failures allowing unauthorized approvals
- **Consequence:** Immediate onboarding freeze, potential sponsor relationship termination
- **Timeline:** Immediate action required, weekly reporting, external audit may be required
- **Impact:** Entire sub-merchant portfolio at risk; sponsor may require exit plan

#### Remediation SLAs

**Typical Remediation Timelines:**

**Minor Findings:**
- Corrective action plan: 10 business days
- Implementation: 30-60 days
- Verification: Sponsor re-reviews sample of new files

**Material Findings:**
- Corrective action plan: 5 business days
- Implementation: 30-90 days
- Onboarding freeze: Until plan approved and initial remediation demonstrated
- Progress reporting: Monthly updates to sponsor
- Verification: Sponsor re-audit of larger sample (100+ files)

**Critical Findings:**
- Immediate response: 24-48 hours (acknowledge and provide initial assessment)
- Emergency corrective action plan: 5 business days
- Implementation: Phased approach with weekly milestones
- Onboarding freeze: Immediate and continuing until full remediation
- Progress reporting: Weekly updates to sponsor
- External audit: May be required at PayFac's expense
- Verification: Sponsor comprehensive re-audit before lifting freeze
- Potential outcome: Sponsor relationship termination if not resolved

**Failure to Remediate:**
- Additional restrictions imposed (processing volume caps, reserve increases)
- Termination of sponsor relationship (60-180 day wind-down)
- Network fines flow through to PayFac
- Reputational damage affects ability to find new sponsor

#### Best Practices for Maintaining Audit-Ready Files

**Build Quality In, Don't Bolt It On:**
- Ensure onboarding system captures all required documentation at application time
- Configure required fields and validation rules to prevent incomplete submissions
- Automated verification results automatically stored in file
- Workflow cannot proceed to approval without complete documentation

**Document Everything:**
- If a decision was made (approval, decline, exception), document why
- If verification was performed, retain timestamp and results
- If a policy deviation occurred, document exception approval
- If a fuzzy match was cleared, document disambiguation reasoning

**Regular Internal Audits:**
- Conduct quarterly internal file reviews using same criteria as sponsor
- Sample 25-50 files per quarter across risk tiers
- Identify and correct patterns before sponsor audit
- Use findings to improve onboarding system and training

**Maintain Audit Trail:**
- Who accessed file and when
- Who made approval decision and when
- What data changed and when
- System-generated audit logs (tamper-evident)

**Version Control for Policies:**
- Each version of underwriting policy retained with effective dates
- Sub-merchant files reference policy version used at time of approval
- Can demonstrate compliance with policy in effect at decision time

**Training and Certification:**
- Underwriters trained on documentation requirements
- Annual refresher training on policy updates
- Certification testing to verify understanding
- Training records retained for auditor review

**Centralized Documentation Repository:**
- All sub-merchant files in single system (not scattered across email, drives, paper)
- Consistent folder structure and naming conventions
- Searchable and retrievable within minutes (not hours/days)
- Secure access controls with role-based permissions

**Proactive Communication with Sponsor:**
- Quarterly compliance certifications submitted on time
- Material issues self-disclosed before audit
- Questions about policy interpretation asked in advance
- Build relationship so audits are collaborative, not adversarial

**Pre-Audit Preparation:**
- When sponsor announces audit (typically 30-60 days advance notice):
  - Conduct pre-audit internal review of likely sample
  - Remediate any deficiencies found
  - Prepare summary of portfolio metrics
  - Organize files for efficient auditor access
  - Brief team on audit process and confidentiality

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

### Question 1: Delegation Scope

**What responsibilities does a sponsor bank delegate to a PayFac, and what does the sponsor retain?**

<details>
<summary>View Answer</summary>

**Delegated to PayFac:**
- Sub-merchant underwriting and approval
- KYC/KYB verification
- Sanctions screening (OFAC, PEP)
- Ongoing transaction monitoring
- MATCH list queries and reporting
- Chargeback management and representment

**Retained by Sponsor:**
- PayFac application approval
- Portfolio-level risk limits
- Card network registration
- Ultimate network liability and fines
- Regulatory examination authority
- Settlement and funding
- Right to terminate PayFac relationship

The key distinction: PayFac handles day-to-day sub-merchant operations while sponsor retains strategic oversight and ultimate liability.

</details>

---

### Question 2: MCC Restrictions

**A PayFac wants to start onboarding MCC 7995 (gambling) sub-merchants. Can they do this unilaterally? Explain.**

<details>
<summary>View Answer</summary>

**No, a PayFac cannot unilaterally add gambling merchants.**

Prohibited/high-risk MCCs require explicit sponsor bank approval because:

1. **Program Parameters:** The sponsor-approved underwriting policy specifies allowed MCCs. Adding new high-risk categories requires amending the agreement.

2. **VIRP Requirements:** MCC 7995 is Visa Integrity Risk Program Tier 1, requiring:
   - $950 registration fee per sub-merchant
   - Enhanced due diligence documentation
   - Sponsor bank sign-off

3. **Network Registration:** Gambling requires specific network registrations the sponsor must facilitate.

4. **Risk Exposure:** High-risk categories significantly impact portfolio risk metrics, which sponsors monitor at aggregate level.

**Correct Process:**
1. Request approval from sponsor bank
2. Amend underwriting policy to include MCC 7995
3. Implement enhanced controls for gambling merchants
4. Obtain VIRP registrations through sponsor

</details>

---

### Question 3: Onboarding Freeze

**What circumstances would trigger a sponsor bank to freeze new sub-merchant onboarding for a PayFac?**

<details>
<summary>View Answer</summary>

**Triggers for onboarding freeze:**

**Performance Triggers:**
- Portfolio chargeback ratio exceeding 1.0-1.5%
- Fraud losses exceeding agreed thresholds
- Concentration risk limits breached
- High-risk merchant percentage too high

**Compliance Triggers:**
- Material audit findings (incomplete KYC files, policy violations)
- Sanctions screening failures discovered
- MATCH reporting deficiencies
- Network compliance violations

**Operational Triggers:**
- System failures affecting monitoring
- Key personnel departures without replacement
- Financial distress of the PayFac
- Insurance coverage lapses

**Network Triggers:**
- VAMP or ECP program entry
- Network remediation orders
- Network audit findings

The freeze remains until remediation plan is approved and implemented. Typically 30-90 days depending on severity.

</details>

---

### Question 4: Audit vs Network Violation

**Explain the difference between a sponsor bank audit finding and a network compliance violation.**

<details>
<summary>View Answer</summary>

**Sponsor Bank Audit Finding:**
- **Source:** Internal audit by sponsor bank or its designated auditor
- **Scope:** PayFac's compliance with sponsor agreement and underwriting policy
- **Examples:** Incomplete underwriting files, missed KYC refresh dates, policy deviations
- **Consequences:** Corrective action plan, potential onboarding freeze, worst case termination
- **Remediation:** Negotiated with sponsor, typically 30-90 days
- **Visibility:** Between PayFac and sponsor only

**Network Compliance Violation:**
- **Source:** Card network (Visa, Mastercard) monitoring or audit
- **Scope:** Compliance with network operating regulations
- **Examples:** VAMP threshold breach, data security violation, improper registration
- **Consequences:** Fines ($5,000-$100,000+ per month), program restrictions, network termination
- **Remediation:** Mandated by network, strict timelines
- **Visibility:** Reported to sponsor, may affect sponsor's network standing

**Key Difference:** Sponsor findings are contractual (between PayFac and sponsor); network violations affect the sponsor's relationship with networks and carry external fines that flow through to PayFac.

</details>

---

### Question 5: Complete Underwriting File

**What documentation is required in a complete sub-merchant underwriting file for sponsor bank audit?**

<details>
<summary>View Answer</summary>

**Complete underwriting file includes:**

**Identity Verification (KYC):**
- Government ID copy (front/back) for principals
- ID verification results from approved vendor
- Liveness check results (if applicable)
- Verification timestamp and method

**Business Verification (KYB):**
- Articles of incorporation or formation documents
- Business license (if required for industry)
- Secretary of State verification results
- EIN verification
- Business address verification

**Beneficial Ownership:**
- UBO questionnaire completed
- ID verification for 25%+ owners
- Control person identification
- Ownership structure documentation

**Sanctions Screening:**
- OFAC/SDN screening results with timestamp
- PEP screening results
- Adverse media check results
- Ongoing screening evidence

**Risk Assessment:**
- Risk scoring input and output
- MCC assignment rationale
- Processing volume projections
- Chargeback risk assessment
- Reserve calculation

**Decision Documentation:**
- Approval/decline decision
- Underwriter notes (if manual review)
- Exception approvals (if any)
- Conditions imposed

**Merchant Agreement:**
- Signed application
- Signed MPA/terms
- Pricing schedule

**Missing any of these components = audit finding.**

</details>

## Related Topics

- [Portfolio Risk](./portfolio-risk.md) - Managing aggregate sub-merchant risk
- [PayFac Overview](/ecosystem/payfac-model/overview) - Understanding the PayFac model
- [Underwriting Fundamentals](../underwriting/fundamentals.md) - Core underwriting principles

## References

- Visa Payment Facilitator Model Guidelines
- Mastercard Payment Facilitator Standards
- Card network sponsor bank requirements
