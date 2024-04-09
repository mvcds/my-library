---
aliases: [Reducers]
---

A [[Function]] that transform multiple inputs into a single input that not necessarily is a single [[my-library/carreer/development/Value|Value]].

```js
const reducer = (total, item) => item % 3 ? total + item : total

[1, 2, 3, 5, 8, 13, 21].reduce(reducer, 0)
```

A good practice is to return a valid initial (empty) value for the reduction when the reducer is called with no arguments.