https://sendgrid.com/blog/whats-webhook/

The easiest thing to do (and what you should implement before going any further) is to force [[Transport Layer Security|TLS]] connections (https). Once you’ve implemented that, you may go forward and further secure your connection:

Techniques

- The first, and most supported, way to secure a [[Webhook]] is to add tokens to the [[Uniform Resource Locator|URL]] that act as unique identification `?auth=TK`
- The next option is to implement basic auth, this is also widely supported, and very easy to do
- The first two solutions work great to prevent most attacks, however they have the disadvantage of sending the [[Authentication|auth]] [[Security Token|token]] with the request. The third option is to have the provider sign each request it makes to you and then verifying the signature. This has the disadvantage of requiring the provider to have implemented request signing—meaning if they don’t already, you’re probably out of luck.
