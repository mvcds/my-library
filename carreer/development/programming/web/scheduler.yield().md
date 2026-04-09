#concept 

A [[carreer/development/programming/web/broswers/Browser|Browser]] [[Javascript]] [[Application Programming Interface|API]] that returns a `Promise` resolved in a future [[carreer/development/programming/Process|task]], allowing [[carreer/development/programming/web/web-vitals/Long Task|Long Tasks]] to be broken up so the main thread stays responsive.

```js
async function saveSettings() {
  validateForm();
  showSpinner();

  await scheduler.yield(); // yields control back to the browser

  saveToDatabase();
}
```

Unlike `setTimeout`, it offers **prioritized continuations** so the code after `yield` runs before unrelated queued tasks, preserving execution order even when third-party scripts are present.

> Always `await` the call; `Array.forEach` won't work because it doesn't wait for promises between iterations.
