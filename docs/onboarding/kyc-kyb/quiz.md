---
title: "KYC & KYB Quiz"
description: "Test your understanding of identity verification, business verification, beneficial ownership, and sanctions screening requirements"
sidebar_position: 6
sidebar_label: "Quiz"
keywords:
  - KYC quiz
  - KYB quiz
  - beneficial ownership quiz
  - sanctions screening quiz
  - assessment
---

# KYC & KYB Quiz

> **Instructions:** This quiz covers all topics in the KYC & KYB module. Click on each question to reveal the answer with detailed explanations. Try to answer before looking at the solution.

## Section 1: KYC Fundamentals

### Question 1: KYC vs KYB Distinction

**You're onboarding a new merchant, "Green Valley Consulting LLC." The application shows Sarah Chen owns 60% and operates as CEO. What verification processes apply?**

<details>
<summary>Answer</summary>

**Both KYB and KYC are required:**

**KYB (Know Your Business):**
- Verify Green Valley Consulting LLC as legal entity
- Validate Articles of Organization
- Verify EIN with IRS
- Check Secretary of State for good standing
- Review operating agreement

**KYC (Know Your Customer):**
- Verify Sarah Chen's identity (60% owner)
- Government-issued photo ID
- SSN validation
- Address verification
- Sanctions screening (OFAC)
- PEP screening (if applicable)

**Key Concept:** KYB verifies the business entity exists legally. KYC verifies the identity of individual owners. LLCs require both processes, while sole proprietors only need KYC (the individual IS the business).
</details>

---

### Question 2: Documentary vs Non-Documentary Verification

**A sole proprietor provides a clear driver's license photo but lives in a rural area with no credit history. Which verification method(s) should you use?**

<details>
<summary>Answer</summary>

**Recommended approach: Combine both methods**

**Documentary Verification (Primary):**
- Use the driver's license as primary verification
- Extract data via OCR
- Verify authenticity (holograms, microprinting, security features)
- Perform liveness detection to ensure person is present

**Non-Documentary Verification (Supplemental):**
Since the applicant has no credit history (thin-file):
- Contact the customer directly (verify phone number)
- Send mail to address on license (verify mail delivery)
- Check public databases (DMV records, voter registration if available)
- Verify SSN through Social Security Administration (if available via third-party)
- Avoid KBA (Knowledge-Based Authentication) as it requires credit history

**Key Concept:** FinCEN CIP Rule allows both documentary and non-documentary methods. Best practice is to use **both** for thorough verification, especially when one method has limitations. Thin-file individuals require creative non-documentary approaches since credit bureau checks won't work.
</details>

---

### Question 3: Liveness Detection Requirements

**Why is liveness detection critical in 2025, and what ISO standard should your verification provider meet?**

<details>
<summary>Answer</summary>

**Why Critical in 2025:**

**Deepfake Threat:**
- Deepfake fraud has grown 2,000%+ in recent years
- 1 in 15 identity fraud attempts involves deepfakes
- Deepfake toolkits available for under $20
- Advanced AI can generate realistic video in real-time

**Without Liveness Detection:**
- Fraudsters can submit photos of stolen IDs
- Pre-recorded videos can bypass verification
- Injection attacks (server-side deepfakes) can defeat simple checks

**ISO Standard: ISO/IEC 30107-3 PAD (Presentation Attack Detection)**

**Levels:**
- **Level 1 (Basic):** Detects printed photos, masks, replays - suitable for standard onboarding
- **Level 2 (Advanced):** Detects deepfakes, injection attacks - recommended for high-risk merchants
- **CEN/TS 18099:** EU standard for injection attack detection

**Best Practice:** Require vendors to support ISO/IEC 30107-3 PAD Level 2 for high-risk merchants and Level 1 minimum for all others.

**Key Concept:** Passive liveness (AI analyzes single photo) is faster but less secure. Active liveness (user performs actions like blinking) or challenge-response (random sequence) are harder to defeat.
</details>

---

### Question 4: PEP Screening - Mandatory or Voluntary?

**Your compliance manager insists all merchants must be PEP-screened or you'll face regulatory violations. Is this correct?**

<details>
<summary>Answer</summary>

**Answer: No - PEP screening is NOT mandatory under U.S. regulations (unlike OFAC sanctions screening)**

**Regulatory Reality:**

**PEP Screening:**
- **Voluntary and risk-based** under U.S. BSA/AML regulations
- FinCEN guidance: Due diligence "commensurate with risk"
- No blanket requirement to screen ALL customers
- Focus on **Foreign PEPs** (higher corruption risk)
- Domestic PEPs optional but best practice

**OFAC Sanctions Screening (MANDATORY):**
- **Required by law** with strict liability
- Must screen ALL customers and transactions
- No exceptions for small amounts or low-risk customers

**When to PEP Screen (Risk-Based Triggers):**
- High transaction volumes (>$100k/month)
- International transactions (cross-border payments)
- High-risk industries (money services, jewelry, art)
- Geographic risk (high corruption indices)

**Enhanced Due Diligence for Foreign PEPs:**
- Source of wealth documentation
- Purpose of business relationship
- Senior management approval
- Ongoing monitoring (quarterly or more frequent)

**Key Concept:** Don't confuse PEP screening (risk-based) with sanctions screening (mandatory). Your manager may be thinking of OFAC or implementing sponsor bank requirements beyond regulatory minimums.
</details>

---

## Section 2: KYB Requirements

### Question 5: EIN Verification Methods

**A merchant applies but lost their original IRS CP 575 EIN letter. What are three ways to verify their EIN?**

<details>
<summary>Answer</summary>

**Three Primary Methods:**

**1. IRS TIN Matching Program (Recommended)**
- **Access:** IRS e-Services (free registration)
- **Capacity:** 25 interactive OR 100,000 bulk matches
- **Process:** Submit TIN, business name, receive instant match/no-match
- **Advantage:** Real-time, no cost, integrates with onboarding flow
- **Best for:** PayFacs with API integration

**2. IRS Form 147C Letter**
- **Purpose:** Official verification of existing EIN
- **Request Methods:**
  - Phone: 1-800-829-4933 (immediate verbal confirmation)
  - Fax: Submit written request (same-day response)
  - Mail: 4-6 weeks processing
- **Who can request:** Business owner, authorized representative
- **Best for:** Merchants who lost CP 575

**3. Third-Party Verification Services**
- **Middesk:** Real-time IRS integration
- **D&B:** Cross-references with business credit file
- **Tax1099:** Specialized TIN verification
- **Cost:** $1-5 per verification
- **Best for:** High-volume automated onboarding

**Consequences of Invalid EIN:**
- 24% backup withholding required for IRS
- Cannot approve merchant with unverified EIN
- 1099 reporting penalties for incorrect TIN

**Key Concept:** Always verify EIN matches exact legal business name. Typos in name or EIN format errors are common rejection reasons.
</details>

---

### Question 6: Certificate of Good Standing

**A merchant's Certificate of Good Standing is dated 6 months ago. Should you accept it?**

<details>
<summary>Answer</summary>

**Answer: No - Request a new certificate (&lt;90 days old is best practice)**

**Why Age Matters:**

**Status Can Change Quickly:**
- Business can fall out of compliance between certificate issue and application
- Missed annual reports (many states require yearly filings)
- Unpaid fees or franchise taxes
- Administrative dissolution by state
- Registered agent resignation

**Common Issues:**
- Suspended status (missed annual report)
- Dissolved status (voluntary or administrative)
- Revoked status (serious compliance failures)

**PayFac Best Practices:**
- **Require &lt;90 days old** for standard merchants
- **Require &lt;30 days old** for high-risk or high-volume merchants
- **Verify directly** with Secretary of State database (don't rely solely on certificate)
- **Set expiration tracking** to request annual updates

**What Certificate Shows:**
- Legal business name
- Entity type (LLC, Corporation)
- Formation/incorporation date
- Current status (Active/Good Standing)
- Entity ID/file number
- Issue date

**How to Obtain:**
- Request from Secretary of State office
- **Cost:** $10-$50 (FREE in Wyoming, Colorado)
- **Processing:** Immediate online to 5-10 days by mail

**Key Concept:** A 6-month-old certificate doesn't reflect current status. Business could be suspended/dissolved in the interim, creating onboarding risk. Real-time Secretary of State verification is superior to old certificates.
</details>

---

### Question 7: Virtual Office Red Flags

**A high-volume merchant ($200k/month projected) lists a Regus virtual office as their business address. What should you do?**

<details>
<summary>Answer</summary>

**Answer: Flag for manual review and request additional verification**

**Why This is a Red Flag:**

**Shell Company Indicators:**
- No physical business operations at address
- Virtual offices used to obscure true location
- Mail forwarding service, not actual workspace
- Shared address with many businesses
- Potential money laundering or fraud setup

**Middesk Update (Q1 2025):**
- Now flags known virtual mailbox providers (Regus, WeWork Mail, UPS Store)
- Identifies virtual offices as shell company risk indicators

**Additional Verification Steps:**

**1. Request Proof of Physical Operations:**
- Commercial lease agreement (if renting space)
- Utility bill in business name (electric, water, internet)
- Property deed (if owned)
- Photos of physical location/storefront

**2. Cross-Reference Other Data:**
- Google Business Profile (verified listing?)
- Google Street View (actual business visible?)
- Yelp/business directories (consistent location?)
- Website contact page (matches or differs?)

**3. Enhanced Due Diligence:**
- Request tax returns (shows business history)
- Bank statements (verify transaction patterns)
- Customer references or contracts
- Explanation of business model

**Risk-Based Decision:**
- **Low-risk industry + low volume:** May accept with explanation
- **High-risk industry OR high volume:** Require physical address proof
- **Multiple red flags:** Consider declining

**Key Concept:** Virtual offices aren't automatically disqualifying but require enhanced scrutiny, especially when combined with high volume or recent formation. Legitimate home-based businesses (residential addresses) are generally acceptable with proper documentation.
</details>

---

### Question 8: Operating Agreement Requirement

**An LLC applicant says their state doesn't require an operating agreement. Do you still need to request it?**

<details>
<summary>Answer</summary>

**Answer: Yes - request it anyway, especially for multi-member LLCs**

**States Requiring Operating Agreement:**
- California
- Delaware
- Maine
- Missouri
- New York
- Arkansas
- District of Columbia
- Iowa
- New Mexico

**Why Request Even if Not State-Required:**

**1. Beneficial Ownership Verification:**
- Operating agreement shows ownership percentages
- Identifies all members (25%+ threshold for UBOs)
- Clarifies management structure (member-managed vs. manager-managed)
- Reveals control persons

**2. Prevents Disputes:**
- Some applicants claim "no 25% owners" to avoid UBO disclosure
- Operating agreement confirms actual ownership structure
- Detects hidden beneficial owners

**3. Risk Assessment:**
- Complex ownership structures require scrutiny
- Profit distribution arrangements may indicate risk
- Voting rights vs. economic interests (can differ)

**If Merchant Refuses or "Doesn't Have One":**

**Single-Member LLC:**
- Less critical (owner is obvious)
- May accept Articles of Organization showing single member
- Still request for best practice

**Multi-Member LLC:**
- **Highly suspicious** if no operating agreement exists
- Request alternative documentation:
  - Cap table or ownership breakdown
  - Membership certificates
  - Buy-sell agreements
  - Partnership tax return (Form 1065) showing ownership %
- Consider declining if merchant refuses to clarify ownership

**Key Concept:** Operating agreement is internal (not filed with state) but critical for KYB compliance. It's the definitive source for ownership structure. Lack of operating agreement in multi-member LLC suggests poor governance or intentional opacity.
</details>

---

## Section 3: Beneficial Ownership

### Question 9: The Classic 20/20/20/20/20 Scenario

**ABC Corp ownership structure:**
- Alice: 20%
- Bob: 20%
- Carol: 20%
- Dave: 20%
- Epsilon Inc: 20%

**Epsilon Inc is owned 100% by Frank.**

**Who are the beneficial owners you must identify?**

<details>
<summary>Answer</summary>

**Answer: NONE via ownership prong - must identify CONTROL PERSON**

**Ownership Prong Calculation:**

**Direct Owners:**
- Alice: 20% (below 25% threshold)
- Bob: 20% (below 25% threshold)
- Carol: 20% (below 25% threshold)
- Dave: 20% (below 25% threshold)

**Indirect Owner:**
- Frank owns 100% of Epsilon Inc
- Epsilon Inc owns 20% of ABC Corp
- Frank's indirect ownership: 20% × 100% = **20%** (below 25% threshold)

**Result:** No individual meets the 25% ownership threshold

**Control Person Prong Required:**

Since NO individual owns 25%+, you MUST identify at least one control person:
- CEO of ABC Corp
- If no CEO, then President or COO
- If no executive officers, then managing member or individual with greatest control authority

**Preferred Selection:**
- CEO is first choice
- Must have significant responsibility to control, manage, or direct the entity

**Total Beneficial Owners to Verify:**
- 1 control person (CEO or equivalent)
- Must conduct full KYC on control person
- Screen control person against OFAC/sanctions lists

**Key Concept:** The two-prong test is **either/or** - you need ownership-prong UBOs (25%+) OR control person. When no 25%+ owners exist, control person is mandatory. In the 20/20/20/20/20 scenario, even with corporate ownership traced through multiple layers, if no individual reaches 25%, control person is required.
</details>

---

### Question 10: Multi-Layer Indirect Ownership

**ABC Corp is 60% owned by Beta LLC. Beta LLC is 50% owned by Alice and 50% owned by Gamma Trust. Gamma Trust's sole beneficiary is Alice. What is Alice's total ownership of ABC Corp?**

<details>
<summary>Answer</summary>

**Answer: Alice owns 60% total (via two paths)**

**Path 1: Direct through Beta LLC**
- Alice owns 50% of Beta LLC
- Beta LLC owns 60% of ABC Corp
- Alice's indirect ownership: 60% × 50% = **30%**

**Path 2: Indirect through Gamma Trust and Beta LLC**
- Alice is 100% beneficiary of Gamma Trust
- Gamma Trust owns 50% of Beta LLC
- Beta LLC owns 60% of ABC Corp
- Alice's indirect ownership: 60% × 50% × 100% = **30%**

**Total Ownership:**
- Path 1: 30%
- Path 2: 30%
- **Total: 30% + 30% = 60%**

**Beneficial Owner Determination:**
- Alice clearly exceeds 25% threshold
- Alice qualifies as beneficial owner
- Must conduct full KYC verification on Alice
- Must screen Alice against sanctions lists

**Important Note:**
- If Alice is also CEO of ABC Corp, she satisfies both prongs (ownership + control)
- She only counts as ONE beneficial owner (not double-counted)
- If no other individuals own 25%+, Alice may be the only UBO to verify

**Key Concept:** When an individual owns through multiple paths, you MUST add all paths together. This prevents evasion through splitting ownership across multiple entities. Always trace to natural persons and sum all ownership percentages for each individual.
</details>

---

### Question 11: Trust Ownership Structure

**A merchant LLC is 80% owned by the "Smith Family Revocable Living Trust." How do you identify beneficial owners?**

<details>
<summary>Answer</summary>

**Answer: Identify BOTH trustee AND beneficiaries with 25%+ beneficial interest**

**Trust Analysis Steps:**

**1. Request Trust Documentation:**
- Trust agreement or trust summary
- Certificate of trust
- Amendment history
- Beneficiary listing

**2. Identify Trustee:**
- Who has discretionary control over trust assets?
- If trustee has authority to direct LLC, trustee may be beneficial owner
- Common: John Smith as trustee

**3. Identify Beneficiaries:**
- Who are the beneficial interest holders?
- Calculate each beneficiary's indirect ownership:
  - Trust owns 80% of LLC
  - If Sarah Smith has 50% beneficial interest in trust
  - Sarah's indirect ownership: 80% × 50% = **40%** (qualifies)

**Revocable Living Trust Considerations:**
- Settlor (creator) often retains control during lifetime
- Settlor may be trustee AND beneficiary
- Upon settlor's death, successor trustee and beneficiaries change
- Enhanced due diligence required for revocable trusts

**Example Outcome:**
```
Smith Family Trust owns 80% of Merchant LLC
- Trustee: John Smith (may be beneficial owner as control person)
- Beneficiaries:
  - Sarah Smith: 40% beneficial interest → 80% × 40% = 32% (qualifies)
  - Emily Smith: 30% beneficial interest → 80% × 30% = 24% (below threshold)
  - Michael Smith: 30% beneficial interest → 80% × 30% = 24% (below threshold)

Beneficial Owners to Verify:
- John Smith (trustee with control)
- Sarah Smith (32% indirect ownership)
```

**Red Flag Response:**
If merchant resists disclosing trust details:
- Decline application, OR
- Apply Enhanced Due Diligence (EDD)
- Request additional documentation
- Escalate to senior underwriter

**Key Concept:** Trusts don't eliminate beneficial ownership requirements. You must "look through" the trust to identify real individuals who control or benefit from the entity. Trusts are sometimes used to obscure ownership, requiring extra scrutiny.
</details>

---

### Question 12: The 50% Rule in Beneficial Ownership Context

**You identify three beneficial owners: Alice (30%), Bob (25%), Carol (20%). Bob is on the OFAC SDN list. Can you onboard the merchant?**

<details>
<summary>Answer</summary>

**Answer: NO - merchant is blocked under OFAC 50% Rule**

**Analysis:**

**Beneficial Owners Identified:**
- Alice: 30% (screened - clear)
- Bob: 25% (screened - **SDN match**)
- Carol: 20% (below 25% UBO threshold but still screened)

**OFAC 50% Rule Application:**

The 50% Rule states: **Entities owned 50% or more by one or more blocked persons are automatically blocked**, even if not explicitly on SDN list.

**Does 25% trigger blocking?**
- Bob alone owns 25% (below 50% threshold)
- **However:** Even if Bob doesn't meet 50% Rule, you still cannot do business

**Why You Cannot Onboard:**

**1. Direct OFAC Prohibition:**
- U.S. persons are prohibited from dealing with SDN-listed individuals
- Processing payments for merchant benefits Bob (SDN party)
- Even if Bob is minority owner, he benefits from business operations
- Strict liability applies

**2. Transaction Screening:**
- Every transaction could indirectly benefit sanctioned individual
- Settlement funds distributed to owners (Bob receives 25%)
- OFAC violation per transaction

**3. Sponsor Bank Requirements:**
- Sponsor bank will not approve merchant with SDN-listed UBO
- Risk to sponsor bank's own OFAC compliance

**Required Actions:**
- **BLOCK immediately** - do not onboard
- **Do NOT tip off** merchant (federal crime to mention SDN)
- **File SAR** (Suspicious Activity Report to FinCEN)
- **Notify sponsor bank** immediately
- **Document everything** (screening results, decision, communications)

**Declination Language:**
- ✅ "We are unable to approve your application at this time."
- ✅ "Your application does not meet our underwriting criteria."
- ❌ "Bob is on the SDN list." (NEVER mention sanctions)

**Key Concept:** ANY sanctioned beneficial owner makes the merchant untouchable, regardless of ownership percentage. The 50% Rule determines if the entire entity is automatically blocked, but even 1% ownership by SDN party creates compliance risk. Strict liability = zero tolerance.
</details>

---

### Question 13: UBO Re-Verification Frequency

**How often must you re-verify beneficial ownership information?**

<details>
<summary>Answer</summary>

**Answer: Re-verification is EVENT-DRIVEN and RISK-BASED, not automatic annual**

**Common Misconception:** "Must update beneficial ownership annually for all merchants"

**Regulatory Reality (FinCEN CDD Rule):**
- **No automatic annual requirement** for all merchants
- Re-verification is triggered by events or risk indicators
- Ongoing monitoring is required, but full re-verification is selective

**Mandatory Update Triggers:**

**1. Ownership Changes:**
- New individual becomes 25%+ owner
- Existing 25%+ owner falls below threshold or exits
- Merchant notifies you of ownership change
- Corporate restructuring (merger, acquisition, spin-off)

**2. Control Person Changes:**
- New CEO, managing member, or general partner
- Significant management restructuring
- Board composition changes (for corporations)

**3. Entity Conversion:**
- LLC converts to C-Corp or vice versa
- Sole proprietorship incorporates
- Partnership restructuring

**Risk-Based Update Triggers:**

**4. Suspicious Activity:**
- SAR filed for the merchant
- Unusual transaction patterns
- Chargeback spikes
- Velocity increases (10x volume growth)

**5. Material Business Changes:**
- Change in business model or products
- Entry into high-risk industry
- International expansion
- New geographies (especially high-risk jurisdictions)

**6. External Events:**
- Negative news about beneficial owners
- Sanctions list updates (OFAC adds new names)
- Beneficial owner criminal charges
- Regulatory actions against merchant

**Periodic Re-Certification Best Practices:**

**High-Risk Merchants:**
- Annual re-certification
- Industries: nutraceuticals, forex, crypto, adult, CBD
- Volume: >$500k monthly

**Medium-Risk Merchants:**
- Bi-annual or material changes only
- Volume: $100k-$500k monthly

**Low-Risk Merchants:**
- Event-driven only
- Established businesses with stable ownership
- Low chargeback rates, clean compliance history

**Continuous Monitoring (All Merchants):**
- **Daily/weekly sanctions screening** against updated OFAC lists
- News alerts for beneficial owners
- Secretary of State filing monitoring
- Credit report monitoring (for control persons)

**Key Concept:** The CDD Rule emphasizes ongoing monitoring, not periodic recollection. Re-verify when events indicate ownership may have changed or risk has increased. Blanket annual re-verification for all merchants is operationally burdensome and not required by regulation.
</details>

---

## Section 4: Sanctions Screening

### Question 14: Strict Liability Explained

**What does "strict liability" mean for OFAC sanctions compliance, and why does it matter?**

<details>
<summary>Answer</summary>

**Answer: Strict liability means civil penalties apply even WITHOUT intent, knowledge, or negligence**

**Key Characteristics:**

**1. Intent is NOT Required:**
- "We didn't know" is NOT a defense
- Accidental violations still result in penalties
- Good faith efforts do NOT eliminate liability

**2. Knowledge is NOT Required:**
- Don't need to prove you knew party was sanctioned
- Constructive knowledge (should have known) = actual knowledge
- Ignorance is NOT a defense

**3. Each Violation is Separate:**
- Every transaction with sanctioned party = separate violation
- Single merchant could result in hundreds of violations
- Penalties compound quickly

**Penalty Structure (2025):**
- **Statutory Maximum:** $356,579 per violation (adjusted annually for inflation)
- **OR:** Twice the transaction amount (whichever is GREATER)
- **Aggregate Penalties:** Can reach hundreds of millions

**Real-World Impact:**

**Scenario:** PayFac onboards merchant without proper screening
- Merchant is owned 60% by SDN-listed individual (not detected)
- Merchant processes 500 transactions over 3 months
- Each transaction = separate violation
- **Potential Exposure:** 500 violations × $356,579 = $178+ million

**Recent Enforcement Examples:**
- **GVA Capital (2025):** $215.99M penalty
- **TD Bank (2024):** $3.09B total penalties (BSA/AML failures including sanctions)
- **Payward/Kraken (2022):** $24M+ for crypto transactions from sanctioned regions

**Why This Matters for PayFacs:**

**1. Cannot Rely on "We Tried":**
- Having a compliance program is not enough
- Program must be EFFECTIVE
- Must actually catch sanctioned parties

**2. Vendor Failures Are Your Failures:**
- If third-party screening vendor misses SDN match, you're still liable
- Must verify vendor capabilities
- Cannot outsource liability

**3. Perfect Compliance Required:**
- Single miss can result in massive penalties
- No "good enough" threshold
- Must screen ALL merchants, ALL UBOs, ALL transactions

**4. Sponsor Bank Will Terminate:**
- Sponsor bank faces same strict liability
- Will immediately terminate PayFac relationship if violations occur
- Damages entire business, not just fines

**Mitigating Factors (Reduce Penalties, Don't Eliminate):**
- Voluntary self-disclosure
- Effective compliance program in place
- Remediation efforts
- Cooperation with OFAC investigation

**Key Concept:** Strict liability removes the "reasonable efforts" standard. You must actually prevent ALL violations, not just demonstrate good faith attempts. This is why sanctions screening is non-negotiable and must be real-time, comprehensive, and continuously monitored.
</details>

---

### Question 15: Fuzzy Matching Algorithms

**Your screening system flags "Mohammed Ahmed" as potential match to "Muhammad Ahmad" on SDN list. The match score is 87%. What should you do?**

<details>
<summary>Answer</summary>

**Answer: Conduct manual review using secondary identifying data**

**Why Fuzzy Matching Generated This Alert:**

**Name Variations:**
- "Mohammed" vs "Muhammad" (common transliteration differences)
- "Ahmed" vs "Ahmad" (alternate spellings)
- Arabic names often have multiple valid Latin alphabet spellings

**Fuzzy Matching Algorithms:**
- **Levenshtein Distance:** Counts character edit operations needed to transform one string to another
- **Jaro-Winkler:** Calculates character similarity with prefix weighting
- **Soundex/Phonetic:** Encodes names by how they sound
- 87% match score indicates high similarity requiring investigation

**Manual Review Process:**

**1. Gather Secondary Data:**

From merchant application:
- Date of birth
- Address / city / country
- Nationality / citizenship
- Passport or ID number (if available)

From SDN list entry:
- Date of birth listed?
- Known addresses
- Aliases and alternate spellings
- Nationality
- Associated entities

**2. Compare Identifying Details:**

**Scenario A - Different Individuals (False Positive):**
```
Merchant: Mohammed Ahmed
- DOB: March 15, 1985
- Address: Detroit, Michigan, USA
- Nationality: U.S. Citizen

SDN Entry: Muhammad Ahmad
- DOB: July 8, 1972
- Address: Damascus, Syria
- Nationality: Syrian

Conclusion: FALSE POSITIVE (different people, common name)
```

**Scenario B - Potential True Match:**
```
Merchant: Mohammed Ahmed
- DOB: July 8, 1972
- Address: Dearborn, Michigan, USA
- Nationality: Syrian-born, now U.S. resident

SDN Entry: Muhammad Ahmad
- DOB: July 8, 1972
- Address: Damascus, Syria; known aliases in U.S.
- Nationality: Syrian

Conclusion: POTENTIAL TRUE MATCH (same DOB, nationality, plausible U.S. presence)
```

**3. Decision Tree:**

**Clear False Positive:**
- Document exclusion reasoning
- Note: "Different DOB (1985 vs 1972), different nationality (U.S. vs Syrian)"
- Retain evidence for **10 years**
- Proceed with onboarding

**Uncertain / Insufficient Data:**
- Request additional information from merchant
- Ask for passport copy, additional ID
- Explain: "Routine identity verification requires additional documentation"
- Do NOT mention sanctions screening

**Potential True Match:**
- **BLOCK immediately** - do not onboard
- Do NOT tip off merchant
- Escalate to compliance officer
- Notify sponsor bank
- File SAR if required
- Document all evidence

**Key Common Names Requiring Extra Scrutiny:**
- Mohammed/Muhammad (most common name globally)
- Ahmed/Ahmad
- Ali
- Hassan/Hussein
- Abdul (with any variation)
- Common Western names (John Smith, Robert Johnson)

**Algorithm Threshold Tuning:**
- 87% is in the "possible match" zone (typically 85-94%)
- May need higher thresholds for common names to reduce false positives
- May need lower thresholds for rare names to catch variations

**Key Concept:** Fuzzy matching generates alerts requiring human judgment. Never auto-reject based on algorithm alone. Never auto-approve without review. Secondary identifying data (DOB, address, nationality) is essential for distinguishing individuals with similar names.
</details>

---

### Question 16: The OFAC 50% Rule Application

**ABC Corp is 100% owned by Beta LLC. Beta LLC is owned: 30% by Alice, 25% by Bob (SDN-listed), and 45% by Carol. Is ABC Corp blocked under the 50% Rule?**

<details>
<summary>Answer</summary>

**Answer: NO - ABC Corp is NOT automatically blocked under 50% Rule (but you still cannot do business)**

**50% Rule Analysis:**

**Ownership Structure:**
```
ABC Corp
  └─ 100% owned by Beta LLC
      ├─ Alice: 30%
      ├─ Bob: 25% (SDN-listed)
      └─ Carol: 45%
```

**Indirect Ownership Calculation:**
- Alice: 100% × 30% = 30% indirect ownership of ABC Corp
- Bob (SDN): 100% × 25% = **25%** indirect ownership of ABC Corp
- Carol: 100% × 45% = 45% indirect ownership of ABC Corp

**50% Rule Threshold:**
- Bob (SDN) owns 25% of Beta LLC
- Bob's indirect ownership of ABC Corp: **25%**
- **Below the 50% threshold** required for automatic blocking

**Conclusion: 50% Rule NOT triggered** (Bob owns less than 50%)

**However: You STILL Cannot Onboard ABC Corp**

**Why?**

**1. Direct OFAC Prohibition:**
- U.S. persons prohibited from dealing with SDN-listed individuals
- Processing payments for ABC Corp indirectly benefits Bob
- Transactions generate revenue → Beta LLC → distributions to Bob (25% share)

**2. Strict Liability Risk:**
- Even if not automatically blocked, facilitating payments benefits sanctioned party
- OFAC could pursue enforcement for "facilitation" of prohibited transactions

**3. Sponsor Bank Will Reject:**
- No sponsor bank will approve merchant with SDN exposure in ownership chain
- Reputational risk
- Regulatory scrutiny

**Required Actions:**
- **BLOCK / DECLINE** merchant application
- **Do NOT tip off** (do not mention Bob or sanctions)
- **Notify sponsor bank**
- **File SAR** if required
- **Document decision**: "SDN-listed individual in ownership structure"

**50% Rule Scenarios Where Automatic Blocking DOES Apply:**

**Scenario 1: Single SDN Owns 50%+**
```
ABC Corp
  └─ Beta LLC: 80% ownership
      └─ Bob (SDN): 60% of Beta
Bob's indirect ownership: 80% × 60% = 48% (below 50%)
But Beta LLC itself is 60% owned by Bob = Beta LLC is blocked
Therefore ABC Corp is owned 80% by blocked entity = ABC Corp is blocked
```

**Scenario 2: Multiple SDNs Aggregate to 50%+**
```
ABC Corp owners:
- Alice (SDN): 30%
- Bob (SDN): 25%
- Carol: 45%

Aggregate SDN ownership: 30% + 25% = 55% (exceeds 50%)
ABC Corp is automatically blocked
```

**Key Concept:** The 50% Rule creates automatic blocking for entities majority-owned by sanctioned parties, but ANY level of SDN ownership creates compliance issues. Even 1% ownership by sanctioned party means you're facilitating transactions that benefit them. Always decline merchants with SDN exposure, regardless of percentage.
</details>

---

### Question 17: Record Retention After 2025 Update

**Your screening system flagged a merchant application as potential OFAC match. After review, you determined it was a false positive and approved the merchant. How long must you retain the screening results and review decision?**

<details>
<summary>Answer</summary>

**Answer: 10 YEARS (updated March 21, 2025)**

**Updated Requirement:**
- **Previous:** 5 years
- **Current (effective March 21, 2025):** **10 YEARS**

**What Must Be Retained:**

**1. All Screening Results:**
- Positive matches (true AND false positives)
- Negative results (no match found)
- Match scores and confidence levels
- Algorithm details and thresholds used

**2. Review Documentation:**
- Manual review decision and rationale
- Secondary data used for disambiguation (DOB, address, nationality)
- Reviewer name and date
- Exclusion reasoning for false positives
- Supporting evidence (merchant application data, ID documents)

**3. This Specific Scenario Requires:**
```
Documentation to Retain (10 years):
- Original screening alert (merchant name, match score, SDN entry matched)
- Merchant data used for comparison (name, DOB, address, nationality)
- SDN list entry details at time of screening
- Reviewer analysis: "False positive - Different DOB (applicant: 1985, SDN: 1972), different nationality (U.S. vs Syrian)"
- Approval decision: "Cleared for onboarding based on distinguishing factors"
- Date and reviewer name
- Merchant approval records
```

**4. Ongoing Merchant Records:**
- Merchant remains active: Continue retaining screening records
- Merchant closes account: Retain for 10 years AFTER closure

**Special Cases:**

**Blocked Property:**
- Retain for **10 years AFTER property is unblocked**
- If never unblocked: **INDEFINITE retention**
- If OFAC authorizes release: 10 years from release date

**Rejected Transactions:**
- True OFAC matches resulting in rejection
- Retain for 10 years from rejection date
- Includes SAR filing documentation

**Why This Matters:**

**1. OFAC Audits:**
- OFAC can request records during investigations
- Must demonstrate screening processes were followed
- False positive documentation shows diligent review

**2. Sponsor Bank Audits:**
- Banks periodically audit PayFac compliance
- Must provide evidence of screening for all merchants
- Sample testing of approval decisions

**3. Legal Protection:**
- If merchant later causes issues, screening records demonstrate due diligence
- Proves you identified and correctly resolved potential matches

**4. Regulatory Examinations:**
- Bank examiners review BSA/AML programs
- PayFac screening records subject to examination
- Inadequate retention = audit finding

**Storage Considerations:**
- Electronic storage acceptable (secure, encrypted)
- Cloud storage permitted (with access controls)
- Must be organized and searchable
- Regular backups required
- Disaster recovery plan

**Key Concept:** The extension from 5 to 10 years doubles retention requirements. Ensure your compliance platform and screening vendor support 10-year retention. False positives must be documented as thoroughly as true positives to demonstrate effective screening processes.
</details>

---

### Question 18: Real-Time vs Batch Screening

**Your engineering team proposes running sanctions screening overnight in batch mode to avoid slowing down the application process. Is this acceptable?**

<details>
<summary>Answer</summary>

**Answer: NO - Real-time screening is required for merchant onboarding and transactions**

**Why Batch-Only is Inadequate:**

**1. Regulatory Expectation:**
- OFAC expects real-time or near-real-time screening
- Gaps between application submission and screening create violation windows
- Merchant could begin processing before screening completes

**2. EU Instant Payments Regulation (IPR) Standard:**
- Effective January 2025
- Financial institutions must screen instant payments in **milliseconds** (sub-second)
- Global best practice now expects near-instant screening

**3. Compliance Risk:**
- **Scenario:** Merchant approved at 9am, batch screening runs at midnight
  - Merchant processes transactions for 15 hours before screening
  - If SDN match detected in batch, those 15 hours of transactions = violations
  - Strict liability applies to each transaction

**4. Sponsor Bank Requirements:**
- Sponsor banks expect real-time screening
- Approval cannot be granted before screening completes
- Delayed screening creates liability for sponsor bank

**Performance Requirements:**

**Merchant Onboarding:**
- Screen during application flow
- Response time: &lt;2 seconds (ideally &lt;1 second)
- Must complete before approval granted

**Transaction Processing:**
- **Card authorizations:** 2-3 seconds total (screening &lt;1 second)
- **Instant payments (FedNow, RTP):** &lt;10 seconds total (screening 1-2 seconds)
- **ACH/Wire:** Real-time screening before submission

**Recommended: Hybrid Approach**

**Real-Time (Primary):**
- All new merchant applications
- All transaction authorizations
- Instant payment processing
- Ownership changes

**Batch (Supplemental Only):**
- **Daily:** Full customer database against updated SDN list
  - Catches existing merchants newly added to SDN
  - Reconciliation and verification
- **Monthly/Quarterly:** Full database comprehensive re-screen
  - Quality assurance
  - Audit trail
- **Event-Triggered:** Major sanctions announcements (new country programs)

**Technical Implementation:**

**To Achieve Real-Time Performance:**
1. **In-memory screening databases** (not disk-based queries)
2. **Local caching of sanctions lists** (updated multiple times daily)
3. **Optimized fuzzy matching algorithms**
4. **Distributed architecture** (horizontal scaling)
5. **Failover and redundancy** (no single point of failure)
6. **API integration** with screening vendors (sub-second response)

**Vendor Verification:**
Before selecting screening vendor, confirm:
- Real-time API response times (&lt;1 second typical)
- SLA guarantees for uptime and performance
- Automatic SDN list updates (multiple times daily)
- Rate limits sufficient for peak volumes

**Case Study: OFAC Finding of Violation**

**Situation:** Bank believed vendor was screening customer base **daily**

**Reality:** Vendor only screened **monthly**

**Result:** 14-day gap after individual added to SDN list

**Outcome:** OFAC issued Finding of Violation for transactions during gap

**Lesson:** Verify vendor capabilities, don't assume. Document actual screening frequency.

**Key Concept:** Batch screening is supplemental verification only, not a replacement for real-time. Any delay between merchant approval and screening creates strict liability exposure. Modern compliance requires millisecond-level screening performance.
</details>

---

### Question 19: True Match Procedures

**During ongoing monitoring, you discover that one of your active merchants has a beneficial owner who was added to the SDN list yesterday. The merchant has $50,000 in pending settlements. What are your immediate obligations?**

<details>
<summary>Answer</summary>

**Answer: Immediate blocking, sponsor bank notification, OFAC reporting, and property blocking**

**Immediate Actions (Within Hours):**

**1. Suspend Merchant Account (Immediately):**
- Block all transaction processing
- Suspend account access to merchant portal
- Reject all pending transactions
- Prevent any new authorizations
- Do NOT notify merchant yet (risk of tipping off)

**2. Freeze Pending Settlements ($50,000):**
- **BLOCK the funds** - do not release
- Segregate in special account
- Label as "OFAC blocked property"
- Initiate blocked property reporting procedures

**3. Notify Sponsor Bank (Same Day):**
- **Immediate notification** per partnership agreement
- Provide full details:
  - Merchant name and ID
  - SDN-listed UBO name and details
  - Ownership percentage
  - Amount of blocked funds ($50,000)
  - Discovery date and time
  - Screening evidence (SDN match details)
- Coordinate on next steps

**4. Document Everything (Immediately):**
- Date and time of discovery
- Screening results showing SDN match
- Beneficial ownership documentation showing UBO relationship
- Ownership percentage (assess 50% Rule)
- Transaction history (past 30-90 days minimum)
- Blocked funds amount and source
- All notifications sent

**OFAC Reporting Obligations:**

**5. File Blocked Property Report (Within 10 Business Days):**
- **Form:** TD F 90-22.50 (Report of Blocked or Unblocked Property)
- **Deadline:** 10 business days from blocking date
- **Contents:**
  - Name and details of SDN party (UBO)
  - Property description ($50,000 settlement funds)
  - Date property blocked
  - Your entity details (PayFac name, contact)
  - Circumstances of blocking
- **Submission:** Email to ofac.compliance@treasury.gov or OFAC portal

**6. Annual Blocked Property Report:**
- If funds remain blocked beyond September 30 of year
- Must file annual report on continued blocked status
- Every year until funds released or permanently blocked

**FinCEN Suspicious Activity Report (SAR):**

**7. File SAR (Within 30 Days):**
- **Form:** FinCEN SAR (Suspicious Activity Report)
- **Timing:** Within 30 calendar days of detection
- **Contents:**
  - Subject information (merchant, SDN-listed UBO)
  - Suspicious activity narrative
  - Transaction history
  - How violation occurred (e.g., "UBO added to SDN after initial onboarding")
  - Remediation actions taken
- **Submission:** BSA E-Filing System
- **Critical:** Mark as HIGHLY CONFIDENTIAL

**Merchant Communication:**

**8. Generic Declination Notice:**
After blocking is complete and OFAC/sponsor bank notified:
- Send brief generic message
- **DO say:** "Your merchant account has been suspended. We cannot continue to provide services at this time."
- **DO NOT say:**
  - "Your beneficial owner is on SDN list"
  - "OFAC sanctions require blocking"
  - "Your account is blocked"
  - Any mention of sanctions or SDN

**9. Do NOT Tip Off (Federal Crime):**
- **18 U.S.C. § 1956(c)(1):** It is illegal to notify someone that SAR was filed or OFAC blocking occurred
- Do not provide specific reasons for suspension
- Do not suggest merchant can appeal or reapply
- Generic language only

**Property Disposition:**

**10. Blocked Funds ($50,000):**
- **Cannot be released** without OFAC license
- Even if merchant demands payment: REFUSE
- Merchant may file lawsuit: Still cannot release without OFAC authorization
- Consult legal counsel if merchant threatens legal action

**11. Request OFAC Guidance (If Needed):**
- Unclear if 50% Rule applies: Contact OFAC
- Questions about property disposition: Contact OFAC
- **Hotline:** 1-800-540-6322
- **Email:** ofac.compliance@treasury.gov

**Historical Transaction Review:**

**12. Review Past Transactions:**
- Analyze transactions since merchant onboarded
- Determine if UBO was already on SDN at onboarding (missed screening = more serious)
- If UBO newly added post-onboarding: Note date added to SDN
- Calculate potential violation exposure (number of transactions processed)

**13. Voluntary Self-Disclosure (Consider):**
- If violations occurred before detection (e.g., screening miss)
- Voluntary disclosure can significantly reduce penalties
- Consult legal counsel before submitting
- Demonstrate remediation efforts

**Long-Term Record Retention:**

**14. Retain All Records (10 Years Minimum):**
- Screening results and SDN match evidence
- Blocking documentation
- OFAC reports filed
- SAR filing confirmation
- Communications with OFAC, sponsor bank
- Legal consultations
- If funds never unblocked: INDEFINITE retention

**Key Concept:** The discovery of an active merchant with SDN-listed UBO is a compliance emergency requiring immediate action. The $50,000 in pending settlements becomes blocked property that cannot be released without OFAC authorization, even if merchant sues. Tipping off the merchant is a federal crime. Every step must be carefully documented for OFAC examination and potential enforcement proceedings.
</details>

---

### Question 20: Country Program vs. Individual Designations

**Hypothetical Scenario:** Assume that comprehensive Syria country sanctions have been lifted, but individual SDN designations remain. You receive an application from a merchant whose beneficial owner is a Syrian national currently residing in the U.S. Can you onboard them?

:::info Teaching Purpose
This question teaches a critical sanctions compliance concept: **the difference between country-based sanctions programs and individual SDN designations**. When a country program is lifted, individuals previously designated remain on the SDN list unless specifically delisted by OFAC. Always verify current sanctions status at [OFAC Sanctions Programs](https://ofac.treasury.gov/sanctions-programs-and-country-information).
:::

<details>
<summary>Answer</summary>

**Answer: Not automatically - must conduct thorough sanctions screening (even if country program lifted, SDN designations remain)**

**Key Teaching Point - Country Program vs. Individual Designations:**

**When a Country Program is Lifted:**
- General prohibitions on transactions with that country are removed
- Geographic sanctions no longer apply
- Normal business transactions may resume

**What Does NOT Change When Country Program is Lifted:**
- **Individual SDN designations remain active**
- Nationals previously designated still on SDN list unless specifically delisted
- Entities owned 50%+ by sanctioned nationals remain blocked (50% Rule)
- Terrorism-related designations continue
- Human rights violations designations continue

**Required Screening Process:**

**1. Screen Beneficial Owner Against Current SDN List:**
- Full name screening (with fuzzy matching for transliterations)
- Date of birth verification
- Address history
- Nationality confirmation
- Any aliases or alternate spellings

**2. Check for Individual Designations:**
Syrian nationals may be on SDN for reasons OTHER than country program:
- **Terrorism:** Supporting designated terrorist organizations
- **Human Rights:** Involvement in Syrian government atrocities
- **Assad Regime:** Connections to Bashar al-Assad government
- **Financial Crimes:** Money laundering, sanctions evasion

**3. Apply Standard UBO Verification:**
If NOT on SDN list:
- Conduct full KYC verification
- Government ID verification
- Address verification in U.S.
- Determine ownership percentage (25%+ threshold)
- Screen for PEP status (Syrian government officials)

**4. Enhanced Due Diligence Considerations:**

**Higher Risk Factors:**
- Recent emigration from Syria (post-2011 civil war)
- Family connections to Syrian government
- Business interests in Syria or neighboring countries
- Frequent travel to Middle East
- Remittances to Syria

**Standard Risk Factors:**
- Long-time U.S. resident
- U.S. citizenship or permanent resident status
- No Syrian government connections
- Clear source of funds/wealth
- Transparent business operations

**5. Potential Outcomes:**

**Scenario A - Clear to Onboard:**
```
Syrian national UBO:
- U.S. citizen since 2005
- No SDN match
- No government connections
- Established U.S. business
- Clean background

Decision: Approve with standard monitoring
```

**Scenario B - Enhanced Due Diligence Required:**
```
Syrian national UBO:
- U.S. resident (green card, arrived 2020)
- No SDN match but common name requiring extra verification
- Family remains in Syria
- Business involves remittances to Middle East

Decision: Apply EDD - request additional documentation, source of wealth, business model justification
```

**Scenario C - SDN Match:**
```
Syrian national UBO:
- SDN match (designated 2015 for supporting Assad regime)
- Currently in U.S. but never delisted

Decision: BLOCK - cannot onboard, file SAR, notify sponsor bank
```

**Common Misconception:**

**WRONG:** "Country sanctions lifted, so all nationals from that country are clear"

**CORRECT:** "Even when a country program is lifted, individual nationals designated for terrorism, human rights violations, or regime connections remain sanctioned. Must screen each person individually against the current SDN list."

**Key Verification Steps:**

1. Confirm UBO's full legal name (transliteration variations for non-Latin scripts)
2. Obtain passport copy (foreign passport + U.S. visa/green card if applicable)
3. Verify U.S. immigration status
4. Search SDN list with multiple name spellings
5. Review for terrorism/human rights designations
6. Document screening results (retain 10 years)

**Related Context: Country-Specific Screening**

:::warning Always Verify Current Status
Sanctions programs change frequently. Always check the current status at [OFAC Sanctions Programs](https://ofac.treasury.gov/sanctions-programs-and-country-information) before making compliance decisions.
:::

**Examples of Comprehensive Sanctions Programs (verify current status):**
- **Cuba:** Nearly total embargo (since 1960s)
- **Iran:** Comprehensive sanctions (nuclear program, regional influence)
- **North Korea:** Comprehensive sanctions (nuclear/missile programs)
- **Russia:** Sectoral sanctions, Crimea/Donetsk/Luhansk (Ukraine-related)

**Key Principle:** Lifting of country-based sanctions programs does NOT automatically delist individuals previously sanctioned. Designated nationals may remain on SDN list indefinitely unless OFAC specifically removes them. **Always screen against the current SDN list, not country programs.** National origin alone is never grounds for rejection - sanctions screening must identify actual SDN matches.
</details>

---

## Summary & Key Takeaways

### Critical Regulatory Distinctions

**KYC vs KYB:**
- KYC = Individual identity (name, DOB, SSN, ID)
- KYB = Business entity legitimacy (legal name, EIN, formation docs)
- LLCs/Corps require BOTH

**PEP vs Sanctions Screening:**
- PEP = Risk-based, enhanced due diligence (not prohibited)
- Sanctions = Mandatory, strict liability (absolute prohibition)

**25% vs 50% Thresholds:**
- 25% = Beneficial ownership identification (FinCEN CDD Rule)
- 50% = Entity blocking threshold (OFAC 50% Rule)

### Non-Negotiable Requirements

1. **OFAC Sanctions Screening:** Strict liability, mandatory, all merchants/UBOs/transactions
2. **Beneficial Ownership:** Identify all 25%+ owners OR control person (FinCEN CDD Rule)
3. **Real-Time Screening:** Cannot rely on batch-only (EU IPR standard)
4. **Record Retention:** 10 years (updated March 21, 2025)
5. **No Tipping Off:** Federal crime to disclose SAR or sanctions blocking

### Common Mistakes to Avoid

1. Skipping liveness detection (deepfake vulnerability)
2. Accepting old Certificates of Good Standing (>90 days)
3. Not tracing multi-layer ownership to natural persons
4. Assuming PEP screening is mandatory
5. Believing "good faith effort" protects from OFAC strict liability
6. Auto-approving fuzzy matches without manual review
7. Batch-only screening instead of real-time
8. Disclosing sanctions/SAR to merchant (tipping off)

### Best Practices

- Combine documentary + non-documentary verification
- Require ISO/IEC 30107-3 PAD Level 1+ liveness detection
- EIN verification via IRS TIN Matching (real-time)
- Secretary of State verification for all LLCs/Corps
- Certificate of Good Standing &lt;90 days old
- Trace all ownership paths for beneficial ownership calculation
- Screen all UBOs, not just majority owners
- Real-time sanctions screening with daily batch re-screening
- Use secondary identifying data (DOB, address) for fuzzy match resolution
- Document ALL screening decisions (10-year retention)

### When to Escalate to Sponsor Bank

- Any sanctions screening true match (immediate)
- Uncertain fuzzy match after investigation
- Complex multi-layer ownership (>3 layers or offshore entities)
- High-risk industry + shell company indicators
- Merchant requests processing for sanctioned countries
- Beneficial owner changes post-onboarding
- Any uncertainty about compliance obligation

---

## Additional Study Resources

- [KYC Requirements](./kyc-requirements.md) - Full KYC module content
- [KYB Requirements](./kyb-requirements.md) - Entity verification deep dive
- [Beneficial Ownership](./beneficial-ownership.md) - UBO identification and calculation
- [Sanctions Screening](./sanctions-screening.md) - OFAC compliance comprehensive guide
- [Payments Glossary](/glossary) - Payment industry terminology reference

---

**Completion Note:** You've completed the KYC & KYB module quiz. Review any questions where you struggled, and refer back to the detailed module content for deeper understanding. These concepts form the foundation of compliant merchant onboarding and are essential for PayFac platform operations.
