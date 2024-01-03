---
aliases:
  - Caches
  - Caching
---

Allows faster retrieval of [[Data]] for improve [[Latency]], [[Server Load]], [[ACID|Consistency]] and [[Network Bandwitch]] by "saving" the data "closer" to the [[User]].

They excel in [[Read-Heavy vs Write-Heavy System|Read-Heavy System]]

They can happen in different places, including for the same resource, in the same application, in oder to achieve the desired effect:

- In-memory
- On the [[network]] [^1]
- [[Browser]]
- In-code ([[Memoization]])

There are many [[Cache Strategy|Cache Strategies]] which can be choosen from.

[^1]: Think [[Content Delivery Network|CDN]]
