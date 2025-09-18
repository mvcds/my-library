Often there's a process to create [[Integration Testing|Integration Tests]]:

1. Plan
	1. Scope: which components and [[Interface|Interfaces]]
	2. Defining [[testing case|testing cases]]
	3. Defining testing [[environment|environments]]
2. [[system-design-interview/concepts/Design|Design]]
	1. Determine which interfaces to a particular test
	2. Determine which [[Data]] to a it
	3. [[Success]] criteria
3. Execution
	1. Run the tests
	2. Fix errors caused by changes
	3. Repeat 1 and 2 until there are no new errors that those changes caused

---

[[Artificially Intelligent Agent|Agents]] can

- generate [[testing case|testing cases]] for us
- detect anomalies
- optimize results and
- automate repetitive tasks

---

Tools

- Testim
- Applitools
- Mabl
- [[Selenium]] + [[Artificial Intelligence]]
- AskUI

---

Good Practices

- Select the appropriate tool
- Configure and train it correctly
- Monitor and readjust
- Integrate it with the workflow

---

- Agnostic [[Strategy]]
- Robust Assertions
- Stable
- [[carreer/achieving-goals/Metric|Metrics]]

---

Pain in UI testing

- [[Flakiness]] due to asynchronous [[Code]
- Superficial assertions
- High maintenance [[Cost]] (frail [[selector|selectors]] and [[Data]])
- [[Test Coverage|Coverage]] breach

---

[[Artificial Intelligence]] helps us testing due to

- Smart [[Test Coverage|Coverage]]
- Robust assertions
- Auto-scaffolding
- Safe [[0 - Refactoring]]
- Less [[designing-data-intensive-applications/concepts/three-types-of-faults/Failure|Failures]]
- [[Prioritizing]]
- Less [[Mean Time to Recover]]

---

[[Artificial Intelligence|AI]]-assisted [[Strategy]]

- [[Specification|Spec]]-first: [[Acceptance Criteria]] and [[Interface|contracts]] make for "verifiable [[Behavior]]"
- Structured [[Output]]: such as [[Javascript Object Notation|JSON]] or [[Gherkin]], using [[Data Structure|Schema]] to fail if it's not valid
- N-Best Consensus: 2 [[Model|Models]] fused
- [[Risk]]/[[Business Value|Value]] wardship: happy cases, limits, negative values, etc

---

Good practices and tools

- Minimum [[context]] and low [[Temperature]] to relative [[Determinism]]
	- Like creating a "slice" for particular [[endpoint]]
- Validate outputs using [[Data Structure|Schema]]
	- [[[Artificially Intelligent Agent|AI]] can generate JSON schemas for use cases
	- It's possible to "tag" the case
- Cloud tooling for [[system-design-interview/concepts/Design|Design]], local [[Large Language Model|LLMs]] for [[Privacy]] and/or batch [[Continous Integration|CI]]
- Enrich [[Prompt|Prompts]] with [[Metadata]] and [[Changelog|Changelogs]]
- Data-, not code-[[Maintainability]]

---

Example

1. Ask the [[Artificially Intelligent Agent|AI]]  to generate the slice for an [[Endpoint]]
2. Create the validation [[Data Structure|Schema]] for the [[Use Case|Use Cases]] (AJV)
```json
{
	"type": "object",
	"required": ["partitions", "boundaries", "scenarios", "negatives", "oracle_rules", "assumptions"],
	"properties": {
		"partitions": { "type": "array", "items": { "type": "string" }},
		"boundaries": { "type": "array", "items": { "type": "string" }},
		"scenarios": { "type": "array", "items": { "type": "string" }},
		"negatives": { "type": "array", "items": { "type": "string" }},
		"oracle_rules": { "type": "array", "items": { "type": "string" }},
		"assumptions": { "type": "array", "items": { "type": "string" }}
	},
	"additionalProperties": false
}	   
```
3. Ask the AI to generate the cases using the schema
4. Create a validation script to validate the bundle agains the schema
	1. Make it tell exactly where errors locate
5. Create a [[Specification|Spec]] to consume the bundle (point 3), and execute each case with multi-layer oracles
	1. [[User Interface|UI]] + [[network]] + [[State]] 

---

[[Mutation Test]] assisted by [[Artificial Intelligence]]

AI can help to

- triage survivors (missing cases, weak oracle or equivalency)
- design the minimum way to kill a mutant
- suggest more specific assert, and edge-cases

```prompt
Act as a mutation testing revisor. Input:
- Mutaded code (TS)
- Mutated survivor diff
- Resume of actual test
  Return a JSON {rational, minimum_case, oracles, edge_cases, affected_coverace} and explain why the mutant is killed
  ```

---

[[Model-Based Testing|MBT]]

```prompt
As a senior QA enginieer specialized in mopdel-based testing, create a MBT workflow to generate routes with coverage criteria and execute them in Cypress with reusable oracles
Criteria/Rules:
- Centralize oracles en mbt/oracles.ts (do not duplicate asserts in the spec)
- Data: if needed, take limits and partions from the slice and refer the case
- Stability: avoid flakiness (expkicit waitings only to intercepted events)
- Tracebility: each transaction en mbt-routes.json must cite the rule/guard that enables it, from the slice
  
If fields/rules are missing on the slice/shchema: create clear TODOs in commentsm and provide minimum stubs to complete the workflow
```

---

[[Property-Based Testing|PBT]]

- We test properties, not examples (more coverage for less [[Maintainability]])
- We derivate the rules from schema and YAML ([[Artificially Intelligent Agent|AI]]) i.e. smart generators and limits
- Efficiency in detecting duplication of [[APIs]]
- [[Model-Based Testing|MBT]] decides the sequence, [[Property-Based Testing|PBT]] stresses the [[Data]]
- Counter examples minimized, making for clearer tickets
- [[Determinism|Deterministic]] seeds on the PR, [[random]] in nightly
- Finding bugs earlier with less [[Cost]]
- Next step: migrate critical validations to properties

---

Synergy of [[Mutation Test]] + [[Property-Based Testing|PBT]] + [[Model-Based Testing|MBT]]

- Mutation reveals breaches, [[Artificially Intelligent Agent|AI]] suggest properties or examples
- PBT discover limits, AI adds safeguards to the MBT [[Model]]
- MBT fails in edge cases, AI strengths oracles and sync

---

![[ai-assisted-testing-pyramid.png]]

---

Challenges in [[Complex]] [[environment|environments]]

- [[Feature Toggle|Feature Flags]] and 3rd parties: isolate/canary/remove flow; fallback policies [[UX]] in [[End-to-end testing|E2E]]
- [[Large Language Model|LLM]] lacks [[Determinism]]: accept variance, seeds, n-best register and consensus
- Visual [[Testing]]: tolerances, ignore regions and layout deltas
- [[Data]]/Environments: [[Idepotent Key|Idepotent Keys]], shared seeds, repeatable builders
- [[Security]]: which flows run on a local LLM, [[Personal Identifier Information|PII]], and [[Retrieval-Augmented Generation|RAG]] 

---

[[Module|Modularize]] is crucial

---

It's important to beware that [[Artificially Intelligent Agent|AI]] can use [[Cost|expensive]] or inefficient [[Asset|Assets]], it's always better to specificy 