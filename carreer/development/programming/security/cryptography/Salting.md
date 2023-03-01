---
aliases: [Salt, Salts]
---

Some extra [[data]] that is added to a password before it is [[Hashing|Hashed]] so that two instances of a given password do not have the same hash [[value]]

The real benefit here is that it increases the range of possible hashes of a given password beyond the point where it is practical to pre-compute them by making them [[Determinism|Nondeterministic]]

The salt doesn't require any special protection like [[Encryption]] or [[obfuscation]].

---

A salt should be globally unique per user.  [[Open Web Application Security Project|OWASP]] recommends 32 or 64-bit salt if you can manage it, and [[National Institute of Standards and Technology|NIST]] requires 128-bit at a minimum. A [[UUID]] will certainly work and although probably overkill, it's generally easy to generate, if costly to store.