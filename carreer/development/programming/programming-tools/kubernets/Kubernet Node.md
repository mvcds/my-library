---
aliases: [Minion] # historically
---

In [[Kubernets]] is a worker machine and may be either a virtual or a physical machine, depending on the [[Kubernet Cluster|cluster]]

Each `Node` is managed by the `Master`. A `Node` can have multiple [[Kubernet Pod|pods]].

When a worker node dies, the `Pods` running on the `Node` are also lost.

# Every Kubernets Node runs at least a

- \*Kubelet\*\*, is responsible for the pod spec and talks to the CLI [[Interface]]
- **Kube [[proxy]]**, is the main [[Interface]] for coms between nodes
- **A container [[runtime]]**, (like [[Docker]], rkt) responsible for pulling the container image from a registry, unpacking the container, and running the application.
- **One or many `pods`**
