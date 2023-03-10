> The [[Client]] should never pass [[Authorization]] [[Information]] to the [[server]]. 
> Rather the client should only be allowed to pass temporary identity information, such as [[carreer/development/programming/security/Session|session]] ids, that have been previously generated on the server, and are unguessable. 
> Again, the server should **not** [[Trust Domain|Trust]] anything from the client as far as identity, permissions, or roles, that it cannot explicitly validate.

#quote on [[0 - Web Security Basics]]