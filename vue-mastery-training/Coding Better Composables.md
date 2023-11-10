1. When doing multiple arguments, place the required ones first, then the optionals (which most likely should be objects)
	1. It seems the opposite from "fixed" arguments from [[Functional Programming]]
2. Using objects as arguments allows us to destruct, and define defaults
3. (Vue 3) `useRefHistory` allows `undo`out of the box
4. `ref(input)` where `input` is already a `ref` just unbox it to have a single `ref`, similarly to `unref` for primitive values which accepts non-refs as input without thrown error
	1. It is a design choice of not throwing error
5. Using an argument for option can be used to control the type of the return
	1. I don't like this because it goes again code [[Cardinality]]
6. Design the "interface" first
	1. Think how it should be used, not how to the implementation looks like
	2. Which arguments does it take?
	   Which options will it take (if any)?
	   What does it return?
	3. Good pair with [[Test-Driven Design|TDD]] 
7. Promises can be wrapped in composibles to not interfere with rendering

```typescript
export function useAsyncState(promise, initialState) { 
	const state = ref(initialState);
	const isReady = ref(false);
	const isLoading = ref(false);
	const error = ref(undefined);
	
	async function execute() { 
		error.value = undefined; 
		isReady.value = false; 
		isLoading.value = true; 
		
		try {
			state.value = await promise;
			isReady.value = true;
		} catch (e) { 
			error.value = e; 
		}
		
		isLoading.value = false; 
	} 
	
	execute();
	 
	return { state, isReady, isLoading, error };
}
```
