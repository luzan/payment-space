---
title: "Fuzzy Matching Algorithms"
description: "Name matching algorithms, threshold settings, and techniques for effective sanctions screening"
sidebar_position: 1
sidebar_label: "Fuzzy Matching"
keywords:
  - fuzzy matching
  - Levenshtein distance
  - Jaro-Winkler
  - Soundex
  - name matching
---

# Fuzzy Matching Algorithms

> **Last Updated:** 2025-12-28
> **Status:** Complete

This page covers the algorithms and techniques used for name matching in sanctions screening.

## Why Exact Matching Isn't Enough

Relying on exact name matches would allow sanctions evasion through:

- **Typos and misspellings:** "Mohammad" vs. "Muhammad"
- **Transliteration variations:** Arabic/Cyrillic names to Latin alphabet
- **Name order differences:** "John Smith" vs. "Smith, John"
- **Nicknames and aliases:** "Bob" vs. "Robert"
- **Missing middle names or initials**
- **Corporate name variations:** "ABC Corp" vs. "ABC Corporation" vs. "ABC Inc."

**Fuzzy matching algorithms** calculate similarity scores between names to identify potential matches even when spelling differs.

## Algorithm Comparison

| Algorithm | Method | Best For | Speed | Used By |
|-----------|--------|----------|-------|---------|
| **Levenshtein Distance** | Counts minimum edit operations (insert/delete/substitute) to transform one string to another | Complex names, business names | Slower | Most commercial AML solutions |
| **Jaro-Winkler** | Character similarity with prefix weighting (rewards matching first characters) | Individual names, typos | Faster | OFAC Sanctions List Search tool |
| **Soundex** | Phonetic encoding (encodes names by how they sound) | Similar-sounding names | Very fast | OFAC Sanctions List Search tool |
| **Double Metaphone** | Advanced phonetic encoding with multiple encodings per name | Complex pronunciations | Fast | Advanced screening systems |

### Levenshtein Distance

Calculates the minimum number of single-character edits (insertions, deletions, substitutions) required to change one string into another.

**Example:**
- "Mohammed" → "Muhammad" = 3 edits (o→u, e→a, d→d is same)
- Lower distance = higher similarity

**Strengths:**
- Handles typos well
- Works for any character set
- Intuitive interpretation

**Weaknesses:**
- Slower for long strings
- Doesn't account for phonetic similarity

### Jaro-Winkler

Measures character-level similarity with a boost for matching prefixes (first 4 characters).

**Example:**
- "SMITH" vs "SMYTH" = 0.96 similarity (high match)
- Names with same first letters score higher

**Strengths:**
- Fast calculation
- Good for names where first letters are reliable
- Standard in OFAC tools

**Weaknesses:**
- Prefix bias may miss some variations
- Less effective for names with different start

### Soundex

Converts names to phonetic codes based on sound, then compares codes.

**Example:**
- "Smith" → S530
- "Smyth" → S530
- Same code = potential match

**Strengths:**
- Very fast
- Handles phonetic variations
- Good for English names

**Weaknesses:**
- Limited for non-English names
- Coarse matching (high false positives)

### Double Metaphone

Advanced phonetic encoding that generates multiple codes per name to handle pronunciation variations.

**Example:**
- "Schmidt" → ["XMT", "SMT"]
- Matches both German and Anglicized pronunciations

**Strengths:**
- Handles international names better
- Multiple encoding options
- More accurate than Soundex

**Weaknesses:**
- More complex implementation
- Still primarily English-focused

## OFAC's Official Approach

The OFAC Sanctions List Search tool uses fuzzy matching algorithms (commonly reported to include Jaro-Winkler and Soundex-based approaches) to identify potential matches even when spelling differs.

**Key Points:**
- OFAC's tool is for reference, not compliance
- Commercial systems typically use multiple algorithms
- PayFacs should not rely solely on OFAC's search tool

## Setting Match Thresholds

### Common Threshold Ranges

- **95-100%:** Very likely match - investigate immediately
- **85-94%:** Possible match - manual review required
- **70-84%:** Lower probability - may review based on risk appetite
- **Below 70%:** Typically ignored (but configurable)

### Risk-Based Threshold Setting

- **High-risk industries:** Lower thresholds (more sensitive)
- **High-risk geographies:** Lower thresholds
- **Common names:** May need higher thresholds (e.g., "Mohammed Ahmed")
- **Business names:** Often need lower thresholds (more variation)

### Threshold Tuning Process

1. **Start conservative:** Lower thresholds catch more potential matches
2. **Analyze results:** Track false positive rates by name type
3. **Adjust incrementally:** Raise thresholds for high false-positive categories
4. **Document changes:** Maintain audit trail of threshold decisions
5. **Review quarterly:** Re-evaluate based on new data

:::tip Threshold Tuning is Critical
Initial threshold settings will generate thousands of false positives. Continuous tuning based on review outcomes is essential to balance compliance with operational efficiency.
:::

## Multi-Algorithm Approach

Best practice is to combine multiple algorithms:

```
Score = (0.4 × Levenshtein) + (0.35 × Jaro-Winkler) + (0.25 × Soundex)
```

**Benefits:**
- Catches different types of variations
- Reduces false negatives
- More robust matching

**Implementation:**
- Most commercial vendors use proprietary combinations
- Tune weights based on your merchant population
- Test with known sanctions list entries

## Related Topics

- [Sanctions Screening Overview](../sanctions-screening.md) - Core concepts
- [False Positive Management](./false-positives.md) - Handling alerts
- [Screening Operations](./operations.md) - Real-time vs batch
