A [[data]] [[Abstraction]] is a way to organize the use of [[data structure]]s according to precise rules which guarantee that the [[data structure]]s are used correctly.

It has an inside, an outside and an [[Interface]] between both.

# Advantages

1. Only operations authorized by the [[Interface]] are possible, making possible to the [[data structure]] to always work correctly
2. It's easier to reason about the [[Code]] if you don't need to understand about implementation.
3. Different people can implement different parts of the [[Software]] and care only about their [[Interface]]s to put them together
4. [[Software]] become composable[^1]

# Organizing

The first axis is the presence or not of [[Named State]], the second _bundling_ i.e. are [[data]] and operations together in a single entity or separate[^2]?

---

[[OOP]] as it is usually understood is nothing more than [[data]] abstraction with [[Polymorphism]] and [[Inheritance]]

[^1]: check [[Composition Over Inheritance]]
[^2]: check [[Procedural Data Abstraction]] and [[Abstract Data Type]]