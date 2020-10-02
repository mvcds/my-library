Two events are concurrent if there is no order between them.

The real world is concurrent: it consists of activities that evolve independently

# shared-state concurrency

[[Thread]]s use [[Monitor]]s to manage concurrent state. Sometimes transactions are used to do [[ACID#Atomicity|atomic]] updates to the shared [[data]].

# [[Message]]-passing concurrency

Concurrent agents each running in a single thread that send each other [[Message]]s.

---

[[Concurrent Programming]] is much easier with declarative concurrent paradigm.

And much simpler if the nondeterminism were controlled in some way, so that it is not visible to the programmer[^1]

---

[[Nondeterminism]] is a natural part of concurrency since concurrent activities are independent, it is not possible to know which will be executed first (job for a [[scheduler]])

As we cannot get rid of it, we can write our [[Code]] in a way that separates areas that have to deal with [[Observable Nondeterminism]] and areas that not

[^1]: Check [[Observable Nondeterminism]]