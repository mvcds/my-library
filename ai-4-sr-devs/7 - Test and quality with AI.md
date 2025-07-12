[[Test-Driven Design|TDD]] and [[Agile]] work well together

1. Define a [[User Story]]
2. Add [[Acceptance Criteria]] breaking them down as much a possible
3. Pick up the simplest AC to create a [[Testing|Test]]
4. Put it on the TDD cycle
5. Once we're done with test[^1], move to point 3, selecting the next simplest AC
6. Once all tests are done, the US is completed

[^1]: All [[0 - Refactoring]] and clean ups

---

[[Test-Driven Design|TDD]] and [[0 - Refactoring]]

TDD for refactoring has a bunch of benefits

- Reduces [[Defect|Defects]]  because pre-existing tests keep us sure the previous behaviours persist
- Gives us confidence to make changes
- Allows for iteractive changes
- Instant validation

---

When we're not sure about how a functionality is implemented, you can [[Fake it 'til you make it]]

---

[[Artificially Intelligent Agent|Agents]] are very good to find out missing edge cases, this is necessary because more often than not devs only think about the happy [[Use Case|Use Cases]]

> What other edge cases do you think can happen?