---
title: "Payments Glossary"
description: "A comprehensive glossary of payment industry terms and definitions for Payment Facilitator platforms"
sidebar_position: 100
sidebar_label: "Glossary"
keywords:
  - payments glossary
  - payment terms
  - PayFac terminology
  - acquiring
  - interchange
  - chargeback
---

# Payments Glossary

A comprehensive glossary of payment industry terms and definitions.

> Sources: [Jupico Documentation](https://docs.jupico.com/docs/glossary) and additional terms from course notes

[A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w)

---

## A

**Acquirer**
A financial institution that processes payments made by credit or debit card on behalf of a merchant. The acquirer enables merchants to accept payments from card-issuing banks.

**Adverse Action Notice**
A legally required notification to merchants (under FCRA and ECOA) explaining why their application for payment processing was declined, including specific reasons for the decision.

**Acquirer Agreement**
A contract between an ISV, ISO, or payment facilitator and the acquirer that sells processing services. This agreement covers processing rates, transaction fees, value-added services, liability, and applicable service level agreements (SLAs).

**Acquiring Processor**
A third-party payment processor that provides acquiring services to merchants, enabling them to accept credit and debit card payments and facilitating processing, settlement, and funding. May also provide fraud prevention, chargeback management, and reporting services.

**Address Verification Fees (AVF)**
Fees charged for confirming the address of a credit cardholder, usually done through the Address Verification System (AVS).

**Address Verification System (AVS)**
The system that verifies that the zip code submitted at the time of processing matches the zip code on the cardholder's billing statement.

**Annual Fees**
Charges associated with a credit card, including membership fees and rewards costs.

**Anti-Money Laundering (AML)**
Practices and procedures designed to identify and protect against financial criminals seeking to disguise illicitly gained funds as legitimate.

**Authorization**
The process of obtaining approval to confirm the customer has enough funds on their payment card to cover a transaction.

**Automated Clearing House (ACH)**
A network between banks that facilitates the transfer of money between depository accounts at participating banks.

**ACH Credit**
Funds are electronically deposited into a bank account.

**ACH Debit**
Funds are electronically debited from a bank account.

**ACH Refund**
A returned ACH transaction.

**ACH Return**
A failed ACH transaction.

**Assessment Fees**
Fees charged by card networks (Visa, Mastercard) for using their network infrastructure, typically 0.13-0.15% of transaction value.

---

## B

**Back-End Processor**
A processor that handles the post-authorization functions including clearing, settlement, and funding. Matches transactions to authorizations and calculates interchange.

**BIN Sponsorship**
When a sponsor bank provides their Bank Identification Number to a PayFac or ISO, allowing transactions to route through the sponsor's network membership.

**BOI (Beneficial Ownership Information)**
Information about the natural persons who ultimately own or control a legal entity, required to be collected under FinCEN regulations.

**BRAM (Business Risk Assessment and Mitigation)**
Mastercard's tiered merchant risk classification program identifying high-risk merchant segments requiring enhanced controls, including categories like telemarketing, adult entertainment, and cryptocurrency.

**Bank Identification Number (BIN)**
A sequence of digits identifying the financial institution that issued a credit or debit card, typically the first six or eight digits of the card number.

**Bank Identifier Code (BIC)**
A code that identifies the bank that will receive a payment, also known as the bank's SWIFT code.

**Bank Secrecy Act (BSA)**
A U.S. law that requires financial institutions to help detect and prevent money laundering, also known as the Anti-Money Laundering Law.

**Basis Points (BPS)**
A unit of measurement in finance equal to 0.01%, commonly used to describe changes in interest rates or calculate fees based on transaction percentages.

**Batch Fee**
A charge for submitting a batch file to a payment processor, typically volume-based and determined by processing load.

**Business-to-Business (B2B)**
Any transaction or scenario where one business sends money to another business.

**Business-to-Consumer (B2C)**
Any transaction or scenario where a business sends money to a consumer.

---

## C

**Capped Reserve**
A reserve where a percentage of transactions is withheld until a maximum cap is reached, after which withholding stops. Provides predictability for merchants as they know the exact amount that will be held.

**Capture**
The process of finalizing a previously authorized transaction for settlement. Merchants capture transactions when they're ready to collect payment (e.g., after shipping goods).

**CDD Rule (Customer Due Diligence Rule)**
FinCEN regulation (31 CFR 1010.230) requiring financial institutions to identify and verify beneficial owners of legal entity customers. Effective since May 2018.

**CFPB (Consumer Financial Protection Bureau)**
Federal agency responsible for consumer protection in the financial sector, including oversight of payment processors and enforcement of fair lending practices.

**CIP (Customer Identification Program)**
BSA/AML requirement (31 CFR 1020.220) for financial institutions to verify the identity of customers opening accounts, including collection of name, date of birth, address, and identification number.

**Control Person**
An individual with significant responsibility to control, manage, or direct a legal entity, identified when no individual owns 25% or more of the entity. Required under the CDD Rule.

**CTA (Corporate Transparency Act)**
Federal law requiring certain companies to report beneficial ownership information to FinCEN. Note: U.S. domestic entities were exempted from reporting as of March 2025.

**Clearing**
The exchange of transaction details between acquiring and issuing banks through the card network, calculating interchange and preparing for settlement.

**Card Association**
An organization that sets rules and regulations for payment card use, such as Visa, Mastercard, and American Express.

**Card Networks**
The four major payment systems in the US: Visa, Mastercard, American Express, and Discover.

**Card-Not-Present (CNP)**
A transaction when the card cannot be physically presented to the merchant at purchase, including phone, internet, mail, or mobile transactions.

**Card-Present (CP)**
A transaction when the cardholder can physically present a card to the merchant through swiping, contactless waving, or chip insertion.

**Card Verification Value 2 (CVV2/CVC2)**
A three-digit code imprinted on the back of a payment card used to validate the individual presenting the card is the actual cardholder.

**Card Verification Value/Code (CVV/CVC)**
A three-digit code contained in the magnetic stripe of a payment card relied upon by the issuer to validate card presence in a magnetic stripe read transaction.

**Chargeback**
A transaction made by the card issuer to the merchant's acquiring bank due to a dispute, POS error, or fraud. Excessive chargebacks can result in card networks refusing to onboard merchants.

**Chargeback Fee**
A fee charged for a chargeback, covering notifications, evidence collection, escalation, and other remediation services.

**Concentration Risk**
The level of risk in a bank's portfolio arising from concentration to a single counterparty, sector, or country.

**Consumer-to-Business (C2B)**
Transactions where a consumer pays a business.

**Currency Transaction Report**
A report that US financial institutions must file with FinCEN for each deposit, withdrawal, exchange, or transfer exceeding a certain amount.

**Custodian**
A financial institution responsible for safeguarding assets for other individuals or institutions.

**Custody**
The act of safeguarding and administering clients' investments or assets.

**Customer Due Diligence**
Policies, practices, and procedures enabling a financial institution to predict the types of transactions a customer is likely to engage in.

---

## D

**Delegated Underwriting Authority**
Permission granted by an acquiring bank (sponsor bank) to a PayFac or ISO to make underwriting decisions on their behalf, within defined parameters and risk thresholds.

**Dual-Message Processing**
A transaction flow where authorization and clearing are separate messages sent at different times. Typical for signature debit and credit card transactions.

**Durbin Amendment**
Part of the Dodd-Frank Act (2010) that caps debit interchange fees for banks with >$10B in assets at approximately 0.05% + $0.21 per transaction.

**Debit**
The amount withdrawn from an account.

**Dispute**
A claim made by a cardholder to the issuing bank questioning the validity of a credit or debit charge, also known as chargebacks.

**Dues and Assessments**
Fees paid to the card network for use of their credit card and processing transactions on their networks.

**Dynamic Currency Conversion (DCC)**
A service allowing customers to pay in their home currency when making a purchase in a foreign country, typically offered by payment processors or acquiring banks.

---

## E

**Early Termination Fees**
Fees that merchants may incur when terminating the processing agreement before the end of a specified period.

**ECOA (Equal Credit Opportunity Act)**
Federal law prohibiting discrimination in credit decisions and requiring specific reasons for denial. Applies to merchant processing as a form of credit extension.

**EDD (Enhanced Due Diligence)**
Additional verification steps required for high-risk customers, merchants, or beneficial owners, including deeper background checks and ongoing monitoring.

**eCheck**
An electronic form of a check.

**eCheck Refund**
A reversed eCheck.

**eCheck Return**
A failed eCheck.

**Electronic Funds Transfer (EFT)**
An electronic way of transferring money between bank accounts without bank interaction, with direct deposit being a common example.

**Embedded Payments**
The integration of payment processing as an integral part of a business offering or product.

**EMV**
Europay, Mastercard, Visa - the global standard for chip-based payment cards. EMV chips generate unique cryptograms for each transaction, preventing counterfeit fraud.

**Equipment Fees**
Charges imposed on merchants for leasing or maintenance of payment processing equipment.

---

## F

**False Positive (Screening)**
A sanctions or fraud screening result that incorrectly flags a legitimate entity as a match. Managing false positives is critical for balancing compliance with customer experience.

**FCRA (Fair Credit Reporting Act)**
Federal law governing the use of consumer credit reports, requiring merchant consent before pulling reports and specific adverse action notices when declined based on credit information.

**50% Rule (OFAC)**
OFAC rule stating that any entity owned 50% or more (directly or indirectly) by a blocked person is itself blocked, even if not specifically listed on the SDN List.

**FinCEN (Financial Crimes Enforcement Network)**
Bureau of the U.S. Department of Treasury responsible for safeguarding the financial system from illicit use, combating money laundering, and promoting national security.

**Fixed Reserve**
A lump sum deposited upfront and held throughout the merchant processing relationship, released 6-18 months after account closure. Common for high-risk merchants.

**Four-Party Model**
The foundational card payment structure involving four parties: Cardholder, Merchant, Issuing Bank, and Acquiring Bank, connected by the Card Network.

**Front-End Processor**
A processor that handles real-time authorization requests, routing transactions to the appropriate card network and returning approve/decline decisions.

**Fuzzy Matching**
Screening technique using algorithms (Levenshtein, Jaro-Winkler, Soundex) to identify potential matches despite name variations, misspellings, or transliterations.

**Funding**
The final step of settlement where funds are deposited into the merchant's bank account, typically occurring T+1 to T+3 after transaction.

**Foreign Exchange (FX)**
The trading of one currency for another, with fees applied by the receiving or originating institution.

**Freeze**
The restriction of exchange, withdrawal, liquidation, or use of assets or bank accounts while remaining property of the original holder.

**Front Company**
A business set up and controlled by another organization, often used by criminals to launder money by giving funds the appearance of legitimate origin.

---

## G

**Gateway**
A secure connection allowing payment transaction messages to be transmitted between the point of sale and the acquiring processor.

---

## H

**Hosted Payment Page (HPP)**
A payment page hosted by a gateway/processor where customers are redirected to enter card details, reducing the merchant's PCI compliance scope.

---

## I

**IIN (Issuer Identification Number)**
The first 6-8 digits of a card number identifying the issuing bank, also called BIN. Extended from 6 to 8 digits in 2022.

**Integrity Risk Fee**
Additional fee charged by Visa on Tier 1 high-risk MCC transactions under the VIRP program, calculated as $0.10 per transaction plus 0.10% of transaction amount.

**Interchange-Plus Pricing**
A transparent pricing model where merchants pay actual interchange fees plus a fixed processor markup, allowing visibility into true costs.

**Independent Sales Organization (ISO)**
A company that contracts with a member bank to provide merchant or cardholder solicitation, selling payment processing solutions including card readers and rate contracts.

**Integrated Payments**
The act of incorporating a payment processing system into an existing business offering, sharing data between business and payments systems.

**Integrated Software Vendor (ISV)**
An individual or organization selling software incorporating a payments strategy or processing as part of its product offering.

**Interchange Fees**
Fees that issuing banks receive.

**Interchange Rate**
The fee paid by the acquiring bank to the card issuer for each transaction, set by card associations and varying by card type, merchant industry, and transaction amount.

**IRS Reporting Fees**
Charges by payment processing services for reporting payment information directly to the IRS for a merchant.

**Issuer**
The issuing bank that issues a credit or debit card on a card network.

**Issuing Processor**
An entity directly connected to card networks that transmits authorization, clearing, and settlement messages between acquirers and issuers.

---

## K

**KYC (Know Your Customer)**
A set of anti-money laundering policies and procedures determining the true identity of customers and merchants to prevent money laundering, terrorist funding, and criminal activity.

**KYE (Know Your Employee)**
KYC policies and procedures used to detect conflicts of interest, money laundering, past criminal activity, and suspicious activity related to employees.

---

## L

**Layering**
A complex process of creating financial transactions to disguise the audit trail and provide anonymity, often distancing illegal proceeds from their source.

**Legal Risk**
The risk that lawsuits, adverse judgments, or unenforceable contracts may disrupt or harm a financial institution.

**L2/L3 Processing**
Features provided by Visa and Mastercard helping reduce interchange rates for corporate and commercial credit card transactions meeting specific requirements.

**Least-Cost Routing (LCR)**
A merchant strategy to route debit transactions through the lowest-cost network, enabled by the Durbin Amendment's requirement for multiple routing options.

**Liquidated Damages**
A penalty or fee charged by the acquirer when a merchant agreement is terminated early to recoup associated costs.

---

## M

**MALPB (Merchant Acquiring Limited Purpose Bank)**
A Georgia banking charter allowing non-depository payment processors to obtain direct card network membership without traditional banking licenses.

**Master Merchant Account**
A single merchant account held by a PayFac under which all sub-merchants process transactions, with the PayFac acting as the merchant of record.

**Merchant Discount Rate (MDR)**
The total percentage fee merchants pay to accept card payments, comprising interchange + assessments + processor/acquirer markup.

**Markup Fees**
Negotiable fees that credit card processors charge.

**MATCH List (Member Alert to Control High-Risk Merchants)**
Industry database maintained by Mastercard tracking merchants terminated by acquirers for fraud, excessive chargebacks, or other violations. Entries remain for 5 years and effectively blacklist merchants from obtaining new processing accounts. Also known as TMF (Terminated Merchant File).

**Master MID**
The primary Merchant Identification Number held by a PayFac under which all sub-merchants process transactions. The PayFac is the merchant of record for all transactions.

**MCC Misclassification**
Fraudulent or negligent assignment of an incorrect Merchant Category Code to reduce fees, bypass restrictions, or avoid high-risk monitoring. Subject to network fines of $25,000+ per merchant.

**Merchant**
Any business accepting payments from credit or debit cards or alternative payment methods, offering goods or services in exchange.

**Merchant Account**
A bank account type allowing a business to accept debit and credit card payments, typically provided by acquiring banks or payment processors.

**Merchant Category Code (MCC)**
A four-digit number classifying a business by the type of goods or services it provides.

**Merchant Identification Number (MID)**
A unique code provided to a merchant by their payment processor.

**Middleware Partner**
A solution connecting a platform with a payment processor.

**Money Laundering**
The process of concealing the origins of illegally obtained money, typically through transfers involving foreign banks or legitimate businesses.

**Monitoring**
An element of anti-money laundering programs reviewing customer activity for unusual or suspicious patterns, trends, or outlying transactions.

---

## N

**Network Token**
A card network-issued token that replaces the actual card number, providing enhanced security and automatic updates when cards are replaced.

**NFC (Near Field Communication)**
Short-range wireless technology enabling contactless payments (tap-to-pay) between a card/phone and payment terminal.

**National Automated Clearing House Association (NACHA)**
A national association responsible for developing and enforcing rules and guidelines for the ACH network.

**Non-Governmental Organization (NGO)**
A non-profit organization independent of government control performing humanitarian functions including advocating for causes.

**Non-Sufficient Funds Fee (NSF)**
A fee charged to process and track transactions reversed due to insufficient account funds.

**Notice of Change (NOC)**
A notice generated by a Receiving Depository Financial Institution (RDFI) informing the Originating Depository Financial Institution (ODFI) of bank account changes.

---

## O

**OFAC (Office of Foreign Assets Control)**
Division of the U.S. Department of Treasury administering and enforcing economic and trade sanctions, including the SDN List. Violations carry strict liability regardless of intent.

**Operational Risk**
The risk of direct or indirect loss due to inadequate or failed internal processes, people, systems, or external events.

**Originating Depository Financial Institution (ODFI)**
The financial institution acting as the interface between the Federal Reserve or ACH network and the transaction originator.

**Omnichannel**
A unified commerce strategy where merchants accept payments across all channels (in-store, online, mobile) through a single platform with consistent customer experience.

**Open-Loop System**
A payment network where cards can be used at any merchant that accepts that network (e.g., Visa, Mastercard), as opposed to closed-loop systems like store cards.

**Originator**
The entity that initiates or starts a transaction flow.

---

## P

**P2PE (Point-to-Point Encryption)**
PCI-validated encryption standard where card data is encrypted at the point of interaction and only decrypted within a secure environment, reducing PCI scope.

**PEP (Politically Exposed Person)**
Individual who holds or has held a prominent public position (government officials, senior executives of state-owned corporations), requiring enhanced due diligence due to increased corruption risk.

**PayFac-as-a-Service (PFaaS)**
A platform (like Stripe Connect) that provides PayFac infrastructure to software companies, handling compliance, underwriting, and settlement while allowing pricing control.

**PIN Debit**
A debit transaction authenticated with the cardholder's PIN, typically routed through PIN networks (STAR, NYCE, Pulse) with lower interchange than signature debit.

**POS (Point of Sale)**
The location and hardware/software where a retail transaction occurs, including terminals, registers, and mobile payment devices.

**Payment Card Industry Data Security Standards (PCI-DSS)**
A security standard ensuring organizations handling payment cards have increased controls around cardholder data, with annual compliance validation.

**Payment Card Industry Fees**
Fees maintaining PCI compliance, including audit, external security assessment, infrastructure hosting, and consulting fees.

**Payment Facilitator (PayFac)**
A service provider enabling merchants to accept payments online or in-person.

**Payment Gateway**
A service connecting a merchant's website or point-of-sale system to the payment processor, responsible for securely transmitting payment card data.

**Payment Gateway Fees**
Fees charged by payment gateways for authorization, capture, and transaction processing.

**Payment Processor**
Software or technology processing transactions between merchants, issuing banks, and acquiring banks.

**Placement**
The act of laundering proceeds from illegal activity and placing them into the financial system.

**Predicate Crimes**
Crimes whose proceeds, if involved in transactions, can give rise to money laundering prosecution.

**Push-to-Card (P2C)**
A real-time payments standard allowing individuals or businesses to instantly transmit funds to specific cards on card networks, with funds generally available immediately.

---

## R

**Receiving Depository Financial Institution (RDFI)**
A qualified institution that can receive ACH entries.

**Reconciliation**
The process of matching transactions processed by the payment processor with transactions recorded by the merchant.

**Risk Appetite**
The level and type of risk an organization is willing to accept in pursuit of business objectives. Varies significantly across payment processors.

**Risk Score**
Numerical assessment (typically 0-100) representing the likelihood of merchant-related losses during underwriting. Higher scores indicate higher risk.

**Rolling Reserve**
A percentage of each transaction withheld and held for a specified period (30-180 days) before automatic release on a rolling basis. Common reserve type for moderate to high-risk merchants.

**Refund**
When a customer cancels their purchase and the merchant returns funds to the customer.

**Representment**
A part of the chargeback process where the merchant disputes the customer's claim.

**Reputational Risk**
The risk that adverse publicity will harm the financial institution's business practices and associations.

**Retrieval Request Fee (RRF)**
A fee charged when the customer or issuing bank requests a copy of a sales draft.

**Reserve**
Funds held by an acquirer or PayFac to cover potential future chargebacks and losses. Types include rolling reserve (percentage held for fixed period), upfront reserve (initial deposit), and capped reserve (maximum amount).

**Residual Income**
Ongoing passive income earned by ISOs based on a percentage of their merchants' transaction volume, typically paid monthly for the life of the merchant relationship.

**Risk-Based Approach**
An assessment of risks associated with different business types, clients, accounts, and transactions to maximize anti-money laundering program effectiveness.

---

## S

**SAR (Suspicious Activity Report)**
A government filing required when suspicious or potentially illegal activity is detected, including potential money laundering, fraud, or sanctions violations.

**SDN List (Specially Designated Nationals List)**
OFAC-maintained list of individuals and entities with whom U.S. persons are generally prohibited from doing business. Updated frequently and subject to strict liability.

**Signature Debit**
A debit transaction processed like a credit card (without PIN), routed through Visa/Mastercard networks with higher interchange than PIN debit.

**Single-Message Processing**
A transaction flow where authorization and clearing happen in a single message. Typical for PIN debit transactions where funds move immediately.

**SMID (Sub-Merchant ID)**
Unique identifier assigned to each sub-merchant under a PayFac's master MID, used for internal routing, network reporting, and chargeback allocation.

**Sponsor Bank**
An acquiring bank that provides card network membership, settlement infrastructure, and regulatory coverage to PayFacs and ISOs who cannot be network members directly. Bears ultimate liability for PayFac activities.

**Statement Descriptor**
Text that appears on a cardholder's bank or credit card statement identifying a transaction. Format typically: [PayFac Name]*[Sub-Merchant Name].

**STP (Straight-Through Processing)**
Applications that are approved or declined automatically by algorithms without human intervention during underwriting. Top performers achieve 70%+ STP rates.

**Strict Liability**
Legal standard where a party is liable regardless of fault or intent. OFAC sanctions violations carry strict liability - "we didn't know" is not a defense.

**Sub-Merchant**
A merchant that processes payments under a PayFac's master merchant account, rather than having their own direct acquiring relationship.

**Sub-Merchant Graduation**
Process where a high-volume sub-merchant (typically >$500K-$1M/year) transitions from a PayFac's master MID to their own direct merchant account.

**Seize**
To prevent funds or assets from transfer based on competent authority action, allowing control while remaining original property.

**Settlement**
A group of transactions batched together to pay out the merchant.

**Standard Industrial Classification (SIC)**
Government-maintained codes identifying and classifying business types, used by card networks to derive MCC codes.

**Statement Fees**
Fees charged for statement services.

**Subpoena**
A legal court process requiring witness appearance at judicial proceedings, sometimes requiring specified documents.

**Suspicious Activity**
Irregular or questionable customer behavior potentially related to money laundering, criminal offenses, or terrorist financing.

**Suspicious Activity Report (SAR)**
A government filing required by reporting entities documenting questionable transactions, required in many jurisdictions.

---

## T

**Terminal**
A device used at the point of sale to accept card payments, including countertop terminals, mobile card readers, and software-based solutions.

**Terminal ID**
A unique identification number provided by the credit card processor to identify transaction origin.

**3D Secure (3DS)**
A security protocol adding an authentication step for CNP transactions. Visa's "Verified by Visa" and Mastercard's "SecureCode" are 3DS implementations. Version 2.0+ enables frictionless authentication.

**Termination Rights**
The right to end an existing payment processing contract.

**TMF (Terminated Merchant File)**
Another name for the MATCH List. See MATCH List.

**Tokenization**
The process of encrypting payment card information into a "token," a hashed version protecting cardholder information while enabling card-on-file processing.

**True Match**
A confirmed match against sanctions lists (SDN, etc.) that requires immediate action including blocking the transaction/relationship and filing SAR as appropriate.

---

## U

**Ultimate Beneficial Owner**
Individuals who own a significant portion and have ultimate control over a legal entity or arrangement.

**Underwriting**
The process of evaluating merchant risk and determining approval or decline for processing services based on financial history, credit score, and industry.

---

## V

**VIRP (Visa Integrity Risk Program)**
Visa's tiered risk framework introduced May 2023 (replacing GBPP) for classifying high-risk merchants. Tier 1 requires Visa approval and Integrity Risk Fees; Tier 2/3 have lower requirements.

**Void Transaction**
A transaction canceled before settlement using a customer's credit or debit card.

---

## W

**Wire Transfer**
A near real-time transfer of funds between bank accounts, limited to bank-to-bank or intrabank transfers.
