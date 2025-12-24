---
title: "Settlement File Contents"
description: "Understanding the data exchanged during clearing and settlement"
sidebar_position: 7
sidebar_label: "Settlement Files"
keywords: [settlement, clearing file, batch file, settlement data, interchange calculation]
---

# Settlement File Contents

During the clearing and settlement process, detailed transaction data is exchanged between acquirers, networks, and issuers. Understanding settlement file contents is crucial for reconciliation, reporting, and troubleshooting.

## What is a Settlement File?

A settlement file (also called a clearing file or batch file) contains detailed information about all transactions submitted for settlement. These files flow between:

1. **Merchant → Acquirer/Processor**: Batch of captured transactions
2. **Acquirer → Card Network**: Formatted transactions for clearing
3. **Card Network → Issuer**: Transactions to be posted to cardholder accounts
4. **Card Network → Acquirer**: Settlement instructions and fee breakdowns

## Settlement File Contents

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       SETTLEMENT FILE CONTENTS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  TRANSACTION RECORD (for each transaction):                                 │
│  ──────────────────────────────────────────                                 │
│  • Original authorization code                                              │
│  • Card number (tokenized/encrypted)                                        │
│  • Transaction amount                                                       │
│  • Transaction date/time                                                    │
│  • Merchant ID                                                              │
│  • Terminal ID                                                              │
│  • Entry mode (CP/CNP)                                                      │
│  • Card type and BIN                                                        │
│                                                                             │
│  CALCULATED FIELDS:                                                         │
│  ─────────────────                                                          │
│  • Interchange fee (based on card type, MCC, entry mode)                    │
│  • Network assessment fee                                                   │
│  • Net amount due to merchant                                               │
│                                                                             │
│  BATCH SUMMARY:                                                             │
│  ─────────────────                                                          │
│  • Total transaction count                                                  │
│  • Total gross volume                                                       │
│  • Total fees                                                               │
│  • Net settlement amount                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Detailed Transaction Record Fields

### Core Transaction Data

```
TRANSACTION RECORD STRUCTURE
────────────────────────────────────────────────────────────

Field                           Example Value            Notes
─────────────────────────────────────────────────────────────────
Transaction ID                  TXN_20250115_847291      Unique identifier
Authorization Code              847291                   From auth response
System Trace Audit Number       123456                   ISO 8583 Field 11
Retrieval Reference Number      250115847291             ISO 8583 Field 37

Card Information:
─────────────────────────────────────────────────────────────────
Primary Account Number          ************4521         Masked/tokenized
Card Scheme                     VISA                     Network identifier
Card Type                       CREDIT                   Credit/debit/prepaid
Card Product Code               CPS/Rewards              Specific card program
BIN (Bank Identification)       424242                   First 6 digits
Last 4 Digits                   4521                     For display

Transaction Details:
─────────────────────────────────────────────────────────────────
Transaction Amount              100.00                   In minor units (cents)
Currency Code                   USD                      ISO 4217 code
Transaction Date                2025-01-15               Auth date
Transaction Time                09:15:32                 Auth time
Settlement Date                 2025-01-16               When settled
Capture Date                    2025-01-15               When captured

Merchant Information:
─────────────────────────────────────────────────────────────────
Merchant ID (MID)               1234567890123456         Unique merchant ID
Merchant Name                   Coffee Shop Co.          DBA name
Merchant Category Code (MCC)    5814                     Restaurant code
Merchant Street                 123 Main St              Address
Merchant City                   New York                 City
Merchant State                  NY                       State/province
Merchant Postal Code            10001                    ZIP/postal
Merchant Country                USA                      ISO country code

Terminal Information:
─────────────────────────────────────────────────────────────────
Terminal ID                     TERM001                  Unique terminal
Terminal Capability             EMV/NFC                  What it can read
POS Entry Mode                  05                       EMV chip contact
POS Condition Code              00                       Normal presentment
Card Sequence Number            01                       Multiple cards
Cardholder Verification Method  PIN                      How verified

Transaction Type & Context:
─────────────────────────────────────────────────────────────────
Transaction Type Code           00                       Purchase
Processing Code                 003000                   Default credit card
Card Present/Not Present        CP                       Physical card
E-commerce Indicator            N/A                      Card-present
3D Secure Status                N/A                      Not applicable (CP)

Risk & Security Data:
─────────────────────────────────────────────────────────────────
AVS Response                    N/A                      Card-present
CVV Response                    N/A                      Card-present
EMV Cryptogram                  [hex data]               Chip transaction data
EMV CVM Results                 PIN verified             Chip verification
Risk Score                      12                       Low risk (0-100 scale)

Fees & Settlement:
─────────────────────────────────────────────────────────────────
Interchange Category            CPS/Retail               Qualified category
Interchange Rate                1.80%                    Percentage
Interchange Fee Amount          1.80                     Dollar amount
Network Assessment              0.15                     Network fee
Total Fees                      1.95                     Total deductions
Net Settlement Amount           98.05                    Amount to acquirer
```

## Interchange Qualification

Settlement files show how each transaction qualified for interchange rates:

```
INTERCHANGE QUALIFICATION EXAMPLE
──────────────────────────────────────────────────────────────

Transaction: $100.00 purchase at Coffee Shop

Qualification Factors:
┌─────────────────────────────────────────────────────────────┐
│ Factor                 │ Value          │ Impact           │
├────────────────────────┼────────────────┼──────────────────┤
│ Card Network           │ Visa           │ Visa rates apply │
│ Card Type              │ Credit         │ Higher than debit│
│ Card Product           │ Rewards        │ Premium rate     │
│ Transaction Type       │ Card-Present   │ Lower risk       │
│ Entry Mode             │ EMV Chip       │ Qualified rate   │
│ MCC                    │ 5814 (Food)    │ Standard retail  │
│ Settlement Timing      │ T+1 (next day) │ No late fees     │
│ Data Completeness      │ All fields     │ Fully qualified  │
└─────────────────────────────────────────────────────────────┘

Interchange Category: CPS/Retail Rewards
Base Rate: 1.65%
Card-level Rate: +0.15% (rewards card)
Final Interchange: 1.80%
Interchange Fee: $1.80


DOWNGRADE SCENARIOS:
────────────────────────────────────────────────────────────

Same transaction, but merchant submits LATE (T+4):
┌─────────────────────────────────────────────────────────────┐
│ Interchange Category: Retail - Downgraded                  │
│ Rate: 2.10% (+0.30% penalty for late submission)           │
│ Interchange Fee: $2.10 (merchant pays $0.30 more)          │
└─────────────────────────────────────────────────────────────┘

Same transaction, but missing AVS data (CNP):
┌─────────────────────────────────────────────────────────────┐
│ Interchange Category: E-commerce Basic                     │
│ Rate: 2.30% (higher risk without AVS)                       │
│ Interchange Fee: $2.30 (merchant pays $0.50 more)          │
└─────────────────────────────────────────────────────────────┘
```

:::info Interchange Optimization
Merchants can reduce interchange fees by ensuring transactions qualify at the best rates:
- Submit settlements within 24 hours
- Capture all available data fields (Level 2/3 for B2B)
- Use EMV chip readers
- Implement AVS and CVV for CNP transactions
:::

## Batch Summary Record

At the end of each settlement file, a summary record provides totals:

```
BATCH SUMMARY RECORD
────────────────────────────────────────────────────────────

Batch Information:
─────────────────────────────────────────────────────────────
Batch Number:               20250115-001
Batch Date:                 2025-01-15
Batch Close Time:           23:00:00 EST
Merchant ID:                1234567890123456
Terminal ID:                Multiple (batch)

Transaction Counts by Type:
─────────────────────────────────────────────────────────────
Sales (Credits):            157 transactions
Returns (Debits):           3 transactions
Voids:                      2 transactions (excluded)
─────────────────────────────────────────────────────────────
Net Transaction Count:      160 transactions


Volume Summary:
─────────────────────────────────────────────────────────────
Gross Sales:                $8,432.75
Gross Returns:              -$147.50
─────────────────────────────────────────────────────────────
Net Volume:                 $8,285.25


Card Type Breakdown:
─────────────────────────────────────────────────────────────
Visa:                       93 txns    $5,123.50    61%
Mastercard:                 52 txns    $2,456.75    30%
American Express:           12 txns    $612.00      7%
Discover:                   3 txns     $93.00       1%


Fee Summary:
─────────────────────────────────────────────────────────────
Total Interchange:          $149.14     (1.80% avg)
Total Assessments:          $12.43      (0.15% avg)
Processor Fees:             $45.00      (0.54% + per-txn)
Per-Transaction Fees:       $16.00      (160 × $0.10)
─────────────────────────────────────────────────────────────
Total Fees:                 $222.57     (2.69%)


Net Settlement:
─────────────────────────────────────────────────────────────
Gross Volume:               $8,285.25
Less Fees:                  -$222.57
─────────────────────────────────────────────────────────────
NET TO MERCHANT:            $8,062.68

Funding Date:               2025-01-17 (T+2)
Bank Account:               ****5678
```

## Settlement File Formats

### ISO 8583 Format

Most card networks use ISO 8583 messaging for real-time authorization and settlement:

```
ISO 8583 MESSAGE STRUCTURE (Simplified)
────────────────────────────────────────────────────────────

Message Type Indicator (MTI): 1240 (Batch upload)

Field   Description                 Example
─────────────────────────────────────────────────────────────
2       Primary Account Number      424242******4521
3       Processing Code             003000 (purchase)
4       Transaction Amount          000000010000 ($100.00)
7       Transmission Date/Time      0115091532
11      System Trace Audit Number   123456
12      Local Transaction Time      091532
13      Local Transaction Date      0115
15      Settlement Date             0116
22      POS Entry Mode              051
24      Function Code               200 (original auth)
25      POS Condition Code          00
32      Acquiring Institution ID    123456
37      Retrieval Reference Number  250115847291
38      Authorization Code          847291
42      Card Acceptor ID            COFFEE_SHOP_001
43      Card Acceptor Name/Loc      Coffee Shop/NYC
49      Currency Code               840 (USD)
55      EMV Chip Data               [binary]
```

### Flat File Format

Some processors use flat files (CSV, fixed-width):

```
FLAT FILE SETTLEMENT RECORD (CSV Example)
────────────────────────────────────────────────────────────

"TXN_ID","AUTH_CODE","CARD_TYPE","CARD_LAST4","AMOUNT",
"MID","MCC","ENTRY_MODE","INTERCHANGE_CAT","INTERCHANGE_FEE",
"NETWORK_FEE","NET_AMOUNT","TXN_DATE","SETTLE_DATE"

"20250115001","847291","VISA","4521","100.00",
"1234567890123456","5814","EMV","CPS_RETAIL","1.80",
"0.15","98.05","2025-01-15","2025-01-16"

"20250115002","847292","MC","8832","127.50",
"1234567890123456","5814","NFC","CPS_RETAIL","2.30",
"0.19","125.01","2025-01-15","2025-01-16"
```

### XML Format

Modern platforms often use XML or JSON:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SettlementBatch>
  <BatchHeader>
    <BatchID>20250115-001</BatchID>
    <MerchantID>1234567890123456</MerchantID>
    <BatchDate>2025-01-15</BatchDate>
    <BatchTime>23:00:00</BatchTime>
    <TransactionCount>160</TransactionCount>
    <GrossAmount>8285.25</GrossAmount>
    <NetAmount>8062.68</NetAmount>
  </BatchHeader>

  <Transactions>
    <Transaction>
      <TransactionID>20250115001</TransactionID>
      <AuthorizationCode>847291</AuthorizationCode>
      <CardType>VISA</CardType>
      <CardLast4>4521</CardLast4>
      <Amount>100.00</Amount>
      <Currency>USD</Currency>
      <TransactionDate>2025-01-15T09:15:32Z</TransactionDate>
      <SettlementDate>2025-01-16</SettlementDate>

      <Merchant>
        <MerchantID>1234567890123456</MerchantID>
        <MCC>5814</MCC>
        <Name>Coffee Shop Co.</Name>
      </Merchant>

      <Fees>
        <InterchangeCategory>CPS/Retail</InterchangeCategory>
        <InterchangeFee>1.80</InterchangeFee>
        <NetworkAssessment>0.15</NetworkAssessment>
        <TotalFees>1.95</TotalFees>
      </Fees>

      <NetAmount>98.05</NetAmount>
    </Transaction>
    <!-- Additional transactions -->
  </Transactions>

  <BatchSummary>
    <TotalFees>222.57</TotalFees>
    <NetSettlement>8062.68</NetSettlement>
    <FundingDate>2025-01-17</FundingDate>
  </BatchSummary>
</SettlementBatch>
```

## Using Settlement Data for Reconciliation

### Daily Reconciliation Process

```
DAILY RECONCILIATION WORKFLOW
────────────────────────────────────────────────────────────

1. COMPARE SUBMITTED vs SETTLED
   ┌────────────────────────────────────────────────────────┐
   │ Merchant batch:       160 transactions, $8,285.25      │
   │ Settlement file:      160 transactions, $8,285.25      │
   │ Match? ✓                                               │
   └────────────────────────────────────────────────────────┘

2. VERIFY FEE CALCULATIONS
   ┌────────────────────────────────────────────────────────┐
   │ Expected interchange:  $149.14 (calculated)            │
   │ Actual interchange:    $149.14 (settlement file)       │
   │ Match? ✓                                               │
   └────────────────────────────────────────────────────────┘

3. RECONCILE NET DEPOSIT
   ┌────────────────────────────────────────────────────────┐
   │ Settlement file net:   $8,062.68                       │
   │ Bank deposit:          $8,062.68                       │
   │ Match? ✓                                               │
   └────────────────────────────────────────────────────────┘

4. INVESTIGATE DISCREPANCIES
   ┌────────────────────────────────────────────────────────┐
   │ Common issues:                                         │
   │ • Transactions submitted but not in settlement         │
   │ • Unexpected downgrades (higher interchange)           │
   │ • Chargebacks deducted from deposit                    │
   │ • Adjustments from previous batches                    │
   └────────────────────────────────────────────────────────┘
```

### Common Discrepancy Scenarios

```
DISCREPANCY EXAMPLE 1: Missing Transaction
───────────────────────────────────────────────────────────

Merchant submitted:     161 transactions
Settlement file shows:  160 transactions
Difference:             1 transaction missing

INVESTIGATION:
• Check transaction was authorized
• Verify capture was submitted
• Look for duplicate detection
• Check for technical error

RESOLUTION:
• Re-submit missing transaction (if valid)
• Mark as failed (if duplicate or error)


DISCREPANCY EXAMPLE 2: Unexpected Downgrade
───────────────────────────────────────────────────────────

Expected interchange:   1.80% ($1.80)
Actual interchange:     2.10% ($2.10)
Difference:             $0.30 surcharge

INVESTIGATION:
• Check settlement timing (late submission?)
• Verify all required data fields present
• Review interchange qualification rules

RESOLUTION:
• Submit future batches faster
• Ensure data completeness
• Contact processor if error


DISCREPANCY EXAMPLE 3: Lower Net Deposit
───────────────────────────────────────────────────────────

Expected deposit:       $8,062.68
Actual deposit:         $7,937.68
Difference:             -$125.00

INVESTIGATION:
• Check for chargebacks ($100 + $25 fee = $125)
• Review adjustments section of settlement file
• Look for refund processing

RESOLUTION:
• Identify chargeback and respond
• Verify adjustments are legitimate
• Update reconciliation to include adjustments
```

## Platform/PayFac Settlement Data

Payment facilitators receive aggregate settlement files and must sub-allocate to merchants:

```
PAYFAC SETTLEMENT RECONCILIATION
────────────────────────────────────────────────────────────

Network settles to PayFac:  $250,000.00 (net)

PayFac must allocate to sub-merchants:
┌────────────────────────────────────────────────────────────┐
│ Sub-Merchant A:  $50,000 gross - $1,250 fees = $48,750    │
│ Sub-Merchant B:  $75,000 gross - $1,875 fees = $73,125    │
│ Sub-Merchant C:  $125,000 gross - $3,125 fees = $121,875  │
│ ───────────────────────────────────────────────────────    │
│ Total:           $250,000 gross - $6,250 fees = $243,750  │
│                                                            │
│ PayFac markup:   $6,250 (kept by PayFac)                  │
│ Sub-merchant total: $243,750 (paid out)                    │
└────────────────────────────────────────────────────────────┘

PayFac responsibilities:
• Receive network settlement file
• Parse and attribute transactions by sub-merchant
• Calculate sub-merchant fees
• Generate sub-merchant settlement reports
• Fund sub-merchants from PayFac bank account
• Reconcile network settlement vs sub-merchant payouts
```

## Best Practices for Settlement File Management

### Data Retention

```
SETTLEMENT FILE RETENTION POLICY
────────────────────────────────────────────────────────────

Recommended retention periods:

□ Settlement files:              7 years (minimum)
□ Transaction details:           7 years
□ Chargeback documentation:      10 years
□ Authorization logs:            3 years minimum
□ Reconciliation reports:        7 years
□ Fee breakdowns:                7 years

Storage requirements:
• Encrypted at rest
• Access-controlled
• Audit trail of access
• Disaster recovery backups
• Compliance with PCI-DSS
```

### Monitoring and Alerts

```javascript
// Example: Settlement monitoring alerts
function monitorSettlement(settlementFile) {
  // Check for discrepancies
  if (settlementFile.netAmount !== expectedAmount) {
    alert({
      type: 'SETTLEMENT_MISMATCH',
      expected: expectedAmount,
      actual: settlementFile.netAmount,
      difference: settlementFile.netAmount - expectedAmount
    });
  }

  // Check for downgrades
  const avgInterchangeRate = settlementFile.totalInterchange / settlementFile.grossAmount;
  if (avgInterchangeRate > expectedInterchangeRate * 1.1) {
    alert({
      type: 'INTERCHANGE_HIGHER_THAN_EXPECTED',
      expected: expectedInterchangeRate,
      actual: avgInterchangeRate,
      potential_cost: (avgInterchangeRate - expectedInterchangeRate) * settlementFile.grossAmount
    });
  }

  // Check for unusual transaction counts
  if (settlementFile.transactionCount < expectedCount * 0.8) {
    alert({
      type: 'TRANSACTION_COUNT_LOW',
      expected: expectedCount,
      actual: settlementFile.transactionCount
    });
  }
}
```

## See Also

- [Transaction Lifecycle Overview](./overview.md) - Understanding clearing and settlement phases
- [Complete Transaction Example](./complete-example.md) - Money flow with fee breakdown
- [Failure Scenarios](./failure-scenarios.md) - Reconciling voids, refunds, chargebacks

## References

- [ISO 8583 Standard](https://www.iso.org/standard/31628.html) - International standard for payment card messages
- [Visa Settlement Services](https://usa.visa.com/products/visa-settlement-service.html) - Overview of Visa settlement process
- [Mastercard Settlement Guidelines](https://www.mastercard.us/en-us/business/overview/support/rules.html) - Settlement file specifications
