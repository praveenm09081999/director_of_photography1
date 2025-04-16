# Director of Photography (Chapter 1) - Solution

## Problem Description
A photography set consists of `N` cells in a row, each being one of the following types:
- `P`: Can contain a **photographer**
- `A`: Can contain an **actor**
- `B`: Can contain a **backdrop**
- `.`: Must remain empty

A photograph is **artistic** if:
1. It includes **one photographer (P)**, **one actor (A)**, and **one backdrop (B)**.
2. The actor is **between** the photographer and the backdrop (either `P...A...B` or `B...A...P`).
3. The distance between `P` and `A` is between `X` and `Y` (inclusive).
4. The distance between `A` and `B` is between `X` and `Y` (inclusive).

**Goal**: Count the number of valid artistic photographs.

### Constraints
- `1 ≤ N ≤ 200`
- `1 ≤ X ≤ Y ≤ N`

## Solution Approach
The provided solution uses an **imperative procedural approach**:
1. **Collect Indices**: First, it gathers the positions of all `P`, `A`, and `B` in separate arrays.
2. **Brute-Force Check**: It then checks all possible `(P, A, B)` and `(B, A, P)` triplets to see if they satisfy the distance constraints.
3. **Count Valid Triplets**: If a triplet meets the conditions, it increments the count.

### Time Complexity
- **O(a * b * p)**, where `a`, `b`, and `p` are the counts of `A`, `B`, and `P` respectively.
- Efficient for small `N` (as per constraints), but not optimized for very large inputs.