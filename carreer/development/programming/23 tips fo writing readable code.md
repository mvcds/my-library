IDK the source

1. Identify that you have a problem before creating the solution
2. Pick the right tool for the job.
3. Simplicity is king.
4. Your [[Function]]s, classes, and components should have a well-defined purpose.
5. Naming is hard, but it's important.
6. Do not duplicate code.[^1]
7. Remove dead code, do not leave it commented.
8. Constant [[my-library/carreer/development/Value|Values]] should be in static constants or enums.
9. Prefer internal functions over custom solutions.
10. Use language specific guidelines.
11. Avoid creating multiple blocks of code nested in one another.
12. It’s not about the least number of lines.
13. Learn [[Design Pattern]] and when not to use them.
14. Split your classes to data holders and data manipulators.[^3]
15. Fix issues at their [[Root Cause|root]]
16. Hidden trap of [[carreer/development/programming/Abstraction|Abstraction]].
17. Rules of the world are not the rules of your [[Software|application]].
18. [[Type System|Type]] your variables if you can, even if you don’t have to.
19. Write tests.[^4]
20. Use [[static code analysis]] tools.
21. Human code reviews.
22. Comments.
23. Documentation.

[^1]: Check [[Don't repeat yourself|DRY Principle]]

[^3]: Resembles [[Command Query Responsibility Segregation|CQRS]]?

[^4]: My favorite way is [[Test-Driven Design|TDD]]
