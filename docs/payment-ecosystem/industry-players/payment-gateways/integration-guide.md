---
title: "Payment Gateway Integration Guide"
description: "Card-present vs card-not-present gateways, PCI compliance, 3DS, decline management, and PayFac considerations"
sidebar_position: 2
sidebar_label: "Integration Guide"
keywords:
  - card-present
  - card-not-present
  - P2PE
  - PCI compliance
  - hosted payment page
  - hosted fields
  - 3D Secure
  - 3DS
  - SCA
  - decline management
  - PayFac gateway
  - terminal integration
  - Softpos
---

Payment gateway integration varies significantly between card-present (in-person) and card-not-present (online) environments. This guide covers practical integration approaches, security requirements, and PayFac-specific considerations across all commerce channels.

---

## Card-Present vs Card-Not-Present Gateways

### The Critical Distinction

Understanding the difference between card-present (CP) and card-not-present (CNP) integration is fundamental to payment architecture:

```
+------------------------------------------------------------------------------+
|          CARD-PRESENT vs CARD-NOT-PRESENT GATEWAY INTEGRATION                |
+------------------------------------------------------------------------------+

CARD-NOT-PRESENT (CNP)                    CARD-PRESENT (CP)
======================                    ==================

CHANNEL:        E-commerce, mobile apps,       Physical retail, restaurants,
                phone orders                   service businesses

CARD DATA       Customer types card            Card physically read by
ENTRY:          number manually                terminal (chip, swipe, tap)

INTEGRATION:    Gateway API/SDK                Terminal firmware OR
                Hosted checkout pages          cloud gateway API

SECURITY:       Tokenization                   P2PE (Point-to-Point Encryption)
                Hosted fields (iFrames)        PCI PTS certified terminals
                SAQ A or SAQ A-EP              Semi-integrated architecture

FRAUD RISK:     HIGHER                         LOWER
                (no card present)              (card + cardholder verified)

INTERCHANGE:    HIGHER rates                   LOWER rates
                (2.3-3.0%+ for credit)         (1.5-2.0% for credit)

CHARGEBACK      HIGHER                         LOWER
RISK:           (cardholder can claim          (chip liability shift to issuer)
                "card not present")

3D SECURE:      Critical for liability shift   Not applicable
                Required in EU (SCA/PSD2)      (physical card verification)

TYPICAL         • Authorize.Net                • Ingenico terminals
SOLUTIONS:      • Stripe Checkout              • Verifone terminals
                • Braintree Web SDK            • Stripe Terminal
                • Adyen Drop-in                • Adyen POS
                • NMI hosted payment page      • Square Terminal

+------------------------------------------------------------------------------+
```

### Why This Matters for PayFacs

When building a PayFac platform, you must consider which commerce channels your sub-merchants will use:

1. **CNP-Only PayFac** (Most common starting point)
   - SaaS platforms, e-commerce platforms, marketplaces
   - Simpler technical integration
   - Higher risk tolerance requirements from sponsor bank
   - Examples: Stripe Connect (initially CNP-only), Shopify Payments

2. **CP-Only PayFac** (Less common, specific verticals)
   - POS systems, restaurant/retail platforms
   - Terminal hardware procurement and management
   - Lower interchange, lower risk
   - Examples: Square, Clover

3. **Omnichannel PayFac** (Advanced, unified commerce)
   - Retailers selling online + in-store
   - Unified reporting across all channels
   - Technical complexity: two integration types
   - Examples: Adyen for Platforms, Stripe Terminal + Connect

### Integration Complexity Comparison

| Aspect | Card-Not-Present | Card-Present |
|--------|------------------|--------------|
| **Development Time** | 2-4 weeks for basic integration | 4-12 weeks (hardware procurement + testing) |
| **Technical Complexity** | Moderate (API integration, hosted fields) | Higher (terminal SDKs, firmware, semi-integration) |
| **Hardware Required** | None | Payment terminals ($200-$800 each) |
| **PCI Compliance** | SAQ A (22 questions) or A-EP (181 questions) | SAQ B or C (varies by architecture) |
| **Testing** | Sandbox APIs, test card numbers | Physical test terminals, test cards |
| **Ongoing Maintenance** | API updates, SDKs | Terminal firmware updates, hardware replacements |

---

## Card-Present Integration Deep Dive

### Terminal Architecture Options

When integrating card-present payments, there are two primary architectural approaches:

#### Option 1: Traditional Terminal Firmware

```
+------------------------------------------------------------------------------+
|                    TRADITIONAL TERMINAL ARCHITECTURE                          |
+------------------------------------------------------------------------------+

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

EXAMPLES: Ingenico, Verifone, PAX standalone terminals

PROS:
✓ Works offline (store-and-forward)
✓ No cloud dependency
✓ Battle-tested, reliable
✓ Lower PCI scope for merchant

CONS:
✗ Firmware updates slow/complex
✗ Limited features (constrained by hardware)
✗ Terminal-specific development
✗ Hard to unify with online channels
✗ Merchant must manage terminal fleet

+------------------------------------------------------------------------------+
```

#### Option 2: Cloud Gateway API (Smart Terminals)

```
+------------------------------------------------------------------------------+
|                      MODERN CLOUD GATEWAY API                                 |
+------------------------------------------------------------------------------+

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

EXAMPLES: Stripe Terminal, Square Terminal, Adyen POS

PROS:
✓ Rich features (inventory, CRM, analytics)
✓ Fast updates (deploy to cloud)
✓ Omnichannel unified
✓ Lower terminal cost (commodity hardware)
✓ Centralized fleet management

CONS:
✗ Internet required
✗ Cloud outage = all terminals down
✗ Latency considerations
✗ Higher PCI scope for platform

+------------------------------------------------------------------------------+
```

### P2PE (Point-to-Point Encryption)

Card-present security relies on P2PE to protect card data from the moment it's read:

```
+------------------------------------------------------------------------------+
|                   P2PE ENCRYPTION FLOW                                        |
+------------------------------------------------------------------------------+

Customer taps/inserts card
         │
         ▼
┌──────────────────────────────────────────┐
│    TERMINAL CARD READER                   │
│                                          │
│    Card data encrypted IMMEDIATELY       │
│    with unique hardware key              │
│                                          │
│    Plain text card data NEVER            │
│    available to terminal software        │
└──────────────────────────────────────────┘
         │
         │ Encrypted blob sent to processor
         ▼
┌──────────────────────────────────────────┐
│           PROCESSOR HSM                   │
│    (Hardware Security Module)            │
│                                          │
│    ONLY entity that can decrypt          │
│    card data using secure keys           │
└──────────────────────────────────────────┘

BENEFIT FOR PAYFAC PLATFORM:
• Card data never touches your servers in plain text
• Reduced PCI scope (SAQ P2PE-HW)
• Merchant/sub-merchant protected from breaches
• Hardware tamper-resistant

REQUIREMENT:
• PCI PTS certified terminals (physical security)
• P2PE validated solution (encryption + key management)

+------------------------------------------------------------------------------+
```

### Semi-Integrated Architecture

For POS software providers and PayFac platforms, semi-integrated architecture is the recommended approach:

```
+------------------------------------------------------------------------------+
|                    SEMI-INTEGRATED POS ARCHITECTURE                           |
+------------------------------------------------------------------------------+

┌──────────────────────────────────────────┐
│         POS SOFTWARE                      │
│      (Your application / platform)       │
│                                          │
│  • Inventory management                  │
│  • Employee management                   │
│  • Reporting / analytics                 │
│  • Customer data (non-payment)           │
│                                          │
│  NO ACCESS TO CARD DATA                  │
└──────────────────────────────────────────┘
         │
         │ API call: "Charge $50.00"
         ▼
┌──────────────────────────────────────────┐
│       PAYMENT TERMINAL                    │
│      (Separate device)                   │
│                                          │
│  • Prompts customer                      │
│  • Reads card (P2PE encrypted)           │
│  • Sends to gateway/processor            │
│  • Returns approval/decline              │
│                                          │
│  Card data ISOLATED                      │
└──────────────────────────────────────────┘

COMMUNICATION: USB, Bluetooth, or network connection
PROTOCOL: Terminal API (vendor-specific SDK)

EXAMPLES:
• Ingenico Telium API
• Verifone VeriShield SDK
• PAX Store integration
• Stripe Terminal SDK

PCI BENEFIT:
• POS software out of scope
• Terminal handles card security
• Easier validation (SAQ B vs SAQ D)

+------------------------------------------------------------------------------+
```

---

## PayFac Considerations: CNP vs CP

### Platform Decision Framework

When building a PayFac platform, choosing between CNP, CP, or omnichannel impacts:

1. **SPONSOR BANK REQUIREMENTS**
   - CNP platforms: Higher risk, more stringent underwriting
   - CP platforms: Lower risk, easier approval
   - Omnichannel: Combined risk assessment

2. **TECHNICAL COMPLEXITY**
   - CNP: API integration only
   - CP: Terminal procurement, firmware, SDKs, logistics
   - Omnichannel: Unified architecture challenge

3. **ECONOMICS**
   - CNP: Higher interchange (worse economics), but simpler
   - CP: Lower interchange (better economics), but hardware costs
   - Omnichannel: Blended rates, most complexity

4. **MARKET OPPORTUNITY**
   - CNP: SaaS, e-commerce, digital services
   - CP: Retail, restaurants, service businesses
   - Omnichannel: Retailers expanding online or online brands opening physical stores

5. **UNDERWRITING**
   - CNP merchants: Higher risk categories
   - CP merchants: Generally lower risk
   - Sub-merchant MCC may determine eligibility

### Hybrid Architecture Example

Many PayFacs start CNP-only, add CP later:

```
+------------------------------------------------------------------------------+
|                    HYBRID PAYFAC ARCHITECTURE                                 |
+------------------------------------------------------------------------------+

Phase 1: CNP Only
─────────────────
Stripe/Adyen API → CNP transactions → Fast launch

Phase 2: Add CP
─────────────────
Same provider's terminal solution → Unified platform
OR
NMI (CNP) + separate CP provider → More complexity

EXAMPLE: Shopify Payments
• Started: CNP only (online stores)
• Added: Shopify POS hardware (card-present)
• Result: Omnichannel unified commerce

TECHNICAL CHALLENGE:
• Two different integration patterns
• Unified reporting across channels
• Reconciliation complexity
• Terminal logistics and support

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

#### Authorize.Net

- **Founded:** 1996
- **Ownership:** Visa Inc. (acquired 2010)
- **Merchants:** ~500,000
- **Distribution:** Direct and through resellers

| Pricing Option | Monthly Fee | Transaction Fee |
|----------------|-------------|-----------------|
| Gateway Only | $25 | $0.10 |
| All-in-One (w/ processing) | $25 | 2.9% + $0.30 |

#### NMI (Network Merchants, Inc.)

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
   [ISO](/payment-ecosystem/industry-players/isos) "A"       ISO "B"     Processor    PayFac "X"
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

#### Spreedly

- PSP Connections: 240+
- Growth: 27% YoY transaction volume increase
- Model: Gateway aggregation + token orchestration

#### Primer.io

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
• TRA (Transaction Risk Analysis): under €500 with low fraud rate
• Low-Value: Transactions under €30
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

### PayFac 3DS Considerations

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
   Interchange: $100 × 1.80% + $0.10 = $1.90
   Assessment:  $100 × 0.14% = $0.14
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

#### Option 1: Build Proprietary

- Full control and differentiation
- Cost: $millions in development + ongoing maintenance
- Timeline: 12-24+ months
- Best for: Large platforms with unique requirements

#### Option 2: White-Label Gateway (NMI)

- Fast launch, lower cost
- Less differentiation
- Choose your own processor(s)
- Best for: PayFacs wanting processor flexibility

#### Option 3: Integrated Platform (Stripe Connect / Adyen for Platforms)

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

*Previous Topic: [Payment Processors](/payment-ecosystem/industry-players/payment-processors)*

*Next Topic: [Acquiring Banks](/payment-ecosystem/industry-players/acquiring-banks/overview)*

---

## Related Topics

| Topic | Description |
|-------|-------------|
| [The Four-Party Model](/payment-ecosystem/fundamentals/four-party-model) | Interchange economics and fee structures |
| [Card Network Role](/payment-ecosystem/fundamentals/card-network-role) | Network assessments and CP/CNP distinction |
| Transaction Lifecycle | Authorization, settlement, and chargebacks |
| Debit Networks & Routing | PINless routing through gateway |
| [Payment Processors](/payment-ecosystem/industry-players/payment-processors) | Gateway vs processor distinction |
| [Acquiring Banks](/payment-ecosystem/industry-players/acquiring-banks/overview) | Settlement and sponsor bank relationships |
| [ISOs](/payment-ecosystem/industry-players/isos) | White-label gateway distribution |
| [ISVs](/payment-ecosystem/industry-players/isvs) | PayFac model and embedded payments |
