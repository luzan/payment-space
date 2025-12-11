# The Four-Party Model

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

The **Card Network** (Visa, Mastercard) sits in the middle, facilitating communication between all parties.

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

### Transaction Flow Diagram

```
                              AUTHORIZATION FLOW (Seconds)
     ═══════════════════════════════════════════════════════════════════════════════

    CARDHOLDER          MERCHANT           ACQUIRER          NETWORK           ISSUER
         │                  │                  │                 │                │
         │  1. Tap/Swipe    │                  │                 │                │
         │─────────────────▶│                  │                 │                │
         │                  │  2. Auth Request │                 │                │
         │                  │─────────────────▶│                 │                │
         │                  │                  │  3. Route Auth  │                │
         │                  │                  │────────────────▶│                │
         │                  │                  │                 │  4. Verify &   │
         │                  │                  │                 │────────────────▶
         │                  │                  │                 │     Approve    │
         │                  │                  │                 │◀────────────────
         │                  │                  │  5. Response    │                │
         │                  │                  │◀────────────────│                │
         │                  │  6. Approval     │                 │                │
         │                  │◀─────────────────│                 │                │
         │  7. Confirmed    │                  │                 │                │
         │◀─────────────────│                  │                 │                │
         │                  │                  │                 │                │


                           SETTLEMENT FLOW (1-3 Days)
    ════════════════════════════════════════════════════════════════════

      ISSUER             NETWORK            ACQUIRER           MERCHANT
         │                  │                  │                  │
         │                  │                  │  1. Batch Submit │
         │                  │                  │◀─────────────────│
         │                  │  2. Clearing     │                  │
         │                  │◀─────────────────│                  │
         │  3. Net Position │                  │                  │
         │◀─────────────────│                  │                  │
         │                  │                  │                  │
         │  4. Pay Acquirer │                  │                  │
         │  (minus fees)    │                  │                  │
         │─────────────────────────────────────▶                  │
         │                  │                  │  5. Pay Merchant │
         │                  │                  │  (minus fees)    │
         │                  │                  │─────────────────▶│
         │                  │                  │                  │
```

---

## Deep Dive: Each Party's Role

### 1. Cardholder

The cardholder is the consumer who:

- Has a contractual relationship with the **issuing bank**
- Uses the card to make purchases
- Is responsible for paying the monthly bill
- Can dispute transactions (initiating chargebacks)

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

**Examples:** Chase Paymentech, Wells Fargo Merchant Services, Worldpay

**Key Point:** The acquirer takes on significant risk. If a merchant processes fraudulent transactions and disappears, the acquirer is liable for chargebacks.

---

## Money Flow: Where Do the Fees Go?

### Example: $100 Purchase

```
┌──────────────────────────────────────────────────────────────────────────┐
│                         $100 TRANSACTION BREAKDOWN                       │
└──────────────────────────────────────────────────────────────────────────┘

                        Customer pays: $100.00
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                              FEE BREAKDOWN                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ INTERCHANGE FEE (to Issuer)                         ~$1.80 (1.8%)  │ │
│  │ ─────────────────────────────────────────────────────────────────  │ │
│  │ • Set by card networks (Visa/MC)                                   │ │
│  │ • Varies by card type, merchant category, transaction type         │ │
│  │ • Largest component of merchant fees                               │ │
│  │ • Rewards cards have HIGHER interchange                            │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ ASSESSMENT FEE (to Card Network)                    ~$0.15 (0.15%) │ │
│  │ ─────────────────────────────────────────────────────────────────  │ │
│  │ • Visa/Mastercard's fee for using their network                    │ │
│  │ • Also called "network fee" or "dues and assessments"              │ │
│  │ • Non-negotiable, set by networks                                  │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ ACQUIRER MARKUP (to Acquirer/Processor)             ~$0.55 (0.55%) │ │
│  │ ─────────────────────────────────────────────────────────────────  │ │
│  │ • Acquirer's profit margin                                         │ │
│  │ • This is the NEGOTIABLE portion                                   │ │
│  │ • May include processor fees if using third-party processor        │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│  TOTAL FEES (Merchant Discount Rate):                  $2.50 (2.5%)     │
│  ═══════════════════════════════════════════════════════════════════    │
│  MERCHANT RECEIVES:                                    $97.50           │
└─────────────────────────────────────────────────────────────────────────┘
```

### Fee Flow Diagram

```
                              $100 Transaction
                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │     CARDHOLDER PAYS $100      │
                    │      (to Issuing Bank)        │
                    └───────────────┬───────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                            SETTLEMENT PROCESS                              │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ISSUER keeps $1.80                                                       │
│   (Interchange Fee)                                                        │
│        │                                                                   │
│        └──────────▶ Sends $98.20 to Card Network                           │
│                            │                                               │
│                            ▼                                               │
│                    NETWORK keeps $0.15                                     │
│                    (Assessment Fee)                                        │
│                            │                                               │
│                            └──────────▶ Sends $98.05 to Acquirer           │
│                                                │                           │
│                                                ▼                           │
│                                        ACQUIRER keeps $0.55                │
│                                        (Markup/Profit)                     │
│                                                │                           │
│                                                └──────────▶ MERCHANT       │
│                                                             receives       │
│                                                             $97.50         │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## Key Terms Defined

| Term | Definition |
|------|------------|
| **Issuer / Issuing Bank** | The bank that issues the credit or debit card to the cardholder. Responsible for authorizing transactions and extending credit. |
| **Acquirer / Acquiring Bank** | The bank that enables merchants to accept card payments. Bears risk if the merchant defaults on chargebacks. |
| **Interchange Fee** | A fee paid by the acquiring bank to the issuing bank on each transaction. Set by card networks, typically 1.5%-2.5% for credit cards. |
| **Assessment Fee** | A fee charged by card networks (Visa, Mastercard) for using their network infrastructure. Typically 0.13%-0.15%. |
| **Merchant Discount Rate (MDR)** | The total percentage fee charged to merchants for accepting card payments. Includes interchange + assessment + acquirer markup. |
| **BIN (Bank Identification Number)** | The first 6-8 digits of a card number that identify the issuing bank. Used for routing transactions. |

---

## Why This Model Matters for PayFac

Understanding the Four-Party Model is critical for Payment Facilitators because:

1. **Risk Position**: PayFacs sit in the acquirer's position, inheriting merchant risk
2. **Fee Economics**: PayFacs must understand interchange to price their services
3. **Liability Chain**: When sub-merchants have chargebacks, the PayFac is liable
4. **Network Rules**: All parties must comply with Visa/Mastercard rules

```
Traditional Model:                    PayFac Model:
─────────────────                    ─────────────────

Merchant ◀──▶ Acquirer               Sub-Merchant ◀──▶ PayFac ◀──▶ Acquirer
                                                        │
                                                        │ (PayFac assumes
                                                        │  acquirer-like risk)
                                                        ▼
                                                   Master Merchant
                                                      Account
```

---

## Self-Assessment Questions & Answers

### Question 1: In a credit card transaction, who pays the interchange fee and who receives it?

**Answer:**
The **acquiring bank pays** the interchange fee, and the **issuing bank receives** it. This fee is deducted from the transaction amount before the merchant is funded. The interchange fee compensates the issuer for:

- Credit risk (lending money to the cardholder)
- Fraud protection
- Card rewards programs
- Transaction processing costs

### Question 2: Why does the acquiring bank take on risk when a merchant accepts a card payment?

**Answer:**
The acquiring bank takes on risk because:

1. **Chargeback Liability**: If a cardholder disputes a transaction and wins, the acquirer must return funds to the issuer. If the merchant can't cover this (bankrupt, fraudulent, or disappeared), the acquirer absorbs the loss.

2. **Merchant Fraud**: If a merchant processes fraudulent transactions or doesn't deliver goods/services, the acquirer is ultimately responsible.

3. **Settlement Timing**: The acquirer often funds merchants before receiving money from the issuer, creating a timing risk.

4. **Contractual Position**: The acquirer's agreement with the card network makes them responsible for their merchants' behavior.

This is why acquirers perform underwriting and require reserves from high-risk merchants.

### Question 3: What happens to a transaction if the issuing bank declines it? Where does the decline message originate?

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

The merchant never knows the exact reason—just a generic code—to protect cardholder privacy.

### Question 4: A customer buys a $100 item. The merchant receives $97.50. Break down where the $2.50 went

**Answer:**

| Recipient | Fee Type | Amount | Percentage |
|-----------|----------|--------|------------|
| **Issuing Bank** | Interchange Fee | $1.80 | 1.80% |
| **Card Network** (Visa/MC) | Assessment Fee | $0.15 | 0.15% |
| **Acquirer/Processor** | Markup | $0.55 | 0.55% |
| **Total Fees** | MDR | **$2.50** | **2.50%** |

**Breakdown:**

- **Interchange ($1.80)**: Non-negotiable, set by Visa/Mastercard, goes to Chase (if they issued the card)
- **Assessment ($0.15)**: Non-negotiable, goes to Visa or Mastercard for network usage
- **Markup ($0.55)**: Negotiable, this is where the acquirer and processor make their profit

---

## Key Takeaways

1. **Four parties, four relationships**: Cardholder→Issuer, Merchant→Acquirer, both connected through the Network

2. **Money flows opposite to goods**: Customer gets product, merchant gets money (minus fees)

3. **Risk is distributed**: Issuer bears credit risk, Acquirer bears merchant risk

4. **Interchange is king**: It's the largest fee component and drives industry economics

5. **Networks are rule-makers**: Visa/Mastercard don't touch the money—they set rules and route messages

---

## References

### Official Interchange Rate Documentation

- [Visa USA Interchange Reimbursement Fees (PDF)](https://usa.visa.com/dam/VCOM/download/merchants/visa-usa-interchange-reimbursement-fees.pdf) - Official Visa interchange rate tables
- [Mastercard 2025-2026 U.S. Interchange Programs and Rates (PDF)](https://www.mastercard.com/content/dam/mccom/us/business/documents/merchant-rates-2025-2026.pdf) - Official Mastercard interchange schedules
- [Visa Merchant Regulations & Fees](https://usa.visa.com/support/small-business/regulations-fees.html) - Visa merchant fee overview

### Network Rules & Standards

- [Visa Core Rules (PDF)](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf) - Complete Visa rulebook
- [Mastercard Rules Manual (PDF)](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/mastercard-rules.pdf) - Mastercard network standards

### Regulatory Resources

- [Federal Reserve Regulation II](https://www.federalreserve.gov/paymentsystems/regii-about.htm) - Debit interchange fee caps (Durbin Amendment)
- [CFPB Credit Card Market Report](https://www.consumerfinance.gov/data-research/research-reports/the-consumer-credit-card-market/) - Consumer protection and market analysis

### Industry Resources

- [Electronic Transactions Association (ETA)](https://www.electran.org/) - Payments industry association
- [Nilson Report](https://nilsonreport.com/) - Industry publication tracking payment card statistics

---

## Further Reading

### Books

- **"Payments Systems in the U.S."** by Carol Coye Benson & Scott Loftesness - Comprehensive textbook on US payments
- **"Electronic Value Exchange"** by David Stearns - History of card networks and interchange

### Online Guides

- [Stripe: Payment Processing Best Practices](https://stripe.com/guides/payment-processing) - Developer-friendly overview
- [Helcim: Visa USA Interchange Rates](https://www.helcim.com/visa-usa-interchange-rates/) - Practical interchange breakdown
- [Merchant Cost Consulting: Visa Interchange Rates](https://merchantcostconsulting.com/lower-credit-card-processing-fees/visa-interchange-rates/) - Detailed rate analysis

---

*Next Topic: [Card Network Role](./02-card-network-role.md)*
