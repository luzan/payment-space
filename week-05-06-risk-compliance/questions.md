# Week 5-6: Self-Assessment Questions

Answer these questions to validate understanding of risk and compliance.

---

## Chargebacks

1. What is the difference between a refund and a chargeback? Why does this distinction matter financially?

2. A merchant has 100 transactions and 2 chargebacks. What is the chargeback ratio? Is this acceptable?

3. What is representment, and what determines whether it's worth pursuing?

4. A cardholder claims they never received merchandise. What evidence could successfully dispute this chargeback?

5. What happens when a PayFac enters the Visa Dispute Monitoring Program? What are the consequences of not improving?

---

## Fraud

6. What is "card testing" and what transaction patterns indicate it's happening?

7. Explain "friendly fraud." Why is it particularly difficult to prevent?

8. What is triangulation fraud? Why is the legitimate merchant often unaware they're involved?

9. What is the "liability shift" with 3D Secure, and why does it matter?

10. A merchant suddenly shows a spike in small transactions ($1-5) from different cards. What might this indicate?

---

## PCI-DSS

11. What are the four PCI compliance levels, and what determines which level applies?

12. As a PayFac (Level 1 Service Provider), what compliance validation is required annually?

13. What is "PCI scope" and why is reducing scope architecturally important?

14. How does tokenization reduce PCI scope? What still remains in scope?

15. What is the difference between a QSA and an ASV? When is each needed?

16. A system handles tokenized card data but never touches actual PANs. Is it in PCI scope?

---

## AML/BSA

17. What are the three stages of money laundering, and how might a payment platform be exploited at each stage?

18. What is "structuring" and why is it a red flag?

19. When must a SAR (Suspicious Activity Report) be filed? What's the threshold?

20. What's the difference between transaction monitoring for fraud versus AML? What patterns differ?

---

## Scenario Questions

21. **Scenario:** A merchant's chargeback ratio jumps from 0.5% to 1.5% in one month. Most are reason code 10.4 (fraud). What immediate actions should be taken? What's the risk if nothing is done?

22. **Scenario:** The platform detects a sub-merchant receiving many transactions just under $10,000, split across multiple days, always in round numbers. What might this indicate and what's the appropriate response?

23. **Scenario:** A new developer joins the team and asks why card numbers are never stored directly in the database. Explain the PCI implications and the tokenization strategy.

24. **Scenario:** A merchant claims they shipped merchandise and provides a tracking number, but the customer disputes claiming it was an empty box. How should this chargeback be handled?

25. **Scenario:** Design a real-time monitoring system that would catch: (a) card testing, (b) chargeback ratio spikes, (c) potential structuring. What signals would trigger alerts?

26. **Scenario:** The company is preparing for its first PCI Level 1 audit. What documentation and evidence should be prepared? What are common findings that cause audit failures?
