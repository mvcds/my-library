There are four attributes that are important to understand for this purpose: [[Domain Name System|Domain]], _Path_, _HttpOnly_, and _Secure_.

- _Domain_ restricts the scope of a [[cookie]] to a particular domain and its subdomains, and _Path_ further restricts the scope to a path and its subpaths. Both attributes are set to fairly restrictive values by default when not explicitly set.
- The _Secure_ flag indicates that the browser should only send the cookie when using [[Hypertext Transfer Protocol Secure|HTTPS]]
- The _HttpOnly_ flag instructs the browser that the cookie should not be accessible through JavaScript or other client side scripts, which helps prevent it being stolen by malicious code

Putting it together, our cookie might look like this:

```
Set-Cookie: sessionId=[top secret value]; path=/secret/; secure; HttpOnly;
  domain=not-evil.domain.com
  ```
  
#understanding of [[0 - Web Security Basics]]