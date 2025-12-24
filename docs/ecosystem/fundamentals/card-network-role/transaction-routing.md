---
title: "Transaction Routing"
description: "How card networks route authorization requests using BINs and validate transactions in milliseconds"
sidebar_position: 2
sidebar_label: "Transaction Routing"
keywords:
  - BIN routing
  - bank identification number
  - transaction routing
  - authorization flow
  - ISO 8583
  - card validation
  - IIN
---

# Transaction Routing

The network's routing function happens in milliseconds during authorization, using the BIN (Bank Identification Number) to direct requests to the correct issuing bank.

---

## BIN-Based Routing

The **BIN (Bank Identification Number)** is the key to routing. It's the first 6-8 digits of a card number.

### Basic BIN Structure

```text
Card Number: 4532 1234 5678 9012
             ─────
               │
               └──▶ BIN: 453212
```

**What the BIN tells us:**
- First digit: Card network (4 = Visa, 5 = Mastercard, 3 = Amex)
- First 6-8 digits: Issuing bank and card product
- Determines routing destination
- Identifies interchange category

---

## BIN Structure Details

<details>
<summary><strong>Click to expand: Detailed BIN Structure</strong></summary>

```text
BIN STRUCTURE:
┌──────────────────────────────────────────────────────────────┐
│  4  │  5  │  3  │  2  │  1  │  2  │  X  │  X  │ ... │ Check  │
├─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴────────┤
│  │                                                           │
│  └──▶ First digit = Network identifier                       │
│       • 4 = Visa                                             │
│       • 5 = Mastercard (51-55)                               │
│       • 2 = Mastercard (2221-2720)                           │
│       • 3 = Amex (34, 37)                                    │
│       • 6 = Discover (6011, 644-649, 65)                     │
│                                                              │
│  First 6-8 digits = Issuing bank identifier                  │
│  • 453212 might = Chase Sapphire Preferred                   │
│  • 412345 might = Bank of America Platinum                   │
│                                                              │
│  OTHER NETWORK PREFIXES:                                     │
│  • 3528-3589 = JCB (Japanese network)                        │
│  • 62 = China UnionPay                                       │
└──────────────────────────────────────────────────────────────┘
```

</details>

---

## BIN Length Evolution (IIN Transition)

The payment industry is transitioning from 6-digit to 8-digit BINs due to BIN exhaustion.

### Why the Change?

**THE PROBLEM:**
- 6-digit BINs provide 1,000,000 possible combinations
- With thousands of issuers globally (each needing multiple BINs for credit, debit, prepaid, commercial), we were running out
- ISO/IEC 7812 updated in 2017 to allow 8-digit BINs (100,000,000 combinations)

### Implementation Timeline

```text
TIMELINE:
─────────
• 2017: ISO standard updated
• 2018-2022: Networks began issuing 8-digit BINs
• 2022-2025: Both 6-digit and 8-digit BINs in active use
• Future: Gradual migration to 8-digit as standard
```

### Developer Impact

:::warning Critical for Payment Systems
Payment systems MUST handle variable-length BINs (6 OR 8 digits):

- BIN lookup tables need to support both lengths
- Routing logic should check 8 digits first, fall back to 6
- Never hardcode BIN length assumptions
- Regular BIN table updates are essential
:::

**Example code logic:**
```text
1. Extract first 8 digits
2. Look up in BIN table
3. If not found, extract first 6 digits
4. Look up in BIN table
5. If not found, decline (invalid BIN)
```

---

## Authorization Routing Flow

Here's how a card network routes an authorization request to the correct issuer.

### Step-by-Step Process

```text
                        AUTHORIZATION ROUTING
    ═══════════════════════════════════════════════════════════════

    STEP 1: Card Presented
    ──────────────────────
    Customer taps card at merchant terminal
    Card Number: 4532-1234-5678-9012

    STEP 2: Acquirer Receives Request
    ─────────────────────────────────
    Merchant's processor/acquirer receives:
    • Card number (with BIN)
    • Amount
    • Merchant ID
    • Terminal info

    STEP 3: Network Routing
    ───────────────────────
                                    ┌──────────────────────┐
    Acquirer sends to ────────────▶ │    VISA NETWORK      │
    Visa (based on                  │                      │
    first digit = 4)                │  BIN Lookup Table:   │
                                    │  ┌────────────────┐  │
                                    │  │ 453212 = Chase │  │
                                    │  │ 412345 = BofA  │  │
                                    │  │ 423456 = Citi  │  │
                                    │  │ ...            │  │
                                    │  └────────────────┘  │
                                    │                      │
                                    │  Routes to: CHASE    │
                                    └──────────┬───────────┘
                                               │
                                               ▼
    STEP 4: Issuer Authorization    ┌──────────────────────┐
    ────────────────────────────    │    CHASE (Issuer)    │
                                    │                      │
                                    │  Checks:             │
                                    │  • Available credit  │
                                    │  • Fraud signals     │
                                    │  • Card status       │
                                    │  • CVV (if CNP)      │
                                    │                      │
                                    │  Decision: APPROVED  │
                                    │  Auth Code: 847291   │
                                    └──────────┬───────────┘
                                               │
    STEP 5: Response Returns                   │
    ────────────────────────                   ▼
    Chase ──▶ Visa Network ──▶ Acquirer ──▶ Merchant ──▶ Customer
                                               │
                                          "APPROVED"

    TOTAL TIME: 1-3 seconds
```

### Message Format: ISO 8583

Card networks use the **ISO 8583** standard for authorization messages:

**TYPICAL AUTHORIZATION REQUEST:**
```text
Message Type: 0100 (Authorization Request)
Fields Include:
- PAN (Primary Account Number / Card Number)
- Processing Code (00 = Purchase)
- Transaction Amount
- Merchant Type (MCC)
- Terminal ID
- Merchant ID
- Card Acceptor Location
- CVV2 (for CNP)
- Additional Data Elements
```

**TYPICAL AUTHORIZATION RESPONSE:**
```text
Message Type: 0110 (Authorization Response)
Fields Include:
- Response Code (00 = Approved)
- Authorization Code
- Transaction Date/Time
- Additional Response Data
```

---

## Network Validation

During routing, the network performs several checks before forwarding the request to the issuer.

### 1. Card Validity

**BIN VALIDATION:**
- Is BIN valid and active?
- Is BIN currently issuing cards?
- Is BIN not on hot list (compromised BIN range)?

**CARD NUMBER VALIDATION:**
- Is card number format correct (Luhn algorithm)?
- Is card number length correct for card type?
- Is card not on lost/stolen list?

**Example Luhn Check:**
```text
Card: 4532 1234 5678 9012
1. Double every 2nd digit from right
2. Sum all digits
3. If sum % 10 = 0, card number is valid
```

### 2. Merchant Validity

**MERCHANT REGISTRATION:**
- Is merchant registered with network?
- Is MID (Merchant ID) active?
- Is merchant in good standing?

**MERCHANT CATEGORY CODE (MCC):**
- Is MCC valid?
- Is merchant allowed to process this card type?
- Are there restrictions for this MCC (e.g., adult content, gambling)?

**LOCATION VALIDATION:**
- Does merchant location match registration?
- Is merchant in allowed region?
- Are there geographic restrictions?

### 3. Transaction Validity

**AMOUNT VALIDATION:**
- Is amount within acceptable range?
- Is amount not suspiciously high/low?
- Does amount match card type limits?

**CURRENCY VALIDATION:**
- Does currency match merchant registration?
- Is currency supported by network?
- Is currency conversion needed?

**REQUIRED FIELDS:**
- Are all mandatory fields present?
- Is data format correct?
- Are field lengths within limits?

### 4. Routing Decision

**ISSUER IDENTIFICATION:**
- Identify issuer from BIN lookup
- Determine issuer endpoint
- Select routing path (primary/backup)

**NETWORK-SPECIFIC RULES:**
- Apply any special routing rules
- Check for test/development cards
- Handle regional routing logic

---

## Real-World Routing Example

Let's walk through a complete transaction routing.

### Scenario

**Transaction Details:**
- Customer: John Doe
- Card: Chase Sapphire Preferred (4532-1234-5678-9012)
- Merchant: Starbucks
- Amount: $5.75
- Location: Seattle, WA
- Method: Contactless tap

### Routing Sequence

**1. CARD READ (< 100ms)**
```text
Terminal reads:
- PAN: 4532123456789012
- Card present
- Contactless entry
- EMV chip data
```

**2. ACQUIRER PROCESSING (< 200ms)**
```text
Square (Starbucks' processor):
- Recognizes first digit (4) = Visa
- Packages ISO 8583 message
- Sends to Visa network
```

**3. VISA NETWORK PROCESSING (< 500ms)**
```text
Visa Network:
- Validates card: ✓ (Luhn check passes)
- Looks up BIN 453212: Chase Bank
- Validates merchant: ✓ (MID active)
- Validates MCC 5814: ✓ (Fast Food Restaurant)
- Routes to Chase authorization system
```

**4. CHASE AUTHORIZATION (< 1000ms)**
```text
Chase Issuer:
- Locates cardholder account
- Checks available credit: $15,000 available ✓
- Fraud check: Normal pattern ✓
- Card status: Active ✓
- Decision: APPROVE
- Auth code: 84729A
```

**5. RESPONSE PATH (< 300ms)**
```text
Chase → Visa → Square → Starbucks Terminal
Response: APPROVED
Auth Code: 84729A
```

**TOTAL TIME: ~2 seconds** (most of which is issuer decision time)

---

## BIN Intelligence and Usage

Beyond routing, BINs provide valuable intelligence for payment systems.

### What BIN Data Reveals

| BIN Insight | Business Value |
|-------------|----------------|
| **Card Type** (Debit/Credit) | Routing optimization, fee calculation |
| **Card Level** (Standard/Rewards/Premium) | Interchange prediction |
| **Issuing Bank** | Risk assessment, fraud patterns |
| **Card Brand** | Processing path, fee structure |
| **Country of Issuance** | Cross-border fees, currency handling |
| **Card Product** | Customer demographics, fraud risk |

### BIN Table Example

| BIN | Issuer | Card Type | Card Level | Interchange Tier |
|-----|--------|-----------|-----------|------------------|
| 453212 | Chase | Credit | Sapphire Preferred (Rewards) | High |
| 412345 | BofA | Credit | Standard | Standard |
| 414720 | Chase | Debit | Checking | Regulated (Durbin) |
| 542418 | Citi | Credit | World Elite | Premium |
| 375987 | Amex | Credit | Gold | Premium |

### BIN Lookup APIs

Payment systems typically use BIN lookup services:

**VISA BIN ATTRIBUTE SHARING SERVICE:**
- Real-time BIN data
- Card attribute information
- Issuer identification
- Product classification

**MASTERCARD BIN INTELLIGENCE:**
- Similar to Visa service
- Additional product metadata
- Risk indicators

**THIRD-PARTY SERVICES:**
- BinList.net (free, limited)
- BIN Database services (commercial)
- Regular updates essential

---

## Routing Challenges and Solutions

### Challenge 1: BIN Exhaustion

**Problem:** Running out of 6-digit BINs
**Solution:** Migration to 8-digit BINs (IIN)
**Impact:** Systems must support variable-length BINs

### Challenge 2: BIN Changes

**Problem:** Issuers change, BINs are reassigned
**Solution:** Regular BIN table updates (weekly/monthly)
**Impact:** Stale data = misrouted transactions

### Challenge 3: Network Outages

**Problem:** Primary routing path fails
**Solution:** Backup routing paths, fallback logic
**Impact:** Need redundant connections

### Challenge 4: Invalid BINs

**Problem:** Fake/test cards, invalid BINs
**Solution:** BIN validation before routing
**Impact:** Reduces failed authorization attempts

---

## Key Takeaways

1. **BIN is the routing foundation** - The first 6-8 digits determine where every authorization goes

2. **Routing is fast** - Networks route transactions in milliseconds using BIN lookup tables

3. **Multiple validations occur** - Card, merchant, and transaction validity checked before routing

4. **8-digit BINs are coming** - Systems must handle variable-length BINs (6 or 8 digits)

5. **BIN data is valuable** - Beyond routing, BINs provide interchange prediction, fraud detection, and risk assessment

---

## Related Topics

**Card Network Fundamentals:**
- **[Card Network Role Overview](/ecosystem/fundamentals/card-network-role/)** - What card networks do
- **[Open-Loop vs Closed-Loop](/ecosystem/fundamentals/card-network-role/open-vs-closed-loop)** - Network models explained

**Transaction Processing:**
- **[Transaction Lifecycle](/ecosystem/fundamentals/transaction-lifecycle/overview)** - Authorization through settlement
- **[Pre-Authorizations](/ecosystem/fundamentals/transaction-lifecycle/pre-authorizations)** - Detailed auth process

**Technical Standards:**
- **[Network Rules](/ecosystem/fundamentals/card-network-role/network-rules)** - How networks govern routing
- **ISO/IEC 7812** - BIN/IIN standard specification

---

*Continue learning: [Network Rules and Compliance](/ecosystem/fundamentals/card-network-role/network-rules)*
