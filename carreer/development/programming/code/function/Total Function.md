When a  [[Function]] checks the  [[Argument]] type and if it is not what it expects, it returns the [[Argument]] unharmed or its default.

```js
const upper = (str) => {
    if (typeof str === 'string') return str.toUpperCase()

    return str
}
```

---

A [[Pure Function]] which can handle any type