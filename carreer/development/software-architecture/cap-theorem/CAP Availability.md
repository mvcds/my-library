---
aliases: [Availability]
---

In the [[CAP theorem]], [[Availability]] makes sure that every request receives a (non-error) response, **without** the guarantee that it contains the most recent write

We are okay to read stale data, to eventually get the latest value

---

[[Command Query Responsibility Segregation|CQRS]] is a good fit for this