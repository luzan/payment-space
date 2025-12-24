---
title: "Network Rules and Compliance"
description: "Why card networks publish extensive rulebooks and what happens when merchants violate network rules"
sidebar_position: 3
sidebar_label: "Network Rules"
keywords:
  - network rules
  - card network compliance
  - visa rules
  - mastercard rules
  - merchant violations
  - MATCH list
  - TMF
  - network fines
  - PCI-DSS
---

# Network Rules and Compliance

Card networks publish extensive rulebooks that all participants must follow. Understanding these rules is critical for merchants, acquirers, and PayFacs.

---

## Why Network Rules Exist

Card network rules serve four primary purposes that maintain the integrity and functionality of the payment ecosystem.

### 1. Interoperability

**THE CHALLENGE:**
Without standards, card payments wouldn't work across different banks and merchants.

**HOW RULES SOLVE IT:**
- Any Visa card works at any Visa-accepting merchant worldwide
- Consistent experience regardless of issuer or acquirer
- Standardized message formats (ISO 8583)
- Common security requirements (PCI-DSS)
- Uniform dispute processes

**EXAMPLE:**
A Chase Visa card issued in New York works at a merchant in Tokyo because both parties follow the same Visa rulebook.

### 2. Consumer Protection

**THE CHALLENGE:**
Cardholders need consistent protections regardless of which bank issued their card.

**HOW RULES SOLVE IT:**
- Chargeback rights (dispute process)
- Zero liability for fraud
- Data protection requirements
- Receipt and disclosure requirements
- Refund policies

**EXAMPLE:**
If you dispute a charge on your Visa card, the process is the same whether the card is from Chase, Bank of America, or a credit union.

### 3. Brand Protection

**THE CHALLENGE:**
Bad actors can damage the reputation and trust of the entire payment network.

**HOW RULES SOLVE IT:**
- Prevent merchants from damaging the brand
- Maintain trust in the payment system
- Exclude bad actors quickly
- Ensure consistent quality
- Protect network reputation

**EXAMPLE:**
A merchant processing excessive fraudulent transactions can be terminated and placed on the MATCH list, preventing them from damaging the Visa brand at other acquirers.

### 4. Risk Management

**THE CHALLENGE:**
Payment fraud and security breaches threaten the entire ecosystem.

**HOW RULES SOLVE IT:**
- Security standards (PCI-DSS)
- Chargeback thresholds
- Prohibited business types
- Data protection requirements
- Fraud monitoring requirements

**EXAMPLE:**
Networks require all merchants to comply with PCI-DSS standards, reducing the risk of data breaches that could affect millions of cardholders.

---

## Key Network Rules

### Acceptance Rules

| Rule | Description | Why It Exists |
|------|-------------|---------------|
| **Honor All Cards** | Must accept all valid cards of that brand | Prevents cherry-picking profitable cards |
| **No Surcharging** (varies by jurisdiction) | Cannot charge more for card vs cash in some states | Consumer protection, brand value |
| **Minimum Transaction** | Can set up to $10 minimum (credit cards) | Balance merchant costs with convenience |
| **Display Logos** | Must display network logos at point of sale | Brand visibility, customer awareness |

**Honor All Cards Deep Dive:**

If you accept Visa, you MUST accept:
- Standard Visa cards
- Visa Signature (premium rewards)
- Visa Infinite (ultra-premium)
- Visa corporate cards
- Visa prepaid cards

You CANNOT:
- Accept only low-interchange Visa cards
- Refuse premium rewards cards
- Discriminate based on interchange cost

:::tip Surcharging Rules (2024-2025)
- **Allowed in most US states** (with restrictions)
- Must register with networks 30 days in advance
- Cannot surcharge debit cards
- Surcharge cannot exceed processing cost (typically capped at 3-4%)
- Must be disclosed clearly before transaction
- Some states ban surcharging entirely (CA, CO, CT, FL, KS, MA, ME, NY, OK, TX)
:::

### Security Rules

| Rule | Description | Penalty for Violation |
|------|-------------|----------------------|
| **PCI-DSS Compliance** | Must comply with Payment Card Industry Data Security Standards | Fines, increased fees, termination |
| **No CVV Storage** | Cannot store CVV/CVC after authorization | $5,000-$50,000 per incident |
| **Data Encryption** | Must encrypt cardholder data | Fines, liability for breaches |
| **EMV Liability Shift** | Must accept chip cards or bear fraud liability | Merchant liable for counterfeit fraud |

**PCI-DSS Compliance Levels:**

| Level | Transaction Volume (Annual) | Requirements |
|-------|----------------------------|--------------|
| **Level 1** | 6M+ transactions | Annual ROC (Report on Compliance) by QSA |
| **Level 2** | 1M - 6M transactions | Annual SAQ (Self-Assessment Questionnaire) |
| **Level 3** | 20K - 1M e-commerce | Annual SAQ |
| **Level 4** | < 20K e-commerce, < 1M total | Annual SAQ |

### Data Rules

| Rule | Description | Purpose |
|------|-------------|---------|
| **No CVV Storage** | Cannot store CVV/CVC after authorization | Prevents card-not-present fraud if breached |
| **Limited Data Retention** | Can only store specific data elements | Minimizes breach impact |
| **Truncation** | Must truncate PAN on receipts (show only last 4) | Prevents shoulder surfing, protects privacy |
| **Tokenization** | Encouraged to tokenize card data | Reduces PCI scope, enhances security |

### Dispute Rules

| Rule | Description | Timeframe |
|------|-------------|-----------|
| **Chargeback Response** | Must respond to chargebacks within specified timeframes | 7-30 days depending on reason code |
| **Representment** | Can challenge invalid chargebacks | 10-45 days depending on reason code |
| **Documentation Requirements** | Must maintain transaction records | 18-24 months minimum |
| **Refund to Same Card** | Must refund to same card used for purchase | Immediately upon refund request |

### Refund Rules

| Rule | Description |
|------|-------------|
| **Same Card** | Must refund to the same card used for original purchase |
| **Prompt Processing** | Must process refunds within 3-5 business days |
| **No Cash Refunds** | Cannot offer cash refunds for card purchases (in most cases) |
| **Full Refund** | Cannot deduct fees from customer refund |

---

## Consequences of Rule Violations

Networks have a progressive enforcement approach that escalates with severity and repetition.

### Violation Escalation Path

```text
VIOLATION ESCALATION PATH:

Level 1: WARNING
│         • First-time minor violation
│         • Educational notice sent
│         • Opportunity to remediate
│         • No financial penalty
│
▼
Level 2: FINES
│         • Repeated violations
│         • $5,000 - $25,000 per incident
│         • Monthly non-compliance fees
│         • Formal warning on record
│
▼
Level 3: INCREASED MONITORING
│         • Enhanced reporting requirements
│         • More frequent audits
│         • Higher reserve requirements
│         • Restricted processing privileges
│
▼
Level 4: RESTRICTIONS
│         • Processing volume caps
│         • Higher fees/reserves
│         • Loss of certain privileges
│         • Required remediation plan
│
▼
Level 5: TERMINATION
          • Placed on MATCH/TMF (Terminated Merchant File) list
          • Cannot accept cards for 5+ years
          • Severe reputational damage
          • May affect ability to get banking services
```

### Common Violations and Fines

**EXCESSIVE CHARGEBACKS:**
- **Threshold:** 1% of transactions (Visa), 1.5% (Mastercard)
- **Early Warning:** 0.65% (Visa), 0.9% (Mastercard)
- **Fines:** $5,000-$25,000 per month while in program
- **Resolution:** Mandatory fraud prevention plan, increased monitoring

**PCI-DSS NON-COMPLIANCE:**
- **Fine:** $5,000-$100,000 per month
- **Data Breach:** $50-$90 per compromised card
- **Level 1 violation:** Up to $500,000 per incident
- **Resolution:** Immediate remediation, forensic investigation

**PROCESSING PROHIBITED TRANSACTIONS:**
- **Examples:** Adult content without proper classification, illegal goods
- **Fine:** $25,000-$50,000 per incident
- **Resolution:** Immediate cessation, possible termination

**IMPROPER SURCHARGING:**
- **Fine:** $5,000-$10,000 per incident
- **Resolution:** Remove surcharges, refund affected customers

**DATA BREACHES:**
- **Forensic investigation costs:** $50,000-$500,000+
- **Card reissuance:** $3-$5 per affected card
- **Fraud losses:** Variable, potentially millions
- **Fines:** $50,000-$500,000+ depending on scope
- **Resolution:** Full PCI remediation, third-party monitoring

**FRAUD RATE ABOVE THRESHOLD:**
- **Threshold:** Typically 0.9% (varies by MCC)
- **Fine:** $5,000-$25,000 per month
- **Resolution:** Enhanced fraud screening, reserve increases

---

## The MATCH List (Terminated Merchant File)

The MATCH list is the payment industry's blacklist for terminated merchants.

### What is MATCH?

**MATCH** = Member Alert to Control High-Risk Merchants

**Operated by:** Mastercard (but affects all networks)

**Purpose:** Share information about merchants terminated for cause

**Impact:** Makes it nearly impossible to get a new merchant account for 5+ years

### MATCH Listing Reasons

| Reason Code | Description | Recovery Difficulty |
|-------------|-------------|---------------------|
| **01** | Account Data Compromise | Very Difficult |
| **02** | Common Point of Purchase (mass breach) | Very Difficult |
| **04** | Excessive Chargebacks | Moderate |
| **05** | Excessive Fraud | Difficult |
| **07** | Fraud Conviction | Very Difficult |
| **08** | Mastercard Questionable Merchant Audit Program | Difficult |
| **09** | Bankruptcy/Liquidation/Insolvency | Moderate |
| **10** | Violation of Standards | Moderate |
| **11** | Merchant Collusion | Very Difficult |
| **12** | PCI-DSS Non-Compliance | Moderate |
| **13** | Illegal Transactions | Very Difficult |
| **14** | Identity Theft | Very Difficult |

### Getting Off the MATCH List

**REVIEW PROCESS:**
- Submit written request to acquirer who listed you
- Provide evidence of remediation
- May require third-party attestation
- Acquirer decides whether to remove

**TIMELINE:**
- Minimum 90 days before review
- Typical stay: 5 years
- Can be permanent for severe violations

**SUCCESS RATE:**
- Very low for fraud/breach reasons (< 5%)
- Moderate for chargebacks/compliance (20-30%)
- Requires substantial evidence of reform

---

## Network Monitoring Programs

### Visa Integrity Risk Program (VIRP)

**EXCESSIVE CHARGEBACK MERCHANTS (ECM):**
- Threshold: 1% chargeback ratio AND 100 chargebacks per month
- Early Warning: 0.65% chargeback ratio
- Fines: $5,000-$25,000 per month
- Duration: Until below threshold for 3 consecutive months

**FRAUD MONITORING PROGRAM:**
- Threshold: Varies by MCC (typically 0.9%)
- Fines: $5,000-$25,000 per month
- Required: Enhanced fraud screening

### Mastercard Excessive Chargeback Program (ECP)

**CHARGEBACK MONITORING PROGRAM:**
- Threshold: 1.5% chargeback ratio AND 100 chargebacks
- Early Warning: 0.9% chargeback ratio
- Fines: Progressive ($5K → $10K → $25K per month)
- Assessments: Continue until resolved

**EXCESSIVE FRAUD MERCHANT (EFM):**
- Threshold: 0.9% fraud rate
- Fines: $10,000-$25,000 per month
- Enhanced monitoring required

---

## Compliance Best Practices

### For Merchants

**1. STAY BELOW THRESHOLDS:**
- Chargeback ratio: Keep < 0.5%
- Fraud ratio: Keep < 0.3%
- Monitor weekly, don't wait for network notices

**2. IMPLEMENT FRAUD PREVENTION:**
- CVV verification for CNP
- AVS (Address Verification System)
- 3D Secure (Verified by Visa, Mastercard SecureCode)
- Fraud scoring tools
- Velocity checks

**3. MAINTAIN PCI COMPLIANCE:**
- Complete annual SAQ
- Use tokenization
- Never store CVV
- Encrypt data in transit and at rest
- Regular security scans

**4. RESPOND TO DISPUTES QUICKLY:**
- Reply within 7 days
- Provide compelling evidence
- Maintain documentation
- Track reason codes

### For PayFacs

**1. UNDERWRITE SUB-MERCHANTS:**
- Know Your Customer (KYC)
- Check MATCH list before onboarding
- Monitor MCC appropriateness
- Assess chargeback risk by vertical

**2. MONITOR PORTFOLIO:**
- Aggregate chargeback ratio
- Individual sub-merchant metrics
- Flag high-risk patterns early
- Proactive intervention

**3. MAINTAIN RESERVES:**
- Hold adequate reserves for chargebacks
- Per-merchant reserves for high-risk
- Network-required minimums
- Liquidity for rapid response

**4. EDUCATE SUB-MERCHANTS:**
- Network rule training
- Chargeback prevention
- PCI compliance requirements
- Best practices documentation

---

## Real-World Examples

### Example 1: Excessive Chargebacks

**SCENARIO:**
- Merchant: Online electronics seller
- Monthly volume: $500,000
- Chargebacks: 750 per month (1.5% ratio)

**CONSEQUENCE:**
1. Enters Visa ECM Program (exceeds 1% threshold)
2. $5,000 fine for first month
3. Required to implement fraud prevention plan
4. Increased reserves: $50,000 held
5. Monthly reviews until below 0.65% for 3 months

**RESOLUTION:**
- Implemented 3D Secure
- Enhanced product descriptions
- Improved customer service
- 6 months to resolve
- Total fines: $30,000

### Example 2: PCI Non-Compliance

**SCENARIO:**
- Merchant: Mid-size e-commerce site
- Failed to complete annual SAQ
- Stored CVV codes in database

**CONSEQUENCE:**
1. $10,000 per month non-compliance fee
2. Forensic investigation ordered
3. Required to engage QSA (Qualified Security Assessor)
4. Increased monitoring for 12 months

**RESOLUTION:**
- Removed CVV storage
- Completed full PCI assessment
- Implemented tokenization
- Total cost: $75,000 (fines + remediation)

### Example 3: MATCH Listing

**SCENARIO:**
- Merchant: New online retailer
- Chargeback ratio: 5% (very high)
- Multiple customer complaints
- Unresponsive to dispute requests

**CONSEQUENCE:**
1. Acquirer terminates merchant account
2. Placed on MATCH list (Reason Code 04 - Excessive Chargebacks)
3. Cannot obtain new merchant account for 5 years
4. Business forced to close

**OUTCOME:**
- Business shut down
- Owner cannot start new merchant business
- Permanent reputation damage

---

## Key Takeaways

1. **Rules ensure interoperability** - Without standards, card payments wouldn't work globally

2. **Violations have real consequences** - From warnings to MATCH listing, networks enforce rules strictly

3. **Prevention is cheaper than remediation** - Staying compliant costs less than fines and restrictions

4. **MATCH listing is severe** - A 5-year ban from card acceptance can end a business

5. **PayFacs inherit compliance risk** - When sub-merchants violate rules, PayFacs face consequences

---

## Related Topics

**Card Network Fundamentals:**
- **[Card Network Role Overview](/ecosystem/fundamentals/card-network-role/)** - What card networks do
- **[Transaction Routing](/ecosystem/fundamentals/card-network-role/transaction-routing)** - How networks route transactions

**Risk Management:**
- **[Chargebacks and Disputes](/ecosystem/fundamentals/transaction-lifecycle/chargebacks)** - Dispute process details
- **Security Standards** - PCI-DSS compliance guide

**Business Operations:**
- **[Network Fees](/ecosystem/fundamentals/card-network-role/network-fees)** - Understanding assessment fees
- **[PayFac Compliance](/ecosystem/fundamentals/four-party-model/payfac)** - PayFac-specific compliance

---

## References

### Official Network Rules

- [Visa Core Rules and Product and Service Rules](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf) - Complete Visa rulebook (800+ pages)
- [Mastercard Rules Manual](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/mastercard-rules.pdf) - Mastercard standards
- [American Express Merchant Regulations](https://www.americanexpress.com/us/merchant/merchant-operating-guide.html) - Amex operating guide

### Compliance Resources

- [PCI Security Standards Council](https://www.pcisecuritystandards.org/) - PCI-DSS requirements and SAQs
- [Visa Merchant Compliance Guide](https://usa.visa.com/dam/VCOM/download/merchants/visa-merchant-data-standards-manual.pdf)

### Monitoring Programs

- [Visa Integrity Risk Program](https://usa.visa.com/support/consumer/security.html)
- [Mastercard Excessive Chargeback Program](https://www.mastercard.us/en-us/business/overview/safety-and-security/security-recommendations.html)

---

*Continue learning: [Network Fees and Assessments](/ecosystem/fundamentals/card-network-role/network-fees)*
