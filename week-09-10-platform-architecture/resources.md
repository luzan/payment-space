# Week 9-10: Resources & Reading Materials

## API Documentation to Study

Study these for data model and API design patterns:

### Stripe

- **Stripe Connect Documentation**
  - docs.stripe.com/connect
  - Focus on: Account object, Balance object, Transfer object

- **Stripe API Reference**
  - docs.stripe.com/api
  - Focus on: Resource structure, relationship patterns, pagination

- **Stripe Webhooks**
  - docs.stripe.com/webhooks
  - Focus on: Event structure, signature verification, retry behavior

### Adyen

- **Adyen for Platforms**
  - docs.adyen.com/platforms
  - Focus on: Account holder structure, balance accounts

- **Adyen Webhooks**
  - docs.adyen.com/development-resources/webhooks
  - Focus on: Event types, HMAC verification

### Square

- **Square API Reference**
  - developer.squareup.com/reference
  - Focus on: Merchant, Location, Payment objects

## Architecture Patterns

### Event-Driven Architecture

- **Martin Fowler - Event Sourcing**
  - Search: "Martin Fowler Event Sourcing"
  - Foundational concepts for event-driven systems

- **Enterprise Integration Patterns**
  - Focus on: Message channels, idempotent receivers, dead letter channels

### Ledger Design

- **Double-Entry Bookkeeping Fundamentals**
  - Search for accounting basics for software engineers
  - Focus on: Debits, credits, account types, journal entries

- **Modern Treasury Blog**
  - moderntreasury.com/blog
  - Focus on: Ledger design, money movement patterns

## Technical Resources

### Database Design

- **PostgreSQL Documentation**
  - Focus on: ACID properties, transaction isolation, constraint enforcement

- **Temporal Data Modeling**
  - Search: "Temporal data modeling patterns"
  - Focus on: History tables, slowly changing dimensions

### Distributed Systems

- **Idempotency Patterns**
  - Search: "Idempotency patterns distributed systems"
  - Focus on: Idempotency keys, request deduplication

- **Webhook Design Best Practices**
  - Search: "Webhook design best practices"
  - Focus on: Delivery guarantees, retry strategies, signature verification

## Compliance Resources

### Data Retention

- **PCI DSS Data Retention Requirements**
  - Focus on: What must be retained, what must be deleted

- **GDPR for Payment Processors**
  - Focus on: Right to erasure vs. legal retention requirements

### Audit Logging

- **SOC 2 Audit Log Requirements**
  - Focus on: What needs to be logged, retention requirements

- **PCI DSS Logging Requirements**
  - Focus on: Access logging, log integrity, review requirements

## Recommended Reading

### Books

- "Designing Data-Intensive Applications" by Martin Kleppmann
  - Focus on: Event sourcing, stream processing, consistency patterns

- "Building Microservices" by Sam Newman
  - Focus on: Event-driven architecture, service boundaries

### Articles

- Search for: "Payment platform architecture"
- Search for: "Double entry accounting for developers"
- Search for: "Webhook reliability patterns"
- Search for: "Idempotent API design"

## Research Keywords

When searching for information:

- "Payment platform data model"
- "Ledger system design"
- "Webhook delivery guarantees"
- "Idempotency key implementation"
- "Event sourcing payments"
- "PII handling best practices"
- "Audit trail database design"
- "Multi-tenant SaaS architecture"
- "Balance calculation real-time"
- "Reserve account modeling"

## Open Source Projects

Study these for implementation patterns:

### Ledger Systems

- **Medici** (npm package) - Double-entry accounting
- **Tigerbeetle** - Financial accounting database
- Search GitHub for "double entry ledger"

### Event Systems

- **Convoy** - Webhooks gateway
- Search GitHub for "webhook delivery service"

## Tools & Technologies

### Databases for Payment Systems

- **PostgreSQL** - ACID compliance, complex queries
- **TimescaleDB** - Time-series data for transactions
- **MongoDB** - Document storage for audit logs (study tradeoffs)

### Message Queues

- **RabbitMQ** - Reliable message delivery
- **Apache Kafka** - Event streaming
- **Amazon SQS** - Managed queue service

### Event Infrastructure

- **Svix** - Webhook service
- **Hookdeck** - Webhook infrastructure
