---
title: "Card Network Role"
description: "How Visa, Mastercard, and other card networks operate as the central infrastructure for payment transactions"
sidebar_position: 2
sidebar_label: "Card Network Role"
keywords:
  - card networks
  - visa
  - mastercard
  - american express
  - payment networks
  - card schemes
---

# Card Network Role

Card networks (also called card schemes or card brands) are the backbone of electronic payments. They don't hold money or issue cards—they provide the infrastructure, rules, and routing that make card payments possible worldwide.

---

## Overview

### What Card Networks Actually Do

Card networks serve three critical functions:

| Function | Description |
|----------|-------------|
| **Rule Setting** | Define standards for all participants (issuers, acquirers, merchants) |
| **Transaction Routing** | Route authorization requests between acquirers and issuers |
| **Settlement Facilitation** | Calculate net positions and facilitate fund transfers |

### The Major Card Networks

| Network | Type | Market Share (US Volume) | Notable Characteristics |
|---------|------|--------------------------|------------------------|
| **Visa** | Open-loop | ~60-65% | Largest global network, does not issue cards |
| **Mastercard** | Open-loop | ~25-30% | Second largest, does not issue cards |
| **American Express** | Closed-loop | ~8-10% | Issues own cards, serves as issuer + acquirer |
| **Discover** | Closed-loop | ~1-2% | Issues own cards, US-focused |

:::info Note on Market Share
Amex's share of total *spending* may appear higher (~20%+) because they target affluent customers with higher average transaction values. The figures above reflect transaction volume/count.
:::

---

## Core Concepts

Understanding card networks requires grasping several key concepts:

**1. INFRASTRUCTURE PROVIDER**

Card networks are technology and rules platforms, not financial institutions:
- They operate global communication networks
- They maintain BIN routing tables
- They provide brand recognition and trust
- They do NOT lend money or hold deposits

**2. TWO FUNDAMENTAL MODELS**

Networks operate under two distinct structures:

- **Open-Loop** (Visa, Mastercard): Acts as neutral intermediary between banks
- **Closed-Loop** (Amex, Discover): Acts as issuer, acquirer, AND network

**3. REVENUE MODEL**

Networks generate revenue from:
- Assessment fees (~0.13-0.15% per transaction)
- Fixed per-transaction fees ($0.02-$0.04)
- International processing fees
- Brand licensing fees

---

## How Networks Fit Into Payments

```text
┌─────────────┐                                       ┌─────────────┐
│ CARDHOLDER  │                                       │  MERCHANT   │
│             │                                       │             │
│ (Customer)  │                                       │ (Business)  │
└──────┬──────┘                                       └──────┬──────┘
       │                                                     │
       │ Issues card                           Accepts card │
       │                                                     │
       ▼                                                     ▼
┌─────────────┐         ┌───────────────┐         ┌─────────────┐
│   ISSUER    │◀───────▶│ CARD NETWORK  │◀───────▶│  ACQUIRER   │
│             │         │               │         │             │
│ (Chase)     │         │ (Visa / MC)   │         │ (Wells)     │
└─────────────┘         └───────────────┘         └─────────────┘
                               │
                               │ Provides:
                               │ • Transaction routing
                               │ • Rules & standards
                               │ • Dispute resolution
                               │ • Brand value
                               └─────────────────────
```

---

## Explore Card Network Topics

This section covers card networks in depth. Start with any topic that interests you:

### Network Models

**[Open-Loop vs Closed-Loop Networks](/payment-ecosystem/fundamentals/card-network-role/open-vs-closed-loop)**

Understand the fundamental difference between Visa/Mastercard's open model and Amex's closed model, and why it matters for fees, competition, and merchant relationships.

### Technical Operations

**[Transaction Routing](/payment-ecosystem/fundamentals/card-network-role/transaction-routing)**

Learn how card networks use BINs to route authorization requests to the correct issuing bank in milliseconds, and what validation happens along the way.

### Compliance & Governance

**[Network Rules and Compliance](/payment-ecosystem/fundamentals/card-network-role/network-rules)**

Discover why card networks publish extensive rulebooks, what happens when merchants violate rules, and how these rules protect the entire ecosystem.

### Economics

**[Network Fees and Assessments](/payment-ecosystem/fundamentals/card-network-role/network-fees)**

Break down the often-overlooked network fees that merchants pay beyond interchange, including assessment fees and passthrough charges.

### Risk Management

**[Card-Present vs Card-Not-Present](/payment-ecosystem/fundamentals/card-network-role/card-present-vs-cnp)**

Understand why e-commerce transactions cost more than in-store purchases, and how transaction risk affects interchange rates.

### Knowledge Check

**[Self-Assessment Quiz](/payment-ecosystem/fundamentals/card-network-role/quiz)**

Test your understanding of card network concepts with comprehensive questions and detailed answers.

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
| **MATCH/TMF List** | Mastercard's terminated merchant file—a blacklist of merchants terminated for cause |

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

## Related Topics

| Topic | Description |
|-------|-------------|
| [The Four-Party Model](/payment-ecosystem/fundamentals/four-party-model) | Core participants (issuer, acquirer, network) explained |
| [Transaction Lifecycle](/payment-ecosystem/fundamentals/transaction-lifecycle/overview) | How authorization, capture, and settlement actually work |
| [Debit Networks & Routing](/payment-ecosystem/fundamentals/debit-networks-routing) | PIN networks, Durbin Amendment, and least-cost routing |

---

*Continue learning: Choose a topic above or test your knowledge with the [quiz](/payment-ecosystem/fundamentals/card-network-role/quiz)*
