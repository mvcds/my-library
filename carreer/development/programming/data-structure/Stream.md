An [[data structure]] to process a sequence of [[data]] elements made available over [[time]]. A stream can be thought of as items on a conveyor belt being processed one at a time rather than in large batches.

Streams are processed differently from batch data – normal functions cannot operate on streams as a whole, as they have potentially unlimited data, and formally, streams are [[Coinduction|codata]] (potentially unlimited), not data (which is finite). 

Functions that operate on a stream, producing another stream, are known as filters, and can be connected in pipelines, analogously to [[function composition]]. Filters may operate on one item of a stream at a time, or may base an item of output on multiple items of input, such as a moving average.
