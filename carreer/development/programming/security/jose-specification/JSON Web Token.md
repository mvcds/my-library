---
aliases: [JWT, Jot]
---

A [[Reference vs Structured Tokens|structured token]] defined with [[Javascript Object Notation|JSON]] as a standard for managing [[carreer/development/programming/security/Session|Sessions]]

![[json-web-token.png]]

# Types

- Signed Payload: A "univesal" token because the payload is public, allowing other [[Architectural Service|Services]] and/or providers to read it. [[Trust]] comes from the signature which is issued by the issuing service using a [[Private Key]]
- Encrypted Payload: Only readable by the serves that share the key, allowing a decentralised session that enables "storing" small [[Data]] to the token without [[Database]] or [[User]] visibility
