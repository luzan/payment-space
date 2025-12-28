---
title: "Merchant Lifecycle Quiz"
description: "Self-assessment questions for ongoing monitoring, re-verification, enhanced due diligence, and merchant lifecycle management"
sidebar_position: 10
keywords:
  - merchant lifecycle quiz
  - ongoing monitoring quiz
  - EDD quiz
  - re-verification
  - KYC refresh
---

# Merchant Lifecycle Quiz

Test your understanding of ongoing monitoring, re-verification, enhanced due diligence, and merchant lifecycle management.

---

## Ongoing Monitoring & Re-verification

### Question 28

**How often should KYC/KYB information be re-verified? What events trigger immediate re-verification?**

<details>
<summary>View Answer</summary>

**Re-Verification Frequency by Risk Level:**

| Risk Level | Traditional Schedule | Event-Driven | Perpetual KYC |
|------------|---------------------|--------------|---------------|
| **Low Risk** | Every 3-5 years | Trigger-based only | Continuous data feeds |
| **Medium Risk** | Annually | Annual + triggers | Continuous + annual cert |
| **High Risk** | Quarterly/Continuous | Continuous | Real-time feeds + quarterly review |
| **PEPs** | Continuous | Continuous | Real-time sanctions + adverse media |
| **High-Volume (>$10M)** | Annually | Semi-annual + triggers | Continuous + semi-annual audit |

**Risk Level Factors:**

- Transaction volume and average ticket
- Industry (high-risk vs low-risk MCC)
- Geographic exposure (cross-border, sanctioned regions)
- Chargeback/fraud history
- Business longevity and credit history
- Beneficial owner profiles (PEPs, sanctions, criminal records)

**Immediate Re-Verification Triggers:**

| # | Trigger | Example |
|---|---------|---------|
| 1 | **Ownership Change** | >25% beneficial ownership transfer |
| 2 | **Adverse Media** | Negative news (fraud allegations, lawsuits, regulatory actions) |
| 3 | **Sanctions Match** | Owner appears on OFAC/UN/EU sanctions lists |
| 4 | **Credit Deterioration** | Bankruptcy, judgments, liens filed |
| 5 | **Regulatory Action** | FTC complaint, state AG investigation, license suspension |
| 6 | **Business Model Change** | Shift to different MCC, product offerings, fulfillment |
| 7 | **Volume Spike** | >50% increase above underwriting projections |
| 8 | **Network Monitoring** | Placement in VAMP, ECM, or EFM programs |
| 9 | **Chargeback/Fraud Spike** | Ratios exceed internal thresholds |
| 10 | **Address Change** | New physical location or registered agent |

**Best Practice:** Implement **perpetual KYC** using continuous data feeds (corporate registries, sanctions lists, adverse media) to detect changes in real-time rather than waiting for scheduled reviews.

**Regulatory Framework:**

| Regulation | Requirement | Frequency |
|------------|-------------|-----------|
| **BSA/AML** | Customer due diligence (CDD) and ongoing monitoring | Continuous |
| **USA PATRIOT Act § 326** | Customer Identification Program (CIP) verification | Initial + triggers |
| **FinCEN CDD Rule** | Beneficial ownership verification | Initial + material changes |
| **OFAC** | Sanctions screening | Continuous (daily/real-time) |
| **PCI DSS 4.0** | Quarterly scans, annual assessment | Quarterly/Annual |
| **Card Network Rules** | Fraud/chargeback monitoring (VAMP, ECM, EFM) | Monthly |

**Why This Matters:** Risk is dynamic—a merchant approved today may become risky tomorrow. Continuous monitoring ensures emerging risks are detected before they cause significant damage to the portfolio.

**Related Topic:** [Ongoing Monitoring](./ongoing-monitoring.md) - See "Periodic KYC/KYB Refresh" section

</details>

---

### Question 29

**A merchant notifies you of a business address change. Walk through the steps to verify and update this information. What risk factors do you assess?**

<details>
<summary>View Answer</summary>

**Address Change Verification Process:**

**Step 1: Receive Notification**

- Merchant self-reports via portal, email, or phone
- OR detected through automated monitoring (USPS NCOA, corporate registry updates)

**Step 2: Request Documentation**

- Updated business license or certificate of good standing showing new address
- Utility bill (electric, water, gas) at new address
- Lease agreement or property deed
- Secretary of State filing confirmation (if registered agent changed)

**Step 3: Verify New Location**

| Check | Method | What to Look For |
|-------|--------|------------------|
| Physical Verification | Google Street View or site visit | Business operates at stated address |
| Zoning Check | Local records | Address zoned for business operations |
| Geographic Risk | Internal analysis | High-fraud region or sanctioned area? |
| Landlord Verification | Contact property owner | Confirm business operates there |

**Step 4: Re-Screen**

- **OFAC Sanctions:** New address in sanctioned country/region?
- **State Licensing:** Does new state require additional licenses (sales tax, money transmission)?
- **Network Rules:** Cross-border implications (domestic → international)?

**Step 5: Assess Risk Factors**

| Risk Factor | Low Risk Example | High Risk Example |
|-------------|------------------|-------------------|
| **Location Type** | Commercial office space | Virtual office/mail drop |
| **Geographic Region** | Same city/state | Moved to high-fraud state/country |
| **Timing** | Gradual relocation (30+ days notice) | Sudden/immediate move |
| **Business Model Fit** | Retail store to larger retail space | E-commerce to residential address |
| **Historical Behavior** | First move in 5 years | Third move in 12 months |
| **Performance** | Low chargebacks, stable volume | Recent chargeback spike |

**Step 6: Update Records**

- Merchant profile in payment platform
- Merchant agreement (if address is contractual term)
- Bank account verification (if settlement bank changed due to relocation)
- Tax jurisdiction (sales tax, state income tax)

**Step 7: Communicate**

- Confirm address update to merchant
- Notify relevant parties (sponsor bank if PayFac, acquirer if ISO)

**Step 8: Enhanced Monitoring (if Risk Detected)**

- If high-risk move (e.g., virtual office, high-fraud region), activate enhanced transaction monitoring for 90 days
- Lower velocity limits temporarily
- Increase manual review thresholds

**Red Flags Requiring EDD or Suspension:**

- Address is mail drop/UPS Store/virtual office (not valid for most business types)
- New address in sanctioned country (OFAC violation)
- Merchant has multiple rapid address changes (potential fraud)
- Cannot verify physical business presence at new location
- Address change coincides with other red flags (ownership change, volume spike, chargeback increase)

**Why This Matters:** Address changes are often legitimate business operations, but they can also be indicators of fraud or merchant distress. Systematic verification protects against both.

**Related Topic:** [Ongoing Monitoring](./ongoing-monitoring.md) - See "Business Change Monitoring" section

</details>

---

### Question 30

**A merchant's chargeback ratio increases from 0.3% to 1.8% over two months. Detail the re-underwriting process and factors you evaluate.**

<details>
<summary>View Answer</summary>

**Re-Underwriting Process for Elevated Chargeback Ratio:**

**Step 1: Immediate Actions**

- **Alert Triggered:** Merchant exceeds 1.5% chargeback ratio (ECM threshold)
- **Contact Merchant:** Notify within 24-48 hours of detection
- **Implement Temporary Controls:**
  - Reduce daily processing limit (e.g., $50K → $20K)
  - Increase rolling reserve (5% → 15-20%)
  - Switch to daily settlement (instead of T+2)
  - Flag high-ticket transactions for manual review

**Step 2: Root Cause Analysis**

**Chargeback Reason Code Breakdown:**

| Reason Code Category | Typical % | Root Cause |
|----------------------|-----------|------------|
| **Fraud (10.4, 4837)** | 60% | Card testing, account takeover, stolen cards |
| **Product Not Received (13.1, 4855)** | 25% | Shipping delays, tracking issues, fulfillment problems |
| **Product Unsatisfactory (13.3, 4853)** | 10% | Quality issues, misleading descriptions |
| **Duplicate Processing (12.6, 4834)** | 3% | Technical error, duplicate submission |
| **Cancelled Recurring (13.2, 4841)** | 2% | Subscription billing after cancellation |

**Step 3: Investigate Business Changes**

- **Volume Spike?** Rapid growth attracts more fraud
- **Product Changes?** New products with higher return rates
- **Marketing Changes?** New ad campaigns attracting different customer base
- **Fulfillment Changes?** Switched to slower shipping method
- **Website Changes?** Unclear refund policy, misleading product descriptions
- **Ownership/Staff Changes?** New management unfamiliar with fraud prevention

**Step 4: Request Re-Underwriting Documentation**

**Required Documents:**

1. **Chargeback Analysis:**
   - Breakdown by reason code
   - Merchant's explanation for increase
   - Remediation plan (specific actions, timeline)

2. **Business Operations:**
   - Last 3 months bank statements (verify volume, refunds)
   - Shipping/fulfillment records (tracking, delivery times)
   - Refund policy (website screenshots, terms of service)
   - Customer service records (complaints, resolution times)

3. **Financial Health:**
   - Updated business credit report
   - Updated personal credit report (beneficial owners)
   - Financial statements (if available)

4. **Fraud Prevention Measures:**
   - Current fraud tools in use (AVS, CVV, 3DS, fraud scoring)
   - Internal fraud policies and training
   - Willingness to implement additional tools

**Step 5: Evaluate Re-Underwriting Factors**

**Favorable Factors (May Continue with Conditions):**

- Chargeback increase is recent (last 2 months) and identified early
- Merchant is cooperative, provides clear explanation
- Root cause is fixable (e.g., shipping delays now resolved)
- Merchant agrees to implement fraud tools (3DS, Kount, stricter AVS/CVV)
- Financial health remains strong (good credit, profitable)
- Prior history was excellent (0.3% chargeback ratio for 12+ months)

**Unfavorable Factors (Likely Termination):**

- Chargebacks are fraud-related (10.4, 4837) indicating compromised security
- Merchant is unresponsive or dismissive
- Root cause is unfixable (business model fundamentally flawed)
- Merchant refuses to implement fraud prevention
- Credit deterioration (personal/business bankruptcy, judgments)
- Pattern of prior issues (this is third chargeback spike)

**Step 6: Decision Matrix**

| Chargeback Ratio | Trend | Cooperation | Decision |
|------------------|-------|-------------|----------|
| 1.5-2.0% | Stabilizing/Declining | Excellent | **Conditional Approval:** Increase reserves, implement fraud tools, 90-day probation |
| 1.5-2.0% | Increasing | Poor | **Suspend:** Pending investigation/remediation |
| 2.0-3.0% | Any | Excellent | **Suspend:** Only resume if ratio drops below 1.0% within 60 days |
| 2.0-3.0% | Any | Poor | **Terminate:** Unacceptable risk |
| >3.0% | Any | Any | **Immediate Termination:** HECM threshold, portfolio risk |

**Step 7: Implementation (Conditional Approval Example)**

**Updated Terms:**

- **Rolling Reserve:** Increase from 5% to 20% for 90 days
- **Daily Limit:** Reduce from $50K to $30K until chargeback ratio &lt;1.0%
- **Settlement:** Daily (instead of T+2) to reduce exposure
- **Fraud Tools:** Mandatory 3DS for transactions >$100 or international cards
- **Monitoring:** Weekly chargeback ratio review (instead of monthly)
- **Probation:** 90 days to demonstrate improvement

**Step 8: Ongoing Monitoring**

- **Weekly Reports:** Chargeback ratio, volume, transaction patterns
- **60-Day Review:** Assess progress
  - **Success (ratio &lt;1.0%):** Gradually relax controls
  - **Failure (ratio >1.5%):** Proceed to termination
- **90-Day Review:** Final assessment

**Network Consequences at 1.8%:**

- **Visa VAMP:** Merchant is in "excessive" territory (>1.5%)
- **Mastercard ECM:** At 1.8%, qualifies for ECM program
- **Consequences:** Monthly fines, required remediation, potential MATCH listing

**Why This Matters:** Chargeback spikes require immediate action. Waiting increases financial exposure, risks network penalties, and can jeopardize the entire portfolio if not addressed quickly.

**Related Topics:**
- [Ongoing Monitoring](./ongoing-monitoring.md) - See "Network Monitoring Programs" section
- [Risk Factors](../underwriting/risk-factors.md) - Chargeback risk indicators

</details>

---

### Question 31

**What is Enhanced Due Diligence (EDD)? List 10 specific scenarios that would trigger EDD for a merchant.**

<details>
<summary>View Answer</summary>

**Enhanced Due Diligence (EDD) Definition:**

EDD is an **intensive investigation process** applied to merchants exhibiting high-risk indicators or suspicious activity. EDD goes beyond standard KYC/underwriting by requiring additional documentation, enhanced verification procedures, and deeper analysis of beneficial owners and business operations.

**Purpose:**

- Mitigate risk of fraud, money laundering, terrorist financing, sanctions violations
- Comply with AML/BSA regulatory requirements
- Protect payment provider from financial and reputational damage
- Make informed decision on account continuation

**EDD Process Components:**

1. **Enhanced Documentation:** UBO declarations, financial statements, source of funds verification
2. **Enhanced Verification:** Site visits, video calls with beneficial owners, reference checks
3. **Enhanced Screening:** Deep sanctions search, PEP family/associates, multi-year adverse media
4. **Risk Assessment Update:** Re-score merchant, identify mitigation strategies
5. **Decision & Documentation:** Approve, conditionally approve, or terminate
6. **Ongoing Enhanced Monitoring:** More frequent reviews, lower alert thresholds

---

**10 Specific EDD Trigger Scenarios:**

**1. Beneficial Owner PEP Identification**

- **Scenario:** Background check reveals a 30% beneficial owner is a **Politically Exposed Person (PEP)**—former state senator now in private sector
- **Risk:** Increased corruption, bribery, money laundering risk
- **EDD Actions:** Enhanced sanctions screening (family, close associates), adverse media search (5-10 years), source of wealth verification, senior management approval

---

**2. OFAC Sanctions List Match**

- **Scenario:** Ongoing sanctions screening identifies a **beneficial owner match** to OFAC Specially Designated Nationals (SDN) list (90% name match + same DOB)
- **Risk:** Legal prohibition on doing business, severe penalties ($250K+ per violation)
- **EDD Actions:** Immediate account suspension, manual verification of match accuracy, legal counsel consultation, OFAC reporting if confirmed match

---

**3. Chargeback Ratio Spike**

- **Scenario:** Merchant's chargeback ratio increases from **0.4% to 1.6% in 60 days**, primarily fraud-related reason codes (10.4, 4837)
- **Risk:** Fraud ring, compromised security, network monitoring program placement
- **EDD Actions:** Chargeback reason code analysis, site visit to verify physical location, fraud tool audit, financial statement review, consideration of termination

---

**4. Volume Increase >100%**

- **Scenario:** Merchant approved for $200K/month is processing **$500K/month** within 90 days of activation
- **Risk:** Business model change, fraud, stolen goods, money laundering
- **EDD Actions:** Request explanation and supporting documentation (marketing campaigns, contracts, inventory receipts), bank statement verification, credit check update, potential re-underwriting

---

**5. Ownership Change >25%**

- **Scenario:** Merchant notifies that the **sole proprietor sold 40% ownership** to a new partner
- **Risk:** New beneficial owner introduces unknown risk (criminal history, poor credit, PEP status)
- **EDD Actions:** Full KYC on new owner (background check, credit check, OFAC screening), updated UBO declaration, corporate structure chart, re-underwriting of entire business

---

**6. Bankruptcy Filing**

- **Scenario:** Credit monitoring alert reveals **beneficial owner filed Chapter 7 personal bankruptcy** 30 days ago
- **Risk:** Inability to cover chargebacks/refunds, potential fraud to generate cash flow
- **EDD Actions:** Request bankruptcy documentation, assess impact on business operations, review financial statements, consider reserve increase or termination

---

**7. Adverse Media—Fraud Allegations**

- **Scenario:** Adverse media monitoring detects **news article alleging merchant sold counterfeit products**, with BBB complaints and pending lawsuit
- **Risk:** Regulatory action, chargebacks, reputational damage, potential criminal charges
- **EDD Actions:** Independent research (BBB, FTC, state AG), contact merchant for explanation, site visit to verify inventory authenticity, consider suspension pending resolution

---

**8. MCC Code Mismatch**

- **Scenario:** Transaction analysis reveals merchant approved for **MCC 5999 (Miscellaneous Retail)** is processing **80% of volume as MCC 5816 (Digital Games)**
- **Risk:** Interchange optimization fraud, prohibited product sales, network rule violations
- **EDD Actions:** Website review, transaction sample analysis, merchant explanation, re-underwriting for correct MCC, potential interchange penalties

---

**9. Website Content Violation**

- **Scenario:** Routine website monitoring detects **prohibited products** (CBD) added to e-commerce site, not disclosed during underwriting
- **Risk:** Network rule violations, regulatory action, chargebacks
- **EDD Actions:** Contact merchant immediately, request removal of prohibited content, verify compliance, consider termination if merchant refuses or product is illegal

---

**10. Regulatory Action Notification**

- **Scenario:** Merchant receives **FTC investigation notice** for deceptive marketing practices (auto-renewal subscriptions without clear disclosure)
- **Risk:** Fines, chargebacks, cease-and-desist order, reputational damage
- **EDD Actions:** Request copy of FTC notice, legal review, assess chargeback/refund trends, implement enhanced monitoring, increase reserves, potential termination if FTC finds violations

---

**Additional EDD Triggers (Beyond 10):**

| # | Trigger | Description |
|---|---------|-------------|
| 11 | **Geographic Risk** | Merchant begins processing 50%+ volume from high-fraud countries |
| 12 | **Multiple Rapid Changes** | Address, ownership, bank account all changed within 90 days |
| 13 | **Refund Ratio >20%** | Indicates quality issues, buyer remorse, or refund fraud |
| 14 | **Data Breach Notification** | Merchant reports compromise of cardholder data |
| 15 | **PCI Non-Compliance** | Merchant fails PCI SAQ or quarterly scan |
| 16 | **Network Program Placement** | Visa VAMP, Mastercard ECM/EFM |
| 17 | **High-Value Fraud** | Single fraudulent charge >$10K |
| 18 | **Identity Theft Report** | Cardholder claims identity stolen, used at this merchant |
| 19 | **License Suspension** | State suspends business or industry-specific license |
| 20 | **Customer Complaints** | Pattern of BBB or social media complaints |

**EDD Outcome Options:**

- **Cleared:** Investigation finds no significant risk, return to standard monitoring
- **Conditional Approval:** Continue with enhanced controls (reserves, limits, manual review)
- **Termination:** Unacceptable risk, close account with reserve hold

**Why This Matters:** EDD protects against fraud, money laundering, and regulatory violations while creating an audit trail for compliance. A robust EDD process separates good merchants with temporary issues from bad actors who threaten the portfolio.

**Related Topic:** [Ongoing Monitoring](./ongoing-monitoring.md) - See "Enhanced Due Diligence (EDD)" section

</details>

---

### Question 32

**Scenario:** A merchant originally underwrote as a retail clothing store ($15K/month, card-present) notifies you they are adding an e-commerce website and expect online sales to reach $150K/month within 60 days. Walk through your risk assessment and decision process.

<details>
<summary>View Answer</summary>

**Risk Assessment & Decision Process:**

---

**Step 1: Recognize Materiality of Change**

**Multiple Material Changes:**

| Change | Original | New | Risk Impact |
|--------|----------|-----|-------------|
| Processing Model | Card-present | Card-not-present | CNP has 3-5x higher chargeback rates |
| Monthly Volume | $15K | $165K (combined) | 1000% increase |
| Risk Profile | Low-risk retail | Higher-risk e-commerce | Fraud rates 10x+ higher for CNP |
| Chargeback Exposure | Minimal | Significant | CNP disputes easier for cardholders |

**Conclusion:** This is **not a simple business change**—it requires **full re-underwriting**.

---

**Step 2: Initial Risk Assessment**

**Red Flags:**

- **Extreme Volume Spike:** 1000% increase in 60 days is highly unusual
- **Channel Shift:** Card-present to CNP fundamentally changes risk
- **Timeline:** 60-day ramp is aggressive (typical e-commerce ramps over 6-12 months)

**Questions to Ask Merchant:**

1. What is driving this change? (Business opportunity, market shift, investor funding?)
2. Do you have e-commerce experience? (First online venture vs existing online presence?)
3. What is your marketing plan? (Organic growth, paid ads, influencer partnerships?)
4. What is your fulfillment plan? (In-stock inventory, drop-ship, pre-order?)
5. What is your product mix? (Same clothing, or new products?)
6. What is your website URL? (For review)
7. What fraud prevention tools will you use? (AVS, CVV, 3DS, fraud scoring?)

---

**Step 3: Request Re-Underwriting Documentation**

**Required Documents:**

1. **Business Plan:**
   - Marketing strategy (how will you drive traffic?)
   - Financial projections (revenue, costs, margins)
   - Competitive analysis

2. **Website Review:**
   - Live URL or staging site
   - Terms of Service (refund policy, shipping terms, privacy policy)
   - Checkout flow (payment page, 3DS implementation)
   - SSL certificate (HTTPS required)

3. **Fulfillment Plan:**
   - Inventory location and quantity
   - Shipping partners (USPS, UPS, FedEx)
   - Average delivery time
   - International shipping?

4. **Financial Updates:**
   - Last 3 months bank statements
   - Updated business credit report
   - Updated personal credit reports (beneficial owners)
   - Source of funding for inventory/marketing

5. **E-commerce Experience:**
   - Prior e-commerce history (other sites, marketplaces like Amazon/eBay)
   - Technical team (in-house developer, agency, DIY)
   - Customer service plan (phone, email, chat)

6. **Fraud Prevention:**
   - What tools are you implementing? (AVS, CVV, 3DS, Kount, Riskified)
   - Internal fraud policies (manual review thresholds)

---

**Step 4: Evaluate Risk Factors**

**Favorable Factors:**

| Factor | Evidence | Risk Mitigation |
|--------|----------|-----------------|
| Established Business | Operating retail store for 5+ years | Track record of legitimacy |
| Low CP Chargeback History | 0.1% chargeback ratio over 3 years | Good business practices |
| Strong Credit | Personal 750+ FICO, business credit current | Financial stability |
| Clear Explanation | Detailed business plan, market research | Legitimate business expansion |
| Professional Website | High-quality design, clear policies | Reduces buyer confusion |
| Fraud Tools | Implementing 3DS, AVS/CVV mandatory | Proactive fraud prevention |

**Unfavorable Factors:**

| Factor | Evidence | Risk Indicator |
|--------|----------|----------------|
| Unrealistic Volume | $15K → $150K in 60 days | Potential fraud, stolen goods |
| No E-commerce Experience | First online venture | Learning curve increases chargebacks |
| Poor Website | Low-quality design, vague policies | Customer confusion |
| Delayed Fulfillment | Pre-order model, 30+ day delivery | High chargeback risk |
| Drop-Shipping | No inventory, ships from third-party | Quality issues, shipping delays |

---

**Step 5: Decision Matrix**

**Scenario A: Favorable Factors Dominate**

**Decision: Conditional Approval**

**Conditions:**

1. **Gradual Ramp:** Start with $30K/month online limit, increase by $30K every 30 days if performance is good
2. **Rolling Reserve:** Implement 10% rolling reserve for CNP transactions (held for 180 days)
3. **Fraud Tools:** Mandatory 3DS for all CNP transactions >$50 or international cards
4. **Enhanced Monitoring:** Weekly chargeback/fraud ratio review for first 90 days
5. **Settlement:** T+3 settlement (instead of T+2) to allow fraud detection window
6. **Manual Review:** Transactions >$500 flagged for manual review
7. **Updated Pricing:** CNP transactions priced at higher rate (e.g., 2.9% + $0.30 vs 1.9% + $0.10 for CP)

---

**Scenario B: Unfavorable Factors Dominate**

**Decision: Decline CNP Processing**

**Reasons:**

- Unrealistic volume projections
- No e-commerce experience
- Poor website quality
- Drop-shipping or pre-order model

**Alternative Offered:**

- **Gradual Pilot:** Start with $5K/month CNP limit for 6 months
- **Proof of Concept:** Demonstrate ability to manage CNP sales with low chargebacks
- **Re-apply:** After 6 months of successful pilot, re-apply for higher limits

---

**Scenario C: Mixed Factors**

**Decision: Approve with Strict Controls**

**Hybrid Approach:**

1. **Continue Card-Present:** Existing $15K/month retail processing
2. **Separate MID for CNP:** Create new Merchant ID for e-commerce (isolate risk)
3. **Conservative CNP Limit:** Start with $20K/month CNP, increase gradually
4. **High Rolling Reserve:** 15-20% rolling reserve for CNP
5. **Mandatory Fraud Tools:** 3DS, AVS/CVV, fraud scoring
6. **Frequent Reviews:** Bi-weekly reviews for first 90 days

**Rationale:**

- Merchant has strong card-present track record (favorable)
- E-commerce is unproven (unfavorable)
- Separate MID isolates CNP risk from established CP business

---

**Step 6: Implementation Timeline (Conditional Approval)**

| Timeline | Action | Success Criteria |
|----------|--------|------------------|
| Day 1 | Notify merchant of conditional approval | N/A |
| Day 3 | Merchant accepts terms, signs amendment | Agreement signed |
| Day 7 | CNP processing activated ($30K limit) | Technical integration complete |
| Day 30 | First review | Chargeback &lt;1.0%, fraud &lt;0.5% |
| Day 60 | Second review | If good: increase to $60K |
| Day 90 | Final probation review | If good: increase to $150K, reduce reserve |

---

**Step 7: Ongoing Monitoring**

**Key Metrics:**

| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| Chargeback Ratio (CNP) | &lt;0.75% | &gt;1.0% |
| Fraud Ratio (CNP) | &lt;0.5% | &gt;0.5% |
| Refund Ratio | &lt;15% | &gt;20% |
| Average Ticket | $50-75 | >$150 |
| Decline Rate | &lt;10% | &gt;15% |

**Red Flags for Immediate Suspension:**

- Chargeback ratio >2.0% in any 30-day period
- Fraud ratio >1.0%
- Customer complaints about non-delivery, counterfeit products
- Website changes to prohibited products
- Merchant becomes unresponsive

---

**Step 8: Documentation**

**Underwriting File Must Include:**

- Initial application and retail approval documentation
- Notification of business model change
- Re-underwriting documentation (business plan, website review, financials)
- Risk assessment summary
- Decision rationale
- Updated merchant agreement
- Monitoring plan and review schedule

---

**Key Takeaway:**

Business model changes are not simple profile updates. A shift from card-present retail to card-not-present e-commerce fundamentally changes risk and requires **full re-underwriting**. Never approve material changes without:

1. Understanding the business rationale
2. Evaluating updated risk factors
3. Implementing appropriate controls (reserves, limits, monitoring)
4. Documenting the decision thoroughly

**When in doubt, start conservatively.** It's easier to increase limits for a successful merchant than to recover losses from a fraudulent one.

**Why This Matters:** The combination of processing model change AND massive volume increase represents significant risk. Proper re-underwriting protects against catastrophic losses while supporting legitimate business growth.

**Related Topics:**
- [Ongoing Monitoring](./ongoing-monitoring.md) - See "Re-Underwriting Process" section
- [Risk Factors](../underwriting/risk-factors.md) - Card environment risk

</details>

---

## Related Study Materials

- [Merchant Agreements](./merchant-agreements.md) - Contractual framework for monitoring obligations
- [Ongoing Monitoring](./ongoing-monitoring.md) - Complete monitoring reference
- [Underwriting Fundamentals](../underwriting/fundamentals.md) - Initial KYC/KYB processes
- [Risk Factors](../underwriting/risk-factors.md) - Risk indicators and scoring
- [KYC/KYB Index](../kyc-kyb/index.md) - Identity verification requirements

---

> **Next:** Return to [Merchant Onboarding Overview](/onboarding/) for the complete module.
