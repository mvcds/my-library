AKA Continuous Synchronous Programming

A [[Programming Paradigm]] where the programs are functional but the arguments of the [[Function]] changes this is reflected through the [[Software]].

It accepts [[Nondeterminism|nondeterministic]] inputs but does not adds its own [[Nondeterminism]], which sets it apart from [[Nonmonotonic Dataflow]].

Its arguments are [[Continous Functions]] of totally order variable e.g. time and size.

Its implementations recompute only when the values change and are needed.

`x + (x * y) === 15, x = 3 and y = 4` but if `x` changes to `5` the result has to immediately change to `25`. A naive implementation would allow the new variable to arrive at the addition before the multiplication causing errors, that is, time needs to be a sorting factor even for mathematical operations.