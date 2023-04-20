A way to control how different [[Microservice Architecture|Microservices]] of an application share [[data]] with one another.

Unlike other [[system]]s for managing this communication, a [[carreer/development/programming/Service|Service]] mesh is a dedicated infrastructure layer built right into an app. This visible infrastructure layer can document how well (or not) different parts of an app interact, so it becomes easier to optimize communication and avoid downtime as an app grows.

Normally a service mesh is built into an app as an array of network [[Proxy|Proxies]].

![[service-mesh-1.png|200x200]] => ![[service-mesh-2.png|200x200]]

(mesh in gray as a [[Sidecar]], services in blue)

---

The logic governing communication can be coded into each service without a service mesh layer—but as communication gets more [[complex]][^1], a service mesh becomes more valuable.

For cloud-native apps built in a microservices architecture, a service mesh is a way to comprise a large number of discrete services into a functional application.

[^1]: Check [[Cynefin Framework]]
