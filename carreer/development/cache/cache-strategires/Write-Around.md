A [[Cache Strategy]] that consists in bypassing the [[Cache]] to write on the [[data source]] first, and then on the cache

# Tradeoffs
Good
- Reduces the risk of cache pollution with [[Data]] that is not as frequently accessses
- Faster write operations

Cons
- Bypasses the cache, resulting in [[Cache Miss|Cache Misses]]
- Increases read [[Latency]] for recent data that is not on the cache yet