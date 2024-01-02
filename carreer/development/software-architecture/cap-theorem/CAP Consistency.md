---
aliases: [Consistency]
---

In the [[carreer/development/software-architecture/cap-theorem/CAP theorem|CAP Theorem]], [[Consistency]] makes sure that every read receives the most recent write or an error, that is, everyone always gets the same values.

Internally, it can be achieved can be due synchronously by finishing all the writes before the next reading or [[quorum]] (async)

---

Do not mistake with [[ACID#Consistency]]
