A [[Testing]] technique where we pretend to return a valid implementation so to not have to bother about implementation details, allowing devs to move faster as a [[Team]]

| **Advantages**                             | **Description**                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Reduces [[uncertainty]]                    | Allows development to continue even without a complete solution from the start.           |
| Enables incremental approach               | Supports building [[Functionality]] gradually and improving it iteratively.               |
| Speeds up the [[Feedback\|Feedback Cycle]] | Provides quick feedback on tests, ensuring development is heading in the right direction. |

| **Disadvantages**           | **Description**                                                                   |
| --------------------------- | --------------------------------------------------------------------------------- |
| Risk of complacency         | If the implementation isn't refined, it can lead to incomplete or incorrect code. |
| [[Time\|Temporay]] [[Code]] | The initial implementation is temporary and must be replaced.                     |

```javascript
//Test
test("Get the user's full name", () => {
	const result = getFullName('John', 'Doe')
	expect(result).toBe('John Doe');
})

//Fake implementation
function getFullName(firstName, lastName) {  
	return 'John Doe'; // Fake implementation  
}
	```