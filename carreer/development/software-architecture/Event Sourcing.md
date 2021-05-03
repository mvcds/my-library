An [[Event-Driven Architecture]] which stores the application [[state]] as a sequence of [[carreer/development/programming/Event]]s

It's possible to replay those events to understand how they have affected the [[System]] in a process that is also known as rehydration[^1]

# Benefits

- [[Durability]]
- [[Scalability]]
- [[Observability]]
- [[Auditability]]
- [[Persformance]]

# Downs

- Dealing with events that rely on external systems
- Changes on event structures
- Large amount of events take a lot of [[time]]

---

A good pair up with [[Command Query Responsibility Segregation]] and "natural fit" for [[Event Storming]]

[ˆ1]: Very similar to what a [[Version Control System|VCS]] allows us to do