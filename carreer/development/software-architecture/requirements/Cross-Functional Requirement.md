---
aliases:
  - Cross-Functional Requirements
  - CFR
  - CFRs
  - Non-Functional Requirement
  - Non-Functional Requirements
  - NFR
  - NFRs
  - Software Characteristic
  - Software Characteristics
  - Architectural Characteristic
  - Architectural Characteristics
  - Software Architecture Characteristic
  - Software Architecture Characteristics
  - Quality Attribute
  - Quality Attributes
  - XFR
  - XFRs
---

[[System Requirement|System Requirements]] that are "technical" in the sense that they do not originally directly from the [[business]]. For instance, here are **some** of the most common CFRs

- [[Performance]]
- [[Availability]]
- [[Usability]]
- [[Modifiability]]
- [[Interoperability]]
- [[Information Security|Security]]
- [[Portability]]
- [[Scalability]]
- [[Deployability]]
- [[Safety]]
- [[Resiliency]]
- [[Data Management]]
- [[Durability]]
- [[Observability]]
- [[Auditability]]
- [[Accessibility]]

Some of those requirements "help" each other. For example, when [[Readability]] is high, it's easier to have modifiability. But on the other hand, readability often clashes with performance[^2].

---

Avoid using "non-functional requirement" because the "non" there might raise the following eyebrows[^1]

- It's something that is not required to function
- It's the opposite of [[Functional Requirement]]

[^1]: https://sarahtaraporewalla.com/agile/design/i-dont-believe-in-nfrs
[^2]: Similar to the [[carreer/development/software-architecture/cap-theorem/CAP theorem|CAP Theorem]]
