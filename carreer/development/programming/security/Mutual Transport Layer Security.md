---
aliases: [Mutual TLS, MTLS]
---

An "evolution" of [[Transport Layer Security|TLS]] where both parties exchange their own [[Digital Certificate]].

The certificates are emitted before the secure channel is created.

---

MTLS is nice to be used with [[Microservice Architecture|Microservice]] because hackers can't breach the communication easily (as each service has its own certs)
