---
aliases: [Aggregates]
---

#concept in [[0 - Domain-Driven Design]]

An artificial [[Domain Object|object]] that still makes sense for the [[Domain Model]]. Its job is to guarantee the [[consistency]] of all objects within it boundaries, usually through [[Invariant|Invariants]].

To do so, they should expose only their [[Aggregate Root|Root]], and let all [[communication]] to its [[Association|transversal associations]] be done by it. Often, this needs to be done though discipline.

---

Having aggregates is very helpful in [[Concurrent Programming]]
