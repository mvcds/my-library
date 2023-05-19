---
aliases: [Identities]
---

#concept  in [[0 - Domain-Driven Design]]

A conceptual [[carreer/development/programming/Identity|identity]] has to exist between multiple implementation of objects, stored forms, and real-world actors.

Other attributes don't do the trick because they can change over [[time]], implementations, and [[Platforms]].

---

It might not be intrinsic to a thing in the world, but we can defined it as a meaning superimposed to the [[Domain Model]] because it is useful

---

Beware of "technical identities" (like place in memory), as it's not a "domain identity" - the domain part is significant for the domain and its [[Software|Softwares]]

---

It comes with a possible cost on [[Performance]], so it should only be given when it makes sense
