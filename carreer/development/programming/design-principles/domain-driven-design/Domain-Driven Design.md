---
aliases: [DDD]
---

A methodology to software development that preaches that the underlying [[Domain]] of a program is the most important part of the software and thus development should be driven by it[^3].

Since talking to [[business]] experts to creating [[Model]]s to abstract some aspects of the domain we're interested in should be done by incorporating into all levels of the project the language used by the experts[^1]. This gives software design a way bigger role than code design[^2]

It's important to notice that a model is not absolute, each aspect of the [[business]] might see the same "actors" from different perspectives. Due to it, the domain can be be divided in multiple [[Bounded Context]]s

And that infrastructure should support the domain but not necessarelly be part of it (for instance being a [[Service in DDD|service]])

[^1]: Check [[carreer/development/programming/design-principles/domain-driven-design/Ubiquitous Language|Ubiquitous Language]]
[^2]: Check [[Software Design > Code Design]]
[^3]: Check [[Software Design more important than Code Design]]
