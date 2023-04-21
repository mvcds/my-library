There are at least 3 ways to make [[7 - Association|associations]] more tractable, in order to make them more easy to communicate and implement, normally highlighting trully natural bidirectional associations

1. Imposing a transversal direction
2. Adding a qualifier, effectivelly reducing multiplicity
3. Eliminatig nonessential associations

In the example below, we see how to make a N:N relationship become 1:N by first adding a direction[^1], then adding a qualifier

![[9 - Making associations.png]]

[^1]: Here the direction indicates that the "natural" association is that a country has a president, not a person is a president, that is, it's more natural ask "which country was Frederich Hansdelik president of?" and be correctly answered with a "Fantasyland" than "which (singular) president was from Fantasyland?" and be correctly answered "Frederich Hansdelik" - people would rather ask you which period, or give you a list of all presidents of this ficticious land

#understanding of [[0 - Domain-Driven Design]]