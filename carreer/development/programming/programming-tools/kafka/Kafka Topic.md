---
aliases:
  - Kafka Topics
  - Topic
  - Topics
---

In [[Kafka]], a topic is like a folder in the [[File System|Filesystem]], where [[carreer/development/programming/message/Event|Events]] are stored and organised. Each topic can be configured separately.

Topics are [[CAP Partition Tolerance|partioned]] by key on different [[Message Broker|Brokers]], so the same [[Message Producer|Producer]] will always write to the same topic.

We can also [[Replication|replicate]] topics

---

Each is similar to a repeatable [[Queue]]
