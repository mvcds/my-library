---
aliases: [Aggregates]
---

#concept in [[3 - The life cycle of a domain object]]

An artificial [[Domain Object|object]] that still makes sense for the [[Domain Model]]. Its job is to guarantee the [[consistency]] of all objects within it boundaries, usually through [[Invariant|Invariants]].

To do so, they should expose only their [[Aggregate Root|Root]], and let all [[communication]] to its [[Association|transversal associations]] be done by it. Often, this needs to be done though discipline.

---

Having aggregates is very helpful in [[Concurrent Programming]]

---

![[Aggregate.jpg]] 

As an example of an [[domain-driven-design/concepts/domain-objects/Aggregate|Aggregate]], we have a Purchased Order with an approved limit where order lines have to be immune to changes on the price of its Items, which means that their price gets copied around.