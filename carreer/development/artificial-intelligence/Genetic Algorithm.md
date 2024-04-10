> A search [[heuristic]] that is inspired by [[Charles Darwin]]’s theory of natural evolution. This [[algorithm]] reflects the process of [[natural selection]] where the fittest individuals are selected for reproduction in order to produce offspring of the next generation.

#quote in https://towardsdatascience.com/introduction-to-genetic-algorithms-including-example-code-e396e98d8bf3

Five phases are considered in a genetic algorithm.

#  Initial Population
![[genetic-algorithm-population.png]]

The process begins with a set of individuals which is called a [[Population]]. Each individual is a solution to the problem you want to solve.

An individual is characterized by a set of parameters (variables) known as [[Gene]]s. Genes are joined into a string to form a [[Chromosome]] (solution) - therefore the solution and the chromosome are synonyms 

The set of genes of an individual is represented using a [[string]], in terms of an alphabet. Usually, binary [[my-library/carreer/development/Value|values]] are used (string of 1s and 0s). We say that we encode the genes in a chromosome.

# [[Fitness Function]]

The probability that an individual will be selected for reproduction is based on its [[Fitness Score]]

# Selection

The idea of selection phase is to select the fittest individuals and let them pass their genes to the next generation.

Two pairs of individuals (parents) are selected based on their fitness scores. Individuals with high fitness have more chance to be selected for reproduction.

# Crossover

For each pair of parents to be mated, a [[crossover point]] is chosen at [[random]] from within the genes.

![[genetic-algorithm-crossover.png]]
![[genetic-algortithm-exchange.png]]

[[Offspring]] are created by exchanging the genes of parents among themselves until the crossover point is reached.

# Mutation

In certain new offspring formed, some of their genes can be subjected to a mutation with a low random probability. This implies that some of the bits in the bit string can be flipped.

Mutation occurs to maintain diversity within the population and prevent premature convergence.

# Termination

The algorithm terminates if the population has converged (does not produce offspring which are significantly different from the previous generation). Then it is said that the genetic algorithm has provided a set of solutions to our problem.

# Comments

- The population has a fixed size. As new generations are formed, individuals with 
least fitness die, providing space for new offspring.
- The sequence of phases is repeated to produce individuals in each new generation which are better than the previous generation.