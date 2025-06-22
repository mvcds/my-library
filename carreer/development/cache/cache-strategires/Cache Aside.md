---
aliases:
  - Lazy Loding
---

A read [[Cache Strategy]] that consists in "looking" for the data until one is "produced" only when there is a [[Cache Miss]], writing it on the cache before returning, so it kinda opposes [[Read-Through]]

# Tradeoffs

Good

- Only caches what is needed

Cons

- Stale for [[Database]] changes (mitigated with "time to live" property)
- It becomes inefficient if there are a lot of cache misses
- [[Consistency|Inconsistency]], as the [[Data]] might have changed since the [[Cache Hit]]
