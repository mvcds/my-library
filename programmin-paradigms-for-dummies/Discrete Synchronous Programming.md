AKA Reactive System

A [[Programming Paradigm]] that waits for input events and emits output events. It has to be [[Determinism|deterministic]].

Very similar to [[Functional Reactive Programming]] but with [[Discrete Functions]] instead.

Output events are emitted at the same logical instant as the input, like a [[Mealy machine]].

Clocked digital logic works like this

- Combination circuits are instantaneous (happen withing the same cycle)
- Sequential circuits are sequential (they happen in multiple cycles, they "take time")