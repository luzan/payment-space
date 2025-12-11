# Week 1-2: Self-Assessment Questions

Answer these questions to validate understanding of the payment ecosystem.

---

## Four-Party Model

1. In a credit card transaction, who pays the interchange fee and who receives it?

2. Why does the acquiring bank take on risk when a merchant accepts a card payment?

3. What happens to a transaction if the issuing bank declines it? Where does the decline message originate?

4. A customer buys a $100 item. The merchant receives $97.50. Break down where the $2.50 went.

---

## Card Networks

5. What is the fundamental difference between Visa/Mastercard (open-loop) and American Express (closed-loop)?

6. Why do card networks publish rules that all participants must follow? What happens if a merchant violates network rules?

7. How does a card network route an authorization request to the correct issuing bank?

8. What is a BIN, and why is it important for transaction routing?

---

## Industry Players

9. A merchant says they use "Stripe for payments." What roles is Stripe actually playing? (processor, gateway, PayFac, etc.)

10. An ISO approaches our platform to resell payment services. What does the ISO expect to receive from us, and what do they provide in return?

11. Why would an ISV (like a restaurant POS software company) want to become a PayFac instead of just referring merchants to an ISO?

12. What is the key difference between a payment gateway and a payment processor?

---

## PayFac Model

13. Why can PayFacs onboard merchants faster than traditional acquirers?

14. If a sub-merchant commits fraud and disappears, who is financially liable for chargebacks?

15. What does "master merchant" mean, and why is this structure both an advantage and a risk?

16. What are the main reasons a business would choose to become a PayFac versus using a PayFac-as-a-Service solution?

---

## Scenario Questions

17. **Scenario:** A small e-commerce business wants to accept cards. They're comparing signing up directly with a bank versus using Square. What are the tradeoffs for each approach?

18. **Scenario:** Our platform is building payment services. A potential customer asks if they'll have their own merchant ID (MID) or share one with other merchants. What model are they asking about, and what are the implications?

19. **Scenario:** A transaction is authorized but the merchant never captures it. What happens? Who is affected?

20. **Scenario:** Draw the complete flow of a $50 online purchase, from the customer clicking "Pay" to the merchant seeing funds in their bank account. Include all parties involved and approximate timing.
