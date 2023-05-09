---
aliases: [Repositories]
---

#concept in [[0 - Domain-Driven Design]]

This [[Domain Object]] is an [[Computer data storage|in-memory collection]] with [[2 - Domain Model|domain]]-interesting [[Query|querying]] [[Feature|Capabilities]], which will interact with the [[Database|Databases]].

They should be used with [[Domain Object|Domain Objects]] that require global access, normally [[10 - Entitiy|Entities]], difficult to transverse values, and enumerations

Only [[Aggregate Root|Roots]] should access them.

---

They might return summaries about the queries they perform, alongside the objects they query like for showing the total number of items
