# Week 7-8: Topics to Research

## Week 7: Transaction Lifecycle & Message Formats

### 7.1 Authorization Phase

**Research Focus:**

- What happens during authorization (real-time)
- Authorization request flow: merchant → acquirer → network → issuer
- Authorization response codes and their meanings
- Authorization holds and their duration
- Pre-authorization vs. final authorization
- Address Verification (AVS) during authorization
- CVV verification during authorization

**Key Terms to Define:**

- Authorization
- Authorization code (auth code)
- Authorization hold
- Pre-auth / Pre-authorization
- Zero-dollar authorization
- Incremental authorization
- AVS response codes
- CVV response codes

### 7.2 Capture Phase

**Research Focus:**

- What capture means (confirming the transaction)
- Timing: same-day capture vs. delayed capture
- Partial captures: when and why
- Multiple captures against single authorization
- Capture expiration (typically 7-30 days)
- Auth-capture vs. sale (combined operation)

**Key Terms to Define:**

- Capture
- Partial capture
- Multi-capture
- Auth-capture vs. sale
- Capture deadline

### 7.3 Clearing & Settlement

**Research Focus:**

- Clearing: batch submission of transactions
- Settlement: actual fund transfer
- Timing of settlement (T+1, T+2, etc.)
- Net settlement vs. gross settlement
- Interchange calculation during clearing
- Settlement files and formats
- Funding to merchant accounts

**Key Terms to Define:**

- Clearing
- Settlement
- Batch processing
- Settlement date
- Funding
- Net settlement

### 7.4 Voids, Refunds, and Reversals

**Research Focus:**

- Void: canceling before settlement (no interchange)
- Refund: returning funds after settlement (interchange charged)
- Reversal: technical correction
- Timing implications for each operation
- Partial refunds
- Original credit transactions (OCT)
- Why voids are preferable when possible

**Key Terms to Define:**

- Void
- Refund / Credit
- Reversal
- Original Credit Transaction (OCT)

### 7.5 ISO 8583 Message Format

**Research Focus:**

- What ISO 8583 is and why it matters
- Message type indicators (0100, 0110, 0200, etc.)
- Bitmap structure
- Key data elements and their purposes
- How modern APIs abstract ISO 8583
- When direct ISO 8583 knowledge is still needed

**Key Data Elements to Study:**

- DE 2: Primary Account Number (PAN)
- DE 3: Processing Code
- DE 4: Transaction Amount
- DE 11: Systems Trace Audit Number (STAN)
- DE 18: Merchant Category Code (MCC)
- DE 22: Point of Service Entry Mode
- DE 37: Retrieval Reference Number
- DE 38: Authorization Code
- DE 39: Response Code
- DE 41: Card Acceptor Terminal ID
- DE 42: Card Acceptor ID Code (Merchant ID)
- DE 43: Card Acceptor Name/Location

### 7.6 Response Codes

**Research Focus:**

- Issuer response codes (approval, decline reasons)
- Network response codes
- Gateway/processor response codes
- Mapping between different response code systems
- Categorizing declines: soft vs. hard

**Key Response Code Categories:**

- Approved (00, 10)
- Insufficient funds (51)
- Do not honor (05)
- Invalid card number (14)
- Expired card (54)
- Suspected fraud (59)
- Pick up card (04, 07)

---

## Week 8: Routing, Optimization & Reconciliation

### 8.1 Payment Routing

**Research Focus:**

- How routing decisions are made
- BIN-based routing
- Cost-based routing
- Performance-based routing
- Geographic routing considerations
- Multi-processor strategies
- Fallback and failover routing

**Key Terms to Define:**

- Payment routing
- BIN routing
- Least-cost routing
- Failover
- Cascading

### 8.2 Decline Recovery & Optimization

**Research Focus:**

- Soft declines vs. hard declines
- Retry strategies for soft declines
- Account updater services
- Network tokenization benefits
- Decline salvage techniques
- Measuring authorization rates
- A/B testing payment flows

**Key Metrics to Track:**

- Authorization rate
- Approval rate
- Decline rate by reason
- Retry success rate

### 8.3 Transaction Cascading

**Research Focus:**

- What cascading means (retry with different processor)
- When cascading is appropriate
- Cascading risks (duplicate charges)
- Idempotency in cascading
- Cost implications of cascading

### 8.4 Interchange Optimization

**Research Focus:**

- What determines interchange rates
- Level 2 and Level 3 data
- Enhanced data benefits
- Interchange qualification
- Downgrade reasons and prevention
- Commercial card optimization

**Key Terms to Define:**

- Interchange qualification
- Level 2 / Level 3 data
- Downgrade
- Commercial card
- Purchasing card

### 8.5 Reconciliation Fundamentals

**Research Focus:**

- Why reconciliation is necessary
- Authorization to settlement matching
- Handling timing differences
- Reconciliation breaks and resolution
- Three-way reconciliation (gateway, processor, bank)
- Automated vs. manual reconciliation

**Key Terms to Define:**

- Reconciliation
- Reconciliation break
- Settlement file
- Funding file
- Exception handling

### 8.6 Fee Reconciliation

**Research Focus:**

- Types of fees (interchange, assessment, processor, gateway)
- Fee calculation methods
- Fee statement analysis
- Identifying fee discrepancies
- Effective rate calculation
- Fee passthrough models

**Fee Types to Understand:**

- Interchange fees
- Network assessments
- Processor markup
- Gateway fees
- Chargeback fees
- Monthly/annual fees

### 8.7 Funding Reconciliation

**Research Focus:**

- Gross vs. net funding
- Funding timing and schedules
- Reserve account deductions
- Refund impact on funding
- Chargeback impact on funding
- Reconciling bank deposits to transactions
