A.K.A. CRNG 

[[Programming Language]]s don't have a real way to generate true random values, so this is just a technique to do something close.

All that happens is that you pick a starting value – the seed – and a number to use as the [[generator]].

To get the next random value you multiply the seed by the generator and take the answer mod “a large value” `a(i+1)=K*a(i) MOD P` where K is the generator and a(i+1) is the next random number.

P is usually chosen to be a large power of 2 to make the arithmetic easy and K is picked, using some basic requirements and hand tuning to give a good pseudo random sequence.

The resulting value is suitably pseudo random as long as K is well chosen and it is difficult to predict the next value given any number of earlier values. In fact given a small sample of the output of a CRNG it is possible, by solving some linear equations, to work out the generator, and hence predict the entire sequence but for most purposes this doesn’t matter. In a security application it most certainly matters but if you are just using the random numbers for simulation or for games then the fact that a complex mathematical procedure can be used to predict the next number isn't relevant.