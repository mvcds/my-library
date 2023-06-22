You divide [[data]] into multiple partitions, chunk or shards. It is about [[Horizontal vs Vertical|horizontal]] [[scalability]].

A bit like investing with a diversified portfolio.

- Range-Based Sharding: involves dividing data into contiguous ranges determined by the shard key values. In this model, documents with “close” shard key values are likely to be in the same shard.
- Vertical-Sharding: the data is divided according to usage i.e. [[customer]] demographic details can be in one shard while its buying transactions in another
- Hash-based Sharding: it divides the shards using module operation - to prevent issues in the long run (like adding a new shard), you can resort to [[consistent hashing]]

---

It is good for [[Scalability]], [[Data Management]] and [[Performance]]