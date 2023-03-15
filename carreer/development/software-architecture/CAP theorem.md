---
aliases: [Brewer's theorem]
---

In theoretical  [[Computer Science]], the CAP theorem, proposed by(?) computer scientist [[Eric Brewer]], states that it is impossible for a distributed [[data]] store to simultaneously provide more than two out of the following three guarantees

- [[Consistency]]: Every read receives the most recent write or an error
- [[Availability]]: Every request receives a (non-error) response, without the guarantee that it contains the most recent write
- [[Partition tolerance]]: The [[system]] continues to operate despite an arbitrary number of [[Message|Messages]]]] being dropped (or delayed) by the [[network]] between nodes