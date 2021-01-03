---
aliases: [Algebra]
---

Algebraic structures abstract common patterns shared between a bunch of [[class|classes]] i.e. an [[Either]] instance and a [[Maybe]] instance both implement the same [[abstraction]] (even if they do not implement the same "concrete" [[interface]]).

They are common so that it's possible for us to interchange the classes and achieve some results with that i.e. a `map` could be renamed `try` for a Maybe, but that would make harder to reuse that class.

---

Algebraic Structures are a bit like code [[design pattern]]s. Unlike design patterns though, they have a mathematical basis and are inter-related. Hence why they’re called ‘algebraic’. Also, unlike design patterns, they have confusing names made up by mathematicians.

# Rules

- Conform to a specific type signature (even in [[Programming Language]] without types)
- Obey some laws (AKA properties)