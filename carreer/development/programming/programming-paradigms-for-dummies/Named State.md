The real-word can be expressed as [[Function]]s that change over [[time]] - and thus [[State]] becomes a necessary evil.

A necessary evil because at the same time that we allow [[Code]] to adapt to its new [[environment]], we lose control about its correctness: that is, as the internal state can eventually be missing or incorrect, also will its holder. Whereas a component without a named state, once proved correct will forever be like this[^1]

A good rule is that named state should never be invisible: there should always be some way to access it from the outside for check for correction

---

There are three faces (giving us $2^{3} = 8$ combinations)

- [[Determinism|Deterministic]] vs Nondeterministic
- Unnamed [[State]] vs Named [[State]]
- Sequential vs [[Concurrency|Concurrent]]

[^1]: [[Pure Function]]
