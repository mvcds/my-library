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

---

Good [[Prompt|Prompting]] practices

1. Ask for clarification: before beginning allow the [[Artificially Intelligent Agent|Agent]] to ask you [[question|questions]]
2. Justification: ask the agent the reason for choosing an option
3. Proposes: get a list with possible changes and their [[Reasoning]]
4. [[Testing|Tests]]: inform which parts of the [[Code]] would require [[Mock Object|mocks]] and what they return
5. Review: make sure the code align with the [[Goal|Goals]]
6. Give examples: show similar code and examples

---

Think of [[Artificially Intelligent Agent|Agents]] as an expert consultant, they need [[context]]

---

[[Prompt|Prompting]] is your new super power

---

The 3 parts of a [[Prompt]]

1. Explaining: explain what you need in simple terms, only give the relevant parts
2. [[Goal]]: specifying what you need the [[Artificially Intelligent Agent|Agent]] to do
3. Interaction: going back and forth with the agent to achieve the goal

---

Our job is [[thinking]] not [[executing]], [[Artificially Intelligent Agent|Agents]] can execute

We're moving from "how to do it" to "what to do it", [[Knowledge]] matters not [[syntax]]

---

To use [[Artificially Intelligent Agent|Agents]] to write [[Testing|Tests]] we can use [[User Story|User Stories]] and [[project]] [[context]] to enrich the [[Prompt|Prompts]]