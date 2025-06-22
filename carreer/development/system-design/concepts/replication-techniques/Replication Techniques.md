#concept in [[2 - Key Components of System Design]]

Maintaining multiple copies of the same [[data]] across different [[Computer|nodes]] for increased [[Reliability]], [[availability]], and [[Fault Tolerance]]

We can classify replication in two dimensions:

- [[Replication Synchronicity]]
- [[Replication Leadership]]

# Tradeoffs

Good

- Avoids [[Single Point of Failure]]
- Increases availability
- Enables serving by proximity
- Increases [[carreer/development/Throughput|Throughput]]

Bad

- [[Consistency|Inconsistency]]
- Has to worry about [[Failover]]
