An [[carreer/development/programming/Abstraction|Abstraction]] which defines a logical set of [[Kubernet Pod|pods]] and a [[Policy and Details|policy]] by which to access them. They allow `pods` to die and replicate in [[Kubernets]] without impacting your application.

The set of `Pods` targeted by a `Service` is usually determined by a `LabelSelector`.

[[Kubernet Label|labels]] are the answer to how `Services` and `Pods` are able to communicate. This is what we mean by loose coupling. By applying labels like for example frontend, backend, release and so on to `Pods`, we are able to refer to `Pods` by their logical name rather than their specifics, i.e IP number.

# Types

- ClusterIP (default) - Exposes the Service on an internal IP in the [[Kubernet Cluster|cluster]]. This type makes the Service only reachable from within the cluster.
- NodePort - Exposes the Service on the same port of each selected Node in the cluster using NAT. Makes a Service accessible from outside the cluster using :. Superset of ClusterIP.
- LoadBalancer - Creates an external [[carreer/development/computer-network/Load Balancer|Load Balancer]] in the current [[Cloud Computing Service|Cloud]] (if supported) and assigns a fixed, external IP to the Service. Superset of NodePort.
- ExternalName - Exposes the Service using an arbitrary name (specified by externalName in the spec) by returning a CNAME record with the name. No [[proxy]] is used. This type requires v1.7 or higher of kube-dns.
