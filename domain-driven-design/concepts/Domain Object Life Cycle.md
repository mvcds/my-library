#concept in [[3 - The life cycle of a domain object]]

![[Domain Object Life Cycle.jpeg]]

Some [[Domain Object|Domain Objects]] are long-lived and with [[Complex]] [[dependency|dependencies]], going through changes of [[State]] to which [[Invariant|Invariants]] apply.

It's challenging to maintain [[Integrity]] though their [[life cycle]] and to prevent to swamp the [[Domain Model]] with management tasks, so we separate those.
