---
aliases: [Repositories]
---

#concept in [[3 - The life cycle of a domain object]]

This [[Domain Object]] is an [[Computer data storage|in-memory collection]] with [[Domain Model|domain]]-interesting [[Query|querying]] [[Feature|Capabilities]], which will interact with the [[Database|Databases]].

They should be used with [[Domain Object|Domain Objects]] that require global access, normally [[domain-driven-design/concepts/domain-objects/Aggregate|Aggregates]], difficult to transverse values, and enumerations

Only [[Aggregate Root|Roots]] should access them.

---

They might return summaries or convenience [[Function|Methods]] about the queries they perform, alongside the objects they query like for showing the total number of items

- [[Abstraction]]: due to [[polimorphism]], some objects can be dealt by the same repo
- [[Low-Coupling|Decoupling]]: [[Client|Clients]] doesn't need to know about the internal details, so we can change them at will
- Uncommitted: tho it's tempting to do it, the client is the one who knows about their [[context]], so they should be responsible for committing

---

[[Architectural Framework|Architectural Frameworks]] deeply influence how repos are implemented

