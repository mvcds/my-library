Smart agents[^1] may try to guess where other agents will be based on their vector and velocity:

- closing velocity `Vr = prey.velocity - predator.velocity`
- range to close `Sr = prey.vector - predator.vector`
- [[time]] to close `tc = | Sr | / | Vr |` where `|` is magnitude of the vectors
- prey future position `Si = prey.position + prey.velocity * tc`

[^1]: Check [[Function]], [[Artificial Intelligence]]] and [[Goal]]