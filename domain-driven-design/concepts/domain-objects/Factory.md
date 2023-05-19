---
aliases: [Factories]
---

#concept in [[0 - Domain-Driven Design]]

An [[Domain Object|object]] responsible for creating [[Complex]] objects (mostly [[domain-driven-design/concepts/domain-objects/Aggregate|Aggregates]]), thus hiding their internal structure from clients outside the [[Domain Model]].

Factories live in the [[domain]] [[domain-driven-design/concepts/layered-architecture/Layered Architecture|Layer]] but are not part of the business per se, just a technical implementation/necessity to help isolating the model.

---

How to implement this object depends on your [[context]]. There's no instruction on a specific [[Design Pattern]] you should follow.
