---
title: "Chargeback Management Quiz | Self-Assessment"
description: "Test your understanding of chargeback management: lifecycle, reason codes, representment strategies, and dispute resolution."
sidebar_position: 5
sidebar_label: "Quiz"
keywords:
  - chargeback quiz
  - dispute management test
  - representment assessment
  - payment compliance quiz
---

# Chargeback Management Quiz

> **Last Updated:** 2025-02-17
> **Status:** Complete

Test your understanding of chargeback management with these self-assessment questions.

## Fundamentals

### Question 1: Refund vs. Chargeback

**What is the difference between a refund and a chargeback? Why does this distinction matter financially?**

<details>
<summary>View Answer</summary>

**Refund:**
- Initiated by the merchant
- Merchant controls the process
- Only the transaction amount is returned
- No additional fees

**Chargeback:**
- Initiated by the cardholder through their issuing bank
- Merchant has no control over initiation
- Transaction amount is forcibly reversed
- Includes chargeback fee ($15-100)
- Counts against merchant's chargeback ratio
- May trigger monitoring programs

**Financial Impact:**
A chargeback costs significantly more than a refund due to:
- Chargeback fee
- Operational cost of representment
- Potential monitoring program fines
- Long-term ratio impact

**Best Practice:** Process refunds proactively to avoid chargebacks when customer complaints are valid.
</details>

### Question 2: Chargeback Ratio Calculation

**A merchant has 10,000 transactions and 120 chargebacks in a month. What is the chargeback ratio? Is this acceptable?**

<details>
<summary>View Answer</summary>

**Calculation:**
```
Chargeback Ratio = 120 / 10,000 × 100 = 1.2%
```

**Assessment:**
This ratio is **NOT acceptable**. It exceeds the 1% threshold for both Visa and Mastercard monitoring programs.

**Consequences:**
- Entry into VDMP (Visa Dispute Monitoring Program) or ECP (Mastercard Excessive Chargeback Program)
- Monthly fines ($10,000+)
- Required remediation plan
- Risk of termination if not improved

**Action Required:**
1. Immediate investigation of chargeback causes
2. Implement fraud prevention measures
3. Review merchant communications and policies
4. Consider reserve increase
</details>

### Question 3: Representment Decision

**What is representment, and what determines whether it's worth pursuing?**

<details>
<summary>View Answer</summary>

**Representment Definition:**
Representment is the process of disputing a chargeback by submitting compelling evidence that proves the original transaction was valid.

**Factors Determining Worth:**

| Factor | Represent | Accept |
|--------|-----------|--------|
| Transaction Value | > $25 | < $25 |
| Evidence Available | Strong | Weak/None |
| Win Probability | > 40% | < 30% |
| Reason Code | Service/Auth | True Fraud |
| Operational Capacity | Available | Overwhelmed |

**Cost-Benefit Analysis:**
- Operational cost: $15-50 per representment
- Only pursue if expected recovery > cost
- Consider ratio impact (won chargebacks don't count)

**Decision Framework:**
- High value + strong evidence = Always represent
- Low value + weak evidence = Always accept
- Medium cases = Evaluate case-by-case
</details>

## Evidence and Reason Codes

### Question 4: Not Received Evidence

**A cardholder claims they never received merchandise (Visa 13.1). What evidence could successfully dispute this chargeback?**

<details>
<summary>View Answer</summary>

**Compelling Evidence for Non-Receipt:**

| Evidence Type | Strength |
|---------------|----------|
| Delivery confirmation with signature | Very Strong |
| Photo proof at delivery location | Very Strong |
| GPS coordinates matching billing address | Strong |
| Tracking showing "Delivered" status | Strong |
| Delivery notification email | Medium |

**Evidence Package Should Include:**
1. Carrier tracking number
2. Full tracking history showing delivery
3. Delivery confirmation/signature (if available)
4. GPS coordinates of delivery
5. Photo proof (if carrier provides)
6. Delivery notification sent to customer

**Win Rate:** 40-60% with strong evidence

**If No Delivery Proof:**
- Accept the chargeback
- Require signature confirmation for future high-value orders
- Consider shipping insurance
</details>

### Question 5: Fraud Chargeback with 3DS

**A merchant uses 3D Secure for all transactions. A customer files a fraud chargeback (Visa 10.4). How should this be handled?**

<details>
<summary>View Answer</summary>

**3D Secure Liability Shift:**
When a transaction is authenticated via 3D Secure:
- Liability shifts from merchant to issuer
- Fraud chargebacks should be represented with 3DS proof

**Evidence to Submit:**
1. 3DS authentication result (ECI indicator)
2. 3DS transaction ID
3. Authentication timestamp
4. Device fingerprint (if captured)
5. AVS/CVV responses

**Expected Outcome:**
- With valid 3DS authentication, chargeback should be reversed
- Win rate: 70-85% for properly authenticated transactions

**Key ECI Values:**
- ECI 05 (Visa) / ECI 02 (MC): Fully authenticated - Strong liability shift
- ECI 06 (Visa) / ECI 01 (MC): Attempted auth - Partial protection
- ECI 07 (Visa) / ECI 00 (MC): Not authenticated - No protection

**Action:** Always submit 3DS proof for fraud chargebacks on authenticated transactions.
</details>

### Question 6: Reason Code Mapping

**Map these Visa reason codes to their Mastercard equivalents:**
- Visa 10.4
- Visa 13.1
- Visa 12.6

<details>
<summary>View Answer</summary>

| Visa Code | Description | Mastercard Equivalent |
|-----------|-------------|----------------------|
| **10.4** | Other Fraud - Card-Not-Present | **4837** (No Cardholder Authorization) |
| **13.1** | Merchandise/Services Not Received | **4855** (Goods or Services Not Provided) |
| **12.6** | Duplicate Processing | **4834** (Duplicate Processing) |

**Why This Matters:**
- Multi-processor environments need consistent handling
- Evidence requirements are similar across networks
- Reporting should normalize codes for analysis
</details>

## Scenario Questions

### Question 7: High-Risk Merchant

**Scenario:** A merchant's chargeback ratio jumps from 0.5% to 1.5% in one month. Most are reason code 10.4 (fraud). What immediate actions should be taken? What's the risk if nothing is done?

<details>
<summary>View Answer</summary>

**Immediate Actions:**

1. **Investigate Root Cause**
   - Review recent fraud chargebacks for patterns
   - Check for card testing activity
   - Analyze geographic and device patterns

2. **Implement Fraud Controls**
   - Enable 3D Secure for all transactions
   - Tighten AVS/CVV requirements
   - Implement velocity limits
   - Add device fingerprinting

3. **Reserve Adjustment**
   - Increase reserve percentage
   - Consider rolling reserve to cover chargebacks

4. **Communication**
   - Notify sponsor bank (may be required)
   - Prepare remediation plan

**Risk If Nothing Done:**

| Timeline | Consequence |
|----------|-------------|
| Month 1-2 | VDMP/ECP entry, $10K+ monthly fines |
| Month 3-4 | Escalating fines, remediation required |
| Month 5-6 | Higher fines ($50K+), termination warning |
| Month 7+ | MATCH listing, account termination |

**Long-Term Impact:**
- MATCH listing prevents processing for 5 years
- Reputation damage
- Sponsor bank relationship harm
</details>

### Question 8: Empty Box Claim

**Scenario:** A merchant claims they shipped merchandise and provides a tracking number, but the customer disputes claiming it was an empty box. How should this chargeback be handled?

<details>
<summary>View Answer</summary>

**Challenge:**
"Empty box" claims are difficult because:
- Delivery was confirmed (merchant has proof)
- Contents cannot be verified after the fact
- He-said-she-said situation

**Evidence to Gather:**
1. Tracking confirmation showing delivery
2. Package weight from carrier records
3. Packing slip/invoice
4. Warehouse CCTV (if available)
5. Photos of packed item (if taken)
6. Customer communication history

**Representment Strategy:**
1. Submit delivery proof
2. Show package weight matches expected weight
3. Include order details and packing process
4. Reference customer's order history

**Realistic Outcome:**
- Win rate: 20-35% (challenging to prove contents)
- Better with weight verification or packing photos

**Prevention for Future:**
- Video record packing of high-value items
- Use tamper-evident packaging
- Require signature delivery for expensive items
- Note package weight on shipping labels
</details>

### Question 9: Monitoring Program Entry

**What happens when a PayFac enters the Visa Dispute Monitoring Program (VDMP)? What are the consequences of not improving?**

<details>
<summary>View Answer</summary>

**VDMP Entry:**
Triggered when:
- Chargeback ratio ≥ 1.0% AND
- Chargeback count ≥ 100

**Program Stages:**

| Stage | Duration | Fines | Requirements |
|-------|----------|-------|--------------|
| Early Warning | 1-4 months | None | Monitoring only |
| Standard | Months 5-9 | $50/chargeback | Remediation plan |
| Excessive | Months 10+ | $100/chargeback + $25K monthly | Aggressive remediation |

**Consequences of Not Improving:**

| Timeline | Action |
|----------|--------|
| Month 4-5 | Fines begin, sponsor bank notified |
| Month 9-10 | Escalated fines, termination warning |
| Month 12+ | Potential MATCH listing |
| Final | Account termination, 5-year industry blacklist |

**Required Actions:**
1. Identify and terminate high-risk sub-merchants
2. Implement enhanced fraud controls
3. Improve customer service to reduce disputes
4. Increase reserves on remaining portfolio
5. Report progress to sponsor bank monthly
</details>

## Advanced Questions

### Question 10: Representment ROI

**A PayFac receives 500 chargebacks monthly with an average transaction value of $200. Current win rate is 30%. The operations team costs $50/hour and can process 10 representments per hour. Calculate:**
- a) Monthly chargebacks worth representing (transaction value > $50)
- b) Expected monthly recovery
- c) Monthly operational cost
- d) Net ROI of representment program

<details>
<summary>View Answer</summary>

**Assumptions:**
- Total chargebacks: 500/month
- Average value: $200
- Win rate: 30%
- Staff cost: $50/hour
- Throughput: 10/hour

**a) Chargebacks Worth Representing:**
Assuming 80% have value > $50:
```
500 × 0.80 = 400 chargebacks/month
```

**b) Expected Monthly Recovery:**
```
400 representments × 30% win rate × $200 average = $24,000
```

**c) Monthly Operational Cost:**
```
400 representments ÷ 10/hour = 40 hours
40 hours × $50/hour = $2,000
```

**d) Net ROI:**
```
Recovery: $24,000
Cost: $2,000
Net Gain: $22,000

ROI = ($22,000 / $2,000) × 100 = 1,100%
```

**Additional Benefits Not Quantified:**
- Won chargebacks don't count against ratio
- Reduced monitoring program risk
- Lower future fines

**Optimization Opportunities:**
- Improve win rate through better evidence gathering
- Automate evidence collection to reduce cost
- Focus on high-value, high-probability cases
</details>

## Summary

After completing this quiz, you should understand:

- [ ] The difference between refunds and chargebacks
- [ ] How to calculate and interpret chargeback ratios
- [ ] When to represent vs. accept chargebacks
- [ ] Evidence requirements for different reason codes
- [ ] Monitoring program triggers and consequences
- [ ] ROI calculation for representment programs

## Related Topics

- [Chargeback Lifecycle](./lifecycle.md) - Detailed process flow
- [Reason Codes](./reason-codes.md) - Complete reference
- [Representment](./representment.md) - Building winning cases
- [Network Programs](../monitoring-programs/network-programs.md) - VDMP, ECP details
