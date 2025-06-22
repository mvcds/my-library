---
aliases: [2PC]
---

A protocol that can be used in [[Distributed System|Distributed Computing]] and [[Database|Databases]] as a way to coordinate [[commit|commits]] to the system though a [[consensus]] mechanism.

Usually to achieve [[CAP Consistency|Consistency]] in the [[System]]

# Voting (Commit Request) Phase

- The coordinator sends a [[Message]] to the participants and waits for them to vote
- The participants execute the message up to the point where commit, but instead of just complete their own transaction they "vote" with"yes" or "no" based on their actions succeeding or not

# Completition (Commit) Phase

If all participants voted "yes"

- The coordinator sends a commit message to the participants
- Each participant commits, releasing the [[resource|resources]] it was holding, and the sends an acknowledge message to the coordinator
- The coordinator waits for all confirmations to complete the transaction

If there is at least one "no"

- The coordinator sends an abort message instead
- Each participant rollbacks their transactions, and release their resources, sending the acknowledge message to the coordinator
- The coordinator waits for all confirmations to rollback its own transaction
