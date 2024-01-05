#concept about [[Replication Techniques]] in [[Technical Concepts for system design interviews]]

![[consistent-hashing.png]]

Effectively distribute keys in any distributed [[Computer data storage|Storage System]] to a larger number of [[node|nodes]] while allowing adding or removing nodes without a large [[Performance]] hit

It avoid moving keys during remappings

1. Plot the node's [[hash]] on a ring
2. Find next node by rotating clock-wise
3. When a node goes down, use the next one instead
4. To avoid overload (which might kill nodes), assign virtual nodes in [[randomness|random]] positions on the ring