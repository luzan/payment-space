---
title: "Failure Scenarios"
description: "Understanding authorization declines, voids, refunds, expired authorizations, and when to use each"
sidebar_position: 5
sidebar_label: "Failure Scenarios"
keywords: [authorization decline, void, refund, expired authorization, hard decline, soft decline]
---

# Failure Scenarios

Understanding failure scenarios is critical for building robust payment systems. This page covers authorization declines, the differences between voids and refunds, and handling expired authorizations.

## Authorization Declines

Not all authorization requests are approved. Understanding decline types helps determine the correct next action.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      COMMON DECLINE SCENARIOS                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  HARD DECLINES (do not retry)                                               │
│  ────────────────────────────                                               │
│  • Invalid card number (14)                                                 │
│  • Expired card (54)                                                        │
│  • Lost/Stolen card (41, 43)                                                │
│  • Card not activated                                                       │
│  • Account closed                                                           │
│                                                                             │
│  ACTION: Ask customer for different payment method                          │
│                                                                             │
│  SOFT DECLINES (may retry)                                                  │
│  ─────────────────────────                                                  │
│  • Insufficient funds (51)                                                  │
│  • Over credit limit (61)                                                   │
│  • Issuer unavailable (91)                                                  │
│  • System malfunction (96)                                                  │
│                                                                             │
│  ACTION: May retry after delay, or ask for different payment                │
│                                                                             │
│  FRAUD DECLINES                                                             │
│  ─────────────                                                              │
│  • Do not honor (05) - often fraud-related                                  │
│  • Suspected fraud (59)                                                     │
│  • Security violation (63)                                                  │
│                                                                             │
│  ACTION: Do NOT retry. Customer must contact issuer.                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Common Response Codes

| Code | Description | Type | Retry? | Customer Action |
|------|-------------|------|--------|-----------------|
| **00** | Approved | Success | N/A | Proceed |
| **05** | Do Not Honor | Fraud | No | Contact issuer |
| **14** | Invalid Card Number | Hard | No | Check card number |
| **41** | Lost Card | Hard | No | Use different card |
| **43** | Stolen Card | Hard | No | Use different card |
| **51** | Insufficient Funds | Soft | Maybe | Use different card or add funds |
| **54** | Expired Card | Hard | No | Use different card |
| **57** | Transaction Not Permitted | Hard | No | Check card restrictions |
| **59** | Suspected Fraud | Fraud | No | Contact issuer |
| **61** | Exceeds Withdrawal Limit | Soft | Later | Try smaller amount or wait |
| **63** | Security Violation | Fraud | No | Contact issuer |
| **65** | Activity Limit Exceeded | Soft | Later | Wait and retry |
| **91** | Issuer Unavailable | Soft | Yes | Retry in a few minutes |
| **96** | System Malfunction | Soft | Yes | Retry |

### Handling Declines in Your Application

```javascript
// Example decline handling logic
function handleAuthorizationResponse(response) {
  switch(response.code) {
    case '00':
      return { status: 'approved', action: 'complete_sale' };

    // Hard declines - don't retry
    case '14':
    case '54':
    case '41':
    case '43':
      return {
        status: 'declined',
        action: 'request_different_card',
        message: 'This card cannot be used. Please try a different payment method.'
      };

    // Fraud declines - don't retry
    case '05':
    case '59':
    case '63':
      return {
        status: 'declined',
        action: 'contact_issuer',
        message: 'Transaction declined. Please contact your card issuer.'
      };

    // Soft declines - may retry
    case '51':
    case '61':
      return {
        status: 'declined',
        action: 'offer_retry_or_different_card',
        message: 'Insufficient funds. Try a different card or lower amount.'
      };

    // System issues - retry
    case '91':
    case '96':
      return {
        status: 'declined',
        action: 'retry_after_delay',
        message: 'System temporarily unavailable. Retrying...'
      };

    default:
      return {
        status: 'declined',
        action: 'request_different_card',
        message: 'Transaction declined. Please try a different payment method.'
      };
  }
}
```

:::warning Never Retry Fraud Declines
Do NOT automatically retry transactions declined for fraud (codes 05, 59, 63). Repeated attempts can:
- Trigger additional fraud alerts
- Get the merchant flagged
- Block the customer's card entirely
:::

## Void vs Refund vs Chargeback

Understanding the differences between voids, refunds, and chargebacks is essential for cost management and customer service.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VOID vs REFUND vs CHARGEBACK                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  VOID                                                                       │
│  ────                                                                       │
│  When: BEFORE batch settlement (same day)                                   │
│  What: Cancels the authorization before capture                             │
│  Cost: Usually FREE - no interchange charged                                │
│  Result: Hold drops from customer's card immediately                        │
│                                                                             │
│  Best for: Customer changed mind, wrong amount, duplicate transaction       │
│                                                                             │
│                                                                             │
│  REFUND (Credit/Return)                                                     │
│  ──────────────────────                                                     │
│  When: AFTER batch settlement (next day+)                                   │
│  What: New transaction crediting money back to card                         │
│  Cost: Merchant pays refund transaction fees                                │
│        Interchange is generally NOT returned                                │
│  Result: Credit posts to customer's account in 3-10 days                    │
│                                                                             │
│  Best for: Returns, service issues, post-purchase problems                  │
│                                                                             │
│  INTERCHANGE ON REFUNDS - THE FULL STORY:                                   │
│  ─────────────────────────────────────────                                  │
│  General Rule: Interchange is NOT returned on refunds.                      │
│                                                                             │
│  Example:                                                                   │
│  • Sale: $100 (merchant pays $1.80 interchange)                             │
│  • Refund: $100 (merchant refunds full amount)                              │
│  • Merchant net loss: $1.80 + refund transaction fees                       │
│                                                                             │
│  EXCEPTIONS (important nuances):                                            │
│  • Voids (same day before settlement): Interchange never charged            │
│  • Some network programs: Partial interchange recovery within 24 hours      │
│  • Chargeback win: If merchant wins representment, interchange returned     │
│  • Auth reversal: Full release if reversed before settlement                │
│                                                                             │
│                                                                             │
│  CHARGEBACK                                                                 │
│  ──────────                                                                 │
│  When: Customer disputes with their bank (not merchant)                     │
│  What: Forced reversal initiated by issuer                                  │
│  Cost: Transaction amount + chargeback fee ($15-$100)                       │
│  Result: Funds pulled from merchant account                                 │
│                                                                             │
│  Merchant can fight chargebacks by submitting evidence                      │
│  Excessive chargebacks (>1%) can result in MATCH listing                    │
│                                                                             │
│  TIMELINE COMPARISON:                                                       │
│  ────────────────────                                                       │
│                                                                             │
│  Day 1        Day 2         Day 3-10      Day 30-120                        │
│    │            │              │              │                             │
│    │  ◄─VOID─►  │              │              │                             │
│    │            │  ◄──REFUND──►│              │                             │
│    │            │              │   ◄─────CHARGEBACK─────►                   │
│    │            │              │              │                             │
│  Sale       Settlement      Refund         Customer                         │
│            (batch close)    Posts          Disputes                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Decision Tree: Which Action to Take?

```
Transaction needs to be reversed
        │
        ▼
Is batch still open (same day)?
        │
        ├─── YES ──► Use VOID
        │            • Free
        │            • No interchange charged
        │            • Immediate hold release
        │
        └─── NO ──► Has batch settled?
                    │
                    ├─── YES ──► Use REFUND
                    │            • Costs fees
                    │            • Interchange lost
                    │            • Takes 3-10 days
                    │
                    └─── CUSTOMER DISPUTED ──► CHARGEBACK
                                               • Forced by issuer
                                               • Costs chargeback fee
                                               • Can fight with evidence
```

### Void Example

```
SCENARIO: Wrong Amount Entered
────────────────────────────────

10:00 AM: Cashier enters $150 instead of $15
          Authorization approved for $150

10:02 AM: Error caught
          Void transaction (before batch close)
          Re-authorize for $15

COST TO MERCHANT:
• Void: $0
• Total cost: Normal processing fee on $15 only

CUSTOMER EXPERIENCE:
• Sees $150 hold briefly (minutes)
• $15 charge posts
• No confusion or customer service calls
```

### Refund Example

```
SCENARIO: Product Return
────────────────────────

Monday:    Customer purchases $100 shirt
Tuesday:   Batch settles, merchant receives $97.50
Friday:    Customer returns shirt
           Merchant issues $100 refund

COST TO MERCHANT:
• Original sale interchange: $1.80 (NOT refunded)
• Refund processing fee: ~$0.50
• Total net cost: $2.30 for a $100 sale that was returned

CUSTOMER EXPERIENCE:
• Sees $100 charge (Monday)
• Sees $100 credit (Friday-Monday, takes 3-10 days to post)
• May briefly see both charges before credit posts
```

:::tip Minimize Refunds with Voids
Train staff to catch errors before batch close. A void costs nothing; a refund costs interchange fees that are never recovered.
:::

## Expired Authorizations

Authorizations don't last forever. Handling expired auths properly is critical for e-commerce and delayed-fulfillment merchants.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      EXPIRED AUTHORIZATION SCENARIOS                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SCENARIO: E-commerce merchant takes 10 days to ship                        │
│                                                                             │
│  Day 1:  Authorization for $150 - APPROVED                                  │
│  Day 10: Merchant tries to capture - PROBLEM!                               │
│                                                                             │
│  WHAT HAPPENS:                                                              │
│  ─────────────                                                              │
│  • Original auth expired (7 days for CNP)                                   │
│  • Hold dropped from customer's card                                        │
│  • Customer may have spent that available credit                            │
│                                                                             │
│  OPTIONS FOR MERCHANT:                                                      │
│  ────────────────────                                                       │
│  1. Re-authorize: New auth request                                          │
│     Risk: May decline if customer's credit situation changed                │
│                                                                             │
│  2. Force capture: Submit without valid auth                                │
│     Risk: Higher interchange rate ("downgrade")                             │
│     Risk: Customer chargeback ("transaction not authorized")                │
│                                                                             │
│  3. Incremental auth: Some networks allow extending auths                   │
│     Note: Must be done before original expires                              │
│                                                                             │
│  BEST PRACTICE:                                                             │
│  ─────────────                                                              │
│  • Capture quickly (ideally within 24-48 hours)                             │
│  • For delayed fulfillment, auth at shipment not checkout                   │
│  • Use auth reversal if order cancelled before capture                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Authorization Validity Periods

| Transaction Type | Visa | Mastercard | Best Practice |
|-----------------|------|------------|---------------|
| Standard retail (CP) | 7 days | 7 days | Capture within 24 hours |
| Card-not-present (CNP) | 7 days | 7 days | Capture at shipment |
| Hotels/Lodging | 31 days | 30 days | Capture at checkout |
| Car rental | 31 days | 30 days | Capture at return |
| Cruise lines | 31 days | 30 days | Capture at departure |

### Handling Expired Auths: Decision Matrix

```
Authorization has expired
        │
        ▼
Can you contact customer?
        │
        ├─── YES ──► Re-authorize with customer consent
        │            • Best option
        │            • Valid new authorization
        │            • No chargeback risk
        │
        └─── NO ──► Is order value high enough to risk?
                    │
                    ├─── YES (>$500) ──► Contact customer first
                    │                    Risk of decline too high
                    │
                    └─── NO (<$100) ──► Options:
                                        1. Force capture (risky)
                                        2. Cancel order (safe)
                                        3. Re-auth and hope (medium risk)
```

### E-commerce Best Practices

```
DELAYED FULFILLMENT STRATEGIES:
───────────────────────────────

OPTION 1: Authorize at Shipment (Recommended)
┌────────────────────────────────────────────────────┐
│ Day 1:  Customer places order                      │
│         NO authorization yet                       │
│         Send confirmation email                    │
│                                                    │
│ Day 5:  Order ready to ship                        │
│         Authorize card NOW                         │
│         If approved → ship                         │
│         If declined → contact customer             │
│                                                    │
│ Day 6:  Batch closes, capture settles             │
└────────────────────────────────────────────────────┘

PROS:
• No expired auth risk
• Customer's credit situation current
• Higher approval rates

CONS:
• Customer may not have funds when ready to ship
• Inventory held without payment guarantee
• Must handle "ship-time declines"


OPTION 2: Auth at Checkout, Re-auth Before Ship
┌────────────────────────────────────────────────────┐
│ Day 1:  Authorize at checkout ($150)               │
│         Hold funds, confirm order                  │
│                                                    │
│ Day 5:  Check auth age                             │
│         If >5 days, send new auth                  │
│         Void original if new auth succeeds         │
│                                                    │
│ Day 6:  Ship and capture                           │
└────────────────────────────────────────────────────┘

PROS:
• Validates payment method up front
• Prevents fraud orders
• Reserves customer funds

CONS:
• Complicated auth management
• Potential for declined re-auths
• Customer sees holds/charges changing


OPTION 3: Split Auth/Capture Model
┌────────────────────────────────────────────────────┐
│ Day 1:  Verify card with $1 auth then void         │
│         (or use $0 auth if supported)              │
│         Confirms card valid                        │
│                                                    │
│ Day 5:  Full authorization at shipment             │
│                                                    │
│ Day 6:  Capture and settle                         │
└────────────────────────────────────────────────────┘

PROS:
• Validates card early
• Minimal customer impact from verification
• Capture timing optimized

CONS:
• Card could be cancelled between verify and ship
• Extra auth request (small cost)
```

### Platform Considerations for Expired Auths

```javascript
// Example: Monitoring authorization age
function monitorAuthorizationAge() {
  const auths = getUnсapturedAuthorizations();

  auths.forEach(auth => {
    const ageInDays = getDaysSince(auth.created_at);

    if (ageInDays >= 5) {
      // Approaching expiration (7 days)
      notifyMerchant({
        authorization_id: auth.id,
        age: ageInDays,
        expires_in: 7 - ageInDays,
        recommended_action: 'capture_or_void_soon',
        message: 'Authorization expires in ' + (7 - ageInDays) + ' days'
      });
    }

    if (ageInDays >= 7) {
      // Expired
      notifyMerchant({
        authorization_id: auth.id,
        status: 'expired',
        recommended_action: 're_authorize_or_cancel',
        message: 'Authorization expired. Cannot capture. Must re-authorize.'
      });

      // Auto-mark as expired in platform
      auth.status = 'expired';
      auth.save();
    }
  });
}
```

## Recovery Strategies

### When a Transaction Fails

```
┌─────────────────────────────────────────────────────────────────┐
│ TRANSACTION FAILURE RECOVERY MATRIX                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Failure Type          │ Immediate Action  │ Follow-up          │
│ ─────────────────────┼───────────────────┼─────────────────── │
│ Hard decline         │ Request new card  │ None               │
│ Fraud decline        │ Customer calls    │ None               │
│                      │ issuer            │                    │
│ Soft decline         │ Retry once or     │ Email customer     │
│                      │ ask for new card  │ with retry link    │
│ System error         │ Retry 2-3 times   │ Escalate if        │
│                      │                   │ persists           │
│ Expired auth         │ Re-authorize      │ Update auth        │
│                      │                   │ strategy           │
│ Void needed          │ Void immediately  │ Confirm to         │
│                      │                   │ customer           │
│ Refund needed        │ Process refund    │ Track 3-10 days    │
│                      │                   │ for posting        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## See Also

- [Authorization Reversals](./authorization-reversals.md) - Voiding and releasing holds
- [Chargebacks](./chargebacks.md) - Dispute lifecycle and representment
- [Transaction Lifecycle Overview](./overview.md) - Core concepts

## References

- [Visa Authorization Response Codes](https://developer.visa.com/capabilities/vmis/reference#tag/Response-Codes) - Complete list of response codes
- [Mastercard Authorization Manual](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/transaction-processing-rules.pdf) - Authorization rules and decline handling
- [PCI DSS Void and Refund Requirements](https://www.pcisecuritystandards.org/) - Security standards for reversing transactions
