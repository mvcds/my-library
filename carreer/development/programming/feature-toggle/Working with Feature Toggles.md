Except when the change is too small (like small ui fix), [[Feature Toggle]] should be embed since the beginning of any [[story]], as default so they become part of the [[Process]].

To prevent us to keep them forever in [[Code]] we can create a [[budget]] to [[manage]] how many of them can exist in a given [[environment]]. 

Alternatively, we can create a signal (like a column, if you're doing some flavors of [[Agile]]) to show that the work is not actually [[Definition of Done|done]] - and removing the toggle from [[[[Code]]]] is that extra step that pushes it towards completion (this can be combined with [[wip limit]])

As toggles change how the [[Software]] behaves, it's a good idea to create one for each story, even when they are similar e.g. sort by date and sort by complexity, this way finishing one story does not interfere with the other, allowing us to practice [[Continous Deployment]].

---

It's a good idea to link [[metric]]s with them so we can understand which branch is more successful for us