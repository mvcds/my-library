One of the most [[declarative]] [[Programming Paradigm]]s invest what we usually what we expect of [[Programming Language]]s.

The programmer in this case specifies the result and the system searches for it by assigning "random" values to variables but respecting some constraints on how this assignment is made. 

The problem to be solved needs to be expressed as a [[Constraint Satisfaction Problem]].

---

Instead of writing a set of instructions to be executed, the programmer models the problem: represent the problem using variables with their domains, define the problem as constraints on the variables, choose the propagators that implement the constraints, and define the distribution and search strategies.

For small constraint problems, a naive model works fine. For big problems, the model and [[heuristic]]s have to be designed with care, to reduce search as much as possible by exploiting the problem structure and properties.

> The art of constraint programming consists in designing a [[model]] that makes big problems tractable.

#quote

The power and flexibility of a constraint programming system depend on the expressiveness of its variable domains, the expressiveness and pruning power of its propagators, and the smartness of its CSP solver. Early constraint systems were based on simple domains such as finite [[Tree]]s and integers. Modern constraint systems have added real numbers and recently also directed [[Graph]] as domains

---

Very related to [[Declarative Concurrency]] because it applies [[Concurrency]] and [[Determinism]] but differs from it in two ways

- It uses constraints not dataflow variables
-  it has a more flexible control flow: each constraint executes in its own thread, which makes it into a concurrent agent called a [[Propagator]]. This allows the constraints to better prune the search space

# Applications

- Combinatorics
- Planning
- Scheduling
- Optimization
- [[Goal-oriented programming]][^1]

[ˆ1]: Check [[Goal]]