#procedure in [[0 - Domain-Driven Design]]

- The [[Aggregate Root|Root]] is an [[Entity]] with a global [[carreer/development/programming/Identity|identity]] which will be responsible for enforcing the [[Invariant|Invariants]]
- Entities within the boundaries of an [[domain-driven-design/concepts/domain-objects/Aggregate|Aggregate]] have local and secret identities that should not be available outside
- No references to something internal to an aggregate are allowed but for the root, tho references can be used transiently - which is easier to do with [[14 - Value Object|value objects]] because they can be copied
- As a corollary to the previous rule, only roots can be obtained directly with [[Database]] queries, everything else should be found by a [[7 - Association|transversable association]]
- [[Domain Object|Objects]] within an aggregate can refer to each other and also to other roots
- A delete operation removes everything within the boundary of an aggregate. Delete the root, and the [[garbage collection]] will take care of the rest.
- Committing a change to an object within the aggregate only can succeed when invariants are satisfied
