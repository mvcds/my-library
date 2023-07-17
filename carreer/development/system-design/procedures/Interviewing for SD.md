---
aliases: [System Design Interview, System Design Interviews, SDI, SDIs]
---

#procedure for [[System Design]] interviews



For a 1h interview

1. Understand problem and establish scope(s) (5')
	- Why?
	- [[Goal|Goals]]?
	- [[Feature|Features]]? (get their confirmation on which ones you should focus on)
	- [[Cross-Functional Requirement|Cross-Functional Requirements]]? normally [[Scalability]], [[Performance]] and [[Observability]]
	- Bottlenecks?
	- Estimations? (in order of magnitude)
2. High-level [[Design]] (20'): keep notes on things to discuss later
	- [[Application Programming Interface|APIs]]? (probably [[Representational State Transfer Architecture|RESTfull]])
	- [[Container Diagram|C2 Diagrams]]
	- [[Data Structure|Data Schema]] ([[Replication Techniques]] and [[Sharding Pattern|Sharding]])
	- Read-Write ratio
1. Design deep-dive (15')
	1. Identify problems and their tradeoffs
2. Wrap up (5')
	1. [[4 - Summarizing|Summarize]]

----

Alternatively

1. [[Domain Model|Domain]] [[Entitiy|Entities]]
2. [[Use Case|Use Cases]]
3. [[Number|Numbers]]/[[carreer/development/data-science/Metric|Metrics]] (high-level estimations)
4. High-level components
5. Drilldown [[Database|Databases]]
6. Trim bottlenecks
7. Refine [[Design]]