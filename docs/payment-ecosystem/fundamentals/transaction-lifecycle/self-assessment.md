---
title: "Self-Assessment Questions"
description: "Test your understanding of transaction lifecycle concepts"
sidebar_position: 8
sidebar_label: "Self-Assessment"
keywords: [self-assessment, transaction lifecycle questions, authorization questions, settlement questions]
---

# Transaction Lifecycle Self-Assessment

Test your understanding of the transaction lifecycle with these questions. Answers are provided below each question.

## Question 9: What is the difference between authorization and capture? Why are they sometimes separate?

**Answer:**

**Authorization:**
- Real-time approval from the issuer
- Places a HOLD on funds
- No money moves yet
- Lasts 7-31 days depending on transaction type

**Capture:**
- Finalizes the transaction
- Includes transaction in settlement batch
- Triggers actual money movement
- Interchange fees calculated

**Why Separate?**

1. **Final amount unknown at time of purchase:**
   - Hotels: Auth at check-in for estimated stay, capture at checkout for actual bill
   - Gas pumps: Auth for $150 max, capture actual pump amount ($45)
   - Restaurants: Auth for meal, capture with tip included

2. **Fulfillment timing:**
   - E-commerce: Auth at checkout, capture at shipment
   - Prevents charging for items that can't be shipped

3. **Order changes:**
   - If customer cancels before shipment, void the auth (free)
   - After capture, must process a refund (costs money)

**Real-world example:**

```
Hotel Scenario:
─────────────────────────────────────────────────────────

Day 1 (Check-in):
• Authorization for $500 (estimated 3 nights + incidentals)
• Creates $500 hold on guest's card
• Guest's available credit reduced by $500
• NO money transferred yet

Day 3 (Checkout):
• Final bill calculated: $425 (actual room charges + minibar)
• Capture $425 (finalize transaction for settlement)
• Original $500 hold released
• Guest sees $425 posted charge on statement

WHY SEPARATE?
• Hotel didn't know final amount at check-in
• Authorizing $500 ensures guest has sufficient credit
• Capturing only actual amount ($425) is fair to customer
• Releasing excess hold ($75) returns funds to guest immediately
```

---

## Question 10: A customer makes a $50 purchase on Friday at 8 PM. When will the merchant receive the funds?

**Answer:**

**Timeline:**

| Day | Event |
|-----|-------|
| **Friday 8 PM** | Authorization approved, sale completed |
| **Friday 11 PM** | Batch closes, transactions submitted |
| **Saturday** | Non-business day - no processing |
| **Sunday** | Non-business day - no processing |
| **Monday** | Clearing process runs |
| **Tuesday** | Settlement/funding (T+2) |

**Merchant receives ~$48.75** (after ~$1.25 in fees) on **Tuesday**.

If the merchant is on T+1 funding with their processor, they might receive funds Monday, but weekend transactions typically settle together.

**Key factors affecting timing:**
- Business days only (no weekends/holidays)
- Batch close time (earlier = faster settlement)
- Merchant's funding agreement with processor
- Risk profile (new or high-risk merchants may have delays)

**Detailed breakdown:**

```
FRIDAY 8:00 PM - Authorization Phase
──────────────────────────────────────────────────────────
Customer swipes card: $50.00
Authorization approved in 2 seconds
$50 hold placed on customer's card
Merchant sees "Approved" but NO MONEY YET


FRIDAY 11:00 PM - Batch Close
──────────────────────────────────────────────────────────
Merchant closes batch for the day
Transaction submitted to processor
Includes all Friday transactions


SATURDAY & SUNDAY - Weekend (No Processing)
──────────────────────────────────────────────────────────
Networks and banks don't process on weekends
Transaction waits in queue
Customer still sees "pending" charge


MONDAY - Clearing Process
──────────────────────────────────────────────────────────
Processor submits batch to Visa/Mastercard
Networks route to issuing banks
Issuer posts charge to customer's account ("pending" → "posted")
Interchange fees calculated:
• Interchange: $0.90 (1.80%)
• Network fee: $0.08 (0.15%)
• Processor fee: $0.27 (0.45% + $0.10)
• Total fees: $1.25


TUESDAY - Funding
──────────────────────────────────────────────────────────
Net settlement calculated: $50.00 - $1.25 = $48.75
Merchant's bank account credited: $48.75
Merchant can use funds


TOTAL TIME: Friday 8 PM → Tuesday (96+ hours)
```

:::tip Batch Timing Matters
If the merchant had closed their batch at 10 PM Friday (before 11 PM cutoff), vs missing the cutoff and having it close Monday, the difference could be an extra 2-3 days in funding delay.
:::

---

## Question 11: What's the difference between a void and a refund? When should each be used?

**Answer:**

**VOID:**
- **When:** Same day, before batch closes
- **What:** Cancels authorization, releases hold
- **Cost:** Usually FREE
- **Timing:** Immediate release of funds
- **Use when:** Wrong amount, duplicate, customer changed mind same day

**REFUND:**
- **When:** After batch has settled (next day or later)
- **What:** New credit transaction to card
- **Cost:** Transaction fees apply; interchange usually NOT returned
- **Timing:** 3-10 days for customer to see credit
- **Use when:** Returns, issues discovered after settlement

**Best Practice:**
Always void when possible. A $100 sale followed by a $100 refund costs the merchant ~$1.80 in interchange they don't get back. A void costs nothing.

**Detailed comparison:**

```
SCENARIO: Customer buys $100 item, then returns it
────────────────────────────────────────────────────────────


OPTION 1: VOID (Same Day, Before Batch Close)
──────────────────────────────────────────────────────────

Timeline:
• 2:00 PM: Sale for $100, authorization approved
• 3:00 PM: Customer changes mind, returns item
• 3:05 PM: Merchant voids transaction (batch hasn't closed yet)

Customer Impact:
• 2:00 PM: Sees $100 pending hold
• 3:05 PM: Hold released (within hours)
• Never sees a posted charge

Merchant Cost:
• Interchange: $0 (transaction voided before settlement)
• Processing fees: $0 (no settlement occurred)
• Total cost: $0

MERCHANT WINS: Free to reverse


OPTION 2: REFUND (Next Day, After Batch Closed)
──────────────────────────────────────────────────────────

Timeline:
• Monday 2:00 PM: Sale for $100, authorization approved
• Monday 11:00 PM: Batch closes, transaction settles
• Tuesday 10:00 AM: Merchant receives $97.50 (net of fees)
• Wednesday: Customer returns item
• Wednesday: Merchant processes $100 refund

Customer Impact:
• Monday: $100 charge posted to card
• Wednesday: $100 credit initiated
• Friday-Monday: $100 credit posts (takes 3-10 days)
• Temporary: Customer has paid $100, waiting for refund

Merchant Cost:
• Original sale interchange: $1.80 (NOT returned)
• Refund processing fee: ~$0.50
• Total cost: $2.30 for a transaction that nets to $0

MERCHANT LOSES: $2.30 on a returned item


DECISION TREE:
────────────────────────────────────────────────────────────

Need to reverse a transaction?
        │
        ▼
Is batch still open (same day)?
        │
        ├── YES ──► VOID IT
        │           • Free
        │           • Fast for customer
        │           • No fees
        │
        └── NO ──► REFUND IT
                    • Costs interchange + fees
                    • Slower for customer (3-10 days)
                    • Only option after settlement
```

**Special cases:**

```
AUTHORIZATION REVERSAL (Related to Void)
────────────────────────────────────────────────────────────

Similar to void but specifically releases the authorization hold:

Use when:
• Customer cancels order before shipment (e-commerce)
• Duplicate authorization detected
• Incorrect amount authorized

Benefit:
• Releases hold within 24 hours (vs 7 days for expiration)
• Better customer experience
• No interchange charged


CHARGEBACK (Customer-Initiated Forced Refund)
────────────────────────────────────────────────────────────

What it is:
• Customer disputes transaction with their bank
• Issuer forces reversal

Cost to merchant:
• Transaction amount: $100
• Chargeback fee: $15-$25
• Total: $115-$125 loss

Much worse than refund!
Avoid by processing legitimate refunds proactively.
```

---

## Question 12: What happens when an authorization expires before capture?

**Answer:**

When an authorization expires:

1. **The hold drops** - Customer's available credit is restored
2. **Customer may spend** - Those funds are now available for other purchases
3. **Capture may fail** - If customer's credit situation changed

**Merchant options:**

| Option | Risk Level | When to Use |
|--------|------------|-------------|
| Re-authorize | Medium | Customer still has card, likely to approve |
| Force capture | High | Desperate measure, high decline/chargeback risk |
| Cancel order | Safe | When unable to fulfill or re-auth fails |

**Prevention:**
- Capture within 24-48 hours when possible
- For delayed fulfillment, authorize at shipment, not checkout
- Use incremental authorizations for extending holds
- Set up alerts for aging authorizations

**Detailed scenario:**

```
E-COMMERCE DELAYED FULFILLMENT PROBLEM
────────────────────────────────────────────────────────────

Day 1 - Customer Places Order:
• Customer orders $150 item
• Authorization approved: $150
• $150 hold placed on card
• Customer's available credit: $2,000 → $1,850

Day 3 - Item Still Being Prepared:
• Hold still active
• Customer's available credit: $1,850

Day 7 - Item Ready to Ship:
• Authorization EXPIRES (7-day limit for CNP)
• Hold automatically drops
• Customer's available credit: $1,850 → $2,000
• Customer may spend that $150 elsewhere

Day 8 - Merchant Tries to Capture:
• Capture request for $150
• NO VALID AUTHORIZATION EXISTS

Options:

OPTION 1: Re-Authorize (Recommended)
─────────────────────────────────────────────────
• Send new authorization request for $150
• If approved: Capture immediately and ship
• If declined: Contact customer for updated payment

Risks:
• Customer's credit situation may have changed
• They might have spent the $150
• Card could be expired/cancelled
• Declined auth = can't fulfill order

Success rate: ~85-90% if customer has good credit


OPTION 2: Force Capture (Risky)
─────────────────────────────────────────────────
• Submit capture WITHOUT valid authorization
• Hope issuer approves anyway

Risks:
• Higher interchange rate (2.5%+ "downgraded")
• Customer may dispute as "unauthorized"
• Chargeback risk high
• Against card network rules

Success rate: ~60-70%, but high chargeback risk


OPTION 3: Cancel Order (Safe)
─────────────────────────────────────────────────
• Refund or cancel the order
• Contact customer to re-purchase

Customer impact: Frustrated, may not re-order
Merchant impact: Lost sale


BEST PRACTICE - Authorize at Shipment:
─────────────────────────────────────────────────
Instead of authorizing at checkout:

Day 1: Customer places order
       NO authorization yet (or $0 auth to verify card)
       Send confirmation email

Day 7: Item ready to ship
       Authorize $150 NOW
       If approved: Capture immediately, ship item
       If declined: Contact customer for payment

Advantages:
• No expiration risk
• Current credit situation
• Higher success rates
• Better customer experience
```

**Authorization validity periods reference:**

| Transaction Type | Visa | Mastercard | Notes |
|-----------------|------|------------|-------|
| Standard retail (CP) | 7 days | 7 days | Most common |
| Card-not-present (CNP) | 7 days | 7 days | E-commerce |
| Hotels/Lodging | 31 days | 30 days | Extended period |
| Car rental | 31 days | 30 days | Extended period |
| Cruise lines | 31 days | 30 days | Extended period |

---

## Additional Study Questions

### Question 13: Why does interchange cost merchants money even on refunds?

**Answer:**

Interchange is a fee paid from the acquirer (merchant's bank) to the issuer (customer's bank) to compensate for:
- Credit risk
- Fraud liability
- Rewards programs
- Float (paying merchant before collecting from customer)

**On a sale:** Interchange is charged when the transaction settles.

**On a refund:** The transaction has already settled. The issuer already took on the risk and paid the merchant. Even though money flows back to the customer, the issuer doesn't return the interchange fee because they already incurred costs (rewards given, risk assumed, systems used).

**Example:**
```
Sale: $100
• Customer charged: $100
• Interchange to issuer: $1.80
• Merchant receives: $98.20 (net)

Refund: $100
• Customer refunded: $100
• Interchange to issuer: $0 (NOT returned to merchant)
• Merchant pays out: $100
• Merchant net loss: $1.80

Total merchant cost for sale + refund: $1.80 in interchange
```

**Exception:** Voids (same-day, before settlement) don't incur interchange because settlement never occurred.

---

### Question 14: What is the chargeback lifecycle and why should merchants respond to retrieval requests?

**Answer:**

**Chargeback lifecycle:**

1. **Retrieval Request** (Warning): Issuer asks for transaction documentation
2. **First Chargeback**: If not satisfied, issuer files chargeback
3. **Representment**: Merchant fights back with evidence
4. **Pre-Arbitration**: Second round if issuer disagrees
5. **Arbitration**: Final decision by card network

**Why respond to retrieval requests:**

- **They're a warning**: 30-50% of retrieval requests become chargebacks if ignored
- **Prevention opportunity**: Providing documentation often satisfies the issuer
- **Evidence preparation**: Even if it becomes a chargeback, you've prepared your defense
- **Low cost**: Responding takes time but no fees; chargebacks cost $15-$100 in fees

**Example:**
```
Retrieval Request:
• Cardholder: "I don't recognize this $75 charge from ABC Corp"
• Issuer: Sends retrieval request to merchant

Merchant responds with:
• Invoice showing detailed purchase description
• Delivery confirmation with signature
• Customer's email acknowledging receipt

Outcomes:
• 50% chance: Cardholder says "Oh, I remember now" → No chargeback
• 50% chance: Still disputed → Becomes chargeback, but merchant has evidence ready

If merchant ignores:
• 90%+ chance: Automatic chargeback filed
• Merchant loses by default
• $15-$25 chargeback fee
• No opportunity to defend
```

---

## Related Topics

- [Transaction Lifecycle Overview](./overview.md) - Core concepts
- [Pre-Authorizations](./pre-authorizations.md) - Partial and incremental auth
- [Authorization Reversals](./authorization-reversals.md) - Voiding transactions
- [Complete Example](./complete-example.md) - $100 coffee shop transaction walkthrough
- [Failure Scenarios](./failure-scenarios.md) - Declines, voids, refunds
- [Chargebacks](./chargebacks.md) - Dispute lifecycle
- [Settlement Files](./settlement-files.md) - Data and reconciliation

---

## Further Practice

### Scenario-Based Questions

**Scenario 1:** You're building a hotel booking platform. When should you authorize the customer's card?

<details>
<summary>Click to reveal answer</summary>

**Best practice: Authorize at check-in, not at booking time.**

Why:
- Booking might be weeks/months in advance
- Authorization expires in 7-31 days
- Customer's credit situation may change
- Card might expire before arrival

Better approach:
- At booking: Verify card with $0 or $1 authorization (then void)
- At check-in: Full pre-authorization for estimated stay + incidentals
- At checkout: Capture actual amount, release excess hold

This prevents authorization expiration and ensures payment at time of service.
</details>

**Scenario 2:** A customer placed an order 5 days ago. They just called to cancel. What should you do?

<details>
<summary>Click to reveal answer</summary>

**Check if batch has settled:**

- **If not settled (same day, batch still open):** VOID the transaction
  - Free for merchant
  - Hold drops immediately
  - No fees

- **If settled (next day or later):** REFUND the transaction
  - Costs interchange fees (~$1.80 on $100)
  - Takes 3-10 days for customer to see credit
  - Only option after settlement

- **If not captured yet (auth still pending):** AUTHORIZATION REVERSAL
  - Release the hold
  - Free for merchant
  - Hold drops within 24 hours

Most likely after 5 days: Authorization already captured and settled → Issue refund
</details>

**Scenario 3:** Your platform has a 0.85% chargeback ratio. What should you do?

<details>
<summary>Click to reveal answer</summary>

**You're in the Visa VDMP "Standard" threshold (0.9%):**

**Immediate actions:**
1. Analyze chargeback reason codes (fraud vs disputes)
2. Identify high-risk merchants/verticals
3. Implement stronger fraud prevention (3DS, AVS/CVV)
4. Improve merchant onboarding (better screening)
5. Educate merchants on chargeback prevention

**Program implications:**
- Visa VDMP Standard: Fines of $50 per chargeback
- Risk of escalation to "Excessive" (1.8%) if not addressed
- Could face merchant account termination

**Goal:** Get below 0.65% (Early Warning threshold) or ideally less than 0.50%

**Tools:**
- Chargeback alerts (Verifi, Ethoca)
- Better transaction descriptors
- Fraud screening
- Merchant training on evidence submission
</details>

---

## Study Tips

1. **Draw it out:** Sketch the three phases (Authorization, Clearing, Funding) and trace a transaction
2. **Follow the money:** Track where fees go in a $100 transaction
3. **Timeline practice:** Calculate funding dates for transactions on different days of the week
4. **Compare scenarios:** Void vs refund, hard decline vs soft decline, CP vs CNP
5. **Real-world observation:** Look at your own credit card statements and identify pending vs posted charges

---

**Ready to test yourself?** Try explaining the complete transaction lifecycle to someone unfamiliar with payments. If you can teach it clearly, you understand it.
