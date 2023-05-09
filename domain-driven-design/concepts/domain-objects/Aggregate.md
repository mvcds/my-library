---
aliases: [Aggregates]
---

#concept in [[0 - Domain-Driven Design]]

An artificial [[Domain Object|object]] that still makes sense for the [[2 - Domain Model]]. Its job is to guarantee the [[Invariant|consistancy]] of all objects within it boundaries.

To do so, they should expose only their [[Aggregate Root|Root]], and let all [[communication]] to its [[7 - Association|transversal associations]] be done by it. Often, this needs to be done though discipline.

---

Having aggregates is very helpful in [[Concurrent Programming]]
