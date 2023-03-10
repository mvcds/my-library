---
aliases: [ABAC]
---

ABAC is an [[Access Control|Authorization Policy]] that can be thought of as a generalisation of [[Role-Based Access Control|RBAC]] that extends to any attribute of the [[user]], the [[environment]] in which the user exists, or the [[Asset|Resource]] being accessed.

The logic for [[Authorization|authorizing]] can come from any property of the user's profile such as their position as defined by HR, the amount of time they have worked at the company, or the the country of their IP address. In addition, ABAC can draw on global attributes like the time of day or whether it's a national holiday in the user's local.

The most common standarized means of expressing ABAC policy is [[XACML]]. Which often needs a libray or (custom) [[Domain-Specific Language|DSL]] to work.

Consider ABAC when:

-   Permissions are highly dynamic and simply changing user roles is going to be a significant maintenance headache
-   The profile attributes on which permissions depend are already maintained for other purposes, such as managing an employee's HR profile
-   Access control is sufficiently sensitive that control flows need to vary based on temporal attributes such as whether it's during the normal working hours of your employees
-   You wish to have centralised policy with very fine-grained permissions, managed independently of your application code.