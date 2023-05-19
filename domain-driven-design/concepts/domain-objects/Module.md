---
aliases: [Modules, Package, Packages, Namespace, Namespaces]
---

#concept  in [[0 - Domain-Driven Design]]

A meaningful part of the [[Domain Model|model]] that helps reducing [[cognitive load]] by splitting the domain concepts into smaller [[1 - Our model is a subsystem|subsystems]] in a way that allows us to:

1. Focus on the details of the model without worrying about the outside world
2. Focus on the [[Association|relationships]] of the modules without worrying about the details

---

They also need [[Low-Coupling]] and [[High-Cohesion]] to work properly

---

> Like everything else in [[0 - Domain-Driven Design]], [[Module|Modules]] are a _communications mechanism_. The _meaning_ of the [[Object|Objects]] being partitioned needs to drive the choice of the modules [...]. If your [[Domain Model]] is telling a story, the modules are the chapter

#quote  by [[Eric Evans]] on [[0 - Domain-Driven Design]] about the need to treat modules as anything else #paraphrased
