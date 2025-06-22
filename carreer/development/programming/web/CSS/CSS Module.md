A CSS Module is a [[Cascading Style Sheet|CSS]] file in which all class names and animation names are scoped locally by default

CSS Modules compile to [[Interoperable CSS]], thought they are written in normal CSS

```js
import styles from './style.css'

element.innerHTML = '<div class="' + styles.className + '">'
```

`:global` switches to global scope for the current selector respective identifier and ` :local` switches back to local scope. Both accept arguments between parenthesis

# Composition

It's possible to compose multiple selectors by using `compose`, if this is the first rule of it

```icss
.className {
  color: green;
  background: red;
}

.otherClassName {
  composes: className;
  color: yellow;
}
```

When composing from files, there's no guarantee about the order.

It's also possible to compose from global.

And no circular dependency is allowed.

# Webpack

Webpack's css-loader in module mode replaces every local-scoped identifier with a global unique name (hashed from module name and local identifier by default) and exports the used identifier.
