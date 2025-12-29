---
title: "False Positive Management"
description: "Strategies for reducing false positives, entity resolution, and maintaining exclusion lists in sanctions screening"
sidebar_position: 2
sidebar_label: "False Positives"
keywords:
  - false positives
  - entity resolution
  - exclusion lists
  - sanctions alerts
---

# False Positive Management

> **Last Updated:** 2025-12-28
> **Status:** Complete

This page covers strategies for managing and reducing false positives in sanctions screening.

## The False Positive Problem

**Industry Benchmark:** 90-95%+ of sanctions screening alerts are **false positives** (not actual matches).

### Historical vs. Current View

**Historical View:** High false positive rates were once viewed as "better safe than sorry."

**Current View (2025):** High false positive rates indicate **poor technology and poor data quality**, not cautious compliance. Regulators and auditors now expect:
- Effective screening systems
- Tuned algorithms
- Reduced manual review burden
- Evidence of continuous improvement

## Why False Positives Occur

1. **Common names:** "John Smith" matches thousands of people
2. **Over-sensitive thresholds:** Catching too many low-probability matches
3. **Insufficient data points:** Screening name only without DOB/address
4. **Poor data quality:** Typos in merchant application data
5. **Lack of secondary screening:** Not using entity resolution

## Mitigation Strategies

### 1. Use Secondary Identifying Data

When screening, include additional data points beyond just names:

- Date of birth
- Address/location
- Nationality/citizenship
- Passport/ID numbers (when available)
- Business registration numbers

**Example:**
- Name match: "Ahmed Khan" → 500 potential matches
- Name + DOB match: "Ahmed Khan, 1975-03-15" → 3 potential matches
- Name + DOB + Country: "Ahmed Khan, 1975-03-15, Pakistan" → 1 match

### 2. Apply Risk-Based Thresholds

- Higher thresholds for common names
- Lower thresholds for uncommon names
- Adjusted thresholds by geography
- Industry-specific tuning

| Name Commonality | Recommended Threshold |
|-----------------|----------------------|
| Very common (top 100 names) | 95%+ |
| Common | 90%+ |
| Uncommon | 85%+ |
| Rare | 80%+ |

### 3. Implement Entity Resolution

Use AI/ML to:
- Link related records
- Identify unique entities
- Consolidate duplicate alerts
- Learn from historical review decisions

**Entity Resolution Benefits:**
- Reduces duplicate alerts for same person
- Builds confidence scores over time
- Identifies connected parties

### 4. Continuous Tuning

- Track false positive rates by name type
- Analyze review outcomes
- Adjust thresholds quarterly
- Update exclusion rules
- Improve data collection quality

### 5. Maintain Exclusion Lists

- Document recurring false positives
- Create "known good" lists
- Require periodic review (annually)
- Justify exclusions with evidence

## Exclusion List Management

:::warning Exclusion List Risks
While exclusion lists reduce false positives, they create compliance risk. A person initially excluded as false positive could later be added to SDN list. Regular re-screening of exclusions is essential.
:::

### Best Practices for Exclusion Lists

**Creating Exclusions:**
1. Document why the match is false positive
2. Record specific identifying data that differentiates
3. Require manager approval for each exclusion
4. Set expiration date (12 months maximum)

**Maintaining Exclusions:**
1. Re-screen exclusion list monthly against SDN updates
2. Require annual re-validation of each exclusion
3. Remove exclusions immediately if new information emerges
4. Audit exclusion decisions quarterly

**Documentation Required:**
- Original alert details
- Investigation steps taken
- Differentiating information
- Approver name and date
- Expiration date
- Re-validation history

## Measuring False Positive Rates

### Key Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| **False Positive Rate** | False Positives / Total Alerts | &lt;90% |
| **True Positive Rate** | True Positives / Actual Positives | &gt;99% |
| **Review Time** | Average time to close alert | &lt;15 minutes |
| **Escalation Rate** | Escalations / Total Alerts | &lt;5% |

### Improvement Tracking

- Track metrics monthly
- Compare against industry benchmarks
- Set quarterly improvement targets
- Report to compliance committee

## Technology Solutions

### AI/ML-Powered Screening

Modern solutions use machine learning to:
- Learn from historical decisions
- Automatically classify low-risk alerts
- Prioritize high-risk matches
- Suggest resolution actions

### Workflow Automation

- Auto-close obvious false positives
- Route complex cases to specialists
- Track SLAs and aging
- Generate audit reports

## Related Topics

- [Sanctions Screening Overview](../sanctions-screening.md) - Core concepts
- [Fuzzy Matching](./fuzzy-matching.md) - Algorithm details
- [Screening Operations](./operations.md) - Process management
