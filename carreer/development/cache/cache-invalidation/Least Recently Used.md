---
aliases:
  - LRU
---

A [[Cache Invalidation]] mechanism where we prefer eliminating the [[Cache]] registry that is less used

Good for scenarios where about 20% of [[Data]] account for about 80% of the reads, because it produces less [[Cache Miss|Cache Misses]].
