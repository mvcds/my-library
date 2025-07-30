![[tensor-flow.png]]

A library to do [[Machine Learning|ML]].

> Nodes in the [[Graph]] represent [[Maths|mathematical]] operations, while the graph edges represent the multidimensional data arrays ([[Tensor]]s) communicated between them

![[tensor-flow-files.png]]

(B is an input which is bed to a function, D is the target that we compare to adjust the [[weight|weights]] and [[carreer/development/artificial-intelligence/Bias|Biases]])

Files:

- Placeholder: each iteration fills the placeholders with the correct parameters
- Variables: preserve their [[my-library/carreer/development/Value|values]] across generations, used for weights and [[carreer/development/artificial-intelligence/Bias|Biases]]. `global_variables_initializer()` is the function to initialize them
- Matmul: where math operations happen

---

In TensorFlow training happens in sessions
