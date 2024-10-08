Depending on the [[Categories of Feature Toggles]] and how long the [[Feature Toggle]] is [[carreer/development/design/Design|designed]] to live, you can hardcode it (so it becomes similar to [[Infrastructure as Code]]), injecting some variables from the [[Command Line Interface|CLI]], using [[environment variable]]s and/or reading from a file

Another important question is if you want the [[my-library/carreer/development/Value|values]] to be equal across [[environment]] ([[Determinism]]), and if it will be possible to override some values, like for [[Testing]], based on [[Toggle Context]], like a cookie only available for testers

---

Technical related toggles tend to live in the [[Code]], whereas other kinds might live in a very user-related layer - depending on your [[Information Security|Security]], [[Business]] concerns and [[carreer/development/design/Design|Design]]
