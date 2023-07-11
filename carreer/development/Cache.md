Allows faster retrieval of [[Data]] for improve [[Latency]], [[Server Load]], [[ACID|Consistency]] and [[Network Bandwitch]] by "saving" the data "closer" to the [[User]]

They can happen in different places:
- In-memory
- On the [[network]] [^1]
- [[Browser]]

And with different strategies:

- Cache aside
- Read-Through
- Write-Through
- Write-Around
- Write-back / Write-Behind
- Push-based invalidation
- Polling-based invalidation

[^1]: Think [[Content Delivery Network|CDN]]