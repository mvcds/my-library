![[optimization-function.png]]

(the gradient desncent normally finds local minimum instead of global minimum, to correct for this a big learninig rate can be used, but this can move us away from the minimum, so a balance is necessary)

[[Algorithm|Algos]] that try to find the minimum [[Loss Function|loss]] or maximum [[success]] using [[Maths]].

It uses the [[Learning rate]] to vary the weights and biases

Types

- Gradient descent: the most commonly used optimization algo. Very slow. Applied when an [[epoch]] changes.
- Batch gradient descent: same as gradient descent, but gets updated for every amount of [[Data]] instead of epoch. Can be done in different CPUs (it runs in [[Parallelism|parallel]]). It is less accurate.
- AdaGrand and RMSprop: smart, adaptative learning rate schedule, based on the training itself, each weight gets updated individually through its own function
- Adam: built on top of AdaGrad/RMSprop to include [[Momentum]]. It's very fast and efficient.
