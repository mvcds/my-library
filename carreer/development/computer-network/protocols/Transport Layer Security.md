---
aliases: [TLS]
---

It uses an [[Cryptography|encrypted]] channel to allow communication between machines.

The [[Client]] is the only piece responsible to check if it trusts the authority that emitted of the [[Digital Certificate]].

![[tls.png]]

The three components of TLS:

- **Encryption:** hides the [[data]] being transferred from third parties.
- **[[Authentication]]:** ensures that the parties exchanging [[information]] are who they [[Claim]] to be.
- **[[Integrity]]:** verifies that the data has not been forged or tampered with.