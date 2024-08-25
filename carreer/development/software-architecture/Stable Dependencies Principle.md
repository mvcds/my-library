---
aliases:
  - SDP
  - Instability
  - Stability
---
> Depend in the direction of stability

#quote by  [[Robert C. Martin]]


$$
Instability = \frac{dependencies}{dependents + dependencies}
$$

A [[Modularity|module]] with no dependencies and one or more dependents has a Instability of 0%; as stable as it can get. Conversely a module with no dependents, but with one or more dependencies is 100% instable.

Instability has a bit of an unusual connotation here - it's not "bad" to be an 100% instable module - it's just the nature of the module. A [[Command Line Interface|CLI]] or GUI component typically only depends on other modules and is 100% instable. This is not a bad thing.

Another way to look at Instability is how hard it is to change a module without consequences to other modules. Changing a 0% instable module will typically have consequences for all its dependents. Making changes to a 100% instable module will have consequences for itself only.
