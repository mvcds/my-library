A [[Function]] which remembers about the [[environment]](the lexical scope) where it has been created by keeping references to the [[Variable]]s it was interested.

Passing such closures around means that even though the callee cannot access such references directly, they will be used during the closure execution.

Many abilities normally associated with specific paradigms are based on closures:

- Instantiation and genericity: normally associated with [[Object-Oriented Programming|OOP]], it can be done easily by writing [[Function]]s that return other [[Function]]s - a [[Class]] is just a [[Function]] that returns an [[Object]]
- Separation of concerns: normally associated with aspect-oriented programming, can be done easily by writing [[Function]]s that take other [[Function]]s as [[Argument]]
- [[Component-based programming]]
