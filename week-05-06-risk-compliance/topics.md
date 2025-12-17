# Week 5-6: Topics to Research

## Week 5: Chargebacks, Fraud & Monitoring

### 5.1 Chargeback Fundamentals

**Research Focus:**

- What a chargeback actually is (versus a refund)
- The chargeback lifecycle: initiation, notification, representment, arbitration
- Timeframes at each stage (varies by card network)
- Who bears the financial liability at each stage
- Chargeback costs beyond the transaction amount (fees, operational costs)

**Key Terms to Define:**

- Chargeback
- Dispute
- Retrieval request
- Representment
- Pre-arbitration
- Arbitration

### 5.2 Chargeback Reason Codes

**Research Focus:**

- Major reason code categories (fraud, authorization, processing errors, consumer disputes)
- Visa reason codes vs. Mastercard reason codes
- Most common reason codes and their root causes
- Evidence requirements for each reason code category
- Win rates by reason code type

**Key Reason Codes to Study:**

- Visa 10.4 / MC 4837 - Fraud
- Visa 13.1 / MC 4853 - Merchandise not received
- Visa 13.3 / MC 4853 - Not as described
- Visa 11.1 / MC 4808 - Card recovery bulletin
- Authorization-related codes

### 5.3 Representment Strategy

**Research Focus:**

- Building a representment case
- Compelling evidence by reason code
- Documentation requirements
- Timeframe management
- When to accept vs. fight a chargeback
- Automation of representment

**Key Terms to Define:**

- Compelling evidence
- Pre-arbitration rights
- Arbitration filing
- Case management
- Win rate

### 5.4 Card Network Monitoring Programs

**Research Focus:**

- Visa Dispute Monitoring Program (VDMP)
- Visa Fraud Monitoring Program (VFMP)
- Mastercard Excessive Chargeback Program (ECP)
- Mastercard Excessive Fraud Merchant Program (EFM)
- Thresholds that trigger program entry
- Consequences of program entry (fines, remediation, termination)
- How to exit monitoring programs

**Critical Thresholds to Memorize:**

- Chargeback ratio threshold: typically 1%
- Fraud ratio threshold: typically 1%
- Minimum dispute count thresholds
- Fine schedules by program tier

### 5.5 Fraud Patterns

**Research Focus:**

- Card testing: how it works, detection signals
- Friendly fraud: dispute of legitimate purchases
- Account takeover (ATO): credential compromise
- Triangulation fraud: how it works, why it's hard to detect
- Bust-out fraud: merchant-level fraud
- First-party fraud vs. third-party fraud
- CNP (Card Not Present) fraud trends

**Detection Signals to Study:**

- Velocity patterns
- Geographic anomalies
- Device fingerprinting signals
- Behavioral analytics
- Address verification mismatches

### 5.6 Fraud Prevention Tools

**Research Focus:**

- AVS (Address Verification Service)
- CVV/CVC verification
- Device fingerprinting
- Machine learning fraud scoring
- Rules-based vs. ML-based detection
- Balancing fraud prevention with conversion rates

### 5.6.1 3D Secure 2.0 Deep Dive

**Research Focus:**

- What 3D Secure is and how it evolved (3DS1 vs 3DS2)
- Technical flow of 3DS2 authentication
- Frictionless vs. challenge flows
- Liability shift implications (who bears fraud loss)
- Impact on authorization rates and conversion
- PSD2 and Strong Customer Authentication (SCA) requirements in Europe
- When to implement 3DS (transaction thresholds, risk-based triggers)
- Integration approaches (redirect vs. embedded)

**Key Terms to Define:**

- 3D Secure / 3DS2
- Verified by Visa / Mastercard SecureCode / Mastercard Identity Check
- Frictionless authentication
- Challenge flow
- Liability shift
- SCA (Strong Customer Authentication)
- PSD2 (Payment Services Directive 2)
- ACS (Access Control Server)
- DS (Directory Server)

**Implementation Considerations:**

- Impact on checkout conversion (5-20 second delay)
- Exemptions and exclusions (low-value, recurring, trusted beneficiaries)
- Transaction Risk Analysis (TRA) exemption
- Testing 3DS integration in sandbox environments

### 5.7 Merchant Monitoring & Alerting Systems

**Research Focus:**

- Real-time transaction monitoring dashboards
- Alert thresholds and escalation paths
- Chargeback ratio monitoring and alerts
- Fraud rate monitoring and thresholds
- Velocity and pattern detection
- Merchant health scoring systems
- Automated action triggers (suspension, reserve increases, account holds)
- Alert investigation workflows
- False positive management

**Key Terms to Define:**

- Merchant health score
- Alert threshold
- Escalation path
- Automated action
- Velocity monitoring
- Pattern detection

---

## Week 6: PCI-DSS & AML/BSA

### 6.1 PCI-DSS Overview

**Research Focus:**

- What PCI-DSS is and who created it
- The 12 PCI-DSS requirements (high-level)
- Compliance levels (1-4) and what determines level
- Service provider vs. merchant compliance
- Why PayFacs are typically Level 1 Service Providers

**Key Terms to Define:**

- PCI-DSS
- PCI SSC (Security Standards Council)
- SAQ (Self-Assessment Questionnaire)
- ROC (Report on Compliance)
- AOC (Attestation of Compliance)
- QSA (Qualified Security Assessor)
- ASV (Approved Scanning Vendor)

### 6.2 PCI-DSS Scope Management

**Research Focus:**

- What "in scope" means for PCI
- Cardholder data environment (CDE)
- Scope reduction strategies
- Network segmentation requirements
- Connected systems and scope creep
- Third-party service provider management

**Key Terms to Define:**

- CDE (Cardholder Data Environment)
- Scope reduction
- Network segmentation
- PAN (Primary Account Number)
- SAD (Sensitive Authentication Data)

### 6.3 Tokenization & Encryption

**Research Focus:**

- What tokenization is and why it matters for PCI scope
- Format-preserving vs. random tokens
- Token vault architecture
- Point-to-point encryption (P2PE)
- Data at rest vs. data in transit encryption
- Key management requirements

**Key Terms to Define:**

- Tokenization
- Token vault
- P2PE (Point-to-Point Encryption)
- HSM (Hardware Security Module)
- Key management

### 6.4 AML (Anti-Money Laundering) Requirements

**Research Focus:**

- What money laundering is and why payment processors are targets
- AML program requirements for financial services
- Transaction monitoring for suspicious patterns
- Structuring and smurfing patterns
- Layering and integration stages
- Risk-based approach to AML

**Key Terms to Define:**

- AML (Anti-Money Laundering)
- Money laundering stages (placement, layering, integration)
- Structuring
- Smurfing
- Risk-based approach

### 6.5 BSA (Bank Secrecy Act) Obligations

**Research Focus:**

- BSA requirements for payment processors
- CTR (Currency Transaction Report) thresholds
- SAR (Suspicious Activity Report) requirements
- SAR filing thresholds and criteria
- Recordkeeping requirements
- FinCEN reporting obligations

**Key Terms to Define:**

- BSA (Bank Secrecy Act)
- CTR (Currency Transaction Report)
- SAR (Suspicious Activity Report)
- FinCEN
- Compliance officer requirements

### 6.6 Transaction Monitoring Systems

**Research Focus:**

- Real-time vs. batch monitoring
- Rule-based monitoring scenarios
- Pattern detection for AML
- Alert investigation workflow
- False positive management
- Audit trail requirements

**Monitoring Scenarios to Understand:**

- Rapid movement of funds
- Unusual transaction patterns
- Geographic risk indicators
- Velocity anomalies
- Round-dollar transactions
- Structured transactions

### 6.7 Reserve Management

**Research Focus:**

- Types of reserves (rolling, fixed, capped, percentage-based)
- Reserve calculation methodologies
- Reserve release schedules and criteria
- Reserve account funding and management
- Reserve disputes and merchant communication
- Regulatory requirements for reserve holding
- Reserve impact on merchant cash flow
- When to increase or decrease reserves
- Reserve vs. chargeback liability

**Key Terms to Define:**

- Rolling reserve
- Fixed reserve
- Capped reserve
- Reserve percentage
- Reserve release schedule
- Reserve account

### 6.8 Incident Response & Breach Notification

**Research Focus:**

- PCI-DSS incident response requirements
- Breach notification timelines (state, federal, card networks)
- Incident response team structure and roles
- Forensics and investigation procedures
- Communication protocols (merchants, regulators, card networks)
- Post-incident remediation and prevention
- Incident classification and severity levels
- Regulatory reporting requirements

**Key Terms to Define:**

- Incident response
- Breach notification
- Forensics
- Remediation
- Incident classification
