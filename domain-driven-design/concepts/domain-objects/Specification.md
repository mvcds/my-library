---
aliases: [Specifications, Spec, Specs]
---

#concept in [[0 - Domain-Driven Design]]

Allows a [[Client]] to <u>describe</u> what it wants without concerning about how it will happen

A [[domain-driven-design/concepts/domain-objects/Repository|Repository]] can be be build using specifications

---

#concept in [[2 - Making implicit concepts explicit]]

An [[Domain Object|object]] that works as if it was a [[Predicate|Predicate Function]], keeping other objects simpler. Using specifications keeps the login in the [[domain-driven-design/concepts/layered-architecture/Layered Architecture|domain layer]].

A spec is normally expressed as a [[Value Object|VO]], and configured by a [[Factory]]. It states a [[domain-driven-design/concepts/domain-objects/Constraint]] on the state of <u>another</u> object, so it can be used to check if that object satisfies some criteria.

Without using them, the same constraints appear in many places, opening up room for [[Business rules are not free of inconsistencies nor contradictions|contradictions]], so they also help with [[Consistency Principle|Consistency]]

---

It's also a [[Design Pattern]]
