---
aliases:
  - Sparse Indexes
  - Sparse Indice
---
A kind of [[Index]] that automatically excludes missing or `null` fields

|id|email|
|---|---|
|1|[a@test.com](mailto:a@test.com)|
|2|NULL|
|3|[b@test.com](mailto:b@test.com)|
|4|NULL|
If the index is on the `email`, selecting would only get us user 1 and 3 because they have [[carreer/development/Value|Value]] on that field