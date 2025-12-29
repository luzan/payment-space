---
title: "PayFac Considerations Quiz"
description: "Test your understanding of sponsor delegation, portfolio risk, network requirements, and PayFac-specific operations"
sidebar_position: 6
sidebar_label: "Quiz"
keywords:
  - PayFac quiz
  - sponsor delegation quiz
  - portfolio risk quiz
  - VAMP quiz
  - network requirements
---

# PayFac Considerations Quiz

> **Instructions:** This quiz covers all topics in the PayFac Considerations module. Click on each question to reveal the answer with detailed explanations. Try to answer before looking at the solution.

## Section 1: Sponsor Delegation

### Question 1: Delegation Scope

**A new PayFac is negotiating with a sponsor bank. What functions can the PayFac expect to handle itself, and what will the sponsor bank retain control over?**

<details>
<summary>Answer</summary>

**Delegated to PayFac:**
- Sub-merchant underwriting and approval
- KYC/KYB verification
- Sanctions screening (OFAC, PEP)
- Ongoing transaction monitoring
- MATCH list queries and reporting
- Chargeback management and representment

**Retained by Sponsor Bank:**
- PayFac application approval
- Portfolio-level risk limits
- Card network registration (PayFac operates under sponsor's network agreements)
- Ultimate network liability and fines
- Regulatory examination authority
- Settlement and funding
- Right to terminate PayFac relationship

**Key Principle:** PayFac handles day-to-day sub-merchant operations; sponsor retains strategic oversight and ultimate liability to networks and regulators.
</details>

---

### Question 2: Adding High-Risk MCCs

**Your PayFac currently processes low-risk retail merchants. A major platform partner wants you to add online gambling (MCC 7995) sub-merchants. Can you proceed? What's required?**

<details>
<summary>Answer</summary>

**No, you cannot proceed unilaterally.**

**Required Approvals:**
1. Sponsor bank approval to modify underwriting policy
2. Amendment to PayFac agreement adding MCC 7995
3. VIRP Tier 1 registration for each sub-merchant

**Additional Requirements:**
- **VIRP Fees:** $950 registration per sub-merchant + Integrity Risk Fee ($0.10/txn + 0.10% volume)
- **Enhanced Due Diligence:** Additional verification and documentation
- **Increased Reserves:** Likely 15-25% vs typical 5-10%
- **Licensing Verification:** Gambling requires jurisdictional licenses
- **Sponsor Risk Appetite:** Many sponsor banks won't approve gambling at all

**Key Lesson:** High-risk MCCs fundamentally change the PayFac program. Sponsor bank controls which MCCs are allowed.
</details>

---

### Question 3: Complete Underwriting File

**During the annual sponsor bank audit, what documentation should a complete sub-merchant underwriting file contain?**

<details>
<summary>Answer</summary>

**Identity Verification (KYC):**
- Government ID copy (front/back) for principals
- ID verification results from approved vendor
- Liveness check results with timestamp
- Verification method documentation

**Business Verification (KYB):**
- Articles of incorporation/formation documents
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

**Risk Assessment:**
- Risk scoring input and output
- MCC assignment rationale
- Processing volume projections
- Reserve calculation

**Decision Documentation:**
- Approval/decline decision with rationale
- Underwriter notes (if manual review)
- Exception approvals (if any)

**Merchant Agreement:**
- Signed application
- Signed MPA/terms
- Pricing schedule

**Missing any component = audit finding.**
</details>

---

### Question 4: Onboarding Freeze Triggers

**List five scenarios that could trigger a sponsor bank to freeze your PayFac's new sub-merchant onboarding.**

<details>
<summary>Answer</summary>

**Performance Triggers:**
1. Portfolio chargeback ratio exceeding 1.0-1.5%
2. Fraud losses exceeding agreed thresholds
3. High-risk MCC concentration breaching limits

**Compliance Triggers:**
4. Material audit findings (incomplete KYC files, policy violations)
5. VAMP or ECP program entry at portfolio level
6. Sanctions screening failures discovered

**Operational Triggers:**
7. System failures affecting monitoring capabilities
8. Key personnel departures (compliance officer, risk manager)
9. Financial distress of the PayFac itself

**Network Triggers:**
10. Network remediation orders
11. Network audit findings

**Typical Duration:** Freeze remains until remediation plan is approved and implemented (30-90 days depending on severity).
</details>

---

## Section 2: Portfolio Risk Management

### Question 5: Chargeback Ratio Calculation

**Your PayFac processed 500,000 transactions last month with 3,000 chargebacks. Calculate the chargeback ratio and determine which network programs are triggered.**

<details>
<summary>Answer</summary>

**Calculation:**
```
Chargeback Ratio = Chargebacks / Transactions
= 3,000 / 500,000
= 0.60%
```

**Network Programs Triggered:**

**Visa VAMP (Acquirer Level):**
- At 0.60%, the PayFac **exceeds the 0.50% Excessive threshold**
- This triggers VAMP at the acquirer/portfolio level
- Monthly fines of $25,000 - $100,000+
- 60-90 day remediation period required
- Action: Immediate remediation plan required

**Mastercard ECP (Merchant Level):**
- At 0.60% portfolio aggregate, ECP is NOT triggered (ECP applies to individual merchants)
- ECM threshold is 1.5% + 100 chargebacks (OR logic)
- HECM threshold is 3.0% + 300 chargebacks
- PayFac must audit individual sub-merchant CBRs to identify any ECM triggers
- Individual high-CBR merchants may trigger ECM even if portfolio aggregate seems acceptable

**Key Distinction:**
- VAMP applies at **acquirer/portfolio level** (0.50% threshold for PayFacs)
- ECP applies at **individual merchant level** (1.5%/3.0% thresholds)

**Required Actions:**
- Identify top 20 merchants by chargeback volume
- Target portfolio below 0.40% for safety margin
- Tighten underwriting for new sub-merchants
- Implement enhanced fraud tools
- Communicate proactively with sponsor bank
</details>

---

### Question 6: Concentration Risk Analysis

**Your portfolio has 40% of volume in travel agencies (MCC 4722) and 25% in nutraceuticals (MCC 5967). Analyze the concentration risk and recommend actions.**

<details>
<summary>Answer</summary>

**Critical Concentration Risk - Immediate Action Required**

**Travel (40% - MCC 4722):**
- Vulnerable to external shocks (COVID-19 example)
- Future delivery risk (bookings made now, travel later)
- Economic downturns hit discretionary travel first
- Single event could wipe out 40% of portfolio

**Nutraceuticals (25% - MCC 5967):**
- VIRP Tier 1 classification
- $950 registration + $0.10/txn + 0.10% volume fees
- Regulatory risk (FDA enforcement)
- High chargeback category historically

**Combined Exposure:** 65% of portfolio in two high-risk categories

**Recommended Actions:**

1. **Immediate:** Freeze new onboarding in both MCCs
2. **30 Days:** Stress test portfolio against industry failure scenarios
3. **60 Days:** Target diversification - recruit low-risk MCCs (professional services, SaaS, card-present retail)
4. **90 Days:** Set hard limits - max 20% concentration per MCC
5. **Ongoing:** Proactively inform sponsor bank of concentration and remediation plan
</details>

---

### Question 7: Reserve Types Distinction

**A sub-merchant fails and leaves $50,000 in chargebacks. Explain how reserves at both levels would cover this loss.**

<details>
<summary>Answer</summary>

**Two Reserve Types Applied:**

**Step 1: Sub-Merchant Reserve (Held by PayFac)**
- PayFac has been withholding 10% of sub-merchant's settlements
- If sub-merchant processed $300k total, reserve = $30k
- Apply $30k to cover chargebacks
- Remaining exposure: $50k - $30k = $20k

**Step 2: PayFac Operating Capital**
- PayFac covers remaining $20k from operating capital
- PayFac attempts recovery from sub-merchant (collection efforts)
- If sub-merchant is insolvent, PayFac absorbs loss

**Step 3: Portfolio Reserve (Held by Sponsor - Backstop)**
- If PayFac cannot cover (financial distress)
- Sponsor bank draws from PayFac's portfolio reserve
- Portfolio reserve typically 5-10% of monthly volume
- This protects sponsor from PayFac failure

**Key Distinction:**
- Sub-merchant reserves protect **PayFac** from individual failures
- Portfolio reserve protects **sponsor bank** from PayFac failure or systemic events

**Lesson:** Adequate sub-merchant reserves (especially for future delivery merchants) prevent drawing on portfolio reserves.
</details>

---

### Question 8: Network Program Comparison

**Compare Visa VAMP and Mastercard ECP: thresholds, how they're applied, fines, and remediation requirements.**

<details>
<summary>Answer</summary>

| Aspect | Visa VAMP | Mastercard ECP |
|--------|-----------|----------------|
| **Application Level** | Acquirer/Portfolio (0.50% for PayFacs) | Merchant level (ECM at 1.5%, HECM at 3.0%) |
| **Threshold Logic** | AND logic (ratio + count) | OR logic (ratio OR count) |
| **Excessive Threshold** | 0.50% (acquirer level) | ECM: 1.5% OR 100 CBs; HECM: 3.0% OR 300 CBs |
| **Fines** | $25,000-$100,000+/month | $1,000-$200,000 depending on tier |
| **Remediation Period** | 60-90 days | 4 months with milestones |
| **2026 Changes** | Merchant-level tightening to 0.9% | No announced changes |

**Key Differences for PayFacs:**

1. **VAMP is portfolio-wide:** PayFacs are monitored at the acquirer level with 0.50% threshold - much stricter than individual merchant thresholds
2. **ECP targets merchants:** Individual high-CBR merchants trigger ECM/HECM, but PayFac must manage them
3. **VAMP fines are higher:** Portfolio-level violations carry larger penalties ($25k+ vs starting at $1k)
4. **Different threshold logic:** VAMP uses AND logic (ratio + count), ECP uses OR logic (ratio OR count)

**Practical Impact:** A PayFac at 0.55% portfolio CBR is in VAMP Excessive tier and facing $25k+ monthly fines, even if no individual merchant exceeds 1.5%.
</details>

---

## Section 3: Network Requirements

### Question 9: VIRP Tier 1

**What is VIRP Tier 1, which MCCs are included, and how does it impact sub-merchant economics?**

<details>
<summary>Answer</summary>

**VIRP = Visa Integrity Risk Program**

**Tier 1 MCCs (Highest Risk):**
- 5967 - Direct Selling (Nutraceuticals)
- 7995 - Gambling
- 7273 - Dating/Escort Services
- 5122 - Pharmaceuticals (certain types)

**Requirements:**
- **Registration:** $950 per sub-merchant registration fee
- **Integrity Risk Fee:** $0.10 per transaction + 0.10% of volume
- **Enhanced Due Diligence:** Additional documentation
- **Sponsor Approval:** Explicit approval required

**Impact on Sub-Merchant Economics:**

Example: Sub-merchant processing $50k/month, 2,000 transactions

| Item | Cost |
|------|------|
| Registration (one-time) | $950 |
| Monthly Integrity Fee (txn) | $200 (2,000 × $0.10) |
| Monthly Integrity Fee (volume) | $50 ($50k × 0.10%) |
| **Total Monthly Extra Cost** | **$250** |

**Break-Even Analysis:**
- At $50k/month, extra 0.5% cost ($250/$50k)
- Small-volume merchants (under $20k/month) become uneconomical
- PayFacs may set minimum volume requirements for VIRP Tier 1 MCCs
</details>

---

### Question 10: VAMP 2026 Changes

**Visa is tightening VAMP thresholds in 2026. What's changing and how should PayFacs prepare?**

<details>
<summary>Answer</summary>

**The Change:**
- Current Standard threshold: 0.9% dispute ratio + 500 disputes (early warning), 1.8% (excessive)
- **2026:** Standard threshold tightening to **0.9%** as the new standard (not just early warning)
- PayFacs currently at 0.9-1.5% will suddenly be in violation

**Preparation Actions:**

**Immediate (Now):**
1. Assess current portfolio CBR - know your baseline
2. Identify all merchants >0.5% individual CBR
3. Implement enhanced monitoring dashboards

**6-12 Months Before:**
4. Tighten underwriting - increase approval thresholds
5. Target portfolio CBR below 0.75% (buffer for fluctuation)
6. Implement automated fraud prevention tools
7. Train sub-merchants on chargeback prevention

**3-6 Months Before:**
8. Terminate persistently high-CBR merchants
9. Increase reserves on medium-risk merchants
10. Stress test: What if CBR spikes 0.2%?

**Communication:**
- Discuss readiness plan with sponsor bank
- Document all preparation efforts (audit trail)
</details>

---

### Question 11: Sub-Merchant Identification

**A cardholder sees "PAY*SUBMERCHANT" on their statement and disputes the charge claiming they don't recognize it. Explain descriptor requirements and why they matter.**

<details>
<summary>Answer</summary>

**Descriptor Requirements:**

Networks require clear identification of both PayFac and sub-merchant:

**Format:** `PayFac*SubMerchant` or `PAY*SubMerchantName`
- First part identifies PayFac
- Second part identifies actual merchant
- DBA must match registered business name

**Why It Matters:**

1. **Chargeback Routing:** Networks and issuers route chargebacks based on MID. Sub-merchant identifier ensures PayFac can route to correct sub-merchant.

2. **Cardholder Recognition:** Clear descriptors reduce "friendly fraud" - customers disputing legitimate charges they don't recognize.

3. **Compliance:** Improper descriptors violate network rules and can trigger fines.

4. **Investigation:** When disputes occur, descriptor helps cardholders identify the purchase.

**Best Practices:**
- Use recognizable sub-merchant names (not legal entity names if different from DBA)
- Include customer service phone number in descriptor
- Test descriptors before going live
- Train sub-merchants on descriptor importance

**Example Issue:** "ACME HOLDINGS LLC" as descriptor when customer bought from "Joe's Coffee Shop" causes confusion and disputes.
</details>

---

## Section 4: Financial & Operational

### Question 12: Financial Requirements

**A startup wants to become a PayFac processing $5M/month. Estimate the financial requirements: net worth, insurance, and reserves.**

<details>
<summary>Answer</summary>

**Estimated Requirements for $5M/month Processing:**

**Net Worth:**
- Typical range: $1M - $5M required
- For $5M/month: Likely $2M - $3M minimum
- Higher if high-risk MCCs included

**Insurance:**
| Type | Coverage | Est. Annual Premium |
|------|----------|---------------------|
| E&O (Errors & Omissions) | $2M - $5M | $25k - $50k |
| Cyber Liability | $2M - $5M | $20k - $40k |
| Fidelity Bond | $1M | $10k - $20k |
| **Total Annual** | | **$55k - $110k** |

**Reserves:**
- Sub-merchant reserves: Held from sub-merchants (5-15% depending on risk)
- Portfolio reserve: 5-10% of monthly volume held by sponsor
- At $5M/month: $250k - $500k portfolio reserve

**Operating Capital:**
- Cover chargebacks before sub-merchant recovery
- Float for settlement timing (T+2 vs instant payouts)
- Recommended: $500k - $1M+ liquid capital

**Total Capital Requirement:**
```
Net Worth:        $2M - $3M
Insurance:        $55k - $110k/year
Portfolio Reserve: $250k - $500k
Operating Capital: $500k - $1M
Total:            ~$3M - $4.5M+
```
</details>

---

### Question 13: Sub-Merchant Graduation

**A sub-merchant has grown to $500k/month volume over 2 years with excellent performance (0.2% CBR). Should they graduate to direct MID? Analyze the decision factors.**

<details>
<summary>Answer</summary>

**Good Candidate - Graduation Recommended**

**Benefits of Graduation:**
1. **Better Rates:** Direct merchant status = lower interchange, no PayFac markup
2. **Higher Limits:** No PayFac volume caps
3. **Direct Relationship:** Bank relationship, credit building
4. **Customization:** More control over descriptor, settlement timing

**Decision Factors:**

| Factor | Assessment |
|--------|------------|
| Volume | $500k/month exceeds typical PayFac limits |
| Performance | 0.2% CBR is excellent |
| Time in Business | 2 years = established |
| Processing History | Proven track record |
| Business Stability | Ready for direct relationship |

**Graduation Process:**
1. Sponsor bank or new acquirer provisions direct MID
2. Technical integration (gateway, terminal)
3. Transition period (run both in parallel)
4. Contractual wind-down with PayFac

**PayFac Considerations:**
- Revenue impact (losing profitable merchant)
- Contractual early termination fees?
- Ongoing relationship potential (referral, partnership)
- Volume impact on portfolio metrics

**Recommendation:** Facilitate graduation - good for merchant, maintains relationship goodwill. Consider affiliate/referral arrangement.
</details>

---

### Question 14: Chargeback Flow

**A cardholder disputes a $500 transaction. Walk through how the chargeback flows in the PayFac model and who bears financial responsibility at each stage.**

<details>
<summary>Answer</summary>

**Chargeback Flow:**

```
1. Cardholder → Issuing Bank (disputes charge)
2. Issuing Bank → Card Network (files chargeback)
3. Card Network → Sponsor Bank (routes to acquirer)
4. Sponsor Bank → PayFac MID (PayFac is merchant of record)
5. PayFac → Sub-Merchant (routes internally)
```

**Timeline & Actions:**

| Stage | Timeline | Action |
|-------|----------|--------|
| Dispute Filed | Day 0 | Cardholder contacts issuing bank |
| Chargeback Created | Day 1-3 | Network creates case |
| PayFac Notified | Day 3-5 | Sponsor bank forwards to PayFac |
| Sub-Merchant Notified | Day 5-7 | PayFac routes to sub-merchant (SLA: 24-48 hours) |
| Evidence Collection | Day 7-21 | Sub-merchant provides documentation |
| Representment | Day 21-30 | PayFac represents on behalf of sub-merchant |
| Resolution | Day 45-120 | Network decides |

**Financial Responsibility:**

1. **Sub-Merchant:** Primary liability - provides evidence, pays if lost
2. **Sub-Merchant Reserve:** If sub-merchant can't pay, deducted from reserve
3. **PayFac:** If reserve insufficient, PayFac covers (then pursues recovery)
4. **Portfolio Reserve:** If PayFac fails, sponsor draws from PayFac's portfolio reserve
5. **Sponsor Bank:** Ultimate liability if all above exhausted

**Key Point:** PayFac is contractually liable to sponsor for ALL chargebacks, regardless of sub-merchant's ability to pay.
</details>

---

## Section 5: Scenario Questions

### Question 15: External Shock Response

**Scenario: A major external shock causes all travel and event merchants (20% of your portfolio) to simultaneously face mass chargebacks. Sub-merchant reserves are 10% of their volume. What happens and what should you do?**

<details>
<summary>Answer</summary>

**Immediate Impact:**

If travel/events sub-merchants have $2M monthly volume:
- Mass chargebacks could reach 30-50% of volume ($600k - $1M)
- Sub-merchant reserves cover only 10% ($200k)
- Gap: $400k - $800k hits PayFac directly

**Response Timeline:**

**Day 1-3: Crisis Assessment**
- Quantify exact exposure (which sub-merchants, how much volume at risk)
- Contact sponsor bank immediately - proactive communication
- Freeze new travel/event onboarding
- Assess each sub-merchant's financial position

**Week 1: Containment**
- Implement funding holds on affected sub-merchants
- Accelerate reserve collection where possible
- Begin customer refund coordination
- Document everything for sponsor and regulators

**Week 2-4: Remediation**
- Negotiate with sub-merchants (repayment plans)
- Process refunds to prevent additional chargebacks
- Evaluate which sub-merchants to terminate vs support
- Report progress to sponsor bank weekly

**Lessons Learned:**
1. Future delivery merchants need 15-20%+ reserves, not 10%
2. Concentration limits critical (max 15-20% in any single vulnerable category)
3. Portfolio reserve must account for systemic events
4. Business continuity planning for external shocks

**This is why COVID bankrupted undercapitalized PayFacs - inadequate reserves and concentration risk.**
</details>

---

### Question 16: Audit Finding Response

**Your annual sponsor audit finds that 20% of underwriting files are missing signed beneficial ownership attestations. What are the consequences and required actions?**

<details>
<summary>Answer</summary>

**Finding Classification: Material (Significant Non-Compliance)**

**Consequences:**

1. **Immediate:**
   - Formal finding in audit report
   - Sponsor bank escalation to PayFac leadership
   - Increased monitoring status

2. **Short-term:**
   - Likely onboarding freeze until remediated
   - Corrective action plan required within 30 days
   - Enhanced reporting to sponsor (weekly vs monthly)

3. **Potential:**
   - Reserve increase requirement
   - If not remediated, could escalate to Critical finding
   - Affects future program expansions

**Required Actions:**

**Week 1: Immediate Response**
- Acknowledge finding in writing
- Identify all affected files (get exact list)
- Begin root cause analysis

**Week 2-4: File Remediation**
- Contact affected sub-merchants
- Collect missing attestations
- Update files with documentation

**Week 4-6: Root Cause Fix**
- Identify why attestations were missed (system gap? training issue?)
- Implement controls (automated checklist, workflow gates)
- Update procedures and training

**Week 6-8: Verification**
- Internal audit of remediated files
- Document all corrections
- Submit remediation report to sponsor

**30-60-90 Day Plan:**
- 30 days: All affected files remediated
- 60 days: Controls implemented, training completed
- 90 days: Internal audit verifies ongoing compliance

**Key: Document everything and communicate proactively with sponsor.**
</details>

---

## Scoring Guide

| Score | Assessment |
|-------|------------|
| 14-16 correct | Expert - Ready to operate PayFac compliance |
| 10-13 correct | Proficient - Strong understanding, review gaps |
| 6-9 correct | Developing - Review portfolio risk and network requirements |
| 0-5 correct | Needs Review - Restart module from Sponsor Delegation |

---

## Related Topics

- [Sponsor Delegation](./sponsor-delegation.md) - Understanding delegated responsibilities
- [Portfolio Risk Management](./portfolio-risk.md) - Managing aggregate risk
- [Network Requirements](./network-requirements.md) - Visa/MC specific requirements
- [Sub-Merchant Management](./sub-merchant-management.md) - MID structure and graduation
- [Financial Requirements](./financial-requirements.md) - Capital and insurance requirements

## References

- Visa Payment Facilitator Guidelines
- Mastercard Payment Facilitator Standards
- Visa VAMP Program Documentation
- Mastercard ECP Program Documentation
- VIRP Registration Requirements
