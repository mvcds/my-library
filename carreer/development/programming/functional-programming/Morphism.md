The formal name for the transformation process conducted by [[Transformer]]s

# Types

- Endomorphism: a transformation that satisfies the criteria: input and output of the transformer must be from the same category. `const add1 = val => val + 1;`
- Isomorphism: a pair of transformations between two categories with no [[data]] loss `const objToArray = ({ a }) => [a];﻿` and `const arrayToObj = ([a]) => ({a});`
- Homomorphism: a structure preserving transformation. We always stay in the same category. e.g. [[Functor|mapping]]