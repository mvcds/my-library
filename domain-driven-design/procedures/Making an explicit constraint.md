#procedure in [[2 - Making implicit concepts explicit]]

Firstly, this should be done when the [[Constraint]] is distracting the [[carreer/development/design/Design|Design]] of the host [[Domain Object|object]]

1. Does it require [[Data]] that does not fit the object otherwise?
2. Are there related/duplicated/[[Inheritance|inheritance]] rules?
3. [[carreer/development/programming/design-principles/domain-driven-design/Ubiquitous Language|Conversations]] revolve around constraint but these are hidden in [[Code]]

# Steps

1. Identify the rule that the [[Invariant]] reinforces
2. [[0 - Refactoring|Refactor]] the invariant to be in a separated [[Function|Method]]
3. Adapt code to use the new method

## Before

```typescript
bucket.pourIn = (volume: number) => {
  if (this.content + volume > this.capacity) {
    this.content = this.capacity
  } else {
    this.content += volume
  }
}
```

## After

```typescript
bucket.pourIn = (volume: number) => {
	const newVolume this.content + volume
	this.content = bucket.constrainToCapacity(newVolume)
}

bucket.constrainToCapacity  = (newVolume: number) => {
	return newVolume > this.capacity
		? capacity
		: newVolume
}
```
