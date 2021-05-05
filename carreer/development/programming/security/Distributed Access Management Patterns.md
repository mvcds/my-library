The [[Identity & Access Manager Service|IAM Service]] is a component on its own, the issue is how to make other services in our [[Microservice Architecture]] to be able to trust the [[Security Token|Tokens]] it has issued for a [[Client]].

For treating this the [[Model]] of what consists on a secure [[Authentication]] has changed over [[time]].

On the following image, for instance, if each service verifies the token with the same IAM, there's a bottle neck and possibly a "designed" [[DDOS]]

![[damp-1.png]]

Of course, a [[Reverse Proxy]] can sit on front of your architecture and then each service just shares it around without verifying anything, an act which violates the [[Zero Trust Security Architecture]] because if one service is breached, all others which it contacts will become insecure.

![[damp-2.png]]

To prevent this, each service should be responsible for its own [[Security Token Lifecycle|token verification]].

![[damp-3.png]]