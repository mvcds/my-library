---
aliases: [Partition Tolerance]
---

In the [[carreer/development/software-architecture/cap-theorem/CAP theorem|CAP Theorem|CAP Theorem]], [[Partition Tolerance]] makes sure that the [[system]] continues to operate despite an arbitrary number of [[Message|Messages]] being dropped (or delayed) by the [[network]] between nodes

In practice, this is always present for [[Distributed System|Distributed Systems]] because we want them to remain operational after a [[Success|Failure]], so our problems resort into choosing a AP or a CP system.
