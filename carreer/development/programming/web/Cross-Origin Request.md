---
aliases: [CORS]
---

A [[browser]] [[security]] [[feature]] configured on the [[server]] so that only trustworthy origins (protocol, host and port) can request a resource

To setup CORS in production you should add appropriate listener for OPTIONS request. That listener should send response 200 with no body but with Headers that will define your wanted CORS policy:

```
Access-Control-Allow-Origin: https://domain-b.com
Access-Control-Allow-Methods: GET
```

https://enable-cors.org/index.html