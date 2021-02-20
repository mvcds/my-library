Considered one of the best patterns to do [[Data Management]], it allows a sequence of local transactions that updates each service and publishes a [[message]]/[[carreer/development/programming/Event]] to trigger the next local transaction. In case of failure of any of the local transactions, saga executes series of **compensating transactions** that undo changes made by preceding local transactions thereby preserving **[[ACID|atomicity]]**

There are two flavors:

- Choreography Design: participants exchange **events** without a centralized point of control
- Orchestration Sequence Logic: a centralized controller tells the saga participants what local transactions to execute.

![[saga-pattern.png]]