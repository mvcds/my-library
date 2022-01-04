---
aliases: [etc/host]
---

It allows us to configure [[Loopback Address|Loopback Addresses]] by relating an [[IP Address]] to a machine name and its aliases (separated by space).

```c
158.42.2.1       pleione pleione.cc.upv.es pleione.upv.es
```

---

One of the uses of this file is to extend the  [[localhost]]

```c
127.0.0.1	localhost local.site.pt local.site.es
255.255.255.255	broadcasthost
::1             localhost
```

And another is bypassing [[Domain Name System|DNS]] checking because you are sure that that IP will always relate to that machine name.