http://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/doc_kay_oop_en

> [[Object-Oriented Programming|OOP]] to me means only messaging, local retention and protection and hiding of [[state]]-[[process#Noun|process]], and extreme late-binding of all things. It can be done in [[Smalltalk]] and in [[Lisp]]. There are possibly other [[system]]s in which this is possible, but I'm not aware of them.

#quote by [[Alan Kay]]

---

The original conception of it had the following parts.

- I thought of objects being like biological cells and/or individual [[Computer]]s on a [[Network]], only able to communicate with [[Message]]s (so messaging came at the very beginning -- it took a while to see how to do messaging in a [[Programming Language]] efficiently enough to be useful).
- I wanted to get rid of [[data]]. The B5000 almost did this via its almost unbelievable HW architecture. I realized that the cell/whole-[[Computer]] metaphor would get rid of [[data]], and that "<-" would be just another [[Message]] token (it took me quite a while to think this out because I really thought of all these symbols as names for [[Function]]s and procedures.
- My [[Maths]] background made me realize that each [[Object]] could have several [[Algebra]]s associated with it, and there could be families of these, and that these would be very very useful. The term "[[Polymorphism]]" was imposed much later (I think by Peter Wegner) and it isn't quite valid, since it really comes from the nomenclature of [[Function]]s, and I wanted quite a bit more than [[Function]]s. I made up a term "genericity" for dealing with [[Generic]] behaviors in a quasi-algebraic form.
- I didn't like the way Simula I or Simula 67 did [[Inhiritance]] (though I thought Nygaard and Dahl were just tremendous thinkers and designers). So I decided to leave out [[Inhiritance]] as a built-in feature until I understood it better.
