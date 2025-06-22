---
aliases: [Monotonic Dataflow]
---

A [[Programming Paradigm]] that only uses [[Determinism|deterministic]] inputs and outputs, it relates to Constraint Programming and contrast to [[Nonmonotonic Dataflow]]

---

It has the advantages of [[Functional Programming]] in a [[Concurrency|concurrent]] [[Model]]. That is, no [[Race Condition]]

In it, a [[Thread]] variable is just a a sequence of instructions, whereas a [[Dataflow]] is a single-assignment variable that is used for synchronization.

It's also possible to make this paradigm lazy by adding a [[By-Need Synchronization]] (a variable which waits until a thread calls "wait").

When [[Lazy Execution|lazy]], it's the consumer of a result that decides whether or not to perform a calculation, not the producer of the result. In a loop, the termination condition is in the consumer, not the producer. The producer can even be programmed as an infinite loop.
