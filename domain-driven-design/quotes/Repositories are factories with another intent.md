> Even though one can arguee that a [[domain-driven-design/concepts/domain-objects/Repository|Repository]] is a [[Factory]] because it also creates[^1] [[Domain Object|objects]], for DDD, they have different responsibilities[^2].
> The [[Client]] of a repository has to have the illusion that the object is in-memory: the object might have been just created but still it is the same <u>conceptual</u> object.

#quote by [[Eric Evans]] in [[0 - Domain-Driven Design]] about the fact that, technically, repositories are factories #paraphrased

Some people reconcile this by having repositories delegating creating to factories, though this doesn't happen often

[^1]: [[Construction vs Reconstitution Factories]]

[^2]: [[Single Responsibility Principle]]
