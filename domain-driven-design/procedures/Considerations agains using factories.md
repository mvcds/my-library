#procedure in [[0 - Domain-Driven Design]]

Consider the following to find out when **not** to use [[Factory|Factories]]:

- The class is the concrete [[Type System|Type]] i.e. it is not in a [[Polymorphism|polymorphic]] hierarchy
- The [[Client]] cares about the [[Concretion|Concrete]] implementation like in the [[Strategy Pattern]]
- All of the [[Domain Object|object]]'s attributes are accessible for the client
- Simple constructors
- When choosing a constructor, we still need to enforce [[Invariant|Invariants]]
