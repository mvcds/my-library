---
aliases: [Implicit Invocation]
---

A kind of [[Software Architecture]]

#learn

# Advantages

- Async
- Loose coupling
- Trackable
- Scalabe (?)
- Replayable

# Disadvantages

- Easy to overengineer
- Require upfront investiment (?)
- [[Complex]] infra
- Create dependency [[Graph]]s
- [[Data]] & transaction management needs to be done
- Do not support ACID (? - consistency, maybe?)

# Notice that

- It allows [[polyglot system]]s
- Data should be wrapped into carefully [[version|versioned]] packages
- There might be data inconsistency between services
- Duplicated [[carreer/development/programming/message/Event|events]] might exist
- Event consumers should [[code]] with the assumption that data schema might change
- Event producers should minimize breaking changes
- [[Team|Teams]] need to know why, the purpose and when a [[message]] exist/is used for
- Complex graphs or [[Feedback Loop]] will impact network usage
- [[Hard Problems#Hackernoon|Order is not guaranted]]
- [[Side Effect|Side Effects]] on consumers make messages not replayable

# [[Representational State Transfer Architecture| REST]]'s still good

- To sync is due to request/reply model
- Public [[Application Programming Interface|API]]s (?)
- Convenient support for strong transactions (?)
- Small projects, as it is simpler
