---
aliases:
  - Write-Behind
---

A write [[Cache Strategy]] that consists in writing [[User]] [[Data]] first on the [[Cache]] and then on the [[Database|DB]] in a synchronous manner, so it kind opposes [[Write-Through]]

Usually it uses [[Queue]]

# Tradeoffs

Pros

- (-back) Good for slow writes when [[UX|User Experience]] is a concern[^1]

Cons

- Prone to [[Cache Overload]]
- [[Consistency|Inconsistency]] if source goes down when writing

[^1]: [[optimistic update]]
