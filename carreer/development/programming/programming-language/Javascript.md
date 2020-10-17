A [[Weak Type System|weak]] and [[Dynamic Type Systemn|dynamic]] [[Programming Language]] 

It runs the [[Internet]]

# Quirks

* [[Null]] is an [[Object]]
* `NaN` is the only value which is never equal to itself
* Semi-column on JS may impact the result

```js
function aaa() {
    return
    {
        test: 1
    };
}
console.log(typeof aaa()); //'undefined', not '{ test: 1 }'
```

* JS may cast an object or [[function]] to a primitive string or number, when a primitive value is expected
	* `toString`
	* `valueOf`