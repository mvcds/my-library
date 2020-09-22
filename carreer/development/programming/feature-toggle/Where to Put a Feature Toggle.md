Depending on the [[Categories of Feature Toggles]] and how long the [[Feature Toggle]] is [[Design|designed]] to live, you can hardcode it (so it becomes similar to [[Infrastructure as Code]]), injecting some variables from the [[CLI]], using [[environment variable]]s and/or reading from a file

Another important question is if you want the values to be equal across [[environment]] ([[Determinism]]), and if it will be possible to override some values, like for testing, based on [[Toggle Context]], like a cookie only available for testers

---

Technical related toggles tend to live in the code, whereas other kinds might live in a very user-related layer - depending on your [[Security]], [[Business]]concerns and [[Design]] 