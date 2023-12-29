---
aliases:
  - Scaling Out
  - Scaling In
---
Changing the [[System]]'s capacity by changing the number of [[Computer|Nodes]].  

It's like adding houses to the villa, if there's a fire on that house, the other ones don't get affected and can even "host" the people from the affected house - it's like more power rangers showed up for a special episode.

We can scale horizontally in two ways
- [[Sharding Pattern|Sharding]]
- Compute: split work to do in [[Parallelism|parallel]]

# Tradeoffs
Good
- Helps with [[Fault Tolerance]]
- Allows [[Distributed System|Distributed Systems]]

Bad
- Costs more [[money]]
- Required better "coordination" of resources ([[Load Balancer]])
- Introduces [[Latency]] and [[communication]] problems
- More [[Complex]] [[Software Architecture|architecture]]