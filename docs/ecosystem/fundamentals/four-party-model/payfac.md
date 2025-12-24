---
title: "PayFac Position in the Four-Party Model"
description: "Understanding how Payment Facilitators fit into the four-party model structure"
sidebar_position: 5
sidebar_label: "PayFac Position"
slug: payfac
keywords:
  - payment facilitator
  - payfac
  - sponsor bank
  - sub-merchant
  - master merchant account
---

# PayFac Position in the Four-Party Model

> **Last Updated:** 2025-12-18
>
> **Status:** Complete
>
> This document explains how Payment Facilitators (PayFacs) fit into the traditional four-party model.

---

## Why This Model Matters for PayFac

Understanding the Four-Party Model is critical for Payment Facilitators because:

1. **Risk Position**: PayFacs sit in the acquirer's position, inheriting merchant risk
2. **Fee Economics**: PayFacs must understand interchange to price their services
3. **Liability Chain**: When sub-merchants have chargebacks, the PayFac is liable
4. **Network Rules**: All parties must comply with Visa/Mastercard rules

---

## PayFac Position in the Model

```
Traditional Model:                    PayFac Model:
─────────────────                    ─────────────────

Merchant ◀──▶ Acquirer               Sub-Merchant ◀──▶ PayFac ◀──▶ Sponsor Bank
                                                        │
                                                        │ (PayFac assumes
                                                        │  acquirer-like
                                                        │  responsibilities)
                                                        ▼
                                                   Master Merchant
                                                      Account
```

### Detailed PayFac Model

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CARD NETWORK                                  │
│                        (Visa / Mastercard)                              │
└─────────────────────────────────────────────────────────────────────────┘
                   ▲                               ▲
                   │                               │
                   │                               │
          ┌────────┴────────┐             ┌────────┴────────┐
          │  ISSUING BANK   │             │  SPONSOR BANK   │
          │                 │             │   (Acquirer)    │
          │ - Issues cards  │             │                 │
          │ - Approves txns │             │ - Provides MID  │
          │ - Bears credit  │             │ - Holds licenses│
          │   risk          │             │ - Final risk    │
          └────────┬────────┘             └────────┬────────┘
                   │                               │
                   │                               │
                   │                               ▼
                   │                      ┌────────────────────┐
                   │                      │      PAYFAC        │
                   │                      │                    │
                   │                      │ - Onboards subs    │
                   │                      │ - First chargeback │
                   │                      │   liability        │
                   │                      │ - Compliance       │
                   │                      │ - Fraud prevention │
                   │                      └────────┬───────────┘
                   │                               │
                   │                               │
                   │                               ▼
                   │                      ┌────────────────────┐
                   │                      │   SUB-MERCHANTS    │
                   │                      │                    │
                   │                      │ • Business A       │
                   │                      │ • Business B       │
                   │                      │ • Business C       │
                   │                      └────────┬───────────┘
                   │                               │
                   ▼                               ▼
          ┌─────────────────┐             ┌─────────────────┐
          │   CARDHOLDER    │────────────▶│  CUSTOMERS      │
          │                 │  purchases  │  (of sub-       │
          │                 │             │   merchants)    │
          └─────────────────┘             └─────────────────┘
```

---

## Sponsor Bank Relationship

**Critical concept:** PayFacs must have a **sponsor bank relationship**. The sponsor bank:

- Provides the **master merchant account**
- Holds **regulatory licenses** (state MTLs, federal registration)
- May hold **reserves** from the PayFac (5-10% of volume typical)
- Can **terminate the relationship** if risk thresholds exceeded
- Bears **ultimate regulatory responsibility**

### Examples of Sponsor Banks

Common sponsor banks for PayFacs include:

| Sponsor Bank | Notable Features |
|--------------|------------------|
| **Wells Fargo** | Large scale, established programs |
| **Fifth Third Bank** | Strong PayFac program |
| **Evolve Bank & Trust** | Fintech-focused |
| **Cross River Bank** | Innovation-focused |
| **BBVA (now PNC)** | International reach |
| **Celtic Bank** | Alternative lending focus |

### Sponsor Bank Requirements

Sponsor banks typically require:

```
┌────────────────────────────────────────────────────────────────────────┐
│                    SPONSOR BANK REQUIREMENTS                           │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Financial:                                                            │
│  • Minimum capital/reserves ($500K - $5M+)                             │
│  • Financial statements and projections                               │
│  • Proof of operational funding                                       │
│                                                                        │
│  Operational:                                                          │
│  • Underwriting procedures documented                                 │
│  • Fraud prevention systems in place                                  │
│  • Compliance monitoring capabilities                                 │
│  • Reserve management system                                          │
│                                                                        │
│  Legal/Compliance:                                                     │
│  • AML/KYC program documented                                         │
│  • BSA compliance officer assigned                                    │
│  • State MTL licenses (if applicable)                                 │
│  • Legal entity structure (often LLC or corporation)                  │
│                                                                        │
│  Technical:                                                            │
│  • Integration with sponsor's systems                                 │
│  • PCI DSS Level 1 compliance                                         │
│  • Data security controls                                             │
│  • Disaster recovery/business continuity                              │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## PayFac Responsibilities

As a PayFac, you assume acquirer-like responsibilities:

| Responsibility | Description |
|----------------|-------------|
| **Underwriting** | Vetting sub-merchants before onboarding |
| **First-line chargeback liability** | You pay chargebacks if sub-merchant can't |
| **Reserve management** | Holding funds from risky sub-merchants |
| **Compliance monitoring** | Ensuring sub-merchants follow network rules |
| **Fraud prevention** | Detecting and preventing fraudulent transactions |

**Key Point:** If a sub-merchant processes fraudulent transactions and disappears, the PayFac (not the sponsor bank) absorbs the chargeback losses first.

### Responsibility Flow

```
                         RISK CASCADE

┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  Sub-Merchant                                                          │
│  └── First responsible for transaction validity                       │
│      └── If can't pay chargeback...                                   │
│                                                                        │
│          PayFac                                                        │
│          └── First-line liability (from reserves or capital)          │
│              └── If PayFac can't cover...                             │
│                                                                        │
│                  Sponsor Bank                                          │
│                  └── Ultimate liability (from PayFac reserves)        │
│                      └── If all else fails...                         │
│                                                                        │
│                          Card Network                                  │
│                          └── Can fine/terminate relationship          │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Master Merchant Account

The PayFac operates under a **master merchant account** (MID) provided by the sponsor bank:

### Traditional vs PayFac Model

**Traditional Model:**
```
Each merchant has individual MID:
  Merchant A → MID-001 → Acquirer
  Merchant B → MID-002 → Acquirer
  Merchant C → MID-003 → Acquirer

Each merchant:
  • Applies directly to acquirer
  • Underwritten individually
  • Has direct relationship with acquirer
  • Settlement directly to their account
```

**PayFac Model:**
```
All sub-merchants under one master MID:
  PayFac Master MID-1000 → Sponsor Bank
    ├── Sub-merchant A (identifier: 1000-A)
    ├── Sub-merchant B (identifier: 1000-B)
    └── Sub-merchant C (identifier: 1000-C)

PayFac:
  • Onboards sub-merchants instantly
  • Underwrites with own criteria
  • Aggregates all volume
  • Splits settlement to sub-merchant accounts
```

### Benefits and Risks

**Benefits:**

- **Fast onboarding**: Sub-merchants onboarded in minutes, not weeks
- **Lower barriers**: Smaller businesses can accept cards easily
- **Simplified integration**: One API for all payment needs
- **Flexible underwriting**: PayFac sets own risk parameters (within limits)

**Risks:**

- **Aggregated risk**: One bad sub-merchant can affect entire portfolio
- **Chargeback liability**: PayFac liable for all sub-merchant chargebacks
- **Network sanctions**: Excessive fraud can terminate sponsor relationship
- **Reserve requirements**: Must hold capital for potential losses

---

## Sub-Merchant Considerations

### Sub-Merchant Identification

Networks require sub-merchant identification:

```
Transaction metadata must include:
  • Sub-merchant name
  • Sub-merchant address
  • Sub-merchant ID/DBA
  • PayFac name (descriptor)
  • Contact information

Shows on cardholder statement as:
  "SUB-MERCHANT NAME * PAYFAC NAME"
```

### Sub-Merchant Underwriting

PayFacs must perform underwriting, typically including:

| Check | Purpose |
|-------|---------|
| **Business verification** | Ensure legitimate business |
| **Prohibited business** | Screen against restricted MCCs |
| **Credit check** | Assess financial stability (optional) |
| **Watchlist screening** | OFAC, PEP, sanctioned entities |
| **Identity verification** | Owner KYC/KYB |
| **Bank account verification** | Micro-deposits or instant verification |

### Sub-Merchant Risk Tiers

PayFacs often categorize sub-merchants by risk:

| Risk Tier | Characteristics | Controls |
|-----------|----------------|----------|
| **Low risk** | Established business, low chargebacks, card-present | Fast approval, minimal reserves |
| **Medium risk** | New business, CNP, moderate chargebacks | Standard approval, some reserves |
| **High risk** | High chargeback industries, large tickets | Enhanced review, significant reserves, holds |
| **Prohibited** | Adult, gambling (unless licensed), illegal | Auto-decline |

---

## Economics for PayFacs

### Fee Structure

PayFacs layer fees on top of interchange:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      PAYFAC FEE STRUCTURE                              │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  $100 transaction:                                                     │
│                                                                        │
│  Cardholder pays:                      $100.00                         │
│                                                                        │
│  Network fees (interchange + assessment): $1.96  (1.96%)              │
│  Sponsor bank markup:                     $0.20  (0.20%)              │
│  PayFac margin:                           $0.34  (0.34%)              │
│  ────────────────────────────────────────────────────────────         │
│  Total fees:                              $2.50  (2.50%)              │
│                                                                        │
│  Sub-merchant receives:                   $97.50                       │
│                                                                        │
│  PayFac keeps:                            $0.34                        │
│    (minus operational costs, reserves, chargebacks, etc.)             │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### PayFac Cost Considerations

PayFacs must account for:

- **Sponsor bank fees**: Per-transaction, monthly, annual fees
- **Network fees**: Registration, assessment, network access
- **Operational costs**: Underwriting, support, compliance staff
- **Fraud/chargeback losses**: Not all chargebacks are recoverable
- **Reserve requirements**: Capital held by sponsor bank
- **Technology costs**: Platform, fraud tools, compliance systems
- **Regulatory costs**: MTL licenses, audits, legal

**Reality check:** PayFac margins are often 0.2% - 0.5% of volume, requiring significant scale to be profitable.

---

## Network Registration Requirements

PayFacs must register with card networks:

### Visa PayFac Program

**Requirements:**
- Sponsor bank in good standing
- PCI DSS Level 1 compliant
- Register each PayFac with Visa
- $5,000 - $50,000 annual registration fee (volume-dependent)
- Quarterly reporting to sponsor bank

**Volume tiers:**
- Tier 1: Less than $1M/month
- Tier 2: $1M - $10M/month
- Tier 3: Over $10M/month

### Mastercard PayFac Program

**Requirements:**
- Similar to Visa requirements
- Registration through sponsor bank
- Annual fees based on volume
- Compliance monitoring

### Key Differences from Traditional ISOs

| Aspect | ISO | PayFac |
|--------|-----|--------|
| **Merchant accounts** | Individual MIDs | Master MID + sub-merchants |
| **Onboarding speed** | Days to weeks | Minutes to hours |
| **Liability** | Minimal (referral) | First-line for chargebacks |
| **Registration** | Not required | Required with networks |
| **Capital requirements** | Low | High ($500K+) |

---

## Reserve Management

Sponsor banks typically require PayFacs to maintain reserves:

### Types of Reserves

```
┌────────────────────────────────────────────────────────────────────────┐
│                         RESERVE TYPES                                  │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Fixed Reserve:                                                        │
│  • Set dollar amount held by sponsor bank                              │
│  • Typical: $100K - $5M based on volume                                │
│  • Covers chargeback exposure                                          │
│                                                                        │
│  Rolling Reserve:                                                      │
│  • Percentage of daily volume held for period                          │
│  • Typical: 5-10% held for 90-180 days                                 │
│  • Releases on rolling basis                                           │
│                                                                        │
│  Holdback Reserve:                                                     │
│  • Sub-merchant funds held for risk mitigation                         │
│  • Typical: 5-30% of sub-merchant settlement                           │
│  • For high-risk or new sub-merchants                                  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Reserve Calculation Example

**Scenario:** PayFac processing $10M/month with 0.5% chargeback rate

```
Fixed reserve required:
  Monthly volume:          $10,000,000
  Expected chargebacks:    $50,000/month (0.5%)
  Reserve multiplier:      6 months exposure
  ────────────────────────────────────
  Fixed reserve:           $300,000

Rolling reserve:
  Daily volume:            $333,333 ($10M / 30 days)
  Rolling %:               10%
  Hold period:             180 days
  ────────────────────────────────────
  Rolling reserve:         ~$6M held at any time
```

---

## Compliance Requirements

PayFacs must maintain comprehensive compliance programs:

### Key Compliance Areas

| Area | Requirements |
|------|-------------|
| **PCI DSS** | Level 1 compliance (highest level) |
| **AML/BSA** | Anti-money laundering program |
| **KYC/KYB** | Sub-merchant identity verification |
| **OFAC** | Sanctions screening |
| **State MTL** | Money transmitter licenses (varies by state) |
| **Network rules** | Visa/Mastercard compliance |

### Ongoing Monitoring

PayFacs must continuously monitor:

- Chargeback rates by sub-merchant
- Fraud patterns and velocity
- Refund rates
- Transaction patterns
- Prohibited business activity
- Compliance with Terms of Service

---

## Key Takeaways

1. **PayFacs act as acquirers**: Take on acquirer-like responsibilities with sponsor bank backing

2. **First-line liability**: PayFacs absorb chargeback losses before sponsor bank

3. **Master MID model**: All sub-merchants under one merchant account

4. **Fast onboarding**: Sub-merchants onboarded instantly vs weeks traditionally

5. **Significant capital required**: $500K - $5M+ needed for reserves and operations

6. **Network registration**: Required registration with Visa/Mastercard

7. **Thin margins**: 0.2% - 0.5% margins require scale to be profitable

8. **Compliance intensive**: PCI, AML, KYC, state licensing all required

9. **Risk aggregation**: One bad sub-merchant can jeopardize entire portfolio

10. **Sponsor relationship critical**: Losing sponsor bank terminates entire PayFac operation

---

## Related Topics

**Four-Party Model Series:**
- **[Four-Party Model Overview](/ecosystem/fundamentals/four-party-model/)** - Core concepts and party roles
- **[Transaction Flows](/ecosystem/fundamentals/four-party-model/transaction-flows)** - Authorization, capture, settlement
- **[Fee Breakdown](/ecosystem/fundamentals/four-party-model/fee-breakdown)** - Where fees go and why
- **[Interchange Optimization](/ecosystem/fundamentals/four-party-model/optimization)** - Reducing costs through data
- **[Self-Assessment Quiz](/ecosystem/fundamentals/four-party-model/quiz)** - Test your understanding

**Deep Dives:**
- **Merchant Onboarding** (Coming soon) - KYC/KYB processes for PayFacs
- **Risk & Compliance** (Coming soon) - Chargeback management, fraud prevention
- **Platform Architecture** (Coming soon) - Building PayFac infrastructure

---

*Continue reading: [Self-Assessment Quiz](/ecosystem/fundamentals/four-party-model/quiz)*
