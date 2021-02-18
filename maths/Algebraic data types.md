**Not the same as [[Algebraic structure]]!!!**

They’re composite  data types made out of other types. There are two main kinds of algebraic data types: Sum types and Product types. Together, they’re like a dynamic duo for encoding [[business]] logic. They help us make good things possible, and bad things impossible.

Sum types: you can know all of its possibilities by summing its valid values e.g. there are two booleans values, a limited number of Enum values, etc

They are used in [[Functional Programming]] to help in business logic, as all states are known. Some [[Programming Language]] can make pattern matching possible due to it i.e. you can have N valid states and 1 case of invalid states - similar to an [[Either]] algebraic structure.

Product types: you can know all of its possibilities by multiplying its valid values e.g. a [[class]] that takes in its constructors one BooleanTuple (4 values) and one NumbericDigit (10 values) will have 40 possible valid values.
