---
title: "Open-Loop vs Closed-Loop Networks"
description: "Understanding the fundamental difference between Visa/Mastercard's open model and American Express's closed model"
sidebar_position: 1
sidebar_label: "Open vs Closed Loop"
keywords:
  - open-loop network
  - closed-loop network
  - visa model
  - mastercard model
  - american express model
  - discover network
  - four-party model
  - three-party model
---

# Open-Loop vs Closed-Loop Networks

This is a fundamental distinction in payment networks that affects competition, pricing, and merchant relationships.

---

## Open-Loop Networks (Visa, Mastercard)

Open-loop networks act as neutral intermediaries, allowing any bank to participate on either side of the transaction.

### How Open-Loop Works

```text
     ANY BANK                                              ANY BANK
     can issue                                             can acquire
         │                                                      │
         ▼                                                      ▼
┌─────────────────┐                                   ┌─────────────────┐
│  ISSUING BANK   │                                   │ ACQUIRING BANK  │
│                 │                                   │                 │
│  • Chase        │        ┌───────────────┐          │  • Wells Fargo  │
│  • BofA         │◀──────▶│  CARD NETWORK │◀────────▶│  • Chase        │
│  • Citi         │        │  (Visa / MC)  │          │  • Worldpay     │
│  • Capital One  │        └───────────────┘          │                 │
│  • Any bank     │               │                   │  • Any bank     │
└─────────────────┘               │                   └─────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │ Network provides:         │
                    │ • Transaction routing     │
                    │ • Rules & standards       │
                    │ • Brand recognition       │
                    │ • Dispute resolution      │
                    │ • Settlement calculation  │
                    └───────────────────────────┘
```

### Open-Loop Characteristics

**COMPETITION**
- Multiple issuers compete for cardholders
- Multiple acquirers compete for merchants
- Network is a neutral intermediary
- Greater competition = better rates/rewards

**FEE STRUCTURE**
- Interchange paid from acquirer to issuer
- Network charges assessment fees to both sides
- Acquirer adds markup for profit
- Total merchant fee typically 2-2.5%

**RELATIONSHIPS**
- Banks have direct cardholder relationships
- Acquirers have direct merchant relationships
- Network has no direct end-user relationships
- Network is a B2B2B2C business

**MARKET DYNAMICS**
- Issuers compete on rewards and features
- Acquirers compete on pricing and service
- Creates "interchange arms race" for better rewards
- Merchant acceptance is widespread

---

## Closed-Loop Networks (Amex, Discover)

Closed-loop networks control the entire value chain, acting as issuer, acquirer, AND network simultaneously.

### How Closed-Loop Works

```text
                    ┌─────────────────────────────────┐
                    │      AMERICAN EXPRESS           │
                    │                                 │
                    │   Acts as ALL THREE:            │
                    │   ✓ Card Network                │
                    │   ✓ Issuing Bank                │
                    │   ✓ Acquiring Bank              │
                    └─────────────────────────────────┘
                           ▲              ▲
                           │              │
              Issues cards │              │ Signs merchants
                           │              │ directly
                           ▼              ▼
                    ┌─────────────┐  ┌─────────────┐
                    │ CARDHOLDER  │  │  MERCHANT   │
                    └─────────────┘  └─────────────┘
```

### Closed-Loop Characteristics

**CONTROL**
- Single entity controls entire experience
- Direct relationship with both cardholders AND merchants
- No intermediary banks needed
- Premium card positioning

**FEE STRUCTURE**
- No interchange in traditional model—they keep the entire merchant discount
- Higher merchant fees (no competition)
- Typical merchant fee: 2.5-3.5%
- All revenue stays with the network

**DATA & INSIGHTS**
- Better data/insights (sees both sides)
- Complete transaction visibility
- No information fragmentation
- Enhanced fraud detection capability

**MARKET POSITION**
- Premium card positioning
- Higher income cardholders
- Selective merchant acceptance
- Strong brand differentiation

---

## The Evolution: Hybrid Models

The pure closed-loop model is evolving as networks adapt to market demands.

### American Express Transformations

**AMEX CO-BRANDED CARDS**

Amex now partners with banks to issue co-branded cards:
- Wells Fargo issues Amex cards
- Cards carry Amex brand but issued by partner bank
- Internal interchange-like structure exists
- Blurs the line between open and closed loop

**OPTBLUE PROGRAM**

Amex created a de facto open-loop model for smaller merchants:
- Third-party processors can handle Amex transactions
- Similar to Visa/MC acquiring model
- Creates interchange-like fee structure
- Makes Amex acceptance easier for small merchants

:::tip Important Evolution
- Amex co-branded cards (issued by partner banks like Wells Fargo) DO have an interchange-like structure internally
- OptBlue Program: Amex now allows third-party processors to handle merchants, creating a de facto interchange model for smaller merchants
- The "pure" closed-loop model is becoming less common
:::

---

## Comparison Table

| Aspect | Open-Loop (Visa/MC) | Closed-Loop (Amex) |
|--------|--------------------|--------------------|
| **Card issuance** | Any member bank | Network itself (primarily) |
| **Merchant acquiring** | Any member bank | Network itself |
| **Competition** | High (many issuers/acquirers) | Low (one entity) |
| **Merchant fees** | Lower (~2-2.5%) | Higher (~2.5-3.5%) |
| **Cardholder rewards** | Funded by interchange | Funded by merchant fees |
| **Data access** | Fragmented | Complete view |
| **Global acceptance** | Very high | Lower |
| **Market positioning** | Mass market | Premium segment |
| **Innovation speed** | Slower (coordination) | Faster (single entity) |
| **Regulatory exposure** | Distributed | Concentrated |

---

## Why This Distinction Matters

### For Merchants

**OPEN-LOOP IMPLICATIONS:**
- Lower merchant fees due to competition
- Wide acceptance = customer expectation
- Must accept all card types (Honor All Cards rule)
- Interchange not negotiable

**CLOSED-LOOP IMPLICATIONS:**
- Higher merchant fees
- Can choose not to accept (e.g., some merchants don't take Amex)
- Direct relationship with network
- Premium customer demographic

### For PayFacs and Platforms

**PRICING CONSIDERATIONS:**
- Open-loop costs more predictable
- Closed-loop adds complexity (separate agreements)
- Mixed acceptance affects merchant experience
- Need to understand blended rates

**INTEGRATION COMPLEXITY:**
- Visa/MC similar integration patterns
- Amex may require separate agreement
- OptBlue simplifies Amex for small merchants
- Discover similar to Amex but smaller volume

### For Consumers

**OPEN-LOOP BENEFITS:**
- Intense rewards competition
- More card choices
- Universal acceptance
- Bank relationship continuity

**CLOSED-LOOP BENEFITS:**
- Premium card features
- Superior customer service
- Better fraud protection (complete visibility)
- Aspirational brand value

---

## Real-World Examples

### Open-Loop Scenario

**Chase Sapphire Preferred at Starbucks:**

```text
1. Customer taps Chase Sapphire Preferred (Visa)
2. Starbucks processor → Visa Network
3. Visa routes to Chase (issuer)
4. Chase approves/declines
5. Money flow: Chase → Interchange → Starbucks' acquirer → Starbucks

Parties involved:
- Cardholder: Customer
- Issuer: Chase
- Network: Visa
- Acquirer: Starbucks' processor (e.g., Square)
- Merchant: Starbucks
```

### Closed-Loop Scenario

**American Express Gold at Starbucks:**

```text
1. Customer taps Amex Gold
2. Starbucks processor → American Express directly
3. Amex approves/declines (they know the cardholder)
4. Money flow: Amex → Starbucks (Amex keeps full merchant discount)

Parties involved:
- Cardholder: Customer
- Issuer/Network/Acquirer: American Express (all three roles)
- Merchant: Starbucks
```

**Key Difference:** In the Amex scenario, there's no interchange because Amex is both issuer and acquirer—they keep the entire merchant discount.

---

## Strategic Implications

### For Building a PayFac

**OPEN-LOOP CONSIDERATIONS:**
- Requires sponsor bank relationship
- Master MID aggregates volume
- Interchange flows predictably
- Must follow network rules strictly
- Easier to support (standardized)

**CLOSED-LOOP CONSIDERATIONS:**
- May require direct network agreement
- Separate pricing structure
- Higher merchant cost if passed through
- OptBlue simplifies for small merchants
- May be optional for small merchants

### For Merchant Acceptance Strategy

**ACCEPTING ALL NETWORKS:**
- Maximizes customer convenience
- Increases costs (Amex is expensive)
- Industry standard for retail/restaurant
- Required for premium positioning

**SELECTIVE ACCEPTANCE:**
- Lower costs (skip Amex/Discover)
- Risk losing 10-15% of potential customers
- Common in low-margin businesses
- May signal "discount" positioning

---

## Historical Context

### Why Open-Loop Developed

**VISA'S ORIGINS (1958-1970s):**
- Bank of America created BankAmericard
- Licensed to other banks (couldn't expand nationally)
- Became Visa (network owned by member banks)
- Enabled nationwide/global reach

**MASTERCARD'S ORIGINS (1966-1970s):**
- Regional banks formed Interbank Card Association
- Competing banks pooled resources
- Became Mastercard (bank-owned cooperative)
- Similar model to Visa

### Why Closed-Loop Persisted

**AMERICAN EXPRESS (1850s-present):**
- Started as express mail and travelers checks
- Direct customer relationships from day one
- Premium positioning from the start
- Never needed bank partners
- Brand value tied to exclusivity

**DISCOVER (1985-present):**
- Launched by Sears to compete with credit cards
- Built own network from scratch
- Originally Sears customers only
- Evolved to broader acceptance

---

## Key Takeaways

1. **Open-loop creates competition** - Multiple banks on each side drive innovation and competitive pricing

2. **Closed-loop provides control** - Single entity can optimize experience but faces higher costs

3. **The models are converging** - Amex's OptBlue and co-branded cards blur the distinction

4. **Merchant fees reflect the model** - Closed-loop typically costs 0.5-1% more due to lack of competition

5. **PayFacs must support both** - Real-world platforms need to handle open and closed-loop networks

---

## Related Topics

**Card Network Fundamentals:**
- **[Card Network Role Overview](/ecosystem/fundamentals/card-network-role/)** - What card networks do
- **[Transaction Routing](/ecosystem/fundamentals/card-network-role/transaction-routing)** - How BIN routing works

**Business Models:**
- **[The Four-Party Model](/ecosystem/fundamentals/four-party-model/)** - Open-loop explained in depth
- **[PayFac Position](/ecosystem/fundamentals/four-party-model/payfac)** - How PayFacs fit into network models

**Next Steps:**
- **[Network Rules and Compliance](/ecosystem/fundamentals/card-network-role/network-rules)** - How networks govern participants
- **[Network Fees](/ecosystem/fundamentals/card-network-role/network-fees)** - Understanding assessment fees

---

*Continue learning: [Transaction Routing](/ecosystem/fundamentals/card-network-role/transaction-routing)*
