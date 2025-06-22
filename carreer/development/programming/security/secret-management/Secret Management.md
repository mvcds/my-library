Ideally, any confidential [[information]] should not be hard-coded nor baked into [[Image]]s as having access to their repositories/registries would be a [[Information Security|Security]]breach,

It's recommended to use a secret management platform instead, or at least, some similar functionality of the [[Orchestrator]], though with orchestrators you cannot share secrets to the [[Container]] cluster,

---

Secrets can be set on [[environment variable]] or writing a file to a [[Volume]], the latter is the most secure option
