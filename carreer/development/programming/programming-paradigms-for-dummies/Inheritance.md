When many [[Abstraction]]s share something in common, it's possible to define a relationship between them.

This way it's possible to tackle only one of them (the parent) and affect all of the ones that "inherit" from it (the children) - this allows the [[Substitution Principle]].

This is another way of applying [[DRY]], but a dangerous one, because it extends the [[Interface]] of the children through high [[Low-Coupling|coupling]] - that's why [[Composition Over Inheritance]] is preferred. So if you want to do it, you should observe the [[Likovski Substitution Principle]]

---

The second most important aspect of [[Object-Oriented Programming|OOP]] according to [[Peter Van Roy]]
