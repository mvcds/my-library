To maintain the integrity of a [[Database]], all transactions must obey ACID properties

# Atomicity

A transaction should be atomic, or all of its commands success or all of them fail

# Consistency

After every transaction the [[Database]] should still be consistent

# Isolation

When multiple transactions are running in parallel, one should not interfere with the other. It's like they were sequential, but which comes first doesn't matter.

# Durability

Hard- or [[Software]] failure should not make [[Information]] disappear