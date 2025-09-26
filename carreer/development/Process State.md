---
aliases:
  - Process States
source: https://planetscale.com/blog/processes-and-threads
---
During the lifetime of a [[carreer/development/programming/Process|Process]], it can transition between a number of **process states**. These states are assigned by the [[Operational System]].

While a process is executing on the [[Centrral Processing Unit|CPU]], it is considered running. Processes can get kicked-off the CPU for one of two reasons: Its time slice is up, or it needs to wait for a disk or [[Network]] request to continue. In the former case, it moves to the ready state. In the latter case, it moves to the waiting state.

When the process is complete, it moves to the killed state. 

![[process-state.png]]