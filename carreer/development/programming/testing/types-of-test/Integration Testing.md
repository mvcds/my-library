---
aliases:
  - Integration Test
  - Integration Tests
---
An intermediary step between [[Unit Testing|Unit Tests]] and [[End-to-end testing|End-to-end Tests]], where multiple components are [[Testing|Tested]] at once, making sure that their workflow works but avoiding expensive[^1] [[Asset|Resource]] usage like access to [[Database]]

[^1]: In time and/or money. This includes anything that would cause [[Determinism|Nondeterministic]] behaviour which would cause the test to start failing out of the blue, some times or due to third-parties
