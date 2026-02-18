---
title: "Quiz | ISO & ISV Risk Perspectives"
description: "Test your knowledge: ISO vs ISV vs PayFac risk, liability, compliance, PCI scope, AML, VAMP, ECP, and MATCH. 15 questions with detailed answers."
sidebar_position: 6
sidebar_label: "Quiz"
keywords:
  - ISO risk quiz
  - ISV compliance questions
  - payment facilitator quiz
  - ISO liability questions
  - ISV PCI quiz
  - VAMP ISO questions
  - ISO chargeback liability quiz
  - PayFac compliance quiz
  - ISO vs ISV quiz
  - PCI scope quiz
  - AML requirements quiz
  - MATCH list quiz
---

# ISO & ISV Risk Perspectives Quiz

> **Last Updated:** 2025-02-17
> **Status:** Complete

Test your understanding of [ISO](/ecosystem/industry-players/isos) and [ISV](/ecosystem/industry-players/isvs) risk and compliance concepts. This quiz covers [liability structures](./liability-structures.md), [compliance obligations](./compliance-obligations.md), [network programs](./network-program-applicability.md), and [portfolio management](./portfolio-risk-management.md).

## Liability Structures

### Question 1

Why do ISOs have zero direct chargeback liability in the standard model?

<details>
<summary>View Answer</summary>

ISOs have zero direct chargeback liability because:

1. **No merchant account ownership** - Merchants referred by ISOs have individual MIDs with the acquirer, not the ISO
2. **Sales intermediary role** - ISOs are sales and service partners, not payment principals
3. **No fund handling** - ISOs don't receive or hold merchant funds
4. **Acquirer relationship** - The acquirer holds the direct merchant relationship and bears the risk

The ISO's role is purely referral and support. The acquiring bank underwrites the merchant and accepts the liability for that decision.

**Exception:** ISOs may face contractual liability if they:
- Misrepresented merchant information
- Violated ISO agreement terms
- Are personally involved in fraud

</details>

### Question 2

A restaurant POS company (ISV) integrates payments using Stripe Connect in "Standard" mode. Who bears chargeback liability when a restaurant's customer disputes a charge?

<details>
<summary>View Answer</summary>

**Stripe bears the chargeback liability.**

In Stripe Connect Standard mode:
- Stripe is the PayFac and holds the master merchant account
- The restaurant is a "connected account" (sub-merchant) under Stripe
- Stripe handles underwriting, compliance, and chargeback management
- The ISV has **zero chargeback liability**

The ISV's responsibility is limited to:
- Providing accurate business information
- Following Stripe's terms of service
- Not knowingly facilitating fraud

In "Custom" mode, the ISV can negotiate to take on some liability in exchange for better economics, but this is optional and contractual.

</details>

### Question 3

How do reserve requirements differ between ISOs and PayFacs?

<details>
<summary>View Answer</summary>

| Aspect | ISO | PayFac |
|--------|-----|--------|
| **Merchant reserves** | Not held by ISO | Held by PayFac from sub-merchants |
| **Corporate reserves** | None required | Required by sponsor bank |
| **Fund flow** | Never touches funds | Receives and distributes funds |
| **Purpose** | N/A | Cover chargeback losses, fraud |

**Why this difference exists:**
- ISOs are sales intermediaries only—they don't handle funds
- PayFacs hold sub-merchant funds temporarily and are liable for losses
- Sponsor banks require PayFacs to maintain reserves as protection
- ISOs may have residuals reduced or clawed back, but that's different from holding reserves

</details>

## Compliance Obligations

### Question 4

A standard ISO that refers merchants to an acquiring bank and never handles card data: What is their PCI-DSS compliance requirement?

<details>
<summary>View Answer</summary>

**The ISO is out of PCI scope entirely.**

Reasoning:
- PCI scope is triggered by handling, processing, or storing cardholder data
- A referral-only ISO never touches card data
- Merchants enter card data directly into the acquirer's/processor's systems
- ISO's only interaction is sales, onboarding paperwork, and support

The ISO does NOT need to:
- Complete any SAQ
- Undergo PCI audits
- Implement PCI controls

**Exception:** If the ISO has a call center where they verbally receive card numbers, or a web portal where merchants enter card data, they would be in PCI scope (SAQ-C-VT or SAQ-D).

</details>

### Question 5

Why don't ISOs need AML/BSA compliance programs?

<details>
<summary>View Answer</summary>

ISOs don't need AML/BSA programs because:

1. **Not a Money Services Business (MSB)** - AML/BSA applies to MSBs, which include entities that transmit or hold money
2. **No fund handling** - Standard ISOs never receive, hold, or transmit merchant funds
3. **Intermediary role** - ISOs only facilitate the connection between merchants and acquirers
4. **Acquirer responsibility** - The acquiring bank/processor handles AML obligations

**The "money movement" test:**
- Does the entity receive funds? → No (acquirer receives)
- Does the entity hold funds? → No (acquirer holds)
- Does the entity transmit funds? → No (acquirer transmits)
- Result: Not an MSB, no AML program required

**Exception:** If an ISO offers services where they hold merchant funds (rare), they may trigger MSB status and need AML programs.

</details>

### Question 6

An ISV is building a healthcare practice management system with integrated payments. What compliance frameworks must they address?

<details>
<summary>View Answer</summary>

The healthcare ISV must address multiple overlapping compliance frameworks:

**Payment Compliance:**
- **PCI-DSS** - Depends on integration model:
  - iFrame/redirect: SAQ-A (minimal scope)
  - API integration: SAQ-D or Level 1 SP
- **Network rules** - If operating as PayFac, network registration required

**Healthcare Compliance:**
- **HIPAA** - Patient health information protection
- **HITECH** - Breach notification requirements
- **State privacy laws** - Vary by state

**Combined Implementation:**
| Requirement | Implementation |
|-------------|----------------|
| BAA with PFaaS provider | Contractual protection |
| Encryption at rest and transit | Protect both payment and health data |
| Access controls | Role-based access, audit logging |
| Breach notification | 72-hour requirement for both |

The ISV must ensure their payment provider can sign a Business Associate Agreement (BAA) if patient data flows through payment systems.

</details>

## Network Programs

### Question 7

A PayFac's sub-merchant portfolio has an aggregated chargeback ratio of 1.8%. Who enters VAMP, and what are the consequences?

<details>
<summary>View Answer</summary>

**The PayFac enters VAMP, not individual sub-merchants.**

VAMP monitoring occurs at the PayFac level:
- Visa monitors the PayFac's aggregated chargeback metrics
- Individual sub-merchants don't have separate MIDs with Visa
- The PayFac is responsible for all sub-merchant activity

**Consequences:**
| Phase | Impact |
|-------|--------|
| **Entry** | PayFac enters Early Warning or Excessive tier |
| **Monitoring** | Monthly reporting to Visa |
| **Fines** | $5,000-$100,000+ per month |
| **Remediation** | Must identify and fix high-CB sub-merchants |
| **Escalation** | Continued excess leads to sponsor bank action |
| **Termination** | Sponsor may terminate PayFac |

**PayFac actions required:**
1. Identify sub-merchants contributing to high ratios
2. Implement remediation (training, controls)
3. Terminate persistent offenders
4. Report MATCH for cause-based terminations

</details>

### Question 8

Can an ISO principal be listed on MATCH? Under what circumstances?

<details>
<summary>View Answer</summary>

**Yes, an ISO principal can be MATCH listed, but it's rare.**

ISOs themselves don't get MATCH listed (they're not merchants), but ISO principals (owners/officers) can be listed personally:

| Scenario | MATCH Code | Example |
|----------|------------|---------|
| Personal fraud | 02 | ISO owner commits card fraud |
| Misrepresentation | 05 | ISO knowingly refers fraudulent merchants |
| Collusion | 12 | ISO colludes with merchant for bust-out |
| Personal merchant account | Various | ISO owner's separate business terminated |

**Consequences of ISO principal MATCH listing:**
- Cannot register as Third-Party Agent with any acquirer
- Cannot work as ISO principal
- May affect other business relationships
- 5-year listing duration

**Why it's rare:**
- ISOs are removed from transaction risk
- Acquirers make underwriting decisions
- ISO misconduct typically results in agreement termination, not MATCH

</details>

### Question 9

An ISV using PFaaS (PayFac-as-a-Service) wants to know: Does the ISV need to query MATCH before onboarding users?

<details>
<summary>View Answer</summary>

**No, the ISV does not need to query MATCH directly.**

The PFaaS provider handles MATCH queries:

| Responsibility | ISV Role | PFaaS Provider Role |
|----------------|----------|---------------------|
| MATCH query | Not applicable | Required |
| MATCH reporting | Not applicable | Required |
| Underwriting decision | Collect info | Make decision |

**Why:**
- The PFaaS provider is the PayFac of record
- MATCH access requires network membership/registration
- ISV has no direct card network relationship
- PFaaS provider's underwriting includes MATCH screening

**ISV's role:**
- Collect user information accurately
- Pass information to PFaaS provider via API
- Trust provider's decision (or negotiate override rights)
- May receive MATCH-decline notifications

</details>

## Portfolio Risk Management

### Question 10

A Master ISO is bringing on a new Sub-ISO. What due diligence should the Master ISO perform?

<details>
<summary>View Answer</summary>

**Master ISO Sub-ISO Due Diligence Checklist:**

**Background Verification:**
- [ ] Criminal background checks (principals)
- [ ] Credit checks (principals and business)
- [ ] Industry reference checks
- [ ] MATCH screening (principals' merchant history)
- [ ] Prior ISO relationship history

**Business Evaluation:**
- [ ] Business registration verification
- [ ] Financial statements review
- [ ] Insurance coverage verification (E&O)
- [ ] Sales practice review
- [ ] Training program assessment

**Operational Review:**
- [ ] Agent management practices
- [ ] Merchant screening procedures
- [ ] Support infrastructure
- [ ] Compliance awareness

**Contractual Protections:**
- [ ] Prohibited MCC list acceptance
- [ ] Quality standards agreement
- [ ] Residual clawback provisions
- [ ] Indemnification clauses
- [ ] Termination rights

**Why this matters:**
- Sub-ISO merchant quality affects Master ISO's portfolio
- Master ISO is accountable to acquirer
- Residuals depend on merchant performance
- Reputational risk flows upward

</details>

### Question 11

An ISO's referred merchant has a chargeback ratio of 0.9% and rising. What steps should the ISO take?

<details>
<summary>View Answer</summary>

**ISO Response Protocol:**

**Immediate Actions (0.9% threshold):**
1. **Contact merchant** - Understand root cause
2. **Review transaction data** - Identify patterns
3. **Assess remediation potential** - Can issue be fixed?
4. **Document everything** - Protect ISO position

**Root Cause Investigation:**
| Cause | Merchant Action | ISO Support |
|-------|-----------------|-------------|
| Customer service issues | Improve response times | Training resources |
| Unclear billing descriptors | Update descriptors | Coordinate with acquirer |
| Product quality | Address quality issues | Monitor improvement |
| Fraud attacks | Implement fraud tools | Recommend vendors |
| Friendly fraud | Better documentation | Representment support |

**Escalation (if no improvement):**
1. **Formal notice** - Written warning to merchant
2. **Acquirer notification** - Alert acquirer to risk
3. **Reserve recommendation** - Suggest reserve increase
4. **Termination recommendation** - If >1.0% sustained

**ISO Protections:**
- Document all communications
- Show good faith remediation efforts
- Protect residual stream
- Maintain acquirer relationship

</details>

### Question 12

A fitness studio ISV wants to add embedded payments. What vertical-specific compliance considerations apply?

<details>
<summary>View Answer</summary>

**Fitness/Wellness Vertical Compliance:**

**Payment-Specific Considerations:**
| Feature | Compliance Requirement |
|---------|----------------------|
| Recurring memberships | Clear cancellation disclosures |
| Class packages | Expiration policy disclosures |
| Auto-renewal | State-specific consent requirements |
| No-show fees | Clear authorization |
| Family billing | Authorized user consent |

**Industry-Specific Requirements:**
- **State regulations** - Some states regulate gym contracts
- **Cancellation rights** - 3-day cooling-off periods in some states
- **Military protections** - SCRA compliance for military members
- **Health data** - If tracking fitness data, privacy considerations

**Chargeback Risk Mitigation:**
| Risk | Mitigation |
|------|------------|
| Cancellation disputes | Easy cancellation process |
| Auto-renewal disputes | Clear renewal notices |
| COVID-related disputes | Flexible freeze policies |
| Service quality | Clear class descriptions |

**PFaaS Selection Criteria:**
- Experience with subscription/recurring billing
- Robust cancellation management
- Clear descriptor support
- Chargeback prevention tools

</details>

## Scenario Questions

### Question 13

**Scenario:** A PayFac partners with three ISOs for merchant acquisition. One ISO consistently refers merchants with 2x the average chargeback rate. How should the PayFac manage this?

<details>
<summary>View Answer</summary>

**PayFac ISO Partnership Risk Management:**

**Analysis Phase:**
1. Document ISO performance metrics vs. other ISOs
2. Identify specific merchants driving high CB rates
3. Analyze merchant types, MCCs, and verticals
4. Review ISO onboarding practices

**Escalation Approach:**

| Step | Action |
|------|--------|
| 1 | Meet with ISO to discuss data |
| 2 | Agree on improvement plan with timeline |
| 3 | Implement enhanced review for ISO referrals |
| 4 | Monthly performance reviews |
| 5 | Terminate agreement if no improvement |

**Contractual Levers:**
- Reduce residual percentage for high-CB merchants
- Implement clawback provisions
- Restrict referred MCCs
- Increase review scrutiny

**Operational Changes:**
- Enhanced underwriting for ISO's referrals
- Lower initial limits
- Mandatory reserves
- Delayed payout schedules

**If No Improvement:**
- Formal notice of breach
- Suspension of new referrals
- Agreement termination
- Transition existing merchants to direct relationship

</details>

### Question 14

**Scenario:** An ISV operates practice management software for law firms. They integrate payments via PFaaS. A client law firm asks: "Are my client trust fund payments handled properly?" What should the ISV verify?

<details>
<summary>View Answer</summary>

**Legal Vertical Compliance: IOLTA Considerations**

**What IOLTA Requires:**
- Interest on Lawyer Trust Accounts (IOLTA) rules require:
- Strict separation of client funds from firm funds
- Interest earned goes to state legal aid
- Detailed recordkeeping
- No commingling of accounts

**ISV Verification Checklist:**

| Requirement | Verification |
|-------------|--------------|
| **Separate accounts** | Client funds settled to trust account, not operating |
| **No commingling** | Payment system distinguishes fund types |
| **Interest handling** | Compatible with IOLTA interest rules |
| **Reporting** | Can generate trust accounting reports |
| **State bar compliance** | Meets specific state requirements |

**PFaaS Provider Questions:**
1. Can payments be routed to separate bank accounts?
2. Can we designate payments as "trust" vs. "operating"?
3. How is reporting handled for trust accounting?
4. Are there IOLTA-specific features?

**ISV Responsibilities:**
- Ensure software correctly classifies fund types
- Route payments to appropriate accounts
- Generate compliant reports
- Train law firms on proper usage

**Risk of Getting It Wrong:**
- Bar discipline for attorneys
- ISV liability for compliance failures
- Loss of law firm customers
- Reputational damage in legal vertical

</details>

### Question 15

**Scenario:** An ISO receives notice that a merchant they referred 2 years ago has been MATCH listed for excessive chargebacks. The ISO earned $50,000 in residuals from this merchant. What are the ISO's potential exposures?

<details>
<summary>View Answer</summary>

**ISO Exposure Analysis:**

**Direct Financial Exposure:**
| Exposure Type | Likely Impact |
|---------------|---------------|
| Chargeback losses | $0 (acquirer liability) |
| Network fines | $0 (acquirer pays) |
| MATCH listing | $0 (merchant listed, not ISO) |
| **Residual clawback** | **Possible - depends on contract** |

**Contractual Exposure (Review ISO Agreement):**

Common contract provisions:
- **Residual clawback** - Some agreements allow clawback of residuals for terminated merchants
- **Performance-based adjustments** - Future residuals reduced based on portfolio performance
- **Indemnification** - If ISO misrepresented merchant during onboarding

**Reputational/Relationship Exposure:**
| Impact | Consequence |
|--------|-------------|
| Portfolio metrics | ISO's overall CB rate increases |
| Acquirer scrutiny | Enhanced review of future referrals |
| Volume restrictions | May limit ISO's new merchant approvals |
| Agreement review | Acquirer may revise terms |

**ISO Best Practices Going Forward:**
1. Review ISO agreement for clawback provisions
2. Implement better merchant screening
3. Monitor portfolio more actively
4. Document merchant interactions
5. Consider merchant insurance/bonding

**The $50K Question:**
- If no clawback clause: ISO keeps residuals
- If clawback clause: May owe portion back
- If misrepresentation: May owe full indemnification

</details>

## Answer Key Summary

| Question | Key Concept |
|----------|-------------|
| 1 | ISO liability structure |
| 2 | PFaaS liability allocation |
| 3 | Reserve requirements by entity |
| 4 | ISO PCI scope |
| 5 | AML applicability criteria |
| 6 | Vertical compliance layering |
| 7 | VAMP PayFac accountability |
| 8 | ISO principal MATCH exposure |
| 9 | MATCH query responsibility |
| 10 | Sub-ISO due diligence |
| 11 | ISO merchant monitoring |
| 12 | Fitness vertical compliance |
| 13 | ISO partnership management |
| 14 | Legal vertical IOLTA |
| 15 | ISO contractual exposure |

## Related Topics

- [Liability Structures](./liability-structures.md)
- [Compliance Obligations](./compliance-obligations.md)
- [Network Program Applicability](./network-program-applicability.md)
- [Portfolio Risk Management](./portfolio-risk-management.md)
- [Study Guide Questions](../study-guide/questions.md)
