In [[Domain-Driven Design]] factories allow developers to separate [[business]] logic from [[Object]] instatiation and/or reconstruction by enforcing [[Invariant in DDD|invariants]] into the process.

Though it's also possible to do so through constructors, it is not always convenient as instantiating is a single step.

Plus, factories allow you to name the states possible for your instatiation making documentation and testing easier

```C#
class UserFactory {
	constructor() { ... }
	
	void FreeUser() { ... }
	
	void PremiumUser() { ... }
	
	void DefaultyUser() { ... }
	
	void ExtremellyDefaultyUser() { ... }
	...
	User Build() { ... }
}
```

#complement with design patterns about factories