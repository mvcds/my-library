---
aliases: [CNN]
---

![[convolutional-neural-network.png]]

(From the convolutional layer forward, [[RGB]] is taken into account)

CNN's are used a lot in image recognition, they differ from [[Deep Neural Network]]s by 3 aspects:

- Color dimension: the input layer gets a "depth" to represent colors in a RGB schema
- Reduced problem: the input layer is given to the convolutional layer in overlapping chunks called "kernels" (a hyperparameter)
- Convolutional layer: a reduced version of the input layer in size (due to the kernels) but diffused in different color-dimensions
- Pooling layer: a reduced version of the convolutional layer were pixels are grouped without overlapping