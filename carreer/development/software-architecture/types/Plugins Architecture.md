---
aliases: [Microkernel Architecture]
---

A kind of [[Software Architecture]] where there's a core application which can be extended through plugins

The core defines the [[Interface|contracts]] that all plugins must adhere to work properly, but it doesn't need to know as each plugin works internally

Good usages

- Task Scheduler
- Workflow
- Data processing[^1]
- Browser extensions
- Graphic Designer Apps

It is a very flexible pattern with a clear separations of concerns which allows teams to work separately (with their own style of work). Functional-wise, it allows the [[behavior]] of the app to change during [[runtime]]

The tradeoffs for its advantages is that the [[Application Programming Interface|API]] might be limiting for future plugins and that it's not possible to [[Trust Domain|trust]] the security of a plugin, not to mention that it is a struggle to identify what belongs to the core and what belongs to each plugin

[^1]: Check [[Pipeline]]

#learn
