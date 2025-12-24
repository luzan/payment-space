---
title: "Payment Gateways Overview"
description: "Gateway architecture, evolution, network tokenization, and major providers"
sidebar_position: 1
sidebar_label: "Overview"
keywords:
  - payment gateway
  - gateway vs processor
  - network tokenization
  - VTS
  - MDES
  - Authorize.Net
  - NMI
  - Stripe
  - Adyen
  - orchestration
---

Payment gateways are the secure technology layer that transmits payment data from merchants to [processors](/payment-ecosystem/industry-players/payment-processors), enabling both online ([card-not-present<!-- (/payment-ecosystem/core-concepts/card-networks#card-present-vs-card-not-present not yet migrated) -->) and in-person (card-present) transactions. Understanding gateways across all commerce channels is essential for building PayFac <!-- (not yet migrated) --> platforms and modern payment systems.

---

## Overview

A **payment gateway** is a technology service that securely transmits payment information from a merchant's point of sale (whether online, mobile, or in-person) to the payment processor. Think of gateways as the "secure messenger" of the payment ecosystem.

| Function | Description |
|----------|-------------|
| **Data Transmission** | Encrypts and transmits card data from customer to processor |
| **Security Layer** | PCI compliance, tokenization, fraud screening, P2PE (card-present) |
| **Integration Point** | APIs, SDKs, hosted checkout (CNP), terminal firmware/APIs (CP) |
| **Modern Capabilities** | Multi-processor routing, orchestration, network tokenization, omnichannel |

**Key Distinction:** Gateways transmit data; [processors](/payment-ecosystem/industry-players/payment-processors) move money. Many modern providers (Stripe, Adyen) bundle both functions, but understanding the distinction is critical for payment architecture.

**Gateway Functions Exist Everywhere:**
- **Online/E-commerce:** Standalone gateway services (Authorize.Net, NMI)
- **Card-Present:** Embedded in terminal firmware OR cloud gateway APIs
- **Omnichannel:** Unified platforms (Adyen, Stripe Terminal) handling both seamlessly

---

## Historical Evolution

### 1990s: The E-commerce Problem

When online commerce emerged, a critical problem existed: how do you securely accept card payments on a website?

**Before Gateways:**
- Merchants collected card numbers via web forms
- Manually entered numbers into physical terminals
- Card data stored insecurely on merchant servers
- Massive PCI compliance burden
- Manual process couldn't scale

### Key Milestones

```
+------------------------------------------------------------------------------+
|                      PAYMENT GATEWAY EVOLUTION                                |
+------------------------------------------------------------------------------+

1990s: ORIGIN ERA
=================
  1994: CyberSource founded (early e-commerce security)
  1996: Authorize.Net founded - FIRST dedicated payment gateway
        * Automated secure transmission website → processor
        * Established gateway model: technology layer between merchant/processor
  1998: PayPal founded - bundled gateway + processing + wallet
  1999: VeriSign Payflow launches

2000s: GATEWAY SPECIALIZATION
=============================
  * Fraud tools integrated (AVS, CVV verification)
  * Tokenization for recurring billing
  * Hosted payment pages for PCI scope reduction
  * Virtual terminals for phone/mail orders
  2005: PayPal acquires VeriSign Payflow
  2006: Adyen founded (unified commerce vision)
  2007: Braintree founded (mobile-first)

2010s: INTEGRATION ERA
======================
  2010: Stripe founded - developer-first API, bundled gateway + processing
        * "7 lines of code" to accept payments
        * Changed industry expectations for developer experience
  2010: Visa acquires Authorize.Net
  2013: PayPal acquires Braintree
  * Shift toward single-vendor solutions
  * Mobile payments explosion (Apple Pay 2014, Google Pay)
  * Network tokenization introduced (VTS 2014)

2020s: ORCHESTRATION ERA
========================
  * Gateways evolve into multi-processor routing platforms
  * AI/ML fraud detection embedded
  * Network tokenization becomes standard
  * Payment orchestration market explodes:
    $1.2B (2024) → $23.9B projected (2032)
  2024: Stripe reports first profitable quarter (Q1 2024)
  2025: Stripe launches AI/ML fraud detection tools (March)

+------------------------------------------------------------------------------+
```

---

## What Payment Gateways Actually Do

### Core Function: Secure Data Transmission

A payment gateway's primary job is to securely transmit payment data from the merchant's system to the payment processor, then return the authorization response.

```
+------------------------------------------------------------------------------+
|                    BASIC GATEWAY AUTHORIZATION FLOW                           |
+------------------------------------------------------------------------------+

   Customer                    Gateway                 Processor
   Browser
       |                          |                        |
       |  1. Enter card info      |                        |
       |------------------------->|                        |
       |                          |                        |
       |                          | 2. Encrypt data        |
       |                          | 3. Add metadata        |
       |                          | 4. Fraud screening     |
       |                          |                        |
       |                          | 5. Route to processor  |
       |                          |----------------------->|
       |                          |                        |
       |                          |                        | 6. Route to
       |                          |                        |    card network
       |                          |                        |    → issuer
       |                          |                        |
       |                          | 7. Auth response       |
       |                          |<-----------------------|
       |                          |                        |
       |  8. Show result          |                        |
       |<-------------------------|                        |
       |                          |                        |

TIMING: Steps 1-8 typically complete in 1-3 seconds

+------------------------------------------------------------------------------+
```

### Modern Gateway Capabilities (2024-2025)

```
+------------------------------------------------------------------------------+
|                  MODERN PAYMENT GATEWAY CAPABILITIES                          |
+------------------------------------------------------------------------------+
|                                                                              |
|  TOKENIZATION                              FRAUD SCREENING                   |
|  ─────────────────────                     ─────────────────────             |
|  • Gateway tokens (vault)                  • AVS (Address Verification)      |
|  • Network tokens (VTS/MDES)               • CVV validation                  |
|  • Token orchestration                     • Velocity checks                 |
|  • Account Updater integration             • AI/ML risk scoring              |
|                                            • 3D Secure (3DS) integration     |
|                                            • Device fingerprinting           |
|                                                                              |
|  PCI SCOPE REDUCTION                       MULTI-PROCESSOR ROUTING           |
|  ─────────────────────                     ─────────────────────             |
|  • Hosted payment pages                    • Geographic optimization         |
|  • Hosted fields (iFrame)                  • Cost optimization               |
|  • Point-to-point encryption               • Success rate optimization       |
|  • Network tokenization                    • Fallback/cascading logic        |
|                                            • Load balancing                  |
|                                                                              |
|  REPORTING & RECONCILIATION                RETRY & RECOVERY                  |
|  ─────────────────────                     ─────────────────────             |
|  • Real-time dashboards                    • Smart retry logic               |
|  • Settlement reporting                    • Decline reason analysis         |
|  • Chargeback management                   • Alternative payment routing     |
|  • Export for accounting                   • Account Updater for expired     |
|  • 35+ metrics available                       cards                         |
|                                                                              |
+------------------------------------------------------------------------------+
```

### Tokenization Deep Dive

**Gateway Tokens:**
```
+------------------------------------------------------------------------------+
|                         GATEWAY TOKENIZATION                                  |
+------------------------------------------------------------------------------+

1. CUSTOMER SAVES CARD
   Customer: "Save my card for future purchases"
   Card: 4111 1111 1111 1111

2. GATEWAY STORES & TOKENIZES
   ┌─────────────────────────────────────────────────────────┐
   │                    GATEWAY VAULT                         │
   │  ┌────────────────┐      ┌──────────────────────────┐   │
   │  │ Token:         │      │ PAN:                     │   │
   │  │ tok_1a2b3c4d   │ ──── │ 4111 1111 1111 1111     │   │
   │  └────────────────┘      │ Exp: 12/25              │   │
   │                          │ CVV: (never stored)      │   │
   │                          └──────────────────────────┘   │
   └─────────────────────────────────────────────────────────┘

3. MERCHANT STORES TOKEN ONLY
   Merchant Database: { customer_id: 123, payment_token: "tok_1a2b3c4d" }

   ✓ Merchant PCI scope dramatically reduced
   ✗ Token only works with THIS gateway

+------------------------------------------------------------------------------+
```

**Network Tokens (VTS/MDES):**
```
+------------------------------------------------------------------------------+
|                      NETWORK TOKENIZATION FLOW                                |
+------------------------------------------------------------------------------+

                     Visa/Mastercard
                     Token Service
                          │
    ┌─────────────────────┼─────────────────────┐
    │                     │                     │
    ▼                     ▼                     ▼
 Gateway A            Gateway B            Gateway C
    │                     │                     │
    │  Same network token works across all gateways!
    │

PROCESS:
========
1. Gateway requests token from VTS/MDES
2. Network validates with issuing bank
3. Network issues token (looks like PAN but different number)
   Real PAN: 4111 1111 1111 1111
   Token:    4000 0012 3456 7899
4. Token stored by gateway/merchant
5. Network maintains PAN ↔ Token mapping

KEY BENEFIT - AUTOMATIC UPDATES:
================================
Customer's card expires or replaced due to fraud
    │
    ▼
Issuer notifies network of new card number
    │
    ▼
Network updates token mapping AUTOMATICALLY
    │
    ▼
Next transaction succeeds with NO merchant action!

+------------------------------------------------------------------------------+
```

### Network Token Benefits (Verified 2024-2025 Data)

| Benefit | Visa Data | Checkout.com Data | Industry Average |
|---------|-----------|-------------------|------------------|
| **Authorization Uplift** | ~2% | 2-3% (higher for subscriptions) | 2-3% |
| **Fraud Reduction** | 30% | Varies | Significant |
| **[Interchange<!-- (/payment-ecosystem/core-concepts/four-party-model#interchange-fees not yet migrated) --> Savings** | 0.10% for CNP | N/A | Visa program specific |

**Market Adoption:**
- Visa tokenization: 50% of transactions (2024)
- Visa goal: 100% by 2030
- Tokens issued since 2014: 12.6 billion
- 2024 growth: 44% year-over-year
- 2029 projection: 574 billion tokenized transactions

---

## Card-Present vs Card-Not-Present Gateways

While gateways are often associated with e-commerce, the gateway function (secure data transmission and routing) exists in **all** payment scenarios. The implementation differs significantly between card-present and card-not-present environments.

### Gateway Function in Different Environments

```
+------------------------------------------------------------------------------+
|                 GATEWAY FUNCTION ACROSS CHANNELS                              |
+------------------------------------------------------------------------------+

CARD-NOT-PRESENT (CNP)              |    CARD-PRESENT (CP)
E-commerce, MOTO, In-app            |    Retail POS, Restaurants, Mobile
====================================|========================================
                                    |
Customer enters card on website     |    Customer inserts/taps physical card
         │                          |              │
         ▼                          |              ▼
┌─────────────────────┐             |    ┌─────────────────────┐
│   Gateway Service   │             |    │  Terminal Hardware  │
│  (Cloud-based API)  │             |    │  + Firmware/Gateway │
│                     │             |    │                     │
│ • Stripe.js         │             |    │ • Ingenico          │
│ • Authorize.Net     │             |    │ • Verifone          │
│ • Adyen Web Drop-in │             |    │ • PAX               │
└─────────────────────┘             |    │ • Clover            │
         │                          |    └─────────────────────┘
         │                          |              │
    Encrypt & route                 |         Encrypt & route
    to processor                    |         to processor/gateway API
         │                          |              │
         ▼                          |              ▼
┌─────────────────────┐             |    ┌─────────────────────┐
│     Processor       │             |    │     Processor       │
└─────────────────────┘             |    └─────────────────────┘

KEY DIFFERENCE:
===============
CNP: Gateway is a separate cloud    CP: Gateway function often EMBEDDED
     service consumed via API             in terminal firmware OR uses
                                         cloud gateway API for advanced
                                         features

+------------------------------------------------------------------------------+
```

### Card-Present Gateway Architectures

#### 1. Standalone Terminals (Embedded Gateway)

```
+------------------------------------------------------------------------------+
|                    STANDALONE TERMINAL ARCHITECTURE                           |
+------------------------------------------------------------------------------+

Traditional approach where terminal handles EVERYTHING:

    ┌─────────────────────────────────────────────────────────────┐
    │                    PAYMENT TERMINAL                          │
    │                    (e.g., Ingenico iCT250)                   │
    │                                                              │
    │  ┌────────────────────────────────────────────────────────┐ │
    │  │                 TERMINAL FIRMWARE                       │ │
    │  │                                                         │ │
    │  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │ │
    │  │  │   EMV/NFC    │  │   P2PE       │  │   Gateway    │ │ │
    │  │  │   Chip Read  │  │   Encryption │  │   Function   │ │ │
    │  │  └──────────────┘  └──────────────┘  └──────────────┘ │ │
    │  │                                                         │ │
    │  │  ALL logic embedded in firmware                        │ │
    │  │  • Card reading                                        │ │
    │  │  • P2PE encryption                                     │ │
    │  │  • Transaction formatting                              │ │
    │  │  • Direct processor communication                      │ │
    │  └────────────────────────────────────────────────────────┘ │
    └─────────────────────────────────────────────────────────────┘
                              │
                              │ Dial-up / Ethernet / IP
                              ▼
                    ┌──────────────────┐
                    │    Processor     │
                    │   (First Data)   │
                    └──────────────────┘

CHARACTERISTICS:
================
✓ No external gateway service needed
✓ Works offline (store-and-forward)
✓ PCI PTS (PIN Transaction Security) certified hardware
✗ Limited flexibility (firmware updates slow)
✗ Terminal-specific programming
✗ Difficult to unify with online channels

COMMON USE CASES:
• Traditional retail
• Restaurants (legacy systems)
• Gas stations
• Standalone merchants with single location

+------------------------------------------------------------------------------+
```

**P2PE (Point-to-Point Encryption) Explained:**

P2PE is the card-present equivalent of tokenization/hosted fields for CNP:

```
+------------------------------------------------------------------------------+
|                   P2PE (POINT-TO-POINT ENCRYPTION)                            |
+------------------------------------------------------------------------------+

WHY IT EXISTS:
==============
When a customer swipes/inserts/taps a card, the card data must be protected
from the moment it enters the terminal until it reaches the processor.

TRADITIONAL (INSECURE):
======================
Card → Terminal → [PLAINTEXT] → POS System → Gateway → Processor
                     ↑
                 VULNERABLE: Card data readable by POS,
                 increases PCI scope

P2PE (SECURE):
=============
Card → Terminal → [ENCRYPTED] → POS System → Gateway → Processor
                     ↑                           ↑
              Encrypted by        Decrypted ONLY by
              terminal            processor/gateway
              (hardware)          (secure facility)

HOW IT WORKS:
=============
1. Terminal has encryption keys injected during manufacturing
2. Card data encrypted INSTANTLY upon read
3. Encrypted blob passes through merchant systems
4. ONLY processor/gateway can decrypt (has matching keys)

PCI SCOPE REDUCTION:
===================
✓ Merchant NEVER sees plaintext card data
✓ Terminal is tamper-resistant hardware
✓ Merchants using ONLY P2PE terminals: SAQ P2PE (33 questions)
✓ Merchants with CP (P2PE) + CNP: SAQ D or SAQ A-EP (if CNP uses hosted fields)
✓ Terminal hardware must be PCI PTS-certified AND P2PE-validated

VALIDATED P2PE SOLUTIONS:
=========================
• PCI Council maintains list of validated P2PE solutions
• Requires certified hardware + secure key management
• Examples: Ingenico + First Data, Verifone + Worldpay

+------------------------------------------------------------------------------+
```

#### 2. Integrated POS Systems (Cloud Gateway API)

Modern cloud-based POS systems use gateway APIs even for card-present:

```
+------------------------------------------------------------------------------+
|                   INTEGRATED POS ARCHITECTURE                                 |
+------------------------------------------------------------------------------+
|                          EXAMPLES: Square, Clover, Toast                      |
+------------------------------------------------------------------------------+

    Customer's Card
         │
         ▼
    ┌─────────────────────────────────────────────────────────────┐
    │              SMART TERMINAL                                  │
    │              (e.g., Square Reader, Clover Mini)              │
    │                                                              │
    │  • Card reading hardware (EMV/NFC)                          │
    │  • P2PE encryption                                          │
    │  • Minimal firmware (thin client)                           │
    │  • Terminal SDK communicates with cloud                     │
    └─────────────────────────────────────────────────────────────┘
                              │
                              │ Internet (WiFi/LTE)
                              ▼
    ┌─────────────────────────────────────────────────────────────┐
    │                    CLOUD POS PLATFORM                        │
    │                    (Square / Clover / Toast)                 │
    │                                                              │
    │  ┌────────────────────────────────────────────────────────┐ │
    │  │              CLOUD GATEWAY API                         │ │
    │  │                                                        │ │
    │  │  • Receives encrypted card data from terminal         │ │
    │  │  • Inventory management integration                   │ │
    │  │  • Customer data / receipts                           │ │
    │  │  • Reporting / analytics                              │ │
    │  │  • Multi-location management                          │ │
    │  │  • Employee management                                │ │
    │  └────────────────────────────────────────────────────────┘ │
    └─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │   Processor      │
                    │   (Bundled)      │
                    └──────────────────┘

BENEFITS OF CLOUD GATEWAY:
===========================
✓ Terminal is just a card reader (simpler, cheaper hardware)
✓ All business logic in cloud (easy updates)
✓ Unified reporting across channels (CP + CNP)
✓ Rich features: inventory, CRM, analytics
✓ Multi-location support built-in

ARCHITECTURAL SHIFT:
====================
Traditional: Terminal = smart, expensive, hard to update
Modern:      Terminal = thin client, cloud = smart

EXAMPLES:
=========
• Square: Square Reader → Square API → Square Processing
• Clover: Clover Mini → Clover Cloud → First Data
• Toast: Toast Terminal → Toast Cloud → Toast Processing
• Lightspeed: Lightspeed Terminal → Lightspeed POS → Various processors

+------------------------------------------------------------------------------+
```

#### 3. Semi-Integrated Solutions

A hybrid approach balancing simplicity and feature richness:

```
+------------------------------------------------------------------------------+
|                    SEMI-INTEGRATED ARCHITECTURE                               |
+------------------------------------------------------------------------------+

Used when merchant has EXISTING POS software but wants modern payments:

    ┌─────────────────────────────────────────────────────────────┐
    │              MERCHANT'S POS SOFTWARE                         │
    │              (e.g., Lightspeed, Shopify POS)                 │
    │                                                              │
    │  • Inventory management                                     │
    │  • Order management                                         │
    │  • Customer database                                        │
    │  • Reporting                                                │
    └─────────────────────────────────────────────────────────────┘
                    │                             ▲
                    │ Payment API                 │
                    │ (amount, items)             │ Result
                    ▼                             │
    ┌─────────────────────────────────────────────────────────────┐
    │          PAYMENT TERMINAL + LOCAL MIDDLEWARE                 │
    │          (e.g., Ingenico Telium, Verifone Carbon)            │
    │                                                              │
    │  • Receives payment request from POS                        │
    │  • Prompts customer for card                                │
    │  • Handles ALL payment security (P2PE, EMV)                 │
    │  • Communicates with gateway/processor                      │
    │  • Returns approved/declined to POS                         │
    │                                                              │
    │  POS NEVER sees card data!                                  │
    └─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Gateway API     │
                    │  (optional)      │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │    Processor     │
                    └──────────────────┘

PAYMENT FLOW:
=============
1. Cashier rings up $50.00 sale in POS
2. POS sends "Charge $50.00" to terminal (NO card data)
3. Terminal prompts customer to insert card
4. Terminal handles EMV chip read, encryption
5. Terminal communicates with processor (POS blind to this)
6. Terminal returns "APPROVED" to POS
7. POS prints receipt, updates inventory

PCI SCOPE REDUCTION:
====================
✓ POS software OUT of PCI scope (never touches card data)
✓ Terminal handles security (PCI PTS certified)
✓ Merchant can use ANY POS software
✓ Payment processing separated from business logic

COMMUNICATION METHODS:
=====================
• IP/Ethernet between POS and terminal
• Cloud-based APIs (terminal → gateway → processor)
• USB or serial for older systems

EXAMPLES:
=========
• Shopify POS + Ingenico terminal
• Lightspeed + PAX terminal
• Custom retail POS + Verifone terminal

+------------------------------------------------------------------------------+
```

**Semi-Integrated vs Fully Integrated:**

| Factor | Semi-Integrated | Fully Integrated |
|--------|----------------|------------------|
| **POS Software** | Merchant's choice | Provider's POS only |
| **Terminal** | Separate, handles payments | Integrated with POS |
| **PCI Scope** | Terminal only | Entire system (if not P2PE) |
| **Flexibility** | High (swap POS or payment provider) | Low (locked ecosystem) |
| **Complexity** | Moderate (two systems) | Low (unified) |
| **Best For** | Existing POS investment | Greenfield, simplicity priority |

#### 4. Mobile Card Readers (SDK + Cloud Gateway)

```
+------------------------------------------------------------------------------+
|                    MOBILE CARD READER ARCHITECTURE                            |
+------------------------------------------------------------------------------+
|               EXAMPLES: Square Reader, PayPal Here, Stripe Reader             |
+------------------------------------------------------------------------------+

    ┌─────────────────────────────────────────────────────────────┐
    │                 MERCHANT'S MOBILE DEVICE                     │
    │                 (iPhone / Android)                           │
    │                                                              │
    │  ┌────────────────────────────────────────────────────────┐ │
    │  │          MERCHANT APP                                  │ │
    │  │                                                        │ │
    │  │  ┌──────────────────────────────────────────────────┐ │ │
    │  │  │    Payment SDK (Square/Stripe/PayPal)            │ │ │
    │  │  │                                                  │ │ │
    │  │  │  • Communicates with card reader via BT/audio   │ │ │
    │  │  │  • Receives encrypted card data                 │ │ │
    │  │  │  • Sends to cloud gateway API                   │ │ │
    │  │  └──────────────────────────────────────────────────┘ │ │
    │  │                                                        │ │
    │  │  • UI for transaction entry                            │ │
    │  │  • Receipt generation / email                          │ │
    │  │  • Transaction history                                 │ │
    │  └────────────────────────────────────────────────────────┘ │
    └─────────────────────────────────────────────────────────────┘
              ▲                                │
              │ Bluetooth                      │ HTTPS
              │ or Audio Jack                  │ to cloud
              │                                ▼
    ┌──────────────────────┐      ┌─────────────────────────┐
    │   CARD READER        │      │   CLOUD GATEWAY API     │
    │   (Hardware)         │      │   (Square/Stripe/etc)   │
    │                      │      │                         │
    │  • EMV chip reader   │      │  • Authorization        │
    │  • NFC contactless   │      │  • Settlement           │
    │  • Mag stripe        │      │  • Tokenization         │
    │  • P2PE encryption   │      │  • Reporting            │
    └──────────────────────┘      └─────────────────────────┘
                                               │
                                               ▼
                                    ┌──────────────────┐
                                    │   Processor      │
                                    └──────────────────┘

SECURITY MODEL:
===============
1. Card reader encrypts data immediately (P2PE)
2. Encrypted blob sent to mobile app via Bluetooth/audio
3. App CANNOT decrypt (only processor/gateway can)
4. App forwards encrypted data to cloud gateway
5. Gateway decrypts and processes

NETWORK DEPENDENCY:
===================
✗ REQUIRES internet connection (real-time authorization only)
  • Transactions fail if offline - no store-and-forward capability
  • Unlike traditional terminals, mobile readers are designed for always-connected environments
  • No true offline mode (contrast with legacy standalone terminals)

EXAMPLES:
=========
• Square Reader: $49-$299 → Square API → Square Processing
• Stripe Reader: $59-$249 → Stripe API → Stripe Processing
• PayPal Here: Reader → PayPal API → Braintree/PayPal Processing
• SumUp: Reader → SumUp API → SumUp Processing

+------------------------------------------------------------------------------+
```

#### 5. Unified/Omnichannel Platforms

Modern platforms unify card-present and card-not-present through single gateway API:

```
+------------------------------------------------------------------------------+
|                    OMNICHANNEL GATEWAY ARCHITECTURE                           |
+------------------------------------------------------------------------------+
|                   EXAMPLES: Adyen, Stripe Terminal                            |
+------------------------------------------------------------------------------+

                        MERCHANT'S BUSINESS
                                │
            ┌───────────────────┼───────────────────┐
            │                   │                   │
            ▼                   ▼                   ▼
    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
    │   Website    │    │  Mobile App  │    │  Retail POS  │
    │   (CNP)      │    │   (CNP/CP)   │    │   (CP)       │
    └──────────────┘    └──────────────┘    └──────────────┘
            │                   │                   │
            │                   │                   │
            └───────────────────┼───────────────────┘
                                │
                    ALL use SAME gateway API
                                │
                                ▼
    ┌─────────────────────────────────────────────────────────────┐
    │              UNIFIED GATEWAY PLATFORM                        │
    │              (e.g., Adyen, Stripe)                           │
    │                                                              │
    │  ┌────────────────────────────────────────────────────────┐ │
    │  │           SINGLE API FOR ALL CHANNELS                  │ │
    │  │                                                        │ │
    │  │  • Online checkout (hosted fields, payment links)     │ │
    │  │  • In-app payments (SDK)                              │ │
    │  │  • POS terminals (cloud-connected)                    │ │
    │  │  • QR codes / mobile wallets                          │ │
    │  │  • Unified tokenization (use token anywhere)          │ │
    │  └────────────────────────────────────────────────────────┘ │
    │                                                              │
    │  ┌────────────────────────────────────────────────────────┐ │
    │  │         UNIFIED FEATURES                               │ │
    │  │                                                        │ │
    │  │  • Single customer record across channels             │ │
    │  │  • Omnichannel tokenization                           │ │
    │  │  • Unified reporting / reconciliation                 │ │
    │  │  • Cross-channel fraud detection                      │ │
    │  │  • Network tokenization (VTS/MDES)                    │ │
    │  └────────────────────────────────────────────────────────┘ │
    └─────────────────────────────────────────────────────────────┘
                                │
                                ▼
                    ┌──────────────────────┐
                    │  Integrated          │
                    │  Processor           │
                    └──────────────────────┘

REAL-WORLD EXAMPLE: Adyen
==========================

Same merchant account, same API for:
• E-commerce website (CNP)
• iOS/Android app (CNP)
• Retail stores with Adyen terminals (CP)
• Mobile point-of-sale (CP)
• Subscription billing (recurring CNP)

Customer's tokenized card works EVERYWHERE:
• Save card online → use in-store
• Save card in-store → use online
• Network tokens update automatically across ALL channels

BENEFITS:
=========
✓ Single integration effort
✓ Unified customer experience
✓ Cross-channel analytics
✓ Consistent tokenization
✓ Simplified reconciliation
✓ One contract, one support relationship

TRADE-OFFS:
===========
✗ Vendor lock-in (harder to switch)
✗ Less processor negotiation leverage
✗ Premium pricing vs unbundled approach

+------------------------------------------------------------------------------+
```

#### 6. Softpos / Tap to Pay (Emerging 2022-2025)

The newest innovation: accept contactless payments using **only a smartphone** - no external hardware needed:

```
+------------------------------------------------------------------------------+
|                    SOFTPOS / TAP TO PAY ARCHITECTURE                          |
+------------------------------------------------------------------------------+
|          EXAMPLES: Stripe Tap to Pay, Square Tap to Pay, Adyen Tap to Pay    |
+------------------------------------------------------------------------------+

    Customer's Contactless Card or Phone (Apple Pay/Google Pay)
         │
         ▼  (NFC tap directly on merchant's phone)
    ┌─────────────────────────────────────────────────────────────┐
    │              MERCHANT'S SMARTPHONE                           │
    │              (iPhone XS+ or NFC-enabled Android)             │
    │                                                              │
    │  ┌────────────────────────────────────────────────────────┐ │
    │  │          SOFTPOS APP                                   │ │
    │  │          (PCI-certified application)                   │ │
    │  │                                                        │ │
    │  │  • Uses phone's NFC chip to read contactless card     │ │
    │  │  • App is PCI CPoC certified (not general-purpose)    │ │
    │  │  • Card data encrypted immediately in software        │ │
    │  │  • Sends encrypted data to cloud gateway              │ │
    │  └────────────────────────────────────────────────────────┘ │
    └─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS to cloud
                              ▼
                    ┌──────────────────┐
                    │  Cloud Gateway   │
                    │  (Stripe/Square) │
                    └──────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │    Processor     │
                    └──────────────────┘

HOW IT WORKS:
=============
1. Merchant downloads PCI-certified app (Stripe, Square, Adyen)
2. App activates phone's built-in NFC reader
3. Customer taps contactless card or mobile wallet on phone screen
4. App encrypts card data immediately (software-based encryption)
5. Transaction processed via cloud gateway API

SECURITY MODEL (PCI CPoC):
==========================
• PCI CPoC = Contactless Payments on COTS (Commercial Off-The-Shelf)
• App must be PCI-certified (DIY apps cannot accept payments)
• Phone hardware is NOT certified - app provides security layer
• Only contactless transactions (no chip insert, no magstripe)

LIMITATIONS:
============
✗ Contactless ONLY (no chip insert capability)
✗ Transaction limits may apply (~$250 varies by region)
✗ Requires NFC-enabled phone (iPhone XS+, most modern Android)
✗ Regulatory approval varies by country
✗ No PIN entry (limits transaction value)

BENEFITS:
=========
✓ ZERO additional hardware cost
✓ Instant merchant onboarding (download app and go)
✓ Perfect for mobile services (delivery, home repairs, events)
✓ Lower barrier to accepting card payments
✓ Ideal for occasional sellers

EXAMPLES:
=========
• Stripe Tap to Pay on iPhone (2022)
• Square Tap to Pay (2023)
• Adyen Tap to Pay (2023)
• PayPal Zettle Tap to Pay (2024)

MARKET IMPACT:
==============
• Disrupts mobile reader market (why buy $49-$299 reader?)
• Enables gig economy payments (delivery driver accepts tip via phone)
• Competition: Mobile readers still offer chip/magstripe fallback

+------------------------------------------------------------------------------+
```

**Adyen vs Stripe Terminal Comparison:**

| Feature | Adyen | Stripe Terminal |
|---------|-------|-----------------|
| **Terminal Hardware** | Proprietary (Adyen terminals) | Open (BBPOS, Verifone) |
| **Geographic Coverage** | 250+ payment methods, global leader | Strong US/EU, growing globally |
| **Pricing Model** | Interchange++ (transparent) | Flat rate (2.7% + $0.05 CP) |
| **Best For** | Enterprise, international | US SMB/mid-market |
| **API Consistency** | Highly unified | Separate Terminal API |

### Why This Distinction Matters for PayFacs

```
+------------------------------------------------------------------------------+
|                   PAYFAC CARD-PRESENT CONSIDERATIONS                          |
+------------------------------------------------------------------------------+

CHANNEL STRATEGY:
=================
PayFacs must decide which channels to support:

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  CNP Only          Hybrid (CNP + CP)         Omnichannel           │
│  ────────────      ─────────────────         ────────────          │
│                                                                     │
│  • SaaS PayFac     • Separate systems        • Unified platform    │
│  • Subscription    • Different gateways      • Single gateway      │
│  • Lower PCI       • More complexity         • Higher investment   │
│  • Easier launch   • Moderate PCI scope      • Full PCI scope      │
│                                                                     │
│  Examples:         Examples:                 Examples:             │
│  • Shopify         • Square (started CP,     • Stripe (Terminal)   │
│    Payments          added CNP)              • Adyen               │
│  • Recurly         • Toast (restaurant       • Checkout.com        │
│  • Chargebee         POS + online)                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

GATEWAY CHOICE IMPLICATIONS:
============================

1. TERMINAL CERTIFICATION
   • Each gateway requires certified terminals
   • Certification process: 6-12 months per terminal model
   • Limits hardware options for sub-merchants

2. PCI SCOPE
   • CNP: SAQ A or A-EP (if using hosted fields)
   • CP: PCI PTS for terminals + P2PE validation
   • PayFac responsible for BOTH if offering both channels

3. SETTLEMENT COMPLEXITY
   • CNP: T+2 to T+7 typical
   • CP: Often faster (T+1 to T+2)
   • Must reconcile across channels

4. FRAUD PATTERNS
   • CNP: Higher fraud risk (3DS required in EU)
   • CP: Lower fraud (EMV chip, physical card)
   • Different risk models needed

