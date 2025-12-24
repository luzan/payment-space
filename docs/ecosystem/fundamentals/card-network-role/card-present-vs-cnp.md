---
title: "Card-Present vs Card-Not-Present"
description: "Understanding the differences in risk, fraud, and interchange rates between in-person and online transactions"
sidebar_position: 5
sidebar_label: "Card-Present vs CNP"
keywords:
  - card-present
  - card-not-present
  - CNP
  - CP transactions
  - e-commerce interchange
  - EMV chip
  - contactless payments
  - CVV verification
  - 3D Secure
  - fraud prevention
---

# Card-Present vs Card-Not-Present Transactions

Networks distinguish transaction types by risk level, which directly affects interchange rates and fraud liability. Understanding this distinction is critical for pricing, risk management, and fraud prevention.

---

## Card-Present (CP) Transactions

Card-present transactions occur when the physical card is presented at the point of sale, allowing for stronger authentication.

### Definition

**CARD-PRESENT:** Physical card present during transaction, with direct verification of the card's authenticity.

### Transaction Methods

**EMV CHIP INSERTION (Most Secure):**
- Card inserted into terminal
- Cryptographic authentication
- Dynamic data (changes per transaction)
- Extremely difficult to counterfeit
- Liability shift: Issuer bears fraud risk

**CONTACTLESS/NFC TAP:**
- Card tapped near terminal
- Uses NFC technology
- Same security as chip (EMV)
- Apple Pay, Google Pay, Samsung Pay
- Transaction limit (typically $100-250 without PIN)

**MAGNETIC STRIPE SWIPE (Least Secure):**
- Card swiped through reader
- Static data (same every time)
- Easy to counterfeit (skimming)
- Being phased out globally
- Liability shift: Merchant bears fraud risk if chip-capable card swiped

### Characteristics

**SECURITY ADVANTAGES:**
- Physical card verified at point of sale
- Customer present (reduces fraud)
- EMV chip provides cryptographic authentication
- Real-time card validation
- Biometric authentication (for mobile wallets)

**FRAUD RISK:**
- **Very low:** 0.05% - 0.1% of transaction volume
- Counterfeit fraud nearly eliminated by EMV
- Lost/stolen card fraud still possible
- Contactless tap limits reduce exposure

**INTERCHANGE RATES:**
- **Lower** due to reduced fraud risk
- Typical range: 1.43% - 1.65% + $0.05-$0.10

**CHARGEBACK DEFENSE:**
- **Stronger** for merchants
- EMV liability shift protects merchants
- Card-present authorization proof
- Signature/PIN verification available

---

## Card-Not-Present (CNP) Transactions

Card-not-present transactions occur when the physical card is not presented, requiring alternative verification methods.

### Definition

**CARD-NOT-PRESENT:** Card not physically present during transaction; card details manually entered or stored.

### Transaction Methods

**E-COMMERCE (Online Checkout):**
- Customer enters card details on website
- Most common CNP method
- Requires CVV, expiration date
- Often includes AVS (Address Verification)
- 3D Secure available for enhanced security

**MOTO (Mail Order / Telephone Order):**
- Customer provides card details by phone or mail
- Manual entry by merchant
- Higher risk than e-commerce
- Common in call centers
- Declining in usage

**RECURRING BILLING:**
- Card details stored for subscription
- No CVV required after initial setup
- Authorization obtained once, charged repeatedly
- Common for SaaS, memberships, utilities

**IN-APP PURCHASES:**
- Mobile app transactions
- Card stored in app or device
- Apple Pay, Google Pay reduce CNP classification
- Game purchases, subscriptions

### Characteristics

**SECURITY CHALLENGES:**
- Card not physically verified
- Customer not physically present
- Relies on data elements (CVV, AVS)
- Easier to commit fraud
- Credential stuffing attacks

**FRAUD RISK:**
- **Higher:** 0.5% - 1.5% of transaction volume
- 10-15x higher than card-present
- Account takeover fraud
- Friendly fraud (illegitimate chargebacks)
- Testing stolen cards

**INTERCHANGE RATES:**
- **Higher** due to increased fraud risk
- Typical range: 1.80% - 2.95% + $0.10
- Premium cards even higher

**CHARGEBACK DEFENSE:**
- **Weaker** for merchants
- Customer can claim "card not present"
- Limited physical proof of transaction
- Delivery confirmation helps
- Digital goods hardest to defend

---

## Fraud Mitigation for CNP

Because CNP transactions carry higher fraud risk, merchants must implement additional verification.

### CVV/CVV2 Verification

**WHAT IT IS:**
- 3-4 digit code on back of card (Visa/MC/Discover) or front (Amex)
- Not stored in magnetic stripe or chip
- Proves physical card possession

**HOW IT WORKS:**
```text
Customer enters: 123
Merchant sends to issuer: CVV=123
Issuer verifies: Match/No Match
Response: N (No Match), M (Match), P (Not Processed), U (Unavailable)
```

**EFFECTIVENESS:**
- Reduces fraud by ~30-40%
- Required for optimal interchange
- Cannot be stored after authorization (PCI violation)

**LIMITATIONS:**
- Stolen physical card = valid CVV
- Phishing can capture CVV
- Not required for recurring billing

### AVS (Address Verification System)

**WHAT IT IS:**
- Compares billing address to address on file with issuer
- Checks numeric portions (street number, ZIP)
- US/Canada primarily

**HOW IT WORKS:**
```text
Customer enters: 123 Main St, 12345
Merchant sends: Street=123, ZIP=12345
Issuer compares to cardholder address
Response: Y (Yes), N (No), A (Partial), etc.
```

**RESPONSE CODES:**
| Code | Meaning | Risk Level |
|------|---------|------------|
| **Y** | Street and ZIP match | Low |
| **Z** | ZIP matches, street doesn't | Medium |
| **A** | Street matches, ZIP doesn't | Medium |
| **N** | Neither matches | High |
| **U** | Address not available | Medium |

**EFFECTIVENESS:**
- Reduces fraud by ~20-30%
- Helps qualify for better interchange
- Useful for risk scoring

**LIMITATIONS:**
- Only works in US/Canada
- Legitimate customers may have old address on file
- Many issuers don't return full data

### 3D Secure (Verified by Visa, Mastercard SecureCode)

**WHAT IT IS:**
- Additional authentication step
- Customer redirected to bank for verification
- Password, SMS code, or biometric
- Shifts liability to issuer if used

**VERSIONS:**

**3D Secure 1.0 (Legacy):**
- Static passwords
- Popup window (poor UX)
- High abandonment rates (10-20%)
- Being phased out

**3D Secure 2.0 (Current):**
- Risk-based authentication
- Frictionless for low-risk transactions
- Biometric authentication (fingerprint, face)
- Mobile-optimized
- Required in EU (SCA/PSD2)
- Lower abandonment (2-5%)

**LIABILITY SHIFT:**
```text
WITH 3D Secure (authenticated):
Chargeback liability → Issuer

WITHOUT 3D Secure:
Chargeback liability → Merchant
```

**ADOPTION:**
- **EU:** Mandatory for most transactions (PSD2/SCA)
- **US:** Optional, growing adoption
- **High-risk merchants:** Highly recommended

### Additional Fraud Tools

**DEVICE FINGERPRINTING:**
- Identifies devices by browser/OS characteristics
- Detects multiple cards from same device
- Tracks velocity patterns
- Helps identify fraudsters

**VELOCITY CHECKS:**
- Limit transactions per card/customer
- Monitor rapid-fire authorizations
- Flag unusual patterns
- Prevent card testing

**FRAUD SCORING:**
- Machine learning models
- Analyzes 100+ data points
- Real-time risk scores
- Accept/review/decline decisions

**EXAMPLE FRAUD RULES:**
- Decline if CVV doesn't match
- Review if AVS = N (no match)
- Limit 3 transactions per card per day
- Block countries with high fraud rates
- Flag mismatched email/IP country

---

## Interchange Rate Comparison

The difference in fraud risk translates directly to interchange costs.

### 2024-2025 Interchange Ranges

| Transaction Type | Typical Rate | Notes |
|------------------|--------------|-------|
| **CP - Debit (regulated)** | 0.05% + $0.21 | Durbin cap (banks >$10B) |
| **CP - Debit (unregulated)** | 0.80% - 1.40% + $0.15 | Small banks exempt from Durbin |
| **CP - Credit (standard)** | 1.54% + $0.10 | Visa CPS Retail (2024) |
| **CP - Credit (rewards)** | 1.65% + $0.10 | Visa Signature Preferred |
| **CNP - Credit (standard)** | 1.80% + $0.10 | Base e-commerce rate |
| **CNP - Credit (rewards)** | 2.30% - 2.50% + $0.10 | Most consumer cards |
| **CNP - Credit (premium)** | 2.60% - 3.15% + $0.10 | World Elite/Infinite |

:::info Key Insight
Interchange varies by 300+ categories. The above are representative examples. Actual rates depend on MCC, card type, processing method, and data provided (AVS match, Level 2/3 data, etc.).
:::

### Cost Impact Example

**$100 TRANSACTION COMPARISON:**

**Card-Present (Chip):**
```text
Interchange:        $1.54  (1.54% + $0.05)
Network fees:       $0.19
Acquirer markup:    $0.30
─────────────────────────
Total fees:         $2.03
Merchant receives:  $97.97
```

**Card-Not-Present (E-commerce):**
```text
Interchange:        $2.40  (2.30% + $0.10) [Rewards card]
Network fees:       $0.21  (includes digital commerce fee)
Acquirer markup:    $0.40
─────────────────────────
Total fees:         $3.01
Merchant receives:  $96.99
```

**DIFFERENCE:** CNP costs **$0.98 more** (48% higher) than CP on same card type

---

## Interchange Qualification

To qualify for optimal CNP interchange rates, merchants must provide specific data.

### Data Requirements for CNP

**MINIMUM REQUIRED:**
- Card number
- Expiration date
- Transaction amount
- Merchant category code

**FOR STANDARD RATES:**
- CVV/CVV2 match
- AVS response (at least partial match)
- Capture within 7 days of authorization

**FOR OPTIMAL RATES:**
- CVV match
- AVS full match (Y response)
- 3D Secure authentication
- Capture within 24 hours
- Level 2/3 data (for commercial cards)

**DOWNGRADE TRIGGERS:**
| Issue | Impact | Rate Penalty |
|-------|--------|--------------|
| No CVV | Downgrades to higher tier | +0.20% - 0.40% |
| AVS No Match (N) | Downgrades | +0.15% - 0.30% |
| Late capture (>7 days) | Downgrades | +0.30% - 0.50% |
| Missing data elements | Non-qualified rate | +0.50% - 1.00% |

---

## Industry-Specific Considerations

### E-Commerce Platforms

**CHALLENGES:**
- 100% CNP transactions
- Higher fraud rates
- Digital goods (no delivery proof)
- International customers

**STRATEGIES:**
- Implement 3D Secure 2.0
- Device fingerprinting
- Fraud scoring (Stripe Radar, Kount)
- Clear refund policies (reduce friendly fraud)
- Detailed product descriptions

**TYPICAL COSTS:**
- 2.5% - 3.5% all-in processing fees
- Higher for digital goods (3.5% - 4.5%)

### Restaurants (Card-Present Dominant)

**ADVANTAGES:**
- Mostly card-present (chip/tap)
- Lower interchange (1.54% - 1.65%)
- EMV liability shift

**CHALLENGES:**
- Tip adjustments (post-authorization)
- Quick service (speed vs security)

**TYPICAL COSTS:**
- 1.9% - 2.5% all-in processing fees

### Subscription/SaaS (Recurring CNP)

**CHALLENGES:**
- Card-on-file transactions
- No CVV after initial setup
- Higher friendly fraud ("I didn't authorize")
- Failed recurring charges

**STRATEGIES:**
- Initial 3D Secure authentication
- Account updater services (keep cards current)
- Clear subscription terms
- Cancellation flows

**TYPICAL COSTS:**
- 2.5% - 3.2% all-in processing fees
- Account updater: $0.05-$0.10 per card/month

---

## Liability Shift: Who Bears Fraud Risk?

Understanding fraud liability is crucial for both merchants and PayFacs.

### Card-Present Liability (EMV)

**IF MERCHANT HAS EMV-CAPABLE TERMINAL:**
- Chip card used → **Issuer liable** for counterfeit fraud
- Chip card swiped instead → **Merchant liable**
- Magnetic-only card → **Issuer liable**

**IF MERCHANT DOES NOT HAVE EMV TERMINAL:**
- Chip card presented → **Merchant liable** (should have upgraded)
- Magnetic card → **Issuer liable**

**EXAMPLE:**
```text
Scenario: Counterfeit chip card used at merchant
- Merchant has EMV terminal, chip used: Issuer liable
- Merchant has EMV terminal, card swiped: Merchant liable
- Merchant has old swipe-only terminal: Merchant liable
```

### Card-Not-Present Liability

**STANDARD CNP (No 3D Secure):**
- Fraudulent transaction → **Merchant liable**
- Merchant bears chargeback risk
- Must provide compelling evidence

**WITH 3D SECURE:**
- 3DS authenticated → **Issuer liable**
- Liability shift to issuer
- Merchant protected from fraud chargebacks

**WITH CVV/AVS:**
- Helps defend chargebacks but doesn't shift liability
- Merchant still ultimately liable
- Shows "reasonable effort" to verify

---

## Optimizing for Card-Present

When possible, card-present transactions are preferable for lower costs and fraud.

### Encouraging Card-Present

**FOR RETAIL:**
- Accept all contactless methods (Apple Pay, Google Pay)
- Fast checkout experience
- Clear payment terminal placement
- Train staff on EMV (don't allow swipe if chip works)

**FOR OMNICHANNEL:**
- Buy online, pick up in store (BOPIS)
- Process payment at pickup (card-present)
- Lower fraud, lower interchange
- Better customer experience

**FOR SERVICE BUSINESSES:**
- Mobile card readers (Square, SumUp)
- Process on-site rather than invoicing
- Immediate payment = better cash flow

---

## Key Takeaways

1. **CNP costs significantly more** - 20-50% higher fees due to fraud risk and higher interchange

2. **EMV shifted fraud online** - As card-present fraud declined, CNP fraud increased (fraud migrates to weakest point)

3. **3D Secure shifts liability** - Authentication protects merchants from fraud chargebacks

4. **Data quality affects rates** - CVV, AVS, timely capture all impact interchange qualification

5. **Industry matters** - E-commerce platforms inherently pay more than in-person retail

---

## Related Topics

**Card Network Fundamentals:**
- **[Card Network Role Overview](/ecosystem/fundamentals/card-network-role/)** - What card networks do
- **[Transaction Routing](/ecosystem/fundamentals/card-network-role/transaction-routing)** - How BIN routing works

**Risk Management:**
- **[Chargebacks and Disputes](/ecosystem/fundamentals/transaction-lifecycle/chargebacks)** - Dispute process and defense
- **[Network Rules](/ecosystem/fundamentals/card-network-role/network-rules)** - Compliance requirements

**Fee Optimization:**
- **[Network Fees](/ecosystem/fundamentals/card-network-role/network-fees)** - Assessment and passthrough fees
- **[Interchange Optimization](/ecosystem/fundamentals/four-party-model/optimization)** - Reducing processing costs

---

## References

### Official Network Documentation

- [Visa Core Rules](https://usa.visa.com/dam/VCOM/download/about-visa/visa-rules-public.pdf) - CP vs CNP rules (Section 5)
- [Mastercard Rules Manual](https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/documents/mastercard-rules.pdf) - Transaction classification
- [EMVCo Specifications](https://www.emvco.com/specifications/) - EMV chip standards

### Security Standards

- [PCI DSS Requirements](https://www.pcisecuritystandards.org/document_library) - CVV storage prohibitions
- [EMV 3D Secure](https://www.emvco.com/emv-technologies/3d-secure/) - 3DS 2.0 specifications
- [Visa 3D Secure Guide](https://usa.visa.com/dam/VCOM/download/merchants/3d-secure-specification.pdf)

### Industry Analysis

- [2024 Nilson Report - Card Fraud](https://nilsonreport.com/) - CNP fraud trends
- [Javelin Strategy - Identity Fraud](https://www.javelinstrategy.com/) - CNP fraud statistics
- [Visa Security Summit Reports](https://usa.visa.com/partner-with-us/visa-technology-partner.html) - Fraud prevention best practices

---

*Continue learning: [Self-Assessment Quiz](/ecosystem/fundamentals/card-network-role/quiz)*
