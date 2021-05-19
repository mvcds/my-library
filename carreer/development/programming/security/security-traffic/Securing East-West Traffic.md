East/West [[Security Traffic|traffic]] refers to [[Microservice Architecture|Microservices]] exchanging [[Data]].

Given `OrderService` that uses a `PaymentService`

- Avoid the [[Shared Access Token]] as the order of the calling can be bypassed i.e. the attacker go directly to `PaymentService` forging info
- Avoid the [[Token Relay]] as it increases [[Low-Coupling|coupling]] i.e. either `OrderService` or `PaymentService` has to have a conditional to check the if the operation can be completed based on the [[carreer/development/programming/security/identity/Identity|identity]]. This is bad because an attacker breaching `OrderService` would be able to mess with `PaymentService` indirectly
- Use [[Token Switch]] as it allows `OrderService` to put its own claims into the token before forwarding it to `PaymentService`