---
title: "PCI-DSS Quiz | Self-Assessment | Payments Mastery"
description: "Test your understanding of PCI-DSS: requirements, scope management, tokenization, and compliance levels."
sidebar_position: 5
sidebar_label: "Quiz"
keywords:
  - PCI quiz
  - PCI-DSS test
  - compliance assessment
  - payment security quiz
---

# PCI-DSS Quiz

> **Last Updated:** 2025-02-17
> **Status:** Complete

Test your understanding of PCI-DSS compliance with these self-assessment questions.

## Compliance Levels

### Question 1: Compliance Levels

**What are the four PCI compliance levels for merchants, and what determines which level applies?**

<details>
<summary>View Answer</summary>

**Merchant Compliance Levels:**

| Level | Annual Transactions | Validation Required |
|-------|---------------------|---------------------|
| **1** | > 6 million | Annual ROC by QSA, quarterly ASV scans |
| **2** | 1-6 million | Annual SAQ, quarterly ASV scans |
| **3** | 20,000-1 million (e-commerce) | Annual SAQ, quarterly ASV scans |
| **4** | < 20,000 e-commerce OR < 1 million total | Annual SAQ, quarterly ASV scans |

**Determining Factors:**
1. Annual transaction volume by card brand
2. E-commerce vs. card-present transactions
3. Data breach history (automatic Level 1)

**Important:** Transaction counts are per card brand, not total.
</details>

### Question 2: Service Provider Levels

**As a PayFac (Level 1 Service Provider), what compliance validation is required annually?**

<details>
<summary>View Answer</summary>

**Level 1 Service Provider Requirements:**

| Requirement | Frequency | Performed By |
|-------------|-----------|--------------|
| Report on Compliance (ROC) | Annual | QSA |
| Attestation of Compliance (AOC) | Annual | QSA |
| External vulnerability scans | Quarterly | ASV |
| Internal vulnerability scans | Quarterly | Internal/external |
| Penetration testing | Annual | Qualified tester |
| Segmentation validation | Every 6 months | QSA |

**Service Provider Levels:**
- Level 1: > 300,000 transactions/year
- Level 2: < 300,000 transactions/year

**Additional Service Provider Requirements:**
- Executive management quarterly PCI review (12.4.1)
- Passwords changed every 90 days (8.3.10)
- Written acknowledgment to customers (12.9.1)
</details>

## Scope Management

### Question 3: PCI Scope Definition

**What is "PCI scope" and why is reducing scope architecturally important?**

<details>
<summary>View Answer</summary>

**PCI Scope Definition:**
The collection of all system components, people, and processes that:
- Store, process, or transmit cardholder data
- Can connect to systems that handle cardholder data
- Could impact the security of cardholder data

**Why Reducing Scope Matters:**

| Factor | Full Scope | Reduced Scope |
|--------|------------|---------------|
| Systems to assess | 100+ | 10-20 |
| Compliance cost | $200K-500K/year | $50K-100K/year |
| Assessment time | 4-8 weeks | 1-2 weeks |
| Breach exposure | High | Contained |
| Remediation effort | Extensive | Focused |

**Scope Reduction Strategies:**
1. Network segmentation
2. Tokenization
3. P2PE (Point-to-Point Encryption)
4. Outsourcing to compliant providers

**Architectural Importance:**
- Fewer systems = fewer vulnerabilities
- Faster compliance cycles
- Lower operational risk
- Easier to maintain security posture
</details>

### Question 4: Tokenization and Scope

**How does tokenization reduce PCI scope? What still remains in scope?**

<details>
<summary>View Answer</summary>

**How Tokenization Reduces Scope:**

```
Before: PAN flows through all systems → All systems in scope

After: Token flows through all systems → Only token vault in scope
```

**Scope Impact:**

| Component | With PAN | With Token |
|-----------|----------|------------|
| Application servers | IN scope | OUT of scope |
| Databases | IN scope | OUT of scope |
| APIs | IN scope | OUT of scope |
| Token vault | N/A | IN scope |
| Token generator | N/A | IN scope |
| HSM/key management | IN scope | IN scope |

**What Remains IN Scope:**
1. Token vault infrastructure
2. Token generation service
3. Detokenization service
4. HSM and key management
5. Network connections to vault
6. Admin access to token systems

**Optimal Implementation:**
Tokenize BEFORE data enters your environment (using client-side SDK):
- Card data never touches your systems
- Maximum scope reduction
- You only handle tokens
</details>

### Question 5: System Scope

**A system handles tokenized card data but never touches actual PANs. Is it in PCI scope?**

<details>
<summary>View Answer</summary>

**Answer: NO - The system is OUT of PCI scope.**

**Why:**
- Tokens are not cardholder data
- Tokens have no exploitable value
- Tokens cannot be reversed without vault access
- The system has no connection to actual PANs

**Conditions for Out-of-Scope:**
1. System receives only tokens (never PANs)
2. System cannot access token vault
3. System cannot perform detokenization
4. No network path to CDE

**Still IN Scope:**
- Token vault itself
- Any system that can detokenize
- Systems connecting to token vault
- Key management systems

**Documentation Required:**
- Confirm no PAN ever enters system
- Document data flows
- Validate network segmentation
- Include in scope assessment
</details>

## Requirements

### Question 6: QSA vs ASV

**What is the difference between a QSA and an ASV? When is each needed?**

<details>
<summary>View Answer</summary>

**QSA (Qualified Security Assessor):**

| Aspect | Details |
|--------|---------|
| Definition | Company/individual certified by PCI SSC to perform assessments |
| Role | Conducts on-site PCI compliance assessments |
| Deliverable | Report on Compliance (ROC), Attestation of Compliance (AOC) |
| When Needed | Level 1 merchants and service providers |
| Frequency | Annual |

**ASV (Approved Scanning Vendor):**

| Aspect | Details |
|--------|---------|
| Definition | Company certified to perform external vulnerability scans |
| Role | Automated scanning of external-facing systems |
| Deliverable | ASV Scan Report |
| When Needed | All merchants and service providers |
| Frequency | Quarterly |

**Comparison:**

| Factor | QSA | ASV |
|--------|-----|-----|
| Type | Human assessment | Automated scan |
| Scope | Full compliance | External vulnerabilities |
| Cost | $50,000-250,000+ | $1,000-5,000/year |
| Required for | Level 1 | All levels |
</details>

## Scenario Questions

### Question 7: PCI Audit Preparation

**Scenario:** The company is preparing for its first PCI Level 1 audit. What documentation and evidence should be prepared? What are common findings that cause audit failures?

<details>
<summary>View Answer</summary>

**Required Documentation:**

| Category | Documents |
|----------|-----------|
| **Network** | Network diagrams, data flow diagrams, firewall rules |
| **Policies** | Information security policy, acceptable use, access control |
| **Procedures** | Change management, incident response, key management |
| **Inventory** | System inventory, software inventory, device lists |
| **Logs** | 90 days of logs available, 12 months retained |
| **Evidence** | Screenshots, config exports, test results |

**Evidence by Requirement:**

| Req | Evidence Needed |
|-----|-----------------|
| 1 | Firewall configs, rule reviews, topology |
| 2 | Configuration standards, hardening evidence |
| 3 | Encryption keys, data retention evidence |
| 6 | Vulnerability scans, pen test results, patch logs |
| 8 | User access lists, MFA configuration |
| 10 | Log samples, SIEM screenshots |
| 11 | ASV scans, penetration test reports |
| 12 | Policies, training records, risk assessment |

**Common Audit Failures:**

| Finding | Issue | Prevention |
|---------|-------|------------|
| Incomplete network diagrams | Missing systems | Update continuously |
| Default passwords | Never changed | Configuration management |
| CVV in logs | Application logging | Mask/truncate |
| Missing patches | Delayed patching | 30-day patch cycle |
| Shared accounts | No unique IDs | Enforce unique logins |
| Incomplete logging | Not all events | Enable all required events |
| Outdated policies | No annual review | Annual review process |
| Missing segmentation testing | Not validated | Annual pen test |
</details>

### Question 8: New Developer Question

**Scenario:** A new developer joins the team and asks why card numbers are never stored directly in the database. Explain the PCI implications and the tokenization strategy.

<details>
<summary>View Answer</summary>

**Why We Don't Store PANs:**

```
If we stored PANs directly:
├── Database → IN SCOPE
├── Application servers → IN SCOPE
├── Backup systems → IN SCOPE
├── Monitoring systems → IN SCOPE
├── All admin access → IN SCOPE
└── Total: 50+ systems to secure and audit

With tokenization:
├── Token vault → IN SCOPE (1 system)
├── Everything else → OUT OF SCOPE
└── Total: 1 system to focus on
```

**PCI Implications of Storing PANs:**

| Factor | Impact |
|--------|--------|
| Compliance scope | Every system touching PANs must comply |
| Annual assessment | Full QSA assessment of all systems |
| Security controls | Full 12 requirements on all systems |
| Breach liability | All stored PANs exposed |
| Cost | $200K-500K+ annually |

**Our Tokenization Strategy:**

1. **At Checkout:** Customer card goes to token provider's client-side SDK
2. **Token Creation:** Provider creates token, returns to our backend
3. **We Store:** Only the token (e.g., `tok_abc123`)
4. **Processing:** We send token to processor who can detokenize
5. **Result:** PAN never enters our systems

**Benefits:**
- Dramatically reduced scope
- Lower compliance cost
- Better security posture
- Simplified architecture
- Faster audits

**Key Message to Developer:**
"We use tokens because it means our database, our code, and our infrastructure don't need to meet the full PCI-DSS requirements. The token provider handles that complexity."
</details>

### Question 9: Password Requirements

**What are the current password requirements under PCI DSS v4.0?**

<details>
<summary>View Answer</summary>

**PCI DSS v4.0 Password Requirements (Requirement 8.3.6):**

| Requirement | v4.0 Standard |
|-------------|---------------|
| Minimum length | **12 characters** (up from 7) |
| Complexity | Numeric AND alphabetic |
| Change frequency | Based on risk analysis |
| History | Prevent reuse of last 4 |
| Failed attempts | Lockout after 6 attempts |

**Additional Authentication Requirements:**

| Requirement | Details |
|-------------|---------|
| 8.4.2 | MFA for **ALL** access to CDE (not just admin) |
| 8.3.10 | Service provider passwords: change every 90 days |
| 8.5 | Manage system/application accounts |

**Comparison to Previous:**

| Factor | v3.2.1 | v4.0 |
|--------|--------|------|
| Length | 7 chars | 12 chars |
| MFA scope | Admin only | All CDE access |
| Complexity | Any 2 types | Numeric + alpha |
</details>

## Summary

After completing this quiz, you should understand:

- [ ] The four merchant and two service provider compliance levels
- [ ] Level 1 Service Provider annual requirements
- [ ] How to determine what's in and out of PCI scope
- [ ] Tokenization's impact on scope
- [ ] Difference between QSA and ASV
- [ ] Common audit failure points
- [ ] v4.0 password and MFA requirements

## Related Topics

- [Requirements](./requirements.md) - The 12 PCI requirements
- [Scope Management](./scope-management.md) - Reducing scope
- [Tokenization](./tokenization.md) - Token strategies
- [Incident Response](../incident-response/index.md) - Breach handling
