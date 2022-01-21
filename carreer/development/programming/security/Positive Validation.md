---
aliases: [Whitelisting]
---

A  [[Data]] [[validation]] strategy that says validations are more effective for inputs that can be restricted to a small set. Numeric types can typically be restricted to values within a specific range. For example, it doesn’t make sense for a user to request to transfer a negative amount of money or to add several thousand items to their shopping cart.

It can restrict to a string of a specific form such as a URL or a date of the form “yyyy/mm/dd” or limit input length, a single acceptable character encoding, or, for the example above, only values that are available in your form.