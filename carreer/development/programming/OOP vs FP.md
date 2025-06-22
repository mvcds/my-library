In the debate [[Object-Oriented Programming]] vs [[Functional Programming]], one can say that OOP faces [[Programming]]as modeling, while in FP faces it as [[Maths]] i.e. you can prove that things work

Both are true to some extend but they are not only that.

---

OOP tends to be more human-friendly than FP, in the sense of that if someone throws a ball at you, you just catch it without having to crush down numbers.

This can be better understood comparing implementations:

```js
var x = 0
foreach(item in items) {
	x += item.value
}
```

Is way more intuitive than

```js
items.reduce((x, item) => x + item.value)
```
