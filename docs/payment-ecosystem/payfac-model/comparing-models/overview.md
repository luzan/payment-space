---
title: "Comparing Payment Processing Models"
description: "Comprehensive comparison of traditional acquiring, ISO, ISV, and PayFac models across history, economics, technical complexity, and regulatory requirements"
sidebar_position: 1
sidebar_label: "Model Comparison"
keywords:
  - payment processing models
  - traditional acquiring
  - ISO model
  - ISV payments
  - PayFac comparison
  - payment facilitator
  - merchant acquiring
  - payment economics
  - PCI compliance
  - money transmitter license
  - sponsor bank
  - payment infrastructure
  - payment revenue models
  - chargeback liability
  - payment risk management
---

# Payment Processing Models: ISO vs ISV vs PayFac vs Traditional Acquiring

## Executive Summary

The payment industry has evolved through four distinct processing models, each emerging to solve specific market needs. Understanding these models is critical for anyone building fintech platforms or making strategic payment decisions. This comprehensive comparison covers Traditional Acquiring, ISO, ISV, and PayFac models across all dimensions: historical context, economics, technical complexity, regulatory requirements, and strategic fit.

---

## 1. Historical Evolution: From Banks to Platform Models

### Timeline of Payment Processing Models

```
1950s-1980s: TRADITIONAL ACQUIRING ERA
│
├─ 1958: BankAmericard (later Visa) launched
├─ 1966: Interbank Card Association (later Mastercard) formed
└─ Model: Direct merchant-to-acquiring bank relationships
   └─ Problem: Banks couldn't scale sales/support for small merchants

1980s-1990s: ISO ERA BEGINS
│
├─ 1983: Visa creates Independent Sales Organization (ISO) program
├─ Mid-1980s: ISOs proliferate as merchant aggregators
└─ Model: Sales intermediaries between merchants and acquirers
   └─ Problem: ISOs sold but didn't control technology experience

1990s-2000s: ISV MODEL EMERGES
│
├─ 1990s: Vertical SaaS companies emerge (POS, practice management)
├─ Late 1990s: ISVs realize payment revenue opportunity
└─ Model: Software companies integrate payments as feature
   └─ Problem: Still dependent on acquirer relationships, slow onboarding

2010s-Present: PAYFAC REVOLUTION
│
├─ 2010: Stripe launches with instant merchant onboarding
├─ 2011: Square follows with simple card-present PayFac model
├─ 2012: Visa formalizes PayFac registration program
├─ 2014: Mastercard creates Payment Service Provider (PSP) program
├─ 2018-2020: PayFac-as-a-Service (PFaaS) platforms emerge
└─ 2023-2025: Embedded finance mainstream, every SaaS considers PayFac
```

### Key Evolution Drivers

**Why ISOs Emerged (1980s):**
- Acquiring banks couldn't afford nationwide sales forces
- Small merchants (SMBs) were expensive to acquire directly
- Card networks needed merchant adoption to grow network effects
- **Result:** Banks outsourced merchant acquisition to specialized sales organizations

**Why ISVs Got Involved (1990s-2000s):**
- Vertical SaaS companies had deep merchant relationships
- Merchants asked for integrated payment solutions
- Payment residuals represented significant revenue (30-50% of total revenue for some ISVs)
- Technology control improved merchant experience
- **Result:** Software vendors became payment distribution channel

**Why PayFac Model Emerged (2010s):**
- Traditional merchant onboarding took 7-14 days (unacceptable for software UX)
- Developer experience was terrible (complex gateway APIs, certification processes)
- Risk assessment could be automated for low-ticket, low-volume merchants
- Platforms wanted complete control over merchant experience
- **Result:** Aggregated merchant model with instant onboarding

**Current State (2025):**
- PayFac model dominant for platform businesses and vertical SaaS
- Traditional acquiring still preferred for large enterprise merchants
- Hybrid models emerging (PayFac-light, embedded finance)
- ISOs still strong in industries resistant to technology change
- ISV model evolving toward PayFac or PayFac-enabled approaches

---

## 2. Side-by-Side Model Comparison

### Comprehensive Comparison Table

| **Dimension** | **Traditional Acquiring** | **ISO Model** | **ISV Model** | **PayFac Model** |
|---------------|---------------------------|---------------|---------------|------------------|
| **Primary Function** | Direct merchant acquiring and processing | Merchant aggregation and sales | Software platform with payment integration | Master merchant with sub-merchant aggregation |
| **Merchant Relationship** | Direct contract with acquirer | ISO refers to acquirer; merchant contracts with bank | ISV refers/resells; merchant may contract with acquirer or ISO | Sub-merchant agreement with PayFac; PayFac contracts with sponsor bank |
| **Settlement Flow** | Acquirer → Merchant (direct) | Acquirer → Merchant (ISO not in money flow) | Acquirer → ISO/ISV → Merchant OR Acquirer → Merchant | Sponsor Bank → PayFac → Sub-merchant |
| **Underwriting Owner** | Acquirer performs all underwriting | Acquirer underwrites; ISO may pre-screen | Acquirer or ISO underwrites; ISV may provide data | PayFac underwrites sub-merchants within program limits |
| **Risk/Liability Level** | Merchant bears fraud/chargeback risk; acquirer manages reserves | ISO has limited liability; may have referral warranty | ISV typically minimal liability unless they're registered PayFac | PayFac bears full fraud/chargeback liability for sub-merchants |
| **Revenue Model** | Discount rate + interchange + fees from merchant | Residual split from acquirer (typically 10-50% of margin) | Residual split (20-60%) OR markup on processing OR SaaS bundling | Transaction fees + platform fees + value-added services; keeps full merchant margin minus processor costs |
| **Capital Requirements** | Minimal for merchant; $100K-$1M+ for becoming acquirer | $10K-$100K for ISO registration and operations | $50K-$500K depending on volume and partnership model | $500K-$5M+ (reserves, technology, compliance infrastructure) |
| **Time to Market** | 7-30 days merchant onboarding | 5-14 days (ISO can streamline sales) | 3-10 days (ISV can pre-populate application) | Minutes to hours (instant onboarding for low-risk) |
| **PCI DSS Scope** | Merchant responsible for own compliance (Level 1-4 based on volume) | ISO may be service provider (must be PCI compliant if storing/transmitting CHD) | ISV Level 1 validation if handling card data; can reduce scope with tokenization | PayFac is Level 1 service provider; sub-merchants may qualify for SAQ A or A-EP |
| **Card Network Registration** | Direct registration as merchant | ISO registration with Visa/MC (Visa ISO Relationship Management Program) | May require ISV registration if referring merchants | Required: Visa Payment Facilitator, Mastercard Payment Service Provider registration |
| **State Licensing** | None typically (unless money transmission) | Generally none (not in money flow) | Depends on settlement model; MTL if in money flow | Money Transmitter License required in 40+ states if holding/settling funds |
| **Banking Partner** | Direct acquiring bank relationship | Works with multiple acquirers typically | Partnership with acquirer or ISO | Sponsor bank relationship (rigorous vetting, ongoing oversight) |
| **Merchant Onboarding Control** | Full control but slow process | Limited (depends on acquirer) | Moderate (can influence but not fully control) | Complete control (instant decisioning within program) |
| **Technology Complexity** | Moderate (integrate with processor/gateway) | Low (mostly sales/CRM systems) | Moderate-High (payment integration + software platform) | Very High (payment infrastructure, risk engine, KYC/KYB, ledger, compliance) |
| **Ongoing Compliance Burden** | Moderate (PCI, card network rules) | Low-Moderate (ISO compliance, referral quality) | Moderate (depends on integration depth) | Very High (PCI Level 1, network monitoring, AML/BSA, state exams, bank oversight) |
| **Scalability** | High (bank infrastructure) | High (add more merchants) | High (leverage software distribution) | Very High (aggregated underwriting, instant onboarding) |
| **Chargeback Responsibility** | Merchant handles; acquirer may hold reserves | Merchant/acquirer responsibility | Merchant/acquirer responsibility | PayFac responsible; must manage sub-merchant reserves |
| **Typical Merchant Size** | All sizes; optimal for $1M+ annual volume | Small-to-medium ($50K-$5M) | Depends on vertical; often SMB-focused | Micro to small merchants ($0-$500K annually optimal) |

---

## 3. Regulatory Requirements Comparison

### Card Network Registration

| **Model** | **Visa Requirements** | **Mastercard Requirements** | **Ongoing Obligations** |
|-----------|----------------------|----------------------------|-------------------------|
| **Traditional Acquiring** | Direct merchant registration (automatic via acquirer) | Merchant registered by acquirer | Annual revalidation, program compliance |
| **ISO** | ISO Relationship Management Program registration; background checks; financial review | Service Provider registration if applicable | Annual revalidation; maintain E&O insurance ($1M+); violation monitoring |
| **ISV** | May require Technology Provider or ISV registration depending on role | Service Provider or Digital Activity Facilitator registration | Depends on registration type; generally annual revalidation |
| **PayFac** | Payment Facilitator Registration (detailed application); sponsor bank endorsement; financial review; background checks | Payment Service Provider (PSP) Program; more flexible than Visa | Quarterly sub-merchant reporting; monthly volume reporting; annual financial review; program compliance audits; violation monitoring |

**Visa PayFac Registration Requirements (2025):**
- Sponsor bank relationship and endorsement
- Detailed business model documentation
- Executive background checks (principals, officers)
- Financial statements (proof of capitalization)
- Risk management program documentation
- Compliance program documentation
- Sub-merchant onboarding procedures
- Processing history or projections
- **Approval timeline:** 60-120 days
- **Annual fees:** $5K-$25K (varies by sponsor bank)

**Mastercard PSP Program (2025):**
- Generally more flexible than Visa
- Similar documentation requirements
- Sponsor bank endorsement required
- **Approval timeline:** 30-90 days
- **Annual fees:** $3K-$15K

**Discover/Amex:**
- Separate agreements typically required
- Less formalized PayFac programs
- Often negotiated through processor relationships

---

### PCI DSS Obligations

| **Model** | **PCI Level** | **Validation Requirements** | **Annual Cost** | **Scope Reduction Strategies** |
|-----------|---------------|----------------------------|-----------------|-------------------------------|
| **Traditional Acquiring (Large Merchant)** | Level 1 (>6M transactions/year) | On-site QSA audit; quarterly ASV scans; Attestation of Compliance (AOC) | $50K-$200K | Tokenization; out-of-scope architecture; P2PE |
| **Traditional Acquiring (SMB)** | Level 2-4 (based on volume) | Self-Assessment Questionnaire (SAQ); quarterly scans | $500-$5K | Use payment gateway; SAQ A or A-EP |
| **ISO** | Level 1 Service Provider (if storing/processing/transmitting CHD) | On-site QSA audit if applicable; otherwise SAQ | $0-$100K | Don't touch card data; referral model only |
| **ISV** | Level 1 Service Provider (if integrated deeply) | On-site QSA audit; quarterly scans; AOC | $30K-$150K | Tokenization; iframe/hosted fields; SAQ A-EP |
| **PayFac** | **Level 1 Service Provider (mandatory)** | **Annual on-site QSA audit; quarterly ASV scans; AOC; sub-merchant compliance program** | **$50K-$250K+** | Tokenization for sub-merchants; secure vault; minimize CHD scope |

**PCI DSS 4.0 (Current as of 2025):**
- Effective March 2024, mandatory March 2025
- Enhanced authentication requirements
- Continuous compliance monitoring
- Updated cryptography standards (TLS 1.2 minimum, TLS 1.3 recommended)

**PayFac-Specific PCI Obligations:**
- Responsible for sub-merchant compliance validation
- Must maintain sub-merchant compliance records
- Network requires evidence of sub-merchant PCI programs
- Violation of sub-merchant PCI can impact PayFac registration

---

### State Licensing Requirements

| **Model** | **Money Transmitter License (MTL)** | **Number of States** | **Capital Requirements** | **Timeline** | **Annual Costs** |
|-----------|-------------------------------------|---------------------|-------------------------|--------------|------------------|
| **Traditional Acquiring** | Not required (merchant funds flow direct to merchant) | 0 | N/A | N/A | N/A |
| **ISO** | Not required (not in money flow) | 0 | N/A | N/A | N/A |
| **ISV (Referral/Pass-Through)** | Not required if not holding funds | 0 | N/A | N/A | N/A |
| **ISV (Settlement Model)** | **Required if holding/settling merchant funds** | 40-48 states | $500K-$5M aggregate | 12-24 months | $100K-$500K |
| **PayFac** | **Required in most states** | **40-48 states** | **$500K-$5M aggregate** | **12-24 months** | **$150K-$750K** |

**Money Transmitter Licensing Details (2025):**

**States Requiring MTL for PayFacs:**
- All states except: Montana, Wyoming (no MTL law)
- Merchant acquirer exemptions vary by state

**Capital/Surety Bond Requirements by State:**
- **New York:** $500K minimum net worth + $500K surety bond
- **California:** $500K minimum tangible net worth + compliance
- **Texas:** $300K net worth + $300K surety bond
- **Florida:** $100K net worth + varies by volume
- **Total Aggregate:** Typically $2M-$5M in surety bonds/capital across all states

**Application Timeline:**
- **Fast states:** 3-6 months (Delaware, South Dakota)
- **Slow states:** 12-18 months (New York, California, Texas)
- **Parallel filing strategy:** Apply to multiple states simultaneously
- **Maintenance:** Annual renewals, audited financials, call reports

**Alternatives to Direct Licensing:**
- **Sponsor Bank Model:** Bank holds licenses, PayFac operates under bank's authority
- **Agent of Payee Model:** Structure as agent rather than money transmitter (limited applicability)
- **Hybrid Model:** Obtain licenses in key states, use sponsor for others

**Costs:**
- **Initial application fees:** $50K-$150K across all states
- **Surety bonds:** $2M-$5M aggregate (annual premium: 1-3% = $20K-$150K)
- **Legal counsel:** $100K-$300K for licensing project
- **Annual renewals:** $50K-$200K
- **Audits/exams:** $30K-$100K annually

---

### Banking Partner Requirements

| **Model** | **Relationship Type** | **Bank Requirements** | **Typical Terms** | **Bank Oversight Level** |
|-----------|----------------------|----------------------|------------------|------------------------|
| **Traditional Acquiring** | Direct acquiring relationship | Business credit application; financial statements; processing history | Standard merchant agreement; 1-3 year term | Moderate (portfolio monitoring) |
| **ISO** | Referral agreement with acquirer(s) | ISO application; background checks; E&O insurance; referral quality metrics | Residual split agreement; typically no term limit | Low (quality of referrals) |
| **ISV** | Partnership with acquirer/ISO or sponsor | Depends on model; if PayFac-enabled, sponsor bank required | Revenue share or processing fee agreement | Moderate to High (if sponsor) |
| **PayFac** | **Sponsor Bank Relationship (rigorous)** | **Extensive due diligence; financial strength; compliance program; risk management; executive backgrounds; business model review** | **Sponsor agreement (detailed); ongoing oversight; quarterly reviews; annual renewal** | **Very High (continuous monitoring)** |

**PayFac Sponsor Bank Relationship Details:**

**Bank Selection (2025 Active Sponsors):**
- **Wells Fargo:** Largest PayFac sponsor, rigorous requirements, enterprise focus
- **Fifth Third Bank:** Active in PayFac sponsorship, mid-market
- **Webster Bank:** PayFac-friendly, technology focus
- **Pathward (formerly MetaBank):** Fintech-focused, many PayFac relationships
- **Column:** Emerging sponsor, developer-focused
- **Treasury Prime:** BaaS platform with PayFac capabilities
- **Celtic Bank:** Smaller PayFac programs
- **Regional Banks:** Many regional banks entering PayFac sponsorship

:::warning 2025 Sponsor Bank Due Diligence Warnings
- **Evolve Bank & Trust:** Currently under Federal Reserve regulatory scrutiny (2024-2025).
  May pause new PayFac sponsorships. Verify current status before engaging.
- **Synapse:** Failed in 2024 - do NOT use as reference example.
- **General Risk:** Sponsor bank regulatory issues can force PayFacs to exit relationships
  with 60-180 days notice, disrupting entire sub-merchant portfolios.
:::

**Sponsor Bank Due Diligence (6-12 month process):**
1. **Initial Qualification:**
   - Financial strength review (typically $5M+ net worth required)
   - Executive backgrounds and criminal checks
   - Business model viability assessment
   - Market and competition analysis

2. **Compliance Review:**
   - AML/BSA program documentation
   - OFAC screening procedures
   - KYC/KYB onboarding workflows
   - Transaction monitoring capabilities
   - SAR filing procedures

3. **Risk Management Review:**
   - Underwriting criteria and decisioning
   - Fraud detection tools and strategies
   - Chargeback management procedures
   - Reserve methodology
   - Portfolio monitoring approach

4. **Technology Review:**
   - System architecture and security
   - PCI DSS compliance evidence
   - Disaster recovery and business continuity
   - Data retention and privacy compliance
   - API security and rate limiting

5. **Financial Model Review:**
   - Pricing structure and competitiveness
   - Profitability projections
   - Capital adequacy for growth
   - Reserve funding capabilities

**Ongoing Sponsor Bank Oversight:**
- **Monthly reporting:** Volume, sub-merchant counts, chargebacks, fraud losses, reserves
- **Quarterly reviews:** Portfolio health, compliance program effectiveness, financial performance
- **Annual audit:** Comprehensive program review, may include on-site visit
- **Event-driven reviews:** Material changes, excessive losses, regulatory issues
- **Right to terminate:** Bank can exit relationship with 60-180 days notice

**Sponsor Bank Fees:**
- **Onboarding fee:** $25K-$100K
- **Annual sponsorship fee:** $50K-$250K
- **Basis points on volume:** 3-10 bps (0.03%-0.10%)
- **Example:** $100M monthly volume × 5 bps = $50K monthly = $600K annual

---

## 4. Revenue Models and Economics

### How Each Model Makes Money

**Traditional Acquiring:**
```
Merchant pays: 2.50% + $0.10 per transaction
├─ Interchange (goes to issuing bank): 1.80% + $0.10
├─ Assessment (goes to card network): 0.14%
└─ Acquirer margin: 0.56% ($56 per $10K processed)
```

**ISO Model:**
```
Merchant pays: 2.90% + $0.30 per transaction
├─ Interchange (to issuer): 1.80% + $0.10
├─ Assessment (to network): 0.14%
├─ Processor cost: 0.15% + $0.05
├─ Acquirer margin: 0.81% + $0.15 = 0.96%
└─ ISO residual (30% split): 0.29% + $0.045 ≈ $29-34 per $10K processed
```

**ISV Model (Integrated, Revenue Share):**
```
Merchant pays: 2.75% + $0.25 per transaction
├─ Interchange (to issuer): 1.80% + $0.10
├─ Assessment (to network): 0.14%
├─ Processor cost: 0.15% + $0.05
├─ Payment partner margin: 0.33% + $0.05
├─ ISV residual (40% of partner margin): 0.13% + $0.02 ≈ $13-15 per $10K
└─ Payment partner keeps: 0.20% + $0.03
```

**ISV Model (Using PayFac-as-a-Service):**
```
Merchant/Sub-merchant pays: 2.90% + $0.30
├─ Interchange (to issuer): 1.80% + $0.10
├─ Assessment (to network): 0.14%
├─ PFaaS provider (infrastructure + processing): 0.50% + $0.10
└─ ISV keeps: 0.46% + $0.10 ≈ $46-56 per $10K processed
```

**PayFac Model (Direct):**
```
Sub-merchant pays: 2.90% + $0.30
├─ Interchange (to issuer): 1.80% + $0.10
├─ Assessment (to network): 0.14%
├─ Processor cost: 0.12% + $0.04 (better rates at scale)
├─ Sponsor bank: 0.05%
└─ PayFac net margin: 0.79% + $0.16 ≈ $79-95 per $10K processed
```

---

### Detailed Revenue Examples with Specific Numbers

**Example 1: Small Merchant ($50K Monthly Volume)**

| Model | Merchant Rate | Monthly Revenue | Annual Revenue | Notes |
|-------|---------------|-----------------|----------------|-------|
| **Traditional (Direct)** | 2.50% + $0.10 | N/A (merchant is payer) | N/A | Merchant pays ~$1,250-1,300/month |
| **ISO** | 2.90% + $0.30 | $145-175 | $1,740-2,100 | 30% residual split |
| **ISV (Revenue Share)** | 2.75% + $0.25 | $65-75 | $780-900 | 40% of partner margin |
| **ISV (PFaaS)** | 2.90% + $0.30 | $230-280 | $2,760-3,360 | Full margin minus PFaaS |
| **PayFac** | 2.90% + $0.30 | $395-475 | $4,740-5,700 | Full margin minus costs |

---

**Example 2: Portfolio of 500 Small Merchants ($25M Monthly, $50K avg)**

| Model | Aggregate Monthly Revenue | Annual Revenue | Operating Costs | Net Profit | ROI Considerations |
|-------|--------------------------|----------------|-----------------|------------|-------------------|
| **ISO** | $72,500-87,500 | $870K-1.05M | Low (~$200K) | $670K-850K | Low capital, high margin business |
| **ISV (Revenue Share)** | $32,500-37,500 | $390K-450K | Moderate (~$300K tech) | $90K-150K | Adds to SaaS revenue |
| **ISV (PFaaS)** | $115K-140K | $1.38M-1.68M | Moderate (~$400K) | $980K-1.28M | Better than revenue share |
| **PayFac** | $197,500-237,500 | $2.37M-2.85M | High (~$1.2M)* | $1.17M-1.65M | Highest revenue but requires scale |

*PayFac operating costs include: engineering team ($600K), risk/compliance team ($300K), support ($150K), infrastructure ($100K), sponsor fees ($50K)

---

**Example 3: Scaled Platform ($500M Monthly Volume, 10,000 merchants)**

| Model | Monthly Revenue | Annual Revenue | Operating Costs | Net Profit | Margin |
|-------|-----------------|----------------|-----------------|------------|--------|
| **ISO** | $1.45M-1.75M | $17.4M-21M | $800K | $16.6M-20.2M | 95% |
| **ISV (PFaaS)** | $2.3M-2.8M | $27.6M-33.6M | $2.5M | $25.1M-31.1M | 91% |
| **PayFac** | $3.95M-4.75M | $47.4M-57M | $5M | $42.4M-52M | 89% |

**Key Insight:** At scale, PayFac generates 2-3x revenue of ISO model despite higher costs.

---

### Value-Added Revenue Streams (PayFac Advantage)

PayFacs can layer additional revenue beyond processing:

1. **Instant Payouts / Fast Funding:**
   - Charge 0.5-1.5% for same-day settlement vs standard 2-7 days
   - Example: $10M monthly instant payouts × 1% = $100K monthly = $1.2M annually

2. **Premium Features:**
   - Advanced analytics/reporting: $50-200/month per merchant
   - Custom integrations: $100-500/month
   - White-label branding: $200-1,000/month

3. **Financial Services:**
   - Working capital loans: 1.5-3% origination + interest
   - Expense management cards: Interchange income on spend
   - Banking services: Account fees, wire fees

4. **Ecosystem Revenue:**
   - Referral fees for adjacent services (accounting software, insurance)
   - Platform fees for third-party integrations

**Example at Scale:**
- Core processing revenue: $50M annually
- Instant payouts: $5M annually
- Premium features: $3M annually
- Financial services: $8M annually
- **Total revenue: $66M** (32% higher than processing alone)

---

## 5. Technical Complexity Comparison

### API Integration Complexity

**Traditional Acquiring:**
```
Complexity: Moderate
Timeline: 4-8 weeks

Integration Steps:
1. Select processor/gateway (Stripe, Braintree, Authorize.net, etc.)
2. Implement API integration (typically REST or SOAP)
3. Handle tokenization for PCI scope reduction
4. Implement webhook handlers for events
5. Build reconciliation workflows
6. PCI validation (SAQ A or A-EP typically)

Technology Stack (Example):
- Frontend: Payment form or hosted fields (iframe)
- Backend: API integration with gateway
- Database: Store payment tokens, transaction references
- Jobs: Webhook processing, reconciliation

Code Complexity:
- ~2,000-5,000 lines of code
- 1-2 engineers, 2-4 months
```

---

**ISO Model:**
```
Complexity: Very Low
Timeline: 1-4 weeks

Integration Steps:
1. Merchant referral workflow (often just a link/form)
2. CRM integration to track referrals
3. Commission/residual tracking (often provided by acquirer portal)

Technology Stack (Example):
- CRM system (Salesforce, HubSpot)
- Referral tracking (often manual or acquirer-provided)
- Commission calculation spreadsheets

Code Complexity:
- Often zero custom code
- Sales operations setup only
```

---

**ISV Model (Integrated):**
```
Complexity: Moderate-High
Timeline: 3-6 months

Integration Steps:
1. Partner selection (acquirer, ISO, or PFaaS provider)
2. Deep API integration into software platform
3. Merchant onboarding flow integration
4. Transaction processing in app context
5. Reporting and reconciliation for merchants
6. Support workflow integration
7. PCI compliance (typically Level 1 SAQ or audit)

Technology Stack (Example - NestJS Backend):
// Payment service module
@Injectable()
class PaymentService {
  // Tokenization
  async createPaymentMethod(cardData): Promise<Token>

  // Transaction processing
  async authorizePayment(amount, token): Promise<Authorization>
  async capturePayment(authId): Promise<Capture>
  async refundPayment(captureId, amount?): Promise<Refund>

  // Merchant operations
  async onboardMerchant(businessData): Promise<Merchant>
  async getMerchantStatus(merchantId): Promise<Status>

  // Reconciliation
  async getTransactions(merchantId, dateRange): Promise<Transaction[]>
  async getPayouts(merchantId): Promise<Payout[]>
}

Code Complexity:
- ~10,000-25,000 lines of payment code
- 3-5 engineers, 4-8 months
- Ongoing maintenance and updates
```

---

**PayFac Model (Built from Scratch):**
```
Complexity: Very High
Timeline: 12-24 months

Required Components:

1. Merchant Onboarding System
   - KYC/KYB verification (integrate IDology, Middesk, etc.)
   - UBO collection and sanctions screening (OFAC, PEP lists)
   - Document collection and storage (AWS S3 with encryption)
   - Risk-based decisioning engine
   - Merchant application workflow

2. Underwriting & Risk Engine
   - Automated decisioning for instant approval
   - Risk scoring models (ML-based or rules-based)
   - MCC-based risk tiers
   - Volume and transaction limits
   - Velocity checks and anomaly detection

3. Transaction Processing
   - Authorization request handling
   - Capture and void management
   - Refund processing
   - Multi-processor routing (for redundancy)
   - Retry logic and failure handling

4. Fraud Detection
   - Real-time transaction scoring
   - Velocity rules (card testing detection)
   - Device fingerprinting
   - 3D Secure integration
   - Machine learning models for fraud patterns

5. Chargeback Management
   - Chargeback notification webhooks
   - Representment workflow
   - Evidence collection and submission
   - Sub-merchant reserve holds
   - Portfolio chargeback monitoring

6. Settlement & Payouts
   - Daily settlement reconciliation
   - Sub-merchant payout calculation
   - Fee distribution (platform fees, processor fees)
   - ACH/wire payout initiation
   - Payout holds and reserves

7. Ledger System
   - Double-entry accounting ledger
   - Multi-currency support
   - Balance management (sub-merchant, platform, reserve accounts)
   - Audit trail for all financial movements
   - Reconciliation with processor settlements

8. Compliance & Reporting
   - AML transaction monitoring
   - SAR filing workflow
   - Sub-merchant PCI compliance tracking
   - Network reporting (quarterly sub-merchant reports)
   - State licensing call reports

9. APIs & Developer Tools
   - RESTful APIs for sub-merchant operations
   - Webhook delivery system (with retry and idempotency)
   - SDKs for major languages
   - Sandbox environment for testing
   - API documentation portal

10. Customer Portal & Dashboards
    - Sub-merchant portal (transactions, payouts, settings)
    - Platform admin dashboard (portfolio health, risk metrics)
    - Real-time analytics and reporting
    - Support ticket system integration

Technology Stack (Example - NestJS + Angular):

Backend (NestJS):
// modules/payment-processing/
@Module({
  providers: [
    AuthorizationService,     // Handle auths
    CaptureService,           // Handle captures
    RefundService,            // Handle refunds
    RoutingEngine,            // Smart routing
    ProcessorAdapter,         // Abstract processor integration
  ]
})
class PaymentProcessingModule {}

// modules/merchant-onboarding/
@Module({
  providers: [
    KYCService,               // Identity verification
    KYBService,               // Business verification
    UBOService,               // Beneficial ownership
    UnderwritingEngine,       // Risk decisioning
    DocumentService,          // Document storage
    SanctionsScreeningService // OFAC/PEP screening
  ]
})
class MerchantOnboardingModule {}

// modules/risk-management/
@Module({
  providers: [
    FraudDetectionService,    // Real-time fraud scoring
    VelocityRulesEngine,      // Velocity checks
    ChargebackService,        // CB management
    ReserveCalculationService,// Reserve management
    MonitoringProgramService  // VDMP/VFMP tracking
  ]
})
class RiskManagementModule {}

// modules/settlement/
@Module({
  providers: [
    ReconciliationService,    // Daily reconciliation
    PayoutCalculationService, // Calculate payouts
    LedgerService,            // Double-entry ledger
    ACHService,               // Initiate ACH payouts
    FeeDistributionService    // Calculate fees
  ]
})
class SettlementModule {}

// modules/compliance/
@Module({
  providers: [
    AMLMonitoringService,     // Transaction monitoring
    SARFilingService,         // Suspicious activity reports
    NetworkReportingService,  // Visa/MC reporting
    PCIComplianceService,     // Sub-merchant PCI tracking
    AuditTrailService         // Comprehensive audit logs
  ]
})
class ComplianceModule {}

Frontend (Angular):
// Sub-merchant portal
components/
├── dashboard/              // Overview of transactions, payouts
├── transactions/           // Transaction history and search
├── payouts/                // Payout history and details
├── settings/               // Business settings, banking info
├── reports/                // Financial reports
└── support/                // Support ticket interface

// Platform admin portal
admin-components/
├── portfolio-dashboard/    // Portfolio health metrics
├── merchant-management/    // Sub-merchant CRUD
├── risk-monitoring/        // Real-time risk dashboard
├── compliance-reports/     // Compliance and network reports
├── system-settings/        // Platform configuration
└── analytics/              // Advanced analytics

Code Complexity:
- ~150,000-300,000 lines of code
- 15-25 engineers over 18-24 months
- Ongoing team of 10-15 engineers for maintenance
- Separate DevOps, QA, and security teams

Infrastructure Requirements:
- High-availability architecture (multi-AZ, redundancy)
- Secure data storage (encrypted at rest and in transit)
- PCI-compliant hosting (AWS/GCP PCI-certified environments)
- Real-time processing (low-latency requirements)
- Job queues (webhook delivery, reconciliation jobs)
- Analytics databases (separate from transactional)
- Monitoring and alerting (Datadog, PagerDuty)
- Disaster recovery and backups
```

---

**PayFac Model (Using PayFac-as-a-Service):**
```
Complexity: Moderate
Timeline: 3-6 months

PFaaS providers handle: Underwriting, compliance, network registration,
sponsor bank, settlement, ledger, most infrastructure

You build: Sub-merchant onboarding UX, your application integration,
branded experience

Example (Stripe Connect):
// Backend integration
const account = await stripe.accounts.create({
  type: 'express',  // or 'standard' or 'custom'
  country: 'US',
  email: merchant.email,
  capabilities: {
    card_payments: {requested: true},
    transfers: {requested: true}
  }
});

// Create payment for sub-merchant
const payment = await stripe.paymentIntents.create({
  amount: 5000,
  currency: 'usd',
  application_fee_amount: 150,  // Platform fee
  transfer_data: {
    destination: connectedAccountId
  }
});

Code Complexity:
- ~5,000-15,000 lines of integration code
- 2-4 engineers, 3-6 months
- Much lower ongoing maintenance
- PFaaS provider handles infrastructure
```

---

### Infrastructure Requirements Summary

| Model | Servers/Cloud | Databases | External Services | Monthly Infrastructure Cost |
|-------|---------------|-----------|-------------------|---------------------------|
| **Traditional** | Standard app infrastructure | Main DB + payment tokens | Payment gateway API | $500-2,000 |
| **ISO** | Minimal (CRM, website) | CRM database | Acquirer portal | $100-500 |
| **ISV** | Standard + payment services | Main DB + payment data | Payment partner API, KYC services | $2,000-10,000 |
| **PayFac (Scratch)** | High-availability, multi-region | Transactional, analytics, audit | KYC, fraud tools, processor, sponsor | $20,000-100,000+ |
| **PayFac (PFaaS)** | Standard app infrastructure | Main DB + sub-merchant data | PFaaS provider (all-in-one) | $3,000-15,000 |

---

## 6. Risk and Liability Differences

### Chargeback Risk Allocation

**Traditional Acquiring:**
```
Flow of Chargeback:
1. Cardholder disputes with issuing bank
2. Issuer initiates chargeback through network
3. Acquirer debits merchant account
4. Merchant can represent (provide evidence)
5. If merchant loses: merchant absorbs loss

Liability: Merchant bears 100% of chargeback loss
Reserve: Acquirer may hold 5-10% reserve for high-risk merchants
```

**ISO Model:**
```
Flow of Chargeback:
1-5. (Same as traditional)

Liability: Merchant bears loss; acquirer may have ISO warranty
Reserve: Acquirer holds reserves from merchant, not ISO
ISO Risk: Reputational risk if excessive chargebacks (acquirer may terminate)
          May have referral warranty (liable for merchant fraud in first 90-180 days)
```

**ISV Model:**
```
Flow of Chargeback:
1-5. (Same as traditional)

Liability: Depends on agreement
  - Referral model: Zero liability (merchant and acquirer handle)
  - Integrated model: May have referral warranty
  - PFaaS model: Share liability with PFaaS provider (typically PFaaS absorbs)

Reserve: Typically held by acquirer or PFaaS provider, not ISV
```

**PayFac Model:**
```
Flow of Chargeback:
1. Cardholder disputes with issuing bank
2. Issuer initiates chargeback through network
3. Acquirer/sponsor debits PayFac's master merchant account
4. PayFac debits sub-merchant's account or reserve
5. PayFac manages representment on sub-merchant's behalf
6. If sub-merchant loses or cannot pay: PayFac absorbs loss

Liability: PayFac bears 100% of chargeback loss if sub-merchant cannot pay
Reserve Strategy: PayFac holds reserves from sub-merchants
  - Standard reserves: 5-10% of monthly volume (rolling)
  - High-risk reserves: 10-30% (may be held for 180+ days)
  - Instant payout: Must fund sub-merchant before receiving settlement (2-7 day gap)

PayFac Risk:
  - Portfolio risk (one bad sub-merchant can cause significant loss)
  - Network monitoring programs (excessive chargebacks can lead to fines/termination)
  - Must have sophisticated risk models to prevent fraud
```

---

### Fraud Liability (Card-Not-Present)

**All Models (Post-3D Secure):**

**Without 3D Secure Authentication:**
- Merchant/PayFac bears 100% of fraud liability
- If cardholder claims "I didn't make this purchase," merchant loses
- Known as "CNP fraud" (card-not-present fraud)

**With 3D Secure Authentication (3DS):**
- Liability shifts to issuing bank
- Merchant/PayFac protected if proper authentication occurred
- 3DS adoption increasing due to PSD2/SCA in Europe

**PayFac-Specific Fraud Risk:**
- Responsible for all sub-merchant fraud
- Must monitor for "bust-out fraud" (merchant commits fraud intentionally)
- Must screen for merchants who are themselves fraudulent actors
- Example: Fake merchant onboards, processes fake transactions, disappears before chargebacks arrive (30-90 day chargeback window)

**Fraud Loss Examples:**
```
Scenario: Fraudulent Sub-Merchant
- Fake business onboards as PayFac sub-merchant
- Processes $500K in fraudulent transactions over 2 weeks
- Merchant receives payout: $485K (after 3% fees)
- Chargebacks start arriving 30-60 days later
- PayFac liability: $500K (must refund cardholders)
- PayFac collected in fees: $15K
- PayFac net loss: $485K

Protection: Robust KYC/KYB, velocity monitoring, payout holds for new merchants
```

---

### Regulatory Compliance Liability

| Risk Type | Traditional | ISO | ISV | PayFac |
|-----------|-------------|-----|-----|--------|
| **PCI DSS Violation** | Merchant liable | ISO liable if storing CHD | ISV liable | PayFac liable for self AND sub-merchants |
| **AML/BSA Violation** | Merchant responsibility | N/A | N/A | **PayFac fully liable** (must have AML program, file SARs) |
| **OFAC Sanctions** | Merchant responsibility | Limited (if knowingly referring) | Limited | **PayFac liable** (must screen sub-merchants and transactions) |
| **State Licensing** | N/A | N/A | If in money flow | **PayFac liable** (must maintain all MTLs) |
| **Network Rule Violation** | Merchant at risk | ISO can lose registration | ISV can lose registration | **PayFac at risk of termination** (impacts entire portfolio) |
| **Data Breach** | Merchant liable | ISO liable if breach occurs | ISV liable | PayFac liable (must notify all sub-merchants, networks, states) |

**PayFac-Specific Regulatory Risks:**

**Network Monitoring Programs:**
- **VDMP (Visa Dispute Monitoring Program):** Excessive chargebacks lead to fines
  - Threshold: 0.9% chargeback rate + 100 chargebacks in a month
  - Fines: $50-$250 per chargeback over threshold
  - Can lead to PayFac registration termination

- **VFMP (Visa Fraud Monitoring Program):** Excessive fraud leads to fines
  - Threshold: $75K fraud in a month (varies by region)
  - Fines: Basis points on fraud volume
  - Can lead to termination

- **Example:** PayFac with $100M monthly volume at 1.2% chargeback rate
  - Chargebacks: $1.2M / avg $100 = 12,000 chargebacks
  - Over threshold: 12,000 - 900 = 11,100 excess
  - Fines: 11,100 × $50 = $555,000 per month until corrected
  - Must remediate or risk losing Visa registration entirely

**AML/BSA Liability:**
- PayFacs are Money Services Businesses (MSBs) under federal law
- Must register with FinCEN
- Must have written AML program
- Must file Suspicious Activity Reports (SARs) for transactions over $2,000 that appear suspicious
- Must file Currency Transaction Reports (CTRs) for cash transactions over $10,000 (if applicable)
- Penalties for non-compliance: $25,000-$100,000 per violation (civil), criminal liability possible

---

### Reserve Requirements Comparison

**Traditional Acquiring:**
```
Standard Merchants: No reserve (or minimal 1-2%)
High-Risk Merchants: 5-10% rolling reserve
Very High-Risk: 10-20% reserve held 180+ days
```

**ISO:**
```
ISO itself: No reserves required
Merchants: Same as traditional (set by acquirer)
```

**ISV (PFaaS Model):**
```
ISV/Platform: Typically no reserve (PFaaS provider holds reserves)
Sub-merchants: 5-10% rolling reserve held by PFaaS provider
```

**PayFac:**
```
PayFac Reserve with Sponsor Bank:
  - Minimum platform reserve: $250K-$2M (depending on volume)
  - May require 5-10% of monthly volume in reserve account
  - Example: $50M monthly volume = $2.5M-$5M in reserves required

Sub-Merchant Reserves (PayFac holds):
  - Standard: 5-10% rolling reserve (released after 90-180 days)
  - High-risk: 10-30% reserve
  - New merchants: 20-30% for first 90 days
  - Volume-based: May escalate reserves if volume spikes unexpectedly

Reserve Impact on Cash Flow:
  - Example: $100M monthly volume portfolio
  - 10% average reserve = $10M held in reserve accounts
  - This is capital that cannot be deployed elsewhere
  - Must factor into financial planning
```

---

### Liability Summary Table

| Scenario | Traditional | ISO | ISV (Integrated) | PayFac |
|----------|-------------|-----|------------------|--------|
| Sub-merchant fraud | N/A | Potential warranty liability | Depends on agreement | **PayFac absorbs loss** |
| Chargeback (merchant can't pay) | Acquirer absorbs | Acquirer absorbs | Acquirer/PFaaS absorbs | **PayFac absorbs** |
| Data breach | Merchant liable | ISO liable if caused breach | ISV liable | **PayFac liable** |
| Network fines (excessive CB/fraud) | Merchant fined | ISO may be fined | ISV may be fined | **PayFac fined** |
| AML violation | Merchant liable | N/A | N/A | **PayFac liable (criminal/civil)** |
| PCI DSS violation | Merchant fined | ISO fined if non-compliant | ISV fined | **PayFac fined + sub-merchants** |
| State licensing lapse | N/A | N/A | ISV liable if required | **PayFac liable (cease operations)** |

**Key Insight:** PayFac model carries significantly higher liability but also commands higher revenue to compensate for risk.

---

## Related Topics

### Within Payment Ecosystem Module
- [Four-Party Model](/payment-ecosystem/fundamentals/four-party-model) - Foundation for understanding payment flows
- [Payment Gateways](/payment-ecosystem/industry-players/payment-gateways/overview) - Technical integration layer
- [Acquiring Banks](/payment-ecosystem/industry-players/acquiring-banks/overview) - Traditional acquiring model details
- [ISOs](/payment-ecosystem/industry-players/isos) - Independent Sales Organizations deep dive
- [ISVs](/payment-ecosystem/industry-players/isvs) - Independent Software Vendors in payments
- [PayFac Overview](/payment-ecosystem/payfac-model/overview) - Payment Facilitator deep dive
- [PayFac Implementation](/payment-ecosystem/payfac-model/implementation) - Building a PayFac platform

### Cross-Module References
- Merchant Onboarding (Week 3-4) - KYC/KYB requirements for different models
- Risk & Compliance (Week 5-6) - Chargeback management, fraud, risk implications by model
- Transaction Processing (Week 7-8) - How transactions flow through different models
- Platform Architecture (Week 9-10) - Technical implementation for PayFac models
- Regulatory Partnerships (Week 11-12) - Sponsor bank relationships in depth

---

## References

### Official Card Network Documentation
- [Visa Payment Facilitator Program](https://usa.visa.com/partner-with-us/payment-facilitator.html)
- [Mastercard Payment Service Provider Program](https://developer.mastercard.com/digital-enablement/documentation/)
- [Visa Rules and Regulations (VisaNet)](https://usa.visa.com/support/small-business/regulations.html)

### Regulatory Resources
- [FinCEN MSB Registration](https://www.fincen.gov/money-services-business-msb-registration)
- [CFPB Payment Platform Guidance](https://www.consumerfinance.gov/)
- [State Money Transmitter Licensing (CSBS)](https://www.csbs.org/policy/money-transmitter-modernization)

### Industry Research
- [McKinsey: The 2023 McKinsey Global Payments Report](https://www.mckinsey.com/industries/financial-services/our-insights/payments)
- [FIS Global Payments Report](https://www.fisglobal.com/en/global-payments-report)
- [Visa Back to Business Study](https://usa.visa.com/about-visa/newsroom/press-releases.html)

### PCI DSS Compliance
- [PCI Security Standards Council](https://www.pcisecuritystandards.org/)
- [PCI DSS v4.0 Requirements](https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0.pdf)

### PayFac Infrastructure Providers
- [Stripe Connect Documentation](https://stripe.com/connect)
- [Finix PayFac-as-a-Service](https://finix.com/)
- [Infinicept Embedded Payments](https://infinicept.com/)
- [Modern Treasury Payment Operations](https://www.moderntreasury.com/)

### Industry Analysis
- [A16z: The Fintech Unbundling](https://a16z.com/fintech/)
- [Battery Ventures: State of Fintech](https://www.battery.com/sectors/fintech/)
- [Andreessen Horowitz: Embedded Fintech](https://a16z.com/embedded-fintech/)

### Payment Industry Publications
- [PaymentsJournal.com](https://www.paymentsjournal.com/)
- [Finextra Research](https://www.finextra.com/)
- [The Paypers](https://thepaypers.com/)

---

**Last Updated:** 2025-12-23

**Source:** `/week-01-02-payment-ecosystem/notes/11-comparing-models.md` (Sections 1-7)
