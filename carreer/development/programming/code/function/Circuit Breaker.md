You wrap a protected [[Function]] call in a circuit breaker [[Object]], which monitors for [[success|failures]]. Once the [[success|failures]] reach a certain threshold, the circuit breaker trips, and all further calls to the circuit breaker return with an error, without the protected call being made at all. Usually you'll also want some kind of [[Logging, Monitoring and Tracing|monitor]] alert if the circuit breaker trips.

The circuit breaker has three states.

- Closed: it works as intended, when an error happens, it opens the state
- Open: it avoids finishing the normal circuit
- Half Open: it tries to test waters after some wait [[time]], to see if the problem still exists, and it changes the state to close/open accordingly to the result

---

It's a kind of [[Feedback Loop]] which also force a threshold in a faulty [[system]] in order to protect it.

It uses data as its [[Kill Swtitch]]
