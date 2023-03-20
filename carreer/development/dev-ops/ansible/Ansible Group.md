---
aliases: [Group, Groups]
---

Even if you do not define any groups in your [[Ansible Inventory|Inventory]] file, [[Ansible]] creates two default groups: `all` and `ungrouped`. The `all` group contains every host. The `ungrouped` group contains all hosts that don’t have another group aside from `all`. Every host will always belong to at least 2 groups (`all` and `ungrouped` or `all` and some other group)

---

You can create parent/child relationships among groups. Parent groups are also known as nested groups or groups of groups.

Child groups have a couple of properties to note:
-   Any host that is member of a child group is automatically a member of the parent group.
-   Groups can have multiple parents and children, but not circular relationships.
-   Hosts can also be in multiple groups, but there will only be **one** instance of a host at runtime. Ansible merges the data from the multiple groups.