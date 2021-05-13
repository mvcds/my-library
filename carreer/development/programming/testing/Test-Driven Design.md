---
aliases: [TDD]
---

A practice that advocates that if you write your [[Testing|test]] before its [[Code|implementation]], it will lead to better [[Interface]]s - presumably because you force yourself to only extending it in a way that makes sense for the case in questions, making you comply to [[Interface Segregation Principle]] while you also [[Eat your own Dog food|eating your own dog food]] which would make you your first [[Application Programming Interface|API]]'s client.

# Steps

TDD is an iterative process, based on [[Baby Step]]s

1. You write a test that will [[success|fail]] (because there's no implementation yet)
2. You create (or change) the implementation to make all existing tests green simultaneously - in the first moment it will only one test, but over [[time]] you'll have many
3. You can choose between
   - Add a new scenario (go back to step 1)
   - Refactor (having tests allow you to more freely changing implementation as you have a [[Feedback Loop]] to keep you in the correct track)
   - Stop working (no more test can/should be added, for this session of work at least)

---

It's possible to create [[Container]]'s by using TDD too![^1]

[ˆ1]: https://www.thoughtworks.com/radar/techniques/tdd-ing-containers
