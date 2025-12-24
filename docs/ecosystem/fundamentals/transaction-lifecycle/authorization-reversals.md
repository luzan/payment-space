---
title: "Authorization Reversals"
description: "Understanding authorization reversals, voiding transactions, and releasing holds"
sidebar_position: 3
sidebar_label: "Authorization Reversals"
keywords: [authorization reversal, void, release hold, cancel authorization]
---

# Authorization Reversals

An authorization reversal is a message sent to cancel a previous authorization and immediately release the hold on a cardholder's account.

## What is an Authorization Reversal?

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                      AUTHORIZATION REVERSALS                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  WHAT IT IS:                                                                │
│  ───────────                                                                │
│  A message sent to CANCEL a previous authorization and release the hold.    │
│                                                                             │
│  WHEN TO USE:                                                               │
│  ────────────                                                               │
│  • Customer cancels order before shipment                                   │
│  • Duplicate authorization created                                          │
│  • Incorrect amount authorized                                              │
│  • Transaction voided before capture                                        │
│                                                                             │
│  HOW IT WORKS:                                                              │
│  ─────────────                                                              │
│                                                                             │
│  Normal Flow (without reversal):                                            │
│  • Authorization creates hold                                               │
│  • Hold remains until capture OR expiration (7 days)                        │
│  • Customer funds tied up even if order cancelled                           │
│                                                                             │
│  With Reversal:                                                             │
│  • Authorization creates hold                                               │
│  • Reversal sent within minutes/hours                                       │
│  • Hold drops within 24 hours (often immediately)                           │
│                                                                             │
│  BENEFITS:                                                                  │
│  ─────────                                                                  │
│  • Better customer experience (funds available immediately)                 │
│  • Prevents "pending charge" customer service calls                         │
│  • No interchange charged                                                   │
│  • No settlement issues                                                     │
│                                                                             │
│  REQUIREMENTS:                                                              │
│  ─────────────                                                              │
│  • Must include original authorization code                                 │
│  • Should be sent within 24 hours (some networks require 30 minutes)        │
│  • Not all processors support reversals                                     │
│                                                                             │
│  REAL-WORLD EXAMPLE:                                                        │
│  ───────────────────                                                        │
│                                                                             │
│  With Reversal:                      │  Without Reversal:                   │
│  ─────────────────────────────────────┼──────────────────────────────────── │
│  10:00 AM: Order placed, auth $150   │  10:00 AM: Order placed, auth $150  │
│  10:15 AM: Customer cancels          │  10:15 AM: Customer cancels         │
│  10:20 AM: Reversal sent             │  (merchant just doesn't capture)    │
│  10:21 AM: Hold released             │  Day 7: Hold finally expires        │
│  Customer happy                      │  Customer frustrated for a week     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Authorization Reversal Flow

```
                    AUTHORIZATION REVERSAL FLOW
    ═══════════════════════════════════════════════════════════════════════

Step 1: Original Authorization
──────────────────────────────

    Customer         Merchant        Processor        Network         Issuer
        │                │               │                │              │
        │  Purchase $150 │               │                │              │
        │───────────────▶│               │                │              │
        │                │  Auth Request │                │              │
        │                │──────────────▶│───────────────▶│─────────────▶│
        │                │               │                │              │
        │                │               │                │  ✓ Approved  │
        │                │               │                │  Auth: A1234 │
        │                │               │◀───────────────│◀─────────────│
        │                │◀──────────────│                │              │
        │  "Approved"    │               │                │              │
        │◀───────────────│               │                │              │
        │                │               │                │              │
        │   $150 HOLD PLACED ON CARD                                     │


Step 2: Customer Cancels Order
───────────────────────────────

    Customer         Merchant
        │                │
        │  "Cancel my    │
        │   order"       │
        │───────────────▶│
        │                │


Step 3: Merchant Sends Reversal
────────────────────────────────

    Merchant        Processor        Network         Issuer
        │               │                │              │
        │  Reversal     │                │              │
        │  Auth: A1234  │                │              │
        │──────────────▶│───────────────▶│─────────────▶│
        │               │                │              │
        │               │                │  ✓ Release   │
        │               │                │    hold      │
        │               │◀───────────────│◀─────────────│
        │◀──────────────│                │              │
        │               │                │              │
        │   $150 HOLD RELEASED FROM CARD                │
        │   (within 24 hours, often immediately)        │
```

## Use Cases for Authorization Reversals

### E-commerce Order Cancellations

```
SCENARIO: Online Store
┌──────────────────────────────────────────────────────────────────┐
│ 1. Customer places order: $150                                   │
│    • Authorization approved                                      │
│    • Inventory reserved                                          │
│                                                                  │
│ 2. Customer cancels 2 hours later (before shipment)             │
│    • Merchant voids order                                        │
│    • Sends authorization reversal                                │
│    • Hold released same day                                      │
│                                                                  │
│ WITHOUT REVERSAL:                                                │
│ • Customer sees pending charge for up to 7 days                  │
│ • Calls customer service: "Why was I charged?"                   │
│ • Merchant explains: "It's just a hold, it will drop"            │
│ • Poor customer experience                                       │
│                                                                  │
│ WITH REVERSAL:                                                   │
│ • Hold drops within 24 hours                                     │
│ • Customer satisfied                                             │
│ • Fewer support calls                                            │
└──────────────────────────────────────────────────────────────────┘
```

### Duplicate Authorizations

```
SCENARIO: Duplicate Auth Prevention
┌──────────────────────────────────────────────────────────────────┐
│ Customer double-clicks "Pay" button                              │
│ • Two authorization requests sent                                │
│ • Both approved (Auth: A1234 and A1235)                          │
│ • System detects duplicate                                       │
│ • Immediately sends reversal for one authorization               │
│ • Only one hold remains on customer's card                       │
└──────────────────────────────────────────────────────────────────┘
```

### Incorrect Authorization Amount

```
SCENARIO: Amount Entry Error
┌──────────────────────────────────────────────────────────────────┐
│ Cashier accidentally authorizes $1,500 instead of $150           │
│ • Error caught immediately                                       │
│ • Reversal sent for $1,500 authorization                         │
│ • New authorization for correct $150 amount                      │
│ • Customer never sees the incorrect hold                         │
└──────────────────────────────────────────────────────────────────┘
```

### Gas Station Pre-Auth Adjustments

```
SCENARIO: Gas Pump Pre-Authorization
┌──────────────────────────────────────────────────────────────────┐
│ 1. Customer inserts card                                         │
│    • Pre-auth for $125 (maximum)                                 │
│                                                                  │
│ 2. Customer pumps $45.67 in gas                                  │
│    • Capture $45.67                                              │
│    • Send reversal for remaining $79.33                          │
│                                                                  │
│ RESULT:                                                          │
│ • Customer sees $45.67 charge (not $125 hold for days)           │
│ • Better customer experience                                     │
│ • Fewer complaints about "holds"                                 │
└──────────────────────────────────────────────────────────────────┘
```

## Network Rules and Timing Requirements

### Visa Requirements

- **Timing**: Reversal must be sent within **30 minutes** of original authorization for guaranteed processing
- **Data**: Must include original authorization code (approval code)
- **Amount**: Can be full or partial reversal
- **Response**: Reversal acknowledgment typically received in real-time

### Mastercard Requirements

- **Timing**: Reversal should be sent within **24 hours** for optimal processing
- **Data**: Must reference original authorization via trace data
- **Amount**: Full or partial reversal supported
- **Validation**: Network validates reversal matches original authorization

### Discover Requirements

- **Timing**: Similar to Visa (30-minute window recommended)
- **Data**: Original authorization information required
- **Processing**: Real-time reversal confirmation

### American Express Requirements

- **Timing**: Reversals accepted within **72 hours**
- **Processing**: May take longer to appear on cardholder statement
- **Validation**: Stricter matching requirements for reversal data

## Technical Implementation

### ISO 8583 Message Type

Authorization reversals use specific message types:

| Message Type | Description |
|-------------|-------------|
| **0400** | Reversal request |
| **0410** | Reversal request response |
| **0420** | Reversal advice (notification only) |
| **0430** | Reversal advice response |

### Required Data Elements

```
AUTHORIZATION REVERSAL MESSAGE FIELDS
┌──────────────────────────────────────────────────────────────────┐
│ Field                          │ Value                           │
├────────────────────────────────┼─────────────────────────────────┤
│ Message Type                   │ 0400 (Reversal Request)         │
│ Primary Account Number (PAN)   │ Original card number            │
│ Transaction Amount             │ Amount to reverse               │
│ Transmission Date/Time         │ Current timestamp               │
│ System Trace Audit Number      │ Original STAN                   │
│ Retrieval Reference Number     │ Original RRN                    │
│ Authorization Code             │ Original auth code (if approved)│
│ Response Code                  │ Original response code          │
│ Original Data Elements         │ Date, time, amount of original  │
└──────────────────────────────────────────────────────────────────┘
```

### API Design Example

```javascript
// Example authorization reversal API call
POST /authorizations/{authId}/reverse

{
  "amount": 150.00,  // Full or partial reversal
  "reason": "customer_cancelled",
  "reason_description": "Customer requested order cancellation"
}

// Response
{
  "reversal_id": "rev_ABC123",
  "authorization_id": "auth_XYZ789",
  "status": "approved",
  "reversed_amount": 150.00,
  "original_amount": 150.00,
  "hold_status": "released",
  "estimated_release_time": "2024-01-15T18:30:00Z"
}
```

## Common Issues and Solutions

### Reversal Not Supported by Processor

**Problem**: Not all processors support real-time authorization reversals

**Solutions**:
1. Work with processor to enable reversal support
2. Void transaction same day (before batch settlement)
3. Document limitation for merchants using the platform
4. Set customer expectations about hold timing

### Reversal Timing Missed

**Problem**: Reversal sent after network time windows

**Solutions**:
1. Reversal may still process but take longer
2. Consider same-day void instead
3. Monitor authorization age and alert merchants
4. Automate reversals for common scenarios (duplicates)

### Partial Reversals

**Problem**: Merchant needs to reverse only part of authorization

**Example**:
```
Original authorization: $500 (hotel pre-auth)
Actual stay cost: $350
Send partial reversal: $150
Capture: $350
```

**Implementation notes**:
- Not all processors support partial reversals
- May need to capture final amount and let excess hold expire
- Check processor/network capabilities

### Cardholder Still Sees Hold

**Problem**: Reversal sent successfully but hold still visible to cardholder

**Explanation**:
- Reversal processing time varies by issuer (0-24 hours)
- Some issuers take longer to release holds
- Not a failure of the reversal, just timing

**Customer service response**:
- "Reversal has been sent to your bank"
- "Hold should drop within 24 hours"
- "Contact issuer if hold persists beyond 24 hours"

## Platform/PayFac Considerations

```
┌─────────────────────────────────────────────────────────────────┐
│ PLATFORM REQUIREMENTS FOR REVERSAL SUPPORT                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 1. AUTOMATION OPPORTUNITIES                                     │
│    • Auto-reverse duplicate authorizations                      │
│    • Auto-reverse on order cancellation                         │
│    • Auto-reverse when out of stock                             │
│                                                                 │
│ 2. MONITORING & REPORTING                                       │
│    • Track reversal success rates                               │
│    • Monitor reversal timing compliance                         │
│    • Alert on failed reversals                                  │
│                                                                 │
│ 3. SUB-MERCHANT EDUCATION                                       │
│    • When to use reversal vs void vs refund                     │
│    • Benefits of quick reversals                                │
│    • Network timing requirements                                │
│                                                                 │
│ 4. API DESIGN                                                   │
│    • Simple reversal endpoint                                   │
│    • Support full and partial reversals                         │
│    • Return estimated hold release time                         │
│                                                                 │
│ 5. ERROR HANDLING                                               │
│    • Graceful fallback if reversals not supported               │
│    • Clear error messages to merchants                          │
│    • Alternative paths (void, wait for expiration)              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Best Practices

1. **Send reversals quickly**: Within minutes of cancellation, not hours or days
2. **Automate when possible**: Duplicate detection, order cancellations
3. **Monitor success rates**: Track which reversals succeed vs fail
4. **Educate merchants**: Explain benefits of reversals for customer satisfaction
5. **Have fallbacks**: Not all processors support reversals; plan alternatives
6. **Track original auth codes**: Required for reversal messages
7. **Set expectations**: Explain to customers that holds take 0-24 hours to drop

## See Also

- [Pre-Authorizations](./pre-authorizations.md) - When and how to use pre-auth
- [Failure Scenarios](./failure-scenarios.md) - Void vs refund vs chargeback
- [Transaction Lifecycle Overview](./overview.md) - Core concepts

## References

- [Visa Authorization Reversal Specifications](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf) - Official Visa reversal rules
- [Mastercard Reversal Guidelines](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/mastercard-rules.pdf) - Mastercard reversal standards
- [ISO 8583 Reversal Messages](https://www.iso.org/standard/31628.html) - Technical message specifications
