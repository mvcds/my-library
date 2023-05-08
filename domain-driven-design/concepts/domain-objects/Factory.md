---
aliases: [Factories]
---

An [[Domain Object|object]] responsible for creating [[Complex]] objects (mostly [[domain-driven-design/concepts/domain-objects/Aggregate|Aggregates]]), thus hiding their internal structure from clients outside the [[2 - Domain Model]].

Factories live in the [[5 - Layered Architecture|domain layer]] but are not part of the business per se, just a technical implementation/necessity to help isolating the model.

---

How to implement this object depends on your [[context]]. There's no instruction on a specific [[Design Pattern]] you should follow.

#concept in [[0 - Domain-Driven Design]]