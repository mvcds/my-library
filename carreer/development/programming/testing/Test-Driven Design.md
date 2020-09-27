A.K.A. TDD

A practice that advocates that if you write your [[Test]] before its [[Code]], it will lead to better [[Interface]]s - presumably because you force yourself to only extending it in a way that makes sense for the case in questions, making you comply to [[ISP]] while [[Eat your own Dog food|eating your own dog food]].

# Steps
1. You write a [[Test]] that will fail (because there's no implementation)
2. You create (or change) the implementation to make all existing tests green simultaneously 
3. You can choose between
	- Add a new scenario (go back to step 1)
	- Refactor (having tests allow you to more freely changing implementation as you have a [[Feedback Loop]] to keep you in the correct track)
	- Stop working (no more [[Tests]] can/should be added)
