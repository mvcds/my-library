A [[Function]] which remembers about the [[environment]](the lexical scope)  where it has been created by keeping references to the [[Variable]]s it was interested.

Passing such closures around means that even though the callee cannot access such references directly, they will be used during the closure execution.

Many abilities normally associated with specific paradigms are based on closures:

- Instantiation and genericity: normally associated with [[OOP]], it can be done easily by writing functions that return other functions - a [[Class]] is just a function that returns an [[Object]]
- Separation of concerns: normally associated with aspect-oriented programming, can be done easily by writing functions that take other functions as arguments
- [[Component-based programming]]