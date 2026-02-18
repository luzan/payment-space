---
title: "Liability Structures | ISO vs ISV vs PayFac"
description: "ISO vs ISV vs PayFac liability comparison: chargeback responsibility, fraud exposure, reserve requirements, and risk allocation models."
sidebar_position: 2
sidebar_label: "Liability Structures"
keywords:
  - ISO chargeback liability
  - PayFac chargeback liability
  - ISV payment liability
  - PayFac risk allocation
  - payment partnership liability
  - sub-agent liability
  - merchant reserve requirements
  - ISO reserve requirements
  - payment facilitator liability
  - PFaaS liability structure
  - ISO vs PayFac liability
  - sub-merchant chargeback recovery
  - ISO fraud exposure
  - PayFac first-line liability
---

# Liability Structures

> **Last Updated:** 2025-02-17
> **Status:** Complete

Understanding how liability flows across payment entities is critical for partnership decisions, contract negotiations, and risk management strategies. This guide compares [chargeback](/glossary#chargeback) liability, fraud exposure, and reserve requirements across ISO, ISV, and PayFac models.

## Quick Reference

| Liability Type | ISO | ISV (Non-PayFac) | PayFac |
|----------------|-----|------------------|--------|
| **Chargeback Loss** | 0% | 0-100% (by contract) | 100% first-line |
| **Fraud Loss** | 0% | Contractual | 100% |
| **Network Fines** | Indirect | Indirect | Direct |
| **Reserve Obligation** | None | None | Yes |
| **MATCH Listing** | Principal only | Rare | Common |

## Chargeback Liability

### How Chargebacks Flow by Model

The chargeback liability chain differs dramatically between payment models:

```mermaid
flowchart TB
    subgraph ISO_Model["ISO Model"]
        direction TB
        I_CB[Chargeback Occurs]
        I_BANK[Acquiring Bank]
        I_ISO[ISO]
        I_MERCH[Merchant]

        I_CB --> I_BANK
        I_BANK -->|"Debits"| I_MERCH
        I_ISO -.->|"No liability"| I_BANK
    end

    subgraph PayFac_Model["PayFac Model"]
        direction TB
        P_CB[Chargeback Occurs]
        P_BANK[Sponsor Bank]
        P_PAYFAC[PayFac]
        P_SUBMERCH[Sub-Merchant]

        P_CB --> P_BANK
        P_BANK -->|"Debits"| P_PAYFAC
        P_PAYFAC -->|"Attempts recovery"| P_SUBMERCH
        P_PAYFAC -.->|"Absorbs if unrecoverable"| P_BANK
    end

    style I_ISO fill:#90EE90,color:#000
    style P_PAYFAC fill:#FFB6C1,color:#000
```

### ISO: Pass-Through Liability

**Do ISOs have chargeback liability?** ISOs have **zero direct chargeback liability** in the standard model:

| Stage | ISO Role | Financial Impact |
|-------|----------|------------------|
| Chargeback received | None - goes to acquirer | $0 |
| Representment | May assist merchant | $0 |
| Loss realization | Merchant/acquirer absorbs | $0 |
| MATCH listing | Only if ISO principal involved | Reputational |

**Why ISOs Escape Liability:**
- Merchants have individual MIDs with the acquirer
- ISOs are sales/service agents, not payment principals
- Acquirer/processor holds the merchant relationship
- ISO agreement typically excludes financial liability

**Exceptions:**
- ISO provided false information during onboarding
- ISO principal engaged in fraud
- Contractual indemnification clauses (rare)

### ISV: Variable Liability by Model

ISV liability depends entirely on how payments are integrated:

| Integration Model | Chargeback Liability | Why |
|-------------------|---------------------|-----|
| **Referral** | 0% | Not a payment party |
| **API Integration** | 0% | Processor holds merchant relationship |
| **PFaaS (Connected)** | 0-50% | Shared per PFaaS agreement |
| **PayFac** | 100% | Full PayFac liability |

**PFaaS Liability Nuances:**

```mermaid
flowchart LR
    subgraph PFaaS["PayFac-as-a-Service Model"]
        ISV[ISV Platform]
        PFAAS[PFaaS Provider<br/>e.g., Stripe Connect]
        SUBM[Sub-Merchant]
    end

    subgraph Liability["Liability Split"]
        ISV_L[ISV: 0-50%]
        PFAAS_L[Provider: 50-100%]
    end

    SUBM -->|"Chargeback"| PFAAS
    PFAAS -->|"Per agreement"| ISV
    PFAAS -->|"Remainder"| PFAAS_L
    ISV -->|"If contracted"| ISV_L
```

**Typical PFaaS Liability Structures:**

| Provider | ISV Liability | Notes |
|----------|---------------|-------|
| Stripe Connect (Standard) | 0% | Stripe handles all |
| Stripe Connect (Custom) | Configurable | ISV can take liability for better economics |
| Adyen for Platforms | Negotiated | Depends on contract tier |
| Finix | Configurable | Platform decides |

### PayFac: Full First-Line Liability

PayFacs bear **complete financial responsibility** for sub-merchant chargebacks:

```mermaid
flowchart TB
    subgraph PayFac_Liability["PayFac Chargeback Flow"]
        CB[Chargeback: $500]
        BANK[Sponsor Bank<br/>Debits PayFac]
        PAYFAC[PayFac<br/>Seeks recovery]

        subgraph Recovery["Recovery Attempt"]
            R1[Sub-merchant account]
            R2[Reserve funds]
            R3[Direct collection]
        end

        LOSS[Unrecovered Loss<br/>PayFac absorbs]
    end

    CB --> BANK
    BANK --> PAYFAC
    PAYFAC --> R1
    R1 -->|"If insufficient"| R2
    R2 -->|"If insufficient"| R3
    R3 -->|"If fails"| LOSS

    style LOSS fill:#FFB6C1,color:#000
```

**PayFac Chargeback Economics:**

| Component | Amount | Responsibility |
|-----------|--------|----------------|
| Transaction amount | $500 | PayFac debited |
| Chargeback fee | $25 | PayFac pays |
| Representment cost | $15 | PayFac pays |
| **Total exposure** | **$540** | PayFac |
| Recovery from sub-merchant | Variable | PayFac attempts |
| **Net loss** | **$0-540** | PayFac absorbs remainder |

## Reserve Requirements

### Reserve Obligations by Entity

| Entity | Reserve Required? | Who Holds Reserves? | Purpose |
|--------|-------------------|---------------------|---------|
| **ISO** | No | N/A | N/A |
| **ISV (Referral)** | No | N/A | N/A |
| **ISV (PFaaS)** | Rarely | PFaaS provider | Provider protection |
| **PayFac** | Yes | PayFac | Sub-merchant losses |

### PayFac Reserve Structure

PayFacs manage reserves at two levels:

```mermaid
flowchart TB
    subgraph Sponsor["Sponsor Bank Requirements"]
        S_RES[PayFac Reserve<br/>at Sponsor Bank]
    end

    subgraph PayFac_Level["PayFac-Level Reserves"]
        P_RES[Sub-Merchant Reserves<br/>Held by PayFac]
    end

    subgraph SubMerch["Sub-Merchant Level"]
        M1[Merchant A Reserve]
        M2[Merchant B Reserve]
        M3[Merchant C Reserve]
    end

    M1 --> P_RES
    M2 --> P_RES
    M3 --> P_RES
    P_RES -->|"Aggregated portion"| S_RES

    style S_RES fill:#FFB6C1,color:#000
    style P_RES fill:#FFE4B5,color:#000
```

**Typical Reserve Cascading:**

| Level | Reserve Held | Typical Amount |
|-------|--------------|----------------|
| Sub-merchant → PayFac | Rolling or fixed | 5-10% of volume |
| PayFac → Sponsor Bank | Corporate reserve | $500K-$5M+ |

### ISO Reserve Considerations

While ISOs don't hold merchant reserves, they may face:

| Scenario | ISO Impact |
|----------|------------|
| Merchant generates losses | ISO residuals may be reduced or clawed back |
| High-risk portfolio | Acquirer may require ISO performance bond |
| Fraudulent merchant referral | ISO may face contractual penalties |

## Fraud Liability

### Fraud Loss Distribution

| Fraud Type | ISO Liability | ISV Liability | PayFac Liability |
|------------|---------------|---------------|------------------|
| **Card testing** | None | Contractual | Full |
| **Friendly fraud** | None | Contractual | Full (via chargeback) |
| **Merchant fraud** | Contractual | None (referral) | Full |
| **Account takeover** | None | Varies | Full |

### PayFac Fraud Exposure

PayFacs face layered fraud exposure:

```mermaid
flowchart TB
    subgraph Fraud_Types["PayFac Fraud Exposure"]
        F1[Transaction Fraud<br/>Unauthorized cards]
        F2[Merchant Fraud<br/>Bust-out, collusion]
        F3[Chargeback Fraud<br/>Friendly fraud]
    end

    subgraph Impact["Financial Impact"]
        I1[Transaction loss]
        I2[Portfolio loss]
        I3[Network fines]
    end

    subgraph Mitigation["Mitigation Tools"]
        M1[Fraud screening]
        M2[Underwriting]
        M3[Monitoring & reserves]
    end

    F1 --> I1
    F2 --> I2
    F3 --> I3

    M1 -.-> F1
    M2 -.-> F2
    M3 -.-> F3
```

## Sub-Agent Liability Cascading

### ISO Hierarchy Liability

In ISO hierarchies, liability flows contractually:

```mermaid
flowchart TB
    subgraph Hierarchy["ISO Hierarchy"]
        BANK[Acquiring Bank]
        MISO[Master ISO]
        SISO[Sub-ISO]
        AGENT[Agent]
        MERCH[Merchant]
    end

    subgraph Contracts["Contractual Liability"]
        C1["Master ISO Agreement<br/>Indemnification clauses"]
        C2["Sub-ISO Agreement<br/>Performance standards"]
        C3["Agent Agreement<br/>Sales conduct"]
    end

    BANK -->|"Holds accountable"| MISO
    MISO -->|"Passes to"| SISO
    SISO -->|"Limited"| AGENT

    C1 --> MISO
    C2 --> SISO
    C3 --> AGENT

    style MISO fill:#FFE4B5,color:#000
    style SISO fill:#FFFACD,color:#000
    style AGENT fill:#90EE90,color:#000
```

**Typical Sub-Agent Contractual Terms:**

| Term | Master ISO | Sub-ISO | Agent |
|------|------------|---------|-------|
| Merchant quality standards | Defined | Accepted | Follows |
| Prohibited MCC liability | Indemnifies bank | Indemnifies master | Limited |
| Residual clawback | On losses | On losses | On commission |
| MATCH reporting | Cooperates | Cooperates | Reported |

### PayFac Sub-Merchant Liability

PayFacs manage sub-merchant liability through:

| Mechanism | Purpose | Implementation |
|-----------|---------|----------------|
| **Reserves** | Cover future losses | Withheld from payouts |
| **Delayed settlement** | Ensure delivery | 1-7 day payout delay |
| **Volume limits** | Control exposure | Per-transaction and daily caps |
| **Merchant agreements** | Legal recourse | Chargeback responsibility clauses |

## Contractual Risk Allocation

### Key Contract Terms by Entity

| Contract Element | ISO Agreement | ISV Agreement | PayFac Agreement |
|------------------|---------------|---------------|------------------|
| **Indemnification** | Limited to misrepresentation | Varies widely | Comprehensive |
| **Loss sharing** | None typically | Negotiated | Full first-loss |
| **Insurance required** | E&O common | Cyber liability | E&O + Cyber + Crime |
| **Termination for losses** | Portfolio performance | N/A | Chargeback thresholds |

### Sample Liability Allocation Matrix

When negotiating partnerships, use this framework:

| Risk Category | Allocate to ISO | Allocate to PayFac | Shared |
|---------------|-----------------|-------------------|--------|
| Merchant misrepresentation | ✓ (if ISO sourced) | ✓ (if PayFac onboarded) | |
| Transaction fraud | | ✓ | |
| Merchant bust-out | | ✓ | ✓ (if early warning missed) |
| Network fines | | ✓ | |
| Compliance violations | ✓ (if caused) | ✓ (baseline) | |

## Self-Assessment Questions

1. Why do ISOs have zero chargeback liability in the standard model?
2. How does PFaaS change liability allocation compared to a direct processor relationship?
3. What happens when a PayFac cannot recover a chargeback from a sub-merchant?
4. Why might a Master ISO include indemnification clauses for sub-ISO merchant quality?
5. How do reserves protect PayFacs from sub-merchant losses?

## Related Topics

- [Compliance Obligations](./compliance-obligations.md) - PCI, AML, network registration by entity
- [Network Program Applicability](./network-program-applicability.md) - VAMP, ECP, MATCH exposure
- [Reserve Management](../monitoring-programs/reserve-management.md) - PayFac reserve strategies
- [Chargeback Lifecycle](../chargebacks/lifecycle.md) - Chargeback processing flow
- [ISOs in the Ecosystem](/ecosystem/industry-players/isos) - ISO business model
- [ISVs in the Ecosystem](/ecosystem/industry-players/isvs) - ISV integration models
- [PayFac Model](/ecosystem/payfac-model/overview) - Payment Facilitator overview
- [Glossary](/glossary) - Chargeback, acquirer, and payment terms

## References

- [Visa Core Rules](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf) - Liability allocation rules
- [Mastercard Rules](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/mastercard-rules.pdf) - Service provider liability
- [ETA Guidelines](https://www.electran.org/) - ISO agreement best practices
