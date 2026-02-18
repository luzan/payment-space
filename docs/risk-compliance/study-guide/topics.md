---
title: "Topics to Study | Risk & Compliance"
description: "Comprehensive topic list for mastering risk and compliance in payment systems: chargebacks, fraud, PCI-DSS, AML/BSA, and incident response."
sidebar_position: 1
sidebar_label: "Topics"
keywords:
  - risk management topics
  - compliance study guide
  - payment security topics
  - chargeback topics
  - PCI study guide
---

# Topics to Study

> **Last Updated:** 2025-02-17
> **Status:** Complete

This guide outlines the key topics covered in the Risk & Compliance module. Use this as a checklist to ensure comprehensive understanding.

## Chargebacks, Fraud & Monitoring

### Chargeback Fundamentals

**Core Concepts:**
- [ ] Chargeback vs. refund (financial and operational differences)
- [ ] Chargeback lifecycle: initiation, notification, representment, arbitration
- [ ] Timeframes at each stage by card network
- [ ] Liability at each stage
- [ ] Total cost of chargebacks (transaction + fees + operational)

**Key Terms:**
- Chargeback
- Dispute
- Retrieval request
- Representment
- Pre-arbitration
- Arbitration

### Chargeback Reason Codes

**Research Focus:**
- [ ] Major reason code categories (fraud, authorization, processing, consumer)
- [ ] Visa reason codes vs. Mastercard codes
- [ ] Most common codes and root causes
- [ ] Evidence requirements by code category
- [ ] Win rates by reason code type

**Key Codes to Know:**
- Visa 10.4 / MC 4837 - Fraud
- Visa 13.1 / MC 4855 - Not received
- Visa 13.3 / MC 4853 - Not as described
- Visa 12.6 / MC 4834 - Duplicate

### Representment Strategy

**Topics:**
- [ ] Building a representment case
- [ ] Compelling evidence by reason code
- [ ] Documentation requirements
- [ ] Timeframe management
- [ ] When to accept vs. fight
- [ ] Automation of representment

### Card Network Monitoring Programs

**Critical Knowledge:**
- [ ] Visa VAMP (replaced VDMP/VFMP in April 2025)
- [ ] Mastercard ECP (Excessive Chargeback Program)
- [ ] Mastercard EFM (Excessive Fraud Merchant)
- [ ] Program entry/exit criteria
- [ ] Fine schedules by program tier
- [ ] MATCH list criteria and duration

**Thresholds to Memorize:**
- VAMP: 1.5% ratio + 1,500 transactions (April 2026)
- ECP: 1.5% ratio + 100 chargebacks
- EFM: 0.5% fraud ratio + $50K + &lt;10% 3DS

### Fraud Patterns

**Fraud Types:**
- [ ] Card testing: mechanics, detection signals
- [ ] Friendly fraud: definition, why it's hard to prevent
- [ ] Account takeover (ATO): patterns, detection
- [ ] Triangulation fraud: how it works
- [ ] Bust-out fraud: merchant-level fraud
- [ ] First-party vs. third-party fraud
- [ ] CNP fraud trends

**Detection Signals:**
- Velocity patterns
- Geographic anomalies
- Device fingerprinting
- Behavioral analytics
- AVS/CVV mismatches

### Fraud Prevention Tools

**Tools to Understand:**
- [ ] AVS (Address Verification Service)
- [ ] CVV/CVC verification
- [ ] Device fingerprinting
- [ ] Machine learning fraud scoring
- [ ] Rules-based vs. ML-based detection
- [ ] Balancing prevention with conversion

### 3D Secure

**Deep Dive Topics:**
- [ ] 3DS1 vs. 3DS2 evolution
- [ ] Technical flow of 3DS2 authentication
- [ ] Frictionless vs. challenge flows
- [ ] Liability shift implications
- [ ] Impact on authorization and conversion
- [ ] PSD2/SCA requirements (Europe)
- [ ] Implementation approaches

**Key Terms:**
- 3D Secure / 3DS2
- Verified by Visa / Mastercard Identity Check
- Frictionless authentication
- Challenge flow
- Liability shift
- SCA (Strong Customer Authentication)
- ECI indicators

### Merchant Monitoring & Alerting

**Topics:**
- [ ] Real-time transaction monitoring
- [ ] Alert thresholds and escalation
- [ ] Chargeback ratio monitoring
- [ ] Fraud rate monitoring
- [ ] Velocity and pattern detection
- [ ] Merchant health scoring
- [ ] Automated action triggers

---

## PCI-DSS & AML/BSA

### PCI-DSS Overview

**Core Knowledge:**
- [ ] What PCI-DSS is and its origins
- [ ] The 12 PCI-DSS requirements
- [ ] Compliance levels (1-4) and criteria
- [ ] Service provider vs. merchant compliance
- [ ] Why PayFacs are Level 1 Service Providers

**Key Terms:**
- PCI-DSS
- PCI SSC
- SAQ (Self-Assessment Questionnaire)
- ROC (Report on Compliance)
- AOC (Attestation of Compliance)
- QSA (Qualified Security Assessor)
- ASV (Approved Scanning Vendor)

### PCI-DSS Scope Management

**Topics:**
- [ ] What "in scope" means
- [ ] Cardholder Data Environment (CDE)
- [ ] Scope reduction strategies
- [ ] Network segmentation requirements
- [ ] Connected systems and scope creep
- [ ] Third-party service provider management

**Key Terms:**
- CDE (Cardholder Data Environment)
- Scope reduction
- Network segmentation
- PAN (Primary Account Number)
- SAD (Sensitive Authentication Data)

### Tokenization & Encryption

**Topics:**
- [ ] What tokenization is and scope impact
- [ ] Format-preserving vs. random tokens
- [ ] Token vault architecture
- [ ] Point-to-point encryption (P2PE)
- [ ] Data at rest vs. in transit encryption
- [ ] Key management requirements

**Key Terms:**
- Tokenization
- Token vault
- P2PE
- HSM (Hardware Security Module)
- Key management

### AML Requirements

**Topics:**
- [ ] What money laundering is
- [ ] Why payment processors are targets
- [ ] AML program requirements
- [ ] Transaction monitoring for suspicious patterns
- [ ] Structuring and smurfing
- [ ] Layering and integration stages
- [ ] Risk-based approach

**Key Terms:**
- AML (Anti-Money Laundering)
- Money laundering stages (placement, layering, integration)
- Structuring
- Smurfing
- Risk-based approach

### BSA Obligations

**Topics:**
- [ ] BSA requirements for payment processors
- [ ] CTR (Currency Transaction Report) thresholds
- [ ] SAR (Suspicious Activity Report) requirements
- [ ] SAR filing thresholds and criteria
- [ ] Recordkeeping requirements
- [ ] FinCEN reporting obligations

**Key Terms:**
- BSA (Bank Secrecy Act)
- CTR ($10,000 threshold)
- SAR ($5,000/$25,000 thresholds)
- FinCEN
- Compliance officer

### Transaction Monitoring for AML

**Topics:**
- [ ] Real-time vs. batch monitoring
- [ ] Rule-based monitoring scenarios
- [ ] Pattern detection for AML
- [ ] Alert investigation workflow
- [ ] False positive management
- [ ] Audit trail requirements

### Reserve Management

**Topics:**
- [ ] Types of reserves (rolling, fixed, capped)
- [ ] Reserve calculation methodologies
- [ ] Release schedules and criteria
- [ ] Reserve disputes and communication
- [ ] Regulatory requirements
- [ ] Impact on merchant cash flow

### Incident Response

**Topics:**
- [ ] PCI-DSS incident response requirements
- [ ] Breach notification timelines
- [ ] Incident response team structure
- [ ] Forensics and investigation
- [ ] Communication protocols
- [ ] Post-incident remediation

---

## ISO & ISV Perspectives

### Liability Structures

**Topics:**
- [ ] ISO vs ISV vs PayFac liability spectrum
- [ ] Chargeback liability by entity type
- [ ] Reserve requirements by model
- [ ] Sub-agent liability cascading
- [ ] Contractual risk allocation

**Key Terms:**
- First-line liability
- Pass-through liability
- PFaaS (PayFac-as-a-Service)
- Sub-agent
- Residual clawback

### Compliance Obligations

**Topics:**
- [ ] PCI scope by integration model (ISO, ISV, PayFac)
- [ ] AML/BSA applicability (MSB determination)
- [ ] Network registration requirements (Third-Party Agent)
- [ ] Money transmitter licensing considerations
- [ ] Vertical-specific compliance (HIPAA, IOLTA)

### Network Program Applicability

**Topics:**
- [ ] VAMP applicability by entity type
- [ ] ECP/EFM monitoring for ISOs vs PayFacs
- [ ] MATCH listing implications by entity
- [ ] Indirect program exposure for ISOs
- [ ] Program responsibility allocation

### Portfolio Risk Management

**Topics:**
- [ ] Sub-agent due diligence requirements
- [ ] KYC/KYB delegation vs ownership
- [ ] ISO portfolio monitoring best practices
- [ ] ISV user verification responsibilities
- [ ] Termination authority by entity type

---

## Completion Checklist

After completing this module, you should be able to:

- [ ] Navigate a chargeback from receipt through arbitration
- [ ] Calculate and manage chargeback ratios
- [ ] Identify reason codes and evidence requirements
- [ ] Design a transaction monitoring system
- [ ] Explain VAMP, ECP, EFM program thresholds
- [ ] Describe 3DS2 and liability shift
- [ ] Explain PCI-DSS scope and reduce it architecturally
- [ ] Identify SAR-triggering patterns
- [ ] Describe the three stages of money laundering
- [ ] Execute breach notification within required timelines

## Related Topics

- [Self-Assessment Questions](./questions.md)
- [Resources & Reading](./resources.md)
