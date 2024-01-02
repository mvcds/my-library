---
aliases: [Sessions, Session Management]
---

It ties [[Authorization]] and [[Authentication]] together, making it possible to relate requests made by a particular [[User]].  Without session management, they would have to authenticate during each request they sent to a [[World Wide Web|Web]] [[Software|Application]]

---

Sessions are typically created by setting a session identifier inside a [[Cookie]] that will be sent by a user’s [[Browser]] in subsequent requests.

---

They also need [[4 - Hashing & Salting]], plus some expiration date that should be as short as reasonable. They are also one of the reasons why [[Hypertext Transfer Protocol Secure|HTTPS]] is so impiortant