A mixin is an [[carreer/development/programming/Abstraction|abstract]] subclass; i.e. a subclass definition that may be applied to different superclasses to create a related family of modified classes.

- mixin definition: The definition of a [[Class]] that may be applied to different superclasses.
- mixin application: The application of a mixin definition to a specific superclass, producing a new subclass.

The mixin definition is really a subclass factory, parameterized by the superclass, which produces mixin applications. A mixin application sits in the [[Inheritance]] hierarchy between the subclass and superclass.

The real, and only, difference between a mixin and normal subclass is that a normal subclass has a fixed superclass, while a mixin definition doesn't yet have a superclass. 

http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/

---

They work as a form of [[Decorator Pattern]]