A [[Domain]]-centric [[Layered Architecture|Multilayered]] architecture where the domain is shared between all [[Software|Applications]] of the [[business|company]], and then each [[Software|Application]] extends and/or consumes the domain.

---

Created by [[Robert C. Martin]], who puts the domain as the most stable part of the application, if compared to the external world. And on top, the domain is under our control, so to protect it from all the instability, we can put [[adapter|adapters]] between the external world and our [[Use Case|Use Cases]].

---

The dependency rule is the most important part of this architecture. It states that:

1. An external layer depends only on its immediate internal layer
2. All communication is done through [[Interface|Interfaces]] provided by the internal layer, mostly [[Transfer Object|DTOs]]

This can be achieved by the [[Dependency Inversion Principle]]