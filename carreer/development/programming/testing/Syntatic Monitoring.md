---
aliases: [Semantic monitoring]
---

Active approaching to [[testing]] where we run a subset of the application's automated tests against live production on a regular base to simulate a user request for [[availability]], [[Performance]] & [[Functionality]] with a [[monitoring]] purpose. No [[Test Double]]s allowed.

This is done because it's hard to test in pre-prod when using [[Microservice Architecture|Microservices]], so [[QA in prod is acceptable]]

The test should have a parameter (or header in case it's an HTTP request) indicating that it should be suppressed from some activities - like user analytic [[behavior]] or 3rd party integration.

---

A subset of [[End-to-end testing]] plus [[Monitoring|Monitor]]
