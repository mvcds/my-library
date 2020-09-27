You wrap a protected [[Function]] call in a circuit breaker [[Object]], which monitors for failures. Once the failures reach a certain threshold, the circuit breaker trips, and all further calls to the circuit breaker return with an error, without the protected call being made at all. Usually you'll also want some kind of monitor alert if the circuit breaker trips.

---

It's a kind of [[Feedback Loop]] which also force a threshold in a faulty [[system]] in order to protect it.

It uses data as its [[Kill Swtitch]]