---
title: "Risk Scoring Models"
description: "Automated risk assessment and decision frameworks for merchant underwriting"
sidebar_position: 4
keywords:
  - risk scoring
  - automated underwriting
  - machine learning
  - decision models
---

# Risk Scoring Models

> **Status:** Pending content development
>
> **Last Updated:** 2025-12-25

## Overview

Risk scoring translates qualitative risk factors into quantitative scores that enable automated or semi-automated underwriting decisions. Effective scoring balances accuracy, explainability, and operational efficiency.

## Content Sections (To Be Developed)

### Why Risk Scoring?

**Benefits:**
- Consistency in decision-making
- Scalability (handle high application volumes)
- Speed (instant approvals for low-risk merchants)
- Data-driven optimization
- Auditability and compliance

**Challenges:**
- False positives (declining good merchants)
- False negatives (approving bad merchants)
- Model drift over time
- Explainability requirements

### Scoring Approaches

#### Rules-Based Scoring

Traditional approach using weighted factors:

```
Score = (MCC_Risk × 30) +
        (Credit_Score × 25) +
        (Time_in_Business × 20) +
        (MATCH_Status × 15) +
        (Online_Reputation × 10)
```

**Pros:**
- Transparent and explainable
- Easy to implement
- Predictable behavior

**Cons:**
- Manual weight tuning
- Limited ability to capture complex interactions
- Requires frequent updates

#### Statistical Models

Logistic regression, decision trees, etc.

**Pros:**
- Data-driven weight optimization
- Handles non-linear relationships

**Cons:**
- Requires historical data
- Less interpretable than rules

#### Machine Learning Models

Advanced algorithms (random forests, gradient boosting, neural networks)

**Pros:**
- Highest predictive accuracy
- Learns complex patterns
- Continuous improvement with data

**Cons:**
- "Black box" explainability challenges
- Regulatory scrutiny
- Requires significant data and expertise

### Risk Score Components

#### Data Inputs

**Application Data:**
- Business type (MCC)
- Projected volume
- Average ticket size
- Time in business
- Legal entity type

**KYC/KYB Data:**
- Beneficial owner information
- Business registration status
- EIN validation

**External Data:**
- Personal credit score
- Business credit score
- MATCH list status
- Sanctions screening
- BBB rating
- Online reviews

**Behavioral Data (if re-underwriting):**
- Actual processing volume
- Chargeback ratio
- Fraud alerts
- Customer complaints

#### Feature Engineering

Transforming raw data into predictive features:

- Volume-to-ticket ratio
- Business age in months
- Credit score buckets
- Industry-specific risk multipliers
- Geographic risk factors

### Score Calculation

Example scoring framework:

| Factor | Weight | Low Risk (100) | Medium Risk (50) | High Risk (0) |
|--------|--------|----------------|------------------|---------------|
| MCC Risk | 30% | Low-risk MCC | Medium-risk MCC | High-risk MCC |
| Credit Score | 25% | 720+ | 640-719 | &lt;640 |
| Time in Business | 20% | 2+ years | 6mo-2yr | &lt;6 months |
| MATCH Status | 15% | No hit | - | MATCH hit |
| Online Reputation | 10% | 4+ stars | 3-3.9 stars | &lt;3 stars |

**Total Score Range:** 0-100

### Decision Thresholds

Translating scores into actions:

- **80-100:** Auto-approve (standard terms)
- **60-79:** Manual review (conditional approval)
- **40-59:** Enhanced due diligence (restrictive terms)
- **0-39:** Auto-decline

Thresholds are calibrated based on:
- Risk tolerance
- Approval rate targets
- Portfolio performance
- Sponsor bank requirements

### Model Performance Metrics

#### Approval Metrics
- **Approval Rate:** % of applications approved
- **Auto-Approval Rate:** % approved without manual review
- **Decline Rate:** % of applications declined

#### Accuracy Metrics
- **True Positive Rate:** High-risk merchants correctly identified
- **False Positive Rate:** Good merchants incorrectly declined
- **Precision:** Of merchants approved, % that perform well
- **Recall:** Of good merchants, % correctly approved

#### Business Metrics
- **Time to Decision:** Average approval timeline
- **Manual Review Volume:** % requiring human review
- **Override Rate:** % of model decisions manually changed

### Model Validation and Tuning

#### Backtesting
- Test model on historical data
- Measure predictive accuracy
- Identify bias or discrimination

#### A/B Testing
- Run competing models on live traffic
- Compare performance metrics
- Gradual rollout of new models

#### Monitoring
- Track score distribution over time
- Detect model drift
- Alert on performance degradation

### Third-Party Risk Scores

**Provider Examples:**
- LexisNexis RiskView
- Sift Score
- Stripe Radar Score
- FICO Merchant Risk Score

**Usage:**
- Input to internal scoring model
- Standalone decision signal
- Validation of internal assessment

### Explainability and Transparency

**Regulatory Requirements:**
- Adverse action notices (FCRA)
- Discrimination prevention (ECOA)
- Model documentation for audits

**Best Practices:**
- Provide decline reasons
- Document score factors
- Manual override justification
- Regular model reviews

## Practical Implementation

### Score Calculation Example

```typescript
interface MerchantApplication {
  mccCode: string;
  creditScore: number;
  monthsInBusiness: number;
  hasMatchHit: boolean;
  onlineRating: number;
}

function calculateRiskScore(app: MerchantApplication): number {
  let score = 0;

  // MCC Risk (30 points)
  const mccRisk = getMCCRisk(app.mccCode);
  score += mccRisk * 0.3;

  // Credit Score (25 points)
  if (app.creditScore >= 720) score += 25;
  else if (app.creditScore >= 640) score += 12.5;

  // Time in Business (20 points)
  if (app.monthsInBusiness >= 24) score += 20;
  else if (app.monthsInBusiness >= 6) score += 10;

  // MATCH Status (15 points)
  if (!app.hasMatchHit) score += 15;

  // Online Reputation (10 points)
  if (app.onlineRating >= 4.0) score += 10;
  else if (app.onlineRating >= 3.0) score += 5;

  return score;
}

function makeDecision(score: number): string {
  if (score >= 80) return 'AUTO_APPROVE';
  if (score >= 60) return 'MANUAL_REVIEW';
  if (score >= 40) return 'EDD_REQUIRED';
  return 'AUTO_DECLINE';
}
```

## Self-Assessment Questions

[Questions to be added covering scoring models, decision thresholds, and performance metrics]

## Related Topics

- [Fundamentals](./fundamentals.md) - Underwriting objectives
- [Risk Factors](./risk-factors.md) - Inputs to scoring models
- [MCC Codes](./mcc-codes.md) - Key risk factor

## References

- Fair Credit Reporting Act (FCRA) - Adverse action requirements
- Equal Credit Opportunity Act (ECOA) - Discrimination prevention
- Model Risk Management Guidelines (OCC, Federal Reserve)
