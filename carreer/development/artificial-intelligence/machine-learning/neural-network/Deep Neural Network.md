![[deep-neural-network.png]]

Having more than one [[Layer]], creates a Deep [[Neural Network]]

Properties

- [[Weight notation on neural network|Weight]]: how many nodes a layer has. This number might vary across layers in the same network but the biggest one dictates the one from the whole thing
- Depth: how many hidden layers the network has

Layers

- Input: the first layer, composed by the [[Data]] we have. Each node is used for a [[Machine Learning Feature|Feature]]
- Output: the last layer, composed by the results we want to obtain and compare to our targets
- Hidden: the intermediary layers (plural), composed by outputs of previous layers, influencing the output with is own change

---

The building blocks of hidden layers are called hidden units or hidden nodes

---

Adjusting width and depth will probably lead to better results but those are expensive [[Parameters vs Hyperparameters in Neural Networks|hyperparameters]]
