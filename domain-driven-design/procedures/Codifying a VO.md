#procedure in [[0 - Domain-Driven Design]]

Because [[Value Object|Value Objects]] are just descriptors, they can be [[Immutability|immutable]] - be it by implementation, passing by copy, technology, etc.

This allows for some optimizations for [[Performance]], such as [[Flyweight]]

To achieve this, it's possible to denormalize some of associations when VOs are in the game, like copying them when access time is more critical than [[Computer data storage|Storage]] space, or [[code]] will become simpler to maintain.

In a [[Database]] context, it means we might duplicate data as if it was part of the entity, even it this means repeating it

---

VOs with bidirectional [[Association|associations]] probably are [[Entitiy|Entities]] because it doesn't make sense to point to a particular VO, as pointing to one is pointing to any VO with equal attributes
