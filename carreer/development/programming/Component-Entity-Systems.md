https://www.gamedev.net/articles/programming/general-and-gameplay-programming/understanding-component-entity-systems-r3013/

Tackles the problem with hierarchy in [[OOP]] where we end-up with very rigid [[class]] structures by [[Abstraction|abstracting]] [[data]] and logic to different parts of the system

**Probably, Unity is made like this**

# Parts

- Component: only holds data, has no [[Function|methods]] associated with it
- [[Entity]]: usually, just an id, to which components are attached. Components can be aggregated and dissociated at run time, affecting indirectly how an entity behaves
- System: the logic appplied over related components aggregated on the same entity