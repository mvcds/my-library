---
aliases: [RBAC]
---

An [[Access Control|Authorization Policy]] where [[User|Users]] are assigned [[Actors and Roles|Roles]], and roles are assigned permissions.

And even tho it's tempting to do checks based on roles, they, as the users, change as the [[Software|Application]] evolve, thus creating a problem on how granular a role has to be.

A better alternative is to check for the permission for a particular action instead.

Consider RBAC when:

- Permissions are relatively static
- Roles in your [[Policy and Details|Policy]] actually map reasonably to roles within your domain, rather than feeling like contrived aggregations of permissions
- There isn't a terribly large number of permutations of permission, and therefore roles that will have to be maintained
- You have no compelling reason to use one of the other options.
