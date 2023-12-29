---
aliases: [SQL]
---

A [[declarative]] [[Domain-Specific Language|DSL]] used in [[Relational Database]]. It also has some [[procedural]] features.

The scope of SQL includes

- data query
- data manipulation (insert, update and delete)
- data definition ([[Model|schema]] creation and modification)
- data access control

# Tradeoffs
 Good
 - Powerful queries out of the box (no custom [[Code]] required)
 - [[ACID]]
 - Faster than [[NoSQL Database|NoSQL]] for reads

Bad
- Slower than [[NoSQL Database|NoSQL]] for writes (due to [[B-Tree|B-Trees]] as they normally power the db)
- Higher [[Latency]] in order to achieve [[Consistency Principle|Consistency]]
- Fixed and universal [[Data Structure|Schema]]