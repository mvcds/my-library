Monads are generic datatypes respecting a certain [[interface]] that encodes a given degree of “expressive power” of this datatype. There are many definitions of this interface, and they are all equivalent. The crucial aspect of a monad is that it can be:

* created
* transformed
* flattened

The monad must be transformable, meaning that if we have an instance of a monad and a function that can process its input, then we want be able to transform the content of the monad and directly re-encapsulate it inside a new instance of a new monad. This is commonly known as **map**.

The last point that distinguishes monads from other, simpler generic data types is that monads can be **joined** (also called “flattened” or “concatenated”). This means that an instance of a monad with another instance of the same monad inside itself can be converted to a single instance of the monad, thereby removing a containment level. This is a big deal, since it means that the monad is powerful enough to represent itself multiple [[time]]s at once.