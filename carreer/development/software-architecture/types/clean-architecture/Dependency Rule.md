![[dependency-rule.png]]
 
 The most important part of [[Clean Architecture]]. It states that:

1. An external layer depends only on its immediate internal layer
2. All communication is done through [[Interface|Interfaces]] provided by the internal layer, mostly [[Transfer Object|DTOs]]

This can be achieved by the [[Dependency Inversion Principle]]