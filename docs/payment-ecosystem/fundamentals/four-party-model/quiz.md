---
title: "Four-Party Model Quiz"
description: "Self-assessment questions to test your understanding of the four-party model"
sidebar_position: 6
sidebar_label: "Quiz"
slug: quiz
keywords:
  - four-party model quiz
  - payment systems test
  - interchange quiz
  - payment knowledge check
---

# Four-Party Model: Self-Assessment Quiz

> **Last Updated:** 2025-12-18
>
> **Status:** Complete
>
> Test your understanding of the four-party model with these comprehensive questions.

---

## How to Use This Quiz

Work through each question before reading the answer. These questions are derived from the four-party model documentation and test critical concepts you'll need to understand payment systems.

---

## Question 1: Interchange Fee Flow

**In a credit card transaction, who pays the interchange fee and who receives it?**

<details>
<summary>Click to see answer</summary>

**Answer:**

The **acquiring bank pays** the interchange fee, and the **issuing bank receives** it. This fee is deducted from the transaction amount before the merchant is funded. The interchange fee compensates the issuer for:

- Credit risk (lending money to the cardholder)
- Fraud protection
- Card rewards programs
- Transaction processing costs

**Example:** On a $100 transaction with 1.80% interchange:
- Issuer receives: $1.80
- This is deducted from what the acquirer pays to the merchant
- Merchant receives: $97.50 (after all fees)

</details>

---

## Question 2: Acquirer Risk

**Why does the acquiring bank take on risk when a merchant accepts a card payment?**

<details>
<summary>Click to see answer</summary>

**Answer:**

The acquiring bank takes on risk because:

1. **Chargeback Liability**: If a cardholder disputes a transaction and wins, the acquirer must return funds to the issuer. If the merchant can't cover this (bankrupt, fraudulent, or disappeared), the acquirer absorbs the loss.

2. **Merchant Fraud**: If a merchant processes fraudulent transactions or doesn't deliver goods/services, the acquirer is ultimately responsible.

3. **Settlement Timing**: The acquirer often funds merchants before receiving money from the issuer, creating a timing risk.

4. **Contractual Position**: The acquirer's agreement with the card network makes them responsible for their merchants' behavior.

This is why acquirers perform underwriting and require reserves from high-risk merchants.

</details>

---

## Question 3: Decline Message Origin

**What happens to a transaction if the issuing bank declines it? Where does the decline message originate?**

<details>
<summary>Click to see answer</summary>

**Answer:**

When an issuing bank declines a transaction:

1. The decline message **originates from the issuing bank** (issuer)
2. The issuer sends a decline response code through the card network
3. The network routes this to the acquirer/processor
4. The processor sends it to the payment gateway
5. The gateway communicates it to the merchant's POS/website
6. The customer sees "Card Declined"

**Common decline reasons:**

- Insufficient funds (code: 51)
- Incorrect CVV (code: N7)
- Expired card (code: 54)
- Suspected fraud (code: 59)
- Over credit limit (code: 61)

The merchant never knows the exact reason, just a generic code, to protect cardholder privacy.

</details>

---

## Question 4: Fee Breakdown

**A customer buys a $100 item. The merchant receives $97.50. Break down where the $2.50 went.**

<details>
<summary>Click to see answer</summary>

**Answer:**

| Recipient | Fee Type | Amount | Percentage |
|-----------|----------|--------|------------|
| **Issuing Bank** | Interchange Fee | $1.80 | 1.80% |
| **Card Network** (Visa/MC) | Assessment Fee | $0.16 | 0.16% |
| **Acquirer/Processor** | Markup | $0.54 | 0.54% |
| **Total Fees** | MDR | **$2.50** | **2.50%** |

**Breakdown:**

- **Interchange ($1.80)**: Non-negotiable, set by Visa/Mastercard, goes to issuer (e.g., Chase)
- **Assessment ($0.16)**: Non-negotiable, goes to Visa or Mastercard for network usage
- **Markup ($0.54)**: Negotiable, this is where the acquirer and processor make their profit

**Note:** Only the acquirer markup is negotiable. High-volume merchants can negotiate this down to 0.1% - 0.3%.

</details>

---

## Question 5: Authorization vs Settlement

**What is the difference between authorization and settlement?**

<details>
<summary>Click to see answer</summary>

**Answer:**

**Authorization:**

- Happens in real-time (milliseconds to seconds)
- Issuer approves or declines the transaction
- Places a HOLD on cardholder's available credit/balance
- No money actually moves yet
- Example: Hotel authorizes $500 when you check in

**Settlement:**

- Happens later (typically T+1 to T+3)
- Actual movement of funds between banks
- Merchant receives funds (minus fees)
- Cardholder's statement shows final charge
- Example: Hotel settles $350 when you check out

**Key difference:** Authorization is a promise to pay; settlement is actual payment. A merchant can authorize but never settle (transaction voided), or settle less than authorized (hotel example).

**Full lifecycle:**
1. Authorization (real-time): Hold placed
2. Capture (same day or later): Merchant claims funds
3. Clearing (end of day): Network calculates positions
4. Settlement (T+1 to T+3): Money moves between banks

</details>

---

## Question 6: Premium Card Interchange

**Why do premium rewards cards have higher interchange than basic cards?**

<details>
<summary>Click to see answer</summary>

**Answer:**

Premium rewards cards (like Chase Sapphire Reserve, AmEx Platinum) have higher interchange because:

1. **Funding rewards**: Higher interchange (2.5-3.3%) funds the 2-5% cashback/points programs
2. **Issuer economics**: Issuers need to cover the cost of rewards they pay out
3. **Consumer behavior**: Rewards cardholders spend more and prefer their rewards card
4. **No caps**: Unlike the EU/Australia, US has no credit card interchange caps
5. **Cross-subsidy**: Merchants pay more, effectively subsidizing rewards for cardholders

**The cycle:** Higher interchange → Better rewards → More card usage → Higher interchange. This creates an "interchange arms race" where card issuers compete on rewards funded by merchant fees.

**Example comparison:**
- Basic debit card: 0.27% (Durbin-capped)
- Standard credit card: 1.65%
- Premium rewards card: 2.95%

The merchant pays 10x more for a premium rewards card vs a basic debit card on the same $100 transaction.

</details>

---

## Question 7: Card-Present vs Card-Not-Present

**Why is card-present interchange lower than card-not-present interchange?**

<details>
<summary>Click to see answer</summary>

**Answer:**

Card-present (CP) transactions have lower interchange because they have **lower fraud risk**:

**Card-Present (CP):**
- Physical card present
- Chip verification or contactless
- Customer present
- Lower fraud rate (~0.05% - 0.1%)
- Example: 1.43% + $0.05

**Card-Not-Present (CNP):**
- No physical card
- Manual entry or e-commerce
- Customer not present
- Higher fraud rate (~0.5% - 1.5%)
- Example: 1.80% + $0.10

**Why it matters:**
- Issuers bear more fraud risk on CNP transactions
- Higher interchange compensates for this risk
- PayFacs building e-commerce platforms face inherently higher costs

**Typical difference:** CNP interchange is 20-40% higher than CP

</details>

---

## Question 8: Level 2/3 Data Benefits

**What is Level 2/3 data and how does it reduce interchange costs?**

<details>
<summary>Click to see answer</summary>

**Answer:**

Level 2 and Level 3 data provide additional transaction details that qualify for lower commercial card rates:

**Level 2 Data:**
- Tax amount
- Customer code / PO number
- Merchant postal code
- Merchant tax ID
- **Savings:** 0.10% - 0.25%

**Level 3 Data:**
- Everything in Level 2 PLUS
- Line item details (description, SKU, quantity, price)
- Product codes
- Commodity codes
- **Savings:** 0.30% - 0.50%

**Why it reduces costs:**
- Provides proof of legitimate B2B/government transaction
- Reduces fraud risk from corporate card misuse
- Networks reward transparency with lower rates

**Example:** $10,000 corporate purchase
- Level 1 (basic): $250 in interchange (2.50%)
- Level 3 (full detail): $200 in interchange (2.00%)
- **Savings:** $50 per transaction, $5,000/year on 100 transactions

**Best for:** B2B merchants, government contractors, corporate sales

</details>

---

## Question 9: Durbin Amendment Impact

**What is the Durbin Amendment and how does it affect debit card interchange?**

<details>
<summary>Click to see answer</summary>

**Answer:**

The Durbin Amendment (2010, part of Dodd-Frank Act) caps debit interchange for large banks:

**Who It Affects:**
- Banks with $10 billion+ in assets ("regulated issuers")
- Examples: Chase, Bank of America, Wells Fargo, Citi

**The Cap:**

```text
Maximum: $0.22 + 0.05% of transaction amount
         (+ $0.01 fraud adjustment if eligible)
```

**Impact on $100 transaction:**
- Regulated debit (Chase): ~$0.27 (0.27%)
- Unregulated debit (credit union): ~$1.00 (1.00%)
- Credit card: ~$1.80 (1.80%)

**Consequences:**

1. **For issuers**: Large banks earn ~70% less on debit vs unregulated
2. **For merchants**: Significant savings on regulated debit (when passed through)
3. **For consumers**: Big banks push credit over debit, reduced debit rewards
4. **For small banks**: Competitive advantage with better debit rewards

**Why it matters for PayFacs:** Understanding regulated vs unregulated interchange is critical for pricing and economics.

</details>

---

## Question 10: Honor All Cards Rule

**What is the "Honor All Cards" rule and why does it matter?**

<details>
<summary>Click to see answer</summary>

**Answer:**

**The Rule:** If a merchant accepts Visa, they must accept **ALL** Visa cards, including premium cards with higher interchange.

**Implications:**

1. **No selective acceptance**: Can't accept only low-interchange cards
2. **Can't refuse premium cards**: Must accept Chase Sapphire Reserve even though it costs 2.95%
3. **Cross-subsidy effect**: Cash/debit customers effectively subsidize rewards cardholders
4. **Merchant power limited**: Can't discriminate based on card profitability

**Allowed under Durbin Amendment:**
- Set $10 minimum transaction amount
- Offer discounts for different payment types (cash vs card)
- Surcharge for credit cards (in states where legal)

**NOT allowed:**
- Refuse specific card types within network (e.g., accept Visa but not Visa Signature)
- Surcharge based on specific card (must be network-level)

**Why it matters:**
- Merchants can't optimize by accepting only profitable cards
- Creates incentive for issuers to offer better rewards (funded by merchants)
- Contributes to the "interchange arms race"

</details>

---

## Question 11: PayFac Risk Position

**In the PayFac model, what happens if a sub-merchant processes fraudulent transactions and disappears?**

<details>
<summary>Click to see answer</summary>

**Answer:**

The **PayFac absorbs the chargeback losses first**, not the sponsor bank.

**Risk cascade:**

1. **Sub-merchant** - First responsible for transaction validity
2. **If sub-merchant can't pay** → PayFac uses sub-merchant's reserves (if any)
3. **If reserves insufficient** → PayFac pays from its own capital/reserves
4. **If PayFac can't cover** → Sponsor bank pays from PayFac's reserves with sponsor
5. **If all else fails** → Card networks can fine/terminate sponsor relationship

**Why this matters:**

- PayFacs must maintain significant capital reserves ($500K - $5M+)
- One fraudulent sub-merchant can wipe out months of profit
- Underwriting and fraud prevention are existential requirements
- This is why PayFac margins are thin (0.2% - 0.5%)

**Example:**
- Sub-merchant processes $500K in fraudulent transactions
- Disappears before chargebacks hit
- PayFac must cover $500K in chargebacks
- At 0.3% margin, PayFac needs $167M in legitimate volume to recover

**Key takeaway:** PayFacs inherit acquirer-level risk while typically having less capital than traditional banks.

</details>

---

## Question 12: Batch Timing Impact

**Why does batching transactions late cause higher interchange rates?**

<details>
<summary>Click to see answer</summary>

**Answer:**

Late batching causes **interchange downgrades** because networks view delayed settlement as higher risk:

**Qualification tiers:**

| Timing | Rate | Example |
|--------|------|---------|
| **Within 24 hours** | Qualified | 1.43% + $0.05 |
| **24-72 hours** | Mid-qualified | 1.95% + $0.10 |
| **Over 72 hours** | Non-qualified | 2.30% + $0.10 |

**Why networks penalize late batching:**
- Higher fraud risk (fraudulent transactions often delayed)
- Increases chargeback window
- Creates settlement complications
- Violates network best practices

**Cost impact:**
- $100 transaction batched within 24h: $1.48 fee
- Same transaction batched after 72h: $2.40 fee
- **Penalty:** $0.92 (62% higher cost)

**Best practices:**
- Batch daily before cutoff (typically 5-6 PM EST)
- Automate batch closing
- Monitor for failed batches
- Capture promptly after authorization

**Exception:** Hotels and car rentals are allowed to authorize early and capture later due to business model.

</details>

---

## Question 13: Cross-Border Fee Structure

**Why are cross-border transactions significantly more expensive than domestic transactions?**

<details>
<summary>Click to see answer</summary>

**Answer:**

Cross-border transactions include **additional fees beyond domestic interchange**:

**Fee stack for cross-border:**

```text
Domestic fees:                    ~2.5%
+ Currency conversion:            1.0% - 3.0%
+ Cross-border assessment:        0.40% - 1.00%
+ International service fee:      0.20% - 0.40%
─────────────────────────────────────────
Total cross-border:               4.0% - 7.0%
```

**Why they cost more:**

1. **Currency conversion risk**: FX rate volatility
2. **Higher fraud risk**: International fraud harder to detect/pursue
3. **Regulatory complexity**: Different laws in different countries
4. **Settlement complexity**: Moving money between countries
5. **Limited recourse**: Harder to recover losses internationally

**Additional considerations:**
- Different interchange schedules by region (EU caps at 0.2%/0.3%, US no caps)
- Strong Customer Authentication (SCA) in EU
- Data localization requirements (GDPR, etc.)
- Multi-currency accounting complexity

**Optimization strategies:**
- Local acquiring in high-volume markets
- Multi-currency pricing
- Evaluate DCC (Dynamic Currency Conversion) carefully
- Understand regional interchange differences

</details>

---

## Question 14: Master MID Model

**What is the difference between a traditional merchant account and the PayFac master MID model?**

<details>
<summary>Click to see answer</summary>

**Answer:**

**Traditional Model:**

```text
Each merchant gets individual MID:
  Merchant A → MID-001 → Acquirer
  Merchant B → MID-002 → Acquirer

Process:
  • Merchant applies directly to acquirer
  • Underwritten individually (1-4 weeks)
  • Direct acquirer relationship
  • Separate settlement to each merchant
  • Individual compliance requirements
```

**PayFac Model:**

```text
All sub-merchants under one master MID:
  PayFac Master MID-1000 → Sponsor Bank
    ├── Sub A (1000-A)
    ├── Sub B (1000-B)
    └── Sub C (1000-C)

Process:
  • PayFac onboards sub-merchants (minutes)
  • PayFac underwrites with own criteria
  • Aggregated volume under one MID
  • PayFac splits settlement to subs
  • PayFac handles compliance
```

**Key differences:**

| Aspect | Traditional | PayFac |
|--------|------------|--------|
| **Onboarding time** | 1-4 weeks | Minutes to hours |
| **Who underwrites** | Acquirer | PayFac |
| **Chargeback liability** | Direct to merchant | PayFac first, then sub |
| **Merchant descriptor** | Merchant name | "SUB-MERCHANT * PAYFAC" |
| **Compliance** | Merchant responsible | PayFac responsible |
| **Capital requirements** | Low | High ($500K+) |

**Why it matters:** Master MID enables fast onboarding but concentrates risk with PayFac.

</details>

---

## Question 15: Interchange Negotiability

**Which components of merchant fees are negotiable and which are fixed?**

<details>
<summary>Click to see answer</summary>

**Answer:**

**Fee breakdown on $100 transaction:**

| Component | Amount | Set By | Negotiable? |
|-----------|--------|--------|-------------|
| **Interchange** | $1.80 | Card networks | **NO** |
| **Assessment** | $0.16 | Card networks | **NO** |
| **Acquirer markup** | $0.54 | Acquirer/processor | **YES** |

**Non-negotiable (78-80% of total):**

1. **Interchange ($1.80)**
   - Set by Visa/Mastercard
   - Published in official rate schedules
   - Changes April and October
   - Same for all acquirers

2. **Assessment ($0.16)**
   - Network fees for using Visa/MC infrastructure
   - Published by networks
   - Applies to all transactions
   - Includes percentage and fixed components

**Negotiable (20-22% of total):**

3. **Acquirer/Processor Markup ($0.54)**
   - Acquirer's profit margin
   - Can range from 0.1% to 1.5%+
   - Based on merchant volume, risk, negotiating power
   - This is what merchants negotiate

**Negotiation leverage:**
- **High volume**: $10M+/year can negotiate to 0.1% - 0.3%
- **Low risk**: Established businesses get better rates
- **Card-present**: Lower risk = better rates
- **Low chargebacks**: Under 0.5% = negotiating power

**What merchants should ask for:**
- Interchange-plus pricing (transparency)
- Competitive processor markup (0.2% - 0.5%)
- No hidden fees (PCI non-compliance, statement fees, etc.)

**Reality:** Most merchants overpay on the markup, not understanding that 80% of fees are non-negotiable.

</details>

---

## Scoring Guide

- **13-15 correct**: Expert level - You understand the four-party model deeply
- **10-12 correct**: Proficient - You grasp the key concepts
- **7-9 correct**: Intermediate - Review the detailed documentation
- **0-6 correct**: Beginner - Start with the overview and work through each section

---

## Next Steps

Based on your quiz results:

**If you scored well:**
- Move on to [Card Network Role](/payment-ecosystem/fundamentals/card-network-role)
- Explore [Transaction Lifecycle](/payment-ecosystem/fundamentals/transaction-lifecycle/overview)
- Deep dive into [Debit Networks & Routing](/payment-ecosystem/fundamentals/debit-networks-routing)

**If you need review:**
- Revisit [Four-Party Model Overview](/payment-ecosystem/fundamentals/four-party-model/)
- Study [Transaction Flows](/payment-ecosystem/fundamentals/four-party-model/transaction-flows) for authorization/settlement
- Review [Fee Breakdown](/payment-ecosystem/fundamentals/four-party-model/fee-breakdown) for interchange details
- Read [Optimization](/payment-ecosystem/fundamentals/four-party-model/optimization) for cost reduction strategies
- Check [PayFac Position](/payment-ecosystem/fundamentals/four-party-model/payfac) for Payment Facilitator model

---

## Related Topics

**Four-Party Model Series:**
- **[Four-Party Model Overview](/payment-ecosystem/fundamentals/four-party-model/)** - Core concepts and party roles
- **[Transaction Flows](/payment-ecosystem/fundamentals/four-party-model/transaction-flows)** - Authorization, capture, settlement
- **[Fee Breakdown](/payment-ecosystem/fundamentals/four-party-model/fee-breakdown)** - Where fees go and why
- **[Interchange Optimization](/payment-ecosystem/fundamentals/four-party-model/optimization)** - Reducing costs through data
- **[PayFac Position](/payment-ecosystem/fundamentals/four-party-model/payfac)** - How PayFacs fit into the model

---

*Continue learning: [Card Network Role](/payment-ecosystem/fundamentals/card-network-role)*
