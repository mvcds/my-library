It's better to place [[Invariant|Invariants]] in their [[Domain Object]] except when they span multiple [[domain-driven-design/concepts/domain-objects/Aggregate|Aggregates]] or are [[context|contextual]], like during creation, when there is no [[carreer/development/programming/Identity|id]] yet.

For those it might be better to move some to the [[Factory]]