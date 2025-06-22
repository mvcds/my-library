[[Information Security|Security]] in [[Monolithic Architecture|Monolithic Application]] has to deal with a smaller [[Attack Surface]] and a single [[Trust Domain]] and [[Access Control]].

This means that even though attackers have less opportunities to breach the [[System]], when they do, the whole is compromised.

On the other hand, for each [[Microservice Architecture|Microservices]] the attacker will have a new attack surface to exploit but if they [[success|succeed]], damage is localized because each service has a particular [[Trust Domain|Trust Boundary]]

With microservices the attack surface is also dynamic, as we can scale or "refactor" how the services are made available.

If each microservice has its own access control mechanism, communication between them requires constant authentication[^1].

---

It's pretty common for microservices to run in [[Container]]s, and thus it's a good idea to automatize security practices for each container

[^1]: Check [[Mutual Transport Layer Security|MTLS]]
