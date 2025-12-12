# Week 9-10: Self-Assessment Questions

Answer these questions to validate understanding of platform architecture.

---

## Entity Modeling

1. What is the relationship between a Platform, Sub-merchant, and Transaction? Draw the entity relationships.

2. Why might a sub-merchant have multiple bank accounts? How should this be modeled?

3. A merchant has three physical locations. How should this hierarchy be modeled, and why does it matter for reporting and settlements?

4. What states should a sub-merchant entity transition through, from application to termination?

5. How should pricing/fee schedules be modeled to support different rates for different platforms or merchant tiers?

---

## Transaction Modeling

6. A transaction can be authorized, partially captured twice, and then partially refunded. Design a data model that accurately tracks all these states.

7. Why should transaction records be immutable? How do updates (like status changes) get recorded?

8. What is an idempotency key, and how should it be stored and used?

9. How should multi-currency transactions be modeled? What fields are needed?

10. A settlement file arrives with 10,000 transactions. How should these be linked to existing authorization records?

---

## Audit & Compliance

11. What information must an audit log entry contain to be useful for compliance purposes?

12. How should PII be handled in application logs? What about in audit logs?

13. A regulator requests all actions taken on a specific merchant account over the past 2 years. What system design enables this query?

14. How long should KYC documents be retained after a merchant is terminated?

15. A customer exercises their right to deletion under GDPR. What can and cannot be deleted in a payment system?

---

## Event Systems

16. What is the difference between "at-least-once" and "exactly-once" delivery? Which is typically used for webhooks, and why?

17. Design a webhook retry strategy. What backoff schedule makes sense? When should retries stop?

18. A platform receives duplicate webhook events. How should their system handle this?

19. What information should be included in a webhook payload for a "transaction.captured" event?

20. How should webhook signatures be implemented and verified?

---

## Money Movement

21. Explain the difference between gross settlement and net settlement from the merchant's perspective.

22. A merchant has $10,000 in sales, $500 in refunds, a 10% rolling reserve, and $200 in fees. Calculate the payout amount.

23. How should negative balances be handled? What are the options?

24. Design the payout calculation logic for daily payouts. What inputs are needed, and what's the output?

25. How should fee disputes be modeled and resolved?

---

## Ledger Design

26. Using double-entry bookkeeping, record a $100 transaction with a $3 fee. What accounts are debited and credited?

27. What is the difference between "pending" and "available" balance? Give examples of what affects each.

28. How would a chargeback be recorded in a ledger system?

29. Why is double-entry bookkeeping valuable for payment platforms, even though it adds complexity?

---

## Scenario Questions

30. **Scenario:** Design the database schema for a payment facilitator platform. Include: platforms, sub-merchants, transactions, disputes, settlements, and payouts. Show the primary keys, foreign keys, and key fields for each table.

31. **Scenario:** A platform complains they're receiving duplicate webhook events. Investigate the possible causes and design a solution that prevents duplicates at both the sender and receiver level.

32. **Scenario:** A sub-merchant requests their data be deleted. Walk through what can be deleted, what must be retained, and how to handle the retained data to minimize exposure.

33. **Scenario:** Design an audit system that can answer: "Who viewed this merchant's bank account details in the past 30 days?" What needs to be logged, and how?

34. **Scenario:** A bug caused 100 transactions to be settled incorrectly (wrong amounts). Design a process to identify, correct, and reconcile these transactions while maintaining audit integrity.

35. **Scenario:** The platform needs to support both USD and EUR transactions with settlements in the merchant's local currency. Design the data model and fee calculation approach.

---

## Security Architecture Beyond PCI

36. How should API keys be managed and rotated in a payment platform?

37. What is role-based access control (RBAC), and how should it be implemented for a payment platform?

38. A developer needs to access production data for debugging. What security controls should be in place?

39. **Scenario:** Design an authentication and authorization system for a payment platform API. Consider: API keys, OAuth, roles, and permissions.

---

## Operational Monitoring & Observability

40. What are the key metrics to monitor for a payment platform? What are acceptable thresholds?

41. A payment platform processes 1,000 TPS. How would you monitor performance and detect issues?

42. What is distributed tracing, and why is it important for payment systems?

43. **Scenario:** Design a monitoring dashboard for a payment platform. What metrics, alerts, and visualizations would you include?

---

## Testing Strategies for Payment Systems

44. What test card numbers should be used for different scenarios (approval, decline, fraud)?

45. How would you test a chargeback workflow without actually creating real chargebacks?

46. A payment integration needs to be tested. What's the difference between using a sandbox vs. mocks?

47. **Scenario:** Design a testing strategy for a payment platform. Include: unit tests, integration tests, end-to-end tests, and load tests.

---

## Scaling & Performance Architecture

48. A payment platform needs to handle 10,000 TPS. What scaling strategies would you recommend?

49. How would you design a database schema that can scale to billions of transactions?

50. What is the difference between horizontal and vertical scaling? Which is better for payment systems?

51. **Scenario:** A payment platform is experiencing slow query performance on the transactions table. What optimization strategies would you consider?
