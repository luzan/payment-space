---
title: "Chargeback Lifecycle | Disputes | Risk & Compliance | Payments Mastery"
description: "Complete guide to the chargeback lifecycle: initiation, first chargeback, representment, pre-arbitration, and arbitration with timeframes and deadlines."
sidebar_position: 2
sidebar_label: "Lifecycle"
keywords:
  - chargeback lifecycle
  - dispute process
  - representment
  - pre-arbitration
  - arbitration
  - chargeback timeframes
---

# Chargeback Lifecycle

> **Last Updated:** 2025-02-17
> **Status:** Complete

Understanding the complete chargeback lifecycle is essential for effective dispute management. Each stage has specific timeframes, responsibilities, and decision points.

## Quick Reference

| Stage | Visa Timeframe | Mastercard Timeframe | Who Acts |
|-------|---------------|---------------------|----------|
| Filing Window | 120 days | 120 days | Cardholder |
| First Chargeback | Immediate | Immediate | Issuer |
| Representment | 30 days | 45 days | Merchant |
| Pre-Arbitration | 30 days | 45 days | Issuer |
| Arbitration | 10 days | 45 days | Network |

## Stage 1: Dispute Initiation

The lifecycle begins when a cardholder contacts their issuing bank to dispute a transaction.

```mermaid
flowchart LR
    subgraph Cardholder
        A[Reviews Statement] --> B[Contacts Bank]
        B --> C[Files Dispute]
    end

    subgraph Issuer
        C --> D[Validates Claim]
        D --> E[Creates Chargeback]
    end
```

### Cardholder Dispute Windows

| Network | Standard Disputes | Fraud | Services Not Rendered |
|---------|------------------|-------|----------------------|
| Visa | 120 days | 120 days | 120 days from expected delivery |
| Mastercard | 120 days | 120 days | 120 days from expected delivery |

### Common Dispute Triggers

| Trigger | Percentage | Example |
|---------|------------|---------|
| True Fraud | 30-40% | Stolen card used online |
| Friendly Fraud | 40-50% | Cardholder forgot purchase |
| Merchant Error | 10-20% | Double charge, wrong amount |
| Service Issues | 10-15% | Not received, not as described |

## Stage 2: First Chargeback

Once the issuer validates the dispute, they create a formal chargeback through the card network.

```mermaid
sequenceDiagram
    participant IS as Issuing Bank
    participant NW as Card Network
    participant AC as Acquirer
    participant PF as PayFac
    participant ME as Merchant

    IS->>NW: Create Chargeback
    Note over IS,NW: Reason Code + Amount
    NW->>AC: Route Chargeback
    AC->>PF: Forward to PayFac
    PF->>ME: Notify Merchant
    Note over PF,ME: Funds Debited
```

### What Happens Financially

| Action | Amount | Timing |
|--------|--------|--------|
| Transaction Reversed | Original amount | Immediate |
| Chargeback Fee | $15-100 | Immediate |
| Reserve Adjustment | Varies | If applicable |

### PayFac First Chargeback Actions

1. **Debit Sub-Merchant** - Immediately debit transaction amount + fee
2. **Notify Merchant** - Send chargeback notification with deadline
3. **Start Timer** - Track response deadline
4. **Request Evidence** - Ask merchant for documentation
5. **Update Metrics** - Increment chargeback count and ratio

## Stage 3: Representment

The merchant can dispute the chargeback by submitting compelling evidence to prove the transaction was valid.

```mermaid
flowchart TB
    subgraph Decision["Merchant Decision"]
        A[Receive Chargeback] --> B{Fight or Accept?}
        B -->|Accept| C[No Response]
        B -->|Fight| D[Gather Evidence]
    end

    subgraph Evidence["Build Case"]
        D --> E[Match to Reason Code]
        E --> F[Compile Documents]
        F --> G[Write Rebuttal]
    end

    subgraph Submit["Submit Representment"]
        G --> H[Submit to Acquirer]
        H --> I[Acquirer to Network]
        I --> J[Network to Issuer]
    end

    C --> K[Chargeback Stands]
    J --> L{Issuer Decision}
    L -->|Accept| M[Merchant Wins]
    L -->|Reject| N[Pre-Arbitration]
```

### Representment Deadlines

| Network | Standard | From Chargeback Date |
|---------|----------|---------------------|
| Visa | 30 days | Calendar days |
| Mastercard | 45 days | Calendar days |

:::danger Critical
Missing the representment deadline means automatic loss. The chargeback cannot be disputed after the deadline passes.
:::

### When to Represent vs. Accept

| Factor | Represent | Accept |
|--------|-----------|--------|
| Strong Evidence | Yes | No |
| Win Probability > 50% | Yes | Maybe |
| Transaction Value | High | Low |
| Reason Code | Service/Auth | True Fraud |
| Operational Cost | Justified | Not Worth It |

### Win Rates by Category

| Reason Category | Average Win Rate | Notes |
|-----------------|-----------------|-------|
| Fraud (10.x/48xx) | 20-30% | Requires 3DS, device data |
| Authorization (11.x) | 40-50% | Auth code evidence helps |
| Processing (12.x) | 60-70% | Usually clear evidence |
| Consumer (13.x) | 40-60% | Depends on documentation |

## Stage 4: Pre-Arbitration

If the issuer rejects the representment, they can initiate pre-arbitration—a second review before formal arbitration.

```mermaid
sequenceDiagram
    participant IS as Issuing Bank
    participant NW as Card Network
    participant AC as Acquirer
    participant ME as Merchant

    IS->>NW: Reject Representment
    IS->>NW: File Pre-Arbitration
    NW->>AC: Pre-Arb Notice
    AC->>ME: Second Response Needed

    alt Accept Pre-Arb
        ME->>AC: No Response
        AC->>IS: Pre-Arb Accepted
    else Fight
        ME->>AC: Additional Evidence
        AC->>NW: Challenge Pre-Arb
        NW->>IS: Review Response
    end
```

### Pre-Arbitration Deadlines

| Network | Response Window | From Pre-Arb Notice |
|---------|-----------------|---------------------|
| Visa | 30 days | Calendar days |
| Mastercard | 45 days | Calendar days |

### Pre-Arbitration Options

| Option | When to Use | Outcome |
|--------|-------------|---------|
| Accept | Weak case, low value | Chargeback final |
| New Evidence | Have additional proof | Continue dispute |
| Arbitration | Strong case, high value | Network decides |

## Stage 5: Arbitration

Arbitration is the final stage where the card network makes a binding decision.

```mermaid
flowchart LR
    subgraph Filing
        A[Party Files] --> B[Pay Filing Fee]
        B --> C[Submit Case]
    end

    subgraph Review
        C --> D[Network Reviews]
        D --> E[Examines Evidence]
    end

    subgraph Decision
        E --> F{Network Decision}
        F -->|Merchant Wins| G[Issuer Pays]
        F -->|Issuer Wins| H[Merchant Pays]
    end
```

### Arbitration Costs

| Network | Filing Fee | Losing Party Pays |
|---------|------------|-------------------|
| Visa | $500 | Yes + fees |
| Mastercard | $500 | Yes + fees |

:::warning Cost-Benefit Analysis
Only pursue arbitration when:
- Transaction value > $500 (to cover filing fee)
- Evidence is compelling
- Win probability > 70%
:::

### Arbitration Timeline

| Phase | Visa | Mastercard |
|-------|------|------------|
| Filing Deadline | 10 days from pre-arb | 45 days |
| Network Review | 30-60 days | 30-60 days |
| Final Decision | Binding | Binding |

## Complete Timeline Example

Here's a typical chargeback lifecycle from start to finish:

```mermaid
gantt
    title Chargeback Lifecycle Timeline
    dateFormat  YYYY-MM-DD
    section Stage 1
    Transaction Date           :t1, 2025-01-15, 1d
    Dispute Window (120 days)  :t2, after t1, 120d
    section Stage 2
    Chargeback Created         :c1, 2025-02-01, 1d
    Merchant Notified          :c2, after c1, 2d
    section Stage 3
    Representment Window       :r1, after c2, 30d
    Evidence Gathering         :r2, after c2, 7d
    Representment Submitted    :r3, after r2, 1d
    section Stage 4
    Issuer Review              :p1, after r3, 14d
    Pre-Arb Filed              :p2, after p1, 1d
    Merchant Response Window   :p3, after p2, 30d
    section Stage 5
    Arbitration Filed          :a1, after p3, 1d
    Network Decision           :a2, after a1, 45d
```

### Timeline Summary

| From | To | Days |
|------|-----|------|
| Transaction | Dispute Filed | 0-120 |
| Dispute | First Chargeback | 1-3 |
| Chargeback | Representment | 0-30 |
| Representment | Issuer Decision | 14-30 |
| Pre-Arb Filed | Response | 0-30 |
| Arbitration Filed | Decision | 30-60 |
| **Total Possible** | | **180-270 days** |

## Lifecycle by Outcome

### Scenario 1: Merchant Accepts

```mermaid
flowchart LR
    A[Chargeback] --> B[No Response]
    B --> C[Chargeback Final]
    C --> D[Merchant Loss]
```

**Timeline:** 30 days
**Cost:** Transaction amount + chargeback fee

### Scenario 2: Representment Win

```mermaid
flowchart LR
    A[Chargeback] --> B[Representment]
    B --> C[Issuer Accepts]
    C --> D[Funds Returned]
```

**Timeline:** 45-60 days
**Cost:** Operational cost only

### Scenario 3: Full Dispute (Arbitration)

```mermaid
flowchart LR
    A[Chargeback] --> B[Representment]
    B --> C[Pre-Arb]
    C --> D[Arbitration]
    D --> E[Network Decision]
```

**Timeline:** 120-180 days
**Cost:** $500 filing + potential loss

## PayFac Lifecycle Management

### System Requirements

| Capability | Purpose |
|------------|---------|
| Deadline Tracking | Never miss response windows |
| Evidence Repository | Store and retrieve documents |
| Workflow Automation | Route to right team members |
| Communication | Notify merchants, gather evidence |
| Reporting | Track ratios, win rates |

### Automated Actions

| Trigger | Action |
|---------|--------|
| Chargeback Received | Debit sub-merchant, send notification |
| 7 Days Before Deadline | Escalation notification |
| Representment Submitted | Update status, stop deadline timer |
| Issuer Decision | Credit/debit sub-merchant as appropriate |

## Related Topics

- [Reason Codes](./reason-codes.md) - Understanding why chargebacks are filed
- [Representment](./representment.md) - Building winning cases
- [Network Programs](../monitoring-programs/network-programs.md) - Consequences of excessive chargebacks

**Ecosystem Context:**
- [PayFac Position](/ecosystem/fundamentals/four-party-model/payfac) - Why PayFacs have first-line chargeback liability
- [Acquiring Banks](/ecosystem/industry-players/acquiring-banks/overview) - Acquirer's role in the liability chain

## References

- [Visa Claims Resolution (VCR) User Guide](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf)
- [Mastercard Dispute Resolution Guide](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/mastercard-rules.pdf)
