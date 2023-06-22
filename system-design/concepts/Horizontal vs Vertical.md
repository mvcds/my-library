#concept  about [[Scalability]], [[Performance]] and/or [[Fault Tolerance]]

A [[system]] changes its total capacity either by changing the number of [[Computer|Nodes]] (horizontally) or changing its technical capacity (vertically)

- Scaling up horizontally tend to cost more [[money]] but it helps with [[Fault Tolerance]] by reducing [[Success|single points of failure]] and required better "coordination" of resources ([[Load Balancer]]): i think about it like adding houses to a vila - if one catches fire, it is localised damaged
- Scaling up vertically tends to be cheaper and faster but it doesn't help with the [[Antifragility|fragility]] of the machine: you add more floors to the building, a fire damages the whole structure