---
aliases: [Short Polling, Polling, HTTP Polling]
---

#concept in [[4 - Chat and Streaming Protocols]]

The [[Client]] repeatedly asks for the [[Server]] for updates

While simple to implement, short polling can result in high [[server load]] and increased [[latency]] due to constant polling, especially when updates are infrequent.