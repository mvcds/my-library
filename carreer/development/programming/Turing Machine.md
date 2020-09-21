An abstract machine which manipulates symbols on a strip of tape according to a table of rules.

The machine operates on an infinite memory tape divided into discrete "cells". The machine positions its "head" over a cell and "reads" or "scans" the symbol there. Then, as per the symbol and the machine's own present state in a "finite table" of user-specified instructions, the machine

1. writes a symbol (e.g., a digit or a letter from a finite alphabet) in the cell (some models allow symbol erasure or no writing), then
2. either moves the tape one cell left or right (some models allow no motion, some models move the head then
3. (as determined by the observed symbol and the machine's own state in the table) either proceeds to a subsequent instruction or halts the computation.