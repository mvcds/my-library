---
aliases: [HSTS]
---

A [[Browser]] [[Feature]] that replaces the [[Hypertext Transfer Protocol|HTTP]] protocol for [[Hypertext Transfer Protocol Secure|HTTPS]]. It also instructs the browser to disallow the [[user]] from bypassing the warning it displays if an invalid [[Digital Certificate|Certificate]] is encountered when loading the [[site]].

Enabling it is as simple as sending a header in a response:

`Strict-Transport-Security: max-age=15768000` 

In the example above, we've set it for six months specified in seconds.

Once HSTS is enabled, it cannot be disabled until the period specified in the header elapses.