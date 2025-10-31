---
aliases:
  - Patch
  - Patches
  - Git Patch
  - Git Patches
  - Patching Git
---
#concept  #procedure 

A file containing the changes that have been/will be applied during a [[Git Commit|Commit]]

We can patch manually 

1. `git format-patch COMPARATIVE_BRANCH --stdout > patch`
2. `git apply --stat patch`

or

1. `git format-patch SHA~..SHA`
2. `git apply patch`

- `git apply patch --reject` will apply as much as possible, passing errors to .reject files
- `git apply --reverse --check patch` will reverse and allow you to select what to revert