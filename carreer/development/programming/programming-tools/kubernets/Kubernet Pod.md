The smallest deployable unit and consists of one or many containers, for example, [[Container|docker containers]]

`Pods` runs in a private isolated network that, although visible from other `Pods` and services, it cannot be accessed outside the network. Which means we can't reach our app with say a `curl` command.

---

Containers within a `pod` share some resources

---

`Pods` have a lifecycle.

---

Each `Pod` in a [[Kubernet Cluster]] has a unique IP address, even `Pods` on the same [[Kubernet Node|node]], but as `Pods` can die, it's not recommended to access them directly through IP.
