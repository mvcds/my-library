---
aliases: [Data Training, Data Validation]
---

![[data-division.png]]

We divide our [[dataset]] into 70-80% training (where we apply the [[Backpropagation (of errors)|Backpropagation]]), 20-10% validation (where we check for [[Overfitting and underfitting|overfitting]]) and 10-10% test (measures the final predictive power) - the percentages are normal practices

---

If the validation [[Loss Function|loss]] is increasing instead of decreasing ([[Optimization function|gradient descent]]), our [[model]] is overfitting

Validations happen in the end of the [[epoch]]
