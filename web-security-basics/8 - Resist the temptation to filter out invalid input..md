---
aliases: [Sanitization]
---

> Resist the temptation to filter out invalid input

This practice is a [[Negative Validation]] that removes undesirable input **rather than rejecting it**. It is hard to get right and provides the attacker with more opportunities to evade it. For example, imagine, in if you choose to filter out `<script>` tags. An attacker could bypass it with something as simple as `<scr<script>ipt>`

Even though you caught the [[Attack Tree|attack]], by fixing it, you just reintroduced the vulnerability.

#quote on [[0 - Web Security Basics]] about [[6 - Input Validation]]