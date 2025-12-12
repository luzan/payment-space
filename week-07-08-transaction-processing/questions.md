# Week 7-8: Self-Assessment Questions

Answer these questions to validate understanding of transaction processing.

---

## Transaction Lifecycle

1. What is the difference between authorization and capture? Why are they separate operations?

2. A customer buys a $100 item. The authorization is approved, but the merchant never captures. What happens to the authorization? Does the customer get charged?

3. A merchant wants to charge $80 against a $100 authorization. Is this possible? What is it called?

4. What is the typical timeframe for capture after authorization? What happens if capture is delayed too long?

5. Explain the difference between a void and a refund. Which costs more in fees, and why?

---

## Settlement & Clearing

6. What is the difference between clearing and settlement?

7. A transaction is authorized Monday at 2pm, captured Monday at 11pm, and settles Wednesday. Explain each stage.

8. What does "T+2 settlement" mean? When will a merchant actually receive funds?

9. Why might there be a difference between the authorized amount and the settled amount?

---

## Message Formats

10. What is ISO 8583, and why is it still relevant even when working with JSON APIs?

11. What information is contained in DE 22 (Point of Service Entry Mode)? Why does this matter for risk and fees?

12. What is a Systems Trace Audit Number (STAN), and why is it important?

13. What response code indicates "Insufficient Funds"? How should the system handle this?

---

## Decline Handling

14. What is the difference between a soft decline and a hard decline?

15. A transaction declines with "Do Not Honor" (05). Should this be retried? What information does this response actually provide?

16. What is an Account Updater service, and how does it improve authorization rates?

17. A subscription payment fails because the card is expired. What automated systems could recover this payment?

---

## Routing & Optimization

18. What is payment cascading? What are the risks?

19. Why might a company use multiple payment processors? What are the benefits and complexity tradeoffs?

20. What is Level 2 / Level 3 data, and how does it affect interchange rates?

21. A merchant's authorization rate is 85%. What might be causing this, and what strategies could improve it?

---

## Reconciliation

22. What is a "reconciliation break"? Give an example of how one might occur.

23. Why is three-way reconciliation (gateway, processor, bank) necessary?

24. A merchant sees a transaction authorized but not in their settlement file. What are possible explanations?

25. How do chargebacks affect the reconciliation process?

---

## Scenario Questions

26. **Scenario:** A hotel authorizes $500 for a room, but the final bill is $450 after the guest doesn't use the minibar. Walk through the transaction lifecycle.

27. **Scenario:** An e-commerce merchant batches transactions at midnight. A customer places an order at 11pm and another at 1am. When will each customer's card be charged, and when will the merchant receive funds?

28. **Scenario:** A transaction fails at Processor A with a soft decline. The system cascades to Processor B, which approves it. However, Processor A also eventually approves (delayed response). How should this be handled?

29. **Scenario:** Monthly reconciliation shows 10,000 authorized transactions but only 9,850 settled transactions. What are the possible reasons for this discrepancy?

30. **Scenario:** Design an API for a payment gateway that handles: authorization, capture, void, refund, and sale (auth + capture). What endpoints would exist, what would the request/response structures include, and how would idempotency be handled?

---

## Batch Processing & File Formats

31. A settlement file arrives in CSV format. What validation steps should be performed before processing?

32. A batch file contains 10,000 transactions but 5 have formatting errors. How should this be handled?

33. What are the typical file formats used for settlement files, and what are the tradeoffs?

34. **Scenario:** A settlement file is expected daily at 2am but hasn't arrived by 3am. What should happen?

---

## Error Handling & Retry Logic

35. A payment processor returns a "timeout" error. Should this be retried? How many times, and with what backoff strategy?

36. What is the difference between a transient error and a permanent error? Give examples of each.

37. How does a circuit breaker pattern help in payment processing?

38. A transaction fails with "insufficient funds" (hard decline). Should this be retried? Why or why not?

39. **Scenario:** Design a retry strategy for payment API calls. Consider: which errors to retry, retry count, backoff algorithm, and idempotency.
