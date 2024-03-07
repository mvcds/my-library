---
aliases: [Reactive System, Reactive Systems, Pub/Sub]
---

A [[Design Pattern]] that builds on top of the [[Observer Pattern]] by adding an [[Fundamental theorem of software engineering|indirection]] (a [[Message Broker]] or a [[Message Bus]]).

The Publishers send messages to the [[Message Broker|Broker]] instead of sending directly to the Subscribers, so one part does not know about the other.

#complement

---

Best way to do it is using [[message|messaging]] [[system]]s

---

It helps with [[Scalability]], [[Resiliency]], [[Resiliency]] and [[Performance]]