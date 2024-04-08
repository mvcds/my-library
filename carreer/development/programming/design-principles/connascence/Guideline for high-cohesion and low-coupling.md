This helps us to achieve [[High-Cohesion]] and [[Low-Coupling]]

1. Minimize overall connascencse by breaking the system into [[encapsulation|encapsulated]] elements[^1]
2. Minimize any remaining that coresses encapsulation boundaries[^2]
3. Maximize the connascence within encapsulation boudaries

---

In general apply the following rules

- **Rule of Degree**: convert strong forms of connascence into weaker forms of connascence 
- **Rule of Locality**: as the distance between software elements increases, using weaker forms of connascence

[^1]: [[Module|Modules]]
[^2]: [[Bounded Context|Bounded Contexts]]