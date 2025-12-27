---
title: "Topics to Research"
description: "Research focus areas for merchant onboarding and underwriting (Week 3-4)"
sidebar_position: 1
keywords:
  - research topics
  - KYC topics
  - underwriting topics
  - study guide
---

# Topics to Research

This guide outlines the key research areas for Week 3-4 of the merchant onboarding module. Use these topics to deepen your understanding beyond the provided documentation.

---

## Week 3: KYC/KYB & Data Collection

### 3.1 KYC Requirements

**Research Focus:**

- What "Know Your Customer" legally requires
- Identity verification methods (document verification, database checks)
- Acceptable identification documents by country
- Biometric verification and liveness checks
- Politically Exposed Persons (PEP) screening
- Adverse media screening

**Key Terms to Define:**

- KYC (Know Your Customer)
- CIP (Customer Identification Program)
- PEP (Politically Exposed Person)
- Identity verification vs. identity authentication
- Documentary vs. non-documentary verification

**Related Section:** [KYC Requirements](../kyc-kyb/kyc-requirements.md)

---

### 3.2 KYB Requirements

**Research Focus:**

- Business entity verification methods
- Required business documentation (articles of incorporation, business licenses)
- EIN/Tax ID verification
- Business address verification
- Operating history validation
- Website and online presence verification

**Key Terms to Define:**

- KYB (Know Your Business)
- Articles of Incorporation / Certificate of Formation
- Good Standing Certificate
- DBA (Doing Business As)
- Business license requirements by industry

**Related Section:** [KYB Requirements](../kyc-kyb/kyb-requirements.md)

---

### 3.3 Ultimate Beneficial Ownership (UBO)

**Research Focus:**

- What constitutes a beneficial owner (ownership thresholds)
- FinCEN beneficial ownership requirements
- Ownership structure documentation
- Control person identification
- Layered ownership and shell company detection
- International UBO requirements differences

**Key Terms to Define:**

- UBO (Ultimate Beneficial Owner)
- Control person
- Ownership threshold (typically 25%)
- FinCEN BOI (Beneficial Ownership Information)
- Corporate transparency requirements

**Related Section:** [Beneficial Ownership](../kyc-kyb/beneficial-ownership.md)

---

### 3.4 Sanctions & Watchlist Screening

**Research Focus:**

- OFAC (Office of Foreign Assets Control) requirements
- SDN (Specially Designated Nationals) list screening
- Other sanctions lists (UN, EU, UK)
- Screening frequency (onboarding vs. ongoing)
- Fuzzy matching and false positive handling
- Documentation requirements for screening

**Key Terms to Define:**

- OFAC
- SDN List
- Sanctions screening
- Match vs. potential match vs. false positive
- Ongoing monitoring requirements

**Related Section:** [Sanctions Screening](../kyc-kyb/sanctions-screening.md)

---

## Week 4: Underwriting & Risk Assessment

### 4.1 Underwriting Fundamentals

**Research Focus:**

- What underwriting means in payment processing
- Risk vs. reward balance in merchant acceptance
- Automated vs. manual underwriting
- Tiered underwriting approaches (instant approval vs. enhanced review)
- Underwriting SLAs and merchant experience

**Key Terms to Define:**

- Underwriting
- Risk appetite
- Automated decisioning
- Manual review queue
- Conditional approval

**Related Section:** [Underwriting Fundamentals](../underwriting/fundamentals.md)

---

### 4.2 Risk Factors in Underwriting

**Research Focus:**

- Business type and inherent risk levels
- Processing history and chargeback history
- Time in business as a risk indicator
- Credit history of principals
- Delivery timeframes and risk correlation
- Average ticket size and monthly volume projections
- Refund policy analysis

**Create a Risk Factor Matrix:**

| Risk Factor | Low Risk | Medium Risk | High Risk |
|-------------|----------|-------------|-----------|
| Time in business | 2+ years | 6mo-2yr | &lt;6 months |
| Chargeback history | &lt;0.5% | 0.5%-1.0% | >1.0% |
| Delivery timeframe | Immediate | 7-30 days | 30+ days |
| Business model | Retail, CP | E-commerce | Subscriptions, Future Delivery |

**Related Section:** [Risk Factors](../underwriting/risk-factors.md)

---

### 4.3 MCC Codes (Merchant Category Codes)

**Research Focus:**

- What MCC codes are and who assigns them
- High-risk MCC categories and why
- Prohibited MCC categories by card networks
- MCC impact on interchange rates
- MCC misclassification risks and penalties
- Common MCC codes to memorize

**Key MCC Categories to Study:**

- Retail (5411, 5311, etc.)
- Restaurants (5812, 5814)
- Professional services (8111, 8999)
- High-risk categories (5962, 5966, 5967)
- Prohibited categories (7995, 5933)

**Related Section:** [MCC Codes](../underwriting/mcc-codes.md)

---

### 4.4 Risk Scoring Models

**Research Focus:**

- Building risk scoring algorithms
- Weighted risk factors
- Score thresholds for auto-approval vs. review
- Machine learning in underwriting
- Model validation and bias detection
- Regulatory requirements for automated decisioning

**Key Terms to Define:**

- Risk score
- Underwriting model
- Decision engine
- Risk tier
- Exception handling

**Related Section:** [Risk Scoring](../underwriting/risk-scoring.md)

---

### 4.5 Ongoing Due Diligence

**Research Focus:**

- Why onboarding isn't enough
- Transaction monitoring triggers for re-underwriting
- Periodic review requirements
- Business change monitoring
- Enhanced due diligence triggers
- Documentation refresh requirements

**Related Section:** [Ongoing Monitoring](../merchant-lifecycle/ongoing-monitoring.md)

---

### 4.6 Merchant Agreements

**Research Focus:**

- Key terms in merchant processing agreements
- Reserve requirements and types (rolling, fixed, capped)
- Fee structures and disclosure requirements
- Termination clauses and MATCH list implications
- Liability allocation between PayFac and sub-merchant

**Key Terms to Define:**

- Merchant Processing Agreement (MPA)
- Reserve account
- Rolling reserve vs. fixed reserve
- MATCH list (Member Alert to Control High-risk Merchants)
- TMF (Terminated Merchant File)

**Related Section:** [Merchant Agreements](../merchant-lifecycle/merchant-agreements.md)

---

### 4.7 Ongoing Monitoring & Re-verification

**Research Focus:**

- Periodic KYC/KYB refresh requirements and schedules
- Business change detection (address, ownership, MCC changes)
- Transaction pattern monitoring for onboarding validation
- Enhanced due diligence (EDD) triggers
- Re-underwriting criteria and processes
- Merchant lifecycle management (status changes)
- Automated vs manual re-verification workflows
- Regulatory requirements for ongoing monitoring

**Key Terms to Define:**

- Periodic review
- Enhanced due diligence (EDD)
- Re-underwriting
- Business change monitoring
- Merchant lifecycle
- Ongoing monitoring

**Related Section:** [Ongoing Monitoring](../merchant-lifecycle/ongoing-monitoring.md)

---

## Additional Research Areas

### PayFac-Specific Considerations

- Sub-merchant vs. traditional merchant onboarding differences
- Sponsor bank delegation of underwriting responsibilities
- PayFac portfolio risk management
- Sub-merchant volume limits and graduation paths

**Related Sections:**
- [Sponsor Delegation](../payfac-considerations/sponsor-delegation.md)
- [Portfolio Risk](../payfac-considerations/portfolio-risk.md)

### Verification Vendors

Research capabilities and approaches of:

**Identity Verification:**
- Jumio, Persona, Onfido, Alloy, IDology, Socure

**Business Verification:**
- Middesk, Enigma, LexisNexis Business

**Sanctions Screening:**
- ComplyAdvantage, Dow Jones Risk & Compliance, Chainalysis

---

## Study Approach

1. **Start with Fundamentals** - Complete KYC/KYB sections before underwriting
2. **Build Reference Materials** - Create personal notes for MCC codes, risk factors
3. **Practice Scenarios** - Work through the quiz questions in each section
4. **Research Current Data** - Verify regulatory requirements and network rules
5. **Map to Platform** - Understand how these concepts translate to system design

---

> **Next:** Test your knowledge with [Self-Assessment Questions](./questions.md)
