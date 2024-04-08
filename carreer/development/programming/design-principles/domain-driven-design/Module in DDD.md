https://culttt.com/2014/12/10/modules-domain-driven-design/

In [[Domain-Driven Design]]: container for a specific set of classes of your application which live in a [[Bounded Context]].

Modules present the following characteristics:

- The name of the Module should be derived directly from the [[carreer/development/programming/design-principles/domain-driven-design/Ubiquitous Language|Ubiquitous Language]] and should reflect an important concept from the [[Domain]] rather than just group related objects
- A Module will typically contain one, or sometimes multiple [[domain-driven-design/concepts/domain-objects/Aggregate|Aggregates]] that are highly cohesive - the lack of cohesion indicates that the module has to be split up
- Modules should be organized by concepts from the Domain, and not by the type of class
- Models should be loosely coupled as standalone aspects of your project. You should be able to [[carreer/development/programming/Abstraction|abstratct]] the code out of your project and test it in isolation without having to cut ties or pull a tangle of interrelated knots with your other modules.

Typically you won’t have a pure separation between Modules. The very nature of Domain Driven Design means that there will be relationships between Modules.

However you should aim to distill the relationship between Modules to only those that directly model concepts from the Domain.

You should also aim to reduce the coupling of related Modules by making the dependency between two Modules unidirectional
