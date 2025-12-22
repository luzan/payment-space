# Payment Gateways

>
> **Last Updated:** 2025-12-21
>
> **Status:** Complete
>
> **Changes Log:**
> - 2025-12: Initial comprehensive notes with PayFac context
> - 2025-12: Payment-critic review applied - added 3DS/SCA section, decline management, hidden fees, factual corrections
> - 2025-12-21: Added comprehensive Card-Present vs Card-Not-Present section covering terminal architectures, P2PE, semi-integrated vs fully integrated POS, mobile readers, omnichannel platforms, and PayFac channel strategy considerations
> - 2025-12-21: Payment-critic review of CP section - added Softpos/Tap to Pay section, fixed PCI SAQ scope clarifications, corrected mobile reader offline claims

Payment gateways are the secure technology layer that transmits payment data from merchants to [processors](./05-payment-processors.md), enabling both online ([card-not-present](./02-card-network-role.md#card-present-vs-card-not-present)) and in-person (card-present) transactions. Understanding gateways across all commerce channels is essential for building [PayFac](./09-isvs.md#the-payfac-model) platforms and modern payment systems.

---

## Overview

A **payment gateway** is a technology service that securely transmits payment information from a merchant's point of sale (whether online, mobile, or in-person) to the payment processor. Think of gateways as the "secure messenger" of the payment ecosystem.

| Function | Description |
|----------|-------------|
| **Data Transmission** | Encrypts and transmits card data from customer to processor |
| **Security Layer** | PCI compliance, tokenization, fraud screening, P2PE (card-present) |
| **Integration Point** | APIs, SDKs, hosted checkout (CNP), terminal firmware/APIs (CP) |
| **Modern Capabilities** | Multi-processor routing, orchestration, network tokenization, omnichannel |

**Key Distinction:** Gateways transmit data; [processors](./05-payment-processors.md) move money. Many modern providers (Stripe, Adyen) bundle both functions, but understanding the distinction is critical for payment architecture.

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
| **[Interchange](./01-four-party-model.md#interchange-demystified) Savings** | 0.10% for CNP | N/A | Visa program specific |

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

5. UNDERWRITING
   • CNP merchants: Higher risk categories
   • CP merchants: Generally lower risk
   • Sub-merchant MCC may determine eligibility

HYBRID ARCHITECTURE EXAMPLE:
============================

Many PayFacs start CNP-only, add CP later:

Phase 1: CNP Only
─────────────────
Stripe/Adyen API → CNP transactions → Fast launch

Phase 2: Add CP
─────────────────
Same provider's terminal solution → Unified platform
OR
NMI (CNP) + separate CP provider → More complexity

+------------------------------------------------------------------------------+
```

### Terminal Firmware vs Gateway API

Understanding the technical difference:

```
+------------------------------------------------------------------------------+
|              TERMINAL FIRMWARE vs CLOUD GATEWAY API                           |
+------------------------------------------------------------------------------+

TRADITIONAL: FIRMWARE-BASED
===========================

┌──────────────────────────────────────────┐
│         PAYMENT TERMINAL                  │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │       EMBEDDED FIRMWARE            │  │
│  │                                    │  │
│  │  • Transaction logic               │  │
│  │  • EMV kernel                      │  │
│  │  • Gateway communication           │  │
│  │  • UI/display control              │  │
│  │  • Receipt printing                │  │
│  │                                    │  │
│  │  ALL processing IN terminal        │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
                │
                │ Direct processor connection
                ▼
        ┌────────────┐
        │ Processor  │
        └────────────┘

PROS:
✓ Works offline (store-and-forward)
✓ No cloud dependency
✓ Battle-tested, reliable

CONS:
✗ Firmware updates slow/complex
✗ Limited features (constrained by hardware)
✗ Terminal-specific development
✗ Hard to unify with online channels


MODERN: CLOUD GATEWAY API
==========================

┌──────────────────────────────────────────┐
│         SMART TERMINAL                    │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │       THIN CLIENT                  │  │
│  │                                    │  │
│  │  • Card reader only                │  │
│  │  • P2PE encryption                 │  │
│  │  • Sends data to cloud             │  │
│  │  • Displays responses              │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
                │
                │ HTTPS to cloud
                ▼
┌──────────────────────────────────────────┐
│         CLOUD GATEWAY                     │
│                                          │
│  • Business logic                        │
│  • Feature development                   │
│  • Multi-location management             │
│  • Analytics / reporting                 │
│  • Integration ecosystem                 │
└──────────────────────────────────────────┘
                │
                ▼
        ┌────────────┐
        │ Processor  │
        └────────────┘

PROS:
✓ Rich features (inventory, CRM, analytics)
✓ Fast updates (deploy to cloud)
✓ Omnichannel unified
✓ Lower terminal cost (commodity hardware)

CONS:
✗ Internet required
✗ Cloud outage = all terminals down
✗ Latency considerations

+------------------------------------------------------------------------------+
```

### Key Terminology Summary

| Term | Definition | Context |
|------|------------|---------|
| **P2PE** | Point-to-Point Encryption - encrypts card data at terminal, decrypts only at processor | Card-present security standard |
| **PCI PTS** | PIN Transaction Security - hardware certification for payment terminals | Terminal compliance requirement |
| **EMV** | Chip card standard (Europay, Mastercard, Visa) | Card-present transaction security |
| **Terminal Firmware** | Software embedded in payment terminal hardware | Traditional standalone approach |
| **Gateway API** | Cloud-based service terminals communicate with | Modern integrated approach |
| **Semi-Integrated** | POS software separated from payment terminal | PCI scope reduction method |
| **Omnichannel** | Unified payment experience across all channels (online, in-store, mobile) | Strategic approach |
| **Store-and-Forward** | Terminal stores transactions offline, transmits when online | Firmware-based resilience |
| **Terminal SDK** | Software development kit for integrating with payment terminals | Developer integration tool |

---

## Gateway vs Processor: The Critical Distinction

### The Fundamental Difference

```
+------------------------------------------------------------------------------+
|                    GATEWAY vs PROCESSOR COMPARISON                            |
+------------------------------------------------------------------------------+

                 PAYMENT GATEWAY                    PAYMENT PROCESSOR
                 ===============                    =================

PRIMARY         Secure data                        Money movement
FUNCTION:       transmission                       and settlement

ROLE:           Technology layer                   Financial processing layer

WHAT IT         • Encrypts card data               • Routes to card networks
DOES:           • Transmits to processor           • Manages clearing
                • Returns auth response            • Handles settlement
                • Tokenization                     • Interchange calculation
                • Fraud screening                  • Funding coordination

LICENSING:      Technology provider                • Card network registration
                (usually no MTL required)          • Sponsor bank relationship
                                                   • Full PCI Level 1

FEE             Monthly + per-transaction          Interchange + assessments
STRUCTURE:      technology fee                     + processor markup

EXAMPLES        • Authorize.Net (standalone)       • First Data (Fiserv)
(PURE):         • NMI (white-label)                • TSYS
                • Spreedly (orchestration)         • Worldpay

EXAMPLES        Stripe, Adyen, Braintree, Square, Checkout.com
(BUNDLED):      (these handle BOTH gateway AND processing functions)

+------------------------------------------------------------------------------+
```

### Why This Distinction Matters

**Understanding Payment Architecture:**

When you integrate Stripe, you're using BOTH layers:

```
   Your Application
         │
         ▼
┌─────────────────────────────────────────────┐
│              STRIPE                          │
│  ┌────────────────────────────────────────┐ │
│  │         GATEWAY LAYER                  │ │
│  │  • Stripe.js / Elements (hosted fields)│ │
│  │  • API endpoints                       │ │
│  │  • Tokenization vault                  │ │
│  │  • Radar fraud screening               │ │
│  └────────────────────────────────────────┘ │
│                    │                         │
│  ┌────────────────────────────────────────┐ │
│  │       PROCESSOR LAYER                  │ │
│  │  • Direct card network connections     │ │
│  │  • Authorization routing               │ │
│  │  • Settlement/clearing                 │ │
│  │  • Sponsor bank relationships          │ │
│  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
         │
         ▼
    Card Networks (Visa/MC)
```

**Traditional (Unbundled) Setup:**

```
   Your Application
         │
         ▼
┌─────────────────────┐     ┌─────────────────────┐
│   AUTHORIZE.NET     │     │      FIRST DATA     │
│   (Gateway)         │────>│     (Processor)     │
│                     │     │                     │
│ $25/month           │     │ Interchange + 0.30% │
│ + $0.10/txn         │     │ + $0.10/txn         │
└─────────────────────┘     └─────────────────────┘
                                     │
                                     ▼
                              Card Networks
```

**Trade-offs:**

| Factor | Bundled (Stripe/Adyen) | Unbundled (Gateway + Processor) |
|--------|------------------------|----------------------------------|
| **Simplicity** | ✓ One vendor, one contract | Two relationships to manage |
| **Pricing** | Fixed (2.9% + $0.30) | Interchange-plus (potentially lower) |
| **Flexibility** | Locked to their processing | Can switch processors |
| **Negotiation** | Limited at scale | More leverage with volume |
| **Integration** | Single integration | Potentially two integrations |

---

## Types of Payment Gateways

### 1. Standalone Gateways

**Authorize.Net**
- **Founded:** 1996
- **Ownership:** Visa Inc. (acquired 2010)
- **Merchants:** ~500,000
- **Distribution:** Direct and through resellers

| Pricing Option | Monthly Fee | Transaction Fee |
|----------------|-------------|-----------------|
| Gateway Only | $25 | $0.10 |
| All-in-One (w/ processing) | $25 | 2.9% + $0.30 |

**NMI (Network Merchants, Inc.)**
- **Founded:** 2001
- **Merchants:** ~150,000
- **Annual Processing:** $68+ billion
- **Ownership:** Centerbridge Partners (private equity)
- **Pricing:** ~$20/month + $0.13/transaction (via resellers)
- **Distribution:** White-label ONLY

```
+------------------------------------------------------------------------------+
|                       NMI WHITE-LABEL MODEL                                   |
+------------------------------------------------------------------------------+

        NMI provides gateway technology
                    │
      ┌─────────────┼─────────────┬─────────────┐
      │             │             │             │
      ▼             ▼             ▼             ▼
   [ISO](./08-isos.md) "A"       ISO "B"     Processor    [PayFac](./09-isvs.md#the-payfac-model) "X"
   Gateway       Gateway      Gateway      Gateway
      │             │             │             │
      │    (Each rebrands NMI as their own)    │
      │                                        │
      ▼                                        ▼
   Merchant                               Merchant
   sees ISO's                             sees PayFac's
   brand                                  brand

BENEFITS:
• Fast time-to-market (no development)
• Lower cost than building proprietary
• 100+ processor integrations available
• ISO/PayFac controls billing and support

+------------------------------------------------------------------------------+
```

### 2. Integrated Gateway-Processors

| Provider | Founded | 2024 Volume | Market Share | Pricing |
|----------|---------|-------------|--------------|---------|
| **Stripe** | 2010 | $1.4 trillion | 20.8% (US) | 2.9% + $0.30 |
| **Adyen** | 2006 | €1.29 trillion | Enterprise leader | €0.11 + pass-through |
| **Braintree** | 2007 | - | PayPal ecosystem | 2.59% + $0.49 |
| **Checkout.com** | 2012 | $300 billion | Enterprise challenger | Custom |
| **Square** | 2009 | - | SMB leader | 2.6-2.9% + $0.30 |

**Key Differentiators:**

- **Stripe:** Developer-first, best APIs, fastest integration
- **Adyen:** "Unified commerce" - single platform for online + POS
- **Braintree:** Easy Venmo/PayPal integration
- **Checkout.com:** Network token optimization, enterprise focus
- **Square:** SMB-friendly, POS + online unified

### 3. Payment Orchestration Platforms

```
+------------------------------------------------------------------------------+
|                  PAYMENT ORCHESTRATION ARCHITECTURE                           |
+------------------------------------------------------------------------------+

                         YOUR APPLICATION
                               │
                               ▼
                 ┌─────────────────────────────┐
                 │    ORCHESTRATION LAYER      │
                 │    (Spreedly / Primer.io)   │
                 │                             │
                 │  • Single API integration   │
                 │  • Unified token vault      │
                 │  • Smart routing rules      │
                 │  • Fallback logic           │
                 │  • Consolidated reporting   │
                 └─────────────────────────────┘
                     │         │         │
          ┌──────────┘         │         └──────────┐
          │                    │                    │
          ▼                    ▼                    ▼
    ┌───────────┐        ┌───────────┐        ┌───────────┐
    │  Stripe   │        │   Adyen   │        │  Worldpay │
    │   (US)    │        │  (Europe) │        │  (APAC)   │
    └───────────┘        └───────────┘        └───────────┘

ROUTING EXAMPLES:
=================
• EU cards → Adyen (local acquiring, lower fees)
• US cards → Stripe (highest auth rates)
• Stripe declines → Retry via Worldpay
• High-risk MCC → Specialized processor

+------------------------------------------------------------------------------+
```

**Spreedly**
- PSP Connections: 240+
- Growth: 27% YoY transaction volume increase
- Model: Gateway aggregation + token orchestration

**Primer.io**
- Model: Unified payment infrastructure (beyond orchestration)
- Features: PSPs + fraud tools + 3DS + reconciliation in one API
- Customer success: Banxa recovered $7M+ in H1 2024 using fallbacks

**Market Growth:**
- 2024: $1.2 billion
- 2032 projection: $23.9 billion
- CAGR: 19-35%

---

## PCI Scope Reduction Methods

Payment gateways offer several methods to reduce merchant PCI compliance burden:

### Hosted Payment Pages

```
+------------------------------------------------------------------------------+
|                      HOSTED PAYMENT PAGE FLOW                                 |
+------------------------------------------------------------------------------+

   Customer                 Merchant Site              Gateway Hosted Page
       │                         │                            │
       │  1. Click "Pay Now"     │                            │
       │────────────────────────>│                            │
       │                         │                            │
       │         2. Redirect to gateway                       │
       │<────────────────────────────────────────────────────>│
       │                         │                            │
       │                    Card data NEVER                   │
       │                    touches merchant                  │
       │                         │                            │
       │                         │   3. Customer enters card  │
       │                         │      on gateway page       │
       │                         │<───────────────────────────│
       │                         │                            │
       │  4. Redirect back with token                         │
       │<────────────────────────────────────────────────────>│
       │                         │                            │

PROS:                           CONS:
✓ Lowest PCI scope             ✗ Customer leaves merchant site
✓ Gateway handles compliance   ✗ Limited branding control
✓ Simple integration           ✗ Can impact conversion

+------------------------------------------------------------------------------+
```

### Hosted Fields (iFrame)

```
+------------------------------------------------------------------------------+
|                       HOSTED FIELDS / IFRAME                                  |
+------------------------------------------------------------------------------+

                    MERCHANT'S CHECKOUT PAGE
    ┌─────────────────────────────────────────────────────────────┐
    │                                                             │
    │    Name:  ┌─────────────────────────────────────────────┐  │
    │           │  John Smith                     (merchant)  │  │
    │           └─────────────────────────────────────────────┘  │
    │                                                             │
    │    Card:  ┌─────────────────────────────────────────────┐  │
    │           │  4111 1111 1111 1111          ┌──────────┐  │  │
    │           │                               │ iFrame   │  │  │
    │           │  Rendered from GATEWAY        │ from     │  │  │
    │           │  server, styled to match      │ gateway  │  │  │
    │           │  merchant branding            └──────────┘  │  │
    │           └─────────────────────────────────────────────┘  │
    │                                                             │
    │    Exp:   ┌──────────┐  CVV: ┌──────────┐                  │
    │           │  12/25   │       │   123    │   ← Also iFrames │
    │           └──────────┘       └──────────┘                  │
    │                                                             │
    │           [ Pay $99.00 ]                                    │
    │                                                             │
    └─────────────────────────────────────────────────────────────┘

HOW IT WORKS:
=============
1. Gateway's JavaScript SDK loads on merchant page
2. Card fields render as iFrames from gateway's secure servers
3. Card data entered directly into gateway (never merchant DOM)
4. Merchant controls page design, gateway handles card security
5. On submit, gateway returns token to merchant

EXAMPLES: Stripe Elements, Adyen Web Drop-in, Braintree Hosted Fields

PROS:                           CONS:
✓ Seamless UX (no redirect)    ✗ Slightly more complex integration
✓ Full branding control        ✗ JavaScript dependency
✓ Reduced PCI scope
✓ Best of both worlds

+------------------------------------------------------------------------------+
```

### PCI SAQ Types Reference

| Scenario | SAQ Type | Questions | PCI Burden |
|----------|----------|-----------|------------|
| **Hosted payment page (redirect)** | SAQ A | 22 questions | Lowest |
| **Hosted fields (iFrame)** | SAQ A-EP | 181 questions | Medium |
| **Direct API (you handle PAN)** | SAQ D | 329 questions | Highest |

**PayFac Implication:** If you aggregate under master merchant (recommended), YOU carry the PCI burden for all sub-merchants. Hosted fields are the sweet spot: good UX + reasonable compliance burden.

---

## 3D Secure & Strong Customer Authentication

Modern gateways must support **3D Secure 2.x** for regulatory compliance, especially in Europe (PSD2/SCA).

### 3DS 2.x vs 3DS 1.0

| Feature | 3DS 1.0 (Legacy) | 3DS 2.x (Current) |
|---------|------------------|-------------------|
| **User Experience** | Redirect flow, password entry | Frictionless, risk-based |
| **Data Shared** | Minimal | 100+ data points |
| **Cart Abandonment** | 15-30% drop | ~5% drop |
| **Challenge Rate** | All transactions | ~5-10% of transactions |
| **Mobile Support** | Poor | Native SDKs |

### How 3DS Works Through Gateways

```
+------------------------------------------------------------------------------+
|                       3D SECURE 2.x FLOW                                      |
+------------------------------------------------------------------------------+

   Customer              Gateway              3DS Server         Issuer ACS
       │                    │                     │                  │
       │  1. Payment        │                     │                  │
       │────────────────────>                     │                  │
       │                    │                     │                  │
       │                    │  2. 3DS request     │                  │
       │                    │────────────────────>│                  │
       │                    │                     │                  │
       │                    │                     │  3. Auth request │
       │                    │                     │─────────────────>│
       │                    │                     │                  │
       │                    │                     │     Risk Score   │
       │                    │                     │<─────────────────│
       │                    │                     │                  │
   ┌───────────────────────────────────────────────────────────────────────┐
   │ DECISION POINT:                                                       │
   │   LOW RISK → Frictionless approval (no customer action)              │
   │   HIGH RISK → Challenge required (OTP, biometric, app approval)      │
   └───────────────────────────────────────────────────────────────────────┘
       │                    │                     │                  │
       │  4. Result         │                     │                  │
       │<────────────────────                     │                  │
       │                    │                     │                  │

EXEMPTIONS (Gateway can request):
• TRA (Transaction Risk Analysis): <€500 with low fraud rate
• Low-Value: Transactions <€30
• Recurring/Subscription: After initial authentication
• Merchant-Initiated (MIT): Delayed charges, installments

+------------------------------------------------------------------------------+
```

### Gateway Role in 3DS

| Responsibility | What Gateway Does |
|----------------|-------------------|
| **Integration** | Connect to 3DS servers (issuer ACS, network directory) |
| **Exemption Strategy** | Apply TRA exemptions intelligently |
| **Challenge UX** | Embed challenge in checkout (not redirect) |
| **Fallback** | Handle 3DS 1.0 fallback for older issuers |
| **MIT Handling** | Manage merchant-initiated transaction flags |

### PayFac Implications

- Sub-merchants inherit PayFac's 3DS configuration
- Regional routing needed (EU requires 3DS, US typically optional)
- Auth rate optimization through smart exemption strategies
- Risk data from PayFac platform improves exemption success

---

## Decline Management & Recovery

### The False Decline Problem

**Scale:** $331 billion in sales lost annually to false declines (2024)
- 15% of transactions incorrectly declined by issuers
- 40% of falsely declined customers never return
- Costs merchants 13x more than fraud losses

### Gateway-Based Recovery Strategies

```
+------------------------------------------------------------------------------+
|                    INTELLIGENT DECLINE RECOVERY                               |
+------------------------------------------------------------------------------+

STRATEGY 1: SMART RETRY LOGIC
=============================

Initial decline: Reason code 05 (Do Not Honor)
    │
    ▼
Wait 24-72 hours (issuer velocity limits reset)
    │
    ▼
Retry with updated AVS data
    │
    ▼
If decline again → Try alternative processor
    │
    ▼
Recovery rate: 10-30% of initially declined transactions


STRATEGY 2: NETWORK TOKEN RETRY
===============================

Transaction declined with PAN
    │
    ▼
Gateway requests network token from VTS/MDES
    │
    ▼
Retry with token + cryptogram
    │
    ▼
Typical lift: 2-3% approval increase


STRATEGY 3: CASCADING LOGIC
===========================

    Primary Processor (lowest cost)
         │ decline
         ▼
    Secondary Processor (higher auth rates)
         │ decline
         ▼
    Third Processor (last resort, specialized)

+------------------------------------------------------------------------------+
```

### Common Decline Reason Codes

| Code | Meaning | Recovery Strategy |
|------|---------|-------------------|
| **05** | Do Not Honor | Retry after 24-72 hours |
| **51** | Insufficient Funds | Retry in 5-7 days |
| **14** | Invalid Card Number | Contact customer |
| **54** | Expired Card | Account Updater or contact customer |
| **65** | Activity Limit | Retry after 24 hours |
| **N7** | CVV Mismatch | Re-collect card details |

### PayFac Application

- Build retry orchestration into platform
- Don't retry too aggressively (issuer fraud flags)
- Track decline reason codes by processor for optimization
- Use aggregate data advantage (patterns across sub-merchants)

---

## Gateway Economics & Pricing

### Pricing Models

```
+------------------------------------------------------------------------------+
|                      GATEWAY PRICING COMPARISON                               |
+------------------------------------------------------------------------------+

BUNDLED PRICING (Gateway + Processing)
======================================

   Provider        Per-Transaction      Monthly Fee     Notes
   ────────────────────────────────────────────────────────────
   Stripe          2.9% + $0.30         $0              Pay-as-you-go
   Square          2.9% + $0.30         $0              Standard rate
   Braintree       2.59% + $0.49        $0              Cards/wallets
   Braintree       3.49% + $0.49        $0              Venmo
   Adyen           €0.11 + pass-through €0              Interchange++


GATEWAY-ONLY PRICING
====================

   Provider        Per-Transaction      Monthly Fee     Notes
   ────────────────────────────────────────────────────────────
   Authorize.Net   $0.10                $25             Gateway only
   NMI             ~$0.13               ~$20            Via resellers
   Custom/Ent.     $0.05-$0.15          $50-$500        Negotiated


COST COMPARISON EXAMPLE
=======================

$100 Visa Rewards Credit Card (CNP) transaction:

BUNDLED (Stripe):
   $100 × 2.9% + $0.30 = $3.20 total cost

UNBUNDLED (Authorize.Net + First Data):
   Gateway:     $0.10
   [Interchange](./01-four-party-model.md#interchange-demystified): $100 × 1.80% + $0.10 = $1.90
   [Assessment](./02-card-network-role.md#network-fees-assessments):  $100 × 0.14% = $0.14
   Processor:   $100 × 0.30% + $0.10 = $0.40
   ─────────────────────────────────────────
   Total:       $2.54

   SAVINGS: $0.66 per transaction (20.6%)

AT SCALE:
   $1M monthly volume × 0.66% savings = $6,600/month = $79,200/year

+------------------------------------------------------------------------------+
```

### Industry Cost Statistics (2024)

| Metric | Value | Source |
|--------|-------|--------|
| Merchant fees per $100 accepted | $1.57 | Nilson Report |
| Total US merchant fees | $38+ billion | Industry analysis |
| Revenue lost to processing | 1-3% | Varies by business |

### Hidden Gateway Fees to Watch For

| Fee Type | Typical Amount | Notes |
|----------|----------------|-------|
| **Monthly minimum** | $25-$50 | Required minimum processing volume |
| **Batch fees** | $0.10-$0.25/day | Settlement batch submission |
| **Chargeback fees** | $15-$25 each | Dispute handling |
| **PCI non-compliance** | $50-$200/month | If merchant fails PCI validation |
| **Gateway replacement** | $295-$495 | If switching to new gateway |
| **IRS reporting (1099-K)** | $50-$150/year | For PayFacs/platforms |
| **Early termination** | $295-$495 | Contract cancellation penalty |
| **International/cross-border** | 1-2% additional | Currency conversion markup |

**PayFac Consideration:** These fees are often passed to sub-merchants. Build transparent fee schedules and disclose all fees upfront.

---

## PayFac Implications

### How PayFacs Use Gateways

```
+------------------------------------------------------------------------------+
|                     PAYFAC GATEWAY ARCHITECTURE                               |
+------------------------------------------------------------------------------+

                    SUB-MERCHANT A        SUB-MERCHANT B        SUB-MERCHANT C
                         │                     │                     │
                         └──────────┬──────────┴──────────┬──────────┘
                                    │                     │
                                    ▼                     │
                    ┌───────────────────────────────────┐ │
                    │        PAYFAC PLATFORM            │ │
                    │  ┌─────────────────────────────┐  │ │
                    │  │   White-Label Gateway       │  │ │
                    │  │   (NMI or proprietary)      │  │ │
                    │  │                             │  │ │
                    │  │   • Sub-merchant hierarchy  │  │ │
                    │  │   • Tokenization per sub    │  │ │
                    │  │   • Separate reporting      │  │ │
                    │  └─────────────────────────────┘  │ │
                    │               │                   │ │
                    │  ┌─────────────────────────────┐  │ │
                    │  │   Master Merchant Account   │  │ │
                    │  └─────────────────────────────┘  │ │
                    └───────────────│───────────────────┘ │
                                    │                     │
                                    ▼                     │
                    ┌───────────────────────────────────┐ │
                    │           PROCESSOR               │ │
                    │                                   │◄┘
                    └───────────────────────────────────┘
                                    │
                                    ▼
                             CARD NETWORKS


PAYFAC GATEWAY REQUIREMENTS:
============================
1. Sub-merchant account structure (hierarchical)
2. Separate settlement per sub-merchant
3. Isolated reporting per sub-merchant
4. Tokenization scoped to sub-merchant (not shared)
5. White-label branding options
6. API for sub-merchant provisioning

+------------------------------------------------------------------------------+
```

### Gateway Choice Impact on PayFac

| Factor | Impact |
|--------|--------|
| **API Quality** | Sub-merchants integrate via PayFac's gateway |
| **Feature Set** | Determines what features PayFac can offer |
| **Reliability** | Downtime affects ALL sub-merchants |
| **Global Support** | Limits PayFac's geographic expansion |
| **White-Label** | Branding consistency for platform |

### PayFac Gateway Options

**Option 1: Build Proprietary**
- Full control and differentiation
- Cost: $millions in development + ongoing maintenance
- Timeline: 12-24+ months
- Best for: Large platforms with unique requirements

**Option 2: White-Label Gateway (NMI)**
- Fast launch, lower cost
- Less differentiation
- Choose your own processor(s)
- Best for: PayFacs wanting processor flexibility

**Option 3: Integrated Platform (Stripe Connect / Adyen for Platforms)**
- Fastest launch, turnkey solution
- Locked into their processing
- Best for: Speed-to-market priority

### Gateway Orchestration for Advanced PayFacs

```
+------------------------------------------------------------------------------+
|              ADVANCED PAYFAC MULTI-PROCESSOR STRATEGY                         |
+------------------------------------------------------------------------------+

                         PAYFAC ORCHESTRATION LAYER
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         │                          │                          │
         ▼                          ▼                          ▼
   ┌───────────┐            ┌───────────┐            ┌───────────┐
   │Processor A│            │Processor B│            │Processor C│
   │           │            │           │            │           │
   │ High-risk │            │ Low-risk  │            │ Intl      │
   │ tolerant  │            │ low fees  │            │ coverage  │
   └───────────┘            └───────────┘            └───────────┘
         │                          │                          │
         │                          │                          │
   Sub-merchants:            Sub-merchants:            Sub-merchants:
   • CBD                     • SaaS                    • EU merchants
   • Crypto                  • Retail                  • APAC merchants
   • Supplements             • Services                • Cross-border

ROUTING RULES:
• MCC 5967 (direct marketing) → Processor A
• MCC 5734 (software) → Processor B
• IP geolocation EU → Processor C
• Fallback: Primary declines → retry with secondary

+------------------------------------------------------------------------------+
```

---

## Major Players Landscape (2024-2025)

### Market Positions

```
+------------------------------------------------------------------------------+
|                   PAYMENT GATEWAY MARKET LANDSCAPE                            |
+------------------------------------------------------------------------------+

INTEGRATED GATEWAY-PROCESSORS (LEADERS)
=======================================

                      Volume          Market Share      Valuation
                      ─────────────   ─────────────     ─────────────
Stripe                $1.4T (2024)    20.8% (US)        $91.5B
Adyen                 €1.29T          Enterprise        €48B
PayPal/Braintree      -               43.4% (US)*       $60B+
Checkout.com          $300B           Challenger        $12B
Square (Block)        -               SMB leader        $40.7B

* PayPal overall market share including all payment products


STANDALONE GATEWAYS
===================

                      Merchants       Processing        Owner
                      ─────────────   ─────────────     ─────────────
Authorize.Net         ~500,000        -                 Visa
NMI                   ~150,000        $68B+             Centerbridge


ORCHESTRATION PLATFORMS
=======================

                      PSP Connections  Growth           Focus
                      ─────────────    ─────────────    ─────────────
Spreedly              240+             27% YoY          Open payments
Primer.io             50+              -                Unified infra


RECENT M&A (2024-2025)
======================
• Global Payments acquiring Worldpay: $22.7B (announced 2024, pending regulatory approval)
• Nexi acquired Computop: German e-commerce gateway leader
• Visa acquired Pismo: $1B (Brazil, infrastructure)

+------------------------------------------------------------------------------+
```

---

## Self-Assessment Questions & Answers

### Question 12: What is the key difference between a payment gateway and a payment processor?

**Answer:**

| Aspect | Payment Gateway | Payment Processor |
|--------|-----------------|-------------------|
| **Primary Function** | Securely **collects and transmits** payment data | **Routes transactions** and **moves money** between banks |
| **Position in Flow** | Customer-facing, front-end | Back-end, between gateway and card networks |
| **What It Does** | Encrypts card data, sends to processor, returns response | Authorizes transactions, handles settlement/clearing |
| **Security Role** | Protects data in transit, reduces PCI scope | Ensures network compliance, fraud detection |
| **Examples (Standalone)** | Authorize.Net, NMI, Spreedly | First Data (Fiserv), TSYS, Worldpay |

**Analogy:**
- **Gateway** = The secure mailroom that receives and packages letters
- **Processor** = The postal system that actually delivers the letters and handles money

**Modern Reality:** Many providers (Stripe, Adyen, Square) bundle both into one service, which is why the distinction can be confusing. But understanding the difference helps when:
- Architecting payment systems
- Negotiating contracts
- Evaluating costs (gateway fee vs processing fee)
- Planning multi-processor strategies

---

## Key Takeaways

1. **Gateways = Secure Data Transmission** - They transmit payment data; processors move money

2. **Modern Gateways Are Feature-Rich** - Tokenization, fraud tools, hosted fields, multi-processor routing far beyond simple data transmission

3. **Bundled vs Unbundled Trade-off** - Stripe/Adyen (integrated) offer simplicity; separate gateway + processor offers flexibility and potentially lower costs at scale

4. **Payment Orchestration Is Exploding** - Fastest-growing segment ($1.2B → $23.9B by 2032), enabling multi-processor strategies

5. **Network Tokenization Is The Future** - 2-3% auth uplift, automatic card updates, interchange savings; Visa targeting 100% by 2030

6. **PCI Scope Reduction** - Hosted payment pages (SAQ A) vs hosted fields (SAQ A-EP) offer different trade-offs between security and UX control

7. **3D Secure/SCA Is Essential** - Required in Europe (PSD2), critical for reducing fraud and liability; 3DS 2.x enables frictionless flows

8. **Decline Management Is Revenue** - $331B lost annually to false declines; smart retry logic and cascading can recover 10-30%

9. **PayFac Gateway Needs** - Sub-merchant hierarchy, separate settlement, white-label options critical for platform success

10. **White-Label Model** - NMI pioneered letting ISOs/PayFacs offer "their own" gateway without building technology

11. **Watch for Hidden Fees** - Monthly minimums, batch fees, PCI non-compliance penalties can significantly impact total cost

12. **Gateway Choice is Strategic** - Affects sub-merchant experience, international expansion capability, and long-term platform flexibility

---

## References

### Market Research & Industry Analysis

- [Payment Gateway Market Size, Growth - InsightAce Analytic](https://www.insightaceanalytic.com/report/payment-gateway-market/1601) - Market projections
- [Stripe Statistics 2025 - Capital One Shopping](https://capitaloneshopping.com/research/stripe-statistics/) - Stripe market data
- [Payment Orchestration Platform Market - GM Insights](https://www.gminsights.com/industry-analysis/payment-orchestration-platform-market) - Orchestration trends

### Gateway Provider Resources

- [Stripe Documentation](https://stripe.com/docs) - Technical integration guides
- [Adyen Documentation](https://docs.adyen.com) - Platform documentation
- [Authorize.Net Developer](https://developer.authorize.net) - Gateway API reference
- [Spreedly Blog](https://www.spreedly.com/blog) - Orchestration insights
- [Primer.io Blog](https://primer.io/blog) - Payment infrastructure trends

### Network Tokenization

- [Visa Token Service](https://usa.visa.com/products/visa-token-service.html) - Official VTS information
- [Network Tokenization Explained - Spreedly](https://www.spreedly.com/blog/network-tokenization-explained) - Token comparison
- [Network Tokens - Checkout.com](https://www.checkout.com/blog/network-tokens-why-your-2024-payment-strategy-needs-them) - Benefits analysis

### Gateway Comparisons

- [Authorize.Net vs NMI - CardFellow](https://www.cardfellow.com/blog/authorize-net-vs-nmi-comparing-and-contrasting-payment-gateways/) - Gateway comparison
- [Payment Gateway Fees - Spreedly](https://www.spreedly.com/blog/payment-gateways-fees-and-pricing) - Pricing analysis
- [Payment Gateway vs Processor - Stripe](https://stripe.com/resources/more/payment-processor-vs-payment-gateway) - Clear explanation

### M&A and Industry News

- [Payments M&A 2024 - Bain & Company](https://www.bain.com/insights/payments-m-and-a-report-2024/) - M&A analysis
- [Global Payments Worldpay Acquisition - Business Wire](https://www.businesswire.com/news/home/20250416743638/en/) - Official announcement

---

*Previous Topic: [Payment Processors](./05-payment-processors.md)*

*Next Topic: [Acquiring Banks](./07-acquiring-banks.md)*

---

## Related Topics

| Topic | Description |
|-------|-------------|
| [The Four-Party Model](./01-four-party-model.md) | Interchange economics and fee structures |
| [Card Network Role](./02-card-network-role.md) | Network assessments and CP/CNP distinction |
| [Transaction Lifecycle](./03-transaction-lifecycle.md) | Authorization, settlement, and chargebacks |
| [Debit Networks & Routing](./04-debit-networks-routing.md) | PINless routing through gateway |
| [Payment Processors](./05-payment-processors.md) | Gateway vs processor distinction |
| [Acquiring Banks](./07-acquiring-banks.md) | Settlement and sponsor bank relationships |
| [ISOs](./08-isos.md) | White-label gateway distribution |
| [ISVs](./09-isvs.md) | PayFac model and embedded payments |
