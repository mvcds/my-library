Datadog is a [[Logging, Monitoring and Tracing|Monitoring]] [[Server|Service]] for cloud-scale [[Software|Applications]], providing monitoring of servers, [[Database|Databases]], tools, and [[Service]], through a SaaS-based data analytics platform

---

Its price schema is by [[carreer/development/data-science/Metric|metric]] + [[data]] points

---

# 101

## Logs, metrics and traces

First it’s useful to understand the main categories of data managed in Datadog.

For a more comprehensive explanation and comparison, I can recommend this chapter: [The Three Pillars of Observability](https://learning.oreilly.com/library/view/distributed-systems-observability/9781492033431/ch04.html "https://learning.oreilly.com/library/view/distributed-systems-observability/9781492033431/ch04.html").

### Metrics

-   Metrics focus on tendencies or statistics
    
-   Examples are: # of hits or errors, # of orders created, latency, CPU
    
-   Useful for profiling, monitoring and alerting
    
-   Metrics don't significantly increase overhead with volume
    
-   Metrics are billed by the number of distinct metrics / permutations of tag values
    
-   Metrics show whether there is a problem or where the problem happens, usually not the root cause
    

### Logs

-   Logs focus on one specific event
    
-   Logs contain as much information as possible
    
-   Useful for root cause analysis
    

_Compared to metrics, ..._

-   logs require more storage than metrics
    
-   logs are more difficult to process
    
-   logs are billed by the number of log events
    

### Traces

-   Traces show a single request
    
-   Can be understood as causally related logs (called spans) connected by a unique id (trace id)
    
-   Useful for identifying bottlenecks or improving performance
    
-   Requires more complex instrumentation
    
-   Less straight-forward than metrics or log
    

_Compared to logs and metrics..._

-   traces can span system boundaries
    
-   traces are usually heavily sampled
    
### APM and Traces

See hits, errors, latency and investigate performance bottlenecks. Also a good starting point for troubleshooting.

### Monitors

Get alerted when something happens.

We can set them as [[Infrastructure as Code|code]].
    

### Dashboards

Visualize logs and metrics for a specific use case (on-call, debugging, trends).

### [[Service Level Objective|Service Level Objectives]]

Keep track of availability over a period of time.