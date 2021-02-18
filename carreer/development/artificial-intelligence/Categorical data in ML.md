![[categorical-data-in-ml.png]]

To help with [[Machine Learning|ML]], if we associate a number to the [[data]], we could assume wrongly that the numbers relate to some order[^1].

To encode this in a more non-numeric way, we can create new columns to extract information from.

How to encode data:
- One-hot encoding: each new column is either 0 or 1 answering "is this such thing?" `is this bread`, this will make a single option available "per line" making categories unrelated and unequivocal = but this is not good for  large varieties of categories
- Binary encoding: each new column is a bit of the number in binary, this comes with problems because `1 => 01` seems to be the opposite of `2 => 10` when "opposites" in categories don't make sense = but this is good for large varieties of categories as binaries tend to be small

![[one-hot-encoding.png]]

![[binary-encoding.png]]

[^1]: [[Numerical vs Categorical Values]]