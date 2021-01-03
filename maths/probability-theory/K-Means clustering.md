A process to create find [[Centroid]]s which is biased on where the seeds are initialized.

Choosing how many clusters will exist is very important, as well as if data should be [[Standartization|standarized]] or not. 

Steps

- Choose how many clusters you want to make (the `K`)
- Assign cluster seeds in semi-random positions, based on how the data is spread
- Assign each point to the closed seed
- Adjust the seeds' position of seed to the center of the points
- Repeat 2 last steps until the seeds don't move anymore
- Promote the seeds to centroids.