> All [[software]] systems can be [[composition|decomposed]] into two major elements: policy and details. The policy element embodies all the [[business]] rules and procedures. The policy is where the true value of the system lives.
> The details are those things that are necessary to enable humans, other systems, and programmers to communicate with the policy[^1], but that do not impact the [[behavior]] of the policy at all. They include IO devices, databases, [[World Wide Web|Web]] [[system]]s, servers, frameworks, communication protocols, and so forth.
> The [[Goal]] of the [[architect]] is to create a shape for the system that recognizes policy as the most essential element of the system while making the details irrelevant to that policy. This allows decisions about those details to be delayed and deferred.

~ [[Robert C. Martin]], [[Clean Architecture]]

[^1]: Check [[Interface]]