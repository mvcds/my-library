---
aliases: [K8S]
---

A tool to orchestrate containers

# Commands

- Run it with `kubectl`
- `kubectl get nodes` : Tells us which [[Kubernet Node|nodes]] we have available to do work
- `kubectl run kubernetes-first-app --image=gcr.io/google-samples/kubernetes-bootcamp:v1 --port=8080`: puts our app [[Kubernet Cluster]] by invoking the run command, K8s performed a few things behind the scenes, it:
  - searched for a suitable `node` where an instance of the application could be run, if there is only one, that is naturally chosen
  - scheduled the application to run on that `Node`
  - configured the `cluster` to reschedule the instance on a new `Node` when needed
- `kubectl get deployments`
- `kubectl proxy`[^1]: Expose the `kubectl` as an [[Application Programming Interface|API]] that we can query with HTTP request. The [[Application Programming Interface|API]] Server inside of Kubernetes creates an endpoint for each [[Kubernet Pod|pod]] by its name
- `kubectl get pods`: list all the pods you have
- `kubectl logs`
- `kubectl exec`: This command executes an action on the `pod`. To enter a `pod`, use the following command: `kubectl exec -ti $POD_NAME bash` (pretty similar to [[Docker]])

[^1]: [[Proxy]]
