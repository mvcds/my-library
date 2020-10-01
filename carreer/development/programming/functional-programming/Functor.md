An [[Abstractio|abstract]] [[data type]] that we can [[map]] over. More specifically it maps from [[category]] to category, including to the same one, known as,  [[endofunctor]].

The term “functor” comes from [[category theory]]. In category theory, a functor is a mapping between categories. Loosely, a category is a group of things, where each “thing” can be any value.

# Properties

- **[[Identity]]**:  `list.map(x => x)` should produce a deep equal [[array]]
- **[[Composition]]**: when you’re composing multiple [[Function]]s ([[morphism]]s if you’re feeling fancy), you don’t need parenthesis `(a * b) * c === a * (b * c)`

---

[[Functional Programming]]