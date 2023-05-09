#concept in [[0 - Domain-Driven Design]]

![[Domain Object Life Cycle.jpeg]]
 
Some [[Domain Object|Domain Objects]] are long-lived and with [[Complex]] [[dependency|dependencies]], going through changes of [[State]] to which [[Invariant|Invariants]] apply.

It's challenging to maintain [[Integrity]] though their [[life cycle]] and to prevent to swamp the [[2 - Domain Model]] with management tasks, so we separate those.