---
aliases:
  [
    Security Gates,
    Security Control,
    Security Controls,
    Security Check,
    Security Checks,
  ]
---

![[security-gate.png]]

A [[Information Security|Security]] control as a step in the [[DevOps Pipeline|Pipeline]] that prevents insecure [[Code]] and/or [[Image]]s to be used.

A pipeline can have different gates, in different stages, with different purposes. In the image above, for instance, we can see [[Static Code Analysis]] running on the dev machine but also in the [[Continous Integration|CI]] pipeline; and [[Interactive App Security Testing|IAST]] running only on CI
