# Week 9-10: Topics to Research

## Week 9: Data Modeling & Compliance Architecture

### 9.1 Core Entity Modeling

**Research Focus:**

- Platform/Partner entity: the customer using the PayFac service
- Sub-merchant entity: the merchants onboarded by platforms
- Hierarchical relationships: platform → sub-merchant → location
- Merchant account vs. bank account relationships
- Status lifecycles for each entity (pending, active, suspended, terminated)

**Key Entities to Model:**

- Platform
- Sub-merchant / Connected Account
- Location / Store
- Bank Account
- Representative / Principal
- Pricing Plan / Fee Schedule

### 9.2 Transaction Data Modeling

**Research Focus:**

- Transaction states: pending, authorized, captured, settled, refunded, disputed
- Immutable transaction records vs. mutable status
- Linking transactions to settlements
- Multi-currency handling
- Idempotency keys and duplicate prevention
- Metadata and custom fields

**Key Entities to Model:**

- Transaction
- Authorization
- Capture
- Refund
- Void
- Settlement
- Payout

### 9.3 Dispute & Chargeback Modeling

**Research Focus:**

- Dispute lifecycle states
- Evidence document storage
- Response deadline tracking
- Financial impact tracking (provisional vs. final)
- Linking disputes to original transactions
- Reason code categorization

**Key Entities to Model:**

- Dispute
- Dispute Evidence
- Dispute Response
- Chargeback
- Representment

### 9.4 Audit Trail Design

**Research Focus:**

- Why immutable audit logs are required
- What events need to be logged
- Audit log schema design
- Who did what, when, to what
- User vs. system actions
- Preventing audit log tampering
- Retention periods by data type

**Key Principles:**

- Append-only data structures
- Timestamp integrity
- Actor identification
- Before/after state capture
- Searchable and filterable

### 9.5 PII Handling Architecture

**Research Focus:**

- What constitutes PII in payment systems
- Encryption at rest requirements
- Access control and least privilege
- Data masking for display
- PII in logs (don't do it)
- Right to deletion vs. regulatory retention
- Pseudonymization strategies

**Key PII Categories:**

- Cardholder data (PCI scope)
- Personal identifiers (name, SSN, DOB)
- Contact information
- Bank account details
- Government IDs and documents

### 9.6 Document Storage Architecture

**Research Focus:**

- KYC/KYB document storage requirements
- Document retention policies by type
- Secure storage and access
- Document versioning
- Audit trail for document access
- Integration with verification providers

---

## Week 10: Event Systems & Money Movement

### 10.1 Event-Driven Architecture

**Research Focus:**

- Why payment platforms need event-driven design
- Event sourcing vs. event notification
- Event schema design
- Event ordering and sequencing
- Eventual consistency handling
- Event replay and recovery

**Key Events to Model:**

- Transaction events (created, authorized, captured, etc.)
- Dispute events (opened, evidence_due, won, lost)
- Merchant events (created, verified, suspended)
- Payout events (initiated, completed, failed)

### 10.2 Webhook System Design

**Research Focus:**

- Webhook delivery guarantees
- Retry strategies and backoff
- Dead letter queues
- Webhook signature verification
- Idempotent webhook handlers
- Webhook event batching vs. individual delivery
- Customer webhook configuration

**Key Design Decisions:**

- At-least-once vs. exactly-once delivery
- Retry schedule (exponential backoff)
- Maximum retry attempts
- Webhook timeout handling
- Event ordering guarantees

### 10.3 Idempotency Design

**Research Focus:**

- Why idempotency is critical in payments
- Idempotency key strategies
- Server-side idempotency implementation
- Idempotency window/TTL
- Handling partial failures idempotently
- Client-side idempotency requirements

**Implementation Patterns:**

- Idempotency key storage
- Request fingerprinting
- Response caching
- Concurrent request handling

### 10.4 Payout Architecture

**Research Focus:**

- Payout schedules (daily, weekly, monthly, manual)
- Net vs. gross payouts
- Reserve calculations and deductions
- Multi-currency payouts
- Payout failures and retries
- Payout reconciliation

**Key Decisions:**

- When to calculate payouts
- How to handle negative balances
- Rolling reserve implementation
- Minimum payout thresholds

### 10.5 Fee Distribution Modeling

**Research Focus:**

- Fee types: platform fees, transaction fees, monthly fees
- Fee calculation timing (real-time vs. settlement)
- Fee splits: platform vs. PayFac vs. processor
- Revenue share models
- Fee invoicing vs. automatic deduction
- Fee disputes and adjustments

**Key Entities to Model:**

- Fee Schedule
- Fee Transaction
- Platform Revenue
- Invoice

### 10.6 Balance & Ledger Systems

**Research Focus:**

- Double-entry bookkeeping principles
- Account balance tracking
- Ledger entry design
- Balance reconciliation
- Pending vs. available balance
- Multi-currency balance handling

**Key Concepts:**

- Debits and credits
- Account types (asset, liability, equity, revenue, expense)
- Journal entries
- Trial balance
- Reconciliation reports

### 10.7 API Design for Payments

**Research Focus:**

- RESTful API design for payment operations
- Versioning strategies
- Error response design
- Pagination for lists
- Filtering and searching
- Webhook vs. polling patterns
- Rate limiting considerations

**API Design Patterns:**

- Resource naming conventions
- State machine transitions via API
- Long-running operation handling
- Bulk operations
