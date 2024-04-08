Types of [[Coupling]], from best to worse:

1. Indirect (No direct)
2. [[Data]]: one [[Modularity|Module]] passes native data to another
3. Stamp: when two modules share some [[Data Structure]]
4. Control: when the shared data structure from one module executes a control flow on the other module
5. External: when two modules share data structure imposed by a 3rs-party such as an external tool's [[Interface]]
6. Common: both modules have access to a global [[Record]]
7. Content: two modules share [[code]]