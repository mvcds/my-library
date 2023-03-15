---
aliases: [Multilayered, N-Tier, Multi-tier]
---

A kind of [[Software Architecture]] where you separate your app in [[Tier vs Layer|Layers]] with different responsibilities. [[Data]] flows from one to the other.

- Closed layers can only use layers below
- Open layers can be used by all the layers

---

A possible "evolution" of [[Monolithic Architecture]], after some refactoring for organization.

---

The boundaries of layers should be technical, not functional

---

Typical layers include:

- Presentation: UI
- Application: Transaction between UI and business
- Business: business logic
- Persistence: Code to interact with the [[database]]
- Data: the database per si

Other layer, like caching, can be added when necessary, as well as merging layers