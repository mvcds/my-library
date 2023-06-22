#procedure in [[0 - Domain-Driven Design]]

How to do good [[Factory]] [[Interface]] [[Design]]

- Atomic operations. Committing to change only when [[Invariant|Invariants]] are correct. When these fail be [[Consistency Principle|Consistent]] on how to handle it (throw exception, return null, etc)
- The simpler the [[Argument|Arguments]], the [[Low-Coupling|lower the coupling]] and [[Complex|Complexity]]
- Prefer [[carreer/development/programming/Abstraction|abstract]] arguments over [[Concretion|Concrete]] ones