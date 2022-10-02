---
aliases: [M2M Auth, M2M, M2M Authentication, M2M Authorization, M2M User, M2M Users]
---

When the [[User]] of an [[Software|Application]] is not human but it still needs to [[Authentication|authenticate]] into our applications, we should provide an alternative flow for [[Security Token|Token]] exchange.

A M2M user should go through similar [[Authorization]] processes of human users, that is, they should only user [[Asset|Resources]] it has access to.

---

A way of doing M2M is treating this kind of user as an "app" which has an [[carreer/development/programming/security/identity/Identity|App ID]] associated to it. This "app" might relate to a "user" table