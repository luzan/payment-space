---
title: "The Four-Party Model"
description: "Understanding the foundational structure of card payment networks"
sidebar_position: 1
sidebar_label: "Four-Party Model"
keywords:
  - four-party model
  - card networks
  - interchange
  - acquiring
  - issuing
  - authorization
---

# The Four-Party Model

> **Last Updated:** 2025-12-18
>
> **Status:** Complete

The Four-Party Model (also known as the Four-Corner Model) is the foundational structure of modern card payment networks. Understanding this model is essential for anyone building payment systems.

---

## Overview

The Four-Party Model consists of four main participants in every card transaction:

| Party | Role | Example |
|-------|------|---------|
| **Cardholder** | Consumer who uses the card | You, buying coffee |
| **Merchant** | Business accepting the payment | Starbucks |
| **Issuing Bank (Issuer)** | Bank that issued the card | Chase (your credit card bank) |
| **Acquiring Bank (Acquirer)** | Bank that enables merchant to accept cards | Wells Fargo Merchant Services |

The **[Card Network](/payment-ecosystem/fundamentals/card-network-role)** (Visa, Mastercard) sits in the middle, facilitating communication between all parties.

---

## Visual Representation

### Basic Four-Party Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CARD NETWORK                                  │
│                        (Visa / Mastercard)                              │
│                                                                         │
│    Sets rules, routes transactions, manages disputes, collects fees     │
└─────────────────────────────────────────────────────────────────────────┘
                   ▲                               ▲
                   │                               │
                   │                               │
          ┌────────┴────────┐             ┌────────┴────────┐
          │  ISSUING BANK   │             │ ACQUIRING BANK  │
          │    (Issuer)     │             │   (Acquirer)    │
          │                 │             │                 │
          │ - Issues cards  │             │ - Enables card  │
          │ - Approves txns │             │   acceptance    │
          │ - Bears credit  │             │ - Bears merchant│
          │   risk          │             │   risk          │
          └────────┬────────┘             └────────┬────────┘
                   │                               │
                   │                               │
                   ▼                               ▼
          ┌─────────────────┐             ┌─────────────────┐
          │   CARDHOLDER    │────────────▶│    MERCHANT     │
          │                 │  purchases  │                 │
          │ - Uses card     │  goods or   │ - Sells goods/  │
          │ - Pays bill     │  services   │   services      │
          │   to issuer     │             │ - Receives      │
          │                 │             │   payment       │
          └─────────────────┘             └─────────────────┘
```

---

## Four-Party vs Three-Party Model

Before diving deeper, it's important to understand that not all card networks use the Four-Party Model.

### Three-Party Model (Closed-Loop)

American Express and Discover originally operated as **Three-Party** networks:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    THREE-PARTY MODEL (Closed-Loop)                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                      ┌─────────────────────┐                            │
│                      │   AMEX / DISCOVER   │                            │
│                      │                     │                            │
│                      │  Acts as BOTH:      │                            │
│                      │  • Issuer           │                            │
│                      │  • Acquirer         │                            │
│                      │  • Network          │                            │
│                      └──────────┬──────────┘                            │
│                                 │                                       │
│                    ┌────────────┴────────────┐                          │
│                    │                         │                          │
│                    ▼                         ▼                          │
│           ┌─────────────────┐       ┌─────────────────┐                 │
│           │   CARDHOLDER    │──────▶│    MERCHANT     │                 │
│           └─────────────────┘       └─────────────────┘                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Key Differences:**

| Aspect | Four-Party (Visa/MC) | Three-Party (AmEx/Discover) |
|--------|----------------------|----------------------------|
| **Network role** | Routes messages only | Issues cards + acquires merchants |
| **Interchange** | Paid issuer → acquirer | No interchange (internal) |
| **Merchant fees** | Lower (2.0-2.5%) | Higher (2.5-3.5%) |
| **Control** | Distributed | Centralized |

**Modern Reality:** Today, AmEx and Discover also license third-party issuers, making them quasi-four-party networks. But they still have proprietary acquiring arms.

**Why it matters for PayFac:**

- AmEx OptBlue program allows PayFacs to accept AmEx through their existing acquirer
- Different fee structures and chargeback rules apply for each network

---

## Deep Dive: Each Party's Role

### 1. Cardholder

The cardholder is the consumer who:

- Has a contractual relationship with the **issuing bank**
- Uses the card to make purchases
- Is responsible for paying the monthly bill
- Can dispute transactions (initiating [chargebacks](/payment-ecosystem/fundamentals/transaction-lifecycle/detailed-flows#chargebacks--disputes))

**Key Point:** The cardholder has NO direct relationship with the merchant's bank or the card network.

### 2. Merchant

The merchant is the business that:

- Has a contractual relationship with the **acquiring bank**
- Accepts card payments for goods/services
- Pays fees (Merchant Discount Rate) to accept cards
- Bears responsibility for valid transactions and fraud prevention

**Key Point:** The merchant receives the transaction amount MINUS fees, typically 1.5% - 3.5% of the sale.

### 3. Issuing Bank (Issuer)

The issuer is a financial institution that:

- Issues credit/debit cards to consumers
- Sets credit limits and terms
- Bears the **credit risk** (if cardholder doesn't pay)
- Approves or declines transactions in real-time
- Receives **interchange fees** on every transaction

**Examples:** Chase, Bank of America, Capital One, Citi

**Key Point:** The issuer makes money from:

- Interest on unpaid balances
- Annual fees
- Interchange fees (paid by the acquirer)

### 4. Acquiring Bank (Acquirer)

The acquirer is a financial institution that:

- Enables merchants to accept card payments
- Bears the **merchant risk** (chargebacks, fraud, merchant bankruptcy)
- Pays interchange fees to the issuer
- Funds the merchant (after deducting fees)
- Manages merchant underwriting and compliance

**Examples:** Chase Paymentech, Wells Fargo Merchant Services, Worldpay, Fiserv (see [Acquiring Banks](/payment-ecosystem/industry-players/acquiring-banks/overview) and [Payment Processors](/payment-ecosystem/industry-players/payment-processors) for detailed coverage)

**Key Point:** The acquirer takes on significant risk. If a merchant processes fraudulent transactions and disappears, the acquirer is liable for chargebacks.

### 5. [Card Network](/payment-ecosystem/fundamentals/card-network-role) (The "Fifth" Party)

Though called the "Four-Party Model," the network is essential:

- **Routes messages** between issuers and acquirers
- **Sets rules** all parties must follow
- **Calculates net positions** for settlement
- **Collects assessment fees** for network usage
- **Manages disputes** and arbitration

**Key Clarification:** Networks facilitate the exchange of funds and calculate net positions, but they don't hold merchant or cardholder funds. They instruct banks on how much to transfer.

**Examples:** Visa, Mastercard, Discover (network arm), UnionPay

---

## The Durbin Amendment: Debit Interchange Caps

The Durbin Amendment (2010, part of Dodd-Frank) caps debit interchange for large banks. For comprehensive coverage of debit networks and routing, see [Debit Networks & Routing](/payment-ecosystem/fundamentals/debit-networks-routing).

**Who It Affects:**

- Banks with **$10 billion+ in assets** ("regulated issuers")
- Examples: Chase, Bank of America, Wells Fargo, Citi

**The Cap:**

```text
Maximum: $0.22 + 0.05% of transaction amount
(+ $0.01 fraud adjustment if eligible)
```

**Impact:**

| Issuer Type | $100 Debit Transaction |
|-------------|------------------------|
| **Regulated** (Chase) | ~$0.27 interchange |
| **Unregulated** (local credit union) | ~$1.00+ interchange |

**Why It Matters:**

- Large banks earn ~70% less on debit vs credit
- This is why big banks push credit cards over debit
- Small banks/credit unions have competitive advantage in debit rewards
- Merchants save significantly on regulated debit (but some processors don't pass savings through)

---

## Honor All Cards Rule

A critical network rule that affects merchants:

**The Rule:** If a merchant accepts Visa, they must accept **ALL** Visa cards, including premium cards with higher interchange.

**Implications:**

- Merchants cannot selectively accept only low-interchange cards
- Cannot refuse premium rewards cards
- Creates cross-subsidy: cash/debit customers subsidize rewards cardholders

**Durbin Amendment Exception:**

- Merchants CAN set minimum transaction amounts up to $10
- Merchants CAN offer discounts for different payment types (cash vs card)
- Merchants CANNOT surcharge based on specific card type (in most states)

---

## Key Terms Defined

| Term | Definition |
|------|------------|
| **Issuer / Issuing Bank** | Financial institution that issues credit or debit cards to cardholders. Responsible for authorizing transactions and extending credit. |
| **Acquirer / Acquiring Bank** | Financial institution that enables merchants to accept card payments. Bears risk if merchant defaults on chargebacks. |
| **Interchange Fee** | Fee paid by acquiring bank to issuing bank on each transaction. Set by card networks. Ranges from 0.05% + $0.22 (regulated debit) to 3.3%+ (premium credit). |
| **Assessment Fee** | Fee charged by card networks (Visa, Mastercard) for using their infrastructure. Includes percentage and fixed components. Typically 0.13%-0.15% + per-transaction fees. |
| **Merchant Discount Rate (MDR)** | Total percentage fee charged to merchants. Includes interchange + assessment + acquirer markup. |
| **BIN/IIN** | Bank/Issuer Identification Number. First 6-8 digits of card number identifying the issuing institution. Industry transitioned to 8-digit IINs in 2022. |
| **Authorization** | Real-time approval from issuer to proceed with transaction. Places hold on funds. |
| **Capture** | Merchant's request to collect authorized funds. Can be same day or later. |
| **Settlement** | Actual movement of funds between banks. Typically T+1 to T+3. See [Transaction Lifecycle](/payment-ecosystem/fundamentals/transaction-lifecycle/overview). |
| **Chargeback** | Cardholder dispute that reverses a transaction. Merchant must prove transaction was valid. See [Transaction Lifecycle - Chargebacks](/payment-ecosystem/fundamentals/transaction-lifecycle/detailed-flows#chargebacks--disputes). |

---

## Key Takeaways

1. **Four parties, four relationships**: Cardholder → Issuer, Merchant → Acquirer, both connected through the Network

2. **Money flows opposite to goods**: Customer gets product, merchant gets money (minus fees)

3. **Risk is distributed**: Issuer bears credit risk, Acquirer bears merchant risk

4. **Interchange is king**: It's the largest fee component (1.4%-3.3% for credit) and drives industry economics

5. **Networks facilitate, not hold**: Visa/Mastercard route messages and calculate positions but don't hold funds

6. **Durbin caps debit**: Large banks' debit interchange capped at $0.22 + 0.05%

7. **Honor All Cards**: Merchants accepting Visa must accept ALL Visa cards, including premium

---

## Related Topics

**Deep Dives:**
- **[Transaction Flows](/payment-ecosystem/fundamentals/four-party-model/transaction-flows)** - Authorization, capture, settlement, and response codes
- **[Fee Breakdown & Money Flow](/payment-ecosystem/fundamentals/four-party-model/fee-breakdown)** - Detailed interchange, assessment, and fee economics
- **[Interchange Optimization](/payment-ecosystem/fundamentals/four-party-model/optimization)** - Level 2/3 data, cross-border transactions
- **[PayFac Position in the Model](/payment-ecosystem/fundamentals/four-party-model/payfac)** - How Payment Facilitators fit into the four-party structure
- **[Self-Assessment Quiz](/payment-ecosystem/fundamentals/four-party-model/quiz)** - Test your understanding

**Related Fundamentals:**
- **[Card Network Role](/payment-ecosystem/fundamentals/card-network-role)** - Deep dive into network infrastructure, BIN routing, and network rules
- **[Transaction Lifecycle](/payment-ecosystem/fundamentals/transaction-lifecycle/overview)** - Detailed authorization → capture → settlement flow
- **[Debit Networks & Routing](/payment-ecosystem/fundamentals/debit-networks-routing)** - PIN vs signature debit, Durbin Amendment, least-cost routing

**Industry Players:**
- **[Payment Processors](/payment-ecosystem/industry-players/payment-processors)** - The technical backbone connecting merchants to networks
- **[Payment Gateways](/payment-ecosystem/industry-players/payment-gateways/overview)** - Secure transmission layer for payment data
- **[Acquiring Banks](/payment-ecosystem/industry-players/acquiring-banks/overview)** - Merchant enablement and risk management
- **[ISOs](/payment-ecosystem/industry-players/isos)** - Independent Sales Organizations and merchant acquisition
- **[ISVs](/payment-ecosystem/industry-players/isvs)** - Software vendors with embedded payments

---

## References

### Official Interchange Rate Documentation

- [Visa USA Interchange Reimbursement Fees](https://usa.visa.com/support/merchant/library/repository/merchant-fees.html) - Official Visa interchange rate portal
- [Mastercard Interchange Programs and Rates](https://www.mastercard.us/en-us/business/overview/support/merchant-rates-2024.html) - Official Mastercard interchange schedules
- [Visa Merchant Regulations & Fees](https://usa.visa.com/support/small-business/regulations-fees.html) - Visa merchant fee overview

*Note: Interchange rates change periodically. Always verify current rates at official network portals.*

### Network Rules & Standards

- [Visa Core Rules and Visa Product and Service Rules](https://usa.visa.com/support/merchant/visa-rules.html) - Complete Visa rulebook
- [Mastercard Rules](https://www.mastercard.us/en-us/business/overview/support/rules.html) - Mastercard network standards

### Regulatory Resources

- [Federal Reserve Regulation II](https://www.federalreserve.gov/paymentsystems/regii-about.htm) - Debit interchange fee caps (Durbin Amendment)
- [CFPB Credit Card Market Report](https://www.consumerfinance.gov/data-research/research-reports/the-consumer-credit-card-market/) - Consumer protection and market analysis

### Industry Resources

- [Electronic Transactions Association (ETA)](https://www.electran.org/) - Payments industry association
- [Nilson Report](https://nilsonreport.com/) - Industry publication tracking payment card statistics
- [U.S. Payments Forum](https://www.uspaymentsforum.org/) - EMV and payments standards

---

## Further Reading

### Books

- **"Payments Systems in the U.S."** by Carol Coye Benson & Scott Loftesness - Comprehensive textbook on US payments
- **"Electronic Value Exchange"** by David Stearns - History of card networks and interchange

### Online Guides

- [Stripe: How Cards Work](https://stripe.com/guides/introduction-to-card-payments) - Developer-friendly overview
- [Merchant Cost Consulting: Interchange Rates](https://merchantcostconsulting.com/lower-credit-card-processing-fees/visa-interchange-rates/) - Detailed rate analysis
- [Helcim: Visa USA Interchange Rates](https://www.helcim.com/visa-usa-interchange-rates/) - Practical interchange breakdown

---

*Continue reading: [Transaction Flows](/payment-ecosystem/fundamentals/four-party-model/transaction-flows)*
