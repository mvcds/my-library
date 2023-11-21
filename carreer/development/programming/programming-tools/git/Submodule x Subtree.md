---
alises:
  - Git Submodule
  - Git Subtree
link: https://stackoverflow.com/a/31770147/3178998
---

You should use a [[Submodule]] for [[Component-based programming|Component-based development]], where the parent project only keeps references (links) to the components it refers to when the submodule:

- is developed by someone else, is not under the administrative control of the superproject and follows a different [[Development Life Cycle]].
- contains [[code]] shared between superprojects (especially when the intention is to propagate bugfixes and new [[Feature|Features]] back to other superprojects).
- contains huge and/or many files that would hurt [[Performance]] of everyday git commands if left in the superproject

And a [[Subtree]] for [[System-based programming|System-based development]] - it copies the other repo's whole history, unifying their [[Development Life Cycle]] from their point on