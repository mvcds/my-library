---
aliases: [Invariants]
---

#concept in [[0 - Domain-Driven Design]]

A [[consistency]] rule that should be maintained whenever the [[data]] changes.

When rules span multiple [[domain-driven-design/concepts/domain-objects/Aggregate|Aggregates]] then we should <u>not</u> expect to have all of them up-to-date at all times.

It's considered a [[Domain Object]]