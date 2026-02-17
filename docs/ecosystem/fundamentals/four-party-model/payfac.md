---
title: "Payment Facilitator Model Explained | PayFac vs Traditional Acquiring"
description: "PayFac model explained: instant sub-merchant onboarding via master MID, sponsor bank relationships, first-line chargeback liability. Capital requirements and risk management guide."
sidebar_position: 5
sidebar_label: "PayFac Position"
slug: payfac
keywords:
  - payment facilitator
  - payfac model
  - payment facilitator vs ISO
  - sub-merchant onboarding
  - sponsor bank
  - master merchant account
---

# What Is a PayFac? Payment Facilitator Model Explained

> **Last Updated:** 2025-12-18
>
> **Status:** Complete

**What is a payment facilitator (PayFac)?** A payment facilitator is a company that acts as a master merchant, enabling **sub-merchants** to accept card payments without obtaining individual merchant accounts. Instead of each business applying directly to an acquiring bank (1-4 week process), the PayFac onboards sub-merchants **instantly** under its **master merchant account (MID)** through a **sponsor bank relationship**. The PayFac assumes **first-line chargeback liability** for all sub-merchants and handles underwriting, compliance, and risk management.

**How PayFacs work:**
1. **Sponsor bank** provides the master merchant account and regulatory licenses
2. **PayFac** onboards sub-merchants using simplified underwriting
3. **Sub-merchants** process payments under PayFac's master MID
4. **PayFac** splits settlement to sub-merchant bank accounts
5. **PayFac** bears risk if sub-merchants default on chargebacks

**Example PayFacs:** Stripe, Square, PayPal, Shopify Payments

**Key requirements:**
- $500K - $5M in capital reserves
- Sponsor bank partnership
- PCI DSS Level 1 compliance
- State money transmitter licenses (varies)
- Card network registration (Visa, Mastercard)

---

## PayFac vs Traditional Merchant Acquiring: Quick Comparison

| Aspect | Traditional Acquiring | Payment Facilitator (PayFac) |
|--------|---------------------|---------------------------|
| **Onboarding time** | 1-4 weeks per merchant | Minutes to hours |
| **Who underwrites** | Acquiring bank | PayFac (simplified) |
| **Merchant account** | Individual MID per merchant | Master MID + sub-merchant IDs |
| **Application process** | Extensive documentation | Minimal (name, EIN, bank account) |
| **Chargeback liability** | Direct to merchant → acquirer | Sub-merchant → PayFac → sponsor bank |
| **Monthly fees** | $10-$50 per merchant | Often $0 (volume-based pricing) |
| **Setup fees** | $0-$500 per merchant | $0 (PayFac absorbs) |
| **Risk reserves** | Merchant holds reserves | PayFac holds portfolio reserves |
| **Compliance burden** | Merchant responsible | PayFac responsible |
| **Capital requirements** | Minimal for merchant | $500K-$5M for PayFac |
| **Best for** | Established businesses, high volume | Small businesses, marketplaces, SaaS platforms |
| **Pricing** | Interchange-plus (transparent) | Often flat rate (simple but higher) |
| **Control** | Merchant has direct bank relationship | PayFac controls relationship |

**When to use PayFac model:**
- ✅ Onboarding hundreds/thousands of small merchants
- ✅ Software platform with embedded payments
- ✅ Marketplace with many sellers
- ✅ Need instant merchant activation
- ❌ Small number of high-volume merchants (traditional better)
- ❌ Can't meet capital requirements ($500K+)

---

## Why This Model Matters for PayFac

Understanding the [Four-Party Model](./index.md) is critical for Payment Facilitators because:

1. **Risk Position**: PayFacs sit in the acquirer's position, inheriting merchant risk
2. **Fee Economics**: PayFacs must understand [interchange](./fee-breakdown.md) to price their services
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
| **Identity verification** | Owner KYC/KYB (see [Onboarding module](/onboarding/kyc-kyb/kyc-requirements) when available) |
| **Bank account verification** | Micro-deposits or instant verification |

:::info Learn More
For detailed sub-merchant underwriting processes, see the [Merchant Onboarding module](/onboarding/underwriting/fundamentals) (coming soon).
:::

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

PayFacs layer fees on top of interchange (for deeper fee analysis, see [Fee Breakdown](./fee-breakdown.md)):

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

## PayFac Success Metrics: What Sponsor Banks Track

Your sponsor bank monitors these key performance indicators continuously:

### Critical Risk Metrics

| Metric | Acceptable Range | Warning Level | Termination Risk |
|--------|-----------------|---------------|------------------|
| **Portfolio chargeback rate** | &lt;0.50% | 0.50%-0.75% | &gt;1.0% |
| **Individual sub-merchant CB rate** | &lt;1.0% | 1.0%-1.5% | &gt;2.0% |
| **Fraud rate** | &lt;0.25% | 0.25%-0.50% | &gt;0.75% |
| **Excessive credits rate** | &lt;5% of volume | 5%-10% | &gt;15% |
| **Refund rate** | &lt;10% | 10%-20% | &gt;30% |
| **Reserve coverage** | 5-10% of monthly volume | Below 5% | Below 3% |

### Financial Health Metrics

| Metric | Minimum | Preferred |
|--------|---------|-----------|
| **Capital reserves** | $500K | $2M+ |
| **Months of runway** | 12 months | 24+ months |
| **Debt-to-equity ratio** | &lt;3:1 | &lt;1:1 |
| **Revenue concentration** | &lt;20% from single sub-merchant | &lt;10% |

**Common reasons PayFacs lose sponsor relationships:**
- Excessive fraud or chargebacks (most common)
- Prohibited business activity by sub-merchants
- Capital depletion or bankruptcy
- Regulatory violations (AML/KYC failures)

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

:::tip Related Topics
- Fraud Prevention - Detecting and preventing fraudulent transactions (coming soon)
- Chargeback Management - Managing disputes and representment (coming soon)
:::

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
- **[Four-Party Model Overview](./index.md)** - Core concepts and party roles
- **[Transaction Flows](./transaction-flows.md)** - Authorization, capture, settlement
- **[Fee Breakdown](./fee-breakdown.md)** - Where fees go and why (essential for PayFac pricing)
- **[Interchange Optimization](./optimization.md)** - Reducing costs through data
- **[Self-Assessment Quiz](./quiz.md)** - Test your understanding

**Deep Dives (Coming Soon):**
- **Merchant Onboarding** - KYC/KYB processes and underwriting for PayFacs
- **Risk & Compliance** - Chargeback management, fraud prevention, AML/BSA
- **Platform Architecture** - Building PayFac infrastructure and ledger systems

---

*Continue reading: [Self-Assessment Quiz](./quiz.md)*
