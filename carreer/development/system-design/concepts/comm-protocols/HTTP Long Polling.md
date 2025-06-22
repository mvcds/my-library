---
aliases: [Long Polling, Polling, HTTP Polling]
---

#concept in [[4 - Chat and Streaming Protocols]]

Similar to the [[HTTP Short Polling|Short Polling]] but the [[server]] holds the request open until new [[data]] is available. This approach reduces the number of requests and [[server load]], but it may still suffer from [[Latency]] issues and requires careful management of server [[Asset|Resources]].
