---
aliases:
  - MS
  - Message Queue
  - MQ
  - Message Systems
---

#concept in [[2 - Key Components of System Design]]

A [[system]] that stores [[Message|Messages]] for processing, as a way to [[Low-Coupling|decouple]] the [[Distributed System]] increasing [[Scalability]] and [[Fault Tolerance]]

# Tradeoffs

Good

- Act as a buffer between [[Message Producer|Client]] and [[Message Consumer|Server]], [[Coupling|decoupling]] them
- Holds a message while the server is busy
- Multiple [[System|Systems]] can be served

Bad

- [[Communication]] and [[Latency]] become something to worry about
- Different implementations introduce problems (see next session)

# Concerns

A combination of the following is usually covered by different implementations. Not covering them means the problem is shifted for the [[Software|Application]] using the message queue.

- Guaranteed delivery
- No duplication delivery
- Order of message is maintained
- At least one delivery with [[Idempotence|idempotent]] consumers
