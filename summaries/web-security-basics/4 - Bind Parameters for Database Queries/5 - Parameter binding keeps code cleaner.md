Tho [[4 - Security sometimes requires the programmer to add some complexity in order to protect the application]], using [[SQL Parameter Binding|Parameter Binding]] actually makes the code [[Clean Code|cleaner]].

They not only protect the [[code]] from [[SQL Injection]] but also make it the code more [[Legibility|legible]] by defining clear boundaries between code and content, and there are less [[String|quotation marks]] to manage by hand.

As we're binding those variables, we often have the opportunity to introduce generalised binding [[Function|Functions]]. This highlights another place where good design and good security overlap: de-duplication leads to additional [[testability]], and reduction of [[Complex|Complexity]].

#understanding of [[0 - Web Security Basics]]
