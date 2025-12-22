# Card Network Role

> **Last Updated:** 2025-12-18
>
> **Status:** Complete
>
> **Changes Log:**
> - 2025-12: Initial comprehensive notes covering open/closed loop networks

Card networks (also called card schemes or card brands) are the backbone of electronic payments. They don't hold money or issue cards—they provide the infrastructure, rules, and routing that make card payments possible worldwide.

---

## Overview

### What Card Networks Actually Do

Card networks serve three critical functions:

| Function | Description |
|----------|-------------|
| **Rule Setting** | Define standards for all participants ([issuers, acquirers](./01-four-party-model.md), merchants) |
| **Transaction Routing** | Route authorization requests between [acquirers](./07-acquiring-banks.md) and issuers |
| **Settlement Facilitation** | Calculate net positions and facilitate [fund transfers](./03-transaction-lifecycle.md#settlement--funding) |

### The Major Card Networks

| Network | Type | Market Share (US Volume) | Notable Characteristics |
|---------|------|--------------------------|------------------------|
| **Visa** | Open-loop | ~60-65% | Largest global network, does not issue cards |
| **Mastercard** | Open-loop | ~25-30% | Second largest, does not issue cards |
| **American Express** | Closed-loop | ~8-10% | Issues own cards, serves as issuer + acquirer |
| **Discover** | Closed-loop | ~1-2% | Issues own cards, US-focused |

> **Note on Market Share:** Amex's share of total *spending* may appear higher (~20%+) because they target affluent customers with higher average transaction values. The figures above reflect transaction volume/count.

---

## Open-Loop vs Closed-Loop Networks

This is a fundamental distinction in payment networks.

### Open-Loop Networks (Visa, Mastercard)

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                         OPEN-LOOP MODEL                                     │
│                       (Visa, Mastercard)                                    │
└─────────────────────────────────────────────────────────────────────────────┘

     ANY BANK                                              ANY BANK
     can issue                                             can acquire
         │                                                      │
         ▼                                                      ▼
┌─────────────────┐                                   ┌─────────────────┐
│  ISSUING BANK   │                                   │ ACQUIRING BANK  │
│                 │                                   │                 │
│  • Chase        │                                   │  • Wells Fargo  │
│  • BofA         │        ┌───────────────┐          │  • Chase        │
│  • Citi         │◀──────▶│  CARD NETWORK │◀────────▶│  • Worldpay     │
│  • Capital One  │        │  (Visa / MC)  │          │                 │
│  • Any bank     │        └───────────────┘          │  • Any bank     │
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

CHARACTERISTICS:
• Multiple issuers compete for cardholders
• Multiple acquirers compete for merchants
• Network is a neutral intermediary
• Greater competition = better rates/rewards
• Network charges assessment fees to both sides
```

### Closed-Loop Networks (Amex, Discover)

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CLOSED-LOOP MODEL                                   │
│                    (American Express, Discover)                             │
└─────────────────────────────────────────────────────────────────────────────┘

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

CHARACTERISTICS:
• Single entity controls entire experience
• Direct relationship with both cardholders AND merchants
• Higher merchant fees (no competition)
• Premium card positioning
• Better data/insights (sees both sides)
• No interchange in traditional model—they keep the entire merchant discount

IMPORTANT EVOLUTION:
• Amex co-branded cards (issued by partner banks like Wells Fargo) DO have
  an interchange-like structure internally
• OptBlue Program: Amex now allows third-party processors to handle merchants,
  creating a de facto interchange model for smaller merchants
• The "pure" closed-loop model is becoming less common
```

### Comparison Table

| Aspect | Open-Loop (Visa/MC) | Closed-Loop (Amex) |
|--------|--------------------|--------------------|
| Card issuance | Any member bank | Network itself (primarily) |
| Merchant acquiring | Any member bank | Network itself |
| Competition | High (many issuers/acquirers) | Low (one entity) |
| Merchant fees | Lower (~2-2.5%) | Higher (~2.5-3.5%) |
| Cardholder rewards | Funded by interchange | Funded by merchant fees |
| Data access | Fragmented | Complete view |
| Global acceptance | Very high | Lower |

---

## How Card Networks Route Transactions

The network's routing function happens in milliseconds during authorization.

### BIN-Based Routing

The **BIN (Bank Identification Number)** is the key to routing. It's the first 6-8 digits of a card number.

```text
Card Number: 4532 1234 5678 9012
             ─────
               │
               └──▶ BIN: 453212

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

### BIN Length Evolution (IIN Transition)

The payment industry is transitioning from 6-digit to 8-digit BINs due to BIN exhaustion:

```text
WHY THE CHANGE?
───────────────
• 6-digit BINs provide 1,000,000 possible combinations
• With thousands of issuers globally (each needing multiple BINs for
  credit, debit, prepaid, commercial), we were running out
• ISO/IEC 7812 updated in 2017 to allow 8-digit BINs (100,000,000 combinations)

IMPLEMENTATION TIMELINE:
────────────────────────
• 2017: ISO standard updated
• 2018-2022: Networks began issuing 8-digit BINs
• 2022-2025: Both 6-digit and 8-digit BINs in active use
• Future: Gradual migration to 8-digit as standard

DEVELOPER IMPACT:
─────────────────
• Payment systems MUST handle variable-length BINs (6 OR 8 digits)
• BIN lookup tables need to support both lengths
• Routing logic should check 8 digits first, fall back to 6
```

### Authorization Routing Flow

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

### What the Network Validates

During routing, the network performs several checks:

```text
┌─────────────────────────────────────────────────────────────────┐
│                    NETWORK VALIDATION CHECKS                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. CARD VALIDITY                                               │
│     □ Is BIN valid and active?                                  │
│     □ Is card number format correct (Luhn algorithm)?           │
│     □ Is card not on hot list (lost/stolen)?                    │
│                                                                 │
│  2. MERCHANT VALIDITY                                           │
│     □ Is merchant registered with network?                      │
│     □ Is merchant in good standing?                             │
│     □ Is MCC (Merchant Category Code) valid?                    │
│                                                                 │
│  3. TRANSACTION VALIDITY                                        │
│     □ Does currency match merchant registration?                │
│     □ Is amount within acceptable range?                        │
│     □ Are all required fields present?                          │
│                                                                 │
│  4. ROUTING                                                     │
│     □ Identify issuer from BIN                                  │
│     □ Route to correct issuer endpoint                          │
│     □ Apply any network-specific rules                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Network Rules and Compliance

Card networks publish extensive rulebooks that all participants must follow.

### Why Rules Exist

```text
NETWORK RULES SERVE THREE PURPOSES:

1. INTEROPERABILITY
   ─────────────────
   • Any Visa card works at any Visa-accepting merchant
   • Consistent experience worldwide
   • Standardized message formats (ISO 8583)
   • Common security requirements

2. CONSUMER PROTECTION
   ────────────────────
   • [Chargeback](./03-transaction-lifecycle.md#when-things-go-wrong) rights (dispute process)
   • Zero liability for fraud
   • Data protection requirements
   • Receipt and disclosure requirements

3. BRAND PROTECTION
   ─────────────────
   • Prevent merchants from damaging the brand
   • Maintain trust in the payment system
   • Exclude bad actors
   • Ensure consistent quality
```

### Key Network Rules

| Rule Category | Example Rules |
|---------------|---------------|
| **Acceptance** | Must accept all valid cards of that brand (no cherry-picking) |
| **Pricing** | Cannot charge more for card vs cash (varies by jurisdiction) |
| **Display** | Must display network logos at point of sale |
| **Security** | Must comply with [PCI-DSS](./06-payment-gateways.md#pci-compliance) standards |
| **Data** | Cannot store CVV/CVC after authorization |
| **Disputes** | Must respond to chargebacks within specified timeframes |
| **Refunds** | Must refund to same card used for purchase |

### Consequences of Rule Violations

```text
VIOLATION ESCALATION PATH:

Level 1: WARNING
│         • First-time minor violation
│         • Educational notice sent
│
▼
Level 2: FINES
│         • Repeated violations
│         • $5,000 - $25,000 per incident
│         • Monthly non-compliance fees
│
▼
Level 3: INCREASED MONITORING
│         • Enhanced reporting requirements
│         • More frequent audits
│         • Higher reserve requirements
│
▼
Level 4: RESTRICTIONS
│         • Processing volume caps
│         • Higher fees
│         • Loss of certain privileges
│
▼
Level 5: TERMINATION
          • Placed on MATCH/TMF(Terminated Merchant File) list
          • Cannot accept cards for 5+ years
          • Severe reputational damage
          • May affect ability to get banking services


COMMON VIOLATIONS THAT TRIGGER FINES:
• Excessive chargebacks (>1% of transactions)
• PCI-DSS non-compliance
• Processing prohibited transaction types
• Improper surcharging
• Data breaches
• Fraud rate above threshold
```

---

## Network Fees (Assessments)

Networks charge fees for using their infrastructure.

### Fee Structure

```text
┌─────────────────────────────────────────────────────────────────┐
│                     NETWORK FEE COMPONENTS                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ASSESSMENT FEES (charged on transaction volume)                │
│  ───────────────────────────────────────────────                │
│  • Visa:       0.13% - 0.15% of transaction volume              │
│  • Mastercard: 0.13% - 0.14% of transaction volume              │
│  • Charged to acquirer (passed to merchant)                     │
│                                                                 │
│  PASSTHROUGH FEES (often overlooked!)                           │
│  ────────────────────────────────────                           │
│  Networks charge additional per-transaction fees beyond         │
│  assessments:                                                   │
│                                                                 │
│  Visa:                                                          │
│  • APF (Acquirer Processing Fee): $0.0195 per transaction       │
│  • FANF (Fixed Acquirer Network Fee): Monthly fee by MCC        │
│  • Digital Commerce Fee: 0.02% for e-commerce                   │
│                                                                 │
│  Mastercard:                                                    │
│  • NABU (Network Access & Brand Usage): $0.0195 per auth        │
│  • Digital Enablement Fee: $0.01 per transaction                │
│                                                                 │
│  TRANSACTION FEES (per-transaction)                             │
│  ──────────────────────────────────                             │
│  • Authorization fee: $0.02 - $0.04 per auth                    │
│  • Clearing fee: ~$0.01 per cleared transaction                 │
│  • Settlement fee: ~$0.01 per settlement                        │
│                                                                 │
│  SPECIAL FEES                                                   │
│  ────────────                                                   │
│  • International transaction fees: 0.40% - 1.00%                │
│  • Cross-border fees: additional 0.60%                          │
│  • Currency conversion fees: 0.20% - 0.30%                      │
│  • Chargeback fees: $15 - $25 per dispute                       │
│                                                                 │
│  REALISTIC EXAMPLE: $100 Visa CNP Transaction                   │
│  ────────────────────────────────────────────                   │
│  Assessment:          $100 × 0.14%  = $0.14                     │
│  APF:                               = $0.0195                   │
│  Digital Commerce Fee: $100 × 0.02% = $0.02                     │
│  Authorization:                     = $0.02                     │
│  Clearing:                          = $0.01                     │
│  ────────────────────────────────────────────                   │
│  Total Network Fees:                = $0.21                     │
│                                                                 │
│  Note: Effective network fees are typically 0.15% - 0.25%       │
│  when all passthrough fees are included.                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Card-Present vs Card-Not-Present

Networks distinguish transaction types by risk level.

```text
┌─────────────────────────────────────────────────────────────────┐
│              CARD-PRESENT (CP) TRANSACTIONS                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DEFINITION: Physical card present at point of sale             │
│                                                                 │
│  METHODS:                                                       │
│  • EMV(Europay, Mastercard, Visa) chip insertion (most secure)  │
│  • Contactless/NFC tap (Apple Pay, etc.)                        │
│  • Magnetic stripe swipe (least secure, declining)              │
│                                                                 │
│  CHARACTERISTICS:                                               │
│  ✓ Lower fraud risk (card physically verified)                  │
│  ✓ Lower interchange rates                                      │
│  ✓ Stronger chargeback defense for merchant                     │
│  ✓ Immediate card authentication                                │
│                                                                 │
│  INTERCHANGE EXAMPLE (Visa CPS Retail):                         │
│  1.51% + $0.10 per transaction                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│           CARD-NOT-PRESENT (CNP) TRANSACTIONS                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DEFINITION: Card not physically present during transaction     │
│                                                                 │
│  METHODS:                                                       │
│  • E-commerce (online checkout)                                 │
│  • Phone orders (MOTO - Mail Order/Telephone Order)             │
│  • Recurring billing                                            │
│  • In-app purchases                                             │
│                                                                 │
│  CHARACTERISTICS:                                               │
│  ✗ Higher fraud risk (card not verified physically)             │
│  ✗ Higher interchange rates                                     │
│  ✗ Weaker chargeback defense for merchant                       │
│  ✗ Relies on CVV, AVS, [3D Secure](./06-payment-gateways.md#3d-secure) for verification               │
│                                                                 │
│  INTERCHANGE EXAMPLE (Visa Card Not Present):                   │
│  1.80% + $0.10 per transaction                                  │
│                                                                 │
│  FRAUD MITIGATION:                                              │
│  • CVV/CVV2 verification                                        │
│  • AVS (Address Verification System)                            │
│  • 3D Secure (Verified by Visa, Mastercard SecureCode)          │
│  • Device fingerprinting                                        │
│  • Velocity checks                                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

INTERCHANGE RATE COMPARISON (2024-2025 ranges):

Transaction Type            │ Typical Rate          │ Notes
────────────────────────────┼───────────────────────┼─────────────────────────
CP - Debit (regulated)      │ 0.05% + $0.21         │ [Durbin cap](./04-debit-networks-routing.md#durbin-amendment--regulated-debit) (banks >$10B)
CP - Debit (unregulated)    │ 0.80% - 1.40% + $0.15 │ Small banks exempt
CP - Credit (standard)      │ 1.54% + $0.10         │ Visa CPS Retail (2024)
CP - Credit (rewards)       │ 1.65% + $0.10         │ Visa Signature Preferred
CNP - Credit (standard)     │ 1.80% + $0.10         │ Base e-commerce rate
CNP - Credit (rewards)      │ 2.30% - 2.50% + $0.10 │ Most consumer cards
CNP - Credit (premium)      │ 2.60% - 3.15% + $0.10 │ World Elite/Infinite

Note: Interchange varies by 300+ categories. The above are representative
examples. Actual rates depend on MCC, card type, processing method, and
data provided (AVS match, Level 2/3 data, etc.).
```

---

## Key Terms Defined

| Term | Definition |
|------|------------|
| **Card Scheme / Card Network** | Organization that provides infrastructure, rules, and routing for card payments (Visa, Mastercard, Amex, Discover) |
| **Open-Loop Network** | Network where multiple banks can issue cards and acquire merchants (Visa, Mastercard) |
| **Closed-Loop Network** | Network where a single entity acts as issuer, acquirer, and network (Amex, Discover) |
| **Network Assessment** | Fees charged by card networks for using their infrastructure, typically 0.13-0.15% of volume |
| **BIN (Bank Identification Number)** | First 6-8 digits of card number identifying the issuing bank, used for transaction routing |
| **Card-Present (CP)** | Transaction where the physical card is presented (swipe, dip, tap) |
| **Card-Not-Present (CNP)** | Transaction where card is not physically present (online, phone, mail) |
| **ISO 8583** | International standard for payment card message formats used by networks |
| **MATCH/TMF List** | Mastercard's terminated merchant file—a blacklist of merchants terminated for cause (see [ISO underwriting](./08-isos.md#underwriting-and-risk-management)) |

---

## Self-Assessment Questions & Answers

### Question 5: What is the fundamental difference between Visa/Mastercard (open-loop) and American Express (closed-loop)?

**Answer:**

**Open-Loop (Visa/Mastercard):**

- The network is a **neutral intermediary** that only provides routing and rules
- **Any bank** can issue cards branded with their logo
- **Any bank** can sign up merchants to accept their cards
- The network does NOT have direct relationships with cardholders or merchants
- Creates competition among issuers and acquirers, generally resulting in lower merchant fees

**Closed-Loop (American Express):**

- Amex acts as **all three parties**: network, issuer, AND acquirer
- Amex issues most cards directly to consumers (has direct cardholder relationship)
- Amex signs merchants directly (has direct merchant relationship)
- No competition on their network—they set all fees
- Results in higher merchant fees but more control over experience and data

**Key Implication:** When a merchant accepts Amex, there's no interchange—Amex keeps the entire merchant discount. With Visa/MC, the fee is split between the issuing bank (interchange), network (assessment), and acquirer (markup).

### Question 6: Why do card networks publish rules that all participants must follow? What happens if a merchant violates network rules?

**Answer:**

**Why Rules Exist:**

1. **Interoperability** - Ensures any Visa card works at any Visa merchant worldwide. Without standards, a card from Chase might not work at a terminal configured for Bank of America.

2. **Consumer Protection** - Guarantees cardholders consistent rights (dispute resolution, zero fraud liability, refund policies) regardless of which bank issued their card.

3. **Brand Trust** - The Visa/MC logo is a promise of reliability and security. Rules prevent bad actors from damaging this trust.

4. **Risk Management** - Rules around security (PCI-DSS), chargeback thresholds, and prohibited businesses protect the entire ecosystem.

**Consequences for Violations:**

| Severity | Consequence |
|----------|-------------|
| Minor/First offense | Warning letter, education requirement |
| Repeated violations | Fines ($5,000-$100,000+ per incident) |
| Serious violations | Increased monitoring, higher reserves required |
| Severe/Continued | Processing restrictions, volume caps |
| Worst case | Termination + MATCH listing (5-year ban) |

A MATCH-listed merchant cannot accept cards at any processor, effectively ending their ability to operate most modern businesses.

### Question 7: How does a card network route an authorization request to the correct issuing bank?

**Answer:**

The routing process uses the **BIN (Bank Identification Number)**:

1. **Card Presented** - Customer taps/swipes card with number 4532-1234-5678-9012

2. **Network Identified** - First digit (4) indicates Visa network

3. **Acquirer Sends to Visa** - The merchant's processor sends the authorization request to Visa

4. **BIN Lookup** - Visa maintains a BIN table mapping the first 6-8 digits to specific issuers:
   - 453212 → Chase
   - 412345 → Bank of America
   - 423456 → Citi

5. **Route to Issuer** - Visa routes the request to Chase's authorization system

6. **Issuer Decides** - Chase checks available credit, fraud signals, and card status, then approves/declines

7. **Response Returns** - The response travels back: Chase → Visa → Acquirer → Merchant

This entire process takes 1-3 seconds. The BIN database is constantly updated as banks issue new card ranges.

### Question 8: What is a BIN, and why is it important for transaction routing?

**Answer:**

**What is a BIN:**

- BIN stands for **Bank Identification Number**
- It's the **first 6-8 digits** of a card number
- Uniquely identifies the **issuing bank** and often the **card product** (e.g., Visa Signature vs. standard)

**Structure:**

```text
Card: 4532-1234-5678-9012
      ──────
      BIN: 453212

First digit: Network (4=Visa, 5=Mastercard, 3=Amex)
Digits 1-6 or 1-8: Issuing bank + card product
```

**Why It's Critical:**

1. **Transaction Routing** - Networks use BINs to route authorization requests to the correct issuing bank in milliseconds

2. **Interchange Determination** - Different BINs have different interchange rates (rewards cards cost more than standard cards)

3. **Fraud Detection** - BINs reveal card type and issuer, enabling risk decisions (e.g., prepaid cards are higher risk for certain merchants)

4. **Card Validation** - Validates that the card number is from a legitimate, active BIN range

5. **Product Identification** - Tells merchants whether it's debit/credit, commercial/consumer, rewards/standard—affecting processing decisions

**Example BIN Insights:**

| BIN | Issuer | Card Type | Interchange Tier |
|-----|--------|-----------|------------------|
| 453212 | Chase | Sapphire Preferred (Rewards) | High |
| 412345 | BofA | Standard Credit | Standard |
| 414720 | Chase | Debit | Regulated |

---

## Key Takeaways

1. **Networks are infrastructure, not banks** - Visa and Mastercard don't issue cards or hold money; they provide rails and rules

2. **BIN is the routing key** - The first 6-8 digits determine where a transaction goes

3. **Open vs Closed matters** - Open-loop creates competition and lower fees; closed-loop provides control and premium positioning

4. **Rules protect everyone** - Network rules ensure interoperability, protect consumers, and maintain trust

5. **CP vs CNP = Risk vs Rate** - Card-not-present transactions carry more risk and cost more

---

## References

### Official Network Documentation

- [Visa Core Rules and Product and Service Rules](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf) - Complete Visa rulebook
- [Mastercard Rules Manual](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/mastercard-rules.pdf) - Mastercard standards and requirements
- [Visa Merchant Data Standards Manual](https://usa.visa.com/dam/VCOM/download/merchants/visa-merchant-data-standards-manual.pdf) - Technical implementation details

### BIN Information

- [ISO/IEC 7812](https://www.iso.org/standard/70484.html) - International standard for card identification numbers
- [Visa BIN Attribute Sharing Service](https://developer.visa.com/capabilities/visa-bin-attribute-sharing-service/docs-getting-started) - BIN lookup API documentation

### Industry Resources

- [Electronic Transactions Association (ETA)](https://www.electran.org/) - Industry association for payment processors
- [PCI Security Standards Council](https://www.pcisecuritystandards.org/) - PCI-DSS compliance requirements

### Regulatory

- [Federal Reserve Regulation II](https://www.federalreserve.gov/paymentsystems/regii-about.htm) - Debit interchange fee caps (Durbin Amendment)
- [CFPB Credit Card Market Report](https://www.consumerfinance.gov/data-research/research-reports/) - Consumer protection analysis

---

## Further Reading

- **"Payments Systems in the U.S."** by Carol Coye Benson - Comprehensive textbook on US payment systems
- **Visa Annual Report** - Understanding network economics from financial disclosures
- **NerdWallet: Credit Card Processing Fees** - Practical breakdown of merchant fees
- [Stripe's Guide to Card Networks](https://stripe.com/resources/more/how-do-credit-card-networks-works) - Developer-friendly explanation

---

*Previous: [The Four-Party Model](./01-four-party-model.md)*
*Next: [Transaction Lifecycle Basics](./03-transaction-lifecycle.md)*

---

## Related Topics

| Topic | Description |
|-------|-------------|
| [The Four-Party Model](./01-four-party-model.md) | Core participants (issuer, acquirer, network) explained |
| [Transaction Lifecycle](./03-transaction-lifecycle.md) | How authorization, capture, and settlement actually work |
| [Debit Networks & Routing](./04-debit-networks-routing.md) | PIN networks, Durbin Amendment, and least-cost routing |
| [Payment Processors](./05-payment-processors.md) | Front-end and back-end processing infrastructure |
| [Payment Gateways](./06-payment-gateways.md) | Tokenization, PCI compliance, and 3D Secure |
| [Acquiring Banks](./07-acquiring-banks.md) | Sponsor banks and merchant acquiring |
| [ISOs](./08-isos.md) | Independent Sales Organizations and merchant services |
| [ISVs](./09-isvs.md) | Software vendors with embedded payments |
