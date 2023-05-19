#procedure in [[0 - Domain-Driven Design]]

There are at least 3 ways to make [[Association|associations]] more tractable, in order to make them more easy to communicate and implement, normally highlighting truly natural bidirectional associations

1. Imposing a transversal direction, to show naturally of the association[^1] 
2. Adding a qualifier, effectively reducing multiplicity
3. Eliminating nonessential associations

In the example below, we see how to make a N:N relationship become 1:N by first adding a direction, then adding a qualifier

![[Making associations.png]]

[^1]: When looking at the model, it's more natural to ask in some directions than another e.g. "which country was George Washington president of?" (and correctly answer US) rather than "which person was US' president?" (and correctly answer George Washington)
