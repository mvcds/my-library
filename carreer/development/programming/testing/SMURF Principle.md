---
source: https://testing.googleblog.com/2024/10/smurf-beyond-test-pyramid.html?utm_source=tldrwebdev
---

![[smurf-principle.png]]

An #acronym for how [[Testing]] should be performed in a way that detaches it from the [[Test Pyramid]]

- Speed: [[Unit Testing|Unit Tests]] are fast, so they can run more often
- [[Maintainability]]: The bigger the test, the more potencial for [[Dependency Churn]] and [[System Requirement|Requirement Drift]]
- Utilization: Tests that use less resources [[Loss Function|Cost]] less to run, unit tests generally [[Mock Object|Mock]] everything so they are good for it
- [[Reliability]]: A test that fails only when an actual problem is discovered. As the test suite grows, [[Determinism]] becomes more important
- Fidelity: Unit tests simulate too much, so they might drift between expectation and reality

The points above are tensions, improving a dimension affects the others.
