#concept in [[Technical Concepts for system design interviews]]

When a leader [[node]] fails, promote another one to leader

1. Choose a node to promote
2. Reconfigure client nodes to write to the new leader
3. Other followers reconfigured to consume [[Data]] from the new leader
4. (When the old leader comes back): The old leader no longer receives writes, instead it just listens to the new leader

Triggering such behaviour requires pinging the health status and use the [[Response Time]] to determine failure

# Trick Cases

- Lost updates for async [[Replication]] when no leader was available
- The threshold for detecting failure. If the [[System]] is just overloaded, electing a new leader only stress it more
- Having potentially more than one leader
