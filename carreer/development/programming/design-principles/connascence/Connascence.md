A #concept  that indicates when two pieces of [[Code]] must change together for the [[software]] to keep working [[correctness|correctly]], for the sake of [[Maintainability]]. It can be [[Static Connascence|Static]] or  [[Dynamic Connascence|Dynamic]].

- **Degree of explicitness**: the more explicit a connascence form is, the weaker it is. It has to do with size of imnpact.
- **Locality**: connascence across encapsulation boundaries is much worse than connascence between elements inside the same encapsulation boundary. As the distance between software elements increases, the forms of connascence should be weaker.
- **Strenght**: The more implicit a form of connascence is, the more time consuming and costly it is to detect. Also, a stronger form of connascence is usually harder to refactor. Following this idea, we find that stronger forms of connas1. Minimize overall connascencse by breking the system into modulescence are harder to detect and/or refactor. Static ones are weaker than dynamic ones.