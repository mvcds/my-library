A [[Domain]]-centric [[carreer/development/software-architecture/types/Layered Architecture|Multilayered]] architecture where the domain is shared between all [[Software|Applications]] of the [[Business|company]], and then each [[Software|Application]] extends and/or consumes the domain.

---

Created by [[Robert C. Martin]], who puts the domain as the most stable part of the application, if compared to the external world. And on top, the domain is under our control, so to protect it from all the instability, we can put [[adapter|adapters]] between the external world and our [[Use Case|Use Cases]].

---

The [[Dependency Rule]] is the most important part of it
