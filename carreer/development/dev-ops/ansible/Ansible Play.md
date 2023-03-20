---
aliases: [Play, Plays]
---

The basic unit of [[Ansible]] execution and its main [[context]], this playbook object maps [[Ansible Managed Node|Managed Nodes]] to [[Ansible Task|Task]]. The Play contains [[carreer/development/Variable|Variables]], [[Ansible Role|Role]] and an ordered lists of tasks and can be run repeatedly. It basically consists of an implicit loop over the mapped nodes and tasks and defines how to iterate over them.