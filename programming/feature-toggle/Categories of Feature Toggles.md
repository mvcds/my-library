There are some categories of [[Feature Toggle]] which we can fit into two dimensions [[longevity]] and [[dynamism]]

![[categories-of-feature-toggles.png]]

- Release: allow to integrate incomplete or untested [[Code]] to the main branch, can also be used to coordinate release strategies with other departments, like marketing -> [[Separate Release From Code Deployment]]
- Experiment: when the toggle needs to "hit" enough users. to be statistically significant for a particular [[context]] - this might be hour or days
- Ops: allow gradual or complete degradation of some parts of the system like a[[Kill Swtitch]] or a manual [[Circuit Breaker]], because it gives people the power to manage issues resulting from the operations in a given [[environment]]
- Permission: changes affect a specif [[Cohort of users]], like premium or beta. Even allow some "dev" users ([[Drink your own Champagne]])