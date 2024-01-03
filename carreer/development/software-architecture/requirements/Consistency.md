---
aliases:
  - Inconsistency
---
The [[Cross-Functional Requirement|CFR]] that aims to make [[Data]] similar in multiple instances where it appears, for example, a [[User]] might see a piece of data that is stale compared to the [[Database]] - and depending on the system, we might want to update this as soon as possible ([[Real-Time]]), or when the user refreshes (here we have to worry if [[Cache|cached]] data will be problematic or not)

It defines [[CAP Consistency|CAP#Consistency]], so not to be confused with Not to be confused with [[ACID#Consistency]].