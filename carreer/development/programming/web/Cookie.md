---
aliases: [Cookies]
---

A key-pair text file to stora [[Data]] in the [[Browser]].

Such data is what allows you to login in a site, close it and come back already logged in, which is nice, but can also exploit your [[Privacy]] if not configured correctly.

This is only on [[Client]] side and sent for [[request|requests]] on the same [[Domain Name System|Domain]]

# Configuration

- Secure Flag: only allows cookies in [[Hypertext Transfer Protocol Secure|HTTPS]]
- HTTP only flag: disallow [[Javascript]] to interact with cookies
- Same site flag: caution degree with different sites, prevents [[cross-site request forgery|CSRF]]
