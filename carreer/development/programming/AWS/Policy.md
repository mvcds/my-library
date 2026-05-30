---
aliases:
  - IAM Policy
  - IAM Policies
  - Policies
---

A [[JSON]] document attached to a [[User]], [[carreer/development/programming/AWS/Group|Group]], [[Role]], or [[carreer/development/programming/AWS/Resource|Resource]] that defines what actions are allowed or denied in [[Amazon Web Services|AWS]].

Each policy is composed of one or more statements with

- **Effect**: `Allow` or `Deny`
- **Action**: which API operations the statement applies to
- **Resource**: which [[Amazon Resource Name|ARNs]] are affected
- **Condition**: optional [[predicate|predicates]] that gate the rule

It's how [[Identity and Access Management|IAM]] enforces [[Authorization]].
