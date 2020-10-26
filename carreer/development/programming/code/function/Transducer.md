> A [[carreer/development/hardware/Transducer]] is a [[Function Composition|composable]]  [[High Order Function|higher-order]] [[reducer]]. It takes a reducer as input, and returns another reducer.

#quote by Eric Elliott at https://link.medium.com/zDMKKfLDlX

Often, when we process data, it’s useful to break up the processing into multiple independent, composable stages. For example, it’s very common to select some [[data]] from a larger set, and then process that data.

And for that, generally [[Array]] methods are used, which create new arrays every time, a problem for big data processing.

Transducers don’t do anything until you tell them to start and feed them some data to process

# Characteristics

- Composable using simple function composition
-  Efficient for large collections or infinite streams: Only enumerates over the elements once, regardless of the number of operations in the pipeline
-  Able to transduce over any enumerable source (e.g., arrays, trees, streams, graphs, etc…)
-  Usable for either lazy or eager evaluation with no changes to the transducer pipeline

# Rules

- Initialization: Given no initial accumulator value, a transducer must call the step function to produce a valid initial value to act on. The value should represent the empty [[state]]. For example, an accumulator that accumulates an array should supply an empty array when its step function is called with no arguments.
- Early termination: A process that uses transducers must check for and stop when it receives a reduced accumulator value. Additionally, a transducer step function that uses a nested reduce must check for and convey reduced values when they are encountered.
- Completion (optional): Some transducing processes never complete, but those that do should call the completion function to produce a final value and/or flush state, and stateful transducers should supply a completion operation that cleans up any accumulated resources and potentially produces one final value.