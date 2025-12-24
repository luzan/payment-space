---
title: "Chargeback Lifecycle"
description: "Understanding the chargeback lifecycle, retrieval requests, representment, and dispute management"
sidebar_position: 6
sidebar_label: "Chargebacks"
keywords: [chargeback, dispute, representment, retrieval request, chargeback reason codes, pre-arbitration, arbitration]
---

# Chargeback Lifecycle

Chargebacks are forced reversals initiated by the cardholder's issuing bank. Understanding the chargeback lifecycle is essential for merchants, processors, and payment facilitators.

## What is a Chargeback?

A chargeback occurs when a cardholder disputes a transaction with their issuing bank, and the issuer reverses the transaction—pulling funds from the merchant's account.

**Common reasons for chargebacks:**
- Fraud (card stolen or compromised)
- Merchant error (duplicate charge, wrong amount)
- Product/service issues (not received, not as described)
- Subscription disputes (cancelled but still charged)
- Processing errors (technical issues)

:::warning Financial Impact
Chargebacks cost merchants both the transaction amount AND a chargeback fee ($15-$100). Even if the merchant wins the dispute, they often don't recover the chargeback fee.
:::

## Chargeback Lifecycle Phases

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      CHARGEBACK LIFECYCLE                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PHASE 1: FIRST CHARGEBACK (Day 0-120 from transaction)                     │
│  ─────────────────────────────────────────────────                          │
│                                                                             │
│  Customer       Issuer         Network        Acquirer       Merchant       │
│      │            │               │              │              │           │
│      │ "I didn't  │               │              │              │           │
│      │ make this  │               │              │              │           │
│      │ purchase"  │               │              │              │           │
│      │───────────▶│               │              │              │           │
│      │            │  Initiate     │              │              │           │
│      │            │  Chargeback   │              │              │           │
│      │            │──────────────▶│              │              │           │
│      │            │               │─────────────▶│              │           │
│      │            │               │              │─────────────▶│           │
│      │            │               │              │              │           │
│      │            │               │              │   $100 + $25 │           │
│      │            │               │              │   debited    │           │
│      │            │               │              │              │           │
│                                                                             │
│  Merchant has 10-30 days to respond with evidence                           │
│                                                                             │
│                                                                             │
│  PHASE 2: REPRESENTMENT (Merchant fights back)                              │
│  ─────────────────────────────────────────────                              │
│                                                                             │
│  Merchant submits evidence:                                                 │
│  • Signed receipt / delivery confirmation                                   │
│  • AVS/CVV match records                                                    │
│  • Communication with customer                                              │
│  • Product/service evidence                                                 │
│                                                                             │
│  If issuer accepts evidence → Funds returned to merchant                    │
│  If issuer rejects → Proceed to pre-arbitration                             │
│                                                                             │
│                                                                             │
│  PHASE 3: PRE-ARBITRATION                                                   │
│  ────────────────────────                                                   │
│                                                                             │
│  Second round of evidence review                                            │
│  Higher stakes - losing party pays fees                                     │
│                                                                             │
│                                                                             │
│  PHASE 4: ARBITRATION (Final)                                               │
│  ───────────────────────────                                                │
│                                                                             │
│  Network makes final decision                                               │
│  Fees (2024-2025):                                                          │
│  • Visa: $500 filing fee (up from $350 in 2020)                             │
│  • Mastercard: $350-$500 depending on chargeback type                       │
│  • Pre-arbitration fees: $50-$100 additional                                │
│  Losing party pays these fees                                               │
│  Decision is binding                                                        │
│                                                                             │
│                                                                             │
│  COMMON CHARGEBACK REASON CODES:                                            │
│  ───────────────────────────────                                            │
│                                                                             │
│  │ Code │ Reason                    │ Common Cause                │         │
│  ├──────┼───────────────────────────┼─────────────────────────────┤         │
│  │ 10.4 │ Fraud - Card Absent       │ Stolen card used online     │         │
│  │ 13.1 │ Merchandise Not Received  │ Shipping issues             │         │
│  │ 13.3 │ Not as Described          │ Quality disputes            │         │
│  │ 13.6 │ Credit Not Processed      │ Refund not issued           │         │
│  │ 13.7 │ Cancelled Merchandise     │ Subscription issues         │         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Phase 1: Initial Chargeback

### Timeline and Windows

```
CHARGEBACK INITIATION WINDOWS
─────────────────────────────────────────────────────────

Transaction Date: Day 0
                    │
                    ▼
            ┌───────────────┐
            │               │
    Day 1-120: Customer can dispute
            │   (up to 120 days for most reason codes)
            │   (up to 540 days for fraud claims)
            │
            └───────────────┘
                    │
                    ▼
         Issuer files chargeback
                    │
                    ▼
    Merchant notified: 10-30 days to respond
```

### What Happens When Chargeback Filed

1. **Cardholder contacts issuer**: "I didn't make this purchase" or "Item never arrived"
2. **Issuer investigates**: Reviews transaction, cardholder history
3. **Issuer files chargeback**: Sends dispute to network with reason code
4. **Network routes to acquirer**: Acquirer forwards to merchant
5. **Funds debited immediately**: Merchant account debited for transaction + fee
6. **Merchant notified**: Receives chargeback notification with reason code and deadline

### Financial Impact

```
CHARGEBACK DEBIT EXAMPLE
────────────────────────────────────────────

Original transaction: $100.00
Merchant received (net): $97.50 (after processing fees)

Chargeback filed:
• Transaction amount: -$100.00
• Chargeback fee: -$25.00
• ─────────────────────────────
  Total debited: -$125.00

Merchant's net position: -$27.50
(They received $97.50, but paid out $125.00)

If merchant WINS representment:
• Transaction amount: +$100.00
• Chargeback fee: Usually NOT refunded (-$25.00)
• ─────────────────────────────
  Net position: -$25.00 + processing fees

Even winning costs money!
```

## Phase 2: Representment (Fighting the Chargeback)

Representment is the merchant's opportunity to provide evidence that the transaction was legitimate.

### Compelling Evidence by Reason Code

```
┌─────────────────────────────────────────────────────────────────┐
│ EVIDENCE REQUIREMENTS BY CHARGEBACK TYPE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ FRAUD CHARGEBACKS (10.4, 83 - "I didn't make this purchase")   │
│ ─────────────────────────────────────────────────────────────   │
│ Strong Evidence:                                                │
│ • Signed delivery receipt with cardholder signature             │
│ • AVS and CVV match                                             │
│ • IP address matching cardholder's location                     │
│ • Device fingerprint matching previous purchases                │
│ • 3D Secure authentication passed                               │
│ • Photos of cardholder receiving goods                          │
│ • Communication from cardholder's email address                 │
│                                                                 │
│ Weak Evidence:                                                  │
│ • Generic tracking number (no signature)                        │
│ • Merchant's terms and conditions                               │
│ • General fraud prevention measures                             │
│                                                                 │
│                                                                 │
│ MERCHANDISE NOT RECEIVED (13.1)                                 │
│ ──────────────────────────────────                              │
│ Strong Evidence:                                                │
│ • Delivery confirmation with signature                          │
│ • Tracking showing delivered to cardholder address              │
│ • Photo proof of delivery                                       │
│ • Confirmation from shipping carrier                            │
│ • Communication acknowledging receipt                           │
│                                                                 │
│ Weak Evidence:                                                  │
│ • Shipping label created but no delivery proof                  │
│ • Tracking showing "in transit"                                 │
│                                                                 │
│                                                                 │
│ NOT AS DESCRIBED (13.3)                                         │
│ ───────────────────────                                         │
│ Strong Evidence:                                                │
│ • Detailed product descriptions from listing                    │
│ • Photos of actual item sent                                    │
│ • Customer communication showing satisfaction                   │
│ • Return policy showing customer didn't attempt return          │
│                                                                 │
│                                                                 │
│ CREDIT NOT PROCESSED (13.6 - "I returned it but no refund")    │
│ ────────────────────────────────────────────────────────────    │
│ Strong Evidence:                                                │
│ • Refund confirmation (already processed)                       │
│ • Return policy showing customer didn't follow procedure        │
│ • Communication denying return request (with reason)            │
│ • No return received (tracking proof)                           │
│                                                                 │
│                                                                 │
│ CANCELLED MERCHANDISE (13.7 - Subscriptions)                    │
│ ────────────────────────────────────────────                    │
│ Strong Evidence:                                                │
│ • Proof services continued after "cancellation date"            │
│ • Cancellation policy showing customer didn't follow process    │
│ • Communication showing customer knew billing would continue    │
│ • Usage logs after cancellation request                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Representment Package Checklist

```markdown
REPRESENTMENT SUBMISSION CHECKLIST
─────────────────────────────────────────

□ Cover letter summarizing why chargeback should be reversed

□ Copy of transaction receipt/invoice

□ For Card-Present:
  □ Signed receipt (if available)
  □ EMV chip read confirmation
  □ Terminal ID and transaction details

□ For Card-Not-Present:
  □ AVS match documentation
  □ CVV match documentation
  □ 3D Secure authentication results
  □ IP address and geolocation data
  □ Device fingerprint

□ Delivery Confirmation:
  □ Tracking number
  □ Delivery signature
  □ Photo proof of delivery
  □ Delivery to verified address

□ Customer Communication:
  □ Email correspondence
  □ Chat logs
  □ Support ticket history
  □ Any acknowledgment of receipt/satisfaction

□ Return/Refund Policy:
  □ Posted policy at time of transaction
  □ Proof customer accepted terms
  □ Evidence customer didn't follow policy

□ Service/Product Evidence:
  □ Description of what was provided
  □ Digital goods: Download/usage logs
  □ Services: Proof of completion
  □ Photos of physical goods

□ Previous Transaction History:
  □ Prior successful transactions with same card
  □ Pattern of legitimate purchases
```

### Win Rates by Evidence Quality

| Evidence Quality | Typical Win Rate | Notes |
|-----------------|------------------|-------|
| **Strong evidence** (signed delivery, 3DS, AVS/CVV) | 60-80% | Best chance of winning |
| **Moderate evidence** (tracking, some auth) | 30-50% | Case-by-case basis |
| **Weak evidence** (generic response, policies) | 10-20% | Rarely successful |
| **No response** | 0% | Automatic loss |

:::tip Always Respond
Even if evidence is weak, always respond to chargebacks. A weak defense (10-20% win rate) is better than no defense (0% win rate). Plus, it shows you're engaged and may deter future frivolous chargebacks.
:::

## Retrieval Requests

Retrieval requests (also called "copy requests") are pre-chargeback inquiries from the issuer.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        RETRIEVAL REQUESTS                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  WHAT IT IS:                                                                │
│  ───────────                                                                │
│  A retrieval request (also called "copy request") is when an issuer        │
│  asks for documentation about a transaction BEFORE initiating a             │
│  chargeback.                                                                │
│                                                                             │
│  WHY IT HAPPENS:                                                            │
│  ───────────────                                                            │
│  • Cardholder doesn't recognize the charge                                  │
│  • Cardholder needs receipt for expense report                              │
│  • Issuer investigating potential fraud                                     │
│                                                                             │
│  MERCHANT RESPONSE:                                                         │
│  ─────────────────                                                          │
│  Must provide within 10-20 days:                                            │
│  • Copy of signed receipt                                                   │
│  • Transaction details                                                      │
│  • Proof of delivery (if applicable)                                        │
│                                                                             │
│  IF MERCHANT DOESN'T RESPOND:                                               │
│  ────────────────────────────                                               │
│  • Request escalates to chargeback                                          │
│  • Merchant loses ability to fight                                          │
│  • Automatic loss                                                           │
│                                                                             │
│  BEST PRACTICE:                                                             │
│  ─────────────                                                              │
│  Always respond to retrieval requests - they're a WARNING                   │
│  Responding often prevents the chargeback entirely                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Retrieval Request Response Strategy

```
RETRIEVAL REQUEST WORKFLOW
──────────────────────────────────────────

Retrieval request received
        │
        ▼
Gather documentation immediately
        │
        ├─── Transaction details
        ├─── Receipt/invoice
        ├─── Delivery confirmation
        └─── Any customer communication
        │
        ▼
Submit within 48 hours (deadline: 10-20 days)
        │
        ▼
Include MORE than requested
        │
        ├─── Cover note explaining transaction
        ├─── Highlight delivery confirmation
        └─── Show customer satisfaction if available
        │
        ▼
    OUTCOMES:
        │
        ├─── Issuer satisfied → No chargeback
        ├─── Customer satisfied → Dispute withdrawn
        └─── Issuer not satisfied → Chargeback filed
                │
                └─── You already have evidence ready!
```

:::tip Retrieval Requests Are Opportunities
Responding thoroughly to retrieval requests can prevent 30-50% of potential chargebacks. Treat them as seriously as chargebacks themselves.
:::

## Phase 3 & 4: Pre-Arbitration and Arbitration

### Pre-Arbitration

If the issuer rejects representment, they can file pre-arbitration:

```
PRE-ARBITRATION PROCESS
───────────────────────────────────────────

Merchant wins representment
        │
        ▼
Issuer disagrees with decision
        │
        ▼
Issuer files PRE-ARBITRATION
        │
        ├─── Fee: $50-$100 (added to costs)
        ├─── Provides additional evidence
        └─── Claims representment evidence insufficient
        │
        ▼
Merchant's options:
        │
        ├─── Accept liability (refund and stop)
        │    • Pay transaction + chargeback fee + pre-arb fee
        │    • Total loss
        │
        └─── Proceed to arbitration
             • Additional $350-$500 fee risk
             • Network makes FINAL decision
             • Losing party pays ALL fees
```

### Arbitration (Final Stage)

Arbitration is the last resort and carries significant costs:

```
ARBITRATION COSTS (2024-2025 Rates)
────────────────────────────────────────────

Visa:
• Filing fee: $500 (up from $350 in 2020)
• Withdrawal fee: $250 (if you back out)
• Pre-arbitration fee: $50-$100
• Losing party pays ALL fees

Mastercard:
• Filing fee: $350-$500 (based on chargeback type)
• Additional review fee: $100
• Losing party pays ALL fees

American Express:
• Arbitration fee: $500
• Express handling (expedited): +$250
• Losing party pays ALL fees


DECISION TO ARBITRATE:
──────────────────────────────────────────

Only arbitrate when:
✓ Transaction value > $1,000 (otherwise fees exceed value)
✓ Evidence is exceptionally strong
✓ Establishing precedent is valuable
✓ Pattern of fraud from same customer

Do NOT arbitrate when:
✗ Transaction value < $500
✗ Evidence is weak or circumstantial
✗ Simpler to accept liability
✗ Cost of fees > transaction amount
```

## Chargeback Reason Codes

### Visa Reason Codes (Current)

| Code | Category | Description | Merchant Actions |
|------|----------|-------------|-----------------|
| **10.4** | Fraud | Fraud - Card-Absent Environment | Provide AVS, CVV, 3DS, delivery proof |
| **10.5** | Fraud | Fraud - Chip Counterfeit Transaction | EMV chip transaction proof |
| **11.1** | Authorization | Card Recovery Bulletin | N/A - lost/stolen card |
| **11.2** | Authorization | Declined Authorization | Provide valid auth code |
| **11.3** | Authorization | No Authorization | Obtain authorization for future transactions |
| **12.1** | Processing Errors | Late Presentment | Submit transactions timely |
| **12.2** | Processing Errors | Incorrect Transaction Code | Use correct transaction type |
| **12.6** | Processing Errors | Duplicate Processing | Prove both transactions valid or refund |
| **13.1** | Consumer Disputes | Merchandise/Services Not Received | Delivery confirmation |
| **13.2** | Consumer Disputes | Cancelled Recurring | Proof of no cancellation or continued service |
| **13.3** | Consumer Disputes | Not as Described | Product description, photos |
| **13.5** | Consumer Disputes | Misrepresentation | Accurate marketing materials |
| **13.6** | Consumer Disputes | Credit Not Processed | Proof refund processed or wasn't warranted |
| **13.7** | Consumer Disputes | Cancelled Merchandise | Proof cancellation not made or services continued |

### Mastercard Reason Codes (Current)

| Code | Category | Description | Merchant Actions |
|------|----------|-------------|-----------------|
| **4837** | Fraud | No Cardholder Authorization | Provide signed receipt or authorization proof |
| **4863** | Fraud | Cardholder Does Not Recognize | Provide clear descriptor, transaction details |
| **4834** | Point-of-Interaction | Duplicate Processing | Prove both charges valid |
| **4853** | Cardholder Dispute | Goods/Services Not Provided | Delivery confirmation |
| **4855** | Cardholder Dispute | Goods/Services Not as Described | Product description match |
| **4841** | Cardholder Dispute | Cancelled Recurring Transaction | Proof of active subscription |
| **4854** | Cardholder Dispute | Cardholder Dispute - Not Elsewhere Classified | Case-by-case evidence |

## Chargeback Monitoring Programs

Excessive chargebacks trigger network monitoring programs with severe consequences.

```
CHARGEBACK THRESHOLDS (2024-2025)
──────────────────────────────────────────────────────────

Visa Dispute Monitoring Program (VDMP):
┌─────────────────────────────────────────────────────┐
│ Early Warning:                                      │
│ • 0.65% chargeback ratio                            │
│ • 75 chargebacks per month                          │
│ • Warning letter, no fines                          │
│                                                     │
│ Standard:                                           │
│ • 0.9% chargeback ratio                             │
│ • 100 chargebacks per month                         │
│ • Fines: $50 per chargeback                         │
│                                                     │
│ Excessive:                                          │
│ • 1.8% chargeback ratio                             │
│ • 1,000 chargebacks per month                       │
│ • Fines: Up to $25,000/month                        │
│ • Risk of merchant account termination              │
│                                                     │
│ Fraud Monitoring Program (separate):                │
│ • 0.9% fraud chargeback ratio                       │
│ • Additional fines and monitoring                   │
└─────────────────────────────────────────────────────┘

Mastercard Excessive Chargeback Program (ECP):
┌─────────────────────────────────────────────────────┐
│ Early Warning:                                      │
│ • 0.65% chargeback ratio                            │
│ • 50 chargebacks per month                          │
│ • No fines, monitoring begins                       │
│                                                     │
│ Standard:                                           │
│ • 1.0% chargeback ratio                             │
│ • 100 chargebacks per month                         │
│ • Fines: Start at $1,000/month                      │
│                                                     │
│ Excessive:                                          │
│ • 1.5% chargeback ratio                             │
│ • 300 chargebacks per month                         │
│ • Fines: Up to $25,000/month                        │
│ • Mandatory remediation plan                        │
│ • Risk of termination                               │
└─────────────────────────────────────────────────────┘


CALCULATION:
Chargeback Ratio = (Chargebacks / Total Transactions) × 100%

Example:
• 10,000 transactions/month
• 95 chargebacks
• Ratio: (95 / 10,000) × 100% = 0.95%
• Status: Visa VDMP Standard threshold exceeded
```

:::danger MATCH List
Merchants terminated for excessive chargebacks are added to the MATCH list (Member Alert to Control High-risk merchants). Being on MATCH makes it nearly impossible to get a new merchant account for 5 years.
:::

## Platform/PayFac Chargeback Management

```
┌─────────────────────────────────────────────────────────────────┐
│ PAYFAC CHARGEBACK RESPONSIBILITIES                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 1. FINANCIAL LIABILITY                                          │
│    • PayFac is liable for sub-merchant chargebacks              │
│    • Must maintain reserves to cover chargeback risk            │
│    • Debit sub-merchant account or hold reserves                │
│                                                                 │
│ 2. MONITORING & ALERTING                                        │
│    • Track chargeback ratios per sub-merchant                   │
│    • Alert sub-merchants approaching thresholds                 │
│    • Escalate high-risk accounts                                │
│                                                                 │
│ 3. REPRESENTMENT SUPPORT                                        │
│    • Provide tools for submitting evidence                      │
│    • Templates for compelling evidence                          │
│    • Auto-response for retrieval requests when possible         │
│                                                                 │
│ 4. RISK MITIGATION                                              │
│    • Identify high-chargeback verticals                         │
│    • Enhanced due diligence for risky merchants                 │
│    • Terminate merchants exceeding thresholds                   │
│    • Maintain overall chargeback ratio <0.75%                   │
│                                                                 │
│ 5. REPORTING & ANALYTICS                                        │
│    • Chargeback dashboards for sub-merchants                    │
│    • Reason code trending                                       │
│    • Win/loss rates by evidence type                            │
│    • Early warning alerts                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Best Practices for Chargeback Prevention

### Prevention Strategies

```
CHARGEBACK PREVENTION CHECKLIST
────────────────────────────────────────────

□ CLEAR BILLING DESCRIPTORS
  • Use recognizable merchant name
  • Include website or phone number
  • Test how it appears on statements

□ EXCELLENT CUSTOMER SERVICE
  • Easy refund process (better than chargebacks)
  • Respond quickly to customer inquiries
  • Proactive communication about delays

□ DELIVERY CONFIRMATION
  • Always get signature for high-value items
  • Use trackable shipping
  • Photo proof of delivery

□ FRAUD PREVENTION
  • AVS and CVV matching
  • 3D Secure for CNP transactions
  • Device fingerprinting
  • Velocity checks

□ CLEAR POLICIES
  • Return/refund policy on website and receipt
  • Terms and conditions accepted at checkout
  • Cancellation process for subscriptions

□ TRANSACTION ACCURACY
  • Capture promptly after authorization
  • Don't charge before shipping
  • Correct amounts (no surprise fees)

□ DOCUMENTATION
  • Save all transaction records (7 years recommended)
  • Email confirmations with transaction details
  • Customer communication logs

□ RETRIEVAL REQUEST RESPONSE
  • Respond to ALL retrieval requests
  • Within 24-48 hours
  • Thorough documentation
```

## See Also

- [Failure Scenarios](./failure-scenarios.md) - Void vs refund vs chargeback
- [Complete Transaction Example](./complete-example.md) - Normal transaction flow
- [Transaction Lifecycle Overview](./overview.md) - Core concepts

## References

- [Visa Claims Resolution (VCR)](https://usa.visa.com/supporting-info/visa-claims-resolution.html) - Official Visa dispute process
- [Mastercard Chargeback Guide](https://www.mastercard.us/en-us/business/overview/support/rules.html) - Mastercard dispute procedures
- [Visa Dispute Management Guidelines for Merchants (PDF)](https://usa.visa.com/dam/VCOM/global/support-legal/documents/merchants-dispute-management-guidelines.pdf) - Best practices and evidence requirements
- [Verifi CDRN](https://www.verifi.com/solutions/prevent/) - Chargeback prevention network
- [Ethoca Alerts](https://ethoca.com/solutions/alerts/) - Pre-chargeback notification service
