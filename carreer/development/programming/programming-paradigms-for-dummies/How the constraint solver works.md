Solving a [[Constraint Satisfaction Problem]] naivily is easy: just enumerate all possible values for all variables and test whether each enumeration is a solution

- Propagate step: Reduce the domains of the variables in size as much as possible according to the [[Propagator]]s. A propagator is triggered when the domains of any of its arguments change. It then attempts to further reduce the domains of its arguments according to the constraint it implements. Propagators can trigger each other through shared arguments. They execute until no more reduction is possible (a [[fixpoint]]). This leads to three possibilities: a solution, a failure (no solution), or an incomplete solution
- Distribute step: For each incomplete solution, choose a constraint C and split the problem P into two subproblems  `P ∧ C` and `P ∧ ¬C`. This increases the number of problems to solve, but each problem may be easier to solve since it has extra information (C or ¬C). This step is the most primitive form of search.

The algorithm then continues with propagate steps for the two subproblems. This creates a binary tree called the search tree. The efficiency of the propagate-distribute algorithm depends  [[Factors of the Propate-Distribute Algorithm]]