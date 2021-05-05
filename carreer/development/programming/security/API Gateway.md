---
extends: [Reverse Proxy]
---

![[api-gateway.png]]

It's a common practice to use a [[Reverse Proxy|API Gateway]] as a way to increase [[Information Security|Security]] because having a single point of entry hides underlying servers.

It's in the gateway where [[Authentication]], [[Authorization]] and limiting access (to prevent attacks like [[DDOS]]) happens.

A gateway is also the place where you can do

- [[Tracing]]
- [[Performance]] [[monitoring]]
- [[Money|Monetization]]

It's also inside such gateway that we have developer portals i.e. a place that developers register applications which use the target [[Service]]

---

There's some overlapping with [[Identity & Access Manager Service|IAM Service]]