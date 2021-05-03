There are 3 which can be chosen independently

![[propate-distribute-algorithm.png]]

- Propagation over the constraint domains. This defines how much propagation (pruning) is done by the[[ Propagator]]s. This depends on two factors: the sophistication of the propagators and the expressiveness of the constraint domains. Propagators can implement highly sophisticated algorithms that depend on deep theoretical results. Better propagation and more expressive constraint domains reduce the number of distribution steps (less search) at the cost of more propagation (more inferencing). Depending on the problem, this may or may not be a good trade-off
- Distribution strategy. This [[heuristic]] defines how the constraint C is chosen for each distribute step. A good choice of C depends on the structure of the problem and the distribution of its solutions.
- Search strategy. This [[heuristic]] defines how the search tree is traversed. Typical traversals are depth-first or breadth-first, but many more sophisticated traversals exist, such as [[A-Star|A*]]