---
title: "Self-Assessment Questions | Risk & Compliance"
description: "49 self-assessment questions covering chargebacks, fraud, PCI-DSS, AML/BSA, incident response, and ISO/ISV perspectives for payment platforms."
sidebar_position: 2
sidebar_label: "Questions"
keywords:
  - risk compliance questions
  - chargeback quiz
  - PCI assessment
  - AML test questions
  - payment security quiz
---

# Self-Assessment Questions

> **Last Updated:** 2025-02-17
> **Status:** Complete

Use these questions to validate your understanding of risk and compliance concepts.

---

## Chargebacks

### Question 1
What is the difference between a refund and a chargeback? Why does this distinction matter financially?

### Question 2
A merchant has 10,000 transactions and 120 chargebacks in a month. What is the chargeback ratio? Is this acceptable?

### Question 3
What is representment, and what determines whether it's worth pursuing?

### Question 4
A cardholder claims they never received merchandise. What evidence could successfully dispute this chargeback?

### Question 5
What happens when a PayFac enters the Visa VAMP program? What are the consequences of not improving?

---

## Fraud

### Question 6
What is "card testing" and what transaction patterns indicate it's happening?

### Question 7
Explain "friendly fraud." Why is it particularly difficult to prevent?

### Question 8
What is triangulation fraud? Why is the legitimate merchant often unaware they're involved?

### Question 9
What is the "liability shift" with 3D Secure, and why does it matter?

### Question 10
A merchant suddenly shows a spike in small transactions ($1-5) from different cards. What might this indicate?

---

## PCI-DSS

### Question 11
What are the four PCI compliance levels for merchants, and what determines which level applies?

### Question 12
As a PayFac (Level 1 Service Provider), what compliance validation is required annually?

### Question 13
What is "PCI scope" and why is reducing scope architecturally important?

### Question 14
How does tokenization reduce PCI scope? What still remains in scope?

### Question 15
What is the difference between a QSA and an ASV? When is each needed?

### Question 16
A system handles tokenized card data but never touches actual PANs. Is it in PCI scope?

---

## AML/BSA

### Question 17
What are the three stages of money laundering, and how might a payment platform be exploited at each stage?

### Question 18
What is "structuring" and why is it a red flag?

### Question 19
When must a SAR (Suspicious Activity Report) be filed? What are the thresholds?

### Question 20
What's the difference between transaction monitoring for fraud versus AML? What patterns differ?

---

## Scenario Questions

### Question 21
**Scenario:** A merchant's chargeback ratio jumps from 0.5% to 1.5% in one month. Most are reason code 10.4 (fraud). What immediate actions should be taken? What's the risk if nothing is done?

### Question 22
**Scenario:** The platform detects a sub-merchant receiving many transactions just under $10,000, split across multiple days, always in round numbers. What might this indicate and what's the appropriate response?

### Question 23
**Scenario:** A new developer joins the team and asks why card numbers are never stored directly in the database. Explain the PCI implications and the tokenization strategy.

### Question 24
**Scenario:** A merchant claims they shipped merchandise and provides a tracking number, but the customer disputes claiming it was an empty box. How should this chargeback be handled?

### Question 25
**Scenario:** Design a real-time monitoring system that would catch: (a) card testing, (b) chargeback ratio spikes, (c) potential structuring. What signals would trigger alerts?

### Question 26
**Scenario:** The company is preparing for its first PCI Level 1 audit. What documentation and evidence should be prepared? What are common findings that cause audit failures?

---

## Merchant Monitoring & Alerting

### Question 27
What metrics should be monitored in real-time for merchant health?

### Question 28
A merchant's chargeback ratio jumps from 0.3% to 1.2% in one week. What alerts should fire, and what automated actions might be appropriate?

### Question 29
How would you design an alerting system that catches card testing patterns before they become a major problem?

### Question 30
What is a merchant health score, and how would you calculate it?

### Question 31
**Scenario:** Design a monitoring dashboard for operations teams. What key metrics and alerts should be visible?

---

## Reserve Management

### Question 32
What is the difference between a rolling reserve and a fixed reserve? When would you use each?

### Question 33
A merchant has a 10% rolling reserve with 180-day release. They process $100,000 in a month. How much is held in reserve after 8 months?

### Question 34
A merchant disputes a reserve requirement. What's the process for handling this?

### Question 35
When should a reserve be increased? When can it be decreased or released?

### Question 36
**Scenario:** A merchant's chargeback ratio is 0.8% and trending upward. They process $500K/month. What reserve strategy would you recommend?

---

## Incident Response & Breach Notification

### Question 37
A potential data breach is detected. What are the immediate steps that must be taken?

### Question 38
What are the notification timelines for a confirmed breach? Who must be notified?

### Question 39
What is the difference between a security incident and a confirmed breach?

### Question 40
**Scenario:** A developer accidentally logs cardholder data to application logs. The logs are stored in a cloud service. Is this a breach? What steps must be taken?

### Question 41
How should an incident response team be structured for a payment facilitator?

---

## ISO & ISV Perspectives

### Question 42
Why do ISOs have zero direct chargeback liability in the standard model? What exceptions might create liability?

### Question 43
An ISV integrates payments using a PFaaS provider in "Standard" mode. Who bears chargeback liability, and why?

### Question 44
What determines whether an ISO or ISV needs an AML/BSA compliance program?

### Question 45
How does VAMP monitoring apply differently to ISOs versus PayFacs?

### Question 46
A Master ISO is onboarding a new Sub-ISO. What due diligence should be performed?

### Question 47
An ISV serves the healthcare vertical with embedded payments. What compliance frameworks must they address beyond PCI?

### Question 48
**Scenario:** A PayFac partners with an ISO whose referred merchants consistently have 2x the average chargeback rate. What contractual and operational changes should the PayFac implement?

### Question 49
Can an ISO principal be listed on MATCH? Under what circumstances, and what are the consequences?

---

## Answer Key Location

Detailed answers for these questions can be found in the section-specific quizzes:

- [Chargeback Quiz](../chargebacks/quiz.md) - Questions 1-5, 21, 24
- [Fraud Prevention Quiz](../fraud-prevention/quiz.md) - Questions 6-10, 25
- [Monitoring Programs Quiz](../monitoring-programs/quiz.md) - Questions 27-31, 32-36
- [PCI Compliance Quiz](../pci-compliance/quiz.md) - Questions 11-16, 23, 26
- [AML/BSA Quiz](../aml-bsa/quiz.md) - Questions 17-20, 22
- [Incident Response Quiz](../incident-response/quiz.md) - Questions 37-41
- [ISO & ISV Perspectives Quiz](../iso-isv-perspectives/quiz.md) - Questions 42-49

## Related Topics

- [Topics to Study](./topics.md)
- [Resources & Reading](./resources.md)
