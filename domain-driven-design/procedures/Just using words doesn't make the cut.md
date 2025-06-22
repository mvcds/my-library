#procedure in [[2 - Communication and the use of language]]

To really take advantage of the [[domain-driven-design/concepts/Ubiquitous Language|Ubiquitous Language]], it's not enough to use its [[Word|Words]]. We need to put them in [[Phrase|Phrases]] that explicitly describe [[Complex|relationships]] and interactions of the [[Domain Model|Model]].

Often we need to experiment with different ways to express the same concepts to arrive in something that [[Domain Expert|Domain Experts]] can also understand

| Phrase                                                                                                                                                         | Effect                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| If we give the **Routing Service** an origin, destination, and arrival time, it can look up the stops the cargo will have to make, and save it in the database | Very technical and domain-poor |
| We give the **Routing Service** all info it need to get back an **Itinerary** that we can save it in the database                                              | Complete but verbose           |
| A **Routing Service** finds an **Itinerary** that satisfies a **Route Specification**                                                                          | Concise                        |

#understanding of [[0 - Domain-Driven Design]]
