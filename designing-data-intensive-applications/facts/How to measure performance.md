#fact and #procedure in [[1 - Reliable, scalable, and maintainable applications]]

[[Performance]] can be measured in terms of:
- increasing load parameters but using the same [[Asset|Resource]]
- or in terms of knowing how many more resources are needed to keep it while [[Scalability|scaling]]

Taking the [[average]] of performing the same [[request]] is not a good [[carreer/development/data-science/Metric|Metric]] because they have different [[Latency]]. [[Percentile]] is better for this, as [[Amazon Performance Percentiles|Amazon]] does, and that's why a lot of [[Service Level]] are measured in percentiles