An [[Event-Driven Architecture]] which stores the application [[state]] as a sequence of [[event]]s

It's possible to replay those events to understand how they have affected the system in a process that is also known as rehydration

# Benefits

- Durability
- Scalability
- [[Observability]]
- Auditable

# Downs

- Dealing with events that rely on external systems
- Changes on event structures
- Large amount of events take a lot of time
- 

---

A good pair up with [[Command Query Responsibility Segregation]] and "natural fit" for [[Event Storming]]