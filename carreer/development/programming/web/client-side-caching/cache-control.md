For [[Client-Side Caching]]

It accepts mixed [[my-library/carreer/development/Value|values]] for achieving different caching behaviours

```
Cache-Control:  max-age=3600,
				s-max-age=600,
				public,
				must-revalidate
```


- private: only cached on the client
- public: shared between [[Proxy|Proxies]]
- no-store: can't be cached anywhere
- no-cache: can be cached but must require validation
- (s-)max-age=seconds: sets the time to revalidate. `S` stands for "shared"
- must-revalidate: do not serve stale content, must validate it. Omitting it still allows clients to server it in case the [[Server]] is not available.
- proxy-revalidate: like `must-revalidate` but for proxies

# Strategies

There are some guidelines but no hard-rules. Here are some examples:

- Light caching ([[HyperText Markup Language|HTML]]): `private, no-cache`
- Aggressive caching ([[Cascading Style Sheet|CSS]], [[Javascript]], Images): `public, max-age=31556926`, combined with [[Fingerprinted File Name|Fingerprinted File Names]]