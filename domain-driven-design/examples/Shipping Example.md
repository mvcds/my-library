As an illustration on how to [[Make knowledge explicit for everybody]], the author presents an example where he had to [[model]] a shipping [[system]].

Those systems usually allow more bookings than capacity because cargo is not always shipped in the voyage it was supposed to be.

His first interaction was a diagram with two interlinked [[Entity|Entities]], that evolved to the following piece of code:

```js
void makeBooking(cargo, voyage) {
	const overbooking = voyage.capacity * 1.1;
	if ((voyage.booking + cargo.size) > overbooking)
		return false;
	voyage.addCargo(cargo);
	return true;
}
```

Having only two boxes made harder for the experts to "see", and therefore talk about the overbooking.

Then, he changed the diagram, so to include a box between the entities, to represent overbooking as a [[Policy|policy]] 

```js
void makeBooking(cargo, voyage) {
	//The magic number is pushed to where it makes sense
	if (overbookingPolicy.isAllowed(cargo, voyage)) {
		voyage.addCargo(cargo);
	}

	return voyage.hasCargo(cargo);
}
```

#example at [[1 - Crunching Knowledge]]