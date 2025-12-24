---
title: "Pre-Authorizations and Incremental Auth"
description: "Understanding pre-authorizations, partial authorizations, and incremental authorizations"
sidebar_position: 2
sidebar_label: "Pre-Authorizations"
keywords: [pre-authorization, partial authorization, incremental authorization, hotel authorization, gas station authorization]
---

# Pre-Authorizations and Incremental Auth

Pre-authorizations and incremental authorizations are specialized authorization types used when the final transaction amount is unknown or may change.

## Pre-Authorization vs Final Authorization

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              PRE-AUTHORIZATION vs FINAL AUTHORIZATION                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PRE-AUTHORIZATION                                                          │
│  ─────────────────                                                          │
│  • Used when final amount is unknown                                        │
│  • Common in: Hotels, car rentals, gas pumps, restaurants                   │
│  • Often for an estimated or maximum amount                                 │
│  • Creates a hold on funds                                                  │
│                                                                             │
│  Example: Hotel Pre-Auth                                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Day 1: Check-in                                                     │   │
│  │        Pre-auth for $500 (3 nights × $150 + incidentals)            │   │
│  │        Cardholder sees: "Pending $500"                              │   │
│  │                                                                     │   │
│  │ Day 3: Checkout                                                     │   │
│  │        Final bill: $425 (room + minibar)                            │   │
│  │        Capture $425, release $500 pre-auth                          │   │
│  │        Cardholder sees: "Posted $425"                               │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  FINAL AUTHORIZATION                                                        │
│  ───────────────────                                                        │
│  • Used when exact amount is known                                          │
│  • Common in: Retail, e-commerce (after checkout)                           │
│  • Can be Auth + Capture combined (single message)                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Partial and Incremental Authorizations

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│           PARTIAL AND INCREMENTAL AUTHORIZATIONS                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PARTIAL AUTHORIZATION                                                      │
│  ─────────────────────                                                      │
│  Used when cardholder has insufficient funds for full amount.               │
│                                                                             │
│  Example - Gas Station:                                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Pump requests $100 authorization                                    │   │
│  │ Card only has $45 available                                         │   │
│  │ Issuer responds: "Approved for $45"                                 │   │
│  │ Pump dispenses up to $45 in gas                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Industries using partial auth:                                             │
│  • Gas stations                                                             │
│  • Prepaid cards                                                            │
│  • Gift cards                                                               │
│  • Split-tender transactions                                                │
│                                                                             │
│                                                                             │
│  INCREMENTAL AUTHORIZATION                                                  │
│  ─────────────────────────                                                  │
│  Extending an existing authorization when final amount increases.           │
│                                                                             │
│  Example - Hotel:                                                           │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Day 1: Pre-auth $500 (3 nights estimated)                           │   │
│  │ Day 2: Guest extends stay - incremental auth +$150                  │   │
│  │ Checkout: Final auth total $650, capture $620                       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Requirements:                                                              │
│  • Must reference original authorization                                    │
│  • Must occur before original auth expires                                  │
│  • Common in: Hospitality, car rental, restaurants (tip adjust)             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Common Use Cases

### Hotels and Lodging

Hotels use pre-authorizations extensively:

1. **Check-in**: Pre-auth for estimated stay + incidentals buffer
2. **During stay**: Incremental auth if guest extends stay or charges room service
3. **Checkout**: Final capture for actual amount, release excess hold

**Timing considerations:**
- Initial pre-auth valid for 30-31 days (extended period for lodging)
- Final capture must occur before auth expires
- Some hotels capture nightly to avoid expiration issues

### Gas Stations

Gas stations face unique challenges:

```
TYPICAL GAS STATION FLOW:
┌──────────────────────────────────────────────────────────────────┐
│ 1. Customer inserts card                                         │
│ 2. Pump requests pre-auth for $125 (Visa/MC) or $150 (Discover) │
│ 3. Issuer approves full or partial amount                       │
│ 4. Customer pumps gas                                            │
│ 5. Final amount captured (e.g., $45.67)                          │
│ 6. Pre-auth hold should drop, but timing varies by issuer        │
└──────────────────────────────────────────────────────────────────┘

CUSTOMER EXPERIENCE ISSUE:
• Many customers see $125 hold for several days
• Can cause overdrafts or declined subsequent purchases
• Industry working to improve hold release timing
```

:::tip Best Practice for Gas Stations
Use authorization reversal (covered in next section) to immediately release the excess hold amount. This improves customer experience significantly.
:::

### Restaurants

Restaurants use a variation called **tip adjustment**:

```
RESTAURANT AUTHORIZATION FLOW:
1. Meal authorization:     $50.00 (exact meal amount)
2. Customer adds tip:      $10.00 (20%)
3. Final capture:          $60.00 (meal + tip)

NETWORK RULES:
• Visa: Allows up to 20% tip adjustment without new auth
• Mastercard: Allows up to 20% tip adjustment
• Amounts exceeding 20% may require incremental auth
```

### Car Rentals

Car rental companies use extended pre-authorizations:

```
CAR RENTAL SCENARIO:
┌──────────────────────────────────────────────────────────────────┐
│ Day 1 (Pickup):                                                  │
│ • Pre-auth for estimated rental + deposit                        │
│ • Amount: $500 (3 days × $150 + $50 buffer)                      │
│ • Valid for 30-31 days                                           │
│                                                                  │
│ Day 3 (Return):                                                  │
│ • Customer returns with full tank: $450 actual charge           │
│ • Customer returns needing fuel: Incremental auth for gas       │
│ • Final capture: Actual amount incurred                          │
│                                                                  │
│ Possible Additional Charges:                                     │
│ • Fuel charges                                                   │
│ • Damage discovered after return (within auth validity)         │
│ • Toll charges (can be weeks later)                              │
└──────────────────────────────────────────────────────────────────┘
```

## Technical Implementation Notes

### Authorization Message Flags

Pre-authorizations and incremental auths use specific flags in ISO 8583 messages:

| Authorization Type | Key Fields |
|-------------------|------------|
| Pre-authorization | POS Condition Code = "06" (pre-authorization) |
| Incremental auth | References original auth code, amount adjustment |
| Partial auth | Response includes approved partial amount |

### Merchant Responsibilities

Merchants using pre-authorizations must:

1. **Clearly communicate** holds to customers
2. **Capture promptly** to avoid expired authorizations
3. **Release holds** when transactions are voided or amounts reduced
4. **Track authorization codes** for incremental auths
5. **Monitor expiration dates** to avoid late presentment fees

### Platform/PayFac Considerations

Payment facilitators enabling these authorization types need to:

```
┌─────────────────────────────────────────────────────────────────┐
│ PLATFORM REQUIREMENTS FOR PRE-AUTH SUPPORT                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 1. DATA MODELING                                                │
│    • Track authorization state (pre-auth, incremental, final)   │
│    • Link incremental auths to original authorization           │
│    • Store expiration dates                                     │
│                                                                 │
│ 2. API DESIGN                                                   │
│    • Separate endpoints for pre-auth vs final auth              │
│    • Incremental auth endpoint referencing original             │
│    • Authorization reversal support                             │
│                                                                 │
│ 3. MONITORING & ALERTS                                          │
│    • Alert merchants to expiring authorizations                 │
│    • Track authorization-to-capture rates                       │
│    • Monitor partial auth acceptance rates                      │
│                                                                 │
│ 4. REPORTING                                                    │
│    • Show pending vs captured amounts                           │
│    • Reconcile pre-auth amounts with final captures             │
│    • Track authorization adjustments                            │
│                                                                 │
│ 5. SUB-MERCHANT EDUCATION                                       │
│    • When to use pre-auth vs final auth                         │
│    • How to handle incremental auths                            │
│    • Best practices for hold management                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## See Also

- [Authorization Reversals](./authorization-reversals.md) - Canceling authorizations and releasing holds
- [Transaction Lifecycle Overview](./overview.md) - Core authorization concepts
- [Failure Scenarios](./failure-scenarios.md) - Handling expired authorizations

## References

- [Visa Pre-Authorization Guidelines](https://usa.visa.com/dam/VCOM/download/merchants/visa-international-operating-regulations-main.pdf) - Official Visa rules for pre-authorizations
- [Mastercard Authorization Manual](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/transaction-processing-rules.pdf) - Mastercard pre-auth and incremental auth specifications
